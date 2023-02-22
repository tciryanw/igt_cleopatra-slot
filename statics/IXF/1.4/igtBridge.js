//
//IGT console bridge v1.4
//
// © IGT 2016
//
(function() {
    var _fireEvent = function(_event) {
        return com.igt.mxf.fireEvent(_event, [].slice.call(arguments, 1));
    };

    var _getParentUrl = function(_scriptLocation) {
        var _url = (window.location != window.parent.location) ?
            document.referrer :
            _scriptLocation;
        return _url;
    };

    var _mxfReady = function(_thisScriptUrl) {
        com.igt.mxf.setMessageOrigin(
            window.parent, _thisScriptUrl //MXF can do this itself, on the server side. Except RP might screw it up...
        );

        var _event = document.createEvent('Event');
        _event.initEvent('com.igt.events.bridgeReady', false, false, null);
        _event.bridge = _interface;
        window.dispatchEvent(_event);
    };

    var _consoleReady = function() {
        _interface.addEvent = com.igt.mxf.addEvent;
        _interface.addOneShotEvent = com.igt.mxf.addOneShotEvent;
        _interface.addEvents = function() {
                com.igt.mxf.addEvents.apply(this, arguments);
            },
            _interface.console = {
                activate: function(_height) {
                    com.igt.mxf.sendMessage('consoleResize', _height);
                },
                navigate: function(url) {
                    window.parent.location = url;
                },
                resume: com.igt.mxf.resume,
                reserveSize: function(_cssLength) {
                    com.igt.mxf.sendMessage('reserveSize', _cssLength);
                },
                options: {
                    setSize: function(sizeInfo) {
                        com.igt.mxf.sendMessage('setOptions', {
                            setSize: {
                                width: sizeInfo.width,
                                height: sizeInfo.height
                            }
                        });
                    },
                    stakeDeduction: function(enable) {
                        com.igt.mxf.sendMessage('setOptions', {
                            stakeDeduction: !!enable
                        });
                    },
                    handleFullscreen: function(enable) {
                        com.igt.mxf.sendMessage('setOptions', {
                            handleFullscreen: !!enable
                        });
                    },
                    pinchZoomFixer: function(enable) {
                        com.igt.mxf.sendMessage('setOptions', {
                            pinchZoomFixer: !!enable
                        }); //default is 'on' if top document
                    }
                },
                relayMessage: function(messageData) {
                    com.igt.mxf.sendMessage('relayMessage', messageData);
                }

            };
        _interface.game = {
            pause: function(_bPause) {
                if (_bPause) {
                    com.igt.mxf.sendMessage('pauseGame');
                } else {
                    com.igt.mxf.sendMessage('unPauseGame');
                }
            },
            halt: function() {
                com.igt.mxf.sendMessage('haltGame');
            },
            stopAutospin: function() {
                com.igt.mxf.sendMessage('stopAutospin');
            }
        };

        _interface.removeEvent = com.igt.mxf.removeEvent;
        _interface.removeEvents = com.igt.mxf.removeEvents;
        _interface.commands = com.igt.mxf.commands;
        _interface.MXFflags = com.igt.mxf.MXFflags;
        _interface.doCommand = function(_command, _params) {
            com.igt.mxf.sendMessage('command', _command, _params);
        };
        /*
        _interface.sendMessage = function(_type, _params, _callback){
        	if(_callback && _callback instanceof Function){
        		com.igt.mxf.addOneShotEvent("resume", function(){
        			_callback.apply(null, arguments);
        		});
        	}
        	//com.igt.mxf.enableEvents(1);
        	com.igt.mxf.sendMessage(_type, _params);
        }
        */
        _interface.launchParameters = com.igt.mxf.launchParameters;

        _interface.addEvents({
            'currency': function(_config) {
                var _isoCode = _config['@currencyCode'];
                var _space = _config.MAJOR_SYMBOL_PADDING_SPACE == 'true' ? '\u00a0' : '';
                var _precision = parseInt(_config.DECIMAL_PRECISION);
                var _prefix = _config.MAJOR_SYMBOL_ALIGNMENT == 'left' ? _config.MAJOR_SYMBOL + _space : '';
                var _thousands = (_config.USE_THOUSANDS_SEPARATOR == 'yes' ? _config.THOUSANDS_SEPARATOR : '').replace('_', '\u00a0');
                var _suffix = _config.MAJOR_SYMBOL_ALIGNMENT == 'right' ? _space + _config.MAJOR_SYMBOL : '';
                var _decimal = (_precision ? _config.DECIMAL_SEPARATOR : '').replace('_', '\u00a0');

                function _format(_value, _short) {
                    var _currency;
                    var _pounds;
                    var _pence;
                    var _matches;
                    var _sign = '';

                    //force conversion to a number
                    _value = +_value;

                    //figure out sign (-0 is not less than 0)
                    if (_value < 0) {
                        _sign = '-';
                    }

                    _value = Math.abs(_value);
                    _currency = _value.toFixed(_precision).split('.');
                    _pounds = (+_currency[0]).toString();
                    _pence = _currency[1] || '';

                    if (_thousands)
                        while (_matches = _pounds.match(/^(\d+)(\d\d\d)(.*)$/))
                            _pounds = _matches[1].concat(_thousands, _matches[2], _matches[3]);

                    _short = _short && _pence == 0;
                    return _sign.concat(
                        _prefix,
                        _pounds,
                        _short ? '' : _decimal,
                        _short ? '' : _pence,
                        _suffix
                    );
                };

                _interface.currency = {
                    format: _format,
                    formatS: function(_value) {
                        return _format(_value, true);
                    },
                    formatL: function(_value) {
                        return _format(_value, false);
                    }
                };
            }
        });


        com.igt.mxf.sendMessage('consoleInitialised');
        //Tell the console everything has loaded using a custom event
        //make sure this method is called only once
        delete _interface._consoleReady;
    };

    //fetch the IXF script
    //wait for it to be ready
    //once it's ready handle init with the game

    (function() {
        var _script = document.createElement('script');
        //go find this in the DOM and figure out where it was loaded from...
        var _thisScriptUrl = Array.prototype.slice.apply(document.getElementsByTagName('script')).reduce(function(r, v) {
            if (v.src.match(/\/igtBridge\.js($|\?)/)) {
                return v.src;
            } else {
                return r; //SKATE-3702 - if igtBridge.js isn't last in the dom, the code explodes and load fails.
            } //Typically this can caused by some browser extensions (Grammarly for example)
        }, void 0);

        //CDN - SKATE-1393
        //By default the message target is the location igtBridge.js is loaded from
        //In a full CDN environment, only the root document isn't from the CDN (it's from the DB)
        //This will try and get that location using referrer and if it fails it'll fall back to the script's own URL
        var _parentTarget = _getParentUrl(_thisScriptUrl);

        if (!_thisScriptUrl) {
            throw new Error('Failed to find igtBridge script in the DOM');
        }

        _script.onload = function() {
            _mxfReady(_parentTarget);
            _script.onload = void 0;
        };
        _script.src = _thisScriptUrl.replace(/\/[^\/]+($|\?)/, '/IXF.js$1');
        document.body.appendChild(_script);
    })();

    //Create an augmentable public interface
    //Other functions get defined when consoleReady is called
    var _interface = {
        consoleReady: _consoleReady
    };

})();