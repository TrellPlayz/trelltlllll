(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888],
    {
        2152: function (e, t, n) {
            "use strict";
            n.d(t, {
                D: function () {
                    return u;
                },
            });
            var r = Object.prototype,
                i = r.toString,
                o = r.hasOwnProperty,
                a = Function.prototype.toString,
                s = new Map();
            function u(e, t) {
                try {
                    return c(e, t);
                } finally {
                    s.clear();
                }
            }
            function c(e, t) {
                if (e === t) return !0;
                var n = i.call(e);
                if (n !== i.call(t)) return !1;
                switch (n) {
                    case "[object Array]":
                        if (e.length !== t.length) return !1;
                    case "[object Object]":
                        if (p(e, t)) return !0;
                        var r = l(e),
                            s = l(t),
                            u = r.length;
                        if (u !== s.length) return !1;
                        for (var f = 0; f < u; ++f) if (!o.call(t, r[f])) return !1;
                        for (f = 0; f < u; ++f) {
                            var d = r[f];
                            if (!c(e[d], t[d])) return !1;
                        }
                        return !0;
                    case "[object Error]":
                        return e.name === t.name && e.message === t.message;
                    case "[object Number]":
                        if (e !== e) return t !== t;
                    case "[object Boolean]":
                    case "[object Date]":
                        return +e === +t;
                    case "[object RegExp]":
                    case "[object String]":
                        return e == "" + t;
                    case "[object Map]":
                    case "[object Set]":
                        if (e.size !== t.size) return !1;
                        if (p(e, t)) return !0;
                        for (var v = e.entries(), y = "[object Map]" === n; ; ) {
                            var m = v.next();
                            if (m.done) break;
                            var b = m.value,
                                g = b[0],
                                _ = b[1];
                            if (!t.has(g)) return !1;
                            if (y && !c(_, t.get(g))) return !1;
                        }
                        return !0;
                    case "[object Uint16Array]":
                    case "[object Uint8Array]":
                    case "[object Uint32Array]":
                    case "[object Int32Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object ArrayBuffer]":
                        (e = new Uint8Array(e)), (t = new Uint8Array(t));
                    case "[object DataView]":
                        var w = e.byteLength;
                        if (w === t.byteLength) for (; w-- && e[w] === t[w]; );
                        return -1 === w;
                    case "[object AsyncFunction]":
                    case "[object GeneratorFunction]":
                    case "[object AsyncGeneratorFunction]":
                    case "[object Function]":
                        var O = a.call(e);
                        return (
                            O === a.call(t) &&
                            !(function (e, t) {
                                var n = e.length - t.length;
                                return n >= 0 && e.indexOf(t, n) === n;
                            })(O, h)
                        );
                }
                return !1;
            }
            function l(e) {
                return Object.keys(e).filter(f, e);
            }
            function f(e) {
                return void 0 !== this[e];
            }
            var h = "{ [native code] }";
            function p(e, t) {
                var n = s.get(e);
                if (n) {
                    if (n.has(t)) return !0;
                } else s.set(e, (n = new Set()));
                return n.add(t), !1;
            }
        },
        8949: function (e, t, n) {
            "use strict";
            n.d(t, {
                le: function () {
                    return yt;
                },
                jQ: function () {
                    return Mt;
                },
                Gf: function () {
                    return Qt;
                },
                ky: function () {
                    return fn;
                },
                rC: function () {
                    return cn;
                },
            });
            function r(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                throw new Error(
                    "number" === typeof e
                        ? "[MobX] minified error nr: " + e + (n.length ? " " + n.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
                        : "[MobX] " + e
                );
            }
            var i = {};
            function o() {
                return "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof n.g ? n.g : "undefined" !== typeof self ? self : i;
            }
            var a = Object.assign,
                s = Object.getOwnPropertyDescriptor,
                u = Object.defineProperty,
                c = Object.prototype,
                l = [];
            Object.freeze(l);
            var f = {};
            Object.freeze(f);
            var h = "undefined" !== typeof Proxy,
                p = Object.toString();
            function d() {
                h || r("Proxy not available");
            }
            function v(e) {
                var t = !1;
                return function () {
                    if (!t) return (t = !0), e.apply(this, arguments);
                };
            }
            var y = function () {};
            function m(e) {
                return "function" === typeof e;
            }
            function b(e) {
                switch (typeof e) {
                    case "string":
                    case "symbol":
                    case "number":
                        return !0;
                }
                return !1;
            }
            function g(e) {
                return null !== e && "object" === typeof e;
            }
            function _(e) {
                if (!g(e)) return !1;
                var t = Object.getPrototypeOf(e);
                if (null == t) return !0;
                var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return "function" === typeof n && n.toString() === p;
            }
            function w(e) {
                var t = null == e ? void 0 : e.constructor;
                return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName);
            }
            function O(e, t, n) {
                u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
            }
            function S(e, t, n) {
                u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
            }
            function k(e, t) {
                var n = "isMobX" + e;
                return (
                    (t.prototype[n] = !0),
                    function (e) {
                        return g(e) && !0 === e[n];
                    }
                );
            }
            function E(e) {
                return e instanceof Map;
            }
            function D(e) {
                return e instanceof Set;
            }
            var T = "undefined" !== typeof Object.getOwnPropertySymbols;
            var j =
                "undefined" !== typeof Reflect && Reflect.ownKeys
                    ? Reflect.ownKeys
                    : T
                    ? function (e) {
                          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                      }
                    : Object.getOwnPropertyNames;
            function x(e) {
                return null === e ? null : "object" === typeof e ? "" + e : e;
            }
            function A(e, t) {
                return c.hasOwnProperty.call(e, t);
            }
            var I =
                Object.getOwnPropertyDescriptors ||
                function (e) {
                    var t = {};
                    return (
                        j(e).forEach(function (n) {
                            t[n] = s(e, n);
                        }),
                        t
                    );
                };
            function P(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function N(e, t, n) {
                return t && P(e.prototype, t), n && P(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            }
            function V() {
                return (
                    (V =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    V.apply(this, arguments)
                );
            }
            function R(e, t) {
                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), C(e, t);
            }
            function C(e, t) {
                return (
                    (C =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        }),
                    C(e, t)
                );
            }
            function q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function F(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function M(e, t) {
                var n = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (e) {
                            if ("string" === typeof e) return F(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? F(e, t) : void 0;
                        }
                    })(e)) ||
                    (t && e && "number" === typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0;
                    return function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var L = Symbol("mobx-stored-annotations");
            function Q(e) {
                return Object.assign(function (t, n) {
                    B(t, n, e);
                }, e);
            }
            function B(e, t, n) {
                A(e, L) || O(e, L, V({}, e[L])),
                    (function (e) {
                        return e.annotationType_ === H;
                    })(n) || (e[L][t] = n);
            }
            var G = Symbol("mobx administration"),
                U = (function () {
                    function e(e) {
                        void 0 === e && (e = "Atom"),
                            (this.name_ = void 0),
                            (this.isPendingUnobservation_ = !1),
                            (this.isBeingObserved_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Ge.NOT_TRACKING_),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            (this.name_ = e);
                    }
                    var t = e.prototype;
                    return (
                        (t.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.reportObserved = function () {
                            return dt(this);
                        }),
                        (t.reportChanged = function () {
                            ht(), vt(this), pt();
                        }),
                        (t.toString = function () {
                            return this.name_;
                        }),
                        e
                    );
                })(),
                z = k("Atom", U);
            function W(e, t, n) {
                void 0 === t && (t = y), void 0 === n && (n = y);
                var r,
                    i = new U(e);
                return t !== y && qt(Rt, i, t, r), n !== y && Ct(i, n), i;
            }
            var K = {
                identity: function (e, t) {
                    return e === t;
                },
                structural: function (e, t) {
                    return rr(e, t);
                },
                default: function (e, t) {
                    return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t;
                },
                shallow: function (e, t) {
                    return rr(e, t, 1);
                },
            };
            function J(e, t, n) {
                return Xt(e)
                    ? e
                    : Array.isArray(e)
                    ? De.array(e, { name: n })
                    : _(e)
                    ? De.object(e, void 0, { name: n })
                    : E(e)
                    ? De.map(e, { name: n })
                    : D(e)
                    ? De.set(e, { name: n })
                    : "function" !== typeof e || It(e) || Yt(e)
                    ? e
                    : w(e)
                    ? Kt(e)
                    : At(n, e);
            }
            function Y(e) {
                return e;
            }
            var H = "override";
            function X(e, t) {
                return { annotationType_: e, options_: t, make_: $, extend_: Z };
            }
            function $(e, t, n, r) {
                var i;
                if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
                if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
                if (It(n.value)) return 1;
                var o = ee(e, this, t, n, !1);
                return u(r, t, o), 2;
            }
            function Z(e, t, n, r) {
                var i = ee(e, this, t, n);
                return e.defineProperty_(t, i, r);
            }
            function ee(e, t, n, r, i) {
                var o, a, s, u, c, l, f, h;
                void 0 === i && (i = ut.safeDescriptors), (h = r), t.annotationType_, h.value;
                var p,
                    d = r.value;
                null != (o = t.options_) && o.bound && (d = d.bind(null != (p = e.proxy_) ? p : e.target_));
                return {
                    value: Ce(
                        null != (a = null == (s = t.options_) ? void 0 : s.name) ? a : n.toString(),
                        d,
                        null != (u = null == (c = t.options_) ? void 0 : c.autoAction) && u,
                        null != (l = t.options_) && l.bound ? (null != (f = e.proxy_) ? f : e.target_) : void 0
                    ),
                    configurable: !i || e.isPlainObject_,
                    enumerable: !1,
                    writable: !i,
                };
            }
            function te(e, t) {
                return { annotationType_: e, options_: t, make_: ne, extend_: re };
            }
            function ne(e, t, n, r) {
                var i;
                if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
                if (null != (i = this.options_) && i.bound && (!A(e.target_, t) || !Yt(e.target_[t])) && null === this.extend_(e, t, n, !1)) return 0;
                if (Yt(n.value)) return 1;
                var o = ie(e, this, t, n, !1, !1);
                return u(r, t, o), 2;
            }
            function re(e, t, n, r) {
                var i,
                    o = ie(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
                return e.defineProperty_(t, o, r);
            }
            function ie(e, t, n, r, i, o) {
                var a;
                void 0 === o && (o = ut.safeDescriptors), (a = r), t.annotationType_, a.value;
                var s,
                    u = r.value;
                (Yt(u) || (u = Kt(u)), i) && ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow = !0);
                return { value: u, configurable: !o || e.isPlainObject_, enumerable: !1, writable: !o };
            }
            function oe(e, t) {
                return { annotationType_: e, options_: t, make_: ae, extend_: se };
            }
            function ae(e, t, n) {
                return null === this.extend_(e, t, n, !1) ? 0 : 1;
            }
            function se(e, t, n, r) {
                return (
                    (function (e, t, n, r) {
                        t.annotationType_, r.get;
                        0;
                    })(0, this, 0, n),
                    e.defineComputedProperty_(t, V({}, this.options_, { get: n.get, set: n.set }), r)
                );
            }
            function ue(e, t) {
                return { annotationType_: e, options_: t, make_: ce, extend_: le };
            }
            function ce(e, t, n) {
                return null === this.extend_(e, t, n, !1) ? 0 : 1;
            }
            function le(e, t, n, r) {
                var i, o;
                return (
                    (function (e, t, n, r) {
                        t.annotationType_;
                        0;
                    })(0, this),
                    e.defineObservableProperty_(t, n.value, null != (i = null == (o = this.options_) ? void 0 : o.enhancer) ? i : J, r)
                );
            }
            var fe = he();
            function he(e) {
                return { annotationType_: "true", options_: e, make_: pe, extend_: de };
            }
            function pe(e, t, n, r) {
                var i, o, a, s;
                if (n.get) return Ae.make_(e, t, n, r);
                if (n.set) {
                    var c = Ce(t.toString(), n.set);
                    return r === e.target_ ? (null === e.defineProperty_(t, { configurable: !ut.safeDescriptors || e.isPlainObject_, set: c }) ? 0 : 2) : (u(r, t, { configurable: !0, set: c }), 2);
                }
                if (r !== e.target_ && "function" === typeof n.value)
                    return w(n.value) ? (null != (s = this.options_) && s.autoBind ? Kt.bound : Kt).make_(e, t, n, r) : (null != (a = this.options_) && a.autoBind ? At.bound : At).make_(e, t, n, r);
                var l,
                    f = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? De.ref : De;
                "function" === typeof n.value && null != (o = this.options_) && o.autoBind && (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
                return f.make_(e, t, n, r);
            }
            function de(e, t, n, r) {
                var i, o, a;
                if (n.get) return Ae.extend_(e, t, n, r);
                if (n.set) return e.defineProperty_(t, { configurable: !ut.safeDescriptors || e.isPlainObject_, set: Ce(t.toString(), n.set) }, r);
                "function" === typeof n.value && null != (i = this.options_) && i.autoBind && (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
                return (!1 === (null == (o = this.options_) ? void 0 : o.deep) ? De.ref : De).extend_(e, t, n, r);
            }
            var ve = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
            function ye(e) {
                return e || ve;
            }
            Object.freeze(ve);
            var me = ue("observable"),
                be = ue("observable.ref", { enhancer: Y }),
                ge = ue("observable.shallow", {
                    enhancer: function (e, t, n) {
                        return void 0 === e || null === e || Bn(e) || En(e) || Pn(e) || Rn(e)
                            ? e
                            : Array.isArray(e)
                            ? De.array(e, { name: n, deep: !1 })
                            : _(e)
                            ? De.object(e, void 0, { name: n, deep: !1 })
                            : E(e)
                            ? De.map(e, { name: n, deep: !1 })
                            : D(e)
                            ? De.set(e, { name: n, deep: !1 })
                            : void 0;
                    },
                }),
                _e = ue("observable.struct", {
                    enhancer: function (e, t) {
                        return rr(e, t) ? t : e;
                    },
                }),
                we = Q(me);
            function Oe(e) {
                return !0 === e.deep
                    ? J
                    : !1 === e.deep
                    ? Y
                    : (function (e) {
                          var t, n;
                          return e && null != (t = null == (n = e.options_) ? void 0 : n.enhancer) ? t : J;
                      })(e.defaultDecorator);
            }
            function Se(e, t, n) {
                if (!b(t)) return Xt(e) ? e : _(e) ? De.object(e, t, n) : Array.isArray(e) ? De.array(e, t) : E(e) ? De.map(e, t) : D(e) ? De.set(e, t) : "object" === typeof e && null !== e ? e : De.box(e, t);
                B(e, t, me);
            }
            Object.assign(Se, we);
            var ke,
                Ee,
                De = a(Se, {
                    box: function (e, t) {
                        var n = ye(t);
                        return new Be(e, Oe(n), n.name, !0, n.equals);
                    },
                    array: function (e, t) {
                        var n = ye(t);
                        return (!1 === ut.useProxies || !1 === n.proxy ? $n : yn)(e, Oe(n), n.name);
                    },
                    map: function (e, t) {
                        var n = ye(t);
                        return new In(e, Oe(n), n.name);
                    },
                    set: function (e, t) {
                        var n = ye(t);
                        return new Vn(e, Oe(n), n.name);
                    },
                    object: function (e, t, n) {
                        return Lt(
                            !1 === ut.useProxies || !1 === (null == n ? void 0 : n.proxy)
                                ? Mn({}, n)
                                : (function (e, t) {
                                      var n, r;
                                      return d(), (e = Mn(e, t)), null != (r = (n = e[G]).proxy_) ? r : (n.proxy_ = new Proxy(e, tn));
                                  })({}, n),
                            e,
                            t
                        );
                    },
                    ref: Q(be),
                    shallow: Q(ge),
                    deep: we,
                    struct: Q(_e),
                }),
                Te = "computed",
                je = oe(Te),
                xe = oe("computed.struct", { equals: K.structural }),
                Ae = function (e, t) {
                    if (b(t)) return B(e, t, je);
                    if (_(e)) return Q(oe(Te, e));
                    var n = _(t) ? t : {};
                    return (n.get = e), n.name || (n.name = e.name || ""), new ze(n);
                };
            Object.assign(Ae, je), (Ae.struct = Q(xe));
            var Ie,
                Pe = 0,
                Ne = 1,
                Ve = null != (ke = null == (Ee = s(function () {}, "name")) ? void 0 : Ee.configurable) && ke,
                Re = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
            function Ce(e, t, n, r) {
                function i() {
                    return qe(e, n, t, r || this, arguments);
                }
                return void 0 === n && (n = !1), (i.isMobxAction = !0), Ve && ((Re.value = e), Object.defineProperty(i, "name", Re)), i;
            }
            function qe(e, t, n, i, o) {
                var a = (function (e, t, n, r) {
                    var i = !1,
                        o = 0;
                    0;
                    var a = ut.trackingDerivation,
                        s = !t || !a;
                    ht();
                    var u = ut.allowStateChanges;
                    s && (et(), (u = Me(!0)));
                    var c = nt(!0),
                        l = { runAsAction_: s, prevDerivation_: a, prevAllowStateChanges_: u, prevAllowStateReads_: c, notifySpy_: i, startTime_: o, actionId_: Ne++, parentActionId_: Pe };
                    return (Pe = l.actionId_), l;
                })(0, t);
                try {
                    return n.apply(i, o);
                } catch (s) {
                    throw ((a.error_ = s), s);
                } finally {
                    !(function (e) {
                        Pe !== e.actionId_ && r(30);
                        (Pe = e.parentActionId_), void 0 !== e.error_ && (ut.suppressReactionErrors = !0);
                        Le(e.prevAllowStateChanges_), rt(e.prevAllowStateReads_), pt(), e.runAsAction_ && tt(e.prevDerivation_);
                        0;
                        ut.suppressReactionErrors = !1;
                    })(a);
                }
            }
            function Fe(e, t) {
                var n = Me(e);
                try {
                    return t();
                } finally {
                    Le(n);
                }
            }
            function Me(e) {
                var t = ut.allowStateChanges;
                return (ut.allowStateChanges = e), t;
            }
            function Le(e) {
                ut.allowStateChanges = e;
            }
            Ie = Symbol.toPrimitive;
            var Qe,
                Be = (function (e) {
                    function t(t, n, r, i, o) {
                        var a;
                        return (
                            void 0 === r && (r = "ObservableValue"),
                            void 0 === i && (i = !0),
                            void 0 === o && (o = K.default),
                            ((a = e.call(this, r) || this).enhancer = void 0),
                            (a.name_ = void 0),
                            (a.equals = void 0),
                            (a.hasUnreportedChange_ = !1),
                            (a.interceptors_ = void 0),
                            (a.changeListeners_ = void 0),
                            (a.value_ = void 0),
                            (a.dehancer = void 0),
                            (a.enhancer = n),
                            (a.name_ = r),
                            (a.equals = o),
                            (a.value_ = n(t, void 0, r)),
                            a
                        );
                    }
                    R(t, e);
                    var n = t.prototype;
                    return (
                        (n.dehanceValue = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (n.set = function (e) {
                            this.value_;
                            if ((e = this.prepareNewValue_(e)) !== ut.UNCHANGED) {
                                0, this.setNewValue_(e);
                            }
                        }),
                        (n.prepareNewValue_ = function (e) {
                            if ((He(this), nn(this))) {
                                var t = on(this, { object: this, type: pn, newValue: e });
                                if (!t) return ut.UNCHANGED;
                                e = t.newValue;
                            }
                            return (e = this.enhancer(e, this.value_, this.name_)), this.equals(this.value_, e) ? ut.UNCHANGED : e;
                        }),
                        (n.setNewValue_ = function (e) {
                            var t = this.value_;
                            (this.value_ = e), this.reportChanged(), an(this) && un(this, { type: pn, object: this, newValue: e, oldValue: t });
                        }),
                        (n.get = function () {
                            return this.reportObserved(), this.dehanceValue(this.value_);
                        }),
                        (n.intercept_ = function (e) {
                            return rn(this, e);
                        }),
                        (n.observe_ = function (e, t) {
                            return t && e({ observableKind: "value", debugObjectName: this.name_, object: this, type: pn, newValue: this.value_, oldValue: void 0 }), sn(this, e);
                        }),
                        (n.raw = function () {
                            return this.value_;
                        }),
                        (n.toJSON = function () {
                            return this.get();
                        }),
                        (n.toString = function () {
                            return this.name_ + "[" + this.value_ + "]";
                        }),
                        (n.valueOf = function () {
                            return x(this.get());
                        }),
                        (n[Ie] = function () {
                            return this.valueOf();
                        }),
                        t
                    );
                })(U);
            Qe = Symbol.toPrimitive;
            var Ge,
                Ue,
                ze = (function () {
                    function e(e) {
                        (this.dependenciesState_ = Ge.NOT_TRACKING_),
                            (this.observing_ = []),
                            (this.newObserving_ = null),
                            (this.isBeingObserved_ = !1),
                            (this.isPendingUnobservation_ = !1),
                            (this.observers_ = new Set()),
                            (this.diffValue_ = 0),
                            (this.runId_ = 0),
                            (this.lastAccessedBy_ = 0),
                            (this.lowestObserverState_ = Ge.UP_TO_DATE_),
                            (this.unboundDepsCount_ = 0),
                            (this.value_ = new Ke(null)),
                            (this.name_ = void 0),
                            (this.triggeredBy_ = void 0),
                            (this.isComputing_ = !1),
                            (this.isRunningSetter_ = !1),
                            (this.derivation = void 0),
                            (this.setter_ = void 0),
                            (this.isTracing_ = Ue.NONE),
                            (this.scope_ = void 0),
                            (this.equals_ = void 0),
                            (this.requiresReaction_ = void 0),
                            (this.keepAlive_ = void 0),
                            (this.onBOL = void 0),
                            (this.onBUOL = void 0),
                            e.get || r(31),
                            (this.derivation = e.get),
                            (this.name_ = e.name || "ComputedValue"),
                            e.set && (this.setter_ = Ce("ComputedValue-setter", e.set)),
                            (this.equals_ = e.equals || (e.compareStructural || e.struct ? K.structural : K.default)),
                            (this.scope_ = e.context),
                            (this.requiresReaction_ = e.requiresReaction),
                            (this.keepAlive_ = !!e.keepAlive);
                    }
                    var t = e.prototype;
                    return (
                        (t.onBecomeStale_ = function () {
                            !(function (e) {
                                if (e.lowestObserverState_ !== Ge.UP_TO_DATE_) return;
                                (e.lowestObserverState_ = Ge.POSSIBLY_STALE_),
                                    e.observers_.forEach(function (e) {
                                        e.dependenciesState_ === Ge.UP_TO_DATE_ && ((e.dependenciesState_ = Ge.POSSIBLY_STALE_), e.onBecomeStale_());
                                    });
                            })(this);
                        }),
                        (t.onBO = function () {
                            this.onBOL &&
                                this.onBOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.onBUO = function () {
                            this.onBUOL &&
                                this.onBUOL.forEach(function (e) {
                                    return e();
                                });
                        }),
                        (t.get = function () {
                            if ((this.isComputing_ && r(32, this.name_, this.derivation), 0 !== ut.inBatch || 0 !== this.observers_.size || this.keepAlive_)) {
                                if ((dt(this), Ye(this))) {
                                    var e = ut.trackingContext;
                                    this.keepAlive_ && !e && (ut.trackingContext = this),
                                        this.trackAndCompute() &&
                                            (function (e) {
                                                if (e.lowestObserverState_ === Ge.STALE_) return;
                                                (e.lowestObserverState_ = Ge.STALE_),
                                                    e.observers_.forEach(function (t) {
                                                        t.dependenciesState_ === Ge.POSSIBLY_STALE_ ? (t.dependenciesState_ = Ge.STALE_) : t.dependenciesState_ === Ge.UP_TO_DATE_ && (e.lowestObserverState_ = Ge.UP_TO_DATE_);
                                                    });
                                            })(this),
                                        (ut.trackingContext = e);
                                }
                            } else Ye(this) && (this.warnAboutUntrackedRead_(), ht(), (this.value_ = this.computeValue_(!1)), pt());
                            var t = this.value_;
                            if (Je(t)) throw t.cause;
                            return t;
                        }),
                        (t.set = function (e) {
                            if (this.setter_) {
                                this.isRunningSetter_ && r(33, this.name_), (this.isRunningSetter_ = !0);
                                try {
                                    this.setter_.call(this.scope_, e);
                                } finally {
                                    this.isRunningSetter_ = !1;
                                }
                            } else r(34, this.name_);
                        }),
                        (t.trackAndCompute = function () {
                            var e = this.value_,
                                t = this.dependenciesState_ === Ge.NOT_TRACKING_,
                                n = this.computeValue_(!0),
                                r = t || Je(e) || Je(n) || !this.equals_(e, n);
                            return r && (this.value_ = n), r;
                        }),
                        (t.computeValue_ = function (e) {
                            this.isComputing_ = !0;
                            var t,
                                n = Me(!1);
                            if (e) t = Xe(this, this.derivation, this.scope_);
                            else if (!0 === ut.disableErrorBoundaries) t = this.derivation.call(this.scope_);
                            else
                                try {
                                    t = this.derivation.call(this.scope_);
                                } catch (r) {
                                    t = new Ke(r);
                                }
                            return Le(n), (this.isComputing_ = !1), t;
                        }),
                        (t.suspend_ = function () {
                            this.keepAlive_ || ($e(this), (this.value_ = void 0));
                        }),
                        (t.observe_ = function (e, t) {
                            var n = this,
                                r = !0,
                                i = void 0;
                            return Pt(function () {
                                var o = n.get();
                                if (!r || t) {
                                    var a = et();
                                    e({ observableKind: "computed", debugObjectName: n.name_, type: pn, object: n, newValue: o, oldValue: i }), tt(a);
                                }
                                (r = !1), (i = o);
                            });
                        }),
                        (t.warnAboutUntrackedRead_ = function () {}),
                        (t.toString = function () {
                            return this.name_ + "[" + this.derivation.toString() + "]";
                        }),
                        (t.valueOf = function () {
                            return x(this.get());
                        }),
                        (t[Qe] = function () {
                            return this.valueOf();
                        }),
                        e
                    );
                })(),
                We = k("ComputedValue", ze);
            !(function (e) {
                (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"), (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"), (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"), (e[(e.STALE_ = 2)] = "STALE_");
            })(Ge || (Ge = {})),
                (function (e) {
                    (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
                })(Ue || (Ue = {}));
            var Ke = function (e) {
                (this.cause = void 0), (this.cause = e);
            };
            function Je(e) {
                return e instanceof Ke;
            }
            function Ye(e) {
                switch (e.dependenciesState_) {
                    case Ge.UP_TO_DATE_:
                        return !1;
                    case Ge.NOT_TRACKING_:
                    case Ge.STALE_:
                        return !0;
                    case Ge.POSSIBLY_STALE_:
                        for (var t = nt(!0), n = et(), r = e.observing_, i = r.length, o = 0; o < i; o++) {
                            var a = r[o];
                            if (We(a)) {
                                if (ut.disableErrorBoundaries) a.get();
                                else
                                    try {
                                        a.get();
                                    } catch (s) {
                                        return tt(n), rt(t), !0;
                                    }
                                if (e.dependenciesState_ === Ge.STALE_) return tt(n), rt(t), !0;
                            }
                        }
                        return it(e), tt(n), rt(t), !1;
                }
            }
            function He(e) {}
            function Xe(e, t, n) {
                var r = nt(!0);
                it(e), (e.newObserving_ = new Array(e.observing_.length + 100)), (e.unboundDepsCount_ = 0), (e.runId_ = ++ut.runId);
                var i,
                    o = ut.trackingDerivation;
                if (((ut.trackingDerivation = e), ut.inBatch++, !0 === ut.disableErrorBoundaries)) i = t.call(n);
                else
                    try {
                        i = t.call(n);
                    } catch (a) {
                        i = new Ke(a);
                    }
                return (
                    ut.inBatch--,
                    (ut.trackingDerivation = o),
                    (function (e) {
                        for (var t = e.observing_, n = (e.observing_ = e.newObserving_), r = Ge.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, a = 0; a < o; a++) {
                            var s = n[a];
                            0 === s.diffValue_ && ((s.diffValue_ = 1), i !== a && (n[i] = s), i++), s.dependenciesState_ > r && (r = s.dependenciesState_);
                        }
                        (n.length = i), (e.newObserving_ = null), (o = t.length);
                        for (; o--; ) {
                            var u = t[o];
                            0 === u.diffValue_ && lt(u, e), (u.diffValue_ = 0);
                        }
                        for (; i--; ) {
                            var c = n[i];
                            1 === c.diffValue_ && ((c.diffValue_ = 0), ct(c, e));
                        }
                        r !== Ge.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
                    })(e),
                    rt(r),
                    i
                );
            }
            function $e(e) {
                var t = e.observing_;
                e.observing_ = [];
                for (var n = t.length; n--; ) lt(t[n], e);
                e.dependenciesState_ = Ge.NOT_TRACKING_;
            }
            function Ze(e) {
                var t = et();
                try {
                    return e();
                } finally {
                    tt(t);
                }
            }
            function et() {
                var e = ut.trackingDerivation;
                return (ut.trackingDerivation = null), e;
            }
            function tt(e) {
                ut.trackingDerivation = e;
            }
            function nt(e) {
                var t = ut.allowStateReads;
                return (ut.allowStateReads = e), t;
            }
            function rt(e) {
                ut.allowStateReads = e;
            }
            function it(e) {
                if (e.dependenciesState_ !== Ge.UP_TO_DATE_) {
                    e.dependenciesState_ = Ge.UP_TO_DATE_;
                    for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Ge.UP_TO_DATE_;
                }
            }
            var ot = function () {
                    (this.version = 6),
                        (this.UNCHANGED = {}),
                        (this.trackingDerivation = null),
                        (this.trackingContext = null),
                        (this.runId = 0),
                        (this.mobxGuid = 0),
                        (this.inBatch = 0),
                        (this.pendingUnobservations = []),
                        (this.pendingReactions = []),
                        (this.isRunningReactions = !1),
                        (this.allowStateChanges = !1),
                        (this.allowStateReads = !0),
                        (this.enforceActions = !0),
                        (this.spyListeners = []),
                        (this.globalReactionErrorHandlers = []),
                        (this.computedRequiresReaction = !1),
                        (this.reactionRequiresObservable = !1),
                        (this.observableRequiresReaction = !1),
                        (this.disableErrorBoundaries = !1),
                        (this.suppressReactionErrors = !1),
                        (this.useProxies = !0),
                        (this.verifyProxies = !1),
                        (this.safeDescriptors = !0);
                },
                at = !0,
                st = !1,
                ut = (function () {
                    var e = o();
                    return (
                        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (at = !1),
                        e.__mobxGlobals && e.__mobxGlobals.version !== new ot().version && (at = !1),
                        at
                            ? e.__mobxGlobals
                                ? ((e.__mobxInstanceCount += 1), e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals)
                                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ot()))
                            : (setTimeout(function () {
                                  st || r(35);
                              }, 1),
                              new ot())
                    );
                })();
            function ct(e, t) {
                e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
            }
            function lt(e, t) {
                e.observers_.delete(t), 0 === e.observers_.size && ft(e);
            }
            function ft(e) {
                !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), ut.pendingUnobservations.push(e));
            }
            function ht() {
                ut.inBatch++;
            }
            function pt() {
                if (0 === --ut.inBatch) {
                    bt();
                    for (var e = ut.pendingUnobservations, t = 0; t < e.length; t++) {
                        var n = e[t];
                        (n.isPendingUnobservation_ = !1), 0 === n.observers_.size && (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof ze && n.suspend_());
                    }
                    ut.pendingUnobservations = [];
                }
            }
            function dt(e) {
                var t = ut.trackingDerivation;
                return null !== t
                    ? (t.runId_ !== e.lastAccessedBy_ && ((e.lastAccessedBy_ = t.runId_), (t.newObserving_[t.unboundDepsCount_++] = e), !e.isBeingObserved_ && ut.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())), !0)
                    : (0 === e.observers_.size && ut.inBatch > 0 && ft(e), !1);
            }
            function vt(e) {
                e.lowestObserverState_ !== Ge.STALE_ &&
                    ((e.lowestObserverState_ = Ge.STALE_),
                    e.observers_.forEach(function (e) {
                        e.dependenciesState_ === Ge.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Ge.STALE_);
                    }));
            }
            var yt = (function () {
                function e(e, t, n, r) {
                    void 0 === e && (e = "Reaction"),
                        (this.name_ = void 0),
                        (this.onInvalidate_ = void 0),
                        (this.errorHandler_ = void 0),
                        (this.requiresObservable_ = void 0),
                        (this.observing_ = []),
                        (this.newObserving_ = []),
                        (this.dependenciesState_ = Ge.NOT_TRACKING_),
                        (this.diffValue_ = 0),
                        (this.runId_ = 0),
                        (this.unboundDepsCount_ = 0),
                        (this.isDisposed_ = !1),
                        (this.isScheduled_ = !1),
                        (this.isTrackPending_ = !1),
                        (this.isRunning_ = !1),
                        (this.isTracing_ = Ue.NONE),
                        (this.name_ = e),
                        (this.onInvalidate_ = t),
                        (this.errorHandler_ = n),
                        (this.requiresObservable_ = r);
                }
                var t = e.prototype;
                return (
                    (t.onBecomeStale_ = function () {
                        this.schedule_();
                    }),
                    (t.schedule_ = function () {
                        this.isScheduled_ || ((this.isScheduled_ = !0), ut.pendingReactions.push(this), bt());
                    }),
                    (t.isScheduled = function () {
                        return this.isScheduled_;
                    }),
                    (t.runReaction_ = function () {
                        if (!this.isDisposed_) {
                            ht(), (this.isScheduled_ = !1);
                            var e = ut.trackingContext;
                            if (((ut.trackingContext = this), Ye(this))) {
                                this.isTrackPending_ = !0;
                                try {
                                    this.onInvalidate_();
                                } catch (t) {
                                    this.reportExceptionInDerivation_(t);
                                }
                            }
                            (ut.trackingContext = e), pt();
                        }
                    }),
                    (t.track = function (e) {
                        if (!this.isDisposed_) {
                            ht();
                            0, (this.isRunning_ = !0);
                            var t = ut.trackingContext;
                            ut.trackingContext = this;
                            var n = Xe(this, e, void 0);
                            (ut.trackingContext = t), (this.isRunning_ = !1), (this.isTrackPending_ = !1), this.isDisposed_ && $e(this), Je(n) && this.reportExceptionInDerivation_(n.cause), pt();
                        }
                    }),
                    (t.reportExceptionInDerivation_ = function (e) {
                        var t = this;
                        if (this.errorHandler_) this.errorHandler_(e, this);
                        else {
                            if (ut.disableErrorBoundaries) throw e;
                            var n = "[mobx] uncaught error in '" + this + "'";
                            ut.suppressReactionErrors || console.error(n, e),
                                ut.globalReactionErrorHandlers.forEach(function (n) {
                                    return n(e, t);
                                });
                        }
                    }),
                    (t.dispose = function () {
                        this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (ht(), $e(this), pt()));
                    }),
                    (t.getDisposer_ = function () {
                        var e = this.dispose.bind(this);
                        return (e[G] = this), e;
                    }),
                    (t.toString = function () {
                        return "Reaction[" + this.name_ + "]";
                    }),
                    (t.trace = function (e) {
                        void 0 === e && (e = !1),
                            (function () {
                                r("trace() is not available in production builds");
                                for (var e = !1, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                                "boolean" === typeof n[n.length - 1] && (e = n.pop());
                                var o = $t(n);
                                if (!o) return r("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
                                o.isTracing_ === Ue.NONE && console.log("[mobx.trace] '" + o.name_ + "' tracing enabled");
                                o.isTracing_ = e ? Ue.BREAK : Ue.LOG;
                            })(this, e);
                    }),
                    e
                );
            })();
            var mt = function (e) {
                return e();
            };
            function bt() {
                ut.inBatch > 0 || ut.isRunningReactions || mt(gt);
            }
            function gt() {
                ut.isRunningReactions = !0;
                for (var e = ut.pendingReactions, t = 0; e.length > 0; ) {
                    100 === ++t && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
                    for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
                }
                ut.isRunningReactions = !1;
            }
            var _t = k("Reaction", yt);
            var wt = "action",
                Ot = "autoAction",
                St = "<unnamed action>",
                kt = X(wt),
                Et = X("action.bound", { bound: !0 }),
                Dt = X(Ot, { autoAction: !0 }),
                Tt = X("autoAction.bound", { autoAction: !0, bound: !0 });
            function jt(e) {
                return function (t, n) {
                    return m(t) ? Ce(t.name || St, t, e) : m(n) ? Ce(t, n, e) : b(n) ? B(t, n, e ? Dt : kt) : b(t) ? Q(X(e ? Ot : wt, { name: t, autoAction: e })) : void 0;
                };
            }
            var xt = jt(!1);
            Object.assign(xt, kt);
            var At = jt(!0);
            function It(e) {
                return m(e) && !0 === e.isMobxAction;
            }
            function Pt(e, t) {
                var n, r;
                void 0 === t && (t = f);
                var i,
                    o = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
                if (!t.scheduler && !t.delay)
                    i = new yt(
                        o,
                        function () {
                            this.track(u);
                        },
                        t.onError,
                        t.requiresObservable
                    );
                else {
                    var a = Vt(t),
                        s = !1;
                    i = new yt(
                        o,
                        function () {
                            s ||
                                ((s = !0),
                                a(function () {
                                    (s = !1), i.isDisposed_ || i.track(u);
                                }));
                        },
                        t.onError,
                        t.requiresObservable
                    );
                }
                function u() {
                    e(i);
                }
                return i.schedule_(), i.getDisposer_();
            }
            Object.assign(At, Dt), (xt.bound = Q(Et)), (At.bound = Q(Tt));
            var Nt = function (e) {
                return e();
            };
            function Vt(e) {
                return e.scheduler
                    ? e.scheduler
                    : e.delay
                    ? function (t) {
                          return setTimeout(t, e.delay);
                      }
                    : Nt;
            }
            var Rt = "onBO";
            function Ct(e, t, n) {
                return qt("onBUO", e, t, n);
            }
            function qt(e, t, n, r) {
                var i = "function" === typeof r ? Zn(t, n) : Zn(t),
                    o = m(r) ? r : n,
                    a = e + "L";
                return (
                    i[a] ? i[a].add(o) : (i[a] = new Set([o])),
                    function () {
                        var e = i[a];
                        e && (e.delete(o), 0 === e.size && delete i[a]);
                    }
                );
            }
            var Ft = "always";
            function Mt(e) {
                !0 === e.isolateGlobalState &&
                    (function () {
                        if (((ut.pendingReactions.length || ut.inBatch || ut.isRunningReactions) && r(36), (st = !0), at)) {
                            var e = o();
                            0 === --e.__mobxInstanceCount && (e.__mobxGlobals = void 0), (ut = new ot());
                        }
                    })();
                var t = e.useProxies,
                    n = e.enforceActions;
                if ((void 0 !== t && (ut.useProxies = t === Ft || ("never" !== t && "undefined" !== typeof Proxy)), "ifavailable" === t && (ut.verifyProxies = !0), void 0 !== n)) {
                    var i = n === Ft ? Ft : "observed" === n;
                    (ut.enforceActions = i), (ut.allowStateChanges = !0 !== i && i !== Ft);
                }
                ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (t) {
                    t in e && (ut[t] = !!e[t]);
                }),
                    (ut.allowStateReads = !ut.observableRequiresReaction),
                    e.reactionScheduler &&
                        (function (e) {
                            var t = mt;
                            mt = function (n) {
                                return e(function () {
                                    return t(n);
                                });
                            };
                        })(e.reactionScheduler);
            }
            function Lt(e, t, n, r) {
                var i = I(t),
                    o = Mn(e, r)[G];
                ht();
                try {
                    j(i).forEach(function (e) {
                        o.extend_(e, i[e], !n || !(e in n) || n[e]);
                    });
                } finally {
                    pt();
                }
                return e;
            }
            function Qt(e, t) {
                return Bt(Zn(e, t));
            }
            function Bt(e) {
                var t,
                    n = { name: e.name_ };
                return e.observing_ && e.observing_.length > 0 && (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(Bt)), n;
            }
            var Gt = 0;
            function Ut() {
                this.message = "FLOW_CANCELLED";
            }
            Ut.prototype = Object.create(Error.prototype);
            var zt = te("flow"),
                Wt = te("flow.bound", { bound: !0 }),
                Kt = Object.assign(function (e, t) {
                    if (b(t)) return B(e, t, zt);
                    var n = e,
                        r = n.name || "<unnamed flow>",
                        i = function () {
                            var e,
                                t = this,
                                i = arguments,
                                o = ++Gt,
                                a = xt(r + " - runid: " + o + " - init", n).apply(t, i),
                                s = void 0,
                                u = new Promise(function (t, n) {
                                    var i = 0;
                                    function u(e) {
                                        var t;
                                        s = void 0;
                                        try {
                                            t = xt(r + " - runid: " + o + " - yield " + i++, a.next).call(a, e);
                                        } catch (u) {
                                            return n(u);
                                        }
                                        l(t);
                                    }
                                    function c(e) {
                                        var t;
                                        s = void 0;
                                        try {
                                            t = xt(r + " - runid: " + o + " - yield " + i++, a.throw).call(a, e);
                                        } catch (u) {
                                            return n(u);
                                        }
                                        l(t);
                                    }
                                    function l(e) {
                                        if (!m(null == e ? void 0 : e.then)) return e.done ? t(e.value) : (s = Promise.resolve(e.value)).then(u, c);
                                        e.then(l, n);
                                    }
                                    (e = n), u(void 0);
                                });
                            return (
                                (u.cancel = xt(r + " - runid: " + o + " - cancel", function () {
                                    try {
                                        s && Jt(s);
                                        var t = a.return(void 0),
                                            n = Promise.resolve(t.value);
                                        n.then(y, y), Jt(n), e(new Ut());
                                    } catch (r) {
                                        e(r);
                                    }
                                })),
                                u
                            );
                        };
                    return (i.isMobXFlow = !0), i;
                }, zt);
            function Jt(e) {
                m(e.cancel) && e.cancel();
            }
            function Yt(e) {
                return !0 === (null == e ? void 0 : e.isMobXFlow);
            }
            function Ht(e, t) {
                return !!e && (void 0 !== t ? !!Bn(e) && e[G].values_.has(t) : Bn(e) || !!e[G] || z(e) || _t(e) || We(e));
            }
            function Xt(e) {
                return Ht(e);
            }
            function $t(e) {
                switch (e.length) {
                    case 0:
                        return ut.trackingDerivation;
                    case 1:
                        return Zn(e[0]);
                    case 2:
                        return Zn(e[0], e[1]);
                }
            }
            function Zt(e, t) {
                void 0 === t && (t = void 0), ht();
                try {
                    return e.apply(t);
                } finally {
                    pt();
                }
            }
            function en(e) {
                return e[G];
            }
            Kt.bound = Q(Wt);
            var tn = {
                has: function (e, t) {
                    return en(e).has_(t);
                },
                get: function (e, t) {
                    return en(e).get_(t);
                },
                set: function (e, t, n) {
                    var r;
                    return !!b(t) && (null == (r = en(e).set_(t, n, !0)) || r);
                },
                deleteProperty: function (e, t) {
                    var n;
                    return !!b(t) && (null == (n = en(e).delete_(t, !0)) || n);
                },
                defineProperty: function (e, t, n) {
                    var r;
                    return null == (r = en(e).defineProperty_(t, n)) || r;
                },
                ownKeys: function (e) {
                    return en(e).ownKeys_();
                },
                preventExtensions: function (e) {
                    r(13);
                },
            };
            function nn(e) {
                return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
            }
            function rn(e, t) {
                var n = e.interceptors_ || (e.interceptors_ = []);
                return (
                    n.push(t),
                    v(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function on(e, t) {
                var n = et();
                try {
                    for (var i = [].concat(e.interceptors_ || []), o = 0, a = i.length; o < a && ((t = i[o](t)) && !t.type && r(14), t); o++);
                    return t;
                } finally {
                    tt(n);
                }
            }
            function an(e) {
                return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
            }
            function sn(e, t) {
                var n = e.changeListeners_ || (e.changeListeners_ = []);
                return (
                    n.push(t),
                    v(function () {
                        var e = n.indexOf(t);
                        -1 !== e && n.splice(e, 1);
                    })
                );
            }
            function un(e, t) {
                var n = et(),
                    r = e.changeListeners_;
                if (r) {
                    for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
                    tt(n);
                }
            }
            function cn(e, t, n) {
                var r = Mn(e, n)[G];
                ht();
                try {
                    0,
                        null != t ||
                            (t = (function (e) {
                                return A(e, L) || O(e, L, V({}, e[L])), e[L];
                            })(e)),
                        j(t).forEach(function (e) {
                            return r.make_(e, t[e]);
                        });
                } finally {
                    pt();
                }
                return e;
            }
            var ln = Symbol("mobx-keys");
            function fn(e, t, n) {
                if (_(e)) return Lt(e, e, t, n);
                var r = Mn(e, n)[G];
                if (!e[ln]) {
                    var i = Object.getPrototypeOf(e),
                        o = new Set([].concat(j(e), j(i)));
                    o.delete("constructor"), o.delete(G), O(i, ln, o);
                }
                ht();
                try {
                    e[ln].forEach(function (e) {
                        return r.make_(e, !t || !(e in t) || t[e]);
                    });
                } finally {
                    pt();
                }
                return e;
            }
            var hn = "splice",
                pn = "update",
                dn = {
                    get: function (e, t) {
                        var n = e[G];
                        return t === G ? n : "length" === t ? n.getArrayLength_() : "string" !== typeof t || isNaN(t) ? (A(mn, t) ? mn[t] : e[t]) : n.get_(parseInt(t));
                    },
                    set: function (e, t, n) {
                        var r = e[G];
                        return "length" === t && r.setArrayLength_(n), "symbol" === typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n), !0;
                    },
                    preventExtensions: function () {
                        r(15);
                    },
                },
                vn = (function () {
                    function e(e, t, n, r) {
                        void 0 === e && (e = "ObservableArray"),
                            (this.owned_ = void 0),
                            (this.legacyMode_ = void 0),
                            (this.atom_ = void 0),
                            (this.values_ = []),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.enhancer_ = void 0),
                            (this.dehancer = void 0),
                            (this.proxy_ = void 0),
                            (this.lastKnownLength_ = 0),
                            (this.owned_ = n),
                            (this.legacyMode_ = r),
                            (this.atom_ = new U(e)),
                            (this.enhancer_ = function (e, n) {
                                return t(e, n, "ObservableArray[..]");
                            });
                    }
                    var t = e.prototype;
                    return (
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (t.dehanceValues_ = function (e) {
                            return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e;
                        }),
                        (t.intercept_ = function (e) {
                            return rn(this, e);
                        }),
                        (t.observe_ = function (e, t) {
                            return (
                                void 0 === t && (t = !1),
                                t &&
                                    e({
                                        observableKind: "array",
                                        object: this.proxy_,
                                        debugObjectName: this.atom_.name_,
                                        type: "splice",
                                        index: 0,
                                        added: this.values_.slice(),
                                        addedCount: this.values_.length,
                                        removed: [],
                                        removedCount: 0,
                                    }),
                                sn(this, e)
                            );
                        }),
                        (t.getArrayLength_ = function () {
                            return this.atom_.reportObserved(), this.values_.length;
                        }),
                        (t.setArrayLength_ = function (e) {
                            ("number" !== typeof e || isNaN(e) || e < 0) && r("Out of range: " + e);
                            var t = this.values_.length;
                            if (e !== t)
                                if (e > t) {
                                    for (var n = new Array(e - t), i = 0; i < e - t; i++) n[i] = void 0;
                                    this.spliceWithArray_(t, 0, n);
                                } else this.spliceWithArray_(e, t - e);
                        }),
                        (t.updateArrayLength_ = function (e, t) {
                            e !== this.lastKnownLength_ && r(16), (this.lastKnownLength_ += t), this.legacyMode_ && t > 0 && Xn(e + t + 1);
                        }),
                        (t.spliceWithArray_ = function (e, t, n) {
                            var r = this;
                            this.atom_;
                            var i = this.values_.length;
                            if (
                                (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
                                (t = 1 === arguments.length ? i - e : void 0 === t || null === t ? 0 : Math.max(0, Math.min(t, i - e))),
                                void 0 === n && (n = l),
                                nn(this))
                            ) {
                                var o = on(this, { object: this.proxy_, type: hn, index: e, removedCount: t, added: n });
                                if (!o) return l;
                                (t = o.removedCount), (n = o.added);
                            }
                            if (
                                ((n =
                                    0 === n.length
                                        ? n
                                        : n.map(function (e) {
                                              return r.enhancer_(e, void 0);
                                          })),
                                this.legacyMode_)
                            ) {
                                var a = n.length - t;
                                this.updateArrayLength_(i, a);
                            }
                            var s = this.spliceItemsIntoValues_(e, t, n);
                            return (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s), this.dehanceValues_(s);
                        }),
                        (t.spliceItemsIntoValues_ = function (e, t, n) {
                            var r;
                            if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
                            var i = this.values_.slice(e, e + t),
                                o = this.values_.slice(e + t);
                            this.values_.length += n.length - t;
                            for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
                            for (var s = 0; s < o.length; s++) this.values_[e + n.length + s] = o[s];
                            return i;
                        }),
                        (t.notifyArrayChildUpdate_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = an(this),
                                o = i || r ? { observableKind: "array", object: this.proxy_, type: pn, debugObjectName: this.atom_.name_, index: e, newValue: t, oldValue: n } : null;
                            this.atom_.reportChanged(), i && un(this, o);
                        }),
                        (t.notifyArraySplice_ = function (e, t, n) {
                            var r = !this.owned_ && !1,
                                i = an(this),
                                o = i || r ? { observableKind: "array", object: this.proxy_, debugObjectName: this.atom_.name_, type: hn, index: e, removed: n, added: t, removedCount: n.length, addedCount: t.length } : null;
                            this.atom_.reportChanged(), i && un(this, o);
                        }),
                        (t.get_ = function (e) {
                            if (e < this.values_.length) return this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]);
                            console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
                        }),
                        (t.set_ = function (e, t) {
                            var n = this.values_;
                            if (e < n.length) {
                                this.atom_;
                                var i = n[e];
                                if (nn(this)) {
                                    var o = on(this, { type: pn, object: this.proxy_, index: e, newValue: t });
                                    if (!o) return;
                                    t = o.newValue;
                                }
                                (t = this.enhancer_(t, i)) !== i && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
                            } else e === n.length ? this.spliceWithArray_(e, 0, [t]) : r(17, e, n.length);
                        }),
                        e
                    );
                })();
            function yn(e, t, n, r) {
                void 0 === n && (n = "ObservableArray"), void 0 === r && (r = !1), d();
                var i = new vn(n, t, r, !1);
                S(i.values_, G, i);
                var o = new Proxy(i.values_, dn);
                if (((i.proxy_ = o), e && e.length)) {
                    var a = Me(!0);
                    i.spliceWithArray_(0, 0, e), Le(a);
                }
                return o;
            }
            var mn = {
                clear: function () {
                    return this.splice(0);
                },
                replace: function (e) {
                    var t = this[G];
                    return t.spliceWithArray_(0, t.values_.length, e);
                },
                toJSON: function () {
                    return this.slice();
                },
                splice: function (e, t) {
                    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                    var o = this[G];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return o.spliceWithArray_(e);
                        case 2:
                            return o.spliceWithArray_(e, t);
                    }
                    return o.spliceWithArray_(e, t, r);
                },
                spliceWithArray: function (e, t, n) {
                    return this[G].spliceWithArray_(e, t, n);
                },
                push: function () {
                    for (var e = this[G], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
                },
                pop: function () {
                    return this.splice(Math.max(this[G].values_.length - 1, 0), 1)[0];
                },
                shift: function () {
                    return this.splice(0, 1)[0];
                },
                unshift: function () {
                    for (var e = this[G], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return e.spliceWithArray_(0, 0, n), e.values_.length;
                },
                reverse: function () {
                    return ut.trackingDerivation && r(37, "reverse"), this.replace(this.slice().reverse()), this;
                },
                sort: function () {
                    ut.trackingDerivation && r(37, "sort");
                    var e = this.slice();
                    return e.sort.apply(e, arguments), this.replace(e), this;
                },
                remove: function (e) {
                    var t = this[G],
                        n = t.dehanceValues_(t.values_).indexOf(e);
                    return n > -1 && (this.splice(n, 1), !0);
                },
            };
            function bn(e, t) {
                "function" === typeof Array.prototype[e] && (mn[e] = t(e));
            }
            function gn(e) {
                return function () {
                    var t = this[G];
                    t.atom_.reportObserved();
                    var n = t.dehanceValues_(t.values_);
                    return n[e].apply(n, arguments);
                };
            }
            function _n(e) {
                return function (t, n) {
                    var r = this,
                        i = this[G];
                    return (
                        i.atom_.reportObserved(),
                        i.dehanceValues_(i.values_)[e](function (e, i) {
                            return t.call(n, e, i, r);
                        })
                    );
                };
            }
            function wn(e) {
                return function () {
                    var t = this,
                        n = this[G];
                    n.atom_.reportObserved();
                    var r = n.dehanceValues_(n.values_),
                        i = arguments[0];
                    return (
                        (arguments[0] = function (e, n, r) {
                            return i(e, n, r, t);
                        }),
                        r[e].apply(r, arguments)
                    );
                };
            }
            bn("concat", gn),
                bn("flat", gn),
                bn("includes", gn),
                bn("indexOf", gn),
                bn("join", gn),
                bn("lastIndexOf", gn),
                bn("slice", gn),
                bn("toString", gn),
                bn("toLocaleString", gn),
                bn("every", _n),
                bn("filter", _n),
                bn("find", _n),
                bn("findIndex", _n),
                bn("flatMap", _n),
                bn("forEach", _n),
                bn("map", _n),
                bn("some", _n),
                bn("reduce", wn),
                bn("reduceRight", wn);
            var On,
                Sn,
                kn = k("ObservableArrayAdministration", vn);
            function En(e) {
                return g(e) && kn(e[G]);
            }
            var Dn = {},
                Tn = "add",
                jn = "delete";
            (On = Symbol.iterator), (Sn = Symbol.toStringTag);
            var xn,
                An,
                In = (function () {
                    function e(e, t, n) {
                        var i = this;
                        void 0 === t && (t = J),
                            void 0 === n && (n = "ObservableMap"),
                            (this.enhancer_ = void 0),
                            (this.name_ = void 0),
                            (this[G] = Dn),
                            (this.data_ = void 0),
                            (this.hasMap_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = t),
                            (this.name_ = n),
                            m(Map) || r(18),
                            (this.keysAtom_ = W("ObservableMap.keys()")),
                            (this.data_ = new Map()),
                            (this.hasMap_ = new Map()),
                            Fe(!0, function () {
                                i.merge(e);
                            });
                    }
                    var t = e.prototype;
                    return (
                        (t.has_ = function (e) {
                            return this.data_.has(e);
                        }),
                        (t.has = function (e) {
                            var t = this;
                            if (!ut.trackingDerivation) return this.has_(e);
                            var n = this.hasMap_.get(e);
                            if (!n) {
                                var r = (n = new Be(this.has_(e), Y, "ObservableMap.key?", !1));
                                this.hasMap_.set(e, r),
                                    Ct(r, function () {
                                        return t.hasMap_.delete(e);
                                    });
                            }
                            return n.get();
                        }),
                        (t.set = function (e, t) {
                            var n = this.has_(e);
                            if (nn(this)) {
                                var r = on(this, { type: n ? pn : Tn, object: this, newValue: t, name: e });
                                if (!r) return this;
                                t = r.newValue;
                            }
                            return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if ((this.keysAtom_, nn(this)) && !on(this, { type: jn, object: this, name: e })) return !1;
                            if (this.has_(e)) {
                                var n = an(this),
                                    r = n ? { observableKind: "map", debugObjectName: this.name_, type: jn, object: this, oldValue: this.data_.get(e).value_, name: e } : null;
                                return (
                                    Zt(function () {
                                        var n;
                                        t.keysAtom_.reportChanged(), null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1), t.data_.get(e).setNewValue_(void 0), t.data_.delete(e);
                                    }),
                                    n && un(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.updateValue_ = function (e, t) {
                            var n = this.data_.get(e);
                            if ((t = n.prepareNewValue_(t)) !== ut.UNCHANGED) {
                                var r = an(this),
                                    i = r ? { observableKind: "map", debugObjectName: this.name_, type: pn, object: this, oldValue: n.value_, name: e, newValue: t } : null;
                                0, n.setNewValue_(t), r && un(this, i);
                            }
                        }),
                        (t.addValue_ = function (e, t) {
                            var n = this;
                            this.keysAtom_,
                                Zt(function () {
                                    var r,
                                        i = new Be(t, n.enhancer_, "ObservableMap.key", !1);
                                    n.data_.set(e, i), (t = i.value_), null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0), n.keysAtom_.reportChanged();
                                });
                            var r = an(this),
                                i = r ? { observableKind: "map", debugObjectName: this.name_, type: Tn, object: this, name: e, newValue: t } : null;
                            r && un(this, i);
                        }),
                        (t.get = function (e) {
                            return this.has(e) ? this.dehanceValue_(this.data_.get(e).get()) : this.dehanceValue_(void 0);
                        }),
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (t.keys = function () {
                            return this.keysAtom_.reportObserved(), this.data_.keys();
                        }),
                        (t.values = function () {
                            var e = this,
                                t = this.keys();
                            return ar({
                                next: function () {
                                    var n = t.next(),
                                        r = n.done,
                                        i = n.value;
                                    return { done: r, value: r ? void 0 : e.get(i) };
                                },
                            });
                        }),
                        (t.entries = function () {
                            var e = this,
                                t = this.keys();
                            return ar({
                                next: function () {
                                    var n = t.next(),
                                        r = n.done,
                                        i = n.value;
                                    return { done: r, value: r ? void 0 : [i, e.get(i)] };
                                },
                            });
                        }),
                        (t[On] = function () {
                            return this.entries();
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = M(this); !(n = r()).done; ) {
                                var i = n.value,
                                    o = i[0],
                                    a = i[1];
                                e.call(t, a, o, this);
                            }
                        }),
                        (t.merge = function (e) {
                            var t = this;
                            return (
                                Pn(e) && (e = new Map(e)),
                                Zt(function () {
                                    _(e)
                                        ? (function (e) {
                                              var t = Object.keys(e);
                                              if (!T) return t;
                                              var n = Object.getOwnPropertySymbols(e);
                                              return n.length
                                                  ? [].concat(
                                                        t,
                                                        n.filter(function (t) {
                                                            return c.propertyIsEnumerable.call(e, t);
                                                        })
                                                    )
                                                  : t;
                                          })(e).forEach(function (n) {
                                              return t.set(n, e[n]);
                                          })
                                        : Array.isArray(e)
                                        ? e.forEach(function (e) {
                                              var n = e[0],
                                                  r = e[1];
                                              return t.set(n, r);
                                          })
                                        : E(e)
                                        ? (e.constructor !== Map && r(19, e),
                                          e.forEach(function (e, n) {
                                              return t.set(n, e);
                                          }))
                                        : null !== e && void 0 !== e && r(20, e);
                                }),
                                this
                            );
                        }),
                        (t.clear = function () {
                            var e = this;
                            Zt(function () {
                                Ze(function () {
                                    for (var t, n = M(e.keys()); !(t = n()).done; ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                Zt(function () {
                                    for (
                                        var n,
                                            i = (function (e) {
                                                if (E(e) || Pn(e)) return e;
                                                if (Array.isArray(e)) return new Map(e);
                                                if (_(e)) {
                                                    var t = new Map();
                                                    for (var n in e) t.set(n, e[n]);
                                                    return t;
                                                }
                                                return r(21, e);
                                            })(e),
                                            o = new Map(),
                                            a = !1,
                                            s = M(t.data_.keys());
                                        !(n = s()).done;

                                    ) {
                                        var u = n.value;
                                        if (!i.has(u))
                                            if (t.delete(u)) a = !0;
                                            else {
                                                var c = t.data_.get(u);
                                                o.set(u, c);
                                            }
                                    }
                                    for (var l, f = M(i.entries()); !(l = f()).done; ) {
                                        var h = l.value,
                                            p = h[0],
                                            d = h[1],
                                            v = t.data_.has(p);
                                        if ((t.set(p, d), t.data_.has(p))) {
                                            var y = t.data_.get(p);
                                            o.set(p, y), v || (a = !0);
                                        }
                                    }
                                    if (!a)
                                        if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                                        else
                                            for (var m = t.data_.keys(), b = o.keys(), g = m.next(), w = b.next(); !g.done; ) {
                                                if (g.value !== w.value) {
                                                    t.keysAtom_.reportChanged();
                                                    break;
                                                }
                                                (g = m.next()), (w = b.next());
                                            }
                                    t.data_ = o;
                                }),
                                this
                            );
                        }),
                        (t.toString = function () {
                            return "[object ObservableMap]";
                        }),
                        (t.toJSON = function () {
                            return Array.from(this);
                        }),
                        (t.observe_ = function (e, t) {
                            return sn(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return rn(this, e);
                        }),
                        N(e, [
                            {
                                key: "size",
                                get: function () {
                                    return this.keysAtom_.reportObserved(), this.data_.size;
                                },
                            },
                            {
                                key: Sn,
                                get: function () {
                                    return "Map";
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Pn = k("ObservableMap", In);
            var Nn = {};
            (xn = Symbol.iterator), (An = Symbol.toStringTag);
            var Vn = (function () {
                    function e(e, t, n) {
                        void 0 === t && (t = J),
                            void 0 === n && (n = "ObservableSet"),
                            (this.name_ = void 0),
                            (this[G] = Nn),
                            (this.data_ = new Set()),
                            (this.atom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.dehancer = void 0),
                            (this.enhancer_ = void 0),
                            (this.name_ = n),
                            m(Set) || r(22),
                            (this.atom_ = W(this.name_)),
                            (this.enhancer_ = function (e, r) {
                                return t(e, r, n);
                            }),
                            e && this.replace(e);
                    }
                    var t = e.prototype;
                    return (
                        (t.dehanceValue_ = function (e) {
                            return void 0 !== this.dehancer ? this.dehancer(e) : e;
                        }),
                        (t.clear = function () {
                            var e = this;
                            Zt(function () {
                                Ze(function () {
                                    for (var t, n = M(e.data_.values()); !(t = n()).done; ) {
                                        var r = t.value;
                                        e.delete(r);
                                    }
                                });
                            });
                        }),
                        (t.forEach = function (e, t) {
                            for (var n, r = M(this); !(n = r()).done; ) {
                                var i = n.value;
                                e.call(t, i, i, this);
                            }
                        }),
                        (t.add = function (e) {
                            var t = this;
                            if ((this.atom_, nn(this)) && !on(this, { type: Tn, object: this, newValue: e })) return this;
                            if (!this.has(e)) {
                                Zt(function () {
                                    t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                                });
                                var n = !1,
                                    r = an(this),
                                    i = r ? { observableKind: "set", debugObjectName: this.name_, type: Tn, object: this, newValue: e } : null;
                                n, r && un(this, i);
                            }
                            return this;
                        }),
                        (t.delete = function (e) {
                            var t = this;
                            if (nn(this) && !on(this, { type: jn, object: this, oldValue: e })) return !1;
                            if (this.has(e)) {
                                var n = an(this),
                                    r = n ? { observableKind: "set", debugObjectName: this.name_, type: jn, object: this, oldValue: e } : null;
                                return (
                                    Zt(function () {
                                        t.atom_.reportChanged(), t.data_.delete(e);
                                    }),
                                    n && un(this, r),
                                    !0
                                );
                            }
                            return !1;
                        }),
                        (t.has = function (e) {
                            return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e));
                        }),
                        (t.entries = function () {
                            var e = 0,
                                t = Array.from(this.keys()),
                                n = Array.from(this.values());
                            return ar({
                                next: function () {
                                    var r = e;
                                    return (e += 1), r < n.length ? { value: [t[r], n[r]], done: !1 } : { done: !0 };
                                },
                            });
                        }),
                        (t.keys = function () {
                            return this.values();
                        }),
                        (t.values = function () {
                            this.atom_.reportObserved();
                            var e = this,
                                t = 0,
                                n = Array.from(this.data_.values());
                            return ar({
                                next: function () {
                                    return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
                                },
                            });
                        }),
                        (t.replace = function (e) {
                            var t = this;
                            return (
                                Rn(e) && (e = new Set(e)),
                                Zt(function () {
                                    Array.isArray(e) || D(e)
                                        ? (t.clear(),
                                          e.forEach(function (e) {
                                              return t.add(e);
                                          }))
                                        : null !== e && void 0 !== e && r("Cannot initialize set from " + e);
                                }),
                                this
                            );
                        }),
                        (t.observe_ = function (e, t) {
                            return sn(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return rn(this, e);
                        }),
                        (t.toJSON = function () {
                            return Array.from(this);
                        }),
                        (t.toString = function () {
                            return "[object ObservableSet]";
                        }),
                        (t[xn] = function () {
                            return this.values();
                        }),
                        N(e, [
                            {
                                key: "size",
                                get: function () {
                                    return this.atom_.reportObserved(), this.data_.size;
                                },
                            },
                            {
                                key: An,
                                get: function () {
                                    return "Set";
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Rn = k("ObservableSet", Vn),
                Cn = Object.create(null),
                qn = "remove",
                Fn = (function () {
                    function e(e, t, n, r) {
                        void 0 === t && (t = new Map()),
                            void 0 === r && (r = fe),
                            (this.target_ = void 0),
                            (this.values_ = void 0),
                            (this.name_ = void 0),
                            (this.defaultAnnotation_ = void 0),
                            (this.keysAtom_ = void 0),
                            (this.changeListeners_ = void 0),
                            (this.interceptors_ = void 0),
                            (this.proxy_ = void 0),
                            (this.isPlainObject_ = void 0),
                            (this.appliedAnnotations_ = void 0),
                            (this.pendingKeys_ = void 0),
                            (this.target_ = e),
                            (this.values_ = t),
                            (this.name_ = n),
                            (this.defaultAnnotation_ = r),
                            (this.keysAtom_ = new U("ObservableObject.keys")),
                            (this.isPlainObject_ = _(this.target_));
                    }
                    var t = e.prototype;
                    return (
                        (t.getObservablePropValue_ = function (e) {
                            return this.values_.get(e).get();
                        }),
                        (t.setObservablePropValue_ = function (e, t) {
                            var n = this.values_.get(e);
                            if (n instanceof ze) return n.set(t), !0;
                            if (nn(this)) {
                                var r = on(this, { type: pn, object: this.proxy_ || this.target_, name: e, newValue: t });
                                if (!r) return null;
                                t = r.newValue;
                            }
                            if ((t = n.prepareNewValue_(t)) !== ut.UNCHANGED) {
                                var i = an(this),
                                    o = i ? { type: pn, observableKind: "object", debugObjectName: this.name_, object: this.proxy_ || this.target_, oldValue: n.value_, name: e, newValue: t } : null;
                                0, n.setNewValue_(t), i && un(this, o);
                            }
                            return !0;
                        }),
                        (t.get_ = function (e) {
                            return ut.trackingDerivation && !A(this.target_, e) && this.has_(e), this.target_[e];
                        }),
                        (t.set_ = function (e, t, n) {
                            return (
                                void 0 === n && (n = !1),
                                A(this.target_, e)
                                    ? this.values_.has(e)
                                        ? this.setObservablePropValue_(e, t)
                                        : n
                                        ? Reflect.set(this.target_, e, t)
                                        : ((this.target_[e] = t), !0)
                                    : this.extend_(e, { value: t, enumerable: !0, writable: !0, configurable: !0 }, this.defaultAnnotation_, n)
                            );
                        }),
                        (t.has_ = function (e) {
                            if (!ut.trackingDerivation) return e in this.target_;
                            this.pendingKeys_ || (this.pendingKeys_ = new Map());
                            var t = this.pendingKeys_.get(e);
                            return t || ((t = new Be(e in this.target_, Y, "ObservableObject.key?", !1)), this.pendingKeys_.set(e, t)), t.get();
                        }),
                        (t.make_ = function (e, t) {
                            if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                                if ((Un(this, t, e), !(e in this.target_))) {
                                    var n;
                                    if (null != (n = this.target_[L]) && n[e]) return;
                                    r(1, t.annotationType_, this.name_ + "." + e.toString());
                                }
                                for (var i = this.target_; i && i !== c; ) {
                                    var o = s(i, e);
                                    if (o) {
                                        var a = t.make_(this, e, o, i);
                                        if (0 === a) return;
                                        if (1 === a) break;
                                    }
                                    i = Object.getPrototypeOf(i);
                                }
                                Gn(this, t, e);
                            }
                        }),
                        (t.extend_ = function (e, t, n, r) {
                            if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n)) return this.defineProperty_(e, t, r);
                            Un(this, n, e);
                            var i = n.extend_(this, e, t, r);
                            return i && Gn(this, n, e), i;
                        }),
                        (t.defineProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                ht();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (nn(this)) {
                                    var i = on(this, { object: this.proxy_ || this.target_, name: e, type: Tn, newValue: t.value });
                                    if (!i) return null;
                                    var o = i.newValue;
                                    t.value !== o && (t = V({}, t, { value: o }));
                                }
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                                } else u(this.target_, e, t);
                                this.notifyPropertyAddition_(e, t.value);
                            } finally {
                                pt();
                            }
                            return !0;
                        }),
                        (t.defineObservableProperty_ = function (e, t, n, r) {
                            void 0 === r && (r = !1);
                            try {
                                ht();
                                var i = this.delete_(e);
                                if (!i) return i;
                                if (nn(this)) {
                                    var o = on(this, { object: this.proxy_ || this.target_, name: e, type: Tn, newValue: t });
                                    if (!o) return null;
                                    t = o.newValue;
                                }
                                var a = Qn(e),
                                    s = { configurable: !ut.safeDescriptors || this.isPlainObject_, enumerable: !0, get: a.get, set: a.set };
                                if (r) {
                                    if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                                } else u(this.target_, e, s);
                                var c = new Be(t, n, "ObservableObject.key", !1);
                                this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_);
                            } finally {
                                pt();
                            }
                            return !0;
                        }),
                        (t.defineComputedProperty_ = function (e, t, n) {
                            void 0 === n && (n = !1);
                            try {
                                ht();
                                var r = this.delete_(e);
                                if (!r) return r;
                                if (nn(this)) if (!on(this, { object: this.proxy_ || this.target_, name: e, type: Tn, newValue: void 0 })) return null;
                                t.name || (t.name = "ObservableObject.key"), (t.context = this.proxy_ || this.target_);
                                var i = Qn(e),
                                    o = { configurable: !ut.safeDescriptors || this.isPlainObject_, enumerable: !1, get: i.get, set: i.set };
                                if (n) {
                                    if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                                } else u(this.target_, e, o);
                                this.values_.set(e, new ze(t)), this.notifyPropertyAddition_(e, void 0);
                            } finally {
                                pt();
                            }
                            return !0;
                        }),
                        (t.delete_ = function (e, t) {
                            if ((void 0 === t && (t = !1), !A(this.target_, e))) return !0;
                            if (nn(this) && !on(this, { object: this.proxy_ || this.target_, name: e, type: qn })) return null;
                            try {
                                var n, r;
                                ht();
                                var i,
                                    o = an(this),
                                    a = this.values_.get(e),
                                    u = void 0;
                                if (!a && o) u = null == (i = s(this.target_, e)) ? void 0 : i.value;
                                if (t) {
                                    if (!Reflect.deleteProperty(this.target_, e)) return !1;
                                } else delete this.target_[e];
                                if ((a && (this.values_.delete(e), a instanceof Be && (u = a.value_), vt(a)), this.keysAtom_.reportChanged(), null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_), o)) {
                                    var c = { type: qn, observableKind: "object", object: this.proxy_ || this.target_, debugObjectName: this.name_, oldValue: u, name: e };
                                    0, o && un(this, c);
                                }
                            } finally {
                                pt();
                            }
                            return !0;
                        }),
                        (t.observe_ = function (e, t) {
                            return sn(this, e);
                        }),
                        (t.intercept_ = function (e) {
                            return rn(this, e);
                        }),
                        (t.notifyPropertyAddition_ = function (e, t) {
                            var n,
                                r,
                                i = an(this);
                            if (i) {
                                var o = i ? { type: Tn, observableKind: "object", debugObjectName: this.name_, object: this.proxy_ || this.target_, name: e, newValue: t } : null;
                                0, i && un(this, o);
                            }
                            null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0), this.keysAtom_.reportChanged();
                        }),
                        (t.ownKeys_ = function () {
                            return this.keysAtom_.reportObserved(), j(this.target_);
                        }),
                        (t.keys_ = function () {
                            return this.keysAtom_.reportObserved(), Object.keys(this.target_);
                        }),
                        e
                    );
                })();
            function Mn(e, t) {
                var n;
                if (A(e, G)) return e;
                var r = null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
                    i = new Fn(
                        e,
                        new Map(),
                        String(r),
                        (function (e) {
                            var t;
                            return e ? (null != (t = e.defaultDecorator) ? t : he(e)) : void 0;
                        })(t)
                    );
                return O(e, G, i), e;
            }
            var Ln = k("ObservableObjectAdministration", Fn);
            function Qn(e) {
                return (
                    Cn[e] ||
                    (Cn[e] = {
                        get: function () {
                            return this[G].getObservablePropValue_(e);
                        },
                        set: function (t) {
                            return this[G].setObservablePropValue_(e, t);
                        },
                    })
                );
            }
            function Bn(e) {
                return !!g(e) && Ln(e[G]);
            }
            function Gn(e, t, n) {
                var r;
                null == (r = e.target_[L]) || delete r[n];
            }
            function Un(e, t, n) {}
            var zn,
                Wn,
                Kn = 0,
                Jn = function () {};
            (zn = Jn), (Wn = Array.prototype), Object.setPrototypeOf ? Object.setPrototypeOf(zn.prototype, Wn) : void 0 !== zn.prototype.__proto__ ? (zn.prototype.__proto__ = Wn) : (zn.prototype = Wn);
            var Yn = (function (e, t, n) {
                function r(t, n, r, i) {
                    var o;
                    void 0 === r && (r = "ObservableArray"), void 0 === i && (i = !1), (o = e.call(this) || this);
                    var a = new vn(r, n, i, !0);
                    if (((a.proxy_ = q(o)), S(q(o), G, a), t && t.length)) {
                        var s = Me(!0);
                        o.spliceWithArray(0, 0, t), Le(s);
                    }
                    return o;
                }
                R(r, e);
                var i = r.prototype;
                return (
                    (i.concat = function () {
                        this[G].atom_.reportObserved();
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return Array.prototype.concat.apply(
                            this.slice(),
                            t.map(function (e) {
                                return En(e) ? e.slice() : e;
                            })
                        );
                    }),
                    (i[n] = function () {
                        var e = this,
                            t = 0;
                        return ar({
                            next: function () {
                                return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
                            },
                        });
                    }),
                    N(r, [
                        {
                            key: "length",
                            get: function () {
                                return this[G].getArrayLength_();
                            },
                            set: function (e) {
                                this[G].setArrayLength_(e);
                            },
                        },
                        {
                            key: t,
                            get: function () {
                                return "Array";
                            },
                        },
                    ]),
                    r
                );
            })(Jn, Symbol.toStringTag, Symbol.iterator);
            function Hn(e) {
                u(
                    Yn.prototype,
                    "" + e,
                    (function (e) {
                        return {
                            enumerable: !1,
                            configurable: !0,
                            get: function () {
                                return this[G].get_(e);
                            },
                            set: function (t) {
                                this[G].set_(e, t);
                            },
                        };
                    })(e)
                );
            }
            function Xn(e) {
                if (e > Kn) {
                    for (var t = Kn; t < e + 100; t++) Hn(t);
                    Kn = e;
                }
            }
            function $n(e, t, n) {
                return new Yn(e, t, n);
            }
            function Zn(e, t) {
                if ("object" === typeof e && null !== e) {
                    if (En(e)) return void 0 !== t && r(23), e[G].atom_;
                    if (Rn(e)) return e[G];
                    if (Pn(e)) {
                        if (void 0 === t) return e.keysAtom_;
                        var n = e.data_.get(t) || e.hasMap_.get(t);
                        return n || r(25, t, tr(e)), n;
                    }
                    if (Bn(e)) {
                        if (!t) return r(26);
                        var i = e[G].values_.get(t);
                        return i || r(27, t, tr(e)), i;
                    }
                    if (z(e) || We(e) || _t(e)) return e;
                } else if (m(e) && _t(e[G])) return e[G];
                r(28);
            }
            function er(e, t) {
                return e || r(29), void 0 !== t ? er(Zn(e, t)) : z(e) || We(e) || _t(e) || Pn(e) || Rn(e) ? e : e[G] ? e[G] : void r(24, e);
            }
            function tr(e, t) {
                var n;
                if (void 0 !== t) n = Zn(e, t);
                else {
                    if (It(e)) return e.name;
                    n = Bn(e) || Pn(e) || Rn(e) ? er(e) : Zn(e);
                }
                return n.name_;
            }
            Object.entries(mn).forEach(function (e) {
                var t = e[0],
                    n = e[1];
                "concat" !== t && O(Yn.prototype, t, n);
            }),
                Xn(1e3);
            var nr = c.toString;
            function rr(e, t, n) {
                return void 0 === n && (n = -1), ir(e, t, n);
            }
            function ir(e, t, n, r, i) {
                if (e === t) return 0 !== e || 1 / e === 1 / t;
                if (null == e || null == t) return !1;
                if (e !== e) return t !== t;
                var o = typeof e;
                if ("function" !== o && "object" !== o && "object" != typeof t) return !1;
                var a = nr.call(e);
                if (a !== nr.call(t)) return !1;
                switch (a) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e === "" + t;
                    case "[object Number]":
                        return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e === +t;
                    case "[object Symbol]":
                        return "undefined" !== typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
                    case "[object Map]":
                    case "[object Set]":
                        n >= 0 && n++;
                }
                (e = or(e)), (t = or(t));
                var s = "[object Array]" === a;
                if (!s) {
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    var u = e.constructor,
                        c = t.constructor;
                    if (u !== c && !(m(u) && u instanceof u && m(c) && c instanceof c) && "constructor" in e && "constructor" in t) return !1;
                }
                if (0 === n) return !1;
                n < 0 && (n = -1), (i = i || []);
                for (var l = (r = r || []).length; l--; ) if (r[l] === e) return i[l] === t;
                if ((r.push(e), i.push(t), s)) {
                    if ((l = e.length) !== t.length) return !1;
                    for (; l--; ) if (!ir(e[l], t[l], n - 1, r, i)) return !1;
                } else {
                    var f,
                        h = Object.keys(e);
                    if (((l = h.length), Object.keys(t).length !== l)) return !1;
                    for (; l--; ) if (!A(t, (f = h[l])) || !ir(e[f], t[f], n - 1, r, i)) return !1;
                }
                return r.pop(), i.pop(), !0;
            }
            function or(e) {
                return En(e) ? e.slice() : E(e) || Pn(e) || D(e) || Rn(e) ? Array.from(e.entries()) : e;
            }
            function ar(e) {
                return (e[Symbol.iterator] = sr), e;
            }
            function sr() {
                return this;
            }
            ["Symbol", "Map", "Set"].forEach(function (e) {
                "undefined" === typeof o()[e] && r("MobX requires global '" + e + "' to be available or polyfilled");
            }),
                "object" === typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
                    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                        spy: function (e) {
                            return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
                        },
                        extras: { getDebugName: tr },
                        $mobx: G,
                    });
        },
        3454: function (e, t, n) {
            "use strict";
            var r, i;
            e.exports = (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) && "object" === typeof (null === (i = n.g.process) || void 0 === i ? void 0 : i.env) ? n.g.process : n(7663);
        },
        6363: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function () {
                    return n(9663);
                },
            ]);
        },
        9663: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, {
                    default: function () {
                        return Pr;
                    },
                });
            var r = n(5893),
                i = (n(6774), n(3917)),
                o = n(7294),
                a = n(5317),
                s = function (e) {
                    var t = e.client,
                        n = e.children,
                        r = (0, a.K)();
                    return o.createElement(r.Consumer, null, function (e) {
                        return (
                            void 0 === e && (e = {}),
                            t && e.client !== t && (e = Object.assign({}, e, { client: t })),
                            __DEV__ ? (0, i.kG)(e.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : (0, i.kG)(e.client, 26),
                            o.createElement(r.Provider, { value: e }, n)
                        );
                    });
                },
                u = n(655);
            function c(e, t) {
                var n = ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (
                    Array.isArray(e) ||
                    (n = (function (e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                    })(e)) ||
                    (t && e && "number" === typeof e.length)
                ) {
                    n && (e = n);
                    var r = 0;
                    return function () {
                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function h(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            }
            var p = function () {
                    return "function" === typeof Symbol;
                },
                d = function (e) {
                    return p() && Boolean(Symbol[e]);
                },
                v = function (e) {
                    return d(e) ? Symbol[e] : "@@" + e;
                };
            p() && !d("observable") && (Symbol.observable = Symbol("observable"));
            var y = v("iterator"),
                m = v("observable"),
                b = v("species");
            function g(e, t) {
                var n = e[t];
                if (null != n) {
                    if ("function" !== typeof n) throw new TypeError(n + " is not a function");
                    return n;
                }
            }
            function _(e) {
                var t = e.constructor;
                return void 0 !== t && null === (t = t[b]) && (t = void 0), void 0 !== t ? t : A;
            }
            function w(e) {
                return e instanceof A;
            }
            function O(e) {
                O.log
                    ? O.log(e)
                    : setTimeout(function () {
                          throw e;
                      });
            }
            function S(e) {
                Promise.resolve().then(function () {
                    try {
                        e();
                    } catch (t) {
                        O(t);
                    }
                });
            }
            function k(e) {
                var t = e._cleanup;
                if (void 0 !== t && ((e._cleanup = void 0), t))
                    try {
                        if ("function" === typeof t) t();
                        else {
                            var n = g(t, "unsubscribe");
                            n && n.call(t);
                        }
                    } catch (r) {
                        O(r);
                    }
            }
            function E(e) {
                (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
            }
            function D(e, t, n) {
                e._state = "running";
                var r = e._observer;
                try {
                    var i = g(r, t);
                    switch (t) {
                        case "next":
                            i && i.call(r, n);
                            break;
                        case "error":
                            if ((E(e), !i)) throw n;
                            i.call(r, n);
                            break;
                        case "complete":
                            E(e), i && i.call(r);
                    }
                } catch (o) {
                    O(o);
                }
                "closed" === e._state ? k(e) : "running" === e._state && (e._state = "ready");
            }
            function T(e, t, n) {
                if ("closed" !== e._state) {
                    if ("buffering" !== e._state)
                        return "ready" !== e._state
                            ? ((e._state = "buffering"),
                              (e._queue = [{ type: t, value: n }]),
                              void S(function () {
                                  return (function (e) {
                                      var t = e._queue;
                                      if (t) {
                                          (e._queue = void 0), (e._state = "ready");
                                          for (var n = 0; n < t.length && (D(e, t[n].type, t[n].value), "closed" !== e._state); ++n);
                                      }
                                  })(e);
                              }))
                            : void D(e, t, n);
                    e._queue.push({ type: t, value: n });
                }
            }
            var j = (function () {
                    function e(e, t) {
                        (this._cleanup = void 0), (this._observer = e), (this._queue = void 0), (this._state = "initializing");
                        var n = new x(this);
                        try {
                            this._cleanup = t.call(void 0, n);
                        } catch (r) {
                            n.error(r);
                        }
                        "initializing" === this._state && (this._state = "ready");
                    }
                    return (
                        (e.prototype.unsubscribe = function () {
                            "closed" !== this._state && (E(this), k(this));
                        }),
                        h(e, [
                            {
                                key: "closed",
                                get: function () {
                                    return "closed" === this._state;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                x = (function () {
                    function e(e) {
                        this._subscription = e;
                    }
                    var t = e.prototype;
                    return (
                        (t.next = function (e) {
                            T(this._subscription, "next", e);
                        }),
                        (t.error = function (e) {
                            T(this._subscription, "error", e);
                        }),
                        (t.complete = function () {
                            T(this._subscription, "complete");
                        }),
                        h(e, [
                            {
                                key: "closed",
                                get: function () {
                                    return "closed" === this._subscription._state;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                A = (function () {
                    function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
                        if ("function" !== typeof t) throw new TypeError("Observable initializer must be a function");
                        this._subscriber = t;
                    }
                    var t = e.prototype;
                    return (
                        (t.subscribe = function (e) {
                            return ("object" === typeof e && null !== e) || (e = { next: e, error: arguments[1], complete: arguments[2] }), new j(e, this._subscriber);
                        }),
                        (t.forEach = function (e) {
                            var t = this;
                            return new Promise(function (n, r) {
                                if ("function" === typeof e)
                                    var i = t.subscribe({
                                        next: function (t) {
                                            try {
                                                e(t, o);
                                            } catch (n) {
                                                r(n), i.unsubscribe();
                                            }
                                        },
                                        error: r,
                                        complete: n,
                                    });
                                else r(new TypeError(e + " is not a function"));
                                function o() {
                                    i.unsubscribe(), n();
                                }
                            });
                        }),
                        (t.map = function (e) {
                            var t = this;
                            if ("function" !== typeof e) throw new TypeError(e + " is not a function");
                            return new (_(this))(function (n) {
                                return t.subscribe({
                                    next: function (t) {
                                        try {
                                            t = e(t);
                                        } catch (r) {
                                            return n.error(r);
                                        }
                                        n.next(t);
                                    },
                                    error: function (e) {
                                        n.error(e);
                                    },
                                    complete: function () {
                                        n.complete();
                                    },
                                });
                            });
                        }),
                        (t.filter = function (e) {
                            var t = this;
                            if ("function" !== typeof e) throw new TypeError(e + " is not a function");
                            return new (_(this))(function (n) {
                                return t.subscribe({
                                    next: function (t) {
                                        try {
                                            if (!e(t)) return;
                                        } catch (r) {
                                            return n.error(r);
                                        }
                                        n.next(t);
                                    },
                                    error: function (e) {
                                        n.error(e);
                                    },
                                    complete: function () {
                                        n.complete();
                                    },
                                });
                            });
                        }),
                        (t.reduce = function (e) {
                            var t = this;
                            if ("function" !== typeof e) throw new TypeError(e + " is not a function");
                            var n = _(this),
                                r = arguments.length > 1,
                                i = !1,
                                o = arguments[1],
                                a = o;
                            return new n(function (n) {
                                return t.subscribe({
                                    next: function (t) {
                                        var o = !i;
                                        if (((i = !0), !o || r))
                                            try {
                                                a = e(a, t);
                                            } catch (s) {
                                                return n.error(s);
                                            }
                                        else a = t;
                                    },
                                    error: function (e) {
                                        n.error(e);
                                    },
                                    complete: function () {
                                        if (!i && !r) return n.error(new TypeError("Cannot reduce an empty sequence"));
                                        n.next(a), n.complete();
                                    },
                                });
                            });
                        }),
                        (t.concat = function () {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = _(this);
                            return new i(function (t) {
                                var r,
                                    o = 0;
                                return (
                                    (function e(a) {
                                        r = a.subscribe({
                                            next: function (e) {
                                                t.next(e);
                                            },
                                            error: function (e) {
                                                t.error(e);
                                            },
                                            complete: function () {
                                                o === n.length ? ((r = void 0), t.complete()) : e(i.from(n[o++]));
                                            },
                                        });
                                    })(e),
                                    function () {
                                        r && (r.unsubscribe(), (r = void 0));
                                    }
                                );
                            });
                        }),
                        (t.flatMap = function (e) {
                            var t = this;
                            if ("function" !== typeof e) throw new TypeError(e + " is not a function");
                            var n = _(this);
                            return new n(function (r) {
                                var i = [],
                                    o = t.subscribe({
                                        next: function (t) {
                                            if (e)
                                                try {
                                                    t = e(t);
                                                } catch (s) {
                                                    return r.error(s);
                                                }
                                            var o = n.from(t).subscribe({
                                                next: function (e) {
                                                    r.next(e);
                                                },
                                                error: function (e) {
                                                    r.error(e);
                                                },
                                                complete: function () {
                                                    var e = i.indexOf(o);
                                                    e >= 0 && i.splice(e, 1), a();
                                                },
                                            });
                                            i.push(o);
                                        },
                                        error: function (e) {
                                            r.error(e);
                                        },
                                        complete: function () {
                                            a();
                                        },
                                    });
                                function a() {
                                    o.closed && 0 === i.length && r.complete();
                                }
                                return function () {
                                    i.forEach(function (e) {
                                        return e.unsubscribe();
                                    }),
                                        o.unsubscribe();
                                };
                            });
                        }),
                        (t[m] = function () {
                            return this;
                        }),
                        (e.from = function (t) {
                            var n = "function" === typeof this ? this : e;
                            if (null == t) throw new TypeError(t + " is not an object");
                            var r = g(t, m);
                            if (r) {
                                var i = r.call(t);
                                if (Object(i) !== i) throw new TypeError(i + " is not an object");
                                return w(i) && i.constructor === n
                                    ? i
                                    : new n(function (e) {
                                          return i.subscribe(e);
                                      });
                            }
                            if (d("iterator") && (r = g(t, y)))
                                return new n(function (e) {
                                    S(function () {
                                        if (!e.closed) {
                                            for (var n, i = c(r.call(t)); !(n = i()).done; ) {
                                                var o = n.value;
                                                if ((e.next(o), e.closed)) return;
                                            }
                                            e.complete();
                                        }
                                    });
                                });
                            if (Array.isArray(t))
                                return new n(function (e) {
                                    S(function () {
                                        if (!e.closed) {
                                            for (var n = 0; n < t.length; ++n) if ((e.next(t[n]), e.closed)) return;
                                            e.complete();
                                        }
                                    });
                                });
                            throw new TypeError(t + " is not observable");
                        }),
                        (e.of = function () {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = "function" === typeof this ? this : e;
                            return new i(function (e) {
                                S(function () {
                                    if (!e.closed) {
                                        for (var t = 0; t < n.length; ++t) if ((e.next(n[t]), e.closed)) return;
                                        e.complete();
                                    }
                                });
                            });
                        }),
                        h(e, null, [
                            {
                                key: b,
                                get: function () {
                                    return this;
                                },
                            },
                        ]),
                        e
                    );
                })();
            p() && Object.defineProperty(A, Symbol("extensions"), { value: { symbol: m, hostReportError: O }, configurable: !0 });
            var I = n(3154);
            function P(e, t) {
                var n = t,
                    r = [];
                return (
                    e.definitions.forEach(function (e) {
                        if ("OperationDefinition" === e.kind)
                            throw __DEV__
                                ? new i.ej(
                                      "Found a ".concat(e.operation, " operation").concat(e.name ? " named '".concat(e.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed."
                                  )
                                : new i.ej(41);
                        "FragmentDefinition" === e.kind && r.push(e);
                    }),
                    "undefined" === typeof n &&
                        (__DEV__ ? (0, i.kG)(1 === r.length, "Found ".concat(r.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : (0, i.kG)(1 === r.length, 42), (n = r[0].name.value)),
                    (0, u.pi)((0, u.pi)({}, e), {
                        definitions: (0, u.ev)([{ kind: "OperationDefinition", operation: "query", selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: n } }] } }], e.definitions, !0),
                    })
                );
            }
            function N(e) {
                void 0 === e && (e = []);
                var t = {};
                return (
                    e.forEach(function (e) {
                        t[e.name.value] = e;
                    }),
                    t
                );
            }
            function V(e, t) {
                switch (e.kind) {
                    case "InlineFragment":
                        return e;
                    case "FragmentSpread":
                        var n = t && t[e.name.value];
                        return __DEV__ ? (0, i.kG)(n, "No fragment named ".concat(e.name.value, ".")) : (0, i.kG)(n, 43), n;
                    default:
                        return null;
                }
            }
            function R(e) {
                return { __ref: String(e) };
            }
            function C(e) {
                return Boolean(e && "object" === typeof e && "string" === typeof e.__ref);
            }
            function q(e, t, n, r) {
                if (
                    (function (e) {
                        return "IntValue" === e.kind;
                    })(n) ||
                    (function (e) {
                        return "FloatValue" === e.kind;
                    })(n)
                )
                    e[t.value] = Number(n.value);
                else if (
                    (function (e) {
                        return "BooleanValue" === e.kind;
                    })(n) ||
                    (function (e) {
                        return "StringValue" === e.kind;
                    })(n)
                )
                    e[t.value] = n.value;
                else if (
                    (function (e) {
                        return "ObjectValue" === e.kind;
                    })(n)
                ) {
                    var o = {};
                    n.fields.map(function (e) {
                        return q(o, e.name, e.value, r);
                    }),
                        (e[t.value] = o);
                } else if (
                    (function (e) {
                        return "Variable" === e.kind;
                    })(n)
                ) {
                    var a = (r || {})[n.name.value];
                    e[t.value] = a;
                } else if (
                    (function (e) {
                        return "ListValue" === e.kind;
                    })(n)
                )
                    e[t.value] = n.values.map(function (e) {
                        var n = {};
                        return q(n, t, e, r), n[t.value];
                    });
                else if (
                    (function (e) {
                        return "EnumValue" === e.kind;
                    })(n)
                )
                    e[t.value] = n.value;
                else {
                    if (
                        !(function (e) {
                            return "NullValue" === e.kind;
                        })(n)
                    )
                        throw __DEV__ ? new i.ej('The inline argument "'.concat(t.value, '" of kind "').concat(n.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new i.ej(52);
                    e[t.value] = null;
                }
            }
            var F = ["connection", "include", "skip", "client", "rest", "export"],
                M = Object.assign(
                    function (e, t, n) {
                        if (t && n && n.connection && n.connection.key) {
                            if (n.connection.filter && n.connection.filter.length > 0) {
                                var r = n.connection.filter ? n.connection.filter : [];
                                r.sort();
                                var i = {};
                                return (
                                    r.forEach(function (e) {
                                        i[e] = t[e];
                                    }),
                                    "".concat(n.connection.key, "(").concat(L(i), ")")
                                );
                            }
                            return n.connection.key;
                        }
                        var o = e;
                        if (t) {
                            var a = L(t);
                            o += "(".concat(a, ")");
                        }
                        return (
                            n &&
                                Object.keys(n).forEach(function (e) {
                                    -1 === F.indexOf(e) && (n[e] && Object.keys(n[e]).length ? (o += "@".concat(e, "(").concat(L(n[e]), ")")) : (o += "@".concat(e)));
                                }),
                            o
                        );
                    },
                    {
                        setStringify: function (e) {
                            var t = L;
                            return (L = e), t;
                        },
                    }
                ),
                L = function (e) {
                    return JSON.stringify(e, Q);
                };
            function Q(e, t) {
                return (
                    (0, I.s)(t) &&
                        !Array.isArray(t) &&
                        (t = Object.keys(t)
                            .sort()
                            .reduce(function (e, n) {
                                return (e[n] = t[n]), e;
                            }, {})),
                    t
                );
            }
            function B(e, t) {
                if (e.arguments && e.arguments.length) {
                    var n = {};
                    return (
                        e.arguments.forEach(function (e) {
                            var r = e.name,
                                i = e.value;
                            return q(n, r, i, t);
                        }),
                        n
                    );
                }
                return null;
            }
            function G(e) {
                return e.alias ? e.alias.value : e.name.value;
            }
            function U(e, t, n) {
                if ("string" === typeof e.__typename) return e.__typename;
                for (var r = 0, i = t.selections; r < i.length; r++) {
                    var o = i[r];
                    if (z(o)) {
                        if ("__typename" === o.name.value) return e[G(o)];
                    } else {
                        var a = U(e, V(o, n).selectionSet, n);
                        if ("string" === typeof a) return a;
                    }
                }
            }
            function z(e) {
                return "Field" === e.kind;
            }
            function W(e) {
                return "InlineFragment" === e.kind;
            }
            function K(e) {
                __DEV__
                    ? (0, i.kG)(e && "Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql')
                    : (0, i.kG)(e && "Document" === e.kind, 44);
                var t = e.definitions
                    .filter(function (e) {
                        return "FragmentDefinition" !== e.kind;
                    })
                    .map(function (e) {
                        if ("OperationDefinition" !== e.kind) throw __DEV__ ? new i.ej('Schema type definitions not allowed in queries. Found: "'.concat(e.kind, '"')) : new i.ej(45);
                        return e;
                    });
                return __DEV__ ? (0, i.kG)(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : (0, i.kG)(t.length <= 1, 46), e;
            }
            function J(e) {
                return (
                    K(e),
                    e.definitions.filter(function (e) {
                        return "OperationDefinition" === e.kind;
                    })[0]
                );
            }
            function Y(e) {
                return (
                    e.definitions
                        .filter(function (e) {
                            return "OperationDefinition" === e.kind && e.name;
                        })
                        .map(function (e) {
                            return e.name.value;
                        })[0] || null
                );
            }
            function H(e) {
                return e.definitions.filter(function (e) {
                    return "FragmentDefinition" === e.kind;
                });
            }
            function X(e) {
                var t = J(e);
                return __DEV__ ? (0, i.kG)(t && "query" === t.operation, "Must contain a query definition.") : (0, i.kG)(t && "query" === t.operation, 47), t;
            }
            function $(e) {
                var t;
                K(e);
                for (var n = 0, r = e.definitions; n < r.length; n++) {
                    var o = r[n];
                    if ("OperationDefinition" === o.kind) {
                        var a = o.operation;
                        if ("query" === a || "mutation" === a || "subscription" === a) return o;
                    }
                    "FragmentDefinition" !== o.kind || t || (t = o);
                }
                if (t) return t;
                throw __DEV__ ? new i.ej("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new i.ej(51);
            }
            function Z(e) {
                var t = Object.create(null),
                    n = e && e.variableDefinitions;
                return (
                    n &&
                        n.length &&
                        n.forEach(function (e) {
                            e.defaultValue && q(t, e.variable.name, e.defaultValue);
                        }),
                    t
                );
            }
            function ee(e, t) {
                return t ? t(e) : A.of();
            }
            function te(e) {
                return "function" === typeof e ? new ie(e) : e;
            }
            function ne(e) {
                return e.request.length <= 1;
            }
            var re = (function (e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return (r.link = n), r;
                    }
                    return (0, u.ZT)(t, e), t;
                })(Error),
                ie = (function () {
                    function e(e) {
                        e && (this.request = e);
                    }
                    return (
                        (e.empty = function () {
                            return new e(function () {
                                return A.of();
                            });
                        }),
                        (e.from = function (t) {
                            return 0 === t.length
                                ? e.empty()
                                : t.map(te).reduce(function (e, t) {
                                      return e.concat(t);
                                  });
                        }),
                        (e.split = function (t, n, r) {
                            var i = te(n),
                                o = te(r || new e(ee));
                            return ne(i) && ne(o)
                                ? new e(function (e) {
                                      return t(e) ? i.request(e) || A.of() : o.request(e) || A.of();
                                  })
                                : new e(function (e, n) {
                                      return t(e) ? i.request(e, n) || A.of() : o.request(e, n) || A.of();
                                  });
                        }),
                        (e.execute = function (e, t) {
                            return (
                                e.request(
                                    (function (e, t) {
                                        var n = (0, u.pi)({}, e);
                                        return (
                                            Object.defineProperty(t, "setContext", {
                                                enumerable: !1,
                                                value: function (e) {
                                                    n = "function" === typeof e ? (0, u.pi)((0, u.pi)({}, n), e(n)) : (0, u.pi)((0, u.pi)({}, n), e);
                                                },
                                            }),
                                            Object.defineProperty(t, "getContext", {
                                                enumerable: !1,
                                                value: function () {
                                                    return (0, u.pi)({}, n);
                                                },
                                            }),
                                            t
                                        );
                                    })(
                                        t.context,
                                        (function (e) {
                                            var t = { variables: e.variables || {}, extensions: e.extensions || {}, operationName: e.operationName, query: e.query };
                                            return t.operationName || (t.operationName = "string" !== typeof t.query ? Y(t.query) || void 0 : ""), t;
                                        })(
                                            (function (e) {
                                                for (var t = ["query", "operationName", "variables", "extensions", "context"], n = 0, r = Object.keys(e); n < r.length; n++) {
                                                    var o = r[n];
                                                    if (t.indexOf(o) < 0) throw __DEV__ ? new i.ej("illegal argument: ".concat(o)) : new i.ej(24);
                                                }
                                                return e;
                                            })(t)
                                        )
                                    )
                                ) || A.of()
                            );
                        }),
                        (e.concat = function (t, n) {
                            var r = te(t);
                            if (ne(r)) return __DEV__ && i.kG.warn(new re("You are calling concat on a terminating link, which will have no effect", r)), r;
                            var o = te(n);
                            return ne(o)
                                ? new e(function (e) {
                                      return (
                                          r.request(e, function (e) {
                                              return o.request(e) || A.of();
                                          }) || A.of()
                                      );
                                  })
                                : new e(function (e, t) {
                                      return (
                                          r.request(e, function (e) {
                                              return o.request(e, t) || A.of();
                                          }) || A.of()
                                      );
                                  });
                        }),
                        (e.prototype.split = function (t, n, r) {
                            return this.concat(e.split(t, n, r || new e(ee)));
                        }),
                        (e.prototype.concat = function (t) {
                            return e.concat(this, t);
                        }),
                        (e.prototype.request = function (e, t) {
                            throw __DEV__ ? new i.ej("request is not implemented") : new i.ej(19);
                        }),
                        (e.prototype.onError = function (e, t) {
                            if (t && t.error) return t.error(e), !1;
                            throw e;
                        }),
                        (e.prototype.setOnError = function (e) {
                            return (this.onError = e), this;
                        }),
                        e
                    );
                })(),
                oe = ie.execute,
                ae = n(7826),
                se = n(5821),
                ue = n(2380),
                ce = n(7359);
            const le = Object.freeze({});
            function fe(e, t, n = ue.h8) {
                const r = new Map();
                for (const m of Object.values(ce.h)) r.set(m, he(t, m));
                let i,
                    o,
                    a,
                    s = Array.isArray(e),
                    u = [e],
                    c = -1,
                    l = [],
                    f = e;
                const h = [],
                    p = [];
                do {
                    c++;
                    const e = c === u.length,
                        m = e && 0 !== l.length;
                    if (e) {
                        if (((o = 0 === p.length ? void 0 : h[h.length - 1]), (f = a), (a = p.pop()), m))
                            if (s) {
                                f = f.slice();
                                let e = 0;
                                for (const [t, n] of l) {
                                    const r = t - e;
                                    null === n ? (f.splice(r, 1), e++) : (f[r] = n);
                                }
                            } else {
                                f = Object.defineProperties({}, Object.getOwnPropertyDescriptors(f));
                                for (const [e, t] of l) f[e] = t;
                            }
                        (c = i.index), (u = i.keys), (l = i.edits), (s = i.inArray), (i = i.prev);
                    } else if (a) {
                        if (((o = s ? c : u[c]), (f = a[o]), null === f || void 0 === f)) continue;
                        h.push(o);
                    }
                    let b;
                    if (!Array.isArray(f)) {
                        var d, v;
                        (0, ue.UG)(f) || (0, ae.a)(!1, `Invalid AST Node: ${(0, se.X)(f)}.`);
                        const n = e ? (null === (d = r.get(f.kind)) || void 0 === d ? void 0 : d.leave) : null === (v = r.get(f.kind)) || void 0 === v ? void 0 : v.enter;
                        if (((b = null === n || void 0 === n ? void 0 : n.call(t, f, o, a, h, p)), b === le)) break;
                        if (!1 === b) {
                            if (!e) {
                                h.pop();
                                continue;
                            }
                        } else if (void 0 !== b && (l.push([o, b]), !e)) {
                            if (!(0, ue.UG)(b)) {
                                h.pop();
                                continue;
                            }
                            f = b;
                        }
                    }
                    var y;
                    if ((void 0 === b && m && l.push([o, f]), e)) h.pop();
                    else (i = { inArray: s, index: c, keys: u, edits: l, prev: i }), (s = Array.isArray(f)), (u = s ? f : null !== (y = n[f.kind]) && void 0 !== y ? y : []), (c = -1), (l = []), a && p.push(a), (a = f);
                } while (void 0 !== i);
                return 0 !== l.length ? l[l.length - 1][1] : e;
            }
            function he(e, t) {
                const n = e[t];
                return "object" === typeof n ? n : "function" === typeof n ? { enter: n, leave: void 0 } : { enter: e.enter, leave: e.leave };
            }
            var pe = function (e, t) {
                    var n;
                    try {
                        n = JSON.stringify(e);
                    } catch (o) {
                        var r = __DEV__ ? new i.ej("Network request failed. ".concat(t, " is not serializable: ").concat(o.message)) : new i.ej(21);
                        throw ((r.parseError = o), r);
                    }
                    return n;
                },
                de = function (e, t, n) {
                    var r = new Error(n);
                    throw ((r.name = "ServerError"), (r.response = e), (r.statusCode = e.status), (r.result = t), r);
                },
                ve = Object.prototype.hasOwnProperty;
            var ye = n(7392);
            const me = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
            function be(e) {
                return ge[e.charCodeAt(0)];
            }
            const ge = [
                "\\u0000",
                "\\u0001",
                "\\u0002",
                "\\u0003",
                "\\u0004",
                "\\u0005",
                "\\u0006",
                "\\u0007",
                "\\b",
                "\\t",
                "\\n",
                "\\u000B",
                "\\f",
                "\\r",
                "\\u000E",
                "\\u000F",
                "\\u0010",
                "\\u0011",
                "\\u0012",
                "\\u0013",
                "\\u0014",
                "\\u0015",
                "\\u0016",
                "\\u0017",
                "\\u0018",
                "\\u0019",
                "\\u001A",
                "\\u001B",
                "\\u001C",
                "\\u001D",
                "\\u001E",
                "\\u001F",
                "",
                "",
                '\\"',
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "\\\\",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "\\u007F",
                "\\u0080",
                "\\u0081",
                "\\u0082",
                "\\u0083",
                "\\u0084",
                "\\u0085",
                "\\u0086",
                "\\u0087",
                "\\u0088",
                "\\u0089",
                "\\u008A",
                "\\u008B",
                "\\u008C",
                "\\u008D",
                "\\u008E",
                "\\u008F",
                "\\u0090",
                "\\u0091",
                "\\u0092",
                "\\u0093",
                "\\u0094",
                "\\u0095",
                "\\u0096",
                "\\u0097",
                "\\u0098",
                "\\u0099",
                "\\u009A",
                "\\u009B",
                "\\u009C",
                "\\u009D",
                "\\u009E",
                "\\u009F",
            ];
            function _e(e) {
                return fe(e, we);
            }
            const we = {
                Name: { leave: (e) => e.value },
                Variable: { leave: (e) => "$" + e.name },
                Document: { leave: (e) => Oe(e.definitions, "\n\n") },
                OperationDefinition: {
                    leave(e) {
                        const t = ke("(", Oe(e.variableDefinitions, ", "), ")"),
                            n = Oe([e.operation, Oe([e.name, t]), Oe(e.directives, " ")], " ");
                        return ("query" === n ? "" : n + " ") + e.selectionSet;
                    },
                },
                VariableDefinition: { leave: ({ variable: e, type: t, defaultValue: n, directives: r }) => e + ": " + t + ke(" = ", n) + ke(" ", Oe(r, " ")) },
                SelectionSet: { leave: ({ selections: e }) => Se(e) },
                Field: {
                    leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
                        const o = ke("", e, ": ") + t;
                        let a = o + ke("(", Oe(n, ", "), ")");
                        return a.length > 80 && (a = o + ke("(\n", Ee(Oe(n, "\n")), "\n)")), Oe([a, Oe(r, " "), i], " ");
                    },
                },
                Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
                FragmentSpread: { leave: ({ name: e, directives: t }) => "..." + e + ke(" ", Oe(t, " ")) },
                InlineFragment: { leave: ({ typeCondition: e, directives: t, selectionSet: n }) => Oe(["...", ke("on ", e), Oe(t, " "), n], " ") },
                FragmentDefinition: { leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i }) => `fragment ${e}${ke("(", Oe(n, ", "), ")")} on ${t} ${ke("", Oe(r, " "), " ")}` + i },
                IntValue: { leave: ({ value: e }) => e },
                FloatValue: { leave: ({ value: e }) => e },
                StringValue: { leave: ({ value: e, block: t }) => (t ? (0, ye.LZ)(e) : `"${e.replace(me, be)}"`) },
                BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
                NullValue: { leave: () => "null" },
                EnumValue: { leave: ({ value: e }) => e },
                ListValue: { leave: ({ values: e }) => "[" + Oe(e, ", ") + "]" },
                ObjectValue: { leave: ({ fields: e }) => "{" + Oe(e, ", ") + "}" },
                ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
                Directive: { leave: ({ name: e, arguments: t }) => "@" + e + ke("(", Oe(t, ", "), ")") },
                NamedType: { leave: ({ name: e }) => e },
                ListType: { leave: ({ type: e }) => "[" + e + "]" },
                NonNullType: { leave: ({ type: e }) => e + "!" },
                SchemaDefinition: { leave: ({ description: e, directives: t, operationTypes: n }) => ke("", e, "\n") + Oe(["schema", Oe(t, " "), Se(n)], " ") },
                OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ": " + t },
                ScalarTypeDefinition: { leave: ({ description: e, name: t, directives: n }) => ke("", e, "\n") + Oe(["scalar", t, Oe(n, " ")], " ") },
                ObjectTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => ke("", e, "\n") + Oe(["type", t, ke("implements ", Oe(n, " & ")), Oe(r, " "), Se(i)], " ") },
                FieldDefinition: {
                    leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) => ke("", e, "\n") + t + (De(n) ? ke("(\n", Ee(Oe(n, "\n")), "\n)") : ke("(", Oe(n, ", "), ")")) + ": " + r + ke(" ", Oe(i, " ")),
                },
                InputValueDefinition: { leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) => ke("", e, "\n") + Oe([t + ": " + n, ke("= ", r), Oe(i, " ")], " ") },
                InterfaceTypeDefinition: { leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) => ke("", e, "\n") + Oe(["interface", t, ke("implements ", Oe(n, " & ")), Oe(r, " "), Se(i)], " ") },
                UnionTypeDefinition: { leave: ({ description: e, name: t, directives: n, types: r }) => ke("", e, "\n") + Oe(["union", t, Oe(n, " "), ke("= ", Oe(r, " | "))], " ") },
                EnumTypeDefinition: { leave: ({ description: e, name: t, directives: n, values: r }) => ke("", e, "\n") + Oe(["enum", t, Oe(n, " "), Se(r)], " ") },
                EnumValueDefinition: { leave: ({ description: e, name: t, directives: n }) => ke("", e, "\n") + Oe([t, Oe(n, " ")], " ") },
                InputObjectTypeDefinition: { leave: ({ description: e, name: t, directives: n, fields: r }) => ke("", e, "\n") + Oe(["input", t, Oe(n, " "), Se(r)], " ") },
                DirectiveDefinition: {
                    leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) =>
                        ke("", e, "\n") + "directive @" + t + (De(n) ? ke("(\n", Ee(Oe(n, "\n")), "\n)") : ke("(", Oe(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + Oe(i, " | "),
                },
                SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => Oe(["extend schema", Oe(e, " "), Se(t)], " ") },
                ScalarTypeExtension: { leave: ({ name: e, directives: t }) => Oe(["extend scalar", e, Oe(t, " ")], " ") },
                ObjectTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => Oe(["extend type", e, ke("implements ", Oe(t, " & ")), Oe(n, " "), Se(r)], " ") },
                InterfaceTypeExtension: { leave: ({ name: e, interfaces: t, directives: n, fields: r }) => Oe(["extend interface", e, ke("implements ", Oe(t, " & ")), Oe(n, " "), Se(r)], " ") },
                UnionTypeExtension: { leave: ({ name: e, directives: t, types: n }) => Oe(["extend union", e, Oe(t, " "), ke("= ", Oe(n, " | "))], " ") },
                EnumTypeExtension: { leave: ({ name: e, directives: t, values: n }) => Oe(["extend enum", e, Oe(t, " "), Se(n)], " ") },
                InputObjectTypeExtension: { leave: ({ name: e, directives: t, fields: n }) => Oe(["extend input", e, Oe(t, " "), Se(n)], " ") },
            };
            function Oe(e, t = "") {
                var n;
                return null !== (n = null === e || void 0 === e ? void 0 : e.filter((e) => e).join(t)) && void 0 !== n ? n : "";
            }
            function Se(e) {
                return ke("{\n", Ee(Oe(e, "\n")), "\n}");
            }
            function ke(e, t, n = "") {
                return null != t && "" !== t ? e + t + n : "";
            }
            function Ee(e) {
                return ke("  ", e.replace(/\n/g, "\n  "));
            }
            function De(e) {
                var t;
                return null !== (t = null === e || void 0 === e ? void 0 : e.some((e) => e.includes("\n"))) && void 0 !== t && t;
            }
            var Te = { http: { includeQuery: !0, includeExtensions: !1 }, headers: { accept: "*/*", "content-type": "application/json" }, options: { method: "POST" } },
                je = function (e, t) {
                    return t(e);
                };
            function xe(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                var i = {},
                    o = {};
                n.forEach(function (e) {
                    (i = (0, u.pi)((0, u.pi)((0, u.pi)({}, i), e.options), { headers: (0, u.pi)((0, u.pi)({}, i.headers), Ae(e.headers)) })), e.credentials && (i.credentials = e.credentials), (o = (0, u.pi)((0, u.pi)({}, o), e.http));
                });
                var a = e.operationName,
                    s = e.extensions,
                    c = e.variables,
                    l = e.query,
                    f = { operationName: a, variables: c };
                return o.includeExtensions && (f.extensions = s), o.includeQuery && (f.query = t(l, _e)), { options: i, body: f };
            }
            function Ae(e) {
                if (e) {
                    var t = Object.create(null);
                    return (
                        Object.keys(Object(e)).forEach(function (n) {
                            t[n.toLowerCase()] = e[n];
                        }),
                        t
                    );
                }
                return e;
            }
            function Ie(e) {
                return new A(function (t) {
                    t.error(e);
                });
            }
            var Pe = (0, i.wY)(function () {
                    return fetch;
                }),
                Ne = function (e) {
                    void 0 === e && (e = {});
                    var t = e.uri,
                        n = void 0 === t ? "/graphql" : t,
                        r = e.fetch,
                        o = e.print,
                        a = void 0 === o ? je : o,
                        s = e.includeExtensions,
                        c = e.useGETForQueries,
                        l = e.includeUnusedVariables,
                        f = void 0 !== l && l,
                        h = (0, u._T)(e, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
                    __DEV__ &&
                        (function (e) {
                            if (!e && "undefined" === typeof fetch)
                                throw __DEV__
                                    ? new i.ej(
                                          "\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    "
                                      )
                                    : new i.ej(20);
                        })(r || Pe);
                    var p = { http: { includeExtensions: s }, options: h.fetchOptions, credentials: h.credentials, headers: h.headers };
                    return new ie(function (e) {
                        var t = (function (e, t) {
                                return e.getContext().uri || ("function" === typeof t ? t(e) : t || "/graphql");
                            })(e, n),
                            o = e.getContext(),
                            s = {};
                        if (o.clientAwareness) {
                            var l = o.clientAwareness,
                                h = l.name,
                                d = l.version;
                            h && (s["apollographql-client-name"] = h), d && (s["apollographql-client-version"] = d);
                        }
                        var v,
                            y = (0, u.pi)((0, u.pi)({}, s), o.headers),
                            m = { http: o.http, options: o.fetchOptions, credentials: o.credentials, headers: y },
                            b = xe(e, a, Te, p, m),
                            g = b.options,
                            _ = b.body;
                        if (_.variables && !f) {
                            var w = new Set(Object.keys(_.variables));
                            fe(e.query, {
                                Variable: function (e, t, n) {
                                    n && "VariableDefinition" !== n.kind && w.delete(e.name.value);
                                },
                            }),
                                w.size &&
                                    ((_.variables = (0, u.pi)({}, _.variables)),
                                    w.forEach(function (e) {
                                        delete _.variables[e];
                                    }));
                        }
                        if (!g.signal) {
                            var O = (function () {
                                    if ("undefined" === typeof AbortController) return { controller: !1, signal: !1 };
                                    var e = new AbortController();
                                    return { controller: e, signal: e.signal };
                                })(),
                                S = O.controller,
                                k = O.signal;
                            (v = S) && (g.signal = k);
                        }
                        if (
                            (c &&
                                !e.query.definitions.some(function (e) {
                                    return "OperationDefinition" === e.kind && "mutation" === e.operation;
                                }) &&
                                (g.method = "GET"),
                            "GET" === g.method)
                        ) {
                            var E = (function (e, t) {
                                    var n = [],
                                        r = function (e, t) {
                                            n.push("".concat(e, "=").concat(encodeURIComponent(t)));
                                        };
                                    if (("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables)) {
                                        var i = void 0;
                                        try {
                                            i = pe(t.variables, "Variables map");
                                        } catch (T) {
                                            return { parseError: T };
                                        }
                                        r("variables", i);
                                    }
                                    if (t.extensions) {
                                        var o = void 0;
                                        try {
                                            o = pe(t.extensions, "Extensions map");
                                        } catch (T) {
                                            return { parseError: T };
                                        }
                                        r("extensions", o);
                                    }
                                    var a = "",
                                        s = e,
                                        u = e.indexOf("#");
                                    -1 !== u && ((a = e.substr(u)), (s = e.substr(0, u)));
                                    var c = -1 === s.indexOf("?") ? "?" : "&";
                                    return { newURI: s + c + n.join("&") + a };
                                })(t, _),
                                D = E.newURI,
                                T = E.parseError;
                            if (T) return Ie(T);
                            t = D;
                        } else
                            try {
                                g.body = pe(_, "Payload");
                            } catch (T) {
                                return Ie(T);
                            }
                        return new A(function (n) {
                            var o;
                            return (
                                (
                                    r ||
                                    (0, i.wY)(function () {
                                        return fetch;
                                    }) ||
                                    Pe
                                )(t, g)
                                    .then(function (t) {
                                        return e.setContext({ response: t }), t;
                                    })
                                    .then(
                                        ((o = e),
                                        function (e) {
                                            return e
                                                .text()
                                                .then(function (t) {
                                                    try {
                                                        return JSON.parse(t);
                                                    } catch (r) {
                                                        var n = r;
                                                        throw ((n.name = "ServerParseError"), (n.response = e), (n.statusCode = e.status), (n.bodyText = t), n);
                                                    }
                                                })
                                                .then(function (t) {
                                                    return (
                                                        e.status >= 300 && de(e, t, "Response not successful: Received status code ".concat(e.status)),
                                                        Array.isArray(t) ||
                                                            ve.call(t, "data") ||
                                                            ve.call(t, "errors") ||
                                                            de(
                                                                e,
                                                                t,
                                                                "Server response was missing for query '".concat(
                                                                    Array.isArray(o)
                                                                        ? o.map(function (e) {
                                                                              return e.operationName;
                                                                          })
                                                                        : o.operationName,
                                                                    "'."
                                                                )
                                                            ),
                                                        t
                                                    );
                                                });
                                        })
                                    )
                                    .then(function (e) {
                                        return n.next(e), n.complete(), e;
                                    })
                                    .catch(function (e) {
                                        "AbortError" !== e.name && (e.result && e.result.errors && e.result.data && n.next(e.result), n.error(e));
                                    }),
                                function () {
                                    v && v.abort();
                                }
                            );
                        });
                    });
                },
                Ve = (function (e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var n = e.call(this, Ne(t).request) || this;
                        return (n.options = t), n;
                    }
                    return (0, u.ZT)(t, e), t;
                })(ie),
                Re = n(2152),
                Ce = function () {
                    return Object.create(null);
                },
                qe = Array.prototype,
                Fe = qe.forEach,
                Me = qe.slice,
                Le = (function () {
                    function e(e, t) {
                        void 0 === e && (e = !0), void 0 === t && (t = Ce), (this.weakness = e), (this.makeData = t);
                    }
                    return (
                        (e.prototype.lookup = function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return this.lookupArray(e);
                        }),
                        (e.prototype.lookupArray = function (e) {
                            var t = this;
                            return (
                                Fe.call(e, function (e) {
                                    return (t = t.getChildTrie(e));
                                }),
                                t.data || (t.data = this.makeData(Me.call(e)))
                            );
                        }),
                        (e.prototype.getChildTrie = function (t) {
                            var n =
                                    this.weakness &&
                                    (function (e) {
                                        switch (typeof e) {
                                            case "object":
                                                if (null === e) break;
                                            case "function":
                                                return !0;
                                        }
                                        return !1;
                                    })(t)
                                        ? this.weak || (this.weak = new WeakMap())
                                        : this.strong || (this.strong = new Map()),
                                r = n.get(t);
                            return r || n.set(t, (r = new e(this.weakness, this.makeData))), r;
                        }),
                        e
                    );
                })();
            var Qe = n(320),
                Be = n(3712);
            function Ge(e, t) {
                var n = e.directives;
                return (
                    !n ||
                    !n.length ||
                    (function (e) {
                        var t = [];
                        e &&
                            e.length &&
                            e.forEach(function (e) {
                                if (
                                    (function (e) {
                                        var t = e.name.value;
                                        return "skip" === t || "include" === t;
                                    })(e)
                                ) {
                                    var n = e.arguments,
                                        r = e.name.value;
                                    __DEV__ ? (0, i.kG)(n && 1 === n.length, "Incorrect number of arguments for the @".concat(r, " directive.")) : (0, i.kG)(n && 1 === n.length, 38);
                                    var o = n[0];
                                    __DEV__ ? (0, i.kG)(o.name && "if" === o.name.value, "Invalid argument for the @".concat(r, " directive.")) : (0, i.kG)(o.name && "if" === o.name.value, 39);
                                    var a = o.value;
                                    __DEV__
                                        ? (0, i.kG)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), "Argument for the @".concat(r, " directive must be a variable or a boolean value."))
                                        : (0, i.kG)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), 40),
                                        t.push({ directive: e, ifArgument: o });
                                }
                            });
                        return t;
                    })(n).every(function (e) {
                        var n = e.directive,
                            r = e.ifArgument,
                            o = !1;
                        return (
                            "Variable" === r.value.kind
                                ? ((o = t && t[r.value.name.value]), __DEV__ ? (0, i.kG)(void 0 !== o, "Invalid variable referenced in @".concat(n.name.value, " directive.")) : (0, i.kG)(void 0 !== o, 37))
                                : (o = r.value.value),
                            "skip" === n.name.value ? !o : o
                        );
                    })
                );
            }
            function Ue(e, t) {
                return (function (e) {
                    var t = [];
                    return (
                        fe(e, {
                            Directive: function (e) {
                                t.push(e.name.value);
                            },
                        }),
                        t
                    );
                })(t).some(function (t) {
                    return e.indexOf(t) > -1;
                });
            }
            function ze(e) {
                return e && Ue(["client"], e) && Ue(["export"], e);
            }
            var We = Object.prototype.hasOwnProperty;
            function Ke() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return Je(e);
            }
            function Je(e) {
                var t = e[0] || {},
                    n = e.length;
                if (n > 1) for (var r = new He(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
                return t;
            }
            var Ye = function (e, t, n) {
                    return this.merge(e[n], t[n]);
                },
                He = (function () {
                    function e(e) {
                        void 0 === e && (e = Ye), (this.reconciler = e), (this.isObject = I.s), (this.pastCopies = new Set());
                    }
                    return (
                        (e.prototype.merge = function (e, t) {
                            for (var n = this, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                            return (0, I.s)(t) && (0, I.s)(e)
                                ? (Object.keys(t).forEach(function (i) {
                                      if (We.call(e, i)) {
                                          var o = e[i];
                                          if (t[i] !== o) {
                                              var a = n.reconciler.apply(n, (0, u.ev)([e, t, i], r, !1));
                                              a !== o && ((e = n.shallowCopyForMerge(e))[i] = a);
                                          }
                                      } else (e = n.shallowCopyForMerge(e))[i] = t[i];
                                  }),
                                  e)
                                : t;
                        }),
                        (e.prototype.shallowCopyForMerge = function (e) {
                            return (0, I.s)(e) && (this.pastCopies.has(e) || ((e = Array.isArray(e) ? e.slice(0) : (0, u.pi)({ __proto__: Object.getPrototypeOf(e) }, e)), this.pastCopies.add(e))), e;
                        }),
                        e
                    );
                })(),
                Xe = Object.prototype.hasOwnProperty;
            function $e(e, t) {
                var n = e.__typename,
                    r = e.id,
                    i = e._id;
                if ("string" === typeof n && (t && (t.keyObject = void 0 !== r ? { id: r } : void 0 !== i ? { _id: i } : void 0), void 0 === r && (r = i), void 0 !== r))
                    return "".concat(n, ":").concat("number" === typeof r || "string" === typeof r ? r : JSON.stringify(r));
            }
            var Ze = { dataIdFromObject: $e, addTypename: !0, resultCaching: !0, canonizeResults: !1 };
            function et(e) {
                var t = e.canonizeResults;
                return void 0 === t ? Ze.canonizeResults : t;
            }
            var tt = /^[_a-z][_0-9a-z]*/i;
            function nt(e) {
                var t = e.match(tt);
                return t ? t[0] : e;
            }
            function rt(e, t, n) {
                return (
                    !!(0, I.s)(t) &&
                    (ot(t)
                        ? t.every(function (t) {
                              return rt(e, t, n);
                          })
                        : e.selections.every(function (e) {
                              if (z(e) && Ge(e, n)) {
                                  var r = G(e);
                                  return Xe.call(t, r) && (!e.selectionSet || rt(e.selectionSet, t[r], n));
                              }
                              return !0;
                          }))
                );
            }
            function it(e) {
                return (0, I.s)(e) && !C(e) && !ot(e);
            }
            var ot = function (e) {
                return Array.isArray(e);
            };
            var at,
                st,
                ut = (function () {
                    function e() {
                        (this.known = new (Qe.sy ? WeakSet : Set)()), (this.pool = new Le(Qe.mr)), (this.passes = new WeakMap()), (this.keysByJSON = new Map()), (this.empty = this.admit({}));
                    }
                    return (
                        (e.prototype.isKnown = function (e) {
                            return (0, I.s)(e) && this.known.has(e);
                        }),
                        (e.prototype.pass = function (e) {
                            if ((0, I.s)(e)) {
                                var t = (function (e) {
                                    return (0, I.s)(e) ? (ot(e) ? e.slice(0) : (0, u.pi)({ __proto__: Object.getPrototypeOf(e) }, e)) : e;
                                })(e);
                                return this.passes.set(t, e), t;
                            }
                            return e;
                        }),
                        (e.prototype.admit = function (e) {
                            var t = this;
                            if ((0, I.s)(e)) {
                                var n = this.passes.get(e);
                                if (n) return n;
                                switch (Object.getPrototypeOf(e)) {
                                    case Array.prototype:
                                        if (this.known.has(e)) return e;
                                        var r = e.map(this.admit, this);
                                        return (s = this.pool.lookupArray(r)).array || (this.known.add((s.array = r)), __DEV__ && Object.freeze(r)), s.array;
                                    case null:
                                    case Object.prototype:
                                        if (this.known.has(e)) return e;
                                        var i = Object.getPrototypeOf(e),
                                            o = [i],
                                            a = this.sortedKeys(e);
                                        o.push(a.json);
                                        var s,
                                            u = o.length;
                                        if (
                                            (a.sorted.forEach(function (n) {
                                                o.push(t.admit(e[n]));
                                            }),
                                            !(s = this.pool.lookupArray(o)).object)
                                        ) {
                                            var c = (s.object = Object.create(i));
                                            this.known.add(c),
                                                a.sorted.forEach(function (e, t) {
                                                    c[e] = o[u + t];
                                                }),
                                                __DEV__ && Object.freeze(c);
                                        }
                                        return s.object;
                                }
                            }
                            return e;
                        }),
                        (e.prototype.sortedKeys = function (e) {
                            var t = Object.keys(e),
                                n = this.pool.lookupArray(t);
                            if (!n.keys) {
                                t.sort();
                                var r = JSON.stringify(t);
                                (n.keys = this.keysByJSON.get(r)) || this.keysByJSON.set(r, (n.keys = { sorted: t, json: r }));
                            }
                            return n.keys;
                        }),
                        e
                    );
                })(),
                ct = Object.assign(
                    function (e) {
                        if ((0, I.s)(e)) {
                            void 0 === at && lt();
                            var t = at.admit(e),
                                n = st.get(t);
                            return void 0 === n && st.set(t, (n = JSON.stringify(t))), n;
                        }
                        return JSON.stringify(e);
                    },
                    { reset: lt }
                );
            function lt() {
                (at = new ut()), (st = new (Qe.mr ? WeakMap : Map)());
            }
            function ft(e, t, n) {
                return new A(function (r) {
                    var i = r.next,
                        o = r.error,
                        a = r.complete,
                        s = 0,
                        u = !1,
                        c = {
                            then: function (e) {
                                return new Promise(function (t) {
                                    return t(e());
                                });
                            },
                        };
                    function l(e, t) {
                        return e
                            ? function (t) {
                                  ++s;
                                  var n = function () {
                                      return e(t);
                                  };
                                  c = c
                                      .then(n, n)
                                      .then(
                                          function (e) {
                                              --s, i && i.call(r, e), u && f.complete();
                                          },
                                          function (e) {
                                              throw (--s, e);
                                          }
                                      )
                                      .catch(function (e) {
                                          o && o.call(r, e);
                                      });
                              }
                            : function (e) {
                                  return t && t.call(r, e);
                              };
                    }
                    var f = {
                            next: l(t, i),
                            error: l(n, o),
                            complete: function () {
                                (u = !0), s || (a && a.call(r));
                            },
                        },
                        h = e.subscribe(f);
                    return function () {
                        return h.unsubscribe();
                    };
                });
            }
            function ht(e) {
                return (e.errors && e.errors.length > 0) || !1;
            }
            function pt(e, t, n) {
                var r = 0;
                return (
                    e.forEach(function (n, i) {
                        t.call(this, n, i, e) && (e[r++] = n);
                    }, n),
                    (e.length = r),
                    e
                );
            }
            var dt = { kind: "Field", name: { kind: "Name", value: "__typename" } };
            function vt(e, t) {
                return e.selectionSet.selections.every(function (e) {
                    return "FragmentSpread" === e.kind && vt(t[e.name.value], t);
                });
            }
            function yt(e) {
                return vt(
                    J(e) ||
                        (function (e) {
                            __DEV__
                                ? (0, i.kG)("Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql')
                                : (0, i.kG)("Document" === e.kind, 48),
                                __DEV__ ? (0, i.kG)(e.definitions.length <= 1, "Fragment must have exactly one definition.") : (0, i.kG)(e.definitions.length <= 1, 49);
                            var t = e.definitions[0];
                            return __DEV__ ? (0, i.kG)("FragmentDefinition" === t.kind, "Must be a fragment definition.") : (0, i.kG)("FragmentDefinition" === t.kind, 50), t;
                        })(e),
                    N(H(e))
                )
                    ? null
                    : e;
            }
            function mt(e) {
                return function (t) {
                    return e.some(function (e) {
                        return (e.name && e.name === t.name.value) || (e.test && e.test(t));
                    });
                };
            }
            function bt(e, t) {
                var n = Object.create(null),
                    r = [],
                    i = Object.create(null),
                    o = [],
                    a = yt(
                        fe(t, {
                            Variable: {
                                enter: function (e, t, r) {
                                    "VariableDefinition" !== r.kind && (n[e.name.value] = !0);
                                },
                            },
                            Field: {
                                enter: function (t) {
                                    if (
                                        e &&
                                        t.directives &&
                                        e.some(function (e) {
                                            return e.remove;
                                        }) &&
                                        t.directives &&
                                        t.directives.some(mt(e))
                                    )
                                        return (
                                            t.arguments &&
                                                t.arguments.forEach(function (e) {
                                                    "Variable" === e.value.kind && r.push({ name: e.value.name.value });
                                                }),
                                            t.selectionSet &&
                                                wt(t.selectionSet).forEach(function (e) {
                                                    o.push({ name: e.name.value });
                                                }),
                                            null
                                        );
                                },
                            },
                            FragmentSpread: {
                                enter: function (e) {
                                    i[e.name.value] = !0;
                                },
                            },
                            Directive: {
                                enter: function (t) {
                                    if (mt(e)(t)) return null;
                                },
                            },
                        })
                    );
                return (
                    a &&
                        pt(r, function (e) {
                            return !!e.name && !n[e.name];
                        }).length &&
                        (a = (function (e, t) {
                            var n = (function (e) {
                                return function (t) {
                                    return e.some(function (e) {
                                        return t.value && "Variable" === t.value.kind && t.value.name && (e.name === t.value.name.value || (e.test && e.test(t)));
                                    });
                                };
                            })(e);
                            return yt(
                                fe(t, {
                                    OperationDefinition: {
                                        enter: function (t) {
                                            return (0, u.pi)((0, u.pi)({}, t), {
                                                variableDefinitions: t.variableDefinitions
                                                    ? t.variableDefinitions.filter(function (t) {
                                                          return !e.some(function (e) {
                                                              return e.name === t.variable.name.value;
                                                          });
                                                      })
                                                    : [],
                                            });
                                        },
                                    },
                                    Field: {
                                        enter: function (t) {
                                            if (
                                                e.some(function (e) {
                                                    return e.remove;
                                                })
                                            ) {
                                                var r = 0;
                                                if (
                                                    (t.arguments &&
                                                        t.arguments.forEach(function (e) {
                                                            n(e) && (r += 1);
                                                        }),
                                                    1 === r)
                                                )
                                                    return null;
                                            }
                                        },
                                    },
                                    Argument: {
                                        enter: function (e) {
                                            if (n(e)) return null;
                                        },
                                    },
                                })
                            );
                        })(r, a)),
                    a &&
                        pt(o, function (e) {
                            return !!e.name && !i[e.name];
                        }).length &&
                        (a = (function (e, t) {
                            function n(t) {
                                if (
                                    e.some(function (e) {
                                        return e.name === t.name.value;
                                    })
                                )
                                    return null;
                            }
                            return yt(fe(t, { FragmentSpread: { enter: n }, FragmentDefinition: { enter: n } }));
                        })(o, a)),
                    a
                );
            }
            var gt = Object.assign(
                    function (e) {
                        return fe(e, {
                            SelectionSet: {
                                enter: function (e, t, n) {
                                    if (!n || "OperationDefinition" !== n.kind) {
                                        var r = e.selections;
                                        if (r)
                                            if (
                                                !r.some(function (e) {
                                                    return z(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0));
                                                })
                                            ) {
                                                var i = n;
                                                if (
                                                    !(
                                                        z(i) &&
                                                        i.directives &&
                                                        i.directives.some(function (e) {
                                                            return "export" === e.name.value;
                                                        })
                                                    )
                                                )
                                                    return (0, u.pi)((0, u.pi)({}, e), { selections: (0, u.ev)((0, u.ev)([], r, !0), [dt], !1) });
                                            }
                                    }
                                },
                            },
                        });
                    },
                    {
                        added: function (e) {
                            return e === dt;
                        },
                    }
                ),
                _t = {
                    test: function (e) {
                        var t = "connection" === e.name.value;
                        return (
                            t &&
                                ((e.arguments &&
                                    e.arguments.some(function (e) {
                                        return "key" === e.name.value;
                                    })) ||
                                    (__DEV__ && i.kG.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."))),
                            t
                        );
                    },
                };
            function wt(e) {
                var t = [];
                return (
                    e.selections.forEach(function (e) {
                        (z(e) || W(e)) && e.selectionSet
                            ? wt(e.selectionSet).forEach(function (e) {
                                  return t.push(e);
                              })
                            : "FragmentSpread" === e.kind && t.push(e);
                    }),
                    t
                );
            }
            function Ot(e) {
                return "query" === $(e).operation
                    ? e
                    : fe(e, {
                          OperationDefinition: {
                              enter: function (e) {
                                  return (0, u.pi)((0, u.pi)({}, e), { operation: "query" });
                              },
                          },
                      });
            }
            var St = new Map();
            function kt(e) {
                var t = St.get(e) || 1;
                return St.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
            }
            function Et(e, t, n) {
                var r = [];
                e.forEach(function (e) {
                    return e[t] && r.push(e);
                }),
                    r.forEach(function (e) {
                        return e[t](n);
                    });
            }
            function Dt(e) {
                function t(t) {
                    Object.defineProperty(e, t, { value: A });
                }
                return Qe.aS && Symbol.species && t(Symbol.species), t("@@species"), e;
            }
            function Tt(e) {
                return e && "function" === typeof e.then;
            }
            var jt = (function (e) {
                function t(t) {
                    var n =
                        e.call(this, function (e) {
                            return (
                                n.addObserver(e),
                                function () {
                                    return n.removeObserver(e);
                                }
                            );
                        }) || this;
                    return (
                        (n.observers = new Set()),
                        (n.addCount = 0),
                        (n.promise = new Promise(function (e, t) {
                            (n.resolve = e), (n.reject = t);
                        })),
                        (n.handlers = {
                            next: function (e) {
                                null !== n.sub && ((n.latest = ["next", e]), Et(n.observers, "next", e));
                            },
                            error: function (e) {
                                var t = n.sub;
                                null !== t &&
                                    (t &&
                                        setTimeout(function () {
                                            return t.unsubscribe();
                                        }),
                                    (n.sub = null),
                                    (n.latest = ["error", e]),
                                    n.reject(e),
                                    Et(n.observers, "error", e));
                            },
                            complete: function () {
                                var e = n.sub;
                                if (null !== e) {
                                    var t = n.sources.shift();
                                    t
                                        ? Tt(t)
                                            ? t.then(function (e) {
                                                  return (n.sub = e.subscribe(n.handlers));
                                              })
                                            : (n.sub = t.subscribe(n.handlers))
                                        : (e &&
                                              setTimeout(function () {
                                                  return e.unsubscribe();
                                              }),
                                          (n.sub = null),
                                          n.latest && "next" === n.latest[0] ? n.resolve(n.latest[1]) : n.resolve(),
                                          Et(n.observers, "complete"));
                                }
                            },
                        }),
                        (n.cancel = function (e) {
                            n.reject(e), (n.sources = []), n.handlers.complete();
                        }),
                        n.promise.catch(function (e) {}),
                        "function" === typeof t && (t = [new A(t)]),
                        Tt(t)
                            ? t.then(function (e) {
                                  return n.start(e);
                              }, n.handlers.error)
                            : n.start(t),
                        n
                    );
                }
                return (
                    (0, u.ZT)(t, e),
                    (t.prototype.start = function (e) {
                        void 0 === this.sub && ((this.sources = Array.from(e)), this.handlers.complete());
                    }),
                    (t.prototype.deliverLastMessage = function (e) {
                        if (this.latest) {
                            var t = this.latest[0],
                                n = e[t];
                            n && n.call(e, this.latest[1]), null === this.sub && "next" === t && e.complete && e.complete();
                        }
                    }),
                    (t.prototype.addObserver = function (e) {
                        this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e), ++this.addCount);
                    }),
                    (t.prototype.removeObserver = function (e, t) {
                        this.observers.delete(e) && --this.addCount < 1 && !t && this.handlers.complete();
                    }),
                    (t.prototype.cleanup = function (e) {
                        var t = this,
                            n = !1,
                            r = function () {
                                n || ((n = !0), t.observers.delete(i), e());
                            },
                            i = { next: r, error: r, complete: r },
                            o = this.addCount;
                        this.addObserver(i), (this.addCount = o);
                    }),
                    t
                );
            })(A);
            Dt(jt);
            var xt = n(2651),
                At = n(990),
                It = n(1644),
                Pt = Object.prototype.toString;
            function Nt(e) {
                return Vt(e);
            }
            function Vt(e, t) {
                switch (Pt.call(e)) {
                    case "[object Array]":
                        if ((t = t || new Map()).has(e)) return t.get(e);
                        var n = e.slice(0);
                        return (
                            t.set(e, n),
                            n.forEach(function (e, r) {
                                n[r] = Vt(e, t);
                            }),
                            n
                        );
                    case "[object Object]":
                        if ((t = t || new Map()).has(e)) return t.get(e);
                        var r = Object.create(Object.getPrototypeOf(e));
                        return (
                            t.set(e, r),
                            Object.keys(e).forEach(function (n) {
                                r[n] = Vt(e[n], t);
                            }),
                            r
                        );
                    default:
                        return e;
                }
            }
            var Rt = Object.assign,
                Ct = Object.hasOwnProperty,
                qt = (function (e) {
                    function t(t) {
                        var n = t.queryManager,
                            r = t.queryInfo,
                            i = t.options,
                            o =
                                e.call(this, function (e) {
                                    try {
                                        var n = e._subscription._observer;
                                        n && !n.error && (n.error = Mt);
                                    } catch (t) {}
                                    var r = !o.observers.size;
                                    o.observers.add(e);
                                    var i = o.last;
                                    return (
                                        i && i.error ? e.error && e.error(i.error) : i && i.result && e.next && e.next(i.result),
                                        r && o.reobserve().catch(function () {}),
                                        function () {
                                            o.observers.delete(e) && !o.observers.size && o.tearDownQuery();
                                        }
                                    );
                                }) || this;
                        (o.observers = new Set()), (o.subscriptions = new Set()), (o.queryInfo = r), (o.queryManager = n), (o.isTornDown = !1);
                        var a = n.defaultOptions.watchQuery,
                            s = (void 0 === a ? {} : a).fetchPolicy,
                            c = void 0 === s ? "cache-first" : s,
                            l = i.fetchPolicy,
                            f = void 0 === l ? c : l,
                            h = i.initialFetchPolicy,
                            p = void 0 === h ? ("standby" === f ? c : f) : h;
                        (o.options = (0, u.pi)((0, u.pi)({}, i), { initialFetchPolicy: p, fetchPolicy: f })), (o.queryId = r.queryId || n.generateQueryId());
                        var d = J(o.query);
                        return (o.queryName = d && d.name && d.name.value), o;
                    }
                    return (
                        (0, u.ZT)(t, e),
                        Object.defineProperty(t.prototype, "query", {
                            get: function () {
                                return this.queryManager.transform(this.options.query).document;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "variables", {
                            get: function () {
                                return this.options.variables;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.result = function () {
                            var e = this;
                            return new Promise(function (t, n) {
                                var r = {
                                        next: function (n) {
                                            t(n),
                                                e.observers.delete(r),
                                                e.observers.size || e.queryManager.removeQuery(e.queryId),
                                                setTimeout(function () {
                                                    i.unsubscribe();
                                                }, 0);
                                        },
                                        error: n,
                                    },
                                    i = e.subscribe(r);
                            });
                        }),
                        (t.prototype.getCurrentResult = function (e) {
                            void 0 === e && (e = !0);
                            var t = this.getLastResult(!0),
                                n = this.queryInfo.networkStatus || (t && t.networkStatus) || It.I.ready,
                                r = (0, u.pi)((0, u.pi)({}, t), { loading: (0, It.O)(n), networkStatus: n }),
                                i = this.options.fetchPolicy,
                                o = void 0 === i ? "cache-first" : i;
                            if ("network-only" === o || "no-cache" === o || "standby" === o || this.queryManager.transform(this.options.query).hasForcedResolvers);
                            else {
                                var a = this.queryInfo.getDiff();
                                (a.complete || this.options.returnPartialData) && (r.data = a.result),
                                    (0, Re.D)(r.data, {}) && (r.data = void 0),
                                    a.complete ? (delete r.partial, !a.complete || r.networkStatus !== It.I.loading || ("cache-first" !== o && "cache-only" !== o) || ((r.networkStatus = It.I.ready), (r.loading = !1))) : (r.partial = !0),
                                    !__DEV__ || a.complete || this.options.partialRefetch || r.loading || r.data || r.error || Lt(a.missing);
                            }
                            return e && this.updateLastResult(r), r;
                        }),
                        (t.prototype.isDifferentFromLastResult = function (e) {
                            return !this.last || !(0, Re.D)(this.last.result, e);
                        }),
                        (t.prototype.getLast = function (e, t) {
                            var n = this.last;
                            if (n && n[e] && (!t || (0, Re.D)(n.variables, this.variables))) return n[e];
                        }),
                        (t.prototype.getLastResult = function (e) {
                            return this.getLast("result", e);
                        }),
                        (t.prototype.getLastError = function (e) {
                            return this.getLast("error", e);
                        }),
                        (t.prototype.resetLastResults = function () {
                            delete this.last, (this.isTornDown = !1);
                        }),
                        (t.prototype.resetQueryStoreErrors = function () {
                            this.queryManager.resetErrors(this.queryId);
                        }),
                        (t.prototype.refetch = function (e) {
                            var t,
                                n = { pollInterval: 0 },
                                r = this.options.fetchPolicy;
                            if (((n.fetchPolicy = "cache-and-network" === r ? r : "no-cache" === r ? "no-cache" : "network-only"), __DEV__ && e && Ct.call(e, "variables"))) {
                                var o = X(this.query),
                                    a = o.variableDefinitions;
                                (a &&
                                    a.some(function (e) {
                                        return "variables" === e.variable.name.value;
                                    })) ||
                                    (__DEV__ &&
                                        i.kG.warn(
                                            "Called refetch("
                                                .concat(JSON.stringify(e), ") for query ")
                                                .concat(
                                                    (null === (t = o.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(o),
                                                    ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"
                                                )
                                        ));
                            }
                            return e && !(0, Re.D)(this.options.variables, e) && (n.variables = this.options.variables = (0, u.pi)((0, u.pi)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(n, It.I.refetch);
                        }),
                        (t.prototype.fetchMore = function (e) {
                            var t = this,
                                n = (0, u.pi)(
                                    (0, u.pi)({}, e.query ? e : (0, u.pi)((0, u.pi)((0, u.pi)((0, u.pi)({}, this.options), { query: this.query }), e), { variables: (0, u.pi)((0, u.pi)({}, this.options.variables), e.variables) })),
                                    { fetchPolicy: "no-cache" }
                                ),
                                r = this.queryManager.generateQueryId(),
                                i = this.queryInfo,
                                o = i.networkStatus;
                            (i.networkStatus = It.I.fetchMore), n.notifyOnNetworkStatusChange && this.observe();
                            var a = new Set();
                            return this.queryManager
                                .fetchQuery(r, n, It.I.fetchMore)
                                .then(function (s) {
                                    return (
                                        t.queryManager.removeQuery(r),
                                        i.networkStatus === It.I.fetchMore && (i.networkStatus = o),
                                        t.queryManager.cache.batch({
                                            update: function (r) {
                                                var i = e.updateQuery;
                                                i
                                                    ? r.updateQuery({ query: t.query, variables: t.variables, returnPartialData: !0, optimistic: !1 }, function (e) {
                                                          return i(e, { fetchMoreResult: s.data, variables: n.variables });
                                                      })
                                                    : r.writeQuery({ query: n.query, variables: n.variables, data: s.data });
                                            },
                                            onWatchUpdated: function (e) {
                                                a.add(e.query);
                                            },
                                        }),
                                        s
                                    );
                                })
                                .finally(function () {
                                    a.has(t.query) || Ft(t);
                                });
                        }),
                        (t.prototype.subscribeToMore = function (e) {
                            var t = this,
                                n = this.queryManager.startGraphQLSubscription({ query: e.document, variables: e.variables, context: e.context }).subscribe({
                                    next: function (n) {
                                        var r = e.updateQuery;
                                        r &&
                                            t.updateQuery(function (e, t) {
                                                var i = t.variables;
                                                return r(e, { subscriptionData: n, variables: i });
                                            });
                                    },
                                    error: function (t) {
                                        e.onError ? e.onError(t) : __DEV__ && i.kG.error("Unhandled GraphQL subscription error", t);
                                    },
                                });
                            return (
                                this.subscriptions.add(n),
                                function () {
                                    t.subscriptions.delete(n) && n.unsubscribe();
                                }
                            );
                        }),
                        (t.prototype.setOptions = function (e) {
                            return this.reobserve(e);
                        }),
                        (t.prototype.setVariables = function (e) {
                            return (0, Re.D)(this.variables, e)
                                ? this.observers.size
                                    ? this.result()
                                    : Promise.resolve()
                                : ((this.options.variables = e), this.observers.size ? this.reobserve({ fetchPolicy: this.options.initialFetchPolicy, variables: e }, It.I.setVariables) : Promise.resolve());
                        }),
                        (t.prototype.updateQuery = function (e) {
                            var t = this.queryManager,
                                n = e(t.cache.diff({ query: this.options.query, variables: this.variables, returnPartialData: !0, optimistic: !1 }).result, { variables: this.variables });
                            n && (t.cache.writeQuery({ query: this.options.query, data: n, variables: this.variables }), t.broadcastQueries());
                        }),
                        (t.prototype.startPolling = function (e) {
                            (this.options.pollInterval = e), this.updatePolling();
                        }),
                        (t.prototype.stopPolling = function () {
                            (this.options.pollInterval = 0), this.updatePolling();
                        }),
                        (t.prototype.applyNextFetchPolicy = function (e, t) {
                            if (t.nextFetchPolicy) {
                                var n = t.fetchPolicy,
                                    r = void 0 === n ? "cache-first" : n,
                                    i = t.initialFetchPolicy,
                                    o = void 0 === i ? r : i;
                                "standby" === r ||
                                    ("function" === typeof t.nextFetchPolicy
                                        ? (t.fetchPolicy = t.nextFetchPolicy(r, { reason: e, options: t, observable: this, initialFetchPolicy: o }))
                                        : (t.fetchPolicy = "variables-changed" === e ? o : t.nextFetchPolicy));
                            }
                            return t.fetchPolicy;
                        }),
                        (t.prototype.fetch = function (e, t) {
                            return this.queryManager.setObservableQuery(this), this.queryManager.fetchQueryObservable(this.queryId, e, t);
                        }),
                        (t.prototype.updatePolling = function () {
                            var e = this;
                            if (!this.queryManager.ssrMode) {
                                var t = this.pollingInfo,
                                    n = this.options.pollInterval;
                                if (n) {
                                    if (!t || t.interval !== n) {
                                        __DEV__ ? (0, i.kG)(n, "Attempted to start a polling query without a polling interval.") : (0, i.kG)(n, 10), ((t || (this.pollingInfo = {})).interval = n);
                                        var r = function () {
                                                e.pollingInfo && ((0, It.O)(e.queryInfo.networkStatus) ? o() : e.reobserve({ fetchPolicy: "network-only" }, It.I.poll).then(o, o));
                                            },
                                            o = function () {
                                                var t = e.pollingInfo;
                                                t && (clearTimeout(t.timeout), (t.timeout = setTimeout(r, t.interval)));
                                            };
                                        o();
                                    }
                                } else t && (clearTimeout(t.timeout), delete this.pollingInfo);
                            }
                        }),
                        (t.prototype.updateLastResult = function (e, t) {
                            return (
                                void 0 === t && (t = this.variables),
                                (this.last = (0, u.pi)((0, u.pi)({}, this.last), { result: this.queryManager.assumeImmutableResults ? e : Nt(e), variables: t })),
                                (0, xt.O)(e.errors) || delete this.last.error,
                                this.last
                            );
                        }),
                        (t.prototype.reobserve = function (e, t) {
                            var n = this;
                            this.isTornDown = !1;
                            var r = t === It.I.refetch || t === It.I.fetchMore || t === It.I.poll,
                                i = this.options.variables,
                                o = this.options.fetchPolicy,
                                a = (0, Be.o)(this.options, e || {}),
                                s = r ? a : Rt(this.options, a);
                            r ||
                                (this.updatePolling(),
                                e && e.variables && !(0, Re.D)(e.variables, i) && "standby" !== s.fetchPolicy && s.fetchPolicy === o && (this.applyNextFetchPolicy("variables-changed", s), void 0 === t && (t = It.I.setVariables)));
                            var c = s.variables && (0, u.pi)({}, s.variables),
                                l = this.fetch(s, t),
                                f = {
                                    next: function (e) {
                                        n.reportResult(e, c);
                                    },
                                    error: function (e) {
                                        n.reportError(e, c);
                                    },
                                };
                            return r || (this.concast && this.observer && this.concast.removeObserver(this.observer), (this.concast = l), (this.observer = f)), l.addObserver(f), l.promise;
                        }),
                        (t.prototype.observe = function () {
                            this.reportResult(this.getCurrentResult(!1), this.variables);
                        }),
                        (t.prototype.reportResult = function (e, t) {
                            var n = this.getLastError();
                            (n || this.isDifferentFromLastResult(e)) && ((n || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), Et(this.observers, "next", e));
                        }),
                        (t.prototype.reportError = function (e, t) {
                            var n = (0, u.pi)((0, u.pi)({}, this.getLastResult()), { error: e, errors: e.graphQLErrors, networkStatus: It.I.error, loading: !1 });
                            this.updateLastResult(n, t), Et(this.observers, "error", (this.last.error = e));
                        }),
                        (t.prototype.hasObservers = function () {
                            return this.observers.size > 0;
                        }),
                        (t.prototype.tearDownQuery = function () {
                            this.isTornDown ||
                                (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer),
                                this.stopPolling(),
                                this.subscriptions.forEach(function (e) {
                                    return e.unsubscribe();
                                }),
                                this.subscriptions.clear(),
                                this.queryManager.stopQuery(this.queryId),
                                this.observers.clear(),
                                (this.isTornDown = !0));
                        }),
                        t
                    );
                })(A);
            function Ft(e) {
                var t = e.options,
                    n = t.fetchPolicy,
                    r = t.nextFetchPolicy;
                return "cache-and-network" === n || "network-only" === n
                    ? e.reobserve({
                          fetchPolicy: "cache-first",
                          nextFetchPolicy: function () {
                              return (this.nextFetchPolicy = r), "function" === typeof r ? r.apply(this, arguments) : n;
                          },
                      })
                    : e.reobserve();
            }
            function Mt(e) {
                __DEV__ && i.kG.error("Unhandled error", e.message, e.stack);
            }
            function Lt(e) {
                __DEV__ && e && __DEV__ && i.kG.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e);
            }
            Dt(qt);
            var Qt = null,
                Bt = {},
                Gt = 1,
                Ut = "@wry/context:Slot",
                zt = Array,
                Wt =
                    zt[Ut] ||
                    (function () {
                        var e = (function () {
                            function e() {
                                this.id = ["slot", Gt++, Date.now(), Math.random().toString(36).slice(2)].join(":");
                            }
                            return (
                                (e.prototype.hasValue = function () {
                                    for (var e = Qt; e; e = e.parent)
                                        if (this.id in e.slots) {
                                            var t = e.slots[this.id];
                                            if (t === Bt) break;
                                            return e !== Qt && (Qt.slots[this.id] = t), !0;
                                        }
                                    return Qt && (Qt.slots[this.id] = Bt), !1;
                                }),
                                (e.prototype.getValue = function () {
                                    if (this.hasValue()) return Qt.slots[this.id];
                                }),
                                (e.prototype.withValue = function (e, t, n, r) {
                                    var i,
                                        o = (((i = { __proto__: null })[this.id] = e), i),
                                        a = Qt;
                                    Qt = { parent: a, slots: o };
                                    try {
                                        return t.apply(r, n);
                                    } finally {
                                        Qt = a;
                                    }
                                }),
                                (e.bind = function (e) {
                                    var t = Qt;
                                    return function () {
                                        var n = Qt;
                                        try {
                                            return (Qt = t), e.apply(this, arguments);
                                        } finally {
                                            Qt = n;
                                        }
                                    };
                                }),
                                (e.noContext = function (e, t, n) {
                                    if (!Qt) return e.apply(n, t);
                                    var r = Qt;
                                    try {
                                        return (Qt = null), e.apply(n, t);
                                    } finally {
                                        Qt = r;
                                    }
                                }),
                                e
                            );
                        })();
                        try {
                            Object.defineProperty(zt, Ut, { value: (zt[Ut] = e), enumerable: !1, writable: !1, configurable: !1 });
                        } finally {
                            return e;
                        }
                    })();
            Wt.bind, Wt.noContext;
            function Kt() {}
            var Jt,
                Yt = (function () {
                    function e(e, t) {
                        void 0 === e && (e = 1 / 0), void 0 === t && (t = Kt), (this.max = e), (this.dispose = t), (this.map = new Map()), (this.newest = null), (this.oldest = null);
                    }
                    return (
                        (e.prototype.has = function (e) {
                            return this.map.has(e);
                        }),
                        (e.prototype.get = function (e) {
                            var t = this.getNode(e);
                            return t && t.value;
                        }),
                        (e.prototype.getNode = function (e) {
                            var t = this.map.get(e);
                            if (t && t !== this.newest) {
                                var n = t.older,
                                    r = t.newer;
                                r && (r.older = n), n && (n.newer = r), (t.older = this.newest), (t.older.newer = t), (t.newer = null), (this.newest = t), t === this.oldest && (this.oldest = r);
                            }
                            return t;
                        }),
                        (e.prototype.set = function (e, t) {
                            var n = this.getNode(e);
                            return n ? (n.value = t) : ((n = { key: e, value: t, newer: null, older: this.newest }), this.newest && (this.newest.newer = n), (this.newest = n), (this.oldest = this.oldest || n), this.map.set(e, n), n.value);
                        }),
                        (e.prototype.clean = function () {
                            for (; this.oldest && this.map.size > this.max; ) this.delete(this.oldest.key);
                        }),
                        (e.prototype.delete = function (e) {
                            var t = this.map.get(e);
                            return (
                                !!t &&
                                (t === this.newest && (this.newest = t.older),
                                t === this.oldest && (this.oldest = t.newer),
                                t.newer && (t.newer.older = t.older),
                                t.older && (t.older.newer = t.newer),
                                this.map.delete(e),
                                this.dispose(t.value, e),
                                !0)
                            );
                        }),
                        e
                    );
                })(),
                Ht = new Wt(),
                Xt = Object.prototype.hasOwnProperty,
                $t =
                    void 0 === (Jt = Array.from)
                        ? function (e) {
                              var t = [];
                              return (
                                  e.forEach(function (e) {
                                      return t.push(e);
                                  }),
                                  t
                              );
                          }
                        : Jt;
            function Zt(e) {
                var t = e.unsubscribe;
                "function" === typeof t && ((e.unsubscribe = void 0), t());
            }
            var en = [];
            function tn(e, t) {
                if (!e) throw new Error(t || "assertion failure");
            }
            function nn(e) {
                switch (e.length) {
                    case 0:
                        throw new Error("unknown value");
                    case 1:
                        return e[0];
                    case 2:
                        throw e[1];
                }
            }
            var rn = (function () {
                function e(t) {
                    (this.fn = t), (this.parents = new Set()), (this.childValues = new Map()), (this.dirtyChildren = null), (this.dirty = !0), (this.recomputing = !1), (this.value = []), (this.deps = null), ++e.count;
                }
                return (
                    (e.prototype.peek = function () {
                        if (1 === this.value.length && !sn(this)) return on(this), this.value[0];
                    }),
                    (e.prototype.recompute = function (e) {
                        return (
                            tn(!this.recomputing, "already recomputing"),
                            on(this),
                            sn(this)
                                ? (function (e, t) {
                                      dn(e),
                                          Ht.withValue(e, an, [e, t]),
                                          (function (e, t) {
                                              if ("function" === typeof e.subscribe)
                                                  try {
                                                      Zt(e), (e.unsubscribe = e.subscribe.apply(null, t));
                                                  } catch (n) {
                                                      return e.setDirty(), !1;
                                                  }
                                              return !0;
                                          })(e, t) &&
                                              (function (e) {
                                                  if (((e.dirty = !1), sn(e))) return;
                                                  cn(e);
                                              })(e);
                                      return nn(e.value);
                                  })(this, e)
                                : nn(this.value)
                        );
                    }),
                    (e.prototype.setDirty = function () {
                        this.dirty || ((this.dirty = !0), (this.value.length = 0), un(this), Zt(this));
                    }),
                    (e.prototype.dispose = function () {
                        var e = this;
                        this.setDirty(),
                            dn(this),
                            ln(this, function (t, n) {
                                t.setDirty(), vn(t, e);
                            });
                    }),
                    (e.prototype.forget = function () {
                        this.dispose();
                    }),
                    (e.prototype.dependOn = function (e) {
                        e.add(this), this.deps || (this.deps = en.pop() || new Set()), this.deps.add(e);
                    }),
                    (e.prototype.forgetDeps = function () {
                        var e = this;
                        this.deps &&
                            ($t(this.deps).forEach(function (t) {
                                return t.delete(e);
                            }),
                            this.deps.clear(),
                            en.push(this.deps),
                            (this.deps = null));
                    }),
                    (e.count = 0),
                    e
                );
            })();
            function on(e) {
                var t = Ht.getValue();
                if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), sn(e) ? fn(t, e) : hn(t, e), t;
            }
            function an(e, t) {
                (e.recomputing = !0), (e.value.length = 0);
                try {
                    e.value[0] = e.fn.apply(null, t);
                } catch (n) {
                    e.value[1] = n;
                }
                e.recomputing = !1;
            }
            function sn(e) {
                return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size);
            }
            function un(e) {
                ln(e, fn);
            }
            function cn(e) {
                ln(e, hn);
            }
            function ln(e, t) {
                var n = e.parents.size;
                if (n) for (var r = $t(e.parents), i = 0; i < n; ++i) t(r[i], e);
            }
            function fn(e, t) {
                tn(e.childValues.has(t)), tn(sn(t));
                var n = !sn(e);
                if (e.dirtyChildren) {
                    if (e.dirtyChildren.has(t)) return;
                } else e.dirtyChildren = en.pop() || new Set();
                e.dirtyChildren.add(t), n && un(e);
            }
            function hn(e, t) {
                tn(e.childValues.has(t)), tn(!sn(t));
                var n = e.childValues.get(t);
                0 === n.length
                    ? e.childValues.set(t, t.value.slice(0))
                    : (function (e, t) {
                          var n = e.length;
                          return n > 0 && n === t.length && e[n - 1] === t[n - 1];
                      })(n, t.value) || e.setDirty(),
                    pn(e, t),
                    sn(e) || cn(e);
            }
            function pn(e, t) {
                var n = e.dirtyChildren;
                n && (n.delete(t), 0 === n.size && (en.length < 100 && en.push(n), (e.dirtyChildren = null)));
            }
            function dn(e) {
                e.childValues.size > 0 &&
                    e.childValues.forEach(function (t, n) {
                        vn(e, n);
                    }),
                    e.forgetDeps(),
                    tn(null === e.dirtyChildren);
            }
            function vn(e, t) {
                t.parents.delete(e), e.childValues.delete(t), pn(e, t);
            }
            var yn = { setDirty: !0, dispose: !0, forget: !0 };
            function mn(e) {
                var t = new Map(),
                    n = e && e.subscribe;
                function r(e) {
                    var r = Ht.getValue();
                    if (r) {
                        var i = t.get(e);
                        i || t.set(e, (i = new Set())), r.dependOn(i), "function" === typeof n && (Zt(i), (i.unsubscribe = n(e)));
                    }
                }
                return (
                    (r.dirty = function (e, n) {
                        var r = t.get(e);
                        if (r) {
                            var i = n && Xt.call(yn, n) ? n : "setDirty";
                            $t(r).forEach(function (e) {
                                return e[i]();
                            }),
                                t.delete(e),
                                Zt(r);
                        }
                    }),
                    r
                );
            }
            function bn() {
                var e = new Le("function" === typeof WeakMap);
                return function () {
                    return e.lookupArray(arguments);
                };
            }
            bn();
            var gn = new Set();
            function _n(e, t) {
                void 0 === t && (t = Object.create(null));
                var n = new Yt(t.max || Math.pow(2, 16), function (e) {
                        return e.dispose();
                    }),
                    r = t.keyArgs,
                    i = t.makeCacheKey || bn(),
                    o = function () {
                        var o = i.apply(null, r ? r.apply(null, arguments) : arguments);
                        if (void 0 === o) return e.apply(null, arguments);
                        var a = n.get(o);
                        a ||
                            (n.set(o, (a = new rn(e))),
                            (a.subscribe = t.subscribe),
                            (a.forget = function () {
                                return n.delete(o);
                            }));
                        var s = a.recompute(Array.prototype.slice.call(arguments));
                        return (
                            n.set(o, a),
                            gn.add(n),
                            Ht.hasValue() ||
                                (gn.forEach(function (e) {
                                    return e.clean();
                                }),
                                gn.clear()),
                            s
                        );
                    };
                function a(e) {
                    var t = n.get(e);
                    t && t.setDirty();
                }
                function s(e) {
                    var t = n.get(e);
                    if (t) return t.peek();
                }
                function u(e) {
                    return n.delete(e);
                }
                return (
                    Object.defineProperty(o, "size", {
                        get: function () {
                            return n.map.size;
                        },
                        configurable: !1,
                        enumerable: !1,
                    }),
                    (o.dirtyKey = a),
                    (o.dirty = function () {
                        a(i.apply(null, arguments));
                    }),
                    (o.peekKey = s),
                    (o.peek = function () {
                        return s(i.apply(null, arguments));
                    }),
                    (o.forgetKey = u),
                    (o.forget = function () {
                        return u(i.apply(null, arguments));
                    }),
                    (o.makeCacheKey = i),
                    (o.getKey = r
                        ? function () {
                              return i.apply(null, r.apply(null, arguments));
                          }
                        : i),
                    Object.freeze(o)
                );
            }
            var wn = new Wt(),
                On = new WeakMap();
            function Sn(e) {
                var t = On.get(e);
                return t || On.set(e, (t = { vars: new Set(), dep: mn() })), t;
            }
            function kn(e) {
                Sn(e).vars.forEach(function (t) {
                    return t.forgetCache(e);
                });
            }
            function En(e) {
                var t = new Set(),
                    n = new Set(),
                    r = function (o) {
                        if (arguments.length > 0) {
                            if (e !== o) {
                                (e = o),
                                    t.forEach(function (e) {
                                        Sn(e).dep.dirty(r), Dn(e);
                                    });
                                var a = Array.from(n);
                                n.clear(),
                                    a.forEach(function (t) {
                                        return t(e);
                                    });
                            }
                        } else {
                            var s = wn.getValue();
                            s && (i(s), Sn(s).dep(r));
                        }
                        return e;
                    };
                r.onNextChange = function (e) {
                    return (
                        n.add(e),
                        function () {
                            n.delete(e);
                        }
                    );
                };
                var i = (r.attachCache = function (e) {
                    return t.add(e), Sn(e).vars.add(r), r;
                });
                return (
                    (r.forgetCache = function (e) {
                        return t.delete(e);
                    }),
                    r
                );
            }
            function Dn(e) {
                e.broadcastWatches && e.broadcastWatches();
            }
            var Tn = (function () {
                    function e(e) {
                        var t = e.cache,
                            n = e.client,
                            r = e.resolvers,
                            i = e.fragmentMatcher;
                        (this.cache = t), n && (this.client = n), r && this.addResolvers(r), i && this.setFragmentMatcher(i);
                    }
                    return (
                        (e.prototype.addResolvers = function (e) {
                            var t = this;
                            (this.resolvers = this.resolvers || {}),
                                Array.isArray(e)
                                    ? e.forEach(function (e) {
                                          t.resolvers = Ke(t.resolvers, e);
                                      })
                                    : (this.resolvers = Ke(this.resolvers, e));
                        }),
                        (e.prototype.setResolvers = function (e) {
                            (this.resolvers = {}), this.addResolvers(e);
                        }),
                        (e.prototype.getResolvers = function () {
                            return this.resolvers || {};
                        }),
                        (e.prototype.runResolvers = function (e) {
                            var t = e.document,
                                n = e.remoteResult,
                                r = e.context,
                                i = e.variables,
                                o = e.onlyRunForcedResolvers,
                                a = void 0 !== o && o;
                            return (0, u.mG)(this, void 0, void 0, function () {
                                return (0, u.Jh)(this, function (e) {
                                    return t
                                        ? [
                                              2,
                                              this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, a).then(function (e) {
                                                  return (0, u.pi)((0, u.pi)({}, n), { data: e.result });
                                              }),
                                          ]
                                        : [2, n];
                                });
                            });
                        }),
                        (e.prototype.setFragmentMatcher = function (e) {
                            this.fragmentMatcher = e;
                        }),
                        (e.prototype.getFragmentMatcher = function () {
                            return this.fragmentMatcher;
                        }),
                        (e.prototype.clientQuery = function (e) {
                            return Ue(["client"], e) && this.resolvers ? e : null;
                        }),
                        (e.prototype.serverQuery = function (e) {
                            return (function (e) {
                                K(e);
                                var t = bt(
                                    [
                                        {
                                            test: function (e) {
                                                return "client" === e.name.value;
                                            },
                                            remove: !0,
                                        },
                                    ],
                                    e
                                );
                                return (
                                    t &&
                                        (t = fe(t, {
                                            FragmentDefinition: {
                                                enter: function (e) {
                                                    if (
                                                        e.selectionSet &&
                                                        e.selectionSet.selections.every(function (e) {
                                                            return z(e) && "__typename" === e.name.value;
                                                        })
                                                    )
                                                        return null;
                                                },
                                            },
                                        })),
                                    t
                                );
                            })(e);
                        }),
                        (e.prototype.prepareContext = function (e) {
                            var t = this.cache;
                            return (0, u.pi)((0, u.pi)({}, e), {
                                cache: t,
                                getCacheKey: function (e) {
                                    return t.identify(e);
                                },
                            });
                        }),
                        (e.prototype.addExportedVariables = function (e, t, n) {
                            return (
                                void 0 === t && (t = {}),
                                void 0 === n && (n = {}),
                                (0, u.mG)(this, void 0, void 0, function () {
                                    return (0, u.Jh)(this, function (r) {
                                        return e
                                            ? [
                                                  2,
                                                  this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(function (e) {
                                                      return (0, u.pi)((0, u.pi)({}, t), e.exportedVariables);
                                                  }),
                                              ]
                                            : [2, (0, u.pi)({}, t)];
                                    });
                                })
                            );
                        }),
                        (e.prototype.shouldForceResolvers = function (e) {
                            var t = !1;
                            return (
                                fe(e, {
                                    Directive: {
                                        enter: function (e) {
                                            if (
                                                "client" === e.name.value &&
                                                e.arguments &&
                                                (t = e.arguments.some(function (e) {
                                                    return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value;
                                                }))
                                            )
                                                return le;
                                        },
                                    },
                                }),
                                t
                            );
                        }),
                        (e.prototype.buildRootValueFromCache = function (e, t) {
                            return this.cache.diff({ query: Ot(e), variables: t, returnPartialData: !0, optimistic: !1 }).result;
                        }),
                        (e.prototype.resolveDocument = function (e, t, n, r, i, o) {
                            return (
                                void 0 === n && (n = {}),
                                void 0 === r && (r = {}),
                                void 0 === i &&
                                    (i = function () {
                                        return !0;
                                    }),
                                void 0 === o && (o = !1),
                                (0, u.mG)(this, void 0, void 0, function () {
                                    var a, s, c, l, f, h, p, d, v;
                                    return (0, u.Jh)(this, function (y) {
                                        return (
                                            (a = $(e)),
                                            (s = H(e)),
                                            (c = N(s)),
                                            (l = a.operation),
                                            (f = l ? l.charAt(0).toUpperCase() + l.slice(1) : "Query"),
                                            (p = (h = this).cache),
                                            (d = h.client),
                                            (v = {
                                                fragmentMap: c,
                                                context: (0, u.pi)((0, u.pi)({}, n), { cache: p, client: d }),
                                                variables: r,
                                                fragmentMatcher: i,
                                                defaultOperationType: f,
                                                exportedVariables: {},
                                                onlyRunForcedResolvers: o,
                                            }),
                                            [
                                                2,
                                                this.resolveSelectionSet(a.selectionSet, t, v).then(function (e) {
                                                    return { result: e, exportedVariables: v.exportedVariables };
                                                }),
                                            ]
                                        );
                                    });
                                })
                            );
                        }),
                        (e.prototype.resolveSelectionSet = function (e, t, n) {
                            return (0, u.mG)(this, void 0, void 0, function () {
                                var r,
                                    o,
                                    a,
                                    s,
                                    c,
                                    l = this;
                                return (0, u.Jh)(this, function (f) {
                                    return (
                                        (r = n.fragmentMap),
                                        (o = n.context),
                                        (a = n.variables),
                                        (s = [t]),
                                        (c = function (e) {
                                            return (0, u.mG)(l, void 0, void 0, function () {
                                                var c, l;
                                                return (0, u.Jh)(this, function (u) {
                                                    return Ge(e, a)
                                                        ? z(e)
                                                            ? [
                                                                  2,
                                                                  this.resolveField(e, t, n).then(function (t) {
                                                                      var n;
                                                                      "undefined" !== typeof t && s.push((((n = {})[G(e)] = t), n));
                                                                  }),
                                                              ]
                                                            : (W(e) ? (c = e) : ((c = r[e.name.value]), __DEV__ ? (0, i.kG)(c, "No fragment named ".concat(e.name.value)) : (0, i.kG)(c, 9)),
                                                              c && c.typeCondition && ((l = c.typeCondition.name.value), n.fragmentMatcher(t, l, o))
                                                                  ? [
                                                                        2,
                                                                        this.resolveSelectionSet(c.selectionSet, t, n).then(function (e) {
                                                                            s.push(e);
                                                                        }),
                                                                    ]
                                                                  : [2])
                                                        : [2];
                                                });
                                            });
                                        }),
                                        [
                                            2,
                                            Promise.all(e.selections.map(c)).then(function () {
                                                return Je(s);
                                            }),
                                        ]
                                    );
                                });
                            });
                        }),
                        (e.prototype.resolveField = function (e, t, n) {
                            return (0, u.mG)(this, void 0, void 0, function () {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s,
                                    c,
                                    l,
                                    f,
                                    h,
                                    p = this;
                                return (0, u.Jh)(this, function (u) {
                                    return (
                                        (r = n.variables),
                                        (i = e.name.value),
                                        (o = G(e)),
                                        (a = i !== o),
                                        (s = t[o] || t[i]),
                                        (c = Promise.resolve(s)),
                                        (n.onlyRunForcedResolvers && !this.shouldForceResolvers(e)) ||
                                            ((l = t.__typename || n.defaultOperationType),
                                            (f = this.resolvers && this.resolvers[l]) && (h = f[a ? i : o]) && (c = Promise.resolve(wn.withValue(this.cache, h, [t, B(e, r), n.context, { field: e, fragmentMap: n.fragmentMap }])))),
                                        [
                                            2,
                                            c.then(function (t) {
                                                return (
                                                    void 0 === t && (t = s),
                                                    e.directives &&
                                                        e.directives.forEach(function (e) {
                                                            "export" === e.name.value &&
                                                                e.arguments &&
                                                                e.arguments.forEach(function (e) {
                                                                    "as" === e.name.value && "StringValue" === e.value.kind && (n.exportedVariables[e.value.value] = t);
                                                                });
                                                        }),
                                                    e.selectionSet ? (null == t ? t : Array.isArray(t) ? p.resolveSubSelectedArray(e, t, n) : e.selectionSet ? p.resolveSelectionSet(e.selectionSet, t, n) : void 0) : t
                                                );
                                            }),
                                        ]
                                    );
                                });
                            });
                        }),
                        (e.prototype.resolveSubSelectedArray = function (e, t, n) {
                            var r = this;
                            return Promise.all(
                                t.map(function (t) {
                                    return null === t ? null : Array.isArray(t) ? r.resolveSubSelectedArray(e, t, n) : e.selectionSet ? r.resolveSelectionSet(e.selectionSet, t, n) : void 0;
                                })
                            );
                        }),
                        e
                    );
                })(),
                jn = new (Qe.mr ? WeakMap : Map)();
            function xn(e, t) {
                var n = e[t];
                "function" === typeof n &&
                    (e[t] = function () {
                        return jn.set(e, (jn.get(e) + 1) % 1e15), n.apply(this, arguments);
                    });
            }
            function An(e) {
                e.notifyTimeout && (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
            }
            var In = (function () {
                function e(e, t) {
                    void 0 === t && (t = e.generateQueryId()),
                        (this.queryId = t),
                        (this.listeners = new Set()),
                        (this.document = null),
                        (this.lastRequestId = 1),
                        (this.subscriptions = new Set()),
                        (this.stopped = !1),
                        (this.dirty = !1),
                        (this.observableQuery = null);
                    var n = (this.cache = e.cache);
                    jn.has(n) || (jn.set(n, 0), xn(n, "evict"), xn(n, "modify"), xn(n, "reset"));
                }
                return (
                    (e.prototype.init = function (e) {
                        var t = e.networkStatus || It.I.loading;
                        return (
                            this.variables && this.networkStatus !== It.I.loading && !(0, Re.D)(this.variables, e.variables) && (t = It.I.setVariables),
                            (0, Re.D)(e.variables, this.variables) || (this.lastDiff = void 0),
                            Object.assign(this, { document: e.document, variables: e.variables, networkError: null, graphQLErrors: this.graphQLErrors || [], networkStatus: t }),
                            e.observableQuery && this.setObservableQuery(e.observableQuery),
                            e.lastRequestId && (this.lastRequestId = e.lastRequestId),
                            this
                        );
                    }),
                    (e.prototype.reset = function () {
                        An(this), (this.lastDiff = void 0), (this.dirty = !1);
                    }),
                    (e.prototype.getDiff = function (e) {
                        void 0 === e && (e = this.variables);
                        var t = this.getDiffOptions(e);
                        if (this.lastDiff && (0, Re.D)(t, this.lastDiff.options)) return this.lastDiff.diff;
                        this.updateWatch((this.variables = e));
                        var n = this.observableQuery;
                        if (n && "no-cache" === n.options.fetchPolicy) return { complete: !1 };
                        var r = this.cache.diff(t);
                        return this.updateLastDiff(r, t), r;
                    }),
                    (e.prototype.updateLastDiff = function (e, t) {
                        this.lastDiff = e ? { diff: e, options: t || this.getDiffOptions() } : void 0;
                    }),
                    (e.prototype.getDiffOptions = function (e) {
                        var t;
                        return (
                            void 0 === e && (e = this.variables),
                            { query: this.document, variables: e, returnPartialData: !0, optimistic: !0, canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults }
                        );
                    }),
                    (e.prototype.setDiff = function (e) {
                        var t = this,
                            n = this.lastDiff && this.lastDiff.diff;
                        this.updateLastDiff(e),
                            this.dirty ||
                                (0, Re.D)(n && n.result, e && e.result) ||
                                ((this.dirty = !0),
                                this.notifyTimeout ||
                                    (this.notifyTimeout = setTimeout(function () {
                                        return t.notify();
                                    }, 0)));
                    }),
                    (e.prototype.setObservableQuery = function (e) {
                        var t = this;
                        e !== this.observableQuery &&
                            (this.oqListener && this.listeners.delete(this.oqListener),
                            (this.observableQuery = e),
                            e
                                ? ((e.queryInfo = this),
                                  this.listeners.add(
                                      (this.oqListener = function () {
                                          t.getDiff().fromOptimisticTransaction ? e.observe() : Ft(e);
                                      })
                                  ))
                                : delete this.oqListener);
                    }),
                    (e.prototype.notify = function () {
                        var e = this;
                        An(this),
                            this.shouldNotify() &&
                                this.listeners.forEach(function (t) {
                                    return t(e);
                                }),
                            (this.dirty = !1);
                    }),
                    (e.prototype.shouldNotify = function () {
                        if (!this.dirty || !this.listeners.size) return !1;
                        if ((0, It.O)(this.networkStatus) && this.observableQuery) {
                            var e = this.observableQuery.options.fetchPolicy;
                            if ("cache-only" !== e && "cache-and-network" !== e) return !1;
                        }
                        return !0;
                    }),
                    (e.prototype.stop = function () {
                        if (!this.stopped) {
                            (this.stopped = !0),
                                this.reset(),
                                this.cancel(),
                                (this.cancel = e.prototype.cancel),
                                this.subscriptions.forEach(function (e) {
                                    return e.unsubscribe();
                                });
                            var t = this.observableQuery;
                            t && t.stopPolling();
                        }
                    }),
                    (e.prototype.cancel = function () {}),
                    (e.prototype.updateWatch = function (e) {
                        var t = this;
                        void 0 === e && (e = this.variables);
                        var n = this.observableQuery;
                        if (!n || "no-cache" !== n.options.fetchPolicy) {
                            var r = (0, u.pi)((0, u.pi)({}, this.getDiffOptions(e)), {
                                watcher: this,
                                callback: function (e) {
                                    return t.setDiff(e);
                                },
                            });
                            (this.lastWatch && (0, Re.D)(r, this.lastWatch)) || (this.cancel(), (this.cancel = this.cache.watch((this.lastWatch = r))));
                        }
                    }),
                    (e.prototype.resetLastWrite = function () {
                        this.lastWrite = void 0;
                    }),
                    (e.prototype.shouldWrite = function (e, t) {
                        var n = this.lastWrite;
                        return !(n && n.dmCount === jn.get(this.cache) && (0, Re.D)(t, n.variables) && (0, Re.D)(e.data, n.result.data));
                    }),
                    (e.prototype.markResult = function (e, t, n) {
                        var r = this;
                        (this.graphQLErrors = (0, xt.O)(e.errors) ? e.errors : []),
                            this.reset(),
                            "no-cache" === t.fetchPolicy
                                ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(t.variables))
                                : 0 !== n &&
                                  (Pn(e, t.errorPolicy)
                                      ? this.cache.performTransaction(function (i) {
                                            if (r.shouldWrite(e, t.variables))
                                                i.writeQuery({ query: r.document, data: e.data, variables: t.variables, overwrite: 1 === n }), (r.lastWrite = { result: e, variables: t.variables, dmCount: jn.get(r.cache) });
                                            else if (r.lastDiff && r.lastDiff.diff.complete) return void (e.data = r.lastDiff.diff.result);
                                            var o = r.getDiffOptions(t.variables),
                                                a = i.diff(o);
                                            r.stopped || r.updateWatch(t.variables), r.updateLastDiff(a, o), a.complete && (e.data = a.result);
                                        })
                                      : (this.lastWrite = void 0));
                    }),
                    (e.prototype.markReady = function () {
                        return (this.networkError = null), (this.networkStatus = It.I.ready);
                    }),
                    (e.prototype.markError = function (e) {
                        return (this.networkStatus = It.I.error), (this.lastWrite = void 0), this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
                    }),
                    e
                );
            })();
            function Pn(e, t) {
                void 0 === t && (t = "none");
                var n = "ignore" === t || "all" === t,
                    r = !ht(e);
                return !r && n && e.data && (r = !0), r;
            }
            var Nn = Object.prototype.hasOwnProperty,
                Vn = (function () {
                    function e(e) {
                        var t = e.cache,
                            n = e.link,
                            r = e.defaultOptions,
                            i = e.queryDeduplication,
                            o = void 0 !== i && i,
                            a = e.onBroadcast,
                            s = e.ssrMode,
                            u = void 0 !== s && s,
                            c = e.clientAwareness,
                            l = void 0 === c ? {} : c,
                            f = e.localState,
                            h = e.assumeImmutableResults;
                        (this.clientAwareness = {}),
                            (this.queries = new Map()),
                            (this.fetchCancelFns = new Map()),
                            (this.transformCache = new (Qe.mr ? WeakMap : Map)()),
                            (this.queryIdCounter = 1),
                            (this.requestIdCounter = 1),
                            (this.mutationIdCounter = 1),
                            (this.inFlightLinkObservables = new Map()),
                            (this.cache = t),
                            (this.link = n),
                            (this.defaultOptions = r || Object.create(null)),
                            (this.queryDeduplication = o),
                            (this.clientAwareness = l),
                            (this.localState = f || new Tn({ cache: t })),
                            (this.ssrMode = u),
                            (this.assumeImmutableResults = !!h),
                            (this.onBroadcast = a) && (this.mutationStore = Object.create(null));
                    }
                    return (
                        (e.prototype.stop = function () {
                            var e = this;
                            this.queries.forEach(function (t, n) {
                                e.stopQueryNoBroadcast(n);
                            }),
                                this.cancelPendingFetches(__DEV__ ? new i.ej("QueryManager stopped while query was in flight") : new i.ej(11));
                        }),
                        (e.prototype.cancelPendingFetches = function (e) {
                            this.fetchCancelFns.forEach(function (t) {
                                return t(e);
                            }),
                                this.fetchCancelFns.clear();
                        }),
                        (e.prototype.mutate = function (e) {
                            var t,
                                n,
                                r = e.mutation,
                                o = e.variables,
                                a = e.optimisticResponse,
                                s = e.updateQueries,
                                c = e.refetchQueries,
                                l = void 0 === c ? [] : c,
                                f = e.awaitRefetchQueries,
                                h = void 0 !== f && f,
                                p = e.update,
                                d = e.onQueryUpdated,
                                v = e.fetchPolicy,
                                y = void 0 === v ? (null === (t = this.defaultOptions.mutate) || void 0 === t ? void 0 : t.fetchPolicy) || "network-only" : v,
                                m = e.errorPolicy,
                                b = void 0 === m ? (null === (n = this.defaultOptions.mutate) || void 0 === n ? void 0 : n.errorPolicy) || "none" : m,
                                g = e.keepRootFields,
                                _ = e.context;
                            return (0, u.mG)(this, void 0, void 0, function () {
                                var e, t, n;
                                return (0, u.Jh)(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            return (
                                                __DEV__ ? (0, i.kG)(r, "mutation option is required. You must specify your GraphQL document in the mutation option.") : (0, i.kG)(r, 12),
                                                __DEV__
                                                    ? (0, i.kG)(
                                                          "network-only" === y || "no-cache" === y,
                                                          "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."
                                                      )
                                                    : (0, i.kG)("network-only" === y || "no-cache" === y, 13),
                                                (e = this.generateMutationId()),
                                                (r = this.transform(r).document),
                                                (o = this.getVariables(r, o)),
                                                this.transform(r).hasClientExports ? [4, this.localState.addExportedVariables(r, o, _)] : [3, 2]
                                            );
                                        case 1:
                                            (o = c.sent()), (c.label = 2);
                                        case 2:
                                            return (
                                                (t = this.mutationStore && (this.mutationStore[e] = { mutation: r, variables: o, loading: !0, error: null })),
                                                a && this.markMutationOptimistic(a, { mutationId: e, document: r, variables: o, fetchPolicy: y, errorPolicy: b, context: _, updateQueries: s, update: p, keepRootFields: g }),
                                                this.broadcastQueries(),
                                                (n = this),
                                                [
                                                    2,
                                                    new Promise(function (i, c) {
                                                        return ft(n.getObservableFromLink(r, (0, u.pi)((0, u.pi)({}, _), { optimisticResponse: a }), o, !1), function (i) {
                                                            if (ht(i) && "none" === b) throw new At.c({ graphQLErrors: i.errors });
                                                            t && ((t.loading = !1), (t.error = null));
                                                            var c = (0, u.pi)({}, i);
                                                            return (
                                                                "function" === typeof l && (l = l(c)),
                                                                "ignore" === b && ht(c) && delete c.errors,
                                                                n.markMutationResult({
                                                                    mutationId: e,
                                                                    result: c,
                                                                    document: r,
                                                                    variables: o,
                                                                    fetchPolicy: y,
                                                                    errorPolicy: b,
                                                                    context: _,
                                                                    update: p,
                                                                    updateQueries: s,
                                                                    awaitRefetchQueries: h,
                                                                    refetchQueries: l,
                                                                    removeOptimistic: a ? e : void 0,
                                                                    onQueryUpdated: d,
                                                                    keepRootFields: g,
                                                                })
                                                            );
                                                        }).subscribe({
                                                            next: function (e) {
                                                                n.broadcastQueries(), i(e);
                                                            },
                                                            error: function (r) {
                                                                t && ((t.loading = !1), (t.error = r)), a && n.cache.removeOptimistic(e), n.broadcastQueries(), c(r instanceof At.c ? r : new At.c({ networkError: r }));
                                                            },
                                                        });
                                                    }),
                                                ]
                                            );
                                    }
                                });
                            });
                        }),
                        (e.prototype.markMutationResult = function (e, t) {
                            var n = this;
                            void 0 === t && (t = this.cache);
                            var r = e.result,
                                i = [],
                                o = "no-cache" === e.fetchPolicy;
                            if (!o && Pn(r, e.errorPolicy)) {
                                i.push({ result: r.data, dataId: "ROOT_MUTATION", query: e.document, variables: e.variables });
                                var a = e.updateQueries;
                                a &&
                                    this.queries.forEach(function (e, o) {
                                        var s = e.observableQuery,
                                            u = s && s.queryName;
                                        if (u && Nn.call(a, u)) {
                                            var c = a[u],
                                                l = n.queries.get(o),
                                                f = l.document,
                                                h = l.variables,
                                                p = t.diff({ query: f, variables: h, returnPartialData: !0, optimistic: !1 }),
                                                d = p.result;
                                            if (p.complete && d) {
                                                var v = c(d, { mutationResult: r, queryName: (f && Y(f)) || void 0, queryVariables: h });
                                                v && i.push({ result: v, dataId: "ROOT_QUERY", query: f, variables: h });
                                            }
                                        }
                                    });
                            }
                            if (i.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
                                var s = [];
                                if (
                                    (this.refetchQueries({
                                        updateCache: function (t) {
                                            o ||
                                                i.forEach(function (e) {
                                                    return t.write(e);
                                                });
                                            var a = e.update;
                                            if (a) {
                                                if (!o) {
                                                    var s = t.diff({ id: "ROOT_MUTATION", query: n.transform(e.document).asQuery, variables: e.variables, optimistic: !1, returnPartialData: !0 });
                                                    s.complete && (r = (0, u.pi)((0, u.pi)({}, r), { data: s.result }));
                                                }
                                                a(t, r, { context: e.context, variables: e.variables });
                                            }
                                            o ||
                                                e.keepRootFields ||
                                                t.modify({
                                                    id: "ROOT_MUTATION",
                                                    fields: function (e, t) {
                                                        var n = t.fieldName,
                                                            r = t.DELETE;
                                                        return "__typename" === n ? e : r;
                                                    },
                                                });
                                        },
                                        include: e.refetchQueries,
                                        optimistic: !1,
                                        removeOptimistic: e.removeOptimistic,
                                        onQueryUpdated: e.onQueryUpdated || null,
                                    }).forEach(function (e) {
                                        return s.push(e);
                                    }),
                                    e.awaitRefetchQueries || e.onQueryUpdated)
                                )
                                    return Promise.all(s).then(function () {
                                        return r;
                                    });
                            }
                            return Promise.resolve(r);
                        }),
                        (e.prototype.markMutationOptimistic = function (e, t) {
                            var n = this,
                                r = "function" === typeof e ? e(t.variables) : e;
                            return this.cache.recordOptimisticTransaction(function (e) {
                                try {
                                    n.markMutationResult((0, u.pi)((0, u.pi)({}, t), { result: { data: r } }), e);
                                } catch (o) {
                                    __DEV__ && i.kG.error(o);
                                }
                            }, t.mutationId);
                        }),
                        (e.prototype.fetchQuery = function (e, t, n) {
                            return this.fetchQueryObservable(e, t, n).promise;
                        }),
                        (e.prototype.getQueryStore = function () {
                            var e = Object.create(null);
                            return (
                                this.queries.forEach(function (t, n) {
                                    e[n] = { variables: t.variables, networkStatus: t.networkStatus, networkError: t.networkError, graphQLErrors: t.graphQLErrors };
                                }),
                                e
                            );
                        }),
                        (e.prototype.resetErrors = function (e) {
                            var t = this.queries.get(e);
                            t && ((t.networkError = void 0), (t.graphQLErrors = []));
                        }),
                        (e.prototype.transform = function (e) {
                            var t,
                                n = this.transformCache;
                            if (!n.has(e)) {
                                var r = this.cache.transformDocument(e),
                                    i = ((t = this.cache.transformForLink(r)), bt([_t], K(t))),
                                    o = this.localState.clientQuery(r),
                                    a = i && this.localState.serverQuery(i),
                                    s = {
                                        document: r,
                                        hasClientExports: ze(r),
                                        hasForcedResolvers: this.localState.shouldForceResolvers(r),
                                        clientQuery: o,
                                        serverQuery: a,
                                        defaultVars: Z(J(r)),
                                        asQuery: (0, u.pi)((0, u.pi)({}, r), {
                                            definitions: r.definitions.map(function (e) {
                                                return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, u.pi)((0, u.pi)({}, e), { operation: "query" }) : e;
                                            }),
                                        }),
                                    },
                                    c = function (e) {
                                        e && !n.has(e) && n.set(e, s);
                                    };
                                c(e), c(r), c(o), c(a);
                            }
                            return n.get(e);
                        }),
                        (e.prototype.getVariables = function (e, t) {
                            return (0, u.pi)((0, u.pi)({}, this.transform(e).defaultVars), t);
                        }),
                        (e.prototype.watchQuery = function (e) {
                            "undefined" === typeof (e = (0, u.pi)((0, u.pi)({}, e), { variables: this.getVariables(e.query, e.variables) })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
                            var t = new In(this),
                                n = new qt({ queryManager: this, queryInfo: t, options: e });
                            return this.queries.set(n.queryId, t), t.init({ document: n.query, observableQuery: n, variables: n.variables }), n;
                        }),
                        (e.prototype.query = function (e, t) {
                            var n = this;
                            return (
                                void 0 === t && (t = this.generateQueryId()),
                                __DEV__ ? (0, i.kG)(e.query, "query option is required. You must specify your GraphQL document in the query option.") : (0, i.kG)(e.query, 14),
                                __DEV__ ? (0, i.kG)("Document" === e.query.kind, 'You must wrap the query string in a "gql" tag.') : (0, i.kG)("Document" === e.query.kind, 15),
                                __DEV__ ? (0, i.kG)(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : (0, i.kG)(!e.returnPartialData, 16),
                                __DEV__ ? (0, i.kG)(!e.pollInterval, "pollInterval option only supported on watchQuery.") : (0, i.kG)(!e.pollInterval, 17),
                                this.fetchQuery(t, e).finally(function () {
                                    return n.stopQuery(t);
                                })
                            );
                        }),
                        (e.prototype.generateQueryId = function () {
                            return String(this.queryIdCounter++);
                        }),
                        (e.prototype.generateRequestId = function () {
                            return this.requestIdCounter++;
                        }),
                        (e.prototype.generateMutationId = function () {
                            return String(this.mutationIdCounter++);
                        }),
                        (e.prototype.stopQueryInStore = function (e) {
                            this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
                        }),
                        (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
                            var t = this.queries.get(e);
                            t && t.stop();
                        }),
                        (e.prototype.clearStore = function (e) {
                            return (
                                void 0 === e && (e = { discardWatches: !0 }),
                                this.cancelPendingFetches(__DEV__ ? new i.ej("Store reset while query was in flight (not completed in link chain)") : new i.ej(18)),
                                this.queries.forEach(function (e) {
                                    e.observableQuery ? (e.networkStatus = It.I.loading) : e.stop();
                                }),
                                this.mutationStore && (this.mutationStore = Object.create(null)),
                                this.cache.reset(e)
                            );
                        }),
                        (e.prototype.getObservableQueries = function (e) {
                            var t = this;
                            void 0 === e && (e = "active");
                            var n = new Map(),
                                r = new Map(),
                                o = new Set();
                            return (
                                Array.isArray(e) &&
                                    e.forEach(function (e) {
                                        var n;
                                        "string" === typeof e ? r.set(e, !1) : ((n = e), (0, I.s)(n) && "Document" === n.kind && Array.isArray(n.definitions) ? r.set(t.transform(e).document, !1) : (0, I.s)(e) && e.query && o.add(e));
                                    }),
                                this.queries.forEach(function (t, i) {
                                    var o = t.observableQuery,
                                        a = t.document;
                                    if (o) {
                                        if ("all" === e) return void n.set(i, o);
                                        var s = o.queryName;
                                        if ("standby" === o.options.fetchPolicy || ("active" === e && !o.hasObservers())) return;
                                        ("active" === e || (s && r.has(s)) || (a && r.has(a))) && (n.set(i, o), s && r.set(s, !0), a && r.set(a, !0));
                                    }
                                }),
                                o.size &&
                                    o.forEach(function (e) {
                                        var r = kt("legacyOneTimeQuery"),
                                            o = t.getQuery(r).init({ document: e.query, variables: e.variables }),
                                            a = new qt({ queryManager: t, queryInfo: o, options: (0, u.pi)((0, u.pi)({}, e), { fetchPolicy: "network-only" }) });
                                        (0, i.kG)(a.queryId === r), o.setObservableQuery(a), n.set(r, a);
                                    }),
                                __DEV__ &&
                                    r.size &&
                                    r.forEach(function (e, t) {
                                        e || (__DEV__ && i.kG.warn("Unknown query ".concat("string" === typeof t ? "named " : "").concat(JSON.stringify(t, null, 2), " requested in refetchQueries options.include array")));
                                    }),
                                n
                            );
                        }),
                        (e.prototype.reFetchObservableQueries = function (e) {
                            var t = this;
                            void 0 === e && (e = !1);
                            var n = [];
                            return (
                                this.getObservableQueries(e ? "all" : "active").forEach(function (r, i) {
                                    var o = r.options.fetchPolicy;
                                    r.resetLastResults(), (e || ("standby" !== o && "cache-only" !== o)) && n.push(r.refetch()), t.getQuery(i).setDiff(null);
                                }),
                                this.broadcastQueries(),
                                Promise.all(n)
                            );
                        }),
                        (e.prototype.setObservableQuery = function (e) {
                            this.getQuery(e.queryId).setObservableQuery(e);
                        }),
                        (e.prototype.startGraphQLSubscription = function (e) {
                            var t = this,
                                n = e.query,
                                r = e.fetchPolicy,
                                i = e.errorPolicy,
                                o = e.variables,
                                a = e.context,
                                s = void 0 === a ? {} : a;
                            (n = this.transform(n).document), (o = this.getVariables(n, o));
                            var u = function (e) {
                                return t.getObservableFromLink(n, s, e).map(function (o) {
                                    if (("no-cache" !== r && (Pn(o, i) && t.cache.write({ query: n, result: o.data, dataId: "ROOT_SUBSCRIPTION", variables: e }), t.broadcastQueries()), ht(o))) throw new At.c({ graphQLErrors: o.errors });
                                    return o;
                                });
                            };
                            if (this.transform(n).hasClientExports) {
                                var c = this.localState.addExportedVariables(n, o, s).then(u);
                                return new A(function (e) {
                                    var t = null;
                                    return (
                                        c.then(function (n) {
                                            return (t = n.subscribe(e));
                                        }, e.error),
                                        function () {
                                            return t && t.unsubscribe();
                                        }
                                    );
                                });
                            }
                            return u(o);
                        }),
                        (e.prototype.stopQuery = function (e) {
                            this.stopQueryNoBroadcast(e), this.broadcastQueries();
                        }),
                        (e.prototype.stopQueryNoBroadcast = function (e) {
                            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
                        }),
                        (e.prototype.removeQuery = function (e) {
                            this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
                        }),
                        (e.prototype.broadcastQueries = function () {
                            this.onBroadcast && this.onBroadcast(),
                                this.queries.forEach(function (e) {
                                    return e.notify();
                                });
                        }),
                        (e.prototype.getLocalState = function () {
                            return this.localState;
                        }),
                        (e.prototype.getObservableFromLink = function (e, t, n, r) {
                            var i,
                                o,
                                a = this;
                            void 0 === r && (r = null !== (i = null === t || void 0 === t ? void 0 : t.queryDeduplication) && void 0 !== i ? i : this.queryDeduplication);
                            var s = this.transform(e).serverQuery;
                            if (s) {
                                var c = this.inFlightLinkObservables,
                                    l = this.link,
                                    f = { query: s, variables: n, operationName: Y(s) || void 0, context: this.prepareContext((0, u.pi)((0, u.pi)({}, t), { forceFetch: !r })) };
                                if (((t = f.context), r)) {
                                    var h = c.get(s) || new Map();
                                    c.set(s, h);
                                    var p = ct(n);
                                    if (!(o = h.get(p))) {
                                        var d = new jt([oe(l, f)]);
                                        h.set(p, (o = d)),
                                            d.cleanup(function () {
                                                h.delete(p) && h.size < 1 && c.delete(s);
                                            });
                                    }
                                } else o = new jt([oe(l, f)]);
                            } else (o = new jt([A.of({ data: {} })])), (t = this.prepareContext(t));
                            var v = this.transform(e).clientQuery;
                            return (
                                v &&
                                    (o = ft(o, function (e) {
                                        return a.localState.runResolvers({ document: v, remoteResult: e, context: t, variables: n });
                                    })),
                                o
                            );
                        }),
                        (e.prototype.getResultsFromLink = function (e, t, n) {
                            var r = (e.lastRequestId = this.generateRequestId());
                            return ft(
                                this.getObservableFromLink(e.document, n.context, n.variables),
                                function (i) {
                                    var o = (0, xt.O)(i.errors);
                                    if (r >= e.lastRequestId) {
                                        if (o && "none" === n.errorPolicy) throw e.markError(new At.c({ graphQLErrors: i.errors }));
                                        e.markResult(i, n, t), e.markReady();
                                    }
                                    var a = { data: i.data, loading: !1, networkStatus: It.I.ready };
                                    return o && "ignore" !== n.errorPolicy && ((a.errors = i.errors), (a.networkStatus = It.I.error)), a;
                                },
                                function (t) {
                                    var n = (0, At.M)(t) ? t : new At.c({ networkError: t });
                                    throw (r >= e.lastRequestId && e.markError(n), n);
                                }
                            );
                        }),
                        (e.prototype.fetchQueryObservable = function (e, t, n) {
                            var r = this;
                            void 0 === n && (n = It.I.loading);
                            var i = this.transform(t.query).document,
                                o = this.getVariables(i, t.variables),
                                a = this.getQuery(e),
                                s = this.defaultOptions.watchQuery,
                                u = t.fetchPolicy,
                                c = void 0 === u ? (s && s.fetchPolicy) || "cache-first" : u,
                                l = t.errorPolicy,
                                f = void 0 === l ? (s && s.errorPolicy) || "none" : l,
                                h = t.returnPartialData,
                                p = void 0 !== h && h,
                                d = t.notifyOnNetworkStatusChange,
                                v = void 0 !== d && d,
                                y = t.context,
                                m = void 0 === y ? {} : y,
                                b = Object.assign({}, t, { query: i, variables: o, fetchPolicy: c, errorPolicy: f, returnPartialData: p, notifyOnNetworkStatusChange: v, context: m }),
                                g = function (e) {
                                    b.variables = e;
                                    var i = r.fetchQueryByPolicy(a, b, n);
                                    return "standby" !== b.fetchPolicy && i.length > 0 && a.observableQuery && a.observableQuery.applyNextFetchPolicy("after-fetch", t), i;
                                },
                                _ = function () {
                                    return r.fetchCancelFns.delete(e);
                                };
                            this.fetchCancelFns.set(e, function (e) {
                                _(),
                                    setTimeout(function () {
                                        return w.cancel(e);
                                    });
                            });
                            var w = new jt(this.transform(b.query).hasClientExports ? this.localState.addExportedVariables(b.query, b.variables, b.context).then(g) : g(b.variables));
                            return w.promise.then(_, _), w;
                        }),
                        (e.prototype.refetchQueries = function (e) {
                            var t = this,
                                n = e.updateCache,
                                r = e.include,
                                i = e.optimistic,
                                o = void 0 !== i && i,
                                a = e.removeOptimistic,
                                s = void 0 === a ? (o ? kt("refetchQueries") : void 0) : a,
                                u = e.onQueryUpdated,
                                c = new Map();
                            r &&
                                this.getObservableQueries(r).forEach(function (e, n) {
                                    c.set(n, { oq: e, lastDiff: t.getQuery(n).getDiff() });
                                });
                            var l = new Map();
                            return (
                                n &&
                                    this.cache.batch({
                                        update: n,
                                        optimistic: (o && s) || !1,
                                        removeOptimistic: s,
                                        onWatchUpdated: function (e, t, n) {
                                            var r = e.watcher instanceof In && e.watcher.observableQuery;
                                            if (r) {
                                                if (u) {
                                                    c.delete(r.queryId);
                                                    var i = u(r, t, n);
                                                    return !0 === i && (i = r.refetch()), !1 !== i && l.set(r, i), i;
                                                }
                                                null !== u && c.set(r.queryId, { oq: r, lastDiff: n, diff: t });
                                            }
                                        },
                                    }),
                                c.size &&
                                    c.forEach(function (e, n) {
                                        var r,
                                            i = e.oq,
                                            o = e.lastDiff,
                                            a = e.diff;
                                        if (u) {
                                            if (!a) {
                                                var s = i.queryInfo;
                                                s.reset(), (a = s.getDiff());
                                            }
                                            r = u(i, a, o);
                                        }
                                        (u && !0 !== r) || (r = i.refetch()), !1 !== r && l.set(i, r), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n);
                                    }),
                                s && this.cache.removeOptimistic(s),
                                l
                            );
                        }),
                        (e.prototype.fetchQueryByPolicy = function (e, t, n) {
                            var r = this,
                                i = t.query,
                                o = t.variables,
                                a = t.fetchPolicy,
                                s = t.refetchWritePolicy,
                                c = t.errorPolicy,
                                l = t.returnPartialData,
                                f = t.context,
                                h = t.notifyOnNetworkStatusChange,
                                p = e.networkStatus;
                            e.init({ document: this.transform(i).document, variables: o, networkStatus: n });
                            var d = function () {
                                    return e.getDiff(o);
                                },
                                v = function (t, n) {
                                    void 0 === n && (n = e.networkStatus || It.I.loading);
                                    var a = t.result;
                                    !__DEV__ || l || (0, Re.D)(a, {}) || Lt(t.missing);
                                    var s = function (e) {
                                        return A.of((0, u.pi)({ data: e, loading: (0, It.O)(n), networkStatus: n }, t.complete ? null : { partial: !0 }));
                                    };
                                    return a && r.transform(i).hasForcedResolvers
                                        ? r.localState.runResolvers({ document: i, remoteResult: { data: a }, context: f, variables: o, onlyRunForcedResolvers: !0 }).then(function (e) {
                                              return s(e.data || void 0);
                                          })
                                        : s(a);
                                },
                                y = "no-cache" === a ? 0 : n === It.I.refetch && "merge" !== s ? 1 : 2,
                                m = function () {
                                    return r.getResultsFromLink(e, y, { variables: o, context: f, fetchPolicy: a, errorPolicy: c });
                                },
                                b = h && "number" === typeof p && p !== n && (0, It.O)(n);
                            switch (a) {
                                default:
                                case "cache-first":
                                    return (g = d()).complete ? [v(g, e.markReady())] : l || b ? [v(g), m()] : [m()];
                                case "cache-and-network":
                                    var g;
                                    return (g = d()).complete || l || b ? [v(g), m()] : [m()];
                                case "cache-only":
                                    return [v(d(), e.markReady())];
                                case "network-only":
                                    return b ? [v(d()), m()] : [m()];
                                case "no-cache":
                                    return b ? [v(e.getDiff()), m()] : [m()];
                                case "standby":
                                    return [];
                            }
                        }),
                        (e.prototype.getQuery = function (e) {
                            return e && !this.queries.has(e) && this.queries.set(e, new In(this, e)), this.queries.get(e);
                        }),
                        (e.prototype.prepareContext = function (e) {
                            void 0 === e && (e = {});
                            var t = this.localState.prepareContext(e);
                            return (0, u.pi)((0, u.pi)({}, t), { clientAwareness: this.clientAwareness });
                        }),
                        e
                    );
                })(),
                Rn = n(4012),
                Cn = !1,
                qn = (function () {
                    function e(e) {
                        var t = this;
                        (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []);
                        var n = e.uri,
                            r = e.credentials,
                            o = e.headers,
                            a = e.cache,
                            s = e.ssrMode,
                            u = void 0 !== s && s,
                            c = e.ssrForceFetchDelay,
                            l = void 0 === c ? 0 : c,
                            f = e.connectToDevTools,
                            h = void 0 === f ? "object" === typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : f,
                            p = e.queryDeduplication,
                            d = void 0 === p || p,
                            v = e.defaultOptions,
                            y = e.assumeImmutableResults,
                            m = void 0 !== y && y,
                            b = e.resolvers,
                            g = e.typeDefs,
                            _ = e.fragmentMatcher,
                            w = e.name,
                            O = e.version,
                            S = e.link;
                        if ((S || (S = n ? new Ve({ uri: n, credentials: r, headers: o }) : ie.empty()), !a))
                            throw __DEV__ ? new i.ej("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new i.ej(7);
                        if (
                            ((this.link = S),
                            (this.cache = a),
                            (this.disableNetworkFetches = u || l > 0),
                            (this.queryDeduplication = d),
                            (this.defaultOptions = v || Object.create(null)),
                            (this.typeDefs = g),
                            l &&
                                setTimeout(function () {
                                    return (t.disableNetworkFetches = !1);
                                }, l),
                            (this.watchQuery = this.watchQuery.bind(this)),
                            (this.query = this.query.bind(this)),
                            (this.mutate = this.mutate.bind(this)),
                            (this.resetStore = this.resetStore.bind(this)),
                            (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this)),
                            h && "object" === typeof window && (window.__APOLLO_CLIENT__ = this),
                            !Cn && __DEV__ && ((Cn = !0), "undefined" !== typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__))
                        ) {
                            var k = window.navigator,
                                E = k && k.userAgent,
                                D = void 0;
                            "string" === typeof E &&
                                (E.indexOf("Chrome/") > -1
                                    ? (D = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                                    : E.indexOf("Firefox/") > -1 && (D = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                                D && __DEV__ && i.kG.log("Download the Apollo DevTools for a better development experience: " + D);
                        }
                        (this.version = "3.6.9"),
                            (this.localState = new Tn({ cache: a, client: this, resolvers: b, fragmentMatcher: _ })),
                            (this.queryManager = new Vn({
                                cache: this.cache,
                                link: this.link,
                                defaultOptions: this.defaultOptions,
                                queryDeduplication: d,
                                ssrMode: u,
                                clientAwareness: { name: w, version: O },
                                localState: this.localState,
                                assumeImmutableResults: m,
                                onBroadcast: h
                                    ? function () {
                                          t.devToolsHookCb &&
                                              t.devToolsHookCb({ action: {}, state: { queries: t.queryManager.getQueryStore(), mutations: t.queryManager.mutationStore || {} }, dataWithOptimisticResults: t.cache.extract(!0) });
                                      }
                                    : void 0,
                            }));
                    }
                    return (
                        (e.prototype.stop = function () {
                            this.queryManager.stop();
                        }),
                        (e.prototype.watchQuery = function (e) {
                            return (
                                this.defaultOptions.watchQuery && (e = (0, Rn.J)(this.defaultOptions.watchQuery, e)),
                                !this.disableNetworkFetches || ("network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy) || (e = (0, u.pi)((0, u.pi)({}, e), { fetchPolicy: "cache-first" })),
                                this.queryManager.watchQuery(e)
                            );
                        }),
                        (e.prototype.query = function (e) {
                            return (
                                this.defaultOptions.query && (e = (0, Rn.J)(this.defaultOptions.query, e)),
                                __DEV__
                                    ? (0, i.kG)(
                                          "cache-and-network" !== e.fetchPolicy,
                                          "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."
                                      )
                                    : (0, i.kG)("cache-and-network" !== e.fetchPolicy, 8),
                                this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, u.pi)((0, u.pi)({}, e), { fetchPolicy: "cache-first" })),
                                this.queryManager.query(e)
                            );
                        }),
                        (e.prototype.mutate = function (e) {
                            return this.defaultOptions.mutate && (e = (0, Rn.J)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
                        }),
                        (e.prototype.subscribe = function (e) {
                            return this.queryManager.startGraphQLSubscription(e);
                        }),
                        (e.prototype.readQuery = function (e, t) {
                            return void 0 === t && (t = !1), this.cache.readQuery(e, t);
                        }),
                        (e.prototype.readFragment = function (e, t) {
                            return void 0 === t && (t = !1), this.cache.readFragment(e, t);
                        }),
                        (e.prototype.writeQuery = function (e) {
                            this.cache.writeQuery(e), this.queryManager.broadcastQueries();
                        }),
                        (e.prototype.writeFragment = function (e) {
                            this.cache.writeFragment(e), this.queryManager.broadcastQueries();
                        }),
                        (e.prototype.__actionHookForDevTools = function (e) {
                            this.devToolsHookCb = e;
                        }),
                        (e.prototype.__requestRaw = function (e) {
                            return oe(this.link, e);
                        }),
                        (e.prototype.resetStore = function () {
                            var e = this;
                            return Promise.resolve()
                                .then(function () {
                                    return e.queryManager.clearStore({ discardWatches: !1 });
                                })
                                .then(function () {
                                    return Promise.all(
                                        e.resetStoreCallbacks.map(function (e) {
                                            return e();
                                        })
                                    );
                                })
                                .then(function () {
                                    return e.reFetchObservableQueries();
                                });
                        }),
                        (e.prototype.clearStore = function () {
                            var e = this;
                            return Promise.resolve()
                                .then(function () {
                                    return e.queryManager.clearStore({ discardWatches: !0 });
                                })
                                .then(function () {
                                    return Promise.all(
                                        e.clearStoreCallbacks.map(function (e) {
                                            return e();
                                        })
                                    );
                                });
                        }),
                        (e.prototype.onResetStore = function (e) {
                            var t = this;
                            return (
                                this.resetStoreCallbacks.push(e),
                                function () {
                                    t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function (t) {
                                        return t !== e;
                                    });
                                }
                            );
                        }),
                        (e.prototype.onClearStore = function (e) {
                            var t = this;
                            return (
                                this.clearStoreCallbacks.push(e),
                                function () {
                                    t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function (t) {
                                        return t !== e;
                                    });
                                }
                            );
                        }),
                        (e.prototype.reFetchObservableQueries = function (e) {
                            return this.queryManager.reFetchObservableQueries(e);
                        }),
                        (e.prototype.refetchQueries = function (e) {
                            var t = this.queryManager.refetchQueries(e),
                                n = [],
                                r = [];
                            t.forEach(function (e, t) {
                                n.push(t), r.push(e);
                            });
                            var o = Promise.all(r);
                            return (
                                (o.queries = n),
                                (o.results = r),
                                o.catch(function (e) {
                                    __DEV__ && i.kG.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e));
                                }),
                                o
                            );
                        }),
                        (e.prototype.getObservableQueries = function (e) {
                            return void 0 === e && (e = "active"), this.queryManager.getObservableQueries(e);
                        }),
                        (e.prototype.extract = function (e) {
                            return this.cache.extract(e);
                        }),
                        (e.prototype.restore = function (e) {
                            return this.cache.restore(e);
                        }),
                        (e.prototype.addResolvers = function (e) {
                            this.localState.addResolvers(e);
                        }),
                        (e.prototype.setResolvers = function (e) {
                            this.localState.setResolvers(e);
                        }),
                        (e.prototype.getResolvers = function () {
                            return this.localState.getResolvers();
                        }),
                        (e.prototype.setLocalStateFragmentMatcher = function (e) {
                            this.localState.setFragmentMatcher(e);
                        }),
                        (e.prototype.setLink = function (e) {
                            this.link = this.queryManager.link = e;
                        }),
                        e
                    );
                })(),
                Fn = (function () {
                    function e() {
                        this.getFragmentDoc = _n(P);
                    }
                    return (
                        (e.prototype.batch = function (e) {
                            var t,
                                n = this,
                                r = "string" === typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
                            return (
                                this.performTransaction(function () {
                                    return (t = e.update(n));
                                }, r),
                                t
                            );
                        }),
                        (e.prototype.recordOptimisticTransaction = function (e, t) {
                            this.performTransaction(e, t);
                        }),
                        (e.prototype.transformDocument = function (e) {
                            return e;
                        }),
                        (e.prototype.identify = function (e) {}),
                        (e.prototype.gc = function () {
                            return [];
                        }),
                        (e.prototype.modify = function (e) {
                            return !1;
                        }),
                        (e.prototype.transformForLink = function (e) {
                            return e;
                        }),
                        (e.prototype.readQuery = function (e, t) {
                            return void 0 === t && (t = !!e.optimistic), this.read((0, u.pi)((0, u.pi)({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t }));
                        }),
                        (e.prototype.readFragment = function (e, t) {
                            return void 0 === t && (t = !!e.optimistic), this.read((0, u.pi)((0, u.pi)({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: t }));
                        }),
                        (e.prototype.writeQuery = function (e) {
                            var t = e.id,
                                n = e.data,
                                r = (0, u._T)(e, ["id", "data"]);
                            return this.write(Object.assign(r, { dataId: t || "ROOT_QUERY", result: n }));
                        }),
                        (e.prototype.writeFragment = function (e) {
                            var t = e.id,
                                n = e.data,
                                r = e.fragment,
                                i = e.fragmentName,
                                o = (0, u._T)(e, ["id", "data", "fragment", "fragmentName"]);
                            return this.write(Object.assign(o, { query: this.getFragmentDoc(r, i), dataId: t, result: n }));
                        }),
                        (e.prototype.updateQuery = function (e, t) {
                            return this.batch({
                                update: function (n) {
                                    var r = n.readQuery(e),
                                        i = t(r);
                                    return void 0 === i || null === i ? r : (n.writeQuery((0, u.pi)((0, u.pi)({}, e), { data: i })), i);
                                },
                            });
                        }),
                        (e.prototype.updateFragment = function (e, t) {
                            return this.batch({
                                update: function (n) {
                                    var r = n.readFragment(e),
                                        i = t(r);
                                    return void 0 === i || null === i ? r : (n.writeFragment((0, u.pi)((0, u.pi)({}, e), { data: i })), i);
                                },
                            });
                        }),
                        e
                    );
                })(),
                Mn = function (e, t, n, r) {
                    (this.message = e), (this.path = t), (this.query = n), (this.variables = r);
                },
                Ln = n(8702),
                Qn = Object.create(null),
                Bn = function () {
                    return Qn;
                },
                Gn = Object.create(null),
                Un = (function () {
                    function e(e, t) {
                        var n = this;
                        (this.policies = e),
                            (this.group = t),
                            (this.data = Object.create(null)),
                            (this.rootIds = Object.create(null)),
                            (this.refs = Object.create(null)),
                            (this.getFieldValue = function (e, t) {
                                return (0, Ln.J)(C(e) ? n.get(e.__ref, t) : e && e[t]);
                            }),
                            (this.canRead = function (e) {
                                return C(e) ? n.has(e.__ref) : "object" === typeof e;
                            }),
                            (this.toReference = function (e, t) {
                                if ("string" === typeof e) return R(e);
                                if (C(e)) return e;
                                var r = n.policies.identify(e)[0];
                                if (r) {
                                    var i = R(r);
                                    return t && n.merge(r, e), i;
                                }
                            });
                    }
                    return (
                        (e.prototype.toObject = function () {
                            return (0, u.pi)({}, this.data);
                        }),
                        (e.prototype.has = function (e) {
                            return void 0 !== this.lookup(e, !0);
                        }),
                        (e.prototype.get = function (e, t) {
                            if ((this.group.depend(e, t), Xe.call(this.data, e))) {
                                var n = this.data[e];
                                if (n && Xe.call(n, t)) return n[t];
                            }
                            return "__typename" === t && Xe.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof Jn ? this.parent.get(e, t) : void 0;
                        }),
                        (e.prototype.lookup = function (e, t) {
                            return t && this.group.depend(e, "__exists"), Xe.call(this.data, e) ? this.data[e] : this instanceof Jn ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0;
                        }),
                        (e.prototype.merge = function (e, t) {
                            var n,
                                r = this;
                            C(e) && (e = e.__ref), C(t) && (t = t.__ref);
                            var o = "string" === typeof e ? this.lookup((n = e)) : e,
                                a = "string" === typeof t ? this.lookup((n = t)) : t;
                            if (a) {
                                __DEV__ ? (0, i.kG)("string" === typeof n, "store.merge expects a string ID") : (0, i.kG)("string" === typeof n, 1);
                                var s = new He(Hn).merge(o, a);
                                if (((this.data[n] = s), s !== o && (delete this.refs[n], this.group.caching))) {
                                    var u = Object.create(null);
                                    o || (u.__exists = 1),
                                        Object.keys(a).forEach(function (e) {
                                            if (!o || o[e] !== s[e]) {
                                                u[e] = 1;
                                                var t = nt(e);
                                                t === e || r.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || r instanceof Jn || delete s[e];
                                            }
                                        }),
                                        !u.__typename || (o && o.__typename) || this.policies.rootTypenamesById[n] !== s.__typename || delete u.__typename,
                                        Object.keys(u).forEach(function (e) {
                                            return r.group.dirty(n, e);
                                        });
                                }
                            }
                        }),
                        (e.prototype.modify = function (e, t) {
                            var n = this,
                                r = this.lookup(e);
                            if (r) {
                                var i = Object.create(null),
                                    o = !1,
                                    a = !0,
                                    s = {
                                        DELETE: Qn,
                                        INVALIDATE: Gn,
                                        isReference: C,
                                        toReference: this.toReference,
                                        canRead: this.canRead,
                                        readField: function (t, r) {
                                            return n.policies.readField("string" === typeof t ? { fieldName: t, from: r || R(e) } : t, { store: n });
                                        },
                                    };
                                if (
                                    (Object.keys(r).forEach(function (c) {
                                        var l = nt(c),
                                            f = r[c];
                                        if (void 0 !== f) {
                                            var h = "function" === typeof t ? t : t[c] || t[l];
                                            if (h) {
                                                var p = h === Bn ? Qn : h((0, Ln.J)(f), (0, u.pi)((0, u.pi)({}, s), { fieldName: l, storeFieldName: c, storage: n.getStorage(e, c) }));
                                                p === Gn ? n.group.dirty(e, c) : (p === Qn && (p = void 0), p !== f && ((i[c] = p), (o = !0), (f = p)));
                                            }
                                            void 0 !== f && (a = !1);
                                        }
                                    }),
                                    o)
                                )
                                    return this.merge(e, i), a && (this instanceof Jn ? (this.data[e] = void 0) : delete this.data[e], this.group.dirty(e, "__exists")), !0;
                            }
                            return !1;
                        }),
                        (e.prototype.delete = function (e, t, n) {
                            var r,
                                i = this.lookup(e);
                            if (i) {
                                var o = this.getFieldValue(i, "__typename"),
                                    a = t && n ? this.policies.getStoreFieldName({ typename: o, fieldName: t, args: n }) : t;
                                return this.modify(e, a ? (((r = {})[a] = Bn), r) : Bn);
                            }
                            return !1;
                        }),
                        (e.prototype.evict = function (e, t) {
                            var n = !1;
                            return (
                                e.id &&
                                    (Xe.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)),
                                    this instanceof Jn && this !== t && (n = this.parent.evict(e, t) || n),
                                    (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")),
                                n
                            );
                        }),
                        (e.prototype.clear = function () {
                            this.replace(null);
                        }),
                        (e.prototype.extract = function () {
                            var e = this,
                                t = this.toObject(),
                                n = [];
                            return (
                                this.getRootIdSet().forEach(function (t) {
                                    Xe.call(e.policies.rootTypenamesById, t) || n.push(t);
                                }),
                                n.length && (t.__META = { extraRootIds: n.sort() }),
                                t
                            );
                        }),
                        (e.prototype.replace = function (e) {
                            var t = this;
                            if (
                                (Object.keys(this.data).forEach(function (n) {
                                    (e && Xe.call(e, n)) || t.delete(n);
                                }),
                                e)
                            ) {
                                var n = e.__META,
                                    r = (0, u._T)(e, ["__META"]);
                                Object.keys(r).forEach(function (e) {
                                    t.merge(e, r[e]);
                                }),
                                    n && n.extraRootIds.forEach(this.retain, this);
                            }
                        }),
                        (e.prototype.retain = function (e) {
                            return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
                        }),
                        (e.prototype.release = function (e) {
                            if (this.rootIds[e] > 0) {
                                var t = --this.rootIds[e];
                                return t || delete this.rootIds[e], t;
                            }
                            return 0;
                        }),
                        (e.prototype.getRootIdSet = function (e) {
                            return void 0 === e && (e = new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Jn ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
                        }),
                        (e.prototype.gc = function () {
                            var e = this,
                                t = this.getRootIdSet(),
                                n = this.toObject();
                            t.forEach(function (r) {
                                Xe.call(n, r) && (Object.keys(e.findChildRefIds(r)).forEach(t.add, t), delete n[r]);
                            });
                            var r = Object.keys(n);
                            if (r.length) {
                                for (var i = this; i instanceof Jn; ) i = i.parent;
                                r.forEach(function (e) {
                                    return i.delete(e);
                                });
                            }
                            return r;
                        }),
                        (e.prototype.findChildRefIds = function (e) {
                            if (!Xe.call(this.refs, e)) {
                                var t = (this.refs[e] = Object.create(null)),
                                    n = this.data[e];
                                if (!n) return t;
                                var r = new Set([n]);
                                r.forEach(function (e) {
                                    C(e) && (t[e.__ref] = !0),
                                        (0, I.s)(e) &&
                                            Object.keys(e).forEach(function (t) {
                                                var n = e[t];
                                                (0, I.s)(n) && r.add(n);
                                            });
                                });
                            }
                            return this.refs[e];
                        }),
                        (e.prototype.makeCacheKey = function () {
                            return this.group.keyMaker.lookupArray(arguments);
                        }),
                        e
                    );
                })(),
                zn = (function () {
                    function e(e, t) {
                        void 0 === t && (t = null), (this.caching = e), (this.parent = t), (this.d = null), this.resetCaching();
                    }
                    return (
                        (e.prototype.resetCaching = function () {
                            (this.d = this.caching ? mn() : null), (this.keyMaker = new Le(Qe.mr));
                        }),
                        (e.prototype.depend = function (e, t) {
                            if (this.d) {
                                this.d(Wn(e, t));
                                var n = nt(t);
                                n !== t && this.d(Wn(e, n)), this.parent && this.parent.depend(e, t);
                            }
                        }),
                        (e.prototype.dirty = function (e, t) {
                            this.d && this.d.dirty(Wn(e, t), "__exists" === t ? "forget" : "setDirty");
                        }),
                        e
                    );
                })();
            function Wn(e, t) {
                return t + "#" + e;
            }
            function Kn(e, t) {
                Xn(e) && e.group.depend(t, "__exists");
            }
            !(function (e) {
                var t = (function (e) {
                    function t(t) {
                        var n = t.policies,
                            r = t.resultCaching,
                            i = void 0 === r || r,
                            o = t.seed,
                            a = e.call(this, n, new zn(i)) || this;
                        return (a.stump = new Yn(a)), (a.storageTrie = new Le(Qe.mr)), o && a.replace(o), a;
                    }
                    return (
                        (0, u.ZT)(t, e),
                        (t.prototype.addLayer = function (e, t) {
                            return this.stump.addLayer(e, t);
                        }),
                        (t.prototype.removeLayer = function () {
                            return this;
                        }),
                        (t.prototype.getStorage = function () {
                            return this.storageTrie.lookupArray(arguments);
                        }),
                        t
                    );
                })(e);
                e.Root = t;
            })(Un || (Un = {}));
            var Jn = (function (e) {
                    function t(t, n, r, i) {
                        var o = e.call(this, n.policies, i) || this;
                        return (o.id = t), (o.parent = n), (o.replay = r), (o.group = i), r(o), o;
                    }
                    return (
                        (0, u.ZT)(t, e),
                        (t.prototype.addLayer = function (e, n) {
                            return new t(e, this, n, this.group);
                        }),
                        (t.prototype.removeLayer = function (e) {
                            var t = this,
                                n = this.parent.removeLayer(e);
                            return e === this.id
                                ? (this.group.caching &&
                                      Object.keys(this.data).forEach(function (e) {
                                          var r = t.data[e],
                                              i = n.lookup(e);
                                          i
                                              ? r
                                                  ? r !== i &&
                                                    Object.keys(r).forEach(function (n) {
                                                        (0, Re.D)(r[n], i[n]) || t.group.dirty(e, n);
                                                    })
                                                  : (t.group.dirty(e, "__exists"),
                                                    Object.keys(i).forEach(function (n) {
                                                        t.group.dirty(e, n);
                                                    }))
                                              : t.delete(e);
                                      }),
                                  n)
                                : n === this.parent
                                ? this
                                : n.addLayer(this.id, this.replay);
                        }),
                        (t.prototype.toObject = function () {
                            return (0, u.pi)((0, u.pi)({}, this.parent.toObject()), this.data);
                        }),
                        (t.prototype.findChildRefIds = function (t) {
                            var n = this.parent.findChildRefIds(t);
                            return Xe.call(this.data, t) ? (0, u.pi)((0, u.pi)({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
                        }),
                        (t.prototype.getStorage = function () {
                            for (var e = this.parent; e.parent; ) e = e.parent;
                            return e.getStorage.apply(e, arguments);
                        }),
                        t
                    );
                })(Un),
                Yn = (function (e) {
                    function t(t) {
                        return e.call(this, "EntityStore.Stump", t, function () {}, new zn(t.group.caching, t.group)) || this;
                    }
                    return (
                        (0, u.ZT)(t, e),
                        (t.prototype.removeLayer = function () {
                            return this;
                        }),
                        (t.prototype.merge = function () {
                            return this.parent.merge.apply(this.parent, arguments);
                        }),
                        t
                    );
                })(Jn);
            function Hn(e, t, n) {
                var r = e[n],
                    i = t[n];
                return (0, Re.D)(r, i) ? r : i;
            }
            function Xn(e) {
                return !!(e instanceof Un && e.group.caching);
            }
            function $n(e) {
                return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults];
            }
            var Zn = (function () {
                function e(e) {
                    var t = this;
                    (this.knownResults = new (Qe.mr ? WeakMap : Map)()),
                        (this.config = (0, Be.o)(e, { addTypename: !1 !== e.addTypename, canonizeResults: et(e) })),
                        (this.canon = e.canon || new ut()),
                        (this.executeSelectionSet = _n(
                            function (e) {
                                var n,
                                    r = e.context.canonizeResults,
                                    i = $n(e);
                                i[3] = !r;
                                var o = (n = t.executeSelectionSet).peek.apply(n, i);
                                return o ? (r ? (0, u.pi)((0, u.pi)({}, o), { result: t.canon.admit(o.result) }) : o) : (Kn(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e));
                            },
                            {
                                max: this.config.resultCacheMaxSize,
                                keyArgs: $n,
                                makeCacheKey: function (e, t, n, r) {
                                    if (Xn(n.store)) return n.store.makeCacheKey(e, C(t) ? t.__ref : t, n.varString, r);
                                },
                            }
                        )),
                        (this.executeSubSelectedArray = _n(
                            function (e) {
                                return Kn(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e);
                            },
                            {
                                max: this.config.resultCacheMaxSize,
                                makeCacheKey: function (e) {
                                    var t = e.field,
                                        n = e.array,
                                        r = e.context;
                                    if (Xn(r.store)) return r.store.makeCacheKey(t, n, r.varString);
                                },
                            }
                        ));
                }
                return (
                    (e.prototype.resetCanon = function () {
                        this.canon = new ut();
                    }),
                    (e.prototype.diffQueryAgainstStore = function (e) {
                        var t = e.store,
                            n = e.query,
                            r = e.rootId,
                            i = void 0 === r ? "ROOT_QUERY" : r,
                            o = e.variables,
                            a = e.returnPartialData,
                            s = void 0 === a || a,
                            c = e.canonizeResults,
                            l = void 0 === c ? this.config.canonizeResults : c,
                            f = this.config.cache.policies;
                        o = (0, u.pi)((0, u.pi)({}, Z(X(n))), o);
                        var h,
                            p = R(i),
                            d = this.executeSelectionSet({
                                selectionSet: $(n).selectionSet,
                                objectOrReference: p,
                                enclosingRef: p,
                                context: { store: t, query: n, policies: f, variables: o, varString: ct(o), canonizeResults: l, fragmentMap: N(H(n)) },
                            });
                        if (d.missing && ((h = [new Mn(er(d.missing), d.missing, n, o)]), !s)) throw h[0];
                        return { result: d.result, complete: !h, missing: h };
                    }),
                    (e.prototype.isFresh = function (e, t, n, r) {
                        if (Xn(r.store) && this.knownResults.get(e) === n) {
                            var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e));
                            if (i && e === i.result) return !0;
                        }
                        return !1;
                    }),
                    (e.prototype.execSelectionSetImpl = function (e) {
                        var t = this,
                            n = e.selectionSet,
                            r = e.objectOrReference,
                            i = e.enclosingRef,
                            o = e.context;
                        if (C(r) && !o.policies.rootTypenamesById[r.__ref] && !o.store.has(r.__ref)) return { result: this.canon.empty, missing: "Dangling reference to missing ".concat(r.__ref, " object") };
                        var a,
                            s = o.variables,
                            u = o.policies,
                            c = o.store.getFieldValue(r, "__typename"),
                            l = [],
                            f = new He();
                        function h(e, t) {
                            var n;
                            return e.missing && (a = f.merge(a, (((n = {})[t] = e.missing), n))), e.result;
                        }
                        this.config.addTypename && "string" === typeof c && !u.rootIdsByTypename[c] && l.push({ __typename: c });
                        var p = new Set(n.selections);
                        p.forEach(function (e) {
                            var n, d;
                            if (Ge(e, s))
                                if (z(e)) {
                                    var v = u.readField({ fieldName: e.name.value, field: e, variables: o.variables, from: r }, o),
                                        y = G(e);
                                    void 0 === v
                                        ? gt.added(e) || (a = f.merge(a, (((n = {})[y] = "Can't find field '".concat(e.name.value, "' on ").concat(C(r) ? r.__ref + " object" : "object " + JSON.stringify(r, null, 2))), n)))
                                        : ot(v)
                                        ? (v = h(t.executeSubSelectedArray({ field: e, array: v, enclosingRef: i, context: o }), y))
                                        : e.selectionSet
                                        ? null != v && (v = h(t.executeSelectionSet({ selectionSet: e.selectionSet, objectOrReference: v, enclosingRef: C(v) ? v : i, context: o }), y))
                                        : o.canonizeResults && (v = t.canon.pass(v)),
                                        void 0 !== v && l.push((((d = {})[y] = v), d));
                                } else {
                                    var m = V(e, o.fragmentMap);
                                    m && u.fragmentMatches(m, c) && m.selectionSet.selections.forEach(p.add, p);
                                }
                        });
                        var d = { result: Je(l), missing: a },
                            v = o.canonizeResults ? this.canon.admit(d) : (0, Ln.J)(d);
                        return v.result && this.knownResults.set(v.result, n), v;
                    }),
                    (e.prototype.execSubSelectedArrayImpl = function (e) {
                        var t,
                            n = this,
                            r = e.field,
                            o = e.array,
                            a = e.enclosingRef,
                            s = e.context,
                            u = new He();
                        function c(e, n) {
                            var r;
                            return e.missing && (t = u.merge(t, (((r = {})[n] = e.missing), r))), e.result;
                        }
                        return (
                            r.selectionSet && (o = o.filter(s.store.canRead)),
                            (o = o.map(function (e, t) {
                                return null === e
                                    ? null
                                    : ot(e)
                                    ? c(n.executeSubSelectedArray({ field: r, array: e, enclosingRef: a, context: s }), t)
                                    : r.selectionSet
                                    ? c(n.executeSelectionSet({ selectionSet: r.selectionSet, objectOrReference: e, enclosingRef: C(e) ? e : a, context: s }), t)
                                    : (__DEV__ &&
                                          (function (e, t, n) {
                                              if (!t.selectionSet) {
                                                  var r = new Set([n]);
                                                  r.forEach(function (n) {
                                                      (0, I.s)(n) &&
                                                          (__DEV__
                                                              ? (0, i.kG)(
                                                                    !C(n),
                                                                    "Missing selection set for object of type "
                                                                        .concat(
                                                                            (function (e, t) {
                                                                                return C(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
                                                                            })(e, n),
                                                                            " returned for query field "
                                                                        )
                                                                        .concat(t.name.value)
                                                                )
                                                              : (0, i.kG)(!C(n), 5),
                                                          Object.values(n).forEach(r.add, r));
                                                  });
                                              }
                                          })(s.store, r, e),
                                      e);
                            })),
                            { result: s.canonizeResults ? this.canon.admit(o) : o, missing: t }
                        );
                    }),
                    e
                );
            })();
            function er(e) {
                try {
                    JSON.stringify(e, function (e, t) {
                        if ("string" === typeof t) throw t;
                        return t;
                    });
                } catch (t) {
                    return t;
                }
            }
            var tr = Object.create(null);
            function nr(e) {
                var t = JSON.stringify(e);
                return tr[t] || (tr[t] = Object.create(null));
            }
            function rr(e) {
                var t = nr(e);
                return (
                    t.keyFieldsFn ||
                    (t.keyFieldsFn = function (t, n) {
                        var r = function (e, t) {
                                return n.readField(t, e);
                            },
                            o = (n.keyObject = or(e, function (e) {
                                var o = ur(n.storeObject, e, r);
                                return (
                                    void 0 === o && t !== n.storeObject && Xe.call(t, e[0]) && (o = ur(t, e, sr)),
                                    __DEV__ ? (0, i.kG)(void 0 !== o, "Missing field '".concat(e.join("."), "' while extracting keyFields from ").concat(JSON.stringify(t))) : (0, i.kG)(void 0 !== o, 2),
                                    o
                                );
                            }));
                        return "".concat(n.typename, ":").concat(JSON.stringify(o));
                    })
                );
            }
            function ir(e) {
                var t = nr(e);
                return (
                    t.keyArgsFn ||
                    (t.keyArgsFn = function (t, n) {
                        var r = n.field,
                            i = n.variables,
                            o = n.fieldName,
                            a = or(e, function (e) {
                                var n = e[0],
                                    o = n.charAt(0);
                                if ("@" !== o)
                                    if ("$" !== o) {
                                        if (t) return ur(t, e);
                                    } else {
                                        var a = n.slice(1);
                                        if (i && Xe.call(i, a)) {
                                            var s = e.slice(0);
                                            return (s[0] = a), ur(i, s);
                                        }
                                    }
                                else if (r && (0, xt.O)(r.directives)) {
                                    var u = n.slice(1),
                                        c = r.directives.find(function (e) {
                                            return e.name.value === u;
                                        }),
                                        l = c && B(c, i);
                                    return l && ur(l, e.slice(1));
                                }
                            }),
                            s = JSON.stringify(a);
                        return (t || "{}" !== s) && (o += ":" + s), o;
                    })
                );
            }
            function or(e, t) {
                var n = new He();
                return ar(e).reduce(function (e, r) {
                    var i,
                        o = t(r);
                    if (void 0 !== o) {
                        for (var a = r.length - 1; a >= 0; --a) ((i = {})[r[a]] = o), (o = i);
                        e = n.merge(e, o);
                    }
                    return e;
                }, Object.create(null));
            }
            function ar(e) {
                var t = nr(e);
                if (!t.paths) {
                    var n = (t.paths = []),
                        r = [];
                    e.forEach(function (t, i) {
                        ot(t)
                            ? (ar(t).forEach(function (e) {
                                  return n.push(r.concat(e));
                              }),
                              (r.length = 0))
                            : (r.push(t), ot(e[i + 1]) || (n.push(r.slice(0)), (r.length = 0)));
                    });
                }
                return t.paths;
            }
            function sr(e, t) {
                return e[t];
            }
            function ur(e, t, n) {
                return (
                    (n = n || sr),
                    cr(
                        t.reduce(function e(t, r) {
                            return ot(t)
                                ? t.map(function (t) {
                                      return e(t, r);
                                  })
                                : t && n(t, r);
                        }, e)
                    )
                );
            }
            function cr(e) {
                return (0, I.s)(e)
                    ? ot(e)
                        ? e.map(cr)
                        : or(Object.keys(e).sort(), function (t) {
                              return ur(e, t);
                          })
                    : e;
            }
            function lr(e) {
                return void 0 !== e.args ? e.args : e.field ? B(e.field, e.variables) : null;
            }
            M.setStringify(ct);
            var fr = function () {},
                hr = function (e, t) {
                    return t.fieldName;
                },
                pr = function (e, t, n) {
                    return (0, n.mergeObjects)(e, t);
                },
                dr = function (e, t) {
                    return t;
                },
                vr = (function () {
                    function e(e) {
                        (this.config = e),
                            (this.typePolicies = Object.create(null)),
                            (this.toBeAdded = Object.create(null)),
                            (this.supertypeMap = new Map()),
                            (this.fuzzySubtypes = new Map()),
                            (this.rootIdsByTypename = Object.create(null)),
                            (this.rootTypenamesById = Object.create(null)),
                            (this.usingPossibleTypes = !1),
                            (this.config = (0, u.pi)({ dataIdFromObject: $e }, e)),
                            (this.cache = this.config.cache),
                            this.setRootTypename("Query"),
                            this.setRootTypename("Mutation"),
                            this.setRootTypename("Subscription"),
                            e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
                            e.typePolicies && this.addTypePolicies(e.typePolicies);
                    }
                    return (
                        (e.prototype.identify = function (e, t) {
                            var n,
                                r = this,
                                i = (t && (t.typename || (null === (n = t.storeObject) || void 0 === n ? void 0 : n.__typename))) || e.__typename;
                            if (i === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
                            for (
                                var o,
                                    a = (t && t.storeObject) || e,
                                    s = (0, u.pi)((0, u.pi)({}, t), {
                                        typename: i,
                                        storeObject: a,
                                        readField:
                                            (t && t.readField) ||
                                            function () {
                                                var e = mr(arguments, a);
                                                return r.readField(e, { store: r.cache.data, variables: e.variables });
                                            },
                                    }),
                                    c = i && this.getTypePolicy(i),
                                    l = (c && c.keyFn) || this.config.dataIdFromObject;
                                l;

                            ) {
                                var f = l(e, s);
                                if (!ot(f)) {
                                    o = f;
                                    break;
                                }
                                l = rr(f);
                            }
                            return (o = o ? String(o) : void 0), s.keyObject ? [o, s.keyObject] : [o];
                        }),
                        (e.prototype.addTypePolicies = function (e) {
                            var t = this;
                            Object.keys(e).forEach(function (n) {
                                var r = e[n],
                                    i = r.queryType,
                                    o = r.mutationType,
                                    a = r.subscriptionType,
                                    s = (0, u._T)(r, ["queryType", "mutationType", "subscriptionType"]);
                                i && t.setRootTypename("Query", n), o && t.setRootTypename("Mutation", n), a && t.setRootTypename("Subscription", n), Xe.call(t.toBeAdded, n) ? t.toBeAdded[n].push(s) : (t.toBeAdded[n] = [s]);
                            });
                        }),
                        (e.prototype.updateTypePolicy = function (e, t) {
                            var n = this,
                                r = this.getTypePolicy(e),
                                i = t.keyFields,
                                o = t.fields;
                            function a(e, t) {
                                e.merge = "function" === typeof t ? t : !0 === t ? pr : !1 === t ? dr : e.merge;
                            }
                            a(r, t.merge),
                                (r.keyFn = !1 === i ? fr : ot(i) ? rr(i) : "function" === typeof i ? i : r.keyFn),
                                o &&
                                    Object.keys(o).forEach(function (t) {
                                        var r = n.getFieldPolicy(e, t, !0),
                                            i = o[t];
                                        if ("function" === typeof i) r.read = i;
                                        else {
                                            var s = i.keyArgs,
                                                u = i.read,
                                                c = i.merge;
                                            (r.keyFn = !1 === s ? hr : ot(s) ? ir(s) : "function" === typeof s ? s : r.keyFn), "function" === typeof u && (r.read = u), a(r, c);
                                        }
                                        r.read && r.merge && (r.keyFn = r.keyFn || hr);
                                    });
                        }),
                        (e.prototype.setRootTypename = function (e, t) {
                            void 0 === t && (t = e);
                            var n = "ROOT_" + e.toUpperCase(),
                                r = this.rootTypenamesById[n];
                            t !== r &&
                                (__DEV__ ? (0, i.kG)(!r || r === e, "Cannot change root ".concat(e, " __typename more than once")) : (0, i.kG)(!r || r === e, 3),
                                r && delete this.rootIdsByTypename[r],
                                (this.rootIdsByTypename[t] = n),
                                (this.rootTypenamesById[n] = t));
                        }),
                        (e.prototype.addPossibleTypes = function (e) {
                            var t = this;
                            (this.usingPossibleTypes = !0),
                                Object.keys(e).forEach(function (n) {
                                    t.getSupertypeSet(n, !0),
                                        e[n].forEach(function (e) {
                                            t.getSupertypeSet(e, !0).add(n);
                                            var r = e.match(tt);
                                            (r && r[0] === e) || t.fuzzySubtypes.set(e, new RegExp(e));
                                        });
                                });
                        }),
                        (e.prototype.getTypePolicy = function (e) {
                            var t = this;
                            if (!Xe.call(this.typePolicies, e)) {
                                var n = (this.typePolicies[e] = Object.create(null));
                                n.fields = Object.create(null);
                                var r = this.supertypeMap.get(e);
                                r &&
                                    r.size &&
                                    r.forEach(function (e) {
                                        var r = t.getTypePolicy(e),
                                            i = r.fields,
                                            o = (0, u._T)(r, ["fields"]);
                                        Object.assign(n, o), Object.assign(n.fields, i);
                                    });
                            }
                            var i = this.toBeAdded[e];
                            return (
                                i &&
                                    i.length &&
                                    i.splice(0).forEach(function (n) {
                                        t.updateTypePolicy(e, n);
                                    }),
                                this.typePolicies[e]
                            );
                        }),
                        (e.prototype.getFieldPolicy = function (e, t, n) {
                            if (e) {
                                var r = this.getTypePolicy(e).fields;
                                return r[t] || (n && (r[t] = Object.create(null)));
                            }
                        }),
                        (e.prototype.getSupertypeSet = function (e, t) {
                            var n = this.supertypeMap.get(e);
                            return !n && t && this.supertypeMap.set(e, (n = new Set())), n;
                        }),
                        (e.prototype.fragmentMatches = function (e, t, n, r) {
                            var o = this;
                            if (!e.typeCondition) return !0;
                            if (!t) return !1;
                            var a = e.typeCondition.name.value;
                            if (t === a) return !0;
                            if (this.usingPossibleTypes && this.supertypeMap.has(a))
                                for (
                                    var s = this.getSupertypeSet(t, !0),
                                        u = [s],
                                        c = function (e) {
                                            var t = o.getSupertypeSet(e, !1);
                                            t && t.size && u.indexOf(t) < 0 && u.push(t);
                                        },
                                        l = !(!n || !this.fuzzySubtypes.size),
                                        f = !1,
                                        h = 0;
                                    h < u.length;
                                    ++h
                                ) {
                                    var p = u[h];
                                    if (p.has(a)) return s.has(a) || (f && __DEV__ && i.kG.warn("Inferring subtype ".concat(t, " of supertype ").concat(a)), s.add(a)), !0;
                                    p.forEach(c),
                                        l &&
                                            h === u.length - 1 &&
                                            rt(e.selectionSet, n, r) &&
                                            ((l = !1),
                                            (f = !0),
                                            this.fuzzySubtypes.forEach(function (e, n) {
                                                var r = t.match(e);
                                                r && r[0] === t && c(n);
                                            }));
                                }
                            return !1;
                        }),
                        (e.prototype.hasKeyArgs = function (e, t) {
                            var n = this.getFieldPolicy(e, t, !1);
                            return !(!n || !n.keyFn);
                        }),
                        (e.prototype.getStoreFieldName = function (e) {
                            var t,
                                n = e.typename,
                                r = e.fieldName,
                                i = this.getFieldPolicy(n, r, !1),
                                o = i && i.keyFn;
                            if (o && n)
                                for (var a = { typename: n, fieldName: r, field: e.field || null, variables: e.variables }, s = lr(e); o; ) {
                                    var u = o(s, a);
                                    if (!ot(u)) {
                                        t = u || r;
                                        break;
                                    }
                                    o = ir(u);
                                }
                            return (
                                void 0 === t &&
                                    (t = e.field
                                        ? (function (e, t) {
                                              var n = null;
                                              e.directives &&
                                                  ((n = {}),
                                                  e.directives.forEach(function (e) {
                                                      (n[e.name.value] = {}),
                                                          e.arguments &&
                                                              e.arguments.forEach(function (r) {
                                                                  var i = r.name,
                                                                      o = r.value;
                                                                  return q(n[e.name.value], i, o, t);
                                                              });
                                                  }));
                                              var r = null;
                                              return (
                                                  e.arguments &&
                                                      e.arguments.length &&
                                                      ((r = {}),
                                                      e.arguments.forEach(function (e) {
                                                          var n = e.name,
                                                              i = e.value;
                                                          return q(r, n, i, t);
                                                      })),
                                                  M(e.name.value, r, n)
                                              );
                                          })(e.field, e.variables)
                                        : M(r, lr(e))),
                                !1 === t ? r : r === nt(t) ? t : r + ":" + t
                            );
                        }),
                        (e.prototype.readField = function (e, t) {
                            var n = e.from;
                            if (n && (e.field || e.fieldName)) {
                                if (void 0 === e.typename) {
                                    var r = t.store.getFieldValue(n, "__typename");
                                    r && (e.typename = r);
                                }
                                var i = this.getStoreFieldName(e),
                                    o = nt(i),
                                    a = t.store.getFieldValue(n, i),
                                    s = this.getFieldPolicy(e.typename, o, !1),
                                    u = s && s.read;
                                if (u) {
                                    var c = yr(this, n, e, t, t.store.getStorage(C(n) ? n.__ref : n, i));
                                    return wn.withValue(this.cache, u, [a, c]);
                                }
                                return a;
                            }
                        }),
                        (e.prototype.getReadFunction = function (e, t) {
                            var n = this.getFieldPolicy(e, t, !1);
                            return n && n.read;
                        }),
                        (e.prototype.getMergeFunction = function (e, t, n) {
                            var r = this.getFieldPolicy(e, t, !1),
                                i = r && r.merge;
                            return !i && n && (i = (r = this.getTypePolicy(n)) && r.merge), i;
                        }),
                        (e.prototype.runMergeFunction = function (e, t, n, r, i) {
                            var o = n.field,
                                a = n.typename,
                                s = n.merge;
                            return s === pr
                                ? br(r.store)(e, t)
                                : s === dr
                                ? t
                                : (r.overwrite && (e = void 0), s(e, t, yr(this, void 0, { typename: a, fieldName: o.name.value, field: o, variables: r.variables }, r, i || Object.create(null))));
                        }),
                        e
                    );
                })();
            function yr(e, t, n, r, i) {
                var o = e.getStoreFieldName(n),
                    a = nt(o),
                    s = n.variables || r.variables,
                    u = r.store,
                    c = u.toReference,
                    l = u.canRead;
                return {
                    args: lr(n),
                    field: n.field || null,
                    fieldName: a,
                    storeFieldName: o,
                    variables: s,
                    isReference: C,
                    toReference: c,
                    storage: i,
                    cache: e.cache,
                    canRead: l,
                    readField: function () {
                        return e.readField(mr(arguments, t, s), r);
                    },
                    mergeObjects: br(r.store),
                };
            }
            function mr(e, t, n) {
                var r,
                    o = e[0],
                    a = e[1],
                    s = e.length;
                return (
                    "string" === typeof o ? (r = { fieldName: o, from: s > 1 ? a : t }) : ((r = (0, u.pi)({}, o)), Xe.call(r, "from") || (r.from = t)),
                    __DEV__ &&
                        void 0 === r.from &&
                        __DEV__ &&
                        i.kG.warn(
                            "Undefined 'from' passed to readField with arguments ".concat(
                                (function (e) {
                                    var t = kt("stringifyForDisplay");
                                    return JSON.stringify(e, function (e, n) {
                                        return void 0 === n ? t : n;
                                    })
                                        .split(JSON.stringify(t))
                                        .join("<undefined>");
                                })(Array.from(e))
                            )
                        ),
                    void 0 === r.variables && (r.variables = n),
                    r
                );
            }
            function br(e) {
                return function (t, n) {
                    if (ot(t) || ot(n)) throw __DEV__ ? new i.ej("Cannot automatically merge arrays") : new i.ej(4);
                    if ((0, I.s)(t) && (0, I.s)(n)) {
                        var r = e.getFieldValue(t, "__typename"),
                            o = e.getFieldValue(n, "__typename");
                        if (r && o && r !== o) return n;
                        if (C(t) && it(n)) return e.merge(t.__ref, n), t;
                        if (it(t) && C(n)) return e.merge(t, n.__ref), n;
                        if (it(t) && it(n)) return (0, u.pi)((0, u.pi)({}, t), n);
                    }
                    return n;
                };
            }
            function gr(e, t, n) {
                var r = "".concat(t).concat(n),
                    i = e.flavors.get(r);
                return i || e.flavors.set(r, (i = e.clientOnly === t && e.deferred === n ? e : (0, u.pi)((0, u.pi)({}, e), { clientOnly: t, deferred: n }))), i;
            }
            var _r = (function () {
                    function e(e, t) {
                        (this.cache = e), (this.reader = t);
                    }
                    return (
                        (e.prototype.writeToStore = function (e, t) {
                            var n = this,
                                r = t.query,
                                o = t.result,
                                a = t.dataId,
                                s = t.variables,
                                c = t.overwrite,
                                l = J(r),
                                f = new He();
                            s = (0, u.pi)((0, u.pi)({}, Z(l)), s);
                            var h = {
                                    store: e,
                                    written: Object.create(null),
                                    merge: function (e, t) {
                                        return f.merge(e, t);
                                    },
                                    variables: s,
                                    varString: ct(s),
                                    fragmentMap: N(H(r)),
                                    overwrite: !!c,
                                    incomingById: new Map(),
                                    clientOnly: !1,
                                    deferred: !1,
                                    flavors: new Map(),
                                },
                                p = this.processSelectionSet({ result: o || Object.create(null), dataId: a, selectionSet: l.selectionSet, mergeTree: { map: new Map() }, context: h });
                            if (!C(p)) throw __DEV__ ? new i.ej("Could not identify object ".concat(JSON.stringify(o))) : new i.ej(6);
                            return (
                                h.incomingById.forEach(function (t, r) {
                                    var o = t.storeObject,
                                        a = t.mergeTree,
                                        s = t.fieldNodeSet,
                                        u = R(r);
                                    if (a && a.map.size) {
                                        var c = n.applyMerges(a, u, o, h);
                                        if (C(c)) return;
                                        o = c;
                                    }
                                    if (__DEV__ && !h.overwrite) {
                                        var l = Object.create(null);
                                        s.forEach(function (e) {
                                            e.selectionSet && (l[e.name.value] = !0);
                                        });
                                        Object.keys(o).forEach(function (e) {
                                            (function (e) {
                                                return !0 === l[nt(e)];
                                            })(e) &&
                                                !(function (e) {
                                                    var t = a && a.map.get(e);
                                                    return Boolean(t && t.info && t.info.merge);
                                                })(e) &&
                                                (function (e, t, n, r) {
                                                    var o = function (e) {
                                                            var t = r.getFieldValue(e, n);
                                                            return "object" === typeof t && t;
                                                        },
                                                        a = o(e);
                                                    if (!a) return;
                                                    var s = o(t);
                                                    if (!s) return;
                                                    if (C(a)) return;
                                                    if ((0, Re.D)(a, s)) return;
                                                    if (
                                                        Object.keys(a).every(function (e) {
                                                            return void 0 !== r.getFieldValue(s, e);
                                                        })
                                                    )
                                                        return;
                                                    var u = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"),
                                                        c = nt(n),
                                                        l = "".concat(u, ".").concat(c);
                                                    if (Dr.has(l)) return;
                                                    Dr.add(l);
                                                    var f = [];
                                                    ot(a) ||
                                                        ot(s) ||
                                                        [a, s].forEach(function (e) {
                                                            var t = r.getFieldValue(e, "__typename");
                                                            "string" !== typeof t || f.includes(t) || f.push(t);
                                                        });
                                                    __DEV__ &&
                                                        i.kG.warn(
                                                            "Cache data may be lost when replacing the "
                                                                .concat(c, " field of a ")
                                                                .concat(u, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ")
                                                                .concat(f.length ? "either ensure all objects of type " + f.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ")
                                                                .concat(l, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ")
                                                                .concat(JSON.stringify(a).slice(0, 1e3), "\n  incoming: ")
                                                                .concat(
                                                                    JSON.stringify(s).slice(0, 1e3),
                                                                    "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"
                                                                )
                                                        );
                                                })(u, o, e, h.store);
                                        });
                                    }
                                    e.merge(r, o);
                                }),
                                e.retain(p.__ref),
                                p
                            );
                        }),
                        (e.prototype.processSelectionSet = function (e) {
                            var t = this,
                                n = e.dataId,
                                r = e.result,
                                o = e.selectionSet,
                                a = e.context,
                                s = e.mergeTree,
                                c = this.cache.policies,
                                l = Object.create(null),
                                f = (n && c.rootTypenamesById[n]) || U(r, o, a.fragmentMap) || (n && a.store.get(n, "__typename"));
                            "string" === typeof f && (l.__typename = f);
                            var h = function () {
                                    var e = mr(arguments, l, a.variables);
                                    if (C(e.from)) {
                                        var t = a.incomingById.get(e.from.__ref);
                                        if (t) {
                                            var n = c.readField((0, u.pi)((0, u.pi)({}, e), { from: t.storeObject }), a);
                                            if (void 0 !== n) return n;
                                        }
                                    }
                                    return c.readField(e, a);
                                },
                                p = new Set();
                            this.flattenFields(o, r, a, f).forEach(function (e, n) {
                                var o,
                                    a = G(n),
                                    u = r[a];
                                if ((p.add(n), void 0 !== u)) {
                                    var d = c.getStoreFieldName({ typename: f, fieldName: n.name.value, field: n, variables: e.variables }),
                                        v = Or(s, d),
                                        y = t.processFieldValue(u, n, n.selectionSet ? gr(e, !1, !1) : e, v),
                                        m = void 0;
                                    n.selectionSet && (C(y) || it(y)) && (m = h("__typename", y));
                                    var b = c.getMergeFunction(f, n.name.value, m);
                                    b ? (v.info = { field: n, typename: f, merge: b }) : Er(s, d), (l = e.merge(l, (((o = {})[d] = y), o)));
                                } else !__DEV__ || e.clientOnly || e.deferred || gt.added(n) || c.getReadFunction(f, n.name.value) || (__DEV__ && i.kG.error("Missing field '".concat(G(n), "' while writing result ").concat(JSON.stringify(r, null, 2)).substring(0, 1e3)));
                            });
                            try {
                                var d = c.identify(r, { typename: f, selectionSet: o, fragmentMap: a.fragmentMap, storeObject: l, readField: h }),
                                    v = d[0],
                                    y = d[1];
                                (n = n || v), y && (l = a.merge(l, y));
                            } catch (_) {
                                if (!n) throw _;
                            }
                            if ("string" === typeof n) {
                                var m = R(n),
                                    b = a.written[n] || (a.written[n] = []);
                                if (b.indexOf(o) >= 0) return m;
                                if ((b.push(o), this.reader && this.reader.isFresh(r, m, o, a))) return m;
                                var g = a.incomingById.get(n);
                                return (
                                    g
                                        ? ((g.storeObject = a.merge(g.storeObject, l)),
                                          (g.mergeTree = Sr(g.mergeTree, s)),
                                          p.forEach(function (e) {
                                              return g.fieldNodeSet.add(e);
                                          }))
                                        : a.incomingById.set(n, { storeObject: l, mergeTree: kr(s) ? void 0 : s, fieldNodeSet: p }),
                                    m
                                );
                            }
                            return l;
                        }),
                        (e.prototype.processFieldValue = function (e, t, n, r) {
                            var i = this;
                            return t.selectionSet && null !== e
                                ? ot(e)
                                    ? e.map(function (e, o) {
                                          var a = i.processFieldValue(e, t, n, Or(r, o));
                                          return Er(r, o), a;
                                      })
                                    : this.processSelectionSet({ result: e, selectionSet: t.selectionSet, context: n, mergeTree: r })
                                : __DEV__
                                ? Nt(e)
                                : e;
                        }),
                        (e.prototype.flattenFields = function (e, t, n, r) {
                            void 0 === r && (r = U(t, e, n.fragmentMap));
                            var i = new Map(),
                                o = this.cache.policies,
                                a = new Le(!1);
                            return (
                                (function e(s, u) {
                                    var c = a.lookup(s, u.clientOnly, u.deferred);
                                    c.visited ||
                                        ((c.visited = !0),
                                        s.selections.forEach(function (a) {
                                            if (Ge(a, n.variables)) {
                                                var s = u.clientOnly,
                                                    c = u.deferred;
                                                if (
                                                    ((s && c) ||
                                                        !(0, xt.O)(a.directives) ||
                                                        a.directives.forEach(function (e) {
                                                            var t = e.name.value;
                                                            if (("client" === t && (s = !0), "defer" === t)) {
                                                                var r = B(e, n.variables);
                                                                (r && !1 === r.if) || (c = !0);
                                                            }
                                                        }),
                                                    z(a))
                                                ) {
                                                    var l = i.get(a);
                                                    l && ((s = s && l.clientOnly), (c = c && l.deferred)), i.set(a, gr(n, s, c));
                                                } else {
                                                    var f = V(a, n.fragmentMap);
                                                    f && o.fragmentMatches(f, r, t, n.variables) && e(f.selectionSet, gr(n, s, c));
                                                }
                                            }
                                        }));
                                })(e, n),
                                i
                            );
                        }),
                        (e.prototype.applyMerges = function (e, t, n, r, o) {
                            var a,
                                s = this;
                            if (e.map.size && !C(n)) {
                                var c,
                                    l = ot(n) || (!C(t) && !it(t)) ? void 0 : t,
                                    f = n;
                                l && !o && (o = [C(l) ? l.__ref : l]);
                                var h = function (e, t) {
                                    return ot(e) ? ("number" === typeof t ? e[t] : void 0) : r.store.getFieldValue(e, String(t));
                                };
                                e.map.forEach(function (e, t) {
                                    var n = h(l, t),
                                        a = h(f, t);
                                    if (void 0 !== a) {
                                        o && o.push(t);
                                        var u = s.applyMerges(e, n, a, r, o);
                                        u !== a && (c = c || new Map()).set(t, u), o && (0, i.kG)(o.pop() === t);
                                    }
                                }),
                                    c &&
                                        ((n = ot(f) ? f.slice(0) : (0, u.pi)({}, f)),
                                        c.forEach(function (e, t) {
                                            n[t] = e;
                                        }));
                            }
                            return e.info ? this.cache.policies.runMergeFunction(t, n, e.info, r, o && (a = r.store).getStorage.apply(a, o)) : n;
                        }),
                        e
                    );
                })(),
                wr = [];
            function Or(e, t) {
                var n = e.map;
                return n.has(t) || n.set(t, wr.pop() || { map: new Map() }), n.get(t);
            }
            function Sr(e, t) {
                if (e === t || !t || kr(t)) return e;
                if (!e || kr(e)) return t;
                var n = e.info && t.info ? (0, u.pi)((0, u.pi)({}, e.info), t.info) : e.info || t.info,
                    r = e.map.size && t.map.size,
                    i = { info: n, map: r ? new Map() : e.map.size ? e.map : t.map };
                if (r) {
                    var o = new Set(t.map.keys());
                    e.map.forEach(function (e, n) {
                        i.map.set(n, Sr(e, t.map.get(n))), o.delete(n);
                    }),
                        o.forEach(function (n) {
                            i.map.set(n, Sr(t.map.get(n), e.map.get(n)));
                        });
                }
                return i;
            }
            function kr(e) {
                return !e || !(e.info || e.map.size);
            }
            function Er(e, t) {
                var n = e.map,
                    r = n.get(t);
                r && kr(r) && (wr.push(r), n.delete(t));
            }
            var Dr = new Set();
            var Tr = (function (e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var n = e.call(this) || this;
                        return (
                            (n.watches = new Set()),
                            (n.typenameDocumentCache = new Map()),
                            (n.makeVar = En),
                            (n.txCount = 0),
                            (n.config = (function (e) {
                                return (0, Be.o)(Ze, e);
                            })(t)),
                            (n.addTypename = !!n.config.addTypename),
                            (n.policies = new vr({ cache: n, dataIdFromObject: n.config.dataIdFromObject, possibleTypes: n.config.possibleTypes, typePolicies: n.config.typePolicies })),
                            n.init(),
                            n
                        );
                    }
                    return (
                        (0, u.ZT)(t, e),
                        (t.prototype.init = function () {
                            var e = (this.data = new Un.Root({ policies: this.policies, resultCaching: this.config.resultCaching }));
                            (this.optimisticData = e.stump), this.resetResultCache();
                        }),
                        (t.prototype.resetResultCache = function (e) {
                            var t = this,
                                n = this.storeReader;
                            (this.storeWriter = new _r(
                                this,
                                (this.storeReader = new Zn({ cache: this, addTypename: this.addTypename, resultCacheMaxSize: this.config.resultCacheMaxSize, canonizeResults: et(this.config), canon: e ? void 0 : n && n.canon }))
                            )),
                                (this.maybeBroadcastWatch = _n(
                                    function (e, n) {
                                        return t.broadcastWatch(e, n);
                                    },
                                    {
                                        max: this.config.resultCacheMaxSize,
                                        makeCacheKey: function (e) {
                                            var n = e.optimistic ? t.optimisticData : t.data;
                                            if (Xn(n)) {
                                                var r = e.optimistic,
                                                    i = e.rootId,
                                                    o = e.variables;
                                                return n.makeCacheKey(e.query, e.callback, ct({ optimistic: r, rootId: i, variables: o }));
                                            }
                                        },
                                    }
                                )),
                                new Set([this.data.group, this.optimisticData.group]).forEach(function (e) {
                                    return e.resetCaching();
                                });
                        }),
                        (t.prototype.restore = function (e) {
                            return this.init(), e && this.data.replace(e), this;
                        }),
                        (t.prototype.extract = function (e) {
                            return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract();
                        }),
                        (t.prototype.read = function (e) {
                            var t = e.returnPartialData,
                                n = void 0 !== t && t;
                            try {
                                return this.storeReader.diffQueryAgainstStore((0, u.pi)((0, u.pi)({}, e), { store: e.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: n })).result || null;
                            } catch (r) {
                                if (r instanceof Mn) return null;
                                throw r;
                            }
                        }),
                        (t.prototype.write = function (e) {
                            try {
                                return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
                            } finally {
                                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
                            }
                        }),
                        (t.prototype.modify = function (e) {
                            if (Xe.call(e, "id") && !e.id) return !1;
                            var t = e.optimistic ? this.optimisticData : this.data;
                            try {
                                return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
                            } finally {
                                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
                            }
                        }),
                        (t.prototype.diff = function (e) {
                            return this.storeReader.diffQueryAgainstStore((0, u.pi)((0, u.pi)({}, e), { store: e.optimistic ? this.optimisticData : this.data, rootId: e.id || "ROOT_QUERY", config: this.config }));
                        }),
                        (t.prototype.watch = function (e) {
                            var t,
                                n = this;
                            return (
                                this.watches.size ||
                                    Sn((t = this)).vars.forEach(function (e) {
                                        return e.attachCache(t);
                                    }),
                                this.watches.add(e),
                                e.immediate && this.maybeBroadcastWatch(e),
                                function () {
                                    n.watches.delete(e) && !n.watches.size && kn(n), n.maybeBroadcastWatch.forget(e);
                                }
                            );
                        }),
                        (t.prototype.gc = function (e) {
                            ct.reset();
                            var t = this.optimisticData.gc();
                            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t;
                        }),
                        (t.prototype.retain = function (e, t) {
                            return (t ? this.optimisticData : this.data).retain(e);
                        }),
                        (t.prototype.release = function (e, t) {
                            return (t ? this.optimisticData : this.data).release(e);
                        }),
                        (t.prototype.identify = function (e) {
                            if (C(e)) return e.__ref;
                            try {
                                return this.policies.identify(e)[0];
                            } catch (t) {
                                __DEV__ && i.kG.warn(t);
                            }
                        }),
                        (t.prototype.evict = function (e) {
                            if (!e.id) {
                                if (Xe.call(e, "id")) return !1;
                                e = (0, u.pi)((0, u.pi)({}, e), { id: "ROOT_QUERY" });
                            }
                            try {
                                return ++this.txCount, this.optimisticData.evict(e, this.data);
                            } finally {
                                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
                            }
                        }),
                        (t.prototype.reset = function (e) {
                            var t = this;
                            return (
                                this.init(),
                                ct.reset(),
                                e && e.discardWatches
                                    ? (this.watches.forEach(function (e) {
                                          return t.maybeBroadcastWatch.forget(e);
                                      }),
                                      this.watches.clear(),
                                      kn(this))
                                    : this.broadcastWatches(),
                                Promise.resolve()
                            );
                        }),
                        (t.prototype.removeOptimistic = function (e) {
                            var t = this.optimisticData.removeLayer(e);
                            t !== this.optimisticData && ((this.optimisticData = t), this.broadcastWatches());
                        }),
                        (t.prototype.batch = function (e) {
                            var t,
                                n = this,
                                r = e.update,
                                i = e.optimistic,
                                o = void 0 === i || i,
                                a = e.removeOptimistic,
                                s = e.onWatchUpdated,
                                c = function (e) {
                                    var i = n,
                                        o = i.data,
                                        a = i.optimisticData;
                                    ++n.txCount, e && (n.data = n.optimisticData = e);
                                    try {
                                        return (t = r(n));
                                    } finally {
                                        --n.txCount, (n.data = o), (n.optimisticData = a);
                                    }
                                },
                                l = new Set();
                            return (
                                s &&
                                    !this.txCount &&
                                    this.broadcastWatches(
                                        (0, u.pi)((0, u.pi)({}, e), {
                                            onWatchUpdated: function (e) {
                                                return l.add(e), !1;
                                            },
                                        })
                                    ),
                                "string" === typeof o ? (this.optimisticData = this.optimisticData.addLayer(o, c)) : !1 === o ? c(this.data) : c(),
                                "string" === typeof a && (this.optimisticData = this.optimisticData.removeLayer(a)),
                                s && l.size
                                    ? (this.broadcastWatches(
                                          (0, u.pi)((0, u.pi)({}, e), {
                                              onWatchUpdated: function (e, t) {
                                                  var n = s.call(this, e, t);
                                                  return !1 !== n && l.delete(e), n;
                                              },
                                          })
                                      ),
                                      l.size &&
                                          l.forEach(function (e) {
                                              return n.maybeBroadcastWatch.dirty(e);
                                          }))
                                    : this.broadcastWatches(e),
                                t
                            );
                        }),
                        (t.prototype.performTransaction = function (e, t) {
                            return this.batch({ update: e, optimistic: t || null !== t });
                        }),
                        (t.prototype.transformDocument = function (e) {
                            if (this.addTypename) {
                                var t = this.typenameDocumentCache.get(e);
                                return t || ((t = gt(e)), this.typenameDocumentCache.set(e, t), this.typenameDocumentCache.set(t, t)), t;
                            }
                            return e;
                        }),
                        (t.prototype.broadcastWatches = function (e) {
                            var t = this;
                            this.txCount ||
                                this.watches.forEach(function (n) {
                                    return t.maybeBroadcastWatch(n, e);
                                });
                        }),
                        (t.prototype.broadcastWatch = function (e, t) {
                            var n = e.lastDiff,
                                r = this.diff(e);
                            (t && (e.optimistic && "string" === typeof t.optimistic && (r.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, r, n))) ||
                                (n && (0, Re.D)(n.result, r.result)) ||
                                e.callback((e.lastDiff = r), n);
                        }),
                        t
                    );
                })(Fn),
                jr = new qn({ uri: "https://blogapi.biggames.io/graphql", cache: new Tr({ addTypename: !1 }) }),
                xr = n(3578);
            function Ar(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            }
            function Ir(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            Ar(e, t, n[t]);
                        });
                }
                return e;
            }
            var Pr = function (e) {
                var t = e.Component,
                    n = e.pageProps;
                return (0, r.jsx)(s, { client: jr, children: (0, r.jsx)(xr.xf.Provider, { value: xr.h, children: (0, r.jsx)(t, Ir({}, n)) }) });
            };
        },
        3578: function (e, t, n) {
            "use strict";
            n.d(t, {
                xf: function () {
                    return a;
                },
                h: function () {
                    return o;
                },
                oR: function () {
                    return s;
                },
            });
            var r = n(7294),
                i = n(8949);
            var o = {
                    state: (function (e) {
                        return (0, i.ky)(e);
                    })({
                        hamburgerOpen: !1,
                        toggleSearch: !1,
                        counterDate: "",
                        counterEndText: "",
                        searchString: "",
                        searchIndex: 0,
                        resetSearch: !1,
                        imgObj: [],
                        heroTitleDesc: { title: "", description: "" },
                        toogleHamburger: function () {
                            this.hamburgerOpen = !this.hamburgerOpen;
                        },
                        toggleSearchField: function () {
                            this.toggleSearch = !this.toggleSearch;
                        },
                        getCounterTime: function (e) {
                            this.counterDate = e;
                        },
                        getCounterEndText: function (e) {
                            this.counterEndText = e;
                        },
                        getSearchString: function (e, t) {
                            (this.searchString = e), (this.searchIndex = t);
                        },
                        getImgObj: function (e) {
                            this.imgObj = e;
                        },
                        getHeroTitleDesc: function (e) {
                            (this.heroTitleDesc.title = e.title), (this.heroTitleDesc.description = e.description);
                        },
                        resetSearchFn: function () {
                            this.resetSearch;
                        },
                    }),
                },
                a = (0, r.createContext)(o);
            function s() {
                return (0, r.useContext)(a);
            }
        },
        6774: function () {},
        7663: function (e) {
            !(function () {
                var t = {
                        162: function (e) {
                            var t,
                                n,
                                r = (e.exports = {});
                            function i() {
                                throw new Error("setTimeout has not been defined");
                            }
                            function o() {
                                throw new Error("clearTimeout has not been defined");
                            }
                            function a(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === i || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
                                try {
                                    return t(e, 0);
                                } catch (r) {
                                    try {
                                        return t.call(null, e, 0);
                                    } catch (r) {
                                        return t.call(this, e, 0);
                                    }
                                }
                            }
                            !(function () {
                                try {
                                    t = "function" === typeof setTimeout ? setTimeout : i;
                                } catch (e) {
                                    t = i;
                                }
                                try {
                                    n = "function" === typeof clearTimeout ? clearTimeout : o;
                                } catch (e) {
                                    n = o;
                                }
                            })();
                            var s,
                                u = [],
                                c = !1,
                                l = -1;
                            function f() {
                                c && s && ((c = !1), s.length ? (u = s.concat(u)) : (l = -1), u.length && h());
                            }
                            function h() {
                                if (!c) {
                                    var e = a(f);
                                    c = !0;
                                    for (var t = u.length; t; ) {
                                        for (s = u, u = []; ++l < t; ) s && s[l].run();
                                        (l = -1), (t = u.length);
                                    }
                                    (s = null),
                                        (c = !1),
                                        (function (e) {
                                            if (n === clearTimeout) return clearTimeout(e);
                                            if ((n === o || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
                                            try {
                                                n(e);
                                            } catch (t) {
                                                try {
                                                    return n.call(null, e);
                                                } catch (t) {
                                                    return n.call(this, e);
                                                }
                                            }
                                        })(e);
                                }
                            }
                            function p(e, t) {
                                (this.fun = e), (this.array = t);
                            }
                            function d() {}
                            (r.nextTick = function (e) {
                                var t = new Array(arguments.length - 1);
                                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                u.push(new p(e, t)), 1 !== u.length || c || a(h);
                            }),
                                (p.prototype.run = function () {
                                    this.fun.apply(null, this.array);
                                }),
                                (r.title = "browser"),
                                (r.browser = !0),
                                (r.env = {}),
                                (r.argv = []),
                                (r.version = ""),
                                (r.versions = {}),
                                (r.on = d),
                                (r.addListener = d),
                                (r.once = d),
                                (r.off = d),
                                (r.removeListener = d),
                                (r.removeAllListeners = d),
                                (r.emit = d),
                                (r.prependListener = d),
                                (r.prependOnceListener = d),
                                (r.listeners = function (e) {
                                    return [];
                                }),
                                (r.binding = function (e) {
                                    throw new Error("process.binding is not supported");
                                }),
                                (r.cwd = function () {
                                    return "/";
                                }),
                                (r.chdir = function (e) {
                                    throw new Error("process.chdir is not supported");
                                }),
                                (r.umask = function () {
                                    return 0;
                                });
                        },
                    },
                    n = {};
                function r(e) {
                    var i = n[e];
                    if (void 0 !== i) return i.exports;
                    var o = (n[e] = { exports: {} }),
                        a = !0;
                    try {
                        t[e](o, o.exports, r), (a = !1);
                    } finally {
                        a && delete n[e];
                    }
                    return o.exports;
                }
                r.ab = "//";
                var i = r(162);
                e.exports = i;
            })();
        },
        655: function (e, t, n) {
            "use strict";
            n.d(t, {
                ZT: function () {
                    return i;
                },
                pi: function () {
                    return o;
                },
                _T: function () {
                    return a;
                },
                mG: function () {
                    return s;
                },
                Jh: function () {
                    return u;
                },
                ev: function () {
                    return c;
                },
            });
            var r = function (e, t) {
                return (
                    (r =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                                e.__proto__ = t;
                            }) ||
                        function (e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }),
                    r(e, t)
                );
            };
            function i(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function n() {
                    this.constructor = e;
                }
                r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }
            var o = function () {
                return (
                    (o =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e;
                        }),
                    o.apply(this, arguments)
                );
            };
            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                }
                return n;
            }
            function s(e, t, n, r) {
                return new (n || (n = Promise))(function (i, o) {
                    function a(e) {
                        try {
                            u(r.next(e));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function s(e) {
                        try {
                            u(r.throw(e));
                        } catch (t) {
                            o(t);
                        }
                    }
                    function u(e) {
                        var t;
                        e.done
                            ? i(e.value)
                            : ((t = e.value),
                              t instanceof n
                                  ? t
                                  : new n(function (e) {
                                        e(t);
                                    })).then(a, s);
                    }
                    u((r = r.apply(e, t || [])).next());
                });
            }
            function u(e, t) {
                var n,
                    r,
                    i,
                    o,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & i[0]) throw i[1];
                            return i[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (o = { next: s(0), throw: s(1), return: s(2) }),
                    "function" === typeof Symbol &&
                        (o[Symbol.iterator] = function () {
                            return this;
                        }),
                    o
                );
                function s(o) {
                    return function (s) {
                        return (function (o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (((n = 1), r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)) return i;
                                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, { value: o[1], done: !1 };
                                        case 5:
                                            a.label++, (r = o[1]), (o = [0]);
                                            continue;
                                        case 7:
                                            (o = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                                a.label = o[1];
                                                break;
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                (a.label = i[1]), (i = o);
                                                break;
                                            }
                                            if (i && a.label < i[2]) {
                                                (a.label = i[2]), a.ops.push(o);
                                                break;
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    o = t.call(e, a);
                                } catch (s) {
                                    (o = [6, s]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                        })([o, s]);
                    };
                }
            }
            Object.create;
            function c(e, t, n) {
                if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
                return e.concat(r || Array.prototype.slice.call(t));
            }
            Object.create;
        },
        1644: function (e, t, n) {
            "use strict";
            var r;
            function i(e) {
                return !!e && e < 7;
            }
            n.d(t, {
                I: function () {
                    return r;
                },
                O: function () {
                    return i;
                },
            }),
                (function (e) {
                    (e[(e.loading = 1)] = "loading"),
                        (e[(e.setVariables = 2)] = "setVariables"),
                        (e[(e.fetchMore = 3)] = "fetchMore"),
                        (e[(e.refetch = 4)] = "refetch"),
                        (e[(e.poll = 6)] = "poll"),
                        (e[(e.ready = 7)] = "ready"),
                        (e[(e.error = 8)] = "error");
                })(r || (r = {}));
        },
        990: function (e, t, n) {
            "use strict";
            n.d(t, {
                M: function () {
                    return o;
                },
                c: function () {
                    return a;
                },
            });
            var r = n(655),
                i = (n(3917), n(2651));
            function o(e) {
                return e.hasOwnProperty("graphQLErrors");
            }
            var a = (function (e) {
                function t(n) {
                    var r = n.graphQLErrors,
                        o = n.clientErrors,
                        a = n.networkError,
                        s = n.errorMessage,
                        u = n.extraInfo,
                        c = e.call(this, s) || this;
                    return (
                        (c.graphQLErrors = r || []),
                        (c.clientErrors = o || []),
                        (c.networkError = a || null),
                        (c.message =
                            s ||
                            (function (e) {
                                var t = "";
                                return (
                                    ((0, i.O)(e.graphQLErrors) || (0, i.O)(e.clientErrors)) &&
                                        (e.graphQLErrors || []).concat(e.clientErrors || []).forEach(function (e) {
                                            var n = e ? e.message : "Error message not found.";
                                            t += "".concat(n, "\n");
                                        }),
                                    e.networkError && (t += "".concat(e.networkError.message, "\n")),
                                    (t = t.replace(/\n$/, ""))
                                );
                            })(c)),
                        (c.extraInfo = u),
                        (c.__proto__ = t.prototype),
                        c
                    );
                }
                return (0, r.ZT)(t, e), t;
            })(Error);
        },
        5317: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return o;
                },
            });
            var r = n(7294),
                i = n(320).aS ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
            function o() {
                var e = r.createContext[i];
                return e || (Object.defineProperty(r.createContext, i, { value: (e = r.createContext({})), enumerable: !1, writable: !1, configurable: !0 }), (e.displayName = "ApolloContext")), e;
            }
        },
        2651: function (e, t, n) {
            "use strict";
            function r(e) {
                return Array.isArray(e) && e.length > 0;
            }
            n.d(t, {
                O: function () {
                    return r;
                },
            });
        },
        320: function (e, t, n) {
            "use strict";
            n.d(t, {
                mr: function () {
                    return i;
                },
                sy: function () {
                    return o;
                },
                aS: function () {
                    return a;
                },
                JC: function () {
                    return c;
                },
            });
            var r = n(3917),
                i =
                    "function" === typeof WeakMap &&
                    "ReactNative" !==
                        (0, r.wY)(function () {
                            return navigator.product;
                        }),
                o = "function" === typeof WeakSet,
                a = "function" === typeof Symbol && "function" === typeof Symbol.for,
                s =
                    "function" ===
                    typeof (0, r.wY)(function () {
                        return window.document.createElement;
                    }),
                u =
                    (0, r.wY)(function () {
                        return navigator.userAgent.indexOf("jsdom") >= 0;
                    }) || !1,
                c = s && !u;
        },
        3712: function (e, t, n) {
            "use strict";
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = Object.create(null);
                return (
                    e.forEach(function (e) {
                        e &&
                            Object.keys(e).forEach(function (t) {
                                var r = e[t];
                                void 0 !== r && (n[t] = r);
                            });
                    }),
                    n
                );
            }
            n.d(t, {
                o: function () {
                    return r;
                },
            });
        },
        8702: function (e, t, n) {
            "use strict";
            n.d(t, {
                J: function () {
                    return o;
                },
            });
            n(3917);
            var r = n(3154);
            function i(e) {
                var t = new Set([e]);
                return (
                    t.forEach(function (e) {
                        (0, r.s)(e) &&
                            (function (e) {
                                if (__DEV__ && !Object.isFrozen(e))
                                    try {
                                        Object.freeze(e);
                                    } catch (t) {
                                        if (t instanceof TypeError) return null;
                                        throw t;
                                    }
                                return e;
                            })(e) === e &&
                            Object.getOwnPropertyNames(e).forEach(function (n) {
                                (0, r.s)(e[n]) && t.add(e[n]);
                            });
                    }),
                    e
                );
            }
            function o(e) {
                return __DEV__ && i(e), e;
            }
        },
        4012: function (e, t, n) {
            "use strict";
            n.d(t, {
                J: function () {
                    return o;
                },
            });
            var r = n(655),
                i = n(3712);
            function o(e, t) {
                return (0, i.o)(e, t, t.variables && { variables: (0, r.pi)((0, r.pi)({}, e && e.variables), t.variables) });
            }
        },
        3154: function (e, t, n) {
            "use strict";
            function r(e) {
                return null !== e && "object" === typeof e;
            }
            n.d(t, {
                s: function () {
                    return r;
                },
            });
        },
        3917: function (e, t, n) {
            "use strict";
            n.d(t, {
                ej: function () {
                    return s;
                },
                kG: function () {
                    return u;
                },
                wY: function () {
                    return h;
                },
            });
            var r = n(655),
                i = "Invariant Violation",
                o = Object.setPrototypeOf,
                a =
                    void 0 === o
                        ? function (e, t) {
                              return (e.__proto__ = t), e;
                          }
                        : o,
                s = (function (e) {
                    function t(n) {
                        void 0 === n && (n = i);
                        var r = e.call(this, "number" === typeof n ? i + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this;
                        return (r.framesToPop = 1), (r.name = i), a(r, t.prototype), r;
                    }
                    return (0, r.ZT)(t, e), t;
                })(Error);
            function u(e, t) {
                if (!e) throw new s(t);
            }
            var c = ["debug", "log", "warn", "error", "silent"],
                l = c.indexOf("log");
            function f(e) {
                return function () {
                    if (c.indexOf(e) >= l) {
                        var t = console[e] || console.log;
                        return t.apply(console, arguments);
                    }
                };
            }
            !(function (e) {
                (e.debug = f("debug")), (e.log = f("log")), (e.warn = f("warn")), (e.error = f("error"));
            })(u || (u = {}));
            function h(e) {
                try {
                    return e();
                } catch (o) {}
            }
            var p =
                    h(function () {
                        return globalThis;
                    }) ||
                    h(function () {
                        return window;
                    }) ||
                    h(function () {
                        return self;
                    }) ||
                    h(function () {
                        return global;
                    }) ||
                    h(function () {
                        return h.constructor("return this")();
                    }),
                d = "__",
                v = [d, d].join("DEV");
            var y = (function () {
                    try {
                        return Boolean(__DEV__);
                    } catch (o) {
                        return (
                            Object.defineProperty(p, v, {
                                value:
                                    "production" !==
                                    h(function () {
                                        return "production";
                                    }),
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                            }),
                            p[v]
                        );
                    }
                })(),
                m = n(3454);
            function b(e) {
                try {
                    return e();
                } catch (t) {}
            }
            var g =
                    b(function () {
                        return globalThis;
                    }) ||
                    b(function () {
                        return window;
                    }) ||
                    b(function () {
                        return self;
                    }) ||
                    b(function () {
                        return global;
                    }) ||
                    b(function () {
                        return b.constructor("return this")();
                    }),
                _ = !1;
            function w() {
                _ && (delete g.process, (_ = !1));
            }
            !g ||
                b(function () {
                    return "production";
                }) ||
                b(function () {
                    return m;
                }) ||
                (Object.defineProperty(g, "process", { value: { env: { NODE_ENV: "production" } }, configurable: !0, enumerable: !1, writable: !0 }), (_ = !0)),
                n(1270).H,
                w(),
                __DEV__ ? u("boolean" === typeof y, y) : u("boolean" === typeof y, 36);
        },
        7826: function (e, t, n) {
            "use strict";
            function r(e, t) {
                if (!Boolean(e)) throw new Error(t);
            }
            n.d(t, {
                a: function () {
                    return r;
                },
            });
        },
        5821: function (e, t, n) {
            "use strict";
            n.d(t, {
                X: function () {
                    return r;
                },
            });
            function r(e) {
                return i(e, []);
            }
            function i(e, t) {
                switch (typeof e) {
                    case "string":
                        return JSON.stringify(e);
                    case "function":
                        return e.name ? `[function ${e.name}]` : "[function]";
                    case "object":
                        return (function (e, t) {
                            if (null === e) return "null";
                            if (t.includes(e)) return "[Circular]";
                            const n = [...t, e];
                            if (
                                (function (e) {
                                    return "function" === typeof e.toJSON;
                                })(e)
                            ) {
                                const t = e.toJSON();
                                if (t !== e) return "string" === typeof t ? t : i(t, n);
                            } else if (Array.isArray(e))
                                return (function (e, t) {
                                    if (0 === e.length) return "[]";
                                    if (t.length > 2) return "[Array]";
                                    const n = Math.min(10, e.length),
                                        r = e.length - n,
                                        o = [];
                                    for (let a = 0; a < n; ++a) o.push(i(e[a], t));
                                    1 === r ? o.push("... 1 more item") : r > 1 && o.push(`... ${r} more items`);
                                    return "[" + o.join(", ") + "]";
                                })(e, n);
                            return (function (e, t) {
                                const n = Object.entries(e);
                                if (0 === n.length) return "{}";
                                if (t.length > 2)
                                    return (
                                        "[" +
                                        (function (e) {
                                            const t = Object.prototype.toString
                                                .call(e)
                                                .replace(/^\[object /, "")
                                                .replace(/]$/, "");
                                            if ("Object" === t && "function" === typeof e.constructor) {
                                                const t = e.constructor.name;
                                                if ("string" === typeof t && "" !== t) return t;
                                            }
                                            return t;
                                        })(e) +
                                        "]"
                                    );
                                const r = n.map(([e, n]) => e + ": " + i(n, t));
                                return "{ " + r.join(", ") + " }";
                            })(e, n);
                        })(e, t);
                    default:
                        return String(e);
                }
            }
        },
        2380: function (e, t, n) {
            "use strict";
            n.d(t, {
                Ye: function () {
                    return r;
                },
                WU: function () {
                    return i;
                },
                h8: function () {
                    return o;
                },
                UG: function () {
                    return s;
                },
                ku: function () {
                    return u;
                },
            });
            class r {
                constructor(e, t, n) {
                    (this.start = e.start), (this.end = t.end), (this.startToken = e), (this.endToken = t), (this.source = n);
                }
                get [Symbol.toStringTag]() {
                    return "Location";
                }
                toJSON() {
                    return { start: this.start, end: this.end };
                }
            }
            class i {
                constructor(e, t, n, r, i, o) {
                    (this.kind = e), (this.start = t), (this.end = n), (this.line = r), (this.column = i), (this.value = o), (this.prev = null), (this.next = null);
                }
                get [Symbol.toStringTag]() {
                    return "Token";
                }
                toJSON() {
                    return { kind: this.kind, value: this.value, line: this.line, column: this.column };
                }
            }
            const o = {
                    Name: [],
                    Document: ["definitions"],
                    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
                    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
                    Variable: ["name"],
                    SelectionSet: ["selections"],
                    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
                    Argument: ["name", "value"],
                    FragmentSpread: ["name", "directives"],
                    InlineFragment: ["typeCondition", "directives", "selectionSet"],
                    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
                    IntValue: [],
                    FloatValue: [],
                    StringValue: [],
                    BooleanValue: [],
                    NullValue: [],
                    EnumValue: [],
                    ListValue: ["values"],
                    ObjectValue: ["fields"],
                    ObjectField: ["name", "value"],
                    Directive: ["name", "arguments"],
                    NamedType: ["name"],
                    ListType: ["type"],
                    NonNullType: ["type"],
                    SchemaDefinition: ["description", "directives", "operationTypes"],
                    OperationTypeDefinition: ["type"],
                    ScalarTypeDefinition: ["description", "name", "directives"],
                    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
                    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
                    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    UnionTypeDefinition: ["description", "name", "directives", "types"],
                    EnumTypeDefinition: ["description", "name", "directives", "values"],
                    EnumValueDefinition: ["description", "name", "directives"],
                    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
                    DirectiveDefinition: ["description", "name", "arguments", "locations"],
                    SchemaExtension: ["directives", "operationTypes"],
                    ScalarTypeExtension: ["name", "directives"],
                    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
                    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
                    UnionTypeExtension: ["name", "directives", "types"],
                    EnumTypeExtension: ["name", "directives", "values"],
                    InputObjectTypeExtension: ["name", "directives", "fields"],
                },
                a = new Set(Object.keys(o));
            function s(e) {
                const t = null === e || void 0 === e ? void 0 : e.kind;
                return "string" === typeof t && a.has(t);
            }
            let u;
            !(function (e) {
                (e.QUERY = "query"), (e.MUTATION = "mutation"), (e.SUBSCRIPTION = "subscription");
            })(u || (u = {}));
        },
        7392: function (e, t, n) {
            "use strict";
            n.d(t, {
                wv: function () {
                    return i;
                },
                LZ: function () {
                    return a;
                },
            });
            var r = n(8297);
            function i(e) {
                var t;
                let n = Number.MAX_SAFE_INTEGER,
                    r = null,
                    i = -1;
                for (let s = 0; s < e.length; ++s) {
                    var a;
                    const t = e[s],
                        u = o(t);
                    u !== t.length && ((r = null !== (a = r) && void 0 !== a ? a : s), (i = s), 0 !== s && u < n && (n = u));
                }
                return e.map((e, t) => (0 === t ? e : e.slice(n))).slice(null !== (t = r) && void 0 !== t ? t : 0, i + 1);
            }
            function o(e) {
                let t = 0;
                for (; t < e.length && (0, r.FD)(e.charCodeAt(t)); ) ++t;
                return t;
            }
            function a(e, t) {
                const n = e.replace(/"""/g, '\\"""'),
                    i = n.split(/\r\n|[\n\r]/g),
                    o = 1 === i.length,
                    a = i.length > 1 && i.slice(1).every((e) => 0 === e.length || (0, r.FD)(e.charCodeAt(0))),
                    s = n.endsWith('\\"""'),
                    u = e.endsWith('"') && !s,
                    c = e.endsWith("\\"),
                    l = u || c,
                    f = !(null !== t && void 0 !== t && t.minimize) && (!o || e.length > 70 || l || a || s);
                let h = "";
                const p = o && (0, r.FD)(e.charCodeAt(0));
                return ((f && !p) || a) && (h += "\n"), (h += n), (f || l) && (h += "\n"), '"""' + h + '"""';
            }
        },
        8297: function (e, t, n) {
            "use strict";
            function r(e) {
                return 9 === e || 32 === e;
            }
            function i(e) {
                return e >= 48 && e <= 57;
            }
            function o(e) {
                return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
            }
            function a(e) {
                return o(e) || 95 === e;
            }
            function s(e) {
                return o(e) || i(e) || 95 === e;
            }
            n.d(t, {
                FD: function () {
                    return r;
                },
                X1: function () {
                    return i;
                },
                LQ: function () {
                    return a;
                },
                HQ: function () {
                    return s;
                },
            });
        },
        7359: function (e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                h: function () {
                    return r;
                },
            }),
                (function (e) {
                    (e.NAME = "Name"),
                        (e.DOCUMENT = "Document"),
                        (e.OPERATION_DEFINITION = "OperationDefinition"),
                        (e.VARIABLE_DEFINITION = "VariableDefinition"),
                        (e.SELECTION_SET = "SelectionSet"),
                        (e.FIELD = "Field"),
                        (e.ARGUMENT = "Argument"),
                        (e.FRAGMENT_SPREAD = "FragmentSpread"),
                        (e.INLINE_FRAGMENT = "InlineFragment"),
                        (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
                        (e.VARIABLE = "Variable"),
                        (e.INT = "IntValue"),
                        (e.FLOAT = "FloatValue"),
                        (e.STRING = "StringValue"),
                        (e.BOOLEAN = "BooleanValue"),
                        (e.NULL = "NullValue"),
                        (e.ENUM = "EnumValue"),
                        (e.LIST = "ListValue"),
                        (e.OBJECT = "ObjectValue"),
                        (e.OBJECT_FIELD = "ObjectField"),
                        (e.DIRECTIVE = "Directive"),
                        (e.NAMED_TYPE = "NamedType"),
                        (e.LIST_TYPE = "ListType"),
                        (e.NON_NULL_TYPE = "NonNullType"),
                        (e.SCHEMA_DEFINITION = "SchemaDefinition"),
                        (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
                        (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
                        (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
                        (e.FIELD_DEFINITION = "FieldDefinition"),
                        (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
                        (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
                        (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
                        (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
                        (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
                        (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
                        (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
                        (e.SCHEMA_EXTENSION = "SchemaExtension"),
                        (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
                        (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
                        (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
                        (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
                        (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
                        (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
                })(r || (r = {}));
        },
        1270: function (e, t, n) {
            "use strict";
            n.d(t, {
                H: function () {
                    return a;
                },
                T: function () {
                    return s;
                },
            });
            var r = n(7826),
                i = n(5821);
            const o = function (e, t) {
                return e instanceof t;
            };
            class a {
                constructor(e, t = "GraphQL request", n = { line: 1, column: 1 }) {
                    "string" === typeof e || (0, r.a)(!1, `Body must be a string. Received: ${(0, i.X)(e)}.`),
                        (this.body = e),
                        (this.name = t),
                        (this.locationOffset = n),
                        this.locationOffset.line > 0 || (0, r.a)(!1, "line in locationOffset is 1-indexed and must be positive."),
                        this.locationOffset.column > 0 || (0, r.a)(!1, "column in locationOffset is 1-indexed and must be positive.");
                }
                get [Symbol.toStringTag]() {
                    return "Source";
                }
            }
            function s(e) {
                return o(e, a);
            }
        },
    },
    function (e) {
        var t = function (t) {
            return e((e.s = t));
        };
        e.O(0, [774, 179], function () {
            return t(6363), t(880);
        });
        var n = e.O();
        _N_E = n;
    },
]);
