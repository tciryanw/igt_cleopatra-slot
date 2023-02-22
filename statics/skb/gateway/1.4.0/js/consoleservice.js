define("consoleservice/consoleconnector/MXF", ["require"], function(e) {
    return function() {
        var e = e || {};
        return e.igt = e.igt || {}, e.igt.mxf = function() {
            function n() {
                var e = window === top ? "game" : "console",
                    n = Array.prototype.slice.call(arguments);
                return n.unshift(m + " in " + e + " "), n
            }

            function t() {
                var e = n.apply(void 0, arguments);
                O && O.log(e, "MXF")
            }

            function i() {
                O ? O.error(n.apply(void 0, arguments), "MXF") : console.error.apply(console, n.apply(void 0, arguments))
            }

            function o(e) {
                try {
                    return JSON.parse(window.localStorage.getItem("com.igt.mxf." + e))
                } catch (e) {}
            }

            function r(e) {
                O = e
            }

            function s() {
                (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
            }

            function a() {
                window.removeEventListener("message", D), window.top === window && window.removeEventListener("message", N), window.removeEventListener("beforeunload", s)
            }
            var c, l, d, u, f, m = "com.igt.mxf:",
                p = {}.hasOwnProperty,
                g = function(e, n) {
                    for (var t in n) p.call(n, t) && (e[t] = n[t])
                },
                h = function(n) {
                    function t(e, n) {
                        var t = d[e] = d[e] || [];
                        return n instanceof Function ? t.indexOf(n) >= 0 || t.push(n) : i("MXF event handlers must be functions"), this
                    }

                    function o(e) {
                        for (var n in e) e.hasOwnProperty(n) && t.call(this, n, e[n]);
                        return this
                    }

                    function r(e, o) {
                        return o instanceof Function ? t.call(this, e, function t() {
                            o.apply(n, arguments), s(e, t)
                        }) : (i("MXF event handlers must be functions"), this)
                    }

                    function s(e, n) {
                        var t, i = d[e];
                        return i && (t = i.indexOf(n), t >= 0 && i.splice(t, 1), 0 === i.length && delete d[e]), this
                    }

                    function a(e) {
                        for (var n in e) e.hasOwnProperty(n) && s.call(this, n, e[n]);
                        return this
                    }

                    function c(t, i, o) {
                        return e.igt.mxf.eventHandle = o, d[t] && d[t].forEach(function(e) {
                            e.apply(n, i)
                        }), !!d[t]
                    }

                    function l(e) {
                        return d[e] && d[e].length || 0
                    }
                    var d = {};
                    this._addEvent = t, this._addEvents = o, this._addOneShotEvent = r, this._removeEvent = s, this._removeEvents = a, this._fireEvent = c, this._handlerCount = l
                },
                v = function(e) {
                    if (this.values && -1 === this.values.indexOf(e)) return i('Invalid value for  control "' + this.name + '": value "' + e + '" for is not in values'), 0;
                    if (this.closedInterval) {
                        if (!(e >= this.closedInterval[0])) return i('Invalid value for  control "' + this.name + '": value "' + e + '" is <= ' + this.closedInterval[0]), 0;
                        if (!(e <= this.closedInterval[1])) return i('Invalid value for  control "' + this.name + '": value "' + e + '" is >= ' + this.closedInterval[1]), 0
                    }
                    if (this.openInterval) {
                        if (!(e > this.openInterval[0])) return i('Invalid value for  control "' + this.name + '": value "' + e + '" is < ' + this.openInterval[0]), 0;
                        if (!(e < this.openInterval[1])) return i('Invalid value for  control "' + this.name + '": value "' + e + '" is > ' + this.openInterval[1]), 0
                    }
                    return 1
                },
                y = function(e) {
                    var n, t = JSON.parse(JSON.stringify(e)),
                        o = function(e) {
                            if (!t.enabled) return void i('New value "' + e + '" for disabled control "' + t.name + '" ignored');
                            v.call(t, e) && L("control", t.name, "change", [].slice.call(arguments, 0))
                        };
                    n = new h(e), n._addEvent("enable", function(e) {
                        t.enabled = !!e
                    }), this._fireEvent = n._fireEvent, g(e, {
                        setValue: o,
                        addEvent: n._addEvent,
                        addEvents: n._addEvents,
                        addOneShotEvent: n._addOneShotEvent,
                        removeEvent: n._removeEvent,
                        removeEvents: n._removeEvents
                    })
                },
                C = {
                    _float: function(e) {
                        return parseFloat(e) || 0
                    },
                    _int: function(e) {
                        return parseInt(e, 10) || 0
                    },
                    _list: function(e) {
                        return e.split(",")
                    },
                    _nameize: function(e, n) {
                        var t, i = {},
                            o = e.length;
                        for (n = n || "@name"; --o >= 0;) t = e[o], i[t[n]] = t, delete t[n];
                        return i
                    },
                    _arrayize: function(e) {
                        return e instanceof Array ? e : void 0 !== e ? [e] : []
                    }
                },
                b = function(e) {
                    L("currency", e.config), delete e.config, c = e
                },
                w = [],
                E = 1,
                I = new h,
                S = {},
                M = {
                    wagerIsStarting: function(e) {
                        L("wagerStarted", e)
                    },
                    updateParams: function(e) {
                        L("afterUpdateParams", e)
                    },
                    wagerIsComplete: function() {
                        L("wagerComplete")
                    },
                    wagerIsAborted: function() {
                        L("wagerAborted")
                    },
                    insufficientFundsNotification: function() {
                        L("resume")
                    },
                    viewAccountHistory: function(e) {
                        L("resume", e)
                    },
                    requestHelp: function(e) {
                        L("resume", e)
                    },
                    displayMessage: function(e, n) {
                        L("resume", e, n)
                    },
                    command: function(e) {
                        L("resume")
                    },
                    gameOutcome: function() {
                        L("afterGameOutcome")
                    },
                    demoOutcome: function() {
                        L("afterDemoOutcome")
                    },
                    beforeInitGame: function(e) {
                        L("resume", e)
                    },
                    config: function() {
                        L("resume")
                    }
                },
                x = new function(e) {
                    var e = (e || location.search).substring(1);
                    e && e.split("&").map(function(e) {
                        e = e.split("="), this[decodeURIComponent(e[0])] = decodeURIComponent(e[1])
                    }, this)
                };
            Object.freeze && Object.freeze(x);
            var O, T = function(e) {
                    var n = document.createElement("a");
                    return n.setAttribute("href", e), n
                },
                B = function(e) {
                    if (e = "string" == typeof e ? T(e) : e, e.origin) return e.origin;
                    var n = e.protocol + "//" + e.hostname + ":" + e.port;
                    return 0 === e.href.indexOf(n) ? n : (n = e.protocol + "//" + e.hostname, 0 === e.href.indexOf(n) ? n : void console.error("Could not construct an origin from " + JSON.stringify(e)))
                },
                _ = function(e, n) {
                    var t = e,
                        i = B(n);
                    return w.push({
                        window: t,
                        origin: i
                    }), this
                },
                L = function(e) {
                    var n = JSON.stringify(Array.prototype.slice.call(arguments));
                    t("sending", n);
                    try {
                        for (var o in w) w[o].origin && w[o].window.postMessage(m + n, w[o].origin)
                    } catch (e) {
                        i(e)
                    }
                },
                P = function(e, n) {
                    t("relaying", n);
                    try {
                        for (var o in w) w[o].window !== e && w[o].window.postMessage(n, w[o].origin)
                    } catch (e) {
                        i(e)
                    }
                },
                z = function(e) {
                    var n = Array.prototype.slice.call(arguments),
                        o = n.pop(),
                        r = JSON.stringify(n);
                    t("sending", r);
                    try {
                        o.source.postMessage(m + r, o.origin)
                    } catch (e) {
                        i(e)
                    }
                },
                A = Object.freeze(["afterGameOutcome", "afterDemoOutcome", "reserveSize", "haltGame", "pauseGame", "unPauseGame", "stopAutospin"]),
                N = function(e) {
                    for (var n = !1, t = window; t !== window.top && !n;)(t = t.parent) === e.source && (n = !0);
                    if (n) {
                        var i = e.data;
                        w.forEach(function(e) {
                            L("portalMessage", i)
                        })
                    }
                },
                D = function(e) {
                    var n, o, r = 0 === w.length;
                    if (w.forEach(function(n, t) {
                            n.origin === e.origin && (r = !0)
                        }), r && "string" == typeof e.data && !e.data.hasOwnProperty("postal")) {
                        t("recieved", e.data), n = e.data.substr(m.length);
                        try {
                            n = JSON.parse(n)
                        } catch (e) {
                            return void i(e)
                        }
                        if (o = n.shift(), !E && -1 === A.indexOf(o)) return void i(" message " + n + " is not allowed during a wager and was ignored ", e.data);
                        M[o] && I._handlerCount(o) && (l && i(d + " handlers for " + u + " have not completed"), t('"' + o + '" has ' + d + " event handlers"), u = o, l = M[o], d = I._handlerCount(o), f = void 0);
                        switch (o) {
                            case "relayMessage":
                                P(e.source, e.data);
                                break;
                            case "register":
                                S[n[0].name] ? i("Control " + n[0].name + " is already registered") : S[n[0].name] = new y(n[0]);
                            default:
                                !I._fireEvent(o, n, e) && M[o] && M[o]()
                        }
                    }
                },
                R = function(e) {
                    t('resume called for "' + u + '" with action "' + e + '"'), null != e && (f = e), --d <= 0 && (t('resuming game after "' + u + '" with final action "' + f + '"'), l && l(f), l = void 0, f = void 0)
                },
                F = function() {
                    var e = {};
                    return I._addEvent("command", function(n) {
                        var t = e[n];
                        t ? t.apply(void 0, Array.prototype.slice.call(arguments, 1)) : R()
                    }), {
                        setHandler: function(n, t) {
                            e[n] = t
                        },
                        unsetHandler: function(n) {
                            delete e[n]
                        },
                        setHandlers: function(n) {
                            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
                        },
                        unsetHandlers: function(n) {
                            for (var t in n) n.hasOwnProperty(t) && delete e[t]
                        }
                    }
                }();
            I._addEvent("orientationchange", function(e) {
                var n = document.createEvent("HTMLEvents");
                window.orientation = e, n.initEvent("orientationchange", 1, 1), (window.dispatchEvent || document.dispatchEvent)(n)
            }), I._addEvent("control", function(e) {
                var n = [].slice.call(arguments, 1),
                    t = S[e];
                t || i('"' + e + '" is not a registered control'), t._fireEvent.apply(void 0, n)
            });
            var k = function(e) {
                    function n(n, o, a) {
                        if (n) {
                            var c = e.value;
                            e.values.forEach(function(e) {
                                e == c && (c = e)
                            }), r._fireEvent("change", [a]), i = o, t = {
                                _event: "change",
                                _args: [c]
                            }
                        } else t ? (e.values.forEach(function(n) {
                            Number(n) === Number(t._args) && (e.value = n)
                        }), r._fireEvent(t._event, t._args)) : (e.values.forEach(function(n) {
                            Number(n) === Number(e.value) && (e.value = n)
                        }), r._fireEvent("change", [e.value])), i = void 0, t = void 0;
                        s = n
                    }
                    var t, i, o, r = new h(e),
                        s = !1,
                        a = function(n, t) {
                            switch (n) {
                                case "enable":
                                    e.enabled = t[0]
                            }
                            L("control", e.name, n, t)
                        },
                        c = function(e, n, t) {
                            return n.addEvent(t, function() {
                                a.call(void 0, e, [].slice.call(arguments, 0))
                            }), this
                        },
                        l = function(n, o) {
                            switch (n) {
                                case "change":
                                    if (["patternsBet", "coinValue", "betPerPattern"].indexOf(e.name) >= 0) return;
                                    if (!e.enabled || !v.call(e, o[0])) return;
                                    e.value = o[0]
                            }
                            s ? (t = {
                                _event: n,
                                _args: o
                            }, i && i(n, o)) : r._fireEvent(n, o)
                        },
                        d = function() {
                            return o || (o = a, this._sendEvent = a = function(e) {
                                "change" !== e && o.apply(this, arguments)
                            }), this
                        };
                    return S[e.name] = {
                        _control: e,
                        _fireEvent: l
                    }, ["patternsBet", "coinValue", "betPerPattern"].indexOf(e.name) < 0 && L("register", e), g(e, {
                        sendEvent: a,
                        linkEvent: c,
                        addEvent: r._addEvent,
                        addEvents: r._addEvents,
                        addOneShotEvent: r._addOneShotEvent,
                        removeEvent: r._removeEvent,
                        removeEvents: r._removeEvents,
                        ignoreChange: d,
                        bypassControl: n
                    }), e
                },
                G = function(e, n) {
                    var t, i = {},
                        o = {
                            Balances: function() {
                                var e = {
                                    Balance: {}
                                };
                                return this.Balance && C._arrayize(this.Balance).forEach(function(n) {
                                    e.Balance[n["@name"]] = {
                                        amount: C._float(n["#text"]),
                                        formattedAmount: c.format(n["#text"])
                                    }
                                }), e || {}
                            },
                            TransactionId: function() {
                                return this
                            },
                            dTransactionId: function() {
                                return this
                            },
                            dSessionId: function() {
                                return this
                            },
                            dActionIds: function() {
                                return {
                                    dActionId: this && this.dActionId ? this.dActionId : ""
                                }
                            },
                            OutcomeDetail: function() {
                                return {
                                    TransactionId: this.TransactionId ? this.TransactionId : "",
                                    Balance: C._float(c.toCurrency(this.Balance)),
                                    Payout: C._float(c.toCurrency(this.Payout)),
                                    Pending: C._float(c.toCurrency(this.Pending)),
                                    Settled: C._float(c.toCurrency(this.Settled)),
                                    GameStatus: this.GameStatus ? this.GameStatus : "",
                                    NextStage: this.NextStage ? this.NextStage : "",
                                    Stage: this.Stage ? this.Stage : ""
                                }
                            },
                            PromotionalFreeSpin: function() {
                                var e = {
                                    count: C._int(this["@count"]),
                                    gip: "true" === this["@gip"]
                                };
                                return this["@cumulativeWin"] && (e.cumulativeWin = C._float(this["@cumulativeWin"]), e.formattedCumulativeWin = c.format(this["@cumulativeWin"])), e
                            },
                            Tournament: function() {
                                return {
                                    count: C._int(this["@count"]),
                                    multiplier: C._int(this["@multiplier"]),
                                    currentMultiplier: C._int(this["@currentMultiplier"])
                                }
                            },
                            CustomData: function() {
                                return this
                            },
                            JSONOutcome: function() {
                                var e = {},
                                    n = this;
                                return Array.isArray(n) || (n = [n]), n.forEach(function(n) {
                                    "ODEResponse" === n["@name"] && (e = n["#text"])
                                }), {
                                    TransactionId: e.clientWagerId ? e.clientWagerId : ""
                                }
                            }
                        };
                    for (t in e) o[t] && (i[t] = o[t].call(e[t]));
                    i.JSONOutcome && i.OutcomeDetail && (i.OutcomeDetail.TransactionId = i.JSONOutcome.TransactionId), n ? L("demoOutcome", i) : L("gameOutcome", i)
                },
                H = function(e) {
                    E = !!e
                };
            window.addEventListener("message", D, !0), window.top !== window && window.addEventListener("message", N, !0), t("initialised and listening for messages"), window.top === window && window.addEventListener("com.igt.events.orientationchange", function(e) {
                L("orientationchange", e.orientation)
            }, !1), window.addEventListener("beforeunload", s);
            var U = {
                    addEvent: I._addEvent,
                    addEvents: I._addEvents,
                    addOneShotEvent: I._addOneShotEvent,
                    removeEvent: I._removeEvent,
                    removeEvents: I._removeEvents,
                    sendMessage: L,
                    sendReply: z,
                    enableEvents: H,
                    registerControl: k,
                    sendOutcome: G,
                    setCurrencyFormat: b
                },
                W = (I._addEvent, I._addEvents, I._addOneShotEvent, I._removeEvent, I._removeEvents, I._fireEvent, {
                    setMessageOrigin: _,
                    setCurrencyFormat: b,
                    sendOutcome: G,
                    getGameInterface: function() {
                        return delete W.getGameInterface, delete W.getBridgeInterface, U
                    },
                    getBridgeInterface: function() {
                        return delete W.getGameInterface, delete W.getBridgeInterface, U
                    },
                    addEvent: I._addEvent,
                    addEvents: I._addEvents,
                    addOneShotEvent: I._addOneShotEvent,
                    removeEvent: I._removeEvent,
                    removeEvents: I._removeEvents,
                    resume: R,
                    sendMessage: L,
                    sendReply: z,
                    setMessageOrigin: _,
                    enableEvents: H,
                    fireEvent: I._fireEvent,
                    registerControl: k,
                    commands: F,
                    MXFflags: o,
                    launchParameters: x,
                    setLogger: r,
                    unload: a
                });
            return W
        }(), e
    }
}), define("consoleservice/consoleconnector/MXFAdapter", ["require", "consoleservice/consoleconnector/MXF"], function(e) {
    "use strict";

    function n(e) {
        y("consoleInitialised", function(n) {
            e(n)
        }, z.length)
    }

    function t(e) {
        A = e
    }

    function i(e, n) {
        z = e.consoles, P = z[0];
        var t = 0,
            i = e.timeout(),
            r = {},
            s = function(e) {
                e && Object.keys(e).forEach(function(n) {
                    r[n] = e[n]
                }), ++t >= z.length && (clearTimeout(i), D.igt.mxf.removeEvent("consoleInitialised", s), z.forEach(function(e, n) {
                    D.igt.mxf.setMessageOrigin(e.childNodes[0].contentWindow, e.childNodes[0].src)
                }), n(r), G = !0)
            };
        z.length > 0 ? (D.igt.mxf.addEvent("consoleInitialised", s), z.forEach(function(e, n) {
            e.style.height = "0", e.childNodes[0].style.width = "100%", e.childNodes[0].style.height = "100%"
        })) : s(), D.igt.mxf.addEvents({
            consoleResize: function(e) {
                var n = window.event || D.igt.mxf.eventHandle;
                z.forEach(function(t) {
                    if (t.firstChild.contentWindow && t.firstChild.contentWindow === n.source) {
                        if (t.id && (0 === t.id.indexOf("L") || 0 === t.id.indexOf("R")) && t.firstChild.style.width !== e || t.firstChild.style.height !== e || t.id && (0 === t.id.indexOf("T") || 0 === t.id.indexOf("B")) && t.style.height !== e || t.id && (0 === t.id.indexOf("L") || 0 === t.id.indexOf("R")) && t.style.width !== e)
                            if (0 === e) {
                                if (t.id && H[t.id]) {
                                    var i = Math.max(parseInt(e), H[t.id].reserved);
                                    H[t.id].size !== i && (H[t.id].size = i, H.hasChanged = !0)
                                }!t.id || 0 !== t.id.indexOf("L") && 0 !== t.id.indexOf("R") ? (t.style.height = e, t.firstChild.style.height = e, t.firstChild.style.width = "1px", t.firstChild.style.minWidth = "100%") : (t.style.width = e, t.firstChild.style.width = e)
                            } else {
                                if (t.id && H[t.id]) {
                                    var i = Math.max(parseInt(e), H[t.id].reserved);
                                    H[t.id].size !== i && (H[t.id].size = i, H.hasChanged = !0)
                                }
                                if (!t.id || 0 !== t.id.indexOf("L") && 0 !== t.id.indexOf("R"))
                                    if (e.indexOf("%") >= 0) t.style.height = e, t.firstChild.style.height = "100%", t.style.overflow = "inherit";
                                    else {
                                        var o = P.parentElement.offsetHeight;
                                        0 === t.id.indexOf("T") ? o -= H.BCustomView.size : o -= H.TCustomView.size;
                                        var r = H[t.id].reserved;
                                        t.style.height = Math.min(o, Math.max(parseInt(r), parseInt(e))) + "px", t.firstChild.style.height = e, parseInt(e) > o ? t.style.overflowY = "scroll" : t.style.overflow = "inherit"
                                    }
                                else {
                                    if (e.indexOf("%") >= 0) t.style.width = e, t.firstChild.style.width = "100%", t.style.overflow = "inherit";
                                    else {
                                        var s = P.parentElement.offsetWidth;
                                        0 === t.id.indexOf("L") ? s -= H.RCustomView.size : s -= H.LCustomView.size, t.style.width = Math.min(s, parseInt(e)) + "px", t.firstChild.style.width = e, parseInt(e) > s ? t.style.overflowX = "scroll" : t.style.overflow = "inherit"
                                    }
                                    t.style.height = window.innerHeight - (H.TCustomView.reserved + H.BCustomView.reserved) + "px", t.firstChild.style.height = window.innerHeight - (H.TCustomView.reserved + H.BCustomView.reserved) + "px", t.style.top = H.TCustomView.reserved + "px"
                                }
                                H[t.id].reserved ? t.firstChild.style.minHeight = H[t.id].reserved + "px" : t.firstChild.style.minHeight = "0"
                            }
                        A && H.hasChanged && (A(H), H.hasChanged = !1)
                    }
                }), D.igt.mxf.sendReply("consoleResized", e, n)
            },
            reserveSize: function(e) {
                var n = window.event || D.igt.mxf.eventHandle,
                    t = parseInt(e);
                z.forEach(function(e) {
                    e.firstChild.contentWindow && e.firstChild.contentWindow === n.source && (U = t, e.id && H[e.id] && H[e.id].reserved !== t && (H[e.id].reserved = t, H.hasChanged = !0))
                }), A && H.hasChanged && (A(H), H.hasChanged = !1), D.igt.mxf.sendReply("reservedSize", t, n)
            },
            haltGame: o,
            pauseGame: function() {
                var e;
                F || (D.igt.mxf.enableEvents(1), e = P.style.height, F = !0, P.style.visibility = "visible", P.style.height = "100%", v("unPauseGame", function() {
                    P.style.height = e, F = !1, k && k(), k = !1
                }, z.length))
            }
        })
    }

    function o() {
        D.igt.mxf.enableEvents(1), R = !0, F = !0
    }

    function r(e) {
        return e instanceof Array ? e : e ? [e] : []
    }

    function s() {
        return F
    }

    function a() {
        return R
    }

    function c(e) {
        k = e
    }

    function l(e, n) {
        var t = JSON.parse(JSON.stringify(e));
        t.Buttons.Button && (t.Buttons = r(t.Buttons.Button)), y("resume", function(e, i) {
            t.Buttons[e] ? n(t.Buttons[e].Cmd, i) : n(null)
        }, z.length), D.igt.mxf.enableEvents(1), D.igt.mxf.sendMessage("displayMessage", t.Id, t.Reference, t.Message, Array.prototype.map.call(t.Buttons, function(e) {
            return e.Text
        }), t.extraInfo ? t.extraInfo : void 0)
    }

    function d(e, n) {
        y("resume", function(t) {
            n(e["@name"], e.Param, t)
        }, z.length), D.igt.mxf.sendMessage("command", e["@name"], e.Param)
    }

    function u(e, n, t) {
        D.igt.mxf.setCurrencyFormat({
            config: e.CURRENCY,
            toCurrency: n,
            format: t
        })
    }

    function f(e, n) {
        D.igt.mxf.sendOutcome(e, n)
    }

    function m() {}

    function p() {}

    function g(e, n) {
        D.igt.mxf.addEvent(e, n)
    }

    function h(e) {
        D.igt.mxf.addEvents(e)
    }

    function v(e, n) {
        D.igt.mxf.addOneShotEvent(e, n)
    }

    function y(e, n, t) {
        var i = t,
            o = [],
            r = function() {
                arguments && arguments.length > 0 && (o = arguments), 0 == --i && (D.igt.mxf.removeEvent(e, r), n.apply(this, o))
            };
        D.igt.mxf.addEvent(e, r)
    }

    function C(e, n) {
        D.igt.mxf.removeEvent(e, n)
    }

    function b() {}

    function w() {
        G && D.igt.mxf.resume.apply(null, arguments)
    }

    function E(e, n) {
        G && D.igt.mxf.sendMessage(e, n)
    }

    function I(e, n) {
        y("resume", function() {
            n()
        }, z.length), D.igt.mxf.enableEvents(1), E("config", e)
    }

    function S(e, n) {
        E("command", {
            "@name": e,
            Param: n
        })
    }

    function M() {}

    function x() {}

    function O(e) {
        return D.igt.mxf.registerControl(e)
    }

    function T() {}

    function B() {}

    function _() {
        z.forEach(function(e, n) {
            e.childNodes[0].style.visibility = "visible"
        })
    }

    function L() {
        z.forEach(function(e, n) {
            e.childNodes[0].style.visibility = "hidden"
        })
    }
    var P, z, A, N, D = e("consoleservice/consoleconnector/MXF")(),
        R = !1,
        F = !1,
        k = !1,
        G = !1,
        H = {
            TCustomView: {
                size: 0,
                reserved: 0
            },
            BCustomView: {
                size: 0,
                reserved: 0
            },
            LCustomView: {
                size: 0,
                reserved: 0
            },
            RCustomView: {
                size: 0,
                reserved: 0
            },
            hasChanged: !1
        },
        U = 0;
    return function() {
        return {
            init: n,
            setMessageOrigin: i,
            setCurrencyFormat: u,
            sendOutcome: f,
            sendConfig: I,
            getGameInterface: m,
            getBridgeInterface: p,
            addEvent: g,
            addEvents: h,
            addOneShotEvent: v,
            addNShotEvent: y,
            removeEvent: C,
            removeEvents: b,
            resume: w,
            sendMessage: E,
            sendCommand: S,
            enableEvents: M,
            fireEvent: x,
            registerControl: O,
            commands: T,
            MXFFlags: B,
            showMessage: l,
            doMessageCommand: d,
            show: _,
            hide: L,
            isGamePaused: s,
            isGameHalted: a,
            setUnPauseGame: c,
            setResizeCallback: t,
            haltGame: o,
            setLogger: function(e) {
                N = e, D.igt.mxf.setLogger(N)
            }
        }
    }
}), define("consoleservice/messagebox/ui/DOMDesktopStandardUI", ["require"], function(e) {
    function n(e) {
        if (!e) throw new Error("DOMStandardUI initialize error: config parameter required");
        if (!e.root) throw new Error("DOMStandardUI: create UI require root object in config parameter");
        if (!e.strings) throw new Error("DOMStandardUI: create UI require strings object in config parameter");
        e.strings.hasOwnProperty("errId") || (e.strings.errId = "errorid"), g = e.root, E = e.strings.errId, h = document.createElement("div"), h.classList.add("MB_overlay"), v = document.createElement("div"), v.classList.add("MB_messageBoxDiv"), y = document.createElement("div"), y.classList.add("MB_messageInfoDiv"), C = document.createElement("div"), C.classList.add("MB_errorIdDiv"), w = document.createElement("div"), w.classList.add("MB_supportInfoDiv"), v.appendChild(y), v.appendChild(w), b = document.createElement("div"), b.classList.add("MB_ButtonGroup"), b.appendChild(C), v.appendChild(b);
        var n = document.createElement("div");
        n.classList.add("MB_centering"), n.appendChild(v), h.appendChild(n), I = !0
    }

    function t(e, n) {
        var t = [];
        e && "Button" in e && (f(e.Button) ? t = e.Button : t.push(e.Button)), b.innerHTML = "", b.appendChild(C);
        var o, r, s, a, c;
        for (o = 0; o < t.length; o++) {
            r = t[o], a = "", "Cmd" in r && "@name" in r.Cmd && (a = r.Cmd["@name"], "Param" in r.Cmd && (c = r.Cmd.Param)), s = i(a, r.Text, c, n);
            var l = document.createElement("div");
            l.classList.add("MB_ButtonPositioner"), o === t.length - 1 && (s.classList.add("MB_FirstButton"), l.classList.add("MB_FirstPositioner")), l.appendChild(s), b.appendChild(l)
        }
    }

    function i(e, n, t, i) {
        var o;
        return o = document.createElement("div"), o.classList.add("MB_Button"), o = m(o), o.appendChild(document.createTextNode(n)), o.addEventListener("click", function(e, n) {
            return function t(r) {
                i && (setTimeout(function() {
                    i(e, n)
                }, 0), o.removeEventListener("click", t), l())
            }
        }(e, t)), o
    }

    function o(e, n) {
        if (!I) throw new Error("DOMStandardUI: not created");
        d(), y.innerHTML = e.Message.replace(/\n/g, "<br>"), e.SupportInfo ? (w.innerHTML = e.SupportInfo.Message.replace(/\n/g, "<br>"), e.SupportInfo.Email && e.SupportInfo.Email.replace && (w.innerHTML += "<br>" + e.SupportInfo.Email.replace(/\n/g, "<br>")), e.SupportInfo.PhoneNumber && e.SupportInfo.PhoneNumber.replace && (w.innerHTML += "<br>" + e.SupportInfo.PhoneNumber.replace(/\n/g, "<br>")), w.style.padding = "", w.style.visibility = "inherit") : (w.style.padding = "0", w.style.visibility = "hidden");
        var i = s(e),
            o = !0;
        i ? (C.style.visibility = "inherit", C.style.padding = "", x.indexOf(i) >= 0 ? C.innerHTML = i : -1 === M.indexOf(i) ? C.innerHTML = E + " " + i : (C.style.padding = "0", C.style.visibility = "hidden", o = !1)) : (C.style.padding = "0", C.style.visibility = "hidden", o = !1), t(e.Buttons, n), Array.isArray(e.Buttons.Button) && e.Buttons.Button.length % 2 == 0 ? (b.classList.remove("MB_errorInline"), b.classList.remove("MB_wideLast")) : o ? (b.classList.add("MB_errorInline"), b.classList.remove("MB_wideLast")) : (b.classList.add("MB_wideLast"), b.classList.remove("MB_errorInline"))
    }

    function r() {
        function e(n, t, i, o, a) {
            var c = parseFloat(n.style.maxWidth),
                l = parseInt(getComputedStyle(n).height),
                d = parseInt(getComputedStyle(n).width);
            if (t > 0 && c >= i || t < 0 && c <= i) return void((r < l || s < d) && function e(t) {
                var i = parseFloat(n.style.fontSize);
                i < t || (n.style.fontSize = i + o + "em", l = parseInt(getComputedStyle(n).height), d = parseInt(getComputedStyle(n).width), (r < l || s < d) && e(t))
            }(a));
            n.style.maxWidth = c + t + "em", l = parseInt(getComputedStyle(n).height), (r < l || s < d) && e(n, t, i, o, a)
        }
        var n = getComputedStyle(v),
            t = getComputedStyle(g),
            i = parseInt(n.height),
            o = parseInt(n.width),
            r = parseInt(t.height),
            s = parseInt(t.width);
        i >= r ? e(v, 3, 36, -.1, .6) : o >= s && e(v, -3, "90%", -.1, .6)
    }

    function s(e) {
        return e ? e.Reference ? e.Reference : e.Id ? e.Id : void 0 : ""
    }

    function a() {
        if (!I) throw new Error("DOMStandardUI: not created");
        g.contains(h) || g.appendChild(h), h.style.display = "block", S = !0, window.innerWidth > window.innerHeight ? h.classList.add("landscape") : h.classList.remove("landscape"), r(), h.style.visibility = "visible"
    }

    function c() {
        I && (h.style.display = "none", h.style.visibility = "hidden", S = !1)
    }

    function l() {
        c(), d()
    }

    function d() {
        v && (v.style.maxWidth = "26.5em", v.style.fontSize = "1.0em"), y && (y.innerHTML = ""), b && (b.innerHTML = ""), w && (w.innerHTML = ""), C && (C.innerHTML = "")
    }

    function u() {
        h.style.width = "100%", h.style.height = "100%", window.innerWidth > window.innerHeight ? h.classList.add("landscape") : h.classList.remove("landscape")
    }

    function f(e) {
        return Array.isArray(e)
    }

    function m(e) {
        return e.style["-webkit-user-select"] = "none", e.style["-moz-user-select"] = "none", e.style["-ms-user-select"] = "none", e.style["user-select"] = "none", e
    }

    function p(e) {
        e.specialErrorID && (M = e.specialErrorID), e.nonErrorIds && (x = e.nonErrorIds)
    }
    var g, h, v, y, C, b, w, E, I = !1,
        S = !1,
        M = [],
        x = [];
    return Object.freeze({
        create: function(e) {
            return n(e), this
        },
        update: function(e, n) {
            return o(e, n), this
        },
        show: a,
        resize: u,
        init: p
    })
}), define("consoleservice/messagebox/ui/DOMDesktopMiniUI", ["require"], function(e) {
    function n(e) {
        if (!e) throw new Error("DOMDesktopMiniUI initialize error: config parameter required");
        if (!e.root) throw new Error("DOMDesktopMiniUI: create UI require root object in config parameter");
        if (!e.strings) throw new Error("DOMDesktopMiniUI: create UI require strings object in config parameter");
        e.strings.hasOwnProperty("errId") || (e.strings.errId = "errorid"), g = e.root, E = e.strings.errId, h = document.createElement("div"), h.style.display = "none", h.style.position = "absolute", h.style.top = 0, h.style.left = 0, h.style.backgroundColor = "rgba(0, 0, 0, 0.4)", h.style.width = "100%", h.style.height = "100%", h.style.minHeight = "100%", h.style.textAlign = "center", h.style.fontFamily = "Arial, Helvetica, sans-serif", h.style.zIndex = 9999, v = document.createElement("div"), v.style.position = "relative", v.style.minWidth = "2.5em", v.style.maxWidth = "16.5em", v.style.backgroundColor = "rgba(255, 255, 255, 0.94)", v.style.margin = "0 auto", v.style.borderRadius = "15px", v.style.border = "2px solid black", v.style.boxShadow = "2px 2px 8px #000", v.style.fontSize = "0.9em", y = document.createElement("div"), y.style.margin = "0", y.style.padding = "1em 1em 0.5em 1em", y.style.fontWeight = "bold", y.style.fontSize = "1.0em", y.style.lineHeight = "1.5em", C = document.createElement("div"), C.style.fontWeight = "normal", C.style.fontSize = "0.9em", C.style.padding = "0em 1em 1em 1em", C.style.lineHeight = "1.5em", w = document.createElement("div"), w.style.fontWeight = "normal", w.style.fontSize = "0.9em", w.style.padding = "0.5em", w.style.borderTop = "1px solid rgb(212, 212, 212)", w.style.lineHeight = "1.2em", v.appendChild(y), v.appendChild(C), v.appendChild(w), b = document.createElement("div"), v.appendChild(b);
        var n = document.createElement("div");
        n.style.height = "inherit", n.style.width = "inherit", n.style.display = "box", n.style.display = "flex", n.style.display = "-webkit-box", n.style.display = "-moz-box", n.style.display = "-ms-flexbox", n.style.webkitBoxAlign = "center", n.style.webkitBoxPack = "center", n.style.MozBoxAlign = "center", n.style.MozBoxPack = "center", n.style.msFlexDirection = "column", n.style.msFlexAlign = "center", n.style.msFlexPack = "center", n.appendChild(v), h.appendChild(n), I = !0
    }

    function t(e, n) {
        var t = [];
        e && "Button" in e && (f(e.Button) ? t = e.Button : t.push(e.Button)), b.innerHTML = "";
        var o, r, s, a, c;
        for (o = 0; o < t.length; o++) r = t[o], a = "", "Cmd" in r && "@name" in r.Cmd && (a = r.Cmd["@name"], "Param" in r.Cmd && (c = r.Cmd.Param)), s = i(a, r.Text, c, n), b.appendChild(s)
    }

    function i(e, n, t, i) {
        var o;
        return o = document.createElement("div"), o.style.color = "#1b9ddb", o.style.padding = "1.0em", o.style.fontWeight = "bold", o.style.fontSize = "1.0em", o.style.borderTop = "1px solid #d4d4d4", o.style.cursor = "pointer", o = m(o), o.appendChild(document.createTextNode(n)), o.addEventListener("click", function(e, n) {
            return function t(r) {
                i && (setTimeout(function() {
                    i(e, n)
                }, 0), o.removeEventListener("click", t), l())
            }
        }(e, t)), o
    }

    function o(e, n) {
        if (!I) throw new Error("DOMDesktopMiniUI: not created");
        d(), y.innerHTML = e.Message.replace(/\n/g, "<br>"), e.SupportInfo ? (w.innerHTML = e.SupportInfo.Message.replace(/\n/g, "<br>"), e.SupportInfo.Email && e.SupportInfo.Email.replace && (w.innerHTML += "<br>" + e.SupportInfo.Email.replace(/\n/g, "<br>")), e.SupportInfo.PhoneNumber && e.SupportInfo.PhoneNumber.replace && (w.innerHTML += "<br>" + e.SupportInfo.PhoneNumber.replace(/\n/g, "<br>")), w.style.padding = "0.5em", w.style.visibility = "inherit") : (w.style.padding = "0", w.style.visibility = "hidden");
        var i = s(e);
        i && (x.indexOf(i) >= 0 ? C.innerHTML = i : -1 === M.indexOf(i) && (C.innerHTML = E + " " + i)), t(e.Buttons, n)
    }

    function r() {
        function e(n, t, i, o, a) {
            var c = parseFloat(n.style.maxWidth),
                l = parseInt(getComputedStyle(n).height),
                d = parseInt(getComputedStyle(n).width);
            if (t > 0 && c >= i || t < 0 && c <= i) return void((r < l || s < d) && function e(t) {
                var i = parseFloat(n.style.fontSize);
                i < t || (n.style.fontSize = i + o + "em", l = parseInt(getComputedStyle(n).height), d = parseInt(getComputedStyle(n).width), (r < l || s < d) && e(t))
            }(a));
            n.style.maxWidth = c + t + "em", l = parseInt(getComputedStyle(n).height), (r < l || s < d) && e(n, t, i, o, a)
        }
        var n = getComputedStyle(v),
            t = getComputedStyle(g),
            i = parseInt(n.height),
            o = parseInt(n.width),
            r = parseInt(t.height),
            s = parseInt(t.width);
        i >= r ? e(v, 3, 36, -.1, .6) : o >= s && e(v, -3, 16.5, -.1, .6)
    }

    function s(e) {
        return e ? e.Reference ? e.Reference : e.Id ? e.Id : void 0 : ""
    }

    function a() {
        if (!I) throw new Error("DOMDesktopMiniUI: not created");
        g.contains(h) || g.appendChild(h), h.style.display = "block", S = !0, r(), h.style.visibility = "visible"
    }

    function c() {
        I && (h.style.display = "none", h.style.visibility = "hidden", S = !1)
    }

    function l() {
        c(), d()
    }

    function d() {
        v && (v.style.maxWidth = "16.5em", v.style.fontSize = "0.9em"), y && (y.innerHTML = ""), b && (b.innerHTML = ""), w && (w.innerHTML = ""), C && (C.innerHTML = "")
    }

    function u() {
        h.style.width = "100%", h.style.height = "100%"
    }

    function f(e) {
        return Array.isArray(e)
    }

    function m(e) {
        return e.style["-webkit-user-select"] = "none", e.style["-moz-user-select"] = "none", e.style["-ms-user-select"] = "none", e.style["user-select"] = "none", e
    }

    function p(e) {
        e.specialErrorID && (M = e.specialErrorID), e.nonErrorIds && (x = e.nonErrorIds)
    }
    var g, h, v, y, C, b, w, E, I = !1,
        S = !1,
        M = [],
        x = [];
    return Object.freeze({
        create: function(e) {
            return n(e), this
        },
        update: function(e, n) {
            return o(e, n), this
        },
        show: a,
        resize: u,
        init: p
    })
}), define("consoleservice/messagebox/ui/DOMTabletMiniUI", ["require"], function(e) {
    function n(e) {
        if (!e) throw new Error("DOMTabletMiniUI initialize error: config parameter required");
        if (!e.root) throw new Error("DOMTabletMiniUI: create UI require root object in config parameter");
        if (!e.strings) throw new Error("DOMTabletMiniUI: create UI require strings object in config parameter");
        e.strings.hasOwnProperty("errId") || (e.strings.errId = "errorid"), v = e.root, S = e.strings.errId, y = document.createElement("div"), y.style.display = "none", y.style.visibility = "hidden", y.style.position = "absolute", y.style.top = 0, y.style.left = 0, y.style.backgroundColor = "rgba(0, 0, 0, 0.4)", y.style.width = "100%", y.style.height = "100%", y.style.minHeight = "100%", y.style.textAlign = "center", y.style.fontFamily = "Arial, Helvetica, sans-serif", y.style.zIndex = 9999, C = document.createElement("div"), C.style.position = "relative", C.style.minWidth = "2.5em", C.style.maxWidth = "16.5em", C.style.backgroundColor = "rgba(255, 255, 255, 0.94)", C.style.margin = "0 auto", C.style.borderRadius = "15px", C.style.border = "2px solid black", C.style.boxShadow = "2px 2px 8px #000", C.style.fontSize = "0.9em", b = document.createElement("div"), b.style.margin = "0", b.style.padding = "1em 1em 0.5em 1em", b.style.fontWeight = "bold", b.style.fontSize = "1.0em", b.style.lineHeight = "1.5em", w = document.createElement("div"), w.style.fontWeight = "normal", w.style.fontSize = "0.9em", w.style.padding = "0em 1em 1em 1em", w.style.lineHeight = "1.5em", I = document.createElement("div"), I.style.fontWeight = "normal", I.style.fontSize = "0.9em", I.style.padding = "0.5em", I.style.borderTop = "1px solid rgb(212, 212, 212)", I.style.lineHeight = "1.2em", C.appendChild(b), C.appendChild(w), C.appendChild(I), E = document.createElement("div"), C.appendChild(E);
        var n = document.createElement("div");
        n.style.height = "inherit", n.style.width = "inherit", n.style.display = "box", n.style.display = "flex", n.style.display = "-webkit-box", n.style.display = "-moz-box", n.style.display = "-ms-flexbox", n.style.webkitBoxAlign = "center", n.style.webkitBoxPack = "center", n.style.MozBoxAlign = "center", n.style.MozBoxPack = "center", n.style.msFlexDirection = "column", n.style.msFlexAlign = "center", n.style.msFlexPack = "center", n.appendChild(C), y.appendChild(n), M = !0, window.addEventListener("orientationchange", r)
    }

    function t(e, n) {
        var t = [];
        e && "Button" in e && (p(e.Button) ? t = e.Button : t.push(e.Button)), E.innerHTML = "";
        var o, r, s, a, c;
        for (o = 0; o < t.length; o++) r = t[o], a = "", "Cmd" in r && "@name" in r.Cmd && (a = r.Cmd["@name"], "Param" in r.Cmd && (c = r.Cmd.Param)), s = i(a, r.Text, c, n), E.appendChild(s)
    }

    function i(e, n, t, i) {
        var o;
        return o = document.createElement("div"), o.style.color = "#1b9ddb", o.style.padding = "15px", o.style.fontWeight = "bold", o.style.fontSize = "1.0em", o.style.borderTop = "1px solid #d4d4d4", o.style.cursor = "pointer", o = g(o), o.appendChild(document.createTextNode(n)), o.addEventListener("click", function(e, n) {
            return function t(r) {
                i && (setTimeout(function() {
                    i(e, n)
                }, 0), o.removeEventListener("click", t), u())
            }
        }(e, t)), o
    }

    function o(e, n) {
        if (!M) throw new Error("DOMTabletMiniUI: not created");
        f(), b.innerHTML = e.Message.replace(/\n/g, "<br>"), e.SupportInfo ? (I.innerHTML = e.SupportInfo.Message.replace(/\n/g, "<br>"), e.SupportInfo.Email && e.SupportInfo.Email.replace && (I.innerHTML += "<br>" + e.SupportInfo.Email.replace(/\n/g, "<br>")), e.SupportInfo.PhoneNumber && e.SupportInfo.PhoneNumber.replace && (I.innerHTML += "<br>" + e.SupportInfo.PhoneNumber.replace(/\n/g, "<br>")), I.style.padding = "0.5em", I.style.visibility = "inherit") : (I.style.padding = "0", I.style.visibility = "hidden");
        var i = c(e);
        i && (T.indexOf(i) >= 0 ? w.innerHTML = i : -1 === O.indexOf(i) && (w.innerHTML = S + " " + i)), t(e.Buttons, n)
    }

    function r() {
        x && (a(), setTimeout(function() {
            x && a()
        }, 1e3))
    }

    function s(e) {
        var n = ["dimension"];
        return n.push(parseInt(e.height)), n.push(parseInt(e.width)), n.join("-")
    }

    function a() {
        function e(n, t, i, o, s) {
            var c = parseFloat(n.style.maxWidth),
                l = parseInt(getComputedStyle(n).height),
                d = parseInt(getComputedStyle(n).width);
            if (t > 0 && c >= i || t < 0 && c <= i) return void((r < l || a < d) && function e(t) {
                var i = parseFloat(n.style.fontSize);
                i < t || (n.style.fontSize = i + o + "em", l = parseInt(getComputedStyle(n).height), d = parseInt(getComputedStyle(n).width), (r < l || a < d) && e(t))
            }(s));
            n.style.maxWidth = c + t + "em", l = parseInt(getComputedStyle(n).height), (r < l || a < d) && e(n, t, i, o, s)
        }
        var n = getComputedStyle(C),
            t = getComputedStyle(v),
            i = parseInt(n.height),
            o = parseInt(n.width),
            r = parseInt(t.height),
            a = parseInt(t.width),
            c = s(t),
            l = B[c];
        if (l) return C.style.maxWidth = l.maxWidth, void(C.style.fontSize = l.fontSize);
        i >= r ? e(C, 3, 36, -.1, .6) : o >= a && e(C, -3, 16.5, -.1, .6), B[c] = {
            maxWidth: C.style.maxWidth,
            fontSize: C.style.fontSize
        }
    }

    function c(e) {
        return e ? e.Reference ? e.Reference : e.Id ? e.Id : void 0 : ""
    }

    function l() {
        if (!M) throw new Error("DOMTabletMiniUI: not created");
        v.contains(y) || v.appendChild(y), y.style.display = "block", x = !0, a(), y.style.visibility = "visible"
    }

    function d() {
        M && (y.style.display = "none", y.style.visibility = "hidden", x = !1)
    }

    function u() {
        d(), f()
    }

    function f() {
        C && (C.style.maxWidth = "16.5em", C.style.fontSize = "0.9em", B = {}), b && (b.innerHTML = ""), E && (E.innerHTML = ""), I && (I.innerHTML = ""), w && (w.innerHTML = "")
    }

    function m() {
        y.style.width = "100%", y.style.height = "100%"
    }

    function p(e) {
        return Array.isArray(e)
    }

    function g(e) {
        return e.style["-webkit-user-select"] = "none", e.style["-moz-user-select"] = "none",
            e.style["-ms-user-select"] = "none", e.style["user-select"] = "none", e
    }

    function h(e) {
        e.specialErrorID && (O = e.specialErrorID), e.nonErrorIds && (T = e.nonErrorIds)
    }
    var v, y, C, b, w, E, I, S, M = !1,
        x = !1,
        O = [],
        T = [],
        B = {};
    return Object.freeze({
        create: function(e) {
            return n(e), this
        },
        update: function(e, n) {
            return o(e, n), this
        },
        show: l,
        resize: m,
        init: h
    })
}), define("consoleservice/messagebox/ui/UIProxy", ["require", "consoleservice/messagebox/ui/DOMDesktopStandardUI", "consoleservice/messagebox/ui/DOMDesktopMiniUI", "consoleservice/messagebox/ui/DOMDesktopStandardUI", "consoleservice/messagebox/ui/DOMDesktopStandardUI", "consoleservice/messagebox/ui/DOMTabletMiniUI"], function(e) {
    "use strict";
    var n, t = !1,
        i = !1,
        o = ["1610", "1618", "9010", "9030", "9031", "9032", "1633", "9020", "9022", "GS-003", "CD-108"],
        r = ["2201"];
    return function(s, a, c, l) {
        function d(e) {
            t || i || n.create(e)
        }

        function u(e, o) {
            "FREESPIN_CONGRATULATION" === e["@type"] || "FREESPIN_CONGRATULATION_NOT_WIN" === e["@type"] ? (t = !0, l.request({
                channel: "ConsoleService",
                topic: "MessageBox.PFSCONGRATULATION",
                data: {
                    message: e
                }
            }, o)) : "TOUR_CONGRATULATION" === e["@type"] || "TOUR_CONGRATULATION_NOT_WIN" === e["@type"] ? (i = !0, l.request({
                channel: "ConsoleService",
                topic: "MessageBox.TOURCONGRATULATION",
                data: {
                    message: e
                }
            }, o)) : n.update(e, o)
        }

        function f() {
            t || n.show()
        }

        function m() {
            n.resize()
        }
        return "FREESPIN_CONGRATULATION" === c ? t = !0 : "TOUR_CONGRATULATION" === c ? i = !0 : ("int" === s ? ("std" === a && (n = e("consoleservice/messagebox/ui/DOMDesktopStandardUI")), "min" === a && (n = e("consoleservice/messagebox/ui/DOMDesktopMiniUI"))) : "mob" === s ? "std" === a && (n = e("consoleservice/messagebox/ui/DOMDesktopStandardUI")) : "tab" === s && ("std" === a && (n = e("consoleservice/messagebox/ui/DOMDesktopStandardUI")), "min" === a && (n = e("consoleservice/messagebox/ui/DOMTabletMiniUI"))), t = !1, i = !1, n.init({
            specialErrorID: o,
            nonErrorIds: r
        })), Object.freeze({
            create: function(e) {
                return d(e), this
            },
            update: function(e, n) {
                return u(e, n), this
            },
            show: f,
            resize: m
        })
    }
}), define("consoleservice/messagebox/MessageBox", ["require", "consoleservice/messagebox/ui/UIProxy"], function(e) {
    "use strict";

    function n(e) {
        if (!e) throw new Error("MessageBox: message data is required for showing message");
        e = d(e), c(e)
    }

    function t() {
        if (!z) {
            var e = R ? L : a();
            if (R = !1, L = e, !e) return void(D && (D(), D = null));
            var n = e.message,
                t = e.messageID;
            z = !0, s(n, function(e, r, s) {
                o(n, e, r);
                z = !1, i(e, n) ? (_.postErrorEvent(n.Id, B), E.request({
                    channel: "ConsoleService",
                    topic: "UKRCNotify",
                    data: {
                        messageId: n.Id,
                        cmdName: e
                    }
                }, function(n) {
                    f(t, e, r), s()
                }, function(e) {
                    s()
                })) : (f(t, e, r), "1632" === n.Id || "1633" === n.Id || "TS-002" === n.Id || "TS-001" === n.Id || "TS-003" === n.Id ? _.postPlayerEndTournament(e) : _.postErrorEvent(n.Id, B), s())
            }, function(e, n) {
                m(t, e, n)
            })
        }
    }

    function i(e, n) {
        var t = !1;
        return "viewAccountHistory" !== e && n["@type"] && "REALITY_CHECK" === n["@type"].toUpperCase() && n["@notification"] && "Y" === n["@notification"].toUpperCase() && (t = !0), t
    }

    function o(e, n, t) {
        var i, o, r = !0;
        if ("REALITY_CHECK" === e["@type"] && "viewAccountHistory" === n && t)
            for (l(t) || (t = [t]), i = 0; i < t.length; i++)
                if (o = t[i], o["@name"] && "closeGame" === o["@name"] && o["#text"] && "yes" !== o["#text"].toLowerCase()) {
                    r = !1;
                    break
                }
        return r
    }

    function r(e, n) {
        T = e["@type"], O || h(), O.update(e, n), O.show(), z = !0
    }

    function s(e, n, t) {
        l(e) || (e = [e]);
        var i = e.shift(),
            o = function(o, r) {
                if ("viewAccountHistory" === o) return e.unshift(i), R = !0, void(n && n(o, r, function() {}));
                0 === e.length ? n ? n(o, r, function() {
                    t && t(o, r)
                }) : t && t(o, r) : n ? n(o, r, function() {
                    s(e, n, t)
                }) : s(e, n, t)
            };
        if ("FT-006" === i.Id) r(i, o);
        else {
            var a = function(e) {
                if (e) {
                    z = !0;
                    var n, t = "";
                    "@name" in e && (t = e["@name"], "Param" in e && (n = e.Param)), o(t, n)
                } else r(i, o)
            };
            i.gsType && N ? N(i, function(e) {
                e ? a(e) : A(i, a)
            }) : A(i, a)
        }
    }

    function a() {
        return P && P.length > 0 ? P.shift() : null
    }

    function c(e) {
        e && (P || (P = []), "1613" === e.message.Id && (e.priority = 9999), P.push(e), P.sort(function(e, n) {
            return e.hasOwnProperty("priority") || n.hasOwnProperty("priority") ? !e.hasOwnProperty("priority") && n.hasOwnProperty("priority") ? n.priority > 0 ? -1 : 1 : !n.hasOwnProperty("priority") && e.hasOwnProperty("priority") ? e.priority > 0 ? 1 : -1 : e.priority - n.priority : 0
        }))
    }

    function l(e) {
        return Array.isArray(e)
    }

    function d(e) {
        for (var n, t = {}, i = Object.keys(e), o = 0; o < i.length; o++) n = e[i[o]], l(n) ? t[i[o]] = n.slice(0) : t[i[o]] = n;
        return t
    }

    function u(e, t) {
        var i = {
            messageID: e.messageID
        };
        setTimeout(function() {
            t.reply(null, i)
        }, 0), n(e)
    }

    function f(e, n, t) {
        var i = p(t);
        E.publish({
            channel: "ConsoleService",
            topic: "MessageBox.Close",
            data: {
                messageID: e,
                cmd: {
                    name: n,
                    params: i
                }
            }
        })
    }

    function m(e, n, t) {
        var i = p(t);
        E.publish({
            channel: "ConsoleService",
            topic: "MessageBox.Done",
            data: {
                messageID: e,
                cmd: {
                    name: n,
                    params: i
                }
            }
        })
    }

    function p(e, n) {
        var t, i, o, r = {};
        if (e)
            for (l(e) || (e = [e]), t = 0; t < e.length; t++) i = e[t], i["@name"] && (r[i["@name"]] = i["#text"]);
        if (n)
            for (o in n) r[o] = n[o];
        return r
    }

    function g() {
        O = null, P = [], z = !1
    }

    function h() {
        var n;
        if (!(n = e("consoleservice/messagebox/ui/UIProxy")(S, M, T, E))) throw new Error("MessageBox: channel=" + S + ", presenttype=" + M + " not supported");
        O = n.create({
            root: I,
            strings: x
        })
    }

    function v() {
        O && O.resize()
    }

    function y() {
        E.subscribe({
            channel: "ClientService",
            topic: "MessageBox.DisplayMessage",
            callback: u
        }), E.subscribe({
            channel: "Kernel",
            topic: "System.Resize",
            callback: v
        }), E.subscribe({
            channel: "ClientService",
            topic: "MessageBox.processMessageQueue",
            callback: t
        }), g(), h()
    }

    function C(e) {
        D = e, t()
    }

    function b(e) {}

    function w() {
        g()
    }
    var E, I, S, M, x, O, T, B, _, L, P = [],
        z = !1,
        A = null,
        N = null,
        D = null,
        R = !1;
    return function(e) {
        if (!("bus" in e && null !== e.bus)) throw new Error("MessageBox: message bus object is required");
        if (E = e.bus, !("root" in e && e.root)) throw new Error("MessageBox: root is required");
        if (I = e.root, !("strings" in e && e.strings)) throw new Error("MessageBox: localised strings are required to be included in the config");
        return x = e.strings, S = e.channel ? e.channel.toLowerCase() : "int", M = e.presenttype ? e.presenttype.toLowerCase() : "std", B = e.language ? e.language : "en", A = e.showMessage ? e.showMessage : null, N = e.showGameServiceMessage ? e.showGameServiceMessage : null, _ = e.cecCommand, y(), Object.freeze({
            display: n,
            showAnyMessages: C,
            updateClientConfig: b,
            reset: w,
            messageBoxOnStage: function() {
                return z
            }
        })
    }
}), define("consoleservice/consoleconnector/ConsoleConnector", ["require", "consoleservice/consoleconnector/MXFAdapter", "consoleservice/messagebox/MessageBox"], function(e) {
    "use strict";

    function n(e, n, t) {
        J = e.bus(), V = e.currency, Q = e.logger, oe.setLogger(Q), J.subscribe({
            channel: "Kernel",
            topic: "System.Resize",
            callback: function(e, n) {
                oe.sendMessage("orientationchange", null)
            }
        }), J.subscribe({
            channel: "Game",
            topic: "Game.Control",
            callback: function(e, n) {
                pe.indexOf(e.name) < 0 && se[e.name].sendEvent(e.event, e.params)
            }
        }), J.subscribe({
            channel: "GameService",
            topic: "BoltOn.MuteHost",
            callback: function(e, n) {
                if (se.sound)
                    if (e.muteHost) {
                        var t = se.sound.value;
                        se.sound.values.forEach(function(e) {
                            e == t && (t = e)
                        }), se.sound.bypassControl(e.muteHost, function(e, n) {
                            "change" === e && J.publish({
                                channel: "GameService",
                                topic: "BoltOn.Mute",
                                data: {
                                    type: "settings",
                                    data: {
                                        mute: "1" === n[0] || 1 === n[0] || !0 === n[0]
                                    }
                                }
                            })
                        }, "1"), J.publish({
                            channel: "GameService",
                            topic: "BoltOn.Mute",
                            data: {
                                type: "settings",
                                data: {
                                    mute: 1 === t || "1" === t || !0 === t
                                }
                            }
                        })
                    } else se.sound.bypassControl(e.muteHost, void 0)
            }
        }), J.subscribe({
            channel: "Game",
            topic: "Game.Register",
            callback: function(e, n) {
                var t;
                for (var i in e.options) {
                    if (t = e.options[i], !t.hasOwnProperty("name")) throw new Error("Proxy Control must specify a unique name!");
                    if (!t.hasOwnProperty("type")) throw new Error("Proxy Control must specify a control type!");
                    if (se.hasOwnProperty(t.name)) throw new Error("Proxy Control [" + t.name + "] is already registered!");
                    var o = function(n) {
                        return function(i) {
                            J.publish({
                                channel: "ConsoleService",
                                topic: "Game.Control",
                                data: {
                                    option: e.options[n].name,
                                    value: i
                                }
                            }), t.value = i
                        }
                    }(i);
                    se[e.options[i].name] = t, pe.indexOf(e.options[i].name) < 0 && oe.registerControl(t).addEvent("change", o)
                }
            }
        }), J.subscribe({
            channel: "Kernel",
            topic: "System.InternalInit",
            callback: function(t, o) {
                n(t), re = re({
                    language: t.serverConfig.paramRGS ? t.serverConfig.paramRGS.language : "en",
                    bus: J,
                    root: e.root,
                    channel: t.serverConfig.channel,
                    presenttype: t.serverConfig.presenttype,
                    showMessage: r,
                    showGameServiceMessage: function(e, n) {
                        J.request({
                            channel: "ConsoleService",
                            topic: "GameService.DisplayMessage",
                            data: e
                        }, function(e) {
                            n && n instanceof Function && n(e)
                        }, function() {})
                    },
                    strings: t.stringsConfig,
                    cecCommand: ee
                }), i(t)
            }
        });
        var o = J.subscribe({
            channel: "Kernel",
            topic: "LoadProgress",
            callback: function(e, n) {
                "game" === e.id && (oe.sendMessage("loadProgress", {
                    percent: Math.min(Math.round(e.current / e.items * 100), 100),
                    complete: e.complete
                }), e.complete && J.unsubscribe(o))
            }
        });
        t()
    }

    function t(e) {
        return setTimeout(function() {
            fe = !1, J.publish({
                channel: "ConsoleService",
                topic: "ErrorHandler.Throw",
                data: {
                    errorCode: "FT-006",
                    priority: 0
                }
            })
        }, e || 2e4)
    }

    function i(e) {
        ae = e, oe.setResizeCallback(function(e) {
            ie = e, te || (te = setTimeout(function() {
                J.publish({
                    channel: "ConsoleService",
                    topic: "ConsoleService.Resize",
                    data: e
                }), te = void 0
            }, 50))
        }), oe.sendMessage("language", {
            language: e.gameConfig.language
        }), oe.sendMessage("gameinfo", {
            gametitle: e.gameConfig.gameTitle,
            softwareid: e.gameConfig.softwareId,
            presenttype: e.serverConfig.presenttype,
            technology: e.serverConfig.paramRGS.technology,
            channel: e.serverConfig.channel
        }), e.gameConfig.isReplay && oe.sendMessage("replayInfo", {
            totalRounds: e.serverConfig.totalRounds,
            needShareButton: e.serverConfig.needShareButton,
            replaySessionId: e.serverConfig.replaySessionId,
            replayTransactionId: e.serverConfig.replayTransactionId
        }), J.publish({
            channel: "ConsoleService",
            topic: "ConsoleService.InitDone",
            data: {}
        })
    }

    function o() {
        oe.show()
    }

    function r(e, n) {
        fe ? oe.showMessage(e, n) : n && n instanceof Function && n(null)
    }

    function s(e, n) {
        fe ? oe.doMessageCommand(e, n) : n && n instanceof Function && n(e["@name"], e.Param)
    }

    function a(e) {
        oe.addEvent("command", function(n, t) {
            e(n, t)
        })
    }

    function c(e, n) {
        oe.sendMessage(e, n)
    }

    function l(e, n) {
        return ae.stringsConfig[e] || n || e
    }

    function d(e) {
        K = oe.registerControl({
            type: "balance",
            name: "totalBalance",
            text: l("lblBalance", "Balance"),
            enabled: 1,
            valueText: "0",
            value: 0
        }).addEvent("change", function(e) {
            ee.postRebuy(e), e = parseFloat(e);
            var n = "";
            !isNaN(e) && isFinite(e) ? n = V.formatFloat(e) : e = NaN, J.publish({
                channel: "ConsoleService",
                topic: "BalanceUpdate",
                data: {
                    balance: n,
                    balanceValue: e
                }
            }), E(e, n)
        }), se[K.name] = K, X = oe.registerControl({
            type: "PromotionalFreeSpinsCount",
            name: "pfsCount",
            text: l("lblFreeSpins", "Free Spins"),
            value: 0,
            valueText: "0",
            enabled: 0
        }).addEvent("change", function(e) {}), se[X.name] = X, "tournament" === ae.serverConfig.playMode && ae.serverConfig.termsURL && (Z = oe.registerControl({
            type: "command",
            name: "tournamentTermsAndCondition",
            text: l("terms", "Terms & Conditions"),
            valueText: ae.serverConfig.termsURL,
            enabled: 0
        }), se[Z.name] = Z), e()
    }

    function u(e, n) {
        if (Y) Y.sendEvent("change", e);
        else {
            if (!e || e.length <= 0) return;
            Y = oe.registerControl({
                type: "PromotionalFreeSpinsInfo",
                name: "pfsInfo",
                text: l("AvailableFreeSpins", "Available Free Spins"),
                value: 0,
                valueText: "0",
                enabled: 1,
                info: e
            }).addEvent("change", function(e) {
                n(e)
            }), se[Y.name] = Y
        }
    }

    function f(e) {
        var n, t = le,
            i = function(o) {
                o && (n = o), 0 == --t && (oe.removeEvent("resume", i), e(o))
            };
        oe.addEvent("resume", i), oe.sendMessage("beforeInitGame")
    }

    function m(e) {
        oe.addNShotEvent("wagerComplete", function(n) {
            ce = !1, e()
        }, le), oe.sendMessage("wagerIsComplete")
    }

    function p(e, n) {
        if (ce) e();
        else {
            var t = le,
                i = !1,
                o = function(r) {
                    r && (ce = !1, i = !0), 0 == --t && (oe.removeEvent("wagerStarted", o), i ? (oe.enableEvents(1), n()) : (oe.enableEvents(0), e()))
                };
            ce = !0, oe.addEvent("wagerStarted", o), oe.sendMessage("wagerIsStarting")
        }
    }

    function g(e) {
        ce ? (oe.addNShotEvent("wagerAborted", function() {
            ce = !1, e()
        }, le), oe.enableEvents(1), oe.sendMessage("wagerIsAborted")) : e()
    }

    function h(e) {
        oe.addNShotEvent("resume", function() {
            e()
        }, le), oe.enableEvents(1), oe.sendMessage("insufficientFundsNotification")
    }

    function v(e, n) {
        var t = le,
            i = !1,
            o = function(e) {
                void 0 !== e && null !== e && 0 === e && (i = !0), 0 == --t && (oe.removeEvent("resume", o), n(!i))
            };
        oe.addEvent("resume", o), oe.sendMessage("viewAccountHistory", e)
    }

    function y(e) {
        oe.sendMessage("gameReady"), o(), e()
    }

    function C(e, n) {
        var t = "afterGameOutcome";
        "TRY" === ae.serverConfig.paramRGS.wagerType && (t = "afterDemoOutcome"), n && oe.addNShotEvent(t, function() {
            n()
        }, le), b(e, "TRY" === ae.serverConfig.paramRGS.wagerType)
    }

    function b(e) {
        var n = JSON.parse(JSON.stringify(e)),
            t = n.OutcomeDetail.Balance;
        n.OutcomeDetail.Balance = V.toStakeUnits(t), n.PromotionalFreeSpin && (n.PromotionalFreeSpin["@gip"] = "InProgress" === e.OutcomeDetail.GameStatus ? "true" : "false"), oe.sendOutcome(n, "TRY" === ae.serverConfig.paramRGS.wagerType)
    }

    function w(e, n) {
        var t = "afterGameOutcome";
        "TRY" === ae.serverConfig.paramRGS.wagerType && (t = "afterDemoOutcome"), oe.addNShotEvent(t, function() {
            n()
        }, le), oe.setCurrencyFormat(V.getConfig(), V.toCurrency, V.formatFloat), b(e, "TRY" === ae.serverConfig.paramRGS.wagerType)
    }

    function E(e, n, t) {
        K.sendEvent("change", [e, n, t])
    }

    function I(e) {
        X.sendEvent("change", [e, e])
    }

    function S() {
        me = !0
    }

    function M() {
        me = !1, $ && "function" == typeof $ && ($(), $ = void 0)
    }

    function x() {
        ne && "function" == typeof ne && (ne(), ne = void 0)
    }

    function O() {
        return me || oe.isGamePaused()
    }

    function T() {
        return "replay" === ae.serverConfig.playMode && ge
    }

    function B() {
        return oe.isGameHalted()
    }

    function _(e) {
        oe.isGamePaused() && oe.setUnPauseGame(e), me && ($ = e)
    }

    function L(e) {
        ge && (ne = e)
    }

    function P(e, n) {
        le = e ? e.length : 0, oe.setMessageOrigin({
            consoles: e,
            timeout: t
        }, function(e) {
            fe = !0, n && n(e)
        }), oe.addEvent("pauseReplayClicked", function(e, n) {
            ge = !ge, oe.sendMessage("replayUpdate", {
                pauseFlag: ge
            }), ge || x()
        }), oe.addEvents({
            relayMessage: function(e) {},
            stopAutospin: function() {
                J.publish({
                    channel: "ConsoleService",
                    topic: "Game.AutoSpinStop",
                    data: {}
                })
            },
            setOptions: function(e) {
                Object.keys(e).forEach(function(n) {
                    switch (n) {
                        case "stakeDeduction":
                            J.publish({
                                channel: "ConsoleService",
                                topic: "Option.StakeDeduction",
                                data: {
                                    enabled: !!e[n]
                                }
                            });
                            break;
                        case "handleFullscreen":
                            J.publish({
                                channel: "ConsoleService",
                                topic: "Option.FullScreen",
                                data: {
                                    enabled: !!e[n]
                                }
                            });
                            break;
                        case "setSize":
                            J.publish({
                                channel: "ConsoleService",
                                topic: "Option.SetSize",
                                data: {
                                    width: e[n].width,
                                    height: e[n].height
                                }
                            });
                            break;
                        case "pinchZoomFixer":
                            J.publish({
                                channel: "ConsoleService",
                                topic: "Option.PinchZoomFixer",
                                data: {
                                    enabled: !!e[n]
                                }
                            })
                    }
                })
            }
        })
    }

    function z(e, n, t) {
        for (var i in n) "object" == typeof n[i] && "object" == typeof e[i] ? z(e[i], n[i], t) : t ? delete e[i] : e[i] = n[i]
    }

    function A(e) {
        ["pfsInfo"].forEach(function(n) {
            se[n] && se[n].sendEvent("enable", [e ? 1 : 0])
        })
    }

    function N(e, n) {
        re.updateClientConfig(e), e.gameConfig && e.gameConfig.wagerType && (ae.serverConfig.paramRGS.wagerType = e.gameConfig.wagerType, ae.serverConfig.paramGet.wagerType && (ae.serverConfig.paramGet.wagerType = e.gameConfig.wagerType)), e.playModeChoice && (ae.serverConfig.paramRGS.playModeChoice = e.playModeChoice);
        for (var t in e) switch (t) {
            case "serverConfig":
            case "stringsConfig":
            case "kernelConfig":
            case "consoleConfig":
            case "gameServiceConfig":
                z(ae, e, n)
        }
    }

    function D(e) {
        var n = ["skincode", "ipaddress", "forcelat", "minbet", "forcelocationstatus", "countrycode", "channel", "language", "nscode", "technology", "currencycode", "loadskin", "forcelng", "playMode", "softwareid", "denomamount", "presenttype", "forcelocationmessage", "uniqueid"];
        if (e)
            for (var t in e) n.indexOf(t) < 0 && (ae.serverConfig.paramRGS[t] && (ae.serverConfig.paramRGS[t] = e[t]), ae.serverConfig.paramGet[t] && (ae.serverConfig.paramGet[t] = e[t]))
    }

    function R(e) {
        oe.addOneShotEvent("afterUpdateParams", function(n) {
            if (n) {
                if ("string" == typeof n) try {
                    n = JSON.parse(n)
                } catch (n) {
                    return void e()
                }
                n.data && (n = n.data), D(n), e(n)
            } else e()
        }), oe.sendMessage("updateParams", ae.consoleConfig.paramConsole)
    }

    function F(e, n) {
        r(e, n)
    }

    function k(e, n) {
        oe.sendConfig(e, n)
    }

    function G(e, n) {
        oe.addEvent(e, function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift({
                haltGame: oe.haltGame,
                resume: oe.resume,
                inWager: ce
            }), n.apply(null, e)
        })
    }

    function H() {
        return ue
    }

    function U(e) {
        ue = !!e
    }

    function W() {
        return de
    }

    function q(e) {
        de = !!e
    }

    function j(e) {
        ee = e
    }
    var V, J, K, X, Y, Z, Q, $, ee, ne, te, ie, oe = e("consoleservice/consoleconnector/MXFAdapter")(),
        re = e("consoleservice/messagebox/MessageBox"),
        se = [],
        ae = {},
        ce = !1,
        le = 0,
        de = !1,
        ue = !1,
        fe = !1,
        me = !1,
        pe = ["patternsBet", "coinValue", "betPerPattern", "price"],
        ge = !1;
    return {
        init: n,
        onloadConsole: P,
        beforeInitGame: f,
        registerControls: d,
        initOutcome: w,
        sendOutcome: b,
        gameOutcome: C,
        sendConfig: k,
        gameReady: y,
        wagerStarted: p,
        wagerComplete: m,
        wagerAborted: g,
        sendMessage: c,
        showMessage: r,
        clearMessage: function() {
            re.reset()
        },
        showAnyMessages: function(e) {
            re.showAnyMessages(e)
        },
        doMessageCommand: s,
        connectActionRunner: a,
        insufficientFundsNotification: h,
        viewAccountHistory: v,
        setBalance: E,
        setPromotionalFreeSpinCount: I,
        pauseGame: S,
        unPauseGame: M,
        isGamePaused: O,
        isGameHalted: B,
        setUnPauseGame: _,
        updateClientConfig: N,
        resetConsole: function() {
            ce = !1, oe.sendMessage("reInit")
        },
        onUpdateParams: R,
        displayLaunchOptions: F,
        addConsoleEvent: G,
        setAllowInterruptedMessage: U,
        isAllowInterruptedMessage: H,
        hasInterruptedMessage: W,
        setInteruptedMessage: q,
        registerPFSInfoNotification: u,
        enableConsoleControls: A,
        setCECCommand: j,
        isReplayPaused: T,
        setUnPauseReplay: L
    }
}), define("consoleservice/main", ["require", "consoleservice/consoleconnector/ConsoleConnector"], function(e) {
    "use strict";
    var n, t = e("consoleservice/consoleconnector/ConsoleConnector");
    return function() {
        function e(e, n) {
            o = e.bus(), o.publish({
                channel: "Kernel",
                topic: "LoadProgress",
                data: {
                    id: "consoleservice",
                    items: "5",
                    current: "0",
                    complete: !1
                }
            }), t.init(e, function(e) {}, function() {
                i(n)
            })
        }

        function i(e) {
            o.publish({
                channel: "Kernel",
                topic: "LoadProgress",
                data: {
                    id: "consoleservice",
                    items: "5",
                    current: "5",
                    complete: !0
                }
            }), o.subscribe({
                channel: "Kernel",
                topic: "Kernel.UpdateConfig",
                callback: function(e, n) {
                    t.resetConsole(), t.updateClientConfig(e), o.publish({
                        channel: "Kernel",
                        topic: "Kernel.UpdateConfig.Ack",
                        data: {
                            success: "ConsoleService"
                        }
                    })
                }
            }), e()
        }
        var o;
        return Object.freeze({
            load: e,
            connector: t,
            setCECCommand: function(e) {
                n = e, t.setCECCommand(e)
            }
        })
    }
});
//# sourceMappingURL=consoleservice.js.map