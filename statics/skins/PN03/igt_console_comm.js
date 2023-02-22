var loggingEnabled = true;

function logOutput(message) {
    if (loggingEnabled) {
        console.log(">>>>>" + "%c" + message, "background: #fdd");
    }
}

logOutput("IGT-PSU-SKB-HELPER JS V1.0.0");

var wrapperComm = new WrapperObject();
var msgIdEnum = msgIdEnum || {};
var gameBridge;
var gameBalanceControl;
var gamePaytableControl;
var gameHelpControl;
var gameSoundControl;
var lastOutcomeObject;

msgIdEnum = {
    RGS_CONSOLE_RESIZED: "rgs2custConsoleResized",
    RGS_ORIENTATION_CHANGED: "rgs2custOrientationChanged",
    RGS_WAGER_STARTED: "rgs2custWagerStarted",
    RGS_WAGER_OUTCOME: "rgs2custWagerOutcomeAvailable",
    RGS_WAGER_COMPLETE: "rgs2cWagerComplete",
    RGS_WAGER_ABORTED: "rgs2custWagerAborted",
    RGS_GAME_INIT: "rgs2custGameInit",
    RGS_GAME_LOADED: "rgs2custGameLoaded",
    RGS_GAME_ERROR: "rgs2custGameError",
    RGS_FUNDS_INSUFFICIENT: "rgs2custInsufficientFunds",
    RGS_TEST_MESSAGE: "rgs2custTestMessage",
    RGS_AUDIO_ENABLED: "rg2custAudioEnabled",
    RGS_REMOTE_HANDSHAKE: "rg2custHandshake",
    RGS_COMMAND_CLOSE_GAME: "rgs2custCloseGame",
    RGS_COMMAND_RELOAD_GAME: "rgs2custReloadGame",
    RGS_COMMAND_SWITCH_CASH: "rgs2custSwithToCashPlay",
    RGS_COMMAND_RELOAD_GIP: "rgs2custReloadGameInProgress",
    RGS_COMMAND_VIEW_HISTORY: "rgs2custViewHistory",
    RGS_COMMAND_NO_FUNDS: "rgs2custInsufficientFundsCommand",

    CUST_SIZE_CHANGED: "cust2rgsSizeChanged",
    CUST_BALANCE_UPDATED: "cust2rgsBalanceUpdated",
    CUST_GAME_CLOSE: "cust2rgsCloseGame",
    CUST_GAME_RELOAD: "cust2rgsReloadGame",
    CUST_GAME_SWITCHTOCASH: "cust2rgsShitchToCash",
    CUST_COMMAND_TOGGLE_PAYTABLE: "cust2rgsTogglePaytable",
    CUST_COMMAND_TOGGLE_HELP: "cust2rgToggleHelp",
    CUST_COMMAND_TOGGLE_SOUND: "cust2rgToggleSound"
};


function WrapperObject() {

    this.version = "1.0.2";

    this.init = function() {
        logOutput("Init function called");

        window.addEventListener("message", receivedMessage, false);
    };

    var sendMessage = function(message) {
        parent.parent.postMessage(message, "*");
    };

    this.getDataString = function(msgId, params) {
        var data = {
            Version: this.version,
            message: "",
            Params: ""
        };

        data.message = msgId;

        if (params != null) {
            data.Params = params;
        };
        return JSON.stringify(data);
    };


    var receivedMessage = function(message) {

        try {
            var data = JSON.parse(message.data);
        } catch (err) {
            return;
        }

        switch (data.message) {
            case msgIdEnum.CUST_SIZE_CHANGED:
                logOutput("Message received in IGT game console to resize from wrapper, nothing done");
                break;
            case msgIdEnum.CUST_GAME_CLOSE:
                logOutput("Message received in IGT game console to close the game");
                gameBridge.doCommand('closeGame');
                break;
            case msgIdEnum.CUST_GAME_RELOAD:
                logOutput("Message received in IGT game console to reload the game");
                gameBridge.doCommand('reloadGame');
                break;
            case msgIdEnum.CUST_GAME_SWITCHTOCASH:
                logOutput("Message received in IGT game console to reload the game");
                gameBridge.doCommand('switchToCashPlay');
                break;
            case msgIdEnum.CUST_COMMAND_TOGGLE_HELP:
                logOutput("Message received in IGT game console to toggle help");
                gameHelpControl.setValue();
                break;
            case msgIdEnum.CUST_COMMAND_TOGGLE_PAYTABLE:
                logOutput("Message received in IGT game console to toggle paytable");
                gamePaytableControl.setValue();
                break;
            case msgIdEnum.CUST_COMMAND_TOGGLE_SOUND:
                logOutput("Message received in IGT game console to toggle sound");
                if (data.Params.toLowerCase() == 'true') {
                    gameSoundControl.setValue("0");
                } else {
                    gameSoundControl.setValue("1");
                }
                //Call back the wrapper
                wrapperComm.gameEventReceived(msgIdEnum.RGS_AUDIO_ENABLED, data.Params);
                break;
            case msgIdEnum.CUST_BALANCE_UPDATED:
                logOutput("Message received in IGT game console to update balance");
                try {
                    var balance = (Number(data.Params)) / 100;
                    var balanceStr = balance.toString(); //TODO: Maybe use functionality from IXF to format
                    gameBalanceControl.setValue(balanceStr);
                } catch (err) {
                    logOutput(err);
                }

                break;
            default:
                logOutput("BUG Found");
        }
    };

    this.gameEventReceived = function(messageId, data) {
        try {
            logOutput("Sending Message -> " + messageId + ": " + data);
        } catch (err) {
            console.log(">>>>>" + "%c" + err, "background: #fdd");
        }
        sendMessage(this.getDataString(messageId, data));
    };
};

wrapperComm.init();

window.addEventListener('com.igt.events.bridgeReady',
    function(event) {
        gameBridge = event.bridge;
        gameBridge.consoleReady();

        wrapperComm.gameEventReceived(msgIdEnum.RGS_REMOTE_HANDSHAKE, "Handshake from IGT game console");
        //IGTbridge.commands.setHandlers
        gameBridge.commands.setHandlers({
            closeGame: function() {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_COMMAND_CLOSE_GAME, "");
                gameBridge.console.resume();
            },
            reloadGame: function() {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_COMMAND_RELOAD_GAME, "");
                gameBridge.console.resume();
            },
            gameInProgressReload: function(data) {
                //wrapperComm.gameEventReceived(msgIdEnum.RGS_COMMAND_RELOAD_GIP, data);
                gameBridge.console.resume();
            },
            insufficientFundsNotification: function(data) {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_COMMAND_NO_FUNDS, data);
                gameBridge.console.resume();
            }
        });

        // IGTbridge.addEvents
        //IGTbridge.console
        //IGTcontrol.addEvent
        gameBridge.addEvents({
            consoleResized: function(height) {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_CONSOLE_RESIZED, height);
            },
            beforeInitGame: function() {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_GAME_INIT, "");
                gameBridge.console.resume();
            },
            wagerIsStarting: function() {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_WAGER_STARTED, "");
                gameBridge.console.resume();
            },
            gameOutcome: function(gameOutcomeObj) {
                lastOutcomeObject = gameOutcomeObj;
                wrapperComm.gameEventReceived(msgIdEnum.RGS_WAGER_OUTCOME, gameOutcomeObj);
                gameBridge.console.resume();
            },
            wagerIsComplete: function() {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_WAGER_COMPLETE, lastOutcomeObject);
                gameBridge.console.resume();
            },
            wagerIsAborted: function() {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_WAGER_ABORTED, "");
                gameBridge.console.resume();
            },
            InsufficientFundsNotification: function() {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_FUNDS_INSUFFICIENT, "");
                gameBridge.console.resume();
            },
            displayMessage222: function(code, reference, nessage, options) {
                //TODO: Look into this to raise an error
                //msgIdEnum.RGS_GAME_ERROR
            },
            orientationchange: function() {
                //TODO: Move this to wiindow.orientation
                //msgIdEnum.RGS_ORIENTATION_CHANGED
            },
            gameLoadComplete: function() {
                //TODO: Figure out how to detect that the game is loaded
                //msgIdEnum.RGS_GAME_LOADED 
            }
        })

        //TODO: Check if this are ever called
        gameBridge.addEvents({
            language: function(data) {
                logOutput("LANGUAGE EVENT RECEIVED: " + data);
            },
            stake: function() {
                logOutput("STAKE EVENT RECEIVED");
            }
        });

        var onSoundChange = function(value) {
            logOutput("RECEIVED SOUND CHANGE: " + value);
            if (value == 1) {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_AUDIO_ENABLED, "false");
            } else {
                wrapperComm.gameEventReceived(msgIdEnum.RGS_AUDIO_ENABLED, "true");
            }

        }

        var onRegisterCall = function(gameControl) {
            logOutput("REGISTER CALL RECEIVED: " + gameControl.type + "-" + gameControl.name);

            switch (gameControl.type) {
                case 'command':
                    logOutput("COMMAND: " + gameControl.name);
                    switch (gameControl.name) {
                        case "paytable":
                            gamePaytableControl = gameControl;
                            break;
                        case "howToPlay":
                            gameHelpControl = gameControl;
                            break;
                        default:
                    }
                    break;
                case 'balance':
                    gameBalanceControl = gameControl;
                    break;
                case 'list':
                    if (gameControl.name == 'sound') {
                        gameSoundControl = gameControl;
                        gameSoundControl.addEvent('change', onSoundChange);
                    }
                default:

            }
        }
        gameBridge.addEvent('register', onRegisterCall);

    });