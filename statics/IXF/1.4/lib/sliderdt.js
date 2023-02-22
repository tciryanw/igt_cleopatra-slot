// Manaages a DOM skeleton that looks like this (or similar)
// 	<div id="slider">
// 		<div id="content">
// 			<button id="deactivate">Close</button>
// 		</div>
// 		<div id="activateContainer"><span id="activate">Activate</span></div>
// 	</div>
//
// For the above DOM call like this during bridgeReady:
//  com.igt.console.slider(
//   event.bridge,
//   document.getElementById('slider'),
//   document.getElementById('activate'),
//   document.getElementById('deactivate')
//  );
//
//  Content that overlaps the game and is (almost) always visible
//
//   The last child element of the slider div will overlap the game
//
//   You can add and remove content that overlaps the game by calling the addOverlappingPanel and removeOverlappingPanel functions
//
//   Content added here will not be visible when a popup is active
//
//  Popup messages and forms
//
//   You can show and hide message boxes, or interactive forms by calling the showPopup and hidePopup functions
//
//   While a popup is visble all content in the slider, and overlapping content is hidden.
//
//   When the visible popup is hidden, the slider is restored to it's previous state.
//
// Fullscreen popup messages
//
//  When a popup is shown using this API, the console will be resized to cover the entire game.
//
//  NOTE: this will prevent the player from interacting with the game. It should be used with caution.
//
//  In all other respects it is identical to the showPopup/hidePopup API
//
com.igt.extern('console.slider');
com.igt.console.slider = function(bridge, elSlider, elActivate, elDeactivate) {
    var gameStarted = 0;
    var enabled = 0; //The console can be activated by the player
    var active = 0; //The console is currently open
    var activating = 0; //set when the consol is in the process of actiavting
    var deactivating = 0; //set when the console is in the process of deactivating
    var fullScreenPopup = 0; //if a fullScreenPoup is currently visible set to it's root node
    var inFullscreen = false;

    var overlappingGameContainer = elSlider.lastElementChild;

    var transitionEventMap = {
        webkitTransition: 'webkitTransitionEnd',
        mozTransition: 'mozTransitionEnd',
        msTransition: 'MSTransitionEnd',
        transition: 'transitionend'
    };

    var popups = [];

    //iterate and return the best match
    var transitionStyleName = Object.keys(transitionEventMap).reduce(function(r, v) {
        if (v in document.body.style) {
            return v;
        }
        return r;
    }, null);
    var transitionEndEventName = transitionEventMap[transitionStyleName];

    elSlider.addEventListener(transitionEndEventName, function() {
        //just becoming active
        if (deactivating) {
            overlappingGameContainer.style.display = '';
            bridge.console.activate(overlappingGameContainer.offsetHeight + 'px');
            deactivating = 0;
            bridge.console.resume();
        } else {
            elDeactivate.style.display = '';
        }
        elSlider.style[transitionStyleName] = '';
    });

    //@todo the show and hide methods should be overridable
    function showConsole() {
        if (enabled && !active && !activating) {
            activating = 1;
            overlappingGameContainer.style.display = 'none';
            elDeactivate.style.display = 'none';
            bridge.console.activate(elSlider.offsetHeight + 'px');
            active = 1;
        }
    };

    function hideConsole() {
        //if a popup is active then no need to slide out, just set the right size and inform the game
        if (popups[0]) {
            unstackPopup();
            elSlider.style.top = '0px'; //-content.offsetHeight + 'px'; //slide up
            overlappingGameContainer.style.display = '';
            //elDeactivate.style.display='';
            if (inFullscreen) {
                bridge.console.activate('100%');
            } else {
                bridge.console.activate(overlappingGameContainer.offsetHeight + 'px');
            }
            active = 0;
            //otherwise if active and not mid-slide out start sliding out
        } else if (active && !deactivating) {
            elDeactivate.style.display = 'none';
            deactivating = 1;
            elSlider.style[transitionStyleName] = 'top .2s linear';
            elSlider.style.top = '0px'; //-content.offsetHeight + 'px'; //slide up
            active = 0;
            //remove focus so the keyboard disappears. Doesn't work though :(
            document.activeElement && document.activeElement.blur();
        }
    }

    function enableConsole(enable) {
        enabled = enable;
        elActivate.className = enabled ? 'enabled' : 'disabled';
    }

    function updateLayout() {

        reservedArea.updateLayout();

        if (popups[0]) {
            if (popups[0].fullscreen) {
                bridge.console.activate('100%');
            } else {
                bridge.console.activate(popups[0].element.offsetHeight + 'px');
            }
        } else if (enabled && active) {
            elSlider.style.display = '';
            bridge.console.activate(elSlider.offsetHeight + 'px');
        } else if (gameStarted) {
            //there si a minor bug here after an orientation change
            elSlider.style.display = '';
            elSlider.style.top = '0px'; //-content.offsetHeight + 'px'; //showing+hiding is problematic for multipart
            //bridge.console.activate((reservedArea.getHeight() + document.getElementById('content').offsetHeight) + 'px'); //fix for SKATE-871
            bridge.console.activate(Math.max(reservedArea.getHeight(), document.getElementById('content').offsetHeight) + 'px'); //fix for SKATE-871
        } else {
            document.getElementById('content').style.height = '';
            bridge.console.activate(0);
        }
    }

    function displayPopup(popup) {
        if (!popup.element.parentElement) {
            document.body.appendChild(popup.element);
        } else {
            popup.element.style.display = 'block';
        }
        //TODO should be undone by the last hide
        elSlider.style.display = 'none';
        if (popup.fullscreen) {
            inFullscreen = true;
            bridge.console.activate('100%');
        } else {
            bridge.console.activate(popup.element.offsetHeight + 'px');
        }
    }

    function undisplayPopup(popup) {
        document.activeElement && document.activeElement.blur();
        if (popup.discard) {
            document.body.removeChild(popup.element);
        } else {
            popup.element.style.display = 'none';
        }
        inFullscreen = false;
    }

    function stackPopup(popupElement, fullscreen) {
        if (fullscreen === void(0)) { //SKATE-1066, Let's give all popups fullscreen blocking priority
            fullscreen = true;
        }
        var popup = {
            element: popupElement,
            discard: !popupElement.parentElement,
            fullscreen: fullscreen
        };

        //if there is a popup currently, hide it
        if (popups.length) {
            undisplayPopup(popups[0]);
        }
        displayPopup(popup);
        //add the new popup to the stack
        popups.unshift(popup);
    }

    function unstackPopup() {
        var popup = popups.shift();

        if (popup) {
            undisplayPopup(popup);
        }
        if (popups.length) {
            displayPopup(popups[0]);
        }
        updateLayout();
        return popup;
    }

    function showFullScreenPopup(popup) {
        stackPopup(popup, true);
    }

    function hideFullScreenPopup() {
        unstackPopup();
    }

    //overlapping content, where the activate button usually lives
    function addOverlappingPanel(panel) {
        overlappingGameContainer.appendChild(panel);
    }

    function removeOverlappingPanel(panel) {
        overlappingGameContainer.removeChild(panel);
    }

    elActivate.addEventListener(document.body.ontouchstart ? 'touchstart' : 'mousedown', showConsole);
    elDeactivate.addEventListener(document.body.ontouchstart ? 'touchstart' : 'mousedown', hideConsole);

    var reservedArea = (function() {

        //reservedArea, where almost always visible content lives
        var elReservedContainer;

        function addPanel(element) {
            //create the container if it does not exist already
            if (!elReservedContainer) {
                elReservedContainer = document.createElement('div');
                elReservedContainer.style.position = 'absolute';
                elReservedContainer.style.boxSizing = 'border-box';
                elReservedContainer.style.width = '100%';
                elReservedContainer.id = 'reservedContainer';
                if (!gameStarted) {
                    elReservedContainer.style.visibility = 'hidden';
                }
                //add to the start of the doc, so it stacks behind the slider and any displayed form
                document.body.insertBefore(elReservedContainer, document.body.children[0] || null);
            }
            elReservedContainer.appendChild(element);
            updateLayout();
        }

        function removePanel(element) {
            elReservedContainer.removeChild(element);
            updateLayout();
        }

        function updateLayout() {
            if (elReservedContainer) {
                if (gameStarted) {
                    elReservedContainer.style.visibility = '';
                }
                if (reservedHeight) {
                    bridge.console.reserveSize(reservedHeight);
                } else {
                    bridge.console.reserveSize(elReservedContainer.offsetHeight + 'px');
                }
            }
        }

        var reservedHeight;

        //this function accepts units interpreted with respect to the parent frame...
        //pass undefined for auto height
        function overrideHeight(newCSSHeight) {
            reservedHeight = newCSSHeight;
        }

        function getHeight() { //SKATE-871+876 - we need the height to add it to the content already set
            return (elReservedContainer ? elReservedContainer.offsetHeight : 0 || 0);
        }

        return {
            addPanel: addPanel,
            removePanel: removePanel,
            updateLayout: updateLayout,
            overrideHeight: overrideHeight,
            getHeight: getHeight
        };

    }());


    window.addEventListener('resize', (function() {
        var resizeTimeout;

        return function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                updateLayout();
            }, 100);
        };
    }()));

    bridge.addEvents({
        consoleResized: function(_height) {
            if (activating) {
                elSlider.style[transitionStyleName] = 'top .2s linear';
                elSlider.style.top = 0; //slide down
                activating = 0;
            }
        },
        gameReady: function() {
            gameStarted = 1;
            enableConsole(1);
            updateLayout();
        },
        wagerIsStarting: function() {
            //TODO do you actually need this?
            //hidePopup();
            hideConsole();
            enableConsole(0);
            //need to test whether to wait for the console to minimise
            if (!deactivating) {
                bridge.console.resume();
            }
        },
        wagerIsComplete: function() {
            enableConsole(1);
            bridge.console.resume();
        },
        wagerIsAborted: function() {
            enableConsole(1);
            bridge.console.resume();
        },
        orientationchange: updateLayout
    });

    return {
        showConsole: showConsole,
        hideConsole: hideConsole,
        enableConsole: enableConsole,
        updateLayout: updateLayout,
        showPopup: stackPopup,
        hidePopup: unstackPopup,
        overlappingArea: {
            addPanel: addOverlappingPanel,
            removePanel: removeOverlappingPanel
        },
        reservedArea: reservedArea,
        showFullScreenPopup: showFullScreenPopup,
        hideFullScreenPopup: hideFullScreenPopup
    };
}