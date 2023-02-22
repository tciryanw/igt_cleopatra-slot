if (typeof igt === 'undefined')
    igt = {};
if (typeof igt.keepalive === 'undefined')
    igt.keepalive = {};

(function() {

    this.igtKeepAlive = function() {
        if (!(this instanceof arguments.callee)) {
            return new igtKeepAlive();
        }

    }

    //Private Method
    this.callKeepAlive = function(keepAliveURL) {
        this.igtKeepAlive.prototype.echo("Calling Keep Alive URL: " + keepAliveURL);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", keepAliveURL, true);
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {

                } else {
                    igt.keepalive.igtKeepAlive.prototype.echo("Heartbeat error: " + xhr.statusText);
                }
            }
        };
        xhr.onerror = function(e) {
            igt.keepalive.igtKeepAlive.prototype.echo("Error: " + xhr.statusText);
        };
        xhr.send(null);
    }


    //Public Method
    this.igtKeepAlive.prototype.echo = function(message) {
        console.log("ECHO: " + message);
    }

    this.igtKeepAlive.prototype.startTimerKeepAlive = function(keepAliveURL, interval) {
        setInterval(function() {
            igt.keepalive.callKeepAlive(keepAliveURL);
        }, interval);
    }

    this.igtKeepAlive.prototype.startEventKeepAlive = function(keepAliveURL, ixfBridge) {
        ixfBridge.addEvents({
            wagerIsStarting: function() {
                ///Make the call here
                try {
                    //Make the call here
                    igt.keepalive.callKeepAlive(keepAliveURL);
                    ixfBridge.console.resume();
                } catch (err) {
                    console.log("Unable to call igt.keepalive.callKeepAlive " + keepAliveURL + " --- " + err);
                }
            },

            wagerIsComplete: function() {

            },

            register: function(IGTcontrol) {
                switch (IGTcontrol.type) {
                    case 'boolean':
                        break;
                    case 'list':
                        break;
                    case 'command':
                        try {
                            //Make the call here
                            igt.keepalive.callKeepAlive(keepAliveURL);
                        } catch (err) {
                            console.log("Unable to call igt.keepalive.callKeepAlive " + keepAliveURL + " --- " + err);
                        }
                        break;
                    case 'balance':
                        break;
                    default:
                }
            }
        });
    }

    this.igtKeepAlive.prototype.triggerKeepAlive = function(keepAliveURL) {
        igt.keepalive.callKeepAlive(keepAliveURL);
    }

}).call(igt.keepalive);