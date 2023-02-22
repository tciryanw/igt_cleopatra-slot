define("kernel/logger/Logger", [], function() {
        "use strict";

        function e(e) {
            return e = e.toUpperCase(), C[e] ? C[e] : C.ALL
        }

        function n(e) {
            for (var n in C)
                if (e === C[n]) return n
        }

        function t(e) {
            var n = k[e.level] ? k[e.level] + " " : "",
                t = "origin" in e && null !== e.origin ? e.origin + " " : "",
                r = e.message;
            return n + t + "[" + e.datetime + "] " + r
        }

        function r(e) {
            if (!y) {
                if (!e) throw new Error("Initialize config data required for Logger initialization");
                "bus" in e && null !== e.bus && (b = e.bus(), b.subscribe({
                    channel: "Kernel",
                    topic: "Log.#",
                    callback: function(e, n) {
                        var t = n.topic.toLowerCase(),
                            r = {
                                "log.debug": i,
                                "log.info": u,
                                "log.warn": h,
                                "log.error": o,
                                "log.fatal": a
                            };
                        if (t in r) r[t](e.message, e.origin);
                        else if ("log.flush" === t && g(), "log.getlogs" === t) {
                            var s, l;
                            e && (s = e.level, l = e.formatted);
                            var f = c(s, l);
                            n.reply(null, {
                                logs: f
                            })
                        }
                    }
                }));
                var n = e.logConfig;
                n && (f(n.logLevel), _ = "turnOn" in n && n.turnOn), y = !0
            }
        }

        function i(e, n) {
            l("DEBUG", e, n)
        }

        function o(e, n) {
            l("ERROR", e, n)
        }

        function a(e, n) {
            l("FATAL", e, n)
        }

        function c(n, r) {
            var i = C.ALL,
                o = [];
            n && ("string" == typeof n ? i = e(n) : "boolean" == typeof n && (r = n)), r = !!r;
            var a;
            if (w && w.length > 0)
                for (var c = 0; c < w.length; c++) a = s(w[c]), i > 0 && e(a.level) !== i || (r && (a = t(a)), o.push(a));
            return o
        }

        function s(e) {
            if (!e) return e;
            for (var n = Object.keys(e), t = {}, r = 0; r < n.length; r++) t[n[r]] = e[n[r]];
            return t
        }

        function u(e, n) {
            l("INFO", e, n)
        }

        function l(n, r, i) {
            if (_ && !(e(n) < O)) {
                w.length >= S && w.shift();
                var o, a = {
                    datetime: (new Date).toISOString(),
                    level: n,
                    message: r
                };
                if (i && (a.origin = i), w.push(a), O <= C.DEBUG) switch (o = t(a), n) {
                    case "WARN":
                        console.log("%c" + o, "background: #F1E05A; color: #000000");
                        break;
                    case "INFO":
                    case "DEBUG":
                    default:
                        console.log(o)
                }
                "FATAL" !== n && "ERROR" !== n || console.log("%c" + o, "background: #FF3C56; color: #FFFFFF")
            }
        }

        function f(n) {
            O = e(n)
        }

        function p() {
            return n(O)
        }

        function h(e, n) {
            l("WARN", e, n)
        }

        function d() {
            w = []
        }

        function g() {
            if (m()) {
                var e = w.slice(0);
                localStorage.setItem(x, JSON.stringify(e)), d()
            }
        }

        function m() {
            try {
                return "localStorage" in window && null !== window.localStorage
            } catch (e) {
                return !1
            }
        }

        function v() {
            y = !1, b = null, w = [], _ = !0, O = C.FATAL
        }
        var y = !1,
            b = null,
            w = [],
            S = 500,
            _ = !0,
            C = {
                ALL: 0,
                DEBUG: 20,
                INFO: 40,
                WARN: 60,
                ERROR: 100,
                FATAL: 500,
                NONE: 900
            },
            k = function() {
                var e = {};
                for (var n in C) e[n] = "[" + n + "]";
                return e.ALL = "", e
            }(),
            x = "skateboard.logs",
            O = C.FATAL;
        return function() {
            return Object.freeze({
                init: r,
                setLevel: f,
                getLevel: p,
                clear: d,
                reset: v,
                debug: i,
                error: o,
                fatal: a,
                info: u,
                warn: h,
                log: function(e, n) {
                    l("INFO", e, n)
                },
                getLogs: c,
                flush: g
            })
        }()
    }), define("kernel/verify/CryptoJS", ["require"], function(e) {
        "use strict";

        function n(e) {
            return r.MD5(e).toString(r.enc.Hex)
        }

        function t(e) {
            return r.MD5(r.enc.Latin1.parse(e)).toString(r.enc.Hex)
        }
        var r = r || function(e, n) {
            var t = Object.create || function() {
                    function e() {}
                    return function(n) {
                        var t;
                        return e.prototype = n, t = new e, e.prototype = null, t
                    }
                }(),
                r = {},
                i = r.lib = {},
                o = i.Base = function() {
                    return {
                        extend: function(e) {
                            var n = t(this);
                            return e && n.mixIn(e), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                                n.$super.init.apply(this, arguments)
                            }), n.init.prototype = n, n.$super = this, n
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var n in e) e.hasOwnProperty(n) && (this[n] = e[n]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }(),
                a = i.WordArray = o.extend({
                    init: function(e, n) {
                        e = this.words = e || [], this.sigBytes = void 0 !== n ? n : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || s).stringify(this)
                    },
                    concat: function(e) {
                        var n = this.words,
                            t = e.words,
                            r = this.sigBytes,
                            i = e.sigBytes;
                        if (this.clamp(), r % 4)
                            for (var o = 0; o < i; o++) {
                                var a = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                n[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                            } else
                                for (var o = 0; o < i; o += 4) n[r + o >>> 2] = t[o >>> 2];
                        return this.sigBytes += i, this
                    },
                    clamp: function() {
                        var n = this.words,
                            t = this.sigBytes;
                        n[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, n.length = e.ceil(t / 4)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(n) {
                        for (var t, r = [], i = 0; i < n; i += 4) {
                            var o = function(n) {
                                var n = n,
                                    t = 987654321,
                                    r = 4294967295;
                                return function() {
                                    t = 36969 * (65535 & t) + (t >> 16) & r, n = 18e3 * (65535 & n) + (n >> 16) & r;
                                    var i = (t << 16) + n & r;
                                    return i /= 4294967296, (i += .5) * (e.random() > .5 ? 1 : -1)
                                }
                            }(4294967296 * (t || e.random()));
                            t = 987654071 * o(), r.push(4294967296 * o() | 0)
                        }
                        return new a.init(r, n)
                    }
                }),
                c = r.enc = {},
                s = c.Hex = {
                    stringify: function(e) {
                        for (var n = e.words, t = e.sigBytes, r = [], i = 0; i < t; i++) {
                            var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var n = e.length, t = [], r = 0; r < n; r += 2) t[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new a.init(t, n / 2)
                    }
                },
                u = c.Latin1 = {
                    stringify: function(e) {
                        for (var n = e.words, t = e.sigBytes, r = [], i = 0; i < t; i++) {
                            var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(o))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var n = e.length, t = [], r = 0; r < n; r++) t[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new a.init(t, n)
                    }
                },
                l = c.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(window.escape(u.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return u.parse(window.unescape(encodeURIComponent(e)))
                    }
                },
                f = i.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new a.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(n) {
                        var t, r = this._data,
                            i = r.words,
                            o = r.sigBytes,
                            c = this.blockSize,
                            s = 4 * c,
                            u = o / s;
                        u = n ? e.ceil(u) : e.max((0 | u) - this._minBufferSize, 0);
                        var l = u * c,
                            f = e.min(4 * l, o);
                        if (l) {
                            for (var p = 0; p < l; p += c) this._doProcessBlock(i, p);
                            t = i.splice(0, l), r.sigBytes -= f
                        }
                        return new a.init(t, f)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                }),
                p = (i.Hasher = f.extend({
                    cfg: o.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function() {
                        f.reset.call(this), this._doReset()
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(n, t) {
                            return new e.init(t).finalize(n)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(n, t) {
                            return new p.HMAC.init(e, t).finalize(n)
                        }
                    }
                }), r.algo = {});
            return r
        }(Math);
        return function(e) {
            function n(e, n, t, r, i, o, a) {
                var c = e + (n & t | ~n & r) + i + a;
                return (c << o | c >>> 32 - o) + n
            }

            function t(e, n, t, r, i, o, a) {
                var c = e + (n & r | t & ~r) + i + a;
                return (c << o | c >>> 32 - o) + n
            }

            function i(e, n, t, r, i, o, a) {
                var c = e + (n ^ t ^ r) + i + a;
                return (c << o | c >>> 32 - o) + n
            }

            function o(e, n, t, r, i, o, a) {
                var c = e + (t ^ (n | ~r)) + i + a;
                return (c << o | c >>> 32 - o) + n
            }
            var a = r,
                c = a.lib,
                s = c.WordArray,
                u = c.Hasher,
                l = a.algo,
                f = [];
            ! function() {
                for (var n = 0; n < 64; n++) f[n] = 4294967296 * e.abs(e.sin(n + 1)) | 0
            }();
            var p = l.MD5 = u.extend({
                _doReset: function() {
                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(e, r) {
                    for (var a = 0; a < 16; a++) {
                        var c = r + a,
                            s = e[c];
                        e[c] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                    }
                    var u = this._hash.words,
                        l = e[r + 0],
                        p = e[r + 1],
                        h = e[r + 2],
                        d = e[r + 3],
                        g = e[r + 4],
                        m = e[r + 5],
                        v = e[r + 6],
                        y = e[r + 7],
                        b = e[r + 8],
                        w = e[r + 9],
                        S = e[r + 10],
                        _ = e[r + 11],
                        C = e[r + 12],
                        k = e[r + 13],
                        x = e[r + 14],
                        O = e[r + 15],
                        I = u[0],
                        E = u[1],
                        P = u[2],
                        T = u[3];
                    I = n(I, E, P, T, l, 7, f[0]), T = n(T, I, E, P, p, 12, f[1]), P = n(P, T, I, E, h, 17, f[2]), E = n(E, P, T, I, d, 22, f[3]), I = n(I, E, P, T, g, 7, f[4]), T = n(T, I, E, P, m, 12, f[5]), P = n(P, T, I, E, v, 17, f[6]), E = n(E, P, T, I, y, 22, f[7]), I = n(I, E, P, T, b, 7, f[8]), T = n(T, I, E, P, w, 12, f[9]), P = n(P, T, I, E, S, 17, f[10]), E = n(E, P, T, I, _, 22, f[11]), I = n(I, E, P, T, C, 7, f[12]), T = n(T, I, E, P, k, 12, f[13]), P = n(P, T, I, E, x, 17, f[14]), E = n(E, P, T, I, O, 22, f[15]), I = t(I, E, P, T, p, 5, f[16]), T = t(T, I, E, P, v, 9, f[17]), P = t(P, T, I, E, _, 14, f[18]), E = t(E, P, T, I, l, 20, f[19]), I = t(I, E, P, T, m, 5, f[20]), T = t(T, I, E, P, S, 9, f[21]), P = t(P, T, I, E, O, 14, f[22]), E = t(E, P, T, I, g, 20, f[23]), I = t(I, E, P, T, w, 5, f[24]), T = t(T, I, E, P, x, 9, f[25]), P = t(P, T, I, E, d, 14, f[26]), E = t(E, P, T, I, b, 20, f[27]), I = t(I, E, P, T, k, 5, f[28]), T = t(T, I, E, P, h, 9, f[29]), P = t(P, T, I, E, y, 14, f[30]), E = t(E, P, T, I, C, 20, f[31]), I = i(I, E, P, T, m, 4, f[32]), T = i(T, I, E, P, b, 11, f[33]), P = i(P, T, I, E, _, 16, f[34]), E = i(E, P, T, I, x, 23, f[35]), I = i(I, E, P, T, p, 4, f[36]), T = i(T, I, E, P, g, 11, f[37]), P = i(P, T, I, E, y, 16, f[38]), E = i(E, P, T, I, S, 23, f[39]), I = i(I, E, P, T, k, 4, f[40]), T = i(T, I, E, P, l, 11, f[41]), P = i(P, T, I, E, d, 16, f[42]), E = i(E, P, T, I, v, 23, f[43]), I = i(I, E, P, T, w, 4, f[44]), T = i(T, I, E, P, C, 11, f[45]), P = i(P, T, I, E, O, 16, f[46]), E = i(E, P, T, I, h, 23, f[47]), I = o(I, E, P, T, l, 6, f[48]), T = o(T, I, E, P, y, 10, f[49]), P = o(P, T, I, E, x, 15, f[50]), E = o(E, P, T, I, m, 21, f[51]), I = o(I, E, P, T, C, 6, f[52]), T = o(T, I, E, P, d, 10, f[53]), P = o(P, T, I, E, S, 15, f[54]), E = o(E, P, T, I, p, 21, f[55]), I = o(I, E, P, T, b, 6, f[56]), T = o(T, I, E, P, O, 10, f[57]), P = o(P, T, I, E, v, 15, f[58]), E = o(E, P, T, I, k, 21, f[59]), I = o(I, E, P, T, g, 6, f[60]), T = o(T, I, E, P, _, 10, f[61]), P = o(P, T, I, E, h, 15, f[62]), E = o(E, P, T, I, w, 21, f[63]), u[0] = u[0] + I | 0, u[1] = u[1] + E | 0, u[2] = u[2] + P | 0, u[3] = u[3] + T | 0
                },
                _doFinalize: function() {
                    var n = this._data,
                        t = n.words,
                        r = 8 * this._nDataBytes,
                        i = 8 * n.sigBytes;
                    t[i >>> 5] |= 128 << 24 - i % 32;
                    var o = e.floor(r / 4294967296),
                        a = r;
                    t[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), n.sigBytes = 4 * (t.length + 1), this._process();
                    for (var c = this._hash, s = c.words, u = 0; u < 4; u++) {
                        var l = s[u];
                        s[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                    }
                    return c
                },
                clone: function() {
                    var e = u.clone.call(this);
                    return e._hash = this._hash.clone(), e
                }
            });
            a.MD5 = u._createHelper(p), a.HmacMD5 = u._createHmacHelper(p)
        }(Math), Object.freeze({
            doMD54String: n,
            doMD54Binary: t
        })
    }), define("kernel/verify/CheckMD5", ["require", "kernel/logger/Logger", "kernel/verify/CryptoJS"], function(e) {
        function n(e, n, t) {
            var r = new XMLHttpRequest;
            r.open("GET", e), r.responseType = "blob", r.onload = function(e) {
                var t = new FileReader;
                t.onload = function() {
                    n(t.result)
                }, t.readAsBinaryString(r.response)
            }, r.open("GET", e, !0), r.send()
        }

        function t(e, t, r) {
            var i = (Date.now(), []),
                a = {
                    done: 0,
                    skipped: 0,
                    broken: 0,
                    total: 0
                },
                c = setTimeout(function() {
                    e.skiplist.push("json"), e.skiplist.push("js"), c = void 0
                }, 1e4);
            if (e.data) {
                var s = o.doMD54Binary(e.data);
                i = JSON.parse(e.data), a.total = i.length, t && t(a);
                var u = !0,
                    l = function() {
                        if (0 === i.length) return c && window.clearTimeout(c), void(r && r(u));
                        if (!u) return c && window.clearTimeout(c), void(r && r(!1));
                        var f = i.pop();
                        if (a.total = i.length, 0 === f.path.indexOf(".") || e.skiplist.includes(f.path.split(".").reverse()[0])) return a.done++, a.skipped++, t && t(a), void l();
                        n(e.filepath + f.path + "?t=" + s, function(n) {
                            if (void 0 === n) e.logErrors && console.log("[MD5] ERROR: File deleted or no data loadable. [" + f.path + "]"), u = !1, a.broken++;
                            else {
                                var r = e.useStringCheck ? o.doMD54String(n) : o.doMD54Binary(n);
                                if (r !== f.md5) {
                                    var i = n.size || n.length;
                                    e.logErrors && console.log("[MD5] ERROR: " + f.path + " hash mismatch [Expected: " + f.md5 + ", Received: " + r + ", Size: " + i), u = !1, a.broken++
                                } else a.done++
                            }
                            t && t(a), l()
                        })
                    };
                l(i)
            }
        }

        function r(e, n, r, i, o) {
            t({
                filepath: n,
                logErrors: r,
                data: e,
                useStringCheck: !0,
                skiplist: ["png", "mp3", "ogg", "wav", "m4a", "jpg", "PNG", "JPG", "ac3", "webm", "ttf", "css", "mp4"]
            }, i, o)
        }

        function i(e, n, i, o, a) {
            if (e.length > 0 && 0 !== e.indexOf("[")) {
                var c = [];
                e.split(/[\r\n]+/g).forEach(function(e) {
                    if (0 !== e.indexOf("#")) {
                        var n = e.split(",");
                        n.length < 2 || n[0] && !/^\s*$/g.test(n[0]) && n[1] && !/^\s*$/g.test(n[1]) && c.push({
                            path: n[0],
                            md5: n[1]
                        })
                    }
                }), t({
                    filepath: n,
                    logErrors: i,
                    data: JSON.stringify(c),
                    skiplist: ["png", "mp3", "ogg", "wav", "m4a", "jpg", "PNG", "JPG", "ac3", "webm", "ttf", "css", "mp4"]
                }, o, a)
            } else 0 === e.indexOf("[") && r(e, n, i, o, a)
        }
        var o = (e("kernel/logger/Logger"), e("kernel/verify/CryptoJS"));
        return {
            verifyMD5FileData: i,
            hex_md5: o.doMD54String,
            binary_hex_md5: o.doMD54Binary
        }
    }), define("kernel/clientconfig/ClientConfig", ["require", "kernel/verify/CheckMD5"], function(e) {
        function n(n, t) {
            function r(e) {
                var n = [];
                for (var t in e) e.hasOwnProperty(t) && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                return n.join("&")
            }

            function o(e, n, t) {
                var i = new XMLHttpRequest;
                e.params && (e.url += "?" + r(e.params)), i.onreadystatechange = function(e) {
                    this.readyState === XMLHttpRequest.DONE && (200 === this.status ? n(i.responseText) : t(i.responseText))
                }, e.postParams ? (i.open("POST", e.url, !0), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify(e.postParams))) : (i.open("GET", e.url, !0), i.setRequestHeader("Content-Type", "application/json"), i.send())
            }

            function a(e) {
                var n = e;
                try {
                    n = JSON.parse(e)
                } catch (e) {
                    return v("[IXF] Error parsing config.json!"), i("[IXF] Error parsing config.json!"), 1
                }
                d = y.env ? y.env.toLowerCase() : "prod", m = n[d], y.skincode && m.hasOwnProperty(y.skincode.toUpperCase()) && (m = m[y.skincode.toUpperCase()]), h = m.endpoint, p = m.hasOwnProperty("baseUrl") ? m.baseUrl : (window.location.origin + window.location.pathname).replace("/index.html", "/")
            }

            function c(e) {
                var n = e;
                try {
                    n = JSON.parse(e)
                } catch (e) {
                    v("[IXF] Error parsing games.json!")
                }
                return n
            }

            function s(e, n) {
                var t = e || {};
                return ["consoleConfig", "kernelConfig", "serverConfig", "gameConfig", "stringsConfig"].forEach(function(e) {
                    t.hasOwnProperty(e) || (t[e] = {})
                }), t.gameConfig.assetPack = "mobile", y.hasOwnProperty("language") || (y.langauge = "en"), t.kernelConfig.paramSplash = {
                    assetPack: "mobile",
                    language: y.language,
                    skincode: y.skincode
                }, t.kernelConfig.loglevel = "NONE", t.consoleConfig.paramConsole = y, t.serverConfig.paramGame = {
                    assetPack: "mobile"
                }, t.serverConfig.channel = "MOB", t.serverConfig.presenttype = "STD", t.gameConfig.gameTitle = "Error", t.serverConfig.paramRGS = {
                    technology: "HTML"
                }, t.serverConfig.server = h + "skb", ["TCustomView", "BCustomView", "LCustomView", "RCustomView"].forEach(function(e) {
                    t.consoleConfig[e] = {}
                }), t.stringsConfig.errId = "", t
            }

            function u(e) {
                try {
                    e = JSON.parse(e)
                } catch (e) {
                    return i("Error Parsing Client Config!"), s()
                }
                e.RGSResponse && (e.ExtraInfo && (e.RGSResponse.ExtraInfo = e.ExtraInfo), e = e.RGSResponse), e.Exception && (e = s(e)), e.serverConfig.sessionToken && (e.serverConfig.IGTJSESSIONID = e.serverConfig.sessionToken), ["TCustomView", "BCustomView", "LCustomView", "RCustomView"].forEach(function(n) {
                    e.consoleConfig.hasOwnProperty(n) && (m[n] ? (e.consoleConfig[n] = m[n], e.consoleConfig[n].consoleUrl = p + e.consoleConfig[n].consoleUrl) : e.consoleConfig[n] && delete e.consoleConfig[n])
                }), m.hasOwnProperty("lobbyUrl") && (e.consoleConfig.lobbyUrl = m.lobbyUrl);
                var t = g[y.softwareid];
                return t || (t = "games/" + y.softwareid.slice(0, 10) + "/"), e.kernelConfig.splashUrl = p + t + "splash.html", e.serverConfig.gameUrl = p + t + "launcher.html", "desktop" === e.gameConfig.assetPack && (e.gameConfig.assetPack = "mobile", e.kernelConfig.paramSplash.assetPack = "mobile", e.serverConfig.paramGame.assetPack = "mobile"), "INT" === e.serverConfig.channel && (e.serverConfig.channel = "MOB"), e.kernelConfig.localgame = !0, e.serverConfig.cecServerUrl = void 0, delete e.serverConfig.cecServerUrl, document.title = e.gameConfig.gameTitle, e.Exception ? void n(e) : e
            }
            var l, f, p = "",
                h = "",
                d = "dev",
                g = {},
                m = {},
                v = function(e) {
                    "prod" !== d && console.log(e)
                },
                y = new function(e) {
                    var e = (e || location.search).substring(1);
                    e && e.split("&").map(function(e) {
                        e = e.split("="), this[decodeURIComponent(e[0])] = decodeURIComponent(e[1])
                    }, this)
                };
            o({
                url: "./config.json",
                params: {
                    t: Date.now()
                }
            }, function(r) {
                v("[IXF] Parsing config.json"), a(r) || o({
                    url: "./games.json",
                    params: {
                        t: Date.now()
                    }
                }, function(r) {
                    v("[IXF] Parsing games.json"), g = c(r), o({
                        url: "./platform.md5",
                        params: {
                            t: Date.now()
                        }
                    }, function(r) {
                        l = r;
                        var i = g[y.softwareid];
                        i || (i = "games/" + y.softwareid.slice(0, 10) + "/"), o({
                            url: p + i + "manifest.md5",
                            params: {
                                t: Date.now()
                            }
                        }, function(a) {
                            f = a;
                            var c = e("kernel/verify/CheckMD5"),
                                s = JSON.parse(JSON.stringify(y));
                            s.skbchk = c.hex_md5(l), s.gamechk = c.hex_md5(f);
                            var d = {},
                                g = {},
                                b = m.postParams ? m.postParams : [];
                            Object.keys(s).forEach(function(e) {
                                b.indexOf(e) >= 0 ? g[e] = s[e] : d[e] = s[e]
                            }), v("[IXF] Loading client config from " + h + "skb/clientConfig"), o({
                                url: h + "skb/clientConfig",
                                params: d,
                                postParams: g
                            }, function(e) {
                                v("[IXF] Parsing client config");
                                var t = u(e);
                                if (t) {
                                    if (t.Exception) return void n(t);
                                    t.serverConfig.reloadWithGet = !0, c.verifyMD5FileData(r, "./", y.env && "prod" !== y.env, function(e) {
                                        console.log("Verify Update: Success [" + e.done + "], Fail: [" + e.broken + "], Skipped:[" + e.skipped + "] Remaining: [" + e.total + "]")
                                    }, function(e) {
                                        e ? c.verifyMD5FileData(f, p + i, y.env && "prod" !== y.env, function(e) {}, function(e) {
                                            e ? n(t) : (t.Exception = {
                                                Id: "FT-005",
                                                Reference: "NA",
                                                Message: "Game MD5 Verification Failed.",
                                                Buttons: {
                                                    Button: {
                                                        Text: "OK",
                                                        Cmd: {
                                                            "@name": "closeGame"
                                                        }
                                                    }
                                                }
                                            }, n(t))
                                        }) : (t.Exception = {
                                            Id: "FT-004",
                                            Reference: "NA",
                                            Message: "Platform MD5 Verification Failed.",
                                            Buttons: {
                                                Button: {
                                                    Text: "OK",
                                                    Cmd: {
                                                        "@name": "closeGame"
                                                    }
                                                }
                                            }
                                        }, n(t))
                                    })
                                }
                            }, t)
                        }, t)
                    }, t)
                })
            }, t)
        }

        function t(e, n) {
            var t, r = document.getElementsByName("com.igt.skateboard.CLIENTCONFIG")[0];
            if (!r) return void n();
            if (!r || !r.content) throw new Error("Missing or malformed element com.igt.skateboard.CLIENTCONFIG");
            t = JSON.parse(r.content), t.serverConfig.sessionToken && (t.serverConfig.IGTJSESSIONID = t.serverConfig.sessionToken), r.parentNode.removeChild(r), t.stringsConfig.hasOwnProperty("Balance") || (t.stringsConfig.Balance = {
                da: "Saldo",
                de: "Guthaben",
                el: "Υπολοιπο",
                "es-mx": "Saldo",
                es: "Saldo",
                fi: "Saldo",
                "fr-ca": "Solde",
                fr: "Solde",
                hu: "Egyenleg",
                it: "Saldo",
                no: "Saldo",
                pl: "Saldo",
                pt: "Saldo",
                ro: "Sold",
                sv: "Saldo"
            }), t.stringsConfig.hasOwnProperty("Free Spins") || (t.stringsConfig["Free Spins"] = {
                da: "Gratis spins",
                de: "Freispiele gewonnen",
                el: "Δωρεάν περιστροφές",
                "es-mx": "Tiradas Gratuitas",
                es: "Tiradas gratuitas",
                fi: "Ilmaispyöräytykset",
                "fr-ca": "Lancers gratuits",
                fr: "Tours gratuits",
                hu: "Ingyenes pörgetések",
                it: "Giri Gratuiti",
                no: "Gratisspinn",
                pl: "Bezpłatne zakręcenia",
                pt: "Rodadas Grátis",
                ro: "Învârtiri gratuite",
                sv: "Gratissnurrar"
            }), e(t)
        }

        function r(e) {
            return ["TCustomView", "BCustomView", "LCustomView", "RCustomView"].forEach(function(n) {
                e.consoleConfig[n] && (e.consoleConfig[n].lobbyUrl = e.consoleConfig.lobbyUrl, e.consoleConfig[n].consoleParamWhitelist = e.consoleConfig.consoleParamWhitelist)
            }), e
        }

        function i(e) {
            document.getElementById("loader") && (document.getElementById("loader").style.visibility = "hidden"), document.getElementById("messageBoxDiv") && (document.getElementById("messageBoxDiv").style.visibility = "visible"), document.getElementById("message") && (document.getElementById("message").innerHTML = e);
            var n = document.getElementById("container");
            n && n.parentNode.removeChild(n)
        }

        function o(e) {
            t(function(n) {
                e(r(n))
            }, function() {
                n(function(n) {
                    e(n)
                }, function(e) {
                    e || (e = "System Error"), i(e)
                })
            })
        }
        return {
            load: o
        }
    }), define("kernel/iframefactory/Frame", ["require"], function(e) {
        "use strict";
        return function(e, n) {
            function t() {
                c.style.visibility = "visible", c.style.display = "block"
            }

            function r() {
                c.style.visibility = "hidden"
            }

            function i(e) {
                s.src = e
            }

            function o(e) {
                a.call(c, e)
            }

            function a(e) {
                return Object.keys(e).forEach(function(n) {
                    this.style[n] = e[n]
                }, this), this
            }
            var c = document.createElement("iframe"),
                s = c;
            if (c.id = e, c.scrolling = "no", c.allow = "autoplay", n) {
                var u = document.createElement("div");
                c.style.border = "0", c.style.margin = "0", c.style.padding = "0", u.appendChild(c), c.style.visibility = "inherit", c.style.display = "inherit", c.style.width = "100%", c.style.height = "100%", c = u
            }
            return {
                element: c,
                show: t,
                hide: r,
                style: o,
                setSrc: i
            }
        }
    }), define("kernel/iframefactory/IFrameFactory", ["require", "kernel/iframefactory/Frame"], function(e) {
        "use strict";

        function n(e, n) {
            if (0 === arguments.length) throw new Error("IFrameFactory expects a frame id to be passed into constructor");
            return t(e, n)
        }
        var t = e("kernel/iframefactory/Frame");
        return {
            create: n
        }
    }), define("kernel/resizer/Resizer", [], function() {
        "use strict";

        function e(e, n) {
            Object.keys(n).forEach(function(t) {
                e.style[t] = n[t]
            })
        }

        function n() {
            e(u.document.getElementsByTagName("html")[0], {
                width: "100%"
            }), e(u.document.getElementsByTagName("body")[0], {
                width: "100%",
                height: "100%",
                boxSizing: "border-box"
            })
        }

        function t(n, t) {
            e(u.document.getElementsByTagName("html")[0], {
                width: n,
                height: t,
                overflow: "hidden"
            }), e(u.document.getElementsByTagName("body")[0], {
                width: n,
                height: t,
                boxSizing: "border-box"
            })
        }

        function r(n) {
            e(n, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            })
        }

        function i(e, i) {
            if (!l) {
                if (u = i || window, !e) throw new Error("Initialize config data required for Resizer initialization");
                a = e.config, n(), r(a.container), "bus" in e && null !== e.bus && (c = e.bus, c.subscribe({
                    channel: "Kernel",
                    topic: "Resizer.#",
                    callback: function(e, n) {
                        n.reply(null, {
                            result: "done"
                        })
                    }
                }), c.subscribe({
                    channel: "ConsoleService",
                    topic: "Option.SetSize",
                    callback: function(e) {
                        t(Number(e.width) + "px", Number(e.height) + "px"), f = !0
                    }
                }), c.subscribe({
                    channel: "Game",
                    topic: "Game.AutoSpinStart",
                    callback: function(e, n) {
                        p = !0
                    }
                }), c.subscribe({
                    channel: "ClientService",
                    topic: "Game.StopAutoSpin",
                    callback: function(e, n) {
                        p = !1
                    }
                }), c.subscribe({
                    channel: "Game",
                    topic: "Game.AutoSpinStopped",
                    callback: function(e, n) {
                        p = !1
                    }
                })), l = !0
            }
        }

        function o(e) {
            s = e
        }
        var a, c, s, u, l = !1,
            f = !1,
            p = !1;
        return function() {
            return Object.freeze({
                init: i,
                setCECCommand: o
            })
        }()
    }), define("kernel/subsystem/SubsystemManager", ["require", "kernel/iframefactory/IFrameFactory", "kernel/logger/Logger", "kernel/resizer/Resizer"], function(e) {
        "use strict";

        function n(e, n, t) {
            w = e, ue = n.gsEnabled, E = w.subscribe({
                channel: "Kernel",
                topic: "LoadProgress",
                callback: p
            }), w.subscribe({
                channel: "ConsoleService",
                topic: "ConsoleService.Resize",
                callback: a
            }), w.subscribe({
                channel: "ConsoleService",
                topic: "Option.SetSize",
                callback: c
            }), w.subscribe({
                channel: "ConsoleService",
                topic: "Option.PinchZoomFixer",
                callback: function(e) {}
            }), w.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.ActiveChange",
                callback: function(e) {
                    e.active ? (le = !0, fe && x.show()) : (le = !1, fe && (x.hide(), q = void 0, de = !0, s()))
                }
            }), w.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.Position",
                callback: function(e) {
                    le && e.game && R && (q && q.left === e.game.left && q.top === e.game.top && q.width === e.game.width && q.height === e.game.height && q.z === e.game.z || (q = e.game, x && q.hasOwnProperty("z") && (I.style.zIndex = q.z), de = !0, s()))
                }
            }), D = w.subscribe({
                channel: "ClientService",
                topic: "ClientService.InitDone",
                callback: function(e, n) {
                    P = !0, g()
                }
            }), j = w.subscribe({
                channel: "ConsoleService",
                topic: "ConsoleService.InitDone",
                callback: function(e, n) {
                    T = !0, g()
                }
            }), ue && (Q.gameservice = {}, N = w.subscribe({
                channel: "GameService",
                topic: "GameService.InitDone",
                callback: function(e, n) {
                    M = !0, g()
                }
            })), t()
        }

        function t(e) {
            return Object.keys(e).forEach(function(n) {
                this.style[n] = e[n]
            }, this), this
        }

        function r(e) {
            var n, t = document.createElement("a");
            return t.href = e, t.origin ? n = t.origin : "//" === (n = t.protocol + "//" + t.host) && (n = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), n
        }

        function i(e, n) {
            S = e, G = S.consoleConfig, F = u(), _ = S.container, I = S.gameContainer, _.id = "container", _.setAttribute("allowFullScreen", ""), t.call(_, {
                position: "fixed",
                top: "calc(0px + env(safe-area-inset-top) + constant(safe-area-inset-top)",
                left: "calc(0px + env(safe-area-inset-left) + constant(safe-area-inset-left)",
                width: "100%",
                height: "100%",
                overflow: "hidden"
            }), C = W.create("game"), k = W.create("splash"), ue && (x = W.create("gsp", !0), x.style({
                position: "absolute",
                border: 0,
                padding: 0,
                left: 0,
                top: 0,
                width: "inherit",
                height: "inherit",
                zIndex: 2
            }), x.hide()), k.element.src = y(S.kernelConfig.splashUrl, S.kernelConfig.paramSplash), k.element.origin = r(S.kernelConfig.splashUrl), I.id = "gameContainer", t.call(I, {
                position: "absolute",
                display: "block",
                border: 0,
                padding: 0,
                left: te + "px",
                top: ie + "px",
                width: window.innerWidth - (te + re) + "px",
                height: window.innerHeight - (ae + oe) + "px",
                overflow: "hidden",
                visibility: "hidden",
                zIndex: 3
            }), C.style({
                position: "absolute",
                border: 0,
                padding: 0,
                left: 0,
                top: 0,
                width: "inherit",
                height: "inherit",
                visibility: "inherit"
            }), k.style({
                position: "absolute",
                border: 0,
                padding: 0,
                left: "0px",
                top: "0px",
                visibility: "hidden",
                width: "100%",
                height: "100%"
            }), ee.push(I), Object.keys(G).filter(function(e) {
                if (G[e].hasOwnProperty("consoleUrl")) {
                    var n = G[e],
                        r = document.createElement("div");
                    r.id = e, ce[e] = r, t.call(r, F[e]);
                    var i = W.create(e + "Frame");
                    i.style({
                        border: 0,
                        padding: 0,
                        width: "inherit",
                        height: 0,
                        visibility: "inherit",
                        overflow: "hidden",
                        transform: "translateZ(0)",
                        webkitOverflowScrolling: "touch",
                        overflowY: "scroll"
                    }), i.element.src = y(n.consoleUrl, G.paramConsole), r.appendChild(i.element), ne.push(r)
                }
            }), n()
        }

        function o(e, n, t) {
            var r;
            return function() {
                function i() {
                    t || e.apply(o, a), r = null
                }
                var o = this,
                    a = arguments;
                r ? clearTimeout(r) : t && e.apply(o, a), r = setTimeout(i, n || 100)
            }
        }

        function a(e) {
            U = e, de = !0
        }

        function c(e) {
            H = e.width, z = e.height, s()
        }

        function s() {
            V || (V = setInterval(s, 1e3));
            var e = {},
                n = me && window.outerWidth ? window.outerWidth / window.innerWidth : 1;
            n !== J && (de = !0), 0 !== window.scrollX && window.scrollTo(0, navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.match(/\s+8_[\d_]+\s+like Mac OS X/) ? 1 : 0);
            var r = H || (window.visualViewport ? window.visualViewport.width : window.innerWidth),
                i = z || (window.visualViewport ? window.visualViewport.height : window.innerHeight);
            if (de || r !== se.width || i !== se.height) {
                se.width = r, se.height = i, window.fullScreen || window.screen.height === window.innerHeight && window.screen.width === window.innerWidth ? ge || (ge = !0, L.postFullscreenEvent("E")) : ge && (ge = !1, L.postFullscreenEvent("D")), de = !1;
                var o = window.getComputedStyle(document.body);
                n !== J && (n > 1 ? (_.style.webkitTransformOrigin = "0 0", _.style.webkitTransform = "scale(" + 1 / n + ")", console.log("ZOOM: " + n), r *= n, i *= n) : _.style.webkitTransform = ""), J = n, window.parent === window ? (_.style.position = "fixed", _.style.top = "calc(0px + (" + o.paddingTop + " / " + n + "))", _.style.left = "calc(0px + (" + o.paddingLeft + " / " + n + "))", _.style.width = "calc(" + r + "px - " + o.paddingLeft + " - " + o.paddingRight + ")", _.style.height = "calc(" + i + "px - " + o.paddingBottom + " - " + o.paddingTop + ")") : (_.style.width = "100%", _.style.height = "100%");
                if (function() {
                        window.scrollTo(0, navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.match(/\s+8_[\d_]+\s+like Mac OS X/) ? 1 : 0)
                    }(), F = u(ce), U)
                    for (var a in ce) t.call(ce[a], F[a]);
                k && k.style({
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: _.offsetWidth + "px",
                    height: _.offsetHeight + "px"
                }), x && t.call(x.element, {
                    position: "absolute",
                    left: te + "px",
                    top: ae + "px",
                    bottom: oe + "px",
                    width: _.offsetWidth - (te + re) + "px",
                    height: _.offsetHeight - (ae + oe) + "px"
                }), q ? (t.call(C.element, {
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    width: q.width + "px",
                    height: q.height + "px"
                }), t.call(I, {
                    position: "absolute",
                    left: te + q.left + "px",
                    top: ae + q.top + "px",
                    width: q.width + "px",
                    height: q.height + "px"
                }), e.game = {
                    left: q.left,
                    top: ae + q.top,
                    width: q.width,
                    height: q.height
                }) : (t.call(I, {
                    position: "absolute",
                    left: te + "px",
                    top: ae + "px",
                    bottom: oe + "px",
                    width: _.offsetWidth - (te + re) + "px",
                    height: _.offsetHeight - (ae + oe) + "px"
                }), e.game = {
                    left: te,
                    top: ae,
                    width: _.offsetWidth - (te + re),
                    height: _.offsetHeight - (ae + oe)
                }), C.element.style.width = "100%", C.element.style.width = "inherit", C.element.style.height = "100%", C.element.style.width = "inherit", C.element.style.height = "inherit", w.publish({
                    channel: "Kernel",
                    topic: "System.Resize",
                    data: e
                })
            }
        }

        function u(e) {
            return te = G.LCustomView && G.LCustomView.width ? Math.ceil(parseInt(G.LCustomView.width)) : 0, re = G.RCustomView && G.RCustomView.width ? Math.ceil(parseInt(G.RCustomView.width)) : 0, ie = G.TCustomView && G.TCustomView.height ? Math.ceil(parseInt(G.TCustomView.height)) : 0, oe = G.BCustomView && G.BCustomView.height ? Math.ceil(parseInt(G.BCustomView.height)) : 0, ae = !G.TCustomView || "Y" !== G.TCustomView.resizable && "true" !== G.TCustomView.resizable ? ie : 0, U && (te = U.LCustomView.reserved || te, re = U.RCustomView.reserved || re, ie = U.TCustomView.reserved || ie, oe = U.BCustomView.reserved || oe, ae = !G.TCustomView || "Y" !== G.TCustomView.resizable && "true" !== G.TCustomView.resizable || U.TCustomView.reserved ? ie : 0), {
                TCustomView: {
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    transform: "translateZ(0)",
                    overflow: ve,
                    webkitOverflowScrolling: "touch",
                    zIndex: 8,
                    transitionDelay: "20ms",
                    transitionProperty: "height"
                },
                LCustomView: {
                    position: "absolute",
                    left: 0,
                    top: 0 + ie + "px",
                    bottom: 0 + oe + "px",
                    height: window.innerHeight - (ie + oe) + "px",
                    transform: "translateZ(0)",
                    overflow: ve,
                    webkitOverflowScrolling: "touch",
                    transitionDelay: "20ms",
                    transitionProperty: "width",
                    zIndex: 6
                },
                BCustomView: {
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    transform: "translateZ(0)",
                    overflow: ve,
                    webkitOverflowScrolling: "touch",
                    zIndex: 7,
                    transitionDelay: "20ms",
                    transitionProperty: "height"
                },
                RCustomView: {
                    position: "absolute",
                    right: 0,
                    top: 0 + ie + "px",
                    bottom: 0 + oe + "px",
                    height: window.innerHeight - (ie + oe) + "px",
                    transform: "translateZ(0)",
                    overflow: ve,
                    webkitOverflowScrolling: "touch",
                    transitionDelay: "20ms",
                    transitionProperty: "width",
                    zIndex: 5
                }
            }
        }

        function l(e) {
            var n = {
                consoleConfig: e.consoleConfig,
                deviceConfig: e.deviceConfig,
                gameConfig: e.gameConfig,
                kernelConfig: e.kernelConfig,
                serverConfig: e.serverConfig,
                gameServiceConfig: e.gameServiceConfig,
                stringsConfig: e.stringsConfig
            };
            return e.hasOwnProperty("Exception") && (n.Exception = e.Exception), e.forceGetParamNames && (n.forceGetParamNames = e.forceGetParamNames), n
        }

        function f() {
            w.subscribe({
                channel: "Game",
                topic: "Game.Fullscreen",
                callback: v
            }), w.subscribe({
                channel: "Game",
                topic: "Game.Capabilities",
                callback: function(e) {
                    pe = JSON.parse(JSON.stringify(e)), Object.freeze(pe), w.publish({
                        channel: "Kernel",
                        topic: "Game.Capabilities",
                        data: e
                    })
                }
            }), w.publish({
                channel: "Kernel",
                topic: "System.Init",
                data: O
            }), de = !0, s(), g()
        }

        function p(e, n) {
            Y[e.id] = e;
            var t = 1,
                r = 0,
                i = 0,
                o = !1,
                a = 0;
            for (var c in Q)
                if (Y[c]) {
                    if (r += Number(Y[c].current), i += Number(Y[c].items), a += Number(Y[c].complete || Y[c].fail) ? 1 : 0, !X && Y.game && Y.consoleservice && !0 === Y.consoleservice.complete && Y.clientservice && !0 === Y.clientservice.complete && (!Q.gameservice || Y.gameservice && !0 === Y.gameservice.complete)) {
                        X = !0;
                        var s = w.subscribe({
                            channel: "ClientService",
                            topic: "ClientService.ConfigUpdate",
                            callback: function(e) {
                                O = l(S), e && (e.paramGame && (O.gameConfig.playMode = e.paramGame.playMode, O.serverConfig.paramGame.playMode = e.paramGame.playMode), e.freespin && (O.serverConfig.freespin_lines = e.freespin.freespin_lines, O.serverConfig.freespin_bet = e.freespin.freespin_bet)), Z = !0, R && f(), w.unsubscribe(s)
                            }
                        });
                        w.publish({
                            channel: "Kernel",
                            topic: "System.InternalInit",
                            data: l(S)
                        })
                    }
                    A = A || Y[c].fail
                } else t = 0;
            var u = Object.keys(Y).filter(function(e) {
                return !Y[e].complete
            });
            if (X && 0 === u.length && (o = !0), t) {
                clearTimeout(B);
                var p = Math.min(Math.round(r / i * 100), 100);
                if (k && k.element.contentWindow.postMessage({
                        loaded: p,
                        complete: o
                    }, k.element.origin), o) {
                    R = !0;
                    var d = Date.now() - he;
                    L.postLaunchTimes({
                        event: "GameLoadComplete",
                        gameLoadedElapse: d
                    }), w.unsubscribe(E), "INT" !== S.serverConfig.channel && (ve = "scroll"), O && f()
                } else B = h()
            }
        }

        function h(e) {
            return setTimeout(function() {
                K.error("handshakeTimeout error.", "SubsystemManager"), C.element && (C.element.src = "", C.element.parentElement && C.element.parentElement.removeChild(C.element)), A = 1, X && w.publish({
                    channel: "Kernel",
                    topic: "ErrorHandler.Throw",
                    data: {
                        errorCode: "FT-003",
                        priority: 0
                    }
                }), w && (w.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "game",
                        items: "10",
                        current: "10",
                        complete: !0
                    }
                }), w.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "consoleservice",
                        items: "10",
                        current: "10",
                        complete: !0
                    }
                }), w.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "clientservice",
                        items: "10",
                        current: "10",
                        complete: !0
                    }
                }), w.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "gameservice",
                        items: "10",
                        current: "10",
                        complete: !0
                    }
                }))
            }, e || 3e4)
        }

        function d(n, t) {
            he = Date.now(),
                function() {
                    var e = h();
                    k.element.onload = function(n) {
                        clearTimeout(e), clearTimeout(B), k.show();
                        var r = document.getElementById("loader");
                        r && (document.body.removeChild(r), r = null), document.body.style.backgroundColor = "black", de = !0, B = h(3e4);
                        for (var i in ee) _.insertBefore(ee[i], k.element);
                        t()
                    }
                }(), _.appendChild(k.element), n(ne, function(e) {
                    if (S.Exception) return B && clearTimeout(B), A = 1, w.publish({
                        channel: "Kernel",
                        topic: "System.InternalInit",
                        data: l(S)
                    }), de = !0, void s();
                    e && (e.playMode && (S.kernelConfig.paramSplash.playMode = e.playMode, S.serverConfig.paramRGS.playMode = e.playMode, S.serverConfig.paramGame.playMode = e.playMode, S.serverConfig.playMode = e.playMode), Object.keys(e).forEach(function(n) {
                        n.indexOf("freespin") >= 0 && (S.serverConfig.paramRGS[n] = e[n], S.serverConfig[n] = e[n])
                    })), C.element.src = y(S.serverConfig.gameUrl, S.serverConfig.paramGame), I.appendChild(C.element)
                }), s(), $.init({
                    bus: w,
                    config: {
                        container: _,
                        dragNotifyTime: 1e3,
                        dragScreen: "STD" === S.serverConfig.presenttype && "INT" !== S.serverConfig.channel
                    }
                });
            for (var r in ne) _.appendChild(ne[r]);
            ! function() {
                if (x) {
                    var n = e.toUrl("./gsp/competition").replace("/js/kernel/subsystem/gsp/", "/gsp/"),
                        t = n.split("?")[0] + "/compGSP.html",
                        r = "?" + n.split("?")[1];
                    x.setSrc(t + r + "&revisionTag=" + S.serverConfig.revisionTag), _.insertBefore(x.element, I.element)
                }
            }(), S.body.appendChild(_);
            window.addEventListener("resize", o(s))
        }

        function g() {
            if (A && (C.element.src = "", C.element.parentElement && C.element.parentElement.removeChild(C.element), S.Exception && (console.log("We should be throwing " + S.Exception.Id + " now"), w.publish({
                    channel: "Kernel",
                    topic: "ErrorHandler.Throw",
                    data: {
                        errorCode: S.Exception.Id,
                        priority: 0
                    }
                })), w.publish({
                    channel: "Kernel",
                    topic: "ErrorHandler.Throw",
                    data: {
                        errorCode: "FT-001",
                        priority: 0
                    }
                })), !(P && T && Z && R && (!ue || ue && M))) return !1;
            w.publish({
                channel: "Kernel",
                topic: "System.Ready",
                data: {}
            }), L.postLaunchTimes({
                event: "SystemReady",
                systemLoadEndTimestamp: Date.now()
            })
        }

        function m() {
            I.style.visibility = "inherit", C.show(), x && le && x.show(), k.hide(), fe = !0, de = !0, s()
        }

        function v(e, n) {
            window.parent, window
        }

        function y(e, n) {
            var t = e;
            if (null !== n && void 0 !== n) {
                if (t.indexOf("?") < 0 ? t += "?" : t += "&", "object" != typeof n) t += encodeURIComponent(n);
                else
                    for (var r in n) t += encodeURIComponent(r), t += "=", t += encodeURIComponent(n[r]), t += "&";
                null !== t.match(/[&\?]$/) && (t = t.substring(0, t.length - 1))
            }
            return t
        }

        function b(e) {
            L = e, $.setCECCommand(e)
        }
        var w, S, _, C, k, x, O, I, E, P, T, M, R, A, D, j, N, G, F, B, L, U, H, z, V, q, J, W = e("kernel/iframefactory/IFrameFactory"),
            K = e("kernel/logger/Logger"),
            $ = e("kernel/resizer/Resizer"),
            Y = [],
            Q = {
                consoleservice: {},
                clientservice: {},
                game: {}
            },
            X = !1,
            Z = !1,
            ee = [],
            ne = [],
            te = 0,
            re = 0,
            ie = 0,
            oe = 0,
            ae = 0,
            ce = {},
            se = {
                width: 0,
                height: 0,
                TCustomViewHeight: 0,
                BCustomViewHeight: 0,
                LCustomViewWidth: 0,
                RCustomViewWidth: 0
            },
            ue = !1,
            le = !1,
            fe = !1,
            pe = {
                switchPlayModeSupport: !1
            },
            he = 0,
            de = !1,
            ge = !1,
            me = !1,
            ve = "hidden";
        return function() {
            return {
                init: n,
                create: i,
                load: d,
                reveal: m,
                onloadConsole: function(e) {
                    e(ne)
                },
                setCECCommand: b
            }
        }
    }),
    function() {
        function e(e, n, t) {
            for (var r = e.length, i = t ? r : -1; t ? i-- : ++i < r;)
                if (n(e[i], i, e)) return i;
            return -1
        }

        function n(e, n, t) {
            if (n !== n) return r(e, t);
            for (var i = t - 1, o = e.length; ++i < o;)
                if (e[i] === n) return i;
            return -1
        }

        function t(e) {
            return null == e ? "" : e + ""
        }

        function r(e, n, t) {
            for (var r = e.length, i = n + (t ? 0 : -1); t ? i-- : ++i < r;) {
                var o = e[i];
                if (o !== o) return i
            }
            return -1
        }

        function i(e) {
            return !!e && "object" == typeof e
        }

        function o(e, n) {
            for (var t = -1, r = e.length, i = -1, o = []; ++t < r;) e[t] === n && (e[t] = An, o[++i] = t);
            return o
        }

        function a(e) {
            if (i(e) && !ur(e) && !(e instanceof u)) {
                if (e instanceof s) return e;
                if (Ct.call(e, "__chain__") && Ct.call(e, "__wrapped__")) return Ae(e)
            }
            return new s(e)
        }

        function c() {}

        function s(e, n, t) {
            this.__wrapped__ = e, this.__actions__ = t || [], this.__chain__ = !!n
        }

        function u(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Lt, this.__views__ = []
        }

        function l() {
            var e = new u(this.__wrapped__);
            return e.__actions__ = v(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = v(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = v(this.__views__), e
        }

        function f() {
            if (this.__filtered__) {
                var e = new u(this);
                e.__dir__ = -1, e.__filtered__ = !0
            } else e = this.clone(), e.__dir__ *= -1;
            return e
        }

        function p() {
            var e = this.__wrapped__.value(),
                n = this.__dir__,
                t = ur(e),
                r = n < 0,
                i = t ? e.length : 0,
                o = ve(0, i, this.__views__),
                a = o.start,
                c = o.end,
                s = c - a,
                u = r ? c : a - 1,
                l = this.__iteratees__,
                f = l.length,
                p = 0,
                h = Ft(s, this.__takeCount__);
            if (!t || i < Pn || i == s && h == s) return Y(e, this.__actions__);
            var d = [];
            e: for (; s-- && p < h;) {
                u += n;
                for (var g = -1, m = e[u]; ++g < f;) {
                    var v = l[g],
                        y = v.iteratee,
                        b = v.type,
                        w = y(m);
                    if (b == Mn) m = w;
                    else if (!w) {
                        if (b == Tn) continue e;
                        break e
                    }
                }
                d[p++] = m
            }
            return d
        }

        function h(e) {
            var n = e ? e.length : 0;
            for (this.data = {
                    hash: Rt(null),
                    set: new Et
                }; n--;) this.push(e[n])
        }

        function d(e, n) {
            var t = e.data;
            return ("string" == typeof n || on(n) ? t.set.has(n) : t.hash[n]) ? 0 : -1
        }

        function g(e) {
            var n = this.data;
            "string" == typeof e || on(e) ? n.set.add(e) : n.hash[e] = !0
        }

        function m(e, n) {
            for (var t = -1, r = e.length, i = -1, o = n.length, a = Array(r + o); ++t < r;) a[t] = e[t];
            for (; ++i < o;) a[t++] = n[i];
            return a
        }

        function v(e, n) {
            var t = -1,
                r = e.length;
            for (n || (n = Array(r)); ++t < r;) n[t] = e[t];
            return n
        }

        function y(e, n) {
            for (var t = -1, r = e.length; ++t < r && !1 !== n(e[t], t, e););
            return e
        }

        function b(e, n) {
            for (var t = -1, r = e.length, i = -1, o = []; ++t < r;) {
                var a = e[t];
                n(a, t, e) && (o[++i] = a)
            }
            return o
        }

        function w(e, n) {
            for (var t = -1, r = e.length, i = Array(r); ++t < r;) i[t] = n(e[t], t, e);
            return i
        }

        function S(e, n) {
            for (var t = -1, r = n.length, i = e.length; ++t < r;) e[i + t] = n[t];
            return e
        }

        function _(e, n, t, r) {
            var i = -1,
                o = e.length;
            for (r && o && (t = e[++i]); ++i < o;) t = n(t, e[i], i, e);
            return t
        }

        function C(e, n) {
            for (var t = -1, r = e.length; ++t < r;)
                if (n(e[t], t, e)) return !0;
            return !1
        }

        function k(e, n) {
            return e === bn ? n : e
        }

        function x(e, n, t) {
            for (var r = -1, i = pr(n), o = i.length; ++r < o;) {
                var a = i[r],
                    c = e[a],
                    s = t(c, n[a], a, e, n);
                (s === s ? s === c : c !== c) && (c !== bn || a in e) || (e[a] = s)
            }
            return e
        }

        function O(e, n) {
            return null == n ? e : I(n, pr(n), e)
        }

        function I(e, n, t) {
            t || (t = {});
            for (var r = -1, i = n.length; ++r < i;) {
                var o = n[r];
                t[o] = e[o]
            }
            return t
        }

        function E(e, n, t) {
            var r = typeof e;
            return "function" == r ? n === bn ? e : Z(e, n, t) : null == e ? dn : "object" == r ? H(e) : n === bn ? yn(e) : z(e, n)
        }

        function P(e, n, t, r, i, o, a) {
            var c;
            if (t && (c = i ? t(e, r, i) : t(e)), c !== bn) return c;
            if (!on(e)) return e;
            var s = ur(e);
            if (s) {
                if (c = ye(e), !n) return v(e, c)
            } else {
                var u = kt.call(e),
                    l = u == Bn;
                if (u != Un && u != Dn && (!l || i)) return ut[u] ? we(e, u, n) : i ? e : {};
                if (vt(e)) return i ? e : {};
                if (c = be(l ? {} : e), !n) return O(c, e)
            }
            o || (o = []), a || (a = []);
            for (var f = o.length; f--;)
                if (o[f] == e) return a[f];
            return o.push(e), a.push(c), (s ? y : j)(e, function(r, i) {
                c[i] = P(r, n, t, i, e, o, a)
            }), c
        }

        function T(e, t) {
            var r = e ? e.length : 0,
                i = [];
            if (!r) return i;
            var o = -1,
                a = de(),
                c = a === n,
                s = c && t.length >= Pn ? ie(t) : null,
                u = t.length;
            s && (a = d, c = !1, t = s);
            e: for (; ++o < r;) {
                var l = e[o];
                if (c && l === l) {
                    for (var f = u; f--;)
                        if (t[f] === l) continue e;
                    i.push(l)
                } else a(t, l, 0) < 0 && i.push(l)
            }
            return i
        }

        function M(e, n) {
            var t = [];
            return Yt(e, function(e, r, i) {
                n(e, r, i) && t.push(e)
            }), t
        }

        function R(e, n, t, r) {
            var i;
            return t(e, function(e, t, o) {
                if (n(e, t, o)) return i = r ? t : e, !1
            }), i
        }

        function A(e, n, t, r) {
            r || (r = []);
            for (var o = -1, a = e.length; ++o < a;) {
                var c = e[o];
                i(c) && Se(c) && (t || ur(c) || nn(c)) ? n ? A(c, n, t, r) : S(r, c) : t || (r[r.length] = c)
            }
            return r
        }

        function D(e, n) {
            return Qt(e, n, ln)
        }

        function j(e, n) {
            return Qt(e, n, pr)
        }

        function N(e, n) {
            for (var t = -1, r = n.length, i = -1, o = []; ++t < r;) {
                var a = n[t];
                rn(e[a]) && (o[++i] = a)
            }
            return o
        }

        function G(e, n, t) {
            if (null != e) {
                e = Me(e), t !== bn && t in e && (n = [t]);
                for (var r = 0, i = n.length; null != e && r < i;) e = Me(e)[n[r++]];
                return r && r == i ? e : bn
            }
        }

        function F(e, n, t, r, o, a) {
            return e === n || (null == e || null == n || !on(e) && !i(n) ? e !== e && n !== n : B(e, n, F, t, r, o, a))
        }

        function B(e, n, t, r, i, o, a) {
            var c = ur(e),
                s = ur(n),
                u = jn,
                l = jn;
            c || (u = kt.call(e), u == Dn ? u = Un : u != Un && (c = un(e))), s || (l = kt.call(n), l == Dn ? l = Un : l != Un && (s = un(n)));
            var f = u == Un && !vt(e),
                p = l == Un && !vt(n),
                h = u == l;
            if (h && !c && !f) return le(e, n, u);
            if (!i) {
                var d = f && Ct.call(e, "__wrapped__"),
                    g = p && Ct.call(n, "__wrapped__");
                if (d || g) return t(d ? e.value() : e, g ? n.value() : n, r, i, o, a)
            }
            if (!h) return !1;
            o || (o = []), a || (a = []);
            for (var m = o.length; m--;)
                if (o[m] == e) return a[m] == n;
            o.push(e), a.push(n);
            var v = (c ? ue : fe)(e, n, t, r, i, o, a);
            return o.pop(), a.pop(), v
        }

        function L(e, n, t) {
            var r = n.length,
                i = r,
                o = !t;
            if (null == e) return !i;
            for (e = Me(e); r--;) {
                var a = n[r];
                if (o && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++r < i;) {
                a = n[r];
                var c = a[0],
                    s = e[c],
                    u = a[1];
                if (o && a[2]) {
                    if (s === bn && !(c in e)) return !1
                } else {
                    var l = t ? t(s, u, c) : bn;
                    if (!(l === bn ? F(u, s, t, !0) : l)) return !1
                }
            }
            return !0
        }

        function U(e, n) {
            var t = -1,
                r = Se(e) ? Array(e.length) : [];
            return Yt(e, function(e, i, o) {
                r[++t] = n(e, i, o)
            }), r
        }

        function H(e) {
            var n = ge(e);
            if (1 == n.length && n[0][2]) {
                var t = n[0][0],
                    r = n[0][1];
                return function(e) {
                    return null != e && (e = Me(e), e[t] === r && (r !== bn || t in e))
                }
            }
            return function(e) {
                return L(e, n)
            }
        }

        function z(e, n) {
            var t = ur(e),
                r = ke(e) && Ie(n),
                i = e + "";
            return e = Re(e),
                function(o) {
                    if (null == o) return !1;
                    var a = i;
                    if (o = Me(o), (t || !r) && !(a in o)) {
                        if (null == (o = 1 == e.length ? o : G(o, W(e, 0, -1)))) return !1;
                        a = je(e), o = Me(o)
                    }
                    return o[a] === n ? n !== bn || a in o : F(n, o[a], bn, !0)
                }
        }

        function V(e) {
            return function(n) {
                return null == n ? bn : Me(n)[e]
            }
        }

        function q(e) {
            var n = e + "";
            return e = Re(e),
                function(t) {
                    return G(t, e, n)
                }
        }

        function J(e, n, t, r, i) {
            return i(e, function(e, i, o) {
                t = r ? (r = !1, e) : n(t, e, i, o)
            }), t
        }

        function W(e, n, t) {
            var r = -1,
                i = e.length;
            n = null == n ? 0 : +n || 0, n < 0 && (n = -n > i ? 0 : i + n), t = t === bn || t > i ? i : +t || 0, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
            for (var o = Array(i); ++r < i;) o[r] = e[r + n];
            return o
        }

        function K(e, n) {
            var t;
            return Yt(e, function(e, r, i) {
                return !(t = n(e, r, i))
            }), !!t
        }

        function $(e, n) {
            for (var t = -1, r = n.length, i = Array(r); ++t < r;) i[t] = e[n[t]];
            return i
        }

        function Y(e, n) {
            var t = e;
            t instanceof u && (t = t.value());
            for (var r = -1, i = n.length; ++r < i;) {
                var o = n[r];
                t = o.func.apply(o.thisArg, S([t], o.args))
            }
            return t
        }

        function Q(e, n, t) {
            var r = 0,
                i = e ? e.length : r;
            if ("number" == typeof n && n === n && i <= Ht) {
                for (; r < i;) {
                    var o = r + i >>> 1,
                        a = e[o];
                    (t ? a <= n : a < n) && null !== a ? r = o + 1 : i = o
                }
                return i
            }
            return X(e, n, dn, t)
        }

        function X(e, n, t, r) {
            n = t(n);
            for (var i = 0, o = e ? e.length : 0, a = n !== n, c = null === n, s = n === bn; i < o;) {
                var u = At((i + o) / 2),
                    l = t(e[u]),
                    f = l !== bn,
                    p = l === l;
                if (a) var h = p || r;
                else h = c ? p && f && (r || null != l) : s ? p && (r || f) : null != l && (r ? l <= n : l < n);
                h ? i = u + 1 : o = u
            }
            return Ft(o, Ut)
        }

        function Z(e, n, t) {
            if ("function" != typeof e) return dn;
            if (n === bn) return e;
            switch (t) {
                case 1:
                    return function(t) {
                        return e.call(n, t)
                    };
                case 3:
                    return function(t, r, i) {
                        return e.call(n, t, r, i)
                    };
                case 4:
                    return function(t, r, i, o) {
                        return e.call(n, t, r, i, o)
                    };
                case 5:
                    return function(t, r, i, o, a) {
                        return e.call(n, t, r, i, o, a)
                    }
            }
            return function() {
                return e.apply(n, arguments)
            }
        }

        function ee(e) {
            var n = new Ot(e.byteLength);
            return new Tt(n).set(new Tt(e)), n
        }

        function ne(e, n, t) {
            for (var r = t.length, i = -1, o = Gt(e.length - r, 0), a = -1, c = n.length, s = Array(c + o); ++a < c;) s[a] = n[a];
            for (; ++i < r;) s[t[i]] = e[i];
            for (; o--;) s[a++] = e[i++];
            return s
        }

        function te(e, n, t) {
            for (var r = -1, i = t.length, o = -1, a = Gt(e.length - i, 0), c = -1, s = n.length, u = Array(a + s); ++o < a;) u[o] = e[o];
            for (var l = o; ++c < s;) u[l + c] = n[c];
            for (; ++r < i;) u[l + t[r]] = e[o++];
            return u
        }

        function re(e, n) {
            function t() {
                return (this && this !== mt && this instanceof t ? r : e).apply(n, arguments)
            }
            var r = oe(e);
            return t
        }

        function ie(e) {
            return Rt && Et ? new h(e) : null
        }

        function oe(e) {
            return function() {
                var n = arguments;
                switch (n.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(n[0]);
                    case 2:
                        return new e(n[0], n[1]);
                    case 3:
                        return new e(n[0], n[1], n[2]);
                    case 4:
                        return new e(n[0], n[1], n[2], n[3]);
                    case 5:
                        return new e(n[0], n[1], n[2], n[3], n[4]);
                    case 6:
                        return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                    case 7:
                        return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                }
                var t = $t(e.prototype),
                    r = e.apply(t, n);
                return on(r) ? r : t
            }
        }

        function ae(e, n, t, r, i, a, c, s, u, l) {
            function f() {
                for (var w = arguments.length, S = w, _ = Array(w); S--;) _[S] = arguments[S];
                if (r && (_ = ne(_, r, i)), a && (_ = te(_, a, c)), g || y) {
                    var C = f.placeholder,
                        k = o(_, C);
                    if ((w -= k.length) < l) {
                        var x = s ? v(s) : bn,
                            O = Gt(l - w, 0),
                            I = g ? k : bn,
                            E = g ? bn : k,
                            P = g ? _ : bn,
                            T = g ? bn : _;
                        n |= g ? xn : On, n &= ~(g ? On : xn), m || (n &= ~(wn | Sn));
                        var M = [e, n, t, P, I, T, E, x, u, O],
                            R = ae.apply(bn, M);
                        return xe(e) && nr(R, M), R.placeholder = C, R
                    }
                }
                var A = h ? t : this,
                    D = d ? A[e] : e;
                return s && (_ = Pe(_, s)), p && u < _.length && (_.length = u), this && this !== mt && this instanceof f && (D = b || oe(e)), D.apply(A, _)
            }
            var p = n & In,
                h = n & wn,
                d = n & Sn,
                g = n & Cn,
                m = n & _n,
                y = n & kn,
                b = d ? bn : oe(e);
            return f
        }

        function ce(e, n, t, r) {
            function i() {
                for (var n = -1, c = arguments.length, s = -1, u = r.length, l = Array(u + c); ++s < u;) l[s] = r[s];
                for (; c--;) l[s++] = arguments[++n];
                return (this && this !== mt && this instanceof i ? a : e).apply(o ? t : this, l)
            }
            var o = n & wn,
                a = oe(e);
            return i
        }

        function se(e, n, t, r, i, o, a, c) {
            var s = n & Sn;
            if (!s && "function" != typeof e) throw new TypeError(Rn);
            var u = r ? r.length : 0;
            if (u || (n &= ~(xn | On), r = i = bn), u -= i ? i.length : 0, n & On) {
                var l = r,
                    f = i;
                r = i = bn
            }
            var p = s ? bn : Zt(e),
                h = [e, n, t, r, i, l, f, o, a, c];
            if (p && (Ee(h, p), n = h[1], c = h[9]), h[9] = null == c ? s ? 0 : e.length : Gt(c - u, 0) || 0, n == wn) var d = re(h[0], h[2]);
            else d = n != xn && n != (wn | xn) || h[4].length ? ae.apply(bn, h) : ce.apply(bn, h);
            return (p ? Xt : nr)(d, h)
        }

        function ue(e, n, t, r, i, o, a) {
            var c = -1,
                s = e.length,
                u = n.length;
            if (s != u && !(i && u > s)) return !1;
            for (; ++c < s;) {
                var l = e[c],
                    f = n[c],
                    p = r ? r(i ? f : l, i ? l : f, c) : bn;
                if (p !== bn) {
                    if (p) continue;
                    return !1
                }
                if (i) {
                    if (!C(n, function(e) {
                            return l === e || t(l, e, r, i, o, a)
                        })) return !1
                } else if (l !== f && !t(l, f, r, i, o, a)) return !1
            }
            return !0
        }

        function le(e, n, t) {
            switch (t) {
                case Nn:
                case Gn:
                    return +e == +n;
                case Fn:
                    return e.name == n.name && e.message == n.message;
                case Ln:
                    return e != +e ? n != +n : e == +n;
                case Hn:
                case zn:
                    return e == n + ""
            }
            return !1
        }

        function fe(e, n, t, r, i, o, a) {
            var c = pr(e),
                s = c.length;
            if (s != pr(n).length && !i) return !1;
            for (var u = s; u--;) {
                var l = c[u];
                if (!(i ? l in n : Ct.call(n, l))) return !1
            }
            for (var f = i; ++u < s;) {
                l = c[u];
                var p = e[l],
                    h = n[l],
                    d = r ? r(i ? h : p, i ? p : h, l) : bn;
                if (!(d === bn ? t(p, h, r, i, o, a) : d)) return !1;
                f || (f = "constructor" == l)
            }
            if (!f) {
                var g = e.constructor,
                    m = n.constructor;
                if (g != m && "constructor" in e && "constructor" in n && !("function" == typeof g && g instanceof g && "function" == typeof m && m instanceof m)) return !1
            }
            return !0
        }

        function pe(e, n, t) {
            var r = a.callback || hn;
            return r = r === hn ? E : r, t ? r(e, n, t) : r
        }

        function he(e) {
            for (var n = e.name + "", t = qt[n], r = t ? t.length : 0; r--;) {
                var i = t[r],
                    o = i.func;
                if (null == o || o == e) return i.name
            }
            return n
        }

        function de(e, t, r) {
            var i = a.indexOf || De;
            return i = i === De ? n : i, e ? i(e, t, r) : i
        }

        function ge(e) {
            for (var n = fn(e), t = n.length; t--;) n[t][2] = Ie(n[t][1]);
            return n
        }

        function me(e, n) {
            var t = null == e ? bn : e[n];
            return an(t) ? t : bn
        }

        function ve(e, n, t) {
            for (var r = -1, i = t.length; ++r < i;) {
                var o = t[r],
                    a = o.size;
                switch (o.type) {
                    case "drop":
                        e += a;
                        break;
                    case "dropRight":
                        n -= a;
                        break;
                    case "take":
                        n = Ft(n, e + a);
                        break;
                    case "takeRight":
                        e = Gt(e, n - a)
                }
            }
            return {
                start: e,
                end: n
            }
        }

        function ye(e) {
            var n = e.length,
                t = new e.constructor(n);
            return n && "string" == typeof e[0] && Ct.call(e, "index") && (t.index = e.index, t.input = e.input), t
        }

        function be(e) {
            var n = e.constructor;
            return "function" == typeof n && n instanceof n || (n = Object), new n
        }

        function we(e, n, t) {
            var r = e.constructor;
            switch (n) {
                case Vn:
                    return ee(e);
                case Nn:
                case Gn:
                    return new r(+e);
                case qn:
                case Jn:
                case Wn:
                case Kn:
                case $n:
                case Yn:
                case Qn:
                case Xn:
                case Zn:
                    r instanceof r && (r = Jt[n]);
                    var i = e.buffer;
                    return new r(t ? ee(i) : i, e.byteOffset, e.length);
                case Ln:
                case zn:
                    return new r(e);
                case Hn:
                    var o = new r(e.source, it.exec(e));
                    o.lastIndex = e.lastIndex
            }
            return o
        }

        function Se(e) {
            return null != e && Oe(er(e))
        }

        function _e(e, n) {
            return e = "number" == typeof e || at.test(e) ? +e : -1, n = null == n ? zt : n, e > -1 && e % 1 == 0 && e < n
        }

        function Ce(e, n, t) {
            if (!on(t)) return !1;
            var r = typeof n;
            if ("number" == r ? Se(t) && _e(n, t.length) : "string" == r && n in t) {
                var i = t[n];
                return e === e ? e === i : i !== i
            }
            return !1
        }

        function ke(e, n) {
            var t = typeof e;
            return !!("string" == t && nt.test(e) || "number" == t) || !ur(e) && (!et.test(e) || null != n && e in Me(n))
        }

        function xe(e) {
            var n = he(e),
                t = a[n];
            if ("function" != typeof t || !(n in u.prototype)) return !1;
            if (e === t) return !0;
            var r = Zt(t);
            return !!r && e === r[0]
        }

        function Oe(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= zt
        }

        function Ie(e) {
            return e === e && !on(e)
        }

        function Ee(e, n) {
            var t = e[1],
                r = n[1],
                i = t | r,
                a = i < In,
                c = r == In && t == Cn || r == In && t == En && e[7].length <= n[8] || r == (In | En) && t == Cn;
            if (!a && !c) return e;
            r & wn && (e[2] = n[2], i |= t & wn ? 0 : _n);
            var s = n[3];
            if (s) {
                var u = e[3];
                e[3] = u ? ne(u, s, n[4]) : v(s), e[4] = u ? o(e[3], An) : v(n[4])
            }
            return s = n[5], s && (u = e[5], e[5] = u ? te(u, s, n[6]) : v(s), e[6] = u ? o(e[5], An) : v(n[6])), s = n[7], s && (e[7] = v(s)), r & In && (e[8] = null == e[8] ? n[8] : Ft(e[8], n[8])), null == e[9] && (e[9] = n[9]), e[0] = n[0], e[1] = i, e
        }

        function Pe(e, n) {
            for (var t = e.length, r = Ft(n.length, t), i = v(e); r--;) {
                var o = n[r];
                e[r] = _e(o, t) ? i[o] : bn
            }
            return e
        }

        function Te(e) {
            for (var n = ln(e), t = n.length, r = t && e.length, i = !!r && Oe(r) && (ur(e) || nn(e) || sn(e)), o = -1, a = []; ++o < t;) {
                var c = n[o];
                (i && _e(c, r) || Ct.call(e, c)) && a.push(c)
            }
            return a
        }

        function Me(e) {
            if (a.support.unindexedChars && sn(e)) {
                for (var n = -1, t = e.length, r = Object(e); ++n < t;) r[n] = e.charAt(n);
                return r
            }
            return on(e) ? e : Object(e)
        }

        function Re(e) {
            if (ur(e)) return e;
            var n = [];
            return t(e).replace(tt, function(e, t, r, i) {
                n.push(r ? i.replace(rt, "$1") : t || e)
            }), n
        }

        function Ae(e) {
            return e instanceof u ? e.clone() : new s(e.__wrapped__, e.__chain__, v(e.__actions__))
        }

        function De(e, t, r) {
            var i = e ? e.length : 0;
            if (!i) return -1;
            if ("number" == typeof r) r = r < 0 ? Gt(i + r, 0) : r;
            else if (r) {
                var o = Q(e, t);
                return o < i && (t === t ? t === e[o] : e[o] !== e[o]) ? o : -1
            }
            return n(e, t, r || 0)
        }

        function je(e) {
            var n = e ? e.length : 0;
            return n ? e[n - 1] : bn
        }

        function Ne(e) {
            var n = a(e);
            return n.__chain__ = !0, n
        }

        function Ge(e, n, t) {
            return n.call(t, e), e
        }

        function Fe(e, n, t) {
            return n.call(t, e)
        }

        function Be() {
            return Ne(this)
        }

        function Le() {
            return new s(this.value(), this.__chain__)
        }

        function Ue(e) {
            for (var n, t = this; t instanceof c;) {
                var r = Ae(t);
                n ? i.__wrapped__ = r : n = r;
                var i = r;
                t = t.__wrapped__
            }
            return i.__wrapped__ = e, n
        }

        function He() {
            var e = this.__wrapped__,
                n = function(e) {
                    return e.reverse()
                };
            if (e instanceof u) {
                var t = e;
                return this.__actions__.length && (t = new u(this)), t = t.reverse(), t.__actions__.push({
                    func: Fe,
                    args: [n],
                    thisArg: bn
                }), new s(t, this.__chain__)
            }
            return this.thru(n)
        }

        function ze() {
            return this.value() + ""
        }

        function Ve() {
            return Y(this.__wrapped__, this.__actions__)
        }

        function qe(e, n, t) {
            var r = ur(e) ? b : M;
            return n = pe(n, t, 3), r(e, n)
        }

        function Je(e, n, t, r) {
            var i = e ? er(e) : 0;
            return Oe(i) || (e = pn(e), i = e.length), t = "number" != typeof t || r && Ce(n, t, r) ? 0 : t < 0 ? Gt(i + t, 0) : t || 0, "string" == typeof e || !ur(e) && sn(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && de(e, n, t) > -1
        }

        function We(e, n, t) {
            var r = ur(e) ? w : U;
            return n = pe(n, t, 3), r(e, n)
        }

        function Ke(e, n, t) {
            var r = ur(e) ? C : K;
            return t && Ce(e, n, t) && (n = bn), "function" == typeof n && t === bn || (n = pe(n, t, 3)), r(e, n)
        }

        function $e(e, n) {
            if ("function" != typeof n) {
                if ("function" != typeof e) throw new TypeError(Rn);
                var t = e;
                e = n, n = t
            }
            return e = jt(e = +e) ? e : 0,
                function() {
                    if (--e < 1) return n.apply(this, arguments)
                }
        }

        function Ye(e, n, t) {
            function r() {
                h && clearTimeout(h), u && clearTimeout(u), g = 0, u = h = d = bn
            }

            function i(n, t) {
                t && clearTimeout(t), u = h = d = bn, n && (g = cr(), l = e.apply(p, s), h || u || (s = p = bn))
            }

            function o() {
                var e = n - (cr() - f);
                e <= 0 || e > n ? i(d, u) : h = setTimeout(o, e)
            }

            function a() {
                i(v, h)
            }

            function c() {
                if (s = arguments, f = cr(), p = this, d = v && (h || !y), !1 === m) var t = y && !h;
                else {
                    u || y || (g = f);
                    var r = m - (f - g),
                        i = r <= 0 || r > m;
                    i ? (u && (u = clearTimeout(u)), g = f, l = e.apply(p, s)) : u || (u = setTimeout(a, r))
                }
                return i && h ? h = clearTimeout(h) : h || n === m || (h = setTimeout(o, n)), t && (i = !0, l = e.apply(p, s)), !i || h || u || (s = p = bn), l
            }
            var s, u, l, f, p, h, d, g = 0,
                m = !1,
                v = !0;
            if ("function" != typeof e) throw new TypeError(Rn);
            if (n = n < 0 ? 0 : +n || 0, !0 === t) {
                var y = !0;
                v = !1
            } else on(t) && (y = !!t.leading, m = "maxWait" in t && Gt(+t.maxWait || 0, n), v = "trailing" in t ? !!t.trailing : v);
            return c.cancel = r, c
        }

        function Qe(e, n) {
            if ("function" != typeof e) throw new TypeError(Rn);
            return n = Gt(n === bn ? e.length - 1 : +n || 0, 0),
                function() {
                    for (var t = arguments, r = -1, i = Gt(t.length - n, 0), o = Array(i); ++r < i;) o[r] = t[n + r];
                    switch (n) {
                        case 0:
                            return e.call(this, o);
                        case 1:
                            return e.call(this, t[0], o);
                        case 2:
                            return e.call(this, t[0], t[1], o)
                    }
                    var a = Array(n + 1);
                    for (r = -1; ++r < n;) a[r] = t[r];
                    return a[n] = o, e.apply(this, a)
                }
        }

        function Xe(e, n, t) {
            var r = !0,
                i = !0;
            if ("function" != typeof e) throw new TypeError(Rn);
            return !1 === t ? r = !1 : on(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Ye(e, n, {
                leading: r,
                maxWait: +n,
                trailing: i
            })
        }

        function Ze(e, n, t, r) {
            return n && "boolean" != typeof n && Ce(e, n, t) ? n = !1 : "function" == typeof n && (r = t, t = n, n = !1), "function" == typeof t ? P(e, n, Z(t, r, 3)) : P(e, n)
        }

        function en(e, n, t) {
            return "function" == typeof n ? P(e, !0, Z(n, t, 3)) : P(e, !0)
        }

        function nn(e) {
            return i(e) && Se(e) && Ct.call(e, "callee") && !It.call(e, "callee")
        }

        function tn(e, n, t, r) {
            t = "function" == typeof t ? Z(t, r, 3) : bn;
            var i = t ? t(e, n) : bn;
            return i === bn ? F(e, n, t) : !!i
        }

        function rn(e) {
            return on(e) && kt.call(e) == Bn
        }

        function on(e) {
            var n = typeof e;
            return !!e && ("object" == n || "function" == n)
        }

        function an(e) {
            return null != e && (rn(e) ? xt.test(_t.call(e)) : i(e) && (vt(e) ? xt : ot).test(e))
        }

        function cn(e) {
            var n;
            if (!i(e) || kt.call(e) != Un || vt(e) || nn(e) || !Ct.call(e, "constructor") && "function" == typeof(n = e.constructor) && !(n instanceof n)) return !1;
            var t;
            return a.support.ownLast ? (D(e, function(e, n, r) {
                return t = Ct.call(r, n), !1
            }), !1 !== t) : (D(e, function(e, n) {
                t = n
            }), t === bn || Ct.call(e, t))
        }

        function sn(e) {
            return "string" == typeof e || i(e) && kt.call(e) == zn
        }

        function un(e) {
            return i(e) && Oe(e.length) && !!st[kt.call(e)]
        }

        function ln(e) {
            if (null == e) return [];
            on(e) || (e = Object(e));
            var n = e.length,
                t = a.support;
            n = n && Oe(n) && (ur(e) || nn(e) || sn(e)) && n || 0;
            for (var r = e.constructor, i = -1, o = rn(r) && r.prototype || wt, c = o === e, s = Array(n), u = n > 0, l = t.enumErrorProps && (e === bt || e instanceof Error), f = t.enumPrototypes && rn(e); ++i < n;) s[i] = i + "";
            for (var p in e) f && "prototype" == p || l && ("message" == p || "name" == p) || u && _e(p, n) || "constructor" == p && (c || !Ct.call(e, p)) || s.push(p);
            if (t.nonEnumShadows && e !== wt) {
                var h = e === St ? zn : e === bt ? Fn : kt.call(e),
                    d = Wt[h] || Wt[Un];
                for (h == Un && (o = wt), n = ct.length; n--;) {
                    p = ct[n];
                    var g = d[p];
                    c && g || (g ? !Ct.call(e, p) : e[p] === o[p]) || s.push(p)
                }
            }
            return s
        }

        function fn(e) {
            e = Me(e);
            for (var n = -1, t = pr(e), r = t.length, i = Array(r); ++n < r;) {
                var o = t[n];
                i[n] = [o, e[o]]
            }
            return i
        }

        function pn(e) {
            return $(e, pr(e))
        }

        function hn(e, n, t) {
            return t && Ce(e, n, t) && (n = bn), i(e) ? gn(e) : E(e, n)
        }

        function dn(e) {
            return e
        }

        function gn(e) {
            return H(P(e, !0))
        }

        function mn(e, n, t) {
            if (null == t) {
                var r = on(n),
                    i = r ? pr(n) : bn,
                    o = i && i.length ? N(n, i) : bn;
                (o ? o.length : r) || (o = !1, t = n, n = e, e = this)
            }
            o || (o = N(n, pr(n)));
            var a = !0,
                c = -1,
                s = rn(e),
                u = o.length;
            !1 === t ? a = !1 : on(t) && "chain" in t && (a = t.chain);
            for (; ++c < u;) {
                var l = o[c],
                    f = n[l];
                e[l] = f, s && (e.prototype[l] = function(n) {
                    return function() {
                        var t = this.__chain__;
                        if (a || t) {
                            var r = e(this.__wrapped__);
                            return (r.__actions__ = v(this.__actions__)).push({
                                func: n,
                                args: arguments,
                                thisArg: e
                            }), r.__chain__ = t, r
                        }
                        return n.apply(e, S([this.value()], arguments))
                    }
                }(f))
            }
            return e
        }

        function vn() {}

        function yn(e) {
            return ke(e) ? V(e) : q(e)
        }
        var bn, wn = 1,
            Sn = 2,
            _n = 4,
            Cn = 8,
            kn = 16,
            xn = 32,
            On = 64,
            In = 128,
            En = 256,
            Pn = 200,
            Tn = 1,
            Mn = 2,
            Rn = "Expected a function",
            An = "__lodash_placeholder__",
            Dn = "[object Arguments]",
            jn = "[object Array]",
            Nn = "[object Boolean]",
            Gn = "[object Date]",
            Fn = "[object Error]",
            Bn = "[object Function]",
            Ln = "[object Number]",
            Un = "[object Object]",
            Hn = "[object RegExp]",
            zn = "[object String]",
            Vn = "[object ArrayBuffer]",
            qn = "[object Float32Array]",
            Jn = "[object Float64Array]",
            Wn = "[object Int8Array]",
            Kn = "[object Int16Array]",
            $n = "[object Int32Array]",
            Yn = "[object Uint8Array]",
            Qn = "[object Uint8ClampedArray]",
            Xn = "[object Uint16Array]",
            Zn = "[object Uint32Array]",
            et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
            nt = /^\w*$/,
            tt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
            rt = /\\(\\)?/g,
            it = /\w*$/,
            ot = /^\[object .+?Constructor\]$/,
            at = /^\d+$/,
            ct = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
            st = {};
        st[qn] = st[Jn] = st[Wn] = st[Kn] = st[$n] = st[Yn] = st[Qn] = st[Xn] = st[Zn] = !0, st[Dn] = st[jn] = st[Vn] = st[Nn] = st[Gn] = st[Fn] = st[Bn] = st["[object Map]"] = st[Ln] = st[Un] = st[Hn] = st["[object Set]"] = st[zn] = st["[object WeakMap]"] = !1;
        var ut = {};
        ut[Dn] = ut[jn] = ut[Vn] = ut[Nn] = ut[Gn] = ut[qn] = ut[Jn] = ut[Wn] = ut[Kn] = ut[$n] = ut[Ln] = ut[Un] = ut[Hn] = ut[zn] = ut[Yn] = ut[Qn] = ut[Xn] = ut[Zn] = !0, ut[Fn] = ut[Bn] = ut["[object Map]"] = ut["[object Set]"] = ut["[object WeakMap]"] = !1;
        var lt = {
                function: !0,
                object: !0
            },
            ft = lt[typeof exports] && exports && !exports.nodeType && exports,
            pt = lt[typeof module] && module && !module.nodeType && module,
            ht = ft && pt && "object" == typeof global && global && global.Object && global,
            dt = lt[typeof self] && self && self.Object && self,
            gt = lt[typeof window] && window && window.Object && window,
            mt = ht || gt !== (this && this.window) && gt || dt || this,
            vt = function() {
                try {
                    Object({
                        toString: 0
                    } + "")
                } catch (e) {
                    return function() {
                        return !1
                    }
                }
                return function(e) {
                    return "function" != typeof e.toString && "string" == typeof(e + "")
                }
            }(),
            yt = Array.prototype,
            bt = Error.prototype,
            wt = Object.prototype,
            St = String.prototype,
            _t = Function.prototype.toString,
            Ct = wt.hasOwnProperty,
            kt = wt.toString,
            xt = RegExp("^" + _t.call(Ct).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            Ot = mt.ArrayBuffer,
            It = wt.propertyIsEnumerable,
            Et = me(mt, "Set"),
            Pt = yt.splice,
            Tt = mt.Uint8Array,
            Mt = me(mt, "WeakMap"),
            Rt = me(Object, "create"),
            At = Math.floor,
            Dt = me(Array, "isArray"),
            jt = mt.isFinite,
            Nt = me(Object, "keys"),
            Gt = Math.max,
            Ft = Math.min,
            Bt = me(Date, "now"),
            Lt = Number.POSITIVE_INFINITY,
            Ut = 4294967294,
            Ht = 2147483647,
            zt = 9007199254740991,
            Vt = Mt && new Mt,
            qt = {},
            Jt = {};
        Jt[qn] = mt.Float32Array, Jt[Jn] = mt.Float64Array, Jt[Wn] = mt.Int8Array, Jt[Kn] = mt.Int16Array, Jt[$n] = mt.Int32Array, Jt[Yn] = Tt, Jt[Qn] = mt.Uint8ClampedArray, Jt[Xn] = mt.Uint16Array, Jt[Zn] = mt.Uint32Array;
        var Wt = {};
        Wt[jn] = Wt[Gn] = Wt[Ln] = {
            constructor: !0,
            toLocaleString: !0,
            toString: !0,
            valueOf: !0
        }, Wt[Nn] = Wt[zn] = {
            constructor: !0,
            toString: !0,
            valueOf: !0
        }, Wt[Fn] = Wt[Bn] = Wt[Hn] = {
            constructor: !0,
            toString: !0
        }, Wt[Un] = {
            constructor: !0
        }, y(ct, function(e) {
            for (var n in Wt)
                if (Ct.call(Wt, n)) {
                    var t = Wt[n];
                    t[e] = Ct.call(t, e)
                }
        });
        var Kt = a.support = {};
        ! function(e) {
            var n = function() {
                    this.x = 1
                },
                t = {
                    0: 1,
                    length: 1
                },
                r = [];
            n.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var i in new n) r.push(i);
            Kt.enumErrorProps = It.call(bt, "message") || It.call(bt, "name"), Kt.enumPrototypes = It.call(n, "prototype"), Kt.nonEnumShadows = !/valueOf/.test(r), Kt.ownLast = "x" != r[0], Kt.spliceObjects = (Pt.call(t, 0, 1), !t[0]), Kt.unindexedChars = "x" [0] + Object("x")[0] != "xx"
        }();
        var $t = function() {
                function e() {}
                return function(n) {
                    if (on(n)) {
                        e.prototype = n;
                        var t = new e;
                        e.prototype = bn
                    }
                    return t || {}
                }
            }(),
            Yt = function(e, n) {
                return function(t, r) {
                    var i = t ? er(t) : 0;
                    if (!Oe(i)) return e(t, r);
                    for (var o = n ? i : -1, a = Me(t);
                        (n ? o-- : ++o < i) && !1 !== r(a[o], o, a););
                    return t
                }
            }(j),
            Qt = function(e) {
                return function(n, t, r) {
                    for (var i = Me(n), o = r(n), a = o.length, c = e ? a : -1; e ? c-- : ++c < a;) {
                        var s = o[c];
                        if (!1 === t(i[s], s, i)) break
                    }
                    return n
                }
            }(),
            Xt = Vt ? function(e, n) {
                return Vt.set(e, n), e
            } : dn,
            Zt = Vt ? function(e) {
                return Vt.get(e)
            } : vn,
            er = V("length"),
            nr = function() {
                var e = 0,
                    n = 0;
                return function(t, r) {
                    var i = cr(),
                        o = 16 - (i - n);
                    if (n = i, o > 0) {
                        if (++e >= 150) return t
                    } else e = 0;
                    return Xt(t, r)
                }
            }(),
            tr = Qe(function(e, n) {
                return Se(e) ? T(e, n) : []
            }),
            rr = Qe(function(e) {
                return e = A(e), this.thru(function(n) {
                    return m(ur(n) ? n : [Me(n)], e)
                })
            }),
            ir = function(n, t) {
                return function(r, i, o) {
                    if (i = pe(i, o, 3), ur(r)) {
                        var a = e(r, i, t);
                        return a > -1 ? r[a] : bn
                    }
                    return R(r, i, n)
                }
            }(Yt),
            or = function(e, n) {
                return function(t, r, i) {
                    return "function" == typeof r && i === bn && ur(t) ? e(t, r) : n(t, Z(r, i, 3))
                }
            }(y, Yt),
            ar = function(e, n) {
                return function(t, r, i, o) {
                    var a = arguments.length < 3;
                    return "function" == typeof r && o === bn && ur(t) ? e(t, r, i, a) : J(t, pe(r, o, 4), i, a, n)
                }
            }(_, Yt),
            cr = Bt || function() {
                return (new Date).getTime()
            },
            sr = Qe(function(e, n, t) {
                var r = wn;
                if (t.length) {
                    var i = o(t, sr.placeholder);
                    r |= xn
                }
                return se(e, r, n, t, i)
            }),
            ur = Dt || function(e) {
                return i(e) && Oe(e.length) && kt.call(e) == jn
            },
            lr = function(e) {
                return Qe(function(n, t) {
                    var r = -1,
                        i = null == n ? 0 : t.length,
                        o = i > 2 ? t[i - 2] : bn,
                        a = i > 2 ? t[2] : bn,
                        c = i > 1 ? t[i - 1] : bn;
                    for ("function" == typeof o ? (o = Z(o, c, 5), i -= 2) : (o = "function" == typeof c ? c : bn, i -= o ? 1 : 0), a && Ce(t[0], t[1], a) && (o = i < 3 ? bn : o, i = 1); ++r < i;) {
                        var s = t[r];
                        s && e(n, s, o)
                    }
                    return n
                })
            }(function(e, n, t) {
                return t ? x(e, n, t) : O(e, n)
            }),
            fr = function(e, n) {
                return Qe(function(t) {
                    var r = t[0];
                    return null == r ? r : (t.push(n), e.apply(bn, t))
                })
            }(lr, k),
            pr = Nt ? function(e) {
                var n = null == e ? bn : e.constructor;
                return "function" == typeof n && n.prototype === e || ("function" == typeof e ? a.support.enumPrototypes : Se(e)) ? Te(e) : on(e) ? Nt(e) : []
            } : Te;
        a.prototype = c.prototype, s.prototype = $t(c.prototype), s.prototype.constructor = s, u.prototype = $t(c.prototype), u.prototype.constructor = u, h.prototype.push = g, a.after = $e, a.assign = lr, a.bind = sr, a.callback = hn, a.chain = Ne, a.debounce = Ye, a.defaults = fr, a.filter = qe, a.forEach = or, a.keys = pr, a.keysIn = ln, a.map = We, a.matches = gn, a.mixin = mn, a.pairs = fn, a.property = yn, a.restParam = Qe, a.tap = Ge, a.throttle = Xe, a.thru = Fe, a.values = pn, a.without = tr, a.collect = We, a.each = or, a.extend = lr, a.iteratee = hn, a.select = qe, mn(a, a), a.clone = Ze, a.cloneDeep = en, a.find = ir, a.identity = dn, a.includes = Je, a.indexOf = De, a.isArguments = nn, a.isArray = ur, a.isEqual = tn, a.isFunction = rn, a.isNative = an, a.isObject = on, a.isPlainObject = cn, a.isString = sn, a.isTypedArray = un, a.last = je, a.noop = vn, a.now = cr, a.reduce = ar, a.some = Ke, a.any = Ke, a.contains = Je, a.eq = tn, a.detect = ir, a.foldl = ar, a.include = Je, a.inject = ar, mn(a, function() {
            var e = {};
            return j(a, function(n, t) {
                a.prototype[t] || (e[t] = n)
            }), e
        }(), !1), a.prototype.sample = function(e) {
            return this.__chain__ || null != e ? this.thru(function(n) {
                return sample(n, e)
            }) : sample(this.value())
        }, a.VERSION = "3.10.1", sr.placeholder = a, y(["drop", "take"], function(e, n) {
            u.prototype[e] = function(t) {
                var r = this.__filtered__;
                if (r && !n) return new u(this);
                t = null == t ? 1 : Gt(At(t) || 0, 0);
                var i = this.clone();
                return r ? i.__takeCount__ = Ft(i.__takeCount__, t) : i.__views__.push({
                    size: t,
                    type: e + (i.__dir__ < 0 ? "Right" : "")
                }), i
            }, u.prototype[e + "Right"] = function(n) {
                return this.reverse()[e](n).reverse()
            }
        }), y(["filter", "map", "takeWhile"], function(e, n) {
            var t = n + 1,
                r = t != Mn;
            u.prototype[e] = function(e, n) {
                var i = this.clone();
                return i.__iteratees__.push({
                    iteratee: pe(e, n, 1),
                    type: t
                }), i.__filtered__ = i.__filtered__ || r, i
            }
        }), y(["first", "last"], function(e, n) {
            var t = "take" + (n ? "Right" : "");
            u.prototype[e] = function() {
                return this[t](1).value()[0]
            }
        }), y(["initial", "rest"], function(e, n) {
            var t = "drop" + (n ? "" : "Right");
            u.prototype[e] = function() {
                return this.__filtered__ ? new u(this) : this[t](1)
            }
        }), y(["pluck", "where"], function(e, n) {
            var t = n ? "filter" : "map",
                r = n ? H : yn;
            u.prototype[e] = function(e) {
                return this[t](r(e))
            }
        }), u.prototype.compact = function() {
            return this.filter(dn)
        }, u.prototype.reject = function(e, n) {
            return e = pe(e, n, 1), this.filter(function(n) {
                return !e(n)
            })
        }, u.prototype.slice = function(e, n) {
            e = null == e ? 0 : +e || 0;
            var t = this;
            return t.__filtered__ && (e > 0 || n < 0) ? new u(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== bn && (n = +n || 0, t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t)
        }, u.prototype.takeRightWhile = function(e, n) {
            return this.reverse().takeWhile(e, n).reverse()
        }, u.prototype.toArray = function() {
            return this.take(Lt)
        }, j(u.prototype, function(e, n) {
            var t = /^(?:filter|map|reject)|While$/.test(n),
                r = /^(?:first|last)$/.test(n),
                i = a[r ? "take" + ("last" == n ? "Right" : "") : n];
            i && (a.prototype[n] = function() {
                var n = r ? [1] : arguments,
                    o = this.__chain__,
                    a = this.__wrapped__,
                    c = !!this.__actions__.length,
                    l = a instanceof u,
                    f = n[0],
                    p = l || ur(a);
                p && t && "function" == typeof f && 1 != f.length && (l = p = !1);
                var h = function(e) {
                        return r && o ? i(e, 1)[0] : i.apply(bn, S([e], n))
                    },
                    d = {
                        func: Fe,
                        args: [h],
                        thisArg: bn
                    },
                    g = l && !c;
                if (r && !o) return g ? (a = a.clone(), a.__actions__.push(d), e.call(a)) : i.call(bn, this.value())[0];
                if (!r && p) {
                    a = g ? a : new u(this);
                    var m = e.apply(a, n);
                    return m.__actions__.push(d), new s(m, o)
                }
                return this.thru(h)
            })
        }), y(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function(e) {
            var n = (/^(?:replace|split)$/.test(e) ? St : yt)[e],
                t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                r = !Kt.spliceObjects && /^(?:pop|shift|splice)$/.test(e),
                i = /^(?:join|pop|replace|shift)$/.test(e),
                o = r ? function() {
                    var e = n.apply(this, arguments);
                    return 0 === this.length && delete this[0], e
                } : n;
            a.prototype[e] = function() {
                var e = arguments;
                return i && !this.__chain__ ? o.apply(this.value(), e) : this[t](function(n) {
                    return o.apply(n, e)
                })
            }
        }), j(u.prototype, function(e, n) {
            var t = a[n];
            if (t) {
                var r = t.name + "";
                (qt[r] || (qt[r] = [])).push({
                    name: n,
                    func: t
                })
            }
        }), qt[ae(bn, Sn).name] = [{
            name: "wrapper",
            func: bn
        }], u.prototype.clone = l, u.prototype.reverse = f, u.prototype.value = p, a.prototype.chain = Be, a.prototype.commit = Le, a.prototype.concat = rr, a.prototype.plant = Ue, a.prototype.reverse = He, a.prototype.toString = ze, a.prototype.run = a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = Ve, a.prototype.collect = a.prototype.map, a.prototype.head = a.prototype.first, a.prototype.select = a.prototype.filter, a.prototype.tail = a.prototype.rest, "function" == typeof define && "object" == typeof define.amd && define.amd && define("lodash", [], function() {
            return a
        })
    }.call(this),
    function(e, n) {
        "function" == typeof define && define.amd ? define("postal", ["lodash"], function(t) {
            return n(t, e)
        }) : "object" == typeof module && module.exports ? module.exports = n(require("lodash"), this) : e.postal = n(e._, e)
    }(this, function(e, n, t) {
        function r() {
            for (; S.length;) l.unsubscribe(S.shift())
        }

        function i(e, n, t) {
            return function(r, i, o) {
                r === e && o.splice(i, 1), 0 === o.length && delete t[n]
            }
        }

        function o(e, n, t, r, i) {
            var o = i && i.headers || {};
            return function(i) {
                var a;
                f.resolver.compare(i.topic, e, o) && (o.resolverNoCache || (a = n[t] = n[t] || [], a.push(i)), i.cacheKeys.push(t), r && r(i))
            }
        }

        function a(e, n) {
            return {
                channel: f.SYSTEM_CHANNEL,
                topic: "subscription." + e,
                data: {
                    event: "subscription." + e,
                    channel: n.channel,
                    topic: n.topic
                }
            }
        }

        function c(n, t) {
            return "function" == typeof n ? n : n ? function(r) {
                var i = 0,
                    o = 0;
                return e.each(n, function(e, a) {
                    i += 1, ("topic" === a && t.compare(r.topic, n.topic, {
                        resolverNoCache: !0
                    }) || "context" === a && n.context === r._context || r[a] === n[a]) && (o += 1)
                }), i === o
            } : function() {
                return !0
            }
        }
        var s = n.postal,
            u = {
                DEFAULT_CHANNEL: "/",
                SYSTEM_CHANNEL: "postal",
                enableSystemMessages: !0,
                cacheKeyDelimiter: "|",
                autoCompactResolver: !1
            },
            l = {
                configuration: e.extend({}, u)
            },
            f = l.configuration,
            p = function(e, n) {
                this.bus = n, this.channel = e || f.DEFAULT_CHANNEL
            };
        p.prototype.subscribe = function() {
            return this.bus.subscribe({
                channel: this.channel,
                topic: 1 === arguments.length ? arguments[0].topic : arguments[0],
                callback: 1 === arguments.length ? arguments[0].callback : arguments[1]
            })
        }, p.prototype.publish = function() {
            var e, n = {};
            if ("string" == typeof arguments[0] ? (n.topic = arguments[0], n.data = arguments[1], e = arguments[2]) : (n = arguments[0], e = arguments[1]), "object" != typeof n) throw new Error("The first argument to ChannelDefinition.publish should be either an envelope object or a string topic.");
            n.channel = this.channel, this.bus.publish(n, e)
        };
        var h = function(e, n, r) {
                if (3 !== arguments.length) throw new Error("You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.");
                if (0 === n.length) throw new Error("Topics cannot be empty");
                this.channel = e, this.topic = n, this.callback = r, this.pipeline = [], this.cacheKeys = [], this._context = t
            },
            d = function() {
                var n;
                return function(t) {
                    var r = !1;
                    return "string" == typeof t ? (r = t === n, n = t) : (r = e.isEqual(t, n), n = e.extend({}, t)), !r
                }
            },
            g = function() {
                var n = [];
                return function(t) {
                    var r = !e.any(n, function(n) {
                        return e.isEqual(t, n)
                    });
                    return r && n.push(t), r
                }
            };
        h.prototype = {
            catch: function(e) {
                var n = this.callback,
                    t = function() {
                        try {
                            n.apply(this, arguments)
                        } catch (n) {
                            e(n, arguments[0])
                        }
                    };
                return this.callback = t, this
            },
            defer: function() {
                return this.delay(0)
            },
            disposeAfter: function(n) {
                if ("number" != typeof n || n <= 0) throw new Error("The value provided to disposeAfter (maxCalls) must be a number greater than zero.");
                var t = this,
                    r = e.after(n, e.bind(function() {
                        t.unsubscribe()
                    }));
                return t.pipeline.push(function(e, n, t) {
                    t(e, n), r()
                }), t
            },
            distinct: function() {
                return this.constraint(new g)
            },
            distinctUntilChanged: function() {
                return this.constraint(new d)
            },
            invokeSubscriber: function(e, n) {
                if (!this.inactive) {
                    var t = this,
                        r = t.pipeline,
                        i = r.length,
                        o = t._context,
                        a = -1,
                        c = !1;
                    if (i) {
                        r = r.concat([t.callback]);
                        ! function e(n, s) {
                            a += 1, a < i ? r[a].call(o, n, s, e) : (t.callback.call(o, n, s), c = !0)
                        }(e, n)
                    } else t.callback.call(o, e, n), c = !0;
                    return c
                }
            },
            logError: function() {
                if (console) {
                    var e;
                    e = console.warn ? console.warn : console.log, this.catch(e)
                }
                return this
            },
            once: function() {
                return this.disposeAfter(1)
            },
            subscribe: function(e) {
                return this.callback = e, this
            },
            unsubscribe: function() {
                this.inactive || l.unsubscribe(this)
            },
            constraint: function(e) {
                if ("function" != typeof e) throw new Error("Predicate constraint must be a function");
                return this.pipeline.push(function(n, t, r) {
                    e.call(this, n, t) && r(n, t)
                }), this
            },
            constraints: function(n) {
                var t = this;
                return e.each(n, function(e) {
                    t.constraint(e)
                }), t
            },
            context: function(e) {
                return this._context = e, this
            },
            debounce: function(n, t) {
                if ("number" != typeof n) throw new Error("Milliseconds must be a number");
                return this.pipeline.push(e.debounce(function(e, n, t) {
                    t(e, n)
                }, n, !!t)), this
            },
            delay: function(e) {
                if ("number" != typeof e) throw new Error("Milliseconds must be a number");
                return this.pipeline.push(function(n, t, r) {
                    setTimeout(function() {
                        r(n, t)
                    }, e)
                }), this
            },
            throttle: function(n) {
                if ("number" != typeof n) throw new Error("Milliseconds must be a number");
                var t = function(e, n, t) {
                    t(e, n)
                };
                return this.pipeline.push(e.throttle(t, n)), this
            }
        };
        for (var m = ["withConstraint", "withConstraints", "withContext", "withDebounce", "withDelay", "withThrottle"], v = ["constraint", "constraints", "context", "debounce", "delay", "throttle"], y = 0; y < 6; y++) {
            var b = m[y];
            h.prototype[b] = function(e, n) {
                return function() {
                    if (console.warn || console.log) {
                        var t = "Warning, the " + e + " method has been deprecated. Please use " + n + " instead.";
                        console.warn ? console.warn(t) : console.log(t)
                    }
                    return h.prototype[n].apply(this, arguments)
                }
            }(b, v[y])
        }
        var w = (f.resolver = {
                cache: {},
                regex: {},
                enableCache: !0,
                compare: function(n, t, r) {
                    var i, o, a, c = t + f.cacheKeyDelimiter + n,
                        s = this.cache[c],
                        u = r || {},
                        l = this.enableCache && !u.resolverNoCache;
                    return !0 === s ? s : -1 === n.indexOf("#") && -1 === n.indexOf("*") ? (s = t === n, l && (this.cache[c] = s), s) : ((o = this.regex[n]) || (i = "^" + e.map(n.split("."), function(e) {
                        var n = "";
                        return a && (n = "#" !== a ? "\\.\\b" : "\\b"), n += "#" === e ? "[\\s\\S]*" : "*" === e ? "[^.]+" : e, a = e, n
                    }).join("") + "$", o = this.regex[n] = new RegExp(i)), s = o.test(t), l && (this.cache[c] = s), s)
                },
                reset: function() {
                    this.cache = {}, this.regex = {}
                },
                purge: function(n) {
                    var t = this,
                        r = f.cacheKeyDelimiter,
                        i = function(e, i) {
                            var o = i.split(r),
                                a = o[0],
                                c = o[1];
                            void 0 !== n.topic && n.topic !== a || void 0 !== n.binding && n.binding !== c || delete t.cache[i]
                        },
                        o = function(e, n) {
                            var i = n.split(r);
                            0 === l.getSubscribersFor({
                                topic: i[0]
                            }).length && delete t.cache[n]
                        };
                    if (void 0 === n) this.reset();
                    else {
                        var a = !0 === n.compact ? o : i;
                        e.each(this.cache, a)
                    }
                }
            }, 0),
            S = [],
            _ = 0,
            C = e.bind(a, this, "created"),
            k = e.bind(a, this, "removed");
        if (e.extend(l, {
                cache: {},
                subscriptions: {},
                wireTaps: [],
                ChannelDefinition: p,
                SubscriptionDefinition: h,
                channel: function(e) {
                    return new p(e, this)
                },
                addWireTap: function(e) {
                    var n = this;
                    return n.wireTaps.push(e),
                        function() {
                            var t = n.wireTaps.indexOf(e); - 1 !== t && n.wireTaps.splice(t, 1)
                        }
                },
                noConflict: function() {
                    if ("undefined" == typeof window || "undefined" != typeof window && "function" == typeof define && define.amd) throw new Error("noConflict can only be used in browser clients which aren't using AMD modules");
                    return n.postal = s, this
                },
                getSubscribersFor: function(n) {
                    var t = [],
                        r = this;
                    return e.each(r.subscriptions, function(r) {
                        e.each(r, function(r) {
                            t = t.concat(e.filter(r, c(n, f.resolver)))
                        })
                    }), t
                },
                publish: function(n, t) {
                    ++w;
                    var i = n.channel = n.channel || f.DEFAULT_CHANNEL,
                        a = n.topic;
                    n.timeStamp = new Date, this.wireTaps.length && e.each(this.wireTaps, function(e) {
                        e(n.data, n, w)
                    });
                    var c = i + f.cacheKeyDelimiter + a,
                        s = this.cache[c],
                        u = 0,
                        l = 0;
                    if (s) e.each(s, function(e) {
                        e.invokeSubscriber(n.data, n) ? l++ : u++
                    });
                    else {
                        var p = o(a, this.cache, c, function(e) {
                            e.invokeSubscriber(n.data, n) ? l++ : u++
                        }, n);
                        e.each(this.subscriptions[i], function(n) {
                            e.each(n, p)
                        })
                    }
                    0 == --w && r(), t && t({
                        activated: l,
                        skipped: u
                    })
                },
                reset: function() {
                    this.unsubscribeFor(), f.resolver.reset(), this.subscriptions = {}, this.cache = {}
                },
                subscribe: function(n) {
                    var t, r = this.subscriptions,
                        i = new h(n.channel || f.DEFAULT_CHANNEL, n.topic, n.callback),
                        a = r[i.channel],
                        c = i.channel.length;
                    return a || (a = r[i.channel] = {}), t = r[i.channel][i.topic], t || (t = r[i.channel][i.topic] = []), t.push(i), e.each(e.keys(this.cache), function(e) {
                        e.substr(0, c) === i.channel && o(e.split(f.cacheKeyDelimiter)[1], this.cache, e)(i)
                    }, this), f.enableSystemMessages && this.publish(C(i)), i
                },
                unsubscribe: function() {
                    for (var n, t, r, o, a = arguments.length, c = 0; c < a; c++) {
                        if (n = arguments[c], n.inactive = !0, w) return void S.push(n);
                        if (t = this.subscriptions[n.channel], r = t && t[n.topic]) {
                            var s = r.length;
                            for (o = 0; o < s;) {
                                if (r[o] === n) {
                                    r.splice(o, 1);
                                    break
                                }
                                o += 1
                            }
                            if (0 === r.length && (delete t[n.topic], e.keys(t).length || delete this.subscriptions[n.channel]), n.cacheKeys && n.cacheKeys.length)
                                for (var u; u = n.cacheKeys.pop();) e.each(this.cache[u], i(n, u, this.cache));
                            if ("function" == typeof f.resolver.purge) {
                                var l = !0 === f.autoCompactResolver ? 0 : "number" == typeof f.autoCompactResolver && f.autoCompactResolver - 1;
                                l >= 0 && _ === l ? (f.resolver.purge({
                                    compact: !0
                                }), _ = 0) : l >= 0 && _ < l && (_ += 1)
                            }
                        }
                        f.enableSystemMessages && this.publish(k(n))
                    }
                },
                unsubscribeFor: function(e) {
                    var n = [];
                    this.subscriptions && (n = this.getSubscribersFor(e), this.unsubscribe.apply(this, n))
                }
            }), n && Object.prototype.hasOwnProperty.call(n, "__postalReady__") && e.isArray(n.__postalReady__))
            for (; n.__postalReady__.length;) n.__postalReady__.shift().onReady(l);
        return l
    }),
    function() {
        function e(e) {
            function n(n, t, r, i, o, a) {
                for (; o >= 0 && a > o; o += e) {
                    var c = i ? i[o] : o;
                    r = t(r, n[c], c, n)
                }
                return r
            }
            return function(t, r, i, o) {
                r = b(r, o, 4);
                var a = !O(t) && y.keys(t),
                    c = (a || t).length,
                    s = e > 0 ? 0 : c - 1;
                return arguments.length < 3 && (i = t[a ? a[s] : s], s += e), n(t, r, i, a, s, c)
            }
        }

        function n(e) {
            return function(n, t, r) {
                t = w(t, r);
                for (var i = x(n), o = e > 0 ? 0 : i - 1; o >= 0 && i > o; o += e)
                    if (t(n[o], o, n)) return o;
                return -1
            }
        }

        function t(e, n, t) {
            return function(r, i, o) {
                var a = 0,
                    c = x(r);
                if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + c, a) : c = o >= 0 ? Math.min(o + 1, c) : o + c + 1;
                else if (t && o && c) return o = t(r, i), r[o] === i ? o : -1;
                if (i !== i) return o = n(l.call(r, a, c), y.isNaN), o >= 0 ? o + a : -1;
                for (o = e > 0 ? a : c - 1; o >= 0 && c > o; o += e)
                    if (r[o] === i) return o;
                return -1
            }
        }

        function r(e, n) {
            var t = M.length,
                r = e.constructor,
                i = y.isFunction(r) && r.prototype || c,
                o = "constructor";
            for (y.has(e, o) && !y.contains(n, o) && n.push(o); t--;)(o = M[t]) in e && e[o] !== i[o] && !y.contains(n, o) && n.push(o)
        }
        var i = this,
            o = i._,
            a = Array.prototype,
            c = Object.prototype,
            s = Function.prototype,
            u = a.push,
            l = a.slice,
            f = c.toString,
            p = c.hasOwnProperty,
            h = Array.isArray,
            d = Object.keys,
            g = s.bind,
            m = Object.create,
            v = function() {},
            y = function(e) {
                return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : i._ = y, y.VERSION = "1.8.3";
        var b = function(e, n, t) {
                if (void 0 === n) return e;
                switch (null == t ? 3 : t) {
                    case 1:
                        return function(t) {
                            return e.call(n, t)
                        };
                    case 2:
                        return function(t, r) {
                            return e.call(n, t, r)
                        };
                    case 3:
                        return function(t, r, i) {
                            return e.call(n, t, r, i)
                        };
                    case 4:
                        return function(t, r, i, o) {
                            return e.call(n, t, r, i, o)
                        }
                }
                return function() {
                    return e.apply(n, arguments)
                }
            },
            w = function(e, n, t) {
                return null == e ? y.identity : y.isFunction(e) ? b(e, n, t) : y.isObject(e) ? y.matcher(e) : y.property(e)
            };
        y.iteratee = function(e, n) {
            return w(e, n, 1 / 0)
        };
        var S = function(e, n) {
                return function(t) {
                    var r = arguments.length;
                    if (2 > r || null == t) return t;
                    for (var i = 1; r > i; i++)
                        for (var o = arguments[i], a = e(o), c = a.length, s = 0; c > s; s++) {
                            var u = a[s];
                            n && void 0 !== t[u] || (t[u] = o[u])
                        }
                    return t
                }
            },
            _ = function(e) {
                if (!y.isObject(e)) return {};
                if (m) return m(e);
                v.prototype = e;
                var n = new v;
                return v.prototype = null, n
            },
            C = function(e) {
                return function(n) {
                    return null == n ? void 0 : n[e]
                }
            },
            k = Math.pow(2, 53) - 1,
            x = C("length"),
            O = function(e) {
                var n = x(e);
                return "number" == typeof n && n >= 0 && k >= n
            };
        y.each = y.forEach = function(e, n, t) {
            n = b(n, t);
            var r, i;
            if (O(e))
                for (r = 0, i = e.length; i > r; r++) n(e[r], r, e);
            else {
                var o = y.keys(e);
                for (r = 0, i = o.length; i > r; r++) n(e[o[r]], o[r], e)
            }
            return e
        }, y.map = y.collect = function(e, n, t) {
            n = w(n, t);
            for (var r = !O(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; i > a; a++) {
                var c = r ? r[a] : a;
                o[a] = n(e[c], c, e)
            }
            return o
        }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, n, t) {
            var r;
            return r = O(e) ? y.findIndex(e, n, t) : y.findKey(e, n, t), void 0 !== r && -1 !== r ? e[r] : void 0
        }, y.filter = y.select = function(e, n, t) {
            var r = [];
            return n = w(n, t), y.each(e, function(e, t, i) {
                n(e, t, i) && r.push(e)
            }), r
        }, y.reject = function(e, n, t) {
            return y.filter(e, y.negate(w(n)), t)
        }, y.every = y.all = function(e, n, t) {
            n = w(n, t);
            for (var r = !O(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
                var a = r ? r[o] : o;
                if (!n(e[a], a, e)) return !1
            }
            return !0
        }, y.some = y.any = function(e, n, t) {
            n = w(n, t);
            for (var r = !O(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
                var a = r ? r[o] : o;
                if (n(e[a], a, e)) return !0
            }
            return !1
        }, y.contains = y.includes = y.include = function(e, n, t, r) {
            return O(e) || (e = y.values(e)), ("number" != typeof t || r) && (t = 0), y.indexOf(e, n, t) >= 0
        }, y.invoke = function(e, n) {
            var t = l.call(arguments, 2),
                r = y.isFunction(n);
            return y.map(e, function(e) {
                var i = r ? n : e[n];
                return null == i ? i : i.apply(e, t)
            })
        }, y.pluck = function(e, n) {
            return y.map(e, y.property(n))
        }, y.where = function(e, n) {
            return y.filter(e, y.matcher(n))
        }, y.findWhere = function(e, n) {
            return y.find(e, y.matcher(n))
        }, y.max = function(e, n, t) {
            var r, i, o = -1 / 0,
                a = -1 / 0;
            if (null == n && null != e) {
                e = O(e) ? e : y.values(e);
                for (var c = 0, s = e.length; s > c; c++)(r = e[c]) > o && (o = r)
            } else n = w(n, t), y.each(e, function(e, t, r) {
                ((i = n(e, t, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
            });
            return o
        }, y.min = function(e, n, t) {
            var r, i, o = 1 / 0,
                a = 1 / 0;
            if (null == n && null != e) {
                e = O(e) ? e : y.values(e);
                for (var c = 0, s = e.length; s > c; c++) r = e[c], o > r && (o = r)
            } else n = w(n, t), y.each(e, function(e, t, r) {
                i = n(e, t, r), (a > i || 1 / 0 === i && 1 / 0 === o) && (o = e, a = i)
            });
            return o
        }, y.shuffle = function(e) {
            for (var n, t = O(e) ? e : y.values(e), r = t.length, i = Array(r), o = 0; r > o; o++) n = y.random(0, o), n !== o && (i[o] = i[n]), i[n] = t[o];
            return i
        }, y.sample = function(e, n, t) {
            return null == n || t ? (O(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, n))
        }, y.sortBy = function(e, n, t) {
            return n = w(n, t), y.pluck(y.map(e, function(e, t, r) {
                return {
                    value: e,
                    index: t,
                    criteria: n(e, t, r)
                }
            }).sort(function(e, n) {
                var t = e.criteria,
                    r = n.criteria;
                if (t !== r) {
                    if (t > r || void 0 === t) return 1;
                    if (r > t || void 0 === r) return -1
                }
                return e.index - n.index
            }), "value")
        };
        var I = function(e) {
            return function(n, t, r) {
                var i = {};
                return t = w(t, r), y.each(n, function(r, o) {
                    var a = t(r, o, n);
                    e(i, r, a)
                }), i
            }
        };
        y.groupBy = I(function(e, n, t) {
            y.has(e, t) ? e[t].push(n) : e[t] = [n]
        }), y.indexBy = I(function(e, n, t) {
            e[t] = n
        }), y.countBy = I(function(e, n, t) {
            y.has(e, t) ? e[t]++ : e[t] = 1
        }), y.toArray = function(e) {
            return e ? y.isArray(e) ? l.call(e) : O(e) ? y.map(e, y.identity) : y.values(e) : []
        }, y.size = function(e) {
            return null == e ? 0 : O(e) ? e.length : y.keys(e).length
        }, y.partition = function(e, n, t) {
            n = w(n, t);
            var r = [],
                i = [];
            return y.each(e, function(e, t, o) {
                (n(e, t, o) ? r : i).push(e)
            }), [r, i]
        }, y.first = y.head = y.take = function(e, n, t) {
            return null == e ? void 0 : null == n || t ? e[0] : y.initial(e, e.length - n)
        }, y.initial = function(e, n, t) {
            return l.call(e, 0, Math.max(0, e.length - (null == n || t ? 1 : n)))
        }, y.last = function(e, n, t) {
            return null == e ? void 0 : null == n || t ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - n))
        }, y.rest = y.tail = y.drop = function(e, n, t) {
            return l.call(e, null == n || t ? 1 : n)
        }, y.compact = function(e) {
            return y.filter(e, y.identity)
        };
        var E = function(e, n, t, r) {
            for (var i = [], o = 0, a = r || 0, c = x(e); c > a; a++) {
                var s = e[a];
                if (O(s) && (y.isArray(s) || y.isArguments(s))) {
                    n || (s = E(s, n, t));
                    var u = 0,
                        l = s.length;
                    for (i.length += l; l > u;) i[o++] = s[u++]
                } else t || (i[o++] = s)
            }
            return i
        };
        y.flatten = function(e, n) {
            return E(e, n, !1)
        }, y.without = function(e) {
            return y.difference(e, l.call(arguments, 1))
        }, y.uniq = y.unique = function(e, n, t, r) {
            y.isBoolean(n) || (r = t, t = n, n = !1), null != t && (t = w(t, r));
            for (var i = [], o = [], a = 0, c = x(e); c > a; a++) {
                var s = e[a],
                    u = t ? t(s, a, e) : s;
                n ? (a && o === u || i.push(s), o = u) : t ? y.contains(o, u) || (o.push(u), i.push(s)) : y.contains(i, s) || i.push(s)
            }
            return i
        }, y.union = function() {
            return y.uniq(E(arguments, !0, !0))
        }, y.intersection = function(e) {
            for (var n = [], t = arguments.length, r = 0, i = x(e); i > r; r++) {
                var o = e[r];
                if (!y.contains(n, o)) {
                    for (var a = 1; t > a && y.contains(arguments[a], o); a++);
                    a === t && n.push(o)
                }
            }
            return n
        }, y.difference = function(e) {
            var n = E(arguments, !0, !0, 1);
            return y.filter(e, function(e) {
                return !y.contains(n, e)
            })
        }, y.zip = function() {
            return y.unzip(arguments)
        }, y.unzip = function(e) {
            for (var n = e && y.max(e, x).length || 0, t = Array(n), r = 0; n > r; r++) t[r] = y.pluck(e, r);
            return t
        }, y.object = function(e, n) {
            for (var t = {}, r = 0, i = x(e); i > r; r++) n ? t[e[r]] = n[r] : t[e[r][0]] = e[r][1];
            return t
        }, y.findIndex = n(1), y.findLastIndex = n(-1), y.sortedIndex = function(e, n, t, r) {
            t = w(t, r, 1);
            for (var i = t(n), o = 0, a = x(e); a > o;) {
                var c = Math.floor((o + a) / 2);
                t(e[c]) < i ? o = c + 1 : a = c
            }
            return o
        }, y.indexOf = t(1, y.findIndex, y.sortedIndex), y.lastIndexOf = t(-1, y.findLastIndex), y.range = function(e, n, t) {
            null == n && (n = e || 0, e = 0), t = t || 1;
            for (var r = Math.max(Math.ceil((n - e) / t), 0), i = Array(r), o = 0; r > o; o++, e += t) i[o] = e;
            return i
        };
        var P = function(e, n, t, r, i) {
            if (!(r instanceof n)) return e.apply(t, i);
            var o = _(e.prototype),
                a = e.apply(o, i);
            return y.isObject(a) ? a : o
        };
        y.bind = function(e, n) {
            if (g && e.bind === g) return g.apply(e, l.call(arguments, 1));
            if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var t = l.call(arguments, 2),
                r = function() {
                    return P(e, r, n, this, t.concat(l.call(arguments)))
                };
            return r
        }, y.partial = function(e) {
            var n = l.call(arguments, 1),
                t = function() {
                    for (var r = 0, i = n.length, o = Array(i), a = 0; i > a; a++) o[a] = n[a] === y ? arguments[r++] : n[a];
                    for (; r < arguments.length;) o.push(arguments[r++]);
                    return P(e, t, this, this, o)
                };
            return t
        }, y.bindAll = function(e) {
            var n, t, r = arguments.length;
            if (1 >= r) throw new Error("bindAll must be passed function names");
            for (n = 1; r > n; n++) t = arguments[n], e[t] = y.bind(e[t], e);
            return e
        }, y.memoize = function(e, n) {
            var t = function(r) {
                var i = t.cache,
                    o = "" + (n ? n.apply(this, arguments) : r);
                return y.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
            };
            return t.cache = {}, t
        }, y.delay = function(e, n) {
            var t = l.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, t)
            }, n)
        }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, n, t) {
            var r, i, o, a = null,
                c = 0;
            t || (t = {});
            var s = function() {
                c = !1 === t.leading ? 0 : y.now(), a = null, o = e.apply(r, i), a || (r = i = null)
            };
            return function() {
                var u = y.now();
                c || !1 !== t.leading || (c = u);
                var l = n - (u - c);
                return r = this, i = arguments, 0 >= l || l > n ? (a && (clearTimeout(a), a = null), c = u, o = e.apply(r, i), a || (r = i = null)) : a || !1 === t.trailing || (a = setTimeout(s, l)), o
            }
        }, y.debounce = function(e, n, t) {
            var r, i, o, a, c, s = function() {
                var u = y.now() - a;
                n > u && u >= 0 ? r = setTimeout(s, n - u) : (r = null, t || (c = e.apply(o, i), r || (o = i = null)))
            };
            return function() {
                o = this, i = arguments, a = y.now();
                var u = t && !r;
                return r || (r = setTimeout(s, n)), u && (c = e.apply(o, i), o = i = null), c
            }
        }, y.wrap = function(e, n) {
            return y.partial(n, e)
        }, y.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, y.compose = function() {
            var e = arguments,
                n = e.length - 1;
            return function() {
                for (var t = n, r = e[n].apply(this, arguments); t--;) r = e[t].call(this, r);
                return r
            }
        }, y.after = function(e, n) {
            return function() {
                return --e < 1 ? n.apply(this, arguments) : void 0
            }
        }, y.before = function(e, n) {
            var t;
            return function() {
                return --e > 0 && (t = n.apply(this, arguments)), 1 >= e && (n = null), t
            }
        }, y.once = y.partial(y.before, 2);
        var T = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        y.keys = function(e) {
            if (!y.isObject(e)) return [];
            if (d) return d(e);
            var n = [];
            for (var t in e) y.has(e, t) && n.push(t);
            return T && r(e, n), n
        }, y.allKeys = function(e) {
            if (!y.isObject(e)) return [];
            var n = [];
            for (var t in e) n.push(t);
            return T && r(e, n), n
        }, y.values = function(e) {
            for (var n = y.keys(e), t = n.length, r = Array(t), i = 0; t > i; i++) r[i] = e[n[i]];
            return r
        }, y.mapObject = function(e, n, t) {
            n = w(n, t);
            for (var r, i = y.keys(e), o = i.length, a = {}, c = 0; o > c; c++) r = i[c], a[r] = n(e[r], r, e);
            return a
        }, y.pairs = function(e) {
            for (var n = y.keys(e), t = n.length, r = Array(t), i = 0; t > i; i++) r[i] = [n[i], e[n[i]]];
            return r
        }, y.invert = function(e) {
            for (var n = {}, t = y.keys(e), r = 0, i = t.length; i > r; r++) n[e[t[r]]] = t[r];
            return n
        }, y.functions = y.methods = function(e) {
            var n = [];
            for (var t in e) y.isFunction(e[t]) && n.push(t);
            return n.sort()
        }, y.extend = S(y.allKeys), y.extendOwn = y.assign = S(y.keys), y.findKey = function(e, n, t) {
            n = w(n, t);
            for (var r, i = y.keys(e), o = 0, a = i.length; a > o; o++)
                if (r = i[o], n(e[r], r, e)) return r
        }, y.pick = function(e, n, t) {
            var r, i, o = {},
                a = e;
            if (null == a) return o;
            y.isFunction(n) ? (i = y.allKeys(a), r = b(n, t)) : (i = E(arguments, !1, !1, 1), r = function(e, n, t) {
                return n in t
            }, a = Object(a));
            for (var c = 0, s = i.length; s > c; c++) {
                var u = i[c],
                    l = a[u];
                r(l, u, a) && (o[u] = l)
            }
            return o
        }, y.omit = function(e, n, t) {
            if (y.isFunction(n)) n = y.negate(n);
            else {
                var r = y.map(E(arguments, !1, !1, 1), String);
                n = function(e, n) {
                    return !y.contains(r, n)
                }
            }
            return y.pick(e, n, t)
        }, y.defaults = S(y.allKeys, !0), y.create = function(e, n) {
            var t = _(e);
            return n && y.extendOwn(t, n), t
        }, y.clone = function(e) {
            return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
        }, y.tap = function(e, n) {
            return n(e), e
        }, y.isMatch = function(e, n) {
            var t = y.keys(n),
                r = t.length;
            if (null == e) return !r;
            for (var i = Object(e), o = 0; r > o; o++) {
                var a = t[o];
                if (n[a] !== i[a] || !(a in i)) return !1
            }
            return !0
        };
        var R = function(e, n, t, r) {
            if (e === n) return 0 !== e || 1 / e == 1 / n;
            if (null == e || null == n) return e === n;
            e instanceof y && (e = e._wrapped), n instanceof y && (n = n._wrapped);
            var i = f.call(e);
            if (i !== f.call(n)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + n;
                case "[object Number]":
                    return +e != +e ? +n != +n : 0 == +e ? 1 / +e == 1 / n : +e == +n;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +n
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof e || "object" != typeof n) return !1;
                var a = e.constructor,
                    c = n.constructor;
                if (a !== c && !(y.isFunction(a) && a instanceof a && y.isFunction(c) && c instanceof c) && "constructor" in e && "constructor" in n) return !1
            }
            t = t || [], r = r || [];
            for (var s = t.length; s--;)
                if (t[s] === e) return r[s] === n;
            if (t.push(e), r.push(n), o) {
                if ((s = e.length) !== n.length) return !1;
                for (; s--;)
                    if (!R(e[s], n[s], t, r)) return !1
            } else {
                var u, l = y.keys(e);
                if (s = l.length, y.keys(n).length !== s) return !1;
                for (; s--;)
                    if (u = l[s], !y.has(n, u) || !R(e[u], n[u], t, r)) return !1
            }
            return t.pop(), r.pop(), !0
        };
        y.isEqual = function(e, n) {
            return R(e, n)
        }, y.isEmpty = function(e) {
            return null == e || (O(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
        }, y.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, y.isArray = h || function(e) {
            return "[object Array]" === f.call(e)
        }, y.isObject = function(e) {
            var n = typeof e;
            return "function" === n || "object" === n && !!e
        }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            y["is" + e] = function(n) {
                return f.call(n) === "[object " + e + "]"
            }
        }), y.isArguments(arguments) || (y.isArguments = function(e) {
            return y.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
            return "function" == typeof e || !1
        }), y.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, y.isNaN = function(e) {
            return y.isNumber(e) && e !== +e
        }, y.isBoolean = function(e) {
            return !0 === e || !1 === e || "[object Boolean]" === f.call(e)
        }, y.isNull = function(e) {
            return null === e
        }, y.isUndefined = function(e) {
            return void 0 === e
        }, y.has = function(e, n) {
            return null != e && p.call(e, n)
        }, y.noConflict = function() {
            return i._ = o, this
        }, y.identity = function(e) {
            return e
        }, y.constant = function(e) {
            return function() {
                return e
            }
        }, y.noop = function() {}, y.property = C, y.propertyOf = function(e) {
            return null == e ? function() {} : function(n) {
                return e[n]
            }
        }, y.matcher = y.matches = function(e) {
            return e = y.extendOwn({}, e),
                function(n) {
                    return y.isMatch(n, e)
                }
        }, y.times = function(e, n, t) {
            var r = Array(Math.max(0, e));
            n = b(n, t, 1);
            for (var i = 0; e > i; i++) r[i] = n(i);
            return r
        }, y.random = function(e, n) {
            return null == n && (n = e, e = 0), e + Math.floor(Math.random() * (n - e + 1))
        }, y.now = Date.now || function() {
            return (new Date).getTime()
        };
        var A = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            D = y.invert(A),
            j = function(e) {
                var n = function(n) {
                        return e[n]
                    },
                    t = "(?:" + y.keys(e).join("|") + ")",
                    r = RegExp(t),
                    i = RegExp(t, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, n) : e
                }
            };
        y.escape = j(A), y.unescape = j(D), y.result = function(e, n, t) {
            var r = null == e ? void 0 : e[n];
            return void 0 === r && (r = t), y.isFunction(r) ? r.call(e) : r
        };
        var N = 0;
        y.uniqueId = function(e) {
            var n = ++N + "";
            return e ? e + n : n
        }, y.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var G = /(.)^/,
            F = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            B = /\\|'|\r|\n|\u2028|\u2029/g,
            L = function(e) {
                return "\\" + F[e]
            };
        y.template = function(e, n, t) {
            !n && t && (n = t), n = y.defaults({}, n, y.templateSettings);
            var r = RegExp([(n.escape || G).source, (n.interpolate || G).source, (n.evaluate || G).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            e.replace(r, function(n, t, r, a, c) {
                return o += e.slice(i, c).replace(B, L), i = c + n.length, t ? o += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), n
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(n.variable || "obj", "_", o)
            } catch (e) {
                throw e.source = o, e
            }
            var c = function(e) {
                return a.call(this, e, y)
            };
            return c.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", c
        }, y.chain = function(e) {
            var n = y(e);
            return n._chain = !0, n
        };
        var U = function(e, n) {
            return e._chain ? y(n).chain() : n
        };
        y.mixin = function(e) {
            y.each(y.functions(e), function(n) {
                var t = y[n] = e[n];
                y.prototype[n] = function() {
                    var e = [this._wrapped];
                    return u.apply(e, arguments), U(this, t.apply(y, e))
                }
            })
        }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var n = a[e];
            y.prototype[e] = function() {
                var t = this._wrapped;
                return n.apply(t, arguments), "shift" !== e && "splice" !== e || 0 !== t.length || delete t[0], U(this, t)
            }
        }), y.each(["concat", "join", "slice"], function(e) {
            var n = a[e];
            y.prototype[e] = function() {
                return U(this, n.apply(this._wrapped, arguments))
            }
        }), y.prototype.value = function() {
            return this._wrapped
        }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return y
        })
    }.call(this),
    function(e, n) {
        "object" == typeof module && module.exports ? module.exports = n(require("underscore")) : "function" == typeof define && define.amd ? define("riveter", ["underscore"], function(t) {
            return n(t, e)
        }) : e.riveter = n(e._, e)
    }(this, function(e, n, t) {
        var r = Array.prototype.slice,
            i = function() {
                for (var e = r.call(arguments, 0); e.length;) i.rivet(e.shift())
            };
        return i.rivet = function(e) {
            e.hasOwnProperty("extend") || (e.extend = function(n, t) {
                return i.extend(e, n, t)
            }), e.hasOwnProperty("compose") || (e.compose = function() {
                return i.compose.apply(this, [e].concat(r.call(arguments, 0)))
            }), e.hasOwnProperty("inherits") || (e.inherits = function(n, t) {
                i.inherits(e, n, t)
            }), e.hasOwnProperty("mixin") || (e.mixin = function() {
                i.mixin.apply(this, [e].concat(r.call(arguments, 0)))
            })
        }, i.inherits = function(n, t, r) {
            var o, a = function() {},
                c = function() {
                    t.apply(this, arguments)
                };
            return "object" == typeof n ? (n.hasOwnProperty("constructor") && (c = n.constructor), o = n) : (c = n, o = n.prototype), i.rivet(c), e.defaults(c, t, r), a.prototype = t.prototype, c.prototype = new a, e.extend(c.prototype, o, {
                constructor: c
            }), c.__super = t, c.__super__ = t.prototype, c
        }, i.extend = function(e, n, t) {
            return i.inherits(n, e, t)
        }, i.compose = function() {
            var n = r.call(arguments, 0),
                t = n.shift();
            i.rivet(t);
            var o = e.reduce(n, function(e, n) {
                    return n.hasOwnProperty("_preInit") && e.preInit.push(n._preInit), n.hasOwnProperty("_postInit") && e.postInit.push(n._postInit), n = n.mixin || n, e.items.push(n), e
                }, {
                    items: [],
                    preInit: [],
                    postInit: []
                }),
                a = t.extend({
                    constructor: function() {
                        var n = r.call(arguments, 0);
                        e.each(o.preInit, function(e) {
                            e.apply(this, n)
                        }, this), t.prototype.constructor.apply(this, n), e.each(o.postInit, function(e) {
                            e.apply(this, n)
                        }, this)
                    }
                });
            return i.rivet(a), e.defaults(a.prototype, e.extend.apply(null, [{}].concat(o.items))), a
        }, i.mixin = function() {
            var n = r.call(arguments, 0),
                t = n.shift();
            i.rivet(t), e.defaults(t.prototype, e.extend.apply(null, [{}].concat(n)))
        }, i
    }),
    function(e, n) {
        "object" == typeof module && module.exports ? module.exports = function(e) {
            return n(require("lodash"), e, require("riveter"))
        } : "function" == typeof define && define.amd ? define("postal.federation", ["lodash", "postal", "riveter"], function(t, r, i) {
            return n(t, r, i, e)
        }) : e.postal = n(e._, e.postal, e.riveter, e)
    }(this, function(e, n, t, r, i) {
        function o(e) {
            n.fedx.signalReady.apply(this, e)
        }

        function a(e) {
            n.fedx.send.apply(this, e)
        }

        function c(e) {
            n.fedx.onFederatedMsg.call(this, e)
        }
        n.createUUID || (n.createUUID = function() {
            for (var e = [], n = "0123456789abcdef", t = 0; t < 36; t++) e[t] = n.substr(Math.floor(16 * Math.random()), 1);
            return e[14] = "4", e[19] = n.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
        }), n.instanceId || (n.instanceId = function() {
            var e, t;
            return function(r) {
                return r && (t = e, e = r, n.publish({
                    channel: n.configuration.SYSTEM_CHANNEL,
                    topic: "instanceId.changed",
                    data: {
                        oldId: t,
                        newId: e
                    }
                })), e
            }
        }());
        var s = function() {},
            u = !1,
            l = [],
            f = [],
            p = [],
            h = {
                enabled: !0,
                filterMode: "whitelist",
                filterDirection: "both"
            },
            d = h,
            g = function(t, r, i) {
                var o = Object.prototype.hasOwnProperty.call(n.fedx.filters[i], t),
                    a = o && e.any(n.fedx.filters[i][t], function(e) {
                        return n.configuration.resolver.compare(e, r)
                    }),
                    c = "blacklist" === d.filterMode;
                return d.enabled && (c && (!o || o && !a) || !c && o && a)
            },
            m = {
                ping: function() {
                    return {
                        type: "federation.ping",
                        instanceId: n.instanceId(),
                        timeStamp: new Date,
                        ticket: n.createUUID()
                    }
                },
                pong: function(e) {
                    return {
                        type: "federation.pong",
                        instanceId: n.instanceId(),
                        timeStamp: new Date,
                        pingData: {
                            instanceId: e.instanceId,
                            timeStamp: e.timeStamp,
                            ticket: e.ticket
                        }
                    }
                },
                message: function(e) {
                    return {
                        type: "federation.message",
                        instanceId: n.instanceId(),
                        timeStamp: new Date,
                        envelope: e
                    }
                },
                disconnect: function() {
                    return {
                        type: "federation.disconnect",
                        instanceId: n.instanceId(),
                        timeStamp: new Date
                    }
                },
                bundle: function(e) {
                    return {
                        type: "federation.bundle",
                        instanceId: n.instanceId(),
                        timeStamp: new Date,
                        packingSlips: e
                    }
                }
            },
            v = {
                "federation.ping": function(e) {
                    e.source.setInstanceId(e.packingSlip.instanceId), e.source.handshakeComplete ? e.source.sendPong(e.packingSlip) : e.source.sendBundle([n.fedx.getPackingSlip("pong", e.packingSlip), n.fedx.getPackingSlip("ping")])
                },
                "federation.pong": function(t) {
                    t.source.handshakeComplete = !0, t.source.setInstanceId(t.packingSlip.instanceId), t.source.pings[t.packingSlip.pingData.ticket] && (t.source.pings[t.packingSlip.pingData.ticket].callback({
                        ticket: t.packingSlip.pingData.ticket,
                        instanceId: t.packingSlip.instanceId,
                        source: t.source
                    }), t.source.pings[t.packingSlip.pingData.ticket] = i), e.contains(n.fedx.clients, t.packingSlip.instanceId) || n.fedx.clients.push(t.packingSlip.instanceId), n.publish({
                        channel: "postal.federation",
                        topic: "client.federated",
                        data: {
                            remoteId: t.source.instanceId,
                            localId: n.instanceId(),
                            transport: t.transport
                        }
                    })
                },
                "federation.disconnect": function(t) {
                    n.fedx.clients = e.without(n.fedx.clients, t.source.instanceId), n.fedx.disconnect({
                        transport: t.source.transportName,
                        instanceId: t.source.instanceId,
                        doNotNotify: !0
                    })
                },
                "federation.message": function(e) {
                    var t = e.packingSlip.envelope;
                    g(t.channel, t.topic, "in") && (t.lastSender = e.packingSlip.instanceId, n.publish(t))
                },
                "federation.bundle": function(t) {
                    e.each(t.packingSlip.packingSlips, function(r) {
                        n.fedx.onFederatedMsg(e.extend({}, t, {
                            packingSlip: r
                        }))
                    })
                }
            },
            y = function(e, n, t) {
                this.target = e, this.options = n || {}, this.pings = {}, this.instanceId = t, this.handshakeComplete = !1
            };
        return y.prototype.sendPing = function(e) {
            var t = n.fedx.getPackingSlip("ping");
            this.pings[t.ticket] = {
                ticket: t.ticket,
                callback: e || s
            }, this.send(t)
        }, y.prototype.sendPong = function(e) {
            this.send(n.fedx.getPackingSlip("pong", e))
        }, y.prototype.sendBundle = function(e) {
            this.send(n.fedx.getPackingSlip("bundle", e))
        }, y.prototype.sendMessage = function(t) {
            if (this.handshakeComplete) {
                t.originId = t.originId || n.instanceId();
                var r = e.clone(t);
                !this.instanceId || this.instanceId === r.lastSender || r.knownIds && r.knownIds.length && (!r.knownIds || e.include(r.knownIds, this.instanceId)) || (r.knownIds = (r.knownIds || []).concat(e.without(n.fedx.clients, this.instanceId)), this.send(n.fedx.getPackingSlip("message", r)))
            }
        }, y.prototype.disconnect = function() {
            this.send(n.fedx.getPackingSlip("disconnect"))
        }, y.prototype.onMessage = function(e) {
            this.shouldProcess() && n.fedx.onFederatedMsg({
                transport: this.transportName,
                packingSlip: e,
                source: this
            })
        }, y.prototype.shouldProcess = function() {
            return !0
        }, y.prototype.send = function() {
            throw new Error("An object deriving from FederationClient must provide an implementation for 'send'.")
        }, y.prototype.setInstanceId = function(e) {
            this.instanceId = e
        }, t(y), n.fedx = e.extend({
            FederationClient: y,
            packingSlips: m,
            handlers: v,
            clients: [],
            transports: {},
            filters: { in: {},
                out: {}
            },
            addFilter: function(n) {
                n = e.isArray(n) ? n : [n], e.each(n, function(n) {
                    n.direction = n.direction || d.filterDirection, e.each("both" === n.direction ? ["in", "out"] : [n.direction], function(t) {
                        this.filters[t][n.channel] ? e.include(this.filters[t][n.channel], n.topic) || this.filters[t][n.channel].push(n.topic) : this.filters[t][n.channel] = [n.topic]
                    }, this)
                }, this)
            },
            removeFilter: function(n) {
                n = e.isArray(n) ? n : [n], e.each(n, function(n) {
                    n.direction = n.direction || d.filterDirection, e.each("both" === n.direction ? ["in", "out"] : [n.direction], function(t) {
                        this.filters[t][n.channel] && e.include(this.filters[t][n.channel], n.topic) && (this.filters[t][n.channel] = e.without(this.filters[t][n.channel], n.topic))
                    }, this)
                }, this)
            },
            canSendRemote: function(e, n) {
                return g(e, n, "out")
            },
            configure: function(n) {
                if (n && n.filterMode && "blacklist" !== n.filterMode && "whitelist" !== n.filterMode) throw new Error("postal.fedx filterMode must be 'blacklist' or 'whitelist'.");
                return n && (d = e.defaults(n, h)), d
            },
            getPackingSlip: function(e) {
                if (Object.prototype.hasOwnProperty.call(m, e)) return m[e].apply(this, Array.prototype.slice.call(arguments, 1))
            },
            onFederatedMsg: function(e) {
                if (!u) return void l.push(e);
                if (!Object.prototype.hasOwnProperty.call(v, e.packingSlip.type)) throw new Error("postal.federation does not have a message handler for '" + e.packingSlip.type + "'.");
                v[e.packingSlip.type](e)
            },
            sendMessage: function(n) {
                if (!u) return void f.push(arguments);
                e.each(this.transports, function(e) {
                    e.sendMessage(n)
                })
            },
            disconnect: function(n) {
                n = n || {};
                var t = this.transports;
                n.transport && (t = {}, t[n.transport] = this.transports[n.transport]), e.each(t, function(e) {
                    e.disconnect({
                        target: n.target,
                        instanceId: n.instanceId,
                        doNotNotify: !!n.doNotNotify
                    })
                }, this)
            },
            _getTransports: function() {
                return e.reduce(this.transports, function(e, n, t) {
                    return e[t] = !0, e
                }, {})
            },
            signalReady: function(n, t, r) {
                if (!u) return void p.push(arguments);
                var i = this._getTransports();
                switch (arguments.length) {
                    case 1:
                        "function" == typeof n ? r = n : "string" == typeof n && (i = {}, i[n] = this.transports[n], r = s);
                        break;
                    case 2:
                        "string" == typeof n ? (i = {}, i[n] = this.transports[n]) : i = n, r = t || s;
                        break;
                    case 3:
                        i = {}, i[n] = [t]
                }
                e.each(i, function(e, n) {
                    e = "boolean" == typeof e ? [] : e, this.transports[n].signalReady(e, r)
                }, this)
            }
        }, n.fedx), n.addWireTap(function(e, t) {
            n.fedx.canSendRemote(t.channel, t.topic) && n.fedx.sendMessage(t)
        }), n.subscribe({
            channel: n.configuration.SYSTEM_CHANNEL,
            topic: "instanceId.changed",
            callback: function() {
                for (u = !0; p.length;) o(p.shift());
                for (; f.length;) a(f.shift());
                for (; l.length;) c(l.shift())
            }
        }), n.instanceId() !== i && (u = !0), n
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("xframe", ["lodash", "postal.federation"], function(t, r) {
            return n(t, r, e)
        }) : "object" == typeof module && module.exports ? module.exports = function(e) {
            return n(require("lodash"), e)
        } : e.postal = n(e._, e.postal, e)
    }(this, function(e, n, t, r) {
        function i() {
            v.routeMessage.apply(v, arguments)
        }

        function o(n) {
            for (var t in n) n.hasOwnProperty(t) && ("function" == typeof n[t] && delete n[t], e.isPlainObject(n[t]) && o(n[t]), e.isArray(n[t]) && e.each(n[t], o));
            return n
        }
        var a = location.origin || location.protocol + "//" + location.host,
            c = /MSIE [8,9]/.test(navigator.userAgent),
            s = function(n, t) {
                var r = e.find(this.remotes, function(e) {
                    return e.instanceId === t
                });
                return r && n.push(r), n
            },
            u = function(n, t) {
                var r = e.find(this.remotes, function(e) {
                    return e.target === t
                });
                return r && n.push(r), n
            },
            l = function(e) {
                e.disconnect()
            },
            f = "undefined" == typeof window && postMessage && location,
            p = [],
            h = function() {},
            d = {
                allowedOrigins: [a],
                enabled: !0,
                defaultOriginUrl: "*",
                safeSerialize: !1
            },
            g = e.extend({}, d),
            m = n.fedx.FederationClient.extend({
                transportName: "xframe",
                shouldProcess: function() {
                    var n = !!g.allowedOrigins.length;
                    return g.enabled && ("*" === this.options.origin || n && e.contains(g.allowedOrigins, this.options.origin) || !n || this.options.isWorker && e.contains(p, this.target) || f)
                },
                send: function(e) {
                    var t, r;
                    this.shouldProcess() && (r = f ? null : this.target, t = [n.fedx.transports.xframe.wrapForTransport(e)], this.options.isWorker || f || t.push(this.options.origin), f ? this.target.postMessage.apply(r, t) : 1 === t.length ? this.target.postMessage(t[0]) : this.target.postMessage(t[0], t[1]))
                }
            }, {
                getInstance: function(e, n, t) {
                    var r = new m(e, {
                        origin: n,
                        isWorker: "undefined" != typeof Worker && e instanceof Worker
                    }, t);
                    return r.options.isWorker && v.listenToWorker(r.target), r
                }
            }),
            v = n.fedx.transports.xframe = {
                eagerSerialize: c,
                XFrameClient: m,
                configure: function(n) {
                    return n && (g = e.defaults(e.extend(g, n), d)), g
                },
                clearConfiguration: function() {
                    g = e.extend({}, d)
                },
                getTargets: f ? function() {
                    return [{
                        target: {
                            postMessage: postMessage
                        }
                    }]
                } : function() {
                    var n = e.map(document.getElementsByTagName("iframe"), function(e) {
                        var n = document.createElement("a");
                        n.href = e.src;
                        var t = n.protocol + "//" + n.host;
                        return "//" === t && (t = null), {
                            target: e.contentWindow,
                            origin: t || g.defaultOriginUrl
                        }
                    });
                    return window.parent && window.parent !== window && n.push({
                        target: window.parent,
                        origin: "*"
                    }), n.concat(p)
                },
                remotes: [],
                wrapForTransport: c ? function(e) {
                    return JSON.stringify({
                        postal: !0,
                        packingSlip: e
                    })
                } : function(e) {
                    return {
                        postal: !0,
                        packingSlip: e
                    }
                },
                unwrapFromTransport: function(e) {
                    if ("string" != typeof e || !c && -1 === e.indexOf('"postal":true')) return e;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return {}
                    }
                },
                routeMessage: function(t) {
                    var r = t.source || t.currentTarget,
                        i = this.unwrapFromTransport(t.data);
                    if (i.postal) {
                        "worker" === n.instanceId() && console.log("parsed: " + JSON.stringify(i));
                        var o = e.find(this.remotes, function(e) {
                            return e.target === r
                        });
                        o || (o = m.getInstance(r, t.origin, i.packingSlip.instanceId), this.remotes.push(o)), o.onMessage(i.packingSlip)
                    }
                },
                sendMessage: function(n) {
                    var t = n;
                    g.safeSerialize && (t = o(e.cloneDeep(n))), e.each(this.remotes, function(e) {
                        e.sendMessage(t)
                    })
                },
                disconnect: function(n) {
                    n = n || {};
                    var t = n.instanceId ? e.reduce(e.isArray(n.instanceId) ? n.instanceId : [n.instanceId], s, [], this) : n.target ? e.reduce(e.isArray(n.target) ? n.target : [n.target], u, [], this) : this.remotes;
                    n.doNotNotify || e.each(t, l, this), this.remotes = e.without.apply(null, [this.remotes].concat(t))
                },
                signalReady: function(n, t) {
                    n = e.isArray(n) ? n : [n], n = n.length ? n : this.getTargets(), t = t || h, e.each(n, function(n) {
                        if (n.target) {
                            n.origin = n.origin || g.defaultOriginUrl;
                            var r = e.find(this.remotes, function(e) {
                                return e.target === n.target
                            });
                            r || (r = m.getInstance(n.target, n.origin), this.remotes.push(r)), r.sendPing(t)
                        }
                    }, this)
                },
                addEventListener: f ? function() {
                    addEventListener("message", i)
                } : function(e, n, t, r) {
                    "undefined" != typeof window && ("addEventListener" in e ? e.addEventListener(n, t, r) : e.attachEvent("on" + n, t))
                },
                listenToWorker: function(n) {
                    e.include(p, n) || (n.addEventListener("message", i), p.push(n))
                },
                stopListeningToWorker: function(n) {
                    if (n) n.removeEventListener("message", i), p = e.without(p, n);
                    else
                        for (; p.length;) p.pop().removeEventListener("message", i)
                }
            };
        return v.addEventListener(this, "message", i, !1), n
    }),
    function(e, n) {
        "function" == typeof define && define.amd ? define("request-response", ["lodash", "postal"], function(t, r) {
            return n(t, r, e)
        }) : "object" == typeof module && module.exports ? module.exports = function(e) {
            return n(require("lodash"), e, this)
        } : e.postal = n(e._, e.postal, e)
    }(this, function(e, n, t, r) {
        n.configuration.promise = {
            createDeferred: function() {
                throw new Error("You need to provide an implementation for postal.configuration.promise.createDeferred that returns a deferred/promise instance.")
            },
            getPromise: function() {
                throw new Error("You need to provide an implementation for postal.configuration.promise.getPromise that returns a promise safe for consuming APIs to use.")
            },
            fulfill: "resolve",
            fail: "reject"
        };
        var i = function() {
            for (var e = {}, n = [], t = 0; t < 256; t++) n[t] = (t < 16 ? "0" : "") + t.toString(16);
            return e.create = function() {
                var e = 4294967295 * Math.random() | 0,
                    t = 4294967295 * Math.random() | 0,
                    r = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0;
                return n[255 & e] + n[e >> 8 & 255] + n[e >> 16 & 255] + n[e >> 24 & 255] + "-" + n[255 & t] + n[t >> 8 & 255] + "-" + n[t >> 16 & 15 | 64] + n[t >> 24 & 255] + "-" + n[63 & r | 128] + n[r >> 8 & 255] + "-" + n[r >> 16 & 255] + n[r >> 24 & 255] + n[255 & i] + n[i >> 8 & 255] + n[i >> 16 & 255] + n[i >> 24 & 255]
            }, e
        }();
        n.ChannelDefinition.prototype.request = function(e) {
            var t = e.envelope ? e.envelope : {
                    topic: e.topic,
                    data: e.data,
                    headers: e.headers
                },
                r = i.create(),
                o = e.replyTopic || r,
                a = e.replyChannel || "postal.request-response",
                c = n.configuration.promise.createDeferred();
            t.headers = t.headers || {}, t.headers.replyable = !0, t.headers.requestId = r, t.headers.replyTopic = o, t.headers.replyChannel = a;
            n.subscribe({
                channel: a,
                topic: o,
                callback: function(e, t) {
                    t.headers && t.headers.isError ? c[n.configuration.promise.fail](e) : c[n.configuration.promise.fulfill](e)
                }
            }).once();
            return e.timeout && setTimeout(function() {
                c[n.configuration.promise.fail](new Error("Timeout limit exceeded for request."))
            }, e.timeout), this.publish(t), n.configuration.promise.getPromise(c)
        };
        var o = n.publish;
        return n.publish = function(e) {
            e.headers && e.headers.replyable && (e.reply = function(t, r) {
                n.publish({
                    channel: e.headers.replyChannel,
                    topic: e.headers.replyTopic,
                    headers: {
                        isReply: !0,
                        isError: !!t,
                        requestId: e.headers.requestId,
                        resolverNoCache: !0
                    },
                    data: t || r
                })
            }), o.call(this, e)
        }, n
    }),
    function(e) {
        "use strict";
        if ("function" == typeof bootstrap) bootstrap("promise", e);
        else if ("object" == typeof exports && "object" == typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define("promise", e);
        else if ("undefined" != typeof ses) {
            if (!ses.ok()) return;
            ses.makeQ = e
        } else {
            if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
            var n = "undefined" != typeof window ? window : self,
                t = n.Q;
            n.Q = e(), n.Q.noConflict = function() {
                return n.Q = t, this
            }
        }
    }(function() {
        "use strict";

        function e(e) {
            return function() {
                return J.apply(e, arguments)
            }
        }

        function n(e) {
            return e === Object(e)
        }

        function t(e) {
            return "[object StopIteration]" === ee(e) || e instanceof H
        }

        function r(e, n) {
            if (L && n.stack && "object" == typeof e && null !== e && e.stack && -1 === e.stack.indexOf(ne)) {
                for (var t = [], r = n; r; r = r.source) r.stack && t.unshift(r.stack);
                t.unshift(e.stack);
                var o = t.join("\n" + ne + "\n");
                e.stack = i(o)
            }
        }

        function i(e) {
            for (var n = e.split("\n"), t = [], r = 0; r < n.length; ++r) {
                var i = n[r];
                c(i) || o(i) || !i || t.push(i)
            }
            return t.join("\n")
        }

        function o(e) {
            return -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:")
        }

        function a(e) {
            var n = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
            if (n) return [n[1], Number(n[2])];
            var t = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
            if (t) return [t[1], Number(t[2])];
            var r = /.*@(.+):(\d+)$/.exec(e);
            return r ? [r[1], Number(r[2])] : void 0
        }

        function c(e) {
            var n = a(e);
            if (!n) return !1;
            var t = n[0],
                r = n[1];
            return t === U && r >= z && r <= ae
        }

        function s() {
            if (L) try {
                throw new Error
            } catch (r) {
                var e = r.stack.split("\n"),
                    n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                    t = a(n);
                if (!t) return;
                return U = t[0], t[1]
            }
        }

        function u(e) {
            return e instanceof h ? e : v(e) ? O(e) : x(e)
        }

        function l() {
            function e(e) {
                n = e, o.source = e, K(t, function(n, t) {
                    u.nextTick(function() {
                        e.promiseDispatch.apply(e, t)
                    })
                }, void 0), t = void 0, r = void 0
            }
            var n, t = [],
                r = [],
                i = Q(l.prototype),
                o = Q(h.prototype);
            if (o.promiseDispatch = function(e, i, o) {
                    var a = W(arguments);
                    t ? (t.push(a), "when" === i && o[1] && r.push(o[1])) : u.nextTick(function() {
                        n.promiseDispatch.apply(n, a)
                    })
                }, o.valueOf = function() {
                    if (t) return o;
                    var e = g(n);
                    return m(e) && (n = e), e
                }, o.inspect = function() {
                    return n ? n.inspect() : {
                        state: "pending"
                    }
                }, u.longStackSupport && L) try {
                throw new Error
            } catch (e) {
                o.stack = e.stack.substring(e.stack.indexOf("\n") + 1)
            }
            return i.promise = o, i.resolve = function(t) {
                n || e(u(t))
            }, i.fulfill = function(t) {
                n || e(x(t))
            }, i.reject = function(t) {
                n || e(k(t))
            }, i.notify = function(e) {
                n || K(r, function(n, t) {
                    u.nextTick(function() {
                        t(e)
                    })
                }, void 0)
            }, i
        }

        function f(e) {
            if ("function" != typeof e) throw new TypeError("resolver must be a function.");
            var n = l();
            try {
                e(n.resolve, n.reject, n.notify)
            } catch (e) {
                n.reject(e)
            }
            return n.promise
        }

        function p(e) {
            return f(function(n, t) {
                for (var r = 0, i = e.length; r < i; r++) u(e[r]).then(n, t)
            })
        }

        function h(e, n, t) {
            void 0 === n && (n = function(e) {
                return k(new Error("Promise does not support operation: " + e))
            }), void 0 === t && (t = function() {
                return {
                    state: "unknown"
                }
            });
            var r = Q(h.prototype);
            if (r.promiseDispatch = function(t, i, o) {
                    var a;
                    try {
                        a = e[i] ? e[i].apply(r, o) : n.call(r, i, o)
                    } catch (e) {
                        a = k(e)
                    }
                    t && t(a)
                }, r.inspect = t, t) {
                var i = t();
                "rejected" === i.state && (r.exception = i.reason), r.valueOf = function() {
                    var e = t();
                    return "pending" === e.state || "rejected" === e.state ? r : e.value
                }
            }
            return r
        }

        function d(e, n, t, r) {
            return u(e).then(n, t, r)
        }

        function g(e) {
            if (m(e)) {
                var n = e.inspect();
                if ("fulfilled" === n.state) return n.value
            }
            return e
        }

        function m(e) {
            return e instanceof h
        }

        function v(e) {
            return n(e) && "function" == typeof e.then
        }

        function y(e) {
            return m(e) && "pending" === e.inspect().state
        }

        function b(e) {
            return !m(e) || "fulfilled" === e.inspect().state
        }

        function w(e) {
            return m(e) && "rejected" === e.inspect().state
        }

        function S() {
            te.length = 0, re.length = 0, oe || (oe = !0)
        }

        function _(e, n) {
            oe && ("object" == typeof process && "function" == typeof process.emit && u.nextTick.runAfter(function() {
                -1 !== $(re, e) && (process.emit("unhandledRejection", n, e), ie.push(e))
            }), re.push(e), n && void 0 !== n.stack ? te.push(n.stack) : te.push("(no stack) " + n))
        }

        function C(e) {
            if (oe) {
                var n = $(re, e); - 1 !== n && ("object" == typeof process && "function" == typeof process.emit && u.nextTick.runAfter(function() {
                    var t = $(ie, e); - 1 !== t && (process.emit("rejectionHandled", te[n], e), ie.splice(t, 1))
                }), re.splice(n, 1), te.splice(n, 1))
            }
        }

        function k(e) {
            var n = h({
                when: function(n) {
                    return n && C(this), n ? n(e) : this
                }
            }, function() {
                return this
            }, function() {
                return {
                    state: "rejected",
                    reason: e
                }
            });
            return _(n, e), n
        }

        function x(e) {
            return h({
                when: function() {
                    return e
                },
                get: function(n) {
                    return e[n]
                },
                set: function(n, t) {
                    e[n] = t
                },
                delete: function(n) {
                    delete e[n]
                },
                post: function(n, t) {
                    return null === n || void 0 === n ? e.apply(void 0, t) : e[n].apply(e, t)
                },
                apply: function(n, t) {
                    return e.apply(n, t)
                },
                keys: function() {
                    return Z(e)
                }
            }, void 0, function() {
                return {
                    state: "fulfilled",
                    value: e
                }
            })
        }

        function O(e) {
            var n = l();
            return u.nextTick(function() {
                try {
                    e.then(n.resolve, n.reject, n.notify)
                } catch (e) {
                    n.reject(e)
                }
            }), n.promise
        }

        function I(e) {
            return h({
                isDef: function() {}
            }, function(n, t) {
                return A(e, n, t)
            }, function() {
                return u(e).inspect()
            })
        }

        function E(e, n, t) {
            return u(e).spread(n, t)
        }

        function P(e) {
            return function() {
                function n(e, n) {
                    var a;
                    if ("undefined" == typeof StopIteration) {
                        try {
                            a = r[e](n)
                        } catch (e) {
                            return k(e)
                        }
                        return a.done ? u(a.value) : d(a.value, i, o)
                    }
                    try {
                        a = r[e](n)
                    } catch (e) {
                        return t(e) ? u(e.value) : k(e)
                    }
                    return d(a, i, o)
                }
                var r = e.apply(this, arguments),
                    i = n.bind(n, "next"),
                    o = n.bind(n, "throw");
                return i()
            }
        }

        function T(e) {
            u.done(u.async(e)())
        }

        function M(e) {
            throw new H(e)
        }

        function R(e) {
            return function() {
                return E([this, D(arguments)], function(n, t) {
                    return e.apply(n, t)
                })
            }
        }

        function A(e, n, t) {
            return u(e).dispatch(n, t)
        }

        function D(e) {
            return d(e, function(e) {
                var n = 0,
                    t = l();
                return K(e, function(r, i, o) {
                    var a;
                    m(i) && "fulfilled" === (a = i.inspect()).state ? e[o] = a.value : (++n, d(i, function(r) {
                        e[o] = r, 0 == --n && t.resolve(e)
                    }, t.reject, function(e) {
                        t.notify({
                            index: o,
                            value: e
                        })
                    }))
                }, void 0), 0 === n && t.resolve(e), t.promise
            })
        }

        function j(e) {
            if (0 === e.length) return u.resolve();
            var n = u.defer(),
                t = 0;
            return K(e, function(r, i, o) {
                function a(e) {
                    n.resolve(e)
                }

                function c() {
                    0 === --t && n.reject(new Error("Q can't get fulfillment value from any promise, all promises were rejected."))
                }

                function s(e) {
                    n.notify({
                        index: o,
                        value: e
                    })
                }
                var u = e[o];
                t++, d(u, a, c, s)
            }, void 0), n.promise
        }

        function N(e) {
            return d(e, function(e) {
                return e = Y(e, u), d(D(Y(e, function(e) {
                    return d(e, V, V)
                })), function() {
                    return e
                })
            })
        }

        function G(e) {
            return u(e).allSettled()
        }

        function F(e, n) {
            return u(e).then(void 0, void 0, n)
        }

        function B(e, n) {
            return u(e).nodeify(n)
        }
        var L = !1;
        try {
            throw new Error
        } catch (e) {
            L = !!e.stack
        }
        var U, H, z = s(),
            V = function() {},
            q = function() {
                function e() {
                    for (var e, r; t.next;) t = t.next, e = t.task, t.task = void 0, r = t.domain, r && (t.domain = void 0, r.enter()), n(e, r);
                    for (; c.length;) e = c.pop(), n(e);
                    i = !1
                }

                function n(n, t) {
                    try {
                        n()
                    } catch (n) {
                        if (a) throw t && t.exit(), setTimeout(e, 0), t && t.enter(), n;
                        setTimeout(function() {
                            throw n
                        }, 0)
                    }
                    t && t.exit()
                }
                var t = {
                        task: void 0,
                        next: null
                    },
                    r = t,
                    i = !1,
                    o = void 0,
                    a = !1,
                    c = [];
                return q = function(e) {
                    r = r.next = {
                        task: e,
                        domain: a && process.domain,
                        next: null
                    }, i || (i = !0, o())
                }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick ? (a = !0, o = function() {
                    process.nextTick(e)
                }) : o = "function" == typeof setImmediate ? "undefined" != typeof window ? setImmediate.bind(window, e) : function() {
                    setImmediate(e)
                } : function() {
                    setTimeout(e, 0)
                }, q.runAfter = function(e) {
                    c.push(e), i || (i = !0, o())
                }, q
            }(),
            J = Function.call,
            W = e(Array.prototype.slice),
            K = e(Array.prototype.reduce || function(e, n) {
                var t = 0,
                    r = this.length;
                if (1 === arguments.length)
                    for (;;) {
                        if (t in this) {
                            n = this[t++];
                            break
                        }
                        if (++t >= r) throw new TypeError
                    }
                for (; t < r; t++) t in this && (n = e(n, this[t], t));
                return n
            }),
            $ = e(Array.prototype.indexOf || function(e) {
                for (var n = 0; n < this.length; n++)
                    if (this[n] === e) return n;
                return -1
            }),
            Y = e(Array.prototype.map || function(e, n) {
                var t = this,
                    r = [];
                return K(t, function(i, o, a) {
                    r.push(e.call(n, o, a, t))
                }, void 0), r
            }),
            Q = Object.create || function(e) {
                function n() {}
                return n.prototype = e, new n
            },
            X = e(Object.prototype.hasOwnProperty),
            Z = Object.keys || function(e) {
                var n = [];
                for (var t in e) X(e, t) && n.push(t);
                return n
            },
            ee = e(Object.prototype.toString);
        H = "undefined" != typeof ReturnValue ? ReturnValue : function(e) {
            this.value = e
        };
        var ne = "From previous event:";
        u.resolve = u, u.nextTick = q, u.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (u.longStackSupport = !0), u.defer = l, l.prototype.makeNodeResolver = function() {
            var e = this;
            return function(n, t) {
                n ? e.reject(n) : arguments.length > 2 ? e.resolve(W(arguments, 1)) : e.resolve(t)
            }
        }, u.Promise = f, u.promise = f, f.race = p, f.all = D, f.reject = k, f.resolve = u, u.passByCopy = function(e) {
            return e
        }, h.prototype.passByCopy = function() {
            return this
        }, u.join = function(e, n) {
            return u(e).join(n)
        }, h.prototype.join = function(e) {
            return u([this, e]).spread(function(e, n) {
                if (e === n) return e;
                throw new Error("Q can't join: not the same: " + e + " " + n)
            })
        }, u.race = p, h.prototype.race = function() {
            return this.then(u.race)
        }, u.makePromise = h, h.prototype.toString = function() {
            return "[object Promise]"
        }, h.prototype.then = function(e, n, t) {
            function i(n) {
                try {
                    return "function" == typeof e ? e(n) : n
                } catch (e) {
                    return k(e)
                }
            }

            function o(e) {
                if ("function" == typeof n) {
                    r(e, c);
                    try {
                        return n(e)
                    } catch (e) {
                        return k(e)
                    }
                }
                return k(e)
            }

            function a(e) {
                return "function" == typeof t ? t(e) : e
            }
            var c = this,
                s = l(),
                f = !1;
            return u.nextTick(function() {
                c.promiseDispatch(function(e) {
                    f || (f = !0, s.resolve(i(e)))
                }, "when", [function(e) {
                    f || (f = !0, s.resolve(o(e)))
                }])
            }), c.promiseDispatch(void 0, "when", [void 0, function(e) {
                var n, t = !1;
                try {
                    n = a(e)
                } catch (e) {
                    if (t = !0, !u.onerror) throw e;
                    u.onerror(e)
                }
                t || s.notify(n)
            }]), s.promise
        }, u.tap = function(e, n) {
            return u(e).tap(n)
        }, h.prototype.tap = function(e) {
            return e = u(e), this.then(function(n) {
                return e.fcall(n).thenResolve(n)
            })
        }, u.when = d, h.prototype.thenResolve = function(e) {
            return this.then(function() {
                return e
            })
        }, u.thenResolve = function(e, n) {
            return u(e).thenResolve(n)
        }, h.prototype.thenReject = function(e) {
            return this.then(function() {
                throw e
            })
        }, u.thenReject = function(e, n) {
            return u(e).thenReject(n)
        }, u.nearer = g, u.isPromise = m, u.isPromiseAlike = v, u.isPending = y, h.prototype.isPending = function() {
            return "pending" === this.inspect().state
        }, u.isFulfilled = b, h.prototype.isFulfilled = function() {
            return "fulfilled" === this.inspect().state
        }, u.isRejected = w, h.prototype.isRejected = function() {
            return "rejected" === this.inspect().state
        };
        var te = [],
            re = [],
            ie = [],
            oe = !0;
        u.resetUnhandledRejections = S, u.getUnhandledReasons = function() {
            return te.slice()
        }, u.stopUnhandledRejectionTracking = function() {
            S(), oe = !1
        }, S(), u.reject = k, u.fulfill = x, u.master = I, u.spread = E, h.prototype.spread = function(e, n) {
            return this.all().then(function(n) {
                return e.apply(void 0, n)
            }, n)
        }, u.async = P, u.spawn = T, u.return = M, u.promised = R, u.dispatch = A, h.prototype.dispatch = function(e, n) {
            var t = this,
                r = l();
            return u.nextTick(function() {
                t.promiseDispatch(r.resolve, e, n)
            }), r.promise
        }, u.get = function(e, n) {
            return u(e).dispatch("get", [n])
        }, h.prototype.get = function(e) {
            return this.dispatch("get", [e])
        }, u.set = function(e, n, t) {
            return u(e).dispatch("set", [n, t])
        }, h.prototype.set = function(e, n) {
            return this.dispatch("set", [e, n])
        }, u.del = u.delete = function(e, n) {
            return u(e).dispatch("delete", [n])
        }, h.prototype.del = h.prototype.delete = function(e) {
            return this.dispatch("delete", [e])
        }, u.mapply = u.post = function(e, n, t) {
            return u(e).dispatch("post", [n, t])
        }, h.prototype.mapply = h.prototype.post = function(e, n) {
            return this.dispatch("post", [e, n])
        }, u.send = u.mcall = u.invoke = function(e, n) {
            return u(e).dispatch("post", [n, W(arguments, 2)])
        }, h.prototype.send = h.prototype.mcall = h.prototype.invoke = function(e) {
            return this.dispatch("post", [e, W(arguments, 1)])
        }, u.fapply = function(e, n) {
            return u(e).dispatch("apply", [void 0, n])
        }, h.prototype.fapply = function(e) {
            return this.dispatch("apply", [void 0, e])
        }, u.try = u.fcall = function(e) {
            return u(e).dispatch("apply", [void 0, W(arguments, 1)])
        }, h.prototype.fcall = function() {
            return this.dispatch("apply", [void 0, W(arguments)])
        }, u.fbind = function(e) {
            var n = u(e),
                t = W(arguments, 1);
            return function() {
                return n.dispatch("apply", [this, t.concat(W(arguments))])
            }
        }, h.prototype.fbind = function() {
            var e = this,
                n = W(arguments);
            return function() {
                return e.dispatch("apply", [this, n.concat(W(arguments))])
            }
        }, u.keys = function(e) {
            return u(e).dispatch("keys", [])
        }, h.prototype.keys = function() {
            return this.dispatch("keys", [])
        }, u.all = D, h.prototype.all = function() {
            return D(this)
        }, u.any = j, h.prototype.any = function() {
            return j(this)
        }, u.allResolved = function(e, n, t) {
            return function() {
                return "undefined" != typeof console && "function" == typeof console.warn && console.warn(n + " is deprecated, use " + t + " instead.", new Error("").stack), e.apply(e, arguments)
            }
        }(N, "allResolved", "allSettled"), h.prototype.allResolved = function() {
            return N(this)
        }, u.allSettled = G, h.prototype.allSettled = function() {
            return this.then(function(e) {
                return D(Y(e, function(e) {
                    function n() {
                        return e.inspect()
                    }
                    return e = u(e), e.then(n, n)
                }))
            })
        }, u.fail = u.catch = function(e, n) {
            return u(e).then(void 0, n)
        }, h.prototype.fail = h.prototype.catch = function(e) {
            return this.then(void 0, e)
        }, u.progress = F, h.prototype.progress = function(e) {
            return this.then(void 0, void 0, e)
        }, u.fin = u.finally = function(e, n) {
            return u(e).finally(n)
        }, h.prototype.fin = h.prototype.finally = function(e) {
            if (!e || "function" != typeof e.apply) throw new Error("Q can't apply finally callback");
            return e = u(e), this.then(function(n) {
                return e.fcall().then(function() {
                    return n
                })
            }, function(n) {
                return e.fcall().then(function() {
                    throw n
                })
            })
        }, u.done = function(e, n, t, r) {
            return u(e).done(n, t, r)
        }, h.prototype.done = function(e, n, t) {
            var i = function(e) {
                    u.nextTick(function() {
                        if (r(e, o), !u.onerror) throw e;
                        u.onerror(e)
                    })
                },
                o = e || n || t ? this.then(e, n, t) : this;
            "object" == typeof process && process && process.domain && (i = process.domain.bind(i)), o.then(void 0, i)
        }, u.timeout = function(e, n, t) {
            return u(e).timeout(n, t)
        }, h.prototype.timeout = function(e, n) {
            var t = l(),
                r = setTimeout(function() {
                    n && "string" != typeof n || (n = new Error(n || "Timed out after " + e + " ms"), n.code = "ETIMEDOUT"), t.reject(n)
                }, e);
            return this.then(function(e) {
                clearTimeout(r), t.resolve(e)
            }, function(e) {
                clearTimeout(r), t.reject(e)
            }, t.notify), t.promise
        }, u.delay = function(e, n) {
            return void 0 === n && (n = e, e = void 0), u(e).delay(n)
        }, h.prototype.delay = function(e) {
            return this.then(function(n) {
                var t = l();
                return setTimeout(function() {
                    t.resolve(n)
                }, e), t.promise
            })
        }, u.nfapply = function(e, n) {
            return u(e).nfapply(n)
        }, h.prototype.nfapply = function(e) {
            var n = l(),
                t = W(e);
            return t.push(n.makeNodeResolver()), this.fapply(t).fail(n.reject), n.promise
        }, u.nfcall = function(e) {
            var n = W(arguments, 1);
            return u(e).nfapply(n)
        }, h.prototype.nfcall = function() {
            var e = W(arguments),
                n = l();
            return e.push(n.makeNodeResolver()), this.fapply(e).fail(n.reject), n.promise
        }, u.nfbind = u.denodeify = function(e) {
            if (void 0 === e) throw new Error("Q can't wrap an undefined function");
            var n = W(arguments, 1);
            return function() {
                var t = n.concat(W(arguments)),
                    r = l();
                return t.push(r.makeNodeResolver()), u(e).fapply(t).fail(r.reject), r.promise
            }
        }, h.prototype.nfbind = h.prototype.denodeify = function() {
            var e = W(arguments);
            return e.unshift(this), u.denodeify.apply(void 0, e)
        }, u.nbind = function(e, n) {
            var t = W(arguments, 2);
            return function() {
                function r() {
                    return e.apply(n, arguments)
                }
                var i = t.concat(W(arguments)),
                    o = l();
                return i.push(o.makeNodeResolver()), u(r).fapply(i).fail(o.reject), o.promise
            }
        }, h.prototype.nbind = function() {
            var e = W(arguments, 0);
            return e.unshift(this), u.nbind.apply(void 0, e)
        }, u.nmapply = u.npost = function(e, n, t) {
            return u(e).npost(n, t)
        }, h.prototype.nmapply = h.prototype.npost = function(e, n) {
            var t = W(n || []),
                r = l();
            return t.push(r.makeNodeResolver()), this.dispatch("post", [e, t]).fail(r.reject), r.promise
        }, u.nsend = u.nmcall = u.ninvoke = function(e, n) {
            var t = W(arguments, 2),
                r = l();
            return t.push(r.makeNodeResolver()), u(e).dispatch("post", [n, t]).fail(r.reject), r.promise
        }, h.prototype.nsend = h.prototype.nmcall = h.prototype.ninvoke = function(e) {
            var n = W(arguments, 1),
                t = l();
            return n.push(t.makeNodeResolver()), this.dispatch("post", [e, n]).fail(t.reject), t.promise
        }, u.nodeify = B, h.prototype.nodeify = function(e) {
            if (!e) return this;
            this.then(function(n) {
                u.nextTick(function() {
                    e(null, n)
                })
            }, function(n) {
                u.nextTick(function() {
                    e(n)
                })
            })
        }, u.noConflict = function() {
            throw new Error("Q.noConflict only works when Q is used as a global")
        };
        var ae = s();
        return u
    }), define("kernel/messagebus/MessageBus", ["require", "postal", "postal.federation", "xframe", "request-response", "promise"], function(e) {
        "use strict";

        function n(e) {
            if (0 === arguments.length) throw new Error("Message Bus Configuration Payload cannot be empty, malformed or undefined");
            c.instanceId("Kernel");
            for (var n = [], r = 0; r < e.allowedDomains.length; r++) {
                var i = t(e.allowedDomains[r]);
                n.push(i)
            }
            return c.fedx.transports.xframe.configure({
                allowedOrigins: n,
                defaultOriginUrl: e.defaultOrigin,
                safeSerialize: !0
            }), c.fedx.addFilter(e.channels), c.configuration.promise.createDeferred = function() {
                return s.defer()
            }, c.configuration.promise.getPromise = function(e) {
                return e.promise
            }, c.addWireTap(function(e, n) {}), c.fedx.signalReady(), !0
        }

        function t(e) {
            return e.replace(/^((\w+:)?\/\/[^\/]+\/?).*$/, "$1").replace(/\/$/, "")
        }

        function r(e) {
            c.publish(e)
        }

        function i(e) {
            return c.subscribe(e)
        }

        function o(e, n, t) {
            return c.channel(e.channel).request(e).then(n, t)
        }

        function a(e) {
            c.unsubscribe(e)
        }
        var c = e("postal"),
            s = (e("postal.federation"), e("xframe"), e("request-response"), e("promise"));
        return function() {
            return Object.freeze({
                init: n,
                publish: r,
                subscribe: i,
                unsubscribe: a,
                request: o
            })
        }
    }), define("kernel/bootstrap/FunctionQueue", [], function() {
        "use strict";
        return function() {
            function e(e) {
                function n() {
                    var e = t.shift();
                    e && e.apply(o, i)
                }
                var t = r.slice(0),
                    i = Array.prototype.slice.call(arguments, 0),
                    o = this;
                t.push(e), i[0] = n, n()
            }

            function n(e) {
                r.unshift(e)
            }

            function t(e) {
                r.push(e)
            }
            var r = Array.prototype.slice.call(arguments, 0);
            return Object.freeze({
                execute: e,
                unshift: n,
                push: t
            })
        }
    }), define("kernel/currency/Currency", ["require"], function(e) {
        "use strict";

        function n(e, n) {
            T = Object.freeze(e);
            var t = T.CURRENCY,
                r = "true" === t.MAJOR_SYMBOL_PADDING_SPACE ? " " : "";
            m = t["@language"], g = t["@currencyCode"], k = parseInt(t.DECIMAL_PRECISION), _ = k > 0 ? t.DECIMAL_SEPARATOR : "", y = "left" === t.MAJOR_SYMBOL_ALIGNMENT ? t.MAJOR_SYMBOL + ("true" === t.MAJOR_SYMBOL_PADDING_SPACE ? r : "") : "", b = "right" === t.MAJOR_SYMBOL_ALIGNMENT ? ("true" === t.MAJOR_SYMBOL_PADDING_SPACE ? r : "") + t.MAJOR_SYMBOL : "", w = "left" === t.MINOR_SYMBOL_ALIGNMENT ? t.MINOR_SYMBOL + ("true" === t.MINOR_SYMBOL_PADDING_SPACE ? r : "") : "", S = "right" === t.MINOR_SYMBOL_ALIGNMENT ? ("true" === t.MINOR_SYMBOL_PADDING_SPACE ? r : "") + t.MINOR_SYMBOL : "", x = "yes" === t.MINOR_CURRENCY_LOCK, C = ("yes" === t.USE_THOUSANDS_SEPARATOR ? t.THOUSANDS_SEPARATOR : "").replace("_", " "), I = t.CHIP_SET_CODE, E = T.CHIP_SET_DEFINITIONS.CHIP_SET.CHIP, P = E[0] || 1, E = E.map(function(e) {
                return Math.round(e / P)
            }), O = n || 1
        }

        function t(e, n, t) {
            if (!T) throw new Error("Currency: currency config is required");
            var i = d(e),
                o = y,
                a = b,
                c = _;
            (t || x) && (i = r(i), o = w, a = S, c = "");
            var s, i = i.split("."),
                u = (+i[0]).toString(),
                l = i[1] || "";
            if (C)
                for (; s = u.match(/^(\d+)(\d\d\d)(.*)$/);) u = s[1].concat(C, s[2], s[3]);
            return n = n && 0 === parseInt(l), o.concat(u, n ? "" : c, n ? "" : l, a)
        }

        function r(e) {
            for (var n = 1, t = 0; t < k; t++) n *= 10;
            return (e * n).toFixed(0)
        }

        function i(e, n) {
            return t(c(e), n)
        }

        function o(e) {
            return t(e, !0)
        }

        function a(e) {
            return t(e, !1)
        }

        function c(e) {
            return e / O
        }

        function s(e) {
            if (!T) throw new Error("Currency: currency config is required");
            var n = E.length,
                t = [];
            for (e = Math.round(e * O / P); --n >= 0 && e > 0;)
                for (; e - E[n] >= 0;) t.push(n), e -= E[n];
            return t
        }

        function u(e) {
            for (var n = 0, t = e.length - 1; t >= 0;) n += E[e[t]] * P, t--;
            return c(n)
        }

        function l(e) {
            return e.map(function(e) {
                return E[e] * P
            })
        }

        function f(e, n) {
            var t, r = Math.round(O / P),
                i = [];
            for (n = Math.round(n * O / P) || 1 / 0, t = 0; t < E.length; t++) E[t] >= r && E[t] <= n && 0 < e-- && i.push(t);
            return i
        }

        function p(e) {
            return c(E[e] * P)
        }

        function h(e) {
            e ? n(e) : (T = void 0, g = void 0, m = void 0, v = void 0, y = void 0, b = void 0, w = void 0, S = void 0, _ = void 0, C = void 0, k = void 0, x = void 0, O = void 0, I = void 0, E = void 0, P = void 0)
        }

        function d(e) {
            if (!T) throw new Error("Currency: currency config is required");
            return (e * O).toFixed(k)
        }
        var g, m, v, y, b, w, S, _, C, k, x, O, I, E, P, T;
        return Object.freeze({
            init: n,
            format: t,
            formatChips: s,
            toCurrency: d,
            formatFloat: i,
            formatShort: o,
            formatLong: a,
            chipStackToStakeUnits: u,
            chipStackMapToCurrency: l,
            toStakeUnits: c,
            getPlayChips: f,
            chipToStakeUnits: p,
            getConfig: function() {
                return T
            },
            getCurrencyCode: function() {
                return g
            },
            getLanguage: function() {
                return m
            },
            reset: h
        })
    }), define("kernel/statecontroller/StateController", ["require", "kernel/resizer/Resizer", "kernel/bootstrap/FunctionQueue", "kernel/logger/Logger"], function(e) {
        "use strict";

        function n(e) {
            D = e
        }

        function t(e) {
            throw new Error("State Transition failed.", e)
        }

        function r() {
            return A && A.totalBalance ? A.totalBalance : E ? E.OutcomeDetail.Balance : 0
        }

        function i(e) {
            A = {
                totalBalance: e
            }
        }

        function o(e) {
            var n;
            if (R.serverConfig && R.serverConfig.playMode && "tournament" === R.serverConfig.playMode) {
                n = JSON.parse(JSON.stringify(e));
                var t = +b.toCurrency(e.OutcomeDetail.Payout),
                    r = (+(+e.OutcomeDetail.Balance + t)).toFixed(8);
                return n.Balances["@totalBalance"] = r, n
            }
            return e
        }

        function a(e) {
            if (!k)
                if (E.PromotionalFreeSpin) I.warn("Promotional FreeSpins do not require stake deduction.");
                else {
                    var n = +(r() - e).toFixed(8);
                    c(n)
                }
        }

        function c(e, n) {
            var t = b.formatFloat(Math.max(0, e)),
                r = void 0;
            if (n || (n = E.Balances ? E.Balances.Balance : void 0), n && (r = {}, Array.isArray(n) || (n = [n]), n.forEach(function(e) {
                    r[e["@name"]] = {
                        amount: parseFloat(e["#text"]) || 0,
                        formattedAmount: b.formatFloat(Math.max(0, e["#text"]))
                    }
                })), E.PromotionalFreeSpin) {
                var i = E.PromotionalFreeSpin["@count"];
                h.setPromotionalFreeSpinCount(i), p.setBalance({
                    balance: t,
                    freespin: i,
                    balanceValue: e
                })
            } else h.setBalance(e, t, r), p.setBalance({
                balance: t,
                balanceValue: e
            })
        }

        function s(e) {
            I.log("com.igt.skateboard: " + e, "kernel/StateController")
        }

        function u(e) {
            if (!(e instanceof Function)) throw new Error("wrapped must be a function that is defined in this window");
            return function(n) {
                m = function() {
                    if (!n) throw new Error("com.igt.skateboard: nextState called twice from Game Client.");
                    window.setTimeout(n, 0), n = null
                }, s(e.name), e.apply(void 0, Array.prototype.slice.call(arguments, 1))
            }
        }

        function l(e) {
            var n = e && e.gameList ? e.gameList : [];
            n.forEach(function(e) {
                e.offers.forEach(function(e) {
                    e.freespinBetInCurrency = Number(e.freespin_lines) * Number(e.freespin_bet)
                })
            }), h.registerPFSInfoNotification(n, function(e) {
                console.log("PFS choose ", e);
                var t = {},
                    r = n[e[0]];
                for (var i in r) "gameTitle" !== i && "offers" !== i && (t[i] = r[i]);
                var o = r.offers[e[1]];
                for (var i in o) "freespinBetInCurrency" !== i && (t[i] = o[i]);
                h.onUpdateParams(function(e) {
                    e && Object.keys(e).forEach(function(n) {
                        t[n] = e[n]
                    });
                    var n = "reloadGame";
                    f(t, R.serverConfig.paramRGS, ["softwareid", "language"]) && (p.setSwitchPlayMode("WAGER_TO_PFS", t), n = "switchWagerToPFS"), p.getErrorHandler().doRGSAfterConsole(n, t)
                })
            })
        }

        function f(e, n, t) {
            for (var r = 0; r < t.length;) {
                if (!(e && e.hasOwnProperty(t[r]) && n && n.hasOwnProperty(t[r]))) return !1;
                if (String(e[t[r]]) !== String(n[t[r]])) return !1;
                r++
            }
            return !0
        }
        var p, h, d, g, m, v, y, b, w, S, _, C, k, x = e("kernel/resizer/Resizer"),
            O = e("kernel/bootstrap/FunctionQueue"),
            I = e("kernel/logger/Logger"),
            E = {},
            P = [],
            T = {},
            M = {},
            R = {},
            A = {},
            D = !1,
            j = (Object.freeze({
                onStartGameInitial: {},
                onStartGameInProgressStage: {},
                onStartGameInProgressNextStage: {},
                onBeforeShowStage: {},
                onBeforeRequest: {},
                onMakeRequest: {},
                onAbortNextStage: {},
                onResetNextStage: {},
                onResolveStage: {},
                onExitStage: {},
                onInProgressStage: {},
                onEnterNextStage: {},
                onJackpot: {},
                onEndGame: {},
                onBeginNewGame: {}
            }), Object.freeze({
                callHandler: function(e, n, r) {
                    I.info("game: [ " + e + " ]"), y.request({
                        channel: "ClientService",
                        topic: "StateChange",
                        data: {
                            state: e,
                            nextStage: n,
                            response: r
                        }
                    }, function(e) {
                        s(JSON.stringify(e)), m()
                    }, t)
                }
            })),
            N = function() {
                m()
            },
            G = O.apply(void 0, [function() {
                n(!1), h.beforeInitGame(function(e) {
                    v = e, s("Used Cashier: " + v), N()
                })
            }, function() {
                p.initrequest(function(e) {
                    E = JSON.parse(JSON.stringify(e.gamelogicresponse)), T = JSON.parse(JSON.stringify(e.paytableresponse)), M = JSON.parse(JSON.stringify(e.currencyresponse)), q(e), N()
                })
            }, function() {
                p.clearSwitchPlayMode(), N()
            }, function() {
                i(E.OutcomeDetail.Balance), N()
            }, function() {
                h.showAnyMessages(N)
            }, function() {
                if (E.PromotionalFreeSpin) {
                    var e = {
                        freespin_lines: R.serverConfig.freespin_lines,
                        freespin_bet: R.serverConfig.freespin_bet,
                        freespin_num: R.serverConfig.freespin_num
                    };
                    T.PatternSliderInfo && T.PatternSliderInfo.PatternInfo && (T.PatternSliderInfo.PatternInfo["@min"] = e.freespin_lines, T.PatternSliderInfo.PatternInfo["@max"] = e.freespin_lines, T.PatternSliderInfo.PatternInfo.Step = [e.freespin_lines])
                }
                E.Tournament && R.serverConfig.paramRGS.tournamentLines && "0" !== R.serverConfig.paramRGS.tournamentLines && (T.PatternSliderInfo.PatternInfo["@min"] = R.serverConfig.paramRGS.tournamentLines, T.PatternSliderInfo.PatternInfo["@max"] = R.serverConfig.paramRGS.tournamentLines, T.PatternSliderInfo.PatternInfo.Step = [R.serverConfig.paramRGS.tournamentLines]), g && g.setGameInActive(!0), h.initOutcome(E, N)
            }, function() {
                y.subscribe({
                    channel: "Game",
                    topic: "Game.InitDone",
                    callback: function(e, n) {
                        S ? h.sendMessage("gameversion", S) : h.sendMessage("gameversion", e.version), N()
                    }
                });
                var e = {
                    GameLogicResponse: E,
                    PaytableResponse: T,
                    CurrencyResponse: M
                };
                y.publish({
                    channel: "ClientService",
                    topic: "Game.Init",
                    data: e
                })
            }, function() {
                h.registerControls(N)
            }, function() {
                J(P), N()
            }, function() {
                c(E.OutcomeDetail.Balance), "InProgress" === E.OutcomeDetail.GameStatus ? (j.callHandler("onBeforeShowStage", E.OutcomeDetail.Stage, E), h.enableConsoleControls(!1)) : j.callHandler("onBeforeShowStage", E.OutcomeDetail.NextStage, E)
            }, function() {
                h.gameReady(function() {
                    d(), N()
                })
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus ? (n(!0), g && g.setGameInProgress(!0), p.setGameInProgress(!0), h.sendMessage("wagerIsStarting"), j.callHandler("onStartGameInProgressStage", E.OutcomeDetail.Stage, E)) : (g && g.setGameInProgress(!1), p.setGameInProgress(!1), N())
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus ? j.callHandler("onStartGameInProgressNextStage", E.OutcomeDetail.NextStage, E) : N()
            }, function() {
                _.setGameLogicResponse(E), _.postGameLaunched(R.serverConfig.denomamount), "Initial" === E.OutcomeDetail.GameStatus ? (n(!1), j.callHandler("onStartGameInitial", E.OutcomeDetail.NextStage, E), h.enableConsoleControls(!0)) : N()
            }].map(u)),
            F = O.apply(void 0, [function() {
                n(!1), p.getSwitchPlayMode() ? N() : h.onUpdateParams(N)
            }, function() {
                g ? g.reInit(N) : N()
            }, function() {
                h.clearMessage(), N()
            }, function() {
                p.reLaunchrequest(N)
            }, function() {
                p.clearSwitchPlayMode(), W(), N()
            }, function() {
                p.initrequest(function(e) {
                    E = JSON.parse(JSON.stringify(e.gamelogicresponse)), T = JSON.parse(JSON.stringify(e.paytableresponse)), M = JSON.parse(JSON.stringify(e.currencyresponse)), q(e), N()
                })
            }, function() {
                i(E.OutcomeDetail.Balance), N()
            }, function() {
                h.showAnyMessages(N)
            }, function() {
                if (E.PromotionalFreeSpin) {
                    var e = {
                        freespin_lines: R.serverConfig.freespin_lines,
                        freespin_bet: R.serverConfig.freespin_bet,
                        freespin_num: R.serverConfig.freespin_num
                    };
                    T.PatternSliderInfo && T.PatternSliderInfo.PatternInfo && (T.PatternSliderInfo.PatternInfo["@min"] = e.freespin_lines, T.PatternSliderInfo.PatternInfo["@max"] = e.freespin_lines, T.PatternSliderInfo.PatternInfo.Step = [e.freespin_lines])
                }
                g && g.setGameInActive(!0), h.initOutcome(E, N)
            }, function() {
                var e = y.subscribe({
                        channel: "Game",
                        topic: "Game.ReInitDone",
                        callback: function(n, t) {
                            S ? h.sendMessage("gameversion", S) : h.sendMessage("gameversion", n.version), y.unsubscribe(e), N()
                        }
                    }),
                    n = {
                        GameLogicResponse: E,
                        CurrencyResponse: M,
                        PaytableResponse: T
                    };
                y.publish({
                    channel: "ClientService",
                    topic: "Game.ReInit",
                    data: n
                })
            }, function() {
                P && P.length > 0 ? J(P) : l(), N()
            }, function() {
                c(E.OutcomeDetail.Balance), "InProgress" === E.OutcomeDetail.GameStatus ? (j.callHandler("onBeforeShowStage", E.OutcomeDetail.Stage, E),
                    h.enableConsoleControls(!1)) : j.callHandler("onBeforeShowStage", E.OutcomeDetail.NextStage, E)
            }, function() {
                h.gameReady(function() {
                    d(), N()
                })
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus ? (n(!0), g && g.setGameInProgress(!0), p.setGameInProgress(!0), h.sendMessage("wagerIsStarting"), j.callHandler("onStartGameInProgressStage", E.OutcomeDetail.Stage, E)) : (g && g.setGameInProgress(!1), p.setGameInProgress(!1), N())
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus ? j.callHandler("onStartGameInProgressNextStage", E.OutcomeDetail.NextStage, E) : N()
            }, function() {
                "Initial" === E.OutcomeDetail.GameStatus ? (j.callHandler("onStartGameInitial", E.OutcomeDetail.NextStage, E), h.enableConsoleControls(!0)) : N()
            }].map(u)),
            B = 0,
            L = 0,
            U = O.apply(void 0, [function() {
                n(!1), h.isGamePaused() ? (console.warn("com.igt.game: waiting for unPause"), h.setUnPauseGame(N)) : N()
            }, function() {
                n(!1), h.isReplayPaused() ? (console.warn("com.igt.game: waiting for replay unPause"), h.setUnPauseReplay(N)) : N()
            }, function() {
                p.isReplayEnd() || N()
            }, function() {
                p.checkPlayPermitted(N, function() {
                    z.execute(U.execute)
                })
            }, function() {
                g && g.setInGameRound(!0, "wagerStarted"), h.wagerStarted(N, function() {
                    z.execute(U.execute)
                })
            }, function() {
                "InProgress" !== E.OutcomeDetail.GameStatus && (B = Date.now()), j.callHandler("onBeforeRequest", E.OutcomeDetail.NextStage, E)
            }, function() {
                j.callHandler("onMakeRequest", E.OutcomeDetail.NextStage, E)
            }, function() {
                "replay" !== R.serverConfig.playMode && !0 === R.serverConfig.blockInsufficientFund && "T" === R.gameConfig.gameType && C && C > 0 ? p.getPlayerBalance(function(e) {
                    Number(e["@totalBalance"]) >= C ? N() : p.throwInsufficientFoundError(N)
                }, function() {
                    r() >= C ? N() : p.throwInsufficientFoundError(N)
                }) : N()
            }, function() {
                p.playrequest(function(e) {
                    E = e.RGSResponse.GameLogicResponse, e.ExtraInfo && (P.push(JSON.parse(JSON.stringify(e.ExtraInfo))), J(P)), E.TransactionId ? H.execute(U.execute) : (I.warn("com.igt.skateboard: Transaction was aborted"), z.execute(U.execute))
                })
            }].map(u)),
            H = O.apply(void 0, [function() {
                i(E.OutcomeDetail.Balance), N()
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus && E.OutcomeDetail.Stage !== E.OutcomeDetail.NextStage ? (g && (g.setGameInProgress(!0), g.setInGameRound(!0, "onAllowInterruptedMessage")), p.setGameInProgress(!0), h.setAllowInterruptedMessage(!0), h.enableConsoleControls(!1), h.hasInterruptedMessage() ? h.showAnyMessages(N) : N()) : (g && g.setGameInProgress(!1), N())
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus && "Scenario" === E.OutcomeDetail.Stage ? (h.gameOutcome(E), c(E.OutcomeDetail.Balance)) : R.serverConfig.paramRGS && R.serverConfig.paramRGS.wagerType && "TRY" === R.serverConfig.paramRGS.wagerType || c(R.serverConfig && R.serverConfig.playMode && "tournament" === R.serverConfig.playMode ? E.OutcomeDetail.Balance : +(E.OutcomeDetail.Balance - b.toCurrency(E.OutcomeDetail.Payout)).toFixed(8)), j.callHandler("onResolveStage", E.OutcomeDetail.Stage, o(E))
            }, function() {
                g && g.setGameInActive(!0), R.serverConfig.paramRGS && R.serverConfig.paramRGS.wagerType && R.serverConfig.paramRGS.wagerType, h.gameOutcome(E, N)
            }, function() {
                J(P), N()
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus && E.OutcomeDetail.Stage === E.OutcomeDetail.NextStage ? (g && g.setGameInProgress(!0), p.setGameInProgress(!0), j.callHandler("onInProgressStage", E.OutcomeDetail.Stage, o(E))) : (g && g.setGameInProgress(!1), N())
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus ? function(e) {
                    g && g.isCompetitionActive() && g.hasQueuedPDAwardMessages() ? g.showQueuedPDAwardMessages(e) : e()
                }(N) : N()
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus && E.OutcomeDetail.Stage !== E.OutcomeDetail.NextStage && h.hasInterruptedMessage() ? h.showAnyMessages(N) : N()
            }, function() {
                E.OutcomeDetail.Stage !== E.OutcomeDetail.NextStage ? (n(!0), g && g.setInGameRound(!0, "onExitStage"), j.callHandler("onExitStage", E.OutcomeDetail.Stage, E)) : N()
            }, function() {
                E.OutcomeDetail.Stage !== E.OutcomeDetail.NextStage ? (n(!0), j.callHandler("onEnterNextStage", E.OutcomeDetail.NextStage, E)) : N()
            }, function() {
                n(!1), h.setAllowInterruptedMessage(!1), g && g.setInGameRound(!0, "offAllowInterruptedMessage"), N()
            }, function() {
                "Start" === E.OutcomeDetail.GameStatus ? (n(!1), c(E.OutcomeDetail.Balance), j.callHandler("onEndGame", E.OutcomeDetail.NextStage, E), h.enableConsoleControls(!0)) : N()
            }, function() {
                "InProgress" === E.OutcomeDetail.GameStatus ? N() : p.handleBoltOn(E.OutcomeDetail.TransactionId, function(e) {
                    e && p.silentBalanceUpdate(function(e, n) {
                        e && (i(e), c(e, n))
                    }), N()
                })
            }, function() {
                g && "InProgress" !== E.OutcomeDetail.GameStatus && g.setInGameRound(!1, "beforeShowMessage"), N()
            }, function() {
                "InProgress" !== E.OutcomeDetail.GameStatus || h.hasInterruptedMessage() ? h.showAnyMessages(N) : N()
            }, function() {
                g && "InProgress" !== E.OutcomeDetail.GameStatus && g.setInGameRound(!1, "afterShowMessage"), N()
            }, function() {
                "InProgress" !== E.OutcomeDetail.GameStatus ? (n(!1), h.wagerComplete(N), g && (g.setInGameRound(!1, "wagerComplete"), g.setGameInProgress(!1, "wagerComplete")), p.setGameInProgress(!1)) : N()
            }, function() {
                if (h.isGameHalted()) return n(!1), void console.warn("com.igt.game: Halt");
                h.isGamePaused() ? (n(!1), console.warn("com.igt.game: waiting for unPause - console"), h.setUnPauseGame(N)) : N()
            }, function() {
                L && "InProgress" !== E.OutcomeDetail.GameStatus ? setTimeout(N, Math.max(0, L - (Date.now() - B))) : N()
            }, function() {
                C && C > 0 && (C = 0), N()
            }, function() {
                n(!1), "Start" === E.OutcomeDetail.GameStatus ? (c(E.OutcomeDetail.Balance), j.callHandler("onBeginNewGame", E.OutcomeDetail.NextStage, E)) : N()
            }].map(u)),
            z = O.apply(void 0, [function() {
                i(E.OutcomeDetail.Balance), N()
            }, function() {
                n(!1), c(E.OutcomeDetail.Balance), j.callHandler("onAbortNextStage", E.OutcomeDetail.NextStage, E)
            }, function() {
                g && g.setInGameRound(!1, "wagerAborted"), h.wagerAborted(N)
            }, function() {
                h.showAnyMessages(N)
            }, function() {
                j.callHandler("onResetNextStage", E.OutcomeDetail.NextStage, E)
            }].map(u)),
            V = function(e, n) {
                "insufficientFundsNotification" === e["@name"] ? (E && h.sendOutcome(E), h.insufficientFundsNotification(function() {
                    n()
                })) : "viewAccountHistory" === e["@name"] ? h.viewAccountHistory(e.Param, function(t) {
                    n(e["@name"], void 0 === t || t ? e.Param : void 0)
                }) : "abort" === e["@name"] ? z && U ? z.execute(U.execute) : h.doMessageCommand(e, n) : "pfsReload" === e["@name"] || "tournamentReload" === e["@name"] ? h.onUpdateParams(function(t) {
                    var r = e.Param;
                    t && Object.keys(t).forEach(function(e) {
                        r[e] = t[e]
                    }), "pfsReload" === e["@name"] && p.setSwitchPlayMode("PFS_TO_WAGER", r), n(e["@name"], r)
                }) : h.doMessageCommand(e, n)
            },
            q = function(e) {
                e.extraInfo && Array.isArray(e.extraInfo) && (P = JSON.parse(JSON.stringify(e.extraInfo)))
            },
            J = function(e) {
                for (var n = 0; n < e.length; n++) {
                    var t = e.shift();
                    t.hasOwnProperty("pfsNotification") && l(t.pfsNotification)
                }
            },
            W = function() {
                P = []
            };
        return function(e, n) {
            function t(e) {
                function n(e, n) {
                    var i = r.indexOf(e.success);
                    i < 0 ? console.warn(e.success, " is not the service must be updated") : r.splice(i, 1), 0 === r.length && (y.unsubscribe(t), F.execute(U.execute))
                }
                var t, r = ["ClientService", "ConsoleService"];
                t = y.subscribe({
                    channel: "Kernel",
                    topic: "Kernel.UpdateConfig.Ack",
                    callback: n
                }), y.publish({
                    channel: "Kernel",
                    topic: "Kernel.UpdateConfig",
                    data: e
                })
            }
            if (!e) throw new Error("com.igt.skateboard: StateController initialize error: config parameter required");
            if (!(n instanceof Function)) throw new Error("com.ig.skateboard: StateController initialize error: no done continuation passed in constructor");
            y = e.bus(), b = e.currency, R = e.clientconfig, w = R.gameConfig.gameType, R.serverConfig.transactionDelay && "S" === R.gameConfig.gameType && (L = 1e3 * Number(R.serverConfig.transactionDelay)), R.gameConfig.clientVersion && R.gameConfig.gleVersion && (S = {
                gameVersion: R.gameConfig.clientVersion,
                gleVersion: R.gameConfig.gleVersion
            }), h = e.consoleservice, p = e.clientservice(), g = e.gameservice, d = e.reveal, _ = e.cecCommand, x.setCECCommand(_), y.subscribe({
                channel: "ClientService",
                topic: "System.ErrorHandlerReady",
                callback: function(e, n) {
                    p.getErrorHandler().setErrorFlowHandler(V), h.connectActionRunner(p.getErrorHandler().doRGSAfterConsole)
                }
            }), y.subscribe({
                channel: "Kernel",
                topic: "System.Ready",
                callback: function(e, n) {
                    G.execute(U.execute)
                }
            }), y.subscribe({
                channel: "Game",
                topic: "Game.DeductStake",
                callback: function(e, n) {
                    C = e, console.log("Game stake is: ", C), a(e)
                }
            }), y.subscribe({
                channel: "ConsoleService",
                topic: "Option.StakeDeduction",
                callback: function(e) {
                    k = !e.enabled
                }
            }), y.subscribe({
                channel: "ConsoleService",
                topic: "BalanceUpdate",
                callback: function(e, n) {
                    e && e.balance && !isNaN(e.balanceValue) && (i(e.balanceValue), p.silentBalanceUpdate(function(e, n) {
                        e && (i(e), c(e, n))
                    }))
                }
            }), y.subscribe({
                channel: "Game",
                topic: "Game.ReInit",
                callback: t
            }), y.subscribe({
                channel: "Game",
                topic: "DeferredLoadProgress",
                callback: function(e, n) {
                    e.fail && D ? y.publish({
                        channel: "Kernel",
                        topic: "ErrorHandler.Throw",
                        data: {
                            errorCode: "FT-002",
                            priority: 0
                        }
                    }) : console.warn("Deferred load progress error thrown during state where game is not in control.")
                }
            }), y.subscribe({
                channel: "GameService",
                topic: "GameService.PromotionFreespinMessage",
                callback: l
            }), n()
        }
    }), define("kernel/bootstrap/Bootstrap", ["require", "kernel/clientconfig/ClientConfig", "kernel/subsystem/SubsystemManager", "kernel/logger/Logger", "kernel/messagebus/MessageBus", "kernel/bootstrap/FunctionQueue", "kernel/currency/Currency", "kernel/statecontroller/StateController"], function(e) {
        "use strict";

        function n(e) {
            g = e, w = document.createElement("div"), S = document.createElement("div"), C = C(), O(r, i, o, a, l, s, u, t, c, h, p).execute()
        }

        function t(e) {
            d.body = g, d.container = w, d.gameContainer = S, C.create(d, function() {
                e()
            })
        }

        function r(e) {
            _.load(function(n) {
                d = n, e()
            })
        }

        function i(e) {
            x = x();
            var n = [window.location.origin, d.serverConfig.gameUrl, d.serverConfig.server, d.kernelConfig.splashUrl];
            ["TCustomView", "BCustomView", "LCustomView", "RCustomView"].forEach(function(e) {
                d.consoleConfig[e] && n.push(d.consoleConfig[e].consoleUrl)
            }), x.init({
                allowedDomains: n,
                defaultOrigin: window.location.origin,
                channels: [{
                    channel: "Kernel",
                    topic: "#",
                    direction: "both"
                }, {
                    channel: "ClientService",
                    topic: "#",
                    direction: "both"
                }, {
                    channel: "ConsoleService",
                    topic: "#",
                    direction: "both"
                }, {
                    channel: "Game",
                    topic: "#",
                    direction: "both"
                }, {
                    channel: "postal.request-response",
                    topic: "#",
                    direction: "both"
                }, {
                    channel: "GameService",
                    topic: "#",
                    direction: "both"
                }]
            }), b = function() {
                return Object.freeze({
                    publish: x.publish,
                    subscribe: x.subscribe,
                    unsubscribe: x.unsubscribe,
                    request: x.request
                })
            }, e()
        }

        function o(e) {
            var n = d && d.kernelConfig && d.kernelConfig.loglevel ? d.kernelConfig.loglevel : "DEBUG",
                t = !0;
            "NONE" === n && (t = !1), k.init({
                bus: b,
                logConfig: {
                    logLevel: n,
                    turnOn: t
                }
            }), e()
        }

        function a(e) {
            C.init(x, {
                gsEnabled: !!d && d.hasOwnProperty("gameServiceConfig")
            }, function() {
                e()
            })
        }

        function c(e) {
            C.load(function(e, n) {
                v.connector.onloadConsole(e, n), C.setCECCommand(m.getCECCommand())
            }, function() {
                e()
            })
        }

        function s(n) {
            e(["clientservice"], function() {
                e(["clientservice/main"], function(e) {
                    m = e(), m.load({
                        bus: b,
                        currency: I,
                        root: w,
                        gameRoot: S,
                        logger: k,
                        consoleconnect: v.connector,
                        assetPack: d.serverConfig.paramGame.assetPack,
                        clientConfig: d
                    }, function() {
                        n()
                    })
                })
            }, f)
        }

        function u(n) {
            d.hasOwnProperty("gameServiceConfig") ? e(["gameservice"], function() {
                e(["gameservice/main"], function(e) {
                    y = e(), y.load({
                        bus: b,
                        root: w,
                        currency: I,
                        logger: k
                    }, function() {
                        n()
                    })
                })
            }, f) : n()
        }

        function l(n) {
            e(["consoleservice"], function() {
                e(["consoleservice/main"], function(e) {
                    v = e(), v.load({
                        bus: b,
                        currency: I,
                        root: w,
                        logger: k
                    }, function() {
                        n()
                    })
                })
            }, f)
        }

        function f(e) {
            console.warn("com.igt.skateboard:", e)
        }

        function p(e) {
            v.setCECCommand(m.getCECCommand()), e()
        }

        function h(e) {
            var n = {
                serverConfig: d.serverConfig,
                gameConfig: d.gameConfig
            };
            E({
                bus: b,
                clientconfig: n,
                consoleservice: v.connector,
                clientservice: m.controller,
                gameservice: y ? y.controller : void 0,
                reveal: C.reveal,
                currency: I,
                cecCommand: m.getCECCommand()
            }, function() {
                e()
            })
        }
        var d, g, m, v, y, b, w, S, _ = e("kernel/clientconfig/ClientConfig"),
            C = e("kernel/subsystem/SubsystemManager"),
            k = e("kernel/logger/Logger"),
            x = e("kernel/messagebus/MessageBus"),
            O = e("kernel/bootstrap/FunctionQueue"),
            I = e("kernel/currency/Currency"),
            E = e("kernel/statecontroller/StateController");
        return function() {
            return Object.freeze({
                init: n,
                loadConfig: r,
                loadBus: i,
                loadConsoleService: l,
                loadClientService: s,
                initLogger: o,
                initSubsystem: a,
                createDOM: t,
                loadSubsystems: c
            })
        }
    }), require(["kernel/bootstrap/Bootstrap"], function(e) {
        e = e(), e.init(document.body)
    }, function(e) {
        console.warn(e.requireModules && e.requireModules[0])
    }), requirejs.config({
        catchError: !0
    }), requirejs.onError = function(e) {
        if ("timeout" !== e.requireType && "scripterror" !== e.requireType) throw console.warn(e), e;
        console.warn(e)
    }, define("kernel/main", function() {});
//# sourceMappingURL=kernel.js.map