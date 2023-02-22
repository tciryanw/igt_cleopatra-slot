(function(t) {
    function e(e) {
        for (var n, o, r = e[0], c = e[1], l = e[2], u = 0, p = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(s, o) && s[o] && p.push(s[o][0]), s[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        d && d(e);
        while (p.length) p.shift()();
        return a.push.apply(a, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < a.length; e++) {
            for (var i = a[e], n = !0, o = 1; o < i.length; o++) {
                var c = i[o];
                0 !== s[c] && (n = !1)
            }
            n && (a.splice(e--, 1), t = r(r.s = i[0]))
        }
        return t
    }
    var n = {},
        s = {
            app: 0
        },
        a = [];

    function o(t) {
        return r.p + "js/" + ({}[t] || t) + "." + {
            "chunk-2d0a3c3b": "75370b10",
            "chunk-2d0a4b41": "6939559a",
            "chunk-2d0b1f95": "ed9ae8ea",
            "chunk-2d0c0686": "2913d066",
            "chunk-2d0c7f3e": "3c3106d7",
            "chunk-2d0c8db7": "f9cd0df0",
            "chunk-2d0cb668": "72ae3a1b",
            "chunk-2d0cbeb2": "0c705be1",
            "chunk-2d0cc643": "35253315",
            "chunk-2d0d36c6": "1f0588e6",
            "chunk-2d0d6d03": "c2933834",
            "chunk-2d0d75da": "b05d5d6e",
            "chunk-2d0dad10": "328762d5",
            "chunk-2d0dae4d": "faec8a6a",
            "chunk-2d0deb24": "97e2a044",
            "chunk-2d0df7c7": "07121b5d",
            "chunk-2d0e5790": "363ce9e6",
            "chunk-2d0e8fd5": "467f7f5e",
            "chunk-2d0efd4d": "579776ac",
            "chunk-2d207e6e": "30d5c81c",
            "chunk-2d2089ee": "20996128",
            "chunk-2d217367": "858960f6",
            "chunk-2d222378": "cbe69c4f",
            "chunk-2d224b0d": "c73876f3",
            "chunk-2d2263c6": "1ee98a95",
            "chunk-2d229601": "642dd387",
            "chunk-2d22bdbd": "cad59ec6",
            "chunk-2d22d0a0": "c05aefa9",
            "chunk-2d22db4c": "a6a1595f"
        }[t] + ".js"
    }

    function r(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.e = function(t) {
        var e = [],
            i = s[t];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var n = new Promise((function(e, n) {
                    i = s[t] = [e, n]
                }));
                e.push(i[2] = n);
                var a, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, r.nc && c.setAttribute("nonce", r.nc), c.src = o(t);
                var l = new Error;
                a = function(e) {
                    c.onerror = c.onload = null, clearTimeout(u);
                    var i = s[t];
                    if (0 !== i) {
                        if (i) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                a = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")", l.name = "ChunkLoadError", l.type = n, l.request = a, i[1](l)
                        }
                        s[t] = void 0
                    }
                };
                var u = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = a, document.head.appendChild(c)
            }
        return Promise.all(e)
    }, r.m = t, r.c = n, r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r.oe = function(t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var u = 0; u < c.length; u++) e(c[u]);
    var d = l;
    a.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "00cb": function(t, e, i) {},
    "038e": function(t, e, i) {},
    "03e4": function(t, e, i) {},
    "044e": function(t, e, i) {},
    "0720": function(t, e, i) {
        "use strict";
        i("519b")
    },
    "0799": function(t, e, i) {
        "use strict";
        i("00cb")
    },
    "07d8": function(t, e, i) {
        "use strict";
        i("b0f5")
    },
    "07fc": function(t, e, i) {
        "use strict";
        i("e806")
    },
    "082a": function(t, e, i) {
        "use strict";
        i("a7f4")
    },
    "0856": function(t, e, i) {
        "use strict";
        i("e83b")
    },
    "088c": function(t, e, i) {
        i("d81d"), i("d3b7"), i("ddb0");
        var n = function(t) {
                return t.keys().map(t)
            },
            s = i("23f1");
        n(s)
    },
    "08ce": function(t, e, i) {},
    "0aa2": function(t, e, i) {
        "use strict";
        i("d014")
    },
    "0bb3": function(t, e, i) {
        "use strict";
        i("10a8")
    },
    "0ccd": function(t, e, i) {},
    "0d02": function(t, e, i) {},
    "0d6c": function(t, e, i) {
        "use strict";
        i("587c")
    },
    "0de6": function(t, e, i) {},
    "0e10": function(t, e, i) {},
    "0e84": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-arrow-back",
                use: "icon-arrow-back-usage",
                viewBox: "0 0 8.095 14.146",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.095 14.146" id="icon-arrow-back"><defs><style>#icon-arrow-back .a{fill:none;stroke:#fff;stroke-width:2px;}</style></defs><path class="a" d="M0,0,6.3,5.99,12.778,0" transform="translate(7.361 0.689) rotate(90)" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    "10a8": function(t, e, i) {},
    "10d2": function(t, e, i) {
        "use strict";
        i("2194")
    },
    "119b": function(t, e, i) {},
    "11cc": function(t, e, i) {
        "use strict";
        i("580c")
    },
    "12e4": function(t, e, i) {},
    "13ae": function(t, e, i) {
        "use strict";
        i("6008")
    },
    "147a": function(t, e, i) {},
    1552: function(t, e, i) {
        "use strict";
        i("403a")
    },
    "155f": function(t, e, i) {
        "use strict";
        i("8481")
    },
    1593: function(t, e, i) {},
    "163b": function(t, e, i) {
        "use strict";
        i("28ba")
    },
    1681: function(t, e, i) {},
    1899: function(t, e, i) {},
    "18f8": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-tab_prizedraw",
                use: "icon-tab_prizedraw-usage",
                viewBox: "0 0 20 20",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="icon-tab_prizedraw"><defs><style>#icon-tab_prizedraw .a{fill:rgba(0,255,216,0.3);stroke:rgba(0,240,157,0.6);opacity:0;}#icon-tab_prizedraw .b{fill:#d88eef;}#icon-tab_prizedraw .c{stroke:none;}#icon-tab_prizedraw .d{fill:none;}</style></defs><g class="a"><rect class="c" width="20" height="20" /><rect class="d" x="0.5" y="0.5" width="19" height="19" /></g><g transform="translate(-4.118 -4.744)"><path class="b" d="M20.583,28.371a.756.756,0,0,0,.318-.228l5.311-6.472a.756.756,0,0,0-.105-1.064l-3.239-2.658a.756.756,0,0,0-1.064.105l-5.311,6.472A.756.756,0,0,0,16.6,25.59l3.239,2.658A.759.759,0,0,0,20.583,28.371Zm-3.65-3.484,5.311-6.472a.186.186,0,0,1,.262-.026l3.239,2.658a.186.186,0,0,1,.026.262L20.46,27.781a.186.186,0,0,1-.262.026L16.959,25.15A.186.186,0,0,1,16.933,24.888Z" transform="translate(-8.253 -8.925)" /><path class="b" d="M35.033,39.769l1.063-.228a.129.129,0,0,1,.111.044l.608.882a.145.145,0,0,0,.163.041.148.148,0,0,0,.062-.044.143.143,0,0,0,.03-.064l.111-1.07a.126.126,0,0,1,.027-.055.128.128,0,0,1,.049-.037l1.027-.318a.145.145,0,0,0,.057-.042.147.147,0,0,0-.041-.221l-.984-.424a.128.128,0,0,1-.064-.1l.016-1.087a.146.146,0,0,0-.245-.1l-.708.817a.126.126,0,0,1-.041.025.129.129,0,0,1-.074,0l-1.029-.364a.146.146,0,0,0-.085.005.147.147,0,0,0-.062.045.145.145,0,0,0-.02.154l.557.938a.129.129,0,0,1-.007.119l-.663.854A.147.147,0,0,0,35.033,39.769Z" transform="translate(-23.259 -24.404)" /><path class="b" d="M22.8,14.84,20.8,11.148a.669.669,0,0,0-.907-.268,1.052,1.052,0,0,1-.422.123,1.035,1.035,0,0,1,.224-.519.666.666,0,0,0-.092-.936L16.365,6.895a.665.665,0,0,0-.936.092,1.045,1.045,0,0,1-1.471.145.666.666,0,0,0-.936.092l-6.753,8.23a.666.666,0,0,0,.092.936,1.045,1.045,0,0,1,.145,1.471A.666.666,0,0,0,6.6,18.8l1.342,1.1,1.269,2.333a.669.669,0,0,0,.907.268,1.05,1.05,0,0,1,1.425.421.669.669,0,0,0,.907.268l9.4-5.111a.67.67,0,0,0,.268-.907,1.051,1.051,0,0,1,.421-1.425A.669.669,0,0,0,22.8,14.84ZM6.947,18.224a1.616,1.616,0,0,0-.224-2.274.1.1,0,0,1-.013-.134l6.752-8.23a.1.1,0,0,1,.134-.013,1.615,1.615,0,0,0,2.274-.224A.1.1,0,0,1,16,7.335l3.233,2.653a.1.1,0,0,1,.013.134,1.616,1.616,0,0,0,.224,2.274.1.1,0,0,1,.013.134l-6.752,8.23a.1.1,0,0,1-.134.013A1.615,1.615,0,0,0,10.327,21a.1.1,0,0,1-.134.013L6.96,18.358A.1.1,0,0,1,6.947,18.224Zm12.921-1.783a.187.187,0,0,1-.075.254L14.4,19.626l4.329-5.276Zm2.393-1.2a1.624,1.624,0,0,0-.651,2.2.1.1,0,0,1-.038.13l-9.4,5.111a.1.1,0,0,1-.13-.038A1.623,1.623,0,0,0,9.843,22a.1.1,0,0,1-.13-.038l-.594-1.093.713.585a.665.665,0,0,0,.936-.092,1.045,1.045,0,0,1,1.471-.145.666.666,0,0,0,.937-.092l.26-.318L20.067,17.2a.76.76,0,0,0,.3-1.031l-1.248-2.295.8-.981a.666.666,0,0,0-.092-.936,1.034,1.034,0,0,1-.288-.385,1.62,1.62,0,0,0,.615-.187.1.1,0,0,1,.13.038L22.3,15.114A.1.1,0,0,1,22.262,15.244Z" transform="translate(0 0)" /></g></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    "1a11": function(t, e, i) {
        "use strict";
        i("119b")
    },
    "1a7d": function(t, e, i) {
        "use strict";
        i("fefa")
    },
    "1af7": function(t, e, i) {},
    "1b34": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-hide-gsp-button-pt",
                use: "icon-hide-gsp-button-pt-usage",
                viewBox: "0 0 37 37",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" id="icon-hide-gsp-button-pt"><defs><style>#icon-hide-gsp-button-pt .a,#icon-hide-gsp-button-pt .b,#icon-hide-gsp-button-pt .d{fill:none;}#icon-hide-gsp-button-pt .a{stroke:#d90062;}#icon-hide-gsp-button-pt .a,#icon-hide-gsp-button-pt .b{stroke-width:2px;}#icon-hide-gsp-button-pt .b{stroke:#fff;}#icon-hide-gsp-button-pt .c{stroke:none;}</style></defs><g transform="translate(37) rotate(90)"><g class="a" transform="translate(37) rotate(90)"><circle class="c" cx="18.5" cy="18.5" r="18.5" /><circle class="d" cx="18.5" cy="18.5" r="17.5" /></g><path class="b" d="M0,0,6.3,5.99,12.778,0" transform="translate(20.5 12.5) rotate(90)" /></g></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    "1b41": function(t, e, i) {},
    "1bd0": function(t, e, i) {},
    "1d44": function(t, e, i) {},
    "1dbd": function(t, e, i) {},
    "1e1c": function(t, e, i) {},
    "1e78": function(t, e, i) {
        "use strict";
        i("9fc2")
    },
    "1ea0": function(t, e, i) {
        "use strict";
        i("2cdb")
    },
    "1fe8": function(t, e, i) {
        "use strict";
        i("634a")
    },
    2194: function(t, e, i) {},
    "21ac": function(t, e, i) {
        "use strict";
        i("30cd")
    },
    2254: function(t, e, i) {
        "use strict";
        i("1dbd")
    },
    "23f1": function(t, e, i) {
        var n = {
            "./arrow-back.svg": "0e84",
            "./arrow-list.svg": "8689",
            "./arrow-result.svg": "cb81",
            "./arrow-rules.svg": "b8f0",
            "./check-agree.svg": "97fa",
            "./check-joined.svg": "d7b0",
            "./hide-gsp-button-pt.svg": "1b34",
            "./line.svg": "a6d9",
            "./menu-close.svg": "fbd9",
            "./remain_ticket.svg": "9824",
            "./tab_leaderboard.svg": "4392",
            "./tab_prizedraw.svg": "18f8",
            "./ticket.svg": "945b"
        };

        function s(t) {
            var e = a(t);
            return i(e)
        }

        function a(t) {
            if (!i.o(n, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return n[t]
        }
        s.keys = function() {
            return Object.keys(n)
        }, s.resolve = a, t.exports = s, s.id = "23f1"
    },
    "253c": function(t, e, i) {
        "use strict";
        i("ce54")
    },
    "25fb": function(t, e, i) {
        "use strict";
        i("e9bd")
    },
    "266e": function(t, e, i) {
        "use strict";
        i("98c8")
    },
    2677: function(t, e, i) {
        "use strict";
        i("3d56")
    },
    2898: function(t, e, i) {},
    "28ba": function(t, e, i) {},
    "28e4": function(t, e, i) {},
    "28f2": function(t, e, i) {
        "use strict";
        i("7bb4")
    },
    "2a28": function(t, e, i) {
        "use strict";
        i("0d02")
    },
    "2bb5": function(t, e, i) {
        "use strict";
        i("d81db")
    },
    "2cdb": function(t, e, i) {},
    "2d08": function(t, e, i) {
        "use strict";
        i("3ba5")
    },
    "2d0f": function(t, e, i) {},
    "2d5f": function(t, e, i) {
        "use strict";
        i("6b1e")
    },
    "2d65": function(t, e, i) {},
    "2dad": function(t, e, i) {
        "use strict";
        i("ae4e")
    },
    "2fbd": function(t, e, i) {
        "use strict";
        i("92ca")
    },
    "30cd": function(t, e, i) {},
    3101: function(t, e, i) {
        "use strict";
        i("f075")
    },
    "318d": function(t, e, i) {},
    3195: function(t, e, i) {},
    "321e": function(t, e, i) {},
    "326a": function(t, e, i) {
        var n = {
            "./bg": ["dcd0", "chunk-2d229601"],
            "./bg.json": ["dcd0", "chunk-2d229601"],
            "./cs": ["c686", "chunk-2d217367"],
            "./cs.json": ["c686", "chunk-2d217367"],
            "./da": ["21aa", "chunk-2d0b1f95"],
            "./da.json": ["21aa", "chunk-2d0b1f95"],
            "./de": ["6ce2", "chunk-2d0dad10"],
            "./de-BE": ["8c2f", "chunk-2d0e8fd5"],
            "./de-BE.json": ["8c2f", "chunk-2d0e8fd5"],
            "./de.json": ["6ce2", "chunk-2d0dad10"],
            "./el": ["f184", "chunk-2d22bdbd"],
            "./el.json": ["f184", "chunk-2d22bdbd"],
            "./en": ["edd4"],
            "./en-CA": ["6e19", "chunk-2d0dae4d"],
            "./en-CA.json": ["6e19", "chunk-2d0dae4d"],
            "./en-NZ": ["ce55", "chunk-2d222378"],
            "./en-NZ.json": ["ce55", "chunk-2d222378"],
            "./en-US": ["e0e1", "chunk-2d224b0d"],
            "./en-US.json": ["e0e1", "chunk-2d224b0d"],
            "./en.json": ["edd4"],
            "./es": ["a306", "chunk-2d207e6e"],
            "./es-MX": ["538b", "chunk-2d0c7f3e"],
            "./es-MX.json": ["538b", "chunk-2d0c7f3e"],
            "./es.json": ["a306", "chunk-2d207e6e"],
            "./fi": ["5754", "chunk-2d0c8db7"],
            "./fi.json": ["5754", "chunk-2d0c8db7"],
            "./fr": ["f693", "chunk-2d22d0a0"],
            "./fr-BE": ["73c4", "chunk-2d0d6d03"],
            "./fr-BE.json": ["73c4", "chunk-2d0d6d03"],
            "./fr-CA": ["876e", "chunk-2d0deb24"],
            "./fr-CA.json": ["876e", "chunk-2d0deb24"],
            "./fr.json": ["f693", "chunk-2d22d0a0"],
            "./hu": ["4e73", "chunk-2d0cc643"],
            "./hu.json": ["4e73", "chunk-2d0cc643"],
            "./it": ["0825", "chunk-2d0a4b41"],
            "./it.json": ["0825", "chunk-2d0a4b41"],
            "./ja": ["0423", "chunk-2d0a3c3b"],
            "./ja.json": ["0423", "chunk-2d0a3c3b"],
            "./nb-NO": ["9a7f", "chunk-2d0efd4d"],
            "./nb-NO.json": ["9a7f", "chunk-2d0efd4d"],
            "./nl": ["a625", "chunk-2d2089ee"],
            "./nl-BE": ["4a05", "chunk-2d0cb668"],
            "./nl-BE.json": ["4a05", "chunk-2d0cb668"],
            "./nl.json": ["a625", "chunk-2d2089ee"],
            "./nn-NO": ["e896", "chunk-2d2263c6"],
            "./nn-NO.json": ["e896", "chunk-2d2263c6"],
            "./no": ["f947", "chunk-2d22db4c"],
            "./no.json": ["f947", "chunk-2d22db4c"],
            "./pl": ["89b2", "chunk-2d0df7c7"],
            "./pl.json": ["89b2", "chunk-2d0df7c7"],
            "./pt": ["5d67", "chunk-2d0d36c6"],
            "./pt.json": ["5d67", "chunk-2d0d36c6"],
            "./ro": ["9542", "chunk-2d0e5790"],
            "./ro.json": ["9542", "chunk-2d0e5790"],
            "./ru": ["7704", "chunk-2d0d75da"],
            "./ru.json": ["7704", "chunk-2d0d75da"],
            "./sv": ["4c5b", "chunk-2d0cbeb2"],
            "./sv.json": ["4c5b", "chunk-2d0cbeb2"],
            "./zh-CN": ["423e", "chunk-2d0c0686"],
            "./zh-CN.json": ["423e", "chunk-2d0c0686"]
        };

        function s(t) {
            if (!i.o(n, t)) return Promise.resolve().then((function() {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }));
            var e = n[t],
                s = e[0];
            return Promise.all(e.slice(1).map(i.e)).then((function() {
                return i.t(s, 3)
            }))
        }
        s.keys = function() {
            return Object.keys(n)
        }, s.id = "326a", t.exports = s
    },
    "32d6": function(t, e, i) {},
    "33ce": function(t, e, i) {},
    "33d3": function(t, e, i) {
        "use strict";
        i("0ccd")
    },
    3469: function(t, e, i) {
        "use strict";
        i("5020")
    },
    3497: function(t, e, i) {
        "use strict";
        i("fb50")
    },
    "34bc": function(t, e, i) {},
    "36f3": function(t, e, i) {},
    3732: function(t, e, i) {},
    "37d9": function(t, e, i) {
        "use strict";
        i("d169")
    },
    "37e6": function(t, e, i) {},
    "3ab7": function(t, e, i) {},
    "3ba5": function(t, e, i) {},
    "3c00": function(t, e, i) {
        "use strict";
        i("974f")
    },
    "3ca8": function(t, e, i) {},
    "3d4f": function(t, e, i) {
        "use strict";
        i("8081")
    },
    "3d56": function(t, e, i) {},
    "3f65": function(t, e, i) {
        "use strict";
        i("ec15")
    },
    "3fae": function(t, e, i) {
        "use strict";
        i("28e4")
    },
    "403a": function(t, e, i) {},
    4060: function(t, e, i) {},
    "407f": function(t, e, i) {
        "use strict";
        i("81b1")
    },
    "40a5": function(t, e, i) {},
    4211: function(t, e, i) {
        "use strict";
        i("aaa4")
    },
    4392: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-tab_leaderboard",
                use: "icon-tab_leaderboard-usage",
                viewBox: "0 0 20 20",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="icon-tab_leaderboard"><defs><style>#icon-tab_leaderboard .a{fill:#37024e;stroke:rgba(0,240,157,0.6);opacity:0;}#icon-tab_leaderboard .b{stroke:none;}#icon-tab_leaderboard .c{fill:none;}</style></defs><g class="a"><rect class="b" width="20" height="20" /><rect class="c" x="0.5" y="0.5" width="19" height="19" /></g><path d="M4.56,13.711c-.664,0-.727-.3-.727-1.2s.191-1.2.854-1.2h.355A4.912,4.912,0,0,0,6.58,8.813a4.631,4.631,0,0,1-1.962-1.65A9,9,0,0,1,1.4,5.219,3.5,3.5,0,0,1,.051,2.08,1.747,1.747,0,0,1,1.419.677,2.779,2.779,0,0,1,2.987.839c0-.288,0-.569,0-.839h9.016c.008.27.009.551,0,.839A2.779,2.779,0,0,1,13.581.677a1.747,1.747,0,0,1,1.368,1.4A3.5,3.5,0,0,1,13.6,5.219a8.992,8.992,0,0,1-3.219,1.944A4.631,4.631,0,0,1,8.42,8.813a4.917,4.917,0,0,0,1.539,2.494h.278c.663,0,.931.333.931,1.2s.049,1.2-.614,1.2ZM11.955,2.042a12.978,12.978,0,0,1-.782,3.621,7.482,7.482,0,0,0,1.7-1.213,2.615,2.615,0,0,0,1.049-2.134.705.705,0,0,0-.571-.6,1.247,1.247,0,0,0-.272-.028A2.219,2.219,0,0,0,11.955,2.042ZM1.645,1.715a.706.706,0,0,0-.571.6A2.615,2.615,0,0,0,2.123,4.45a7.464,7.464,0,0,0,1.7,1.213,13,13,0,0,1-.782-3.621,2.22,2.22,0,0,0-1.129-.356A1.245,1.245,0,0,0,1.645,1.715Z" transform="translate(3 3)" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    4451: function(t, e, i) {
        "use strict";
        i("3ab7")
    },
    4474: function(t, e, i) {},
    "456e": function(t, e, i) {
        "use strict";
        i("9eb7")
    },
    "460f": function(t, e, i) {
        "use strict";
        i("7384")
    },
    4659: function(t, e, i) {
        "use strict";
        i("c776")
    },
    "47c0": function(t, e, i) {},
    "48ab": function(t, e, i) {
        "use strict";
        i("d8a0")
    },
    "49ab": function(t, e, i) {
        "use strict";
        i("6321")
    },
    "4bb1": function(t, e, i) {
        "use strict";
        i("6652")
    },
    5020: function(t, e, i) {},
    "506b": function(t, e, i) {
        "use strict";
        i("7980")
    },
    "50b4": function(t, e, i) {
        "use strict";
        i("766c")
    },
    "519b": function(t, e, i) {},
    "52fc": function(t, e, i) {
        "use strict";
        i("81d3")
    },
    "541c": function(t, e, i) {
        "use strict";
        i("33ce")
    },
    "55dc": function(t, e, i) {
        "use strict";
        i("0e10")
    },
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var n, s, a, o, r, c = i("2b0e"),
            l = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "GameServicePanel"
                    }
                }, [i("screen", {
                    directives: [{
                        name: "visible",
                        rawName: "v-visible",
                        value: t.screenActive,
                        expression: "screenActive"
                    }]
                }), i("panel", {
                    directives: [{
                        name: "visible",
                        rawName: "v-visible",
                        value: t.panelActive,
                        expression: "panelActive"
                    }]
                })], 1)
            },
            u = [],
            d = i("5530"),
            p = i("2f62"),
            m = (i("159b"), i("4be7")),
            h = i.n(m),
            f = i("67ba"),
            _ = i.n(f);
        i("b312"), i("96cf"), i("9d4e"), i("a99e"), i("caad"), i("d3b7"), i("99af");

        function v(t) {
            n && a && t && t.channel && (g(t), o = t.currencycode, r = t.nicknameAutoGen, ["INT", "TAB"].includes(t.channel) ? n.commit("setIfDesktop", !0) : n.commit("setIfMobile", !0), "TAB" == t.channel && n.commit("setIfTablet", !0), n.commitCompetition("setCurrencyCode", o), n.commitCompetition("setNicknameAutoGen", r), n.commit("setPanelActiveTime", new Date), a.publish({
                channel: "GameService",
                topic: "GameService.Panel.InitDone",
                data: {}
            }))
        }
        var b = {
            get: function(t) {
                return new Promise((function(e, i) {
                    var n = new XMLHttpRequest;
                    n.open("GET", t), n.onload = function() {
                        if (this.status >= 200 && this.status < 300) {
                            var t = {
                                status: this.status,
                                statusText: n.statusText,
                                headers: {},
                                config: {},
                                request: {}
                            };
                            try {
                                t.data = JSON.parse(n.response)
                            } catch (s) {
                                t.data = n.response
                            }
                            e(t)
                        } else i({
                            status: this.status,
                            statusText: n.statusText
                        })
                    }, n.onerror = function(t) {
                        i({
                            status: this.status,
                            statusText: n.statusText
                        })
                    }, n.send()
                }))
            }
        };

        function g(t) {
            var e = t.language,
                i = t.skincode,
                n = t.enableCustomGSP;
            if (n && i) {
                var a = Date.now();
                b.get("../../../../../skins/".concat(i, "/customGSP/config.json?v=").concat(a)).then((function(t) {
                    if (t && t.data) {
                        var n = t.data,
                            o = n.style,
                            r = n.locale;
                        if (o) {
                            ".css" !== o.substring(o.lastIndexOf(".")) && (o += ".css");
                            var c = document.createElement("link");
                            c.setAttribute("rel", "stylesheet"), c.setAttribute("href", "../../../../../skins/".concat(i, "/customGSP/").concat(o, "?v=").concat(a)), document.head.appendChild(c)
                        }
                        if (r) return ".json" !== r.substring(r.lastIndexOf(".")) && (r += ".json"), b.get("../../../../../skins/".concat(i, "/customGSP/").concat(r, "?v=").concat(a));
                        s.loadLocaleMessagesAsync(e)
                    } else s.loadLocaleMessagesAsync(e)
                })).then((function(t) {
                    t && t.data ? s.loadLocaleMessagesAsync(e, t.data) : s.loadLocaleMessagesAsync(e)
                })).catch((function(t) {
                    console.log(t), s.loadLocaleMessagesAsync(e)
                }))
            } else s.loadLocaleMessagesAsync(e)
        }

        function C(t) {
            n && t && n.commit("setPanelActive", t.active)
        }

        function w(t) {
            n && t && (!n.state.gameData.inRound && t.inRound && n.commitCompetition("resetProgressIfMorePrizes"), n.commit("setGameInRound", t.inRound), n.commit("setGameInGIP", t.inGIP))
        }

        function T(t, e, i) {
            n = t, s = e, a = i, i.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.Init",
                callback: v
            }), i.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.ActiveChange",
                callback: C
            }), i.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.InGameRound",
                callback: w
            })
        }
        var O, y, x, j, P, S, k = {
                init: T
            },
            E = i("2909");
        i("4de4"), i("07ac"), i("b0c0"), i("a4d3"), i("e01a"), i("b64b"), i("d81d"), i("7db0"), i("4e82"), i("b680"), i("fb6a"), i("4d90"), i("25f0"), i("ac1f"), i("5319"), i("4d63");

        function M(t) {
            function e(t) {
                var e = t.toFixed(0);
                return e.length >= 2 ? e : "00".concat(e).slice(-2)
            }
            var i, n, s, a;
            t = Math.max(Math.floor(t / 1e3), 0), a = t % 60, s = Math.floor(t / 60) % 60, n = Math.floor(t / 3600) % 24, i = Math.floor(t / 86400);
            var o = "";
            return o = i > 0 ? "".concat(i, "d ").concat(e(n), ":").concat(e(s)) : "".concat(e(n), ":").concat(e(s), ":").concat(e(a)), o
        }

        function z(t) {
            var e = D(t);
            if (!e) return "";
            var i = "DD/MM/YYYY hh:mm:ss",
                n = [
                    ["DD", "getDate"],
                    ["MM", "getMonth"],
                    ["YYYY", "getFullYear"],
                    ["hh", "getHours"],
                    ["mm", "getMinutes"],
                    ["ss", "getSeconds"]
                ];
            return n.forEach((function(t) {
                var n = e[t[1]]() + ("getMonth" === t[1] ? 1 : 0),
                    s = function(t) {
                        return t.toString().padStart(2, "0")
                    };
                i = i.replace(t[0], s(n))
            })), i
        }

        function D(t) {
            var e = new RegExp(/^(\d+)\/(\d+)\/(\d{4})\s+(\d+):(\d+)(:(\d+))?\s+UTC$/g),
                i = e.exec(t),
                n = null;
            return i && i.length >= 8 && (n = new Date(Date.UTC(i[3], +i[2] - 1, i[1], i[4], i[5], i[7] ? i[7] : 0))), n
        }

        function L(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "asc";
            return t.constructor !== Array ? [] : Object(E["a"])(t).sort((function(t, n) {
                return "asc" === i ? parseFloat(e ? t[e] : t) - parseFloat(e ? n[e] : n) : "desc" === i ? parseFloat(e ? n[e] : n) - parseFloat(e ? t[e] : t) : ""
            }))
        }

        function A(t) {
            O && t && t.nickname && O.commitCompetition("setDisplayName", t.nickname)
        }

        function R(t) {
            O && t && (J(t), O.commitCompetition("setStatus", Q(t)), O.commitCompetition("setRegistered", t.registered))
        }

        function I(t) {
            O && t && (J(t), O.commitCompetition("setStatus", "PRE_ACTIVE"), O.commitCompetition("setRegistered", !1), O.commit("setJoinByNotification", !0), O.commit("setNotificationTimestamp", Date.now()))
        }

        function $(t) {
            O && t && (J(t), O.commitCompetition("setStatus", "ACTIVE"))
        }

        function N(t) {
            if (t.progress) {
                var e = "COMPETITION" === S ? "setLeaderBoardProgress" : "setPrizePoolProgress",
                    i = Object.values(t.progress).filter((function(t) {
                        return t && t.details
                    })).reduce((function(t, e) {
                        return Object.assign(t, e.details)
                    }), {});
                O.commitCompetition(e, i)
            }
        }

        function B(t) {
            if (O && t && t.prizePoolRound && t.prizePoolRound.prizes) {
                it(t.prizePoolRound.prizes);
                var e = t.prizePoolRound.prizes.filter((function(t) {
                        return "EMPTY" !== t.awardType.category
                    })),
                    i = e.reduce((function(t, e) {
                        return t + e.remaining
                    }), 0);
                O.commitCompetition("setTicketsRemaining", i)
            }
        }

        function G(t) {
            O && t && t.prize && O.commitCompetition("pushPrizePoolAward", t.prize)
        }

        function q(t) {
            if (O && t && t.players) {
                O.commitCompetition("setLeaderBoardVisibleEntries", []);
                var e = L(t.players, "leaderBoardPosition");
                e.forEach((function(t) {
                    var e = O.state.competitionModule.playerData.displayName,
                        i = t.nickname === e;
                    O.commitCompetition("pushLeaderBoardVisibleEntries", {
                        position: t.leaderBoardPosition,
                        displayName: t.nickname,
                        score: t.leaderBoardPoints,
                        ifPlayer: i
                    }), i && (O.commitCompetition("setLeaderBoardRemainSpins", t.remainingLeaderBoardSpinNumber), O.commitCompetition("setPlayerPosition", t.leaderBoardPosition))
                }))
            }
        }

        function H(t) {
            O && t && t.playerLeaderBoardAward && (O.commitCompetition("setPlayerPosition", t.playerLeaderBoardAward.player.leaderBoardPosition), O.commitCompetition("setLeaderBoardAward", rt(t.playerLeaderBoardAward.leaderBoardLevel)))
        }

        function W(t) {
            if (O && t) {
                var e = O.state.competitionModule.leaderboardData.visibleEntries.length;
                e ? O.commitCompetition("setStatus", "COMPLETING") : O.commitCompetition("setStatus", "COMPLETED"), et()
            }
        }

        function F(t) {
            O && t && (O.commitCompetition("setClientCompetitionEndTime", Date.now()), O.commitCompetition("setStatus", "COMPLETED"), et())
        }

        function U(t) {
            O && t && (O.commitCompetition("setClientCompetitionEndTime", Date.now()), O.commitCompetition("setStatus", "CANCELLED"), O.commitCompetition("setTicketsRemaining", 0), et())
        }

        function Y(t, e) {
            if (O && t && t.Buttons) {
                var i = "",
                    n = "",
                    s = "",
                    a = "";
                switch (t.Id) {
                    case "GS-CPT-001":
                    case "GS-CPT-002":
                        n = "setAwardData", s = "setAwardButtons", a = "award", i = "setAwardButtonsCallback", O.commitCompetition("setLastAwardTimestamp", Date.now());
                        break;
                    case "GS-CPT-003":
                        s = "setInProgressButtons", a = "in-progress", i = "setInprogressButtonsCallback";
                        break;
                    case "GS-CPT-004":
                        n = "setCancelData", s = "setCancelButtons", a = "cancel", i = "setCancelButtonsCallback";
                        break;
                    default:
                        break
                }
                n && O.commitCompetition(n, t.extraInfo), s && O.commitCompetition(s, Object(E["a"])(t.Buttons.Button)), a && O.commit("setShowPopup", {
                    show: !0,
                    content: a
                }), i && O.commitCompetition(i, (function(i) {
                    var n;
                    t.Buttons.Button.forEach((function(t) {
                        t.Cmd["@name"] === i && (n = t.Cmd)
                    })), e.reply(null, n)
                }))
            }
        }

        function J(t) {
            if (O.commit("setPanelContent", "competition"), t && t.competition && t.competition.competitionToken !== x) {
                x = t.competition.competitionToken, O.commitCompetition("resetPanelData");
                var e = {
                    name: t.competition.name,
                    description: t.competition.description,
                    token: t.competition.competitionToken,
                    type: S = t.competition.stopType,
                    startTime: z(t.competition.start),
                    stopTime: z(t.competition.stop),
                    timeDuration: t.competition.stop && t.competition.start ? D(t.competition.stop).getTime() - D(t.competition.start).getTime() : void 0,
                    timeUntilEnd: t.competition.stop && t.serverTime ? D(t.competition.stop).getTime() - D(t.serverTime).getTime() : void 0,
                    timeUntilStart: t.competition.start && t.serverTime ? D(t.competition.start).getTime() - D(t.serverTime).getTime() : void 0,
                    termsLink: t.competition.termsAndConditionsLink,
                    termsText: t.competition.termsAndConditionsText,
                    status: Q(t)
                };
                if (O.commitCompetition("setRegistered", t.registered), t.competition.currency && (e.currency = t.competition.currency), Object.keys(e).forEach((function(t) {
                        O.commitCompetition("setCompetitionData", {
                            key: t,
                            value: e[t]
                        })
                    })), tt(t), V(t), t.competition.leaderBoard && (at(t), O.commitCompetition("setLeaderBoardSpinLimitation", t.competition.leaderBoardSpinLimitation), O.commitCompetition("setLeaderBoardRemainSpins", t.competition.leaderBoardSpinLimitation)), t.competition.prizePool) {
                    var i = t.competition.prizePool.prizes.filter((function(t) {
                            return "EMPTY" !== t.awardType.category
                        })),
                        n = i.reduce((function(t, e) {
                            return t + e.number
                        }), 0),
                        s = {
                            description: t.competition.prizePool.description,
                            spinLimitation: t.competition.prizeDrawSpinLimitation,
                            award: [],
                            ticketsTotal: n,
                            ticketsRemaining: n,
                            displayLosingTicket: "Y" === t.competition.displayLosingTicket
                        };
                    Object.keys(s).forEach((function(t) {
                        O.commitCompetition("setPrizePoolData", {
                            key: t,
                            value: s[t]
                        })
                    })), it(t.competition.prizePool.prizes)
                }
                t.prizePoolRound && B(t)
            }
        }

        function V(t) {
            if (t.competition && t.competition.ruleGroupsDescription) {
                var e = t.competition.ruleGroupsDescription.LEADERBOARD,
                    i = t.competition.ruleGroupsDescription.PRIZE_DRAW,
                    n = Object.values(t.progress || {}).filter((function(t) {
                        return t && t.details
                    })).reduce((function(t, e) {
                        return Object.assign(t, e.details)
                    }), {});
                e && Z(e, n, "setLeaderBoardRuleText"), i && Z(i, n, "setPrizePoolRuleText"), t.progress && N(t)
            }
        }

        function Z(t, e, i) {
            var n = t.map((function(t) {
                if (t.rules && t.rules.CONDITION && t.rules.CONDITION[0] && t.rules.CONDITION[0].parameters) {
                    var i, n = "PLAY_IN_G_GAME" === t.rules.CONDITION[0].template,
                        s = n ? t.rules.RESULT_LEADERBOARD[0] : t.rules.CONDITION[0],
                        a = s.id,
                        o = y.t("rules.".concat(s.template), K(s.parameters)),
                        r = t.groupName || o;
                    if (n) i = {
                        name: r,
                        condition_id: a,
                        condition_text: o
                    };
                    else {
                        var c = s.parameters.find((function(t) {
                                return t.progress
                            })),
                            l = c ? c.name : "RULE",
                            u = c && c.value ? parseInt(c.value) : 1,
                            d = e[a] && e[a][l] ? parseInt(e[a][l]) : 0,
                            p = d > u ? "100%" : parseInt(d / u * 100) + "%";
                        if (i = {
                                name: r,
                                condition_id: a,
                                condition_text: o,
                                progress_key: l,
                                progress_current: d,
                                progress_total: u,
                                progress_percentage: p
                            }, "COMPETITION" === S && (i.points = X(t)), "WIN_X_TIMES_BET_ON_G_GAME" === t.rules.CONDITION[0].template && ("PROMOTION" === S ? (i.progress_current = 0, i.progress_total = 0, i.progress_percentage = 0) : i.progress_total = 1), i.rule_template = s.template, "PROMOTION" === S && 1 == i.progress_total && (i.progress_current = 0, i.progress_total = 0, i.progress_percentage = 0), t.rules.RESULT_PRIZE_DRAW && t.rules.RESULT_PRIZE_DRAW[0]) {
                            var m = t.rules.RESULT_PRIZE_DRAW[0],
                                h = m.parameters.find((function(t) {
                                    return t.progress
                                })),
                                f = m.id,
                                _ = h ? h.name : "RULE",
                                v = h && h.value ? parseInt(h.value) : 1,
                                b = e[m.id] && e[m.id][_] ? parseInt(e[m.id][_]) : 0;
                            "HIT_T_TIMES_PRIZE_DRAW_OF_A_PLAYER" === m.template && (i.results_id = f, i.results_progress_key = _, i.results_current = b, i.results_total = v, i.progress_current && i.progress_current == i.progress_total && i.results_current < i.results_total && (i.progress_current = 0))
                        }
                    }
                    return i
                }
            }));
            O.commitCompetition(i, n)
        }

        function X(t) {
            var e;
            try {
                var i = t.rules.RESULT_LEADERBOARD[0].parameters.find((function(t) {
                    return "points" === t.name
                }));
                e = parseInt(i.value)
            } catch (n) {
                console.log(n)
            }
            return e
        }

        function K(t) {
            var e = {};
            return t && t.forEach((function(t) {
                e[t.name] = t.value
            })), e
        }

        function Q(t) {
            var e;
            if (t.status) switch (t.status) {
                case "PUBLISHED":
                    e = "PRE_ACTIVE";
                    break;
                case "ACTIVE":
                    e = "ACTIVE";
                    break;
                case "LB_PAYOUT_ERROR":
                case "COMPLETED":
                    e = ["PRIZE_DRAW", "PROMOTION"].includes(S) ? "COMPLETED" : "COMPLETING";
                    break;
                case "LB_RESULTED":
                    e = "COMPLETED";
                    break;
                case "LB_PAYOUT_ERROR_FOR_CANCEL":
                case "CANCELED_AND_REWARDING_LB":
                case "CANCELED":
                case "CANCELED_AND_REWARDED_LB":
                case "CANCELED_AND_NO_REWARD_LB":
                    e = "CANCELLED";
                    break
            } else {
                if (!t.serverTime || !t.competition || !t.competition.start || !t.competition.stop) return;
                var i = Date.now() - D(t.serverTime).getTime(),
                    n = D(t.competition.start).getTime() + i,
                    s = D(t.competition.stop).getTime() + i;
                e = Date.now() < n ? "PRE_ACTIVE" : Date.now() <= s ? "ACTIVE" : "COMPLETED"
            }
            return e
        }

        function tt(t) {
            var e = t.serverTime,
                i = t.competition,
                n = i.start,
                s = i.stop,
                a = i.stopType;
            if (e && ["COMPETITION", "PROMOTION", "PRIZE_BATTLE"].includes(a)) {
                var o = Date.now() - D(e).getTime();
                if (n) {
                    var r = D(n).getTime(),
                        c = r + o;
                    j = setInterval((function() {
                        var t = c - Date.now();
                        t < 0 && (t = void 0, clearInterval(j)), O.commitCompetition("setTimeUntilStart", t)
                    }), 500)
                }
                if (s) {
                    var l = D(s).getTime(),
                        u = l + o;
                    P = setInterval((function() {
                        var t = u - Date.now();
                        t < 0 && (t = void 0, clearInterval(P)), O.commitCompetition("setTimeUntilEnd", t)
                    }), 500)
                }
            }
        }

        function et() {
            j && clearInterval(j), P && clearInterval(P), O.commitCompetition("setTimeUntilStart"), O.commitCompetition("setTimeUntilEnd", 0)
        }

        function it(t) {
            var e = nt(t),
                i = e.map((function(t) {
                    return {
                        id: t.id,
                        award: rt(t),
                        remain: st(t),
                        category: t.awardType.category ? t.awardType.category : "EMPTY"
                    }
                }));
            O.commitCompetition("setPrizeList", i)
        }

        function nt(t) {
            if (t.constructor !== Array) return [];
            t = t.filter((function(t) {
                return t.awardType && t.awardType.category
            }));
            var e = t.filter((function(t) {
                    return "CASH" === t.awardType.category
                })).sort((function(t, e) {
                    return e.amountValue - t.amountValue
                })),
                i = t.filter((function(t) {
                    return "FREESPIN" === t.awardType.category
                })).sort((function(t, e) {
                    return e.amount - t.amount
                })),
                n = t.filter((function(t) {
                    return "EMPTY" === t.awardType.category
                }));
            return [].concat(Object(E["a"])(e), Object(E["a"])(i), Object(E["a"])(n))
        }

        function st(t) {
            var e = void 0 === t.remaining ? t.number : t.remaining;
            return y.tc("prizedraw.play_remain_ticket", e)
        }

        function at(t) {
            var e = L(t.competition.leaderBoard.leaderBoardLevels, "start"),
                i = e.filter((function(t) {
                    return "EMPTY" !== t.awardType.category
                })),
                n = i.map((function(t) {
                    return {
                        from: t.start,
                        to: t.position,
                        rank: ot(t),
                        award: rt(t),
                        category: t.awardType.category
                    }
                }));
            O.commitCompetition("setLeaderBoardLevels", n)
        }

        function ot(t) {
            return t.start === t.position ? "".concat(t.position) : "".concat(t.start, "-").concat(t.position)
        }

        function rt(t) {
            if (t && t.awardType && t.awardType.category) {
                if ("CASH" === t.awardType.category) return t.amount;
                if ("FREESPIN" === t.awardType.category) {
                    var e = "";
                    try {
                        var i = JSON.parse(t.awardType.additionalInfo),
                            n = i.offers.sort((function(t, e) {
                                return e.freeSpinNum - t.freeSpinNum
                            }));
                        e = n[0].freeSpinNum
                    } catch (s) {
                        console.log(s)
                    }
                    return y.tc("common.award_spins", e)
                }
                return "EMPTY" === t.awardType.category ? y.t("common.award_empty") : void 0
            }
        }

        function ct(t, e, i) {
            O = t, y = e, i, i.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.DisplayMessage",
                callback: Y
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.PlayerInfo",
                callback: A
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.CompetitionInfo",
                callback: R
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.PreActive",
                callback: I
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.Active",
                callback: $
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.Leaderboard",
                callback: q
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.LeaderboardAward",
                callback: H
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.PrizePool",
                callback: B
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.PrizeDrawAward",
                callback: G
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.Progression",
                callback: N
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.Completing",
                callback: W
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.Completed",
                callback: F
            }), i.subscribe({
                channel: "GameService",
                topic: "Competition.Cancelled",
                callback: U
            })
        }
        var lt, ut, dt = {
                init: ct
            },
            pt = (i("a15b"), i("498a"), {});

        function mt(t) {
            if (lt.commit("setPanelContent", "jackpot"), t.visibleCompetitions && t.visibleCompetitions[0]) {
                pt = t.visibleCompetitions[0];
                var e = t.visibleCompetitions[0].competition && t.visibleCompetitions[0].competition.staticView && t.visibleCompetitions[0].competition.staticView.boltonGamePath,
                    i = t.server || "",
                    n = "?" + Object.keys(t.config).map((function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t.config[e])
                    })).join("&");
                lt.commitJackpot("setPanelPath", i + "/" + e + "/boltOnPanel.html" + n), lt.commitJackpot("setGamePath", i + "/" + e + "/boltOnLauncher.html" + n)
            }
        }

        function ht(t) {
            var e = t.data && t.data.type && t.data.type.trim();
            switch (t.source) {
                case gt.win:
                    gt.sendToGSP(t, e);
                    break;
                case Ct.win:
                    Ct.sendToGSP(t, e);
                    break;
                default:
                    break
            }
        }
        var ft = 0,
            _t = 0,
            vt = !1,
            bt = !1,
            gt = {
                win: null,
                ready: !1,
                initPanel: function(t) {
                    gt.win = t
                },
                sendToGSP: function(t, e) {
                    switch (e) {
                        case "SystemReady":
                            gt.ready = !0;
                            break;
                        case "LoadProgress":
                            ut && (t.data.data.percent && (ft = Math.floor(t.data.data.percent / 2)), vt = t.data.data.complete, ut.publish({
                                channel: "GameService",
                                topic: "BoltOn.LoadProgress",
                                data: {
                                    type: "LoadProgress",
                                    data: {
                                        percent: ft + _t,
                                        complete: vt && bt,
                                        fail: t.data.data.fail
                                    }
                                }
                            }), vt && gt.receiveFromGSP({
                                type: "Init",
                                boltOnInfo: pt
                            }));
                            break;
                        case "OptIn":
                            ut && ut.request({
                                channel: "GameService",
                                topic: "BoltOn.Panel.OptIn",
                                data: t.data.data
                            }, (function(t) {
                                gt.receiveFromGSP({
                                    type: "OptIn",
                                    data: t
                                })
                            }), (function(t) {
                                gt.receiveFromGSP({
                                    type: "OptIn",
                                    data: t
                                })
                            }));
                            break;
                        case "OptOut":
                            ut && ut.request({
                                channel: "GameService",
                                topic: "BoltOn.Panel.OptOut",
                                data: t.data.data
                            }, (function(t) {
                                gt.receiveFromGSP({
                                    type: "OptOut",
                                    data: t
                                })
                            }), (function(t) {
                                gt.receiveFromGSP({
                                    type: "OptOut",
                                    data: t
                                })
                            }));
                            break;
                        case "setSize":
                            Tt.resize && Tt.resize(t.data.data);
                            break;
                        case "requestFullScreen":
                            Tt.fullscreen && Tt.fullscreen(t.data.data);
                            break;
                        default:
                            break
                    }
                },
                receiveFromGSP: function(t) {
                    gt.win && gt.ready && gt.win.postMessage(t, "*")
                },
                meterUpdate: function(t) {
                    gt.receiveFromGSP({
                        type: "MeterUpdate",
                        data: t
                    })
                },
                messageUpdate: function(t) {
                    gt.receiveFromGSP({
                        type: "MessageUpdate",
                        data: t
                    })
                },
                optInEvent: function(t) {
                    gt.receiveFromGSP({
                        type: "OptInChange",
                        data: t
                    })
                },
                gameEvent: function(t) {
                    gt.receiveFromGSP({
                        type: "GameEvent",
                        data: t
                    })
                },
                responseReceived: function(t) {
                    gt.receiveFromGSP({
                        type: "BoltOnResponse",
                        data: t
                    })
                },
                orientationChange: function(t) {
                    gt.receiveFromGSP({
                        type: "OrientationChange",
                        data: t
                    })
                }
            },
            Ct = {
                win: null,
                ready: !1,
                lastState: void 0,
                initGame: function(t) {
                    Ct.win = t
                },
                sendToGSP: function(t, e) {
                    switch (e) {
                        case "SystemReady":
                            Ct.ready = !0;
                            break;
                        case "LoadProgress":
                            ut && (t.data.data.percent && (_t = Math.floor(t.data.data.percent / 2)), bt = t.data.data.complete, ut.publish({
                                channel: "GameService",
                                topic: "BoltOn.LoadProgress",
                                data: {
                                    type: "LoadProgress",
                                    data: {
                                        percent: ft + _t,
                                        complete: vt && bt,
                                        fail: t.data.data.fail
                                    }
                                }
                            }));
                            break;
                        case "continue":
                            Ct.replyHandler && t.data.data.state === Ct.lastState && Ct.replyHandler(null, t.data);
                            break;
                        default:
                            break
                    }
                },
                receiveFromGSP: function(t) {
                    Ct.win && Ct.ready && Ct.win.postMessage(t, "*")
                },
                stateChangeHandler: function(t, e) {
                    if (Ct.replyHandler = e.reply, Ct.lastState = t.type, Ct.win) {
                        switch (t.type) {
                            case "RevealGame":
                                lt.commit("setShowGame", {
                                    show: !0
                                });
                                break;
                            case "EndGame":
                                lt.commit("setShowGame", {
                                    show: !1
                                });
                                break;
                            default:
                                break
                        }
                        Ct.receiveFromGSP(t)
                    } else Ct.replyHandler(null, {
                        type: "continue",
                        data: {
                            state: Ct.lastState
                        }
                    })
                },
                mute: function(t) {
                    Ct.receiveFromGSP(t)
                }
            };

        function wt(t, e, i) {
            lt = t, e, ut = i, i.subscribe({
                channel: "ClientService",
                topic: "GameService.BoltOnInit",
                callback: mt
            }), i.subscribe({
                channel: "GameService",
                topic: "BoltOn.MeterUpdate",
                callback: gt.meterUpdate
            }), i.subscribe({
                channel: "GameService",
                topic: "BoltOn.MessageUpdate",
                callback: gt.messageUpdate
            }), i.subscribe({
                channel: "GameService",
                topic: "Game.GameEvent",
                callback: gt.gameEvent
            }), i.subscribe({
                channel: "GameService",
                topic: "BoltOn.ResponseReceived",
                callback: gt.responseReceived
            }), i.subscribe({
                channel: "GameService",
                topic: "BoltOn.OptInChange",
                callback: gt.optInEvent
            }), i.subscribe({
                channel: "GameService",
                topic: "BoltOn.StateChange",
                callback: Ct.stateChangeHandler
            }), i.subscribe({
                channel: "GameService",
                topic: "BoltOn.Mute",
                callback: Ct.mute
            }), window.addEventListener("message", ht, !1)
        }
        var Tt = {};

        function Ot(t) {
            Tt = t
        }
        var yt = {
            init: wt,
            addResizeController: Ot,
            initPanel: gt.initPanel,
            notifyPanelOrientation: gt.orientationChange,
            initGame: Ct.initGame
        };
        _.a.configuration.promise.createDeferred = function() {
            return h.a.defer()
        }, _.a.configuration.promise.getPromise = function(t) {
            return t.promise
        };
        var xt = _.a.channel("GameService"),
            jt = {
                publish: function(t) {
                    xt.bus.publish(t)
                },
                subscribe: function(t, e) {
                    e && (t.callback = e), xt.bus.subscribe(t)
                },
                request: function(t, e, i) {
                    var n = _.a.channel(t.channel);
                    return n.request(t).then(e, i)
                }
            };

        function Pt(t, e) {
            _.a.instanceId("GameService"), _.a.fedx.transports.xframe.configure({
                safeSerialize: !0,
                enabled: !0
            }), _.a.fedx.addFilter([{
                channel: "GameService",
                topic: "#",
                direction: "both"
            }, {
                channel: "ClientService",
                topic: "#",
                direction: "both"
            }, {
                channel: "postal.request-response",
                topic: "#",
                direction: "both"
            }]), _.a.fedx.signalReady({
                xframe: {
                    target: window.parent
                }
            }, (function() {
                [k, dt, yt].forEach((function(i) {
                    i.init(t, e, jt)
                })), jt.publish({
                    channel: "GameService",
                    topic: "GameService.Panel.ViewReady",
                    data: {}
                })
            }))
        }
        var St = {
                init: Pt,
                bus: jt
            },
            kt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    ref: "panel",
                    staticClass: "panelContainer"
                }, [i(t.panelContent, {
                    tag: "component"
                })], 1)
            },
            Et = [],
            Mt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "CompetitionPanel"
                    }
                }, [i(t.currentLayout, {
                    tag: "component"
                })], 1)
            },
            zt = [],
            Dt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "side-panel-container"
                }, [i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            Lt = [],
            At = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "leaderboard-panel"
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [t._v(" " + t._s(t.$t("common.logo_tournament_text")) + " "), i("div", {
                    staticClass: "logo-background"
                }, [t._v(t._s(t.$t("common.logo_tournament_text")))])]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            Rt = [],
            It = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "pre-tournament-container"
                    }
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("timer-box")], 1), i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "main-content"
                }, [i("top-prizes", {
                    ref: "main"
                })], 1)]), i("footer-info"), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            $t = [],
            Nt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "timer-box",
                    class: [t.skin]
                }, [i("div", {
                    staticClass: "animation-box",
                    class: {
                        "move-down": t.showTextAnimation
                    }
                }, [i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.description))]), i("p", {
                    staticClass: "time"
                }, [t._v(t._s(t.time))])])])
            },
            Bt = [],
            Gt = i("3835"),
            qt = (i("1276"), 5e3),
            Ht = 1e3,
            Wt = Object(p["a"])("competitionModule"),
            Ft = Wt.mapState,
            Ut = (Wt.mapGetters, {
                name: "TimerBox",
                data: function() {
                    return {
                        skin: "timer-box-default",
                        description: "",
                        time: "",
                        showTextAnimation: !1,
                        readyToSetStartTimer: !1,
                        readyToSetEndTimer: !1
                    }
                },
                computed: Object(d["a"])({}, Ft({
                    competitionType: function(t) {
                        return t.competitionData.type
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    },
                    timeUntilStart: function(t) {
                        return t.competitionData.timeUntilStart
                    },
                    timeUntilEnd: function(t) {
                        return t.competitionData.timeUntilEnd
                    }
                })),
                watch: {
                    timeUntilStart: function(t, e) {
                        this.readyToSetStartTimer && this.setStartTimer(t)
                    },
                    timeUntilEnd: function(t) {
                        this.readyToSetEndTimer && this.setEndTimer(t)
                    }
                },
                methods: {
                    initWithWhichTimer: function() {
                        ["COMPLETING", "COMPLETED", "CANCELLED", "PRE_ACTIVE"].includes(this.competitionStatus) ? this.readyToSetStartTimer = !0 : "ACTIVE" === this.competitionStatus && (this.readyToSetEndTimer = !0)
                    },
                    getTimerText: function(t) {
                        var e = "";
                        "COMPETITION" === this.competitionType && (e = "leaderboard."), "PROMOTION" === this.competitionType && (e = "quest.");
                        var i = this.$t(e + t),
                            n = i.split("\n");
                        return n
                    },
                    setStartTimer: function(t) {
                        if ("undefined" !== typeof t) {
                            var e = this.getTimerText("timer_ready"),
                                i = Object(Gt["a"])(e, 2),
                                n = i[0],
                                s = i[1],
                                a = this.getTimerText("timer_start"),
                                o = Object(Gt["a"])(a, 1),
                                r = o[0];
                            this.description = t < Ht ? n : r, this.time = t < Ht ? s : M(t), this.skin = t <= qt ? t < Ht ? "timer-box-filled" : "timer-box-highlight" : "timer-box-default", t < Ht && this.startReadyAnimation()
                        }
                    },
                    startReadyAnimation: function() {
                        var t = this;
                        this.readyToSetStartTimer = !1;
                        var e = 0,
                            i = setInterval((function() {
                                t.skin = "timer-box-highlight" === t.skin ? "timer-box-filled" : "timer-box-highlight", 5 === ++e && (clearInterval(i), t.startEndAnimation())
                            }), 400)
                    },
                    startEndAnimation: function() {
                        var t = this;
                        setTimeout((function() {
                            t.skin = "timer-box-default", t.showTextAnimation = !0, setTimeout((function() {
                                t.showTextAnimation = !1, t.readyToSetEndTimer = !0
                            }), 400)
                        }), 400)
                    },
                    setEndTimer: function(t) {
                        if ("undefined" !== typeof t) {
                            var e = this.getTimerText("timer_finished"),
                                i = Object(Gt["a"])(e, 2),
                                n = i[0],
                                s = i[1],
                                a = this.getTimerText("timer_end"),
                                o = Object(Gt["a"])(a, 1),
                                r = o[0];
                            this.description = t < Ht ? n : r, this.time = t < Ht ? s : M(t), this.skin = t <= qt ? t < Ht ? "timer-box-filled" : "timer-box-highlight" : "timer-box-default", t < Ht && this.startFinishAnimation()
                        }
                    },
                    startFinishAnimation: function() {
                        var t = this;
                        this.readyToSetEndTimer = !1;
                        var e = 0,
                            i = setInterval((function() {
                                t.skin = "timer-box-highlight" === t.skin ? "timer-box-filled" : "timer-box-highlight", 5 === ++e && clearInterval(i)
                            }), 400)
                    }
                },
                mounted: function() {
                    this.initWithWhichTimer()
                }
            }),
            Yt = Ut,
            Jt = (i("bd7e"), i("2877")),
            Vt = Object(Jt["a"])(Yt, Nt, Bt, !1, null, "40199585", null),
            Zt = Vt.exports,
            Xt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "top-prizes"
                }, [i("div", {
                    staticClass: "header"
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.join_top_prizes")))])]), i("div", {
                    staticClass: "top-prizes-wrapper"
                }, [i("top-prize-list", {
                    attrs: {
                        line: "gradient"
                    }
                })], 1), i("button", {
                    staticClass: "link-btn flex-center",
                    on: {
                        click: t.setShowAllPrizes
                    }
                }, [i("p", [t._v(t._s(t.$t("common.join_view_prizes")))]), i("div", {
                    staticClass: "arrow-right"
                })])])
            },
            Kt = [],
            Qt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list"
                }, t._l(t.prizes, (function(e, n) {
                    return i("div", {
                        key: e.rank,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "content",
                        class: ["top-" + e.rank, "index-" + n]
                    }, [i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(t._f("filterTop3")(e.rank)))]), i("div", {
                        staticClass: "right",
                        class: ["position-" + n, {
                            "index-small": t.smallTextLocale
                        }, "floatboxouter"]
                    }, [i("div", {
                        staticClass: "floatboxinner"
                    }, [t._v(t._s(e.award))])])]), n !== t.prizes.length - 1 ? i("div", {
                        class: ["line", t.line]
                    }) : t._e()])
                })), 0)
            },
            te = [],
            ee = Object(p["a"])("competitionModule"),
            ie = ee.mapState,
            ne = {
                name: "TopPrizeList",
                props: {
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, ie({
                    leaderboardPrizes: function(t) {
                        return t.leaderboardData.levels
                    }
                })), {}, {
                    prizes: function() {
                        return this.leaderboardPrizes.slice(0, 3)
                    },
                    smallTextLocale: function() {
                        return "fr" === this._i18n.locale || "fr-CA" === this._i18n.locale || "fr_BE" === this._i18n.locale
                    }
                }),
                filters: {
                    filterTop3: function(t) {
                        return ["1", "2", "3"].includes(t) ? "" : t
                    }
                }
            },
            se = ne,
            ae = (i("4211"), Object(Jt["a"])(se, Qt, te, !1, null, "04eeb1b1", null)),
            oe = ae.exports,
            re = {
                name: "TopPrizes",
                components: {
                    TopPrizeList: oe
                },
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    setShowAllPrizes: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "prizes"
                        })
                    }
                })
            },
            ce = re,
            le = (i("37d9"), Object(Jt["a"])(ce, Xt, Kt, !1, null, "f323780a", null)),
            ue = le.exports,
            de = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "menu-content"
                }, [i("div", {
                    staticClass: "upper-content"
                }), i("keep-alive", [i(t.content, {
                    tag: "component",
                    staticClass: "content"
                })], 1)], 1)
            },
            pe = [],
            me = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "menu-container"
                }, [i("div", {
                    staticClass: "menu-list"
                }, ["ACTIVE" === t.tournamentState && "COMPETITION" === t.tournamentType ? i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("leaderboard")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]) : t._e(), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("prizes")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.prizes")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("points-rules")
                        }
                    }
                }, [t._v(" " + t._s("COMPETITION" === t.tournamentType ? t.$t("leaderboard.play_points_rules") : t.$tc("prizedraw.play_rules_title", t.showRules.length)) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("rules")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.join_tournament_rules")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })])])])
            },
            he = [],
            fe = Object(p["a"])("competitionModule"),
            _e = fe.mapState,
            ve = {
                name: "context-menu",
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })), _e({
                    tournamentState: function(t) {
                        return t.competitionData.status
                    },
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    rules: function(t) {
                        return t.prizePoolData.ruleText
                    }
                })), {}, {
                    showRules: function() {
                        return L(this.rules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerMenuOption: function(t) {
                        this.setShowContextMenu({
                            show: !0,
                            content: t
                        })
                    }
                })
            },
            be = ve,
            ge = (i("52fc"), Object(Jt["a"])(be, me, he, !1, null, "8672669c", null)),
            Ce = ge.exports,
            we = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " ")]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), t.records.length > 0 ? i("div", {
                    staticClass: "leaderboard-list"
                }, [t._l(t.records, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), n !== t.records.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 2) : t._e()])
            },
            Te = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            Oe = Object(p["a"])("competitionModule"),
            ye = Oe.mapState,
            xe = {
                name: "leaderboard-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, ye({
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "leaderboard" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            je = xe,
            Pe = (i("936b"), Object(Jt["a"])(je, we, Te, !1, null, "485c9df2", null)),
            Se = Pe.exports,
            ke = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prizes-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.prizes")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "content"
                }, [i(t.componentToLoad, {
                    tag: "component",
                    attrs: {
                        showAll: !0,
                        line: "gradient"
                    }
                }), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 1)])
            },
            Ee = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            Me = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list"
                }, t._l(t.prizes, (function(e, n) {
                    return i("div", {
                        key: e.rank,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "content",
                        class: ["top-" + e.rank]
                    }, [i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(t._f("filterTop3")(e.rank)))]), i("div", {
                        staticClass: "right"
                    }, [t._v(t._s(e.award))])]), n !== t.prizes.length - 1 ? i("div", {
                        class: ["line", t.line]
                    }) : t._e()])
                })), 0)
            },
            ze = [],
            De = Object(p["a"])("competitionModule"),
            Le = De.mapState,
            Ae = {
                name: "PrizeList",
                props: {
                    showAll: {
                        type: Boolean,
                        required: !0
                    },
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, Le({
                    leaderboardPrizes: function(t) {
                        return t.leaderboardData.levels
                    }
                })), {}, {
                    prizes: function() {
                        return this.showAll ? this.leaderboardPrizes : this.leaderboardPrizes.slice(0, 3)
                    }
                }),
                filters: {
                    filterTop3: function(t) {
                        return ["1", "2", "3"].includes(t) ? "" : t
                    }
                }
            },
            Re = Ae,
            Ie = (i("50b4"), Object(Jt["a"])(Re, Me, ze, !1, null, "1579b42d", null)),
            $e = Ie.exports,
            Ne = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list"
                }, t._l(t.showPrizes, (function(e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "prize-item-content"
                    }, [i("div", {
                        staticClass: "icon"
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "18",
                            height: "18"
                        }
                    })], 1), i("div", {
                        staticClass: "award"
                    }, [t._v(t._s(e.award))]), i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(e.remain))])]), i("div", {
                        class: ["line", t.line]
                    })])
                })), 0)
            },
            Be = [],
            Ge = Object(p["a"])("competitionModule"),
            qe = Ge.mapState,
            He = {
                name: "PrizeList",
                props: {
                    showAll: {
                        type: Boolean,
                        required: !0
                    },
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, qe({
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), {}, {
                    showPrizes: function() {
                        var t = this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        }));
                        return this.showAll ? t : t.slice(0, 3)
                    }
                })
            },
            We = He,
            Fe = (i("c156"), Object(Jt["a"])(We, Ne, Be, !1, null, "42785126", null)),
            Ue = Fe.exports,
            Ye = Object(p["a"])("competitionModule"),
            Je = Ye.mapState,
            Ve = {
                name: "prizes-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                components: {
                    PrizeListCompetition: $e,
                    PrizeListPrizeDraw: Ue
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Je({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })), {}, {
                    componentToLoad: function() {
                        return "COMPETITION" === this.tournamentType ? "prize-list-competition" : "prize-list-prize-draw"
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "prizes" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            Ze = Ve,
            Xe = (i("3fae"), Object(Jt["a"])(Ze, ke, Ee, !1, null, "3c2b2e8c", null)),
            Ke = Xe.exports,
            Qe = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "points-rules-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s("COMPETITION" === t.tournamentType ? t.$t("leaderboard.play_points_rules") : t.$tc("prizedraw.play_rules_title", t.showRules.length)) + " ")]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "points-rules-list"
                }, [t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name
                    }, [i("div", {
                        staticClass: "points-rule-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text",
                        class: {
                            "multiplier-rule": t.isMultiplierRule(e)
                        }
                    }, [i("div", {
                        staticClass: "name",
                        class: {
                            "multiplier-rule-name": t.isMultiplierRule(e)
                        }
                    }, [t._v(t._s(e.name))]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "point"
                    }, [t._v(t._s(e.points))])]), !t.isMultiplierRule(e) && e.progress_total > 0 ? i("div", {
                        staticClass: "progress"
                    }, [i("div", {
                        staticClass: "text"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))]), i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })])]) : t._e()])]), n !== t.showRules.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 2)])
            },
            ti = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            ei = Object(p["a"])("competitionModule"),
            ii = ei.mapState,
            ni = {
                name: "points-rules-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, ii({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    LBrules: function(t) {
                        return t.leaderboardData.ruleText
                    },
                    PDrules: function(t) {
                        return t.prizePoolData.ruleText
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })), {}, {
                    showRules: function() {
                        return "COMPETITION" === this.tournamentType ? L(this.LBrules, "points", "desc").slice(0, 3) : L(this.PDrules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "points-rules" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            si = ni,
            ai = (i("ac1a"), Object(Jt["a"])(si, Qe, ti, !1, null, "9c41253a", null)),
            oi = ai.exports,
            ri = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "rules-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("leaderboard.join_tournament_rules")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, ["COMPETITION" === t.tournamentType ? i("div", [i("p", [t._v(t._s(t.$t("leaderboard.join_rules_1", {
                    startTime: t.startTime,
                    stopTime: t.stopTime
                })))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_2")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_3")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_4")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_5")))]), i("ul", t._l(t.lbRuleText, (function(e) {
                    return i("li", {
                        key: e.name
                    }, [i("b", [t._v(t._s(e.name) + " " + t._s(t.isMultiplierRule(e) ? "" : "(" + e.points + ")"))]), i("br"), i("p", [t._v(t._s(e.condition_text))])])
                })), 0), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_6")))]), i("ul", t._l(t.lbLevels, (function(e) {
                    return i("li", {
                        key: e.rank
                    }, [i("b", [t._v(t._s(e.rank) + " : ")]), t._v(t._s(e.award) + " ")])
                })), 0)]) : t._e(), "PRIZE_DRAW" === t.tournamentType ? i("div", [i("p", [t._v(t._s(t.$t("prizedraw.join_rules_1", {
                    startTime: t.startTime
                })))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_2")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_3")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_4")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_5")))]), i("ul", t._l(t.pdRuleText, (function(e) {
                    return i("li", {
                        key: e.name
                    }, [i("b", [t._v(t._s(e.name))]), i("br"), t._v(" " + t._s(e.condition_text) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_6")))]), i("ul", t._l(t.showPdPrizeList, (function(e) {
                    return i("li", {
                        key: e.id
                    }, [i("b", [t._v(t._s(e.award) + " : ")]), t._v(t._s(e.remain) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_7")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_8")))])]) : t._e(), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "mask"
                })])
            },
            ci = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            li = i("b7f5"),
            ui = (i("7da8"), Object(p["a"])("competitionModule")),
            di = ui.mapState,
            pi = {
                name: "rules-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, di({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    startTime: function(t) {
                        return t.competitionData.startTime
                    },
                    stopTime: function(t) {
                        return t.competitionData.stopTime
                    },
                    lbRuleText: function(t) {
                        return t.leaderboardData.ruleText
                    },
                    lbLevels: function(t) {
                        return t.leaderboardData.levels
                    },
                    pdRuleText: function(t) {
                        return t.prizePoolData.ruleText
                    },
                    pdPrizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })), {}, {
                    showPdPrizeList: function() {
                        return this.pdPrizeList.map((function(t) {
                            return {
                                id: t.id,
                                award: t.award,
                                remain: t.remain.replace("x", "")
                            }
                        }))
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    },
                    initializeScrollBar: function(t) {
                        new li["a"](t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                }),
                mounted: function() {
                    this.initializeScrollBar(this.$refs.content), setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "rules" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            mi = pi,
            hi = (i("3f65"), Object(Jt["a"])(mi, ri, ci, !1, null, "40b1ff45", null)),
            fi = hi.exports,
            _i = {
                name: "context-menu",
                components: {
                    TimerBox: Zt,
                    ContextMenu: Ce,
                    Leaderboard: Se,
                    Prizes: Ke,
                    PointsRules: oi,
                    Rules: fi
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    hideMenu: function() {
                        this.setShowContextMenu({
                            show: !1,
                            content: ""
                        })
                    }
                })
            },
            vi = _i,
            bi = (i("72c8"), Object(Jt["a"])(vi, de, pe, !1, null, "21ffe95c", null)),
            gi = bi.exports,
            Ci = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "footer-container"
                }, [i("div", {
                    staticClass: "play-tips flex-center"
                }, [i("div", {
                    staticClass: "box"
                }, [i("p", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.lbSpinLimitation))]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$tc("leaderboard.join_spins", t.lbSpinLimitation)))])]), i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box"
                }, [i("p", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.timeDuration))]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$tc("leaderboard.join_minutes", t.timeDuration)))])])]), i("join-button"), i("button", {
                    staticClass: "rules-btn flex-center",
                    on: {
                        click: t.setShowRules
                    }
                }, [i("p", [t._v(t._s(t.$t("leaderboard.join_view_rules")))]), i("div", {
                    staticClass: "arrow-right"
                })])], 1)
            },
            wi = [],
            Ti = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "join-button"
                }, [i("button", {
                    staticClass: "join",
                    attrs: {
                        disabled: t.joinButtonDisabled
                    },
                    on: {
                        click: t.joinTriggered
                    }
                }, [t._v(" " + t._s(t.$t(t.joinButtonLocalKey)) + " ")])])
            },
            Oi = [],
            yi = Object(p["a"])("competitionModule"),
            xi = yi.mapGetters,
            ji = {
                name: "JoinButton",
                computed: Object(d["a"])({}, xi(["joinButtonLocalKey", "joinButtonDisabled"])),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    joinTriggered: function() {
                        this.setShowPopup({
                            show: !0,
                            content: "confirm"
                        })
                    }
                })
            },
            Pi = ji,
            Si = (i("48ab"), Object(Jt["a"])(Pi, Ti, Oi, !1, null, "c6451490", null)),
            ki = Si.exports,
            Ei = Object(p["a"])("competitionModule"),
            Mi = Ei.mapGetters,
            zi = {
                name: "FooterInfo",
                components: {
                    JoinButton: ki
                },
                computed: Object(d["a"])({}, Mi(["lbSpinLimitation", "timeDuration"])),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    setShowRules: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "rules"
                        })
                    }
                })
            },
            Di = zi,
            Li = (i("13ae"), Object(Jt["a"])(Di, Ci, wi, !1, null, "f5c7919c", null)),
            Ai = Li.exports,
            Ri = Object(p["a"])("competitionModule"),
            Ii = Ri.mapState,
            $i = {
                name: "Join",
                components: {
                    TimerBox: Zt,
                    TopPrizes: ue,
                    ContextMenu: gi,
                    FooterInfo: Ai
                },
                computed: Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })), Ii({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    }
                })
            },
            Ni = $i,
            Bi = (i("ebbe"), Object(Jt["a"])(Ni, It, $t, !1, null, "da4d2ece", null)),
            Gi = Bi.exports,
            qi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "leaderboard-play-container"
                    }
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("timer-box")], 1), i("main-content"), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            Hi = [],
            Wi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "content-container"
                }, [i("points-rules", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.showInProgressContent,
                        expression: "!showInProgressContent"
                    }]
                }), i("leaderboard-content"), i("remain-spins"), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showInProgressContent,
                        expression: "showInProgressContent"
                    }],
                    staticClass: "progress-content"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_in_progress")) + " ")])], 1)
            },
            Fi = [],
            Ui = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "points-rules-container",
                    on: {
                        click: t.showPointsRules
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_points_rules")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "points-rules-list"
                }, t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "points-rule-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "first-line",
                        class: {
                            "multiplier-rule": t.isMultiplierRule(e)
                        }
                    }, [i("div", {
                        staticClass: "name",
                        class: {
                            "multiplier-rule-name": t.isMultiplierRule(e)
                        }
                    }, [t._v(" " + t._s(e.name) + " ")]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "point"
                    }, [t._v(t._s(e.points))])]), !t.isMultiplierRule(e) && e.progress_total > 0 ? i("div", {
                        staticClass: "second-line"
                    }, [i("div", {
                        staticClass: "fraction"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))]), i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })])]) : t._e()])])
                })), 0)])
            },
            Yi = [],
            Ji = Object(p["a"])("competitionModule"),
            Vi = Ji.mapState,
            Zi = {
                name: "PointsRules",
                computed: Object(d["a"])(Object(d["a"])({}, Vi({
                    rules: function(t) {
                        return t.leaderboardData.ruleText
                    }
                })), {}, {
                    showRules: function() {
                        return L(this.rules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    showPointsRules: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "points-rules"
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                })
            },
            Xi = Zi,
            Ki = (i("9e1e"), Object(Jt["a"])(Xi, Ui, Yi, !1, null, "0e228e1e", null)),
            Qi = Ki.exports,
            tn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-content-container",
                    on: {
                        click: t.showLeaderboard
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "leaderboard-list"
                }, t._l(t.records, (function(e, n) {
                    return i("div", {
                        key: e.displayName,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), n !== t.records.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), 0)])
            },
            en = [],
            nn = Object(p["a"])("competitionModule"),
            sn = nn.mapState,
            an = {
                name: "LeaderboardContent",
                computed: Object(d["a"])({}, sn({
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    showLeaderboard: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "leaderboard"
                        })
                    }
                })
            },
            on = an,
            rn = (i("a272"), Object(Jt["a"])(on, tn, en, !1, null, "250ec1e4", null)),
            cn = rn.exports,
            ln = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "remain-spins"
                }, [i("div", {
                    staticClass: "content flex-center"
                }, [i("div", {
                    staticClass: "rotate"
                }), i("p", {
                    staticClass: "text"
                }, [i("span", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.remainSpins))])])])])
            },
            un = [],
            dn = Object(p["a"])("competitionModule"),
            pn = dn.mapState,
            mn = {
                name: "RemainSpins",
                computed: Object(d["a"])({}, pn({
                    remainSpins: function(t) {
                        return t.leaderboardData.spinRemaining
                    }
                }))
            },
            hn = mn,
            fn = (i("6d5c"), Object(Jt["a"])(hn, ln, un, !1, null, "4b874ec6", null)),
            _n = fn.exports,
            vn = {
                name: "MainContent",
                components: {
                    PointsRules: Qi,
                    LeaderboardContent: cn,
                    RemainSpins: _n
                },
                data: function() {
                    return {
                        showInProgressContent: !1
                    }
                },
                methods: {
                    showInProgressOnPanle: function() {
                        this.showInProgressContent = !0
                    }
                },
                created: function() {
                    this.myEventHandler.$on("progressPopupClosed", this.showInProgressOnPanle)
                }
            },
            bn = vn,
            gn = (i("70e2"), Object(Jt["a"])(bn, Wi, Fi, !1, null, "676278bc", null)),
            Cn = gn.exports,
            wn = {
                name: "Play",
                components: {
                    TimerBox: Zt,
                    MainContent: Cn,
                    ContextMenu: gi
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    }
                })
            },
            Tn = wn,
            On = (i("456e"), Object(Jt["a"])(Tn, qi, Hi, !1, null, "3ab6bbb8", null)),
            yn = On.exports,
            xn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-computing-container"
                }, [i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "circle-box flex-center"
                }, [i("circle-box")], 1), i("h1", [t._v(t._s(t.$t("leaderboard.computing_title")))]), i("p", [t._v(t._s(t.$t("leaderboard.computing_tip")))])])])
            },
            jn = [],
            Pn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28"
                    }
                }, [i("g", {
                    attrs: {
                        transform: "translate(2,2)"
                    }
                }, [i("circle", {
                    staticClass: "line",
                    attrs: {
                        cx: "10",
                        cy: "10",
                        r: t.R
                    }
                }), i("circle", {
                    ref: "stroke",
                    staticClass: "stroke",
                    attrs: {
                        cx: "10",
                        cy: "10",
                        r: t.R,
                        "stroke-dasharray": t.dasharray,
                        "stroke-dashoffset": t.offset
                    }
                })])])
            },
            Sn = [],
            kn = {
                name: "CircleBox",
                data: function() {
                    return {
                        R: 10
                    }
                },
                computed: {
                    C: function() {
                        return 2 * Math.PI * this.R
                    },
                    dasharray: function() {
                        return this.C + 2
                    },
                    offset: function() {
                        var t = 30;
                        return (100 - t) / 100 * this.C
                    }
                },
                mounted: function() {
                    this.$refs.stroke
                }
            },
            En = kn,
            Mn = (i("990a"), Object(Jt["a"])(En, Pn, Sn, !1, null, "82ebaff2", null)),
            zn = Mn.exports,
            Dn = {
                name: "Computing",
                components: {
                    CircleBox: zn
                }
            },
            Ln = Dn,
            An = (i("3c00"), Object(Jt["a"])(Ln, xn, jn, !1, null, "40d9f8a2", null)),
            Rn = An.exports,
            In = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-result-container"
                }, [i("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("leaderboard.result_title")))]), t.showWin ? i("div", {
                    staticClass: "win-box"
                }, [i("h1", [t._v(t._s(t.$t("leaderboard.result_congratulations", {
                    position: t.position
                })))]), i("h3", [t._v(t._s(t.$t("leaderboard.result_award")))])]) : i("div", {
                    staticClass: "no-win-box"
                }, [i("h1", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 0)))]), i("h2", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 1)))]), i("h3", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 2)))])]), this.records.length > 0 ? i("div", {
                    staticClass: "record-box"
                }, [i("div", {
                    staticClass: "leaderboard-list"
                }, t._l(t.showRecords, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), n !== t.showRecords.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), 0), t.singleRecord ? i("div", {
                    staticClass: "single leaderboard-item active"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "number"
                }, [t._v(t._s(t.singleRecord.position))]), i("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.singleRecord.displayName))]), i("div", {
                    staticClass: "score"
                }, [t._v(t._s(t.singleRecord.score))])])]) : t._e()]) : t._e(), i("button", {
                    staticClass: "flex-center"
                }, [i("div", {
                    staticClass: "icon"
                }), i("p", {
                    on: {
                        click: t.closeGSP
                    }
                }, [t._v(t._s(t.$t("leaderboard.result_hide")))])])])
            },
            $n = [],
            Nn = (i("466d"), i("c740"), Object(p["a"])("competitionModule")),
            Bn = Nn.mapState,
            Gn = {
                name: "Result",
                computed: Object(d["a"])(Object(d["a"])({}, Bn({
                    position: function(t) {
                        return t.playerData.position
                    },
                    award: function(t) {
                        return t.leaderboardData.award
                    },
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    spinsLeft: function(t) {
                        return t.leaderboardData.spinRemaining
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    }
                })), {}, {
                    showWin: function() {
                        var t = this.award.match(/\d+/) ? parseInt(this.award.match(/\d+/)[0]) : 0;
                        return t > 0
                    },
                    showRecords: function() {
                        return this.records.slice(0, 3)
                    },
                    singleRecord: function() {
                        var t = this.records.findIndex((function(t) {
                            return t.ifPlayer
                        }));
                        return t < 3 ? void 0 : this.records[t]
                    }
                }),
                filters: {
                    line: function(t, e) {
                        return t ? t.split("\n")[e] : ""
                    }
                },
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: this.spinsLeft,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: this.position,
                                tournamentStatus: "completed"
                            }
                        }), this.setPanelActive(!1)
                    }
                })
            },
            qn = Gn,
            Hn = (i("2677"), Object(Jt["a"])(qn, In, $n, !1, null, "4d862834", null)),
            Wn = Hn.exports,
            Fn = Object(p["a"])("competitionModule"),
            Un = Fn.mapState,
            Yn = {
                name: "Leaderboard",
                components: {
                    Join: Gi,
                    Play: yn,
                    Computing: Rn,
                    Result: Wn
                },
                computed: Object(d["a"])(Object(d["a"])({}, Un({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    tournamentStatus: function(t) {
                        return t.competitionData.status
                    }
                })), {}, {
                    currentComponent: function() {
                        return "PRE_ACTIVE" === this.tournamentStatus ? "join" : "ACTIVE" === this.tournamentStatus ? this.registered ? "play" : "join" : "COMPLETING" === this.tournamentStatus ? this.registered ? "computing" : "join" : ["COMPLETED", "CANCELLED"].includes(this.tournamentStatus) ? this.registered ? "result" : "join" : this.registered ? "" : "join"
                    }
                })
            },
            Jn = Yn,
            Vn = (i("b79b"), Object(Jt["a"])(Jn, At, Rt, !1, null, "64f8e064", null)),
            Zn = Vn.exports,
            Xn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "prize-draw-panel"
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [i("div", {
                    staticClass: "logo-background",
                    class: {
                        bigTextFix: t.ifBigTitle
                    }
                }, [t._v(t._s(t.$t("common.logo_prize_draw_text")))])]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            Kn = [],
            Qn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "pre-prizedraw-container"
                    }
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("prize-left")], 1), i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "main-content",
                    style: {
                        height: t.mainHeightCurrent
                    }
                }, [i("top-prizes", {
                    ref: "main",
                    on: {
                        setShowPrizes: t.setShowPrizes
                    }
                })], 1), i("div", {
                    staticClass: "fly-in-content",
                    class: {
                        "fly-in-content-show": t.showPrizes
                    },
                    style: {
                        zIndex: 1
                    }
                }, [i("all-prizes", {
                    ref: "prizes",
                    on: {
                        showPrizes: t.setShowPrizes
                    }
                })], 1)]), i("footer-info"), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            ts = [],
            es = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-left"
                }, [i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$t("prizedraw.join_prize_left")))]), i("p", {
                    staticClass: "count"
                }, [t._v(t._s(t.count))])])
            },
            is = [],
            ns = Object(p["a"])("competitionModule"),
            ss = ns.mapState,
            as = {
                name: "PrizeLeft",
                computed: Object(d["a"])({}, ss({
                    count: function(t) {
                        return t.prizePoolData.ticketsRemaining
                    }
                }))
            },
            os = as,
            rs = (i("7b35"), Object(Jt["a"])(os, es, is, !1, null, "633b7fa5", null)),
            cs = rs.exports,
            ls = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "top-prizes"
                }, [i("div", {
                    staticClass: "header"
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.join_top_prizes")))])]), i("div", {
                    staticClass: "top-prizes-wrapper"
                }, [i("top-prize-list", {
                    attrs: {
                        line: "gradient"
                    }
                })], 1), i("button", {
                    staticClass: "link-btn flex-center",
                    on: {
                        click: t.setShowAllPrizes
                    }
                }, [i("p", [t._v(t._s(t.$t("common.join_view_prizes")))]), i("div", {
                    staticClass: "arrow-right"
                })])])
            },
            us = [],
            ds = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list"
                }, t._l(t.showPrizes, (function(e, n) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "prize-item-content",
                        class: ["index-" + n]
                    }, [i("div", {
                        staticClass: "icon"
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "29",
                            height: "29"
                        }
                    })], 1), i("div", {
                        staticClass: "award"
                    }, [t._v(t._s(e.award))])]), i("div", {
                        class: ["line", t.line]
                    })])
                })), 0)
            },
            ps = [],
            ms = Object(p["a"])("competitionModule"),
            hs = ms.mapState,
            fs = {
                name: "top-prize-list",
                props: {
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, hs({
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), {}, {
                    showPrizes: function() {
                        var t = this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        }));
                        return t.slice(0, 3)
                    }
                })
            },
            _s = fs,
            vs = (i("3469"), Object(Jt["a"])(_s, ds, ps, !1, null, "aa516e2e", null)),
            bs = vs.exports,
            gs = {
                name: "TopPrizes",
                components: {
                    TopPrizeList: bs
                },
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    setShowAllPrizes: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "prizes"
                        })
                    }
                })
            },
            Cs = gs,
            ws = (i("1fe8"), Object(Jt["a"])(Cs, ls, us, !1, null, "3a8e655d", null)),
            Ts = ws.exports,
            Os = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-all-container"
                }, [i("div", {
                    staticClass: "header"
                }, [i("button", {
                    staticClass: "icon flex-center",
                    on: {
                        click: t.triggerBack
                    }
                }, [i("div", {
                    staticClass: "arrow"
                })]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.prizes")))])]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, [i("prize-list", {
                    attrs: {
                        showAll: !0,
                        line: "solid"
                    }
                })], 1), i("div", {
                    staticClass: "mask"
                })])
            },
            ys = [],
            xs = {
                name: "AllPrizes",
                components: {
                    PrizeList: Ue
                },
                methods: {
                    triggerBack: function() {
                        this.$emit("showPrizes", !1)
                    },
                    initializeScrollBar: function(t) {
                        new this.PerfectScrollbar(t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.initializeScrollBar(t.$refs.content)
                    }))
                }
            },
            js = xs,
            Ps = (i("07d8"), Object(Jt["a"])(js, Os, ys, !1, null, "90fda566", null)),
            Ss = Ps.exports,
            ks = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "footer-container"
                }, [i("join-button")], 1)
            },
            Es = [],
            Ms = Object(p["a"])("competitionModule"),
            zs = (Ms.mapState, {
                name: "FooterInfo",
                components: {
                    JoinButton: ki
                }
            }),
            Ds = zs,
            Ls = (i("1a7d"), Object(Jt["a"])(Ds, ks, Es, !1, null, "46ae53f4", null)),
            As = Ls.exports,
            Rs = Object(p["a"])("competitionModule"),
            Is = Rs.mapState,
            $s = {
                name: "Join",
                components: {
                    PrizeLeft: cs,
                    TopPrizes: Ts,
                    AllPrizes: Ss,
                    FooterInfo: As,
                    ContextMenu: gi
                },
                data: function() {
                    return {
                        showRules: !1,
                        showPrizes: !1,
                        mainHeightCurrent: "auto"
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })), Is({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })),
                watch: {
                    showPrizes: function(t) {
                        this.mainHeightCurrent = (t ? this.$refs.prizes.$el.offsetHeight : this.$refs.main.$el.offsetHeight) + "px"
                    }
                },
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    },
                    setShowPrizes: function(t) {
                        this.showPrizes = t
                    }
                })
            },
            Ns = $s,
            Bs = (i("c0b3"), Object(Jt["a"])(Ns, Qn, ts, !1, null, "68262a7c", null)),
            Gs = Bs.exports,
            qs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-draw-play-container"
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("prize-left")], 1), i("div", {
                    staticClass: "content-container"
                }, [i("div", {
                    staticClass: "rules-container-wrapper",
                    on: {
                        click: function(e) {
                            return t.openMenu("points-rules")
                        }
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$tc("prizedraw.play_rules_title", t.showRules.length)) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "rules-container"
                }, t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "rule-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.name))]), e.progress_total > 0 ? i("div", {
                        staticClass: "fraction"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))]) : t._e()]), e.progress_total > 0 ? i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })]) : t._e()])])
                })), 0)]), i("div", {
                    staticClass: "prizes-container-wrapper",
                    on: {
                        click: function(e) {
                            return t.openMenu("prizes")
                        }
                    }
                }, [i("div", {
                    staticClass: "title prizes-title"
                }, [t._v(" " + t._s(t.$t("common.prizes")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "prizes-container"
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showNoWin,
                        expression: "showNoWin"
                    }],
                    staticClass: "loserOuter floatBoxOuter"
                }, [i("div", {
                    staticClass: "floatBoxInner"
                }, [t._v(t._s(t.$t("prizedraw.award_empty_msg")))])]), i("div", {
                    ref: "content",
                    staticClass: "scroll-content"
                }, t._l(t.showPrizes, (function(e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prizes-item"
                    }, [i("div", {
                        staticClass: "prize-item-background"
                    }), i("div", {
                        staticClass: "prizes-item-content"
                    }, [i("div", {
                        staticClass: "icon"
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "18",
                            height: "18"
                        }
                    })], 1), i("div", {
                        staticClass: "award"
                    }, [t._v(t._s(e.award))]), i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(e.remain))])]), i("div", {
                        staticClass: "line"
                    })])
                })), 0)])])]), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            Hs = [],
            Ws = Object(p["a"])("competitionModule"),
            Fs = Ws.mapState,
            Us = {
                name: "Play",
                components: {
                    PrizeLeft: cs,
                    ContextMenu: gi
                },
                data: function() {
                    return {
                        showNoWin: void 0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Fs({
                    rules: function(t) {
                        return t.prizePoolData.ruleText
                    },
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    },
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    prizeAwards: function(t) {
                        return t.prizePoolData.award
                    },
                    displayLosingTicket: function(t) {
                        return t.prizePoolData.displayLosingTicket
                    }
                })), Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })), {}, {
                    showRules: function() {
                        return this.rules.slice(0, 3)
                    },
                    showPrizes: function() {
                        return this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        }))
                    },
                    awardCount: function() {
                        return this.prizeAwards.length
                    },
                    latestAward: function() {
                        return this.prizeAwards[this.prizeAwards.length - 1]
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    },
                    openMenu: function(t) {
                        this.setShowContextMenu({
                            show: !0,
                            content: t
                        })
                    },
                    initializeScrollBar: function(t) {
                        new this.PerfectScrollbar(t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    }
                }),
                watch: {
                    awardCount: function() {
                        if ("EMPTY" === this.latestAward.awardType.category && this.displayLosingTicket) {
                            this.showNoWin && window.clearTimeout(this.showNoWin);
                            var t = this;
                            this.showNoWin = window.setTimeout((function() {
                                t.showNoWin = void 0
                            }), 3e3)
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.initializeScrollBar(t.$refs.content)
                    }))
                }
            },
            Ys = Us,
            Js = (i("10d2"), Object(Jt["a"])(Ys, qs, Hs, !1, null, "ce7eb1c2", null)),
            Vs = Js.exports,
            Zs = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-draw-over-container"
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("prize-left")], 1), i("div", {
                    staticClass: "over-container"
                }, [i("div", {
                    staticClass: "content"
                }, [i("h1", [t._v(t._s(t.$t("prizedraw.over_title")))]), i("p", [t._v(t._s(t.$t("prizedraw.over_tips")))]), i("button", {
                    staticClass: "flex-center"
                }, [i("div", {
                    staticClass: "icon"
                }), i("div", {
                    on: {
                        click: t.closeGSP
                    }
                }, [t._v(t._s(t.$t("common.hide")))])])])]), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            Xs = [],
            Ks = Object(p["a"])("competitionModule"),
            Qs = Ks.mapState,
            ta = {
                name: "Over",
                components: {
                    PrizeLeft: cs,
                    ContextMenu: gi
                },
                computed: Object(d["a"])(Object(d["a"])({}, Qs({
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })), Object(p["d"])({
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive", "setShowContextMenu"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: 0,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: 0,
                                tournamentStatus: this.competitionStatus
                            }
                        }), this.setPanelActive(!1)
                    },
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    }
                })
            },
            ea = ta,
            ia = (i("b0a4"), Object(Jt["a"])(ea, Zs, Xs, !1, null, "d7635528", null)),
            na = ia.exports,
            sa = Object(p["a"])("competitionModule"),
            aa = sa.mapState,
            oa = {
                name: "PrizeDraw",
                components: {
                    Join: Gs,
                    Play: Vs,
                    Over: na
                },
                computed: Object(d["a"])(Object(d["a"])({}, aa({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })), {}, {
                    ifBigTitle: function() {
                        return this._i18n.t("common.logo_prize_draw_text").length > 12
                    },
                    currentComponent: function() {
                        return this.registered ? "PRE_ACTIVE" === this.competitionStatus ? "join" : ["COMPLETED", "CANCELLED"].includes(this.competitionStatus) ? "over" : "play" : "join"
                    }
                })
            },
            ra = oa,
            ca = (i("506b"), Object(Jt["a"])(ra, Xn, Kn, !1, null, "0f54ba72", null)),
            la = ca.exports,
            ua = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "quest-panel"
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [t._v(" " + t._s(t.$t("common.logo_quest_text")) + " "), i("div", {
                    staticClass: "logo-background"
                }, [t._v(t._s(t.$t("common.logo_quest_text")))])]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            da = [],
            pa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "quest-join-play-container"
                }, [i("div", {
                    staticClass: "upper-content"
                }, [t.termsText || t.termsLink ? i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": this.showConditions
                    },
                    on: {
                        click: t.setShowConditions
                    }
                })]) : t._e(), t.panelActive ? i("timer-box") : t._e()], 1), t.questRegistered ? t._e() : i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "main-content",
                    style: {
                        height: t.mainHeightCurrent
                    }
                }, [i("div", {
                    ref: "main",
                    staticClass: "main-box"
                }, [i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value"
                }, [t._v(t._s(t.questGoal))]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("quest.join_play_goal")))])]), i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value"
                }, [t._v(t._s(t.questReward))]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("quest.join_play_reward")))])]), t.questMax ? [i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value"
                }, [t._v(t._s(t.questMax))]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("quest.join_play_max_reward")))])])] : t._e()], 2)])]), t.questRegistered ? i("div", {
                    staticClass: "generalContainer"
                }, [i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionTitle"
                }, [t._v(t._s(t.$t("quest.join_play_goal")))]), i("div", {
                    staticClass: "sectionBoxed"
                }, [i("div", {
                    staticClass: "sectionValue"
                }, [t._v(t._s(t.questGoal))]), t.questProgressData ? i("div", {
                    staticClass: "progressBar"
                }, [i("div", {
                    staticClass: "icon goalsicon"
                }), i("div", {
                    staticClass: "rule-box"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("quest.join_play_progress")))]), i("div", {
                    staticClass: "progress"
                }, [t._v(" " + t._s(t.questProgressData.current) + "/" + t._s(t.questProgressData.total) + " ")])]), i("div", {
                    staticClass: "bar"
                }, [i("div", {
                    staticClass: "highlight",
                    style: {
                        width: t.questProgressData.progress
                    }
                })])])]) : t._e()])]), i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionTitle"
                }, [t._v(t._s(t.$t("quest.join_play_reward")))]), i("div", {
                    staticClass: "sectionBoxed"
                }, [i("div", {
                    staticClass: "sectionValue"
                }, [t._v(t._s(t.questReward))])])]), t.questMax ? [i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionTitle"
                }, [t._v(t._s(t.$t("quest.join_play_max_reward")))]), i("div", {
                    staticClass: "sectionBoxed"
                }, [t.questMaxData ? i("div", {
                    staticClass: "progressBar"
                }, [i("div", {
                    staticClass: "icon completedicon"
                }), i("div", {
                    staticClass: "rule-box"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("quest.join_play_progress")))]), i("div", {
                    staticClass: "progress"
                }, [t._v(t._s(t.questMaxData.current) + "/" + t._s(t.questMaxData.max))])]), i("div", {
                    staticClass: "bar"
                }, [i("div", {
                    staticClass: "highlight",
                    style: {
                        width: t.questMaxData.progress
                    }
                })])])]) : t._e()])]), t.questMaxData.current === t.questMaxData.max ? i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionBoxed"
                }, [i("div", {
                    staticClass: "endMessage sectionValue"
                }, [t._v(t._s(t.$t("quest.timer_finished")))])])]) : t._e()] : t._e()], 2) : t._e(), i("div", {
                    staticClass: "fly-in-content",
                    class: {
                        "fly-in-content-show": t.showConditions
                    },
                    style: {
                        zIndex: 2
                    }
                }, [i("conditions", {
                    ref: "terms",
                    on: {
                        showConditions: t.setHideConditions
                    }
                })], 1), i("div", {
                    staticClass: "footer"
                }, [t.showJoinButton ? i("join-button") : t._e(), t.termsText || t.termsLink ? i("div", [t.showConditions ? i("button", {
                    staticClass: "terms-btn flex-center",
                    on: {
                        click: t.setHideConditions
                    }
                }, [i("p", [t._v(t._s(t.$t("quest.hide_terms_conditions")))]), i("div", {
                    staticClass: "arrow-right"
                })]) : i("button", {
                    staticClass: "terms-btn flex-center",
                    on: {
                        click: t.setShowConditions
                    }
                }, [i("p", [t._v(t._s(t.$t("quest.view_terms_conditions")))]), i("div", {
                    staticClass: "arrow-right"
                })])]) : t._e()], 1)])
            },
            ma = [],
            ha = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "conditions-container"
                }, [i("div", {
                    staticClass: "header"
                }, [i("button", {
                    staticClass: "icon flex-center",
                    on: {
                        click: t.triggerBack
                    }
                }, [i("div", {
                    staticClass: "arrow"
                })]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.terms_conditions")))])]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, [t._l(t.conditionsList, (function(e, n) {
                    return i("p", {
                        key: n
                    }, [t._v(" " + t._s(e) + " ")])
                })), t.termsLink ? i("a", {
                    attrs: {
                        href: t.termsLink,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("common.terms_conditions")))]) : t._e()], 2), i("div", {
                    staticClass: "mask"
                })])
            },
            fa = [],
            _a = Object(p["a"])("competitionModule"),
            va = _a.mapState,
            ba = _a.mapGetters,
            ga = {
                name: "Conditions",
                computed: Object(d["a"])(Object(d["a"])({}, va({
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    }
                })), ba(["conditionsList"])),
                methods: {
                    triggerBack: function() {
                        this.$emit("showConditions", !1)
                    },
                    initializeScrollBar: function(t) {
                        new this.PerfectScrollbar(t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.initializeScrollBar(t.$refs.content)
                    }))
                }
            },
            Ca = ga,
            wa = (i("460f"), Object(Jt["a"])(Ca, ha, fa, !1, null, "431bc37a", null)),
            Ta = wa.exports,
            Oa = Object(p["a"])("competitionModule"),
            ya = Oa.mapState,
            xa = Oa.mapGetters,
            ja = {
                name: "JoinPlay",
                components: {
                    TimerBox: Zt,
                    Conditions: Ta,
                    JoinButton: ki
                },
                data: function() {
                    return {
                        showConditions: !1,
                        mainHeightCurrent: "auto"
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    }
                })), ya({
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    },
                    termsText: function(t) {
                        return t.competitionData.termsText
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    }
                })), xa(["questGoal", "questReward", "questProgress", "questProgressData", "questMaxData", "questMax", "questMaxRewards", "questRegistered", "showJoinButton"])),
                watch: {
                    showConditions: function(t) {}
                },
                methods: {
                    setShowConditions: function() {
                        this.termsText ? this.showConditions = !this.showConditions : this.termsLink && window.open(this.termsLink, "_blank"), this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.ItemClicked",
                            data: {
                                name: "ItemBeenClicked",
                                context: "cashTournament",
                                contextId: this.competitionToken,
                                itemName: "termsCondition"
                            }
                        })
                    },
                    setHideConditions: function() {
                        this.showConditions = !1
                    }
                }
            },
            Pa = ja,
            Sa = (i("fa82"), Object(Jt["a"])(Pa, pa, ma, !1, null, "f7892740", null)),
            ka = Sa.exports,
            Ea = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "quest-over-container"
                }, [i("div", {
                    staticClass: "timer-box"
                }, [i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$t("quest.timer_end")))]), i("p", {
                    staticClass: "time"
                }, [t._v("00:00:00")])]), i("div", {
                    staticClass: "content flex-center"
                }, [i("p", [t._v(t._s(t.$t("quest.over_title")))]), i("h1", [t._v(t._s(t.$t("quest.over_thanks")))])]), i("button", {
                    staticClass: "flex-center"
                }, [i("div", {
                    staticClass: "icon"
                }), i("p", {
                    on: {
                        click: t.closeGSP
                    }
                }, [t._v(t._s(t.$t("common.hide")))])])])
            },
            Ma = [],
            za = Object(p["a"])("competitionModule"),
            Da = za.mapState,
            La = {
                name: "Over",
                computed: Object(d["a"])({}, Da({
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: 0,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: 0,
                                tournamentStatus: this.competitionStatus
                            }
                        }), this.setPanelActive(!1)
                    }
                })
            },
            Aa = La,
            Ra = (i("f679"), Object(Jt["a"])(Aa, Ea, Ma, !1, null, "e1acaa80", null)),
            Ia = Ra.exports,
            $a = Object(p["a"])("competitionModule"),
            Na = $a.mapState,
            Ba = {
                name: "Quest",
                components: {
                    JoinPlay: ka,
                    Over: Ia
                },
                computed: Object(d["a"])(Object(d["a"])({}, Na({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })), {}, {
                    currentComponent: function() {
                        return this.registered && ["COMPLETED", "CANCELLED"].includes(this.competitionStatus) ? "over" : "join-play"
                    }
                })
            },
            Ga = Ba,
            qa = (i("8844"), Object(Jt["a"])(Ga, ua, da, !1, null, "6a42fece", null)),
            Ha = qa.exports,
            Wa = Object(p["a"])("competitionModule"),
            Fa = Wa.mapState,
            Ua = {
                name: "LeftPanel",
                components: {
                    Leaderboard: Zn,
                    PrizeDraw: la,
                    Quest: Ha
                },
                computed: Object(d["a"])(Object(d["a"])({}, Fa({
                    competitionType: function(t) {
                        return t.competitionData.type
                    }
                })), {}, {
                    currentComponent: function() {
                        var t = "";
                        return "COMPETITION" === this.competitionType && (t = "leaderboard"), "PRIZE_DRAW" === this.competitionType && (t = "prize-draw"), "PROMOTION" === this.competitionType && (t = "quest"), t
                    }
                })
            },
            Ya = Ua,
            Ja = (i("21ac"), Object(Jt["a"])(Ya, Dt, Lt, !1, null, "9e84662e", null)),
            Va = Ja.exports,
            Za = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "side-panel-container"
                }, [i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            Xa = [],
            Ka = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "leaderboard-panel"
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [t._v(" " + t._s(t.$t("common.logo_tournament_text")) + " "), i("div", {
                    staticClass: "logo-background"
                }, [t._v(t._s(t.$t("common.logo_tournament_text")))])]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            Qa = [],
            to = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "pre-tournament-container"
                    }
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("timer-box")], 1), i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "main-content"
                }, [i("top-prizes", {
                    ref: "main"
                })], 1)]), i("footer-info"), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            eo = [],
            io = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "timer-box",
                    class: [t.skin]
                }, [i("div", {
                    staticClass: "animation-box",
                    class: {
                        "move-down": t.showTextAnimation
                    }
                }, [i("p", {
                    staticClass: "description",
                    class: {
                        "small-text": t.smallTextLocale
                    }
                }, [t._v(t._s(t.description))]), i("p", {
                    staticClass: "time"
                }, [t._v(t._s(t.time))])])])
            },
            no = [],
            so = 5e3,
            ao = 1e3,
            oo = Object(p["a"])("competitionModule"),
            ro = oo.mapState,
            co = (oo.mapGetters, {
                name: "TimerBox",
                data: function() {
                    return {
                        skin: "timer-box-default",
                        description: "",
                        time: "",
                        showTextAnimation: !1,
                        readyToSetStartTimer: !1,
                        readyToSetEndTimer: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, ro({
                    competitionType: function(t) {
                        return t.competitionData.type
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    },
                    timeUntilStart: function(t) {
                        return t.competitionData.timeUntilStart
                    },
                    timeUntilEnd: function(t) {
                        return t.competitionData.timeUntilEnd
                    }
                })), {}, {
                    smallTextLocale: function() {
                        return ("sv" === this._i18n.locale || "el" === this._i18n.locale || "es" === this._i18n.locale || "es-MX" === this._i18n.locale || "fr" === this._i18n.locale || "fr-CA" === this._i18n.locale || "fr_BE" === this._i18n.locale || "ru" === this._i18n.locale || "bg" === this._i18n.locale || "nl" === this._i18n.locale || "nl_BE" === this._i18n.locale) && this.readyToSetEndTimer
                    }
                }),
                watch: {
                    timeUntilStart: function(t, e) {
                        this.readyToSetStartTimer && this.setStartTimer(t)
                    },
                    timeUntilEnd: function(t) {
                        this.readyToSetEndTimer && this.setEndTimer(t)
                    }
                },
                methods: {
                    initWithWhichTimer: function() {
                        ["COMPLETING", "COMPLETED", "CANCELLED", "PRE_ACTIVE"].includes(this.competitionStatus) ? this.readyToSetStartTimer = !0 : "ACTIVE" === this.competitionStatus && (this.readyToSetEndTimer = !0)
                    },
                    getTimerText: function(t) {
                        var e = "";
                        "COMPETITION" === this.competitionType && (e = "leaderboard."), "PROMOTION" === this.competitionType && (e = "quest.");
                        var i = this.$t(e + t),
                            n = i.split("\n");
                        return n
                    },
                    setStartTimer: function(t) {
                        if ("undefined" !== typeof t) {
                            var e = this.getTimerText("timer_ready"),
                                i = Object(Gt["a"])(e, 2),
                                n = i[0],
                                s = i[1],
                                a = this.getTimerText("timer_start"),
                                o = Object(Gt["a"])(a, 1),
                                r = o[0];
                            this.description = t < ao ? n : r, this.time = t < ao ? s : M(t), this.skin = t <= so ? t < ao ? "timer-box-filled" : "timer-box-highlight" : "timer-box-default", t < ao && this.startReadyAnimation()
                        }
                    },
                    startReadyAnimation: function() {
                        var t = this;
                        this.readyToSetStartTimer = !1;
                        var e = 0,
                            i = setInterval((function() {
                                t.skin = "timer-box-highlight" === t.skin ? "timer-box-filled" : "timer-box-highlight", 5 === ++e && (clearInterval(i), t.startEndAnimation())
                            }), 400)
                    },
                    startEndAnimation: function() {
                        var t = this;
                        setTimeout((function() {
                            t.skin = "timer-box-default", t.showTextAnimation = !0, setTimeout((function() {
                                t.showTextAnimation = !1, t.readyToSetEndTimer = !0
                            }), 400)
                        }), 400)
                    },
                    setEndTimer: function(t) {
                        if ("undefined" !== typeof t) {
                            var e = this.getTimerText("timer_finished"),
                                i = Object(Gt["a"])(e, 2),
                                n = i[0],
                                s = i[1],
                                a = this.getTimerText("timer_end"),
                                o = Object(Gt["a"])(a, 1),
                                r = o[0];
                            this.description = t < ao ? n : r, this.time = t < ao ? s : M(t), this.skin = t <= so ? t < ao ? "timer-box-filled" : "timer-box-highlight" : "timer-box-default", t < ao && this.startFinishAnimation()
                        }
                    },
                    startFinishAnimation: function() {
                        var t = this;
                        this.readyToSetEndTimer = !1;
                        var e = 0,
                            i = setInterval((function() {
                                t.skin = "timer-box-highlight" === t.skin ? "timer-box-filled" : "timer-box-highlight", 5 === ++e && clearInterval(i)
                            }), 400)
                    }
                },
                mounted: function() {
                    this.initWithWhichTimer()
                }
            }),
            lo = co,
            uo = (i("4bb1"), Object(Jt["a"])(lo, io, no, !1, null, "2f0b284c", null)),
            po = uo.exports,
            mo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "top-prizes"
                }, [i("div", {
                    staticClass: "header"
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.join_top_prizes")))])]), i("div", {
                    staticClass: "prize-list-wrapper"
                }, [i("top-prize-list", {
                    attrs: {
                        line: "gradient"
                    }
                })], 1), i("button", {
                    staticClass: "link-btn flex-center",
                    on: {
                        click: t.setShowAllPrizes
                    }
                }, [i("p", [t._v(t._s(t.$t("common.join_view_prizes")))]), i("div", {
                    staticClass: "arrow-right"
                })])])
            },
            ho = [],
            fo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list"
                }, t._l(t.prizes, (function(e, n) {
                    return i("div", {
                        key: e.rank,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "content",
                        class: ["top-" + e.rank, "index-" + n]
                    }, [i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(t._f("filterTop3")(e.rank)))]), i("div", {
                        staticClass: "right",
                        class: ["position-" + n]
                    }, [t._v(t._s(e.award))])]), n !== t.prizes.length - 1 ? i("div", {
                        class: ["line", t.line]
                    }) : t._e()])
                })), 0)
            },
            _o = [],
            vo = Object(p["a"])("competitionModule"),
            bo = vo.mapState,
            go = {
                name: "TopPrizeList",
                props: {
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, bo({
                    leaderboardPrizes: function(t) {
                        return t.leaderboardData.levels
                    }
                })), {}, {
                    prizes: function() {
                        return this.leaderboardPrizes.slice(0, 3)
                    }
                }),
                filters: {
                    filterTop3: function(t) {
                        return ["1", "2", "3"].includes(t) ? "" : t
                    }
                }
            },
            Co = go,
            wo = (i("f4c7"), Object(Jt["a"])(Co, fo, _o, !1, null, "216d6210", null)),
            To = wo.exports,
            Oo = {
                name: "TopPrizes",
                components: {
                    TopPrizeList: To
                },
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    setShowAllPrizes: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "prizes"
                        })
                    }
                })
            },
            yo = Oo,
            xo = (i("8d45"), Object(Jt["a"])(yo, mo, ho, !1, null, "08981d36", null)),
            jo = xo.exports,
            Po = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "footer-container"
                }, [i("div", {
                    staticClass: "play-tips flex-center"
                }, [i("div", {
                    staticClass: "box"
                }, [i("p", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.lbSpinLimitation))]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$tc("leaderboard.join_spins", t.lbSpinLimitation)))])]), i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box"
                }, [i("p", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.timeDuration))]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$tc("leaderboard.join_minutes", t.timeDuration)))])])]), i("join-button")], 1)
            },
            So = [],
            ko = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "join-button"
                }, [i("button", {
                    staticClass: "join",
                    class: {
                        "smallest-text": t.smallestTextLocale, "smaller-text": t.smallerTextLocale
                    },
                    attrs: {
                        disabled: t.joinButtonDisabled
                    },
                    on: {
                        click: t.joinTriggered
                    }
                }, [t._v(" " + t._s(t.$t(t.joinButtonLocalKey)) + " ")])])
            },
            Eo = [],
            Mo = Object(p["a"])("competitionModule"),
            zo = Mo.mapGetters,
            Do = {
                name: "JoinButton",
                computed: Object(d["a"])(Object(d["a"])({}, zo(["joinButtonLocalKey", "joinButtonDisabled"])), {}, {
                    smallestTextLocale: function() {
                        return "fr" === this._i18n.locale || "fr-CA" === this._i18n.locale || "fr_BE" === this._i18n.locale || "ru" === this._i18n.locale
                    },
                    smallerTextLocale: function() {
                        return "cs" === this._i18n.locale || "de" === this._i18n.locale || "de_BE" === this._i18n.locale || "pl" === this._i18n.locale
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    joinTriggered: function() {
                        this.setShowPopup({
                            show: !0,
                            content: "confirm"
                        })
                    }
                })
            },
            Lo = Do,
            Ao = (i("8cdc"), Object(Jt["a"])(Lo, ko, Eo, !1, null, "9e4c0bd2", null)),
            Ro = Ao.exports,
            Io = Object(p["a"])("competitionModule"),
            $o = Io.mapGetters,
            No = {
                name: "FooterInfo",
                components: {
                    JoinButton: Ro
                },
                computed: Object(d["a"])({}, $o(["lbSpinLimitation", "timeDuration"]))
            },
            Bo = No,
            Go = (i("3101"), Object(Jt["a"])(Bo, Po, So, !1, null, "30b3b4a8", null)),
            qo = Go.exports,
            Ho = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "menu-content"
                }, [i("div", {
                    staticClass: "upper-content"
                }), i("keep-alive", [i(t.content, {
                    tag: "component",
                    staticClass: "content"
                })], 1)], 1)
            },
            Wo = [],
            Fo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "menu-container"
                }, [i("div", {
                    staticClass: "menu-list"
                }, ["ACTIVE" === t.tournamentState && "COMPETITION" === t.tournamentType ? i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("leaderboard")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]) : t._e(), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("prizes")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.prizes")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("points-rules")
                        }
                    }
                }, [t._v(" " + t._s("COMPETITION" === t.tournamentType ? t.$t("leaderboard.play_points_rules") : t.$tc("prizedraw.play_rules_title", t.showRules.length)) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("rules")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.join_tournament_rules")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })])])])
            },
            Uo = [],
            Yo = Object(p["a"])("competitionModule"),
            Jo = Yo.mapState,
            Vo = {
                name: "context-menu",
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })), Jo({
                    tournamentState: function(t) {
                        return t.competitionData.status
                    },
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    rules: function(t) {
                        return t.prizePoolData.ruleText
                    }
                })), {}, {
                    showRules: function() {
                        return L(this.rules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerMenuOption: function(t) {
                        this.setShowContextMenu({
                            show: !0,
                            content: t
                        })
                    }
                })
            },
            Zo = Vo,
            Xo = (i("b650"), Object(Jt["a"])(Zo, Fo, Uo, !1, null, "3ba4ad78", null)),
            Ko = Xo.exports,
            Qo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " ")]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), t.records.length > 0 ? i("div", {
                    staticClass: "leaderboard-list"
                }, [t._l(t.records, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), n !== t.records.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 2) : t._e()])
            },
            tr = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            er = Object(p["a"])("competitionModule"),
            ir = er.mapState,
            nr = {
                name: "leaderboard-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, ir({
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "leaderboard" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            sr = nr,
            ar = (i("faf9"), Object(Jt["a"])(sr, Qo, tr, !1, null, "63cdd02c", null)),
            or = ar.exports,
            rr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prizes-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.prizes")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "content"
                }, [i(t.componentToLoad, {
                    tag: "component",
                    attrs: {
                        showAll: !0,
                        line: "gradient"
                    }
                }), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 1)])
            },
            cr = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            lr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list-wrapper"
                }, t._l(t.prizes, (function(e) {
                    return i("div", {
                        key: e.rank,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "content",
                        class: ["top-" + e.rank]
                    }, [i("div", {
                        staticClass: "left",
                        class: {
                            "small-text": t.smallTextLocale
                        }
                    }, ["1" !== e.rank && "2" !== e.rank && "3" !== e.rank ? i("div", [t._v(" " + t._s(e.rank) + " ")]) : t._e()]), i("div", {
                        staticClass: "right",
                        class: {
                            bold: "1" === e.rank || "2" === e.rank || "3" === e.rank, "small-text": t.smallTextLocale
                        }
                    }, [t._v(" " + t._s(e.award) + " ")])]), i("div", {
                        class: ["line", t.line]
                    })])
                })), 0)
            },
            ur = [],
            dr = Object(p["a"])("competitionModule"),
            pr = dr.mapState,
            mr = {
                name: "PrizeList",
                props: {
                    showAll: {
                        type: Boolean,
                        required: !0
                    },
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, pr({
                    leaderboardPrizes: function(t) {
                        return t.leaderboardData.levels
                    }
                })), {}, {
                    prizes: function() {
                        return this.showAll ? this.leaderboardPrizes : this.leaderboardPrizes.slice(0, 3)
                    },
                    smallTextLocale: function() {
                        return "fi" === this._i18n.locale
                    }
                })
            },
            hr = mr,
            fr = (i("fae7"), Object(Jt["a"])(hr, lr, ur, !1, null, "0969fac0", null)),
            _r = fr.exports,
            vr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list"
                }, t._l(t.showPrizes, (function(e, n) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prize-item",
                        class: {
                            smallerText: t.showAll
                        }
                    }, [i("div", {
                        staticClass: "content",
                        class: {
                            bold: n < 3, "small-text": t.smallTextLocale
                        }
                    }, [i("div", {
                        staticClass: "icon"
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "18",
                            height: "18"
                        }
                    })], 1), i("div", {
                        staticClass: "award"
                    }, [t._v(t._s(e.award))]), i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(e.remain))])]), i("div", {
                        class: ["line", t.line]
                    })])
                })), 0)
            },
            br = [],
            gr = Object(p["a"])("competitionModule"),
            Cr = gr.mapState,
            wr = {
                name: "PrizeList",
                props: {
                    showAll: {
                        type: Boolean,
                        required: !0
                    },
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, Cr({
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), {}, {
                    showPrizes: function() {
                        return this.showAll ? this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        })) : this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        })).slice(0, 3)
                    },
                    smallTextLocale: function() {
                        return "fi" === this._i18n.locale
                    }
                }),
                methods: {
                    awardText: function(t) {
                        return getAward(t)
                    },
                    remainText: function(t) {
                        return t <= 0 ? "All Gone!" : "x ".concat(t, " Ticket").concat(t > 1 ? "s" : "", " Left")
                    }
                }
            },
            Tr = wr,
            Or = (i("253c"), Object(Jt["a"])(Tr, vr, br, !1, null, "04bb313c", null)),
            yr = Or.exports,
            xr = Object(p["a"])("competitionModule"),
            jr = xr.mapState,
            Pr = {
                name: "prizes-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                components: {
                    PrizeListCompetition: _r,
                    PrizeListPrizeDraw: yr
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, jr({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })), {}, {
                    componentToLoad: function() {
                        return "COMPETITION" === this.tournamentType ? "prize-list-competition" : "prize-list-prize-draw"
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "prizes" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            Sr = Pr,
            kr = (i("d7d8"), Object(Jt["a"])(Sr, rr, cr, !1, null, "9e21d568", null)),
            Er = kr.exports,
            Mr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "points-rules-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("leaderboard.play_points_rules")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "points-rules-list"
                }, [t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name
                    }, [i("div", {
                        staticClass: "points-rule-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text",
                        class: {
                            "multiplier-rule": t.isMultiplierRule(e)
                        }
                    }, [i("div", {
                        staticClass: "name",
                        class: {
                            "multiplier-rule-name": t.isMultiplierRule(e)
                        }
                    }, [t._v(" " + t._s(e.name) + " ")]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "point"
                    }, [t._v(t._s(e.points))])]), !t.isMultiplierRule(e) && e.progress_total > 0 ? i("div", {
                        staticClass: "progress"
                    }, [i("div", {
                        staticClass: "text"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))]), i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })])]) : t._e()])]), n !== t.showRules.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 2)])
            },
            zr = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            Dr = Object(p["a"])("competitionModule"),
            Lr = Dr.mapState,
            Ar = {
                name: "points-rules-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Lr({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    LBrules: function(t) {
                        return t.leaderboardData.ruleText
                    },
                    PDrules: function(t) {
                        return t.prizePoolData.ruleText
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })), {}, {
                    showRules: function() {
                        return "COMPETITION" === this.tournamentType ? L(this.LBrules, "points", "desc").slice(0, 3) : L(this.PDrules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "points-rules" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            Rr = Ar,
            Ir = (i("c104"), Object(Jt["a"])(Rr, Mr, zr, !1, null, "0ebbc3d0", null)),
            $r = Ir.exports,
            Nr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "rules-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("leaderboard.join_tournament_rules")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, ["COMPETITION" === t.tournamentType ? i("div", [i("p", [t._v(t._s(t.$t("leaderboard.join_rules_1", {
                    startTime: t.startTime,
                    stopTime: t.stopTime
                })))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_2")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_3")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_4")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_5")))]), i("ul", t._l(t.lbRuleText, (function(e) {
                    return i("li", {
                        key: e.name
                    }, [i("b", [t._v(t._s(e.name) + " " + t._s(t.isMultiplierRule(e) ? "" : "(" + e.points + ")"))]), i("br"), i("p", [t._v(t._s(e.condition_text))])])
                })), 0), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_6")))]), i("ul", t._l(t.lbLevels, (function(e) {
                    return i("li", {
                        key: e.rank
                    }, [i("b", [t._v(t._s(e.rank) + " : ")]), t._v(t._s(e.award) + " ")])
                })), 0)]) : t._e(), "PRIZE_DRAW" === t.tournamentType ? i("div", [i("p", [t._v(t._s(t.$t("prizedraw.join_rules_1", {
                    startTime: t.startTime
                })))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_2")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_3")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_4")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_5")))]), i("ul", t._l(t.pdRuleText, (function(e) {
                    return i("li", {
                        key: e.name
                    }, [i("b", [t._v(t._s(e.name))]), i("br"), t._v(" " + t._s(e.condition_text) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_6")))]), i("ul", t._l(t.showPdPrizeList, (function(e) {
                    return i("li", {
                        key: e.id
                    }, [i("b", [t._v(t._s(e.award) + " : ")]), t._v(t._s(e.remain) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_7")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_8")))])]) : t._e(), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "mask"
                })])
            },
            Br = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            Gr = Object(p["a"])("competitionModule"),
            qr = Gr.mapState,
            Hr = {
                name: "rules-content",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, qr({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    startTime: function(t) {
                        return t.competitionData.startTime
                    },
                    stopTime: function(t) {
                        return t.competitionData.stopTime
                    },
                    lbRuleText: function(t) {
                        return t.leaderboardData.ruleText
                    },
                    lbLevels: function(t) {
                        return t.leaderboardData.levels
                    },
                    pdRuleText: function(t) {
                        return t.prizePoolData.ruleText
                    },
                    pdPrizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    }
                })), {}, {
                    showPdPrizeList: function() {
                        return this.pdPrizeList.map((function(t) {
                            return {
                                id: t.id,
                                award: t.award,
                                remain: t.remain.replace("x", "")
                            }
                        }))
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerBack: function() {
                        this.setShowContextMenu({
                            show: !0,
                            content: "ContextMenu"
                        })
                    },
                    initializeScrollBar: function(t) {
                        new li["a"](t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                }),
                mounted: function() {
                    this.initializeScrollBar(this.$refs.content), setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "rules" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            Wr = Hr,
            Fr = (i("6df0"), Object(Jt["a"])(Wr, Nr, Br, !1, null, "00cd12f8", null)),
            Ur = Fr.exports,
            Yr = {
                name: "context-menu",
                components: {
                    TimerBox: po,
                    ContextMenu: Ko,
                    Leaderboard: or,
                    Prizes: Er,
                    PointsRules: $r,
                    Rules: Ur
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    content: function(t) {
                        return t.panelData.contextMenu.content
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    hideMenu: function() {
                        this.setShowContextMenu({
                            show: !1,
                            content: ""
                        })
                    }
                })
            },
            Jr = Yr,
            Vr = (i("082a"), Object(Jt["a"])(Jr, Ho, Wo, !1, null, "c1fa7232", null)),
            Zr = Vr.exports,
            Xr = Object(p["a"])("competitionModule"),
            Kr = Xr.mapState,
            Qr = {
                name: "Join",
                components: {
                    TimerBox: po,
                    TopPrizes: jo,
                    FooterInfo: qo,
                    ContextMenu: Zr
                },
                computed: Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })), Kr({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    }
                })
            },
            tc = Qr,
            ec = (i("c346"), Object(Jt["a"])(tc, to, eo, !1, null, "5554f4a0", null)),
            ic = ec.exports,
            nc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "leaderboard-play-container"
                    }
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("timer-box")], 1), i("main-content"), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            sc = [],
            ac = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "content-container"
                }, [i("points-rules", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.showInProgressContent,
                        expression: "!showInProgressContent"
                    }],
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("points-rules")
                        }
                    }
                }), i("leaderboard-content", {
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("leaderboard")
                        }
                    }
                }), i("remain-spins"), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showInProgressContent,
                        expression: "showInProgressContent"
                    }],
                    staticClass: "progress-content"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_in_progress")) + " ")])], 1)
            },
            oc = [],
            rc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "points-rules-container",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("points-rules")
                        }
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_points_rules")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "points-rules-list"
                }, t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "points-rule-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text",
                        class: {
                            "multiplier-rule": t.isMultiplierRule(e)
                        }
                    }, [i("div", {
                        staticClass: "name",
                        class: {
                            "multiplier-rule-name": t.isMultiplierRule(e)
                        }
                    }, [t._v(" " + t._s(e.name) + " ")]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "point"
                    }, [t._v(t._s(e.points))])]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "progress"
                    }, [i("div", {
                        staticClass: "text"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))]), i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })])])])])
                })), 0)])
            },
            cc = [],
            lc = Object(p["a"])("competitionModule"),
            uc = lc.mapState,
            dc = {
                name: "PointsRules",
                computed: Object(d["a"])(Object(d["a"])({}, uc({
                    rules: function(t) {
                        return t.leaderboardData.ruleText
                    }
                })), {}, {
                    showRules: function() {
                        return L(this.rules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerMenuOption: function(t) {
                        this.setShowContextMenu({
                            show: !0,
                            content: t
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                })
            },
            pc = dc,
            mc = (i("2dad"), Object(Jt["a"])(pc, rc, cc, !1, null, "4b5db1d0", null)),
            hc = mc.exports,
            fc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-content-container",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("leaderboard")
                        }
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "leaderboard-list"
                }, t._l(t.showRecords, (function(e) {
                    return i("div", {
                        key: e.displayName,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), i("div", {
                        staticClass: "line"
                    })])
                })), 0)])
            },
            _c = [],
            vc = Object(p["a"])("competitionModule"),
            bc = vc.mapState,
            gc = {
                name: "LeaderboardContent",
                computed: Object(d["a"])(Object(d["a"])({}, bc({
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    }
                })), {}, {
                    showRecords: function() {
                        var t = this.records.findIndex((function(t) {
                            return t.ifPlayer
                        }));
                        if (t < 5) return this.records.slice(0, 5);
                        var e = this.records.slice(0, 3);
                        return e.concat([this.records[t - 1], this.records[t]])
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    triggerMenuOption: function(t) {
                        this.setShowContextMenu({
                            show: !0,
                            content: t
                        })
                    }
                })
            },
            Cc = gc,
            wc = (i("1552"), Object(Jt["a"])(Cc, fc, _c, !1, null, "f782ece4", null)),
            Tc = wc.exports,
            Oc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "remain-spins"
                }, [i("div", {
                    staticClass: "content flex-center"
                }, [i("div", {
                    staticClass: "rotate"
                }), i("p", {
                    staticClass: "text"
                }, [t._v(t._s(t.remainSpins))])])])
            },
            yc = [],
            xc = Object(p["a"])("competitionModule"),
            jc = xc.mapState,
            Pc = {
                name: "RemainSpins",
                computed: Object(d["a"])({}, jc({
                    remainSpins: function(t) {
                        return t.leaderboardData.spinRemaining
                    }
                }))
            },
            Sc = Pc,
            kc = (i("1e78"), Object(Jt["a"])(Sc, Oc, yc, !1, null, "122ca075", null)),
            Ec = kc.exports,
            Mc = Object(p["a"])("competitionModule"),
            zc = Mc.mapState,
            Dc = Mc.mapMutations,
            Lc = {
                name: "MainContent",
                components: {
                    PointsRules: hc,
                    LeaderboardContent: Tc,
                    RemainSpins: Ec
                },
                computed: Object(d["a"])({}, zc({
                    showInProgressContent: function(t) {
                        return t.leaderboardData.showInProgress
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Dc(["setShowInProgressContent"])), {}, {
                    showInProgressOnPanel: function() {
                        this.setShowInProgressContent(!0)
                    }
                }),
                created: function() {
                    this.myEventHandler.$on("progressPopupClosed", this.showInProgressOnPanel)
                }
            },
            Ac = Lc,
            Rc = (i("655f"), Object(Jt["a"])(Ac, ac, oc, !1, null, "370b714b", null)),
            Ic = Rc.exports,
            $c = {
                name: "Play",
                components: {
                    TimerBox: po,
                    MainContent: Ic,
                    ContextMenu: Zr
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    }
                })
            },
            Nc = $c,
            Bc = (i("64fb"), Object(Jt["a"])(Nc, nc, sc, !1, null, "925693e2", null)),
            Gc = Bc.exports,
            qc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-computing-container"
                }, [i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "circle-box flex-center"
                }, [i("circle-box")], 1), i("h1", [t._v(t._s(t.$t("leaderboard.computing_title")))]), i("p", [t._v(t._s(t.$t("leaderboard.computing_tip")))])])])
            },
            Hc = [],
            Wc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28"
                    }
                }, [i("g", {
                    attrs: {
                        transform: "translate(2,2)"
                    }
                }, [i("circle", {
                    staticClass: "line",
                    attrs: {
                        cx: "10",
                        cy: "10",
                        r: t.R
                    }
                }), i("circle", {
                    ref: "stroke",
                    staticClass: "stroke",
                    attrs: {
                        cx: "10",
                        cy: "10",
                        r: t.R,
                        "stroke-dasharray": t.dasharray,
                        "stroke-dashoffset": t.offset
                    }
                })])])
            },
            Fc = [],
            Uc = {
                name: "CircleBox",
                data: function() {
                    return {
                        R: 10
                    }
                },
                computed: {
                    C: function() {
                        return 2 * Math.PI * this.R
                    },
                    dasharray: function() {
                        return this.C + 2
                    },
                    offset: function() {
                        var t = 30;
                        return (100 - t) / 100 * this.C
                    }
                },
                mounted: function() {
                    this.$refs.stroke
                }
            },
            Yc = Uc,
            Jc = (i("2d5f"), Object(Jt["a"])(Yc, Wc, Fc, !1, null, "59d20652", null)),
            Vc = Jc.exports,
            Zc = {
                name: "Computing",
                components: {
                    CircleBox: Vc
                }
            },
            Xc = Zc,
            Kc = (i("d05a"), Object(Jt["a"])(Xc, qc, Hc, !1, null, "1d9489f6", null)),
            Qc = Kc.exports,
            tl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-result-container"
                }, [i("h2", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("leaderboard.result_title")))]), t.showWin ? i("div", {
                    staticClass: "win-box"
                }, [i("h1", [t._v(t._s(t.$t("leaderboard.result_congratulations", {
                    position: t.position
                })))]), i("h3", [t._v(t._s(t.$t("leaderboard.result_award")))])]) : i("div", {
                    staticClass: "no-win-box"
                }, [i("h1", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 0)))]), i("h2", {
                    class: {
                        "small-text": t.smallTextLocale
                    }
                }, [t._v(" " + t._s(t._f("line")(t.$t("leaderboard.result_failure"), 1)) + " ")]), i("h3", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 2)))])]), this.records.length > 0 ? i("div", {
                    staticClass: "leaderboard-list"
                }, t._l(t.showRecords, (function(e) {
                    return i("div", {
                        key: e.name,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name-and-prize"
                    }, [i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "prize"
                    }, [t._v(t._s(t.getPrize(e.position)))])]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), i("div", {
                        staticClass: "line"
                    })])
                })), 0) : t._e(), t.singleRecord ? i("div", {
                    staticClass: "single leaderboard-item active"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "number"
                }, [t._v(t._s(t.singleRecord.position))]), i("div", {
                    staticClass: "name-and-prize"
                }, [i("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.singleRecord.displayName))]), i("div", {
                    staticClass: "prize"
                }, [t._v(t._s(t.getPrize(t.singleRecord.position)))])]), i("div", {
                    staticClass: "score"
                }, [t._v(t._s(t.singleRecord.score))])])]) : t._e(), i("button", {
                    staticClass: "flex-center"
                }, [i("div", {
                    staticClass: "icon"
                }), i("p", {
                    on: {
                        click: t.closeGSP
                    }
                }, [t._v(t._s(t.$t("leaderboard.result_hide")))])])])
            },
            el = [],
            il = Object(p["a"])("competitionModule"),
            nl = il.mapState,
            sl = il.mapMutations,
            al = {
                name: "Result",
                computed: Object(d["a"])(Object(d["a"])({}, nl({
                    position: function(t) {
                        return t.playerData.position
                    },
                    award: function(t) {
                        return t.leaderboardData.award
                    },
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    },
                    levels: function(t) {
                        return t.leaderboardData.levels
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    spinsLeft: function(t) {
                        return t.leaderboardData.spinRemaining
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    }
                })), {}, {
                    showWin: function() {
                        var t = this.award.match(/\d+/) ? parseInt(this.award.match(/\d+/)[0]) : 0;
                        return t > 0
                    },
                    showRecords: function() {
                        return this.records.slice(0, 3)
                    },
                    singleRecord: function() {
                        var t = this.records.findIndex((function(t) {
                            return t.ifPlayer
                        }));
                        return t < 3 ? void 0 : this.records[t]
                    },
                    smallTextLocale: function() {
                        return "cs" === this._i18n.locale
                    }
                }),
                filters: {
                    line: function(t, e) {
                        return t ? t.split("\n")[e] : ""
                    }
                },
                methods: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive"])), sl(["resetPanelData"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: this.spinsLeft,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: this.position,
                                tournamentStatus: "completed"
                            }
                        }), this.setPanelActive(!1), this.resetPanelData()
                    },
                    getPrize: function(t) {
                        var e = this.levels.findIndex((function(e) {
                            return e.from <= t & t <= e.to
                        }));
                        return e < 0 ? this.$t("common.award_empty") : this.$t("leaderboard.result_prize") + ": " + this.levels[e].award
                    }
                })
            },
            ol = al,
            rl = (i("9710"), Object(Jt["a"])(ol, tl, el, !1, null, "ade3f630", null)),
            cl = rl.exports,
            ll = Object(p["a"])("competitionModule"),
            ul = ll.mapState,
            dl = {
                name: "Leaderboard",
                components: {
                    Join: ic,
                    Play: Gc,
                    Computing: Qc,
                    Result: cl
                },
                computed: Object(d["a"])(Object(d["a"])({}, ul({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    tournamentStatus: function(t) {
                        return t.competitionData.status
                    }
                })), {}, {
                    currentComponent: function() {
                        return this.registered ? "PRE_ACTIVE" === this.tournamentStatus ? "join" : "COMPLETING" === this.tournamentStatus ? "computing" : "COMPLETED" === this.tournamentStatus ? "result" : "play" : "join"
                    }
                })
            },
            pl = dl,
            ml = (i("b4b1"), Object(Jt["a"])(pl, Ka, Qa, !1, null, "d18950d6", null)),
            hl = ml.exports,
            fl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "prize-draw-panel"
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [i("div", {
                    staticClass: "logo-background",
                    class: {
                        bigTextFix: t.ifBigTitle
                    }
                }, [t._v(t._s(t.$t("common.logo_prize_draw_text")))])]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            _l = [],
            vl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "pre-container"
                    }
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("prize-left")], 1), i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "main-content",
                    style: {
                        height: t.mainHeightCurrent
                    }
                }, [i("top-prizes", {
                    ref: "main",
                    on: {
                        setShowPrizes: t.setShowPrizes
                    }
                })], 1), i("div", {
                    staticClass: "fly-in-content",
                    class: {
                        "fly-in-content-show": t.showRules
                    },
                    style: {
                        zIndex: 2
                    }
                }, [i("rules", {
                    ref: "rules",
                    on: {
                        showRules: t.setShowRules
                    }
                })], 1), i("div", {
                    staticClass: "fly-in-content",
                    class: {
                        "fly-in-content-show": t.showPrizes
                    },
                    style: {
                        zIndex: 1
                    }
                }, [i("all-prizes", {
                    ref: "prizes",
                    on: {
                        showPrizes: t.setShowPrizes
                    }
                })], 1)]), i("footer-info", {
                    attrs: {
                        showRules: t.showRules
                    },
                    on: {
                        setShowRules: t.setShowRules
                    }
                }), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            bl = [],
            gl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-left"
                }, [i("p", {
                    staticClass: "description",
                    class: {
                        "small-text": t.smallTextLocale
                    }
                }, [t._v(" " + t._s(t.$t("prizedraw.join_prize_left")) + " ")]), i("p", {
                    staticClass: "count"
                }, [t._v(t._s(t.count))])])
            },
            Cl = [],
            wl = Object(p["a"])("competitionModule"),
            Tl = wl.mapState,
            Ol = {
                name: "PrizeLeft",
                computed: Object(d["a"])(Object(d["a"])({}, Tl({
                    count: function(t) {
                        return t.prizePoolData.ticketsRemaining
                    }
                })), {}, {
                    smallTextLocale: function() {
                        return "el" === this._i18n.locale
                    }
                })
            },
            yl = Ol,
            xl = (i("7a9b"), Object(Jt["a"])(yl, gl, Cl, !1, null, "3a5f16f4", null)),
            jl = xl.exports,
            Pl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "top-prizes"
                }, [i("div", {
                    staticClass: "header"
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.join_top_prizes")))]), i("div", {
                    staticClass: "line"
                })]), i("div", {
                    staticClass: "top-prizes-wrapper"
                }, [i("top-prize-list", {
                    attrs: {
                        line: "gradient"
                    }
                })], 1), i("button", {
                    staticClass: "link-btn flex-center",
                    on: {
                        click: t.setShowAllPrizes
                    }
                }, [i("p", [t._v(t._s(t.$t("common.join_view_prizes")))]), i("div", {
                    staticClass: "arrow-right"
                })])])
            },
            Sl = [],
            kl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list"
                }, t._l(t.showPrizes, (function(e, n) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "content bold",
                        class: ["index-" + n]
                    }, [i("div", {
                        staticClass: "icon"
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "18",
                            height: "18"
                        }
                    })], 1), i("div", {
                        staticClass: "award"
                    }, [t._v(t._s(e.award))])]), n !== t.showPrizes.length - 1 ? i("div", {
                        class: ["line", t.line]
                    }) : t._e()])
                })), 0)
            },
            El = [],
            Ml = Object(p["a"])("competitionModule"),
            zl = Ml.mapState,
            Dl = {
                name: "top-prize-list",
                props: {
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, zl({
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), {}, {
                    showPrizes: function() {
                        return this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        })).slice(0, 3)
                    }
                }),
                methods: {
                    awardText: function(t) {
                        return getAward(t)
                    }
                }
            },
            Ll = Dl,
            Al = (i("3497"), Object(Jt["a"])(Ll, kl, El, !1, null, "16550c89", null)),
            Rl = Al.exports,
            Il = {
                name: "TopPrizes",
                components: {
                    TopPrizeList: Rl
                },
                methods: {
                    setShowAllPrizes: function() {
                        this.$emit("setShowPrizes", !0)
                    }
                }
            },
            $l = Il,
            Nl = (i("f769"), Object(Jt["a"])($l, Pl, Sl, !1, null, "75e7be66", null)),
            Bl = Nl.exports,
            Gl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-all-container"
                }, [i("div", {
                    staticClass: "header"
                }, [i("button", {
                    staticClass: "icon flex-center",
                    on: {
                        click: t.triggerBack
                    }
                }, [i("div", {
                    staticClass: "arrow"
                })]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.prizes")))])]), i("prize-list", {
                    attrs: {
                        showAll: !0,
                        line: "solid"
                    }
                })], 1)
            },
            ql = [],
            Hl = {
                name: "AllPrizes",
                components: {
                    PrizeList: yr
                },
                methods: {
                    triggerBack: function() {
                        this.$emit("showPrizes", !1)
                    }
                }
            },
            Wl = Hl,
            Fl = (i("e247"), Object(Jt["a"])(Wl, Gl, ql, !1, null, "238a972b", null)),
            Ul = Fl.exports,
            Yl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "rules-container"
                    }
                }, [i("div", {
                    staticClass: "header"
                }, [i("button", {
                    staticClass: "icon flex-center",
                    on: {
                        click: t.triggerBack
                    }
                }, [i("div", {
                    staticClass: "arrow"
                })]), i("div", {
                    staticClass: "title",
                    class: {
                        "small-text": t.smallTextLocale, "double-line": t.doubleLineTitle
                    }
                }, [t._v(" " + t._s(t.$t("prizedraw.join_rules_title")) + " ")])]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, [i("p", [t._v(t._s(t.$t("prizedraw.join_rules_1", {
                    startTime: t.startTime
                })))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_2")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_3")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_4")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_5")))]), i("ul", t._l(t.ruleText, (function(e) {
                    return i("li", {
                        key: e.name
                    }, [i("b", [t._v(t._s(e.name))]), i("br"), t._v(" " + t._s(e.condition_text) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_6")))]), i("ul", t._l(t.showPrizeList, (function(e) {
                    return i("li", {
                        key: e.id
                    }, [i("b", [t._v(t._s(e.award) + " : ")]), t._v(t._s(e.remain) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_7")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_8")))])]), i("div", {
                    staticClass: "mask"
                })])
            },
            Jl = [],
            Vl = Object(p["a"])("competitionModule"),
            Zl = Vl.mapState,
            Xl = {
                name: "Rules",
                computed: Object(d["a"])(Object(d["a"])({}, Zl({
                    startTime: function(t) {
                        return t.competitionData.startTime
                    },
                    ruleText: function(t) {
                        return t.prizePoolData.ruleText
                    },
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), {}, {
                    showPrizeList: function() {
                        return this.prizeList.map((function(t) {
                            return {
                                id: t.id,
                                award: t.award,
                                remain: t.remain.replace("x", "")
                            }
                        }))
                    },
                    smallTextLocale: function() {
                        return "fr" === this._i18n.locale || "fr-CA" === this._i18n.locale || "fr_BE" === this._i18n.locale || "bg" === this._i18n.locale
                    },
                    doubleLineTitle: function() {
                        return "bg" === this._i18n.locale
                    }
                }),
                methods: {
                    triggerBack: function() {
                        this.$emit("showRules", !1)
                    },
                    initializeScrollBar: function(t) {
                        new li["a"](t, {
                            minScrollbarLength: 150,
                            maxScrollbarLength: 150,
                            suppressScrollX: !0
                        })
                    }
                },
                mounted: function() {
                    this.initializeScrollBar(this.$refs.content)
                }
            },
            Kl = Xl,
            Ql = (i("407f"), Object(Jt["a"])(Kl, Yl, Jl, !1, null, "3a2e8f39", null)),
            tu = Ql.exports,
            eu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "footer-container"
                }, [i("join-button")], 1)
            },
            iu = [],
            nu = Object(p["a"])("competitionModule"),
            su = (nu.mapState, {
                name: "FooterInfo",
                components: {
                    JoinButton: Ro
                },
                props: {
                    showRules: {
                        type: Boolean,
                        required: !0
                    }
                },
                methods: {
                    setShowRules: function() {
                        this.$emit("setShowRules", !this.showRules)
                    }
                }
            }),
            au = su,
            ou = (i("5b28"), Object(Jt["a"])(au, eu, iu, !1, null, "2d202afe", null)),
            ru = ou.exports,
            cu = Object(p["a"])("competitionModule"),
            lu = cu.mapState,
            uu = {
                name: "Join",
                components: {
                    PrizeLeft: jl,
                    TopPrizes: Bl,
                    AllPrizes: Ul,
                    Rules: tu,
                    FooterInfo: ru,
                    ContextMenu: Zr
                },
                data: function() {
                    return {
                        showRules: !1,
                        showPrizes: !1,
                        mainHeightCurrent: "auto"
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, lu({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })), Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    },
                    setShowRules: function(t) {
                        this.showRules = t
                    },
                    setShowPrizes: function(t) {
                        this.showPrizes = t
                    }
                })
            },
            du = uu,
            pu = (i("0720"), Object(Jt["a"])(du, vl, bl, !1, null, "4aae2f4c", null)),
            mu = pu.exports,
            hu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-draw-play-container"
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("prize-left")], 1), i("div", {
                    staticClass: "content-container"
                }, [i("div", {
                    staticClass: "rules-content-wrapper",
                    on: {
                        click: function(e) {
                            return t.openMenu("points-rules")
                        }
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$tc("prizedraw.play_rules_title", t.showRules.length)) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "rules-container"
                }, t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "rule-item"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.name))]), e.progress_total > 0 ? i("div", {
                        staticClass: "progress"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))]) : t._e()]), e.progress_total > 0 ? i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })]) : t._e()])])])
                })), 0)]), i("div", {
                    staticClass: "prizes-content-wrapper",
                    on: {
                        click: function(e) {
                            return t.openMenu("prizes")
                        }
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showNoWin,
                        expression: "showNoWin"
                    }],
                    staticClass: "loserOuter floatBoxOuter"
                }, [i("div", {
                    staticClass: "floatBoxInner"
                }, [t._v(t._s(t.$t("prizedraw.award_empty_msg")))])]), i("div", {
                    staticClass: "titles"
                }, [i("div", {
                    staticClass: "titleLeft"
                }, [t._v(" " + t._s(t.$t("common.prizes")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })])]), i("div", {
                    staticClass: "prizes-container"
                }, t._l(t.showPrizes, (function(e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prizes-item"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("div", {
                        staticClass: "icon"
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "18",
                            height: "18"
                        }
                    })], 1), i("div", {
                        staticClass: "award"
                    }, [t._v(t._s(e.award))]), i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(e.remain))])]), i("div", {
                        staticClass: "line"
                    })])
                })), 0)])]), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            fu = [],
            _u = Object(p["a"])("competitionModule"),
            vu = _u.mapState,
            bu = {
                name: "Play",
                components: {
                    PrizeLeft: jl,
                    ContextMenu: Zr
                },
                data: function() {
                    return {
                        showNoWin: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, vu({
                    rules: function(t) {
                        return t.prizePoolData.ruleText
                    },
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    },
                    prizeAwards: function(t) {
                        return t.prizePoolData.award
                    },
                    displayLosingTicket: function(t) {
                        return t.prizePoolData.displayLosingTicket
                    }
                })), Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })), {}, {
                    showRules: function() {
                        return this.rules
                    },
                    showPrizes: function() {
                        return this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        }))
                    },
                    awardCount: function() {
                        return this.prizeAwards.length
                    },
                    latestAward: function() {
                        return this.prizeAwards[this.prizeAwards.length - 1]
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    },
                    openMenu: function(t) {
                        this.setShowContextMenu({
                            show: !0,
                            content: t
                        })
                    }
                }),
                watch: {
                    awardCount: function() {
                        if ("EMPTY" === this.latestAward.awardType.category && this.displayLosingTicket) {
                            this.showNoWin && window.clearTimeout(this.showNoWin);
                            var t = this;
                            this.showNoWin = window.setTimeout((function() {
                                t.showNoWin = void 0
                            }), 3e3)
                        }
                    }
                }
            },
            gu = bu,
            Cu = (i("6adc"), Object(Jt["a"])(gu, hu, fu, !1, null, "273e8b60", null)),
            wu = Cu.exports,
            Tu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-draw-ended-container"
                }, [i("div", {
                    staticClass: "upper-content"
                }, [i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": t.show
                    },
                    on: {
                        click: t.toggleMenu
                    }
                })]), i("prize-left")], 1), i("div", {
                    staticClass: "content"
                }, [i("h1", [t._v(t._s(t.$t("prizedraw.over_title")))]), i("p", [t._v(t._s(t.$t("prizedraw.over_tips")))]), i("button", {
                    staticClass: "flex-center"
                }, [i("div", {
                    staticClass: "icon"
                }), i("div", {
                    on: {
                        click: t.closeGSP
                    }
                }, [t._v(t._s(t.$t("common.hide")))])])]), i("context-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }]
                })], 1)
            },
            Ou = [],
            yu = Object(p["a"])("competitionModule"),
            xu = yu.mapState,
            ju = yu.mapMutations,
            Pu = {
                name: "Result",
                components: {
                    PrizeLeft: jl,
                    ContextMenu: Zr
                },
                computed: Object(d["a"])(Object(d["a"])({}, xu({
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })), Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    show: function(t) {
                        return t.panelData.contextMenu.show
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowContextMenu"])), {}, {
                    toggleMenu: function() {
                        this.setShowContextMenu({
                            show: !this.show,
                            content: "ContextMenu"
                        })
                    }
                }, Object(p["c"])(["setPanelActive"])), ju(["resetPanelData"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: 0,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: 0,
                                tournamentStatus: this.competitionStatus
                            }
                        }), this.setPanelActive(!1), this.resetPanelData()
                    }
                })
            },
            Su = Pu,
            ku = (i("bf03"), Object(Jt["a"])(Su, Tu, Ou, !1, null, "5f3ff7b8", null)),
            Eu = ku.exports,
            Mu = Object(p["a"])("competitionModule"),
            zu = Mu.mapState,
            Du = {
                name: "PrizeDraw",
                components: {
                    Join: mu,
                    Play: wu,
                    End: Eu
                },
                computed: Object(d["a"])(Object(d["a"])({}, zu({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })), {}, {
                    ifBigTitle: function() {
                        return this._i18n.t("common.logo_prize_draw_text").length > 12
                    },
                    currentComponent: function() {
                        return this.registered ? "PRE_ACTIVE" === this.competitionStatus ? "join" : "ACTIVE" === this.competitionStatus ? "play" : "COMPLETED" === this.competitionStatus ? "end" : "play" : "join"
                    }
                })
            },
            Lu = Du,
            Au = (i("dd3f"), Object(Jt["a"])(Lu, fl, _l, !1, null, "39e90435", null)),
            Ru = Au.exports,
            Iu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "quest-panel"
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [t._v(" " + t._s(t.$t("common.logo_quest_text")) + " ")]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            $u = [],
            Nu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "quest-join-play-container"
                }, [i("div", {
                    staticClass: "upper-content"
                }, [t.termsText || t.termsLink ? i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    class: {
                        "close-menu-icon": this.showConditions
                    },
                    on: {
                        click: t.setShowConditions
                    }
                })]) : t._e(), t.panelActive ? i("timer-box") : t._e()], 1), t.questRegistered ? t._e() : i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "main-content",
                    style: {
                        height: t.mainHeightCurrent
                    }
                }, [i("div", {
                    ref: "main",
                    staticClass: "main-box"
                }, [i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value"
                }, [t._v(t._s(t.questGoal))]), i("div", {
                    staticClass: "title",
                    class: {
                        "small-title": t.smallTextTitle
                    }
                }, [t._v(" " + t._s(t.$t("quest.join_play_goal")) + " ")])]), i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value"
                }, [t._v(t._s(t.questReward))]), i("div", {
                    staticClass: "title",
                    class: {
                        "small-title": t.smallTextTitle
                    }
                }, [t._v(" " + t._s(t.$t("quest.join_play_reward")) + " ")])]), t.questMax ? [i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value"
                }, [t._v(t._s(t.questMax))]), i("div", {
                    staticClass: "title",
                    class: {
                        "small-title": t.smallTextTitle
                    }
                }, [t._v(" " + t._s(t.$t("quest.join_play_max_reward")) + " ")])])] : t._e()], 2)])]), t.questRegistered ? i("div", {
                    staticClass: "generalContainer"
                }, [i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionTitle"
                }, [t._v(t._s(t.$t("quest.join_play_goal")))]), i("div", {
                    staticClass: "sectionBoxed"
                }, [i("div", {
                    staticClass: "sectionValue"
                }, [t._v(t._s(t.questGoal))]), t.questProgressData ? i("div", {
                    staticClass: "progressBar"
                }, [i("div", {
                    staticClass: "icon goalsicon"
                }), i("div", {
                    staticClass: "rule-box"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("quest.join_play_progress")))]), i("div", {
                    staticClass: "progress"
                }, [t._v(" " + t._s(t.questProgressData.current) + "/" + t._s(t.questProgressData.total) + " ")])]), i("div", {
                    staticClass: "bar"
                }, [i("div", {
                    staticClass: "highlight",
                    style: {
                        width: t.questProgressData.progress
                    }
                })])])]) : t._e()])]), i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionTitle"
                }, [t._v(t._s(t.$t("quest.join_play_reward")))]), i("div", {
                    staticClass: "sectionBoxed"
                }, [i("div", {
                    staticClass: "sectionValue"
                }, [t._v(t._s(t.questReward))])])]), t.questMax ? [i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionTitle"
                }, [t._v(t._s(t.$t("quest.join_play_max_reward")))]), i("div", {
                    staticClass: "sectionBoxed"
                }, [t.questMaxData ? i("div", {
                    staticClass: "progressBar"
                }, [i("div", {
                    staticClass: "icon completedicon"
                }), i("div", {
                    staticClass: "rule-box"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("quest.join_play_progress")))]), i("div", {
                    staticClass: "progress"
                }, [t._v(t._s(t.questMaxData.current) + "/" + t._s(t.questMaxData.max))])]), i("div", {
                    staticClass: "bar"
                }, [i("div", {
                    staticClass: "highlight",
                    style: {
                        width: t.questMaxData.progress
                    }
                })])])]) : t._e()])]), t.questMaxData.current === t.questMaxData.max ? i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionBoxed"
                }, [i("div", {
                    staticClass: "endMessage sectionValue"
                }, [t._v(t._s(t.$t("quest.timer_finished")))])])]) : t._e()] : t._e()], 2) : t._e(), i("div", {
                    staticClass: "fly-in-content",
                    class: {
                        "fly-in-content-show": t.showConditions
                    },
                    style: {
                        zIndex: 2
                    }
                }, [i("conditions", {
                    ref: "terms",
                    on: {
                        showConditions: t.setHideConditions
                    }
                })], 1), i("div", {
                    staticClass: "footer"
                }, [t.showJoinButton ? i("join-button") : t._e(), t.termsText || t.termsLink ? i("div", [t.showConditions ? i("button", {
                    staticClass: "terms-btn flex-center",
                    on: {
                        click: t.setHideConditions
                    }
                }, [i("p", {
                    class: {
                        "small-tc": t.smallTextTC
                    }
                }, [t._v(t._s(t.$t("quest.hide_terms_conditions")))]), i("div", {
                    staticClass: "arrow-right"
                })]) : i("button", {
                    staticClass: "terms-btn flex-center",
                    on: {
                        click: t.setShowConditions
                    }
                }, [i("p", {
                    class: {
                        "small-tc": t.smallTextTC
                    }
                }, [t._v(t._s(t.$t("quest.view_terms_conditions")))]), i("div", {
                    staticClass: "arrow-right"
                })])]) : t._e()], 1)])
            },
            Bu = [],
            Gu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "conditions-container"
                }, [i("div", {
                    staticClass: "header"
                }, [i("button", {
                    staticClass: "icon flex-center",
                    on: {
                        click: t.triggerBack
                    }
                }, [i("div", {
                    staticClass: "arrow"
                })]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.terms_conditions")))])]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, [t._l(t.conditionsList, (function(e, n) {
                    return i("p", {
                        key: n
                    }, [t._v(" " + t._s(e) + " ")])
                })), t.termsLink ? i("a", {
                    attrs: {
                        href: t.termsLink,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("common.terms_conditions")))]) : t._e()], 2), i("div", {
                    staticClass: "mask"
                })])
            },
            qu = [],
            Hu = Object(p["a"])("competitionModule"),
            Wu = Hu.mapState,
            Fu = Hu.mapGetters,
            Uu = {
                name: "Conditions",
                computed: Object(d["a"])(Object(d["a"])({}, Wu({
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    }
                })), Fu(["conditionsList"])),
                methods: {
                    triggerBack: function() {
                        this.$emit("showConditions", !1)
                    },
                    initializeScrollBar: function(t) {
                        new this.PerfectScrollbar(t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.initializeScrollBar(t.$refs.content)
                    }))
                }
            },
            Yu = Uu,
            Ju = (i("2bb5"), Object(Jt["a"])(Yu, Gu, qu, !1, null, "14d3f808", null)),
            Vu = Ju.exports,
            Zu = Object(p["a"])("competitionModule"),
            Xu = Zu.mapState,
            Ku = Zu.mapGetters,
            Qu = {
                name: "JoinPlay",
                components: {
                    TimerBox: po,
                    Conditions: Vu,
                    JoinButton: Ro
                },
                data: function() {
                    return {
                        showConditions: !1,
                        mainHeightCurrent: "auto"
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    }
                })), Xu({
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    },
                    termsText: function(t) {
                        return t.competitionData.termsText
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    }
                })), Ku(["questGoal", "questReward", "questProgress", "questProgressData", "questMaxData", "questMax", "questMaxRewards", "questRegistered", "showJoinButton"])), {}, {
                    smallTextTitle: function() {
                        return "es" === this._i18n.locale || "es-MX" === this._i18n.locale || "nl" === this._i18n.locale || "nl_BE" === this._i18n.locale
                    },
                    smallTextTC: function() {
                        return "el" === this._i18n.locale || "hu" === this._i18n.locale
                    }
                }),
                watch: {
                    showConditions: function(t) {}
                },
                methods: {
                    setShowConditions: function() {
                        this.termsText ? this.showConditions = !this.showConditions : this.termsLink && window.open(this.termsLink, "_blank"), this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.ItemClicked",
                            data: {
                                name: "ItemBeenClicked",
                                context: "cashTournament",
                                contextId: this.competitionToken,
                                itemName: "termsCondition"
                            }
                        })
                    },
                    setHideConditions: function() {
                        this.showConditions = !1
                    }
                }
            },
            td = Qu,
            ed = (i("80a5"), Object(Jt["a"])(td, Nu, Bu, !1, null, "4dbfdfa1", null)),
            id = ed.exports,
            nd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "quest-over-container"
                }, [i("div", {
                    staticClass: "timer-box"
                }, [i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$t("quest.timer_end")))]), i("p", {
                    staticClass: "time"
                }, [t._v("00:00:00")])]), i("div", {
                    staticClass: "content flex-center"
                }, [i("p", [t._v(t._s(t.$t("quest.over_title")))]), i("h1", [t._v(t._s(t.$t("quest.over_thanks")))])]), i("button", {
                    staticClass: "flex-center"
                }, [i("div", {
                    staticClass: "icon"
                }), i("p", {
                    on: {
                        click: t.closeGSP
                    }
                }, [t._v(t._s(t.$t("common.hide")))])])])
            },
            sd = [],
            ad = Object(p["a"])("competitionModule"),
            od = ad.mapState,
            rd = {
                name: "Over",
                computed: Object(d["a"])({}, od({
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: 0,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: 0,
                                tournamentStatus: this.competitionStatus
                            }
                        }), this.setPanelActive(!1)
                    }
                })
            },
            cd = rd,
            ld = (i("49ab"), Object(Jt["a"])(cd, nd, sd, !1, null, "0aa6c68a", null)),
            ud = ld.exports,
            dd = Object(p["a"])("competitionModule"),
            pd = dd.mapState,
            md = (dd.mapMutations, {
                name: "Quest",
                components: {
                    JoinPlay: id,
                    Over: ud
                },
                computed: Object(d["a"])(Object(d["a"])({}, pd({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })), {}, {
                    currentComponent: function() {
                        return this.registered && ["COMPLETED", "CANCELLED"].includes(this.competitionStatus) ? "over" : "join-play"
                    }
                })
            }),
            hd = md,
            fd = (i("1ea0"), Object(Jt["a"])(hd, Iu, $u, !1, null, "2e6cc65d", null)),
            _d = fd.exports,
            vd = Object(p["a"])("competitionModule"),
            bd = vd.mapState,
            gd = {
                name: "LeftPanel",
                components: {
                    Leaderboard: hl,
                    PrizeDraw: Ru,
                    Quest: _d
                },
                computed: Object(d["a"])(Object(d["a"])({}, bd({
                    competitionType: function(t) {
                        return t.competitionData.type
                    }
                })), {}, {
                    currentComponent: function() {
                        var t = "";
                        return "COMPETITION" === this.competitionType && (t = "leaderboard"), "PRIZE_DRAW" === this.competitionType && (t = "prize-draw"), "PROMOTION" === this.competitionType && (t = "quest"), t
                    }
                })
            },
            Cd = gd,
            wd = (i("e315"), Object(Jt["a"])(Cd, Za, Xa, !1, null, "1889d324", null)),
            Td = wd.exports,
            Od = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "top-panel-container"
                }, [i("div", {
                    staticClass: "menu-bar"
                }), i("div", {
                    staticClass: "component"
                }, [i(t.currentComponent, {
                    tag: "component"
                })], 1)])
            },
            yd = [],
            xd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "leaderboard-panel"
                    }
                }, [i("div", {
                    staticClass: "top-container"
                }, [i("div", {
                    staticClass: "context-menu-button-div"
                }, [i("div", {
                    staticClass: "context-menu-button",
                    on: {
                        click: t.openContextMenu
                    }
                })]), i("div", {
                    staticClass: "logo-div",
                    class: {
                        logoOnly: "computing" === t.currentComponent || "result" === t.currentComponent
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [t._v(" " + t._s(t.$t("common.logo_tournament_text")) + " "), i("div", {
                    staticClass: "logo-background"
                }, [t._v(t._s(t.$t("common.logo_tournament_text")))])])]), "join" === t.currentComponent || "play" === t.currentComponent ? i("div", {
                    staticClass: "timer-box-div"
                }, [t.panelActive ? i("timer-box") : t._e()], 1) : t._e(), "result" === t.currentComponent ? i("div", {
                    staticClass: "hide-gsp-div",
                    on: {
                        click: t.closeGSP
                    }
                }, [i("div", {
                    staticClass: "text"
                }, [t._v(t._s(t.$t("common.hide")))]), i("div", {
                    staticClass: "hide-gsp-button flex-center"
                }, [i("svg-icon", {
                    attrs: {
                        iconClass: "hide-gsp-button-pt",
                        width: "37",
                        height: "37"
                    }
                })], 1)]) : t._e()]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            jd = [],
            Pd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "timer-box",
                    class: [t.skin]
                }, [i("div", {
                    staticClass: "animation-box",
                    class: {
                        "move-down": t.showTextAnimation
                    }
                }, [i("p", {
                    staticClass: "description",
                    class: {
                        "small-text": t.smallTextLocale, "smaller-text": t.smallerTextLocale
                    }
                }, [t._v(" " + t._s(t.description) + " ")]), i("p", {
                    staticClass: "time"
                }, [t._v(t._s(t.time))])])])
            },
            Sd = [],
            kd = Object(p["a"])("competitionModule"),
            Ed = kd.mapState,
            Md = (kd.mapGetters, 5e3),
            zd = 1e3,
            Dd = {
                name: "TimerBox",
                data: function() {
                    return {
                        skin: "default",
                        description: "",
                        time: "",
                        showTextAnimation: !1,
                        readyToSetStartTimer: !1,
                        readyToSetEndTimer: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, Ed({
                    competitionType: function(t) {
                        return t.competitionData.type
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    },
                    timeUntilStart: function(t) {
                        return t.competitionData.timeUntilStart
                    },
                    timeUntilEnd: function(t) {
                        return t.competitionData.timeUntilEnd
                    }
                })), {}, {
                    smallTextLocale: function() {
                        return "sv" === this._i18n.locale || "el" === this._i18n.locale || "es" === this._i18n.locale || "es-MX" === this._i18n.locale || "fr" === this._i18n.locale || "fr-CA" === this._i18n.locale || "fr_BE" === this._i18n.locale || "bg" === this._i18n.locale || "nl" === this._i18n.locale || "nl_BE" === this._i18n.locale
                    },
                    smallerTextLocale: function() {
                        return "ru" === this._i18n.locale
                    }
                }),
                watch: {
                    timeUntilStart: function(t, e) {
                        this.readyToSetStartTimer && this.setStartTimer(t)
                    },
                    timeUntilEnd: function(t) {
                        this.readyToSetEndTimer && this.setEndTimer(t)
                    }
                },
                methods: {
                    initWithWhichTimer: function() {
                        ["COMPLETING", "COMPLETED", "CANCELLED", "PRE_ACTIVE"].includes(this.competitionStatus) ? this.readyToSetStartTimer = !0 : "ACTIVE" === this.competitionStatus && (this.readyToSetEndTimer = !0)
                    },
                    getTimerText: function(t) {
                        var e = "";
                        "COMPETITION" === this.competitionType && (e = "leaderboard."), "PROMOTION" === this.competitionType && (e = "quest.");
                        var i = this.$t(e + t),
                            n = i.split("\n");
                        return n
                    },
                    setStartTimer: function(t) {
                        if ("undefined" !== typeof t) {
                            var e = this.getTimerText("timer_ready"),
                                i = Object(Gt["a"])(e, 2),
                                n = i[0],
                                s = i[1],
                                a = this.getTimerText("timer_start"),
                                o = Object(Gt["a"])(a, 1),
                                r = o[0];
                            this.description = t < zd ? n : r, this.time = t < zd ? s : M(t), this.skin = t <= Md ? t < zd ? "filled" : "highlight" : "default", t < zd && this.startReadyAnimation()
                        }
                    },
                    startReadyAnimation: function() {
                        var t = this;
                        this.readyToSetStartTimer = !1;
                        var e = 0,
                            i = setInterval((function() {
                                t.skin = "highlight" === t.skin ? "filled" : "highlight", 5 === ++e && (clearInterval(i), t.startEndAnimation())
                            }), 400)
                    },
                    startEndAnimation: function() {
                        var t = this;
                        setTimeout((function() {
                            t.skin = "default", t.showTextAnimation = !0, setTimeout((function() {
                                t.showTextAnimation = !1, t.readyToSetEndTimer = !0
                            }), 400)
                        }), 400)
                    },
                    setEndTimer: function(t) {
                        if ("undefined" !== typeof t) {
                            var e = this.getTimerText("timer_finished"),
                                i = Object(Gt["a"])(e, 2),
                                n = i[0],
                                s = i[1],
                                a = this.getTimerText("timer_end"),
                                o = Object(Gt["a"])(a, 1),
                                r = o[0];
                            this.description = t < zd ? n : r, this.time = t < zd ? s : M(t), this.skin = t <= Md ? t < zd ? "filled" : "highlight" : "default", t < zd && this.startFinishAnimation()
                        }
                    },
                    startFinishAnimation: function() {
                        var t = this;
                        this.readyToSetEndTimer = !1;
                        var e = 0,
                            i = setInterval((function() {
                                t.skin = "highlight" === t.skin ? "filled" : "highlight", 5 === ++e && clearInterval(i)
                            }), 400)
                    }
                },
                mounted: function() {
                    this.initWithWhichTimer()
                }
            },
            Ld = Dd,
            Ad = (i("bf9b"), Object(Jt["a"])(Ld, Pd, Sd, !1, null, "40d8bde9", null)),
            Rd = Ad.exports,
            Id = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "bottom-container"
                }, [i("join-button"), i("bottom-content")], 1)
            },
            $d = [],
            Nd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "join-button"
                }, [i("button", {
                    staticClass: "join",
                    attrs: {
                        disabled: t.joinButtonDisabled
                    },
                    on: {
                        click: t.joinTriggered
                    }
                }, [t._v(" " + t._s(t.$t(t.joinButtonLocalKey)) + " ")])])
            },
            Bd = [],
            Gd = Object(p["a"])("competitionModule"),
            qd = Gd.mapGetters,
            Hd = {
                name: "JoinButton",
                computed: Object(d["a"])({}, qd(["joinButtonLocalKey", "joinButtonDisabled"])),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    joinTriggered: function() {
                        this.setShowPopup({
                            show: !0,
                            content: "confirm"
                        })
                    }
                })
            },
            Wd = Hd,
            Fd = (i("0bb3"), Object(Jt["a"])(Wd, Nd, Bd, !1, null, "d92f35e4", null)),
            Ud = Fd.exports,
            Yd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "bottom-content"
                }, [i("div", {
                    staticClass: "play-tips flex-center"
                }, [i("div", {
                    staticClass: "box",
                    class: {
                        "free-spin-box": t.topFreeSpinPrize
                    }
                }, [i("p", {
                    staticClass: "highlight",
                    class: {
                        "smaller-text": t.smallTextLocale
                    }
                }, [t._v(" " + t._s(t.leaderboardTopPrize.award) + " ")]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$t("common.join_top_prize")))])]), i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box",
                    class: {
                        "free-spin-box": t.topFreeSpinPrize
                    }
                }, [i("p", {
                    staticClass: "highlight",
                    class: {
                        "smaller-text": t.smallTextLocale
                    }
                }, [t._v(t._s(t.lbSpinLimitation))]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$tc("leaderboard.join_spins", t.lbSpinLimitation)))])]), i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "box",
                    class: {
                        "free-spin-box": t.topFreeSpinPrize
                    }
                }, [i("p", {
                    staticClass: "highlight",
                    class: {
                        "smaller-text": t.smallTextLocale
                    }
                }, [t._v(t._s(t.timeDuration))]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$tc("leaderboard.join_minutes", t.timeDuration)))])])])])
            },
            Jd = [],
            Vd = Object(p["a"])("competitionModule"),
            Zd = Vd.mapState,
            Xd = Vd.mapGetters,
            Kd = {
                name: "bottom-content",
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Zd({
                    leaderboardTopPrize: function(t) {
                        return t.leaderboardData.levels[0]
                    }
                })), Xd(["lbSpinLimitation", "timeDuration"])), {}, {
                    topFreeSpinPrize: function() {
                        return "FREESPIN" === this.leaderboardTopPrize.category
                    },
                    smallTextLocale: function() {
                        return "el" === this._i18n.locale && this.topFreeSpinPrize
                    }
                })
            },
            Qd = Kd,
            tp = (i("07fc"), Object(Jt["a"])(Qd, Yd, Jd, !1, null, "fe156a52", null)),
            ep = tp.exports,
            ip = {
                name: "Join",
                components: {
                    JoinButton: Ud,
                    BottomContent: ep
                }
            },
            np = ip,
            sp = (i("f2cc"), Object(Jt["a"])(np, Id, $d, !1, null, "dcaadc8a", null)),
            ap = sp.exports,
            op = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "play-content"
                }, [i(t.currentComponent, {
                    tag: "component"
                }), i("right-info")], 1)
            },
            rp = [],
            cp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-content",
                    on: {
                        click: function(e) {
                            return t.openFullScreenLb()
                        }
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "leaderboard-list"
                }, t._l(t.showRecords, (function(e) {
                    return i("div", {
                        key: e.displayName,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), i("div", {
                        staticClass: "line"
                    })])
                })), 0)])
            },
            lp = [],
            up = Object(p["a"])("competitionModule"),
            dp = up.mapState,
            pp = {
                name: "leaderboard-content",
                computed: Object(d["a"])(Object(d["a"])({}, dp({
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    }
                })), {}, {
                    showRecords: function() {
                        var t = this.records.findIndex((function(t) {
                            return t.ifPlayer
                        }));
                        if (t < 2) return this.records.slice(0, 3);
                        var e = this.records.slice(0, 1);
                        return this.records.length - 1 === t ? e.concat([this.records[t - 1], this.records[t]]) : e.concat([this.records[t], this.records[t + 1]])
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    openFullScreenLb: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "leaderboard"
                        })
                    }
                })
            },
            mp = pp,
            hp = (i("266e"), Object(Jt["a"])(mp, cp, lp, !1, null, "534db2ff", null)),
            fp = hp.exports,
            _p = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "point-rules-content",
                    on: {
                        click: t.openMenuRules
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_points_rules")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "points-rules-list"
                }, t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "points-rule-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text",
                        class: {
                            "multiplier-rule": t.isMultiplierRule(e)
                        }
                    }, [i("div", {
                        staticClass: "name",
                        class: {
                            "multiplier-rule-name": t.isMultiplierRule(e)
                        }
                    }, [t._v(" " + t._s(e.name) + " ")]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "point"
                    }, [t._v(t._s(e.points))])]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "progress"
                    }, [i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })]), i("div", {
                        staticClass: "text"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))])])])])
                })), 0)])
            },
            vp = [],
            bp = Object(p["a"])("competitionModule"),
            gp = bp.mapState,
            Cp = {
                name: "point-rules-content",
                computed: Object(d["a"])(Object(d["a"])({}, gp({
                    rules: function(t) {
                        return t.leaderboardData.ruleText
                    }
                })), {}, {
                    showRules: function() {
                        return L(this.rules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    openMenuRules: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "points-rules"
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                })
            },
            wp = Cp,
            Tp = (i("8ff9"), Object(Jt["a"])(wp, _p, vp, !1, null, "da3f83a4", null)),
            Op = Tp.exports,
            yp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "play-right-info"
                }, [t.showInProgressContent ? i("div", {
                    staticClass: "progress-content",
                    class: {
                        "no-padding": t.smallTextLocale
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.play_in_progress")) + " ")]) : i("tabs"), i("div", {
                    staticClass: "content flex-center"
                }, [i("div", {
                    staticClass: "rotate"
                }), i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.remainSpins))])])])], 1)
            },
            xp = [],
            jp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "tabs"
                }, [i("div", {
                    staticClass: "tabs-div"
                }, [i("div", {
                    staticClass: "leaderboard",
                    on: {
                        click: function(e) {
                            return t.selectLeaderboard()
                        }
                    }
                }), i("div", {
                    staticClass: "point-rules",
                    on: {
                        click: function(e) {
                            return t.selectPointRules()
                        }
                    }
                }), i("div", {
                    staticClass: "selected-element",
                    class: {
                        "point-rules-selected": t.pointRulesActive
                    }
                })])])
            },
            Pp = [],
            Sp = {
                name: "tabs",
                data: function() {
                    return {
                        leaderboardActive: !0,
                        pointRulesActive: !1
                    }
                },
                computed: {
                    leaderboardSelected: function() {
                        return this.leaderboardActive
                    },
                    pointRulesSelected: function() {
                        return this.pointRulesActive
                    }
                },
                methods: {
                    selectLeaderboard: function() {
                        this.leaderboardActive = !0, this.pointRulesActive = !1, this.myEventHandler.$emit("tab-selected", "leaderboard")
                    },
                    selectPointRules: function() {
                        this.leaderboardActive = !1, this.pointRulesActive = !0, this.myEventHandler.$emit("tab-selected", "point-rules")
                    }
                }
            },
            kp = Sp,
            Ep = (i("80db"), Object(Jt["a"])(kp, jp, Pp, !1, null, "e6c3c43e", null)),
            Mp = Ep.exports,
            zp = Object(p["a"])("competitionModule"),
            Dp = zp.mapState,
            Lp = zp.mapMutations,
            Ap = {
                name: "right-info",
                components: {
                    Tabs: Mp
                },
                computed: Object(d["a"])(Object(d["a"])({}, Dp({
                    remainSpins: function(t) {
                        return t.leaderboardData.spinRemaining
                    },
                    showInProgressContent: function(t) {
                        return t.leaderboardData.showInProgress
                    }
                })), {}, {
                    smallTextLocale: function() {
                        return "pt" === this._i18n.locale || "da" === this._i18n.locale || "es" === this._i18n.locale || "el" === this._i18n.locale
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Lp(["setShowInProgressContent"])), {}, {
                    showInProgressOnPanel: function() {
                        this.setShowInProgressContent(!0)
                    }
                }),
                created: function() {
                    this.myEventHandler.$on("progressPopupClosed", this.showInProgressOnPanel)
                }
            },
            Rp = Ap,
            Ip = (i("28f2"), Object(Jt["a"])(Rp, yp, xp, !1, null, "57fc33af", null)),
            $p = Ip.exports,
            Np = {
                name: "Play",
                components: {
                    LeaderboardContent: fp,
                    PointRulesContent: Op,
                    RightInfo: $p
                },
                data: function() {
                    return {
                        leaderboardSelected: !0,
                        pointRulesSelected: !1
                    }
                },
                methods: {
                    handleTabSelection: function(t) {
                        "leaderboard" === t ? this.leaderboardSelected || (this.leaderboardSelected = !0, this.pointRulesSelected = !1) : this.pointRulesSelected || (this.leaderboardSelected = !1, this.pointRulesSelected = !0)
                    }
                },
                computed: {
                    currentComponent: function() {
                        return this.leaderboardSelected ? "leaderboard-content" : "point-rules-content"
                    }
                },
                created: function() {
                    this.myEventHandler.$on("tab-selected", this.handleTabSelection)
                }
            },
            Bp = Np,
            Gp = (i("ebe3"), Object(Jt["a"])(Bp, op, rp, !1, null, "943d1490", null)),
            qp = Gp.exports,
            Hp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-computing-container"
                }, [i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "circle-box flex-center"
                }, [i("circle-box")], 1), i("h1", [t._v(t._s(t.$t("leaderboard.computing_title")))]), i("p", [t._v(t._s(t.$t("leaderboard.computing_tip")))])])])
            },
            Wp = [],
            Fp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28"
                    }
                }, [i("g", {
                    attrs: {
                        transform: "translate(2,2)"
                    }
                }, [i("circle", {
                    staticClass: "line",
                    attrs: {
                        cx: "10",
                        cy: "10",
                        r: t.R
                    }
                }), i("circle", {
                    ref: "stroke",
                    staticClass: "stroke",
                    attrs: {
                        cx: "10",
                        cy: "10",
                        r: t.R,
                        "stroke-dasharray": t.dasharray,
                        "stroke-dashoffset": t.offset
                    }
                })])])
            },
            Up = [],
            Yp = {
                name: "CircleBox",
                data: function() {
                    return {
                        R: 10
                    }
                },
                computed: {
                    C: function() {
                        return 2 * Math.PI * this.R
                    },
                    dasharray: function() {
                        return this.C + 2
                    },
                    offset: function() {
                        var t = 30;
                        return (100 - t) / 100 * this.C
                    }
                },
                mounted: function() {
                    this.$refs.stroke
                }
            },
            Jp = Yp,
            Vp = (i("74a7"), Object(Jt["a"])(Jp, Fp, Up, !1, null, "453ee4fa", null)),
            Zp = Vp.exports,
            Xp = {
                name: "Computing",
                components: {
                    CircleBox: Zp
                }
            },
            Kp = Xp,
            Qp = (i("1a11"), Object(Jt["a"])(Kp, Hp, Wp, !1, null, "6257135f", null)),
            tm = Qp.exports,
            em = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [this.records.length > 0 ? i("div", {
                    staticClass: "leaderboard-result-container"
                }, [i("div", {
                    staticClass: "title"
                }, [i("div", {
                    staticClass: "title-left"
                }, [t._v(t._s(t.$t("leaderboard.result_title")))]), i("div", {
                    staticClass: "title-right"
                }, [t._v(t._s(t.$t("leaderboard.result_prize")))])]), i("div", {
                    staticClass: "leaderboard-list"
                }, t._l(t.showRecords, (function(e) {
                    return i("div", {
                        key: e.name,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))]), i("div", {
                        staticClass: "prize"
                    }, [t._v(t._s(t.getPrize(e.position)))])]), i("div", {
                        staticClass: "line"
                    })])
                })), 0)]) : i("div", [i("div", {
                    staticClass: "no-win-box"
                }, [i("h1", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 0)))]), i("h2", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 1)))]), i("h3", [t._v(t._s(t._f("line")(t.$t("leaderboard.result_failure"), 2)))])])])])
            },
            im = [],
            nm = Object(p["a"])("competitionModule"),
            sm = nm.mapState,
            am = {
                name: "Result",
                computed: Object(d["a"])(Object(d["a"])({}, sm({
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    },
                    levels: function(t) {
                        return t.leaderboardData.levels
                    }
                })), {}, {
                    showRecords: function() {
                        var t = this.records.findIndex((function(t) {
                            return t.ifPlayer
                        }));
                        if (t < 2) return this.records.slice(0, 3);
                        var e = this.records.slice(0, 2);
                        return e.concat([this.records[t]])
                    }
                }),
                filters: {
                    line: function(t, e) {
                        return t ? t.split("\n")[e] : ""
                    }
                },
                methods: {
                    getPrize: function(t) {
                        var e = this.levels.findIndex((function(e) {
                            return e.from <= t & t <= e.to
                        }));
                        return e < 0 ? this.$t("common.award_empty") : this.levels[e].award
                    }
                }
            },
            om = am,
            rm = (i("2a28"), Object(Jt["a"])(om, em, im, !1, null, "d959ab7c", null)),
            cm = rm.exports,
            lm = Object(p["a"])("competitionModule"),
            um = lm.mapState,
            dm = lm.mapMutations,
            pm = {
                name: "Leaderboard",
                components: {
                    TimerBox: Rd,
                    Join: ap,
                    Play: qp,
                    Computing: tm,
                    Result: cm
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    }
                })), um({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    tournamentStatus: function(t) {
                        return t.competitionData.status
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    spinsLeft: function(t) {
                        return t.leaderboardData.spinRemaining
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    },
                    position: function(t) {
                        return t.playerData.position
                    }
                })), {}, {
                    currentComponent: function() {
                        return this.registered ? "PRE_ACTIVE" === this.tournamentStatus ? "join" : "COMPLETING" === this.tournamentStatus ? "computing" : "COMPLETED" === this.tournamentStatus ? "result" : "play" : "join"
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive"])), dm(["resetPanelData"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: this.spinsLeft,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: this.position,
                                tournamentStatus: "completed"
                            }
                        }), this.setPanelActive(!1), this.resetPanelData()
                    }
                }, Object(p["c"])(["setShowFlyin"])), {}, {
                    openContextMenu: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                })
            },
            mm = pm,
            hm = (i("f640"), Object(Jt["a"])(mm, xd, jd, !1, null, "4c0d85de", null)),
            fm = hm.exports,
            _m = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "prize-draw-panel"
                    }
                }, [i("div", {
                    staticClass: "top-container"
                }, [i("div", {
                    staticClass: "context-menu-button-div"
                }, [i("div", {
                    staticClass: "context-menu-button",
                    on: {
                        click: t.openContextMenu
                    }
                })]), i("div", {
                    staticClass: "logo-div",
                    class: {
                        logoOnly: "computing" !== t.currentComponent || "result" === t.currentComponent
                    }
                }, [i("div", {
                    staticClass: "logo"
                }, [i("div", {
                    staticClass: "logo-background",
                    class: {
                        bigTextFix: t.ifBigTitle
                    }
                }, [t._v(t._s(t.$t("common.logo_prize_draw_text")))])])]), "result" !== t.currentComponent ? i("div", {
                    staticClass: "prize-left-div"
                }, [t.panelActive ? i("prize-left") : t._e()], 1) : t._e(), "result" === t.currentComponent ? i("div", {
                    staticClass: "hide-gsp-div",
                    on: {
                        click: t.closeGSP
                    }
                }, [i("div", {
                    staticClass: "text"
                }, [t._v(t._s(t.$t("common.hide")))]), i("div", {
                    staticClass: "hide-gsp-button flex-center"
                }, [i("svg-icon", {
                    attrs: {
                        iconClass: "hide-gsp-button-pt",
                        width: "37",
                        height: "37"
                    }
                })], 1)]) : t._e()]), i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            vm = [],
            bm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-left"
                }, [i("p", {
                    staticClass: "description",
                    class: {
                        "small-text": t.smallTextLocale
                    }
                }, [t._v(" " + t._s(t.$t("prizedraw.join_prize_left")) + " ")]), i("p", {
                    staticClass: "count"
                }, [t._v(t._s(t.count))])])
            },
            gm = [],
            Cm = Object(p["a"])("competitionModule"),
            wm = Cm.mapState,
            Tm = {
                name: "PrizeLeft",
                computed: Object(d["a"])(Object(d["a"])({}, wm({
                    count: function(t) {
                        return t.prizePoolData.ticketsRemaining
                    }
                })), {}, {
                    smallTextLocale: function() {
                        return "el" === this._i18n.locale
                    }
                })
            },
            Om = Tm,
            ym = (i("6c98"), Object(Jt["a"])(Om, bm, gm, !1, null, "371324f6", null)),
            xm = ym.exports,
            jm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "bottom-container"
                }, [i("join-button"), i("bottom-content")], 1)
            },
            Pm = [],
            Sm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "bottom-content"
                }, [i("div", {
                    staticClass: "play-tips flex-center"
                }, [i("div", {
                    staticClass: "box",
                    class: {
                        "free-spin-box": t.topFreeSpinPrize
                    }
                }, [i("p", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.prizeDrawTopPrize.award))]), i("p", {
                    staticClass: "description"
                }, [t._v(t._s(t.$t("common.join_top_prize")))])])])])
            },
            km = [],
            Em = Object(p["a"])("competitionModule"),
            Mm = Em.mapState,
            zm = Em.mapGetters,
            Dm = {
                name: "bottom-content",
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Mm({
                    prizeDrawTopPrize: function(t) {
                        return t.prizePoolData.prizeList[0]
                    }
                })), zm(["lbSpinLimitation", "timeDuration"])), {}, {
                    topFreeSpinPrize: function() {
                        return "FREESPIN" === this.prizeDrawTopPrize.category
                    }
                })
            },
            Lm = Dm,
            Am = (i("e1a3"), Object(Jt["a"])(Lm, Sm, km, !1, null, "622d5bff", null)),
            Rm = Am.exports,
            Im = {
                name: "index",
                components: {
                    JoinButton: Ud,
                    BottomContent: Rm
                },
                methods: {
                    handleTabSelection: function(t) {
                        "leaderboard" === t ? this.leaderboardSelected || (this.leaderboardSelected = !0, this.pointRulesSelected = !1) : this.pointRulesSelected || (this.leaderboardSelected = !1, this.pointRulesSelected = !0)
                    }
                },
                computed: {
                    currentComponent: function() {
                        return this.leaderboardSelected ? "leaderboard-content" : "point-rules-content"
                    }
                },
                created: function() {
                    this.myEventHandler.$on("tab-selected", this.handleTabSelection)
                }
            },
            $m = Im,
            Nm = (i("aa0b"), Object(Jt["a"])($m, jm, Pm, !1, null, "1b4ee854", null)),
            Bm = Nm.exports,
            Gm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "play-content"
                }, [i(t.currentComponent, {
                    tag: "component"
                }), i("tabs")], 1)
            },
            qm = [],
            Hm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "tabs"
                }, [i("div", {
                    staticClass: "tabs-div"
                }, [i("div", {
                    staticClass: "prizes",
                    on: {
                        click: function(e) {
                            return t.selectPrizes()
                        }
                    }
                }), i("div", {
                    staticClass: "prize-draw-rules",
                    on: {
                        click: function(e) {
                            return t.selectPrizeDrawRules()
                        }
                    }
                }), i("div", {
                    staticClass: "selected-element",
                    class: {
                        "prize-draw-rules-selected": t.prizeDrawRulesActive
                    }
                })])])
            },
            Wm = [],
            Fm = {
                name: "tabs",
                data: function() {
                    return {
                        prizesActive: !0,
                        prizeDrawRulesActive: !1
                    }
                },
                computed: {
                    prizesSelected: function() {
                        return this.prizesActive
                    },
                    prizeDrawRulesSelected: function() {
                        return this.prizeDrawRulesActive
                    }
                },
                methods: {
                    selectPrizes: function() {
                        this.prizesActive = !0, this.prizeDrawRulesActive = !1, this.myEventHandler.$emit("tab-selected", "prizes")
                    },
                    selectPrizeDrawRules: function() {
                        this.prizesActive = !1, this.prizeDrawRulesActive = !0, this.myEventHandler.$emit("tab-selected", "prize-draw-rules")
                    }
                }
            },
            Um = Fm,
            Ym = (i("163b"), Object(Jt["a"])(Um, Hm, Wm, !1, null, "a14491a2", null)),
            Jm = Ym.exports,
            Vm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-draw-rules-content",
                    on: {
                        click: function(e) {
                            return t.openFullScreenPDRules()
                        }
                    }
                }, [i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$tc("prizedraw.play_rules_title", t.showRules.length)) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "prize-draw-rules-list"
                }, t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "prize-draw-rules-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.name))]), i("div", {
                        staticClass: "progress"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))])]), i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })])])])
                })), 0)])
            },
            Zm = [],
            Xm = Object(p["a"])("competitionModule"),
            Km = Xm.mapState,
            Qm = {
                name: "prize-draw-rules-content",
                computed: Object(d["a"])(Object(d["a"])({}, Km({
                    rules: function(t) {
                        return t.prizePoolData.ruleText
                    }
                })), {}, {
                    showRules: function() {
                        return this.rules
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    openFullScreenPDRules: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "prize-draw-rules"
                        })
                    }
                })
            },
            th = Qm,
            eh = (i("5e24"), Object(Jt["a"])(th, Vm, Zm, !1, null, "68473202", null)),
            ih = eh.exports,
            nh = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prizes-content",
                    on: {
                        click: function(e) {
                            return t.openFullScreenPrizes()
                        }
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showNoWin,
                        expression: "showNoWin"
                    }],
                    staticClass: "loserOuter floatBoxOuter"
                }, [i("div", {
                    staticClass: "floatBoxInner"
                }, [t._v(t._s(t.$t("prizedraw.award_empty_msg")))])]), i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("common.prizes")) + " "), i("div", {
                    staticClass: "down-chev-icon"
                })]), i("div", {
                    staticClass: "prizes-list"
                }, t._l(t.showPrizes, (function(e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prize-item"
                    }, [i("div", {
                        staticClass: "content"
                    }, [i("div", {
                        staticClass: "icon"
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "18",
                            height: "18"
                        }
                    })], 1), i("div", {
                        staticClass: "award"
                    }, [t._v(t._s(e.award))]), i("div", {
                        staticClass: "left"
                    }, [t._v(t._s(e.remain))])]), i("div", {
                        staticClass: "line"
                    })])
                })), 0)])
            },
            sh = [],
            ah = Object(p["a"])("competitionModule"),
            oh = ah.mapState,
            rh = {
                name: "prizes-content",
                data: function() {
                    return {
                        showNoWin: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, oh({
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    },
                    prizeAwards: function(t) {
                        return t.prizePoolData.award
                    },
                    displayLosingTicket: function(t) {
                        return t.prizePoolData.displayLosingTicket
                    }
                })), {}, {
                    showPrizes: function() {
                        return this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        })).slice(0, 3)
                    },
                    awardCount: function() {
                        return this.prizeAwards.length
                    },
                    latestAward: function() {
                        return this.prizeAwards[this.prizeAwards.length - 1]
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    openFullScreenPrizes: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "prizes"
                        })
                    }
                }),
                watch: {
                    awardCount: function() {
                        if ("EMPTY" === this.latestAward.awardType.category && this.displayLosingTicket) {
                            this.showNoWin && window.clearTimeout(this.showNoWin);
                            var t = this;
                            this.showNoWin = window.setTimeout((function() {
                                t.showNoWin = void 0
                            }), 3e3)
                        }
                    }
                }
            },
            ch = rh,
            lh = (i("cd7a"), Object(Jt["a"])(ch, nh, sh, !1, null, "5c69aa8c", null)),
            uh = lh.exports,
            dh = {
                name: "index",
                components: {
                    tabs: Jm,
                    PrizeDrawRulesContent: ih,
                    PrizesContent: uh
                },
                data: function() {
                    return {
                        prizesSelected: !0,
                        prizeRulesSelected: !1
                    }
                },
                methods: {
                    handleTabSelection: function(t) {
                        "prizes" === t ? this.prizesSelected || (this.prizesSelected = !0, this.prizeRulesSelected = !1) : this.prizeRulesSelected || (this.prizesSelected = !1, this.prizeRulesSelected = !0)
                    }
                },
                computed: {
                    currentComponent: function() {
                        return this.prizesSelected ? "prizes-content" : "prize-draw-rules-content"
                    }
                },
                created: function() {
                    this.myEventHandler.$on("tab-selected", this.handleTabSelection)
                }
            },
            ph = dh,
            mh = (i("a617"), Object(Jt["a"])(ph, Gm, qm, !1, null, "1afdf14e", null)),
            hh = mh.exports,
            fh = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "wrapper"
                }, [i("div", {
                    staticClass: "prize-draw-end-container"
                }, [i("div", {
                    staticClass: "content"
                }, [i("h1", [t._v(t._s(t.$t("prizedraw.over_title")))]), i("p", [t._v(t._s(t.$t("prizedraw.over_tips")))])])])])
            },
            _h = [],
            vh = {
                name: "result"
            },
            bh = vh,
            gh = (i("0856"), Object(Jt["a"])(bh, fh, _h, !1, null, "027189c1", null)),
            Ch = gh.exports,
            wh = Object(p["a"])("competitionModule"),
            Th = wh.mapState,
            Oh = wh.mapMutations,
            yh = {
                name: "PrizeDraw",
                components: {
                    PrizeLeft: xm,
                    Join: Bm,
                    Play: hh,
                    Result: Ch
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    }
                })), Th({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    tournamentStatus: function(t) {
                        return t.competitionData.status
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    }
                })), {}, {
                    ifBigTitle: function() {
                        return this._i18n.t("common.logo_prize_draw_text").length > 12
                    },
                    currentComponent: function() {
                        return this.registered ? "PRE_ACTIVE" === this.tournamentStatus ? "join" : "COMPLETED" === this.tournamentStatus ? "result" : "play" : "join"
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive"])), Oh(["resetPanelData"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: 0,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: 0,
                                tournamentStatus: this.tournamentStatus
                            }
                        }), this.setPanelActive(!1), this.resetPanelData()
                    }
                }, Object(p["c"])(["setShowFlyin"])), {}, {
                    openContextMenu: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                })
            },
            xh = yh,
            jh = (i("9a7e"), Object(Jt["a"])(xh, _m, vm, !1, null, "47bdfd36", null)),
            Ph = jh.exports,
            Sh = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "quest-panel"
                    }
                }, [i(t.currentComponent, {
                    tag: "component"
                })], 1)
            },
            kh = [],
            Eh = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "quest-join-play-container"
                }, [i("div", {
                    staticClass: "top-content"
                }, [t.termsText || t.termsLink ? i("div", {
                    staticClass: "menu-button-div"
                }, [i("div", {
                    staticClass: "menu-button",
                    on: {
                        click: t.setShowConditions
                    }
                })]) : t._e(), i("div", {
                    staticClass: "logo"
                }, [t._v(" " + t._s(t.$t("common.logo_quest_text")) + " ")]), t.panelActive ? i("timer-box") : t._e()], 1), t.questRegistered ? t._e() : i("div", {
                    staticClass: "mid-content"
                }, [t.showJoinButton ? i("join-button") : t._e()], 1), t.questRegistered ? t._e() : i("div", {
                    staticClass: "bottom-content"
                }, [i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "rowboxes"
                }, [i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value",
                    class: {
                        "small-value": t.smallTextValue
                    }
                }, [t._v(t._s(t.questGoal))]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("quest.join_play_goal")))])]), i("div", {
                    staticClass: "vline"
                }), i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value",
                    class: {
                        "small-value": t.smallTextValue
                    }
                }, [t._v(t._s(t.questReward))]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("quest.join_play_reward")))])]), t.questMax ? i("div", {
                    staticClass: "vline"
                }) : t._e(), t.questMax ? i("div", {
                    staticClass: "box"
                }, [i("div", {
                    staticClass: "value",
                    class: {
                        "small-value": t.smallTextValue
                    }
                }, [t._v(t._s(t.questMax))]), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("quest.join_play_max_reward")))])]) : t._e()])]), t.questRegistered ? i("div", {
                    staticClass: "bottom-content-reg"
                }, [i("div", {
                    staticClass: "rowcontainer"
                }, [i("div", {
                    staticClass: "leftheading"
                }, [t._v(t._s(t.$t("quest.join_play_reward")))]), i("div", {
                    staticClass: "statusarea"
                }, [i("div", {
                    staticClass: "icon rewardicon"
                }), i("div", {
                    staticClass: "value",
                    class: {
                        "small-value": t.smallTextValue
                    }
                }, [t._v(t._s(t.questReward))])])]), i("div", {
                    staticClass: "line"
                }), i("div", {
                    staticClass: "rowcontainer"
                }, [i("div", {
                    staticClass: "leftheading"
                }, [t._v(t._s(t.$t("quest.join_play_progress")))]), i("div", {
                    staticClass: "statusarea"
                }, [i("div", {
                    staticClass: "icon goalsicon"
                }), i("div", {
                    staticClass: "progressBar"
                }, [i("div", {
                    staticClass: "rule-box"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "name",
                    class: {
                        nobar: !t.questProgressData
                    }
                }, [t._v(t._s(t.questGoal))]), t.questProgressData ? i("div", {
                    staticClass: "progress"
                }, [t._v(t._s(t.questProgressData.current) + "/" + t._s(t.questProgressData.total))]) : t._e()]), t.questProgressData ? i("div", {
                    staticClass: "bar"
                }, [i("div", {
                    staticClass: "highlight",
                    style: {
                        width: t.questProgressData.progress
                    }
                })]) : t._e()])])])]), t.questMaxData ? i("div", {
                    staticClass: "rowcontainer"
                }, [i("div", {
                    staticClass: "leftheading"
                }), i("div", {
                    staticClass: "statusarea"
                }, [i("div", {
                    staticClass: "icon completedicon"
                }), t.questMaxData ? i("div", {
                    staticClass: "progressBar"
                }, [i("div", {
                    staticClass: "rule-box"
                }, [i("div", {
                    staticClass: "text"
                }, [i("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("quest.join_play_max_reward")))]), i("div", {
                    staticClass: "progress"
                }, [t._v(t._s(t.questMaxData.current) + "/" + t._s(t.questMaxData.max))])]), i("div", {
                    staticClass: "bar"
                }, [i("div", {
                    staticClass: "highlight",
                    style: {
                        width: t.questMaxData.progress
                    }
                })])])]) : t._e()])]) : t._e(), t.questMaxData.current === t.questMaxData.max ? i("div", {
                    staticClass: "sectionContainer"
                }, [i("div", {
                    staticClass: "sectionBoxed"
                }, [i("div", {
                    staticClass: "endMessage sectionValue"
                }, [t._v(t._s(t.$t("quest.timer_finished")))])])]) : t._e()]) : t._e()])
            },
            Mh = [],
            zh = Object(p["a"])("competitionModule"),
            Dh = zh.mapState,
            Lh = zh.mapGetters,
            Ah = {
                name: "JoinPlay",
                components: {
                    TimerBox: Rd,
                    JoinButton: Ud
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    }
                })), Dh({
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    },
                    termsText: function(t) {
                        return t.competitionData.termsText
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    }
                })), Lh(["questGoal", "questReward", "questProgress", "questProgressData", "questMaxData", "questMax", "questMaxRewards", "questRegistered", "showJoinButton"])), {}, {
                    smallTextTC: function() {
                        return "el" === this._i18n.locale || "hu" === this._i18n.locale
                    },
                    smallTextValue: function() {
                        return "bg" === this._i18n.locale || "ru" === this._i18n.locale
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    setShowConditions: function() {
                        this.termsText ? this.setShowFlyin({
                            show: !0,
                            content: "conditions"
                        }) : window.open(this.termsLink, "_blank"), this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.ItemClicked",
                            data: {
                                name: "ItemBeenClicked",
                                context: "cashTournament",
                                contextId: this.competitionToken,
                                itemName: "termsCondition"
                            }
                        })
                    }
                })
            },
            Rh = Ah,
            Ih = (i("c7fa"), Object(Jt["a"])(Rh, Eh, Mh, !1, null, "73ccffc6", null)),
            $h = Ih.exports,
            Nh = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "quest-over-container"
                }, [i("div", {
                    staticClass: "top-content flex-center"
                }, [i("div", {
                    staticClass: "logo"
                }), i("button", {
                    staticClass: "hide-btn flex-center",
                    on: {
                        click: t.closeGSP
                    }
                }, [i("p", [t._v(t._s(t.$t("common.hide")))]), i("svg-icon", {
                    attrs: {
                        iconClass: "hide-gsp-button-pt",
                        width: "37",
                        height: "37"
                    }
                })], 1)]), i("div", {
                    staticClass: "bottom-content flex-center"
                }, [i("p", [t._v(t._s(t.$t("quest.over_title")))]), i("h1", [t._v(t._s(t.$t("quest.over_thanks")))])])])
            },
            Bh = [],
            Gh = Object(p["a"])("competitionModule"),
            qh = Gh.mapState,
            Hh = {
                name: "Over",
                computed: Object(d["a"])({}, qh({
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setPanelActive"])), {}, {
                    closeGSP: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: 0,
                                interrupt: "N",
                                timestamp: this.competitionEndTime,
                                lbPosition: 0,
                                tournamentStatus: this.competitionStatus
                            }
                        }), this.setPanelActive(!1)
                    }
                })
            },
            Wh = Hh,
            Fh = (i("fe39"), Object(Jt["a"])(Wh, Nh, Bh, !1, null, "0a11c53a", null)),
            Uh = Fh.exports,
            Yh = Object(p["a"])("competitionModule"),
            Jh = Yh.mapState,
            Vh = {
                name: "Quest",
                components: {
                    JoinPlay: $h,
                    Over: Uh
                },
                computed: Object(d["a"])(Object(d["a"])({}, Jh({
                    registered: function(t) {
                        return t.playerData.registered
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    }
                })), {}, {
                    currentComponent: function() {
                        return this.registered && ["COMPLETED", "CANCELLED"].includes(this.competitionStatus) ? "over" : "join-play"
                    }
                })
            },
            Zh = Vh,
            Xh = (i("541c"), Object(Jt["a"])(Zh, Sh, kh, !1, null, "ad316610", null)),
            Kh = Xh.exports,
            Qh = Object(p["a"])("competitionModule"),
            tf = Qh.mapState,
            ef = {
                name: "TopPanel",
                components: {
                    Leaderboard: fm,
                    PrizeDraw: Ph,
                    Quest: Kh
                },
                computed: Object(d["a"])(Object(d["a"])({}, tf({
                    competitionType: function(t) {
                        return t.competitionData.type
                    }
                })), {}, {
                    currentComponent: function() {
                        var t = "";
                        return "COMPETITION" === this.competitionType && (t = "leaderboard"), "PRIZE_DRAW" === this.competitionType && (t = "prize-draw"), "PROMOTION" === this.competitionType && (t = "quest"), t
                    }
                })
            },
            nf = ef,
            sf = (i("4659"), Object(Jt["a"])(nf, Od, yd, !1, null, "180751df", null)),
            af = sf.exports,
            of = {
                name: "CompetitionPanel",
                components: {
                    Desktop: Va,
                    MobileLandscape: Td,
                    MobilePortrait: af
                },
                data: function() {
                    return {
                        currentLayout: "",
                        currentOrientation: ""
                    }
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    ifDesktop: function(t) {
                        return t.layoutData.ifDesktop
                    },
                    ifMobile: function(t) {
                        return t.layoutData.ifMobile
                    },
                    ifTablet: function(t) {
                        return t.layoutData.ifTablet
                    }
                })),
                methods: {
                    updateMobileComponent: function() {
                        if (this.ifMobile && 0 !== window.innerWidth && 0 !== window.innerHeight) {
                            var t = this.currentOrientation;
                            this.currentOrientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait", this.currentOrientation !== t && (this.currentLayout = "mobile-" + this.currentOrientation)
                        }
                    }
                },
                created: function() {
                    (this.ifDesktop || this.ifTablet) && (this.currentLayout = "desktop"), this.ifMobile && this.updateMobileComponent(), window.addEventListener("resize", this.updateMobileComponent)
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.updateMobileComponent)
                }
            },
            rf = of ,
            cf = (i("ab8b"), Object(Jt["a"])(rf, Mt, zt, !1, null, "dec3d026", null)),
            lf = cf.exports,
            uf = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "JackpotPanel"
                    }
                }, [t.panelPath ? i("external", {
                    attrs: {
                        name: "JackpotPanel",
                        url: t.panelPath
                    },
                    on: {
                        sendIframeWin: t.init
                    }
                }) : t._e()], 1)
            },
            df = [],
            pf = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("iframe", {
                    ref: t.name,
                    attrs: {
                        width: "100%",
                        height: "100%",
                        frameborder: "0",
                        scrolling: "no",
                        name: t.name,
                        src: t.cachebusterURL
                    }
                })
            },
            mf = [],
            hf = {
                name: "External",
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    url: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    cachebusterURL: function() {
                        this.url.split("?")[1];
                        return this.url
                    }
                },
                mounted: function() {
                    var t = this.$refs[this.name].contentWindow;
                    this.$emit("sendIframeWin", t)
                }
            },
            ff = hf,
            _f = Object(Jt["a"])(ff, pf, mf, !1, null, null, null),
            vf = _f.exports,
            bf = Object(p["a"])("jackpotModule"),
            gf = bf.mapState,
            Cf = {
                name: "JackpotPanel",
                components: {
                    External: vf
                },
                computed: Object(d["a"])({}, gf({
                    panelPath: function(t) {
                        return t.panelPath
                    }
                })),
                methods: {
                    init: function(t) {
                        yt.initPanel(t)
                    },
                    addResizeController: function(t) {
                        yt.addResizeController(t)
                    },
                    notifyPanelOrientation: function(t) {
                        yt.notifyPanelOrientation(t)
                    }
                }
            },
            wf = Cf,
            Tf = (i("fcd0"), Object(Jt["a"])(wf, uf, df, !1, null, "3c806d4c", null)),
            Of = Tf.exports,
            yf = null,
            xf = {
                name: "Panel",
                components: {
                    Competition: lf,
                    Jackpot: Of
                },
                data: function() {
                    return {
                        gameSize: {
                            top: 0,
                            left: 0,
                            width: window.innerWidth,
                            height: window.innerHeight,
                            z: 1
                        },
                        bojPanel: {
                            sizeOverride: !1,
                            width: 270,
                            height: 400,
                            scaling: !0,
                            physicalPixels: !1,
                            fullscreen: !1,
                            lastScale: 1
                        }
                    }
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    panelContent: function(t) {
                        return t.panelData.content
                    },
                    ifDesktop: function(t) {
                        return t.layoutData.ifDesktop
                    },
                    ifTablet: function(t) {
                        return t.layoutData.ifTablet
                    },
                    ifMobile: function(t) {
                        return t.layoutData.ifMobile
                    },
                    screenActive: function(t) {
                        return t.fullScreenData.show
                    }
                })),
                watch: {
                    panelActive: function(t) {
                        this.publishGameSize()
                    },
                    screenActive: function() {
                        this.publishGameSize()
                    }
                },
                methods: {
                    updateAutoScaling: function(t, e) {
                        var i = this.panelActive ? (e ? window.innerHeight - yf.offsetTop : window.innerWidth - yf.offsetLeft) / (e ? this.bojPanel.height : this.bojPanel.width) : 1;
                        return this.bojPanel.lastScale = i, this.bojPanel.physicalPixels && (t /= window.devicePixelRatio, i *= window.devicePixelRatio), e ? (yf.style.width = t + "px", yf.style.height = this.bojPanel.height + "px") : (yf.style.height = t + "px", yf.style.width = this.bojPanel.width + "px"), yf.style.transformOrigin = "0 0", yf.style.transform = "scale(" + i + ")", t * i
                    },
                    updateGameSizeForDesktop: function() {
                        var t = this.panelActive ? this.bojPanel.sizeOverride ? this.bojPanel.width : 270 : 0,
                            e = this.panelActive ? this.bojPanel.sizeOverride ? this.bojPanel.height : 800 : 0;
                        this.bojPanel.scaling ? (this.bojPanel.width = t, this.bojPanel.height = e, t = this.updateAutoScaling(t, !0)) : (yf.style.transform = "", yf.style.width = t + "px", yf.style.height = window.innerHeight - yf.offsetTop + "px", this.bojPanel.lastScale = 1), this.gameSize.top = yf.offsetTop, this.gameSize.left = yf.offsetLeft + t, this.gameSize.width = window.innerWidth - yf.offsetLeft - t, this.gameSize.height = window.innerHeight - yf.offsetTop, this.gameSize.width === this.gameSize.height && (this.gameSize.height = this.gameSize.height - 1), this.bojPanel.fullscreen && (yf.style.width = (window.innerWidth - yf.offsetLeft) / this.bojPanel.lastScale + "px", yf.style.height = (window.innerHeight - yf.offsetTop) / this.bojPanel.lastScale + "px")
                    },
                    updateGameSizeForLandscape: function() {
                        var t = this.panelActive ? this.bojPanel.sizeOverride ? this.bojPanel.width : 175 : 0,
                            e = this.panelActive ? this.bojPanel.sizeOverride ? this.bojPanel.height : 375 : 0;
                        this.bojPanel.scaling ? (this.bojPanel.width = t, this.bojPanel.height = e, t = this.updateAutoScaling(t, !0)) : (yf.style.transform = "", yf.style.width = t + "px", yf.style.height = window.innerHeight - yf.offsetTop + "px", this.bojPanel.lastScale = 1), this.gameSize.top = yf.offsetTop, this.gameSize.left = yf.offsetLeft + t, this.gameSize.width = window.innerWidth - yf.offsetLeft - t, this.gameSize.height = window.innerHeight - yf.offsetTop, this.gameSize.width === this.gameSize.height && (this.gameSize.height = this.gameSize.height - 1), this.bojPanel.fullscreen && (yf.style.width = (window.innerWidth - yf.offsetLeft) / this.bojPanel.lastScale + "px", yf.style.height = (window.innerHeight - yf.offsetTop) / this.bojPanel.lastScale + "px")
                    },
                    updateGameSizeForPortrait: function() {
                        var t = this.panelActive ? this.bojPanel.sizeOverride ? this.bojPanel.height : 197 : 0,
                            e = this.panelActive ? this.bojPanel.sizeOverride ? this.bojPanel.width : 375 : 0;
                        this.bojPanel.scaling ? (this.bojPanel.width = e, this.bojPanel.height = t, t = this.updateAutoScaling(t, !1)) : (yf.style.transform = "", yf.style.width = window.innerWidth - yf.offsetLeft + "px", yf.style.height = t + "px", this.bojPanel.lastScale = 1), this.gameSize.top = yf.offsetTop + t, this.gameSize.left = yf.offsetLeft, this.gameSize.width = window.innerWidth - yf.offsetLeft, this.gameSize.height = window.innerHeight - yf.offsetTop - t, this.bojPanel.fullscreen && (yf.style.width = (window.innerWidth - yf.offsetLeft) / this.bojPanel.lastScale + "px", yf.style.height = (window.innerHeight - yf.offsetTop) / this.bojPanel.lastScale + "px")
                    },
                    getGameSize: function() {
                        if (window.innerWidth && window.innerHeight && yf) {
                            if (this.ifMobile) {
                                var t = window.innerWidth >= window.innerHeight ? "Landscape" : "Portrait";
                                this.currentOrientation !== t && (Of.methods.notifyPanelOrientation(t.toUpperCase()), this.currentOrientation = t), this["updateGameSizeFor" + t]()
                            } else(this.ifDesktop || this.ifTablet) && this.updateGameSizeForDesktop();
                            this.gameSize.z = this.panelActive && (this.screenActive || this.bojPanel.fullscreen) ? 1 : 3
                        }
                        return this.gameSize
                    },
                    publishGameSize: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "GameService.Panel.Position",
                            data: {
                                game: this.getGameSize()
                            }
                        })
                    }
                },
                created: function() {
                    window.addEventListener("resize", this.publishGameSize), Of.methods.addResizeController({
                        resize: function(t) {
                            this.bojPanel.sizeOverride = !0, this.bojPanel.width = t.width, this.bojPanel.height = t.height, this.bojPanel.physicalPixels = t.physicalPixels, this.bojPanel.scaling = t.scaling || !1, this.publishGameSize()
                        }.bind(this),
                        fullscreen: function(t) {
                            this.bojPanel.fullscreen = t, this.publishGameSize()
                        }.bind(this)
                    })
                },
                mounted: function() {
                    yf = this.$refs.panel, this.getGameSize()
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.publishGameSize)
                }
            },
            jf = xf,
            Pf = (i("55dc"), Object(Jt["a"])(jf, kt, Et, !1, null, "8d8a73f4", null)),
            Sf = Pf.exports,
            kf = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "full-screen-container"
                }, [i("popup", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showPopup,
                        expression: "showPopup"
                    }]
                }), i("flyin", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showFlyin,
                        expression: "showFlyin"
                    }]
                }), i("game", {
                    directives: [{
                        name: "visible",
                        rawName: "v-visible",
                        value: t.showGame,
                        expression: "showGame"
                    }]
                })], 1)
            },
            Ef = [],
            Mf = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "flex-center",
                    attrs: {
                        id: "popup-container"
                    }
                }, [i("div", {
                    staticClass: "message-box"
                }, [i("keep-alive", [i(t.content, {
                    tag: "component"
                })], 1)], 1)])
            },
            zf = [],
            Df = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "popup-confirm-container"
                    }
                }, [i("base-layout", {
                    attrs: {
                        showHeader: !0
                    },
                    scopedSlots: t._u([{
                        key: "close",
                        fn: function() {
                            return [i("close-btn", {
                                attrs: {
                                    trigger: t.close
                                }
                            })]
                        },
                        proxy: !0
                    }, {
                        key: "title",
                        fn: function() {
                            return [t._v(" " + t._s(t.$t("popup.confirm_title")) + " ")]
                        },
                        proxy: !0
                    }, {
                        key: "content",
                        fn: function() {
                            return [i("p", {
                                staticClass: "content"
                            }, [t._v(t._s(t.competitionDescription))]), i("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.termsContent,
                                    expression: "termsContent"
                                }],
                                staticClass: "agree flex-center"
                            }, [i("div", {
                                staticClass: "square flex-center",
                                on: {
                                    click: t.toggleAgree
                                }
                            }, [i("svg-icon", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.agree,
                                    expression: "agree"
                                }],
                                attrs: {
                                    iconClass: "check-agree",
                                    width: "14",
                                    height: "10"
                                }
                            })], 1), i("div", {
                                ref: "agreement",
                                staticClass: "text"
                            })]), i("button", {
                                staticClass: "submit",
                                attrs: {
                                    disabled: !t.agree
                                },
                                on: {
                                    click: t.triggerContinue
                                }
                            }, [t._v(" " + t._s(t.$t("popup.button_continue")) + " ")])]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            Lf = [],
            Af = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "base-layout-container"
                }, [t.showHeader ? i("div", {
                    staticClass: "header"
                }, [i("div", {
                    staticClass: "left"
                }, [t._t("back")], 2), i("div", {
                    staticClass: "right"
                }, [t._t("close")], 2)]) : t._e(), i("div", {
                    staticClass: "main",
                    style: {
                        justifyContent: t.mainLayout
                    }
                }, [i("h1", {
                    staticClass: "title"
                }, [t._t("title")], 2), t._t("content")], 2)])
            },
            Rf = [],
            If = {
                name: "BaseLayout",
                props: {
                    showHeader: {
                        type: Boolean,
                        required: !0
                    },
                    mainLayout: {
                        validator: function(t) {
                            return ["flex-start", "center"].includes(t)
                        },
                        default: "center"
                    }
                }
            },
            $f = If,
            Nf = (i("70dc"), Object(Jt["a"])($f, Af, Rf, !1, null, "1f261af9", null)),
            Bf = Nf.exports,
            Gf = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "close",
                    on: {
                        click: t.trigger
                    }
                }, [i("p", {
                    staticClass: "text"
                }, [t._v(t._s(t.$t("popup.button_close")))]), i("svg-icon", {
                    attrs: {
                        iconClass: "menu-close",
                        width: "42",
                        height: "40"
                    }
                })], 1)
            },
            qf = [],
            Hf = {
                name: "CloseBtn",
                props: {
                    trigger: {
                        type: Function,
                        required: !0
                    }
                }
            },
            Wf = Hf,
            Ff = (i("9076"), Object(Jt["a"])(Wf, Gf, qf, !1, null, "96300f1c", null)),
            Uf = Ff.exports,
            Yf = Object(p["a"])("competitionModule"),
            Jf = Yf.mapState,
            Vf = Yf.mapMutations,
            Zf = {
                name: "Confirm",
                components: {
                    BaseLayout: Bf,
                    CloseBtn: Uf
                },
                data: function() {
                    return {
                        agree: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    panelActiveTime: function(t) {
                        return t.panelData.panelActiveTime
                    },
                    joinByNotification: function(t) {
                        return t.panelData.preActiveNotified
                    },
                    notificationTimestamp: function(t) {
                        return t.panelData.notificationTimestamp
                    }
                })), Jf({
                    termsText: function(t) {
                        return t.competitionData.termsText
                    },
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    },
                    playerName: function(t) {
                        return t.playerData.displayName
                    },
                    competitionType: function(t) {
                        return t.competitionData.type
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionDescription: function(t) {
                        return t.competitionData.description
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    },
                    prizeBattleRemainingTickets: function(t) {
                        return t.prizePoolData.ticketsRemaining
                    },
                    currencyCode: function(t) {
                        return t.competitionData.currency
                    },
                    timeUntilEnd: function(t) {
                        return t.competitionData.timeUntilEnd
                    },
                    nicknameAutoGen: function(t) {
                        return t.playerData.nicknameAutoGen
                    }
                })), {}, {
                    termsContent: function() {
                        return this.termsText || this.termsLink
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup", "setErrorMessage"])), Vf(["setRegistered", "setDisplayName"])), {}, {
                    toggleAgree: function() {
                        this.agree = !this.agree
                    },
                    showTerms: function() {
                        this.termsText ? this.setShowPopup({
                            show: !0,
                            content: "terms"
                        }) : window.open(this.termsLink, "_blank"), this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.ItemClicked",
                            data: {
                                name: "ItemBeenClicked",
                                context: "cashTournament",
                                contextId: this.competitionToken,
                                itemName: "termsCondition"
                            }
                        })
                    },
                    triggerContinue: function() {
                        "COMPETITION" !== this.competitionType || this.playerName || this.nicknameAutoGen ? this.registerPlayer() : this.showSetName()
                    },
                    showSetName: function() {
                        this.setShowPopup({
                            show: !0,
                            content: "name"
                        })
                    },
                    registerPlayer: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerJoinAct",
                            data: {
                                competitionId: this.competitionToken,
                                competitionType: "COMPETITION" === this.competitionType ? "LB" : "PRIZE_DRAW" === this.competitionType ? "PD" : "AQ",
                                timeGap: Math.floor((new Date - this.panelActiveTime) / 1e3),
                                prizesNumber: "PRIZE_DRAW" === this.competitionType ? this.prizeBattleRemainingTickets : "",
                                currencyCode: this.currencyCode,
                                notificationTimestamp: this.notificationTimestamp,
                                byNotification: this.joinByNotification ? "Y" : "N",
                                timeLeft: this.timeUntilEnd ? Math.floor(this.timeUntilEnd / 1e3) : void 0
                            }
                        }), this.myBus.request({
                            channel: "GameService",
                            topic: "Competition.Panel.JoinCompetition",
                            data: {
                                competitionId: this.competitionToken,
                                nickname: this.playerName
                            }
                        }, this.registerSuccess, this.registerFailed)
                    },
                    registerSuccess: function(t) {
                        this.setDisplayName(t.nickname), this.setRegistered(!0), this.setShowPopup({
                            show: !0,
                            content: "success"
                        })
                    },
                    registerFailed: function(t) {
                        if (t.code) switch (t.code) {
                            case "COMPETITION_REGISTERED_IN_OTHER_CURRENCY":
                                this.setErrorMessage(this.$t("popup.already_joined_currency"));
                                break;
                            default:
                                this.setErrorMessage(t.message)
                        } else this.setErrorMessage(t);
                        this.setShowPopup({
                            show: !0,
                            content: "error"
                        })
                    },
                    close: function() {
                        this.setShowPopup({
                            show: !1,
                            content: ""
                        })
                    }
                }),
                mounted: function() {
                    var t = document.createElement("a");
                    t.innerHTML = this.$t("common.terms_conditions"), t.addEventListener("click", this.showTerms), t.style.textDecoration = "underline", t.style.color = "var(--text-link, #d88eef)";
                    var e = document.createElement("span");
                    e.innerHTML = this.$t("popup.confirm_agree").split("[terms and conditions]")[0];
                    var i = document.createElement("span");
                    i.innerHTML = this.$t("popup.confirm_agree").split("[terms and conditions]")[1], this.$refs.agreement.appendChild(e), this.$refs.agreement.appendChild(t), this.$refs.agreement.appendChild(i), this.termsContent || (this.agree = !0)
                },
                watch: {
                    termsContent: function() {
                        this.termsContent ? this.agree = !1 : this.agree = !0
                    }
                }
            },
            Xf = Zf,
            Kf = (i("b248"), Object(Jt["a"])(Xf, Df, Lf, !1, null, "2af99f3a", null)),
            Qf = Kf.exports,
            t_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "popup-terms-container"
                    }
                }, [i("base-layout", {
                    attrs: {
                        showHeader: !0,
                        mainLayout: "flex-start"
                    },
                    scopedSlots: t._u([{
                        key: "back",
                        fn: function() {
                            return [i("back-btn", {
                                attrs: {
                                    trigger: t.back
                                }
                            })]
                        },
                        proxy: !0
                    }, {
                        key: "content",
                        fn: function() {
                            return [i("h1", [t._v(t._s(t.$t("common.terms_conditions")))]), i("div", {
                                staticClass: "content"
                            }, [t._l(t.termsList, (function(e, n) {
                                return i("p", {
                                    key: n
                                }, [t._v(" " + t._s(e) + " ")])
                            })), t.termsLink ? i("a", {
                                attrs: {
                                    href: t.termsLink,
                                    target: "_blank"
                                }
                            }, [t._v(" " + t._s(t.$t("common.terms_conditions")) + " ")]) : t._e()], 2)]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            e_ = [],
            i_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "back",
                    on: {
                        click: t.trigger
                    }
                }, [i("div", {
                    staticClass: "icon flex-center"
                }, [i("svg-icon", {
                    attrs: {
                        iconClass: "arrow-back",
                        width: "8",
                        height: "14"
                    }
                })], 1), i("p", {
                    staticClass: "text"
                }, [t._v(t._s(t.$t("popup.button_back")))])])
            },
            n_ = [],
            s_ = {
                name: "BackBtn",
                props: {
                    trigger: {
                        type: Function,
                        required: !0
                    }
                }
            },
            a_ = s_,
            o_ = (i("2d08"), Object(Jt["a"])(a_, i_, n_, !1, null, "22f77dfc", null)),
            r_ = o_.exports,
            c_ = Object(p["a"])("competitionModule"),
            l_ = c_.mapState,
            u_ = {
                name: "Terms",
                components: {
                    BaseLayout: Bf,
                    BackBtn: r_
                },
                computed: Object(d["a"])(Object(d["a"])({}, l_({
                    termsText: function(t) {
                        return t.competitionData.termsText
                    },
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    }
                })), {}, {
                    termsList: function() {
                        return this.termsText ? this.termsText.trim().split("\n") : []
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    back: function() {
                        this.setShowPopup({
                            show: !0,
                            content: "confirm"
                        })
                    }
                })
            },
            d_ = u_,
            p_ = (i("dedf"), Object(Jt["a"])(d_, t_, e_, !1, null, "fb48ee18", null)),
            m_ = p_.exports,
            h_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "popup-name-container"
                    }
                }, [i("base-layout", {
                    attrs: {
                        showHeader: !0,
                        mainLayout: "flex-start"
                    },
                    scopedSlots: t._u([{
                        key: "close",
                        fn: function() {
                            return [i("close-btn", {
                                attrs: {
                                    trigger: t.close
                                }
                            })]
                        },
                        proxy: !0
                    }, {
                        key: "title",
                        fn: function() {
                            return [t._v(" " + t._s(t.$t("popup.name_title")) + " ")]
                        },
                        proxy: !0
                    }, {
                        key: "content",
                        fn: function() {
                            return [i("p", {
                                staticClass: "content"
                            }, [t._v(" " + t._s(t.$t("popup.name_tips")) + " ")]), i("p", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.showWarning,
                                    expression: "showWarning"
                                }],
                                staticClass: "content warning"
                            }, [t._v(t._s(t.warnMessage))]), i("input", {
                                directives: [{
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value: t.inputName,
                                    expression: "inputName",
                                    modifiers: {
                                        trim: !0
                                    }
                                }],
                                attrs: {
                                    type: "text",
                                    id: "name-input",
                                    placeholder: "e.g. John Smith"
                                },
                                domProps: {
                                    value: t.inputName
                                },
                                on: {
                                    focus: t.hideWarnMsg,
                                    input: function(e) {
                                        e.target.composing || (t.inputName = e.target.value.trim())
                                    },
                                    blur: function(e) {
                                        return t.$forceUpdate()
                                    }
                                }
                            }), i("button", {
                                staticClass: "submit",
                                style: {
                                    marginTop: t.buttonMarginTop
                                },
                                attrs: {
                                    disabled: t.buttonDisabled
                                },
                                on: {
                                    click: t.triggerContinue
                                }
                            }, [t._v(" " + t._s(t.$t("popup.button_continue")) + " ")])]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            f_ = [],
            __ = Object(p["a"])("competitionModule"),
            v_ = __.mapState,
            b_ = __.mapMutations,
            g_ = {
                name: "Name",
                components: {
                    BaseLayout: Bf,
                    CloseBtn: Uf
                },
                data: function() {
                    return {
                        showWarning: !1,
                        warnMessage: "",
                        inputName: void 0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, v_({
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    competitionDescription: function(t) {
                        return t.competitionData.description
                    },
                    competitionStatus: function(t) {
                        return t.competitionData.status
                    },
                    competitionType: function(t) {
                        return t.competitionData.type
                    },
                    prizeBattleRemainingTickets: function(t) {
                        return t.prizePoolData.ticketsRemaining
                    },
                    currencyCode: function(t) {
                        return t.competitionData.currency
                    },
                    timeUntilEnd: function(t) {
                        return t.competitionData.timeUntilEnd
                    }
                })), Object(p["d"])({
                    panelActiveTime: function(t) {
                        return t.panelData.panelActiveTime
                    },
                    joinByNotification: function(t) {
                        return t.panelData.preActiveNotified
                    },
                    notificationTimestamp: function(t) {
                        return t.panelData.notificationTimestamp
                    }
                })), {}, {
                    buttonDisabled: function() {
                        return this.showWarning || !this.inputName
                    },
                    buttonMarginTop: function() {
                        return this.showWarning ? "30px" : "54px"
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup", "setErrorMessage"])), b_(["setDisplayName", "setRegistered"])), {}, {
                    registerPlayer: function() {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerJoinAct",
                            data: {
                                competitionId: this.competitionToken,
                                competitionType: "COMPETITION" === this.competitionType ? "LB" : "PRIZE_DRAW" === this.competitionType ? "PD" : "AQ",
                                timeGap: Math.floor((new Date - this.panelActiveTime) / 1e3),
                                prizesNumber: "PRIZE_DRAW" === this.competitionType ? this.prizeBattleRemainingTickets : "",
                                currencyCode: this.currencyCode,
                                notificationTimestamp: this.notificationTimestamp,
                                byNotification: this.joinByNotification ? "Y" : "N",
                                timeLeft: this.timeUntilEnd ? Math.floor(this.timeUntilEnd / 1e3) : void 0
                            }
                        }), this.myBus.request({
                            channel: "GameService",
                            topic: "Competition.Panel.JoinCompetition",
                            data: {
                                competitionId: this.competitionToken,
                                nickname: this.inputName
                            }
                        }, this.registerSuccess, this.registerFailed)
                    },
                    registerSuccess: function(t) {
                        this.setDisplayName(t.nickname), this.setRegistered(!0), this.setShowPopup({
                            show: !0,
                            content: "success"
                        })
                    },
                    registerFailed: function(t) {
                        t && t.status && ("retry" === t.status ? this.showWarnMsg(t) : (this.setErrorMessage(t), this.setShowPopup({
                            show: !0,
                            content: "error"
                        })))
                    },
                    triggerContinue: function() {
                        this.inputName && this.registerPlayer()
                    },
                    close: function() {
                        this.setShowPopup({
                            show: !1,
                            content: ""
                        })
                    },
                    hideWarnMsg: function() {
                        this.warnMessage = "", this.showWarning = !1
                    },
                    showWarnMsg: function(t) {
                        if (t && t.code) {
                            switch (t.code) {
                                case "BAD_NICKNAME":
                                    this.warnMessage = this.$t("popup.name_warning_bad");
                                    break;
                                case "NICKNAME_EXISTED":
                                    this.warnMessage = this.$t("popup.name_warning_exist");
                                    break;
                                default:
                                    this.warnMessage = ""
                            }
                            this.showWarning = !0
                        }
                    }
                })
            },
            C_ = g_,
            w_ = (i("accf"), Object(Jt["a"])(C_, h_, f_, !1, null, "23330b6c", null)),
            T_ = w_.exports,
            O_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "popup-error-container"
                    }
                }, [i("base-layout", {
                    attrs: {
                        showHeader: !1
                    },
                    scopedSlots: t._u([{
                        key: "title",
                        fn: function() {
                            return [t._v(" " + t._s(t.$t("popup.error_title")) + " ")]
                        },
                        proxy: !0
                    }, {
                        key: "content",
                        fn: function() {
                            return [i("p", {
                                staticClass: "content"
                            }, [t._v(t._s(t.message))]), i("button", {
                                on: {
                                    click: t.close
                                }
                            }, [t._v(t._s(t.$t("popup.button_ok")))])]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            y_ = [],
            x_ = {
                name: "Error",
                components: {
                    BaseLayout: Bf
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    message: function(t) {
                        return t.errorMessage
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    close: function() {
                        this.setShowPopup({
                            show: !1,
                            content: ""
                        })
                    }
                })
            },
            j_ = x_,
            P_ = (i("25fb"), Object(Jt["a"])(j_, O_, y_, !1, null, "6ce24736", null)),
            S_ = P_.exports,
            k_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "popup-success-container"
                    }
                }, [t.showNickname ? i("div", [i("h1", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("popup.success_title_1")) + " ")]), i("div", {
                    staticClass: "nickname"
                }, [i("p", [t._v(t._s(t.$t("popup.success_tip")))]), i("h2", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.displayName))])])]) : i("div", [i("h1", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("popup.success_title_2")))]), i("h2", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.$t("popup.success_enjoy")))])]), i("button", {
                    on: {
                        click: t.close
                    }
                }, [t._v(t._s(t.$t("popup.button_ok")))])])
            },
            E_ = [],
            M_ = Object(p["a"])("competitionModule"),
            z_ = M_.mapState,
            D_ = {
                name: "Success",
                computed: Object(d["a"])(Object(d["a"])({}, z_({
                    displayName: function(t) {
                        return t.playerData.displayName
                    },
                    competitionType: function(t) {
                        return t.competitionData.type
                    }
                })), {}, {
                    showNickname: function() {
                        return ["COMPETITION"].includes(this.competitionType)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    close: function() {
                        this.setShowPopup({
                            show: !1,
                            content: ""
                        })
                    }
                })
            },
            L_ = D_,
            A_ = (i("0799"), Object(Jt["a"])(L_, k_, E_, !1, null, "aceef7be", null)),
            R_ = A_.exports,
            I_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "flex-center",
                    attrs: {
                        id: "popup-award-container"
                    }
                }, [i("base-layout", {
                    attrs: {
                        showHeader: !1
                    },
                    scopedSlots: t._u([{
                        key: "content",
                        fn: function() {
                            return [i("h1", [t._v(t._s(t._f("lineText")(t.awardMessage, 0))), i("br"), t._v(t._s(t._f("lineText")(t.awardMessage, 1)))]), i("p", {
                                staticClass: "award"
                            }, [t._v(t._s(t._f("lineText")(t.awardMessage, 2)))]), i("h2", [t._v(t._s(t._f("lineText")(t.awardMessage, 3)))]), i("p", {
                                staticClass: "tips"
                            }, [t._v(t._s(t._f("lineText")(t.awardMessage, 4)))]), i("div", {
                                staticClass: "buttons flex-center"
                            }, t._l(t.buttons, (function(e) {
                                return i("button", {
                                    key: e.Text,
                                    on: {
                                        click: function(i) {
                                            return t.buttonTriggered(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("popup.button_continue_playing")) + " ")])
                            })), 0)]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            $_ = [],
            N_ = Object(p["a"])("competitionModule"),
            B_ = N_.mapState,
            G_ = {
                name: "Award",
                components: {
                    BaseLayout: Bf
                },
                computed: Object(d["a"])(Object(d["a"])({}, B_({
                    awardInfo: function(t) {
                        return t.awardMessage
                    },
                    winPrize: function(t) {
                        return t.awardMessage.winPrize
                    },
                    awardType: function(t) {
                        return t.awardMessage.awardType
                    },
                    buttons: function(t) {
                        return t.awardMessage.buttons
                    },
                    buttonsCallback: function(t) {
                        return t.awardMessage.buttonsCallback
                    },
                    lastAwardTimestamp: function(t) {
                        return t.competitionData.lastAwardTimestamp
                    },
                    playerPosition: function(t) {
                        return t.playerData.position
                    },
                    competitionType: function(t) {
                        return t.competitionData.type
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    prizesLevels: function(t) {
                        return "COMPETITION" === t.competitionData.type ? t.leaderboardData.levels : t.prizePoolData.prizeList
                    },
                    prizeAmount: function(t) {
                        return "COMPETITION" === t.competitionData.type ? 0 : t.prizePoolData.award[t.prizePoolData.award.length - 1].amount
                    }
                })), {}, {
                    awardMessage: function() {
                        if (this.winPrize && ["FREESPIN", "CASH"].includes(this.awardType)) {
                            var t = "popup.award_",
                                e = {
                                    winPrize: this.winPrize
                                };
                            switch (this.competitionType) {
                                case "COMPETITION":
                                    t += "leaderboard_", t += this.awardType.toLowerCase(), this.playerPosition ? (t += "_with_rank", e.winRank = this.playerPosition) : t += "_without_rank";
                                    break;
                                case "PRIZE_DRAW":
                                    t += "prizedraw_", t += this.awardType.toLowerCase();
                                    break;
                                case "PROMOTION":
                                    t += "quest_", t += this.awardType.toLowerCase();
                                    break;
                                default:
                                    break
                            }
                            return this.$t(t, e)
                        }
                    }
                }),
                filters: {
                    lineText: function(t, e) {
                        if (!t || "number" !== typeof e) return "";
                        var i = t.split("\n");
                        return i[e] || " "
                    }
                },
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    buttonTriggered: function(t) {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PrizeHit",
                            data: {
                                competitionId: this.competitionToken,
                                prizeType: this.awardType,
                                prizeLevel: this.findAwardLevel(this.awardInfo),
                                prizeAmount: this.prizeAmount,
                                action: "continue",
                                timestamp: this.lastAwardTimestamp
                            }
                        }), this.buttonsCallback(t.Cmd["@name"]), this.setShowPopup({
                            show: !1,
                            content: ""
                        })
                    },
                    findAwardLevel: function(t) {
                        var e = "FREESPIN" === t.awardType ? this._i18n.tc("common.award_spins", t.winPrize) : t.winPrize,
                            i = this.prizesLevels.find((function(t) {
                                return t.award === e
                            }));
                        return this.prizesLevels.indexOf(i) + 1
                    }
                })
            },
            q_ = G_,
            H_ = (i("4451"), Object(Jt["a"])(q_, I_, $_, !1, null, "a5a37618", null)),
            W_ = H_.exports,
            F_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "popup-cancel-container"
                    }
                }, [i("base-layout", {
                    attrs: {
                        showHeader: !1
                    },
                    scopedSlots: t._u([{
                        key: "content",
                        fn: function() {
                            return [i("p", {
                                staticClass: "content"
                            }, [t._v(t._s(t.cancelMessage))]), i("div", {
                                staticClass: "buttons flex-center"
                            }, t._l(t.buttons, (function(e) {
                                return i("button", {
                                    key: e.Text,
                                    on: {
                                        click: function(i) {
                                            return t.buttonTriggered(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("popup.button_ok")) + " ")])
                            })), 0)]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            U_ = [],
            Y_ = Object(p["a"])("competitionModule"),
            J_ = Y_.mapState,
            V_ = {
                name: "Cancel",
                components: {
                    BaseLayout: Bf
                },
                computed: Object(d["a"])(Object(d["a"])({}, J_({
                    cancelWithAward: function(t) {
                        return t.cancelMessage.withAward
                    },
                    buttons: function(t) {
                        return t.cancelMessage.buttons
                    },
                    buttonsCallback: function(t) {
                        return t.cancelMessage.buttonsCallback
                    },
                    competitionToken: function(t) {
                        return t.competitionData.token
                    },
                    position: function(t) {
                        return t.playerData.position
                    },
                    spinsLeft: function(t) {
                        return t.leaderboardData.spinRemaining
                    },
                    competitionEndTime: function(t) {
                        return t.competitionData.competitionEndTime
                    }
                })), {}, {
                    cancelMessage: function() {
                        var t = this.cancelWithAward ? "popup.cancel_with_award" : "popup.cancel_without_award";
                        return this.$t(t)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup", "setPanelActive"])), {}, {
                    buttonTriggered: function(t) {
                        this.myBus.publish({
                            channel: "GameService",
                            topic: "Competition.Panel.PlayerEndAct",
                            data: {
                                competitionId: this.competitionToken,
                                action: "Wager",
                                spinLeft: this.spinsLeft,
                                interrupt: "Y",
                                timestamp: this.competitionEndTime,
                                lbPosition: this.position,
                                tournamentStatus: "cancelled"
                            }
                        }), this.buttonsCallback(t.Cmd["@name"]), this.setShowPopup({
                            show: !1,
                            content: ""
                        }), this.setPanelActive(!1)
                    }
                })
            },
            Z_ = V_,
            X_ = (i("ae9d"), Object(Jt["a"])(Z_, F_, U_, !1, null, "6288ad74", null)),
            K_ = X_.exports,
            Q_ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "popup-progress-container"
                    }
                }, [i("base-layout", {
                    attrs: {
                        showHeader: !1
                    },
                    scopedSlots: t._u([{
                        key: "title",
                        fn: function() {
                            return [t._v(" " + t._s(t._f("lineText")(t.$t("popup.in_progress"), 0)) + " ")]
                        },
                        proxy: !0
                    }, {
                        key: "content",
                        fn: function() {
                            return [i("p", {
                                staticClass: "content"
                            }, [t._v(" " + t._s(t._f("lineText")(t.$t("popup.in_progress"), 1)) + " ")]), i("div", {
                                staticClass: "buttons flex-center"
                            }, t._l(t.buttons, (function(e) {
                                return i("button", {
                                    key: e.Text,
                                    on: {
                                        click: function(i) {
                                            return t.buttonTriggered(e)
                                        }
                                    }
                                }, [t._v(" " + t._s(t.$t("popup.button_continue_playing")) + " ")])
                            })), 0)]
                        },
                        proxy: !0
                    }])
                })], 1)
            },
            tv = [],
            ev = Object(p["a"])("competitionModule"),
            iv = ev.mapState,
            nv = {
                name: "Progress",
                components: {
                    BaseLayout: Bf
                },
                computed: Object(d["a"])({}, iv({
                    message: function(t) {
                        return t.inProgressMessage.message
                    },
                    buttons: function(t) {
                        return t.inProgressMessage.buttons
                    },
                    buttonsCallback: function(t) {
                        return t.inProgressMessage.buttonsCallback
                    }
                })),
                filters: {
                    lineText: function(t, e) {
                        if (!t || "number" !== typeof e) return "";
                        var i = t.split("\n");
                        return i[e] || " "
                    }
                },
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowPopup"])), {}, {
                    buttonTriggered: function(t) {
                        this.buttonsCallback(t.Cmd["@name"]), this.setShowPopup({
                            show: !1,
                            content: ""
                        }), this.myEventHandler.$emit("progressPopupClosed")
                    }
                })
            },
            sv = nv,
            av = (i("0aa2"), Object(Jt["a"])(sv, Q_, tv, !1, null, "5c0c4ffa", null)),
            ov = av.exports,
            rv = {
                name: "Popup",
                components: {
                    Confirm: Qf,
                    Terms: m_,
                    Name: T_,
                    Error: S_,
                    Success: R_,
                    Award: W_,
                    Cancel: K_,
                    InProgress: ov
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    content: function(t) {
                        return t.fullScreenData.popup.content
                    }
                }))
            },
            cv = rv,
            lv = (i("5bbd"), Object(Jt["a"])(cv, Mf, zf, !1, null, "686eedb6", null)),
            uv = lv.exports,
            dv = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: {
                        awardquest: "PROMOTION" === this.competitionType
                    },
                    attrs: {
                        id: "flyin-container"
                    },
                    on: {
                        click: function(e) {
                            return e.target !== e.currentTarget ? null : t.hideFlyin.apply(null, arguments)
                        }
                    }
                }, [i("div", {
                    staticClass: "logo-div"
                }, [i("div", {
                    staticClass: "context-menu-button-div"
                }, [i("div", {
                    staticClass: "context-menu-button",
                    class: {
                        rotated: t.triggerTextTransition
                    },
                    on: {
                        click: t.hideFlyin
                    }
                })]), i("div", {
                    staticClass: "logo",
                    class: {
                        smallerTitle: t.ifBigTitle
                    }
                }, [t._v(t._s(t.$t("common." + t.currentComponent)))])]), i("keep-alive", [i(t.content, {
                    tag: "component",
                    staticClass: "pretrans",
                    class: {
                        posttrans: t.triggerComponentTransition
                    }
                })], 1)], 1)
            },
            pv = [],
            mv = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "conditions-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.terms_conditions")))])]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, [t._l(t.conditionsList, (function(e, n) {
                    return i("p", {
                        key: n
                    }, [t._v(" " + t._s(e) + " ")])
                })), t.termsLink ? i("a", {
                    attrs: {
                        href: t.termsLink,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.$t("common.terms_conditions")))]) : t._e()], 2), i("div", {
                    staticClass: "mask"
                })])
            },
            hv = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            fv = Object(p["a"])("competitionModule"),
            _v = fv.mapState,
            vv = fv.mapGetters,
            bv = {
                name: "Conditions",
                computed: Object(d["a"])(Object(d["a"])({}, _v({
                    termsLink: function(t) {
                        return t.competitionData.termsLink
                    },
                    competitionType: function(t) {
                        return t.competitionData.type
                    }
                })), vv(["conditionsList"])),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    triggerBack: function() {
                        "PROMOTION" === this.competitionType ? this.setShowFlyin({
                            show: !1,
                            content: ""
                        }) : this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    },
                    initializeScrollBar: function(t) {
                        new this.PerfectScrollbar(t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    }
                }),
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.initializeScrollBar(t.$refs.content)
                    }))
                }
            },
            gv = bv,
            Cv = (i("9074"), Object(Jt["a"])(gv, mv, hv, !1, null, "15ce920b", null)),
            wv = Cv.exports,
            Tv = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prizes-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("common.prizes")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "content"
                }, [i(t.componentToLoad, {
                    tag: "component",
                    attrs: {
                        showAll: !0,
                        line: "gradient"
                    }
                }), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 1)])
            },
            Ov = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            yv = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list-wrapper"
                }, t._l(t.prizes, (function(e, n) {
                    return i("div", {
                        key: e.rank,
                        staticClass: "prize-item",
                        class: {
                            menuRowHeight: t.showAll, bold: "1st" === e.rank || "2nd" === e.rank || "3rd" === e.rank
                        }
                    }, [i("div", {
                        staticClass: "content",
                        class: ["top-" + e.rank]
                    }, [i("div", {
                        staticClass: "left",
                        class: {
                            menuLeft: t.showAll
                        }
                    }, ["1" !== e.rank && "2" !== e.rank && "3" !== e.rank ? i("div", [t._v(" " + t._s(e.rank) + " ")]) : t._e()]), i("div", {
                        staticClass: "right",
                        class: {
                            menuRight: t.showAll
                        }
                    }, [t._v(" " + t._s(e.award) + " ")])]), n !== t.prizes.length - 1 ? i("div", {
                        class: ["line", t.line]
                    }) : t._e()])
                })), 0)
            },
            xv = [],
            jv = Object(p["a"])("competitionModule"),
            Pv = jv.mapState,
            Sv = {
                name: "prize-list",
                props: {
                    showAll: {
                        type: Boolean,
                        required: !0
                    },
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, Pv({
                    leaderboardPrizes: function(t) {
                        return t.leaderboardData.levels
                    }
                })), {}, {
                    prizes: function() {
                        return this.showAll ? this.leaderboardPrizes : this.leaderboardPrizes.slice(0, 3)
                    }
                })
            },
            kv = Sv,
            Ev = (i("2fbd"), Object(Jt["a"])(kv, yv, xv, !1, null, "25888c92", null)),
            Mv = Ev.exports,
            zv = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-list",
                    on: {
                        click: function(e) {
                            return t.openFullScreenPrizes()
                        }
                    }
                }, t._l(t.showPrizes, (function(e, n) {
                    return i("div", {
                        key: e.id,
                        staticClass: "prize-item",
                        class: {
                            menuRowFormat: t.showAll
                        }
                    }, [i("div", {
                        staticClass: "content",
                        class: {
                            bold: n < 3
                        }
                    }, [i("div", {
                        staticClass: "icon",
                        class: {
                            menuIcon: t.showAll
                        }
                    }, [i("svg-icon", {
                        attrs: {
                            iconClass: "ticket",
                            width: "18",
                            height: "18"
                        }
                    })], 1), i("div", {
                        staticClass: "award",
                        class: {
                            menuAward: t.showAll
                        }
                    }, [t._v(t._s(e.award))]), i("div", {
                        staticClass: "left",
                        class: {
                            menuLeft: t.showAll
                        }
                    }, [t._v(t._s(e.remain))])]), i("div", {
                        class: ["line", t.line]
                    })])
                })), 0)
            },
            Dv = [],
            Lv = Object(p["a"])("competitionModule"),
            Av = Lv.mapState,
            Rv = {
                name: "prize-list",
                props: {
                    showAll: {
                        type: Boolean,
                        required: !0
                    },
                    line: {
                        validator: function(t) {
                            return ["solid", "gradient"].includes(t)
                        },
                        required: !0
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, Av({
                    prizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), {}, {
                    showPrizes: function() {
                        return this.showAll ? this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        })) : this.prizeList.filter((function(t) {
                            return "EMPTY" !== t.category
                        })).slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    openFullScreenPrizes: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "prizes"
                        })
                    },
                    awardText: function(t) {
                        return getAward(t)
                    },
                    remainText: function(t) {
                        return t <= 0 ? "All Gone!" : "x ".concat(t, " Ticket").concat(t > 1 ? "s" : "", " Left")
                    }
                })
            },
            Iv = Rv,
            $v = (i("65e8"), Object(Jt["a"])(Iv, zv, Dv, !1, null, "2117b690", null)),
            Nv = $v.exports,
            Bv = Object(p["a"])("competitionModule"),
            Gv = Bv.mapState,
            qv = {
                name: "Prizes",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                components: {
                    PrizeListCompetition: Mv,
                    PrizeListPrizeDraw: Nv
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Gv({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.fullScreenData.flyin.content
                    }
                })), {}, {
                    componentToLoad: function() {
                        return "COMPETITION" === this.tournamentType ? "prize-list-competition" : "prize-list-prize-draw"
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    triggerBack: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "prizes" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            Hv = qv,
            Wv = (i("c5c6"), Object(Jt["a"])(Hv, Tv, Ov, !1, null, "3d9a5266", null)),
            Fv = Wv.exports,
            Uv = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "points-rules-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("leaderboard.play_points_rules")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "points-rules-list"
                }, [t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name
                    }, [i("div", {
                        staticClass: "points-rule-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text",
                        class: {
                            "multiplier-rule": t.isMultiplierRule(e)
                        }
                    }, [i("div", {
                        staticClass: "name",
                        class: {
                            "multiplier-rule-name": t.isMultiplierRule(e)
                        }
                    }, [t._v(" " + t._s(e.name) + " ")]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "point"
                    }, [t._v(t._s(e.points))])]), t.isMultiplierRule(e) ? t._e() : i("div", {
                        staticClass: "progress"
                    }, [i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })]), i("div", {
                        staticClass: "text"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))])])])]), n !== t.showRules.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 2)])
            },
            Yv = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            Jv = Object(p["a"])("competitionModule"),
            Vv = Jv.mapState,
            Zv = {
                name: "PointsRules",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Vv({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    rules: function(t) {
                        return t.leaderboardData.ruleText
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.fullScreenData.flyin.content
                    }
                })), {}, {
                    showRules: function() {
                        return L(this.rules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    triggerBack: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "points-rules" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            Xv = Zv,
            Kv = (i("0d6c"), Object(Jt["a"])(Xv, Uv, Yv, !1, null, "8e078e40", null)),
            Qv = Kv.exports,
            tb = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "prize-draw-rules-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("prizedraw.join_rules_title")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "prize-draw-rules-list"
                }, [t._l(t.showRules, (function(e, n) {
                    return i("div", {
                        key: e.name
                    }, [i("div", {
                        staticClass: "prize-draw-rules-item"
                    }, [i("div", {
                        staticClass: "icon",
                        class: "icon-" + (n + 1)
                    }), i("div", {
                        staticClass: "rule-box"
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.name))]), i("div", {
                        staticClass: "point"
                    }, [t._v(t._s(e.progress_current) + "/" + t._s(e.progress_total))])]), i("div", {
                        staticClass: "progress"
                    }, [i("div", {
                        staticClass: "bar"
                    }, [i("div", {
                        staticClass: "highlight",
                        style: {
                            width: e.progress_percentage
                        }
                    })])])])]), n !== t.showRules.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 2)])
            },
            eb = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            ib = Object(p["a"])("competitionModule"),
            nb = ib.mapState,
            sb = {
                name: "prize-draw-rules",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, nb({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    rules: function(t) {
                        return t.prizePoolData.ruleText
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.fullScreenData.flyin.content
                    }
                })), {}, {
                    showRules: function() {
                        return L(this.rules, "points", "desc").slice(0, 3)
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    triggerBack: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "prize-draw-rules" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            ab = sb,
            ob = (i("33d3"), Object(Jt["a"])(ab, tb, eb, !1, null, "2996d58b", null)),
            rb = ob.exports,
            cb = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "rules-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t("leaderboard.join_tournament_rules")))]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    ref: "content",
                    staticClass: "content"
                }, ["COMPETITION" === t.tournamentType ? i("div", [i("p", [t._v(t._s(t.$t("leaderboard.join_rules_1", {
                    startTime: t.startTime,
                    stopTime: t.stopTime
                })))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_2")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_3")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_4")))]), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_5")))]), i("ul", t._l(t.lbRuleText, (function(e) {
                    return i("li", {
                        key: e.name
                    }, [i("b", [t._v(t._s(e.name) + " " + t._s(t.isMultiplierRule(e) ? "" : "(" + e.points + ")"))]), i("br"), i("p", [t._v(t._s(e.condition_text))])])
                })), 0), i("p", [t._v(t._s(t.$t("leaderboard.join_rules_6")))]), i("ul", t._l(t.lbLevels, (function(e) {
                    return i("li", {
                        key: e.rank
                    }, [i("b", [t._v(t._s(e.rank) + " : ")]), t._v(t._s(e.award) + " ")])
                })), 0)]) : t._e(), "PRIZE_DRAW" === t.tournamentType ? i("div", [i("p", [t._v(t._s(t.$t("prizedraw.join_rules_1", {
                    startTime: t.startTime
                })))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_2")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_3")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_4")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_5")))]), i("ul", t._l(t.pdRuleText, (function(e) {
                    return i("li", {
                        key: e.name
                    }, [i("b", [t._v(t._s(e.name))]), i("br"), t._v(" " + t._s(e.condition_text) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_6")))]), i("ul", t._l(t.showPdPrizeList, (function(e) {
                    return i("li", {
                        key: e.id
                    }, [i("b", [t._v(t._s(e.award) + " : ")]), t._v(t._s(e.remain) + " ")])
                })), 0), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_7")))]), i("p", [t._v(t._s(t.$t("prizedraw.join_rules_8")))])]) : t._e(), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "mask"
                })])
            },
            lb = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            ub = Object(p["a"])("competitionModule"),
            db = ub.mapState,
            pb = {
                name: "Rules",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, db({
                    tournamentType: function(t) {
                        return t.competitionData.type
                    },
                    startTime: function(t) {
                        return t.competitionData.startTime
                    },
                    stopTime: function(t) {
                        return t.competitionData.stopTime
                    },
                    lbRuleText: function(t) {
                        return t.leaderboardData.ruleText
                    },
                    lbLevels: function(t) {
                        return t.leaderboardData.levels
                    },
                    pdRuleText: function(t) {
                        return t.prizePoolData.ruleText
                    },
                    pdPrizeList: function(t) {
                        return t.prizePoolData.prizeList
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.fullScreenData.flyin.content
                    }
                })), {}, {
                    showPdPrizeList: function() {
                        return this.pdPrizeList.map((function(t) {
                            return {
                                id: t.id,
                                award: t.award,
                                remain: t.remain.replace("x", "")
                            }
                        }))
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    triggerBack: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    },
                    initializeScrollBar: function(t) {
                        new li["a"](t, {
                            wheelSpeed: 2,
                            minScrollbarLength: 20,
                            suppressScrollX: !0
                        })
                    },
                    isMultiplierRule: function(t) {
                        return !t.progress_key
                    }
                }),
                mounted: function() {
                    this.initializeScrollBar(this.$refs.content), setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "rules" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            mb = pb,
            hb = (i("c253"), Object(Jt["a"])(mb, cb, lb, !1, null, "8ab5fe78", null)),
            fb = hb.exports,
            _b = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "leaderboard-container"
                }, [i("div", {
                    staticClass: "header",
                    on: {
                        click: t.triggerBack
                    }
                }, [t._m(0), i("div", {
                    staticClass: "title"
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " ")]), i("div", {
                    staticClass: "header-overlay",
                    class: {
                        hidden: t.triggerHeaderTransition
                    }
                })]), i("div", {
                    staticClass: "leaderboard-list"
                }, [t._l(t.records, (function(e, n) {
                    return i("div", {
                        key: e.name,
                        staticClass: "leaderboard-item",
                        class: {
                            active: e.ifPlayer
                        }
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("div", {
                        staticClass: "number"
                    }, [t._v(t._s(e.position))]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.displayName))]), i("div", {
                        staticClass: "score"
                    }, [t._v(t._s(e.score))])]), n !== t.records.length - 1 ? i("div", {
                        staticClass: "line"
                    }) : t._e()])
                })), i("div", {
                    staticClass: "content-overlay",
                    class: {
                        "content-hidden": t.triggerHeaderTransition
                    }
                })], 2)])
            },
            vb = [function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "icon flex-center"
                }, [i("div", {
                    staticClass: "arrow"
                })])
            }],
            bb = Object(p["a"])("competitionModule"),
            gb = bb.mapState,
            Cb = {
                name: "leaderboard",
                data: function() {
                    return {
                        triggerHeaderTransition: !1
                    }
                },
                computed: Object(d["a"])(Object(d["a"])({}, gb({
                    records: function(t) {
                        return t.leaderboardData.visibleEntries
                    }
                })), Object(p["d"])({
                    content: function(t) {
                        return t.fullScreenData.flyin.content
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    triggerBack: function() {
                        this.setShowFlyin({
                            show: !0,
                            content: "ContextMenu"
                        })
                    }
                }),
                mounted: function() {
                    setTimeout(function() {
                        this.triggerHeaderTransition = !0
                    }.bind(this), 0)
                },
                watch: {
                    content: function() {
                        "leaderboard" === this.content ? setTimeout(function() {
                            this.triggerHeaderTransition = !0
                        }.bind(this), 0) : this.triggerHeaderTransition = !1
                    }
                }
            },
            wb = Cb,
            Tb = (i("155f"), Object(Jt["a"])(wb, _b, vb, !1, null, "0bcd1b18", null)),
            Ob = Tb.exports,
            yb = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "menu-container"
                }, [i("div", {
                    staticClass: "menu-list"
                }, ["ACTIVE" === t.tournamentState && "COMPETITION" === t.tournamentType ? i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("leaderboard")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.play_leaderboard")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]) : t._e(), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("prizes")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("common.prizes")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]), "COMPETITION" === t.tournamentType ? i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("points-rules")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.play_points_rules")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]) : t._e(), "PRIZE_DRAW" === t.tournamentType ? i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("prize-draw-rules")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("prizedraw.join_rules_title")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })]) : t._e(), i("div", {
                    staticClass: "menu-row",
                    on: {
                        click: function(e) {
                            return t.triggerMenuOption("rules")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("leaderboard.join_tournament_rules")) + " "), i("div", {
                    staticClass: "right-chev-icon"
                })])])])
            },
            xb = [],
            jb = Object(p["a"])("competitionModule"),
            Pb = jb.mapState,
            Sb = {
                name: "context-menu",
                computed: Object(d["a"])({}, Pb({
                    tournamentState: function(t) {
                        return t.competitionData.status
                    },
                    tournamentType: function(t) {
                        return t.competitionData.type
                    }
                })),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    triggerMenuOption: function(t) {
                        this.setShowFlyin({
                            show: !0,
                            content: t
                        })
                    }
                })
            },
            kb = Sb,
            Eb = (i("2254"), Object(Jt["a"])(kb, yb, xb, !1, null, "735d2e7b", null)),
            Mb = Eb.exports,
            zb = Object(p["a"])("competitionModule"),
            Db = zb.mapState,
            Lb = {
                name: "Flyin",
                data: function() {
                    return {
                        triggerComponentTransition: !1,
                        triggerTextTransition: !1
                    }
                },
                components: {
                    Conditions: wv,
                    Prizes: Fv,
                    PointsRules: Qv,
                    PrizeDrawRules: rb,
                    Rules: fb,
                    Leaderboard: Ob,
                    ContextMenu: Mb
                },
                computed: Object(d["a"])(Object(d["a"])(Object(d["a"])({}, Object(p["d"])({
                    content: function(t) {
                        return t.fullScreenData.flyin.content
                    },
                    show: function(t) {
                        return t.fullScreenData.flyin.show
                    }
                })), Db({
                    competitionType: function(t) {
                        return t.competitionData.type
                    }
                })), {}, {
                    currentComponent: function() {
                        var t = "";
                        return "COMPETITION" === this.competitionType && (t = "logo_tournament_text"), "PRIZE_DRAW" === this.competitionType && (t = "logo_prize_draw_text"), "PROMOTION" === this.competitionType && (t = "logo_quest_text"), t
                    },
                    ifBigTitle: function() {
                        return this._i18n.t(this.currentComponent).length > 12
                    }
                }),
                methods: Object(d["a"])(Object(d["a"])({}, Object(p["c"])(["setShowFlyin"])), {}, {
                    hideFlyin: function() {
                        this.setShowFlyin({
                            show: !1,
                            content: ""
                        })
                    },
                    setTransition: function(t) {
                        this.triggerTextTransition = t
                    }
                }),
                watch: {
                    show: function() {
                        !0 === this.show ? setTimeout(function() {
                            this.triggerComponentTransition = !0, this.setTransition(!0)
                        }.bind(this), 0) : (this.triggerComponentTransition = !1, this.setTransition(!1))
                    }
                }
            },
            Ab = Lb,
            Rb = (i("11cc"), Object(Jt["a"])(Ab, dv, pv, !1, null, "15ee9b82", null)),
            Ib = Rb.exports,
            $b = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "JackpotGame"
                    }
                }, [t.gamePath ? i("external", {
                    attrs: {
                        name: "JackpotGame",
                        url: t.gamePath
                    },
                    on: {
                        sendIframeWin: t.init
                    }
                }) : t._e()], 1)
            },
            Nb = [],
            Bb = Object(p["a"])("jackpotModule"),
            Gb = Bb.mapState,
            qb = {
                name: "JackpotGame",
                components: {
                    External: vf
                },
                computed: Object(d["a"])({}, Gb({
                    gamePath: function(t) {
                        return t.gamePath
                    }
                })),
                methods: {
                    init: function(t) {
                        yt.initGame(t)
                    }
                }
            },
            Hb = qb,
            Wb = (i("9689"), Object(Jt["a"])(Hb, $b, Nb, !1, null, "ee0eebc2", null)),
            Fb = Wb.exports,
            Ub = {
                name: "FullScreen",
                components: {
                    Popup: uv,
                    Flyin: Ib,
                    Game: Fb
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    showPopup: function(t) {
                        return t.fullScreenData.popup.show
                    },
                    showFlyin: function(t) {
                        return t.fullScreenData.flyin.show
                    },
                    showGame: function(t) {
                        return t.fullScreenData.game.show
                    }
                }))
            },
            Yb = Ub,
            Jb = (i("5794"), Object(Jt["a"])(Yb, kf, Ef, !1, null, "3b7035b5", null)),
            Vb = Jb.exports,
            Zb = {
                name: "AppRoot",
                components: {
                    Panel: Sf,
                    Screen: Vb
                },
                computed: Object(d["a"])({}, Object(p["d"])({
                    panelActive: function(t) {
                        return t.panelData.active
                    },
                    screenActive: function(t) {
                        return t.fullScreenData.show
                    }
                })),
                created: function() {
                    St.init(this.$store, this.$i18n)
                }
            },
            Xb = Zb,
            Kb = (i("3d4f"), Object(Jt["a"])(Xb, l, u, !1, null, null, null)),
            Qb = Kb.exports,
            tg = (i("3ca3"), i("ddb0"), i("a925")),
            eg = i("edd4"),
            ig = i("cd1a");
        c["a"].use(tg["a"]), c["a"].use(ig["a"], {
            locale: "en"
        });
        var ng = new tg["a"]({
            locale: "en",
            fallbackLocale: "en",
            messages: {
                en: eg
            }
        });

        function sg(t, e) {
            if (e && e[t]) ng.locale = t, ng.setLocaleMessage(t, e[t]);
            else {
                if (ng.locale === t) return;
                var n = t.replace("_", "-");
                i("326a")("./".concat(n)).then((function(t) {
                    ng.locale = n, ng.setLocaleMessage(n, t.default)
                })).catch((function() {
                    ng.locale = "en", ng.setLocaleMessage("en", eg), console.log("Do not support current language, automatically fallback to English.")
                }))
            }
        }
        tg["a"].prototype.loadLocaleMessagesAsync = sg;
        var ag = ng,
            og = (i("54ba"), {
                playerData: {
                    nicknameAutoGen: !1,
                    displayName: "",
                    registered: !1,
                    position: ""
                },
                competitionData: {
                    name: "",
                    description: "",
                    token: "",
                    type: "",
                    status: "",
                    startTime: "",
                    stopTime: "",
                    timeUntilStart: void 0,
                    timeUntilEnd: void 0,
                    timeDuration: 0,
                    termsLink: "",
                    termsText: "",
                    currency: "",
                    competitionEndTime: "",
                    lastAwardTimestamp: ""
                },
                prizePoolData: {
                    description: "",
                    ruleText: [],
                    spinLimitation: 0,
                    award: [],
                    ticketsTotal: 0,
                    ticketsRemaining: 0,
                    prizeList: []
                },
                leaderboardData: {
                    levels: [],
                    spinLimitation: 0,
                    spinRemaining: 0,
                    showInProgress: !1,
                    award: "",
                    ruleText: [],
                    visibleEntries: []
                },
                awardMessage: {
                    winPrize: "",
                    awardType: "",
                    buttons: [],
                    buttonsCallback: void 0
                },
                cancelMessage: {
                    withAward: !1,
                    buttons: [],
                    buttonsCallback: void 0
                },
                inProgressMessage: {
                    buttons: [],
                    buttonsCallback: void 0
                }
            }),
            rg = {
                timeDuration: function(t) {
                    var e = t.competitionData.timeDuration;
                    return e ? parseInt(e / 1e3 / 60) : 0
                },
                lbSpinLimitation: function(t) {
                    var e = t.leaderboardData.spinLimitation;
                    return e ? parseInt(e) : 0
                },
                showJoinButton: function(t) {
                    var e = t.playerData.registered;
                    return !1 === e
                },
                joinButtonLocalKey: function(t) {
                    var e = "",
                        i = t.competitionData.type;
                    return "COMPETITION" === i && (e = "leaderboard.join_button"), "PRIZE_DRAW" === i && (e = "prizedraw.join_button"), "PROMOTION" === i && (e = "quest.join_button"), e
                },
                joinButtonDisabled: function(t, e, i) {
                    var n = t.competitionData.status,
                        s = i.gameData.inRound,
                        a = i.gameData.inGIP;
                    return "ACTIVE" !== n || s || a
                },
                conditionsList: function(t) {
                    var e = t.competitionData.termsText;
                    return e ? e.trim().split("\n") : []
                },
                questGoal: function(t) {
                    var e = t.prizePoolData.ruleText;
                    return e[0] ? e[0].name : ""
                },
                questReward: function(t) {
                    var e = t.prizePoolData.prizeList;
                    return e[0] ? e[0].award : ""
                },
                questProgress: function(t) {
                    var e = t.playerData.registered,
                        i = t.prizePoolData.ruleText;
                    return e && i[0] && 0 !== i[0].progress_total ? i[0].progress_current < i[0].progress_total ? i[0].progress_current + "/" + i[0].progress_total : "quest.timer_finished" : ""
                },
                questMax: function(t) {
                    var e = t.prizePoolData.ruleText;
                    return e[0] && e[0].results_total ? e[0].results_total : ""
                },
                questMaxData: function(t) {
                    var e = t.playerData.registered,
                        i = t.prizePoolData.ruleText;
                    return e && i[0] && i[0].results_total ? {
                        current: i[0].results_current,
                        max: i[0].results_total,
                        progress: Math.floor(i[0].results_current / i[0].results_total * 100) + "%"
                    } : ""
                },
                questProgressData: function(t) {
                    var e = t.playerData.registered,
                        i = t.prizePoolData.ruleText;
                    return e && i[0] && 0 !== i[0].progress_total ? {
                        current: i[0].progress_current,
                        total: i[0].progress_total,
                        progress: Math.floor(i[0].progress_current / i[0].progress_total * 100) + "%"
                    } : void 0
                },
                questMaxProgress: function(t) {
                    var e = t.playerData.registered,
                        i = t.prizePoolData.ruleText;
                    return e && i[0] && i[0].results_total ? i[0].results_current <= i[0].results_total ? i[0].results_current + "/" + i[0].results_total : void 0 : ""
                },
                questRegistered: function(t) {
                    return t.playerData.registered
                }
            },
            cg = {
                playerData: {
                    nicknameAutoGen: !1,
                    displayName: "",
                    registered: !1,
                    position: ""
                },
                competitionData: {
                    name: "",
                    description: "",
                    token: "",
                    type: "",
                    status: "",
                    startTime: "",
                    stopTime: "",
                    timeUntilStart: void 0,
                    timeUntilEnd: void 0,
                    timeDuration: 0,
                    termsLink: "",
                    termsText: "",
                    currency: "",
                    competitionEndTime: "",
                    lastAwardTimestamp: ""
                },
                prizePoolData: {
                    description: "",
                    ruleText: [],
                    spinLimitation: 0,
                    award: [],
                    ticketsTotal: 0,
                    ticketsRemaining: 0,
                    prizeList: []
                },
                leaderboardData: {
                    levels: [],
                    spinLimitation: 0,
                    spinRemaining: 0,
                    showInProgress: !1,
                    award: "",
                    ruleText: [],
                    visibleEntries: []
                },
                awardMessage: {
                    winPrize: "",
                    awardType: "",
                    buttons: [],
                    buttonsCallback: void 0
                },
                cancelMessage: {
                    withAward: !1,
                    buttons: [],
                    buttonsCallback: void 0
                },
                inProgressMessage: {
                    buttons: [],
                    buttonsCallback: void 0
                }
            },
            lg = i("2ef0"),
            ug = {
                resetPanelData: function(t) {
                    var e = Object(lg["cloneDeep"])(cg),
                        i = t.playerData.displayName,
                        n = t.competitionData.currency,
                        s = t.playerData.nicknameAutoGen;
                    t.playerData = e.playerData, t.competitionData = e.competitionData, t.prizePoolData = e.prizePoolData, t.leaderboardData = e.leaderboardData, t.awardMessage = e.awardMessage, t.cancelMessage = e.cancelMessage, t.inProgressMessage = e.inProgressMessage, t.playerData.displayName = i, t.competitionData.currency = n, t.playerData.nicknameAutoGen = s
                },
                setNicknameAutoGen: function(t, e) {
                    t.playerData.nicknameAutoGen = e
                },
                setDisplayName: function(t, e) {
                    t.playerData.displayName = e
                },
                setRegistered: function(t, e) {
                    t.playerData.registered = e
                },
                setPlayerPosition: function(t, e) {
                    t.playerData.position = e
                },
                setLeaderBoardLevels: function(t, e) {
                    t.leaderboardData.levels = e
                },
                setLeaderBoardSpinLimitation: function(t, e) {
                    t.leaderboardData.spinLimitation = e
                },
                setLeaderBoardRemainSpins: function(t, e) {
                    t.leaderboardData.spinRemaining = e
                },
                setLeaderBoardAward: function(t, e) {
                    t.leaderboardData.award = e
                },
                setLeaderBoardRuleText: function(t, e) {
                    t.leaderboardData.ruleText = e
                },
                setLeaderBoardProgress: function(t, e) {
                    Object.keys(e).map((function(i) {
                        var n = t.leaderboardData.ruleText.find((function(t) {
                            return t.condition_id == i
                        }));
                        n && n.progress_key && e[i] && (n.progress_current = e[i].hasOwnProperty(n.progress_key) ? e[i][n.progress_key] : e[i]["RULE"], n.progress_percentage = n.progress_current > n.progress_total ? "100%" : parseInt(n.progress_current / n.progress_total * 100) + "%", n.progress_current = Math.min(n.progress_current, n.progress_total))
                    }))
                },
                setLeaderBoardVisibleEntries: function(t, e) {
                    t.leaderboardData.visibleEntries = e
                },
                pushLeaderBoardVisibleEntries: function(t, e) {
                    t.leaderboardData.visibleEntries.push(e)
                },
                setShowInProgressContent: function(t, e) {
                    t.leaderboardData.showInProgress = e
                },
                setAwardData: function(t, e) {
                    t.awardMessage.winPrize = e.winPrize, t.awardMessage.awardType = e.awardType
                },
                setAwardButtons: function(t, e) {
                    t.awardMessage.buttons = e
                },
                setAwardButtonsCallback: function(t, e) {
                    t.awardMessage.buttonsCallback = e
                },
                setCancelData: function(t, e) {
                    t.cancelMessage.withAward = e.withAward
                },
                setCancelButtons: function(t, e) {
                    t.cancelMessage.buttons = e
                },
                setCancelButtonsCallback: function(t, e) {
                    t.cancelMessage.buttonsCallback = e
                },
                setInProgressButtons: function(t, e) {
                    t.inProgressMessage.buttons = e
                },
                setInprogressButtonsCallback: function(t, e) {
                    t.inProgressMessage.buttonsCallback = e
                },
                setCompetitionData: function(t, e) {
                    t.competitionData[e.key] = e.value
                },
                setTimeUntilStart: function(t, e) {
                    t.competitionData.timeUntilStart = e
                },
                setTimeUntilEnd: function(t, e) {
                    t.competitionData.timeUntilEnd = e
                },
                setStatus: function(t, e) {
                    t.competitionData.status = e
                },
                setPrizePoolData: function(t, e) {
                    t.prizePoolData[e.key] = e.value
                },
                setPrizePoolRuleText: function(t, e) {
                    t.prizePoolData.ruleText = e
                },
                resetProgressIfMorePrizes: function(t) {
                    var e = t.prizePoolData.ruleText;
                    e.forEach((function(t) {
                        t.progress_total && t.results_current && t.results_total && t.progress_current >= t.progress_total && t.results_current < t.results_total && (t.progress_current = 0, t.progress_percentage = "0%")
                    }))
                },
                setPrizePoolProgress: function(t, e) {
                    Object.keys(e).map((function(i) {
                        var n = t.prizePoolData.ruleText.find((function(t) {
                            return t.condition_id == i
                        }));
                        n && n.progress_key && e[i] && (n.progress_current = e[i].hasOwnProperty(n.progress_key) ? e[i][n.progress_key] : e[i]["RULE"], n.progress_percentage = n.progress_current > n.progress_total ? "100%" : parseInt(n.progress_current / n.progress_total * 100) + "%", n.progress_current = Math.min(n.progress_current, n.progress_total))
                    })), Object.keys(e).map((function(i) {
                        var n = t.prizePoolData.ruleText.find((function(t) {
                            return t.results_id == i
                        }));
                        n && n.progress_key && e[i] && (n.results_current = e[i][n.results_progress_key])
                    }))
                },
                pushPrizePoolAward: function(t, e) {
                    t.prizePoolData.award.push(e)
                },
                setTicketsRemaining: function(t, e) {
                    t.prizePoolData.ticketsRemaining = e
                },
                setPrizeList: function(t, e) {
                    t.prizePoolData.prizeList = e
                },
                setClientCompetitionEndTime: function(t, e) {
                    t.competitionData.competitionEndTime = e
                },
                setLastAwardTimestamp: function(t, e) {
                    t.competitionData.lastAwardTimestamp = e
                },
                setCurrencyCode: function(t, e) {
                    t.competitionData.currency = e
                }
            },
            dg = {
                namespaced: !0,
                state: function() {
                    return og
                },
                getters: rg,
                mutations: ug
            },
            pg = {
                panelPath: "",
                gamePath: ""
            },
            mg = {
                setPanelPath: function(t, e) {
                    t.panelPath = e
                },
                setGamePath: function(t, e) {
                    t.gamePath = e
                }
            },
            hg = {
                namespaced: !0,
                state: function() {
                    return pg
                },
                mutations: mg
            };
        c["a"].use(p["b"]);
        var fg = new p["b"].Store({
            state: {
                layoutData: {
                    ifDesktop: !1,
                    ifTablet: !1,
                    ifMobile: !1
                },
                panelData: {
                    active: !1,
                    content: "",
                    panelActiveTime: "",
                    preActiveNotified: !1,
                    notificationTimestamp: 0,
                    contextMenu: {
                        show: !1,
                        content: ""
                    }
                },
                fullScreenData: {
                    show: !1,
                    popup: {
                        show: !1,
                        content: ""
                    },
                    flyin: {
                        show: !1,
                        content: ""
                    },
                    game: {
                        show: !1
                    }
                },
                gameData: {
                    inRound: !1,
                    inGIP: !1
                },
                errorMessage: ""
            },
            mutations: {
                setIfMobile: function(t, e) {
                    t.layoutData.ifMobile = e
                },
                setIfTablet: function(t, e) {
                    t.layoutData.ifTablet = e
                },
                setIfDesktop: function(t, e) {
                    t.layoutData.ifDesktop = e
                },
                setPanelActive: function(t, e) {
                    t.panelData.active = e
                },
                setPanelContent: function(t, e) {
                    t.panelData.content = e
                },
                setShowPopup: function(t, e) {
                    t.fullScreenData.popup.content = e.content, t.fullScreenData.popup.show = e.show, t.fullScreenData.show = e.show
                },
                setShowFlyin: function(t, e) {
                    t.fullScreenData.flyin.content = e.content, t.fullScreenData.flyin.show = e.show, t.fullScreenData.show = e.show
                },
                setShowGame: function(t, e) {
                    t.fullScreenData.game.show = e.show, t.fullScreenData.show = e.show
                },
                setShowContextMenu: function(t, e) {
                    t.panelData.contextMenu.show = e.show, t.panelData.contextMenu.content = e.content
                },
                setGameInRound: function(t, e) {
                    t.gameData.inRound = e
                },
                setGameInGIP: function(t, e) {
                    t.gameData.inGIP = e
                },
                setErrorMessage: function(t, e) {
                    t.errorMessage = e
                },
                setPanelActiveTime: function(t, e) {
                    t.panelData.panelActiveTime = e
                },
                setJoinByNotification: function(t, e) {
                    t.panelData.preActiveNotified = e
                },
                setNotificationTimestamp: function(t, e) {
                    0 === t.panelData.notificationTimestamp && (t.panelData.notificationTimestamp = e)
                }
            },
            modules: {
                competitionModule: dg,
                jackpotModule: hg
            }
        });
        fg.commitCompetition = function(t, e) {
            fg.commit("competitionModule/" + t, e)
        }, fg.commitJackpot = function(t, e) {
            fg.commit("jackpotModule/" + t, e)
        };
        var _g = fg,
            vg = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("svg", {
                    class: t.svgClass,
                    attrs: {
                        width: t.width,
                        height: t.height,
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": t.iconName
                    }
                })])
            },
            bg = [],
            gg = (i("a9e3"), i("088c"), {
                name: "SvgIcon",
                props: {
                    iconClass: {
                        type: String,
                        required: !0
                    },
                    className: {
                        type: String,
                        default: ""
                    },
                    width: {
                        type: [String, Number],
                        default: "14px"
                    },
                    height: {
                        type: [String, Number],
                        default: "14px"
                    }
                },
                computed: {
                    iconName: function() {
                        return "#icon-".concat(this.iconClass)
                    },
                    svgClass: function() {
                        return this.className ? "svg-icon " + this.className : "svg-icon"
                    }
                }
            }),
            Cg = gg,
            wg = (i("65fa"), Object(Jt["a"])(Cg, vg, bg, !1, null, "38775954", null)),
            Tg = wg.exports;
        c["a"].config.productionTip = !1, c["a"].component("svg-icon", Tg), c["a"].prototype.myBus = St.bus, c["a"].prototype.myEventHandler = new c["a"]({
            name: "EventHandler"
        }), c["a"].prototype.PerfectScrollbar = li["a"], c["a"].directive("visible", (function(t, e) {
            t.style.visibility = e.value ? "inherit" : "hidden"
        })), new c["a"]({
            store: _g,
            i18n: ag,
            render: function(t) {
                return t(Qb)
            }
        }).$mount("#app")
    },
    5794: function(t, e, i) {
        "use strict";
        i("318d")
    },
    "580c": function(t, e, i) {},
    "585e": function(t, e, i) {},
    "587c": function(t, e, i) {},
    "5b28": function(t, e, i) {
        "use strict";
        i("63cf")
    },
    "5b79": function(t, e, i) {},
    "5bbd": function(t, e, i) {
        "use strict";
        i("3ca8")
    },
    "5e24": function(t, e, i) {
        "use strict";
        i("a24f")
    },
    6008: function(t, e, i) {},
    6156: function(t, e, i) {},
    6255: function(t, e, i) {},
    6321: function(t, e, i) {},
    6334: function(t, e, i) {},
    "634a": function(t, e, i) {},
    "63cf": function(t, e, i) {},
    "64fb": function(t, e, i) {
        "use strict";
        i("ac7a")
    },
    "655f": function(t, e, i) {
        "use strict";
        i("47c0")
    },
    "65e8": function(t, e, i) {
        "use strict";
        i("6725")
    },
    "65fa": function(t, e, i) {
        "use strict";
        i("6334")
    },
    6652: function(t, e, i) {},
    6725: function(t, e, i) {},
    "6adc": function(t, e, i) {
        "use strict";
        i("f9fc")
    },
    "6b1e": function(t, e, i) {},
    "6b2a": function(t, e, i) {},
    "6b74": function(t, e, i) {},
    "6c98": function(t, e, i) {
        "use strict";
        i("b0ee")
    },
    "6d1e": function(t, e, i) {},
    "6d5c": function(t, e, i) {
        "use strict";
        i("a32c")
    },
    "6df0": function(t, e, i) {
        "use strict";
        i("12e4")
    },
    "6ff0": function(t, e, i) {},
    "70dc": function(t, e, i) {
        "use strict";
        i("e59d")
    },
    "70e2": function(t, e, i) {
        "use strict";
        i("95ce")
    },
    "72c8": function(t, e, i) {
        "use strict";
        i("805c")
    },
    7384: function(t, e, i) {},
    7420: function(t, e, i) {},
    "74a7": function(t, e, i) {
        "use strict";
        i("d5a4")
    },
    "766c": function(t, e, i) {},
    7740: function(t, e, i) {},
    7980: function(t, e, i) {},
    "7a9b": function(t, e, i) {
        "use strict";
        i("585e")
    },
    "7b35": function(t, e, i) {
        "use strict";
        i("1af7")
    },
    "7bb4": function(t, e, i) {},
    "805c": function(t, e, i) {},
    8081: function(t, e, i) {},
    "80a5": function(t, e, i) {
        "use strict";
        i("86c3")
    },
    "80db": function(t, e, i) {
        "use strict";
        i("6156")
    },
    "815a": function(t, e, i) {},
    "81b1": function(t, e, i) {},
    "81d3": function(t, e, i) {},
    8481: function(t, e, i) {},
    8689: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-arrow-list",
                use: "icon-arrow-list-usage",
                viewBox: "0 0 24 24",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-arrow-list"><defs><style>#icon-arrow-list .a{fill:rgba(0,255,235,0.21);stroke:#00e5ca;opacity:0;}#icon-arrow-list .b,#icon-arrow-list .d{fill:none;}#icon-arrow-list .b{stroke:#ffec05;stroke-width:2px;}#icon-arrow-list .c{stroke:none;}</style></defs><g class="a"><rect class="c" width="24" height="24" /><rect class="d" x="0.5" y="0.5" width="23" height="23" /></g><path class="b" d="M0,0,5.26,5l5.406-5" transform="translate(14.5 6.5) rotate(90)" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    "86c3": function(t, e, i) {},
    "86ec": function(t, e, i) {},
    "872e": function(t, e, i) {},
    8844: function(t, e, i) {
        "use strict";
        i("3195")
    },
    "8cdc": function(t, e, i) {
        "use strict";
        i("7740")
    },
    "8d45": function(t, e, i) {
        "use strict";
        i("4474")
    },
    "8f6f": function(t, e, i) {},
    "8ff9": function(t, e, i) {
        "use strict";
        i("a7ba")
    },
    9074: function(t, e, i) {
        "use strict";
        i("b68e")
    },
    9076: function(t, e, i) {
        "use strict";
        i("b7de")
    },
    "92ca": function(t, e, i) {},
    9349: function(t, e, i) {},
    "936b": function(t, e, i) {
        "use strict";
        i("1bd0")
    },
    "945b": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-ticket",
                use: "icon-ticket-usage",
                viewBox: "0 0 18 18",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="icon-ticket"><defs><style>#icon-ticket .a{fill:#f70559;stroke:rgba(0,0,0,0.2);}#icon-ticket .b{fill:#fff;}#icon-ticket .c{stroke:none;}#icon-ticket .d{fill:none;}</style></defs><g class="a"><circle class="c" cx="9" cy="9" r="9" /><circle class="d" cx="9" cy="9" r="8.5" /></g><g transform="translate(2.397 2.322)"><path class="b" d="M7.574,968.969,8.7,970.1a1.6,1.6,0,0,1,2.258,2.258l1.129,1.129,6.323-6.324L13.9,962.646l-6.323,6.323Zm6.775-6.775,4.517,4.517,2.258-2.258-1.129-1.129a1.6,1.6,0,0,1-2.258-2.258l-1.129-1.129Zm-2.371,3.726,1.475.628,1.228-1.087-.173,1.613,1.383.8-1.584.371-.371,1.584-.8-1.383-1.613.173,1.087-1.228Z" transform="translate(-7.574 -959.936)" /></g></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    "94aa": function(t, e, i) {},
    "95ce": function(t, e, i) {},
    9689: function(t, e, i) {
        "use strict";
        i("9fee")
    },
    9710: function(t, e, i) {
        "use strict";
        i("e773")
    },
    "974f": function(t, e, i) {},
    "97fa": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-check-agree",
                use: "icon-check-agree-usage",
                viewBox: "0 0 13.438 9.751",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.438 9.751" id="icon-check-agree"><defs><style>#icon-check-agree .a{fill:#fff;}</style></defs><path class="a" d="M13.163.457,12.95.244A.968.968,0,0,0,12.341,0a.906.906,0,0,0-.609.244L4.875,7.069,1.706,3.9A.853.853,0,0,0,1.1,3.656.851.851,0,0,0,.488,3.9l-.244.213A.968.968,0,0,0,0,4.723a.906.906,0,0,0,.244.609L3.9,9.294l.213.213a.968.968,0,0,0,.609.244.906.906,0,0,0,.609-.244l7.861-7.8a.906.906,0,0,0,.244-.609.851.851,0,0,0-.244-.609Z" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    9824: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-remain_ticket",
                use: "icon-remain_ticket-usage",
                viewBox: "0 0 28.77 28.388",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.77 28.388" id="icon-remain_ticket"><defs><style>#icon-remain_ticket .a{fill:rgba(0,255,216,0.3);stroke:rgba(0,240,157,0.6);opacity:0;}#icon-remain_ticket .b{fill:#fff;}#icon-remain_ticket .c{fill:#ffec05;}#icon-remain_ticket .d{stroke:none;}#icon-remain_ticket .e{fill:none;}</style></defs><g class="a"><rect class="d" width="20" height="20" /><rect class="e" x="0.5" y="0.5" width="19" height="19" /></g><g transform="translate(-4.118 -4.744)"><path class="b" d="M23.126,34.692a1.206,1.206,0,0,0,.508-.364l8.479-10.334a1.208,1.208,0,0,0-.168-1.7l-5.172-4.244a1.208,1.208,0,0,0-1.7.168L16.594,28.553a1.208,1.208,0,0,0,.168,1.7L21.934,34.5A1.211,1.211,0,0,0,23.126,34.692ZM17.3,29.13,25.777,18.8a.3.3,0,0,1,.418-.041L31.368,23a.3.3,0,0,1,.041.418L22.929,33.751a.3.3,0,0,1-.418.041L17.34,29.548A.3.3,0,0,1,17.3,29.13Z" transform="translate(-7.09 -7.668)" /><path class="c" d="M35.131,41.474l1.7-.364a.205.205,0,0,1,.178.07l.97,1.408a.232.232,0,0,0,.26.066.237.237,0,0,0,.1-.07.229.229,0,0,0,.048-.1l.177-1.708a.2.2,0,0,1,.042-.088.2.2,0,0,1,.079-.059l1.64-.507a.232.232,0,0,0,.091-.067.235.235,0,0,0-.066-.353l-1.571-.677a.2.2,0,0,1-.1-.16l.026-1.736a.234.234,0,0,0-.392-.153l-1.13,1.3a.2.2,0,0,1-.066.04.207.207,0,0,1-.119.008l-1.642-.58a.235.235,0,0,0-.267.325l.89,1.5a.205.205,0,0,1-.011.19L34.9,41.12A.235.235,0,0,0,35.131,41.474Z" transform="translate(-19.982 -20.965)" /><path class="b" d="M32.758,19.671l-3.206-5.9a1.068,1.068,0,0,0-1.448-.428,1.68,1.68,0,0,1-.674.2,1.653,1.653,0,0,1,.358-.828,1.063,1.063,0,0,0-.148-1.495L22.479,6.985a1.062,1.062,0,0,0-1.495.147,1.668,1.668,0,0,1-2.349.232,1.063,1.063,0,0,0-1.5.147L6.358,20.651a1.064,1.064,0,0,0,.148,1.5A1.669,1.669,0,0,1,6.738,24.5a1.063,1.063,0,0,0,.148,1.495l2.143,1.758,2.026,3.726A1.068,1.068,0,0,0,12.5,31.9a1.676,1.676,0,0,1,2.275.672A1.068,1.068,0,0,0,16.225,33l15.006-8.161a1.069,1.069,0,0,0,.428-1.448,1.677,1.677,0,0,1,.672-2.275A1.069,1.069,0,0,0,32.758,19.671Zm-25.317,5.4a2.579,2.579,0,0,0-.358-3.631.152.152,0,0,1-.021-.214L17.844,8.089a.154.154,0,0,1,.214-.021,2.579,2.579,0,0,0,3.631-.358.154.154,0,0,1,.214-.021l5.162,4.236a.152.152,0,0,1,.021.214,2.579,2.579,0,0,0,.358,3.631.152.152,0,0,1,.021.214L16.683,29.122a.154.154,0,0,1-.214.021,2.579,2.579,0,0,0-3.631.358.154.154,0,0,1-.214.021L7.462,25.287A.152.152,0,0,1,7.441,25.073Zm20.631-2.846a.3.3,0,0,1-.12.405l-8.607,4.681,6.911-8.423Zm3.821-1.912a2.592,2.592,0,0,0-1.039,3.516.153.153,0,0,1-.061.207L15.788,32.2a.154.154,0,0,1-.207-.061A2.592,2.592,0,0,0,12.065,31.1a.154.154,0,0,1-.207-.061l-.949-1.745,1.139.934a1.062,1.062,0,0,0,1.495-.147,1.668,1.668,0,0,1,2.349-.232,1.063,1.063,0,0,0,1.5-.147l.416-.507L28.39,23.436a1.214,1.214,0,0,0,.487-1.646l-1.992-3.664,1.284-1.566a1.064,1.064,0,0,0-.148-1.5,1.651,1.651,0,0,1-.46-.614,2.586,2.586,0,0,0,.981-.3.155.155,0,0,1,.207.061l3.206,5.9A.153.153,0,0,1,31.894,20.315Z" transform="translate(0 0)" /></g></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    "98c8": function(t, e, i) {},
    "990a": function(t, e, i) {
        "use strict";
        i("e788")
    },
    "9a7e": function(t, e, i) {
        "use strict";
        i("86ec")
    },
    "9e1e": function(t, e, i) {
        "use strict";
        i("1e1c")
    },
    "9eb7": function(t, e, i) {},
    "9fc2": function(t, e, i) {},
    "9fee": function(t, e, i) {},
    a026: function(t, e, i) {},
    a24f: function(t, e, i) {},
    a272: function(t, e, i) {
        "use strict";
        i("6d1e")
    },
    a32c: function(t, e, i) {},
    a617: function(t, e, i) {
        "use strict";
        i("044e")
    },
    a6d9: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-line",
                use: "icon-line-usage",
                viewBox: "0 0 182 1",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 182 1" id="icon-line"><defs><style>#icon-line .a{fill:url(#icon-line_a);}</style><linearGradient id="icon-line_a" y1="1" x2="0.982" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#6900ac" stop-opacity="0" /><stop offset="0.241" stop-color="#6900ac" stop-opacity="0.871" /><stop offset="0.488" stop-color="#6900ac" /><stop offset="0.719" stop-color="#6900ac" /><stop offset="1" stop-color="#6900ac" stop-opacity="0" /></linearGradient></defs><rect class="a" width="182" height="1" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    a7ba: function(t, e, i) {},
    a7f4: function(t, e, i) {},
    aa0b: function(t, e, i) {
        "use strict";
        i("37e6")
    },
    aaa4: function(t, e, i) {},
    ab8b: function(t, e, i) {
        "use strict";
        i("6b2a")
    },
    ac1a: function(t, e, i) {
        "use strict";
        i("b6a7")
    },
    ac7a: function(t, e, i) {},
    accf: function(t, e, i) {
        "use strict";
        i("4060")
    },
    ae4e: function(t, e, i) {},
    ae9d: function(t, e, i) {
        "use strict";
        i("03e4")
    },
    b0a4: function(t, e, i) {
        "use strict";
        i("1593")
    },
    b0ee: function(t, e, i) {},
    b0f5: function(t, e, i) {},
    b248: function(t, e, i) {
        "use strict";
        i("038e")
    },
    b4b1: function(t, e, i) {
        "use strict";
        i("6255")
    },
    b650: function(t, e, i) {
        "use strict";
        i("2d0f")
    },
    b68e: function(t, e, i) {},
    b6a7: function(t, e, i) {},
    b79b: function(t, e, i) {
        "use strict";
        i("872e")
    },
    b7de: function(t, e, i) {},
    b8f0: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-arrow-rules",
                use: "icon-arrow-rules-usage",
                viewBox: "0 0 4.052 7.084",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.052 7.084" id="icon-arrow-rules"><defs><style>#icon-arrow-rules .a{fill:none;stroke:#d88eef;}</style></defs><path class="a" d="M0,3,3.156,0,6.4,3" transform="translate(3.367 0.344) rotate(90)" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    bbe3: function(t, e, i) {},
    bd7e: function(t, e, i) {
        "use strict";
        i("147a")
    },
    bf03: function(t, e, i) {
        "use strict";
        i("321e")
    },
    bf9b: function(t, e, i) {
        "use strict";
        i("1899")
    },
    c0b3: function(t, e, i) {
        "use strict";
        i("1b41")
    },
    c104: function(t, e, i) {
        "use strict";
        i("36f3")
    },
    c156: function(t, e, i) {
        "use strict";
        i("7420")
    },
    c253: function(t, e, i) {
        "use strict";
        i("f05f")
    },
    c346: function(t, e, i) {
        "use strict";
        i("1681")
    },
    c5c6: function(t, e, i) {
        "use strict";
        i("ddc2")
    },
    c776: function(t, e, i) {},
    c7fa: function(t, e, i) {
        "use strict";
        i("5b79")
    },
    cb81: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-arrow-result",
                use: "icon-arrow-result-usage",
                viewBox: "0 0 44 44",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="icon-arrow-result"><defs><style>#icon-arrow-result .a{fill:rgba(0,229,202,0.2);stroke:#00e5ca;opacity:0;}#icon-arrow-result .b,#icon-arrow-result .d{fill:none;}#icon-arrow-result .b{stroke:#fff;stroke-width:2px;}#icon-arrow-result .c{stroke:none;}</style></defs><g class="a"><rect class="c" width="44" height="44" /><rect class="d" x="0.5" y="0.5" width="43" height="43" /></g><path class="b" d="M0,7.77,8.174,0l8.4,7.77" transform="translate(30.276 26.093) rotate(180)" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    cd7a: function(t, e, i) {
        "use strict";
        i("6ff0")
    },
    ce54: function(t, e, i) {},
    d014: function(t, e, i) {},
    d05a: function(t, e, i) {
        "use strict";
        i("32d6")
    },
    d169: function(t, e, i) {},
    d5a4: function(t, e, i) {},
    d7b0: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-check-joined",
                use: "icon-check-joined-usage",
                viewBox: "0 0 24 24",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-check-joined"><defs><style>#icon-check-joined .a{fill:rgba(0,255,235,0.21);stroke:#00e5ca;opacity:0;}#icon-check-joined .b{fill:#fff;}#icon-check-joined .c{stroke:none;}#icon-check-joined .d{fill:none;}</style></defs><g class="a"><rect class="c" width="24" height="24" /><rect class="d" x="0.5" y="0.5" width="23" height="23" /></g><path class="b" d="M13.163.457,12.95.244A.968.968,0,0,0,12.341,0a.906.906,0,0,0-.609.244L4.875,7.069,1.706,3.9A.853.853,0,0,0,1.1,3.656.851.851,0,0,0,.488,3.9l-.244.213A.968.968,0,0,0,0,4.723a.906.906,0,0,0,.244.609L3.9,9.294l.213.213a.968.968,0,0,0,.609.244.906.906,0,0,0,.609-.244l7.861-7.8a.906.906,0,0,0,.244-.609.851.851,0,0,0-.244-.609Z" transform="translate(5.563 7)" /></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    d7d8: function(t, e, i) {
        "use strict";
        i("1d44")
    },
    d81db: function(t, e, i) {},
    d8a0: function(t, e, i) {},
    dd3f: function(t, e, i) {
        "use strict";
        i("08ce")
    },
    ddc2: function(t, e, i) {},
    dedf: function(t, e, i) {
        "use strict";
        i("bbe3")
    },
    e1a3: function(t, e, i) {
        "use strict";
        i("94aa")
    },
    e247: function(t, e, i) {
        "use strict";
        i("ece1")
    },
    e315: function(t, e, i) {
        "use strict";
        i("a026")
    },
    e59d: function(t, e, i) {},
    e757: function(t, e, i) {},
    e773: function(t, e, i) {},
    e788: function(t, e, i) {},
    e806: function(t, e, i) {},
    e83b: function(t, e, i) {},
    e9bd: function(t, e, i) {},
    ebbe: function(t, e, i) {
        "use strict";
        i("815a")
    },
    ebe3: function(t, e, i) {
        "use strict";
        i("0de6")
    },
    ec15: function(t, e, i) {},
    ece1: function(t, e, i) {},
    edd4: function(t) {
        t.exports = JSON.parse('{"popup":{"award_leaderboard_cash_with_rank":"CONGRATULATIONS\\nYour Rank: {winRank}\\nPrize Awarded\\n{winPrize}\\nIt will be credited to your account shortly.","award_leaderboard_cash_without_rank":"CONGRATULATIONS\\nPrize Awarded\\n{winPrize}\\nIt will be credited to your account shortly.","award_leaderboard_freespin_with_rank":"CONGRATULATIONS\\nYour Rank: {winRank}\\nPrize Awarded\\n{winPrize} FREE SPINS\\nThey will be credited to your account shortly.","award_leaderboard_freespin_without_rank":"CONGRATULATIONS\\nPrize Awarded\\n{winPrize} FREE SPINS\\nThey will be credited to your account shortly.","award_prizedraw_cash":"CONGRATULATIONS\\nYOU HAVE A WINNING PRIZE DRAW TICKET\\nPrize Awarded\\n{winPrize}\\nIt will be credited to your account shortly.","award_prizedraw_freespin":"CONGRATULATIONS\\nYOU HAVE A WINNING PRIZE DRAW TICKET\\nPrize Awarded\\n{winPrize} FREE SPINS\\nThey will be credited to your account shortly.","award_quest_cash":"CONGRATULATIONS\\nYOU HAVE COMPLETED YOUR QUEST\\nYou have been rewarded\\n{winPrize}\\nIt will be credited to your account shortly.","award_quest_freespin":"CONGRATULATIONS\\nYOU HAVE COMPLETED YOUR QUEST\\nYou have been rewarded\\n{winPrize} FREE SPINS\\nThey will be credited to your account shortly.","button_back":"Back","button_close":"Close","button_continue":"Continue","button_ok":"OK","button_continue_playing":"Continue Playing","confirm_title":"Please confirm your Opt In to participate","confirm_agree":"I agree to [terms and conditions]","error_title":"Internal Error","name_title":"Please set your Screen Name","name_tips":"Screen name is displayed on tournament leaderboards. This name cannot be changed once set.","name_warning_bad":"Your display name contains inappropriate language, please select a new one.","name_warning_exist":"Screen name taken. Try again.","success_title_1":"Join successful.","success_title_2":"Registration successful.","success_tip":"Playing as:","success_enjoy":"Enjoy!","in_progress":"All Tournament Spins used, but the tournament is still in progress.\\nUntil the tournament ends, you can continue playing a regular game.","cancel_with_award":"This event has been closed.\\nPlayers elegible to win will still receive their rewards.","cancel_without_award":"This event has been cancelled.\\nWe apologise for the inconvenience caused.","already_joined_currency":"You\'ve joined this promotion using another currency."},"rules":{"PLAY_T_TIMES_G_GAME":"Play {times} times","PLAY_T_TIMES_IN_A_ROW_G_GAME":"Play {times} times in a row","PLAY_T_TIMES_X_AMOUNT_G_GAME":"Play {times} times, min bet {amount}","PLAY_T_TIMES_IN_A_ROW_X_AMOUNT_G_GAME":"Play {times} times in a row, min bet {amount}","WIN_X_TIMES_BET_ON_G_GAME":"Win {betTimes} x bet","WIN_X_AMOUNT_G_GAME":"Win {winAmount}","WIN_T_TIMES_G_GAME":"Win {times} times","WIN_T_TIMES_IN_A_ROW_G_GAME":"Win {times} times in a row","WIN_X_AMOUNT_SPEND_Y_AMOUNT_G_GAME":"Win {winAmount}, min bet {amount}","WIN_T_TIMES_SPEND_X_AMOUNT_G_GAME":"Win {times} times, min bet {amount}","WIN_T_TIMES_IN_A_ROW_SPEND_X_AMOUNT_G_GAME":"Win {times} times in a row, min bet {amount}","LOSE_A_AMOUNT_IN_G_GAME":"Lose {loseAmount}","LOSE_T_TIMES_G_GAME":"Lose {times} times","LOSE_T_TIMES_IN_A_ROW_G_GAME":"Lose {times} times in a row","LOSE_T_TIMES_SPEND_X_AMOUNT_G_GAME":"Lose {times} times, min bet {amount}","LOSE_T_TIMES_IN_A_ROW_SPEND_X_AMOUNT_G_GAME":"Lose {times} times in a row, min bet {amount}","SPEND_X_AMOUNT_G_GAME":"Spend minimum {amount}","COLLECT_MORE_THAN_X_OF_Y_SYMBOL_ON_G_GAME":"{count} x {symbolName}","COLLECT_MORE_THAN_X_OF_Y_SYMBOL_ON_G_GAME_WITH_MIN_STAKE_S":"{count} x {symbolName}, min bet {amount}","COLLECT_X_OF_Y_SYMBOL_ON_G_GAME_IN_SINGLE_SPIN":"{count} x {symbolName} in one play","COLLECT_X_OF_Y_SYMBOL_ON_G_GAME_IN_SINGLE_SPIN_WITH_MIN_STAKE_S":"{count} x {symbolName} in one play, min bet {amount}","COLLECT_X_OF_Y_SYMBOL_ON_A_SINGLE_WINLINE_ON_G_GAME":"{count} x {symbolName} on a win line","COLLECT_X_OF_Y_SYMBOL_ON_A_SINGLE_WINLINE_ON_G_GAME_WITH_MIN_STAKE_S":"{count} x {symbolName} on a win line, min bet {amount}","COLLECT_X_OF_Y_SYMBOL_IN_SINGLE_WINLINE_ON_G_GAME":"{count} x {symbolName} on a win line","COLLECT_X_OF_Y_SYMBOL_IN_SINGLE_WINLINE_ON_G_GAME_WITH_MIN_STAKE_S":"{count} x {symbolName} on a win line, min bet {amount}","COLLECT_X_OF_Y_SYMBOL_IN_MULTIPLE_WINLINES_ON_G_GAME":"{count} x {symbolName} on win lines","COLLECT_X_OF_Y_SYMBOL_IN_MULTIPLE_WINLINES_ON_G_GAME_WITH_MIN_STAKE_S":"{count} x {symbolName} on win lines, min bet {amount}","PLAYER_SELECTS_TO_SPLIT_CARDS_IN_BLACKJACK_G":"Split cards","DEALER_BUSTS_X_TIMES_IN_A_ROW_IN_BLACKJACK_G":"Dealer busts {bustCount} times in a row","GET_5_CARD_CHARLIE_21_IN_BLACKJACK_G":"Get 5-card charlie 21","GET_5_CARD_CHARLIE_IN_BLACKJACK_G":"Get 5-card charlie","GET_BLACKJACK_X_TIMES_CONSECUTIVELY_IN_BLACKJACK_G":"Get Blackjack {blackjackCount} times in a row","GET_BLACKJACK_X_TIMES_IN_Y_HANDS_ON_G_GAME":"Get Blackjack {blackjackCount} times in {handCount} hands","GETS_BLACKJACK_IN_FIRST_2_CARDS_THAT_ARE_DEALT_IN_GAME_G":"Get Blackjack in first 2 cards","GETS_X_CARD_IN_FISRT_TWO_CARDS_THAT_ARE_DEALT_IN_GAME_G":"Get {cardName} in first 2 cards","PLAYER_DOUBLEDOWN_21_IN_BLACKJACK_G":"Double Down 21","PLAYER_DOUBLEDOWN_IN_BLACKJACK_G":"Double Down","HIT_T_TIMES_PRIZE_DRAW_OF_A_PLAYER":"","AWARD_BEST_WIN_MULTIPLIER_POINTS_TO_PLAYER":"Points awarded based on the best win/bet ratio of all qualifying spins for the promotion.\\n \\ne.g win 10 from a bet of 5 (2/1) awards 2 x 100 = 200 points, if the player then wins 20 from a bet of 5, their ratio is updated (4/1) and the additional 200 points are awarded.","AWARD_CUMULATIVE_WIN_MULTIPLIER_POINTS_TO_PLAYER":"Points will be awarded for each qualifying spin in the promotion,. The points awarded per spin are calculated by multiplying the total win multiplier by 100. For example, if a player bets £5 and wins £10, the total win multiplier is 2 (£5 x 2 = £10) so a score of 200 (2 x 100) is added to their overall score."},"common":{"award_spins":"{count} free spin | {count} free spins","award_empty":"No Prize","join_free":"FREE","join_to_play":"To Play","join_top_prize":"Top Prize","join_top_prizes":"Top Prizes","join_view_prizes":"View All Prizes","prizes":"Prizes","hide":"Hide","terms_conditions":"Terms & Conditions","logo_tournament_text":"TOURNAMENT","logo_prize_draw_text":"PRIZE DRAW","logo_quest_text":"AWARD QUEST"},"leaderboard":{"computing_title":"This tournament has finished","computing_tip":"The results are being finalised…","join_button":"Enter","join_spins":"Spin | Spins","join_minutes":"Minute | Minutes","join_view_rules":"View Tournament Rules","join_hide_rules":"Hide Tournament Rules","join_tournament_prizes":"Tournament Prizes","join_tournament_rules":"Tournament Rules","join_rules_1":"The Tournament is active on this game between {startTime} and {stopTime}.","join_rules_2":"To take part in the tournament, click the \'Join Tournament\' button.","join_rules_3":"There is no extra charge for the participation of the tournament.","join_rules_4":"Everyone starts with a number of qualifying spins allowing players to earn points. These points are added to the leaderboard.","join_rules_5":"The score of the leaderboard is based on the following rules:","join_rules_6":"Winners are rewarded as shown below after the tournament finishes.","play_leaderboard":"Leaderboard","play_points_rules":"Points Rules","play_spins_remain":"Spins Remaining","play_in_progress":"All Tournament Spins used, but the tournament is still in progress.","result_title":"Tournament Results","result_congratulations":"Congratulations Your Rank:  {position}","result_award":"Prize Awarded","result_prize":"Prize","result_failure":"UNFORTUNATELY\\nYOU DID NOT WIN A PRIZE\\nBetter luck next time...","result_hide":"Hide Tournament","timer_start":"TOURNAMENT STARTS","timer_end":"TOURNAMENT ENDS","timer_ready":"TOURNAMENT\\nREADY","timer_finished":"TOURNAMENT\\nCOMPLETE"},"prizedraw":{"join_button":"Enter","join_prize_left":"PRIZES LEFT","join_view_rules":"View Rules","join_hide_rules":"Hide Rules","join_rules_title":"Prize Draw Rules","join_rules_1":"The Prize Draw is active on this game from {startTime} until all prizes are gone.","join_rules_2":"To take part in the Prize Draw, click the ‘Enter’ button and accept the terms and conditions to play the game.","join_rules_3":"There is no extra charge for participation in the Prize Draw.","join_rules_4":"Each the condition is met, you will be withdrawing a ticket with a probability to win a prize.","join_rules_5":"To get a ticket, meet the following rule(s):","join_rules_6":"The list of prizes is as follows:","join_rules_7":"Any winning ticket received is awarded shortly after being notified of the win.","join_rules_8":"The event ends when no more winning prizes are available or if the event is manually cancelled.","play_rules_title":"Prize Draw Rule | Prize Draw Rules","play_rules_tab":"Prize Rules","play_remain":"Remaining","play_remain_ticket":"All Gone! | x1 Left |x{n} Left","over_title":"Prize Draw Over","over_tips":"There are no prizes left.","award_empty_msg":"Sorry, this ticket is empty"},"quest":{"join_button":"Enter","timer_start":"QUEST STARTS","timer_end":"QUEST ENDS","timer_ready":"QUEST\\nREADY","timer_finished":"QUEST\\nCOMPLETE","join_play_goal":"Goal","join_play_reward":"Award","join_play_max_reward":"Max Awards","join_play_progress":"Progress","view_terms_conditions":"View Terms & Conditions","hide_terms_conditions":"Hide Terms & Conditions","over_title":"The Quest is now finished.","over_thanks":"Thanks for your participation!"}}')
    },
    f05f: function(t, e, i) {},
    f075: function(t, e, i) {},
    f2cc: function(t, e, i) {
        "use strict";
        i("2898")
    },
    f312: function(t, e, i) {},
    f4c7: function(t, e, i) {
        "use strict";
        i("f312")
    },
    f640: function(t, e, i) {
        "use strict";
        i("9349")
    },
    f679: function(t, e, i) {
        "use strict";
        i("3732")
    },
    f769: function(t, e, i) {
        "use strict";
        i("e757")
    },
    f9fc: function(t, e, i) {},
    fa82: function(t, e, i) {
        "use strict";
        i("8f6f")
    },
    fae7: function(t, e, i) {
        "use strict";
        i("40a5")
    },
    faf9: function(t, e, i) {
        "use strict";
        i("34bc")
    },
    fb50: function(t, e, i) {},
    fbd9: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e017"),
            s = i.n(n),
            a = i("21a1"),
            o = i.n(a),
            r = new s.a({
                id: "icon-menu-close",
                use: "icon-menu-close-usage",
                viewBox: "0 0 42 40",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 40" id="icon-menu-close"><defs><style>#icon-menu-close .a{fill:rgba(0,229,202,0.36);stroke:#00e5ca;opacity:0;}#icon-menu-close .b,#icon-menu-close .d{fill:none;}#icon-menu-close .b{stroke:#fff;stroke-linecap:round;stroke-width:2px;}#icon-menu-close .c{stroke:none;}</style></defs><g class="a"><rect class="c" width="42" height="40" /><rect class="d" x="0.5" y="0.5" width="41" height="39" /></g><g transform="translate(0.364 1)"><line class="b" x2="18" transform="translate(14.636 13) rotate(45)" /><line class="b" x2="18" transform="translate(14.636 25.728) rotate(-45)" /></g></symbol>'
            });
        o.a.add(r);
        e["default"] = r
    },
    fcd0: function(t, e, i) {
        "use strict";
        i("2d65")
    },
    fe39: function(t, e, i) {
        "use strict";
        i("6b74")
    },
    fefa: function(t, e, i) {}
});
//# sourceMappingURL=app.e37e5759.js.map