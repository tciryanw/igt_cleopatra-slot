! function e(t, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(s, !0);
                if (o) return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var l = n[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                var n = t[s][1][e];
                return i(n || e)
            }, l, l.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
    return i
}({
    1: [function(e, t, n) {
        "use strict";
        e("./index").polyfill()
    }, {
        "./index": 2
    }],
    2: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), r = 1; r < arguments.length; r++) {
                var i = arguments[r];
                if (void 0 !== i && null !== i)
                    for (var o = Object.keys(Object(i)), s = 0, a = o.length; s < a; s++) {
                        var c = o[s],
                            u = Object.getOwnPropertyDescriptor(i, c);
                        void 0 !== u && u.enumerable && (n[c] = i[c])
                    }
            }
            return n
        }

        function i() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: r
            })
        }
        t.exports = {
            assign: r,
            polyfill: i
        }
    }, {}]
}, {}, [1]), define("objectAssignAuto", function() {}),
    function(e) {
        "use strict";

        function t(e, t, n) {
            return t <= e && e <= n
        }

        function n(e, t) {
            return -1 !== e.indexOf(t)
        }

        function r(e) {
            if (void 0 === e) return {};
            if (e === Object(e)) return e;
            throw TypeError("Could not convert argument to dictionary")
        }

        function i(e) {
            for (var t = String(e), n = t.length, r = 0, i = []; r < n;) {
                var o = t.charCodeAt(r);
                if (o < 55296 || o > 57343) i.push(o);
                else if (56320 <= o && o <= 57343) i.push(65533);
                else if (55296 <= o && o <= 56319)
                    if (r === n - 1) i.push(65533);
                    else {
                        var s = t.charCodeAt(r + 1);
                        if (56320 <= s && s <= 57343) {
                            var a = 1023 & o,
                                c = 1023 & s;
                            i.push(65536 + (a << 10) + c), r += 1
                        } else i.push(65533)
                    }
                r += 1
            }
            return i
        }

        function o(e) {
            for (var t = "", n = 0; n < e.length; ++n) {
                var r = e[n];
                r <= 65535 ? t += String.fromCharCode(r) : (r -= 65536, t += String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r)))
            }
            return t
        }

        function s(e) {
            return 0 <= e && e <= 127
        }

        function a(e) {
            this.tokens = [].slice.call(e), this.tokens.reverse()
        }

        function c(e, t) {
            if (e) throw TypeError("Decoder error");
            return t || 65533
        }

        function u(e) {
            throw TypeError("The code point " + e + " could not be encoded.")
        }

        function l() {}

        function f() {}

        function d(e) {
            return e = String(e).trim().toLowerCase(), Object.prototype.hasOwnProperty.call(K, e) ? K[e] : null
        }

        function p(e, t) {
            return t ? t[e] || null : null
        }

        function h(e, t) {
            var n = t.indexOf(e);
            return -1 === n ? null : n
        }

        function m(t) {
            if (!("encoding-indexes" in e)) throw Error("Indexes missing. Did you forget to include encoding-indexes.js first?");
            return e["encoding-indexes"][t]
        }

        function g(e) {
            if (e > 39419 && e < 189e3 || e > 1237575) return null;
            if (7457 === e) return 59335;
            var t, n = 0,
                r = 0,
                i = m("gb18030-ranges");
            for (t = 0; t < i.length; ++t) {
                var o = i[t];
                if (!(o[0] <= e)) break;
                n = o[0], r = o[1]
            }
            return r + e - n
        }

        function b(e) {
            if (59335 === e) return 7457;
            var t, n = 0,
                r = 0,
                i = m("gb18030-ranges");
            for (t = 0; t < i.length; ++t) {
                var o = i[t];
                if (!(o[1] <= e)) break;
                n = o[1], r = o[0]
            }
            return r + e - n
        }

        function v(e) {
            return Q = Q || m("jis0208").map(function(e, n) {
                return t(n, 8272, 8835) ? null : e
            }), Q.indexOf(e)
        }

        function y(e) {
            Y = Y || m("big5").map(function(e, t) {
                return t < 5024 ? null : e
            });
            var t = Y;
            return 9552 === e || 9566 === e || 9569 === e || 9578 === e || 21313 === e || 21317 === e ? t.lastIndexOf(e) : h(e, t)
        }

        function w(e, t) {
            if (!(this instanceof w)) throw TypeError("Called as a function. Did you forget 'new'?");
            e = void 0 !== e ? String(e) : Z, t = r(t), this._encoding = null, this._decoder = null, this._ignoreBOM = !1, this._BOMseen = !1, this._error_mode = "replacement", this._do_not_flush = !1;
            var n = d(e);
            if (null === n || "replacement" === n.name) throw RangeError("Unknown encoding: " + e);
            if (!X[n.name]) throw Error("Decoder not present. Did you forget to include encoding-indexes.js first?");
            var i = this;
            return i._encoding = n, Boolean(t.fatal) && (i._error_mode = "fatal"), Boolean(t.ignoreBOM) && (i._ignoreBOM = !0), Object.defineProperty || (this.encoding = i._encoding.name.toLowerCase(), this.fatal = "fatal" === i._error_mode, this.ignoreBOM = i._ignoreBOM), i
        }

        function _(t, n) {
            if (!(this instanceof _)) throw TypeError("Called as a function. Did you forget 'new'?");
            n = r(n), this._encoding = null, this._encoder = null, this._do_not_flush = !1, this._fatal = Boolean(n.fatal) ? "fatal" : "replacement";
            var i = this;
            if (Boolean(n.NONSTANDARD_allowLegacyEncoding)) {
                t = void 0 !== t ? String(t) : Z;
                var o = d(t);
                if (null === o || "replacement" === o.name) throw RangeError("Unknown encoding: " + t);
                if (!$[o.name]) throw Error("Encoder not present. Did you forget to include encoding-indexes.js first?");
                i._encoding = o
            } else i._encoding = d("utf-8"), void 0 !== t && "console" in e && console.warn("TextEncoder constructor called with encoding label, which is ignored.");
            return Object.defineProperty || (this.encoding = i._encoding.name.toLowerCase()), i
        }

        function C(e) {
            var n = e.fatal,
                r = 0,
                i = 0,
                o = 0,
                s = 128,
                a = 191;
            this.handler = function(e, u) {
                if (u === z && 0 !== o) return o = 0, c(n);
                if (u === z) return J;
                if (0 === o) {
                    if (t(u, 0, 127)) return u;
                    if (t(u, 194, 223)) o = 1, r = 31 & u;
                    else if (t(u, 224, 239)) 224 === u && (s = 160), 237 === u && (a = 159), o = 2, r = 15 & u;
                    else {
                        if (!t(u, 240, 244)) return c(n);
                        240 === u && (s = 144), 244 === u && (a = 143), o = 3, r = 7 & u
                    }
                    return null
                }
                if (!t(u, s, a)) return r = o = i = 0, s = 128, a = 191, e.prepend(u), c(n);
                if (s = 128, a = 191, r = r << 6 | 63 & u, (i += 1) !== o) return null;
                var l = r;
                return r = o = i = 0, l
            }
        }

        function S(e) {
            e.fatal;
            this.handler = function(e, n) {
                if (n === z) return J;
                if (W(n)) return n;
                var r, i;
                t(n, 128, 2047) ? (r = 1, i = 192) : t(n, 2048, 65535) ? (r = 2, i = 224) : t(n, 65536, 1114111) && (r = 3, i = 240);
                for (var o = [(n >> 6 * r) + i]; r > 0;) {
                    var s = n >> 6 * (r - 1);
                    o.push(128 | 63 & s), r -= 1
                }
                return o
            }
        }

        function O(e, t) {
            var n = t.fatal;
            this.handler = function(t, r) {
                if (r === z) return J;
                if (s(r)) return r;
                var i = e[r - 128];
                return null === i ? c(n) : i
            }
        }

        function x(e, t) {
            t.fatal;
            this.handler = function(t, n) {
                if (n === z) return J;
                if (W(n)) return n;
                var r = h(n, e);
                return null === r && u(n), r + 128
            }
        }

        function E(e) {
            var n = e.fatal,
                r = 0,
                i = 0,
                o = 0;
            this.handler = function(e, a) {
                if (a === z && 0 === r && 0 === i && 0 === o) return J;
                a !== z || 0 === r && 0 === i && 0 === o || (r = 0, i = 0, o = 0, c(n));
                var u;
                if (0 !== o) {
                    u = null, t(a, 48, 57) && (u = g(10 * (126 * (10 * (r - 129) + i - 48) + o - 129) + a - 48));
                    var l = [i, o, a];
                    return r = 0, i = 0, o = 0, null === u ? (e.prepend(l), c(n)) : u
                }
                if (0 !== i) return t(a, 129, 254) ? (o = a, null) : (e.prepend([i, a]), r = 0, i = 0, c(n));
                if (0 !== r) {
                    if (t(a, 48, 57)) return i = a, null;
                    var f = r,
                        d = null;
                    r = 0;
                    var h = a < 127 ? 64 : 65;
                    return (t(a, 64, 126) || t(a, 128, 254)) && (d = 190 * (f - 129) + (a - h)), u = null === d ? null : p(d, m("gb18030")), null === u && s(a) && e.prepend(a), null === u ? c(n) : u
                }
                return s(a) ? a : 128 === a ? 8364 : t(a, 129, 254) ? (r = a, null) : c(n)
            }
        }

        function k(e, t) {
            e.fatal;
            this.handler = function(e, n) {
                if (n === z) return J;
                if (W(n)) return n;
                if (58853 === n) return u(n);
                if (t && 8364 === n) return 128;
                var r = h(n, m("gb18030"));
                if (null !== r) {
                    var i = V(r / 190) + 129,
                        o = r % 190;
                    return [i, o + (o < 63 ? 64 : 65)]
                }
                if (t) return u(n);
                r = b(n);
                var s = V(r / 10 / 126 / 10);
                r -= 10 * s * 126 * 10;
                var a = V(r / 10 / 126);
                r -= 10 * a * 126;
                var c = V(r / 10);
                return [s + 129, a + 48, c + 129, r - 10 * c + 48]
            }
        }

        function j(e) {
            var n = e.fatal,
                r = 0;
            this.handler = function(e, i) {
                if (i === z && 0 !== r) return r = 0, c(n);
                if (i === z && 0 === r) return J;
                if (0 !== r) {
                    var o = r,
                        a = null;
                    r = 0;
                    var u = i < 127 ? 64 : 98;
                    switch ((t(i, 64, 126) || t(i, 161, 254)) && (a = 157 * (o - 129) + (i - u)), a) {
                        case 1133:
                            return [202, 772];
                        case 1135:
                            return [202, 780];
                        case 1164:
                            return [234, 772];
                        case 1166:
                            return [234, 780]
                    }
                    var l = null === a ? null : p(a, m("big5"));
                    return null === l && s(i) && e.prepend(i), null === l ? c(n) : l
                }
                return s(i) ? i : t(i, 129, 254) ? (r = i, null) : c(n)
            }
        }

        function T(e) {
            e.fatal;
            this.handler = function(e, t) {
                if (t === z) return J;
                if (W(t)) return t;
                var n = y(t);
                if (null === n) return u(t);
                var r = V(n / 157) + 129;
                if (r < 161) return u(t);
                var i = n % 157;
                return [r, i + (i < 63 ? 64 : 98)]
            }
        }

        function A(e) {
            var n = e.fatal,
                r = !1,
                i = 0;
            this.handler = function(e, o) {
                if (o === z && 0 !== i) return i = 0, c(n);
                if (o === z && 0 === i) return J;
                if (142 === i && t(o, 161, 223)) return i = 0, 65216 + o;
                if (143 === i && t(o, 161, 254)) return r = !0, i = o, null;
                if (0 !== i) {
                    var a = i;
                    i = 0;
                    var u = null;
                    return t(a, 161, 254) && t(o, 161, 254) && (u = p(94 * (a - 161) + (o - 161), m(r ? "jis0212" : "jis0208"))), r = !1, t(o, 161, 254) || e.prepend(o), null === u ? c(n) : u
                }
                return s(o) ? o : 142 === o || 143 === o || t(o, 161, 254) ? (i = o, null) : c(n)
            }
        }

        function I(e) {
            e.fatal;
            this.handler = function(e, n) {
                if (n === z) return J;
                if (W(n)) return n;
                if (165 === n) return 92;
                if (8254 === n) return 126;
                if (t(n, 65377, 65439)) return [142, n - 65377 + 161];
                8722 === n && (n = 65293);
                var r = h(n, m("jis0208"));
                return null === r ? u(n) : [V(r / 94) + 161, r % 94 + 161]
            }
        }

        function N(e) {
            var n = e.fatal,
                r = {
                    ASCII: 0,
                    Roman: 1,
                    Katakana: 2,
                    LeadByte: 3,
                    TrailByte: 4,
                    EscapeStart: 5,
                    Escape: 6
                },
                i = r.ASCII,
                o = r.ASCII,
                s = 0,
                a = !1;
            this.handler = function(e, u) {
                switch (i) {
                    default:
                        case r.ASCII:
                        return 27 === u ? (i = r.EscapeStart, null) : t(u, 0, 127) && 14 !== u && 15 !== u && 27 !== u ? (a = !1, u) : u === z ? J : (a = !1, c(n));
                    case r.Roman:
                            return 27 === u ? (i = r.EscapeStart, null) : 92 === u ? (a = !1, 165) : 126 === u ? (a = !1, 8254) : t(u, 0, 127) && 14 !== u && 15 !== u && 27 !== u && 92 !== u && 126 !== u ? (a = !1, u) : u === z ? J : (a = !1, c(n));
                    case r.Katakana:
                            return 27 === u ? (i = r.EscapeStart, null) : t(u, 33, 95) ? (a = !1, 65344 + u) : u === z ? J : (a = !1, c(n));
                    case r.LeadByte:
                            return 27 === u ? (i = r.EscapeStart, null) : t(u, 33, 126) ? (a = !1, s = u, i = r.TrailByte, null) : u === z ? J : (a = !1, c(n));
                    case r.TrailByte:
                            if (27 === u) return i = r.EscapeStart, c(n);
                        if (t(u, 33, 126)) {
                            i = r.LeadByte;
                            var l = 94 * (s - 33) + u - 33,
                                f = p(l, m("jis0208"));
                            return null === f ? c(n) : f
                        }
                        return u === z ? (i = r.LeadByte, e.prepend(u), c(n)) : (i = r.LeadByte, c(n));
                    case r.EscapeStart:
                            return 36 === u || 40 === u ? (s = u, i = r.Escape, null) : (e.prepend(u), a = !1, i = o, c(n));
                    case r.Escape:
                            var d = s;s = 0;
                        var h = null;
                        if (40 === d && 66 === u && (h = r.ASCII), 40 === d && 74 === u && (h = r.Roman), 40 === d && 73 === u && (h = r.Katakana), 36 !== d || 64 !== u && 66 !== u || (h = r.LeadByte), null !== h) {
                            i = i = h;
                            var g = a;
                            return a = !0, g ? c(n) : null
                        }
                        return e.prepend([d, u]),
                        a = !1,
                        i = o,
                        c(n)
                }
            }
        }

        function P(e) {
            var t = (e.fatal, {
                    ASCII: 0,
                    Roman: 1,
                    jis0208: 2
                }),
                n = t.ASCII;
            this.handler = function(e, r) {
                if (r === z && n !== t.ASCII) return e.prepend(r), n = t.ASCII, [27, 40, 66];
                if (r === z && n === t.ASCII) return J;
                if (!(n !== t.ASCII && n !== t.Roman || 14 !== r && 15 !== r && 27 !== r)) return u(65533);
                if (n === t.ASCII && W(r)) return r;
                if (n === t.Roman && (W(r) && 92 !== r && 126 !== r || 165 == r || 8254 == r)) {
                    if (W(r)) return r;
                    if (165 === r) return 92;
                    if (8254 === r) return 126
                }
                if (W(r) && n !== t.ASCII) return e.prepend(r), n = t.ASCII, [27, 40, 66];
                if ((165 === r || 8254 === r) && n !== t.Roman) return e.prepend(r), n = t.Roman, [27, 40, 74];
                8722 === r && (r = 65293);
                var i = h(r, m("jis0208"));
                return null === i ? u(r) : n !== t.jis0208 ? (e.prepend(r), n = t.jis0208, [27, 36, 66]) : [V(i / 94) + 33, i % 94 + 33]
            }
        }

        function B(e) {
            var n = e.fatal,
                r = 0;
            this.handler = function(e, i) {
                if (i === z && 0 !== r) return r = 0, c(n);
                if (i === z && 0 === r) return J;
                if (0 !== r) {
                    var o = r,
                        a = null;
                    r = 0;
                    var u = i < 127 ? 64 : 65,
                        l = o < 160 ? 129 : 193;
                    if ((t(i, 64, 126) || t(i, 128, 252)) && (a = 188 * (o - l) + i - u), t(a, 8836, 10715)) return 48508 + a;
                    var f = null === a ? null : p(a, m("jis0208"));
                    return null === f && s(i) && e.prepend(i), null === f ? c(n) : f
                }
                return s(i) || 128 === i ? i : t(i, 161, 223) ? 65216 + i : t(i, 129, 159) || t(i, 224, 252) ? (r = i, null) : c(n)
            }
        }

        function R(e) {
            e.fatal;
            this.handler = function(e, n) {
                if (n === z) return J;
                if (W(n) || 128 === n) return n;
                if (165 === n) return 92;
                if (8254 === n) return 126;
                if (t(n, 65377, 65439)) return n - 65377 + 161;
                8722 === n && (n = 65293);
                var r = v(n);
                if (null === r) return u(n);
                var i = V(r / 188),
                    o = i < 31 ? 129 : 193,
                    s = r % 188;
                return [i + o, s + (s < 63 ? 64 : 65)]
            }
        }

        function F(e) {
            var n = e.fatal,
                r = 0;
            this.handler = function(e, i) {
                if (i === z && 0 !== r) return r = 0, c(n);
                if (i === z && 0 === r) return J;
                if (0 !== r) {
                    var o = r,
                        a = null;
                    r = 0, t(i, 65, 254) && (a = 190 * (o - 129) + (i - 65));
                    var u = null === a ? null : p(a, m("euc-kr"));
                    return null === a && s(i) && e.prepend(i), null === u ? c(n) : u
                }
                return s(i) ? i : t(i, 129, 254) ? (r = i, null) : c(n)
            }
        }

        function G(e) {
            e.fatal;
            this.handler = function(e, t) {
                if (t === z) return J;
                if (W(t)) return t;
                var n = h(t, m("euc-kr"));
                return null === n ? u(t) : [V(n / 190) + 129, n % 190 + 65]
            }
        }

        function L(e, t) {
            var n = e >> 8,
                r = 255 & e;
            return t ? [n, r] : [r, n]
        }

        function D(e, n) {
            var r = n.fatal,
                i = null,
                o = null;
            this.handler = function(n, s) {
                if (s === z && (null !== i || null !== o)) return c(r);
                if (s === z && null === i && null === o) return J;
                if (null === i) return i = s, null;
                var a;
                if (a = e ? (i << 8) + s : (s << 8) + i, i = null, null !== o) {
                    var u = o;
                    return o = null, t(a, 56320, 57343) ? 65536 + 1024 * (u - 55296) + (a - 56320) : (n.prepend(L(a, e)), c(r))
                }
                return t(a, 55296, 56319) ? (o = a, null) : t(a, 56320, 57343) ? c(r) : a
            }
        }

        function M(e, n) {
            n.fatal;
            this.handler = function(n, r) {
                if (r === z) return J;
                if (t(r, 0, 65535)) return L(r, e);
                var i = L(55296 + (r - 65536 >> 10), e),
                    o = L(56320 + (r - 65536 & 1023), e);
                return i.concat(o)
            }
        }

        function U(e) {
            e.fatal;
            this.handler = function(e, t) {
                return t === z ? J : s(t) ? t : 63360 + t - 128
            }
        }

        function H(e) {
            e.fatal;
            this.handler = function(e, n) {
                return n === z ? J : W(n) ? n : t(n, 63360, 63487) ? n - 63360 + 128 : u(n)
            }
        }
        "undefined" != typeof module && module.exports && !e["encoding-indexes"] && (e["encoding-indexes"] = require("./encoding-indexes.js")["encoding-indexes"]);
        var V = Math.floor,
            W = s,
            z = -1;
        a.prototype = {
            endOfStream: function() {
                return !this.tokens.length
            },
            read: function() {
                return this.tokens.length ? this.tokens.pop() : z
            },
            prepend: function(e) {
                if (Array.isArray(e))
                    for (var t = e; t.length;) this.tokens.push(t.pop());
                else this.tokens.push(e)
            },
            push: function(e) {
                if (Array.isArray(e))
                    for (var t = e; t.length;) this.tokens.unshift(t.shift());
                else this.tokens.unshift(e)
            }
        };
        var J = -1;
        l.prototype = {
            handler: function(e, t) {}
        }, f.prototype = {
            handler: function(e, t) {}
        };
        var q = [{
                encodings: [{
                    labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
                    name: "UTF-8"
                }],
                heading: "The Encoding"
            }, {
                encodings: [{
                    labels: ["866", "cp866", "csibm866", "ibm866"],
                    name: "IBM866"
                }, {
                    labels: ["csisolatin2", "iso-8859-2", "iso-ir-101", "iso8859-2", "iso88592", "iso_8859-2", "iso_8859-2:1987", "l2", "latin2"],
                    name: "ISO-8859-2"
                }, {
                    labels: ["csisolatin3", "iso-8859-3", "iso-ir-109", "iso8859-3", "iso88593", "iso_8859-3", "iso_8859-3:1988", "l3", "latin3"],
                    name: "ISO-8859-3"
                }, {
                    labels: ["csisolatin4", "iso-8859-4", "iso-ir-110", "iso8859-4", "iso88594", "iso_8859-4", "iso_8859-4:1988", "l4", "latin4"],
                    name: "ISO-8859-4"
                }, {
                    labels: ["csisolatincyrillic", "cyrillic", "iso-8859-5", "iso-ir-144", "iso8859-5", "iso88595", "iso_8859-5", "iso_8859-5:1988"],
                    name: "ISO-8859-5"
                }, {
                    labels: ["arabic", "asmo-708", "csiso88596e", "csiso88596i", "csisolatinarabic", "ecma-114", "iso-8859-6", "iso-8859-6-e", "iso-8859-6-i", "iso-ir-127", "iso8859-6", "iso88596", "iso_8859-6", "iso_8859-6:1987"],
                    name: "ISO-8859-6"
                }, {
                    labels: ["csisolatingreek", "ecma-118", "elot_928", "greek", "greek8", "iso-8859-7", "iso-ir-126", "iso8859-7", "iso88597", "iso_8859-7", "iso_8859-7:1987", "sun_eu_greek"],
                    name: "ISO-8859-7"
                }, {
                    labels: ["csiso88598e", "csisolatinhebrew", "hebrew", "iso-8859-8", "iso-8859-8-e", "iso-ir-138", "iso8859-8", "iso88598", "iso_8859-8", "iso_8859-8:1988", "visual"],
                    name: "ISO-8859-8"
                }, {
                    labels: ["csiso88598i", "iso-8859-8-i", "logical"],
                    name: "ISO-8859-8-I"
                }, {
                    labels: ["csisolatin6", "iso-8859-10", "iso-ir-157", "iso8859-10", "iso885910", "l6", "latin6"],
                    name: "ISO-8859-10"
                }, {
                    labels: ["iso-8859-13", "iso8859-13", "iso885913"],
                    name: "ISO-8859-13"
                }, {
                    labels: ["iso-8859-14", "iso8859-14", "iso885914"],
                    name: "ISO-8859-14"
                }, {
                    labels: ["csisolatin9", "iso-8859-15", "iso8859-15", "iso885915", "iso_8859-15", "l9"],
                    name: "ISO-8859-15"
                }, {
                    labels: ["iso-8859-16"],
                    name: "ISO-8859-16"
                }, {
                    labels: ["cskoi8r", "koi", "koi8", "koi8-r", "koi8_r"],
                    name: "KOI8-R"
                }, {
                    labels: ["koi8-ru", "koi8-u"],
                    name: "KOI8-U"
                }, {
                    labels: ["csmacintosh", "mac", "macintosh", "x-mac-roman"],
                    name: "macintosh"
                }, {
                    labels: ["dos-874", "iso-8859-11", "iso8859-11", "iso885911", "tis-620", "windows-874"],
                    name: "windows-874"
                }, {
                    labels: ["cp1250", "windows-1250", "x-cp1250"],
                    name: "windows-1250"
                }, {
                    labels: ["cp1251", "windows-1251", "x-cp1251"],
                    name: "windows-1251"
                }, {
                    labels: ["ansi_x3.4-1968", "ascii", "cp1252", "cp819", "csisolatin1", "ibm819", "iso-8859-1", "iso-ir-100", "iso8859-1", "iso88591", "iso_8859-1", "iso_8859-1:1987", "l1", "latin1", "us-ascii", "windows-1252", "x-cp1252"],
                    name: "windows-1252"
                }, {
                    labels: ["cp1253", "windows-1253", "x-cp1253"],
                    name: "windows-1253"
                }, {
                    labels: ["cp1254", "csisolatin5", "iso-8859-9", "iso-ir-148", "iso8859-9", "iso88599", "iso_8859-9", "iso_8859-9:1989", "l5", "latin5", "windows-1254", "x-cp1254"],
                    name: "windows-1254"
                }, {
                    labels: ["cp1255", "windows-1255", "x-cp1255"],
                    name: "windows-1255"
                }, {
                    labels: ["cp1256", "windows-1256", "x-cp1256"],
                    name: "windows-1256"
                }, {
                    labels: ["cp1257", "windows-1257", "x-cp1257"],
                    name: "windows-1257"
                }, {
                    labels: ["cp1258", "windows-1258", "x-cp1258"],
                    name: "windows-1258"
                }, {
                    labels: ["x-mac-cyrillic", "x-mac-ukrainian"],
                    name: "x-mac-cyrillic"
                }],
                heading: "Legacy single-byte encodings"
            }, {
                encodings: [{
                    labels: ["chinese", "csgb2312", "csiso58gb231280", "gb2312", "gb_2312", "gb_2312-80", "gbk", "iso-ir-58", "x-gbk"],
                    name: "GBK"
                }, {
                    labels: ["gb18030"],
                    name: "gb18030"
                }],
                heading: "Legacy multi-byte Chinese (simplified) encodings"
            }, {
                encodings: [{
                    labels: ["big5", "big5-hkscs", "cn-big5", "csbig5", "x-x-big5"],
                    name: "Big5"
                }],
                heading: "Legacy multi-byte Chinese (traditional) encodings"
            }, {
                encodings: [{
                    labels: ["cseucpkdfmtjapanese", "euc-jp", "x-euc-jp"],
                    name: "EUC-JP"
                }, {
                    labels: ["csiso2022jp", "iso-2022-jp"],
                    name: "ISO-2022-JP"
                }, {
                    labels: ["csshiftjis", "ms932", "ms_kanji", "shift-jis", "shift_jis", "sjis", "windows-31j", "x-sjis"],
                    name: "Shift_JIS"
                }],
                heading: "Legacy multi-byte Japanese encodings"
            }, {
                encodings: [{
                    labels: ["cseuckr", "csksc56011987", "euc-kr", "iso-ir-149", "korean", "ks_c_5601-1987", "ks_c_5601-1989", "ksc5601", "ksc_5601", "windows-949"],
                    name: "EUC-KR"
                }],
                heading: "Legacy multi-byte Korean encodings"
            }, {
                encodings: [{
                    labels: ["csiso2022kr", "hz-gb-2312", "iso-2022-cn", "iso-2022-cn-ext", "iso-2022-kr"],
                    name: "replacement"
                }, {
                    labels: ["utf-16be"],
                    name: "UTF-16BE"
                }, {
                    labels: ["utf-16", "utf-16le"],
                    name: "UTF-16LE"
                }, {
                    labels: ["x-user-defined"],
                    name: "x-user-defined"
                }],
                heading: "Legacy miscellaneous encodings"
            }],
            K = {};
        q.forEach(function(e) {
            e.encodings.forEach(function(e) {
                e.labels.forEach(function(t) {
                    K[t] = e
                })
            })
        });
        var Q, Y, $ = {},
            X = {},
            Z = "utf-8";
        Object.defineProperty && (Object.defineProperty(w.prototype, "encoding", {
                get: function() {
                    return this._encoding.name.toLowerCase()
                }
            }), Object.defineProperty(w.prototype, "fatal", {
                get: function() {
                    return "fatal" === this._error_mode
                }
            }), Object.defineProperty(w.prototype, "ignoreBOM", {
                get: function() {
                    return this._ignoreBOM
                }
            })), w.prototype.decode = function(e, t) {
                function i(e) {
                    return !n(["UTF-8", "UTF-16LE", "UTF-16BE"], this._encoding.name) || this._ignoreBOM || this._BOMseen || (e.length > 0 && 65279 === e[0] ? (this._BOMseen = !0, e.shift()) : e.length > 0 && (this._BOMseen = !0)), o(e)
                }
                var s;
                s = "object" == typeof e && e instanceof ArrayBuffer ? new Uint8Array(e) : "object" == typeof e && "buffer" in e && e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t = r(t), this._do_not_flush || (this._decoder = X[this._encoding.name]({
                    fatal: "fatal" === this._error_mode
                }), this._BOMseen = !1), this._do_not_flush = Boolean(t.stream);
                for (var c, u = new a(s), l = [];;) {
                    var f = u.read();
                    if (f === z) break;
                    if ((c = this._decoder.handler(u, f)) === J) break;
                    null !== c && (Array.isArray(c) ? l.push.apply(l, c) : l.push(c))
                }
                if (!this._do_not_flush) {
                    do {
                        if ((c = this._decoder.handler(u, u.read())) === J) break;
                        null !== c && (Array.isArray(c) ? l.push.apply(l, c) : l.push(c))
                    } while (!u.endOfStream());
                    this._decoder = null
                }
                return i.call(this, l)
            }, Object.defineProperty && Object.defineProperty(_.prototype, "encoding", {
                get: function() {
                    return this._encoding.name.toLowerCase()
                }
            }), _.prototype.encode = function(e, t) {
                e = void 0 === e ? "" : String(e), t = r(t), this._do_not_flush || (this._encoder = $[this._encoding.name]({
                    fatal: "fatal" === this._fatal
                })), this._do_not_flush = Boolean(t.stream);
                for (var n, o = new a(i(e)), s = [];;) {
                    var c = o.read();
                    if (c === z) break;
                    if ((n = this._encoder.handler(o, c)) === J) break;
                    Array.isArray(n) ? s.push.apply(s, n) : s.push(n)
                }
                if (!this._do_not_flush) {
                    for (;;) {
                        if ((n = this._encoder.handler(o, o.read())) === J) break;
                        Array.isArray(n) ? s.push.apply(s, n) : s.push(n)
                    }
                    this._encoder = null
                }
                return new Uint8Array(s)
            }, $["UTF-8"] = function(e) {
                return new S(e)
            }, X["UTF-8"] = function(e) {
                return new C(e)
            },
            function() {
                "encoding-indexes" in e && q.forEach(function(e) {
                    "Legacy single-byte encodings" === e.heading && e.encodings.forEach(function(e) {
                        var t = e.name,
                            n = m(t.toLowerCase());
                        X[t] = function(e) {
                            return new O(n, e)
                        }, $[t] = function(e) {
                            return new x(n, e)
                        }
                    })
                })
            }(), X.GBK = function(e) {
                return new E(e)
            }, $.GBK = function(e) {
                return new k(e, !0)
            }, $.gb18030 = function(e) {
                return new k(e)
            }, X.gb18030 = function(e) {
                return new E(e)
            }, $.Big5 = function(e) {
                return new T(e)
            }, X.Big5 = function(e) {
                return new j(e)
            }, $["EUC-JP"] = function(e) {
                return new I(e)
            }, X["EUC-JP"] = function(e) {
                return new A(e)
            }, $["ISO-2022-JP"] = function(e) {
                return new P(e)
            }, X["ISO-2022-JP"] = function(e) {
                return new N(e)
            }, $.Shift_JIS = function(e) {
                return new R(e)
            }, X.Shift_JIS = function(e) {
                return new B(e)
            }, $["EUC-KR"] = function(e) {
                return new G(e)
            }, X["EUC-KR"] = function(e) {
                return new F(e)
            }, $["UTF-16BE"] = function(e) {
                return new M(!0, e)
            }, X["UTF-16BE"] = function(e) {
                return new D(!0, e)
            }, $["UTF-16LE"] = function(e) {
                return new M(!1, e)
            }, X["UTF-16LE"] = function(e) {
                return new D(!1, e)
            }, $["x-user-defined"] = function(e) {
                return new H(e)
            }, X["x-user-defined"] = function(e) {
                return new U(e)
            }, e.TextEncoder || (e.TextEncoder = _), e.TextDecoder || (e.TextDecoder = w), "undefined" != typeof module && module.exports && (module.exports = {
                TextEncoder: e.TextEncoder,
                TextDecoder: e.TextDecoder,
                EncodingIndexes: e["encoding-indexes"]
            })
    }(this || {}), define("encodingjs", function() {}),
    function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define("sockjs", [], e);
        else {
            var t;
            t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.SockJS = e()
        }
    }(function() {
        var e;
        return function() {
            function e(t, n, r) {
                function i(s, a) {
                    if (!n[s]) {
                        if (!t[s]) {
                            var c = "function" == typeof require && require;
                            if (!a && c) return c(s, !0);
                            if (o) return o(s, !0);
                            var u = new Error("Cannot find module '" + s + "'");
                            throw u.code = "MODULE_NOT_FOUND", u
                        }
                        var l = n[s] = {
                            exports: {}
                        };
                        t[s][0].call(l.exports, function(e) {
                            return i(t[s][1][e] || e)
                        }, l, l.exports, e, t, n, r)
                    }
                    return n[s].exports
                }
                for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
                return i
            }
            return e
        }()({
            1: [function(e, t, n) {
                (function(n) {
                    "use strict";
                    var r = e("./transport-list");
                    t.exports = e("./main")(r), "_sockjs_onload" in n && setTimeout(n._sockjs_onload, 1)
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./main": 14,
                "./transport-list": 16
            }],
            2: [function(e, t, n) {
                "use strict";

                function r() {
                    o.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
                }
                var i = e("inherits"),
                    o = e("./event");
                i(r, o), t.exports = r
            }, {
                "./event": 4,
                inherits: 57
            }],
            3: [function(e, t, n) {
                "use strict";

                function r() {
                    o.call(this)
                }
                var i = e("inherits"),
                    o = e("./eventtarget");
                i(r, o), r.prototype.removeAllListeners = function(e) {
                    e ? delete this._listeners[e] : this._listeners = {}
                }, r.prototype.once = function(e, t) {
                    function n() {
                        r.removeListener(e, n), i || (i = !0, t.apply(this, arguments))
                    }
                    var r = this,
                        i = !1;
                    this.on(e, n)
                }, r.prototype.emit = function() {
                    var e = arguments[0],
                        t = this._listeners[e];
                    if (t) {
                        for (var n = arguments.length, r = new Array(n - 1), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        for (var o = 0; o < t.length; o++) t[o].apply(this, r)
                    }
                }, r.prototype.on = r.prototype.addListener = o.prototype.addEventListener, r.prototype.removeListener = o.prototype.removeEventListener, t.exports.EventEmitter = r
            }, {
                "./eventtarget": 5,
                inherits: 57
            }],
            4: [function(e, t, n) {
                "use strict";

                function r(e) {
                    this.type = e
                }
                r.prototype.initEvent = function(e, t, n) {
                    return this.type = e, this.bubbles = t, this.cancelable = n, this.timeStamp = +new Date, this
                }, r.prototype.stopPropagation = function() {}, r.prototype.preventDefault = function() {}, r.CAPTURING_PHASE = 1, r.AT_TARGET = 2, r.BUBBLING_PHASE = 3, t.exports = r
            }, {}],
            5: [function(e, t, n) {
                "use strict";

                function r() {
                    this._listeners = {}
                }
                r.prototype.addEventListener = function(e, t) {
                    e in this._listeners || (this._listeners[e] = []);
                    var n = this._listeners[e]; - 1 === n.indexOf(t) && (n = n.concat([t])), this._listeners[e] = n
                }, r.prototype.removeEventListener = function(e, t) {
                    var n = this._listeners[e];
                    if (n) {
                        var r = n.indexOf(t);
                        return -1 !== r ? void(n.length > 1 ? this._listeners[e] = n.slice(0, r).concat(n.slice(r + 1)) : delete this._listeners[e]) : void 0
                    }
                }, r.prototype.dispatchEvent = function() {
                    var e = arguments[0],
                        t = e.type,
                        n = 1 === arguments.length ? [e] : Array.apply(null, arguments);
                    if (this["on" + t] && this["on" + t].apply(this, n), t in this._listeners)
                        for (var r = this._listeners[t], i = 0; i < r.length; i++) r[i].apply(this, n)
                }, t.exports = r
            }, {}],
            6: [function(e, t, n) {
                "use strict";

                function r(e) {
                    o.call(this), this.initEvent("message", !1, !1), this.data = e
                }
                var i = e("inherits"),
                    o = e("./event");
                i(r, o), t.exports = r
            }, {
                "./event": 4,
                inherits: 57
            }],
            7: [function(e, t, n) {
                "use strict";

                function r(e) {
                    this._transport = e, e.on("message", this._transportMessage.bind(this)), e.on("close", this._transportClose.bind(this))
                }
                var i = e("json3"),
                    o = e("./utils/iframe");
                r.prototype._transportClose = function(e, t) {
                    o.postMessage("c", i.stringify([e, t]))
                }, r.prototype._transportMessage = function(e) {
                    o.postMessage("t", e)
                }, r.prototype._send = function(e) {
                    this._transport.send(e)
                }, r.prototype._close = function() {
                    this._transport.close(), this._transport.removeAllListeners()
                }, t.exports = r
            }, {
                "./utils/iframe": 47,
                json3: 58
            }],
            8: [function(e, t, n) {
                (function(n) {
                    "use strict";
                    var r = e("./utils/url"),
                        i = e("./utils/event"),
                        o = e("json3"),
                        s = e("./facade"),
                        a = e("./info-iframe-receiver"),
                        c = e("./utils/iframe"),
                        u = e("./location"),
                        l = function() {};
                    "production" !== n.env.NODE_ENV && (l = e("debug")("sockjs-client:iframe-bootstrap")), t.exports = function(e, t) {
                        var n = {};
                        t.forEach(function(e) {
                            e.facadeTransport && (n[e.facadeTransport.transportName] = e.facadeTransport)
                        }), n[a.transportName] = a;
                        var f;
                        e.bootstrap_iframe = function() {
                            var t;
                            c.currentWindowId = u.hash.slice(1);
                            var a = function(i) {
                                if (i.source === parent && (void 0 === f && (f = i.origin), i.origin === f)) {
                                    var a;
                                    try {
                                        a = o.parse(i.data)
                                    } catch (e) {
                                        return void l("bad json", i.data)
                                    }
                                    if (a.windowId === c.currentWindowId) switch (a.type) {
                                        case "s":
                                            var d;
                                            try {
                                                d = o.parse(a.data)
                                            } catch (e) {
                                                l("bad json", a.data);
                                                break
                                            }
                                            var p = d[0],
                                                h = d[1],
                                                m = d[2],
                                                g = d[3];
                                            if (l(p, h, m, g), p !== e.version) throw new Error('Incompatible SockJS! Main site uses: "' + p + '", the iframe: "' + e.version + '".');
                                            if (!r.isOriginEqual(m, u.href) || !r.isOriginEqual(g, u.href)) throw new Error("Can't connect to different domain from within an iframe. (" + u.href + ", " + m + ", " + g + ")");
                                            t = new s(new n[h](m, g));
                                            break;
                                        case "m":
                                            t._send(a.data);
                                            break;
                                        case "c":
                                            t && t._close(), t = null
                                    }
                                }
                            };
                            i.attachEvent("message", a), c.postMessage("s")
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                "./facade": 7,
                "./info-iframe-receiver": 10,
                "./location": 13,
                "./utils/event": 46,
                "./utils/iframe": 47,
                "./utils/url": 52,
                debug: 55,
                json3: 58
            }],
            9: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t) {
                        i.call(this);
                        var n = this,
                            r = +new Date;
                        this.xo = new t("GET", e), this.xo.once("finish", function(e, t) {
                            var i, o;
                            if (200 === e) {
                                if (o = +new Date - r, t) try {
                                    i = s.parse(t)
                                } catch (e) {
                                    c("bad json", t)
                                }
                                a.isObject(i) || (i = {})
                            }
                            n.emit("finish", i, o), n.removeAllListeners()
                        })
                    }
                    var i = e("events").EventEmitter,
                        o = e("inherits"),
                        s = e("json3"),
                        a = e("./utils/object"),
                        c = function() {};
                    "production" !== n.env.NODE_ENV && (c = e("debug")("sockjs-client:info-ajax")), o(r, i), r.prototype.close = function() {
                        this.removeAllListeners(), this.xo.close()
                    }, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                "./utils/object": 49,
                debug: 55,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            10: [function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = this;
                    o.call(this), this.ir = new c(e, a), this.ir.once("finish", function(e, n) {
                        t.ir = null, t.emit("message", s.stringify([e, n]))
                    })
                }
                var i = e("inherits"),
                    o = e("events").EventEmitter,
                    s = e("json3"),
                    a = e("./transport/sender/xhr-local"),
                    c = e("./info-ajax");
                i(r, o), r.transportName = "iframe-info-receiver", r.prototype.close = function() {
                    this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
                }, t.exports = r
            }, {
                "./info-ajax": 9,
                "./transport/sender/xhr-local": 37,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            11: [function(e, t, n) {
                (function(n, r) {
                    "use strict";

                    function i(e, t) {
                        var n = this;
                        o.call(this);
                        var i = function() {
                            var r = n.ifr = new u(l.transportName, t, e);
                            r.once("message", function(e) {
                                if (e) {
                                    var t;
                                    try {
                                        t = a.parse(e)
                                    } catch (t) {
                                        return f("bad json", e), n.emit("finish"), void n.close()
                                    }
                                    var r = t[0],
                                        i = t[1];
                                    n.emit("finish", r, i)
                                }
                                n.close()
                            }), r.once("close", function() {
                                n.emit("finish"), n.close()
                            })
                        };
                        r.document.body ? i() : c.attachEvent("load", i)
                    }
                    var o = e("events").EventEmitter,
                        s = e("inherits"),
                        a = e("json3"),
                        c = e("./utils/event"),
                        u = e("./transport/iframe"),
                        l = e("./info-iframe-receiver"),
                        f = function() {};
                    "production" !== n.env.NODE_ENV && (f = e("debug")("sockjs-client:info-iframe")), s(i, o), i.enabled = function() {
                        return u.enabled()
                    }, i.prototype.close = function() {
                        this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
                    }, t.exports = i
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./info-iframe-receiver": 10,
                "./transport/iframe": 22,
                "./utils/event": 46,
                debug: 55,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            12: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t) {
                        p(e);
                        var n = this;
                        i.call(this), setTimeout(function() {
                            n.doXhr(e, t)
                        }, 0)
                    }
                    var i = e("events").EventEmitter,
                        o = e("inherits"),
                        s = e("./utils/url"),
                        a = e("./transport/sender/xdr"),
                        c = e("./transport/sender/xhr-cors"),
                        u = e("./transport/sender/xhr-local"),
                        l = e("./transport/sender/xhr-fake"),
                        f = e("./info-iframe"),
                        d = e("./info-ajax"),
                        p = function() {};
                    "production" !== n.env.NODE_ENV && (p = e("debug")("sockjs-client:info-receiver")), o(r, i), r._getReceiver = function(e, t, n) {
                        return n.sameOrigin ? new d(t, u) : c.enabled ? new d(t, c) : a.enabled && n.sameScheme ? new d(t, a) : f.enabled() ? new f(e, t) : new d(t, l)
                    }, r.prototype.doXhr = function(e, t) {
                        var n = this,
                            i = s.addPath(e, "/info");
                        p("doXhr", i), this.xo = r._getReceiver(e, i, t), this.timeoutRef = setTimeout(function() {
                            p("timeout"), n._cleanup(!1), n.emit("finish")
                        }, r.timeout), this.xo.once("finish", function(e, t) {
                            p("finish", e, t), n._cleanup(!0), n.emit("finish", e, t)
                        })
                    }, r.prototype._cleanup = function(e) {
                        p("_cleanup"), clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null
                    }, r.prototype.close = function() {
                        p("close"), this.removeAllListeners(), this._cleanup(!1)
                    }, r.timeout = 8e3, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                "./info-ajax": 9,
                "./info-iframe": 11,
                "./transport/sender/xdr": 34,
                "./transport/sender/xhr-cors": 35,
                "./transport/sender/xhr-fake": 36,
                "./transport/sender/xhr-local": 37,
                "./utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            13: [function(e, t, n) {
                (function(e) {
                    "use strict";
                    t.exports = e.location || {
                        origin: "http://localhost:3000:80",
                        protocol: "http:",
                        host: "localhost:3000",
                        port: 80,
                        href: "http://localhost:3000/",
                        hash: ""
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            14: [function(e, t, n) {
                (function(n, r) {
                    "use strict";

                    function i(e, t, n) {
                        if (!(this instanceof i)) return new i(e, t, n);
                        if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
                        v.call(this), this.readyState = i.CONNECTING, this.extensions = "", this.protocol = "", n = n || {}, n.protocols_whitelist && g.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = n.transports, this._transportOptions = n.transportOptions || {}, this._timeout = n.timeout || 0;
                        var r = n.sessionId || 8;
                        if ("function" == typeof r) this._generateSessionId = r;
                        else {
                            if ("number" != typeof r) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
                            this._generateSessionId = function() {
                                return u.string(r)
                            }
                        }
                        this._server = n.server || u.numberString(1e3);
                        var o = new s(e);
                        if (!o.host || !o.protocol) throw new SyntaxError("The URL '" + e + "' is invalid");
                        if (o.hash) throw new SyntaxError("The URL must not contain a fragment");
                        if ("http:" !== o.protocol && "https:" !== o.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + o.protocol + "' is not allowed.");
                        var a = "https:" === o.protocol;
                        if ("https:" === y.protocol && !a && !f.isLoopbackAddr(o.hostname)) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
                        t ? Array.isArray(t) || (t = [t]) : t = [];
                        var c = t.sort();
                        c.forEach(function(e, t) {
                            if (!e) throw new SyntaxError("The protocols entry '" + e + "' is invalid.");
                            if (t < c.length - 1 && e === c[t + 1]) throw new SyntaxError("The protocols entry '" + e + "' is duplicated.")
                        });
                        var l = f.getOrigin(y.href);
                        this._origin = l ? l.toLowerCase() : null, o.set("pathname", o.pathname.replace(/\/+$/, "")), this.url = o.href, S("using url", this.url), this._urlInfo = {
                            nullOrigin: !m.hasDomain(),
                            sameOrigin: f.isOriginEqual(this.url, y.href),
                            sameScheme: f.isSchemeEqual(this.url, y.href)
                        }, this._ir = new C(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
                    }

                    function o(e) {
                        return 1e3 === e || e >= 3e3 && e <= 4999
                    }
                    e("./shims");
                    var s = e("url-parse"),
                        a = e("inherits"),
                        c = e("json3"),
                        u = e("./utils/random"),
                        l = e("./utils/escape"),
                        f = e("./utils/url"),
                        d = e("./utils/event"),
                        p = e("./utils/transport"),
                        h = e("./utils/object"),
                        m = e("./utils/browser"),
                        g = e("./utils/log"),
                        b = e("./event/event"),
                        v = e("./event/eventtarget"),
                        y = e("./location"),
                        w = e("./event/close"),
                        _ = e("./event/trans-message"),
                        C = e("./info-receiver"),
                        S = function() {};
                    "production" !== n.env.NODE_ENV && (S = e("debug")("sockjs-client:main"));
                    var O;
                    a(i, v), i.prototype.close = function(e, t) {
                        if (e && !o(e)) throw new Error("InvalidAccessError: Invalid code");
                        if (t && t.length > 123) throw new SyntaxError("reason argument has an invalid length");
                        if (this.readyState !== i.CLOSING && this.readyState !== i.CLOSED) {
                            this._close(e || 1e3, t || "Normal closure", !0)
                        }
                    }, i.prototype.send = function(e) {
                        if ("string" != typeof e && (e = "" + e),
                            this.readyState === i.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
                        this.readyState === i.OPEN && this._transport.send(l.quote(e))
                    }, i.version = e("./version"), i.CONNECTING = 0, i.OPEN = 1, i.CLOSING = 2, i.CLOSED = 3, i.prototype._receiveInfo = function(e, t) {
                        if (S("_receiveInfo", t), this._ir = null, !e) return void this._close(1002, "Cannot connect to server");
                        this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = h.extend(e, this._urlInfo), S("info", e);
                        var n = O.filterToEnabled(this._transportsWhitelist, e);
                        this._transports = n.main, S(this._transports.length + " enabled transports"), this._connect()
                    }, i.prototype._connect = function() {
                        for (var e = this._transports.shift(); e; e = this._transports.shift()) {
                            if (S("attempt", e.transportName), e.needBody && (!r.document.body || void 0 !== r.document.readyState && "complete" !== r.document.readyState && "interactive" !== r.document.readyState)) return S("waiting for body"), this._transports.unshift(e), void d.attachEvent("load", this._connect.bind(this));
                            var t = Math.max(this._timeout, this._rto * e.roundTrips || 5e3);
                            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t), S("using timeout", t);
                            var n = f.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                                i = this._transportOptions[e.transportName];
                            S("transport url", n);
                            var o = new e(n, this._transUrl, i);
                            return o.on("message", this._transportMessage.bind(this)), o.once("close", this._transportClose.bind(this)), o.transportName = e.transportName, void(this._transport = o)
                        }
                        this._close(2e3, "All transports failed", !1)
                    }, i.prototype._transportTimeout = function() {
                        S("_transportTimeout"), this.readyState === i.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"))
                    }, i.prototype._transportMessage = function(e) {
                        S("_transportMessage", e);
                        var t, n = this,
                            r = e.slice(0, 1),
                            i = e.slice(1);
                        switch (r) {
                            case "o":
                                return void this._open();
                            case "h":
                                return this.dispatchEvent(new b("heartbeat")), void S("heartbeat", this.transport)
                        }
                        if (i) try {
                            t = c.parse(i)
                        } catch (e) {
                            S("bad json", i)
                        }
                        if (void 0 === t) return void S("empty payload", i);
                        switch (r) {
                            case "a":
                                Array.isArray(t) && t.forEach(function(e) {
                                    S("message", n.transport, e), n.dispatchEvent(new _(e))
                                });
                                break;
                            case "m":
                                S("message", this.transport, t), this.dispatchEvent(new _(t));
                                break;
                            case "c":
                                Array.isArray(t) && 2 === t.length && this._close(t[0], t[1], !0)
                        }
                    }, i.prototype._transportClose = function(e, t) {
                        if (S("_transportClose", this.transport, e, t), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), !o(e) && 2e3 !== e && this.readyState === i.CONNECTING) return void this._connect();
                        this._close(e, t)
                    }, i.prototype._open = function() {
                        S("_open", this._transport && this._transport.transportName, this.readyState), this.readyState === i.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = i.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new b("open")), S("connected", this.transport)) : this._close(1006, "Server lost session")
                    }, i.prototype._close = function(e, t, n) {
                        S("_close", this.transport, e, t, n, this.readyState);
                        var r = !1;
                        if (this._ir && (r = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === i.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
                        this.readyState = i.CLOSING, setTimeout(function() {
                            this.readyState = i.CLOSED, r && this.dispatchEvent(new b("error"));
                            var o = new w("close");
                            o.wasClean = n || !1, o.code = e || 1e3, o.reason = t, this.dispatchEvent(o), this.onmessage = this.onclose = this.onerror = null, S("disconnected")
                        }.bind(this), 0)
                    }, i.prototype.countRTO = function(e) {
                        return e > 100 ? 4 * e : 300 + e
                    }, t.exports = function(t) {
                        return O = p(t), e("./iframe-bootstrap")(i, t), i
                    }
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./event/close": 2,
                "./event/event": 4,
                "./event/eventtarget": 5,
                "./event/trans-message": 6,
                "./iframe-bootstrap": 8,
                "./info-receiver": 12,
                "./location": 13,
                "./shims": 15,
                "./utils/browser": 44,
                "./utils/escape": 45,
                "./utils/event": 46,
                "./utils/log": 48,
                "./utils/object": 49,
                "./utils/random": 50,
                "./utils/transport": 51,
                "./utils/url": 52,
                "./version": 53,
                debug: 55,
                inherits: 57,
                json3: 58,
                "url-parse": 61
            }],
            15: [function(e, t, n) {
                function r(e) {
                    var t = +e;
                    return t !== t ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                }

                function i(e) {
                    return e >>> 0
                }

                function o() {}
                var s, a = Array.prototype,
                    c = Object.prototype,
                    u = Function.prototype,
                    l = String.prototype,
                    f = a.slice,
                    d = c.toString,
                    p = function(e) {
                        return "[object Function]" === c.toString.call(e)
                    },
                    h = function(e) {
                        return "[object Array]" === d.call(e)
                    },
                    m = function(e) {
                        return "[object String]" === d.call(e)
                    },
                    g = Object.defineProperty && function() {
                        try {
                            return Object.defineProperty({}, "x", {}), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                s = g ? function(e, t, n, r) {
                    !r && t in e || Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: n
                    })
                } : function(e, t, n, r) {
                    !r && t in e || (e[t] = n)
                };
                var b = function(e, t, n) {
                        for (var r in t) c.hasOwnProperty.call(t, r) && s(e, r, t[r], n)
                    },
                    v = function(e) {
                        if (null == e) throw new TypeError("can't convert " + e + " to object");
                        return Object(e)
                    };
                b(u, {
                    bind: function(e) {
                        var t = this;
                        if (!p(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                        for (var n = f.call(arguments, 1), r = function() {
                                if (this instanceof c) {
                                    var r = t.apply(this, n.concat(f.call(arguments)));
                                    return Object(r) === r ? r : this
                                }
                                return t.apply(e, n.concat(f.call(arguments)))
                            }, i = Math.max(0, t.length - n.length), s = [], a = 0; a < i; a++) s.push("$" + a);
                        var c = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this, arguments); }")(r);
                        return t.prototype && (o.prototype = t.prototype, c.prototype = new o, o.prototype = null), c
                    }
                }), b(Array, {
                    isArray: h
                });
                var y = Object("a"),
                    w = "a" !== y[0] || !(0 in y);
                b(a, {
                    forEach: function(e) {
                        var t = v(this),
                            n = w && m(this) ? this.split("") : t,
                            r = arguments[1],
                            i = -1,
                            o = n.length >>> 0;
                        if (!p(e)) throw new TypeError;
                        for (; ++i < o;) i in n && e.call(r, n[i], i, t)
                    }
                }, ! function(e) {
                    var t = !0,
                        n = !0;
                    return e && (e.call("foo", function(e, n, r) {
                        "object" != typeof r && (t = !1)
                    }), e.call([1], function() {
                        "use strict";
                        n = "string" == typeof this
                    }, "x")), !!e && t && n
                }(a.forEach));
                var _ = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
                b(a, {
                    indexOf: function(e) {
                        var t = w && m(this) ? this.split("") : v(this),
                            n = t.length >>> 0;
                        if (!n) return -1;
                        var i = 0;
                        for (arguments.length > 1 && (i = r(arguments[1])), i = i >= 0 ? i : Math.max(0, n + i); i < n; i++)
                            if (i in t && t[i] === e) return i;
                        return -1
                    }
                }, _);
                var C = l.split;
                2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
                    var e = void 0 === /()??/.exec("")[1];
                    l.split = function(t, n) {
                        var r = this;
                        if (void 0 === t && 0 === n) return [];
                        if ("[object RegExp]" !== d.call(t)) return C.call(this, t, n);
                        var o, s, c, u, l = [],
                            f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""),
                            p = 0;
                        for (t = new RegExp(t.source, f + "g"), r += "", e || (o = new RegExp("^" + t.source + "$(?!\\s)", f)), n = void 0 === n ? -1 >>> 0 : i(n);
                            (s = t.exec(r)) && !((c = s.index + s[0].length) > p && (l.push(r.slice(p, s.index)), !e && s.length > 1 && s[0].replace(o, function() {
                                for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (s[e] = void 0)
                            }), s.length > 1 && s.index < r.length && a.push.apply(l, s.slice(1)), u = s[0].length, p = c, l.length >= n));) t.lastIndex === s.index && t.lastIndex++;
                        return p === r.length ? !u && t.test("") || l.push("") : l.push(r.slice(p)), l.length > n ? l.slice(0, n) : l
                    }
                }() : "0".split(void 0, 0).length && (l.split = function(e, t) {
                    return void 0 === e && 0 === t ? [] : C.call(this, e, t)
                });
                var S = l.substr,
                    O = "".substr && "b" !== "0b".substr(-1);
                b(l, {
                    substr: function(e, t) {
                        return S.call(this, e < 0 && (e = this.length + e) < 0 ? 0 : e, t)
                    }
                }, O)
            }, {}],
            16: [function(e, t, n) {
                "use strict";
                t.exports = [e("./transport/websocket"), e("./transport/xhr-streaming"), e("./transport/xdr-streaming"), e("./transport/eventsource"), e("./transport/lib/iframe-wrap")(e("./transport/eventsource")), e("./transport/htmlfile"), e("./transport/lib/iframe-wrap")(e("./transport/htmlfile")), e("./transport/xhr-polling"), e("./transport/xdr-polling"), e("./transport/lib/iframe-wrap")(e("./transport/xhr-polling")), e("./transport/jsonp-polling")]
            }, {
                "./transport/eventsource": 20,
                "./transport/htmlfile": 21,
                "./transport/jsonp-polling": 23,
                "./transport/lib/iframe-wrap": 26,
                "./transport/websocket": 38,
                "./transport/xdr-polling": 39,
                "./transport/xdr-streaming": 40,
                "./transport/xhr-polling": 41,
                "./transport/xhr-streaming": 42
            }],
            17: [function(e, t, n) {
                (function(n, r) {
                    "use strict";

                    function i(e, t, n, r) {
                        l(e, t);
                        var i = this;
                        o.call(this), setTimeout(function() {
                            i._start(e, t, n, r)
                        }, 0)
                    }
                    var o = e("events").EventEmitter,
                        s = e("inherits"),
                        a = e("../../utils/event"),
                        c = e("../../utils/url"),
                        u = r.XMLHttpRequest,
                        l = function() {};
                    "production" !== n.env.NODE_ENV && (l = e("debug")("sockjs-client:browser:xhr")), s(i, o), i.prototype._start = function(e, t, n, r) {
                        var o = this;
                        try {
                            this.xhr = new u
                        } catch (e) {}
                        if (!this.xhr) return l("no xhr"), this.emit("finish", 0, "no xhr support"), void this._cleanup();
                        t = c.addQuery(t, "t=" + +new Date), this.unloadRef = a.unloadAdd(function() {
                            l("unload cleanup"), o._cleanup(!0)
                        });
                        try {
                            this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
                                l("xhr timeout"), o.emit("finish", 0, ""), o._cleanup(!1)
                            })
                        } catch (e) {
                            return l("exception", e), this.emit("finish", 0, ""), void this._cleanup(!1)
                        }
                        if (r && r.noCredentials || !i.supportsCORS || (l("withCredentials"), this.xhr.withCredentials = !0), r && r.headers)
                            for (var s in r.headers) this.xhr.setRequestHeader(s, r.headers[s]);
                        this.xhr.onreadystatechange = function() {
                            if (o.xhr) {
                                var e, t, n = o.xhr;
                                switch (l("readyState", n.readyState), n.readyState) {
                                    case 3:
                                        try {
                                            t = n.status, e = n.responseText
                                        } catch (e) {}
                                        l("status", t), 1223 === t && (t = 204), 200 === t && e && e.length > 0 && (l("chunk"), o.emit("chunk", t, e));
                                        break;
                                    case 4:
                                        t = n.status, l("status", t), 1223 === t && (t = 204), 12005 !== t && 12029 !== t || (t = 0), l("finish", t, n.responseText), o.emit("finish", t, n.responseText), o._cleanup(!1)
                                }
                            }
                        };
                        try {
                            o.xhr.send(n)
                        } catch (e) {
                            o.emit("finish", 0, ""), o._cleanup(!1)
                        }
                    }, i.prototype._cleanup = function(e) {
                        if (l("cleanup"), this.xhr) {
                            if (this.removeAllListeners(), a.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), e) try {
                                this.xhr.abort()
                            } catch (e) {}
                            this.unloadRef = this.xhr = null
                        }
                    }, i.prototype.close = function() {
                        l("close"), this._cleanup(!0)
                    }, i.enabled = !!u;
                    var f = ["Active"].concat("Object").join("X");
                    !i.enabled && f in r && (l("overriding xmlhttprequest"), u = function() {
                        try {
                            return new r[f]("Microsoft.XMLHTTP")
                        } catch (e) {
                            return null
                        }
                    }, i.enabled = !!new u);
                    var d = !1;
                    try {
                        d = "withCredentials" in new u
                    } catch (e) {}
                    i.supportsCORS = d, t.exports = i
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/event": 46,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            18: [function(e, t, n) {
                (function(e) {
                    t.exports = e.EventSource
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            19: [function(e, t, n) {
                (function(e) {
                    "use strict";
                    var n = e.WebSocket || e.MozWebSocket;
                    t.exports = n ? function(e) {
                        return new n(e)
                    } : void 0
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            20: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if (!r.enabled()) throw new Error("Transport created when disabled");
                    o.call(this, e, "/eventsource", s, a)
                }
                var i = e("inherits"),
                    o = e("./lib/ajax-based"),
                    s = e("./receiver/eventsource"),
                    a = e("./sender/xhr-cors"),
                    c = e("eventsource");
                i(r, o), r.enabled = function() {
                    return !!c
                }, r.transportName = "eventsource", r.roundTrips = 2, t.exports = r
            }, {
                "./lib/ajax-based": 24,
                "./receiver/eventsource": 29,
                "./sender/xhr-cors": 35,
                eventsource: 18,
                inherits: 57
            }],
            21: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if (!o.enabled) throw new Error("Transport created when disabled");
                    a.call(this, e, "/htmlfile", o, s)
                }
                var i = e("inherits"),
                    o = e("./receiver/htmlfile"),
                    s = e("./sender/xhr-local"),
                    a = e("./lib/ajax-based");
                i(r, a), r.enabled = function(e) {
                    return o.enabled && e.sameOrigin
                }, r.transportName = "htmlfile", r.roundTrips = 2, t.exports = r
            }, {
                "./lib/ajax-based": 24,
                "./receiver/htmlfile": 30,
                "./sender/xhr-local": 37,
                inherits: 57
            }],
            22: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t, n) {
                        if (!r.enabled()) throw new Error("Transport created when disabled");
                        s.call(this);
                        var i = this;
                        this.origin = c.getOrigin(n), this.baseUrl = n, this.transUrl = t, this.transport = e, this.windowId = f.string(8);
                        var o = c.addPath(n, "/iframe.html") + "#" + this.windowId;
                        d(e, t, o), this.iframeObj = u.createIframe(o, function(e) {
                            d("err callback"), i.emit("close", 1006, "Unable to load an iframe (" + e + ")"), i.close()
                        }), this.onmessageCallback = this._message.bind(this), l.attachEvent("message", this.onmessageCallback)
                    }
                    var i = e("inherits"),
                        o = e("json3"),
                        s = e("events").EventEmitter,
                        a = e("../version"),
                        c = e("../utils/url"),
                        u = e("../utils/iframe"),
                        l = e("../utils/event"),
                        f = e("../utils/random"),
                        d = function() {};
                    "production" !== n.env.NODE_ENV && (d = e("debug")("sockjs-client:transport:iframe")), i(r, s), r.prototype.close = function() {
                        if (d("close"), this.removeAllListeners(), this.iframeObj) {
                            l.detachEvent("message", this.onmessageCallback);
                            try {
                                this.postMessage("c")
                            } catch (e) {}
                            this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
                        }
                    }, r.prototype._message = function(e) {
                        if (d("message", e.data), !c.isOriginEqual(e.origin, this.origin)) return void d("not same origin", e.origin, this.origin);
                        var t;
                        try {
                            t = o.parse(e.data)
                        } catch (t) {
                            return void d("bad json", e.data)
                        }
                        if (t.windowId !== this.windowId) return void d("mismatched window id", t.windowId, this.windowId);
                        switch (t.type) {
                            case "s":
                                this.iframeObj.loaded(), this.postMessage("s", o.stringify([a, this.transport, this.transUrl, this.baseUrl]));
                                break;
                            case "t":
                                this.emit("message", t.data);
                                break;
                            case "c":
                                var n;
                                try {
                                    n = o.parse(t.data)
                                } catch (e) {
                                    return void d("bad json", t.data)
                                }
                                this.emit("close", n[0], n[1]), this.close()
                        }
                    }, r.prototype.postMessage = function(e, t) {
                        d("postMessage", e, t), this.iframeObj.post(o.stringify({
                            windowId: this.windowId,
                            type: e,
                            data: t || ""
                        }), this.origin)
                    }, r.prototype.send = function(e) {
                        d("send", e), this.postMessage("m", e)
                    }, r.enabled = function() {
                        return u.iframeEnabled
                    }, r.transportName = "iframe", r.roundTrips = 2, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                "../utils/event": 46,
                "../utils/iframe": 47,
                "../utils/random": 50,
                "../utils/url": 52,
                "../version": 53,
                debug: 55,
                events: 3,
                inherits: 57,
                json3: 58
            }],
            23: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e) {
                        if (!r.enabled()) throw new Error("Transport created when disabled");
                        o.call(this, e, "/jsonp", a, s)
                    }
                    var i = e("inherits"),
                        o = e("./lib/sender-receiver"),
                        s = e("./receiver/jsonp"),
                        a = e("./sender/jsonp");
                    i(r, o), r.enabled = function() {
                        return !!n.document
                    }, r.transportName = "jsonp-polling", r.roundTrips = 1, r.needBody = !0, t.exports = r
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./lib/sender-receiver": 28,
                "./receiver/jsonp": 31,
                "./sender/jsonp": 33,
                inherits: 57
            }],
            24: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e) {
                        return function(t, n, r) {
                            c("create ajax sender", t, n);
                            var i = {};
                            "string" == typeof n && (i.headers = {
                                "Content-type": "text/plain"
                            });
                            var o = s.addPath(t, "/xhr_send"),
                                a = new e("POST", o, n, i);
                            return a.once("finish", function(e) {
                                    if (c("finish", e), a = null, 200 !== e && 204 !== e) return r(new Error("http status " + e));
                                    r()
                                }),
                                function() {
                                    c("abort"), a.close(), a = null;
                                    var e = new Error("Aborted");
                                    e.code = 1e3, r(e)
                                }
                        }
                    }

                    function i(e, t, n, i) {
                        a.call(this, e, t, r(i), n, i)
                    }
                    var o = e("inherits"),
                        s = e("../../utils/url"),
                        a = e("./sender-receiver"),
                        c = function() {};
                    "production" !== n.env.NODE_ENV && (c = e("debug")("sockjs-client:ajax-based")), o(i, a), t.exports = i
                }).call(this, {
                    env: {}
                })
            }, {
                "../../utils/url": 52,
                "./sender-receiver": 28,
                debug: 55,
                inherits: 57
            }],
            25: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t) {
                        s(e), o.call(this), this.sendBuffer = [], this.sender = t, this.url = e
                    }
                    var i = e("inherits"),
                        o = e("events").EventEmitter,
                        s = function() {};
                    "production" !== n.env.NODE_ENV && (s = e("debug")("sockjs-client:buffered-sender")), i(r, o), r.prototype.send = function(e) {
                        s("send", e), this.sendBuffer.push(e), this.sendStop || this.sendSchedule()
                    }, r.prototype.sendScheduleWait = function() {
                        s("sendScheduleWait");
                        var e, t = this;
                        this.sendStop = function() {
                            s("sendStop"), t.sendStop = null, clearTimeout(e)
                        }, e = setTimeout(function() {
                            s("timeout"), t.sendStop = null, t.sendSchedule()
                        }, 25)
                    }, r.prototype.sendSchedule = function() {
                        s("sendSchedule", this.sendBuffer.length);
                        var e = this;
                        if (this.sendBuffer.length > 0) {
                            var t = "[" + this.sendBuffer.join(",") + "]";
                            this.sendStop = this.sender(this.url, t, function(t) {
                                e.sendStop = null, t ? (s("error", t), e.emit("close", t.code || 1006, "Sending error: " + t), e.close()) : e.sendScheduleWait()
                            }), this.sendBuffer = []
                        }
                    }, r.prototype._cleanup = function() {
                        s("_cleanup"), this.removeAllListeners()
                    }, r.prototype.close = function() {
                        s("close"), this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
                    }, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                inherits: 57
            }],
            26: [function(e, t, n) {
                (function(n) {
                    "use strict";
                    var r = e("inherits"),
                        i = e("../iframe"),
                        o = e("../../utils/object");
                    t.exports = function(e) {
                        function t(t, n) {
                            i.call(this, e.transportName, t, n)
                        }
                        return r(t, i), t.enabled = function(t, r) {
                            if (!n.document) return !1;
                            var s = o.extend({}, r);
                            return s.sameOrigin = !0, e.enabled(s) && i.enabled()
                        }, t.transportName = "iframe-" + e.transportName, t.needBody = !0, t.roundTrips = i.roundTrips + e.roundTrips - 1, t.facadeTransport = e, t
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/object": 49,
                "../iframe": 22,
                inherits: 57
            }],
            27: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t, n) {
                        s(t), o.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = n, this._scheduleReceiver()
                    }
                    var i = e("inherits"),
                        o = e("events").EventEmitter,
                        s = function() {};
                    "production" !== n.env.NODE_ENV && (s = e("debug")("sockjs-client:polling")), i(r, o), r.prototype._scheduleReceiver = function() {
                        s("_scheduleReceiver");
                        var e = this,
                            t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
                        t.on("message", function(t) {
                            s("message", t), e.emit("message", t)
                        }), t.once("close", function(n, r) {
                            s("close", n, r, e.pollIsClosing), e.poll = t = null, e.pollIsClosing || ("network" === r ? e._scheduleReceiver() : (e.emit("close", n || 1006, r), e.removeAllListeners()))
                        })
                    }, r.prototype.abort = function() {
                        s("abort"), this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
                    }, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                inherits: 57
            }],
            28: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t, n, r, i) {
                        var u = o.addPath(e, t);
                        c(u);
                        var l = this;
                        s.call(this, e, n), this.poll = new a(r, u, i), this.poll.on("message", function(e) {
                            c("poll message", e), l.emit("message", e)
                        }), this.poll.once("close", function(e, t) {
                            c("poll close", e, t), l.poll = null, l.emit("close", e, t), l.close()
                        })
                    }
                    var i = e("inherits"),
                        o = e("../../utils/url"),
                        s = e("./buffered-sender"),
                        a = e("./polling"),
                        c = function() {};
                    "production" !== n.env.NODE_ENV && (c = e("debug")("sockjs-client:sender-receiver")), i(r, s), r.prototype.close = function() {
                        s.prototype.close.call(this), c("close"), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
                    }, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                "../../utils/url": 52,
                "./buffered-sender": 25,
                "./polling": 27,
                debug: 55,
                inherits: 57
            }],
            29: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e) {
                        a(e), o.call(this);
                        var t = this,
                            n = this.es = new s(e);
                        n.onmessage = function(e) {
                            a("message", e.data), t.emit("message", decodeURI(e.data))
                        }, n.onerror = function(e) {
                            a("error", n.readyState, e);
                            var r = 2 !== n.readyState ? "network" : "permanent";
                            t._cleanup(), t._close(r)
                        }
                    }
                    var i = e("inherits"),
                        o = e("events").EventEmitter,
                        s = e("eventsource"),
                        a = function() {};
                    "production" !== n.env.NODE_ENV && (a = e("debug")("sockjs-client:receiver:eventsource")), i(r, o), r.prototype.abort = function() {
                        a("abort"), this._cleanup(), this._close("user")
                    }, r.prototype._cleanup = function() {
                        a("cleanup");
                        var e = this.es;
                        e && (e.onmessage = e.onerror = null, e.close(), this.es = null)
                    }, r.prototype._close = function(e) {
                        a("close", e);
                        var t = this;
                        setTimeout(function() {
                            t.emit("close", null, e), t.removeAllListeners()
                        }, 200)
                    }, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                eventsource: 18,
                inherits: 57
            }],
            30: [function(e, t, n) {
                (function(n, r) {
                    "use strict";

                    function i(e) {
                        l(e), c.call(this);
                        var t = this;
                        s.polluteGlobalNamespace(), this.id = "a" + u.string(6), e = a.addQuery(e, "c=" + decodeURIComponent(s.WPrefix + "." + this.id)), l("using htmlfile", i.htmlfileEnabled);
                        var n = i.htmlfileEnabled ? s.createHtmlfile : s.createIframe;
                        r[s.WPrefix][this.id] = {
                            start: function() {
                                l("start"), t.iframeObj.loaded()
                            },
                            message: function(e) {
                                l("message", e), t.emit("message", e)
                            },
                            stop: function() {
                                l("stop"), t._cleanup(), t._close("network")
                            }
                        }, this.iframeObj = n(e, function() {
                            l("callback"), t._cleanup(), t._close("permanent")
                        })
                    }
                    var o = e("inherits"),
                        s = e("../../utils/iframe"),
                        a = e("../../utils/url"),
                        c = e("events").EventEmitter,
                        u = e("../../utils/random"),
                        l = function() {};
                    "production" !== n.env.NODE_ENV && (l = e("debug")("sockjs-client:receiver:htmlfile")), o(i, c), i.prototype.abort = function() {
                        l("abort"), this._cleanup(), this._close("user")
                    }, i.prototype._cleanup = function() {
                        l("_cleanup"), this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete r[s.WPrefix][this.id]
                    }, i.prototype._close = function(e) {
                        l("_close", e), this.emit("close", null, e), this.removeAllListeners()
                    }, i.htmlfileEnabled = !1;
                    var f = ["Active"].concat("Object").join("X");
                    if (f in r) try {
                        i.htmlfileEnabled = !!new r[f]("htmlfile")
                    } catch (e) {}
                    i.enabled = i.htmlfileEnabled || s.iframeEnabled, t.exports = i
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/iframe": 47,
                "../../utils/random": 50,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            31: [function(e, t, n) {
                (function(n, r) {
                    "use strict";

                    function i(e) {
                        f(e);
                        var t = this;
                        l.call(this), o.polluteGlobalNamespace(), this.id = "a" + s.string(6);
                        var n = c.addQuery(e, "c=" + encodeURIComponent(o.WPrefix + "." + this.id));
                        r[o.WPrefix][this.id] = this._callback.bind(this), this._createScript(n), this.timeoutId = setTimeout(function() {
                            f("timeout"), t._abort(new Error("JSONP script loaded abnormally (timeout)"))
                        }, i.timeout)
                    }
                    var o = e("../../utils/iframe"),
                        s = e("../../utils/random"),
                        a = e("../../utils/browser"),
                        c = e("../../utils/url"),
                        u = e("inherits"),
                        l = e("events").EventEmitter,
                        f = function() {};
                    "production" !== n.env.NODE_ENV && (f = e("debug")("sockjs-client:receiver:jsonp")), u(i, l), i.prototype.abort = function() {
                        if (f("abort"), r[o.WPrefix][this.id]) {
                            var e = new Error("JSONP user aborted read");
                            e.code = 1e3, this._abort(e)
                        }
                    }, i.timeout = 35e3, i.scriptErrorTimeout = 1e3, i.prototype._callback = function(e) {
                        f("_callback", e), this._cleanup(), this.aborting || (e && (f("message", e), this.emit("message", e)), this.emit("close", null, "network"), this.removeAllListeners())
                    }, i.prototype._abort = function(e) {
                        f("_abort", e), this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners()
                    }, i.prototype._cleanup = function() {
                        if (f("_cleanup"), clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                            var e = this.script;
                            e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null
                        }
                        delete r[o.WPrefix][this.id]
                    }, i.prototype._scriptError = function() {
                        f("_scriptError");
                        var e = this;
                        this.errorTimer || (this.errorTimer = setTimeout(function() {
                            e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"))
                        }, i.scriptErrorTimeout))
                    }, i.prototype._createScript = function(e) {
                        f("_createScript", e);
                        var t, n = this,
                            i = this.script = r.document.createElement("script");
                        if (i.id = "a" + s.string(8), i.src = e, i.type = "text/javascript", i.charset = "UTF-8", i.onerror = this._scriptError.bind(this), i.onload = function() {
                                f("onload"), n._abort(new Error("JSONP script loaded abnormally (onload)"))
                            }, i.onreadystatechange = function() {
                                if (f("onreadystatechange", i.readyState), /loaded|closed/.test(i.readyState)) {
                                    if (i && i.htmlFor && i.onclick) {
                                        n.loadedOkay = !0;
                                        try {
                                            i.onclick()
                                        } catch (e) {}
                                    }
                                    i && n._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
                                }
                            }, void 0 === i.async && r.document.attachEvent)
                            if (a.isOpera()) t = this.script2 = r.document.createElement("script"), t.text = "try{var a = document.getElementById('" + i.id + "'); if(a)a.onerror();}catch(x){};", i.async = t.async = !1;
                            else {
                                try {
                                    i.htmlFor = i.id, i.event = "onclick"
                                } catch (e) {}
                                i.async = !0
                            }
                        void 0 !== i.async && (i.async = !0);
                        var o = r.document.getElementsByTagName("head")[0];
                        o.insertBefore(i, o.firstChild), t && o.insertBefore(t, o.firstChild)
                    }, t.exports = i
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/browser": 44,
                "../../utils/iframe": 47,
                "../../utils/random": 50,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            32: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t) {
                        s(e), o.call(this);
                        var n = this;
                        this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function(e, t) {
                            s("finish", e, t), n._chunkHandler(e, t), n.xo = null;
                            var r = 200 === e ? "network" : "permanent";
                            s("close", r), n.emit("close", null, r), n._cleanup()
                        })
                    }
                    var i = e("inherits"),
                        o = e("events").EventEmitter,
                        s = function() {};
                    "production" !== n.env.NODE_ENV && (s = e("debug")("sockjs-client:receiver:xhr")), i(r, o), r.prototype._chunkHandler = function(e, t) {
                        if (s("_chunkHandler", e), 200 === e && t)
                            for (var n = -1;; this.bufferPosition += n + 1) {
                                var r = t.slice(this.bufferPosition);
                                if (-1 === (n = r.indexOf("\n"))) break;
                                var i = r.slice(0, n);
                                i && (s("message", i), this.emit("message", i))
                            }
                    }, r.prototype._cleanup = function() {
                        s("_cleanup"), this.removeAllListeners()
                    }, r.prototype.abort = function() {
                        s("abort"), this.xo && (this.xo.close(), s("close"), this.emit("close", null, "user"), this.xo = null), this._cleanup()
                    }, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                events: 3,
                inherits: 57
            }],
            33: [function(e, t, n) {
                (function(n, r) {
                    "use strict";

                    function i(e) {
                        c("createIframe", e);
                        try {
                            return r.document.createElement('<iframe name="' + e + '">')
                        } catch (n) {
                            var t = r.document.createElement("iframe");
                            return t.name = e, t
                        }
                    }

                    function o() {
                        c("createForm"), u = r.document.createElement("form"), u.style.display = "none", u.style.position = "absolute", u.method = "POST", u.enctype = "application/x-www-form-urlencoded", u.acceptCharset = "UTF-8", l = r.document.createElement("textarea"), l.name = "d", u.appendChild(l), r.document.body.appendChild(u)
                    }
                    var s = e("../../utils/random"),
                        a = e("../../utils/url"),
                        c = function() {};
                    "production" !== n.env.NODE_ENV && (c = e("debug")("sockjs-client:sender:jsonp"));
                    var u, l;
                    t.exports = function(e, t, n) {
                        c(e, t), u || o();
                        var r = "a" + s.string(8);
                        u.target = r, u.action = a.addQuery(a.addPath(e, "/jsonp_send"), "i=" + r);
                        var f = i(r);
                        f.id = r, f.style.display = "none", u.appendChild(f);
                        try {
                            l.value = t
                        } catch (e) {}
                        u.submit();
                        var d = function(e) {
                            c("completed", r, e), f.onerror && (f.onreadystatechange = f.onerror = f.onload = null, setTimeout(function() {
                                c("cleaning up", r), f.parentNode.removeChild(f), f = null
                            }, 500), l.value = "", n(e))
                        };
                        return f.onerror = function() {
                                c("onerror", r), d()
                            }, f.onload = function() {
                                c("onload", r), d()
                            }, f.onreadystatechange = function(e) {
                                c("onreadystatechange", r, f.readyState, e), "complete" === f.readyState && d()
                            },
                            function() {
                                c("aborted", r), d(new Error("Aborted"))
                            }
                    }
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/random": 50,
                "../../utils/url": 52,
                debug: 55
            }],
            34: [function(e, t, n) {
                (function(n, r) {
                    "use strict";

                    function i(e, t, n) {
                        l(e, t);
                        var r = this;
                        o.call(this), setTimeout(function() {
                            r._start(e, t, n)
                        }, 0)
                    }
                    var o = e("events").EventEmitter,
                        s = e("inherits"),
                        a = e("../../utils/event"),
                        c = e("../../utils/browser"),
                        u = e("../../utils/url"),
                        l = function() {};
                    "production" !== n.env.NODE_ENV && (l = e("debug")("sockjs-client:sender:xdr")), s(i, o), i.prototype._start = function(e, t, n) {
                        l("_start");
                        var i = this,
                            o = new r.XDomainRequest;
                        t = u.addQuery(t, "t=" + +new Date), o.onerror = function() {
                            l("onerror"), i._error()
                        }, o.ontimeout = function() {
                            l("ontimeout"), i._error()
                        }, o.onprogress = function() {
                            l("progress", o.responseText), i.emit("chunk", 200, o.responseText)
                        }, o.onload = function() {
                            l("load"), i.emit("finish", 200, o.responseText), i._cleanup(!1)
                        }, this.xdr = o, this.unloadRef = a.unloadAdd(function() {
                            i._cleanup(!0)
                        });
                        try {
                            this.xdr.open(e, t), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(n)
                        } catch (e) {
                            this._error()
                        }
                    }, i.prototype._error = function() {
                        this.emit("finish", 0, ""), this._cleanup(!1)
                    }, i.prototype._cleanup = function(e) {
                        if (l("cleanup", e), this.xdr) {
                            if (this.removeAllListeners(), a.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e) try {
                                this.xdr.abort()
                            } catch (e) {}
                            this.unloadRef = this.xdr = null
                        }
                    }, i.prototype.close = function() {
                        l("close"), this._cleanup(!0)
                    }, i.enabled = !(!r.XDomainRequest || !c.hasDomain()), t.exports = i
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../../utils/browser": 44,
                "../../utils/event": 46,
                "../../utils/url": 52,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            35: [function(e, t, n) {
                "use strict";

                function r(e, t, n, r) {
                    o.call(this, e, t, n, r)
                }
                var i = e("inherits"),
                    o = e("../driver/xhr");
                i(r, o), r.enabled = o.enabled && o.supportsCORS, t.exports = r
            }, {
                "../driver/xhr": 17,
                inherits: 57
            }],
            36: [function(e, t, n) {
                "use strict";

                function r() {
                    var e = this;
                    i.call(this), this.to = setTimeout(function() {
                        e.emit("finish", 200, "{}")
                    }, r.timeout)
                }
                var i = e("events").EventEmitter;
                e("inherits")(r, i), r.prototype.close = function() {
                    clearTimeout(this.to)
                }, r.timeout = 2e3, t.exports = r
            }, {
                events: 3,
                inherits: 57
            }],
            37: [function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    o.call(this, e, t, n, {
                        noCredentials: !0
                    })
                }
                var i = e("inherits"),
                    o = e("../driver/xhr");
                i(r, o), r.enabled = o.enabled, t.exports = r
            }, {
                "../driver/xhr": 17,
                inherits: 57
            }],
            38: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e, t, n) {
                        if (!r.enabled()) throw new Error("Transport created when disabled");
                        a.call(this), u("constructor", e);
                        var s = this,
                            l = o.addPath(e, "/websocket");
                        l = "https" === l.slice(0, 5) ? "wss" + l.slice(5) : "ws" + l.slice(4), this.url = l, this.ws = new c(this.url, [], n), this.ws.onmessage = function(e) {
                            u("message event", e.data), s.emit("message", e.data)
                        }, this.unloadRef = i.unloadAdd(function() {
                            u("unload"), s.ws.close()
                        }), this.ws.onclose = function(e) {
                            u("close event", e.code, e.reason), s.emit("close", e.code, e.reason), s._cleanup()
                        }, this.ws.onerror = function(e) {
                            u("error event", e), s.emit("close", 1006, "WebSocket connection broken"), s._cleanup()
                        }
                    }
                    var i = e("../utils/event"),
                        o = e("../utils/url"),
                        s = e("inherits"),
                        a = e("events").EventEmitter,
                        c = e("./driver/websocket"),
                        u = function() {};
                    "production" !== n.env.NODE_ENV && (u = e("debug")("sockjs-client:websocket")), s(r, a), r.prototype.send = function(e) {
                        var t = "[" + e + "]";
                        u("send", t), this.ws.send(t)
                    }, r.prototype.close = function() {
                        u("close");
                        var e = this.ws;
                        this._cleanup(), e && e.close()
                    }, r.prototype._cleanup = function() {
                        u("_cleanup");
                        var e = this.ws;
                        e && (e.onmessage = e.onclose = e.onerror = null), i.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
                    }, r.enabled = function() {
                        return u("enabled"), !!c
                    }, r.transportName = "websocket", r.roundTrips = 2, t.exports = r
                }).call(this, {
                    env: {}
                })
            }, {
                "../utils/event": 46,
                "../utils/url": 52,
                "./driver/websocket": 19,
                debug: 55,
                events: 3,
                inherits: 57
            }],
            39: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if (!c.enabled) throw new Error("Transport created when disabled");
                    o.call(this, e, "/xhr", a, c)
                }
                var i = e("inherits"),
                    o = e("./lib/ajax-based"),
                    s = e("./xdr-streaming"),
                    a = e("./receiver/xhr"),
                    c = e("./sender/xdr");
                i(r, o), r.enabled = s.enabled, r.transportName = "xdr-polling", r.roundTrips = 2, t.exports = r
            }, {
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xdr": 34,
                "./xdr-streaming": 40,
                inherits: 57
            }],
            40: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if (!a.enabled) throw new Error("Transport created when disabled");
                    o.call(this, e, "/xhr_streaming", s, a)
                }
                var i = e("inherits"),
                    o = e("./lib/ajax-based"),
                    s = e("./receiver/xhr"),
                    a = e("./sender/xdr");
                i(r, o), r.enabled = function(e) {
                    return !e.cookie_needed && !e.nullOrigin && (a.enabled && e.sameScheme)
                }, r.transportName = "xdr-streaming", r.roundTrips = 2, t.exports = r
            }, {
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xdr": 34,
                inherits: 57
            }],
            41: [function(e, t, n) {
                "use strict";

                function r(e) {
                    if (!c.enabled && !a.enabled) throw new Error("Transport created when disabled");
                    o.call(this, e, "/xhr", s, a)
                }
                var i = e("inherits"),
                    o = e("./lib/ajax-based"),
                    s = e("./receiver/xhr"),
                    a = e("./sender/xhr-cors"),
                    c = e("./sender/xhr-local");
                i(r, o), r.enabled = function(e) {
                    return !e.nullOrigin && (!(!c.enabled || !e.sameOrigin) || a.enabled)
                }, r.transportName = "xhr-polling", r.roundTrips = 2, t.exports = r
            }, {
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xhr-cors": 35,
                "./sender/xhr-local": 37,
                inherits: 57
            }],
            42: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e) {
                        if (!c.enabled && !a.enabled) throw new Error("Transport created when disabled");
                        o.call(this, e, "/xhr_streaming", s, a)
                    }
                    var i = e("inherits"),
                        o = e("./lib/ajax-based"),
                        s = e("./receiver/xhr"),
                        a = e("./sender/xhr-cors"),
                        c = e("./sender/xhr-local"),
                        u = e("../utils/browser");
                    i(r, o), r.enabled = function(e) {
                        return !e.nullOrigin && (!u.isOpera() && a.enabled)
                    }, r.transportName = "xhr-streaming", r.roundTrips = 2, r.needBody = !!n.document, t.exports = r
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "../utils/browser": 44,
                "./lib/ajax-based": 24,
                "./receiver/xhr": 32,
                "./sender/xhr-cors": 35,
                "./sender/xhr-local": 37,
                inherits: 57
            }],
            43: [function(e, t, n) {
                (function(e) {
                    "use strict";
                    e.crypto && e.crypto.getRandomValues ? t.exports.randomBytes = function(t) {
                        var n = new Uint8Array(t);
                        return e.crypto.getRandomValues(n), n
                    } : t.exports.randomBytes = function(e) {
                        for (var t = new Array(e), n = 0; n < e; n++) t[n] = Math.floor(256 * Math.random());
                        return t
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            44: [function(e, t, n) {
                (function(e) {
                    "use strict";
                    t.exports = {
                        isOpera: function() {
                            return e.navigator && /opera/i.test(e.navigator.userAgent)
                        },
                        isKonqueror: function() {
                            return e.navigator && /konqueror/i.test(e.navigator.userAgent)
                        },
                        hasDomain: function() {
                            if (!e.document) return !0;
                            try {
                                return !!e.document.domain
                            } catch (e) {
                                return !1
                            }
                        }
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            45: [function(e, t, n) {
                "use strict";
                var r, i = e("json3"),
                    o = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
                    s = function(e) {
                        var t, n = {},
                            r = [];
                        for (t = 0; t < 65536; t++) r.push(String.fromCharCode(t));
                        return e.lastIndex = 0, r.join("").replace(e, function(e) {
                            return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                        }), e.lastIndex = 0, n
                    };
                t.exports = {
                    quote: function(e) {
                        var t = i.stringify(e);
                        return o.lastIndex = 0, o.test(t) ? (r || (r = s(o)), t.replace(o, function(e) {
                            return r[e]
                        })) : t
                    }
                }
            }, {
                json3: 58
            }],
            46: [function(e, t, n) {
                (function(n) {
                    "use strict";
                    var r = e("./random"),
                        i = {},
                        o = !1,
                        s = n.chrome && n.chrome.app && n.chrome.app.runtime;
                    t.exports = {
                        attachEvent: function(e, t) {
                            void 0 !== n.addEventListener ? n.addEventListener(e, t, !1) : n.document && n.attachEvent && (n.document.attachEvent("on" + e, t), n.attachEvent("on" + e, t))
                        },
                        detachEvent: function(e, t) {
                            void 0 !== n.addEventListener ? n.removeEventListener(e, t, !1) : n.document && n.detachEvent && (n.document.detachEvent("on" + e, t), n.detachEvent("on" + e, t))
                        },
                        unloadAdd: function(e) {
                            if (s) return null;
                            var t = r.string(8);
                            return i[t] = e, o && setTimeout(this.triggerUnloadCallbacks, 0), t
                        },
                        unloadDel: function(e) {
                            e in i && delete i[e]
                        },
                        triggerUnloadCallbacks: function() {
                            for (var e in i) i[e](), delete i[e]
                        }
                    };
                    var a = function() {
                        o || (o = !0, t.exports.triggerUnloadCallbacks())
                    };
                    s || t.exports.attachEvent("unload", a)
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./random": 50
            }],
            47: [function(e, t, n) {
                (function(n, r) {
                    "use strict";
                    var i = e("./event"),
                        o = e("json3"),
                        s = e("./browser"),
                        a = function() {};
                    "production" !== n.env.NODE_ENV && (a = e("debug")("sockjs-client:utils:iframe")), t.exports = {
                        WPrefix: "_jp",
                        currentWindowId: null,
                        polluteGlobalNamespace: function() {
                            t.exports.WPrefix in r || (r[t.exports.WPrefix] = {})
                        },
                        postMessage: function(e, n) {
                            r.parent !== r ? r.parent.postMessage(o.stringify({
                                windowId: t.exports.currentWindowId,
                                type: e,
                                data: n || ""
                            }), "*") : a("Cannot postMessage, no parent window.", e, n)
                        },
                        createIframe: function(e, t) {
                            var n, o, s = r.document.createElement("iframe"),
                                c = function() {
                                    a("unattach"), clearTimeout(n);
                                    try {
                                        s.onload = null
                                    } catch (e) {}
                                    s.onerror = null
                                },
                                u = function() {
                                    a("cleanup"), s && (c(), setTimeout(function() {
                                        s && s.parentNode.removeChild(s), s = null
                                    }, 0), i.unloadDel(o))
                                },
                                l = function(e) {
                                    a("onerror", e), s && (u(), t(e))
                                },
                                f = function(e, t) {
                                    a("post", e, t), setTimeout(function() {
                                        try {
                                            s && s.contentWindow && s.contentWindow.postMessage(e, t)
                                        } catch (e) {}
                                    }, 0)
                                };
                            return s.src = e, s.style.display = "none", s.style.position = "absolute", s.onerror = function() {
                                l("onerror")
                            }, s.onload = function() {
                                a("onload"), clearTimeout(n), n = setTimeout(function() {
                                    l("onload timeout")
                                }, 2e3)
                            }, r.document.body.appendChild(s), n = setTimeout(function() {
                                l("timeout")
                            }, 15e3), o = i.unloadAdd(u), {
                                post: f,
                                cleanup: u,
                                loaded: c
                            }
                        },
                        createHtmlfile: function(e, n) {
                            var o, s, c, u = ["Active"].concat("Object").join("X"),
                                l = new r[u]("htmlfile"),
                                f = function() {
                                    clearTimeout(o), c.onerror = null
                                },
                                d = function() {
                                    l && (f(), i.unloadDel(s), c.parentNode.removeChild(c), c = l = null, CollectGarbage())
                                },
                                p = function(e) {
                                    a("onerror", e), l && (d(), n(e))
                                },
                                h = function(e, t) {
                                    try {
                                        setTimeout(function() {
                                            c && c.contentWindow && c.contentWindow.postMessage(e, t)
                                        }, 0)
                                    } catch (e) {}
                                };
                            l.open(), l.write('<html><script>document.domain="' + r.document.domain + '";<\/script></html>'), l.close(), l.parentWindow[t.exports.WPrefix] = r[t.exports.WPrefix];
                            var m = l.createElement("div");
                            return l.body.appendChild(m), c = l.createElement("iframe"), m.appendChild(c), c.src = e, c.onerror = function() {
                                p("onerror")
                            }, o = setTimeout(function() {
                                p("timeout")
                            }, 15e3), s = i.unloadAdd(d), {
                                post: h,
                                cleanup: d,
                                loaded: f
                            }
                        }
                    }, t.exports.iframeEnabled = !1, r.document && (t.exports.iframeEnabled = ("function" == typeof r.postMessage || "object" == typeof r.postMessage) && !s.isKonqueror())
                }).call(this, {
                    env: {}
                }, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "./browser": 44,
                "./event": 46,
                debug: 55,
                json3: 58
            }],
            48: [function(e, t, n) {
                (function(e) {
                    "use strict";
                    var n = {};
                    ["log", "debug", "warn"].forEach(function(t) {
                        var r;
                        try {
                            r = e.console && e.console[t] && e.console[t].apply
                        } catch (e) {}
                        n[t] = r ? function() {
                            return e.console[t].apply(e.console, arguments)
                        } : "log" === t ? function() {} : n.log
                    }), t.exports = n
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            49: [function(e, t, n) {
                "use strict";
                t.exports = {
                    isObject: function(e) {
                        var t = typeof e;
                        return "function" === t || "object" === t && !!e
                    },
                    extend: function(e) {
                        if (!this.isObject(e)) return e;
                        for (var t, n, r = 1, i = arguments.length; r < i; r++) {
                            t = arguments[r];
                            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                        return e
                    }
                }
            }, {}],
            50: [function(e, t, n) {
                "use strict";
                var r = e("crypto"),
                    i = "abcdefghijklmnopqrstuvwxyz012345";
                t.exports = {
                    string: function(e) {
                        for (var t = i.length, n = r.randomBytes(e), o = [], s = 0; s < e; s++) o.push(i.substr(n[s] % t, 1));
                        return o.join("")
                    },
                    number: function(e) {
                        return Math.floor(Math.random() * e)
                    },
                    numberString: function(e) {
                        var t = ("" + (e - 1)).length;
                        return (new Array(t + 1).join("0") + this.number(e)).slice(-t)
                    }
                }
            }, {
                crypto: 43
            }],
            51: [function(e, t, n) {
                (function(n) {
                    "use strict";
                    var r = function() {};
                    "production" !== n.env.NODE_ENV && (r = e("debug")("sockjs-client:utils:transport")), t.exports = function(e) {
                        return {
                            filterToEnabled: function(t, n) {
                                var i = {
                                    main: [],
                                    facade: []
                                };
                                return t ? "string" == typeof t && (t = [t]) : t = [], e.forEach(function(e) {
                                    if (e) return "websocket" === e.transportName && !1 === n.websocket ? void r("disabled from server", "websocket") : t.length && -1 === t.indexOf(e.transportName) ? void r("not in whitelist", e.transportName) : void(e.enabled(n) ? (r("enabled", e.transportName), i.main.push(e), e.facadeTransport && i.facade.push(e.facadeTransport)) : r("disabled", e.transportName))
                                }), i
                            }
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55
            }],
            52: [function(e, t, n) {
                (function(n) {
                    "use strict";
                    var r = e("url-parse"),
                        i = function() {};
                    "production" !== n.env.NODE_ENV && (i = e("debug")("sockjs-client:utils:url")), t.exports = {
                        getOrigin: function(e) {
                            if (!e) return null;
                            var t = new r(e);
                            if ("file:" === t.protocol) return null;
                            var n = t.port;
                            return n || (n = "https:" === t.protocol ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + n
                        },
                        isOriginEqual: function(e, t) {
                            var n = this.getOrigin(e) === this.getOrigin(t);
                            return i("same", e, t, n), n
                        },
                        isSchemeEqual: function(e, t) {
                            return e.split(":")[0] === t.split(":")[0]
                        },
                        addPath: function(e, t) {
                            var n = e.split("?");
                            return n[0] + t + (n[1] ? "?" + n[1] : "")
                        },
                        addQuery: function(e, t) {
                            return e + (-1 === e.indexOf("?") ? "?" + t : "&" + t)
                        },
                        isLoopbackAddr: function(e) {
                            return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) || /^\[::1\]$/.test(e)
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                debug: 55,
                "url-parse": 61
            }],
            53: [function(e, t, n) {
                t.exports = "1.5.1"
            }, {}],
            54: [function(e, t, n) {
                function r(e) {
                    if (e = String(e), !(e.length > 100)) {
                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var n = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return n * d;
                                case "weeks":
                                case "week":
                                case "w":
                                    return n * f;
                                case "days":
                                case "day":
                                case "d":
                                    return n * l;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return n * u;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return n * c;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return n * a;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return n;
                                default:
                                    return
                            }
                        }
                    }
                }

                function i(e) {
                    var t = Math.abs(e);
                    return t >= l ? Math.round(e / l) + "d" : t >= u ? Math.round(e / u) + "h" : t >= c ? Math.round(e / c) + "m" : t >= a ? Math.round(e / a) + "s" : e + "ms"
                }

                function o(e) {
                    var t = Math.abs(e);
                    return t >= l ? s(e, t, l, "day") : t >= u ? s(e, t, u, "hour") : t >= c ? s(e, t, c, "minute") : t >= a ? s(e, t, a, "second") : e + " ms"
                }

                function s(e, t, n, r) {
                    var i = t >= 1.5 * n;
                    return Math.round(e / n) + " " + r + (i ? "s" : "")
                }
                var a = 1e3,
                    c = 60 * a,
                    u = 60 * c,
                    l = 24 * u,
                    f = 7 * l,
                    d = 365.25 * l;
                t.exports = function(e, t) {
                    t = t || {};
                    var n = typeof e;
                    if ("string" === n && e.length > 0) return r(e);
                    if ("number" === n && isFinite(e)) return t.long ? o(e) : i(e);
                    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                }
            }, {}],
            55: [function(e, t, n) {
                (function(r) {
                    "use strict";

                    function i(e) {
                        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function o() {
                        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                    }

                    function s(e) {
                        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
                            var n = "color: " + this.color;
                            e.splice(1, 0, n, "color: inherit");
                            var r = 0,
                                i = 0;
                            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                                "%%" !== e && (r++, "%c" === e && (i = r))
                            }), e.splice(i, 0, n)
                        }
                    }

                    function a() {
                        var e;
                        return "object" === ("undefined" == typeof console ? "undefined" : i(console)) && console.log && (e = console).log.apply(e, arguments)
                    }

                    function c(e) {
                        try {
                            e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug")
                        } catch (e) {}
                    }

                    function u() {
                        var e;
                        try {
                            e = n.storage.getItem("debug")
                        } catch (e) {}
                        return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
                    }
                    n.log = a, n.formatArgs = s, n.save = c, n.load = u, n.useColors = o, n.storage = function() {
                        try {
                            return localStorage
                        } catch (e) {}
                    }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = e("./common")(n), t.exports.formatters.j = function(e) {
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return "[UnexpectedJSONParseError]: " + e.message
                        }
                    }
                }).call(this, {
                    env: {}
                })
            }, {
                "./common": 56
            }],
            56: [function(e, t, n) {
                "use strict";

                function r(t) {
                    function n(e) {
                        for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                        return r.colors[Math.abs(t) % r.colors.length]
                    }

                    function r(e) {
                        function t() {
                            if (t.enabled) {
                                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                var o = t,
                                    a = Number(new Date),
                                    c = a - (s || a);
                                o.diff = c, o.prev = s, o.curr = a, s = a, n[0] = r.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                                var u = 0;
                                n[0] = n[0].replace(/%([a-zA-Z%])/g, function(e, t) {
                                    if ("%%" === e) return e;
                                    u++;
                                    var i = r.formatters[t];
                                    if ("function" == typeof i) {
                                        var s = n[u];
                                        e = i.call(o, s), n.splice(u, 1), u--
                                    }
                                    return e
                                }), r.formatArgs.call(o, n);
                                (o.log || r.log).apply(o, n)
                            }
                        }
                        var s;
                        return t.namespace = e, t.enabled = r.enabled(e), t.useColors = r.useColors(), t.color = n(e), t.destroy = i, t.extend = o, "function" == typeof r.init && r.init(t), r.instances.push(t), t
                    }

                    function i() {
                        var e = r.instances.indexOf(this);
                        return -1 !== e && (r.instances.splice(e, 1), !0)
                    }

                    function o(e, t) {
                        return r(this.namespace + (void 0 === t ? ":" : t) + e)
                    }

                    function s(e) {
                        r.save(e), r.names = [], r.skips = [];
                        var t, n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                            i = n.length;
                        for (t = 0; t < i; t++) n[t] && (e = n[t].replace(/\*/g, ".*?"), "-" === e[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                        for (t = 0; t < r.instances.length; t++) {
                            var o = r.instances[t];
                            o.enabled = r.enabled(o.namespace)
                        }
                    }

                    function a() {
                        r.enable("")
                    }

                    function c(e) {
                        if ("*" === e[e.length - 1]) return !0;
                        var t, n;
                        for (t = 0, n = r.skips.length; t < n; t++)
                            if (r.skips[t].test(e)) return !1;
                        for (t = 0, n = r.names.length; t < n; t++)
                            if (r.names[t].test(e)) return !0;
                        return !1
                    }

                    function u(e) {
                        return e instanceof Error ? e.stack || e.message : e
                    }
                    return r.debug = r, r.default = r, r.coerce = u, r.disable = a, r.enable = s, r.enabled = c, r.humanize = e("ms"), Object.keys(t).forEach(function(e) {
                        r[e] = t[e]
                    }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = n, r.enable(r.load()), r
                }
                t.exports = r
            }, {
                ms: 54
            }],
            57: [function(e, t, n) {
                "function" == typeof Object.create ? t.exports = function(e, t) {
                    t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }))
                } : t.exports = function(e, t) {
                    if (t) {
                        e.super_ = t;
                        var n = function() {};
                        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                    }
                }
            }, {}],
            58: [function(t, n, r) {
                (function(t) {
                    (function() {
                        function i(e, t) {
                            function n(e, t) {
                                try {
                                    e()
                                } catch (e) {
                                    t && t()
                                }
                            }

                            function r(e) {
                                if (null != r[e]) return r[e];
                                var i;
                                if ("bug-string-char-index" == e) i = "a" != "a" [0];
                                else if ("json" == e) i = r("json-stringify") && r("date-serialization") && r("json-parse");
                                else if ("date-serialization" == e) {
                                    if (i = r("json-stringify") && w) {
                                        var o = t.stringify;
                                        n(function() {
                                            i = '"-271821-04-20T00:00:00.000Z"' == o(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == o(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == o(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == o(new f(-1))
                                        })
                                    }
                                } else {
                                    var s, c = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                    if ("json-stringify" == e) {
                                        var o = t.stringify,
                                            l = "function" == typeof o;
                                        l && ((s = function() {
                                            return 1
                                        }).toJSON = s, n(function() {
                                            l = "0" === o(0) && "0" === o(new a) && '""' == o(new u) && o(v) === g && o(g) === g && o() === g && "1" === o(s) && "[1]" == o([s]) && "[null]" == o([g]) && "null" == o(null) && "[null,null,null]" == o([g, v, null]) && o({
                                                a: [s, !0, !1, null, "\0\b\n\f\r\t"]
                                            }) == c && "1" === o(null, s) && "[\n 1,\n 2\n]" == o([1, 2], null, 1)
                                        }, function() {
                                            l = !1
                                        })), i = l
                                    }
                                    if ("json-parse" == e) {
                                        var d, p = t.parse;
                                        "function" == typeof p && n(function() {
                                            0 !== p("0") || p(!1) || (s = p(c), (d = 5 == s.a.length && 1 === s.a[0]) && (n(function() {
                                                d = !p('"\t"')
                                            }), d && n(function() {
                                                d = 1 !== p("01")
                                            }), d && n(function() {
                                                d = 1 !== p("1.")
                                            })))
                                        }, function() {
                                            d = !1
                                        }), i = d
                                    }
                                }
                                return r[e] = !!i
                            }

                            function o(e) {
                                return x(this)
                            }
                            e || (e = c.Object()), t || (t = c.Object());
                            var a = e.Number || c.Number,
                                u = e.String || c.String,
                                l = e.Object || c.Object,
                                f = e.Date || c.Date,
                                d = e.SyntaxError || c.SyntaxError,
                                p = e.TypeError || c.TypeError,
                                h = e.Math || c.Math,
                                m = e.JSON || c.JSON;
                            "object" == typeof m && m && (t.stringify = m.stringify, t.parse = m.parse);
                            var g, b = l.prototype,
                                v = b.toString,
                                y = b.hasOwnProperty,
                                w = new f(-0xc782b5b800cec);
                            if (n(function() {
                                    w = -109252 == w.getUTCFullYear() && 0 === w.getUTCMonth() && 1 === w.getUTCDate() && 10 == w.getUTCHours() && 37 == w.getUTCMinutes() && 6 == w.getUTCSeconds() && 708 == w.getUTCMilliseconds()
                                }), r["bug-string-char-index"] = r["date-serialization"] = r.json = r["json-stringify"] = r["json-parse"] = null, !r("json")) {
                                var _ = r("bug-string-char-index"),
                                    C = function(e, t) {
                                        var n, r, i, o = 0;
                                        (n = function() {
                                            this.valueOf = 0
                                        }).prototype.valueOf = 0, r = new n;
                                        for (i in r) y.call(r, i) && o++;
                                        return n = r = null, o ? C = function(e, t) {
                                            var n, r, i = "[object Function]" == v.call(e);
                                            for (n in e) i && "prototype" == n || !y.call(e, n) || (r = "constructor" === n) || t(n);
                                            (r || y.call(e, n = "constructor")) && t(n)
                                        } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], C = function(e, t) {
                                            var n, i, o = "[object Function]" == v.call(e),
                                                a = !o && "function" != typeof e.constructor && s[typeof e.hasOwnProperty] && e.hasOwnProperty || y;
                                            for (n in e) o && "prototype" == n || !a.call(e, n) || t(n);
                                            for (i = r.length; n = r[--i];) a.call(e, n) && t(n)
                                        }), C(e, t)
                                    };
                                if (!r("json-stringify") && !r("date-serialization")) {
                                    var S = {
                                            92: "\\\\",
                                            34: '\\"',
                                            8: "\\b",
                                            12: "\\f",
                                            10: "\\n",
                                            13: "\\r",
                                            9: "\\t"
                                        },
                                        O = function(e, t) {
                                            return ("000000" + (t || 0)).slice(-e)
                                        },
                                        x = function(e) {
                                            var t, n, r, i, o, s, a, c, u;
                                            if (w) t = function(e) {
                                                n = e.getUTCFullYear(), r = e.getUTCMonth(), i = e.getUTCDate(), s = e.getUTCHours(), a = e.getUTCMinutes(), c = e.getUTCSeconds(), u = e.getUTCMilliseconds()
                                            };
                                            else {
                                                var l = h.floor,
                                                    f = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                                    d = function(e, t) {
                                                        return f[t] + 365 * (e - 1970) + l((e - 1969 + (t = +(t > 1))) / 4) - l((e - 1901 + t) / 100) + l((e - 1601 + t) / 400)
                                                    };
                                                t = function(e) {
                                                    for (i = l(e / 864e5), n = l(i / 365.2425) + 1970 - 1; d(n + 1, 0) <= i; n++);
                                                    for (r = l((i - d(n, 0)) / 30.42); d(n, r + 1) <= i; r++);
                                                    i = 1 + i - d(n, r), o = (e % 864e5 + 864e5) % 864e5, s = l(o / 36e5) % 24, a = l(o / 6e4) % 60, c = l(o / 1e3) % 60, u = o % 1e3
                                                }
                                            }
                                            return (x = function(e) {
                                                return e > -1 / 0 && e < 1 / 0 ? (t(e), e = (n <= 0 || n >= 1e4 ? (n < 0 ? "-" : "+") + O(6, n < 0 ? -n : n) : O(4, n)) + "-" + O(2, r + 1) + "-" + O(2, i) + "T" + O(2, s) + ":" + O(2, a) + ":" + O(2, c) + "." + O(3, u) + "Z", n = r = i = s = a = c = u = null) : e = null, e
                                            })(e)
                                        };
                                    if (r("json-stringify") && !r("date-serialization")) {
                                        var E = t.stringify;
                                        t.stringify = function(e, t, n) {
                                            var r = f.prototype.toJSON;
                                            f.prototype.toJSON = o;
                                            var i = E(e, t, n);
                                            return f.prototype.toJSON = r, i
                                        }
                                    } else {
                                        var k = function(e) {
                                                var t = e.charCodeAt(0),
                                                    n = S[t];
                                                return n || "\\u00" + O(2, t.toString(16))
                                            },
                                            j = /[\x00-\x1f\x22\x5c]/g,
                                            T = function(e) {
                                                return j.lastIndex = 0, '"' + (j.test(e) ? e.replace(j, k) : e) + '"'
                                            },
                                            A = function(e, t, r, i, o, s, a) {
                                                var c, u, l, d, h, m, b, y, w;
                                                if (n(function() {
                                                        c = t[e]
                                                    }), "object" == typeof c && c && (c.getUTCFullYear && "[object Date]" == v.call(c) && c.toJSON === f.prototype.toJSON ? c = x(c) : "function" == typeof c.toJSON && (c = c.toJSON(e))), r && (c = r.call(t, e, c)), c == g) return c === g ? c : "null";
                                                switch (u = typeof c, "object" == u && (l = v.call(c)), l || u) {
                                                    case "boolean":
                                                    case "[object Boolean]":
                                                        return "" + c;
                                                    case "number":
                                                    case "[object Number]":
                                                        return c > -1 / 0 && c < 1 / 0 ? "" + c : "null";
                                                    case "string":
                                                    case "[object String]":
                                                        return T("" + c)
                                                }
                                                if ("object" == typeof c) {
                                                    for (b = a.length; b--;)
                                                        if (a[b] === c) throw p();
                                                    if (a.push(c), d = [], y = s, s += o, "[object Array]" == l) {
                                                        for (m = 0, b = c.length; m < b; m++) h = A(m, c, r, i, o, s, a), d.push(h === g ? "null" : h);
                                                        w = d.length ? o ? "[\n" + s + d.join(",\n" + s) + "\n" + y + "]" : "[" + d.join(",") + "]" : "[]"
                                                    } else C(i || c, function(e) {
                                                        var t = A(e, c, r, i, o, s, a);
                                                        t !== g && d.push(T(e) + ":" + (o ? " " : "") + t)
                                                    }), w = d.length ? o ? "{\n" + s + d.join(",\n" + s) + "\n" + y + "}" : "{" + d.join(",") + "}" : "{}";
                                                    return a.pop(), w
                                                }
                                            };
                                        t.stringify = function(e, t, n) {
                                            var r, i, o, a;
                                            if (s[typeof t] && t)
                                                if ("[object Function]" == (a = v.call(t))) i = t;
                                                else if ("[object Array]" == a) {
                                                o = {};
                                                for (var c, u = 0, l = t.length; u < l;) c = t[u++], "[object String]" != (a = v.call(c)) && "[object Number]" != a || (o[c] = 1)
                                            }
                                            if (n)
                                                if ("[object Number]" == (a = v.call(n))) {
                                                    if ((n -= n % 1) > 0)
                                                        for (n > 10 && (n = 10), r = ""; r.length < n;) r += " "
                                                } else "[object String]" == a && (r = n.length <= 10 ? n : n.slice(0, 10));
                                            return A("", (c = {}, c[""] = e, c), i, o, r, "", [])
                                        }
                                    }
                                }
                                if (!r("json-parse")) {
                                    var I, N, P = u.fromCharCode,
                                        B = {
                                            92: "\\",
                                            34: '"',
                                            47: "/",
                                            98: "\b",
                                            116: "\t",
                                            110: "\n",
                                            102: "\f",
                                            114: "\r"
                                        },
                                        R = function() {
                                            throw I = N = null, d()
                                        },
                                        F = function() {
                                            for (var e, t, n, r, i, o = N, s = o.length; I < s;) switch (i = o.charCodeAt(I)) {
                                                case 9:
                                                case 10:
                                                case 13:
                                                case 32:
                                                    I++;
                                                    break;
                                                case 123:
                                                case 125:
                                                case 91:
                                                case 93:
                                                case 58:
                                                case 44:
                                                    return e = _ ? o.charAt(I) : o[I], I++, e;
                                                case 34:
                                                    for (e = "@", I++; I < s;)
                                                        if ((i = o.charCodeAt(I)) < 32) R();
                                                        else if (92 == i) switch (i = o.charCodeAt(++I)) {
                                                        case 92:
                                                        case 34:
                                                        case 47:
                                                        case 98:
                                                        case 116:
                                                        case 110:
                                                        case 102:
                                                        case 114:
                                                            e += B[i], I++;
                                                            break;
                                                        case 117:
                                                            for (t = ++I, n = I + 4; I < n; I++)(i = o.charCodeAt(I)) >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70 || R();
                                                            e += P("0x" + o.slice(t, I));
                                                            break;
                                                        default:
                                                            R()
                                                    } else {
                                                        if (34 == i) break;
                                                        for (i = o.charCodeAt(I), t = I; i >= 32 && 92 != i && 34 != i;) i = o.charCodeAt(++I);
                                                        e += o.slice(t, I)
                                                    }
                                                    if (34 == o.charCodeAt(I)) return I++, e;
                                                    R();
                                                default:
                                                    if (t = I, 45 == i && (r = !0, i = o.charCodeAt(++I)), i >= 48 && i <= 57) {
                                                        for (48 == i && (i = o.charCodeAt(I + 1)) >= 48 && i <= 57 && R(), r = !1; I < s && (i = o.charCodeAt(I)) >= 48 && i <= 57; I++);
                                                        if (46 == o.charCodeAt(I)) {
                                                            for (n = ++I; n < s && !((i = o.charCodeAt(n)) < 48 || i > 57); n++);
                                                            n == I && R(), I = n
                                                        }
                                                        if (101 == (i = o.charCodeAt(I)) || 69 == i) {
                                                            for (i = o.charCodeAt(++I), 43 != i && 45 != i || I++, n = I; n < s && !((i = o.charCodeAt(n)) < 48 || i > 57); n++);
                                                            n == I && R(), I = n
                                                        }
                                                        return +o.slice(t, I)
                                                    }
                                                    r && R();
                                                    var a = o.slice(I, I + 4);
                                                    if ("true" == a) return I += 4, !0;
                                                    if ("fals" == a && 101 == o.charCodeAt(I + 4)) return I += 5, !1;
                                                    if ("null" == a) return I += 4, null;
                                                    R()
                                            }
                                            return "$"
                                        },
                                        G = function(e) {
                                            var t, n;
                                            if ("$" == e && R(), "string" == typeof e) {
                                                if ("@" == (_ ? e.charAt(0) : e[0])) return e.slice(1);
                                                if ("[" == e) {
                                                    for (t = [];
                                                        "]" != (e = F());) n ? "," == e ? "]" == (e = F()) && R() : R() : n = !0, "," == e && R(), t.push(G(e));
                                                    return t
                                                }
                                                if ("{" == e) {
                                                    for (t = {};
                                                        "}" != (e = F());) n ? "," == e ? "}" == (e = F()) && R() : R() : n = !0, "," != e && "string" == typeof e && "@" == (_ ? e.charAt(0) : e[0]) && ":" == F() || R(), t[e.slice(1)] = G(F());
                                                    return t
                                                }
                                                R()
                                            }
                                            return e
                                        },
                                        L = function(e, t, n) {
                                            var r = D(e, t, n);
                                            r === g ? delete e[t] : e[t] = r
                                        },
                                        D = function(e, t, n) {
                                            var r, i = e[t];
                                            if ("object" == typeof i && i)
                                                if ("[object Array]" == v.call(i))
                                                    for (r = i.length; r--;) L(v, C, i);
                                                else C(i, function(e) {
                                                    L(i, e, n)
                                                });
                                            return n.call(e, t, i)
                                        };
                                    t.parse = function(e, t) {
                                        var n, r;
                                        return I = 0, N = "" + e, n = G(F()), "$" != F() && R(), I = N = null, t && "[object Function]" == v.call(t) ? D((r = {}, r[""] = n, r), "", t) : n
                                    }
                                }
                            }
                            return t.runInContext = i, t
                        }
                        var o = "function" == typeof e && e.amd,
                            s = {
                                function: !0,
                                object: !0
                            },
                            a = s[typeof r] && r && !r.nodeType && r,
                            c = s[typeof window] && window || this,
                            u = a && s[typeof n] && n && !n.nodeType && "object" == typeof t && t;
                        if (!u || u.global !== u && u.window !== u && u.self !== u || (c = u), a && !o) i(c, a);
                        else {
                            var l = c.JSON,
                                f = c.JSON3,
                                d = !1,
                                p = i(c, c.JSON3 = {
                                    noConflict: function() {
                                        return d || (d = !0, c.JSON = l, c.JSON3 = f, l = f = null), p
                                    }
                                });
                            c.JSON = {
                                parse: p.parse,
                                stringify: p.stringify
                            }
                        }
                        o && e(function() {
                            return p
                        })
                    }).call(this)
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            59: [function(e, t, n) {
                "use strict";

                function r(e) {
                    try {
                        return decodeURIComponent(e.replace(/\+/g, " "))
                    } catch (e) {
                        return null
                    }
                }

                function i(e) {
                    for (var t, n = /([^=?&]+)=?([^&]*)/g, i = {}; t = n.exec(e);) {
                        var o = r(t[1]),
                            s = r(t[2]);
                        null === o || null === s || o in i || (i[o] = s)
                    }
                    return i
                }

                function o(e, t) {
                    t = t || "";
                    var n, r, i = [];
                    "string" != typeof t && (t = "?");
                    for (r in e)
                        if (a.call(e, r)) {
                            if (n = e[r], n || null !== n && n !== s && !isNaN(n) || (n = ""), r = encodeURIComponent(r), n = encodeURIComponent(n), null === r || null === n) continue;
                            i.push(r + "=" + n)
                        }
                    return i.length ? t + i.join("&") : ""
                }
                var s, a = Object.prototype.hasOwnProperty;
                n.stringify = o, n.parse = i
            }, {}],
            60: [function(e, t, n) {
                "use strict";
                t.exports = function(e, t) {
                    if (t = t.split(":")[0], !(e = +e)) return !1;
                    switch (t) {
                        case "http":
                        case "ws":
                            return 80 !== e;
                        case "https":
                        case "wss":
                            return 443 !== e;
                        case "ftp":
                            return 21 !== e;
                        case "gopher":
                            return 70 !== e;
                        case "file":
                            return !1
                    }
                    return 0 !== e
                }
            }, {}],
            61: [function(e, t, n) {
                (function(n) {
                    "use strict";

                    function r(e) {
                        return (e || "").toString().replace(h, "")
                    }

                    function i(e) {
                        var t;
                        t = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {};
                        var r = t.location || {};
                        e = e || r;
                        var i, o = {},
                            s = typeof e;
                        if ("blob:" === e.protocol) o = new a(unescape(e.pathname), {});
                        else if ("string" === s) {
                            o = new a(e, {});
                            for (i in g) delete o[i]
                        } else if ("object" === s) {
                            for (i in e) i in g || (o[i] = e[i]);
                            void 0 === o.slashes && (o.slashes = d.test(e.href))
                        }
                        return o
                    }

                    function o(e) {
                        e = r(e);
                        var t = p.exec(e);
                        return {
                            protocol: t[1] ? t[1].toLowerCase() : "",
                            slashes: !!(t[2] && t[2].length >= 2),
                            rest: t[2] && 1 === t[2].length ? "/" + t[3] : t[3]
                        }
                    }

                    function s(e, t) {
                        if ("" === e) return t;
                        for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, i = n[r - 1], o = !1, s = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), s++) : s && (0 === r && (o = !0), n.splice(r, 1), s--);
                        return o && n.unshift(""), "." !== i && ".." !== i || n.push(""), n.join("/")
                    }

                    function a(e, t, n) {
                        if (e = r(e), !(this instanceof a)) return new a(e, t, n);
                        var c, u, d, p, h, g, b = m.slice(),
                            v = typeof t,
                            y = this,
                            w = 0;
                        for ("object" !== v && "string" !== v && (n = t, t = null), n && "function" != typeof n && (n = f.parse), t = i(t), u = o(e || ""), c = !u.protocol && !u.slashes, y.slashes = u.slashes || c && t.slashes, y.protocol = u.protocol || t.protocol || "", e = u.rest, u.slashes || (b[3] = [/(.*)/, "pathname"]); w < b.length; w++) p = b[w], "function" != typeof p ? (d = p[0], g = p[1], d !== d ? y[g] = e : "string" == typeof d ? ~(h = e.indexOf(d)) && ("number" == typeof p[2] ? (y[g] = e.slice(0, h), e = e.slice(h + p[2])) : (y[g] = e.slice(h), e = e.slice(0, h))) : (h = d.exec(e)) && (y[g] = h[1], e = e.slice(0, h.index)), y[g] = y[g] || (c && p[3] ? t[g] || "" : ""), p[4] && (y[g] = y[g].toLowerCase())) : e = p(e);
                        n && (y.query = n(y.query)), c && t.slashes && "/" !== y.pathname.charAt(0) && ("" !== y.pathname || "" !== t.pathname) && (y.pathname = s(y.pathname, t.pathname)), "/" !== y.pathname.charAt(0) && y.hostname && (y.pathname = "/" + y.pathname), l(y.port, y.protocol) || (y.host = y.hostname, y.port = ""), y.username = y.password = "", y.auth && (p = y.auth.split(":"), y.username = p[0] || "", y.password = p[1] || ""), y.origin = y.protocol && y.host && "file:" !== y.protocol ? y.protocol + "//" + y.host : "null", y.href = y.toString()
                    }

                    function c(e, t, n) {
                        var r = this;
                        switch (e) {
                            case "query":
                                "string" == typeof t && t.length && (t = (n || f.parse)(t)), r[e] = t;
                                break;
                            case "port":
                                r[e] = t, l(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname, r[e] = "");
                                break;
                            case "hostname":
                                r[e] = t, r.port && (t += ":" + r.port), r.host = t;
                                break;
                            case "host":
                                r[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), r.port = t.pop(), r.hostname = t.join(":")) : (r.hostname = t, r.port = "");
                                break;
                            case "protocol":
                                r.protocol = t.toLowerCase(), r.slashes = !n;
                                break;
                            case "pathname":
                            case "hash":
                                if (t) {
                                    var i = "pathname" === e ? "/" : "#";
                                    r[e] = t.charAt(0) !== i ? i + t : t
                                } else r[e] = t;
                                break;
                            default:
                                r[e] = t
                        }
                        for (var o = 0; o < m.length; o++) {
                            var s = m[o];
                            s[4] && (r[s[1]] = r[s[1]].toLowerCase())
                        }
                        return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r
                    }

                    function u(e) {
                        e && "function" == typeof e || (e = f.stringify);
                        var t, n = this,
                            r = n.protocol;
                        r && ":" !== r.charAt(r.length - 1) && (r += ":");
                        var i = r + (n.slashes ? "//" : "");
                        return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), i += n.host + n.pathname, t = "object" == typeof n.query ? e(n.query) : n.query, t && (i += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (i += n.hash), i
                    }
                    var l = e("requires-port"),
                        f = e("querystringify"),
                        d = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,
                        p = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,
                        h = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+"),
                        m = [
                            ["#", "hash"],
                            ["?", "query"],
                            function(e) {
                                return e.replace("\\", "/")
                            },
                            ["/", "pathname"],
                            ["@", "auth", 1],
                            [NaN, "host", void 0, 1, 1],
                            [/:(\d+)$/, "port", void 0, 1],
                            [NaN, "hostname", void 0, 1, 1]
                        ],
                        g = {
                            hash: 1,
                            query: 1
                        };
                    a.prototype = {
                        set: c,
                        toString: u
                    }, a.extractProtocol = o, a.location = i, a.trimLeft = r, a.qs = f, t.exports = a
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                querystringify: 59,
                "requires-port": 60
            }]
        }, {}, [1])(1)
    }),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("StompJs", [], t) : "object" == typeof exports ? exports.StompJs = t() : e.StompJs = t()
    }("undefined" != typeof self ? self : this, function() {
        return function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r
                })
            }, t.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, t.t = function(e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & n && "string" != typeof e)
                    for (var i in e) t.d(r, i, function(t) {
                        return e[t]
                    }.bind(null, i));
                return r
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 0)
        }({
            "./src/byte.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BYTE = {
                    LF: "\n",
                    NULL: "\0"
                }
            },
            "./src/client.ts": function(e, t, n) {
                var r = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))(function(i, o) {
                            function s(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function c(e) {
                                e.done ? i(e.value) : new n(function(t) {
                                    t(e.value)
                                }).then(s, a)
                            }
                            c((r = r.apply(e, t || [])).next())
                        })
                    },
                    i = this && this.__generator || function(e, t) {
                        function n(e) {
                            return function(t) {
                                return r([e, t])
                            }
                        }

                        function r(n) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (i = 1, o && (s = 2 & n[0] ? o.return : n[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, n[1])).done) return s;
                                switch (o = 0, s && (n = [2 & n[0], s.value]), n[0]) {
                                    case 0:
                                    case 1:
                                        s = n;
                                        break;
                                    case 4:
                                        return c.label++, {
                                            value: n[1],
                                            done: !1
                                        };
                                    case 5:
                                        c.label++, o = n[1], n = [0];
                                        continue;
                                    case 7:
                                        n = c.ops.pop(), c.trys.pop();
                                        continue;
                                    default:
                                        if (s = c.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                                            c.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && c.label < s[1]) {
                                            c.label = s[1], s = n;
                                            break
                                        }
                                        if (s && c.label < s[2]) {
                                            c.label = s[2], c.ops.push(n);
                                            break
                                        }
                                        s[2] && c.ops.pop(), c.trys.pop();
                                        continue
                                }
                                n = t.call(e, c)
                            } catch (e) {
                                n = [6, e], o = 0
                            } finally {
                                i = s = 0
                            }
                            if (5 & n[0]) throw n[1];
                            return {
                                value: n[0] ? n[1] : void 0,
                                done: !0
                            }
                        }
                        var i, o, s, a, c = {
                            label: 0,
                            sent: function() {
                                if (1 & s[0]) throw s[1];
                                return s[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return a = {
                            next: n(0),
                            throw: n(1),
                            return: n(2)
                        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n("./src/stomp-handler.ts"),
                    s = n("./src/versions.ts"),
                    a = function() {
                        function e(e) {
                            void 0 === e && (e = {}), this.stompVersions = s.Versions.default, this.reconnectDelay = 5e3, this.heartbeatIncoming = 1e4, this.heartbeatOutgoing = 1e4, this.splitLargeFrames = !1, this.maxWebSocketChunkSize = 8192, this.forceBinaryWSFrames = !1, this._active = !1;
                            var t = function() {};
                            this.debug = t, this.beforeConnect = t, this.onConnect = t, this.onDisconnect = t, this.onUnhandledMessage = t, this.onUnhandledReceipt = t, this.onUnhandledFrame = t, this.onStompError = t, this.onWebSocketClose = t, this.onWebSocketError = t, this.logRawCommunication = !1, this.connectHeaders = {}, this._disconnectHeaders = {}, this.configure(e)
                        }
                        return Object.defineProperty(e.prototype, "webSocket", {
                                get: function() {
                                    return this._webSocket
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "disconnectHeaders", {
                                get: function() {
                                    return this._disconnectHeaders
                                },
                                set: function(e) {
                                    this._disconnectHeaders = e, this._stompHandler && (this._stompHandler.disconnectHeaders = this._disconnectHeaders)
                                },
                                enumerable: !0,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, "connected", {
                                get: function() {
                                    return !!this._stompHandler && this._stompHandler.connected
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "connectedVersion", {
                                get: function() {
                                    return this._stompHandler ? this._stompHandler.connectedVersion : void 0
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, "active", {
                                get: function() {
                                    return this._active
                                },
                                enumerable: !0,
                                configurable: !0
                            }), e.prototype.configure = function(e) {
                                Object.assign(this, e)
                            }, e.prototype.activate = function() {
                                this._active = !0, this._connect()
                            }, e.prototype._connect = function() {
                                return r(this, void 0, void 0, function() {
                                    var e = this;
                                    return i(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return this.connected ? (this.debug("STOMP: already connected, nothing to do"), [2]) : [4, this.beforeConnect()];
                                            case 1:
                                                return t.sent(), this._active ? (this.debug("Opening Web Socket..."), this._webSocket = this._createWebSocket(), this._stompHandler = new o.StompHandler(this, this._webSocket, {
                                                    debug: this.debug,
                                                    stompVersions: this.stompVersions,
                                                    connectHeaders: this.connectHeaders,
                                                    disconnectHeaders: this._disconnectHeaders,
                                                    heartbeatIncoming: this.heartbeatIncoming,
                                                    heartbeatOutgoing: this.heartbeatOutgoing,
                                                    splitLargeFrames: this.splitLargeFrames,
                                                    maxWebSocketChunkSize: this.maxWebSocketChunkSize,
                                                    forceBinaryWSFrames: this.forceBinaryWSFrames,
                                                    logRawCommunication: this.logRawCommunication,
                                                    onConnect: function(t) {
                                                        if (!e._active) return e.debug("STOMP got connected while deactivate was issued, will disconnect now"), void e._disposeStompHandler();
                                                        e.onConnect(t)
                                                    },
                                                    onDisconnect: function(t) {
                                                        e.onDisconnect(t)
                                                    },
                                                    onStompError: function(t) {
                                                        e.onStompError(t)
                                                    },
                                                    onWebSocketClose: function(t) {
                                                        e.onWebSocketClose(t), e._active && e._schedule_reconnect()
                                                    },
                                                    onWebSocketError: function(t) {
                                                        e.onWebSocketError(t)
                                                    },
                                                    onUnhandledMessage: function(t) {
                                                        e.onUnhandledMessage(t)
                                                    },
                                                    onUnhandledReceipt: function(t) {
                                                        e.onUnhandledReceipt(t)
                                                    },
                                                    onUnhandledFrame: function(t) {
                                                        e.onUnhandledFrame(t)
                                                    }
                                                }), this._stompHandler.start(), [2]) : (this.debug("Client has been marked inactive, will not attempt to connect"), [2])
                                        }
                                    })
                                })
                            }, e.prototype._createWebSocket = function() {
                                var e;
                                return e = this.webSocketFactory ? this.webSocketFactory() : new WebSocket(this.brokerURL, this.stompVersions.protocolVersions()), e.binaryType = "arraybuffer", e
                            }, e.prototype._schedule_reconnect = function() {
                                var e = this;
                                this.reconnectDelay > 0 && (this.debug("STOMP: scheduling reconnection in " + this.reconnectDelay + "ms"), this._reconnector = setTimeout(function() {
                                    e._connect()
                                }, this.reconnectDelay))
                            }, e.prototype.deactivate = function() {
                                this._active = !1, this._reconnector && clearTimeout(this._reconnector), this._disposeStompHandler()
                            }, e.prototype.forceDisconnect = function() {
                                this._webSocket && (this._webSocket.readyState !== WebSocket.CONNECTING && this._webSocket.readyState !== WebSocket.OPEN || this._webSocket.close())
                            }, e.prototype._disposeStompHandler = function() {
                                this._stompHandler && (this._stompHandler.dispose(), this._stompHandler = null)
                            }, e.prototype.publish = function(e) {
                                this._stompHandler.publish(e)
                            }, e.prototype.watchForReceipt = function(e, t) {
                                this._stompHandler.watchForReceipt(e, t)
                            }, e.prototype.subscribe = function(e, t, n) {
                                return void 0 === n && (n = {}), this._stompHandler.subscribe(e, t, n)
                            }, e.prototype.unsubscribe = function(e, t) {
                                void 0 === t && (t = {}), this._stompHandler.unsubscribe(e, t)
                            }, e.prototype.begin = function(e) {
                                return this._stompHandler.begin(e)
                            }, e.prototype.commit = function(e) {
                                this._stompHandler.commit(e)
                            }, e.prototype.abort = function(e) {
                                this._stompHandler.abort(e)
                            }, e.prototype.ack = function(e, t, n) {
                                void 0 === n && (n = {}), this._stompHandler.ack(e, t, n)
                            }, e.prototype.nack = function(e, t, n) {
                                void 0 === n && (n = {}), this._stompHandler.nack(e, t, n)
                            }, e
                    }();
                t.Client = a
            },
            "./src/compatibility/compat-client.ts": function(e, t, n) {
                var r = this && this.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("./src/client.ts"),
                    o = n("./src/compatibility/heartbeat-info.ts"),
                    s = function(e) {
                        function t(t) {
                            var n = e.call(this) || this;
                            return n.maxWebSocketFrameSize = 16384, n._heartbeatInfo = new o.HeartbeatInfo(n), n.reconnect_delay = 0, n.webSocketFactory = t, n.debug = function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                console.log.apply(console, e)
                            }, n
                        }
                        return r(t, e), t.prototype._parseConnect = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            var n, r, i, o = {};
                            if (e.length < 2) throw new Error("Connect requires at least 2 arguments");
                            if ("function" == typeof e[1]) o = e[0], r = e[1], i = e[2], n = e[3];
                            else switch (e.length) {
                                case 6:
                                    o.login = e[0], o.passcode = e[1], r = e[2], i = e[3], n = e[4], o.host = e[5];
                                    break;
                                default:
                                    o.login = e[0], o.passcode = e[1], r = e[2], i = e[3], n = e[4]
                            }
                            return [o, r, i, n]
                        }, t.prototype.connect = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = this._parseConnect.apply(this, t);
                            r[0] && (this.connectHeaders = r[0]), r[1] && (this.onConnect = r[1]), r[2] && (this.onStompError = r[2]), r[3] && (this.onWebSocketClose = r[3]), e.prototype.activate.call(this)
                        }, t.prototype.disconnect = function(t, n) {
                            void 0 === n && (n = {}), t && (this.onDisconnect = t), this.disconnectHeaders = n, e.prototype.deactivate.call(this)
                        }, t.prototype.send = function(e, t, n) {
                            void 0 === t && (t = {}), void 0 === n && (n = ""), t = Object.assign({}, t);
                            var r = !1 === t["content-length"];
                            r && delete t["content-length"], this.publish({
                                destination: e,
                                headers: t,
                                body: n,
                                skipContentLengthHeader: r
                            })
                        }, Object.defineProperty(t.prototype, "reconnect_delay", {
                            set: function(e) {
                                this.reconnectDelay = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "ws", {
                            get: function() {
                                return this._webSocket
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "version", {
                            get: function() {
                                return this.connectedVersion
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "onreceive", {
                            get: function() {
                                return this.onUnhandledMessage
                            },
                            set: function(e) {
                                this.onUnhandledMessage = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "onreceipt", {
                            get: function() {
                                return this.onUnhandledReceipt
                            },
                            set: function(e) {
                                this.onUnhandledReceipt = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "heartbeat", {
                            get: function() {
                                return this._heartbeatInfo
                            },
                            set: function(e) {
                                this.heartbeatIncoming = e.incoming, this.heartbeatOutgoing = e.outgoing
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }(i.Client);
                t.CompatClient = s
            },
            "./src/compatibility/heartbeat-info.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e) {
                        this.client = e
                    }
                    return Object.defineProperty(e.prototype, "outgoing", {
                        get: function() {
                            return this.client.heartbeatOutgoing
                        },
                        set: function(e) {
                            this.client.heartbeatOutgoing = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "incoming", {
                        get: function() {
                            return this.client.heartbeatIncoming
                        },
                        set: function(e) {
                            this.client.heartbeatIncoming = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }();
                t.HeartbeatInfo = r
            },
            "./src/compatibility/stomp.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n("./src/versions.ts"),
                    i = n("./src/compatibility/compat-client.ts"),
                    o = function() {
                        function e() {}
                        return e.client = function(t, n) {
                            null == n && (n = r.Versions.default.protocolVersions());
                            var o = function() {
                                return new(e.WebSocketClass || WebSocket)(t, n)
                            };
                            return new i.CompatClient(o)
                        }, e.over = function(e) {
                            var t = "function" == typeof e ? e : function() {
                                return e
                            };
                            return new i.CompatClient(t)
                        }, e.WebSocketClass = null, e
                    }();
                t.Stomp = o
            },
            "./src/frame-impl.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n("./src/byte.ts"),
                    i = function() {
                        function e(e) {
                            var t = e.command,
                                n = e.headers,
                                r = e.body,
                                i = e.binaryBody,
                                o = e.escapeHeaderValues,
                                s = e.skipContentLengthHeader;
                            this.command = t, this.headers = Object.assign({}, n || {}), i ? (this._binaryBody = i, this.isBinaryBody = !0) : (this._body = r || "", this.isBinaryBody = !1), this.escapeHeaderValues = o || !1, this.skipContentLengthHeader = s || !1
                        }
                        return Object.defineProperty(e.prototype, "body", {
                            get: function() {
                                return !this._body && this.isBinaryBody && (this._body = (new TextDecoder).decode(this._binaryBody)), this._body
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "binaryBody", {
                            get: function() {
                                return this._binaryBody || this.isBinaryBody || (this._binaryBody = (new TextEncoder).encode(this._body)), this._binaryBody
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.fromRawFrame = function(t, n) {
                            for (var r = {}, i = function(e) {
                                    return e.replace(/^\s+|\s+$/g, "")
                                }, o = 0, s = t.headers.reverse(); o < s.length; o++) {
                                var a = s[o],
                                    c = (a.indexOf(":"), i(a[0])),
                                    u = i(a[1]);
                                n && "CONNECT" !== t.command && "CONNECTED" !== t.command && (u = e.hdrValueUnEscape(u)), r[c] = u
                            }
                            return new e({
                                command: t.command,
                                headers: r,
                                binaryBody: t.binaryBody,
                                escapeHeaderValues: n
                            })
                        }, e.prototype.toString = function() {
                            return this.serializeCmdAndHeaders()
                        }, e.prototype.serialize = function() {
                            var t = this.serializeCmdAndHeaders();
                            return this.isBinaryBody ? e.toUnit8Array(t, this._binaryBody).buffer : t + this._body + r.BYTE.NULL
                        }, e.prototype.serializeCmdAndHeaders = function() {
                            var t = [this.command];
                            this.skipContentLengthHeader && delete this.headers["content-length"];
                            for (var n = 0, i = Object.keys(this.headers || {}); n < i.length; n++) {
                                var o = i[n],
                                    s = this.headers[o];
                                this.escapeHeaderValues && "CONNECT" !== this.command && "CONNECTED" !== this.command ? t.push(o + ":" + e.hdrValueEscape("" + s)) : t.push(o + ":" + s)
                            }
                            return (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) && t.push("content-length:" + this.bodyLength()), t.join(r.BYTE.LF) + r.BYTE.LF + r.BYTE.LF
                        }, e.prototype.isBodyEmpty = function() {
                            return 0 === this.bodyLength()
                        }, e.prototype.bodyLength = function() {
                            var e = this.binaryBody;
                            return e ? e.length : 0
                        }, e.sizeOfUTF8 = function(e) {
                            return e ? (new TextEncoder).encode(e).length : 0
                        }, e.toUnit8Array = function(e, t) {
                            var n = (new TextEncoder).encode(e),
                                r = new Uint8Array([0]),
                                i = new Uint8Array(n.length + t.length + r.length);
                            return i.set(n), i.set(t, n.length), i.set(r, n.length + t.length), i
                        }, e.marshall = function(t) {
                            return new e(t).serialize()
                        }, e.hdrValueEscape = function(e) {
                            return e.replace(/\\/g, "\\\\").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/:/g, "\\c")
                        }, e.hdrValueUnEscape = function(e) {
                            return e.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\c/g, ":").replace(/\\\\/g, "\\")
                        }, e
                    }();
                t.FrameImpl = i
            },
            "./src/index.ts": function(e, t, n) {
                function r(e) {
                    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), r(n("./src/client.ts")), r(n("./src/frame-impl.ts")), r(n("./src/parser.ts")), r(n("./src/stomp-config.ts")), r(n("./src/stomp-headers.ts")), r(n("./src/stomp-subscription.ts")), r(n("./src/versions.ts")), r(n("./src/compatibility/compat-client.ts")), r(n("./src/compatibility/stomp.ts"))
            },
            "./src/parser.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e, t) {
                        this.onFrame = e, this.onIncomingPing = t, this._encoder = new TextEncoder, this._decoder = new TextDecoder, this._token = [], this._initState()
                    }
                    return e.prototype.parseChunk = function(e) {
                        var t;
                        t = e instanceof ArrayBuffer ? new Uint8Array(e) : this._encoder.encode(e);
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            this._onByte(r)
                        }
                    }, e.prototype._collectFrame = function(e) {
                        if (0 !== e && 13 !== e) {
                            if (10 === e) return void this.onIncomingPing();
                            this._onByte = this._collectCommand, this._reinjectByte(e)
                        }
                    }, e.prototype._collectCommand = function(e) {
                        if (13 !== e) return 10 === e ? (this._results.command = this._consumeTokenAsUTF8(), void(this._onByte = this._collectHeaders)) : void this._consumeByte(e)
                    }, e.prototype._collectHeaders = function(e) {
                        if (13 !== e) {
                            if (10 === e) return void this._setupCollectBody();
                            this._onByte = this._collectHeaderKey, this._reinjectByte(e)
                        }
                    }, e.prototype._reinjectByte = function(e) {
                        this._onByte(e)
                    }, e.prototype._collectHeaderKey = function(e) {
                        if (58 === e) return this._headerKey = this._consumeTokenAsUTF8(), void(this._onByte = this._collectHeaderValue);
                        this._consumeByte(e)
                    }, e.prototype._collectHeaderValue = function(e) {
                        if (13 !== e) return 10 === e ? (this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]), this._headerKey = void 0, void(this._onByte = this._collectHeaders)) : void this._consumeByte(e)
                    }, e.prototype._setupCollectBody = function() {
                        var e = this._results.headers.filter(function(e) {
                            return "content-length" === e[0]
                        })[0];
                        e ? (this._bodyBytesRemaining = parseInt(e[1], 10), this._onByte = this._collectBodyFixedSize) : this._onByte = this._collectBodyNullTerminated
                    }, e.prototype._collectBodyNullTerminated = function(e) {
                        if (0 === e) return void this._retrievedBody();
                        this._consumeByte(e)
                    }, e.prototype._collectBodyFixedSize = function(e) {
                        if (0 == this._bodyBytesRemaining--) return void this._retrievedBody();
                        this._consumeByte(e)
                    }, e.prototype._retrievedBody = function() {
                        this._results.binaryBody = this._consumeTokenAsRaw(), this.onFrame(this._results), this._initState()
                    }, e.prototype._consumeByte = function(e) {
                        this._token.push(e)
                    }, e.prototype._consumeTokenAsUTF8 = function() {
                        return this._decoder.decode(this._consumeTokenAsRaw())
                    }, e.prototype._consumeTokenAsRaw = function() {
                        var e = new Uint8Array(this._token);
                        return this._token = [], e
                    }, e.prototype._initState = function() {
                        this._results = {
                            command: void 0,
                            headers: [],
                            binaryBody: void 0
                        }, this._token = [], this._headerKey = void 0, this._onByte = this._collectFrame
                    }, e
                }();
                t.Parser = r
            },
            "./src/stomp-config.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e() {}
                    return e
                }();
                t.StompConfig = r
            },
            "./src/stomp-handler.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n("./src/byte.ts"),
                    i = n("./src/frame-impl.ts"),
                    o = n("./src/parser.ts"),
                    s = n("./src/versions.ts"),
                    a = function() {
                        function e(e, t, n) {
                            void 0 === n && (n = {});
                            var r = this;
                            this._client = e, this._webSocket = t, this._serverFrameHandlers = {
                                CONNECTED: function(e) {
                                    r.debug("connected to server " + e.headers.server), r._connected = !0, r._connectedVersion = e.headers.version, r._connectedVersion === s.Versions.V1_2 && (r._escapeHeaderValues = !0), r._setupHeartbeat(e.headers), r.onConnect(e)
                                },
                                MESSAGE: function(e) {
                                    var t = e.headers.subscription,
                                        n = r._subscriptions[t] || r.onUnhandledMessage,
                                        i = e,
                                        o = r,
                                        a = r._connectedVersion === s.Versions.V1_2 ? i.headers.ack : i.headers["message-id"];
                                    i.ack = function(e) {
                                        return void 0 === e && (e = {}), o.ack(a, t, e)
                                    }, i.nack = function(e) {
                                        return void 0 === e && (e = {}), o.nack(a, t, e)
                                    }, n(i)
                                },
                                RECEIPT: function(e) {
                                    var t = r._receiptWatchers[e.headers["receipt-id"]];
                                    t ? (t(e), delete r._receiptWatchers[e.headers["receipt-id"]]) : r.onUnhandledReceipt(e)
                                },
                                ERROR: function(e) {
                                    r.onStompError(e)
                                }
                            }, this._counter = 0, this._subscriptions = {}, this._receiptWatchers = {}, this._partialData = "", this._escapeHeaderValues = !1, this._lastServerActivityTS = Date.now(), this.configure(n)
                        }
                        return Object.defineProperty(e.prototype, "connectedVersion", {
                            get: function() {
                                return this._connectedVersion
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "connected", {
                            get: function() {
                                return this._connected
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.configure = function(e) {
                            Object.assign(this, e)
                        }, e.prototype.start = function() {
                            var e = this,
                                t = new o.Parser(function(t) {
                                    var n = i.FrameImpl.fromRawFrame(t, e._escapeHeaderValues);
                                    e.logRawCommunication || e.debug("<<< " + n), (e._serverFrameHandlers[n.command] || e.onUnhandledFrame)(n)
                                }, function() {
                                    e.debug("<<< PONG")
                                });
                            this._webSocket.onmessage = function(n) {
                                if (e.debug("Received data"), e._lastServerActivityTS = Date.now(), e.logRawCommunication) {
                                    var r = n.data instanceof ArrayBuffer ? (new TextDecoder).decode(n.data) : n.data;
                                    e.debug("<<< " + r)
                                }
                                t.parseChunk(n.data)
                            }, this._webSocket.onclose = function(t) {
                                e.debug("Connection closed to " + e._webSocket.url), e.onWebSocketClose(t), e._cleanUp()
                            }, this._webSocket.onerror = function(t) {
                                e.onWebSocketError(t)
                            }, this._webSocket.onopen = function() {
                                var t = Object.assign({}, e.connectHeaders);
                                e.debug("Web Socket Opened..."), t["accept-version"] = e.stompVersions.supportedVersions(), t["heart-beat"] = [e.heartbeatOutgoing, e.heartbeatIncoming].join(","), e._transmit({
                                    command: "CONNECT",
                                    headers: t
                                })
                            }
                        }, e.prototype._setupHeartbeat = function(e) {
                            var t = this;
                            if (e.version === s.Versions.V1_1 || e.version === s.Versions.V1_2) {
                                var n = e["heart-beat"].split(",").map(function(e) {
                                        return parseInt(e, 10)
                                    }),
                                    i = n[0],
                                    o = n[1];
                                if (0 !== this.heartbeatOutgoing && 0 !== o) {
                                    var a = Math.max(this.heartbeatOutgoing, o);
                                    this.debug("send PING every " + a + "ms"), this._pinger = setInterval(function() {
                                        t._webSocket.readyState === WebSocket.OPEN && (t._webSocket.send(r.BYTE.LF), t.debug(">>> PING"))
                                    }, a)
                                }
                                if (0 !== this.heartbeatIncoming && 0 !== i) {
                                    var c = Math.max(this.heartbeatIncoming, i);
                                    this.debug("check PONG every " + c + "ms"), this._ponger = setInterval(function() {
                                        var e = Date.now() - t._lastServerActivityTS;
                                        e > 2 * c && (t.debug("did not receive server activity for the last " + e + "ms"), t._webSocket.close())
                                    }, c)
                                }
                            }
                        }, e.prototype._transmit = function(e) {
                            var t = e.command,
                                n = e.headers,
                                r = e.body,
                                o = e.binaryBody,
                                s = e.skipContentLengthHeader,
                                a = new i.FrameImpl({
                                    command: t,
                                    headers: n,
                                    body: r,
                                    binaryBody: o,
                                    escapeHeaderValues: this._escapeHeaderValues,
                                    skipContentLengthHeader: s
                                }),
                                c = a.serialize();
                            if (this.logRawCommunication ? this.debug(">>> " + c) : this.debug(">>> " + a), this.forceBinaryWSFrames && "string" == typeof c && (c = (new TextEncoder).encode(c)), "string" == typeof c && this.splitLargeFrames)
                                for (var u = c; u.length > 0;) {
                                    var l = u.substring(0, this.maxWebSocketChunkSize);
                                    u = u.substring(this.maxWebSocketChunkSize), this._webSocket.send(l), this.debug("chunk sent = " + l.length + ", remaining = " + u.length)
                                } else this._webSocket.send(c)
                        }, e.prototype.dispose = function() {
                            var e = this;
                            if (this.connected) try {
                                var t = Object.assign({}, this.disconnectHeaders);
                                t.receipt || (t.receipt = "close-" + this._counter++), this.watchForReceipt(t.receipt, function(t) {
                                    e._webSocket.close(), e._cleanUp(), e.onDisconnect(t)
                                }), this._transmit({
                                    command: "DISCONNECT",
                                    headers: t
                                })
                            } catch (e) {
                                this.debug("Ignoring error during disconnect " + e)
                            } else this._webSocket.readyState !== WebSocket.CONNECTING && this._webSocket.readyState !== WebSocket.OPEN || this._webSocket.close()
                        }, e.prototype._cleanUp = function() {
                            this._connected = !1, this._pinger && clearInterval(this._pinger), this._ponger && clearInterval(this._ponger)
                        }, e.prototype.publish = function(e) {
                            var t = e.destination,
                                n = e.headers,
                                r = e.body,
                                i = e.binaryBody,
                                o = e.skipContentLengthHeader,
                                s = Object.assign({
                                    destination: t
                                }, n);
                            this._transmit({
                                command: "SEND",
                                headers: s,
                                body: r,
                                binaryBody: i,
                                skipContentLengthHeader: o
                            })
                        }, e.prototype.watchForReceipt = function(e, t) {
                            this._receiptWatchers[e] = t
                        }, e.prototype.subscribe = function(e, t, n) {
                            void 0 === n && (n = {}), n = Object.assign({}, n), n.id || (n.id = "sub-" + this._counter++), n.destination = e, this._subscriptions[n.id] = t, this._transmit({
                                command: "SUBSCRIBE",
                                headers: n
                            });
                            var r = this;
                            return {
                                id: n.id,
                                unsubscribe: function(e) {
                                    return r.unsubscribe(n.id, e)
                                }
                            }
                        }, e.prototype.unsubscribe = function(e, t) {
                            void 0 === t && (t = {}), t = Object.assign({}, t), delete this._subscriptions[e], t.id = e, this._transmit({
                                command: "UNSUBSCRIBE",
                                headers: t
                            })
                        }, e.prototype.begin = function(e) {
                            var t = e || "tx-" + this._counter++;
                            this._transmit({
                                command: "BEGIN",
                                headers: {
                                    transaction: t
                                }
                            });
                            var n = this;
                            return {
                                id: t,
                                commit: function() {
                                    n.commit(t)
                                },
                                abort: function() {
                                    n.abort(t)
                                }
                            }
                        }, e.prototype.commit = function(e) {
                            this._transmit({
                                command: "COMMIT",
                                headers: {
                                    transaction: e
                                }
                            })
                        }, e.prototype.abort = function(e) {
                            this._transmit({
                                command: "ABORT",
                                headers: {
                                    transaction: e
                                }
                            })
                        }, e.prototype.ack = function(e, t, n) {
                            void 0 === n && (n = {}), n = Object.assign({}, n), this._connectedVersion === s.Versions.V1_2 ? n.id = e : n["message-id"] = e, n.subscription = t, this._transmit({
                                command: "ACK",
                                headers: n
                            })
                        }, e.prototype.nack = function(e, t, n) {
                            return void 0 === n && (n = {}), n = Object.assign({}, n), this._connectedVersion === s.Versions.V1_2 ? n.id = e : n["message-id"] = e, n.subscription = t, this._transmit({
                                command: "NACK",
                                headers: n
                            })
                        }, e
                    }();
                t.StompHandler = a
            },
            "./src/stomp-headers.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e() {}
                    return e
                }();
                t.StompHeaders = r
            },
            "./src/stomp-subscription.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e() {}
                    return e
                }();
                t.StompSubscription = r
            },
            "./src/versions.ts": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                    function e(e) {
                        this.versions = e
                    }
                    return e.prototype.supportedVersions = function() {
                        return this.versions.join(",")
                    }, e.prototype.protocolVersions = function() {
                        return this.versions.map(function(e) {
                            return "v" + e.replace(".", "") + ".stomp"
                        })
                    }, e.V1_0 = "1.0", e.V1_1 = "1.1", e.V1_2 = "1.2", e.default = new e([e.V1_0, e.V1_1, e.V1_2]), e
                }();
                t.Versions = r
            },
            0: function(e, t, n) {
                e.exports = n("./src/index.ts")
            }
        })
    }), define("gameservice/flightdeck/WebsocketAdapter", ["require", "objectAssignAuto", "encodingjs", "sockjs", "StompJs"], function(e, t, n, r, i) {
        "use strict";

        function o(e) {
            function t(e, t, n) {
                l.connect({
                    login: e.login,
                    passcode: e.passcode
                }, function(e) {
                    t && t(e)
                }, function() {
                    n && n()
                }, function() {})
            }

            function n(e, t, n) {
                return l.subscribe(e, function(e) {
                    t(e)
                }, n || {})
            }

            function o(e, t, n) {
                return l.subscribe(e, t, n || {})
            }

            function s(e, t) {
                l.send(e, {}, JSON.stringify(t))
            }

            function a(e, t) {
                l.disconnect(function() {
                    e && e()
                }, t || {})
            }
            var c = new r(e),
                u = i.Stomp,
                l = u.over(c);
            return l.debug = function() {}, Object.freeze({
                connect: t,
                subscribe: n,
                register: o,
                send: s,
                disconnect: a
            })
        }
        return Object.freeze({
            createStompClient: o
        })
    }), define("gameservice/flightdeck/FlightdeckClient", ["./WebsocketAdapter"], function(e) {
        "use strict";

        function t(t, n, r) {
            l = e.createStompClient(t.endpoint), l.connect({
                login: t.user ? encodeURIComponent(t.user.id) : "anonymous",
                passcode: ""
            }, function(e) {
                f = !0, n(e)
            }, function() {
                f = !1, r()
            })
        }

        function n(e, t) {
            var n = l.register("/gs/notification", function(e) {
                t && "function" == typeof t && (t(e), d.push(t))
            }, e.payload ? e.payload : {});
            return p["/gs/notification"] = n, n
        }

        function r(e, t, n) {
            var r = l.register(e, t, n);
            return p[e] = r, r
        }

        function i(e, t, n) {
            var r = l.subscribe(e, t, n);
            return p[e] = r, r
        }

        function o(e) {
            p[e] && (p[e].unsubscribe(), delete p[e])
        }

        function s(e, t) {
            l.send(e, t)
        }

        function a() {
            for (var e in p) p[e].unsubscribe(), delete p[e];
            l.disconnect(), l = null
        }

        function c() {}

        function u(e) {
            return !!p[e]
        }
        var l, f = !1,
            d = [],
            p = {};
        return Object.freeze({
            connect: t,
            disconnect: a,
            registerNotification: n,
            reconnect: c,
            register: r,
            subscribe: i,
            unsubscribe: o,
            hasSubscribedByTopic: u,
            send: s
        })
    }), define("gameservice/competition/CompetitionStateController", ["require"], function(e) {
        "use strict";
        return function(e) {
            function t(e, t, s) {
                function a(e) {
                    return q && q === e
                }

                function c(e) {
                    var t = F;
                    switch (e) {
                        case "PRE_ACTIVE":
                        case "PUBLISHED":
                            F = "preactive";
                            break;
                        case "ACTIVE":
                            F = "active";
                            break;
                        case "LB_PAYOUT_ERROR":
                        case "COMPLETED":
                            F = "PRIZE_DRAW" === K || "PROMOTION" === K ? "completed" : "completing";
                            break;
                        case "LB_RESULTED":
                            F = "completed";
                            break;
                        case "LB_PAYOUT_ERROR_FOR_CANCEL":
                        case "CANCELED_AND_REWARDING_LB":
                        case "CANCELED":
                        case "CANCELED_AND_REWARDED_LB":
                        case "CANCELED_AND_NO_REWARD_LB":
                            F = "cancelled"
                    }
                    return F !== t
                }

                function u(e) {
                    if (H = !!e, R) i.warn("warning, the competition already started");
                    else {
                        if (G.length > 0)
                            for (var t = 0; t < G.length; t++) Y[G[t].type](G[t].data);
                        G = [], R = !0
                    }
                }

                function l(e) {
                    i.debug(">> for debug : raw flightdeck message <<"), i.debug(e), i.debug(JSON.stringify(e));
                    var t = e.type,
                        n = e.timestamp,
                        r = e.payload;
                    e.serverTime && (r.serverTime = e.serverTime), (!Q[t] || "NOTIFICATION" === t || Q[t] && Q[t].timestamp < n) && (Q[t] = e, R ? Y[t](r) : G.push({
                        type: t,
                        data: r
                    }))
                }

                function f(e, t) {
                    M = {
                        isInGameRound: e,
                        status: t,
                        isInGIP: U
                    }, M.isInGameRound || v()
                }

                function d(e) {
                    U = e, M && (M.isInGIP = U), E()
                }

                function p(e) {
                    return "Competition.PrizeDrawAward" === e.msg.topic || "GS-CPT-002" === e.msg.data.gsMessageId
                }

                function h() {
                    return !!D.find(p)
                }

                function m(e) {
                    for (var t = 0; t < D.length;)
                        if (p(D[t])) {
                            var n = D[t];
                            D.splice(t, 1), b(n.msg, n.repliable, n.success, n.fail)
                        } else t++;
                    e()
                }

                function g(e, t, n, r) {
                    M && M.isInGameRound && "onAllowInterruptedMessage" !== M.status && "onExitStage" !== M.status ? D.push({
                        msg: e,
                        repliable: t,
                        success: n,
                        fail: r
                    }) : b(e, t, n, r)
                }

                function b(e, t, r, i) {
                    e.data && e.data.gameRoundState && (e.data.gameRoundState = M), t ? n.request(e, r, i) : n.publish(e)
                }

                function v() {
                    for (var e; D.length > 0;) e = D.shift(), b(e.msg, e.repliable, e.success, e.fail)
                }

                function y(e, n, r) {
                    g({
                        channel: "GameService",
                        topic: "GameService.CompetitionMessage",
                        data: {
                            gsMessageId: e,
                            data: n,
                            gameRoundState: M
                        }
                    }, !0, function() {
                        r && t && "function" == typeof t && t(!1)
                    }, function() {})
                }

                function w(e, t) {
                    i.debug(">>> " + e + " <<<"), i.debug(t), i.debug(JSON.stringify(t))
                }

                function _(e) {
                    w("Pre Active", e), H || (H = !0, n.publish({
                        channel: "GameService",
                        topic: "Competition.PreActive",
                        data: e
                    }))
                }

                function C(e) {
                    H = !0, V || (V = !0, n.publish({
                        channel: "GameService",
                        topic: "Competition.Active",
                        data: e
                    })), e.prizePoolRound && (w("PrizePool", e), n.publish({
                        channel: "GameService",
                        topic: "Competition.PrizePool",
                        data: P(e)
                    }))
                }

                function S(e) {
                    w("Leaderboard", e);
                    var t, r = 0;
                    if (!z && e && e.players && Array.isArray(e.players)) {
                        for (r = 0; r < e.players.length; ++r)
                            if (e.players[r].uniqueId) {
                                t = e.players[r];
                                break
                            }
                        if (t && t.remainingLeaderBoardSpinNumberForGames)
                            for (var i in t.remainingLeaderBoardSpinNumberForGames)
                                if (i === o.softwareid) {
                                    t.remainingLeaderBoardSpinNumber = t.remainingLeaderBoardSpinNumberForGames[i];
                                    break
                                }
                        t && t.remainingLeaderBoardSpinNumber <= 0 && (y("GS-CPT-003", null), z = !0)
                    }
                    w("Leaderboard meassage send to GSP", e), n.publish({
                        channel: "GameService",
                        topic: "Competition.Leaderboard",
                        data: e
                    })
                }

                function O(e) {
                    if (w("Leaderboard Award", e), e.payoutStatus && "PENDING" === e.payoutStatus) {
                        n.publish({
                            channel: "GameService",
                            topic: "Competition.LeaderboardAward",
                            data: function(e) {
                                var t = JSON.parse(JSON.stringify(e));
                                if ("CASH" === (t.playerLeaderBoardAward && t.playerLeaderBoardAward.leaderBoardLevel && t.playerLeaderBoardAward.leaderBoardLevel.awardType && t.playerLeaderBoardAward.leaderBoardLevel.awardType.category)) {
                                    var n = t.playerLeaderBoardAward.leaderBoardLevel.amount;
                                    t.playerLeaderBoardAward.leaderBoardLevel.amount = r.formatFloat(parseFloat(n))
                                }
                                return t
                            }(e)
                        });
                        var t = e.playerLeaderBoardAward,
                            i = "",
                            o = "",
                            s = "",
                            a = 0;
                        if (t && t.leaderBoardLevel && t.leaderBoardLevel.awardType)
                            if (o = t.leaderBoardLevel.awardType.category, s = t.leaderBoardLevel.number, a = t.leaderBoardLevel.amount, "FREESPIN" === o) {
                                var c = JSON.parse(t.leaderBoardLevel.awardType.additionalInfo).offers;
                                c.sort(function(e, t) {
                                    return t.freeSpinNum - e.freeSpinNum
                                }), i = c[0].freeSpinNum
                            } else "CASH" === o && (i = r.formatFloat(+t.leaderBoardLevel.amount));
                        y("GS-CPT-001", {
                            winPrize: i,
                            awardType: o,
                            amount: a,
                            level: s
                        })
                    }
                }

                function x(e) {
                    L.push(e)
                }

                function E() {
                    if (!(L.length <= 0 || U)) {
                        var e = L.pop();
                        L.length = 0, n.publish({
                            channel: "GameService",
                            topic: "Competition.Progression",
                            data: e
                        })
                    }
                }

                function k(e) {
                    if (o && o.softwareid) {
                        var t = o.softwareid.slice(0, 10);
                        Object.keys(e.progress).forEach(function(n) {
                            e.progress[n] && e.progress[n].details && Object.keys(e.progress[n].details).forEach(function(r) {
                                Object.keys(e.progress[n].details[r]).forEach(function(t) {
                                    if (t.indexOf("+") > -1) {
                                        var i = t.split("+")[0];
                                        e.progress[n].details[r][i] || (e.progress[n].details[r][i] = 0)
                                    }
                                }), Object.keys(e.progress[n].details[r]).forEach(function(i) {
                                    if (i.indexOf("+" + t) > -1) {
                                        var o = i.split("+" + t)[0];
                                        e.progress[n].details[r][o] || (e.progress[n].details[r][o] = e.progress[n].details[r][i])
                                    }
                                })
                            })
                        })
                    }
                    return e
                }

                function j(e) {
                    w("Progression", e), e && e.progress && (M.isInGameRound ? x(k(e)) : n.publish({
                        channel: "GameService",
                        topic: "Competition.Progression",
                        data: k(e)
                    }))
                }

                function T(e) {
                    if (w("Prize Award", e), e && e.prize && e.prize.awardType) {
                        var t = e.prize.awardType.category;
                        if (("EMPTY" === t || "PENDING" === e.payoutStatus) && (g({
                                channel: "GameService",
                                topic: "Competition.PrizeDrawAward",
                                data: e
                            }), "EMPTY" !== t)) {
                            var n = "";
                            if ("FREESPIN" === t) {
                                var i = JSON.parse(e.prize.awardType.additionalInfo).offers;
                                i.sort(function(e, t) {
                                    return t.freeSpinNum - e.freeSpinNum
                                }), n = i[0].freeSpinNum
                            } else "CASH" === t && (n = r.formatFloat(e.prize.amount));
                            y("GS-CPT-002", {
                                winPrize: n,
                                awardType: t
                            })
                        }
                    }
                }

                function A(e) {
                    w("Completing", e), e.prizePoolRound && (w("PrizePool", e), n.publish({
                        channel: "GameService",
                        topic: "Competition.PrizePool",
                        data: P(e)
                    })), g({
                        channel: "GameService",
                        topic: "Competition.Completing",
                        data: e
                    }), s && "function" == typeof s && s(W)
                }

                function I(e) {
                    w("Completed", e), e.prizePoolRound && (w("PrizePool", e), n.publish({
                        channel: "GameService",
                        topic: "Competition.PrizePool",
                        data: P(e)
                    })), g({
                        channel: "GameService",
                        topic: "Competition.Completed",
                        data: e
                    }), s && "function" == typeof s && s(W)
                }

                function N(e, t, r) {
                    if (w("Cancelled", e), e.prizePoolRound && (w("PrizePool", e), n.publish({
                            channel: "GameService",
                            topic: "Competition.PrizePool",
                            data: P(e)
                        })), g({
                            channel: "GameService",
                            topic: "Competition.Cancelled",
                            data: e
                        }), !1 !== r) {
                        if (W) {
                            var i = null;
                            i = "CANCELED" !== t && "CANCELED_AND_NO_REWARD_LB" !== t, y("GS-CPT-004", {
                                withAward: i
                            }, !1)
                        }
                        s && "function" == typeof s && s(W)
                    }
                }

                function P(e) {
                    var t = JSON.parse(JSON.stringify(e));
                    return t.prizePoolRound.prizes ? (t.prizePoolRound.prizes.forEach(function(e) {
                        e.awardType && "CASH" === e.awardType.category && (e.amountValue = e.amount, e.amount = r.formatFloat(parseFloat(e.amount)))
                    }), t) : e
                }

                function B() {
                    return F
                }
                var R = !1,
                    F = "idle",
                    G = [],
                    L = [],
                    D = [],
                    M = {},
                    U = !1,
                    H = !1,
                    V = !1,
                    W = !1,
                    z = !1,
                    J = Object.freeze(JSON.parse(JSON.stringify(e))),
                    q = J.competition.competitionToken,
                    K = J.competition.stopType,
                    Q = {},
                    Y = {
                        NOTIFICATION: function(e) {
                            var t = e.notifyType,
                                n = e.competitionDynamicInfo,
                                r = c(t);
                            switch (F) {
                                case "preactive":
                                    _(n);
                                    break;
                                case "active":
                                    C(n);
                                    break;
                                case "completing":
                                    A(n);
                                    break;
                                case "completed":
                                    I(n);
                                    break;
                                case "cancelled":
                                    N(n, t, r)
                            }
                        },
                        LEADERBOARD: function(e) {
                            S(e)
                        },
                        TRANSACTION: function(e) {
                            j(e), T(e)
                        },
                        LEADERBOARDAWARD: function(e) {
                            O(e)
                        }
                    };
                return c(J.status), Object.freeze({
                    feed: l,
                    getState: B,
                    hasStarted: function() {
                        return R
                    },
                    isFinished: function() {
                        return "completing" === F || "completed" === F || "cancelled" === F
                    },
                    getCompetitionToken: function() {
                        return q
                    },
                    identify: a,
                    start: u,
                    setInGameRound: f,
                    setGameInProgress: d,
                    setRegistered: function(e) {
                        W = e
                    },
                    getRegistered: function() {
                        return W
                    },
                    hasPDAwardMessages: h,
                    showPDAwardMessages: m
                })
            }
            var n = e.bus,
                r = e.currency,
                i = e.logger,
                o = e.params;
            return {
                newInstance: t
            }
        }
    }), define("gameservice/competition/CompetitionFdController", ["require", "gameservice/competition/CompetitionStateController"], function(e) {
        "use strict";
        return function(t) {
            function n(e) {
                e || R(!1), s()
            }

            function r(e) {
                return e && !P[e.competition.competitionToken] && (P[e.competition.competitionToken] = A.newInstance(e, R, n)), P[e.competition.competitionToken]
            }

            function i() {
                j.unsubscribe(B)
            }

            function o() {
                i(), h(), O.publish({
                    channel: "GameService",
                    topic: "GameService.Panel.ActiveChange",
                    data: {
                        active: !1
                    }
                })
            }

            function s() {
                a()
            }

            function a() {
                j.hasSubscribedByTopic(B) || j.subscribe(B, function(e) {
                    if (e && e.body) {
                        E.debug("===> competition notification"), E.debug(e.body);
                        var t = JSON.parse(e.body),
                            n = p(t.payload.competitionDynamicInfo, {
                                serverTime: t.serverTime
                            }),
                            i = n.competition.competitionToken;
                        if (t.payload.competitionDynamicInfo = n, S && S.identify(i)) S.feed(t);
                        else if (!S || S && S.isFinished()) {
                            S = r(n), T && (S.start(), R(!0));
                            var o = l(t.payload.competitionDynamicInfo);
                            t.payload.competitionDynamicInfo = o, S.feed(t)
                        }
                        S && S.getRegistered() && m()
                    }
                })
            }

            function c(e) {
                e && O.publish({
                    channel: "GameService",
                    topic: "Competition.PlayerInfo",
                    data: e
                })
            }

            function u(e) {
                var t = l(e);
                O.publish({
                    channel: "GameService",
                    topic: "Competition.CompetitionInfo",
                    data: t
                })
            }

            function l(e) {
                function t(e) {
                    e.forEach(function(e) {
                        if (e.rules && e.rules.CONDITION && e.rules.CONDITION[0] && e.rules.CONDITION[0].parameters) {
                            e.rules.CONDITION[0].parameters.forEach(function(e) {
                                ["amount", "winAmount", "loseAmount"].indexOf(e.name) > -1 && (e.value = k.formatFloat(parseFloat(e.value)))
                            })
                        }
                    })
                }

                function n(e) {
                    e && e.forEach(function(e) {
                        e.awardType && "CASH" === e.awardType.category && (e.amountValue = e.amount, e.amount = k.formatFloat(parseFloat(e.amount)))
                    })
                }
                var r = JSON.parse(JSON.stringify(e));
                if (r.competition && r.competition.ruleGroupsDescription) {
                    var i = r.competition.ruleGroupsDescription.LEADERBOARD,
                        o = r.competition.ruleGroupsDescription.PRIZE_DRAW;
                    i && t(i), o && t(o)
                }
                if (r.competition && r.competition.leaderBoard) {
                    n(r.competition.leaderBoard.leaderBoardLevels)
                }
                if (r.competition && r.competition.prizePool) {
                    n(r.competition.prizePool.prizes)
                }
                if (r.prizePoolRound) {
                    n(r.prizePoolRound.prizes)
                }
                return r
            }

            function f(e) {
                if (E.debug("=== > get launch data from RGS"), E.debug(JSON.stringify(e)), e) {
                    var t = !!e.registered;
                    c(e.player);
                    var n;
                    e.competition ? (n = p(e.competition, {
                        progress: e.progress,
                        registered: e.registered,
                        serverTime: e.serverTime
                    }), u(n), S = r(n), S.start(!0), t && g(n.competition.competitionToken), R(!0)) : S && !S.isFinished() ? (S.hasStarted() || S.start(), R(!0)) : R(!1)
                }
                T = !0
            }

            function d(e) {
                if (x && x.softwareid) {
                    var t = x.softwareid.slice(0, 10);
                    Object.keys(e.progress).forEach(function(n) {
                        e.progress[n] && e.progress[n].details && Object.keys(e.progress[n].details).forEach(function(r) {
                            Object.keys(e.progress[n].details[r]).forEach(function(t) {
                                if (t.indexOf("+") > -1) {
                                    var i = t.split("+")[0];
                                    e.progress[n].details[r][i] || (e.progress[n].details[r][i] = 0)
                                }
                            }), Object.keys(e.progress[n].details[r]).forEach(function(i) {
                                if (i.indexOf("+" + t) > -1) {
                                    var o = i.split("+" + t)[0];
                                    e.progress[n].details[r][o] = e.progress[n].details[r][i]
                                }
                            })
                        })
                    })
                }
                return e
            }

            function p(e, t) {
                var n = {};
                if (e)
                    for (var r in e) "staticView" === r ? n.competition = e[r] : n[r] = e[r];
                if (t) {
                    for (var r in t) n[r] = t[r];
                    n.progress && (n.progress = JSON.parse(JSON.stringify(n.progress)), n = d(n))
                }
                return Object.freeze(n)
            }

            function h() {
                if (I && I.subscriptions) {
                    var e = I.subscriptions;
                    for (var t in e) e[t].unsubscribe()
                }
            }

            function m() {
                if (S) {
                    var e = S.getCompetitionToken();
                    if (I.id) {
                        if (I.id === e) return;
                        h()
                    }
                    i(), I = {}, I.id = e, I.subscriptions = {}, S.setRegistered(!0);
                    var t = ["/player/topic/notification/competition/rt/", e].join("");
                    I.subscriptions[t] = j.subscribe(t, function(e) {
                        if (e && e.body) {
                            E.debug("===> competition runtime notification"), E.debug(e.body);
                            var t = JSON.parse(e.body);
                            S.feed(t)
                        }
                    });
                    var n = ["/topic/competition/", e].join("");
                    I.subscriptions[n] = j.subscribe(n, function(e) {
                        var t = {};
                        e && e.body && (t = JSON.parse(e.body), E.debug("message received for all players: "), E.debug(t), S.feed(t))
                    });
                    [
                        ["/player/topic/competition/", e].join(""), ["/player/topic/competition/", e, "/", x.channel, "/", x.presenttype].join("")
                    ].forEach(function(e) {
                        I.subscriptions[e] = j.subscribe(e, function(e) {
                            var t = {};
                            e && e.body && (t = JSON.parse(e.body), E.debug("message received for this player: "), E.debug(t), S.feed(t))
                        })
                    })
                }
            }

            function g(e) {
                j.register("/gs/competition", function(e) {
                    E.debug("===> /gs/competition registered"), E.debug(JSON.stringify(e)), m()
                }, {
                    competitiontoken: e
                })
            }

            function b(e, t) {
                !N && e.competitionId && O.request({
                    channel: "GameService",
                    topic: "GameService.JoinCompetition",
                    data: {
                        competitionId: e.competitionId,
                        nickname: e.nickname
                    }
                }, function(e) {
                    "success" === e.status && (t.reply(null, {
                        status: "success",
                        nickname: e.nickname
                    }), g(e.competitionId))
                }, function(e) {
                    t.reply(e)
                })
            }

            function v(e) {
                N = e, S && S.setGameInProgress(N), O.publish({
                    channel: "GameService",
                    topic: "GameService.GameStateChange",
                    data: {
                        gameInProgress: e
                    }
                })
            }

            function y(e) {}

            function w(e, t) {
                S && S.setInGameRound(e, t)
            }

            function _() {
                return S.hasOwnProperty("hasPDAwardMessages") && S.hasPDAwardMessages()
            }

            function C(e) {
                S.showPDAwardMessages(e)
            }
            var S, O = t.bus,
                x = t.params,
                E = t.logger,
                k = t.currency,
                j = t.fdClient,
                T = !1,
                A = e("gameservice/competition/CompetitionStateController")({
                    bus: O,
                    currency: k,
                    params: x,
                    logger: E
                }),
                I = {},
                N = !1,
                P = {},
                B = ["/player/topic/notification/competition/", x.operator, "/", x.skincode, "/", x.channel, "/", x.presenttype, "/", x.softwareid, "/", x.currencycode].join(""),
                R = function() {
                    return t.onActiveCompetitionChange && "function" == typeof t.onActiveCompetitionChange ? t.onActiveCompetitionChange : function(e) {
                        console.log("empty function")
                    }
                }();
            return O.subscribe({
                channel: "GameService",
                topic: "Competition.Panel.JoinCompetition",
                callback: b
            }), Object.freeze({
                initCompetition: f,
                setGameInProgress: v,
                setGameInActive: y,
                setInGameRound: w,
                startOnCompetitionNotification: a,
                startListenOnCurrentCompetition: m,
                stopCompetitionListening: o,
                hasQueuedPDAwardMessages: _,
                showQueuedPDAwardMessages: C
            })
        }
    }), define("gameservice/bolton/BoltOnStateController", ["require"], function(e) {
        "use strict";
        return function(e) {
            function t(e, t) {
                e.latestJackpots = O, _.publish({
                    channel: "GameService",
                    topic: "BoltOn.MuteHost",
                    data: {
                        muteHost: !0
                    }
                }), w = function() {
                    t.reply(null, void 0)
                }, o({
                    type: "Init",
                    data: {
                        payload: e,
                        settings: {
                            mute: E
                        }
                    }
                })
            }

            function n() {
                o({
                    type: "RevealGame",
                    BoltOnResponse: {}
                })
            }

            function r(e, t) {
                o({
                    type: "StartGame",
                    BoltOnResponse: {}
                })
            }

            function i() {
                o({
                    type: "EndGame",
                    BoltOnResponse: {}
                })
            }

            function o(e) {
                _.request({
                    channel: "GameService",
                    topic: "BoltOn.StateChange",
                    data: e
                }, a, function() {})
            }

            function s(e) {
                _.publish({
                    channel: "GameService",
                    topic: "Game.GameEvent",
                    data: e
                })
            }

            function a(e) {
                if (e.data.state) switch (e.data.state) {
                    case "Init":
                        n();
                        break;
                    case "RevealGame":
                        r();
                        break;
                    case "StartGame":
                        i();
                        break;
                    case "EndGame":
                        _.publish({
                            channel: "GameService",
                            topic: "BoltOn.MuteHost",
                            data: {
                                muteHost: !1
                            }
                        }), _.publish({
                            channel: "GameService",
                            topic: "Game.AutoSpinStop",
                            data: {
                                stopReason: "BoltOn Win"
                            }
                        }), w && (w(), w = void 0)
                }
            }

            function c(e) {
                "settings" === e.type && e.data.hasOwnProperty("mute") && (E = e.data.mute)
            }

            function u(e) {
                e.payload && ("SUCCESS" === e.payload.code ? _.publish({
                    channel: "GameService",
                    topic: "BoltOn.ResponseReceived",
                    data: e.payload
                }) : "COMPETITION_ROUND_CANCELED_ALREADY" === e.payload.code && (j = !0, _.publish({
                    channel: "GameService",
                    topic: "BoltOn.Error",
                    data: {
                        errorCode: "GS-005",
                        priority: 0
                    }
                })))
            }

            function l(e) {
                return S.getConfig() ? (Math.floor(parseFloat(e)) / Math.pow(10, S.getConfig().CURRENCY.DECIMAL_PRECISION)).toFixed(S.getConfig().CURRENCY.DECIMAL_PRECISION) : Math.floor(e) / 100
            }

            function f(e, t, n) {
                var r = {
                    currency: n,
                    value: 0
                };
                return e.currencyMeter.forEach(function(e) {
                    (e.currency === t || e.currency === n && r.currency === n) && (r.currency = e.currency, r.value = l(e.amount))
                }), r
            }

            function d() {
                O && _.publish({
                    channel: "GameService",
                    topic: "BoltOn.MeterUpdate",
                    data: O
                })
            }

            function p(e) {
                v || _.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "BoltOnJPS",
                        items: "1",
                        current: "1",
                        complete: !0
                    }
                }), v = e, x && e && (O || (O = {}), e.jackpots.forEach(function(t) {
                    var n = f(t, C.serverConfig.paramRGS.currencycode, e.baseCurrency);
                    O[t.id] || (O[t.id] = {
                        startValue: n.value,
                        jackpotCycleId: e.cycleId,
                        value: n.value
                    }), O[t.id].currency = n.currency, O[t.id].startValue = Math.min(O[t.id].value, n.value), O[t.id].value = n.value
                }), e.jackpotHotness.forEach(function(e) {
                    O[e.id].hotness = e.hotness || 0, O[e.id].numHotness = e.numHotness || 3, O[e.id].nextLevelProgress = e.nextLevelProgress || 0
                }), e.bands[0].jackpots.forEach(function(e) {
                    O[e.id].level = e.level
                }), d())
            }

            function h(e) {
                y = e, x && e.playerMessage.message && 0 !== e.playerMessage.message.length && (e.playerMessage.message.forEach(function(e) {
                    var t = e.text.match("{.*?}");
                    t && 0 !== t.length && (t = t[0], e.text = e.text.replace(t, "{" + l(t.substring(1, t.length - 1)) + "}"))
                }), _.publish({
                    channel: "GameService",
                    topic: "BoltOn.MessageUpdate",
                    data: e
                }))
            }

            function m(e) {
                if ("NOTIFICATION" === e.type) {
                    if (j) return;
                    if (e.payload.competitionDynamicInfo.status) switch (e.payload.competitionDynamicInfo.status) {
                        case "PAUSE":
                            return j = !0, void _.publish({
                                channel: "GameService",
                                topic: "BoltOn.Error",
                                data: {
                                    errorCode: "GS-001",
                                    priority: 0
                                }
                            });
                        case "CANCELED":
                            return j = !0, void _.publish({
                                channel: "GameService",
                                topic: "BoltOn.Error",
                                data: {
                                    errorCode: "GS-005",
                                    priority: 0
                                }
                            })
                    }
                    e.payload.competitionDynamicInfo.jpsAvailable || (j = !0, _.publish({
                        channel: "GameService",
                        topic: "BoltOn.Error",
                        data: {
                            errorCode: "GS-001",
                            priority: 0
                        }
                    }))
                }
            }

            function g() {
                _.publish({
                    channel: "GameService",
                    topic: "BoltOn.Error",
                    data: {
                        errorCode: "FT-007",
                        priority: 0
                    }
                })
            }

            function b(e, t) {
                k && (clearTimeout(k), k = void 0), !0 === e.data.fail ? (_.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "BoltOn",
                        items: "10",
                        current: "0",
                        complete: !1,
                        fail: !0
                    }
                }), g()) : !1 === e.data.complete ? (k = setTimeout(g, 3e4), _.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "BoltOn",
                        items: "10",
                        current: Math.floor(e.data.percent / 10),
                        complete: !1
                    }
                })) : e.data.complete && (_.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "BoltOn",
                        items: "10",
                        current: "10",
                        complete: !0
                    }
                }), y && h(y), v && p(v))
            }
            var v, y, w, _ = e.bus,
                C = (e.logger, e.stringsConfig, e.serverConfig, e.cecCommand, e.params),
                S = e.currency,
                O = void 0,
                x = !1,
                E = 0;
            _.subscribe({
                channel: "GameService",
                topic: "BoltOn.Play",
                callback: t
            }), _.subscribe({
                channel: "GameService",
                topic: "BoltOn.Mute",
                callback: c
            }), _.subscribe({
                channel: "Game",
                topic: "Game.Control",
                callback: function(e, t) {
                    "stake" === e.name && "change" === e.event && s({
                        event: "StakeChange",
                        value: e.params[0],
                        valueText: e.params[1]
                    })
                }
            }), S.getConfig() ? x = !0 : _.subscribe({
                channel: "ClientService",
                topic: "ClientService.InitDone",
                callback: function() {
                    x = !0, y && h(y), v && p(v)
                }
            });
            var k, j = !1;
            return _.subscribe({
                channel: "GameService",
                topic: "BoltOn.LoadProgress",
                callback: b
            }), Object.freeze({
                init: t,
                revealGame: n,
                playGame: r,
                exitGame: i,
                dataReceived: u,
                jackpotMeterdataReceived: p,
                jackpotWindataReceived: h,
                sendGameEvent: s,
                boltOnStatusUpdate: m,
                feed: function(e) {}
            })
        }
    }), define("gameservice/bolton/BoltOnFdController", ["require", "gameservice/bolton/BoltOnStateController"], function(e) {
        "use strict";
        return function(t) {
            function n() {
                _.unsubscribe(P)
            }

            function r() {
                n(), a(), clearInterval(g)
            }

            function i() {
                _.hasSubscribedByTopic(P) || (_.subscribe(P, function(e) {
                    if (e && e.body) {
                        y.debug("===> competition bolt on notification"), y.debug(e.body);
                        var t = JSON.parse(e.body),
                            n = s(t.payload.competitionDynamicInfo, {
                                serverTime: t.serverTime
                            });
                        n.competition.competitionToken;
                        t.payload.competitionDynamicInfo = n, S.boltOnStatusUpdate(t), S.feed(t)
                    }
                }), c())
            }

            function o(e) {
                i(), C = !0
            }

            function s(e, t) {
                var n = {};
                if (e)
                    for (var r in e) "staticView" === r ? n.competition = e[r] : n[r] = e[r];
                if (t)
                    for (var r in t) n[r] = t[r];
                return Object.freeze(n)
            }

            function a() {
                for (var e in O) e.unsubscribe()
            }

            function c() {
                if (S) {
                    B(!0), console.log("BOLTON: Revealing panel!");
                    var e = ["/topic/jackpot", j, I].join("/"),
                        t = _.subscribe(e, function(e) {
                            var t = {};
                            e && e.body && (t = JSON.parse(e.body), y.debug("message received for all players: "), y.debug(t), S.jackpotMeterdataReceived(t))
                        }),
                        n = ["/player/topic/competition/", A, "/", v.channel, "/", v.presenttype].join(""),
                        r = _.subscribe(n, function(e) {
                            var t = {};
                            e && e.body && (t = JSON.parse(e.body), y.debug("message received for this player: "), y.debug(t), t.type && "TRANSACTION" === t.type && S.dataReceived(t))
                        });
                    O.push(t, r)
                }
            }

            function u(e) {
                N = e, m && m.setGameInProgress(N), b.publish({
                    channel: "GameService",
                    topic: "GameService.GameStateChange",
                    data: {
                        gameInProgress: e
                    }
                })
            }

            function l(e) {}

            function f(e, t) {
                if (void 0 !== t || e || (t = "WagerComplete"), S) {
                    switch (t) {
                        case "wagerStarted":
                        case "wagerAborted":
                        case "wagerComplete":
                            S.sendGameEvent({
                                event: t
                            })
                    }
                    R = e
                }
            }

            function d(e) {
                p(function() {
                    g = x.jackpotPlayerMessageRequestDelay ? setInterval(p, x.jackpotPlayerMessageRequestDelay) : setInterval(p, F)
                })
            }

            function p(e) {
                h(function(t) {
                    if (t.exception) return void console.error(t.exception);
                    e && "function" == typeof e && e(), t.playerMessage ? (S.jackpotWindataReceived(t), S.feed(t)) : console.error("CD-006")
                }, function(e) {
                    console.error(e)
                })
            }

            function h(e, n) {
                var r = {
                    language: t.params.language,
                    currencycode: t.params.currencycode
                };
                G.httpCall(T + "/" + j, e, n, r)
            }
            var m, g, b = t.bus,
                v = t.params,
                y = t.logger,
                w = t.currency,
                _ = t.fdClient,
                C = !1,
                S = e("gameservice/bolton/BoltOnStateController")({
                    bus: b,
                    currency: w,
                    logger: y,
                    params: v
                }),
                O = [],
                x = v.serverConfig,
                E = v.initData,
                k = E.visibleCompetitions[0].competition.staticView,
                j = (E.visibleCompetitions[0].registered, k.jackpotGroupCode),
                T = k.jkptWinsUrl,
                A = k.competitionToken,
                I = t.params.currencycode,
                N = !1,
                P = ["/player/topic/notification/competition/", v.operator, "/", v.skincode, "/", v.channel, "/", v.presenttype, "/", v.softwareid].join(""),
                B = function() {
                    return t.onActiveCompetitionChange && "function" == typeof t.onActiveCompetitionChange ? t.onActiveCompetitionChange : function(e) {
                        console.log("empty function")
                    }
                }(),
                R = !1,
                F = 6e4;
            setTimeout(d);
            var G = function() {
                return {
                    httpCall: function(e, t, n, r) {
                        var i = new XMLHttpRequest,
                            o = function() {
                                console.error("Request jack pot win message timeout")
                            };
                        i.addEventListener("load", function() {
                            t(JSON.parse(i.responseText))
                        }), i.addEventListener("error", n), i.addEventListener("timeout", o);
                        var s = Object.keys(r).map(function(e) {
                            return e + "=" + r[e]
                        }).join("&");
                        i.open("GET", e + "?" + s, !0), i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("Content-Type", "application/json"), i.send()
                    }
                }
            }();
            return Object.freeze({
                initCompetition: o,
                setGameInProgress: u,
                setGameInActive: l,
                setInGameRound: f,
                startOnCompetitionNotification: i,
                stopBoltOnListening: r,
                requestPlayerAwarenessResponse: h
            })
        }
    }), define("gameservice/promospin/PromotionFreespinFdController", ["require"], function(e) {
        "use strict";
        return function(e) {
            function t() {
                c.unsubscribe(l)
            }

            function n() {
                c.hasSubscribedByTopic(l) || c.subscribe(l, function(e) {
                    if (e && e.body) {
                        a.debug("===> promotion free spin notification"), a.debug(e.body);
                        var t = JSON.parse(e.body);
                        s.publish({
                            channel: "GameService",
                            topic: "GameService.PromotionFreespinMessage",
                            data: t.payload
                        })
                    }
                })
            }

            function r(e) {
                u = e, o && o.setGameInProgress(u), s.publish({
                    channel: "GameService",
                    topic: "GameService.GameStateChange",
                    data: {
                        gameInProgress: e
                    }
                })
            }

            function i(e, t) {
                o && o.setInGameRound(e, t)
            }
            var o, s = e.bus,
                a = (e.params, e.logger),
                c = (e.currency, e.fdClient),
                u = !1,
                l = ["/player/topic/promotionfreespin/"].join("");
            return Object.freeze({
                setGameInProgress: r,
                setInGameRound: i,
                startListenOnPromotionFreespin: n,
                stopOnPromotionFreespinNotification: t
            })
        }
    }), define("gameservice/controller/GameServiceController", ["require", "gameservice/flightdeck/FlightdeckClient", "gameservice/competition/CompetitionFdController", "gameservice/bolton/BoltOnFdController", "gameservice/promospin/PromotionFreespinFdController"], function(e) {
        "use strict";

        function t(e, t) {
            k = e.bus, j = e.logger, T = e.currency, k.subscribe({
                channel: "Kernel",
                topic: "System.InternalInit",
                callback: y
            }), k.subscribe({
                channel: "Kernel",
                topic: "System.Ready",
                callback: function() {
                    z = !0, w()
                }
            }), k.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.ViewReady",
                callback: i
            }), k.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.Currency",
                callback: function(e, t) {
                    var n, r, i = {};
                    if (e) {
                        n = Object.keys(e);
                        for (var o = 0; o < n.length; ++o)
                            if (T[n[o]]) {
                                r = Array.isArray(e[n[o]]) ? e[n[o]] : [e[n[o]]], i[n[o]] = {};
                                for (var s = 0; s < r.length; ++s) i[n[o]][String(r[s])] = T[n[o]](r[s])
                            }
                        setTimeout(function() {
                            t.reply(null, i)
                        }, 0)
                    }
                }
            }), t()
        }

        function n(e) {
            K = [], A && (A.stopCompetitionListening(), A = null), I && I.stopOnPromotionFreespinNotification(), e()
        }

        function r() {
            setTimeout(function() {
                k.publish({
                    channel: "GameService",
                    topic: "GameService.Panel.InGameRound",
                    data: {
                        inRound: Z,
                        inGIP: $
                    }
                })
            }, 0)
        }

        function i() {
            W = !0, D && _()
        }

        function o(e) {
            $ = !!e, r(), A && A.setGameInProgress($)
        }

        function s(e) {
            X = !!e, X && (R && clearTimeout(R), R = setTimeout(function() {
                s(!1)
            }, ee)), setTimeout(function() {
                !X || D || M ? !X && D && b() : g()
            }, 0)
        }

        function a(e, t) {
            Z = !!e, r(), A && A.setInGameRound(Z, t), N && N.setInGameRound(Z, t)
        }

        function c(e) {
            j.debug("Is there a active competition? " + e), k.publish({
                channel: "GameService",
                topic: "GameService.Panel.ActiveChange",
                data: {
                    active: !!e
                }
            })
        }

        function u() {
            var t = {
                operator: G.serverConfig.nscode,
                skincode: G.serverConfig.skincode,
                softwareid: G.serverConfig.softwareid,
                uniqueid: G.serverConfig.uniqueid,
                channel: G.serverConfig.channel,
                presenttype: G.serverConfig.presenttype,
                currencycode: G.serverConfig.paramRGS.currencycode
            };
            A = e("gameservice/competition/CompetitionFdController")({
                fdClient: Y,
                params: t,
                bus: k,
                logger: j,
                currency: T,
                onActiveCompetitionChange: c
            }), U && A.startOnCompetitionNotification();
            K.initcompetition || K.push({
                name: "initcompetition",
                callback: function() {
                    A.startOnCompetitionNotification()
                }
            })
        }

        function l(e, t) {
            P = e, u(), J && z && (P.competition && (H = !0), A.initCompetition(P), P = null)
        }

        function f(e, t) {
            B = e, d(e), J && (V = !0, N.initCompetition(), B = null)
        }

        function d(t) {
            var n = {
                operator: G.serverConfig.nscode,
                skincode: G.serverConfig.skincode,
                softwareid: G.serverConfig.softwareid,
                uniqueid: G.serverConfig.uniqueid,
                channel: G.serverConfig.channel,
                presenttype: G.serverConfig.presenttype,
                currencycode: G.serverConfig.paramRGS.currencycode,
                language: G.serverConfig.paramRGS.language,
                initData: t,
                serverConfig: G.serverConfig
            };
            N = e("gameservice/bolton/BoltOnFdController")({
                fdClient: Y,
                params: n,
                bus: k,
                logger: j,
                currency: T,
                onActiveCompetitionChange: c
            }), U && N.startOnCompetitionNotification()
        }

        function p(e, t) {
            h()
        }

        function h() {
            var t = {
                operator: G.serverConfig.nscode,
                skincode: G.serverConfig.skincode,
                softwareid: G.serverConfig.softwareid,
                uniqueid: G.serverConfig.uniqueid,
                channel: G.serverConfig.channel,
                presenttype: G.serverConfig.presenttype,
                currencycode: G.serverConfig.paramRGS.currencycode
            };
            I = e("gameservice/promospin/PromotionFreespinFdController")({
                fdClient: Y,
                params: t,
                bus: k,
                logger: j,
                currency: T
            }), U && I.startListenOnPromotionFreespin();
            K.initpromotionspin || K.push({
                name: "initpromotionspin",
                callback: function() {
                    I.startListenOnPromotionFreespin()
                }
            })
        }

        function m(e, t) {
            M = !0, Y.connect({
                endpoint: L.endpoint,
                headers: {},
                user: L.user
            }, function(t) {
                if (D = !0, M = !1, v(), q)
                    for (; q.length > 0;) {
                        var n = q.shift();
                        n && "function" == typeof n && n.call()
                    }
                e && e()
            }, function() {
                D = !1, M = !1, t && t()
            })
        }

        function g() {
            if (!D && !M) {
                for (; Q.length > 0;) K.push(Q.shift());
                m(function() {}, function() {})
            }
        }

        function b() {
            D && (Y.disconnect(), D = !1, M = !1, U = !1)
        }

        function v() {
            var e = {
                operator: G.serverConfig.nscode,
                skincode: G.serverConfig.skincode,
                softwareid: G.serverConfig.softwareid,
                uniqueid: G.serverConfig.uniqueid,
                channel: G.serverConfig.channel,
                presenttype: G.serverConfig.presenttype,
                currencycode: G.serverConfig.paramRGS.currencycode,
                language: G.serverConfig.paramRGS.language
            };
            Y.registerNotification({
                payload: JSON.parse(JSON.stringify(e))
            }, function() {
                if (j.debug("register gs notification success"), U = !0, K)
                    for (; K.length > 0;) {
                        var e = K.shift();
                        Q.push(e);
                        var t = e.callback;
                        t && "function" == typeof t && t.call()
                    }
            }, function() {
                j.debug("==== register gs notification fail =="), U = !1
            })
        }

        function y(e, t) {
            G = e, F = G.gameServiceConfig, L = {
                endpoint: F.flightdeck.url,
                user: {
                    id: G.serverConfig.skincode + "_" + G.serverConfig.uniqueid
                }
            }, m(function() {
                j.debug("flightdeck connected"), W && _()
            }, function() {
                j.warn("flightdeck connect failed")
            }), k.subscribe({
                channel: "ClientService",
                topic: "GameService.CompetitionInit",
                callback: l
            }), k.subscribe({
                channel: "ClientService",
                topic: "GameService.BoltOnInit",
                callback: f
            }), k.subscribe({
                channel: "ClientService",
                topic: "GameService.PFSNotificationInit",
                callback: p
            }), k.subscribe({
                channel: "ConsoleService",
                topic: "GameService.DisplayMessage",
                callback: C
            }), k.publish({
                channel: "GameService",
                topic: "GameService.InitDone",
                data: {}
            })
        }

        function w() {
            A && P && J && z && (P.competition && (H = !0), A.initCompetition(P), P = null), N && B && J && (N.initCompetition(), B = null)
        }

        function _() {
            var e = {
                operator: G.serverConfig.nscode,
                skincode: G.serverConfig.skincode,
                softwareid: G.serverConfig.softwareid,
                uniqueid: G.serverConfig.uniqueid,
                channel: G.serverConfig.channel,
                presenttype: G.serverConfig.presenttype,
                language: G.serverConfig.paramRGS.language,
                currencycode: G.serverConfig.paramRGS.currencycode,
                stringsConfig: G.stringsConfig,
                enableCustomGSP: G.serverConfig.enableCustomGSP,
                nicknameAutoGen: G.serverConfig.nicknameAutoGen
            };
            k.subscribe({
                channel: "GameService",
                topic: "GameService.Panel.InitDone",
                callback: function() {
                    J = !0, w()
                }
            }), k.publish({
                channel: "GameService",
                topic: "GameService.Panel.Init",
                data: e
            })
        }

        function C(e, t) {
            k.request({
                channel: "GameService",
                topic: "GameService.Panel.DisplayMessage",
                data: e
            }, function(e) {
                t.reply(null, void 0 !== e && null !== e ? e : null)
            }, function() {
                t.reply(null, null)
            })
        }

        function S() {
            return A.hasQueuedPDAwardMessages()
        }

        function O(e) {
            A.showQueuedPDAwardMessages(e)
        }

        function x() {
            return H
        }

        function E() {
            return V
        }
        var k, j, T, A, I, N, P, B, R, F = {},
            G = {},
            L = {},
            D = !1,
            M = !1,
            U = !1,
            H = !1,
            V = !1,
            W = !1,
            z = !1,
            J = !1,
            q = [],
            K = [],
            Q = [],
            Y = e("gameservice/flightdeck/FlightdeckClient"),
            $ = !1,
            X = !1,
            Z = !1,
            ee = 12e5;
        return Object.freeze({
            init: t,
            reInit: n,
            setGameInProgress: o,
            setGameInActive: s,
            setInGameRound: a,
            hasQueuedPDAwardMessages: S,
            showQueuedPDAwardMessages: O,
            isCompetitionActive: x,
            isBoltOnActive: E
        })
    }), define("gameservice/main", ["require", "gameservice/controller/GameServiceController"], function(e) {
        "use strict";
        var t = e("gameservice/controller/GameServiceController");
        return function() {
            function e(e, s) {
                r = e.bus(), i = e.logger, o = e.currency, r.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "gameservice",
                        items: "10",
                        current: "1",
                        complete: !1
                    }
                }), t.init({
                    bus: r,
                    logger: i,
                    currency: o
                }, function() {
                    n(s)
                })
            }

            function n(e) {
                r.publish({
                    channel: "Kernel",
                    topic: "LoadProgress",
                    data: {
                        id: "gameservice",
                        items: "10",
                        current: "10",
                        complete: !0
                    }
                }), e()
            }
            var r, i, o;
            return Object.freeze({
                load: e,
                controller: Object.freeze({
                    setGameInProgress: t.setGameInProgress,
                    setGameInActive: t.setGameInActive,
                    setInGameRound: t.setInGameRound,
                    isGamePaused: t.isGamePaused,
                    setUnPauseGame: t.setUnPauseGame,
                    reInit: t.reInit,
                    hasQueuedPDAwardMessages: t.hasQueuedPDAwardMessages,
                    showQueuedPDAwardMessages: t.showQueuedPDAwardMessages,
                    isCompetitionActive: t.isCompetitionActive,
                    isBoltOnActive: t.isBoltOnActive
                })
            })
        }
    });
//# sourceMappingURL=gameservice.js.map