define("clientservice/errorhandler/ErrorCodeList", [], function() {
        "use strict";

        function e(e) {
            if (e && "string" == typeof e && (e = e.toUpperCase(), r[e])) return r[e].action
        }

        function t(e) {
            if (e && "string" == typeof e) {
                var t = e.substring(0, 2).toUpperCase();
                switch (t) {
                    case "JP":
                    case "HE":
                    case "TS":
                    case "CM":
                    case "GS":
                    case "CD":
                        return "communicator";
                    case "GM":
                        return "game";
                    case "CO":
                        return "console";
                    case "CS":
                        return "consoleservice";
                    case "FT":
                        return "fatal";
                    default:
                        console.warn("Unknown error type: " + t + ", full code: " + e)
                }
            }
        }

        function n(e) {
            if (e && "string" == typeof e) return e = e.toUpperCase(), r[e] && r[e].message ? i[r[e].message] || i.errGameError : i.errGameError
        }

        function o(e) {
            i = e.config.stringsConfig
        }
        var i = {},
            r = {
                "CD-001": {
                    action: "abort",
                    message: "errConnection"
                },
                "CD-002": {
                    action: "abort",
                    message: "errConnection"
                },
                "CD-003": {
                    action: "close",
                    message: "errGameError"
                },
                "CD-004": {
                    action: "abort",
                    message: "errGameError"
                },
                "CD-005": {
                    action: "abort",
                    message: "errGameError"
                },
                "CD-006": {
                    action: "reload",
                    message: "errConnection"
                },
                "CD-007": {
                    action: "close",
                    message: "errConnection"
                },
                "CD-008": {
                    action: "close",
                    message: "errOffline"
                },
                "CD-009": {
                    action: "reload",
                    message: "errConnection"
                },
                "CD-010": {
                    action: "reload",
                    message: "errConnection"
                },
                "CD-100": {
                    action: "rgs"
                },
                "CD-101": {
                    action: "rgs"
                },
                "CD-102": {
                    action: "rgs"
                },
                "CD-103": {
                    action: "rgs"
                },
                "CD-104": {
                    action: "reload",
                    message: "errGameError"
                },
                "CD-106": {
                    action: "rgs",
                    message: "errGeoPermission"
                },
                "CD-107": {
                    action: "rgs"
                },
                "CD-108": {
                    action: "rgs"
                },
                "CD-109": {
                    action: "abort"
                },
                "CD-200": {
                    action: "continue",
                    message: "errUnknown"
                },
                "CD-201": {
                    action: "rgs"
                },
                "CD-202": {
                    action: "rgs"
                },
                "CD-203": {
                    action: "reload"
                },
                "CD-205": {
                    action: "continue",
                    message: "autoSpinStop"
                },
                "CD-204": {
                    action: "abort"
                },
                "GM-001": {
                    action: "ignore"
                },
                "GM-002": {
                    action: "ignore"
                },
                "GM-003": {
                    action: "ignore"
                },
                "GM-004": {
                    action: "ignore"
                },
                "GM-005": {
                    action: "ignore"
                },
                "GM-006": {
                    action: "ignore"
                },
                "CO-001": {
                    action: "close",
                    message: "errFreespinsFail"
                },
                "CO-002": {
                    action: "close",
                    message: "errFreespinsFail"
                },
                "CO-003": {
                    action: "close",
                    message: "errFreespinsEnd"
                },
                "CO-004": {
                    action: "close",
                    message: "errGameError"
                },
                "CO-005": {
                    action: "close",
                    message: "errGameError"
                },
                "CO-006": {
                    action: "continue",
                    message: "errGameError"
                },
                "CO-007": {
                    action: "close",
                    message: "errGameError"
                },
                "CO-008": {
                    action: "continue",
                    message: "errDepositFail"
                },
                "CS-001": {
                    action: "close",
                    message: "errGameError"
                },
                "CS-002": {
                    action: "close",
                    message: "errGameError"
                },
                "CS-003": {
                    action: "close",
                    message: "errGameError"
                },
                "JP-104": {
                    action: "close"
                },
                "JP-103": {
                    action: "close"
                },
                "JP-101": {
                    action: "reload"
                },
                "JP-106": {
                    action: "close"
                },
                "JP-107": {
                    action: "log"
                },
                "JP-108": {
                    action: "close"
                },
                "HE-002": {
                    action: "close",
                    message: "errConnection"
                },
                "HE-004": {
                    action: "close",
                    message: "errConnection"
                },
                "HE-005": {
                    action: "close",
                    message: "errConnection"
                },
                "FT-001": {
                    action: "reload",
                    message: "errConnection"
                },
                "FT-002": {
                    action: "reload",
                    message: "errConnection"
                },
                "FT-003": {
                    action: "reload",
                    message: "errConnection"
                },
                "FT-004": {
                    action: "reload",
                    message: "errConnection"
                },
                "FT-005": {
                    action: "reload",
                    message: "errConnection"
                },
                "FT-006": {
                    action: "reload",
                    message: "errConnection"
                },
                "FT-007": {
                    action: "reload",
                    message: "errConnection"
                },
                "TS-001": {
                    action: "close",
                    message: "errTournamentError"
                },
                "TS-002": {
                    action: "rgs"
                },
                "TS-003": {
                    action: "rgs"
                },
                "CM-001": {
                    action: "continue"
                },
                "CM-002": {
                    action: "continue"
                },
                "GS-001": {
                    action: "close",
                    message: "errBOJOffline"
                },
                "GS-002": {
                    action: "reload",
                    message: "errBOJConnection"
                },
                "GS-003": {
                    action: "continue"
                },
                "GS-004": {
                    action: "abort",
                    message: "errBOJOptIn"
                },
                "GS-005": {
                    action: "close",
                    message: "errBOJEnded"
                }
            };
        return function() {
            return {
                init: o,
                getAction: e,
                getType: t,
                getMessage: n
            }
        }
    }), define("clientservice/errorhandler/ActionRunner", [], function() {
        "use strict";

        function e(e, t) {
            L = t, I = e.config.serverConfig || {}, w = e.config.consoleConfig || {}, R = e.bus, O = {}, A.forEach(function(e) {
                I.paramPost && I.paramPost[e] ? O[e] = I.paramPost[e] : I.paramGet && I.paramGet[e] && (O[e] = I.paramGet[e])
            })
        }

        function t() {
            L.opener ? L.close() : l()
        }

        function n(e) {
            function t(e, t) {
                try {
                    t = decodeURIComponent(t)
                } catch (e) {}
                var n = document.createElement("input");
                n.type = "hidden", n.name = e, n.value = t, i.appendChild(n)
            }

            function n(e, t) {
                s[e] = t
            }

            function o(e, t) {
                a.push([encodeURIComponent(e), encodeURIComponent(t)].join("="))
            }
            var i = document.createElement("form"),
                r = e || {},
                a = [],
                s = {};
            r.playMode = r.playMode || I.playMode || "real", i.method = r.launchMethod || I.launchMethod || "post", i.style.display = "none";
            var c = [];
            r.hasOwnProperty("playMode") && "real" !== r.playMode || (c = ["freespin_tokenID", "campaignId", "freespin_bet", "freespin_lines", "freespin_num", "tournamentId", "playMode", "playModeChoice"]), I.paramPost && Object.keys(I.paramPost).forEach(function(e) {
                if (!(c.indexOf(e) >= 0) || r.hasOwnProperty(e)) {
                    var t = r.hasOwnProperty(e) ? r[e] : I.paramPost[e];
                    s[e] = t
                }
            }), I.reloadWithGet && (i.method = "get");
            var l = "post" === i.method.toLowerCase() ? o : n;
            I.paramGet && Object.keys(I.paramGet).forEach(function(e) {
                if (!(c.indexOf(e) >= 0) || r.hasOwnProperty(e)) {
                    var t = r.hasOwnProperty(e) ? r[e] : I.paramGet[e];
                    l(e, t), delete r[e]
                }
            }), Object.keys(s).forEach(function(e) {
                t(e, s[e]), r.hasOwnProperty(e) && delete r[e]
            }), Object.keys(r).forEach(function(e) {
                t(e, r[e])
            }), a && a.length > 0 && (i.action = "?" + a.join("&")), C(i)
        }

        function o(e) {
            E(function() {
                var t = "real",
                    n = I.paramRGS.SWITCH_MODE;
                "WAGER_TO_PFS" === n ? t = "freespin" : "PFS_TO_WAGER" === n && (t = "real");
                var o = {
                    paramGame: {
                        playMode: t
                    }
                };
                e && e.currencycode && (o.paramGame.currencycode = e.currencycode), R.publish({
                    channel: "ClientService",
                    topic: "Game.SwitchPlayMode",
                    data: o
                })
            }, function() {}, {
                params: {},
                forceXHR: !0
            })
        }

        function i(e, t) {
            var n = e || {
                url: "",
                closeGame: !1
            };
            n.closeGame && "string" == typeof n.closeGame && "YES" === n.closeGame.toUpperCase() && E ? E(function() {
                t()
            }, function() {
                t()
            }) : t()
        }

        function r(e) {
            var t = e || {
                url: "",
                closeGame: !1
            };
            t.closeGame && "string" == typeof t.closeGame && "YES" === t.closeGame.toUpperCase() ? L.top.location.href = t.url : L.open(t.url)
        }

        function a(e) {
            w.lobbyUrl ? l(w.lobbyUrl) : n(e)
        }

        function s(e) {
            R.publish({
                channel: "ClientService",
                topic: "ErrorHandler.Notify",
                data: {
                    action: "abort"
                }
            }), e && e.cmd && x ? x({
                "@name": e.cmd.name || "abort",
                Param: e.cmd.params
            }, b) : b()
        }

        function c() {
            R.publish({
                channel: "ClientService",
                topic: "ErrorHandler.Notify",
                data: {
                    action: "continue"
                }
            }), b()
        }

        function l(e) {
            k && k.postBackToLobby(), e ? L.top.location.href = e : w.lobbyUrl && (L.top.location.href = w.lobbyUrl)
        }

        function u() {
            R.publish({
                channel: "ClientService",
                topic: "ErrorHandler.Notify",
                data: {
                    action: "topup"
                }
            }), b()
        }

        function p(e) {
            e.cmd && m(e.cmd.name, e.cmd.params, function() {
                x ? x({
                    "@name": e.cmd.name,
                    Param: e.cmd.params
                }, v) : v(e.cmd.name, e.cmd.params)
            })
        }

        function d(e) {
            L.open(e.url, e.name ? e.name : "_blank")
        }

        function m(e, t, n) {
            switch (e) {
                case "closeGame":
                    E ? E(n, n) : (console.warn("Direct link to close game server call function not added!"), n());
                    break;
                case "viewAccountHistory":
                    i(t, n);
                    break;
                default:
                    n()
            }
        }

        function f(e) {
            E = e
        }

        function g(e) {
            k = e
        }

        function v(e, i) {
            switch (e) {
                case "backToLobby":
                    l();
                    break;
                case "closeGame":
                    t();
                    break;
                case "reloadGame":
                    n(i);
                    break;
                case "recommendedGameReload":
                    k && k.postRecommendedGameReload(i), n(i);
                    break;
                case "gameInProgressReload":
                case "tournamentReload":
                    var a = y(i);
                    n(a);
                    break;
                case "switchToCashPlay":
                    var a = {
                        playMode: "real"
                    };
                    n(a);
                    break;
                case "pfsReload":
                case "switchWagerToPFS":
                    var a = y(i, I.paramRGS.hasOwnProperty("SWITCH_MODE") ? {
                        SWITCH_MODE: I.paramRGS.SWITCH_MODE
                    } : {});
                    T && T.switchPlayModeSupport && "false" !== T.switchPlayModeSupport ? o(a) : n(a);
                    break;
                case "multipleGIPReload":
                    n(i);
                    break;
                case "insufficientFundsNotification":
                    u();
                    break;
                case "viewAccountHistory":
                    i && r(i), b();
                    break;
                case "requestHelp":
                    i ? (i.target && i.url && window.open(i.url, i.target), p({
                        cmd: {
                            name: "closeGame"
                        }
                    })) : p({
                        cmd: {
                            name: "ignore"
                        }
                    });
                    break;
                default:
                    b()
            }
        }

        function y(e, t) {
            var n = {},
                o = e || {};
            Object.keys(o).forEach(function(e) {
                n[e] = o[e]
            });
            var i = t || {};
            return Object.keys(i).forEach(function(e) {
                n[e] = i[e]
            }), n
        }

        function C(e) {
            L && !L.noSubmit && (e.style.display = "none", document.body.appendChild(e), HTMLFormElement.prototype.submit.call(e))
        }

        function h(e) {
            x = e
        }

        function b() {
            R.request({
                channel: "ClientService",
                topic: "MessageBox.processMessageQueue",
                data: {}
            }, function() {}, function() {})
        }

        function S(e) {
            e && "object" == typeof e && (T = Object.freeze(JSON.parse(JSON.stringify(e))))
        }
        var x, E, T, k, I = {},
            w = {},
            R = {},
            L = {},
            O = {},
            A = ["softwareid", "nscode", "skincode", "currencycode", "denomamount", "minbet", "language", "uniqueid", "securetoken", "countrycode", "intmode", "mproxy", "playMode", "freespin_tokenID", "freespin_num", "freespin_bet", "freespin_lines"];
        return function() {
            return {
                init: e,
                doClose: t,
                doReload: n,
                doResync: a,
                doAbort: s,
                doContinue: c,
                doLobby: l,
                doTopup: u,
                doRGS: p,
                doOpenWindow: d,
                setErrorFlowHandler: h,
                doRGSAfterConsole: v,
                setDirectCloseGame: f,
                updateGameCapabilities: S,
                setCECCommand: g
            }
        }
    }), define("kernel/logger/Logger", [], function() {
        "use strict";

        function e(e) {
            return e = e.toUpperCase(), E[e] ? E[e] : E.ALL
        }

        function t(e) {
            for (var t in E)
                if (e === E[t]) return t
        }

        function n(e) {
            var t = T[e.level] ? T[e.level] + " " : "",
                n = "origin" in e && null !== e.origin ? e.origin + " " : "",
                o = e.message;
            return t + n + "[" + e.datetime + "] " + o
        }

        function o(e) {
            if (!C) {
                if (!e) throw new Error("Initialize config data required for Logger initialization");
                "bus" in e && null !== e.bus && (h = e.bus(), h.subscribe({
                    channel: "Kernel",
                    topic: "Log.#",
                    callback: function(e, t) {
                        var n = t.topic.toLowerCase(),
                            o = {
                                "log.debug": i,
                                "log.info": l,
                                "log.warn": m,
                                "log.error": r,
                                "log.fatal": a
                            };
                        if (n in o) o[n](e.message, e.origin);
                        else if ("log.flush" === n && g(), "log.getlogs" === n) {
                            var c, u;
                            e && (c = e.level, u = e.formatted);
                            var p = s(c, u);
                            t.reply(null, {
                                logs: p
                            })
                        }
                    }
                }));
                var t = e.logConfig;
                t && (p(t.logLevel), x = "turnOn" in t && t.turnOn), C = !0
            }
        }

        function i(e, t) {
            u("DEBUG", e, t)
        }

        function r(e, t) {
            u("ERROR", e, t)
        }

        function a(e, t) {
            u("FATAL", e, t)
        }

        function s(t, o) {
            var i = E.ALL,
                r = [];
            t && ("string" == typeof t ? i = e(t) : "boolean" == typeof t && (o = t)), o = !!o;
            var a;
            if (b && b.length > 0)
                for (var s = 0; s < b.length; s++) a = c(b[s]), i > 0 && e(a.level) !== i || (o && (a = n(a)), r.push(a));
            return r
        }

        function c(e) {
            if (!e) return e;
            for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) n[t[o]] = e[t[o]];
            return n
        }

        function l(e, t) {
            u("INFO", e, t)
        }

        function u(t, o, i) {
            if (x && !(e(t) < I)) {
                b.length >= S && b.shift();
                var r, a = {
                    datetime: (new Date).toISOString(),
                    level: t,
                    message: o
                };
                if (i && (a.origin = i), b.push(a), I <= E.DEBUG) switch (r = n(a), t) {
                    case "WARN":
                        console.log("%c" + r, "background: #F1E05A; color: #000000");
                        break;
                    case "INFO":
                    case "DEBUG":
                    default:
                        console.log(r)
                }
                "FATAL" !== t && "ERROR" !== t || console.log("%c" + r, "background: #FF3C56; color: #FFFFFF")
            }
        }

        function p(t) {
            I = e(t)
        }

        function d() {
            return t(I)
        }

        function m(e, t) {
            u("WARN", e, t)
        }

        function f() {
            b = []
        }

        function g() {
            if (v()) {
                var e = b.slice(0);
                localStorage.setItem(k, JSON.stringify(e)), f()
            }
        }

        function v() {
            try {
                return "localStorage" in window && null !== window.localStorage
            } catch (e) {
                return !1
            }
        }

        function y() {
            C = !1, h = null, b = [], x = !0, I = E.FATAL
        }
        var C = !1,
            h = null,
            b = [],
            S = 500,
            x = !0,
            E = {
                ALL: 0,
                DEBUG: 20,
                INFO: 40,
                WARN: 60,
                ERROR: 100,
                FATAL: 500,
                NONE: 900
            },
            T = function() {
                var e = {};
                for (var t in E) e[t] = "[" + t + "]";
                return e.ALL = "", e
            }(),
            k = "skateboard.logs",
            I = E.FATAL;
        return function() {
            return Object.freeze({
                init: o,
                setLevel: p,
                getLevel: d,
                clear: f,
                reset: y,
                debug: i,
                error: r,
                fatal: a,
                info: l,
                warn: m,
                log: function(e, t) {
                    u("INFO", e, t)
                },
                getLogs: s,
                flush: g
            })
        }()
    }), define("clientservice/errorhandler/ErrorHandler", ["require", "clientservice/errorhandler/ErrorCodeList", "clientservice/errorhandler/ActionRunner", "kernel/logger/Logger"], function(e) {
        "use strict";

        function t() {
            Object.keys(C).forEach(function(e) {
                clearTimeout(C[e]), delete C[e]
            }), C = {}
        }

        function n(e, t) {
            e.errorCode && (e.priority >= 0 ? m(e.errorCode, null, null, e.priority) : m(e.errorCode))
        }

        function o(e, t) {
            return {
                cmd: {
                    name: e,
                    params: t
                }
            }
        }

        function i(e, t) {
            switch (e) {
                case "close":
                    v.doRGS(o("closeGame"));
                    break;
                case "lobby":
                    v.doLobby();
                    break;
                case "topup":
                    v.doTopup();
                    break;
                case "reload":
                    v.doRGS(o("reloadGame"));
                    break;
                case "resync":
                    v.doResync();
                    break;
                case "abort":
                    v.doAbort(t);
                    break;
                case "continue":
                    v.doContinue();
                    break;
                case "rgs":
                    v.doRGS(t);
                    break;
                case "openWindow":
                    v.doOpenWindow(t);
                    break;
                default:
                    console.warn("ErrorHandler: skipping unknown action [" + e + "]")
            }
        }

        function r(e, t, n) {
            return {
                Message: e,
                Buttons: {
                    Button: {
                        Text: f.config.stringsConfig.btnOk,
                        Cmd: {
                            "@name": t || "",
                            Param: n || {}
                        }
                    }
                }
            }
        }

        function a() {
            return {
                cmd: {
                    name: "continue",
                    params: {}
                }
            }
        }

        function s(e, t, n, o) {
            t || (t = r(g.getMessage(e), g.getAction(e), {}), t.Id = e), Array.isArray(t) || (t = [t]), t.forEach(function(t) {
                var r = d();
                h[r] = function(t, n) {
                    C[t] && (clearTimeout(C[t]), delete C[t]), i(g.getAction(e), n)
                }, b[r] = function(e) {
                    n && n(e)
                };
                var a = function() {
                        C[r] && (clearTimeout(C[r]), delete C[r]), "CD-101" !== e && "CD-205" !== e && "TS-003" !== e && "CM-002" !== e && f.bus.request({
                            channel: "ClientService",
                            topic: "MessageBox.processMessageQueue",
                            data: {}
                        }, function() {}, function() {})
                    },
                    s = {
                        messageID: r,
                        message: t
                    };
                "number" == typeof o && (s.priority = o), f.bus.request({
                    channel: "ClientService",
                    topic: "MessageBox.DisplayMessage",
                    data: s
                }, a, function() {})
            })
        }

        function c(e) {
            var t = d();
            h[t] = function(t) {
                C[t] && (clearTimeout(C[t]), delete C[t]), i(g.getAction(e))
            }, C[t] = setTimeout(function() {
                h[t](t)
            }, 3e3);
            var n = function() {
                    C[t] && (clearTimeout(C[t]), delete C[t])
                },
                o = r(g.getMessage(e), g.getAction(e), {});
            o.Id = e, f.bus.request({
                channel: "ClientService",
                topic: "MessageBox.DisplayMessage",
                data: {
                    messageID: t,
                    message: o
                }
            }, n, function() {})
        }

        function l(e) {
            var t = d();
            h[t] = function(t) {
                C[t] && (clearTimeout(C[t]), delete C[t]), i(g.getAction(e))
            }, C[t] = setTimeout(function() {
                h[t](t)
            }, 3e3);
            var n = function() {
                    C[t] && (clearTimeout(C[t]), delete C[t])
                },
                o = r(g.getMessage(e), g.getAction(e), {});
            o.Id = e, f.bus.request({
                channel: "ClientService",
                topic: "MessageBox.DisplayMessage",
                data: {
                    messageID: t,
                    message: o
                }
            }, n, function() {})
        }

        function u(e, t) {
            var n = r(g.getMessage(e), g.getAction(e), {});
            n.Id = e;
            var o = d();
            h[o] = function(t, n) {
                C[t] && (clearTimeout(C[t]), delete C[t]), i(g.getAction(e), n)
            };
            var s = function() {
                C[o] && (clearTimeout(C[o]), delete C[o]), f.bus.request({
                    channel: "ClientService",
                    topic: "MessageBox.processMessageQueue",
                    data: {}
                }, function() {}, function() {})
            };
            C[o] = setTimeout(function() {
                h[o](o, a())
            }, 3e3);
            var c = {
                messageID: o,
                message: n
            };
            "number" == typeof t && (c.priority = t), f.bus.request({
                channel: "ClientService",
                topic: "MessageBox.DisplayMessage",
                data: c
            }, s, function() {})
        }

        function p(e, t) {
            var n = d();
            h[n] = function(t, n) {
                C[t] && (clearTimeout(C[t]), delete C[t]), i(g.getAction(e), n)
            }, b[n] = function(e) {
                t && t(e)
            };
            var o = function() {
                C[n] && (clearTimeout(C[n]), delete C[n])
            };
            C[n] = setTimeout(function() {
                h[n](n)
            }, 3e3);
            var a = r(g.getMessage(e), g.getAction(e), {});
            a.Id = e, f.bus.request({
                channel: "ClientService",
                topic: "MessageBox.DisplayMessage",
                data: {
                    messageID: n,
                    message: a
                }
            }, o, function() {})
        }

        function d() {
            return E += 1
        }

        function m(e, t, n, o) {
            if ("ignore" !== g.getAction(e)) {
                if ("log" === g.getAction(e)) return void(n ? y.warn(JSON.stringify(n), e) : y.warn("Unknown exception.", e));
                switch (g.getType(e)) {
                    case "communicator":
                        s(e, n, t, o);
                        break;
                    case "game":
                        c(e);
                        break;
                    case "console":
                        l(e);
                        break;
                    case "consoleservice":
                        p(e, t);
                        break;
                    case "fatal":
                        u(e, o);
                        break;
                    default:
                        console.warn("ErrorHandler: unknown error code type [" + g.getType(e) + "], code: [" + e + "]")
                }
            }
        }
        var f, g = e("clientservice/errorhandler/ErrorCodeList")(),
            v = e("clientservice/errorhandler/ActionRunner")(),
            y = e("kernel/logger/Logger"),
            C = {},
            h = {},
            b = {},
            S = {},
            x = {},
            E = 0;
        return function(e) {
            return t(), f = e, v.init(f, window), g.init(f), E = 0, f.bus.subscribe({
                channel: "ClientService",
                topic: "ErrorHandler.Throw",
                callback: n
            }), f.bus.subscribe({
                channel: "ConsoleService",
                topic: "ErrorHandler.Throw",
                callback: n
            }), f.bus.subscribe({
                channel: "Kernel",
                topic: "ErrorHandler.Throw",
                callback: n
            }), f.bus.subscribe({
                channel: "GameService",
                topic: "ErrorHandler.Throw",
                callback: n
            }), f.bus.subscribe({
                channel: "Game",
                topic: "ErrorHandler.Throw",
                callback: n
            }), S = f.bus.subscribe({
                channel: "ConsoleService",
                topic: "MessageBox.Close",
                callback: function(e, t) {
                    h[e.messageID] && h[e.messageID](e.messageID, e)
                }
            }), x = f.bus.subscribe({
                channel: "ConsoleService",
                topic: "MessageBox.Done",
                callback: function(e, t) {
                    h[e.messageID] && delete h[e.messageID], b[e.messageID] && (b[e.messageID](e), delete b[e.messageID])
                }
            }), f.bus.subscribe({
                channel: "Kernel",
                topic: "Game.Capabilities",
                callback: function(e) {
                    v.updateGameCapabilities(e)
                }
            }), Object.freeze({
                throwError: m,
                setErrorFlowHandler: v.setErrorFlowHandler,
                doRGSAfterConsole: v.doRGSAfterConsole,
                setDirectCloseGame: v.setDirectCloseGame,
                setCECCommand: v.setCECCommand
            })
        }
    }), define("clientservice/preloader/AssetPreLoader", ["require"], function(e) {
        "use strict";
        var t = {
                PROMOSPIN: {
                    desktop: [],
                    tablet: [],
                    mobile: [],
                    all: ["welcome.png", "end.png", "stars.png"]
                },
                TOURNAMENT: {
                    desktop: [],
                    tablet: [],
                    mobile: [],
                    all: []
                }
            },
            n = e.toUrl("./asset"),
            o = n.split("/js/clientservice")[0] + "/asset/",
            i = "?" + n.split("?")[1],
            r = function(e, t) {
                var n = new Image;
                n.src = e, n.onload = function() {
                    n = null
                }
            };
        return function() {
            function e(e, n) {
                var a = t[e];
                a[n].length > 0 && a[n].forEach(function(t) {
                    r(o + e.toLowerCase() + "/" + n + "/" + t + i)
                }), a.all.length > 0 && a.all.forEach(function(t) {
                    r(o + e.toLowerCase() + "/all/" + t + i)
                })
            }
            return {
                preLoadAsset: e
            }
        }
    }), define("clientservice/transformer/RgsDataTransformer", ["require"], function(e) {
        "use strict";

        function t(e) {
            return JSON.stringify(e)
        }

        function n(e) {
            return JSON.stringify(e)
        }

        function o(e) {
            return JSON.stringify(e)
        }

        function i(e) {
            return m(e)
        }

        function r(e) {
            return m(e)
        }

        function a(e) {
            return m(e)
        }

        function s(e) {
            return m(e)
        }

        function c(e) {
            return m(e)
        }

        function l(e) {
            return m(e)
        }

        function u(e) {
            return m(e)
        }

        function p(e) {
            return m(e)
        }

        function d(e) {
            return m(e)
        }

        function m(e) {
	    console.log(e.RGSResponse);
            return e.RGSResponse || e.Exception ? e : {
                RGSResponse: e
            }
        }
        return function() {
            return {
                transformAuthenticateRequestData: o,
                transformPaytableResponseData: a,
                transformPlayRequestData: t,
                transformPlayResponseData: i,
                transformInitstateResponseData: s,
                transformCurrencyResponseData: c,
                transformCloseResponseData: l,
                transformPlayerBalanceResponseData: u,
                transformAuthenticateResponseData: p,
                transformUKRCNotifyResponseData: d,
                transformNormalRequestData: n,
                transformReplayResponseData: r
            }
        }
    }), define("clientservice/communicator/WebWorker", ["require"], function(e) {
        "use strict";
        return {
            create: function(e) {
                var t, n = {},
                    o = 0;
                return window.URL ? (t = e instanceof Function ? new Worker(function(e) {
                    var t = "function () {onmessage = function(e) {var invokeFunction = FUNCTIONGOESHERE; postMessage({id:e.data.id, result:invokeFunction(e.data.data)});};}",
                        n = t.replace("FUNCTIONGOESHERE", e.toString());
                    return window.URL.createObjectURL(new Blob(["(", n, ")()"], {
                        type: "application/javascript"
                    }))
                }(e)) : new Worker(e), t.onmessage = function(e) {
                    n[e.data.id](e.data.result), n[e.data.id] = void 0, delete n[e.data.id]
                }) : t = {
                    onerror: function(e) {},
                    postMessage: function(o) {
                        try {
                            n[o.id](e(o.data))
                        } catch (e) {
                            t.onerror(e)
                        }
                        n[o.id] = void 0, delete n[o.id]
                    },
                    terminate: function() {}
                }, {
                    work: function(e, i, r) {
                        o += 1, n[o] = i, t.onerror = function() {
                            r("CD-104")
                        }, t.postMessage({
                            id: o,
                            data: e
                        })
                    },
                    terminate: function() {
                        t.terminate()
                    }
                }
            }
        }
    }), define("clientservice/communicator/DataAdapter", ["require", "kernel/logger/Logger", "clientservice/communicator/WebWorker"], function(e) {
        function t(e, t, n) {
            var o = e;
            if (n && (0 !== n.indexOf(";") && (o += ";"), o += n), null !== t && void 0 !== t) {
                if (o.indexOf("?") < 0 ? o += "?" : o += "&", "object" != typeof t) o += encodeURIComponent(t);
                else
                    for (var i in t) o += encodeURIComponent(i), o += "=", o += encodeURIComponent(t[i]), o += "&";
                null !== o.match(/[&\?]$/) && (o = o.substring(0, o.length - 1))
            }
            return o
        }

        function n(e, n, o, i) {
            var r, a = new XMLHttpRequest,
                c = !!i.isRestful,
                l = {},
                d = function(e) {
                    var t = e.target;
                    if (i.networkMonitor && (l.responseTime = (new Date).getTime() - l.requestTimeStamp.getTime()), 200 === t.status || c && t.status < 500) {
                        var r = t.getAllResponseHeaders(),
                            a = r.trim().split(/[\r\n]+/),
                            s = a.reduce(function(e, t, n) {
                                var o = t.split(": ");
                                return e[String.prototype.toLowerCase.call(o[0])] = o[1], e
                            }, {}),
                            u = null;
                        if (i.accept)
                            if ("xml" === i.accept) u = t.responseXML;
                            else if ("json" === i.accept) try {
                            return void(u = m.work(t.responseText, function(e) {
                                n(e, {
                                    networkMonitor: l,
                                    headers: s
                                })
                            }, o))
                        } catch (e) {
                            return void o("CD-104")
                        } else u = t.responseText;
                        else u = t.responseText;
                        n(u, {
                            networkMonitor: l,
                            headers: s
                        })
                    } else p.error("Http request fails for " + t.status, "DataAdapter"), o(t.status < 400 ? "HE-002" : t.status < 500 ? "HE-004" : "HE-005")
                },
                f = function(e) {
                    var t = (new Date).getTime() - r;
                    o(void 0 === navigator.onLine ? t > 30 ? "CD-006" : "CD-002" : navigator.onLine && t > 30 ? "CD-006" : "CD-002")
                },
                g = function(e) {
                    o("CD-001")
                };
            if (a.addEventListener("load", d), a.addEventListener("error", f), a.addEventListener("timeout", g), i.networkMonitor && (l.requestTimeStamp = new Date), i.async ? a.open(i.method ? i.method : "GET", t(e, i.paramMap, i.sessionId), !0) : a.open(i.method ? i.method : "GET", t(e, i.paramMap, i.sessionId)), i.withCredentials && (a.withCredentials = !0), i.timeout > 0 && (a.timeout = i.timeout), "string" == typeof i.method && "POST" === i.method.toUpperCase() && (i.headerMap && i.headerMap["Content-Type"] || a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), i.accept && (i.headerMap && i.headerMap.Accept || ("xml" === i.accept ? a.setRequestHeader("Accept", "application/xml") : "json" === i.accept ? a.setRequestHeader("Accept", "application/json") : a.setRequestHeader("Accept", "text/plain"))), i.headerMap)
                for (var v in i.headerMap) a.setRequestHeader(v, i.headerMap[v]);
            return u && u.major >= 5 && u.minor >= 7 && s(a), a.send(i.payloadStr), r = (new Date).getTime(), {
                abort: function() {
                    a.removeEventListener("load", d), a.removeEventListener("error", f), a.removeEventListener("timeout", g), a.abort()
                }
            }
        }

        function o(e, t, i, r, a) {
            var s = r.retry;
            if (s > 0 == !1 && (s = 1), a < s) return n(e, t, function(n) {
                a + 1 < s ? o(e, t, i, r, a + 1) : i(n)
            }, r)
        }

        function i(e, n, o, i) {
            if (navigator && navigator.sendBeacon) {
                if (i.payloadStr) {
                    var r;
                    r = "json" === i.contentType ? new Blob([i.payloadStr], {
                        type: "application/json; charset=UTF-8"
                    }) : new Blob([i.payloadStr], {
                        type: "text/plain; charset=UTF-8"
                    }), navigator.sendBeacon(t(e, i.paramMap, i.sessionId), r)
                } else navigator.sendBeacon(t(e, i.paramMap, i.sessionId));
                n()
            } else o()
        }

        function r(e, t, n, i) {
            return void 0 !== i && null !== i && "object" == typeof i || (i = {}), "function" != typeof t && (t = function() {}), "function" != typeof n && (n = function() {}), o(e, t, n, i, 0)
        }

        function a(e) {
            if ("object" == typeof e && e) {
                for (var t in e) a(e[t]);
                Object.freeze(e)
            }
        }

        function s(e) {
            var t = c(16);
            e.setRequestHeader("X-B3-TraceId", t), e.setRequestHeader("X-B3-SpanId", t)
        }

        function c(e) {
            for (var t = "", n = 0; n < e; n++) t += Math.floor(Math.random() * e).toString(16);
            return t
        }

        function l(e) {
            if ((!u || !u.name) && e && "string" == typeof e) {
                var t = e.match(/(.+)[-](\d+)\.(\d+)\.(\d+).*/i);
                t.length > 4 && (u = {
                    name: t[1],
                    major: t[2],
                    minor: t[3],
                    patch: t[4]
                })
            }
        }
        var u, p = e("kernel/logger/Logger"),
            d = e("clientservice/communicator/WebWorker"),
            m = d.create(function(e) {
                return JSON.parse(e)
            });
        return function() {
            return {
                beaconCall: i,
                httpCall: r,
                deepFreezeJsonObj: a,
                setBuildNumber: l
            }
        }
    }), define("clientservice/communicator/RgsCommunicator", ["require", "clientservice/transformer/RgsDataTransformer", "clientservice/communicator/DataAdapter"], function(e) {
        "use strict";
        var t = e("clientservice/transformer/RgsDataTransformer")(),
            n = e("clientservice/communicator/DataAdapter")();
        return function(e) {
            function o(t) {
                var n = {
                    timeout: Number(e.serverConfig.requestTimeout),
                    paramMap: JSON.parse(JSON.stringify(e.serverConfig.paramGet)),
                    payloadStr: null,
                    retry: Number(e.serverConfig.requestRetries) || 1,
                    withCredentials: !0,
                    accept: "json",
                    headerMap: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    sessionId: e.serverConfig.IGTJSESSIONID
                };
                e.serverConfig.instrumentUrl && (n.networkMonitor = !0);
                var o = "GET";
                if (t && "string" == typeof t.method && "POST" === t.method.toUpperCase()) {
                    o = "POST";
                    var i = {};
                    Object.keys(e.serverConfig.paramRGS).forEach(function(t) {
                        n.paramMap && n.paramMap[t] ? n.paramMap[t] = e.serverConfig.paramRGS[t] : i[t] = e.serverConfig.paramRGS[t]
                    }), Object.keys(i).length > 0 && (t.payloadStr ? (t.payloadStr = JSON.parse(t.payloadStr), Object.keys(i).forEach(function(e) {
                        t.payloadStr[e] = i[e]
                    }), t.payloadStr = JSON.stringify(t.payloadStr)) : t.payloadStr = JSON.stringify(i))
                }
                if (t)
                    for (var r in t) n[r] = t[r];
                return e.forceGetParamNames && e.forceGetParamNames.forEach(function(t) {
                    n.paramMap[t] = e.serverConfig.paramRGS[t]
                }), n.method = o, n
            }

            function i(i, r) {
                n.httpCall(e.serverConfig.server + "/paytable", function(e, o) {
                    var r = t.transformPaytableResponseData(e);
                    n.deepFreezeJsonObj(r), i(r, o)
                }, r, o({
                    method: "POST"
                }))
            }

            function r(i, r, a) {
                i = i || {};
                var s;
                if (e.serverConfig.paramGet)
                    for (s in e.serverConfig.paramGet) i[s] = e.serverConfig.paramGet[s];
                if (e.serverConfig.paramPost)
                    for (s in e.serverConfig.paramPost) i[s] = e.serverConfig.paramPost[s];
                for (s in e.serverConfig.paramRGS) i[s] = e.serverConfig.paramRGS[s];
                var c;
                e.forceGetParamNames && (c = {}, e.forceGetParamNames.forEach(function(t) {
                    c[t] = e.serverConfig.paramRGS[t]
                })), n.httpCall(e.serverConfig.server + "/authenticate", function(e, o) {
                    var i = t.transformAuthenticateResponseData(e);
                    n.deepFreezeJsonObj(i), r(i, o)
                }, a, o({
                    method: "POST",
                    paramMap: c,
                    payloadStr: t.transformAuthenticateRequestData(i)
                }))
            }

            function a(i, r) {
                n.httpCall(e.serverConfig.server + "/initstate", function(e, o) {
                    var r = t.transformInitstateResponseData(e);
                    n.deepFreezeJsonObj(r), i(r, o)
                }, r, o({
                    method: "POST"
                }))
            }

            function s(i, r, a) {
                i.gamePayload && (i.gamePayload = JSON.stringify(i.gamePayload)), n.httpCall(e.serverConfig.server + "/play", function(e, o) {
                    var i = t.transformPlayResponseData(e);
                    n.deepFreezeJsonObj(i), r(i, o)
                }, a, o({
                    method: "POST",
                    payloadStr: t.transformPlayRequestData(i),
                    retry: 1
                }))
            }

            function c(i, r, a) {
                n.httpCall(e.serverConfig.server + "/replay", function(e) {
                    var o = t.transformReplayResponseData(e);
                    n.deepFreezeJsonObj(o), r(o)
                }, a, o({
                    method: "POST",
                    payloadStr: t.transformNormalRequestData(i),
                    retry: 1
                }))
            }

            function l(t, i, r) {
                n.httpCall(e.serverConfig.server + "/replayshareurl", function(e) {
                    n.deepFreezeJsonObj(e), i(e)
                }, r, o({
                    method: "GET"
                }))
            }

            function u(i, r, a) {
                if ("replay" === e.serverConfig.playMode) return void i();
                var s = o({
                    method: "POST"
                });
                a && a.forceXHR ? s.timeout = 0 : s.timeout = 200, !navigator || !navigator.sendBeacon || a && a.forceXHR ? n.httpCall(e.serverConfig.server + "/close", function(e, o) {
                    var r = t.transformCloseResponseData(e);
                    n.deepFreezeJsonObj(r), i(r, o)
                }, r, s) : n.beaconCall(e.serverConfig.server + "/close", i, r, s)
            }

            function p(i, r) {
                n.httpCall(e.serverConfig.server + "/playerbalance", function(e, o) {
                    var r = t.transformPlayerBalanceResponseData(e);
                    n.deepFreezeJsonObj(r), i(r, o)
                }, r, o({
                    method: "POST"
                }))
            }

            function d(i, r, a) {
                var s = {
                    paramMap: {
                        currencycode: a || e.serverConfig.paramRGS.currencycode,
                        language: e.serverConfig.paramRGS.language,
                        skincode: e.serverConfig.paramRGS.skincode,
                        nscode: e.serverConfig.paramRGS.nscode
                    }
                };
                e.serverConfig.paramRGS.wagerType && (s.paramMap.wagerType = e.serverConfig.paramRGS.wagerType), n.httpCall(e.serverConfig.server + "/currency", function(e, o) {
                    var r = t.transformCurrencyResponseData(e);
                    n.deepFreezeJsonObj(r), i(r, o)
                }, r, o({
                    method: "POST",
                    payloadStr: t.transformNormalRequestData(s.paramMap)
                }))
            }

            function m(i, r, a) {
                var s = o({
                    method: "POST",
                    retry: 2
                });
                if ("object" != typeof s.paramMap) s.paramMap = {};
                else {
                    var c = {};
                    for (var l in s.paramMap) c[l] = s.paramMap[l];
                    s.paramMap = c
                }
                if (i)
                    for (var u in i) s.paramMap[u] = i[u];
                n.httpCall(e.serverConfig.server + "/notify", function(e, o) {
                    var i = t.transformUKRCNotifyResponseData(e);
                    n.deepFreezeJsonObj(i), r(i, o)
                }, a, s)
            }

            function f(t, o, i, r) {
                "string" != typeof t && (t = JSON.stringify(t));
                var a = {
                    method: "POST",
                    retry: Number(e.serverConfig.requestRetries) || 1,
                    headerMap: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    paramMap: {
                        nscode: e.serverConfig.paramRGS.nscode,
                        skincode: e.serverConfig.paramRGS.skincode,
                        uniqueid: e.serverConfig.paramRGS.uniqueid,
                        softwareid: e.serverConfig.paramRGS.softwareid,
                        securetoken: e.serverConfig.paramRGS.securetoken,
                        channel: e.serverConfig.paramRGS.channel,
                        presenttype: e.serverConfig.paramRGS.presenttype,
                        technology: e.serverConfig.paramRGS.technology,
                        currencycode: e.serverConfig.paramRGS.currencycode,
                        countrycode: e.serverConfig.paramRGS.countrycode
                    },
                    payloadStr: JSON.stringify({
                        gamePayload: t
                    })
                };
                r && navigator && navigator.sendBeacon && "Google Inc." !== navigator.vendor ? n.beaconCall(e.serverConfig.server + "/additionalgameinfo", o, i, a) : n.httpCall(e.serverConfig.server + "/additionalgameinfo", function(e) {
                    e = JSON.parse(e), o(e.RGSResponse ? e.RGSResponse : e)
                }, i, a)
            }
            return n.setBuildNumber(e.serverConfig.buildnumber), {
                requestPaytableData: i,
                requestAuthentication: r,
                requestInitstate: a,
                requestPlay: s,
                requestReplay: c,
                requestReplayShareUrl: l,
                requestCloseGame: u,
                requestPlayerBalance: p,
                requestCurrencyData: d,
                requestNotify: m,
                sendGameInfo: f
            }
        }
    }), define("clientservice/authenticator/Authenticator", ["require"], function(e) {
        "use strict";

        function t(e, t, o, i) {
            var r = e;
            ! function e(a) {
                function s(e) {
                    if (e.Buttons && e.Buttons.Button && e.Buttons.Button.Cmd && e.Buttons.Button.Cmd.Param)
                        for (var t = e.Buttons.Button.Cmd.Param, n = 0; n < t.length; n++) {
                            var o = t[n];
                            if ("Y" === o["#text"] && "multiGip" === o["@name"]) return !0
                        }
                    return !1
                }
                r.requestAuthentication(a || {}, function(r, a) {
                    var c = a ? a.headers : {},
                        l = {};
                    if ("ExtraInfo" in r && (l = r.ExtraInfo), "RGSResponse" in r && (r = r.RGSResponse), "Authentication" in r) {
                        var u = r.Authentication.Status;
                        "Success" === u || "Pending_PlayMode" === u ? r.Authentication.Messages ? t(r.Authentication.Messages, r.Authentication.gsInfo, c, l) : r.Authentication.extra ? t(r.Authentication.extra, r.Authentication.gsInfo, c, l) : t(null, r.Authentication.gsInfo, c, l) : "Pending_GPS" === u ? i ? i(function() {
                            n(e, o)
                        }) : n(e, o) : o && o("CD-003")
                    } else if ("Exception" in r) {
                        var p = r.Exception;
                        "1115" === p.Id || "1116" === p.Id || "1118" === p.Id || s(p) ? t(r.Exception) : o("CD-100", p)
                    } else o && o("CD-003")
                }, function(e) {
                    o("CD-002" === e ? "CD-006" : e)
                })
            }()
        }

        function n(e, t, n) {
            var i = {
                enableHighAccuracy: !0,
                maximumAge: 0
            };
            o && o.geolocation ? e(o.geolocation) : "geolocation" in navigator ? navigator.geolocation.getCurrentPosition(function(t) {
                var n = {};
                t.coords && (n.latitude = t.coords.latitude.toString(), n.longitude = t.coords.longitude.toString()), n.locationstatus = (t.code || 0).toString(), n.locationmessage = t.message || "", e(n)
            }, function() {
                t("CD-106")
            }, i) : t && t("CD-106")
        }
        var o = {};
        return function(e) {
            if (!e) throw new Error("Authenticator initialize error: config parameter required");
            var i;
            if (o = e, !("rgsCommunicator" in e && null !== e.rgsCommunicator)) throw new Error("Authenticator: RgsCommunicator param is required");
            return i = e.rgsCommunicator, Object.freeze({
                authenticate: function(e, n, o) {
                    t(i, e, n, o)
                },
                requestGeolocation: n
            })
        }
    }), define("clientservice/communicator/InstrumentationCommunicator", ["require", "clientservice/communicator/DataAdapter"], function(e) {
        "use strict";
        return function(t) {
            function n(e, t, n) {
                a.payloadStr = JSON.stringify(e);
                var o = function() {
                    r.httpCall(s, function(e) {
                        t(e)
                    }, n, a)
                };
                e.action.indexOf("close") > -1 ? r.beaconCall(s, t, o, {
                    paramMap: a.payloadStr
                }) : o()
            }

            function o() {}

            function i(e) {
                if (c.push(e), c.length >= l || "close" === e.action) {
                    for (var i = {
                            version: "1.0",
                            requestTimeStamp: [],
                            softwareId: t.serverConfig.softwareid,
                            skinCode: t.serverConfig.skincode,
                            uniqueId: t.serverConfig.uniqueid,
                            requestTxnId: [],
                            responseTxnId: [],
                            channel: t.serverConfig.channel,
                            presentType: t.serverConfig.presenttype,
                            gameTitle: t.gameConfig.gameTitle,
                            language: t.gameConfig.language,
                            responseTime: [],
                            action: [],
                            countryCode: t.serverConfig.countrycode
                        }, r = 0; r < c.length; r++) i.requestTimeStamp.push(c[r].requestTimeStamp), i.requestTxnId.push(c[r].requestTxnId), i.responseTxnId.push(c[r].responseTxnId), i.responseTime.push(c[r].responseTime), i.action.push(c[r].action);
                    c = [], n(i, o, o)
                }
            }
            var r = e("clientservice/communicator/DataAdapter")(),
                a = {
                    method: "POST",
                    headerMap: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    timeout: Number(t.serverConfig.requestTimeout),
                    retry: Number(t.serverConfig.requestRetries)
                },
                s = t.serverConfig.instrumentUrl;
            ! function() {
                "/" === s.charAt(s.length - 1) && (s = s.slice(0, s.length - 1)), s.lastIndexOf("/") > 0 && (s.lastIndexOf("/") > 7 ? s = s.substring(0, s.lastIndexOf("/")) + "/RGSInstrument/clientLog" + s.substring(s.lastIndexOf("/")) : s += "/RGSInstrument/clientLog")
            }();
            var c = [],
                l = 10;
            return {
                feed: i
            }
        }
    }), define("clientservice/commands/GameInfoCommand", ["require", "clientservice/communicator/RgsCommunicator"], function(e) {
        "use strict";
        return function(t, n, o) {
            function i() {
                u && (r(u), u = null), setTimeout(function() {
                    i()
                }, p)
            }

            function r(e) {
                l.sendGameInfo(e, s, function(t) {
                    d.warn("Fail to send GameInfo " + e.data + " for " + t)
                })
            }

            function a(e) {
                e.sendImmediate ? l.sendGameInfo(e.data, s, function(t) {
                    d.warn("Fail to send GameInfo " + e.data + " for " + t)
                }) : u = e.data ? e.data : e
            }

            function s(e) {
                return e.Exception ? void d.warn("Fail to send GameInfo " + e + " for " + e.Exception.Message) : "Success" === e.AdditionalGameInfo.Status ? void d.debug("Success to push GameInfo to RGS.") : "Failure" === e.AdditionalGameInfo.Status ? void d.warn("Fail to send GameInfo " + e + " for unknown reason.") : void 0
            }

            function c() {
                u && (l.sendGameInfo(u, s, function(e) {
                    d.warn("Fail to send GameInfo " + e + " for " + e)
                }, !0), u = null)
            }
            var l, u, p, d = n.logger;
            return l = e("clientservice/communicator/RgsCommunicator")(t), t.serverConfig.gameInfoInterval && t.serverConfig.gameInfoInterval > 0 ? (p = t.serverConfig.gameInfoInterval, o.subscribe({
                channel: "Game",
                topic: "Game.GameInfo",
                callback: a
            }), setTimeout(function() {
                i()
            }, p)) : o.subscribe({
                channel: "Game",
                topic: "Game.GameInfo",
                callback: r
            }), {
                close: c
            }
        }
    }),
    define("clientservice/commands/RgsCommand", ["require", "clientservice/preloader/AssetPreLoader", "clientservice/preloader/AssetPreLoader", "clientservice/communicator/RgsCommunicator", "clientservice/authenticator/Authenticator", "clientservice/communicator/InstrumentationCommunicator", "clientservice/commands/GameInfoCommand"], function(e) {
        "use strict";
        return function(t, n, o) {
            function i(e, t) {
                "replay" === o.serverConfig.playMode && Z > 0 && (X.sendMessage("replayUpdate", {
                    currentRound: Z - 1
                }), Q = !0), n.throwError(e, null, t, 1)
            }

            function r(e, t) {
                t ? i(e, t) : i("CD-006", t)
            }

            function a(e, t) {
                if ("CD-001" === e && (e = "CD-006"), "CD-106" === e) {
                    var i = o.stringsConfig.errGeoPermission ? o.stringsConfig.errGeoPermission : "Unable to access location data. Enable location services for {0}, or switch to Wifi.";
                    if ("en" === o.serverConfig.paramRGS.language && "INT" !== o.serverConfig.paramRGS.channel) {
                        var r = {
                            Id: "GEO",
                            Reference: "CD-107",
                            Message: i.replace("{0}", window.location.host),
                            Buttons: {
                                Button: [{
                                    Text: o.stringsConfig.btnHelp ? o.stringsConfig.btnHelp : "Help",
                                    Cmd: {
                                        "@name": "requestHelp",
                                        Param: [{
                                            "@name": "url",
                                            "#text": window.location.pathname + "/1.4.0/support/en/index.html"
                                        }, {
                                            "@name": "target",
                                            "#text": "_blank"
                                        }]
                                    }
                                }, {
                                    Text: o.stringsConfig.btnClose ? o.stringsConfig.btnClose : "btnClose",
                                    Cmd: {
                                        "@name": "closeGame"
                                    }
                                }]
                            }
                        };
                        n.throwError("CD-107", null, r, 1)
                    } else {
                        var a = {
                            Id: "GEO",
                            Reference: "CD-106",
                            Message: i.replace("{0}", window.location.host),
                            Buttons: {
                                Button: [{
                                    Text: o.stringsConfig.btnClose ? o.stringsConfig.btnClose : "btnClose",
                                    Cmd: {
                                        "@name": "closeGame"
                                    }
                                }]
                            }
                        };
                        n.throwError("CD-106", null, a, 1)
                    }
                } else n.throwError(e, null, t, 1)
            }

            function s(e, t) {
                return e.Exception ? (e.Exception.Id && "1005" === e.Exception.Id ? n.throwError("CD-108", null, e.Exception) : (!e.Exception.Id || "1801" !== e.Exception.Id && "1803" !== e.Exception.Id || (V.publish({
                    channel: "ClientService",
                    topic: "ReplayExpired",
                    data: {}
                }), X.sendMessage("replayExpired", {})), n.throwError("CD-100", null, e.Exception)), !1) : (e.RGSResponse && (e = e.RGSResponse), t || (t = "CD-101"), e.GameLogicResponse && e.GameLogicResponse.Messages && n.throwError(t, null, e.GameLogicResponse.Messages.Message), !0)
            }

            function c(e, t, n) {
                if (o.serverConfig.instrumentUrl && "replay" !== o.serverConfig.playMode) {
                    var i = "";
                    t.GameLogicResponse && t.GameLogicResponse.TransactionId && (i = t.GameLogicResponse.TransactionId);
                    var r = "";
                    t.GameLogicResponse && t.GameLogicResponse.OutcomeDetail && t.GameLogicResponse.OutcomeDetail.TransactionId && (r = t.GameLogicResponse.OutcomeDetail.TransactionId);
                    var a = {
                        requestTimeStamp: n ? n.networkMonitor.requestTimeStamp.toUTCString() : (new Date).toUTCString(),
                        requestTxnId: i,
                        responseTxnId: r,
                        responseTime: n ? n.networkMonitor.responseTime : "",
                        action: e
                    };
                    N.feed(a)
                }
            }

            function l(e) {
                D.requestPaytableData(function(t, o) {
                    s(t) && (t.RGSResponse.PaytableResponse ? (e(t), c("paytable", t, o)) : n.throwError("CD-004"))
                }, r)
            }

            function u(e, t) {
                var i = e;
                t && (i = function(n) {
                    D.requestCurrencyData(function(t, o) {
                        t.CURRENCIES ? (e([n, t.CURRENCIES]), c("currency", t, o)) : e(n)
                    }, function() {
                        e(n)
                    }, t)
                }), D.requestCurrencyData(function(e, t) {
                    s(e) && (e.RGSResponse.CURRENCIES ? (K.init(e.RGSResponse.CURRENCIES, o.serverConfig.denomamount), i(e), c("currency", e, t)) : n.throwError("CD-004"))
                }, r)
            }

            function p(e) {
                D.requestInitstate(function(t, o) {
                    var i = t.RGSResponse;
                    i && i.hasOwnProperty("GameLogicResponse") && q.setGameLogicResponse(i.GameLogicResponse), s(t, "CD-101") && (i.GameLogicResponse ? (i.GameLogicResponse.OutcomeDetail && (z = i.GameLogicResponse.OutcomeDetail.TransactionId), e(t), c("initstate", t, o), i.GameLogicResponse.Tournament && q.storeTournamentData({
                        spinLeft: i.GameLogicResponse.Tournament["@count"],
                        balanceZero: 0 === parseFloat(i.GameLogicResponse.Balances["@totalBalance"])
                    })) : n.throwError("CD-004"))
                }, r)
		console.log(t);
            }

            function d(e) {
                e.InitGameLogicResponse && e.PaytableResponse && e.CURRENCIES && V.publish({
                    channel: "ClientService",
                    topic: "ClientService.InitDone",
                    data: {}
                })
            }

            function m(t, i, r, s) {
                oe = !1, g(), B.authenticate(function(n, a, c, m) {
                    if (s || (s = function(e) {
                            var n = {};
                            v(), e && (n.paramGame = e, U = e), p(function(e) {
                                n.InitGameLogicResponse = e.RGSResponse.GameLogicResponse, W = e.RGSResponse.GameLogicResponse, f(e.ExtraInfo), d(n)
                            }), l(function(e) {
                                n.PaytableResponse = e.RGSResponse.PaytableResponse, _ = e.RGSResponse.PaytableResponse, f(e.ExtraInfo), d(n)
                            }), u(function(e) {
                                n.CURRENCIES = e.RGSResponse.CURRENCIES, J = e.RGSResponse.CURRENCIES, f(e.ExtraInfo), d(n)
                            }, t ? t.jackpotBaseCurrency : void 0), i && "function" == typeof i && i()
                        }), n && n.Message && "PLAY_MODE_CHOICE" === n.Message["@type"]) {
                        e("clientservice/preloader/AssetPreLoader")().preLoadAsset("PROMOSPIN", o.serverConfig.paramGame.assetPack), r(n, a, c, null, m)
                    } else $.start(m ? m.geoInfoIntervalMinutes : -1), r(n, a, c, s, m)
                }, a, function(e) {
                    var t = o.stringsConfig.errGeoWarn ? o.stringsConfig.errGeoWarn : "Location confirmation required for regulatory purposes. When {0} asks for access to your location, select “allow”.";
                    t = t.replace("{0}", window.location.host);
                    var i = {
                        Id: "GEO",
                        Reference: "CD-108",
                        Message: t,
                        Buttons: {
                            Button: [{
                                Text: o.stringsConfig.btnOk,
                                Cmd: {
                                    "@name": "continue"
                                }
                            }]
                        }
                    };
                    navigator.permissions && navigator.permissions.query ? navigator.permissions.query({
                        name: "geolocation"
                    }).then(function(t) {
                        "prompt" === t.state ? n.throwError("CD-108", e, i) : e()
                    }) : n.throwError("CD-108", e, i)
                })
            }

            function f(e) {
                e && Object.keys(e).length > 0 && Y.push(e)
            }

            function g() {
                Y = []
            }

            function v() {
                var e = o.serverConfig.paramRGS;
                e && (e.hasOwnProperty("gamechk") && delete e.gamechk, e.hasOwnProperty("skbchk") && delete e.skbchk);
                var t = o.serverConfig.paramGet;
                t && (t.hasOwnProperty("gamechk") && delete t.gamechk, t.hasOwnProperty("skbchk") && delete t.skbchk);
                var n = o.serverConfig.paramPost;
                n && (n.hasOwnProperty("gamechk") && delete n.gamechk, n.hasOwnProperty("skbchk") && delete n.skbchk)
            }

            function y(e, t) {
                e.InitGameLogicResponse && e.PaytableResponse && e.CURRENCIES && t()
            }

            function C(t, n, i) {
                oe = !1, g(), B.authenticate(function(r, a, s, c) {
                    var d = function() {
                        var e = {};
                        p(function(t) {
                            W = t.RGSResponse.GameLogicResponse, e.InitGameLogicResponse = t.RGSResponse.GameLogicResponse, f(t.ExtraInfo), y(e, n)
                        }), _ = null, l(function(t) {
                            _ = t.RGSResponse.PaytableResponse, e.PaytableResponse = t.RGSResponse.PaytableResponse, f(t.ExtraInfo), y(e, n)
                        }), u(function(t, o) {
                            J = t.RGSResponse.CURRENCIES, e.CURRENCIES = t.RGSResponse.CURRENCIES, f(t.ExtraInfo), y(e, n)
                        }, i ? i.jackpotBaseCurrency : void 0), q.reInit()
                    };
                    if (r && r.Message && "PLAY_MODE_CHOICE" === r.Message["@type"]) {
                        e("clientservice/preloader/AssetPreLoader")().preLoadAsset("PROMOSPIN", o.serverConfig.paramGame.assetPack), t(r, a, s, null, c, n)
                    } else $.start(c ? c.geoInfoIntervalMinutes : -1), t(r, a, s, d, c, n)
                }, r)
            }

            function h(e) {
                var t = {
                    gamelogicresponse: W,
                    paytableresponse: _,
                    currencyresponse: J
                };
                U && (t.paramGame = U), Y.length > 0 && (t.extraInfo = Y), e(t)
            }

            function b(e) {
                $.isTimeToGeoCheck() ? B.requestGeolocation(function(t) {
                    x(function(t) {
                        e(t)
                    }, t), $.reset()
                }, function() {}) : x(function(t) {
                    e(t)
                })
            }

            function S(e, t) {
                var o = {},
                    r = j;
                r.GameLogicRequest || (r = {
                    GameLogicRequest: j
                }), o.gamePayload = r, t && Object.keys(t).forEach(function(e) {
                    o[e] = t[e]
                }), ne && (te = new Date);
                var a = Date.now();
                o.gamePayload.GameLogicRequest.TransactionId = z, D.requestPlay(o, function(t, o) {
                    var i = t.RGSResponse || t;
                    s(t) && (i.GameLogicResponse ? (i.GameLogicResponse.OutcomeDetail && (z = i.GameLogicResponse.OutcomeDetail.TransactionId), i.GameLogicResponse.Balances && (F = i.GameLogicResponse.Balances["@totalBalance"], ie = !1), i.GameLogicResponse.Tournament && q.storeTournamentData({
                        spinLeft: i.GameLogicResponse.Tournament["@count"],
                        balanceZero: 0 === parseFloat(i.GameLogicResponse.Balances["@totalBalance"])
                    }), e(t), q.setGameLogicResponse(i.GameLogicResponse), q.postPlayEvent(a), c("play", i, o), ne && i.GameLogicResponse.OutcomeDetail && "Start" === i.GameLogicResponse.OutcomeDetail.GameStatus && (ee = te)) : n.throwError("CD-104"))
                }, i)
            }

            function x(e, t) {
                if (ne)
                    if (ee) {
                        var n = (new Date).getTime() - ee.getTime();
                        ne <= n ? S(e, t) : setTimeout(function() {
                            S(e, t)
                        }, ne - n)
                    } else S(e, t);
                else S(e, t)
            }

            function E(e, t) {
                var r = {};
                Z = t, Q = !1, r.currentRound = t, o.serverConfig && (o.serverConfig.replayToken && (r.token = o.serverConfig.replayToken), o.serverConfig.playMode && (r.playMode = o.serverConfig.playMode)), D.requestReplay(r, function(t) {
                    var o = t.RGSResponse || t;
                    s(t) && (o.GameLogicResponse ? (o.GameLogicResponse.OutcomeDetail && (z = o.GameLogicResponse.OutcomeDetail.TransactionId), o.GameLogicResponse.Balances && (F = o.GameLogicResponse.Balances["@totalBalance"], ie = !1), e(t)) : n.throwError("CD-104"))
                }, i)
            }

            function T() {
                return Q
            }

            function k(e) {
                var t = {};
                "replay" === o.serverConfig.playMode && (o.serverConfig && o.serverConfig.replayToken && (t.token = o.serverConfig.replayToken), t.playMode = "replay", D.requestReplayShareUrl(t, function(t) {
                    s(t) && e(t)
                }, i))
            }

            function I() {
                oe || (oe = !0, q && q.postCloseEvent(), H.close(), D.requestCloseGame(function(e, t) {
                    V.publish({
                        channel: "ClientService",
                        topic: "Game.Close",
                        data: e && e.Close ? e.Close : null
                    }), c("close", {
                        action: "close"
                    }, t)
                }, function() {}))
            }

            function w(e, t, n) {
                oe || (oe = !0, q && q.postCloseEvent(), H.close(), D.requestCloseGame(e, t, n))
            }

            function R() {
                n.doRGSAfterConsole("closeGame")
            }

            function L(e, t, o, i) {
                D.requestNotify({
                    messageid: e,
                    cmdname: t
                }, function(e, t) {
                    e.Exception ? (n.throwError("CD-100", null, e.Exception, 1), i("CD-100", e.Exception)) : (e = e.RGSResponse || e, e.Notify && e.Notify.Status && "Success" === e.Notify.Status ? o() : i())
                }, function(e) {
                    n.throwError("CD-007", null, null, 1), i(e)
                })
            }

            function O(e) {
                ie || (ie = !0, D.requestPlayerBalance(function(t, n) {
                    if (ie && s(t) && t && t.RGSResponse && t.RGSResponse.Balances) {
                        t = t.RGSResponse;
                        var o = t.Balances["@totalBalance"];
                        c("balance", t, n), e(o, t.Balances.Balance)
                    }
                    ie = !1
                }, function() {
                    ie = !1
                }))
            }

            function A(e, t) {
                D.requestPlayerBalance(function(t, n) {
                    s(t) && t && t.RGSResponse && t.RGSResponse.Balances && (t = t.RGSResponse, c("balance", t, n), e(t.Balances))
                }, function() {
                    console.error("Get Player Balance fail"), t()
                })
            }

            function G(e) {
                V.publish({
                    channel: "ClientService",
                    topic: "Account.Balances",
                    data: e
                })
            }

            function M(e) {
                j = e
            }

            function P(e) {
                q = e, n.setCECCommand(q)
            }
            var D, N, B, F, z, W, U, H, q, j = {},
                _ = {},
                J = {},
                Y = [],
                K = t.currency,
                V = t.bus,
                X = t.consoleconnect,
                Z = 0,
                Q = !1,
                $ = function() {
                    function e(e) {
                        c = !1, e = parseInt(e), s = isNaN(e) ? -1 : e, l = 0, 0 === s ? c = !0 : s > 0 && (l = 6e4 * s)
                    }

                    function t() {
                        !c && l > 0 && (a = setTimeout(function() {
                            c = !0
                        }, l))
                    }

                    function n(n) {
                        a && clearTimeout(a), e(n), t()
                    }

                    function i(e) {
                        u = !!e
                    }

                    function r() {
                        var e = "T" === o.gameConfig.gameType;
                        return c && (e || !u)
                    }
                    var a, s = -1,
                        c = !1,
                        l = 0,
                        u = !1;
                    return {
                        start: n,
                        reset: function() {
                            n(s)
                        },
                        isTimeToGeoCheck: r,
                        setGameInProgress: i
                    }
                }(),
                ee = null,
                te = null,
                ne = null,
                oe = !1,
                ie = !1;
            D = e("clientservice/communicator/RgsCommunicator")(o), n.setDirectCloseGame(w);
            var re = {
                rgsCommunicator: D
            };
            return o.kernelConfig.localgame && o.serverConfig.paramGet && o.serverConfig.paramGet.hasOwnProperty("native_lat") && (re.geolocation = {
                latitude: o.serverConfig.paramGet.native_lat,
                longitude: o.serverConfig.paramGet.native_long,
                locationstatus: "0",
                locationmessage: ""
            }), B = e("clientservice/authenticator/Authenticator")(re), o.serverConfig.instrumentUrl && "replay" !== o.serverConfig.playMode && (N = e("clientservice/communicator/InstrumentationCommunicator")(o)), H = e("clientservice/commands/GameInfoCommand")(o, t, V), V.subscribe({
                channel: "Game",
                topic: "Close",
                callback: R
            }), V.subscribe({
                channel: "ConsoleService",
                topic: "BalanceUpdate",
                callback: function(e, t) {
                    e && e.balance && !isNaN(e.balanceValue) && G(e)
                }
            }), V.subscribe({
                channel: "ConsoleService",
                topic: "UKRCNotify",
                callback: function(e, t) {
                    L(e.messageId, e.cmdName, function() {
                        t.reply(null, {})
                    }, function(e, n) {
                        t.reply({
                            errorCode: e,
                            data: n
                        })
                    })
                }
            }), window.onbeforeunload = I, window.onunload = I, {
                launch: m,
                play: b,
                replay: E,
                setBalance: G,
                silentBalanceUpdate: O,
                getPlayerBalance: A,
                setRequestData: M,
                init: h,
                reLaunch: C,
                setCECCommand: P,
                setGameInProgress: $.setGameInProgress,
                replayShareUrl: k,
                getFailFlag: T
            }
        }
    }), define("clientservice/domcontainer/DOMContainer", ["require"], function(e) {
        "use strict";
        return function(e) {
            function t(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.style[n] = t[n]
                })
            }

            function n() {
                c.some(function(e) {
                    return e.visible
                }) ? r.style.visibility = "inherit" : r.style.visibility = "hidden"
            }

            function o() {
                setTimeout(i, 250)
            }

            function i() {
                var e = r.offsetWidth,
                    n = r.offsetHeight;
                c.forEach(function(o) {
                    var i = Number((e / o.width).toFixed(3)),
                        r = Number((n / o.height).toFixed(3)),
                        c = Math.min(i, r);
                    i === o.scaleH && r === o.scaleH && e === a && n === s || (t(o.element, {
                        webkitTransformOrigin: "0 0 ",
                        transformOrigin: "0 0",
                        transform: "translate(" + Math.floor((e - o.width * c) / 2) + "px, " + Math.floor((n - o.height * c) / 2) + "px) scale(" + c + ")"
                    }), o.scale = c, o.scaleW = i, o.scaleH = r)
                }), a = e, s = n
            }
            var r = document.createElement("div");
            t(r, {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                visibility: "hidden"
            }), e.appendChild(r);
            var a, s, c = [];
            return window.addEventListener("resize", o), {
                addElement: function(e, o, a) {
                    var s = document.createElement("div"),
                        l = {
                            element: s,
                            visible: !1,
                            width: o,
                            height: a,
                            scale: 1,
                            scaleW: 1,
                            scaleH: 1
                        };
                    return t(s, {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: o + "px",
                        height: a + "px",
                        visibility: "hidden",
                        zIndex: 2
                    }), s.appendChild(e), r.appendChild(s), c.push(l), i(), {
                        removeElement: function() {
                            r.removeChild(s), n()
                        },
                        showElement: function() {
                            s.style.visibility = "inherit", l.visible = !0, n()
                        },
                        hideElement: function() {
                            s.style.visibility = "hidden", l.visible = !1, n()
                        },
                        updateSize: function(e, n) {
                            l.width = e, l.height = n, t(s, {
                                width: e + "px",
                                height: n + "px"
                            }), i()
                        },
                        elementData: function() {
                            return l
                        }
                    }
                },
                removeContainer: function() {
                    for (; r.childElementCount > 0;) r.removeChild(r.firstElementChild);
                    return e.removeChild(r), r = void 0, window.removeEventListener("resize", o), r
                },
                setStyles: function(e) {
                    t(r, e)
                },
                reflow: function() {
                    o && o()
                }
            }
        }
    }), define("clientservice/autospin/ui/DOMDesktopStandardUI", ["require", "clientservice/domcontainer/DOMContainer"], function(e) {
        "use strict";
        var t, n, o, i, r, a = {
                SPIN: "SPIN",
                WIN: "WIN",
                LOSS: "LOSS",
                START: "START",
                CANCEL: "CANCEL"
            },
            s = function(e, t) {
                Array.prototype.slice.call(e, 0).forEach(t)
            };
        return function(c) {
            function l() {
                return !n.autospin.hasOwnProperty("version") || 1 === Number(n.autospin.version)
            }

            function u() {}

            function p(e, t) {
                var u, p, g, v, C, h, b;
                i = document.createElement("div"), i.id = "overlay", i.style.position = "absolute", i.style.top = 0, i.style.left = 0, i.style.display = "flex", i.style.alignItems = "center", i.style.justifyContent = "center", i.style.width = "100%", i.style.height = "100%", i.style.minHeight = "100%", i.style.minWidth = "100%", i.style.textAlign = "center", i.style.fontFamily = "Arial, Helvetica, sans-serif", i.style.zIndex = "9998", r = document.createElement("div"), r.style.position = "relative", r.style.backgroundColor = "rgba(255, 255, 255, 0.96)", r.style.borderRadius = "20px", r.style.border = "2px solid black", r.style.boxShadow = "4px 4px 10px #000", r.style.width = "610px", r.style.userSelect = "none", r.addEventListener("click", function(n) {
                    u = n.target.getAttribute("name"), "LABEL" !== (g = n.target.nodeName) && "SPAN" !== g || ("LABEL" === g && (u = n.target.getAttribute("name"), p = Number(n.target.getAttribute("value")), v = n.target), "SPAN" === g && (u = n.target.parentNode.getAttribute("name"), p = Number(n.target.parentNode.getAttribute("value")), v = n.target.parentNode));
                    var o = function(e) {
                            var t = e.getAttribute("clicked");
                            return "true" === t || "false" !== t && void 0
                        },
                        r = function() {
                            e.setWinLimit(void 0), R.style.backgroundColor = "#cccccc", s(E.getElementsByTagName("LABEL"), function(e) {
                                e.style.color = "#cccccc", o(e) && e.setAttribute("clicked", !1), e.style.border = "", e.style.cursor = "auto"
                            })
                        },
                        l = function() {
                            o(v) ? (v.style.border = "1px", v.style.borderStyle = "normal", v.style.borderColor = "#bbbbbb", v.removeAttribute("clicked"), R.style.backgroundColor = "#cccccc", u === a.SPIN && (C = !1, b = !1, E && r()), u === a.LOSS && (h = !1, b = !1, E && r())) : (s(v.parentNode.childNodes, function(e) {
                                e.style.border = "1px", e.style.borderStyle = "normal", e.style.borderColor = "#bbbbbb", e.removeAttribute("clicked")
                            }), v.style.border = "2px", v.style.borderStyle = "solid", v.style.borderColor = "#ef6c00", v.setAttribute("clicked", !0))
                        };
                    u === a.SPIN && (l(), v.getAttribute("clicked") && (e.setSteps(p), C = !0), n.stopPropagation()), u === a.LOSS && (l(), v.getAttribute("clicked") && (e.setLossLimit(p), h = !0), n.stopPropagation()), u === a.WIN && (S && C || !S) && ((x && h || !x) && (e.setWinLimit(p), l(), u = ""), n.stopPropagation()), (S && C || !S) && ("L" === c.gameConfig.gameType || x && h || !x) && (R.style.backgroundColor = "#ef6c00", b = !0, E && s(E.getElementsByTagName("LABEL"), function(e) {
                        e.style.color = "#111111", e.style.cursor = "pointer"
                    })), u === a.CANCEL && (e.resetAutoSpin(), t({
                        cancelAutoSpin: !0
                    }), y()), u === a.START && b && (i.style.display = "none", t(), y())
                }), r.addEventListener("mouseover", function(e) {
                    g = e.target.nodeName;
                    var t = function() {
                        s(v.parentNode.childNodes, function(e) {
                            e.getAttribute("clicked") || (e.style.border = "1px", e.style.borderStyle = "normal", e.style.borderColor = "#bbbbbb")
                        }), v.getAttribute("clicked") || (v.style.border = "2px", v.style.borderStyle = "solid", v.style.borderColor = "#1b9ddb")
                    };
                    "LABEL" !== g && "SPAN" !== g || ("LABEL" === g && (u = e.target.getAttribute("name"), v = e.target), "SPAN" === g && (u = e.target.parentNode.getAttribute("name"), v = e.target.parentNode), u !== a.SPIN && u !== a.LOSS || t()), (S && C || !S) && (x && h || !x) && u === a.WIN && (t(), u = "")
                }), r.addEventListener("mouseout", function(e) {
                    if ("LABEL" === e.target.nodeName || "SPAN" === e.target.nodeName) {
                        var t;
                        t = "LABEL" === e.target.nodeName ? e.target.parentNode.childNodes : e.target.parentNode.parentNode.childNodes, Array.prototype.slice.call(t, 0).forEach(function(e) {
                            e.getAttribute("clicked") || (e.style.border = "1px", e.style.borderStyle = "normal", e.style.borderColor = "#bbbbbb")
                        })
                    }
                    e.stopPropagation()
                });
                var S, x, E, T;
                n.autospin.steps && !e.getSteps() && (S = d(n.autospin.steps)), l() || !n.autospin.lossLimit || e.getLossLimit() || (x = m(n.autospin.lossLimit)), l() || !n.autospin.winLimit || e.getWinLimit() || (E = f(n.autospin.winLimit), T = document.createElement("div"), T.style.width = "100%", T.style.height = "100%", T.style.position = "absolute", T.style.top = 0, T.style.left = 0);
                var k = document.createElement("div");
                k.innerHTML = o.autoSpinStop, k.style.textAlign = "center", k.style.fontWeight = "normal", k.style.fontSize = "14px", k.style.color = "#111111";
                var I = document.createElement("div");
                I.style.textAlign = "center", I.style.width = "100%", I.style.marginTop = "10px", I.style.marginBottom = "20px";
                var w = document.createElement("div");
                w.innerHTML = "X", w.setAttribute("name", a.CANCEL);
                var R = document.createElement("div");
                R.disabled = !0, R.setAttribute("name", a.START);
                for (var L = [w, R], O = 0; O < 2; O++) L[O].style.borderRadius = "4px", L[O].style.height = "38px", L[O].style.width = "106px", L[O].style.display = "inline-block", L[O].style.lineHeight = "38px", L[O].style.verticalAlign = "middle", L[O].style.cursor = "pointer";
                w.style.backgroundColor = "#1b9ddb", w.style.color = "white", w.style.fontWeight = "blod", w.style.fontSize = "18px", R.style.backgroundColor = "#cccccc", R.style.marginLeft = "10px", R.style.position = "relative";
                var A = document.createElement("div");
                A.setAttribute("name", a.START), A.style.width = 0, A.style.height = 0, A.style.borderStyle = "solid", A.style.borderWidth = "10px 0 10px 17.3px", A.style.borderColor = "transparent transparent transparent white", A.style.position = "absolute", A.style.top = "50%", A.style.left = "50%", A.style.transform = "translate(-50%, -50%)", R.appendChild(A), I.appendChild(w), I.appendChild(R);
                var G = document.createElement("div");
                S && G.appendChild(S), x && G.appendChild(x), E && G.appendChild(E), r.appendChild(G), r.appendChild(k), r.appendChild(I), i.appendChild(r)
            }

            function d(e) {
                return g(e, {
                    info: o.nbrOfAutoSpin,
                    name: a.SPIN
                })
            }

            function m(e) {
                return g(e, {
                    info: o.lossLimit,
                    name: a.LOSS,
                    unit: " " + o.btnBet
                })
            }

            function f(e) {
                return g(e, {
                    info: o.stopSingleWinReachCeiling,
                    name: a.WIN,
                    unit: " " + o.btnBet
                })
            }

            function g(e, t) {
                var n = document.createElement("div");
                n.style.position = "relative";
                var o = document.createElement("div");
                o.innerHTML = t.info, o.style.textAlign = "center", o.style.fontWeight = "bold", o.style.color = "#111111", o.style.fontSize = "16px", o.style.marginTop = "15px";
                var i = document.createElement("div");
                i.style.width = "570px", i.style.margin = "0 auto", i.style.display = "flex", i.style.justifyContent = "space-evenly", i.style.marginTop = "10px", e.forEach(function(e) {
                    var n = document.createElement("label");
                    if (n.style.borderRadius = "2px", n.style.backgroundColor = "#eeeeee", n.style.width = "104px", n.style.borderWidth = "1px", n.style.borderColor = "#bbbbbb", n.style.display = "flex", n.style.justifyContent = "center", n.style.alignItems = "center", n.style.lineHeight = "inherit", n.style.textAlign = "center", n.style.lineHeight = "36px", n.style.height = "36px", n.style.boxSizing = "border-box", n.style.fontWeight = "bold", n.style.fontSize = "14px", n.style.cursor = "pointer", t.name === a.SPIN ? n.innerHTML = e : n.innerHTML = e + "x", t.name === a.WIN ? (n.style.color = "#777777", n.style.cursor = "auto") : n.style.color = "#111111", t.unit) {
                        var o = document.createElement("span");
                        o.innerHTML = t.unit, o.style.color = "#777777", o.style.fontSize = "14px", S(n, o) && (n.style.lineHeight = "normal"), n.appendChild(o)
                    }
                    n.setAttribute("name", t.name), n.setAttribute("value", e), i.appendChild(n)
                });
                var r = document.createElement("hr");
                return r.style.height = "1px", r.style.width = "570px", r.style.backgroundColor = "#e3e3e3", r.style.border = "none", r.style.marginTop = "14px", n.appendChild(o), n.appendChild(i), n.appendChild(r), n
            }

            function v() {
                h = x(t), b = h.addElement(i, 800, 600), h.setStyles({
                    zIndex: 2
                }), b.showElement()
            }

            function y() {
                b.hideElement(), b.removeElement(), h = h.removeContainer(), i = null
            }

            function C() {
                h && h.reflow()
            }
            n = c.serverConfig, o = c.strings, t = c.gameRoot || c.root;
            var h, b, S = function(e, t) {
                    return e.textContent.length + t.textContent.length > 11
                },
                x = e("clientservice/domcontainer/DOMContainer");
            return Object.freeze({
                preload: u,
                render: p,
                destroy: y,
                append: v,
                resize: C
            })
        }
    }), define("clientservice/autospin/ui/DOMMobileStandardUI", ["require", "clientservice/domcontainer/DOMContainer"], function(e) {
        "use strict";
        var t, n, o, i, r, a, s, c, l, u, p, d, m = document.createElement("div"),
            f = {
                SPIN: "SPIN",
                WIN: "WIN",
                LOSS: "LOSS",
                START: "START",
                CANCEL: "CANCEL"
            },
            g = function(e, t) {
                Array.prototype.slice.call(e, 0).forEach(t)
            };
        return function(v) {
            function y(e) {
                D = e, D.game && (F = D.game.left, N = 0 === D.game.top ? "40" : D.game.top, U = D.game.width + "px", W = (0 === D.game.top ? D.game.height - 40 : D.game.height) + "px", X && R(X, {
                    position: "absolute",
                    top: N + "px",
                    left: F + "px",
                    width: U,
                    height: W
                }))
            }

            function C() {
                return !n.autospin.hasOwnProperty("version") || 1 === Number(n.autospin.version)
            }

            function h() {
                _ && clearTimeout(_), _ = setTimeout(function() {
                    b(), _ = void 0, m && (O(), x(q, j), L())
                }, 500)
            }

            function b() {
                if (D && D.game) return void(D.game.width > D.game.height ? (d = !1, H = J) : (d = !0, H = Y));
                window.innerHeight > window.innerWidth ? (d = !0, H = Y) : (d = !1, H = J)
            }

            function S() {}

            function x(e, t) {
                q = e, j = t;
                var d, y, h, b;
                m || (m = document.createElement("div")), m.id = "overlay", m.style.fontSize = "12px", m.style.position = "absolute", m.style.top = 0, m.style.left = 0, m.style.display = "flex", m.style.alignItems = "center", m.style.justifyContent = "center", m.style.width = "100%", m.style.height = "100%", m.style.minHeight = "100%", m.style.minWidth = "100%", m.style.textAlign = "center", m.style.fontFamily = "Arial, Helvetica, sans-serif", m.style.zIndex = "9998", !1 === r && (m.style.visibility = "hidden"), i = document.createElement("div"), i.style.position = "relative", i.style.backgroundColor = "rgba(255, 255, 255, 0.96)", i.style.borderRadius = "20px", i.style.border = "2px solid black", i.style.boxShadow = "2px 2px 8px #000", i.style.width = H.containerWidth, i.style.userSelect = "none", i.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", i.style["-webkit-tap-highlight-color"] = "transparent", i.style["-webkit-text-size-adjust"] = "100%", i.addEventListener("click", function(n) {
                    d = n.target.getAttribute("name"), "LABEL" !== (h = n.target.nodeName) && "SPAN" !== h || ("LABEL" === h && (d = n.target.getAttribute("name"), y = Number(n.target.getAttribute("value")), b = n.target), "SPAN" === h && (d = n.target.parentNode.getAttribute("name"), y = Number(n.target.parentNode.getAttribute("value")), b = n.target.parentNode));
                    var o = function(e) {
                            var t = e.getAttribute("clicked");
                            return "true" === t || "false" !== t && void 0
                        },
                        i = function() {
                            e.setWinLimit(void 0), G.style.backgroundColor = "#cccccc", g(I.getElementsByTagName("LABEL"), function(e) {
                                e.style.color = "#cccccc", o(e) && e.setAttribute("clicked", !1), e.style.border = "", e.style.cursor = "auto"
                            })
                        },
                        r = function() {
                            o(b) ? (b.style.border = "1px", b.style.borderStyle = "normal", b.style.borderColor = "#bbbbbb", b.removeAttribute("clicked"), G.style.backgroundColor = "#cccccc", d === f.SPIN && (l = !1, p = !1, I && i()), d === f.LOSS && (u = !1, p = !1, I && i())) : (g(b.parentNode.childNodes, function(e) {
                                e.style.border = "1px", e.style.borderStyle = "normal", e.style.borderColor = "#bbbbbb", e.removeAttribute("clicked")
                            }), b.style.border = "2px", b.style.borderStyle = "solid", b.style.borderColor = "#ef6c00", b.setAttribute("clicked", !0))
                        };
                    d === f.SPIN && (r(), b.getAttribute("clicked") && (e.setSteps(y), l = !0, s && e.getLossLimit() ? p = !0 : s || (p = !0)), n.stopPropagation()), d === f.LOSS && (r(), b.getAttribute("clicked") && (e.setLossLimit(y), u = !0, a && e.getSteps() ? p = !0 : a || (p = !0)), n.stopPropagation()), d === f.WIN && (S && l || !S) && ((x && u || !x) && (e.setWinLimit(y), r(), d = ""), n.stopPropagation()), (S && l || !S) && ("L" === v.gameConfig.gameType || x && u || !x) && (G.style.backgroundColor = "#ef6c00", p = !0, I && g(I.getElementsByTagName("LABEL"), function(e) {
                        e.style.color = "#111111"
                    })), d === f.CANCEL && (e.resetAutoSpin(), t({
                        cancelAutoSpin: !0
                    }), A(), O()), d === f.START && p && (A(), O(), t())
                });
                var S, x, I;
                n.autospin.steps && (e.getSteps() ? a && (S = E(n.autospin.steps, e.getSteps())) : (S = E(n.autospin.steps), a = !0)), !C() && n.autospin.lossLimit && (e.getLossLimit() ? s && (x = T(n.autospin.lossLimit, e.getLossLimit())) : (x = T(n.autospin.lossLimit), s = !0)), !C() && n.autospin.winLimit && (e.getWinLimit() ? c && (I = k(n.autospin.winLimit, e.getWinLimit())) : (I = k(n.autospin.winLimit), c = !0), p && g(I.getElementsByTagName("LABEL"), function(e) {
                    e.style.color = "#111111"
                }));
                var w = document.createElement("div");
                w.innerHTML = o.autoSpinStop, w.style.textAlign = "center", w.style.fontWeight = "normal", w.style.fontSize = "1em", w.style.color = "#111111";
                var R = document.createElement("div");
                R.style.textAlign = "center", R.style.width = "100%", R.style.marginTop = "10px", R.style.marginBottom = "20px";
                var L = document.createElement("div");
                L.innerHTML = "X", L.setAttribute("name", f.CANCEL);
                var G = document.createElement("div");
                G.disabled = !0, G.setAttribute("name", f.START);
                for (var M = [L, G], P = 0; P < 2; P++) M[P].style.borderRadius = "4px", M[P].style.height = H.actionButtonHeight, M[P].style.width = H.actionButtonWidth, M[P].style.display = "inline-block", M[P].style.lineHeight = H.actionButtonLineHeight, M[P].style.verticalAlign = "middle", M[P].style.cursor = "pointer";
                L.style.backgroundColor = "#1b9ddb", L.style.color = "white", L.style.fontWeight = "blod", L.style.fontSize = "1em", G.style.backgroundColor = "#cccccc", G.style.marginLeft = "10px", G.style.position = "relative", p && (G.style.backgroundColor = "#ef6c00", G.disabled = !1);
                var D = document.createElement("div");
                D.setAttribute("name", f.START), D.style.width = 0, D.style.height = 0, D.style.borderStyle = "solid", D.style.borderWidth = "10px 0 10px 17.3px", D.style.borderColor = "transparent transparent transparent white", D.style.position = "absolute", D.style.top = "50%", D.style.left = "50%", D.style.transform = "translate(-50%, -50%)", G.appendChild(D), R.appendChild(L), R.appendChild(G);
                var N = document.createElement("div");
                S && N.appendChild(S), x && N.appendChild(x), I && N.appendChild(I), i.appendChild(N), i.appendChild(w), i.appendChild(R), m.appendChild(i)
            }

            function E(e, t) {
                return I(e, {
                    info: o.nbrOfAutoSpin,
                    name: f.SPIN,
                    selected: t
                })
            }

            function T(e, t) {
                return I(e, {
                    info: o.lossLimit,
                    name: f.LOSS,
                    unit: " " + o.btnBet,
                    selected: t
                })
            }

            function k(e, t) {
                return I(e, {
                    info: o.stopSingleWinReachCeiling,
                    name: f.WIN,
                    unit: " " + o.btnBet,
                    selected: t
                })
            }

            function I(e, t) {
                var n = document.createElement("div");
                n.style.position = "relative";
                var o = document.createElement("div");
                o.innerHTML = t.info, o.style.textAlign = "center", o.style.fontWeight = "bold", o.style.color = "#111111", o.style.fontSize = "13.5px", o.style.marginTop = "0.9375em";
                var i = document.createElement("div");
                i.style.width = H.templateListWidth, i.style.margin = "0 auto", i.style.display = "flex", i.style.justifyContent = "space-evenly", i.style.marginTop = "0.625em", e.forEach(function(e) {
                    var n = document.createElement("label");
                    if (n.style.borderRadius = "2px", n.style.backgroundColor = "#eeeeee", n.style.width = H.labelWidth, n.style.borderWidth = "1px", n.style.borderColor = "#bbbbbb", n.style.display = "flex", n.style.justifyContent = "center", n.style.alignItems = "center", n.style.lineHeight = "inherit", n.style.textAlign = "center", n.style.lineHeight = "inherit", n.style.height = H.labelHeigth, n.style.boxSizing = "border-box", n.style.fontWeight = "bold", n.style.fontSize = "1em", n.style.cursor = "pointer", t.name === f.SPIN ? n.innerHTML = e : n.innerHTML = e + "x", t.name === f.WIN ? n.style.color = "#777777" : n.style.color = "#111111", t.unit) {
                        var o = document.createElement("span");
                        o.innerHTML = t.unit, o.style.color = "#777777", w(o, t.unit), d && (n.style.flexDirection = "column"), n.appendChild(o)
                    }
                    t.selected === e && (n.style.border = "2px", n.style.borderStyle = "solid", n.style.borderColor = "#ef6c00", n.setAttribute("clicked", !0)), n.setAttribute("name", t.name), n.setAttribute("value", e), i.appendChild(n)
                });
                var r = document.createElement("hr");
                return r.style.height = "1px", r.style.width = H.hrWidth, r.style.backgroundColor = "#e3e3e3", r.style.border = "none", r.style.marginTop = H.hrMarginTop, n.appendChild(o), n.appendChild(i), n.appendChild(r), n
            }

            function w(e, t) {
                t.trim().length > 8 && (e.style.fontSize = "0.8em")
            }

            function R(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.style[n] = t[n]
                })
            }

            function L() {
                X || (X = document.createElement("div"), R(X, {
                    position: "absolute",
                    top: N + "px",
                    left: F + "px",
                    width: U,
                    height: W
                }), t.appendChild(X)), K = $(X), H === J ? (Z = 480, Q = 320) : (Z = 320, Q = 480), V = K.addElement(m, Z, Q), K.setStyles({
                    zIndex: 99
                }), V.showElement()
            }

            function O() {
                m && (V.hideElement(), V.removeElement(), K = K.removeContainer(), m = null, t.removeChild(X), X = void 0)
            }

            function A() {
                p = !1, l = !1, u = !1
            }

            function G() {
                r = !0, m && (m.style.visibility = "visible", X.style.visibility = "visible")
            }

            function M() {
                r = !1, m && (m.style.visibility = "hidden", X.style.visibility = "hidden")
            }
            n = v.serverConfig, o = v.strings, t = v.root;
            var P = v.consoleConfig,
                D = v.sizingData,
                N = parseInt(P.TCustomView ? P.TCustomView.height : 0),
                B = parseInt(P.BCustomView ? P.BCustomView.height : 0),
                F = parseInt(P.LCustomView ? P.LCustomView.width : 0),
                z = parseInt(P.RCustomView ? P.RCustomView.width : 0),
                W = "calc(100% - " + (N + B) + "px)",
                U = "calc(100% - " + (F + z) + "px)";
            D && D.game && (F = D.game.left, N = 0 === D.game.top ? "40" : D.game.top, U = D.game.width + "px", W = (0 === D.game.top ? D.game.height - 40 : D.game.height) + "px");
            var H, q, j, _, J = {
                    containerWidth: "100%",
                    containerHeight: "100%",
                    actionButtonWidth: "7.615em",
                    actionButtonHeight: "2.375em",
                    actionButtonLineHeight: "2.375em",
                    templateListWidth: "90%",
                    labelWidth: "18%",
                    labelHeigth: "2em",
                    labelMarginRight: "0.5em",
                    hrWidth: "90%",
                    hrMarginTop: "0.9375em",
                    startIconMarginTop: "0.5em"
                },
                Y = {
                    containerWidth: "90%",
                    containerHeight: "75%",
                    actionButtonWidth: "7.5em",
                    actionButtonHeight: "3.5em",
                    actionButtonLineHeight: "3.5em",
                    templateListWidth: "90%",
                    labelWidth: "18%",
                    labelHeigth: "4.375em",
                    labelMarginRight: "5px",
                    hrWidth: "90%",
                    hrMarginTop: "10px",
                    startIconMarginTop: "15px"
                };
            b(), window.addEventListener("orientationchange", h);
            var K, V, X, Z = 480,
                Q = 320,
                $ = e("clientservice/domcontainer/DOMContainer");
            return Object.freeze({
                preload: S,
                render: x,
                destroy: O,
                append: L,
                show: G,
                hide: M,
                resize: y
            })
        }
    }), define("clientservice/autospin/ui/DOMTabletStandardUI", ["require", "clientservice/domcontainer/DOMContainer"], function(e) {
        "use strict";
        var t, n, o, i, r, a, s = {
                SPIN: "SPIN",
                WIN: "WIN",
                LOSS: "LOSS",
                START: "START",
                CANCEL: "CANCEL"
            },
            c = function(e, t) {
                Array.prototype.slice.call(e, 0).forEach(t)
            };
        return function(l) {
            function u() {
                return !n.autospin.hasOwnProperty("version") || 1 === Number(n.autospin.version)
            }

            function p() {}

            function d(e, t) {
                var p, d, v, y, h, b, S;
                i = document.createElement("div"), i.id = "overlay", i.style.position = "absolute", i.style.top = 0, i.style.left = 0, i.style.display = "flex", i.style.alignItems = "center", i.style.justifyContent = "center", i.style.width = "100%", i.style.height = "100%", i.style.minHeight = "100%", i.style.minWidth = "100%", i.style.textAlign = "center", i.style.fontFamily = "Arial, Helvetica, sans-serif", i.style.zIndex = "9998", !1 === a && (i.style.visibility = "hidden"), r = document.createElement("div"), r.style.position = "relative", r.style.backgroundColor = "rgba(255, 255, 255, 0.96)", r.style.borderRadius = "20px", r.style.border = "2px solid black", r.style.boxShadow = "2px 2px 8px #000", r.style.width = "610px", r.style.userSelect = "none", r.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.style["-webkit-tap-highlight-color"] = "transparent", r.style["-webkit-text-size-adjust"] = "100%", r.addEventListener("click", function(n) {
                    p = n.target.getAttribute("name"), "LABEL" !== (v = n.target.nodeName) && "SPAN" !== v || ("LABEL" === v && (p = n.target.getAttribute("name"), d = Number(n.target.getAttribute("value")), y = n.target), "SPAN" === v && (p = n.target.parentNode.getAttribute("name"), d = Number(n.target.parentNode.getAttribute("value")), y = n.target.parentNode));
                    var o = function(e) {
                            var t = e.getAttribute("clicked");
                            return "true" === t || "false" !== t && void 0
                        },
                        r = function() {
                            e.setWinLimit(void 0), L.style.backgroundColor = "#cccccc", c(T.getElementsByTagName("LABEL"), function(e) {
                                e.style.color = "#cccccc",
                                    o(e) && e.setAttribute("clicked", !1), e.style.border = "", e.style.cursor = "auto"
                            })
                        },
                        a = function() {
                            o(y) ? (y.style.border = "1px", y.style.borderStyle = "normal", y.style.borderColor = "#bbbbbb", y.removeAttribute("clicked"), L.style.backgroundColor = "#cccccc", p === s.SPIN && (h = !1, S = !1, T && r()), p === s.LOSS && (b = !1, S = !1, T && r())) : (c(y.parentNode.childNodes, function(e) {
                                e.style.border = "1px", e.style.borderStyle = "normal", e.style.borderColor = "#bbbbbb", e.removeAttribute("clicked")
                            }), y.style.border = "2px", y.style.borderStyle = "solid", y.style.borderColor = "#ef6c00", y.setAttribute("clicked", !0))
                        };
                    p === s.SPIN && (a(), y.getAttribute("clicked") && (e.setSteps(d), h = !0), n.stopPropagation()), p === s.LOSS && (a(), y.getAttribute("clicked") && (e.setLossLimit(d), b = !0), n.stopPropagation()), p === s.WIN && (x && h || !x) && ((E && b || !E) && (e.setWinLimit(d), a(), p = ""), n.stopPropagation()), (x && h || !x) && ("L" === l.gameConfig.gameType || E && b || !E) && (L.style.backgroundColor = "#ef6c00", S = !0, T && c(T.getElementsByTagName("LABEL"), function(e) {
                        e.style.color = "#111111"
                    })), p === s.CANCEL && (e.resetAutoSpin(), t({
                        cancelAutoSpin: !0
                    }), C()), p === s.START && S && (i.style.display = "none", t(), C())
                }), r.addEventListener("mouseover", function(e) {
                    v = e.target.nodeName;
                    var t = function() {
                        c(y.parentNode.childNodes, function(e) {
                            e.getAttribute("clicked") || (e.style.border = "1px", e.style.borderStyle = "normal", e.style.borderColor = "#bbbbbb")
                        }), y.getAttribute("clicked") || (y.style.border = "2px", y.style.borderStyle = "solid", y.style.borderColor = "#1b9ddb")
                    };
                    "LABEL" !== v && "SPAN" !== v || ("LABEL" === v && (p = e.target.getAttribute("name"), y = e.target), "SPAN" === v && (p = e.target.parentNode.getAttribute("name"), y = e.target.parentNode), p !== s.SPIN && p !== s.LOSS || t()), (x && h || !x) && (E && b || !E) && p === s.WIN && (t(), p = "")
                }), r.addEventListener("mouseout", function(e) {
                    "LABEL" === e.target.nodeName && Array.prototype.slice.call(e.target.parentNode.childNodes, 0).forEach(function(e) {
                        e.getAttribute("clicked") || (e.style.border = "1px", e.style.borderStyle = "normal", e.style.borderColor = "#bbbbbb")
                    }), e.stopPropagation()
                });
                var x, E, T, k;
                n.autospin.steps && !e.getSteps() && (x = m(n.autospin.steps)), u() || !n.autospin.lossLimit || e.getLossLimit() || (E = f(n.autospin.lossLimit)), u() || !n.autospin.winLimit || e.getWinLimit() || (T = g(n.autospin.winLimit), k = document.createElement("div"), k.style.width = "100%", k.style.height = "100%", k.style.position = "absolute", k.style.top = 0, k.style.left = 0);
                var I = document.createElement("div");
                I.innerHTML = o.autoSpinStop, I.style.textAlign = "center", I.style.fontWeight = "normal", I.style.fontSize = "14px", I.style.color = "#111111";
                var w = document.createElement("div");
                w.style.textAlign = "center", w.style.width = "100%", w.style.marginTop = "10px", w.style.marginBottom = "20px";
                var R = document.createElement("div");
                R.innerHTML = "X", R.setAttribute("name", s.CANCEL);
                var L = document.createElement("div");
                L.disabled = !0, L.setAttribute("name", s.START);
                for (var O = [R, L], A = 0; A < 2; A++) O[A].style.borderRadius = "4px", O[A].style.height = "38px", O[A].style.width = "106px", O[A].style.display = "inline-block", O[A].style.lineHeight = "38px", O[A].style.verticalAlign = "middle", O[A].style.cursor = "pointer";
                R.style.backgroundColor = "#1b9ddb", R.style.color = "white", R.style.fontWeight = "blod", R.style.fontSize = "18px", L.style.backgroundColor = "#cccccc", L.style.marginLeft = "10px", L.style.position = "relative";
                var G = document.createElement("div");
                G.setAttribute("name", s.START), G.style.width = 0, G.style.height = 0, G.style.borderStyle = "solid", G.style.borderWidth = "10px 0 10px 17.3px", G.style.borderColor = "transparent transparent transparent white", G.style.position = "absolute", G.style.top = "50%", G.style.left = "50%", G.style.transform = "translate(-50%, -50%)", L.appendChild(G), w.appendChild(R), w.appendChild(L);
                var M = document.createElement("div");
                x && M.appendChild(x), E && M.appendChild(E), T && M.appendChild(T), r.appendChild(M), r.appendChild(I), r.appendChild(w), i.appendChild(r)
            }

            function m(e) {
                return v(e, {
                    info: o.nbrOfAutoSpin,
                    name: s.SPIN
                })
            }

            function f(e) {
                return v(e, {
                    info: o.lossLimit,
                    name: s.LOSS,
                    unit: " " + o.btnBet
                })
            }

            function g(e) {
                return v(e, {
                    info: o.stopSingleWinReachCeiling,
                    name: s.WIN,
                    unit: " " + o.btnBet
                })
            }

            function v(e, t) {
                var n = document.createElement("div");
                n.style.position = "relative";
                var o = document.createElement("div");
                o.innerHTML = t.info, o.style.textAlign = "center", o.style.fontWeight = "bold", o.style.color = "#111111", o.style.fontSize = "16px", o.style.marginTop = "15px";
                var i = document.createElement("div");
                i.style.width = "570px", i.style.margin = "0 auto", i.style.display = "flex", i.style.justifyContent = "space-evenly", i.style.marginTop = "10px", e.forEach(function(e) {
                    var n = document.createElement("label");
                    if (n.style.borderRadius = "2px", n.style.backgroundColor = "#eeeeee", n.style.width = "104px", n.style.borderWidth = "1px", n.style.borderColor = "#bbbbbb", n.style.display = "flex", n.style.justifyContent = "center", n.style.alignItems = "center", n.style.textAlign = "center", n.style.lineHeight = "36px", n.style.height = "36px", n.style.boxSizing = "border-box", n.style.fontWeight = "bold", n.style.fontSize = "14px", n.style.cursor = "pointer", t.name === s.SPIN ? n.innerHTML = e : n.innerHTML = e + "x", t.name === s.WIN ? n.style.color = "#777777" : n.style.color = "#111111", t.unit) {
                        var o = document.createElement("span");
                        o.innerHTML = t.unit, o.style.color = "#777777", o.style.fontSize = "14px", n.appendChild(o)
                    }
                    n.setAttribute("name", t.name), n.setAttribute("value", e), i.appendChild(n)
                });
                var r = document.createElement("hr");
                return r.style.height = "1px", r.style.width = "570px", r.style.backgroundColor = "#e3e3e3", r.style.border = "none", r.style.marginTop = "14px", n.appendChild(o), n.appendChild(i), n.appendChild(r), n
            }

            function y() {
                x = I(t), T = 800, k = 600, E = x.addElement(i, T, k), x.setStyles({
                    zIndex: 99
                }), E.showElement()
            }

            function C() {
                E.hideElement(), E.removeElement(), x = x.removeContainer(), i = null
            }

            function h() {
                a = !0, i && (i.style.visibility = "visible")
            }

            function b() {
                a = !1, i && (i.style.visibility = "hidden")
            }

            function S() {
                x && x.reflow()
            }
            n = l.serverConfig, o = l.strings, t = l.gameRoot || l.root;
            var x, E, T = 800,
                k = 600,
                I = e("clientservice/domcontainer/DOMContainer");
            return Object.freeze({
                preload: p,
                render: d,
                destroy: C,
                append: y,
                show: h,
                hide: b,
                resize: S
            })
        }
    }), define("clientservice/autospin/ui/AutoSpinUI", ["require", "clientservice/autospin/ui/DOMDesktopStandardUI", "clientservice/autospin/ui/DOMMobileStandardUI", "clientservice/autospin/ui/DOMTabletStandardUI"], function(e) {
        "use strict";
        return function(t) {
            function n(e, t) {
                l.render(e, t)
            }

            function o() {
                l.append()
            }

            function i(e, t) {
                l.showStopMessage(e, t)
            }

            function r() {}

            function a(e) {
                l.resize && l.resize(e)
            }

            function s() {
                l.show()
            }

            function c() {
                l.hide()
            }
            var l, u = t.serverConfig.channel.toLowerCase(),
                p = t.serverConfig.presenttype.toLowerCase();
            if ("int" === u) "std" === p && (l = e("clientservice/autospin/ui/DOMDesktopStandardUI")(t));
            else if ("mob" === u) "std" === p && (l = e("clientservice/autospin/ui/DOMMobileStandardUI")(t));
            else {
                if ("tab" !== u) throw new Error("AutoSpinUI initialize error: not support channel or presenttype");
                "std" === p && (l = e("clientservice/autospin/ui/DOMTabletStandardUI")(t))
            }
            return Object.freeze({
                create: n,
                show: o,
                showStopMessage: i,
                update: r,
                resize: a,
                display: s,
                hide: c
            })
        }
    }), define("clientservice/autospin/AutoSpinController", ["require", "clientservice/autospin/ui/AutoSpinUI"], function(e) {
        "use strict";
        return function(t) {
            function n(e) {
                d = e.bus, m = e.serverConfig, v = e.stringsConfig, f = e.gameConfig
            }

            function o() {
                R.reset()
            }

            function i(e) {
                var t;
                e && e.stopReason && (t = e.stopReason), k.getOriginalSteps() && u.postAutoSpinStopEvent(I || t, k), S = !0, b || r()
            }

            function r() {
                k.resetAutoSpin(), R.reset()
            }

            function a() {
                k.isAutoSpinStarted() && (m.autospin.hasOwnProperty("version") && 1 !== Number(m.autospin.version) ? s(!0, !0) : s(!1, !0))
            }

            function s(e, t) {
                h ? b && r() : (d.publish({
                    channel: "ClientService",
                    topic: "Game.StopAutoSpin",
                    data: {}
                }), h = !0, b = b || !!t), t && !e && k.resetAutoSpin()
            }

            function c(e) {
                return R.checkResponse(e) ? void s(!0) : w.checkResponse(e) ? void s(!0) : void 0
            }

            function l(e) {
                u = e
            }
            var u, p, d = t.bus,
                m = t.serverConfig,
                f = t.gameConfig,
                g = t.consoleConfig,
                v = t.stringsConfig,
                y = t.errorHandler,
                C = {},
                h = !1,
                b = !1,
                S = !1,
                x = void 0,
                E = void 0,
                T = .01,
                k = function() {
                    var e = {
                            originalSteps: void 0,
                            steps: void 0,
                            lossLimit: void 0,
                            winLimit: void 0,
                            isAutoSpinStarted: !1
                        },
                        t = function() {
                            e = {
                                originalSteps: void 0,
                                steps: void 0,
                                lossLimit: void 0,
                                winLimit: void 0,
                                isAutoSpinStarted: !1
                            }, h = !1, b = !1, S = !1
                        },
                        n = function() {
                            if (E = !1, m.paramRGS.hasOwnProperty("denomamount") && (T = m.paramRGS.denomamount), m.hasOwnProperty("tierThresholdAmt")) {
                                if (x = Number(m.tierThresholdAmt), m.autospin.hasOwnProperty("stopAtTierThreshold")) {
                                    var e = m.autospin.stopAtTierThreshold.toUpperCase();
                                    "Y" === e && (E = !0)
                                }
                            } else x = void 0;
                            return "L" === f.gameType
                        };
                    return {
                        setSteps: function(t) {
                            e.originalSteps = t, e.steps = t
                        },
                        getSteps: function() {
                            return e.steps
                        },
                        reduceSteps: function() {
                            e.steps -= 1
                        },
                        setLossLimit: function(t) {
                            e.lossLimit = t
                        },
                        getLossLimit: function() {
                            return e.lossLimit
                        },
                        setWinLimit: function(t) {
                            e.winLimit === t ? e.winLimit = void 0 : e.winLimit = t
                        },
                        getWinLimit: function() {
                            return e.winLimit
                        },
                        startAutoSpin: function() {
                            e.isAutoSpinStarted = !0
                        },
                        isAutoSpinStarted: function() {
                            return e.isAutoSpinStarted
                        },
                        getOriginalSteps: function() {
                            return e.originalSteps
                        },
                        resetAutoSpin: t,
                        isIWAutoSpinCheck: n
                    }
                }(),
                I = "ManualStop",
                w = function() {
                    var e, t = {
                            "@notification": "Y",
                            "@type": "",
                            Id: "",
                            Message: "",
                            Buttons: {
                                Button: {
                                    Text: v.btnOk ? v.btnOk : "OK",
                                    Cmd: {
                                        "@name": ""
                                    }
                                }
                            }
                        },
                        n = 0,
                        o = 0,
                        i = function() {
                            n = 0, o = 0, e = void 0
                        };
                    return {
                        checkResponse: function(r) {
                            if (!h) {
                                if (k.isIWAutoSpinCheck()) {
                                    if (b && S) return !0;
                                    if ("Start" === r.OutcomeDetail.GameStatus && (k.reduceSteps(), 0 === k.getSteps())) return I = "AutoStop", !0;
                                    var a = Number(r.OutcomeDetail.Payout) * T,
                                        s = Number(r.OutcomeDetail.Payout);
                                    if (n += Number(r.OutcomeDetail.Payout), o += Number(r.OutcomeDetail.Settled), e || 0 === (e = Number(r.OutcomeDetail.Settled)) && (e = Number(r.OutcomeDetail.Pending)), void 0 !== x && E && a >= x) return i(), t["@type"] = "SINGLE_WIN_STOP_AUTO_PLAY", t.Id = "9032", t.Message = v.winLimitHitStopAutoplay ? v.winLimitHitStopAutoplay : "Single win limit reached. Auto Play stopped. ", y.throwError("CD-205", null, t, 1), I = "WinLimitStop", !0;
                                    if (m.hasOwnProperty("autospin")) {
                                        if (void 0 !== k.getLossLimit() && k.getLossLimit() > 0 && o - n >= k.getLossLimit() * e) return i(), t["@type"] = "UK_AUTO_SPIN_LOSS_STOP", t.Id = "9030", t.Message = v.spinTimeHit && v.lossLimitHit ? v.spinTimeHit + "\n" + v.lossLimitHit : "Auto Spins stopped\nLoss limit reached", y.throwError("CD-205", null, t, 1), I = "LossLimitStop", !0;
                                        if (void 0 !== k.getWinLimit() && k.getWinLimit() > 0 && s >= k.getWinLimit() * e) return i(), t["@type"] = "UK_AUTO_SPIN_WIN_STOP", t.Id = "9031", t.Message = v.spinTimeHit && v.winLimitHit ? v.spinTimeHit + "\n" + v.winLimitHit : "Auto Spins stopped\nSingle win limit reached", y.throwError("CD-205", null, t, 1), I = "WinLimitStop", !0
                                    }(r.Exception || r.Messages && "1601" === r.Messages.Message.Id) && (I = "ErrorStop"), r.JackpotOutcome && r.JackpotOutcome.Jackpot && r.JackpotOutcome.Jackpot["@value"] && (I = "JackpotStop")
                                }
                            }
                        }
                    }
                }(),
                R = function() {
                    var e, t = 0,
                        n = 0,
                        o = function() {
                            t = 0, n = 0, e = void 0
                        },
                        i = {
                            "@notification": "Y",
                            "@type": "",
                            Id: "",
                            Message: "",
                            Buttons: {
                                Button: {
                                    Text: v.btnOk ? v.btnOk : "OK",
                                    Cmd: {
                                        "@name": ""
                                    }
                                }
                            }
                        };
                    return {
                        checkResponse: function(r) {
                            if (!k.isIWAutoSpinCheck()) {
                                if (b && S) return !0;
                                if (m.autospin.hasOwnProperty("version") && 1 !== Number(m.autospin.version)) {
                                    var a = Number(r.OutcomeDetail.Payout);
                                    if (t += a, n += Number(r.OutcomeDetail.Settled), e || 0 === (e = Number(r.OutcomeDetail.Settled)) && (e = Number(r.OutcomeDetail.Pending)), "Start" === r.OutcomeDetail.GameStatus) {
                                        if (k.reduceSteps(), 0 === k.getSteps()) return o(), I = "AutoStop", !0;
                                        if (void 0 !== k.getLossLimit() && k.getLossLimit() > 0 && n - t >= k.getLossLimit() * e) return o(), i["@type"] = "UK_AUTO_SPIN_LOSS_STOP", i.Id = "9030", i.Message = v.spinTimeHit && v.lossLimitHit ? v.spinTimeHit + "\n" + v.lossLimitHit : "Auto Spins stopped\nLoss limit reached", y.throwError("CD-205", null, i, 1), I = "LossLimitStop", !0;
                                        if (void 0 !== k.getWinLimit() && k.getWinLimit() > 0 && a >= k.getWinLimit() * e) return o(), i["@type"] = "UK_AUTO_SPIN_WIN_STOP", i.Id = "9031", i.Message = v.spinTimeHit && v.winLimitHit ? v.spinTimeHit + "\n" + v.winLimitHit : "Auto Spins stopped\nSingle win limit reached", y.throwError("CD-205", null, i, 1), I = "WinLimitStop", !0
                                    }(r.Exception || r.Messages && "1601" === r.Messages.Message.Id) && (I = "ErrorStop"), r.JackpotOutcome && r.JackpotOutcome.Jackpot && r.JackpotOutcome.Jackpot["@value"] && (I = "JackpotStop")
                                }
                            }
                        },
                        reset: o
                    }
                }(),
                L = function(e, t) {
                    return !(!e.autospin.steps || t.getSteps()) || "L" !== f.gameType && !(!e.autospin.lossLimit || t.getLossLimit())
                };
            return d.subscribe({
                channel: "Game",
                topic: "Game.AutoSpinOption",
                callback: function(n, o) {
                    k.resetAutoSpin(), n.hasOwnProperty("steps") && void 0 !== n.steps && k.setSteps(n.steps), n.hasOwnProperty("lossLimit") && void 0 !== n.lossLimit && k.setLossLimit(n.lossLimit), n.hasOwnProperty("winLimit") && void 0 !== n.winLimit && k.setWinLimit(n.winLimit), L(m, k) ? (p = e("clientservice/autospin/ui/AutoSpinUI")({
                        serverConfig: m,
                        consoleConfig: g,
                        gameConfig: f,
                        strings: v,
                        root: t.root,
                        gameRoot: t.gameRoot,
                        sizingData: C
                    }), p.create(k, function(e) {
                        var t = {
                            action: "play"
                        };
                        e && e.cancelAutoSpin ? t.action = "cancel" : (k.startAutoSpin(), k.getSteps() && (t.steps = k.getSteps()), k.getLossLimit() && (t.lossLimit = k.getLossLimit()), k.getWinLimit() && (t.winLimit = k.getWinLimit()), u.postAutoSpinExecutionEvent(k)), o.reply(null, t)
                    }), p.show()) : (k.startAutoSpin(), u.postAutoSpinExecutionEvent(k), o.reply(null, {}))
                }
            }), d.subscribe({
                channel: "Game",
                topic: "Game.AutoSpinStart",
                callback: o
            }), d.subscribe({
                channel: "Game",
                topic: "Game.AutoSpinStopped",
                callback: i
            }), d.subscribe({
                channel: "ConsoleService",
                topic: "Game.AutoSpinStop",
                callback: a
            }), d.subscribe({
                channel: "GameService",
                topic: "Game.AutoSpinStop",
                callback: a
            }), d.subscribe({
                channel: "Game",
                topic: "Game.Capabilities",
                callback: function(e) {
                    e && e.screen && e.screen.hasOwnProperty("display") && (e.screen.display ? p.display() : e.screen.display || p.hide())
                }
            }), d.subscribe({
                channel: "Kernel",
                topic: "System.Resize",
                callback: function(e) {
                    C = e, p && p.resize(e)
                }
            }), Object.freeze({
                init: n,
                checkAutoSpinLimits: c,
                isAutoSpinStarted: function() {
                    return k.isAutoSpinStarted()
                },
                setCECCommand: l
            })
        }
    }), define("clientservice/transformer/JpsDataTransformer", ["require"], function(e) {
        "use strict";

        function t(e) {
            return e
        }

        function n(e) {
            return e
        }
        return function() {
            return {
                transformMeterResponseData: t,
                transformMessageResponseData: n
            }
        }
    }), define("clientservice/communicator/JpsCommunicator", ["require", "clientservice/transformer/JpsDataTransformer", "clientservice/communicator/DataAdapter"], function(e) {
        "use strict";
        return function(t) {
            function n(e, t, o) {
                var r = c(),
                    l = r.retry;
                l <= 0 && (l = 1), o || (o = 0), s.httpCall(i, function(i) {
                    var r = a.transformMeterResponseData(i);
                    s.deepFreezeJsonObj(r), r.exception ? o < l - 1 ? n(e, t, o + 1) : t(r.exception) : e(r)
                }, t, r)
            }

            function o(e, n, i) {
                var l = c({
                        language: t.serverConfig.paramRGS.language
                    }),
                    u = l.retry;
                u <= 0 && (u = 1), i || (i = 0), s.httpCall(r, function(t) {
                    var r = a.transformMessageResponseData(t);
                    s.deepFreezeJsonObj(r), r.exception ? i < u - 1 ? o(e, n, i + 1) : n(r.exception) : e(r)
                }, n, l)
            }
            var i = t.serverConfig.jackpotMeterUrl,
                r = t.serverConfig.jackpotWinsUrl,
                a = e("clientservice/transformer/JpsDataTransformer")(t),
                s = e("clientservice/communicator/DataAdapter")(),
                c = function(e) {
                    var n = {
                        method: "GET",
                        timeout: Number(t.serverConfig.requestTimeout),
                        retry: Number(t.serverConfig.requestRetries),
                        accept: "json",
                        headerMap: {
                            "Content-Type": "application/json"
                        },
                        paramMap: {
                            currencycode: t.serverConfig.paramRGS.currencycode
                        }
                    };
                    if (e)
                        for (var o in e) n.paramMap[o] = e[o];
                    return n
                };
            return {
                requestJackpotMeterResponse: n,
                requestPlayerAwarenessResponse: o
            }
        }
    }), define("clientservice/commands/JpsCommand", ["require", "clientservice/communicator/JpsCommunicator", "kernel/logger/Logger"], function(e) {
        "use strict";
        return function(t, n, o, i) {
            function r(e) {
                if (!e) return o.pauseGame(), void n.throwError("CD-006", function() {
                    o.unPauseGame()
                });
                if (!e.id) return void n.throwError(e);
                var t = function() {};
                switch (e.id) {
                    case 1003:
                        return void n.throwError("JP-103", t);
                    case 1004:
                        return void n.throwError("JP-104", t);
                    case 1006:
                        return void n.throwError("JP-106", t);
                    case 1007:
                        return void n.throwError("JP-107", t);
                    case 1008:
                        return void n.throwError("JP-108", t);
                    default:
                        n.throwError("JP-101", t)
                }
            }

            function a(e) {
                y.requestJackpotMeterResponse(function(n) {
                    if (n.exception) return void r(n.exception);
                    if (n.jackpots && void 0 !== n.messageId) {
                        if (e && "function" == typeof e) {
                            var o = s(n);
                            e({
                                jackpotCurrencyCode: o
                            })
                        }
                        t.publish({
                            channel: "ClientService",
                            topic: "Jackpot.MeterUpdate",
                            data: n
                        }), f !== n.messageId && (f = n.messageId, c())
                    } else r("CD-006")
                }, function(e) {
                    "CD-001" === e ? r() : m(e)
                })
            }

            function s(e) {
                var t, n;
                return e && e.jackpots && (t = e.jackpots.jackpot, t && Array.isArray(t) && (t = t[0]), n = t.currency), n
            }

            function c(e) {
                y.requestPlayerAwarenessResponse(function(n) {
                    if (n.exception) return void r(n.exception);
                    e && "function" == typeof e && e(), n.playerMessage ? t.publish({
                        channel: "ClientService",
                        topic: "Jackpot.PlayerMessageUpdate",
                        data: n
                    }) : r("CD-006")
                }, function(e) {
                    "CD-001" === e ? r() : m(e)
                })
            }

            function l(e) {
                i.serverConfig.jackpotMeterUrl && a(function(n) {
                    S++, e && "function" == typeof e && e(n), g = i.serverConfig.jackpotMeterRequestDelay ? setInterval(a, i.serverConfig.jackpotMeterRequestDelay) : setInterval(a, h), t.subscribe({
                        channel: "Game",
                        topic: "Jackpot.MeterRequest",
                        callback: function(e) {
                            a()
                        }
                    })
                })
            }

            function u(e) {
                clearInterval(g)
            }

            function p(e) {
                i.serverConfig.jackpotWinsUrl && c(function() {
                    S++, v = i.serverConfig.jackpotPlayerMessageRequestDelay ? setInterval(c, i.serverConfig.jackpotPlayerMessageRequestDelay) : setInterval(c, b), t.subscribe({
                        channel: "Game",
                        topic: "Jackpot.PlayerMessageRequest",
                        callback: function(e) {
                            c()
                        }
                    })
                })
            }

            function d(e) {
                clearInterval(v)
            }

            function m(e) {
                if (C.log("JPS meter request fails for" + e, "JpsCommand"), "CD-002" === e || "CD-006" === e) {
                    if (0 === S) return S++, void r("CD-006")
                } else r(e)
            }
            var f, g, v, y = e("clientservice/communicator/JpsCommunicator")(i),
                C = e("kernel/logger/Logger"),
                h = 15e3,
                b = 6e4,
                S = 0;
            return {
                startJackpot: function(e) {
                    l(e), p(e)
                },
                stopJackpot: function(e) {
                    u(e), d(e)
                }
            }
        }
    }), define("clientservice/promospin/ui/DOMDesktopStandardUI", ["require"], function(e) {
        "use strict";
        var t, n, o, i, r = {
                loadFinished: !1,
                createChooseBackgroundDelay: {},
                createOfferBackgroundDelay: {},
                createCongratulationBackgroundDelay: {}
            },
            a = e.toUrl("./asset"),
            s = a.split("/js/clientservice")[0] + "/asset/",
            c = "?" + a.split("?")[1];
        return function(e) {
            function a(e, n) {
                if (o = document.createElement("div"), o.style.position = "relative", o.style.height = "100%", o.style.width = "100%", o.style.minHeight = "100%", o.style.textAlign = "center", o.style.zIndex = 9999, o.style.backgroundSize = "1920px 1080px", o.style.overflow = "hidden", "PLAY_MODE_CHOICE" === e["@type"]) {
                    o.style.backgroundColor = "#100E19", l = C(), i = y({
                        color: "black",
                        fontSize: "4em",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        margin: "0 auto",
                        textAlign: "center",
                        width: "80%",
                        padding: "50px"
                    }, e.extraInfo || e.Message);
                    var a = {
                            fontSize: "15px",
                            display: "block",
                            margin: "0 auto",
                            paddingTop: "12px",
                            paddingBottom: "11px",
                            width: "318px",
                            borderRadius: "30pt",
                            cursor: "pointer"
                        },
                        s = {
                            marginBottom: "15px",
                            background: "linear-gradient(#959595, #61676A)"
                        },
                        c = {
                            background: "linear-gradient(#FFAB0D, #EB7E00)"
                        },
                        f = p([a, s], e.Buttons.Button[0].Text, "div"),
                        S = p([a, c], e.Buttons.Button[1].Text, "div");
                    m(f, n, e.Buttons.Button[0].Cmd["@name"]), m(S, n, e.Buttons.Button[1].Cmd["@name"]);
                    var T = d({}, [f, S]);
                    i.appendChild(T), r.loadFinished && (o.appendChild(l), o.appendChild(i)), t.appendChild(o), setTimeout(function() {
                        r.loadFinished && (l.style.visibility = "visible", l.style.transition = "1s", l.style.transform = "rotate(0deg)", i.style.visibility = "visible", i.style.transition = "1s", i.style.transform = "translate(-50%,-30%)")
                    }, 0)
                } else if ("FREESPIN_CONGRATULATION" === e["@type"] || "FREESPIN_CONGRATULATION_NOT_WIN" === e["@type"]) {
                    l = b();
                    var k = document.createElement("div");
                    x(k, {
                        position: "absolute",
                        width: "30%",
                        background: "#FFFFFF",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                        left: "50%",
                        textAlign: "center",
                        borderRadius: "15pt",
                        minWidth: "550px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var I = document.createElement("div");
                    x(I, {
                        margin: "20px auto 10px"
                    });
                    var w = document.createElement("img");
                    w.src = g("stars.png"), I.appendChild(w);
                    var R = document.createElement("div");
                    if (x(R, {
                            width: "100%",
                            fontSize: "24pt",
                            color: "#000000",
                            margin: "0 auto"
                        }), u.freespinComplete) {
                        var L = document.createElement("div");
                        L.innerText = u.freespinComplete, x(L, {
                            fontSize: "24px"
                        }), R.appendChild(L)
                    }
                    var O;
                    if (O = document.createElement("div"), "FREESPIN_CONGRATULATION" === e["@type"])
                        if (x(O, {
                                width: "100%",
                                fontSize: "24px",
                                color: "#000000",
                                margin: "0 auto",
                                marginTop: "13px"
                            }), E(e.Message)) {
                            var A = E(e.Message)[0],
                                G = document.createTextNode(e.Message.replace(A, "")),
                                M = document.createElement("span");
                            M.innerText = A.substr(1, A.length - 2), x(M, {
                                fontSize: "24pt",
                                fontWeight: "bold",
                                color: "#FFAB0D"
                            }), O.appendChild(G), O.appendChild(M)
                        } else {
                            var G = document.createTextNode(e.Message);
                            O.appendChild(G)
                        }
                    else if (!u.freespinComplete) {
                        var G = document.createTextNode(e.Message);
                        O.appendChild(G)
                    }
                    var a = {
                            fontSize: "18pt",
                            paddingTop: "12px",
                            paddingBottom: "11px",
                            color: "white",
                            width: "288px",
                            borderRadius: "30pt",
                            background: "linear-gradient(#FFAB0D, #EB7E00)",
                            cursor: "pointer",
                            margin: "25px auto"
                        },
                        P = p(a, u.btnTSReload, "div");
                    m(P, n), k.appendChild(I), k.appendChild(R), O && k.appendChild(O), k.appendChild(P), o.appendChild(l), o.appendChild(k), t.appendChild(o), setTimeout(function() {
                        k.style.visibility = "visible", k.style.transition = "1s", k.style.transform = "translate(-50%,-80%)"
                    }, 1e3)
                } else {
                    l = h();
                    var k = document.createElement("div");
                    x(k, {
                        position: "absolute",
                        width: "20%",
                        background: "#FFFFFF",
                        top: "50%",
                        transform: "translate(-50%,-30%)",
                        left: "50%",
                        textAlign: "center",
                        borderRadius: "15pt",
                        minWidth: "422px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var I = document.createElement("div");
                    x(I, {
                        margin: "20px auto"
                    });
                    var w = document.createElement("img");
                    w.src = g("stars.png"), I.appendChild(w);
                    var R = document.createElement("div");
                    x(R, {
                        width: "100%",
                        fontSize: "24pt",
                        color: "#000000",
                        margin: "0 auto"
                    });
                    var D = document.createTextNode(u.freeSpinOptionReminder);
                    R.appendChild(D), k.appendChild(I), k.appendChild(R);
                    var N = {
                        fontSize: "14px",
                        paddingTop: "12px",
                        paddingBottom: "11px",
                        color: "white",
                        width: "288px",
                        borderRadius: "30pt",
                        background: "linear-gradient(#FFAB0D, #EB7E00)",
                        cursor: "pointer",
                        margin: "25px auto"
                    };
                    v(k, e, N, n), o.appendChild(l), o.appendChild(k), t.appendChild(o), setTimeout(function() {
                        k.style.visibility = "visible", k.style.transition = "1s", k.style.transform = "translate(-50%,-50%)"
                    }, 1e3)
                }
            }
            var l, u = e.stringsConfig;
            t = e.root, n = e.gameRoot;
            var p = function(e, t, n) {
                    var o;
                    return o = n ? document.createElement(n) : document.createElement("spin"), o.style.textAlign = "center", o.style.userSelect = "none", Array.isArray(e) ? e.forEach(function(e) {
                        x(o, e)
                    }) : x(o, e), t && (o.innerHTML = t), o
                },
                d = function(e, t) {
                    var n = document.createElement("div");
                    return x(n, e), t.forEach(function(e) {
                        n.appendChild(e)
                    }), n
                },
                m = function(e, t, n) {
                    e.addEventListener("click", function() {
                        t(n), f()
                    })
                },
                f = function() {
                    o.innerHTML = "", o.parentNode.removeChild(o), o = null
                },
                g = function(e) {
                    return s + "promospin/all/" + e + c
                },
                v = function(e, t, n, o) {
                    t.forEach(function(t, i) {
                        var r = p(n, t.freespin_num + " " + u.offerFormat + " " + t.freespinBetInCurrency, "div");
                        m(r, o, i), e.appendChild(r)
                    })
                },
                y = function(e, t) {
                    var n = document.createElement("div");
                    x(n, {
                        position: "absolute",
                        width: "50%",
                        color: "white",
                        top: "50%",
                        transform: "translate(-50%,-10%)",
                        left: "50%",
                        textAlign: "center",
                        minWidth: "550px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var o;
                    if (u.congratulations) {
                        o = document.createElement("div"), o.innerText = u.congratulations || t;
                        var i = {
                            fontSize: "27pt",
                            fontWeight: "bold",
                            textTransform: "uppercase"
                        };
                        x(o, i)
                    } else if (t) {
                        o = document.createElement("div"), o.innerText = u.congratulations || t;
                        var i = {
                            fontSize: "27pt",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            marginBottom: "30px"
                        };
                        x(o, i)
                    }
                    var r;
                    u.getFreespins && (r = document.createElement("div"), r.innerText = u.getFreespins, x(r, {
                        fontSize: "27pt",
                        fontWeight: "bold",
                        textTransform: "uppercase"
                    }));
                    var a;
                    if (u.freespinExpiredTime) {
                        a = document.createElement("div"), x(a, {
                            paddingBottom: "35px"
                        });
                        var s = document.createElement("p");
                        if (s.innerText = u.freespinExpiredTime.replace(E(u.freespinExpiredTime)[0], t.freespinExpiredTimeDateFormat), x(s, {
                                fontSize: "12pt"
                            }), a.appendChild(s), t.termsAndConditionsText) {
                            var c = document.createElement("p");
                            c.innerText = t.termsAndConditionsText, x(c, {
                                fontSize: "11pt",
                                width: "50%",
                                margin: "0 auto -15px"
                            }), a.appendChild(c)
                        }
                        if (t.termsAndConditionsLink) {
                            var l = document.createElement("p");
                            x(l, {
                                fontSize: "11pt"
                            });
                            var p = document.createElement("a");
                            p.href = t.termsAndConditionsLink, p.innerText = u.terms, p.target = "_blank", x(p, {
                                color: "white"
                            }), l.appendChild(p), a.appendChild(l)
                        }
                    }
                    return o && n.appendChild(o), r && n.appendChild(r), a && n.appendChild(a), n
                },
                C = function() {
                    return S({
                        backGroundImageName: "welcome.png",
                        style: {
                            transform: "rotate(-50deg)",
                            visibility: "hidden",
                            minHeight: "800px",
                            minWidth: "800px",
                            position: "relative",
                            overflow: "hidden"
                        }
                    }, r.createChooseBackgroundDelay)
                },
                h = function() {
                    return S({
                        backGroundImageName: "end.png",
                        style: {
                            minHeight: "800px",
                            minWidth: "800px",
                            backgroundSize: "cover",
                            opacity: .9
                        }
                    }, r.createOfferBackgroundDelay)
                },
                b = function() {
                    return S({
                        backGroundImageName: "end.png",
                        style: {
                            minHeight: "800px",
                            minWidth: "800px",
                            backgroundSize: "cover",
                            opacity: .9
                        }
                    }, r.createCongratulationBackgroundDelay)
                },
                S = function(e, t) {
                    if (l || (l = document.createElement("div")), r.loadFinished) {
                        var n, o;
                        o = 25, n = "calc(50% - " + o + "px)";
                        var i = {
                            position: "absolute",
                            backgroundImage: 'url("' + g(e.backGroundImageName) + '")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundPositionY: n,
                            backgroundColor: "#100E19",
                            width: "100%",
                            height: "100%"
                        };
                        x(l, i), e.style && x(l, e.style)
                    } else t.delay = !0, console.log("Images are not finished load.");
                    return l
                },
                x = function(e, t) {
                    for (var n in t) e.style[n] = t[n]
                },
                E = function(e) {
                    return e.match(/{.*}/g)
                };
            return function() {
                var e = ["welcome.png", "end.png", "stars.png"],
                    t = 0,
                    n = function() {
                        (t += 1) === e.length && (r.loadFinished = !0, r.createOfferBackgroundDelay.delay && (l = h(), setTimeout(function() {
                            o.appendChild(l), o.appendChild(i)
                        })), r.createChooseBackgroundDelay.delay && (l = C(), setTimeout(function() {
                            o.appendChild(l), o.appendChild(i)
                        }), setTimeout(function() {
                            l.style.visibility = "visible", l.style.transition = "1s", l.style.transform = "rotate(0deg)", i.style.visibility = "visible", i.style.transition = "1s", i.style.transform = "translate(-50%,-30%)"
                        }, 100)), r.createCongratulationBackgroundDelay.delay && b())
                    },
                    a = function(e, t) {
                        var n = new Image;
                        n.src = e, n.onload = function() {
                            n = null, t()
                        }
                    };
                e.forEach(function(e) {
                    a(g(e), n)
                })
            }(), Object.freeze({
                render: a
            })
        }
    }), define("clientservice/promospin/ui/DOMMobileStandardUI", ["require"], function(e) {
        "use strict";
        var t, n, o, i, r, a, s, c = {
                loadFinished: !1,
                createChooseBackgroundDelay: {},
                createOfferBackgroundDelay: {},
                createCongratulationBackgroundDelay: {}
            },
            l = e.toUrl("./asset"),
            u = l.split("/js/clientservice")[0] + "/asset/",
            p = "?" + l.split("?")[1];
        return function(e) {
            function l(e, n) {
                if (a = e, s = n, o = document.createElement("div"), o.style.position = "relative", o.style.height = "100%", o.style.width = "100%", o.style.minHeight = "100%", o.style.textAlign = "center", o.style.zIndex = 9999, o.style.backgroundSize = "1920px 1080px", o.style.overflow = "hidden", "PLAY_MODE_CHOICE" === e["@type"]) {
                    m(), o.style.backgroundColor = "#100E19", f = E(), i = x({
                        color: "black",
                        fontSize: "4em",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        margin: "0 auto",
                        textAlign: "center",
                        width: "80%",
                        padding: "50px"
                    }, e.extraInfo || e.Message);
                    var l = {
                            fontSize: "14px",
                            paddingTop: "12px",
                            paddingBottom: "11px",
                            width: "318px",
                            borderRadius: "30pt",
                            cursor: "pointer"
                        },
                        u = {
                            background: "linear-gradient(#959595, #61676A)"
                        },
                        p = {
                            background: "linear-gradient(#FFAB0D, #EB7E00)"
                        };
                    u.margin = "0 auto", u.marginBottom = "10px", p.margin = "0 auto";
                    var d = v([l, u], e.Buttons.Button[0].Text, "div"),
                        h = v([l, p], e.Buttons.Button[1].Text, "div");
                    C(d, n, e.Buttons.Button[0].Cmd["@name"]), C(h, n, e.Buttons.Button[1].Cmd["@name"]);
                    var I = y({}, [d, h]);
                    i.appendChild(I), c.loadFinished && (o.appendChild(f), o.appendChild(i)), t.appendChild(o), setTimeout(function() {
                        c.loadFinished && (f.style.visibility = "visible", f.style.transition = "1s", f.style.transform = "rotate(0deg)", i.style.visibility = "visible", i.style.transition = "1s", i.style.transform = r ? "translate(-50%,-45%)" : "translate(-50%,-35%)")
                    }, 0)
                } else if ("FREESPIN_CONGRATULATION" === e["@type"] || "FREESPIN_CONGRATULATION_NOT_WIN" === e["@type"]) {
                    f = k(), m();
                    var L = document.createElement("div");
                    w(L, {
                        position: "absolute",
                        width: "30%",
                        background: "#FFFFFF",
                        top: "50%",
                        transform: "translate(-50%,-20%)",
                        left: "50%",
                        textAlign: "center",
                        borderRadius: "15pt",
                        minWidth: r ? "330px" : "550px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var O = document.createElement("div");
                    w(O, {
                        margin: "20px auto"
                    });
                    var A = document.createElement("img");
                    A.src = b("stars.png"), O.appendChild(A);
                    var G = document.createElement("div");
                    if (w(G, {
                            width: "100%",
                            fontSize: "24pt",
                            color: "#000000",
                            margin: "0 auto"
                        }), g.freespinComplete) {
                        var M = document.createElement("div");
                        M.innerText = g.freespinComplete, w(M, {
                            fontSize: "24px"
                        }), G.appendChild(M)
                    }
                    var P;
                    if (P = document.createElement("div"), "FREESPIN_CONGRATULATION" === e["@type"])
                        if (w(P, {
                                width: "100%",
                                fontSize: "20px",
                                color: "#000000",
                                margin: "0 auto",
                                marginTop: "13px"
                            }), R(e.Message)) {
                            var D = R(e.Message)[0],
                                N = document.createTextNode(e.Message.replace(D, "")),
                                B = document.createElement("span");
                            B.innerText = D.substr(1, D.length - 2), w(B, {
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#FFAB0D"
                            }), P.appendChild(N), P.appendChild(B)
                        } else {
                            var N = document.createTextNode(e.Message);
                            P.appendChild(N)
                        }
                    else if (!g.freespinComplete) {
                        var N = document.createTextNode(e.Message);
                        P.appendChild(N)
                    }
                    var l = {
                            fontSize: "18pt",
                            paddingTop: "12px",
                            paddingBottom: "11px",
                            color: "white",
                            width: "288px",
                            borderRadius: "30pt",
                            background: "linear-gradient(#FFAB0D, #EB7E00)",
                            cursor: "pointer",
                            margin: "25px auto"
                        },
                        F = v(l, g.btnTSReload, "div");
                    C(F, n), L.appendChild(O), L.appendChild(G), P && L.appendChild(P), L.appendChild(F), o.appendChild(f), o.appendChild(L), t.appendChild(o), setTimeout(function() {
                        L.style.visibility = "visible", L.style.transition = "1s", L.style.transform = "translate(-50%,-50%)"
                    }, 1e3)
                } else {
                    m(), f = T();
                    var L = document.createElement("div");
                    w(L, {
                        position: "absolute",
                        width: r ? "90%" : "65%",
                        background: "#FFFFFF",
                        top: "50%",
                        transform: "translate(-50%,-30%)",
                        left: "50%",
                        textAlign: "center",
                        borderRadius: "15pt",
                        minWidth: r ? "330px" : "422px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var O = document.createElement("div");
                    w(O, {
                        margin: "20px auto 10px"
                    });
                    var A = document.createElement("img");
                    A.src = b("stars.png"), O.appendChild(A);
                    var G = document.createElement("div");
                    w(G, {
                        width: "100%",
                        fontSize: "24pt",
                        color: "#000000",
                        margin: "0 auto",
                        marginBottom: "10px"
                    });
                    var z = document.createTextNode(g.freeSpinOptionReminder);
                    G.appendChild(z), L.appendChild(O), L.appendChild(G);
                    var W = {
                        fontSize: "12px",
                        paddingTop: "12px",
                        paddingBottom: "11px",
                        color: "white",
                        width: r ? "90%" : "328px",
                        borderRadius: "30pt",
                        background: "linear-gradient(#FFAB0D, #EB7E00)",
                        cursor: "pointer",
                        margin: "10px auto"
                    };
                    S(L, e, W, n), o.appendChild(f), o.appendChild(L), t.appendChild(o), setTimeout(function() {
                        L.style.visibility = "visible", L.style.transition = "1s", L.style.transform = "translate(-50%,-50%)"
                    }, 1e3)
                }
            }

            function d(e, t) {
                setTimeout(function() {
                    m(), o && (h(), l(e, t))
                }, 500)
            }

            function m() {
                r = !!window.matchMedia("(orientation: portrait)").matches, console.log("The mode is", r)
            }
            var f, g = e.stringsConfig;
            t = e.root, n = e.gameRoot;
            var v = function(e, t, n) {
                    var o;
                    return n ? o = document.createElement(n) : (o = document.createElement("spin"), e.display = "inline-block"), o.style.textAlign = "center", o.style.userSelect = "none", Array.isArray(e) ? e.forEach(function(e) {
                        w(o, e)
                    }) : w(o, e), t && (o.innerHTML = t), o
                },
                y = function(e, t) {
                    var n = document.createElement("div");
                    return w(n, e), t.forEach(function(e) {
                        n.appendChild(e)
                    }), n
                },
                C = function(e, t, n) {
                    e.addEventListener("click", function() {
                        t(n), h()
                    })
                },
                h = function() {
                    o.innerHTML = "", o.parentNode.removeChild(o), o = null
                },
                b = function(e) {
                    return u + "promospin/all/" + e + p
                },
                S = function(e, t, n, o) {
                    t.forEach(function(t, i) {
                        var r = v(n, t.freespin_num + " " + g.offerFormat + " " + t.freespinBetInCurrency, "div");
                        C(r, o, i), e.appendChild(r)
                    })
                },
                x = function(e, t) {
                    var n = document.createElement("div");
                    w(n, {
                        position: "absolute",
                        width: "100%",
                        color: "white",
                        top: "50%",
                        transform: "translate(-50%,-10%)",
                        left: "50%",
                        textAlign: "center",
                        minWidth: "550px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var o;
                    if (g.congratulations) {
                        o = document.createElement("div"), o.innerText = g.congratulations || t;
                        var i = {
                            fontSize: r ? "14px" : "24px",
                            fontWeight: "bold",
                            textTransform: "uppercase"
                        };
                        w(o, i)
                    } else if (t) {
                        o = document.createElement("div"), o.innerText = g.congratulations || t;
                        var i = {
                            fontSize: r ? "14px" : "24px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            marginBottom: "30px"
                        };
                        w(o, i)
                    }
                    var a;
                    g.getFreespins && (a = document.createElement("div"), a.innerText = g.getFreespins, w(a, {
                        fontSize: r ? "14px" : "24px",
                        fontWeight: "bold",
                        textTransform: "uppercase"
                    }));
                    var s;
                    if (g.freespinExpiredTime) {
                        s = document.createElement("div"), w(s, {
                            marginBottom: "25px"
                        });
                        var c = document.createElement("p");
                        if (c.innerText = g.freespinExpiredTime.replace(R(g.freespinExpiredTime)[0], t.freespinExpiredTimeDateFormat), w(c, {
                                fontSize: "12pt"
                            }), s.appendChild(c), t.termsAndConditionsText) {
                            var l = document.createElement("p");
                            l.innerText = t.termsAndConditionsText, w(l, {
                                fontSize: "12px",
                                width: r ? "60%" : "100%",
                                margin: "0 auto -15px"
                            }), s.appendChild(l)
                        }
                        if (t.termsAndConditionsLink) {
                            var u = document.createElement("p");
                            w(u, {
                                fontSize: "12px"
                            });
                            var p = document.createElement("a");
                            p.href = t.termsAndConditionsLink, p.innerText = g.terms, p.target = "_blank", w(p, {
                                color: "white"
                            }), u.appendChild(p), s.appendChild(u)
                        }
                    }
                    return o && n.appendChild(o), a && n.appendChild(a), s && n.appendChild(s), n
                },
                E = function() {
                    var e = 1.5 * (window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth);
                    return I({
                        backGroundImageName: "welcome.png",
                        style: {
                            transform: "rotate(-50deg)",
                            visibility: "hidden",
                            position: "relative",
                            overflow: "hidden",
                            width: e + "px",
                            height: e + "px",
                            borderRadius: "50%",
                            top: (window.innerHeight - e) / 2 + "px",
                            left: L() && !r ? "-245px" : (window.innerWidth - e) / 2 + "px"
                        }
                    }, c.createChooseBackgroundDelay)
                },
                T = function() {
                    return I({
                        backGroundImageName: "end.png",
                        style: {
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                            backgroundSize: "cover",
                            opacity: .9
                        }
                    }, c.createOfferBackgroundDelay)
                },
                k = function() {
                    return I({
                        backGroundImageName: "end.png",
                        style: {
                            backgroundSize: "cover",
                            opacity: .9
                        }
                    }, c.createCongratulationBackgroundDelay)
                },
                I = function(e, t) {
                    if (f || (f = document.createElement("div")), c.loadFinished) {
                        var n = {
                            position: "absolute",
                            backgroundImage: 'url("' + b(e.backGroundImageName) + '")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundColor: "#100E19",
                            width: "100%",
                            height: "100%"
                        };
                        w(f, n), e.style && w(f, e.style)
                    } else t.delay = !0, console.log("Images are not finished load.");
                    return f
                },
                w = function(e, t) {
                    for (var n in t) e.style[n] = t[n]
                },
                R = function(e) {
                    return e.match(/{.*}/g)
                },
                L = function() {
                    return !("undefined" == typeof window || !window) && (/iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812)
                };
            return function() {
                var e = ["welcome.png", "end.png", "stars.png"],
                    t = 0,
                    n = function() {
                        (t += 1) === e.length && (c.loadFinished = !0, c.createOfferBackgroundDelay.delay && (f = T(), setTimeout(function() {
                            o.appendChild(f), o.appendChild(i)
                        })), c.createChooseBackgroundDelay.delay && (f = E(), setTimeout(function() {
                            o.appendChild(f), o.appendChild(i)
                        }), setTimeout(function() {
                            f.style.visibility = "visible", f.style.transition = "1s", f.style.transform = "rotate(0deg)", i.style.visibility = "visible", i.style.transition = "1s", i.style.transform = r ? "translate(-50%,-45%)" : "translate(-50%,-35%)"
                        }, 100)), c.createCongratulationBackgroundDelay.delay && k())
                    },
                    a = function(e, t) {
                        var n = new Image;
                        n.src = e, n.onload = function() {
                            n = null, t()
                        }
                    };
                e.forEach(function(e) {
                    a(b(e), n)
                })
            }(), window.addEventListener("orientationchange", function() {
                d(a, s)
            }), Object.freeze({
                render: l
            })
        }
    }), define("clientservice/promospin/ui/DOMTabletStandardUI", ["require"], function(e) {
        "use strict";
        var t, n, o, i, r, a, s, c = {
                loadFinished: !1,
                createChooseBackgroundDelay: {},
                createOfferBackgroundDelay: {},
                createCongratulationBackgroundDelay: {}
            },
            l = e.toUrl("./asset"),
            u = l.split("/js/clientservice")[0] + "/asset/",
            p = "?" + l.split("?")[1];
        return function(e) {
            function l(e, n) {
                if (a = e, s = n, o = document.createElement("div"), o.style.position = "relative", o.style.height = "100%", o.style.width = "100%", o.style.minHeight = "100%", o.style.textAlign = "center", o.style.zIndex = 9999, o.style.backgroundSize = "1920px 1080px", o.style.overflow = "hidden", "PLAY_MODE_CHOICE" === e["@type"]) {
                    d(), o.style.backgroundColor = "#100E19", m = x(), i = S({
                        color: "black",
                        fontSize: "4em",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        margin: "0 auto",
                        textAlign: "center",
                        width: "80%",
                        padding: "50px"
                    }, e.extraInfo || e.Message);
                    var l = {
                            fontSize: "14px",
                            paddingTop: "12px",
                            paddingBottom: "11px",
                            width: "318px",
                            borderRadius: "30pt",
                            cursor: "pointer"
                        },
                        u = {
                            background: "linear-gradient(#959595, #61676A)"
                        },
                        p = {
                            background: "linear-gradient(#FFAB0D, #EB7E00)"
                        };
                    u.margin = "0 auto", u.marginBottom = "10px", p.margin = "0 auto";
                    var C = g([l, u], e.Buttons.Button[0].Text, "div"),
                        k = g([l, p], e.Buttons.Button[1].Text, "div");
                    y(C, n, e.Buttons.Button[0].Cmd["@name"]), y(k, n, e.Buttons.Button[1].Cmd["@name"]);
                    var R = v({}, [C, k]);
                    i.appendChild(R), c.loadFinished && (o.appendChild(m), o.appendChild(i)), t.appendChild(o), setTimeout(function() {
                        c.loadFinished && (m.style.visibility = "visible", m.style.transition = "1s", m.style.transform = "rotate(0deg)", i.style.visibility = "visible", i.style.transition = "1s", i.style.transform = "translate(-50%,-30%)")
                    }, 0)
                } else if ("FREESPIN_CONGRATULATION" === e["@type"] || "FREESPIN_CONGRATULATION_NOT_WIN" === e["@type"]) {
                    m = T(), d();
                    var L = document.createElement("div");
                    I(L, {
                        position: "absolute",
                        width: "50%",
                        background: "#FFFFFF",
                        top: "50%",
                        transform: "translate(-50%,-20%)",
                        left: "50%",
                        textAlign: "center",
                        borderRadius: "15pt",
                        minWidth: r ? "330px" : "550px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var O = document.createElement("div");
                    I(O, {
                        margin: "20px auto 10px"
                    });
                    var A = document.createElement("img");
                    A.src = h("stars.png"), O.appendChild(A);
                    var G = document.createElement("div");
                    if (I(G, {
                            width: "100%",
                            fontSize: "24pt",
                            color: "#000000",
                            margin: "0 auto"
                        }), f.freespinComplete) {
                        var M = document.createElement("div");
                        M.innerText = f.freespinComplete, I(M, {
                            fontSize: "24px"
                        }), G.appendChild(M)
                    }
                    var P;
                    if (P = document.createElement("div"), "FREESPIN_CONGRATULATION" === e["@type"])
                        if (I(P, {
                                width: "100%",
                                fontSize: "24px",
                                color: "#000000",
                                margin: "0 auto",
                                marginTop: "13px"
                            }), w(e.Message)) {
                            var D = w(e.Message)[0],
                                N = document.createTextNode(e.Message.replace(D, "")),
                                B = document.createElement("span");
                            B.innerText = D.substr(1, D.length - 2), I(B, {
                                fontSize: "24pt",
                                fontWeight: "bold",
                                color: "#FFAB0D"
                            }), P.appendChild(N), P.appendChild(B)
                        } else {
                            var N = document.createTextNode(e.Message);
                            P.appendChild(N)
                        }
                    else if (!f.freespinComplete) {
                        var N = document.createTextNode(e.Message);
                        P.appendChild(N)
                    }
                    var l = {
                            fontSize: "18pt",
                            paddingTop: "12px",
                            paddingBottom: "11px",
                            color: "white",
                            width: "238px",
                            borderRadius: "30pt",
                            background: "linear-gradient(#FFAB0D, #EB7E00)",
                            cursor: "pointer",
                            margin: "25px auto"
                        },
                        F = g(l, f.btnTSReload, "div");
                    y(F, n), L.appendChild(O), L.appendChild(G), P && L.appendChild(P), L.appendChild(F), o.appendChild(m), o.appendChild(L), t.appendChild(o), setTimeout(function() {
                        L.style.visibility = "visible", L.style.transition = "1s", L.style.transform = "translate(-50%,-50%)"
                    }, 1e3)
                } else {
                    d(), m = E();
                    var L = document.createElement("div");
                    I(L, {
                        position: "absolute",
                        width: "50%",
                        background: "#FFFFFF",
                        top: "50%",
                        transform: "translate(-50%,-30%)",
                        left: "50%",
                        textAlign: "center",
                        borderRadius: "15pt",
                        minWidth: r ? "330px" : "422px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var O = document.createElement("div");
                    I(O, {
                        margin: "20px auto"
                    });
                    var A = document.createElement("img");
                    A.src = h("stars.png"), O.appendChild(A);
                    var G = document.createElement("div");
                    I(G, {
                        width: "80%",
                        fontSize: "24pt",
                        color: "#000000",
                        margin: "0 auto",
                        marginBottom: "20px"
                    });
                    var z = document.createTextNode(f.freeSpinOptionReminder);
                    G.appendChild(z), L.appendChild(O), L.appendChild(G);
                    var W = {
                        fontSize: r ? "18px" : "12px",
                        paddingTop: "12px",
                        paddingBottom: "11px",
                        color: "white",
                        width: "328px",
                        borderRadius: "30pt",
                        background: "linear-gradient(#FFAB0D, #EB7E00)",
                        cursor: "pointer",
                        margin: "25px auto",
                        display: "block"
                    };
                    b(L, e, W, n), o.appendChild(m), o.appendChild(L), t.appendChild(o), setTimeout(function() {
                        L.style.visibility = "visible", L.style.transition = "1s", L.style.transform = "translate(-50%,-50%)"
                    }, 1e3)
                }
            }

            function d() {
                r = !!window.matchMedia("(orientation: portrait)").matches, console.log("The mode is", r)
            }
            var m, f = e.stringsConfig;
            t = e.root, n = e.gameRoot;
            var g = function(e, t, n) {
                    var o;
                    return n ? o = document.createElement(n) : (o = document.createElement("spin"), e.display = "inline-block"), o.style.textAlign = "center", o.style.userSelect = "none", Array.isArray(e) ? e.forEach(function(e) {
                        I(o, e)
                    }) : I(o, e), t && (o.innerHTML = t), o
                },
                v = function(e, t) {
                    var n = document.createElement("div");
                    return I(n, e), t.forEach(function(e) {
                        n.appendChild(e)
                    }), n
                },
                y = function(e, t, n) {
                    e.addEventListener("click", function() {
                        t(n), C()
                    })
                },
                C = function() {
                    o.innerHTML = "", o.parentNode.removeChild(o), o = null
                },
                h = function(e) {
                    return u + "promospin/all/" + e + p
                },
                b = function(e, t, n, o) {
                    t.forEach(function(t, i) {
                        var r = g(n, t.freespin_num + " " + f.offerFormat + " " + t.freespinBetInCurrency, "div");
                        y(r, o, i), e.appendChild(r)
                    })
                },
                S = function(e, t) {
                    var n = document.createElement("div");
                    I(n, {
                        position: "absolute",
                        width: "50%",
                        color: "white",
                        top: "50%",
                        transform: "translate(-50%,-10%)",
                        left: "50%",
                        textAlign: "center",
                        minWidth: "550px",
                        minHeight: "275px",
                        visibility: "hidden"
                    });
                    var o;
                    if (f.congratulations) {
                        o = document.createElement("div"), o.innerText = f.congratulations || t;
                        var i = {
                            fontSize: "27px",
                            fontWeight: "bold",
                            textTransform: "uppercase"
                        };
                        I(o, i)
                    } else if (t) {
                        o = document.createElement("div"), o.innerText = f.congratulations || t;
                        var i = {
                            fontSize: "27px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            marginBottom: "30px"
                        };
                        I(o, i)
                    }
                    var a;
                    f.getFreespins && (a = document.createElement("div"), a.innerText = f.getFreespins, I(a, {
                        fontSize: "27px",
                        fontWeight: "bold",
                        textTransform: "uppercase"
                    }));
                    var s;
                    if (f.freespinExpiredTime) {
                        s = document.createElement("div"), I(s, {
                            marginBottom: "25px"
                        });
                        var c = document.createElement("p");
                        if (c.innerText = f.freespinExpiredTime.replace(w(f.freespinExpiredTime)[0], t.freespinExpiredTimeDateFormat), I(c, {
                                fontSize: "12pt"
                            }), s.appendChild(c), t.termsAndConditionsText) {
                            var l = document.createElement("p");
                            l.innerText = t.termsAndConditionsText, I(l, {
                                fontSize: "12px",
                                width: r ? "70%" : "100%",
                                margin: "0 auto -15px"
                            }), s.appendChild(l)
                        }
                        if (t.termsAndConditionsLink) {
                            var u = document.createElement("p");
                            I(u, {
                                fontSize: "12px"
                            });
                            var p = document.createElement("a");
                            p.href = t.termsAndConditionsLink, p.innerText = f.terms, p.target = "_blank", I(p, {
                                color: "white"
                            }), u.appendChild(p), s.appendChild(u)
                        }
                    }
                    return o && n.appendChild(o), a && n.appendChild(a), s && n.appendChild(s), n
                },
                x = function() {
                    return k({
                        backGroundImageName: "welcome.png",
                        style: {
                            transform: "rotate(-50deg)",
                            visibility: "hidden"
                        }
                    }, c.createChooseBackgroundDelay)
                },
                E = function() {
                    return k({
                        backGroundImageName: "end.png",
                        style: {
                            backgroundSize: "cover",
                            opacity: .9
                        }
                    }, c.createOfferBackgroundDelay)
                },
                T = function() {
                    return k({
                        backGroundImageName: "end.png",
                        style: {
                            backgroundSize: "cover",
                            opacity: .9
                        }
                    }, c.createCongratulationBackgroundDelay)
                },
                k = function(e, t) {
                    if (m || (m = document.createElement("div")), c.loadFinished) {
                        var n = {
                            position: "absolute",
                            backgroundImage: 'url("' + h(e.backGroundImageName) + '")',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundColor: "#100E19",
                            width: "100%",
                            height: "100%"
                        };
                        I(m, n), e.style && I(m, e.style)
                    } else t.delay = !0, console.log("Images are not finished load.");
                    return m
                },
                I = function(e, t) {
                    for (var n in t) e.style[n] = t[n]
                },
                w = function(e) {
                    return e.match(/{.*}/g)
                };
            return function() {
                var e = ["welcome.png", "end.png", "stars.png"],
                    t = 0,
                    n = function() {
                        (t += 1) === e.length && (c.loadFinished = !0, c.createOfferBackgroundDelay.delay && (m = E(), setTimeout(function() {
                            o.appendChild(m), o.appendChild(i)
                        })), c.createChooseBackgroundDelay.delay && (m = x(), setTimeout(function() {
                            o.appendChild(m), o.appendChild(i)
                        }), setTimeout(function() {
                            m.style.visibility = "visible", m.style.transition = "1s", m.style.transform = "rotate(0deg)", i.style.visibility = "visible", i.style.transition = "1s", i.style.transform = "translate(-50%,-30%)"
                        }, 100)), c.createCongratulationBackgroundDelay.delay && T())
                    },
                    r = function(e, t) {
                        var n = new Image;
                        n.src = e, n.onload = function() {
                            n = null, t()
                        }
                    };
                e.forEach(function(e) {
                    r(h(e), n)
                })
            }(), Object.freeze({
                render: l
            })
        }
    }), define("clientservice/promospin/ui/PromoSpinUI", ["require", "clientservice/promospin/ui/DOMDesktopStandardUI", "clientservice/promospin/ui/DOMMobileStandardUI", "clientservice/promospin/ui/DOMTabletStandardUI"], function(e) {
        "use strict";
        return function(t) {
            function n(e, t) {
                c.render(e, t)
            }

            function o(e, t, n) {
                c.render(e, t, n)
            }

            function i(e, t) {
                c.render(e, t)
            }

            function r() {
                c.append()
            }

            function a() {
                c.show()
            }

            function s() {
                c.hide()
            }
            var c, l = t.serverConfig.channel.toLowerCase(),
                u = t.serverConfig.presenttype.toLowerCase();
            return "int" === l ? "std" === u && (c = e("clientservice/promospin/ui/DOMDesktopStandardUI")(t)) : "mob" === l ? "std" === u && (c = e("clientservice/promospin/ui/DOMMobileStandardUI")(t)) : "tab" === l && "std" === u && (c = e("clientservice/promospin/ui/DOMTabletStandardUI")(t)), Object.freeze({
                createOffers: n,
                createPromotionalFreeSpinAndWagerChoose: o,
                createCongratulationUI: i,
                show: r,
                display: a,
                hide: s
            })
        }
    }), define("clientservice/promospin/PromoSpinController", ["require", "clientservice/promospin/ui/PromoSpinUI", "clientservice/promospin/ui/PromoSpinUI", "clientservice/promospin/ui/PromoSpinUI"], function(e) {
        "use strict";
        var t, n, o, i;
        return function(r) {
            function a(e, n) {
                var o = u(e),
                    i = function(t) {
                        if (t) {
                            var o = t.Param.value;
                            n(o)
                        } else s(e, n)
                    };
                t.displayLaunchOptions(o, i)
            }

            function s(t, n) {
                o || (o = e("clientservice/promospin/ui/PromoSpinUI")(r)), o.createOffers(t, n)
            }

            function c(e, n) {
                var o = function(t) {
                    if (t) {
                        var o = t["@name"];
                        n(o)
                    } else l(e, n)
                };
                t.displayLaunchOptions(e, o)
            }

            function l(t, n, i) {
                o = e("clientservice/promospin/ui/PromoSpinUI")(r), o.createPromotionalFreeSpinAndWagerChoose(t, n, i)
            }

            function u(e) {
                var t = {
                        Text: "",
                        Cmd: {
                            "@name": "",
                            Param: {
                                value: void 0
                            }
                        }
                    },
                    o = {
                        "@notification": "Y",
                        "@type": "CHOOSE_OFFER",
                        Id: "9010",
                        Message: 1 === e.length ? n.freeSpinReminder : n.freeSpinOptionReminder,
                        Buttons: {
                            Button: []
                        },
                        extraInfo: {
                            freespinOffers: []
                        }
                    };
                return e.forEach(function(e, i) {
                    t.Text = e.freespin_num + " " + n.offerFormat + " " + e.freespinBetInCurrency, t.Cmd.Param.value = i, o.Buttons.Button.push(JSON.parse(JSON.stringify(t))), o.extraInfo.freespinOffers.push({
                        lines: e.freespin_lines,
                        bet: e.freespin_bet,
                        number: e.freespin_num,
                        betInCurrency: e.freespinBetInCurrency
                    })
                }), o
            }
            return t = r.consoleconnect, n = r.stringsConfig, i = r.bus, i.subscribe({
                channel: "ConsoleService",
                topic: "MessageBox.PFSCONGRATULATION",
                callback: function(t, n) {
                    o || (o = e("clientservice/promospin/ui/PromoSpinUI")(r)), o.createCongratulationUI(t.message, function() {
                        n.reply(null, t.message.Buttons.Button.Cmd["@name"])
                    })
                }
            }), Object.freeze({
                showPromoSpinOffers: a,
                showPromotionalFreeSpinAndWagerChoose: c
            })
        }
    }), define("clientservice/multiplegip/ui/DOMDesktopStandardUI", ["require"], function(e) {
        "use strict";
        var t, n, o, i, r, a = e.toUrl("./asset");
        a.split("/js/clientservice")[0], a.split("?")[1];
        return function(e) {
            function a(e, n, a) {
                o = c({
                    style: "position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999; visibility: visible; background:#383838;color: white; overflow-y: scroll; text-align: center; cursor: pointer;",
                    id: "multipleGIPoverlay"
                });
                var l = c({
                        style: "font-size: 22px;margin: 0 auto;padding-top: 50px;",
                        id: "reminderInfo",
                        text: e.Message
                    }),
                    d = c({
                        style: "font-size: 24px; margin: 0 auto; padding-top: 25px;",
                        id: "chooseInfo",
                        text: e.extraInfo.translateInfos.labelChoose
                    }),
                    m = c({
                        style: "position: relative; display: flex; flex-wrap: wrap; justify-content: space-between; width: 40%; min-width: 600px; margin: 0 auto; margin-bottom: 20px;",
                        id: "gameList"
                    }),
                    f = 0;
                e.Buttons.Button.forEach(function(t, o) {
                    if ("multipleGIPRedirect" === t.Cmd["@name"]) {
                        var l = {};
                        t.Cmd.Param.forEach(function(e) {
                            l[e["@name"]] = e["#text"]
                        });
                        var d = c({
                                style: "background: #FF671F; width: 296px; height: 58px; border-radius: 30px; margin-top: 25px;",
                                id: "gameButton"
                            }),
                            g = c({
                                style: "padding-top:10px; font-size: 18px; margin: 0 auto; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-left: 3px;",
                                id: "gameName",
                                text: p(t.Text)
                            });
                        g.title = p(t.Text);
                        var v = c({
                                style: "font-size: 13px; margin: 0 auto;",
                                id: "time"
                            }),
                            y = c({
                                tag: "span",
                                style: "",
                                id: "lastPlayText",
                                text: e.extraInfo.translateInfos.labelLastPlayed + " " + u(l.txnupdatetime)
                            });
                        v.appendChild(y), d.appendChild(g), d.appendChild(v), d.addEventListener("click", function(e) {
                            return function() {
                                a(e)
                            }
                        }(o)), m.appendChild(d), f++
                    }
                    if ("" === t.Cmd["@name"] || "continue" === t.Cmd["@name"]) {
                        i = c({
                            style: "font-size: 24px; margin: 0 auto; padding-top: 25px;",
                            id: "or",
                            text: e.extraInfo.translateInfos.labelOr
                        });
                        r = c({
                            style: "background: #27A1DC; width: 296px; height: 58px; border-radius: 30px; margin: 0 auto; font-size: 20px; margin-top: 25px; margin-bottom: 25px; line-height: 58px;",
                            id: "continue",
                            text: e.extraInfo.translateInfos.btnContinue
                        }), r.addEventListener("click", function() {
                            console.log("In continue"), s(), n()
                        })
                    }
                }), 1 === f && (m.style.justifyContent = "space-around"), o.appendChild(l), o.appendChild(d), o.appendChild(m), i && r && (o.appendChild(i), o.appendChild(r)), t.appendChild(o)
            }
            e.stringsConfig;
            t = e.root, n = e.gameRoot;
            var s = function() {
                    o.innerHTML = "", o.parentNode.removeChild(o), o = null
                },
                c = function(e) {
                    var t = l(e.tag ? e.tag : "div", e.style, e.className, e.id);
                    return e.text && (t.innerText = e.text), t
                },
                l = function(e, t, n, o) {
                    var i = document.createElement(e);
                    if (t) {
                        t.trim().split(";").forEach(function(e) {
                            if ("" !== e) {
                                var t = e.split(/:(.+)?/);
                                i.style[t[0].trim()] = t[1].trim()
                            }
                        })
                    }
                    return n && (i.class = n), o && (i.id = o), i
                },
                u = function(e) {
                    var t = new Date(Number(e)),
                        n = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
                    return t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate() + "  " + t.getHours() + ":" + n
                },
                p = function(e) {
                    return e.indexOf("WLA") > -1 ? e.split("WLA")[0].trim() : e.indexOf("COM") > -1 ? e.split("COM")[0].trim() : e
                };
            return Object.freeze({
                render: a
            })
        }
    }), define("clientservice/multiplegip/ui/DOMDesktopMiniUI", ["require"], function(e) {
        "use strict";
        var t, n, o, i, r, a = e.toUrl("./asset");
        a.split("/js/clientservice")[0], a.split("?")[1];
        return function(e) {
            function a(e, n, a) {
                o = c({
                    style: "position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999; visibility: visible; background:#383838;color: white; overflow-y: scroll; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center",
                    id: "multipleGIPoverlay"
                });
                var l = c({
                        style: "font-size: 22px; padding-top: 50px;",
                        id: "reminderInfo",
                        text: e.Message
                    }),
                    d = c({
                        style: "font-size: 24px; padding-top: 25px;",
                        id: "chooseInfo",
                        text: e.extraInfo.translateInfos.labelChoose
                    }),
                    m = c({
                        style: "position: relative; display: flex; flex-wrap: wrap; justify-content: space-between; width: 40%; min-width: 296px; margin-bottom: 20px;",
                        id: "gameList"
                    }),
                    f = 0;
                e.Buttons.Button.forEach(function(t, o) {
                    if ("multipleGIPRedirect" === t.Cmd["@name"]) {
                        var l = {};
                        t.Cmd.Param.forEach(function(e) {
                            l[e["@name"]] = e["#text"]
                        });
                        var d = c({
                                style: "background: #FF671F; width: 296px; height: 58px; border-radius: 30px; margin-top: 25px;",
                                id: "gameButton"
                            }),
                            g = c({
                                style: "padding-top:10px; font-size: 18px; margin: 0 auto; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-left: 3px;",
                                id: "gameName",
                                text: p(t.Text)
                            });
                        g.title = p(t.Text);
                        var v = c({
                                style: "font-size: 13px; margin: 0 auto;",
                                id: "time"
                            }),
                            y = c({
                                tag: "span",
                                style: "",
                                id: "lastPlayText",
                                text: e.extraInfo.translateInfos.labelLastPlayed + " " + u(l.txnupdatetime)
                            });
                        v.appendChild(y), d.appendChild(g), d.appendChild(v), d.addEventListener("click", function(e) {
                            return function() {
                                a(e)
                            }
                        }(o)), m.appendChild(d), f++
                    }
                    if ("" === t.Cmd["@name"] || "continue" === t.Cmd["@name"]) {
                        i = c({
                            style: "font-size: 24px; margin: 0 auto; padding-top: 25px;",
                            id: "or",
                            text: e.extraInfo.translateInfos.labelOr
                        });
                        r = c({
                            style: "background: #27A1DC; width: 296px; height: 58px; border-radius: 30px; margin: 0 auto; font-size: 20px; margin-top: 25px; margin-bottom: 25px; line-height: 58px;",
                            id: "continue",
                            text: e.extraInfo.translateInfos.btnContinue
                        }), r.addEventListener("click", function() {
                            console.log("In continue"), s(), n()
                        })
                    }
                }), 1 === f && (m.style.justifyContent = "space-around"), o.appendChild(l), o.appendChild(d), o.appendChild(m), i && r && (o.appendChild(i), o.appendChild(r)), t.appendChild(o)
            }
            e.stringsConfig;
            t = e.root, n = e.gameRoot;
            var s = function() {
                    o.innerHTML = "", o.parentNode.removeChild(o), o = null
                },
                c = function(e) {
                    var t = l(e.tag ? e.tag : "div", e.style, e.className, e.id);
                    return e.text && (t.innerText = e.text), t
                },
                l = function(e, t, n, o) {
                    var i = document.createElement(e);
                    if (t) {
                        t.trim().split(";").forEach(function(e) {
                            if ("" !== e) {
                                var t = e.split(/:(.+)?/);
                                i.style[t[0].trim()] = t[1].trim()
                            }
                        })
                    }
                    return n && (i.class = n), o && (i.id = o), i
                },
                u = function(e) {
                    var t = new Date(Number(e)),
                        n = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
                    return t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate() + "  " + t.getHours() + ":" + n
                },
                p = function(e) {
                    return e.indexOf("WLA") > -1 ? e.split("WLA")[0].trim() : e.indexOf("COM") > -1 ? e.split("COM")[0].trim() : e
                };
            return Object.freeze({
                render: a
            })
        }
    }), define("clientservice/multiplegip/ui/DOMMobileStandardUI", ["require"], function(e) {
        "use strict";
        var t, n, o, i, r, a, s = e.toUrl("./asset");
        s.split("/js/clientservice")[0], s.split("?")[1];
        return function(e) {
            function s(e, n, s) {
                o = u({
                    style: "position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999; visibility: visible; background:#383838;color: white; overflow-y: scroll; text-align: center; cursor: pointer;",
                    id: "multipleGIPoverlay"
                });
                var p = u({
                        style: "font-size: 22px;margin: 0 auto;padding-top: 50px;",
                        id: "reminderInfo",
                        text: e.Message
                    }),
                    f = u({
                        style: "font-size: 24px; margin: 0 auto; padding-top: 25px;",
                        id: "chooseInfo",
                        text: e.extraInfo.translateInfos.labelChoose
                    }),
                    g = u({
                        style: "position: relative; display: flex; flex-wrap: wrap; justify-content: space-between; width: 90%; margin: 0 auto; margin-bottom: 20px;",
                        id: "gameList"
                    }),
                    v = 0;
                e.Buttons.Button.forEach(function(t, o) {
                    if ("multipleGIPRedirect" === t.Cmd["@name"]) {
                        var a = {};
                        t.Cmd.Param.forEach(function(e) {
                            a[e["@name"]] = e["#text"]
                        });
                        var c = u({
                                style: "background: #FF671F; width: 296px; height: 58px; border-radius: 30px; margin-top: 25px;",
                                id: "gameButton"
                            }),
                            p = u({
                                style: "padding-top:10px; font-size: 18px; margin: 0 auto; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-left: 3px;",
                                id: "gameName",
                                text: m(t.Text)
                            });
                        p.title = m(t.Text);
                        var f = u({
                                style: "font-size: 13px; margin: 0 auto;",
                                id: "time"
                            }),
                            y = u({
                                tag: "span",
                                style: "",
                                id: "lastPlayText",
                                text: e.extraInfo.translateInfos.labelLastPlayed + " " + d(a.txnupdatetime)
                            });
                        f.appendChild(y), c.appendChild(p), c.appendChild(f), c.addEventListener("click", function(e) {
                            return function() {
                                s(e)
                            }
                        }(o)), g.appendChild(c), v++
                    }
                    if ("" === t.Cmd["@name"] || "continue" === t.Cmd["@name"]) {
                        i = u({
                            style: "font-size: 24px; margin: 0 auto; padding-top: 25px;",
                            id: "or",
                            text: e.extraInfo.translateInfos.labelOr
                        });
                        r = u({
                            style: "background: #27A1DC; width: 296px; height: 58px; border-radius: 30px; margin: 0 auto; font-size: 20px; margin-top: 25px; margin-bottom: 25px; line-height: 58px;",
                            id: "continue",
                            text: e.extraInfo.translateInfos.btnContinue
                        }), r.addEventListener("click", function() {
                            console.log("In continue"), l(), n()
                        })
                    }
                }), c(), (1 === v || a) && (g.style.justifyContent = "space-around"), o.appendChild(p), o.appendChild(f), o.appendChild(g), i && r && (o.appendChild(i), o.appendChild(r)), t.appendChild(o);
                var y = function() {
                    c(), g.style.justifyContent = 1 === v || a ? "space-around" : "space-between"
                };
                window.addEventListener("orientationchange", y), window.addEventListener("resize", y)
            }

            function c() {
                a = !!window.matchMedia("(orientation: portrait)").matches, console.log("The mode is", a)
            }
            e.stringsConfig;
            t = e.root, n = e.gameRoot;
            var l = function() {
                    o.innerHTML = "", o.parentNode.removeChild(o), o = null
                },
                u = function(e) {
                    var t = p(e.tag ? e.tag : "div", e.style, e.className, e.id);
                    return e.text && (t.innerText = e.text), t
                },
                p = function(e, t, n, o) {
                    var i = document.createElement(e);
                    if (t) {
                        t.trim().split(";").forEach(function(e) {
                            if ("" !== e) {
                                var t = e.split(/:(.+)?/);
                                i.style[t[0].trim()] = t[1].trim()
                            }
                        })
                    }
                    return n && (i.class = n), o && (i.id = o), i
                },
                d = function(e) {
                    var t = new Date(Number(e)),
                        n = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
                    return t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate() + "  " + t.getHours() + ":" + n
                },
                m = function(e) {
                    return e.indexOf("WLA") > -1 ? e.split("WLA")[0].trim() : e.indexOf("COM") > -1 ? e.split("COM")[0].trim() : e
                };
            return Object.freeze({
                render: s
            })
        }
    }), define("clientservice/multiplegip/ui/DOMTabletStandardUI", ["require"], function(e) {
        "use strict";
        var t, n, o, i, r, a, s = e.toUrl("./asset");
        s.split("/js/clientservice")[0], s.split("?")[1];
        return function(e) {
            function s(e, n, a) {
                o = u({
                    style: "position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: 9999; visibility: visible; background:#383838;color: white; overflow-y: scroll; text-align: center; cursor: pointer;",
                    id: "multipleGIPoverlay"
                });
                var s = u({
                        style: "font-size: 22px;margin: 0 auto;padding-top: 50px;",
                        id: "reminderInfo",
                        text: e.Message
                    }),
                    p = u({
                        style: "font-size: 24px; margin: 0 auto; padding-top: 25px;",
                        id: "chooseInfo",
                        text: e.extraInfo.translateInfos.labelChoose
                    }),
                    f = u({
                        style: "position: relative; display: flex; flex-wrap: wrap; justify-content: space-between; width: 90%; max-width: 800px; margin: 0 auto; margin-bottom: 20px;",
                        id: "gameList"
                    }),
                    g = 0;
                e.Buttons.Button.forEach(function(t, o) {
                    if ("multipleGIPRedirect" === t.Cmd["@name"]) {
                        var s = {};
                        t.Cmd.Param.forEach(function(e) {
                            s[e["@name"]] = e["#text"]
                        });
                        var c = u({
                                style: "background: #FF671F; width: 296px; height: 58px; border-radius: 30px; margin-top: 25px;",
                                id: "gameButton"
                            }),
                            p = u({
                                style: "padding-top:10px; font-size: 18px; margin: 0 auto; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-left: 3px;",
                                id: "gameName",
                                text: m(t.Text)
                            });
                        p.title = m(t.Text);
                        var v = u({
                                style: "font-size: 13px; margin: 0 auto;",
                                id: "time"
                            }),
                            y = u({
                                tag: "span",
                                style: "",
                                id: "lastPlayText",
                                text: e.extraInfo.translateInfos.labelLastPlayed + " " + d(s.txnupdatetime)
                            });
                        v.appendChild(y), c.appendChild(p), c.appendChild(v), c.addEventListener("click", function(e) {
                            return function() {
                                a(e)
                            }
                        }(o)), f.appendChild(c), g++
                    }
                    if ("" === t.Cmd["@name"] || "continue" === t.Cmd["@name"]) {
                        i = u({
                            style: "font-size: 24px; margin: 0 auto; padding-top: 25px;",
                            id: "or",
                            text: e.extraInfo.translateInfos.labelOr
                        });
                        r = u({
                            style: "background: #27A1DC; width: 296px; height: 58px; border-radius: 30px; margin: 0 auto; font-size: 20px; margin-top: 25px; margin-bottom: 25px; line-height: 58px;",
                            id: "continue",
                            text: e.extraInfo.translateInfos.btnContinue
                        }), r.addEventListener("click", function() {
                            console.log("In continue"), l(), n()
                        })
                    }
                }), c(), 1 === g && (f.style.justifyContent = "space-around"), o.appendChild(s), o.appendChild(p), o.appendChild(f), i && r && (o.appendChild(i), o.appendChild(r)), t.appendChild(o), window.addEventListener("orientationchange", function() {
                    c(), f.style.justifyContent = 1 === g ? "space-around" : "space-between"
                })
            }

            function c() {
                a = !!window.matchMedia("(orientation: portrait)").matches, console.log("The mode is", a)
            }
            e.stringsConfig;
            t = e.root, n = e.gameRoot;
            var l = function() {
                    o.innerHTML = "", o.parentNode.removeChild(o), o = null
                },
                u = function(e) {
                    var t = p(e.tag ? e.tag : "div", e.style, e.className, e.id);
                    return e.text && (t.innerText = e.text), t
                },
                p = function(e, t, n, o) {
                    var i = document.createElement(e);
                    if (t) {
                        t.trim().split(";").forEach(function(e) {
                            if ("" !== e) {
                                var t = e.split(/:(.+)?/);
                                i.style[t[0].trim()] = t[1].trim()
                            }
                        })
                    }
                    return n && (i.class = n), o && (i.id = o), i
                },
                d = function(e) {
                    var t = new Date(Number(e)),
                        n = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
                    return t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate() + "  " + t.getHours() + ":" + n
                },
                m = function(e) {
                    return e.indexOf("WLA") > -1 ? e.split("WLA")[0].trim() : e.indexOf("COM") > -1 ? e.split("COM")[0].trim() : e
                };
            return Object.freeze({
                render: s
            })
        }
    }), define("clientservice/multiplegip/ui/MultipleGIPUI", ["require", "clientservice/multiplegip/ui/DOMDesktopStandardUI", "clientservice/multiplegip/ui/DOMDesktopMiniUI", "clientservice/multiplegip/ui/DOMMobileStandardUI", "clientservice/multiplegip/ui/DOMTabletStandardUI"], function(e) {
        "use strict";
        return function(t) {
            function n(e, t, n) {
                a.render(e, t, n)
            }

            function o() {
                a.append()
            }

            function i() {
                a.show()
            }

            function r() {
                a.hide()
            }
            var a, s = t.serverConfig.channel.toLowerCase(),
                c = t.serverConfig.presenttype.toLowerCase();
            return "int" === s ? ("std" === c && (a = e("clientservice/multiplegip/ui/DOMDesktopStandardUI")(t)), "min" === c && (a = e("clientservice/multiplegip/ui/DOMDesktopMiniUI")(t))) : "mob" === s ? "std" === c && (a = e("clientservice/multiplegip/ui/DOMMobileStandardUI")(t)) : "tab" === s && (a = e("clientservice/multiplegip/ui/DOMTabletStandardUI")(t)), Object.freeze({
                createMultipleGIP: n,
                show: o,
                display: i,
                hide: r
            })
        }
    }), define("clientservice/multiplegip/MultipleGIPController", ["require", "clientservice/multiplegip/ui/MultipleGIPUI"], function(e) {
        "use strict";
        var t, n, o;
        return function(i) {
            function r(e, n, o) {
                var i = s(e),
                    r = function(e) {
                        if (e)
                            if ("multipleGIPRedirect" === e["@name"]) {
                                var t = {};
                                e.Param.forEach(function(e) {
                                    t[e["@name"]] = e["#text"]
                                }), o(t)
                            } else n();
                        else a(i, n, function(e) {
                            console.log(i.Buttons.Button[e]);
                            var t = {};
                            i.Buttons.Button[e].Cmd.Param.forEach(function(e) {
                                t[e["@name"]] = e["#text"]
                            }), "MULTIPLE_GIP_NO_REDIRECTION" === t.actiontype ? console.log("MULTIPLE_GIP_NO_REDIRECTION") : o(t)
                        })
                    };
                t.displayLaunchOptions(i, r)
            }

            function a(t, n, r) {
                o || (o = e("clientservice/multiplegip/ui/MultipleGIPUI")(i)), o.createMultipleGIP(t, n, r)
            }

            function s(e) {
                var t = function() {
                        return {
                            Text: "",
                            Cmd: {
                                "@name": "",
                                Param: []
                            }
                        }
                    },
                    n = {
                        "@notification": "Y",
                        "@type": "MULTIPLE_GIP_CHOOSE",
                        Id: e.Id,
                        Message: e.Message,
                        Buttons: {
                            Button: []
                        },
                        extraInfo: {
                            translateInfos: {}
                        }
                    },
                    o = e.Buttons.Button.Cmd.Param,
                    i = c(o);
                if (o.forEach(function(e) {
                        "extraInfo" === e["@name"] ? (n.extraInfo.translateInfos = e["#text"], i && (n.Message = i.mappingMsg, n.Id = i.mappingCode)) : "gipList" === e["@name"] && e["#text"].forEach(function(e) {
                            var o = t();
                            o.Text = e.gametitle, Object.keys(e).forEach(function(t) {
                                o.Cmd.Param.push({
                                    "@name": t,
                                    "#text": e[t]
                                })
                            }), o.Cmd["@name"] = "multipleGIPRedirect", n.Buttons.Button.push(JSON.parse(JSON.stringify(o)))
                        })
                    }), "multipleGIPContinue" === e.Buttons.Button.Cmd["@name"]) {
                    var r = t();
                    r.Text = n.extraInfo.translateInfos.btnContinue, r.Cmd["@name"] = "continue", n.Buttons.Button.push(JSON.parse(JSON.stringify(r)))
                }
                return n
            }

            function c(e) {
                var t;
                return e.forEach(function(e) {
                    "mappingInfo" === e["@name"] && (t = e["#text"])
                }), t
            }
            return t = i.consoleconnect, n = i.stringsConfig, Object.freeze({
                showMultipleGIP: r
            })
        }
    }), define("clientservice/transformer/TournamentDataTransformer", ["require"], function(e) {
        "use strict";

        function t(e) {
            return e
        }

        function n(e) {
            return JSON.stringify(e)
        }

        function o(e) {
            return e
        }
        return function() {
            return {
                transformTournamentInfo: t,
                transformTournamentRegistrationNicknameRequestPayload: n,
                transformTournamentNicknameRegistrationData: o
            }
        }
    }), define("clientservice/communicator/TournamentCommunicator", ["require", "clientservice/transformer/TournamentDataTransformer", "clientservice/communicator/DataAdapter"], function(e) {
        "use strict";
        return function(t) {
            function n(e, o, a, l) {
                a || (a = {});
                var u = s(a),
                    p = u.retry;
                p <= 0 && (p = 1), l || (l = 0);
                var d = c(t);
                r.httpCall(d, function(t) {
                    var s = i.transformTournamentInfo(t);
                    r.deepFreezeJsonObj(s), s.errorId ? l < p - 1 ? n(e, o, a, l + 1) : o(s) : e(s)
                }, o, u)
            }

            function o(e, n, o) {
                var s = t.serverConfig.server.replace("/skb", ""),
                    c = [s, "/extern/v1/portal/tournament/users/nickname"].join(""),
                    l = a({}, i.transformTournamentRegistrationNicknameRequestPayload(e));
                r.httpCall(c, function(e, t) {
                    var r = i.transformTournamentNicknameRegistrationData(e);
                    if ("SUCCESS" === r.status) n(r.nickname);
                    else {
                        var a = "Session Invalid";
                        r.errorId && "4014" === r.errorId && r.errors && r.errors[0] && r.errors[0].message && (a = r.errors[0].message), o(r.status ? r.status : "SESSION_VALIDATE_FAIL", r.message ? r.message : a)
                    }
                }, function(e) {
                    o(e)
                }, l)
            }
            var i = e("clientservice/transformer/TournamentDataTransformer")(t),
                r = e("clientservice/communicator/DataAdapter")(),
                a = function(e, n) {
                    var o = {
                        method: "POST",
                        timeout: Number(t.serverConfig.requestTimeout),
                        retry: Number(t.serverConfig.requestRetries),
                        accept: "json",
                        headerMap: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        paramMap: {},
                        payloadStr: null,
                        isRestful: !0
                    };
                    if (e)
                        for (var i in e) o.paramMap[i] = e[i];
                    return n && (o.payloadStr = n), o
                },
                s = function(e) {
                    var n = {
                        method: "GET",
                        timeout: Number(t.serverConfig.requestTimeout),
                        retry: Number(t.serverConfig.requestRetries),
                        accept: "json",
                        headerMap: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        paramMap: {
                            currencycode: t.serverConfig.paramRGS.currencycode,
                            mode: "DETAILED"
                        },
                        isRestful: !0
                    };
                    if (e)
                        for (var o in e) n.paramMap[o] = e[o];
                    return n
                },
                c = function(e) {
                    return e.serverConfig.server.replace("skb", "") + "extern/v2/portal/" + e.serverConfig.paramRGS.nscode + "/" + e.serverConfig.paramRGS.skincode + "/tournaments/" + e.serverConfig.tournamentId + ".json"
                };
            return {
                requestTournamentInfo: n,
                checkNickName: o
            }
        }
    }), define("clientservice/tournament/TournamentController", ["require", "clientservice/communicator/TournamentCommunicator"], function(e) {
        "use strict";
        var t, n, o, i, r, a, s, c, l;
        return function(u) {
            function p(e) {
                var n = g(),
                    o = function(t) {
                        if (t) {
                            var n = t["@name"];
                            e(n)
                        }
                    };
                t.displayLaunchOptions(n, o)
            }

            function d(e, t, n) {
                var o = f(t.score, t.position);
                a.throwError(e, n, o)
            }

            function m(e) {
                var n = v(),
                    o = function(n, r) {
                        if (n) {
                            n["@name"];
                            s.checkNickName({
                                uniqueid: i.uniqueid,
                                skincode: i.skincode,
                                channel: i.channel,
                                presenttype: i.presenttype,
                                nickname: r
                            }, function() {
                                e(r)
                            }, function(e, n) {
                                "SESSION_VALIDATE_FAIL" === e ? a.throwError("CD-100", function() {}, y()) : t.displayLaunchOptions(v(n), o)
                            })
                        }
                    };
                t.displayLaunchOptions(n, o)
            }

            function f(e, t) {
                var n = {
                        Text: o.btnTSReload ? o.btnTSReload : "Play for real",
                        Cmd: {
                            "@name": "tournamentReload",
                            Param: [{
                                "@name": "playMode",
                                "#text": "real"
                            }]
                        }
                    },
                    i = {
                        Text: o.btnClose,
                        Cmd: {
                            "@name": "closeGame",
                            Param: {}
                        }
                    },
                    r = {
                        Text: o.btnLeaderboard,
                        Cmd: {
                            "@name": "viewLeaderboard",
                            Param: {}
                        }
                    },
                    a = o.tournamentCongratulationMsg ? o.tournamentCongratulationMsg : "Congratulations!\nYou won {0} score, current rank is {1}";
                return a = a.replace(/\{0\}/i, e).replace(/\{1\}/i, t), {
                    "@notification": "N",
                    "@type": "TOURNAMENT_SUMMARY",
                    Id: "1633",
                    Message: a,
                    Buttons: {
                        Button: [n, i, r]
                    }
                }
            }

            function g(e) {
                var t = {
                        Text: o.btnCancel,
                        Cmd: {
                            "@name": "closeGame",
                            Param: {
                                value: 0
                            }
                        }
                    },
                    n = {
                        Text: o.btnContinue,
                        Cmd: {
                            "@name": "continue",
                            Param: {
                                value: 1
                            }
                        }
                    };
                return {
                    "@notification": "Y",
                    "@type": "TOURNAMENT_WELCOME",
                    Id: "9020",
                    Message: o.tournamentWelcomeMsg,
                    Buttons: {
                        Button: [t, n]
                    },
                    extraInfo: {
                        termsUrl: i.termsURL,
                        termsLabel: o.terms
                    }
                }
            }

            function v(e) {
                var t = {
                        Text: o.btnContinue,
                        Cmd: {
                            "@name": "continue",
                            Param: {
                                value: 1
                            }
                        }
                    },
                    n = {
                        "@notification": "Y",
                        "@type": "TOURNAMENT_NICKNAME",
                        Id: "9040",
                        Message: o.tournamentNickNameMsg ? o.tournamentNickNameMsg : "EnterNicknamePlaceholder",
                        Buttons: {
                            Button: [t]
                        }
                    };
                return e && (n.extraInfo = {
                    errorMessage: e
                }), n
            }

            function y() {
                var e = {
                    Text: o.btnOk ? o.btnOk : "OK",
                    Cmd: {
                        "@name": "reloadGame",
                        Param: {}
                    }
                };
                return {
                    "@notification": "N",
                    Id: "4014",
                    Reference: "SKB-4014",
                    Message: o.errSessionExpired ? o.errSessionExpired : "Expired session. Dismiss this message to re-launch the game.",
                    Buttons: {
                        Button: [e]
                    }
                }
            }

            function C(e) {
                i.hasOwnProperty("showTournmentWelComeMessage") && !1 === i.showTournmentWelComeMessage ? e() : p(e)
            }

            function h(e, n) {
                s.requestTournamentInfo(function(e) {
                    e.tournament ? t.sendConfig({
                        type: "tournament",
                        data: e.tournament,
                        clientConfig: {
                            stringsConfig: o,
                            serverConfig: {
                                uniqueid: i.uniqueid,
                                skincode: i.skincode,
                                tournamentId: i.tournamentId
                            }
                        }
                    }, function() {
                        c.postPlayerStartTournament(l), n && n()
                    }) : console.log("Tournament data is empty!"), t.addConsoleEvent("tournamentEnded", function(e, n) {
                        var o = "TS-002";
                        t.setInteruptedMessage(!1), e.inWager && !t.isAllowInterruptedMessage() && (o = "TS-003", t.setInteruptedMessage(!0)), e.haltGame(), d(o, n, function() {
                            t.setInteruptedMessage(!1)
                        })
                    }), e.tournament && (l = {
                        id: e.tournament.id,
                        start: e.tournament.start
                    })
                }, function(e) {
                    a.throwError("TS-001", null, x(e), 1)
                }, e)
            }

            function b(e, o) {
                t.sendConfig({
                    type: "leaderboard",
                    data: S(e.clientConfig.consoleConfig.leaderboardConfig, n.leaderboardConfig)
                }, function() {
                    o()
                })
            }

            function S(e, t) {
                var n = {};
                return [e, t].forEach(function(e) {
                    Object.keys(e).forEach(function(t) {
                        e[t] && (this[t] = e[t])
                    }, n)
                }), n
            }

            function x(e) {
                return {
                    "@notification": "N",
                    "@type": "",
                    Id: "9021",
                    Message: e.errors[0].message,
                    Buttons: {
                        Button: {
                            Text: o.btnOk ? o.btnOk : "Close",
                            Cmd: {
                                "@name": "close"
                            }
                        }
                    }
                }
            }
            return t = u.consoleconnect, n = u.consoleConfig, o = u.stringsConfig, i = u.serverConfig, r = u.bus, a = u.errorHandler, c = u.cecCommand, s = e("clientservice/communicator/TournamentCommunicator")(u), Object.freeze({
                preInit: C,
                init: h,
                sendLeaderboardConfig: b,
                showWelComeMessage: p,
                sendEnterNicknameInfo: m
            })
        }
    }), define("clientservice/transformer/CompetitionDataTransformer", ["require"], function(e) {
        "use strict";

        function t(e) {
            return e
        }

        function n(e) {
            return JSON.stringify(e)
        }
        return Object.freeze({
            transformCompetitionRegistrationData: t,
            transformCompetitionRegistrationRequestPayload: n
        })
    }), define("clientservice/communicator/CompetitionCommunicator", ["require", "clientservice/transformer/CompetitionDataTransformer", "clientservice/communicator/DataAdapter"], function(e) {
        "use strict";
        return function(t) {
            function n(e, n, o, i) {
                var c = t.serverConfig.server.replace("/skb", ""),
                    l = [c, "/extern/v1/competitions/", e, "/players"].join(""),
                    u = s({}, r.transformCompetitionRegistrationRequestPayload(n));
                a.httpCall(l, function(e, t) {
                    var n = r.transformCompetitionRegistrationData(e);
                    if ("SUCCESS" === n.status) o(n);
                    else switch (n.status) {
                        case "BAD_NICKNAME":
                        case "NICKNAME_EXISTED":
                            i(n.status, n.message, !0);
                            break;
                        case "FAILURE":
                        case "SESSION_VALIDATE_FAIL":
                        case "CPT_ERROR":
                        case "COMPETITION_REGISTERED_IN_OTHER_CURRENCY":
                            i(n.status, n.message)
                    }
                }, function(e) {
                    i(e)
                }, u)
            }

            function o(e, n, o, i) {
                var c = t.serverConfig.server.replace("/skb", ""),
                    l = [c, "/extern/v1/competitions/", e, "/players"].join(""),
                    u = s({}, r.transformCompetitionRegistrationRequestPayload(n));
                a.httpCall(l, function(e, t) {
                    var n = r.transformCompetitionRegistrationData(e);
                    if ("SUCCESS" === n.status) o(n);
                    else switch (n.status) {
                        case "FAILURE":
                        case "SESSION_VALIDATE_FAIL":
                        case "CPT_ERROR":
                        case "COMPETITION_REGISTERED_IN_OTHER_CURRENCY":
                            i(n.status, n.message)
                    }
                }, function(e) {
                    i(e)
                }, u)
            }

            function i(e, n, o, i) {
                var c = t.serverConfig.server.replace("/skb", ""),
                    l = [c, "/extern/v1/competitions/optout/", e, "?uniqueid=" + n.uniqueid].join("");
                n = {};
                var u = s({}, r.transformCompetitionRegistrationRequestPayload(n));
                u.method = "PATCH", a.httpCall(l, function(e, t) {
                    var n = r.transformCompetitionRegistrationData(e);
                    if ("SUCCESS" === n.status) o(n);
                    else switch (n.status) {
                        case "FAILURE":
                        case "SESSION_VALIDATE_FAIL":
                        case "CPT_ERROR":
                            i(n.status, n.message)
                    }
                }, function(e) {
                    i(e)
                }, u)
            }
            var r = e("clientservice/transformer/CompetitionDataTransformer"),
                a = e("clientservice/communicator/DataAdapter")(),
                s = function(e, n) {
                    var o = {
                        method: e.method || "POST",
                        timeout: Number(t.serverConfig.requestTimeout),
                        retry: Number(t.serverConfig.requestRetries),
                        accept: "json",
                        headerMap: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        paramMap: {},
                        payloadStr: null
                    };
                    if (e)
                        for (var i in e) o.paramMap[i] = e[i];
                    return n && (o.payloadStr = n), o
                };
            return {
                registerCompetiton: n,
                registerBoltOn: o,
                unregisterBoltOn: i
            }
        }
    }), define("clientservice/competition/CompetitionController", ["require", "clientservice/communicator/CompetitionCommunicator"], function(e) {
        "use strict";
        return function(t) {
            function n(e, t) {
                m.debug("request join competition: " + e.competitionId), S.registerCompetiton(e.competitionId, {
                    uniqueid: C.uniqueid,
                    skincode: C.skincode,
                    nscode: C.nscode,
                    channel: C.channel,
                    currencycode: C.paramRGS.currencycode,
                    presenttype: C.presenttype,
                    language: C.paramRGS.language,
                    nickname: e.nickname
                }, function(e) {
                    m.debug("register the competition successfully"), f && f(o(e.competitiontoken)), t.reply(null, {
                        status: "success",
                        competitionId: e.competitiontoken,
                        nickname: e.nickname
                    })
                }, function(e, n, o) {
                    m.debug("fail register the competition"), "SESSION_VALIDATE_FAIL" === e ? y.throwError("CD-100", function() {}, l()) : o ? t.reply({
                        status: "retry",
                        code: e,
                        message: n
                    }) : t.reply({
                        status: "error",
                        code: e,
                        message: n
                    })
                })
            }

            function o(e) {
                return {
                    serverConfig: {
                        paramRGS: {
                            competitiontoken: e
                        }
                    }
                }
            }

            function i(e, t, n, i) {
                var r;
                if (n && n.date) {
                    var a = new Date(n.date);
                    r = [a.getUTCDate(), "/", a.getUTCMonth() + 1, "/", a.getUTCFullYear(), " ", a.getUTCHours(), ":", a.getUTCMinutes(), ":", a.getUTCSeconds(), " UTC"].join("")
                }
                var s = e ? e.playerInfo : void 0;
                !s && t && (s = t.player);
                var c, l = !1;
                if (t) {
                    p = t;
                    var u = p.visibleCompetitions;
                    Array.isArray(u) || (u = [u]);
                    var m, f;
                    for (m = 0, c = u[0]; m < u.length; m++)
                        if (f = u[m], f.registered) {
                            l = !0, c = f;
                            break
                        }
                }
                c && c.nickname && (s ? (s = JSON.parse(JSON.stringify(s)), s.nickname = c.nickname) : s = {
                    nickname: c.nickname
                }), setTimeout(function() {
                    d.publish({
                        channel: "ClientService",
                        topic: "GameService.CompetitionInit",
                        data: {
                            player: s,
                            competition: c ? c.competition : void 0,
                            progress: c ? c.progress : void 0,
                            registered: l,
                            serverTime: r
                        }
                    })
                }, 0), i && "function" == typeof i && (l ? i(o(c.competition.staticView.competitionToken)) : i())
            }

            function r(e, t) {
                m.debug("on finished competition: " + e.competitionId), f && f(o(""), !0)
            }

            function a(e) {
                e ? v.pauseGame() : v.unPauseGame()
            }

            function s(e, t) {
                a(!0);
                var n = e.gameRoundState,
                    o = !0,
                    i = "CM-001";
                v.setInteruptedMessage(!1), n.isInGIP && "GS-CPT-003" === e.gsMessageId && (i = "CM-002", a(!1), o = !1), "GS-CPT-001" === e.gsMessageId && (b = {
                    prizeAmount: e.data.amount
                }), ("onAllowInterruptedMessage" === n.status || !n.isInGameRound && "beforeShowMessage" === n.status) && (i = "CM-002", v.setInteruptedMessage(o)), y.throwError(i, function() {
                    console.log("competition message dismissed"), v.setInteruptedMessage(!1), a(!1), t.reply(null, {})
                }, c(e))
            }

            function c(e) {
                var t = {
                    Text: g.btnClose,
                    Cmd: {
                        "@name": "continue",
                        Param: {}
                    }
                };
                return {
                    gsType: "competition",
                    "@notification": "N",
                    Id: e.gsMessageId ? e.gsMessageId : "CPT-001",
                    Buttons: {
                        Button: [t]
                    },
                    extraInfo: e.data
                }
            }

            function l() {
                var e = {
                    Text: g.btnOk ? g.btnOk : "OK",
                    Cmd: {
                        "@name": "reloadGame",
                        Param: {}
                    }
                };
                return {
                    "@notification": "N",
                    Id: "4014",
                    Reference: "SKB-4014",
                    Message: g.errSessionExpired ? g.errSessionExpired : "Expired session. Dismiss this message to re-launch the game.",
                    Buttons: {
                        Button: [e]
                    }
                }
            }

            function u(e) {
                null !== b && (e.prizeAmount = b.prizeAmount), h.postCashTournamentHitPrize(e), b = null
            }
            var p, d = t.bus,
                m = t.logger,
                f = t.updateClientConfigHandler,
                g = t.stringsConfig,
                v = t.consoleconnect,
                y = t.errorHandler,
                C = t.serverConfig,
                h = t.cecCommand,
                b = null,
                S = e("clientservice/communicator/CompetitionCommunicator")(t);
            return d.subscribe({
                channel: "GameService",
                topic: "GameService.JoinCompetition",
                callback: n
            }), d.subscribe({
                channel: "GameService",
                topic: "GameService.CompetitionMessage",
                callback: s
            }), d.subscribe({
                channel: "GameService",
                topic: "Competition.Completed",
                callback: r
            }), d.subscribe({
                channel: "GameService",
                topic: "Competition.Cancelled",
                callback: r
            }), d.subscribe({
                channel: "GameService",
                topic: "Competition.Panel.PlayerJoinAct",
                callback: h.postPlayerActCashTournament
            }), d.subscribe({
                channel: "GameService",
                topic: "Competition.Panel.PlayerEndAct",
                callback: h.postPlayerEndCashTournament
            }), d.subscribe({
                channel: "GameService",
                topic: "Competition.Panel.PrizeHit",
                callback: u
            }), d.subscribe({
                channel: "GameService",
                topic: "Competition.Panel.ItemClicked",
                callback: h.postItemBeenClicked
            }), Object.freeze({
                ready: i
            })
        }
    }), define("clientservice/bolton/BoltOnController", ["require", "clientservice/communicator/CompetitionCommunicator"], function(e) {
        "use strict";
        return function(t) {
            function n() {}

            function o(e) {
                return E && E === e
            }

            function i(e) {
                return o(e) && T.prize && "EMPTY" !== T.prize.awardType.category && "NEARMISS" !== T.prize.awardType.category && "NEAR_MISS" !== T.prize.awardType.category
            }

            function r(e, t, n, r) {
                if (o(e)) n(i(e));
                else {
                    var a, s = setInterval(function() {
                        o(e) && (clearTimeout(a), clearInterval(s), n(i(e)))
                    }, 250);
                    a = setTimeout(function() {
                        clearInterval(s), r()
                    }, t)
                }
            }

            function a(e, t) {
                f.request({
                    channel: "GameService",
                    topic: "BoltOn.Play",
                    data: T
                }, function() {
                    var e = g.errBOJResult || "Congratulations, you have won {0}. \nYour account will be credited shortly.";
                    T.prize.amount > 0 ? v.throwError("GS-003", function() {
                        t(T.prize.amount)
                    }, {
                        Message: e.replace("{0}", C.formatFloat(T.prize.amount)),
                        Buttons: {
                            Button: {
                                Text: g.btnOk,
                                Cmd: {
                                    "@name": "continue",
                                    Param: {}
                                }
                            }
                        },
                        Id: "GS-003",
                        extraInfo: {
                            amount: T.prize.amount
                        }
                    }) : t()
                }, function() {
                    t()
                })
            }

            function s(e) {
                f.publish({
                    channel: "GameService",
                    topic: "Game.GameEvent",
                    data: e
                })
            }

            function c() {}

            function l(e) {
                y.setInteruptedMessage(!0), v.throwError(e.errorCode, function() {
                    y.setInteruptedMessage(!1)
                })
            }

            function u(e) {
                e.outcomeId && (E = e.outcomeId, T.outcomeId === e.outcomeId && "COMPLETED" === e.payoutStatus ? T.payoutStatus = e.payoutStatus : T = e)
            }

            function p(e, n) {
                var o = {
                    uniqueid: t.serverConfig.paramRGS.uniqueid,
                    skincode: t.serverConfig.paramRGS.skincode,
                    nscode: t.serverConfig.paramRGS.nscode,
                    channel: t.serverConfig.paramRGS.channel,
                    presenttype: t.serverConfig.paramRGS.presenttype
                };
                S.registerBoltOn(b.visibleCompetitions[0].competition.staticView.competitionToken, o, function(e) {
                    h = !0, n.reply(null, {
                        status: e.status
                    }), x({
                        serverConfig: {
                            paramRGS: {
                                competitiontoken: e.competitiontoken
                            }
                        }
                    })
                }, function(e, t) {
                    n.reply({
                        status: e,
                        message: t
                    })
                })
            }

            function d(e, n) {
                var o = {
                    uniqueid: t.serverConfig.paramRGS.uniqueid
                };
                S.unregisterBoltOn(b.visibleCompetitions[0].competition.staticView.competitionToken, o, function(e) {
                    h = !1, n.reply(null, {
                        status: e.status
                    }), x({
                        serverConfig: {
                            paramRGS: {
                                competitiontoken: void 0
                            }
                        }
                    })
                }, function(e, t) {
                    n.reply({
                        status: e,
                        message: t
                    })
                })
            }

            function m() {
                return h
            }
            var f = t.bus,
                g = (t.logger, t.stringsConfig),
                v = t.errorHandler,
                y = t.consoleconnect,
                C = (t.serverConfig, t.cecCommand, t.currency),
                h = !1,
                b = JSON.parse(JSON.stringify(t.boltOnConfig)),
                S = e("clientservice/communicator/CompetitionCommunicator")(t),
                x = t.updateClientConfigHandler;
            ("Y" === b.visibleCompetitions[0].competition.staticView.autoRegister || b.visibleCompetitions[0].registered) && (h = !0, x({
                serverConfig: {
                    paramRGS: {
                        competitiontoken: b.visibleCompetitions[0].competition.staticView.competitionToken
                    }
                }
            })), f.publish({
                channel: "Kernel",
                topic: "LoadProgress",
                data: {
                    id: "BoltOn",
                    items: "10",
                    current: "0",
                    complete: !1
                }
            }), f.publish({
                channel: "GameService",
                topic: "BoltOn.LoadProgress",
                data: {
                    percent: 0,
                    complete: !1,
                    fail: !1
                }
            }), f.publish({
                channel: "Kernel",
                topic: "LoadProgress",
                data: {
                    id: "BoltOnJPS",
                    items: "1",
                    current: "0",
                    complete: !1
                }
            });
            var E = "",
                T = {};
            return f.subscribe({
                channel: "GameService",
                topic: "BoltOn.Error",
                callback: l
            }), b.server = t.serverConfig.baseHostUrl, b.config = {
                channel: t.serverConfig.paramRGS.channel,
                countrycode: t.serverConfig.paramRGS.countrycode,
                currencycode: t.serverConfig.paramRGS.currencycode,
                denomamount: t.serverConfig.paramRGS.denomamount,
                language: t.serverConfig.paramRGS.language,
                presenttype: t.serverConfig.paramRGS.presenttype,
                revisionTag: t.serverConfig.revisionTag
            }, setTimeout(function() {
                f.publish({
                    channel: "ClientService",
                    topic: "GameService.BoltOnInit",
                    data: b
                })
            }, 0), f.subscribe({
                channel: "GameService",
                topic: "BoltOn.Panel.OptIn",
                callback: p
            }), f.subscribe({
                channel: "GameService",
                topic: "BoltOn.Panel.OptOut",
                callback: d
            }), f.subscribe({
                channel: "GameService",
                topic: "BoltOn.ResponseReceived",
                callback: u
            }), Object.freeze({
                init: n,
                checkForBoltOnResponse: o,
                loadBoltOn: c,
                playBoltOn: a,
                waitForResponse: r,
                sendGameEvent: s,
                playAllowed: m
            })
        }
    }), define("clientservice/replaycontroller/ReplayController", ["require"], function(e) {
        "use strict";
        return function(e, t, n, o) {
            function i() {
                return c
            }

            function r() {
                return !(!s || c !== s)
            }

            function a() {
                l || (o.getFailFlag() || c++, t.sendMessage("replayUpdate", {
                    currentRound: c
                })), l = !1
            }
            var s, c = 0,
                l = !1;
            return n.totalRounds && (s = Number(n.totalRounds)), e.subscribe({
                channel: "Game",
                topic: "Game.ReplayData",
                callback: function(e, n) {
                    e.replayAction && "next" === e.replayAction && (o.getFailFlag() || c++, t.sendMessage("replayUpdate", {
                        currentRound: c
                    })), l = !0
                }
            }), t.addConsoleEvent("shareReplayClicked", function(e, n) {
                o.replayShareUrl(function(e) {
                    e.RGSResponse && e.RGSResponse.replayShareURL && t.sendMessage("replayShareUrl", e.RGSResponse.replayShareURL)
                })
            }), {
                getCurrentRound: i,
                replayUpdate: a,
                isReplayEnd: r
            }
        }
    }), define("clientservice/flowcontroller/FlowController", ["require", "clientservice/errorhandler/ErrorHandler", "clientservice/commands/RgsCommand", "clientservice/autospin/AutoSpinController", "clientservice/commands/JpsCommand", "clientservice/promospin/PromoSpinController", "clientservice/multiplegip/MultipleGIPController", "clientservice/tournament/TournamentController", "clientservice/competition/CompetitionController", "clientservice/bolton/BoltOnController", "clientservice/replaycontroller/ReplayController"], function(e) {
        "use strict";
        return function(t, n) {
            function o(n, o) {
                if (D = n.serverConfig, N = n.stringsConfig, B = n.kernelConfig, F = n.consoleConfig, z = n.gameServiceConfig, W = n.gameConfig, ne = !!z, P = e("clientservice/errorhandler/ErrorHandler")({
                        bus: Q,
                        config: n
                    }), G = e("clientservice/commands/RgsCommand")(t, P, n), Y = e("clientservice/replaycontroller/ReplayController")(Q, V, D, G), ne && (j = e("clientservice/competition/CompetitionController")({
                        consoleconnect: V,
                        stringsConfig: N,
                        serverConfig: D,
                        bus: Q,
                        logger: $,
                        errorHandler: P,
                        cecCommand: K,
                        updateClientConfigHandler: function(e, t) {
                            p(e, t)
                        }
                    })), Q.publish({
                        channel: "ClientService",
                        topic: "System.ErrorHandlerReady",
                        data: {}
                    }), n.Exception) return void P.throwError("CD-100", null, n.Exception);
                n.serverConfig.autospin && (U = e("clientservice/autospin/AutoSpinController")({
                    stringsConfig: n.stringsConfig,
                    serverConfig: n.serverConfig,
                    consoleConfig: n.consoleConfig,
                    gameConfig: n.gameConfig,
                    bus: Q,
                    root: t.root,
                    currency: t.currency,
                    errorHandler: P,
                    gameRoot: t.gameRoot,
                    consoleconnect: V
                })), n.serverConfig.jackpotMeterUrl ? (M = e("clientservice/commands/JpsCommand")(Q, P, V, n), M.startJackpot(function(e) {
                    e && e.jackpotCurrencyCode && e.jackpotCurrencyCode.toLowerCase() !== n.serverConfig.paramRGS.currencycode.toLowerCase() && (ee.jackpotBaseCurrency = e.jackpotCurrencyCode), te = !0, l()
                })) : l()
            }

            function i(e, t) {
                re = !0
            }

            function r() {
                K.init({
                    serverConfig: D,
                    stringsConfig: N,
                    kernelConfig: B,
                    consoleConfig: F,
                    gameServiceConfig: z,
                    gameConfig: W
                }), G.setCECCommand(K), U && U.setCECCommand(K)
            }

            function a() {
                Q.publish({
                    channel: "ClientService",
                    topic: "GameService.PFSNotificationInit",
                    data: {}
                })
            }

            function s(n, o, i, c, l, d) {
                if (n) {
                    if (n.Message && n.Message.Id) {
                        var m = n.Message.Id;
                        if ("1612" === m) {
                            H || (H = e("clientservice/promospin/PromoSpinController")({
                                consoleconnect: V,
                                kernelConfig: B,
                                stringsConfig: N,
                                serverConfig: D,
                                bus: Q,
                                root: t.root,
                                gameRoot: t.gameRoot
                            }));
                            var f = function(e) {
                                var t = n.Message.Buttons.Button;
                                Array.isArray(t) || (t = [t]);
                                for (var o = 0; o < t.length; o++)
                                    if (e === t[o].Cmd["@name"]) {
                                        J = t[o].Cmd["@name"].toLowerCase();
                                        break
                                    }
                                p({
                                    playModeChoice: J
                                }), re ? G.reLaunch(s, function() {
                                    d()
                                }, ee) : G.launch(ee, r, s)
                            };
                            H.showPromotionalFreeSpinAndWagerChoose(n.Message, f)
                        } else console.log("Error: message " + m + " not support yet")
                    } else if ("OFFER_FREESPIN" === n.type) {
                        var g = function(e) {
                            var t = n.clientConfig.serverConfig.paramGame,
                                o = JSON.parse(JSON.stringify(n)),
                                i = {
                                    freespin_lines: o.config[e].freespin_lines,
                                    freespin_bet: o.config[e].freespin_bet,
                                    freespin_num: o.config[e].freespin_num
                                };
                            re || Q.publish({
                                channel: "ClientService",
                                topic: "ClientService.ConfigUpdate",
                                data: {
                                    paramGame: t,
                                    freespin: {
                                        freespin_lines: i.freespin_lines,
                                        freespin_bet: i.freespin_bet
                                    }
                                }
                            }), o.clientConfig || (o.clientConfig = {});
                            var r = {
                                paramRGS: i
                            };
                            u(r, i), u(o.clientConfig, {
                                serverConfig: r
                            }), p(o.clientConfig), c({
                                paramGame: t
                            })
                        };
                        H || (H = e("clientservice/promospin/PromoSpinController")({
                            consoleconnect: V,
                            kernelConfig: B,
                            stringsConfig: N,
                            serverConfig: D,
                            bus: Q,
                            root: t.root,
                            gameRoot: t.gameRoot
                        })), Array.isArray(n.config) && "freespin" === J ? H.showPromoSpinOffers(n.config, function(e) {
                            g(e)
                        }) : g(0)
                    } else if ("OFFER_TOURNAMENT" === n.type) {
                        var v = {};
                        l && l.portalToken && (v = {
                            secureToken: l.portalToken,
                            uniqueId: D.paramRGS.uniqueid
                        }), q.init(v, function() {
                            Q.publish({
                                channel: "ClientService",
                                topic: "ClientService.ConfigUpdate",
                                data: void 0
                            }), p(n.clientConfig), o && o.playerInfo && o.playerInfo.nickname ? q.sendLeaderboardConfig(n, function() {
                                c()
                            }) : q.sendEnterNicknameInfo(function(e) {
                                console.log(e), n = JSON.parse(JSON.stringify(n)), n.clientConfig.consoleConfig.leaderboardConfig.displayName = e, q.sendLeaderboardConfig(n, function() {
                                    c()
                                })
                            })
                        })
                    } else if ("OFFER_COMPETITION" === n.type) Q.publish({
                        channel: "ClientService",
                        topic: "ClientService.ConfigUpdate",
                        data: void 0
                    }), n && "BOLT_ON_JACKPOT" === n.config.visibleCompetitions[0].competition.staticView.stopType ? (ie = !0, _ || (_ = e("clientservice/bolton/BoltOnController")({
                        boltOnConfig: n.config,
                        stringsConfig: N,
                        consoleconnect: V,
                        serverConfig: D,
                        gameServiceConfig: z,
                        bus: Q,
                        logger: $,
                        errorHandler: P,
                        cecCommand: K,
                        currency: t.currency,
                        updateClientConfigHandler: function(e, t) {
                            p(e, t)
                        }
                    })), c()) : j.ready(o, n.config, i, function(e) {
                        e && p(e), c()
                    }), a();
                    else if ("1115" === n.Id || "1116" === n.Id || "1118" === n.Id || A(n)) {
                        var y = e("clientservice/multiplegip/MultipleGIPController")({
                                consoleconnect: V,
                                kernelConfig: B,
                                stringsConfig: N,
                                serverConfig: D,
                                bus: Q,
                                root: t.root,
                                gameRoot: t.gameRoot
                            }),
                            C = function(e) {
                                var t = {
                                        actiontype: "MULTIPLE_GIP_REDIRECTION",
                                        multipleGIPContinue: !0
                                    },
                                    n = {
                                        serverConfig: {
                                            paramPost: t,
                                            paramRGS: t
                                        }
                                    };
                                p(n), re ? G.reLaunch(s, function() {
                                    p(n, !0), d && d()
                                }, ee) : G.launch(ee, r, s, function() {
                                    p(n, !0), c && c()
                                })
                            },
                            h = function(e) {
                                P.doRGSAfterConsole("multipleGIPReload", e)
                            };
                        y.showMultipleGIP(n, C, h)
                    }
                } else Q.publish({
                    channel: "ClientService",
                    topic: "ClientService.ConfigUpdate",
                    data: void 0
                }), "freespin" !== D.playMode && (j && j.ready(o), a()), c && c()
            }

            function c() {
                X && (M && te || !M) && (ne && !Z || G && oe && G.launch(ee, r, s))
            }

            function l() {
                if ("tournament" === D.paramRGS.playMode) {
                    q = e("clientservice/tournament/TournamentController")({
                        consoleconnect: t.consoleconnect,
                        consoleConfig: F,
                        kernelConfig: B,
                        stringsConfig: N,
                        serverConfig: D,
                        bus: Q,
                        errorHandler: P,
                        root: t.root,
                        gameRoot: t.gameRoot,
                        cecCommand: K
                    });
                    var n;
                    n = D.hasOwnProperty("showTournmentWelComeMessage") && !1 === D.showTournmentWelComeMessage ? function() {
                        oe = !0, c()
                    } : function(e) {
                        "continue" === e ? (oe = !0, c()) : P.doRGSAfterConsole(e)
                    }, q.preInit(n)
                } else oe = !0, c()
            }

            function u(e, t, n) {
                for (var o in t)
                    if ("object" == typeof t[o]) e[o] || (e[o] = {}), u(e[o], t[o], n);
                    else if (n) delete e[o];
                else {
                    if ("object" != typeof e) throw new Error("Cannot merge object to " + typeof e);
                    e[o] = t[o]
                }
            }

            function p(e, n) {
                e.gameConfig && e.gameConfig.wagerType && (D.paramRGS.wagerType = e.gameConfig.wagerType, D.paramGet.wagerType && (D.paramGet.wagerType = e.gameConfig.wagerType)), e.playModeChoice && (D.paramRGS.playModeChoice = e.playModeChoice);
                for (var o in e) switch (o) {
                    case "serverConfig":
                        u(D, e[o], n);
                        break;
                    case "stringsConfig":
                        u(N, e[o], n);
                        break;
                    case "kernelConfig":
                        u(B, e[o], n);
                        break;
                    case "consoleConfig":
                        u(F, e[o], n);
                        break;
                    case "gameServiceConfig":
                        u(z, e[o], n)
                }
                t.consoleconnect.updateClientConfig(e, n)
            }

            function d(e, t) {
                p({
                    serverConfig: {
                        paramRGS: e
                    }
                }, t)
            }

            function m() {
                return D.paramRGS.SWITCH_MODE
            }

            function f(e, t) {
                d({
                    SWITCH_MODE: e
                });
                var n = ["freespin_tokenID", "campaignId", "freespin_bet", "freespin_lines", "freespin_num", "playModeChoice"],
                    o = ["currencycode"],
                    i = t.playMode ? t.playMode : "real";
                switch (e) {
                    case "PFS_TO_WAGER":
                        D.playMode = i, D.paramRGS.playMode = i, D.paramGame.playMode = i;
                        for (var r = 0; r < n.length; r++)[D, D.paramRGS, D.paramGet, D.paramPost].forEach(function(e) {
                            e && e.hasOwnProperty(n[r]) && delete e[n[r]]
                        });
                        for (var r = 0; r < o.length; r++) t.hasOwnProperty(o[r]) && (D[o[r]] = t[o[r]], D.paramRGS[o[r]] = t[o[r]]);
                        D.paramGame.playModeChoice && delete D.paramGame.playModeChoice;
                        break;
                    case "WAGER_TO_PFS":
                        D.playMode = i, D.paramRGS.playMode = i, D.paramGame.playMode = i;
                        for (var r = 0; r < n.length; r++) t.hasOwnProperty(n[r]) && (D[n[r]] = t[n[r]], D.paramRGS[n[r]] = t[n[r]]);
                        for (var r = 0; r < o.length; r++) t.hasOwnProperty(o[r]) && (D[o[r]] = t[o[r]], D.paramRGS[o[r]] = t[o[r]]);
                        D.playModeChoice = "freespin", D.paramRGS.playModeChoice = "freespin", D.paramGame.hasOwnProperty("playModeChoice") && (D.paramGame.playModeChoice = "freespin")
                }
            }

            function g() {
                var e = {
                    SWITCH_MODE: ""
                };
                p({
                    serverConfig: {
                        paramRGS: e,
                        paramGet: e,
                        paramPost: e
                    }
                }, !0)
            }

            function v(e) {
                X = !0, c()
            }

            function y(e) {
                Z = !0, c()
            }

            function C(e) {
                G.setRequestData(e)
            }

            function h(e) {
                G.init(e)
            }

            function b(e) {
                G.reLaunch(s, e)
            }

            function S(e) {
                function t(t) {
                    U && U.isAutoSpinStarted() && U.checkAutoSpinLimits(t.RGSResponse.GameLogicResponse), e(t)
                }
                if (D.playMode && "replay" === D.playMode) {
                    Y.replayUpdate();
                    var n = Y.getCurrentRound();
                    G.replay(t, n)
                } else G.play(t)
            }

            function x() {
                return D.playMode && "replay" === D.playMode && Y.isReplayEnd()
            }

            function E(e) {
                G.setBalance(e)
            }

            function T(e) {
                G.silentBalanceUpdate(e)
            }

            function k(e, t) {
                G.getPlayerBalance(e, t)
            }

            function I(e, t) {
                t()
            }

            function w(e) {
                var t = {
                        Text: "abort",
                        Cmd: {
                            "@name": "abort",
                            Param: {
                                value: void 0
                            }
                        }
                    },
                    n = {
                        "@notification": "Y",
                        "@type": "InsufficientFound",
                        Id: "9050",
                        Message: N.errInsufficientFund,
                        Buttons: {
                            Button: [t]
                        }
                    };
                P.throwError("CD-109", function() {}, n)
            }

            function R(e) {
                G.setGameInProgress(e)
            }

            function L(e, t) {
                ie ? _.waitForResponse(e, 3e3, function(n) {
                    n ? _.playBoltOn(e, function(e) {
                        t(e)
                    }) : t()
                }, function() {
                    console.warn("BOLTON: NO PLAY DATA MATCHING TXID " + e + " FOUND"), P.throwError("GS-002")
                }) : t()
            }

            function O(e, t) {
                ie && !_.playAllowed() ? P.throwError("GS-004", t) : e()
            }

            function A(e) {
                if (e.Buttons && e.Buttons.Button && e.Buttons.Button.Cmd && e.Buttons.Button.Cmd.Param)
                    for (var t = e.Buttons.Button.Cmd.Param, n = 0; n < t.length; n++) {
                        var o = t[n];
                        if ("Y" === o["#text"] && "multiGip" === o["@name"]) return !0
                    }
                return !1
            }
            var G, M, P, D, N, B, F, z, W, U, H, q, j, _, J, Y, K = t.cecCommand,
                V = t.consoleconnect,
                X = !1,
                Z = !1,
                Q = t.bus,
                $ = t.logger,
                ee = {},
                te = !1,
                ne = !1,
                oe = !1,
                ie = !1,
                re = !1;
            Q.subscribe({
                channel: "Kernel",
                topic: "System.InternalInit",
                callback: o
            }), Q.subscribe({
                channel: "Kernel",
                topic: "System.Init",
                callback: i
            }), Q.subscribe({
                channel: "ConsoleService",
                topic: "ConsoleService.InitDone",
                callback: v
            }), Q.subscribe({
                channel: "GameService",
                topic: "GameService.InitDone",
                callback: y
            }), Q.subscribe({
                channel: "Game",
                topic: "Game.PlayData",
                callback: function(e, t) {
                    C(e)
                }
            }), Q.subscribe({
                channel: "Kernel",
                topic: "Kernel.UpdateConfig",
                callback: function(e, t) {
                    p(e), Q.publish({
                        channel: "Kernel",
                        topic: "Kernel.UpdateConfig.Ack",
                        data: {
                            success: "ClientService"
                        }
                    })
                }
            }), n({
                initrequest: h,
                playrequest: S,
                showMessages: I,
                setBalance: E,
                silentBalanceUpdate: T,
                getPlayerBalance: k,
                reLaunchrequest: b,
                getSwitchPlayMode: m,
                setSwitchPlayMode: f,
                clearSwitchPlayMode: g,
                throwInsufficientFoundError: w,
                getErrorHandler: function() {
                    return P
                },
                setGameInProgress: R,
                handleBoltOn: L,
                checkPlayPermitted: O,
                isReplayEnd: x
            })
        }
    }), define("clientservice/transformer/CECDataTransformer", ["require"], function(e) {
        "use strict";

        function t(e, t, n) {
            n || (n = {});
            var o = {};
            o.token = e, o.time = Date.now() + i + "";
            for (var r in n) {
                var a = n[r].properties;
                for (var s in a) "timestamp" === a[s].key ? a[s].value = parseInt(a[s].value) + i + "" : a[s].value = a[s].value + ""
            }
            return o.events = n, {
                method: "POST",
                accept: "json",
                headerMap: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                withCredentials: !0,
                retry: t,
                payloadStr: JSON.stringify(o)
            }
        }

        function n(e, t) {
            return {
                method: "POST",
                accept: "json",
                headerMap: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                withCredentials: !0,
                retry: e,
                payloadStr: JSON.stringify(t)
            }
        }

        function o(e) {
            i = e
        }
        var i = 0;
        return function() {
            return {
                transformRegisterEvent: n,
                transformPostEvent: t,
                setTimeTune: o
            }
        }
    }), define("clientservice/communicator/CECCommunicator", ["require", "clientservice/communicator/DataAdapter", "clientservice/transformer/CECDataTransformer"], function(e) {
        "use strict";
        var t, n, o, i = e("clientservice/communicator/DataAdapter")(),
            r = e("clientservice/transformer/CECDataTransformer")(),
            a = 2e3,
            s = 6e4,
            c = 0,
            l = 0;
        return function(e) {
            function u(e) {
                var s = {};
                s.secureToken = C.serverConfig.securetoken, s.nsCode = C.serverConfig.nscode, s.game = {
                    softwareId: C.serverConfig.softwareid,
                    channel: C.serverConfig.channel,
                    presentation: C.serverConfig.presenttype,
                    technology: C.serverConfig.paramRGS.technology,
                    language: C.serverConfig.paramGame.language,
                    currency: C.serverConfig.paramGame.currencycode,
                    denom: C.serverConfig.denomamount,
                    nscode: C.serverConfig.nscode
                };
                var u = r.transformRegisterEvent(b, s);
                i.httpCall(t, function(e) {
                    if (e.errorId) return void E.warn("fail to register cec session for " + e.code + ": " + e.message);
                    e.serverTime && (c = e.serverTime - Date.now(), r.setTimeTune(c)), e.next && (h = e.next.token, l = e.next.time - c);
                    var t = e.sessionId;
                    S = e.maxEventBatchSize, n = C.serverConfig.cecServerUrl + "/v1/cec/events/" + encodeURIComponent(C.serverConfig.skincode) + "/" + encodeURIComponent(C.serverConfig.uniqueid) + "/" + t, o = n + "/close", x = setTimeout(function() {
                        d()
                    }, a)
                }, function(t) {
                    e(t)
                }, u)
            }

            function p(e) {
                k = k.concat(e);
                for (var t in e)
                    if ("CloseGame" === e[t].name) return void m()
            }

            function d() {
                if (l > Date.now()) return void(x = setTimeout(function() {
                    d()
                }, l - Date.now() + 1e3));
                if (0 === k.length) return void(x = setTimeout(function() {
                    d()
                }, a));
                if (k.length > 0) {
                    var e = k.length > S ? S : k.length,
                        t = k.slice(0, e),
                        o = r.transformPostEvent(h, b, t);
                    i.httpCall(n, function(t) {
                        t.errorId ? E.warn("fail to post cec event for " + t.errorId + ": " + t.message + ".") : (h = t.next.token, l = t.next.time - c), k = k.splice(e), d()
                    }, function(t) {
                        f(t, e)
                    }, o)
                }
            }

            function m() {
                if (o) {
                    var e = r.transformPostEvent(h, b, k);
                    e.async = !0, e.contentType = "json", navigator && navigator.sendBeacon && "Google Inc." !== navigator.vendor ? i.beaconCall(o, function() {
                        k = [], E.debug("cec session is closed!")
                    }, function() {
                        E.warn("fail to close cec session.")
                    }, e) : i.httpCall(o, function() {
                        k = [], E.debug("cec session is closed!")
                    }, function(e) {
                        console.warn("fail to close cec session with http call" + e), E.warn("fail to close cec session.")
                    }, e), o = void 0, n = void 0, x && clearTimeout(x)
                }
            }

            function f(e, t) {
                E.warn("fail to post cec event for " + e), "CD-002" === e || "CD-006" === e ? x = setTimeout(function() {
                    d()
                }, s) : (k = k.slice(t), d())
            }

            function g(e) {
                for (var t in e)
                    if ("CloseGame" === e[t].name) return console.warn("cec bus receives closeGame event."), k = k.concat(e), void m();
                p(e)
            }

            function v(e) {
                C = e, b = C.serverConfig.requestRetries ? C.serverConfig.requestRetries : 1, C.serverConfig.cecServerUrl && (t = C.serverConfig.cecServerUrl + "/v1/cec/events/" + encodeURIComponent(C.serverConfig.skincode) + "/" + encodeURIComponent(C.serverConfig.uniqueid) + "/register", u(function(e) {
                    E.warn("fail to register cec session: " + e)
                }), T.subscribe({
                    channel: "ClientService",
                    topic: "CECEvent",
                    callback: function(e, t) {
                        E.info("CEC event is from SKB."), g(e)
                    }
                }), T.subscribe({
                    channel: "Game",
                    topic: "Game.CECEvent",
                    callback: function(e, t) {
                        E.info("CEC event is from game."), g(e)
                    }
                }))
            }

            function y() {
                t && u(function(e) {
                    E.warn("fail to register cec session: " + e)
                })
            }
            var C, h, b, S, x, E = e.logger,
                T = e.bus,
                k = [];
            return e.clientConfig.serverConfig.cecServerUrl ? Object.freeze({
                init: v,
                postCECEvent: p,
                reInit: y
            }) : Object.freeze({
                init: function() {},
                postCECEvent: function() {},
                reInit: function() {}
            })
        }
    }), define("clientservice/commands/CECCommand", ["require", "clientservice/communicator/CECCommunicator"], function(e) {
        "use strict";
        var t, n = Date.now();
        return function(o) {
            function i(e) {
                if ("replay" !== F) {
                    var t = g(),
                        n = O.OutcomeDetail.Payout,
                        o = O.OutcomeDetail.TransactionId;
                    r();
                    var i = function() {
                        r()
                    };
                    window.addEventListener("orientationchange", i), window.addEventListener("resize", i);
                    var a, s = "";
                    switch (B) {
                        case "S":
                            var c = O.PatternSliderInput.BetPerPattern,
                                l = O.PatternSliderInput.PatternsBet;
                            s = O.OutcomeDetail.Settled;
                            var u = [{
                                key: "timestamp",
                                value: Date.now()
                            }, {
                                key: "betPerPattern",
                                value: c
                            }, {
                                key: "patternsBet",
                                value: l
                            }, {
                                key: "time",
                                value: Date.now() - e
                            }, {
                                key: "gameType",
                                value: "S"
                            }, {
                                key: "outcomeId",
                                value: o
                            }, {
                                key: "playBalance",
                                value: t
                            }, {
                                key: "payout",
                                value: n
                            }, {
                                key: "orientation",
                                value: G
                            }, {
                                key: "deviceScreenHeight",
                                value: M
                            }, {
                                key: "deviceScreenWidth",
                                value: P
                            }, {
                                key: "gameScreenHeight",
                                value: D
                            }, {
                                key: "gameScreenWidth",
                                value: N
                            }];
                            "0" !== s && (u = u.concat({
                                key: "wager",
                                value: s
                            })), a = [{
                                name: "Play",
                                properties: u
                            }];
                            break;
                        case "L":
                            s = 0, O.WagerInput && O.WagerInput.Wager["#text"] && (s = O.WagerInput.Wager["#text"]), a = [{
                                name: "Play",
                                properties: [{
                                    key: "timestamp",
                                    value: Date.now()
                                }, {
                                    key: "wager",
                                    value: s
                                }, {
                                    key: "time",
                                    value: Date.now() - e
                                }, {
                                    key: "gameStatus",
                                    value: O.OutcomeDetail.GameStatus
                                }, {
                                    key: "nextStage",
                                    value: O.OutcomeDetail.NextStage
                                }, {
                                    key: "gameType",
                                    value: "L"
                                }, {
                                    key: "outcomeId",
                                    value: o
                                }, {
                                    key: "playBalance",
                                    value: t
                                }, {
                                    key: "payout",
                                    value: n
                                }, {
                                    key: "orientation",
                                    value: G
                                }, {
                                    key: "deviceScreenHeight",
                                    value: M
                                }, {
                                    key: "deviceScreenWidth",
                                    value: P
                                }, {
                                    key: "gameScreenHeight",
                                    value: D
                                }, {
                                    key: "gameScreenWidth",
                                    value: N
                                }]
                            }];
                            break;
                        case "V":
                        case "T":
                            if (s = "", O.hasOwnProperty("WagerInput"))
                                if (O.WagerInput.Wager instanceof Array) {
                                    for (var p = O.WagerInput.Wager, d = 0; d < p.length; d++) s = s + "{" + p[d]["@name"] + ":" + p[d]["#text"] + "},";
                                    s = s.substring(0, s.length - 1)
                                } else s = "{" + O.WagerInput.Wager["@name"] + ":" + O.WagerInput.Wager["#text"] + "}";
                            a = [{
                                name: "Play",
                                properties: [{
                                    key: "timestamp",
                                    value: Date.now()
                                }, {
                                    key: "wager",
                                    value: s
                                }, {
                                    key: "time",
                                    value: Date.now() - e
                                }, {
                                    key: "gameStatus",
                                    value: O.OutcomeDetail.GameStatus
                                }, {
                                    key: "nextStage",
                                    value: O.OutcomeDetail.NextStage
                                }, {
                                    key: "gameType",
                                    value: B
                                }, {
                                    key: "outcomeId",
                                    value: o
                                }, {
                                    key: "playBalance",
                                    value: t
                                }, {
                                    key: "payout",
                                    value: n
                                }, {
                                    key: "orientation",
                                    value: G
                                }, {
                                    key: "deviceScreenHeight",
                                    value: M
                                }, {
                                    key: "deviceScreenWidth",
                                    value: P
                                }, {
                                    key: "gameScreenHeight",
                                    value: D
                                }, {
                                    key: "gameScreenWidth",
                                    value: N
                                }]
                            }];
                            break;
                        default:
                            a = [{
                                name: "Play",
                                properties: [{
                                    key: "timestamp",
                                    value: Date.now()
                                }, {
                                    key: "wager",
                                    value: s
                                }, {
                                    key: "time",
                                    value: Date.now() - e
                                }, {
                                    key: "gameStatus",
                                    value: O.OutcomeDetail.GameStatus
                                }, {
                                    key: "nextStage",
                                    value: O.OutcomeDetail.NextStage
                                }, {
                                    key: "gameType",
                                    value: B
                                }, {
                                    key: "outcomeId",
                                    value: o
                                }, {
                                    key: "playBalance",
                                    value: t
                                }, {
                                    key: "payout",
                                    value: n
                                }, {
                                    key: "orientation",
                                    value: G
                                }, {
                                    key: "deviceScreenHeight",
                                    value: M
                                }, {
                                    key: "deviceScreenWidth",
                                    value: P
                                }, {
                                    key: "gameScreenHeight",
                                    value: D
                                }, {
                                    key: "gameScreenWidth",
                                    value: N
                                }]
                            }]
                    }
                    k(a)
                }
            }

            function r() {
                M = window.screen.height, P = window.screen.width, D = window.innerHeight, N = window.innerWidth, G = D > N ? "portrait" : "landScape"
            }

            function a(e) {
                if ("replay" !== F) {
                    var t = g(),
                        n = [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "step",
                            value: e.getSteps()
                        }];
                    e.getLossLimit() && (n = n.concat({
                        key: "lossLimit",
                        value: e.getLossLimit()
                    })), e.getWinLimit() && (n = n.concat({
                        key: "winLimit",
                        value: e.getWinLimit()
                    })), n = n.concat({
                        key: "autoSpinBalance",
                        value: t
                    });
                    k([{
                        name: "AutoSpinExecution",
                        properties: n
                    }])
                }
            }

            function s(e, t) {
                if ("replay" !== F) {
                    var n = g();
                    k([{
                        name: "AutoSpinStop",
                        properties: [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "completedNumber",
                            value: t.getOriginalSteps() - t.getSteps()
                        }, {
                            key: "originalNumber",
                            value: t.getOriginalSteps()
                        }, {
                            key: "stopReason",
                            value: e
                        }, {
                            key: "autoSpinStopBalance",
                            value: n
                        }]
                    }])
                }
            }

            function c(e, t) {
                if ("replay" !== F) {
                    k([{
                        name: "ErrorMessage",
                        properties: [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "errorCode",
                            value: e
                        }, {
                            key: "languageCode",
                            value: t
                        }]
                    }])
                }
            }

            function l(e) {
                if (null != e && "replay" !== F) {
                    U = !0, A = e.id;
                    var t;
                    t = null != e.start ? Math.floor((Date.now() - p(e.start)) / 1e3) : -1;
                    k([{
                        name: "PlayerStartTournament",
                        properties: [{
                            key: "tournamentId",
                            value: e.id
                        }, {
                            key: "timeGap",
                            value: t
                        }, {
                            key: "timestamp",
                            value: Date.now()
                        }]
                    }])
                }
            }

            function u(e, t) {
                if ("replay" !== F) {
                    var n = "default",
                        o = "";
                    A && U && (n = "tournament", o = A);
                    var i = [{
                        name: "OpenRecommendedGame",
                        properties: [{
                            key: "context",
                            value: n
                        }, {
                            key: "softwareId",
                            value: e.softwareid ? e.softwareid : ""
                        }, {
                            key: "timestamp",
                            value: Date.now()
                        }]
                    }];
                    o && i[0].properties.push({
                        key: "contextId",
                        value: o
                    }), t && !isNaN(Number(t)) && i[0].properties.push({
                        key: "recPosition",
                        value: Number(t)
                    }), k(i)
                }
            }

            function p(e) {
                var t = e.split(" "),
                    n = t[0].split("/"),
                    o = t[1].split(":");
                return new Date(Date.UTC(n[2], n[1] - 1, n[0], o[0], o[1]))
            }

            function d(e) {
                W = e
            }

            function m(e) {
                if (W && "replay" !== F) {
                    "tournamentReload" === e && (e = "Reload"), "closeGame" === e && (e = "Close");
                    k([{
                        name: "PlayerEndTournament",
                        properties: [{
                            key: "tournamentId",
                            value: A
                        }, {
                            key: "action",
                            value: e
                        }, {
                            key: "balanceZero",
                            value: W.balanceZero
                        }, {
                            key: "spinLeft",
                            value: W.spinLeft
                        }, {
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "interrupt",
                            value: "" === e ? "Y" : "N"
                        }]
                    }]), W = null, U = !1
                }
            }

            function f() {
                if ("replay" !== F) {
                    W && U && m("");
                    var e = g();
                    k([{
                        name: "CloseGame",
                        properties: [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "sessionClosingBalance",
                            value: e
                        }]
                    }])
                }
            }

            function g() {
                var e = "";
                return O && O.hasOwnProperty("Balances") && (e = O.Balances["@totalBalance"]), e
            }

            function v(e) {
                if ("replay" !== F) {
                    var t = g();
                    k([{
                        name: "GameLaunched",
                        properties: [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "denomamount",
                            value: e
                        }, {
                            key: "startingLaunchBalance",
                            value: t
                        }]
                    }])
                }
            }

            function y() {
                if ("replay" !== F) {
                    var e = "default",
                        t = "";
                    A && (e = "tournament", t = A);
                    var n = [{
                        name: "BackToLobby",
                        properties: [{
                            key: "context",
                            value: e
                        }, {
                            key: "timestamp",
                            value: Date.now()
                        }]
                    }];
                    t && n[0].properties.push({
                        key: "contextId",
                        value: t
                    }), k(n)
                }
            }

            function C(e) {
                if ("replay" !== F) {
                    k([{
                        name: "FullScreen",
                        properties: [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "value",
                            value: e
                        }]
                    }])
                }
            }

            function h(e) {
                if (null != e && "replay" !== F) {
                    var t = [{
                        name: "PlayerActCashTournament",
                        properties: [{
                            key: "tournamentId",
                            value: e.competitionId
                        }, {
                            key: "tournamentType",
                            value: e.competitionType
                        }, {
                            key: "timeGap",
                            value: e.timeGap
                        }, {
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "prizesNumber",
                            value: e.prizesNumber
                        }, {
                            key: "currencyCode",
                            value: e.currencyCode
                        }, {
                            key: "byNotification",
                            value: e.byNotification
                        }, {
                            key: "action",
                            value: "J"
                        }]
                    }];
                    "Y" === e.byNotification && t[0].properties.push({
                        key: "notificationTimestamp",
                        value: e.notificationTimestamp
                    }), void 0 !== e.timeLeft && t[0].properties.push({
                        key: "timeLeft",
                        value: e.timeLeft
                    }), k(t)
                }
            }

            function b(e) {
                if (null != e && "replay" !== F) {
                    var t = [{
                        name: "PlayerEndCashTournament",
                        properties: [{
                            key: "tournamentId",
                            value: e.competitionId
                        }, {
                            key: "action",
                            value: e.action
                        }, {
                            key: "interrupt",
                            value: e.interrupt
                        }, {
                            key: "timestamp",
                            value: e.timestamp
                        }, {
                            key: "tournamentStatus",
                            value: e.tournamentStatus
                        }]
                    }];
                    0 !== e.spinLeft && t[0].properties.push({
                        key: "spinLeft",
                        value: e.spinLeft
                    }), 0 !== e.lbPosition && t[0].properties.push({
                        key: "lbPosition",
                        value: e.lbPosition
                    }), k(t)
                }
            }

            function S(e) {
                if (null != e && "replay" !== F) {
                    k([{
                        name: "CashTournamentHitPrize",
                        properties: [{
                            key: "tournamentId",
                            value: e.competitionId
                        }, {
                            key: "prizeType",
                            value: e.prizeType
                        }, {
                            key: "prizeLevel",
                            value: e.prizeLevel
                        }, {
                            key: "prizeAmount",
                            value: e.prizeAmount
                        }, {
                            key: "action",
                            value: "continue"
                        }, {
                            key: "timestamp",
                            value: Date.now()
                        }]
                    }])
                }
            }

            function x(e) {
                if (null != e && "replay" !== F) {
                    k([{
                        name: e.name,
                        properties: [{
                            key: "context",
                            value: e.context
                        }, {
                            key: "contextId",
                            value: e.contextId
                        }, {
                            key: "itemName",
                            value: e.itemName
                        }, {
                            key: "timestamp",
                            value: Date.now()
                        }]
                    }])
                }
            }

            function E(e) {
                if ("replay" !== F && (e && ("SystemReady" === e.event ? H = e.systemLoadEndTimestamp - n : "GameLoadComplete" === e.event && (q = e.gameLoadedElapse)), !(H < 0 || q < 0))) {
                    k([{
                        name: "LaunchTimes",
                        properties: [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "gameAssetsLoadTime",
                            value: q
                        }, {
                            key: "launchTime",
                            value: H
                        }]
                    }])
                }
            }

            function T(e) {
                if ("replay" !== F) {
                    var t = g();
                    k([{
                        name: "Rebuy",
                        properties: [{
                            key: "timestamp",
                            value: Date.now()
                        }, {
                            key: "previousBalance",
                            value: t
                        }, {
                            key: "updatedBalance",
                            value: e
                        }]
                    }])
                }
            }

            function k(e) {
                "replay" !== F && t.postCECEvent(e)
            }

            function I(e) {
                L = e, B = L.gameConfig.gameType, z && t.init(e)
            }

            function w() {
                t.reInit()
            }

            function R(e) {
                O = e
            }
            var L, O, A, G, M, P, D, N, B = o.clientConfig.gameConfig.gameType,
                F = F,
                z = o.clientConfig.serverConfig && o.clientConfig.serverConfig.cecServerUrl,
                W = null,
                U = !1,
                H = -1,
                q = -1;
            return t = e("clientservice/communicator/CECCommunicator")(o), z ? Object.freeze({
                init: I,
                reInit: w,
                setGameLogicResponse: R,
                postCECEvent: k,
                postPlayEvent: i,
                postCloseEvent: f,
                postAutoSpinExecutionEvent: a,
                postAutoSpinStopEvent: s,
                postErrorEvent: c,
                postGameLaunched: v,
                postFullscreenEvent: C,
                postPlayerStartTournament: l,
                storeTournamentData: d,
                postPlayerEndTournament: m,
                postRecommendedGameReload: u,
                postBackToLobby: y,
                postPlayerActCashTournament: h,
                postPlayerEndCashTournament: b,
                postCashTournamentHitPrize: S,
                postItemBeenClicked: x,
                postLaunchTimes: E,
                postRebuy: T
            }) : Object.freeze({
                init: function() {},
                reInit: function() {},
                setGameLogicResponse: function() {},
                postCECEvent: function() {},
                postPlayEvent: function() {},
                postCloseEvent: function() {},
                postAutoSpinExecutionEvent: function() {},
                postAutoSpinStopEvent: function() {},
                postErrorEvent: function() {},
                postGameLaunched: function() {},
                postFullscreenEvent: function() {},
                postPlayerStartTournament: function() {},
                storeTournamentData: function() {},
                postPlayerEndTournament: function() {},
                postRecommendedGameReload: function() {},
                postBackToLobby: function() {},
                postPlayerActCashTournament: function() {},
                postPlayerEndCashTournament: function() {},
                postCashTournamentHitPrize: function() {},
                postItemBeenClicked: function() {},
                postLaunchTimes: function() {},
                postRebuy: function() {}
            })
        }
    }), define("clientservice/main", ["require", "clientservice/flowcontroller/FlowController", "clientservice/commands/CECCommand"], function(e) {
        var t = e("clientservice/flowcontroller/FlowController"),
            n = {};
        return function() {
            function o(o, i) {
                o.bus = o.bus(), s = o.bus, s.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "clientservice",
                        items: "10",
                        current: "1",
                        complete: !1
                    }
                }), n = e("clientservice/commands/CECCommand")(o), t({
                    bus: s,
                    currency: o.currency,
                    root: o.root,
                    gameRoot: o.gameRoot,
                    logger: o.logger,
                    consoleconnect: o.consoleconnect,
                    cecCommand: n
                }, function(e) {
                    c = e, a(i)
                })
            }

            function i() {
                return c
            }

            function r() {
                return n
            }

            function a(e) {
                s.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "clientservice",
                        items: "10",
                        current: "10",
                        complete: !0
                    }
                }), e()
            }
            var s, c;
            return Object.freeze({
                load: o,
                controller: i,
                getCECCommand: r
            })
        }
    });
//# sourceMappingURL=clientservice.js.map
