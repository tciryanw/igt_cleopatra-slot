com.igt.extern('events');
com.igt.events = function(context, events) {
    'use strict';

    events = events.reduce(function(r, v) {
        r[v] = [];
        return r;
    }, {});


    function observe(event, handler) {
        var e = events[event];

        if (handler instanceof Function) {
            if (e) {
                e.indexOf(handler) >= 0 || e.push(handler);
            } else {
                throw ('removeEventListener called with unknown event "' + event + '"');
            }
        } else {
            throw ('removeEventListener called with handler set to non-function');
        }
    };

    function unobserve(event, handler) {
        var e = events[event],
            i = e && e.indexOf(handler);

        if (handler instanceof Function) {
            if (e) {
                i >= 0 && e.splice(i, 1);
            } else {
                throw ('removeEventListener called with unknown event "' + event + '"');
            }
        } else {
            throw ('removeEventListener called with handler set to non-function');
        }
    };

    function dispatch(event) {
        var e = events[event],
            i, args = Array.prototype.slice.call(arguments, 1);

        if (e)
            for (i in e) {
                e[i].apply(context, args);
            } else {
                throw ('dispatchEvent called with unknown event "' + event + '"');
            }
    };

    return {
        publish: {
            observe: observe,
            unobserve: unobserve
        },
        protect: {
            observe: observe,
            unobserve: unobserve,
            dispatch: dispatch
        }
    };
};