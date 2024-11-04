/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function As(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const U = {}, Xe = [], he = () => {
}, Nr = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ps = (e) => e.startsWith("onUpdate:"), X = Object.assign, Ms = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Hr = Object.prototype.hasOwnProperty, N = (e, t) => Hr.call(e, t), P = Array.isArray, Ze = (e) => Wt(e) === "[object Map]", An = (e) => Wt(e) === "[object Set]", M = (e) => typeof e == "function", G = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Pn = (e) => (K(e) || M(e)) && M(e.then) && M(e.catch), Mn = Object.prototype.toString, Wt = (e) => Mn.call(e), jr = (e) => Wt(e).slice(8, -1), In = (e) => Wt(e) === "[object Object]", Is = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ct = /* @__PURE__ */ As(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, $r = /-(\w)/g, je = qt(
  (e) => e.replace($r, (t, s) => s ? s.toUpperCase() : "")
), Lr = /\B([A-Z])/g, Je = qt(
  (e) => e.replace(Lr, "-$1").toLowerCase()
), Rn = qt((e) => e.charAt(0).toUpperCase() + e.slice(1)), ts = qt(
  (e) => e ? `on${Rn(e)}` : ""
), He = (e, t) => !Object.is(e, t), ss = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Fn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Vr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let en;
const Gt = () => en || (en = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = G(n) ? Wr(n) : Rs(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (G(e) || K(e))
    return e;
}
const Ur = /;(?![^(]*\))/g, Br = /:([^]+)/, Kr = /\/\*[^]*?\*\//g;
function Wr(e) {
  const t = {};
  return e.replace(Kr, "").split(Ur).forEach((s) => {
    if (s) {
      const n = s.split(Br);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Fs(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = Fs(e[s]);
      n && (t += n + " ");
    }
  else if (K(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gr = /* @__PURE__ */ As(qr);
function Dn(e) {
  return !!e || e === "";
}
const Nn = (e) => !!(e && e.__v_isRef === !0), gs = (e) => G(e) ? e : e == null ? "" : P(e) || K(e) && (e.toString === Mn || !M(e.toString)) ? Nn(e) ? gs(e.value) : JSON.stringify(e, Hn, 2) : String(e), Hn = (e, t) => Nn(t) ? Hn(e, t.value) : Ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[ns(n, i) + " =>"] = r, s),
    {}
  )
} : An(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => ns(s))
} : $e(t) ? ns(t) : K(t) && !P(t) && !In(t) ? String(t) : t, ns = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $e(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
var Jr = { NODE_ENV: "production" };
let fe;
class Yr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = fe, !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = fe;
      try {
        return fe = this, t();
      } finally {
        fe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    fe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    fe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function zr() {
  return fe;
}
let V;
const rs = /* @__PURE__ */ new WeakSet();
class jn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fe && fe.active && fe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rs.has(this) && (rs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ln(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, tn(this), Vn(this);
    const t = V, s = pe;
    V = this, pe = !0;
    try {
      return this.fn();
    } finally {
      Un(this), V = t, pe = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hs(t);
      this.deps = this.depsTail = void 0, tn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? rs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ms(this) && this.run();
  }
  get dirty() {
    return ms(this);
  }
}
let $n = 0, ut, at;
function Ln(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = at, at = e;
    return;
  }
  e.next = ut, ut = e;
}
function Ds() {
  $n++;
}
function Ns() {
  if (--$n > 0)
    return;
  if (at) {
    let t = at;
    for (at = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; ut; ) {
    let t = ut;
    for (ut = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function Vn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Un(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Hs(n), Xr(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Bn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Bn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bt))
    return;
  e.globalVersion = bt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ms(e)) {
    e.flags &= -3;
    return;
  }
  const s = V, n = pe;
  V = e, pe = !0;
  try {
    Vn(e);
    const r = e.fn(e._value);
    (t.version === 0 || He(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    V = s, pe = n, Un(e), e.flags &= -3;
  }
}
function Hs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Hs(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Xr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let pe = !0;
const Kn = [];
function Pe() {
  Kn.push(pe), pe = !1;
}
function Me() {
  const e = Kn.pop();
  pe = e === void 0 ? !0 : e;
}
function tn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let bt = 0;
class Zr {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class js {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!V || !pe || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new Zr(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, Wn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, bt++, this.notify(t);
  }
  notify(t) {
    Ds();
    try {
      Jr.NODE_ENV;
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Ns();
    }
  }
}
function Wn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Wn(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const _s = /* @__PURE__ */ new WeakMap(), qe = Symbol(
  ""
), bs = Symbol(
  ""
), xt = Symbol(
  ""
);
function Q(e, t, s) {
  if (pe && V) {
    let n = _s.get(e);
    n || _s.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new js()), r.map = n, r.key = s), r.track();
  }
}
function Ae(e, t, s, n, r, i) {
  const o = _s.get(e);
  if (!o) {
    bt++;
    return;
  }
  const f = (u) => {
    u && u.trigger();
  };
  if (Ds(), t === "clear")
    o.forEach(f);
  else {
    const u = P(e), h = u && Is(s);
    if (u && s === "length") {
      const a = Number(n);
      o.forEach((p, S) => {
        (S === "length" || S === xt || !$e(S) && S >= a) && f(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && f(o.get(s)), h && f(o.get(xt)), t) {
        case "add":
          u ? h && f(o.get("length")) : (f(o.get(qe)), Ze(e) && f(o.get(bs)));
          break;
        case "delete":
          u || (f(o.get(qe)), Ze(e) && f(o.get(bs)));
          break;
        case "set":
          Ze(e) && f(o.get(qe));
          break;
      }
  }
  Ns();
}
function Ye(e) {
  const t = D(e);
  return t === e ? t : (Q(t, "iterate", xt), ge(e) ? t : t.map(se));
}
function $s(e) {
  return Q(e = D(e), "iterate", xt), e;
}
const Qr = {
  __proto__: null,
  [Symbol.iterator]() {
    return is(this, Symbol.iterator, se);
  },
  concat(...e) {
    return Ye(this).concat(
      ...e.map((t) => P(t) ? Ye(t) : t)
    );
  },
  entries() {
    return is(this, "entries", (e) => (e[1] = se(e[1]), e));
  },
  every(e, t) {
    return we(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return we(this, "filter", e, t, (s) => s.map(se), arguments);
  },
  find(e, t) {
    return we(this, "find", e, t, se, arguments);
  },
  findIndex(e, t) {
    return we(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return we(this, "findLast", e, t, se, arguments);
  },
  findLastIndex(e, t) {
    return we(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return we(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return os(this, "includes", e);
  },
  indexOf(...e) {
    return os(this, "indexOf", e);
  },
  join(e) {
    return Ye(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return os(this, "lastIndexOf", e);
  },
  map(e, t) {
    return we(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ot(this, "pop");
  },
  push(...e) {
    return ot(this, "push", e);
  },
  reduce(e, ...t) {
    return sn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return sn(this, "reduceRight", e, t);
  },
  shift() {
    return ot(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return we(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ot(this, "splice", e);
  },
  toReversed() {
    return Ye(this).toReversed();
  },
  toSorted(e) {
    return Ye(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ye(this).toSpliced(...e);
  },
  unshift(...e) {
    return ot(this, "unshift", e);
  },
  values() {
    return is(this, "values", se);
  }
};
function is(e, t, s) {
  const n = $s(e), r = n[t]();
  return n !== e && !ge(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = s(i.value)), i;
  }), r;
}
const kr = Array.prototype;
function we(e, t, s, n, r, i) {
  const o = $s(e), f = o !== e && !ge(e), u = o[t];
  if (u !== kr[t]) {
    const p = u.apply(e, i);
    return f ? se(p) : p;
  }
  let h = s;
  o !== e && (f ? h = function(p, S) {
    return s.call(this, se(p), S, e);
  } : s.length > 2 && (h = function(p, S) {
    return s.call(this, p, S, e);
  }));
  const a = u.call(o, h, n);
  return f && r ? r(a) : a;
}
function sn(e, t, s, n) {
  const r = $s(e);
  let i = s;
  return r !== e && (ge(e) ? s.length > 3 && (i = function(o, f, u) {
    return s.call(this, o, f, u, e);
  }) : i = function(o, f, u) {
    return s.call(this, o, se(f), u, e);
  }), r[t](i, ...n);
}
function os(e, t, s) {
  const n = D(e);
  Q(n, "iterate", xt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Vs(s[0]) ? (s[0] = D(s[0]), n[t](...s)) : r;
}
function ot(e, t, s = []) {
  Pe(), Ds();
  const n = D(e)[t].apply(e, s);
  return Ns(), Me(), n;
}
const ei = /* @__PURE__ */ As("__proto__,__v_isRef,__isVue"), qn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
);
function ti(e) {
  $e(e) || (e = String(e));
  const t = D(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class Gn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? Qn : Zn : i ? Xn : zn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = P(t);
    if (!r) {
      let u;
      if (o && (u = Qr[s]))
        return u;
      if (s === "hasOwnProperty")
        return ti;
    }
    const f = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      z(t) ? t : n
    );
    return ($e(s) ? qn.has(s) : ei(s)) || (r || Q(t, "get", s), i) ? f : z(f) ? o && Is(s) ? f : f.value : K(f) ? r ? kn(f) : Ls(f) : f;
  }
}
class Jn extends Gn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._isShallow) {
      const u = Ge(i);
      if (!ge(n) && !Ge(n) && (i = D(i), n = D(n)), !P(t) && z(i) && !z(n))
        return u ? !1 : (i.value = n, !0);
    }
    const o = P(t) && Is(s) ? Number(s) < t.length : N(t, s), f = Reflect.set(
      t,
      s,
      n,
      z(t) ? t : r
    );
    return t === D(r) && (o ? He(n, i) && Ae(t, "set", s, n) : Ae(t, "add", s, n)), f;
  }
  deleteProperty(t, s) {
    const n = N(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ae(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!$e(s) || !qn.has(s)) && Q(t, "has", s), n;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      P(t) ? "length" : qe
    ), Reflect.ownKeys(t);
  }
}
class Yn extends Gn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const si = /* @__PURE__ */ new Jn(), ni = /* @__PURE__ */ new Yn(), ri = /* @__PURE__ */ new Jn(!0), ii = /* @__PURE__ */ new Yn(!0), xs = (e) => e, Mt = (e) => Reflect.getPrototypeOf(e);
function oi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = D(r), o = Ze(i), f = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = r[e](...n), a = s ? xs : t ? ys : se;
    return !t && Q(
      i,
      "iterate",
      u ? bs : qe
    ), {
      // iterator protocol
      next() {
        const { value: p, done: S } = h.next();
        return S ? { value: p, done: S } : {
          value: f ? [a(p[0]), a(p[1])] : a(p),
          done: S
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function It(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function li(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = D(i), f = D(r);
      e || (He(r, f) && Q(o, "get", r), Q(o, "get", f));
      const { has: u } = Mt(o), h = t ? xs : e ? ys : se;
      if (u.call(o, r))
        return h(i.get(r));
      if (u.call(o, f))
        return h(i.get(f));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Q(D(r), "iterate", qe), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = D(i), f = D(r);
      return e || (He(r, f) && Q(o, "has", r), Q(o, "has", f)), r === f ? i.has(r) : i.has(r) || i.has(f);
    },
    forEach(r, i) {
      const o = this, f = o.__v_raw, u = D(f), h = t ? xs : e ? ys : se;
      return !e && Q(u, "iterate", qe), f.forEach((a, p) => r.call(i, h(a), h(p), o));
    }
  };
  return X(
    s,
    e ? {
      add: It("add"),
      set: It("set"),
      delete: It("delete"),
      clear: It("clear")
    } : {
      add(r) {
        !t && !ge(r) && !Ge(r) && (r = D(r));
        const i = D(this);
        return Mt(i).has.call(i, r) || (i.add(r), Ae(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !ge(i) && !Ge(i) && (i = D(i));
        const o = D(this), { has: f, get: u } = Mt(o);
        let h = f.call(o, r);
        h || (r = D(r), h = f.call(o, r));
        const a = u.call(o, r);
        return o.set(r, i), h ? He(i, a) && Ae(o, "set", r, i) : Ae(o, "add", r, i), this;
      },
      delete(r) {
        const i = D(this), { has: o, get: f } = Mt(i);
        let u = o.call(i, r);
        u || (r = D(r), u = o.call(i, r)), f && f.call(i, r);
        const h = i.delete(r);
        return u && Ae(i, "delete", r, void 0), h;
      },
      clear() {
        const r = D(this), i = r.size !== 0, o = r.clear();
        return i && Ae(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = oi(r, e, t);
  }), s;
}
function Jt(e, t) {
  const s = li(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    N(s, r) && r in n ? s : n,
    r,
    i
  );
}
const fi = {
  get: /* @__PURE__ */ Jt(!1, !1)
}, ci = {
  get: /* @__PURE__ */ Jt(!1, !0)
}, ui = {
  get: /* @__PURE__ */ Jt(!0, !1)
}, ai = {
  get: /* @__PURE__ */ Jt(!0, !0)
}, zn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap();
function di(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function hi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : di(jr(e));
}
function Ls(e) {
  return Ge(e) ? e : Yt(
    e,
    !1,
    si,
    fi,
    zn
  );
}
function pi(e) {
  return Yt(
    e,
    !1,
    ri,
    ci,
    Xn
  );
}
function kn(e) {
  return Yt(
    e,
    !0,
    ni,
    ui,
    Zn
  );
}
function Rt(e) {
  return Yt(
    e,
    !0,
    ii,
    ai,
    Qn
  );
}
function Yt(e, t, s, n, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = hi(e);
  if (o === 0)
    return e;
  const f = new Proxy(
    e,
    o === 2 ? n : s
  );
  return r.set(e, f), f;
}
function dt(e) {
  return Ge(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function Vs(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function gi(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && Fn(e, "__v_skip", !0), e;
}
const se = (e) => K(e) ? Ls(e) : e, ys = (e) => K(e) ? kn(e) : e;
function z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function mi(e) {
  return _i(e, !1);
}
function _i(e, t) {
  return z(e) ? e : new bi(e, t);
}
class bi {
  constructor(t, s) {
    this.dep = new js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : D(t), this._value = s ? t : se(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || ge(t) || Ge(t);
    t = n ? t : D(t), He(t, s) && (this._rawValue = t, this._value = n ? t : se(t), this.dep.trigger());
  }
}
function xi(e) {
  return z(e) ? e.value : e;
}
const yi = {
  get: (e, t, s) => t === "__v_raw" ? e : xi(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return z(r) && !z(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function er(e) {
  return dt(e) ? e : new Proxy(e, yi);
}
class vi {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return Ln(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Bn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ei(e, t, s = !1) {
  let n, r;
  return M(e) ? n = e : (n = e.get, r = e.set), new vi(n, r, s);
}
const Ft = {}, jt = /* @__PURE__ */ new WeakMap();
let We;
function Si(e, t = !1, s = We) {
  if (s) {
    let n = jt.get(s);
    n || jt.set(s, n = []), n.push(e);
  }
}
function Ci(e, t, s = U) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: f, call: u } = s, h = (O) => r ? O : ge(O) || r === !1 || r === 0 ? Ne(O, 1) : Ne(O);
  let a, p, S, C, F = !1, R = !1;
  if (z(e) ? (p = () => e.value, F = ge(e)) : dt(e) ? (p = () => h(e), F = !0) : P(e) ? (R = !0, F = e.some((O) => dt(O) || ge(O)), p = () => e.map((O) => {
    if (z(O))
      return O.value;
    if (dt(O))
      return h(O);
    if (M(O))
      return u ? u(O, 2) : O();
  })) : M(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
    if (S) {
      Pe();
      try {
        S();
      } finally {
        Me();
      }
    }
    const O = We;
    We = a;
    try {
      return u ? u(e, 3, [C]) : e(C);
    } finally {
      We = O;
    }
  } : p = he, t && r) {
    const O = p, J = r === !0 ? 1 / 0 : r;
    p = () => Ne(O(), J);
  }
  const k = zr(), j = () => {
    a.stop(), k && Ms(k.effects, a);
  };
  if (i && t) {
    const O = t;
    t = (...J) => {
      O(...J), j();
    };
  }
  let W = R ? new Array(e.length).fill(Ft) : Ft;
  const q = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const J = a.run();
        if (r || F || (R ? J.some((Se, ue) => He(Se, W[ue])) : He(J, W))) {
          S && S();
          const Se = We;
          We = a;
          try {
            const ue = [
              J,
              // pass undefined as the old value when it's changed for the first time
              W === Ft ? void 0 : R && W[0] === Ft ? [] : W,
              C
            ];
            u ? u(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            ), W = J;
          } finally {
            We = Se;
          }
        }
      } else
        a.run();
  };
  return f && f(q), a = new jn(p), a.scheduler = o ? () => o(q, !1) : q, C = (O) => Si(O, !1, a), S = a.onStop = () => {
    const O = jt.get(a);
    if (O) {
      if (u)
        u(O, 4);
      else
        for (const J of O) J();
      jt.delete(a);
    }
  }, t ? n ? q(!0) : W = a.run() : o ? o(q.bind(null, !0), !0) : a.run(), j.pause = a.pause.bind(a), j.resume = a.resume.bind(a), j.stop = j, j;
}
function Ne(e, t = 1 / 0, s) {
  if (t <= 0 || !K(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, z(e))
    Ne(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Ne(e[n], t, s);
  else if (An(e) || Ze(e))
    e.forEach((n) => {
      Ne(n, t, s);
    });
  else if (In(e)) {
    for (const n in e)
      Ne(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ne(e[n], t, s);
  }
  return e;
}
var Re = { NODE_ENV: "production" };
const ht = [];
let ls = !1;
function wi(e, ...t) {
  if (ls) return;
  ls = !0, Pe();
  const s = ht.length ? ht[ht.length - 1].component : null, n = s && s.appContext.config.warnHandler, r = Ti();
  if (n)
    tt(
      n,
      s,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, f;
          return (f = (o = i.toString) == null ? void 0 : o.call(i)) != null ? f : JSON.stringify(i);
        }).join(""),
        s && s.proxy,
        r.map(
          ({ vnode: i }) => `at <${Ir(s, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Oi(r)), console.warn(...i);
  }
  Me(), ls = !1;
}
function Ti() {
  let e = ht[ht.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const s = t[0];
    s && s.vnode === e ? s.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Oi(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Ai(s));
  }), t;
}
function Ai({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, r = ` at <${Ir(
    e.component,
    e.type,
    n
  )}`, i = ">" + s;
  return e.props ? [r, ...Pi(e.props), i] : [r + i];
}
function Pi(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...tr(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function tr(e, t, s) {
  return G(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : z(t) ? (t = tr(e, D(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : M(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = D(t), s ? t : [`${e}=`, t]);
}
function tt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    zt(r, t, s);
  }
}
function Ee(e, t, s, n) {
  if (M(e)) {
    const r = tt(e, t, s, n);
    return r && Pn(r) && r.catch((i) => {
      zt(i, t, s);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ee(e[i], t, s, n));
    return r;
  }
}
function zt(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || U;
  if (t) {
    let f = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; f; ) {
      const a = f.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, u, h) === !1)
            return;
      }
      f = f.parent;
    }
    if (i) {
      Pe(), tt(i, null, 10, [
        e,
        u,
        h
      ]), Me();
      return;
    }
  }
  Mi(e, s, r, n, o);
}
function Mi(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ne = [];
let xe = -1;
const Qe = [];
let Fe = null, ze = 0;
const sr = /* @__PURE__ */ Promise.resolve();
let $t = null;
function Ii(e) {
  const t = $t || sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ri(e) {
  let t = xe + 1, s = ne.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ne[n], i = yt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Us(e) {
  if (!(e.flags & 1)) {
    const t = yt(e), s = ne[ne.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yt(s) ? ne.push(e) : ne.splice(Ri(t), 0, e), e.flags |= 1, nr();
  }
}
function nr() {
  $t || ($t = sr.then(ir));
}
function Fi(e) {
  P(e) ? Qe.push(...e) : Fe && e.id === -1 ? Fe.splice(ze + 1, 0, e) : e.flags & 1 || (Qe.push(e), e.flags |= 1), nr();
}
function nn(e, t, s = xe + 1) {
  for (; s < ne.length; s++) {
    const n = ne[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ne.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function rr(e) {
  if (Qe.length) {
    const t = [...new Set(Qe)].sort(
      (s, n) => yt(s) - yt(n)
    );
    if (Qe.length = 0, Fe) {
      Fe.push(...t);
      return;
    }
    for (Fe = t, ze = 0; ze < Fe.length; ze++) {
      const s = Fe[ze];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Fe = null, ze = 0;
  }
}
const yt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ir(e) {
  const t = he;
  try {
    for (xe = 0; xe < ne.length; xe++) {
      const s = ne[xe];
      s && !(s.flags & 8) && (Re.NODE_ENV !== "production" && t(s), s.flags & 4 && (s.flags &= -2), tt(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; xe < ne.length; xe++) {
      const s = ne[xe];
      s && (s.flags &= -2);
    }
    xe = -1, ne.length = 0, rr(), $t = null, (ne.length || Qe.length) && ir();
  }
}
let ve = null, or = null;
function Lt(e) {
  const t = ve;
  return ve = e, or = e && e.type.__scopeId || null, t;
}
function Di(e, t = ve, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && dn(-1);
    const i = Lt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Lt(i), n._d && dn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Be(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const f = r[o];
    i && (f.oldValue = i[o].value);
    let u = f.dir[n];
    u && (Pe(), Ee(u, s, 8, [
      e.el,
      f,
      e,
      t
    ]), Me());
  }
}
const Ni = Symbol("_vte"), Hi = (e) => e.__isTeleport;
function Bs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function lr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vs(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (F, R) => vs(
        F,
        t && (P(t) ? t[R] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (pt(n) && !r)
    return;
  const i = n.shapeFlag & 4 ? Gs(n.component) : n.el, o = r ? null : i, { i: f, r: u } = e, h = t && t.r, a = f.refs === U ? f.refs = {} : f.refs, p = f.setupState, S = D(p), C = p === U ? () => !1 : (F) => N(S, F);
  if (h != null && h !== u && (G(h) ? (a[h] = null, C(h) && (p[h] = null)) : z(h) && (h.value = null)), M(u))
    tt(u, f, 12, [o, a]);
  else {
    const F = G(u), R = z(u);
    if (F || R) {
      const k = () => {
        if (e.f) {
          const j = F ? C(u) ? p[u] : a[u] : u.value;
          r ? P(j) && Ms(j, i) : P(j) ? j.includes(i) || j.push(i) : F ? (a[u] = [i], C(u) && (p[u] = a[u])) : (u.value = [i], e.k && (a[e.k] = u.value));
        } else F ? (a[u] = o, C(u) && (p[u] = o)) : R && (u.value = o, e.k && (a[e.k] = o));
      };
      o ? (k.id = -1, le(k, s)) : k();
    }
  }
}
Gt().requestIdleCallback;
Gt().cancelIdleCallback;
const pt = (e) => !!e.type.__asyncLoader, fr = (e) => e.type.__isKeepAlive;
function ji(e, t) {
  cr(e, "a", t);
}
function $i(e, t) {
  cr(e, "da", t);
}
function cr(e, t, s = Y) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Xt(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      fr(r.parent.vnode) && Li(n, t, s, r), r = r.parent;
  }
}
function Li(e, t, s, n) {
  const r = Xt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ur(() => {
    Ms(n[t], r);
  }, s);
}
function Xt(e, t, s = Y, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Pe();
      const f = Ct(s), u = Ee(t, s, e, o);
      return f(), Me(), u;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const Ie = (e) => (t, s = Y) => {
  (!St || e === "sp") && Xt(e, (...n) => t(...n), s);
}, Vi = Ie("bm"), Ui = Ie("m"), Bi = Ie(
  "bu"
), Ki = Ie("u"), Wi = Ie(
  "bum"
), ur = Ie("um"), qi = Ie(
  "sp"
), Gi = Ie("rtg"), Ji = Ie("rtc");
function Yi(e, t = Y) {
  Xt("ec", e, t);
}
const zi = Symbol.for("v-ndc"), Es = (e) => e ? Pr(e) ? Gs(e) : Es(e.parent) : null, gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ks(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Us(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ii.bind(e.proxy)),
    $watch: (e) => bo.bind(e)
  })
), fs = (e, t) => e !== U && !e.__isScriptSetup && N(e, t), Xi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: f, appContext: u } = e;
    let h;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (fs(n, t))
          return o[t] = 1, n[t];
        if (r !== U && N(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && N(h, t)
        )
          return o[t] = 3, i[t];
        if (s !== U && N(s, t))
          return o[t] = 4, s[t];
        Ss && (o[t] = 0);
      }
    }
    const a = gt[t];
    let p, S;
    if (a)
      return t === "$attrs" && Q(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = f.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== U && N(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      S = u.config.globalProperties, N(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return fs(r, t) ? (r[t] = s, !0) : n !== U && N(n, t) ? (n[t] = s, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i }
  }, o) {
    let f;
    return !!s[o] || e !== U && N(e, o) || fs(t, o) || (f = i[0]) && N(f, o) || N(n, o) || N(gt, o) || N(r.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : N(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function rn(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ss = !0;
function Zi(e) {
  const t = Ks(e), s = e.proxy, n = e.ctx;
  Ss = !1, t.beforeCreate && on(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: f,
    provide: u,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: S,
    beforeUpdate: C,
    updated: F,
    activated: R,
    deactivated: k,
    beforeDestroy: j,
    beforeUnmount: W,
    destroyed: q,
    unmounted: O,
    render: J,
    renderTracked: Se,
    renderTriggered: ue,
    errorCaptured: Ce,
    serverPrefetch: wt,
    // public API
    expose: Le,
    inheritAttrs: st,
    // assets
    components: Tt,
    directives: Ot,
    filters: kt
  } = t;
  if (h && Qi(h, n, null), o)
    for (const B in o) {
      const $ = o[B];
      M($) && (n[B] = $.bind(s));
    }
  if (r) {
    const B = r.call(s, s);
    K(B) && (e.data = Ls(B));
  }
  if (Ss = !0, i)
    for (const B in i) {
      const $ = i[B], Ve = M($) ? $.bind(s, s) : M($.get) ? $.get.bind(s, s) : he, At = !M($) && M($.set) ? $.set.bind(s) : he, Ue = qo({
        get: Ve,
        set: At
      });
      Object.defineProperty(n, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: (me) => Ue.value = me
      });
    }
  if (f)
    for (const B in f)
      ar(f[B], n, s, B);
  if (u) {
    const B = M(u) ? u.call(s) : u;
    Reflect.ownKeys(B).forEach(($) => {
      ro($, B[$]);
    });
  }
  a && on(a, e, "c");
  function ee(B, $) {
    P($) ? $.forEach((Ve) => B(Ve.bind(s))) : $ && B($.bind(s));
  }
  if (ee(Vi, p), ee(Ui, S), ee(Bi, C), ee(Ki, F), ee(ji, R), ee($i, k), ee(Yi, Ce), ee(Ji, Se), ee(Gi, ue), ee(Wi, W), ee(ur, O), ee(qi, wt), P(Le))
    if (Le.length) {
      const B = e.exposed || (e.exposed = {});
      Le.forEach(($) => {
        Object.defineProperty(B, $, {
          get: () => s[$],
          set: (Ve) => s[$] = Ve
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === he && (e.render = J), st != null && (e.inheritAttrs = st), Tt && (e.components = Tt), Ot && (e.directives = Ot), wt && lr(e);
}
function Qi(e, t, s = he) {
  P(e) && (e = Cs(e));
  for (const n in e) {
    const r = e[n];
    let i;
    K(r) ? "default" in r ? i = Dt(
      r.from || n,
      r.default,
      !0
    ) : i = Dt(r.from || n) : i = Dt(r), z(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function on(e, t, s) {
  Ee(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function ar(e, t, s, n) {
  let r = n.includes(".") ? wr(s, n) : () => s[n];
  if (G(e)) {
    const i = t[e];
    M(i) && us(r, i);
  } else if (M(e))
    us(r, e.bind(s));
  else if (K(e))
    if (P(e))
      e.forEach((i) => ar(i, t, s, n));
    else {
      const i = M(e.handler) ? e.handler.bind(s) : t[e.handler];
      M(i) && us(r, i, e);
    }
}
function Ks(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, f = i.get(t);
  let u;
  return f ? u = f : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (h) => Vt(u, h, o, !0)
  ), Vt(u, t, o)), K(t) && i.set(t, u), u;
}
function Vt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && Vt(e, i, s, !0), r && r.forEach(
    (o) => Vt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const f = ki[o] || s && s[o];
      e[o] = f ? f(e[o], t[o]) : t[o];
    }
  return e;
}
const ki = {
  data: ln,
  props: fn,
  emits: fn,
  // objects
  methods: ft,
  computed: ft,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: ft,
  directives: ft,
  // watch
  watch: to,
  // provide / inject
  provide: ln,
  inject: eo
};
function ln(e, t) {
  return t ? e ? function() {
    return X(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function eo(e, t) {
  return ft(Cs(e), Cs(t));
}
function Cs(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ft(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fn(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    rn(e),
    rn(t ?? {})
  ) : t;
}
function to(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = X(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = te(e[n], t[n]);
  return s;
}
function dr() {
  return {
    app: null,
    config: {
      isNativeTag: Nr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let so = 0;
function no(e, t) {
  return function(n, r = null) {
    M(n) || (n = X({}, n)), r != null && !K(r) && (r = null);
    const i = dr(), o = /* @__PURE__ */ new WeakSet(), f = [];
    let u = !1;
    const h = i.app = {
      _uid: so++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Jo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && M(a.install) ? (o.add(a), a.install(h, ...p)) : M(a) && (o.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (i.components[a] = p, h) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, h) : i.directives[a];
      },
      mount(a, p, S) {
        if (!u) {
          const C = h._ceVNode || de(n, r);
          return C.appContext = i, S === !0 ? S = "svg" : S === !1 && (S = void 0), p && t ? t(C, a) : e(C, a, S), u = !0, h._container = a, a.__vue_app__ = h, Gs(C.component);
        }
      },
      onUnmount(a) {
        f.push(a);
      },
      unmount() {
        u && (Ee(
          f,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = ke;
        ke = h;
        try {
          return a();
        } finally {
          ke = p;
        }
      }
    };
    return h;
  };
}
let ke = null;
function ro(e, t) {
  if (Y) {
    let s = Y.provides;
    const n = Y.parent && Y.parent.provides;
    n === s && (s = Y.provides = Object.create(n)), s[e] = t;
  }
}
function Dt(e, t, s = !1) {
  const n = Y || ve;
  if (n || ke) {
    const r = ke ? ke._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && M(t) ? t.call(n && n.proxy) : t;
  }
}
const hr = {}, pr = () => Object.create(hr), gr = (e) => Object.getPrototypeOf(e) === hr;
function io(e, t, s, n = !1) {
  const r = {}, i = pr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : pi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function oo(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, f = D(r), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let S = a[p];
        if (Zt(e.emitsOptions, S))
          continue;
        const C = t[S];
        if (u)
          if (N(i, S))
            C !== i[S] && (i[S] = C, h = !0);
          else {
            const F = je(S);
            r[F] = ws(
              u,
              f,
              F,
              C,
              e,
              !1
            );
          }
        else
          C !== i[S] && (i[S] = C, h = !0);
      }
    }
  } else {
    mr(e, t, r, i) && (h = !0);
    let a;
    for (const p in f)
      (!t || // for camelCase
      !N(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Je(p)) === p || !N(t, a))) && (u ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = ws(
        u,
        f,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== f)
      for (const p in i)
        (!t || !N(t, p)) && (delete i[p], h = !0);
  }
  h && Ae(e.attrs, "set", "");
}
function mr(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, f;
  if (t)
    for (let u in t) {
      if (ct(u))
        continue;
      const h = t[u];
      let a;
      r && N(r, a = je(u)) ? !i || !i.includes(a) ? s[a] = h : (f || (f = {}))[a] = h : Zt(e.emitsOptions, u) || (!(u in n) || h !== n[u]) && (n[u] = h, o = !0);
    }
  if (i) {
    const u = D(s), h = f || U;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = ws(
        r,
        u,
        p,
        h[p],
        e,
        !N(h, p)
      );
    }
  }
  return o;
}
function ws(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const f = N(o, "default");
    if (f && n === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && M(u)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = Ct(r);
          n = h[s] = u.call(
            null,
            t
          ), a();
        }
      } else
        n = u;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !f ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Je(s)) && (n = !0));
  }
  return n;
}
const lo = /* @__PURE__ */ new WeakMap();
function _r(e, t, s = !1) {
  const n = s ? lo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, f = [];
  let u = !1;
  if (!M(e)) {
    const a = (p) => {
      u = !0;
      const [S, C] = _r(p, t, !0);
      X(o, S), C && f.push(...C);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !u)
    return K(e) && n.set(e, Xe), Xe;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = je(i[a]);
      cn(p) && (o[p] = U);
    }
  else if (i)
    for (const a in i) {
      const p = je(a);
      if (cn(p)) {
        const S = i[a], C = o[p] = P(S) || M(S) ? { type: S } : X({}, S), F = C.type;
        let R = !1, k = !0;
        if (P(F))
          for (let j = 0; j < F.length; ++j) {
            const W = F[j], q = M(W) && W.name;
            if (q === "Boolean") {
              R = !0;
              break;
            } else q === "String" && (k = !1);
          }
        else
          R = M(F) && F.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = R, C[
          1
          /* shouldCastTrue */
        ] = k, (R || N(C, "default")) && f.push(p);
      }
    }
  const h = [o, f];
  return K(e) && n.set(e, h), h;
}
function cn(e) {
  return e[0] !== "$" && !ct(e);
}
const br = (e) => e[0] === "_" || e === "$stable", Ws = (e) => P(e) ? e.map(ye) : [ye(e)], fo = (e, t, s) => {
  if (t._n)
    return t;
  const n = Di((...r) => (Re.NODE_ENV !== "production" && Y && (!s || (s.root, Y.root)), Ws(t(...r))), s);
  return n._c = !1, n;
}, xr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (br(r)) continue;
    const i = e[r];
    if (M(i))
      t[r] = fo(r, i, n);
    else if (i != null) {
      const o = Ws(i);
      t[r] = () => o;
    }
  }
}, yr = (e, t) => {
  const s = Ws(t);
  e.slots.default = () => s;
}, vr = (e, t, s) => {
  for (const n in t)
    (s || n !== "_") && (e[n] = t[n]);
}, co = (e, t, s) => {
  const n = e.slots = pr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (vr(n, t, s), s && Fn(n, "_", r, !0)) : xr(t, n);
  } else t && yr(e, t);
}, uo = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = U;
  if (n.shapeFlag & 32) {
    const f = t._;
    f ? s && f === 1 ? i = !1 : vr(r, t, s) : (i = !t.$stable, xr(t, r)), o = t;
  } else t && (yr(e, t), o = { default: 1 });
  if (i)
    for (const f in r)
      !br(f) && o[f] == null && delete r[f];
}, le = wo;
function ao(e) {
  return ho(e);
}
function ho(e, t) {
  const s = Gt();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: f,
    createComment: u,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: S,
    setScopeId: C = he,
    insertStaticContent: F
  } = e, R = (l, c, d, _ = null, g = null, m = null, v = void 0, y = null, x = !!c.dynamicChildren) => {
    if (l === c)
      return;
    l && !lt(l, c) && (_ = Pt(l), me(l, g, m, !0), l = null), c.patchFlag === -2 && (x = !1, c.dynamicChildren = null);
    const { type: b, ref: T, shapeFlag: E } = c;
    switch (b) {
      case Qt:
        k(l, c, d, _);
        break;
      case vt:
        j(l, c, d, _);
        break;
      case ds:
        l == null && W(c, d, _, v);
        break;
      case Oe:
        Tt(
          l,
          c,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        );
        break;
      default:
        E & 1 ? J(
          l,
          c,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        ) : E & 6 ? Ot(
          l,
          c,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        ) : (E & 64 || E & 128) && b.process(
          l,
          c,
          d,
          _,
          g,
          m,
          v,
          y,
          x,
          rt
        );
    }
    T != null && g && vs(T, l && l.ref, m, c || l, !c);
  }, k = (l, c, d, _) => {
    if (l == null)
      n(
        c.el = f(c.children),
        d,
        _
      );
    else {
      const g = c.el = l.el;
      c.children !== l.children && h(g, c.children);
    }
  }, j = (l, c, d, _) => {
    l == null ? n(
      c.el = u(c.children || ""),
      d,
      _
    ) : c.el = l.el;
  }, W = (l, c, d, _) => {
    [l.el, l.anchor] = F(
      l.children,
      c,
      d,
      _,
      l.el,
      l.anchor
    );
  }, q = ({ el: l, anchor: c }, d, _) => {
    let g;
    for (; l && l !== c; )
      g = S(l), n(l, d, _), l = g;
    n(c, d, _);
  }, O = ({ el: l, anchor: c }) => {
    let d;
    for (; l && l !== c; )
      d = S(l), r(l), l = d;
    r(c);
  }, J = (l, c, d, _, g, m, v, y, x) => {
    c.type === "svg" ? v = "svg" : c.type === "math" && (v = "mathml"), l == null ? Se(
      c,
      d,
      _,
      g,
      m,
      v,
      y,
      x
    ) : wt(
      l,
      c,
      g,
      m,
      v,
      y,
      x
    );
  }, Se = (l, c, d, _, g, m, v, y) => {
    let x, b;
    const { props: T, shapeFlag: E, transition: w, dirs: A } = l;
    if (x = l.el = o(
      l.type,
      m,
      T && T.is,
      T
    ), E & 8 ? a(x, l.children) : E & 16 && Ce(
      l.children,
      x,
      null,
      _,
      g,
      cs(l, m),
      v,
      y
    ), A && Be(l, null, _, "created"), ue(x, l, l.scopeId, v, _), T) {
      for (const L in T)
        L !== "value" && !ct(L) && i(x, L, null, T[L], m, _);
      "value" in T && i(x, "value", null, T.value, m), (b = T.onVnodeBeforeMount) && be(b, _, l);
    }
    A && Be(l, null, _, "beforeMount");
    const I = po(g, w);
    I && w.beforeEnter(x), n(x, c, d), ((b = T && T.onVnodeMounted) || I || A) && le(() => {
      b && be(b, _, l), I && w.enter(x), A && Be(l, null, _, "mounted");
    }, g);
  }, ue = (l, c, d, _, g) => {
    if (d && C(l, d), _)
      for (let m = 0; m < _.length; m++)
        C(l, _[m]);
    if (g) {
      let m = g.subTree;
      if (c === m || Or(m.type) && (m.ssContent === c || m.ssFallback === c)) {
        const v = g.vnode;
        ue(
          l,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, Ce = (l, c, d, _, g, m, v, y, x = 0) => {
    for (let b = x; b < l.length; b++) {
      const T = l[b] = y ? De(l[b]) : ye(l[b]);
      R(
        null,
        T,
        c,
        d,
        _,
        g,
        m,
        v,
        y
      );
    }
  }, wt = (l, c, d, _, g, m, v) => {
    const y = c.el = l.el;
    let { patchFlag: x, dynamicChildren: b, dirs: T } = c;
    x |= l.patchFlag & 16;
    const E = l.props || U, w = c.props || U;
    let A;
    if (d && Ke(d, !1), (A = w.onVnodeBeforeUpdate) && be(A, d, c, l), T && Be(c, l, d, "beforeUpdate"), d && Ke(d, !0), (E.innerHTML && w.innerHTML == null || E.textContent && w.textContent == null) && a(y, ""), b ? Le(
      l.dynamicChildren,
      b,
      y,
      d,
      _,
      cs(c, g),
      m
    ) : v || $(
      l,
      c,
      y,
      null,
      d,
      _,
      cs(c, g),
      m,
      !1
    ), x > 0) {
      if (x & 16)
        st(y, E, w, d, g);
      else if (x & 2 && E.class !== w.class && i(y, "class", null, w.class, g), x & 4 && i(y, "style", E.style, w.style, g), x & 8) {
        const I = c.dynamicProps;
        for (let L = 0; L < I.length; L++) {
          const H = I[L], re = E[H], Z = w[H];
          (Z !== re || H === "value") && i(y, H, re, Z, g, d);
        }
      }
      x & 1 && l.children !== c.children && a(y, c.children);
    } else !v && b == null && st(y, E, w, d, g);
    ((A = w.onVnodeUpdated) || T) && le(() => {
      A && be(A, d, c, l), T && Be(c, l, d, "updated");
    }, _);
  }, Le = (l, c, d, _, g, m, v) => {
    for (let y = 0; y < c.length; y++) {
      const x = l[y], b = c[y], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lt(x, b) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? p(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      R(
        x,
        b,
        T,
        null,
        _,
        g,
        m,
        v,
        !0
      );
    }
  }, st = (l, c, d, _, g) => {
    if (c !== d) {
      if (c !== U)
        for (const m in c)
          !ct(m) && !(m in d) && i(
            l,
            m,
            c[m],
            null,
            g,
            _
          );
      for (const m in d) {
        if (ct(m)) continue;
        const v = d[m], y = c[m];
        v !== y && m !== "value" && i(l, m, y, v, g, _);
      }
      "value" in d && i(l, "value", c.value, d.value, g);
    }
  }, Tt = (l, c, d, _, g, m, v, y, x) => {
    const b = c.el = l ? l.el : f(""), T = c.anchor = l ? l.anchor : f("");
    let { patchFlag: E, dynamicChildren: w, slotScopeIds: A } = c;
    A && (y = y ? y.concat(A) : A), l == null ? (n(b, d, _), n(T, d, _), Ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      c.children || [],
      d,
      T,
      g,
      m,
      v,
      y,
      x
    )) : E > 0 && E & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Le(
      l.dynamicChildren,
      w,
      d,
      g,
      m,
      v,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (c.key != null || g && c === g.subTree) && Er(
      l,
      c,
      !0
      /* shallow */
    )) : $(
      l,
      c,
      d,
      T,
      g,
      m,
      v,
      y,
      x
    );
  }, Ot = (l, c, d, _, g, m, v, y, x) => {
    c.slotScopeIds = y, l == null ? c.shapeFlag & 512 ? g.ctx.activate(
      c,
      d,
      _,
      v,
      x
    ) : kt(
      c,
      d,
      _,
      g,
      m,
      v,
      x
    ) : Js(l, c, x);
  }, kt = (l, c, d, _, g, m, v) => {
    const y = l.component = Ho(
      l,
      _,
      g
    );
    if (fr(l) && (y.ctx.renderer = rt), jo(y, !1, v), y.asyncDep) {
      if (g && g.registerDep(y, ee, v), !l.el) {
        const x = y.subTree = de(vt);
        j(null, x, c, d);
      }
    } else
      ee(
        y,
        l,
        c,
        d,
        g,
        m,
        v
      );
  }, Js = (l, c, d) => {
    const _ = c.component = l.component;
    if (So(l, c, d))
      if (_.asyncDep && !_.asyncResolved) {
        B(_, c, d);
        return;
      } else
        _.next = c, _.update();
    else
      c.el = l.el, _.vnode = c;
  }, ee = (l, c, d, _, g, m, v) => {
    const y = () => {
      if (l.isMounted) {
        let { next: E, bu: w, u: A, parent: I, vnode: L } = l;
        {
          const ie = Sr(l);
          if (ie) {
            E && (E.el = L.el, B(l, E, v)), ie.asyncDep.then(() => {
              l.isUnmounted || y();
            });
            return;
          }
        }
        let H = E, re;
        Ke(l, !1), E ? (E.el = L.el, B(l, E, v)) : E = L, w && ss(w), (re = E.props && E.props.onVnodeBeforeUpdate) && be(re, I, E, L), Ke(l, !0);
        const Z = as(l), ae = l.subTree;
        l.subTree = Z, R(
          ae,
          Z,
          // parent may have changed if it's in a teleport
          p(ae.el),
          // anchor may have changed if it's in a fragment
          Pt(ae),
          l,
          g,
          m
        ), E.el = Z.el, H === null && Co(l, Z.el), A && le(A, g), (re = E.props && E.props.onVnodeUpdated) && le(
          () => be(re, I, E, L),
          g
        );
      } else {
        let E;
        const { el: w, props: A } = c, { bm: I, m: L, parent: H, root: re, type: Z } = l, ae = pt(c);
        if (Ke(l, !1), I && ss(I), !ae && (E = A && A.onVnodeBeforeMount) && be(E, H, c), Ke(l, !0), w && Zs) {
          const ie = () => {
            l.subTree = as(l), Zs(
              w,
              l.subTree,
              l,
              g,
              null
            );
          };
          ae && Z.__asyncHydrate ? Z.__asyncHydrate(
            w,
            l,
            ie
          ) : ie();
        } else {
          re.ce && re.ce._injectChildStyle(Z);
          const ie = l.subTree = as(l);
          R(
            null,
            ie,
            d,
            _,
            l,
            g,
            m
          ), c.el = ie.el;
        }
        if (L && le(L, g), !ae && (E = A && A.onVnodeMounted)) {
          const ie = c;
          le(
            () => be(E, H, ie),
            g
          );
        }
        (c.shapeFlag & 256 || H && pt(H.vnode) && H.vnode.shapeFlag & 256) && l.a && le(l.a, g), l.isMounted = !0, c = d = _ = null;
      }
    };
    l.scope.on();
    const x = l.effect = new jn(y);
    l.scope.off();
    const b = l.update = x.run.bind(x), T = l.job = x.runIfDirty.bind(x);
    T.i = l, T.id = l.uid, x.scheduler = () => Us(T), Ke(l, !0), b();
  }, B = (l, c, d) => {
    c.component = l;
    const _ = l.vnode.props;
    l.vnode = c, l.next = null, oo(l, c.props, _, d), uo(l, c.children, d), Pe(), nn(l), Me();
  }, $ = (l, c, d, _, g, m, v, y, x = !1) => {
    const b = l && l.children, T = l ? l.shapeFlag : 0, E = c.children, { patchFlag: w, shapeFlag: A } = c;
    if (w > 0) {
      if (w & 128) {
        At(
          b,
          E,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        );
        return;
      } else if (w & 256) {
        Ve(
          b,
          E,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        );
        return;
      }
    }
    A & 8 ? (T & 16 && nt(b, g, m), E !== b && a(d, E)) : T & 16 ? A & 16 ? At(
      b,
      E,
      d,
      _,
      g,
      m,
      v,
      y,
      x
    ) : nt(b, g, m, !0) : (T & 8 && a(d, ""), A & 16 && Ce(
      E,
      d,
      _,
      g,
      m,
      v,
      y,
      x
    ));
  }, Ve = (l, c, d, _, g, m, v, y, x) => {
    l = l || Xe, c = c || Xe;
    const b = l.length, T = c.length, E = Math.min(b, T);
    let w;
    for (w = 0; w < E; w++) {
      const A = c[w] = x ? De(c[w]) : ye(c[w]);
      R(
        l[w],
        A,
        d,
        null,
        g,
        m,
        v,
        y,
        x
      );
    }
    b > T ? nt(
      l,
      g,
      m,
      !0,
      !1,
      E
    ) : Ce(
      c,
      d,
      _,
      g,
      m,
      v,
      y,
      x,
      E
    );
  }, At = (l, c, d, _, g, m, v, y, x) => {
    let b = 0;
    const T = c.length;
    let E = l.length - 1, w = T - 1;
    for (; b <= E && b <= w; ) {
      const A = l[b], I = c[b] = x ? De(c[b]) : ye(c[b]);
      if (lt(A, I))
        R(
          A,
          I,
          d,
          null,
          g,
          m,
          v,
          y,
          x
        );
      else
        break;
      b++;
    }
    for (; b <= E && b <= w; ) {
      const A = l[E], I = c[w] = x ? De(c[w]) : ye(c[w]);
      if (lt(A, I))
        R(
          A,
          I,
          d,
          null,
          g,
          m,
          v,
          y,
          x
        );
      else
        break;
      E--, w--;
    }
    if (b > E) {
      if (b <= w) {
        const A = w + 1, I = A < T ? c[A].el : _;
        for (; b <= w; )
          R(
            null,
            c[b] = x ? De(c[b]) : ye(c[b]),
            d,
            I,
            g,
            m,
            v,
            y,
            x
          ), b++;
      }
    } else if (b > w)
      for (; b <= E; )
        me(l[b], g, m, !0), b++;
    else {
      const A = b, I = b, L = /* @__PURE__ */ new Map();
      for (b = I; b <= w; b++) {
        const oe = c[b] = x ? De(c[b]) : ye(c[b]);
        oe.key != null && L.set(oe.key, b);
      }
      let H, re = 0;
      const Z = w - I + 1;
      let ae = !1, ie = 0;
      const it = new Array(Z);
      for (b = 0; b < Z; b++) it[b] = 0;
      for (b = A; b <= E; b++) {
        const oe = l[b];
        if (re >= Z) {
          me(oe, g, m, !0);
          continue;
        }
        let _e;
        if (oe.key != null)
          _e = L.get(oe.key);
        else
          for (H = I; H <= w; H++)
            if (it[H - I] === 0 && lt(oe, c[H])) {
              _e = H;
              break;
            }
        _e === void 0 ? me(oe, g, m, !0) : (it[_e - I] = b + 1, _e >= ie ? ie = _e : ae = !0, R(
          oe,
          c[_e],
          d,
          null,
          g,
          m,
          v,
          y,
          x
        ), re++);
      }
      const Qs = ae ? go(it) : Xe;
      for (H = Qs.length - 1, b = Z - 1; b >= 0; b--) {
        const oe = I + b, _e = c[oe], ks = oe + 1 < T ? c[oe + 1].el : _;
        it[b] === 0 ? R(
          null,
          _e,
          d,
          ks,
          g,
          m,
          v,
          y,
          x
        ) : ae && (H < 0 || b !== Qs[H] ? Ue(_e, d, ks, 2) : H--);
      }
    }
  }, Ue = (l, c, d, _, g = null) => {
    const { el: m, type: v, transition: y, children: x, shapeFlag: b } = l;
    if (b & 6) {
      Ue(l.component.subTree, c, d, _);
      return;
    }
    if (b & 128) {
      l.suspense.move(c, d, _);
      return;
    }
    if (b & 64) {
      v.move(l, c, d, rt);
      return;
    }
    if (v === Oe) {
      n(m, c, d);
      for (let E = 0; E < x.length; E++)
        Ue(x[E], c, d, _);
      n(l.anchor, c, d);
      return;
    }
    if (v === ds) {
      q(l, c, d);
      return;
    }
    if (_ !== 2 && b & 1 && y)
      if (_ === 0)
        y.beforeEnter(m), n(m, c, d), le(() => y.enter(m), g);
      else {
        const { leave: E, delayLeave: w, afterLeave: A } = y, I = () => n(m, c, d), L = () => {
          E(m, () => {
            I(), A && A();
          });
        };
        w ? w(m, I, L) : L();
      }
    else
      n(m, c, d);
  }, me = (l, c, d, _ = !1, g = !1) => {
    const {
      type: m,
      props: v,
      ref: y,
      children: x,
      dynamicChildren: b,
      shapeFlag: T,
      patchFlag: E,
      dirs: w,
      cacheIndex: A
    } = l;
    if (E === -2 && (g = !1), y != null && vs(y, null, d, l, !0), A != null && (c.renderCache[A] = void 0), T & 256) {
      c.ctx.deactivate(l);
      return;
    }
    const I = T & 1 && w, L = !pt(l);
    let H;
    if (L && (H = v && v.onVnodeBeforeUnmount) && be(H, c, l), T & 6)
      Dr(l.component, d, _);
    else {
      if (T & 128) {
        l.suspense.unmount(d, _);
        return;
      }
      I && Be(l, null, c, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        c,
        d,
        rt,
        _
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Oe || E > 0 && E & 64) ? nt(
        b,
        c,
        d,
        !1,
        !0
      ) : (m === Oe && E & 384 || !g && T & 16) && nt(x, c, d), _ && Ys(l);
    }
    (L && (H = v && v.onVnodeUnmounted) || I) && le(() => {
      H && be(H, c, l), I && Be(l, null, c, "unmounted");
    }, d);
  }, Ys = (l) => {
    const { type: c, el: d, anchor: _, transition: g } = l;
    if (c === Oe) {
      Fr(d, _);
      return;
    }
    if (c === ds) {
      O(l);
      return;
    }
    const m = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: y } = g, x = () => v(d, m);
      y ? y(l.el, m, x) : x();
    } else
      m();
  }, Fr = (l, c) => {
    let d;
    for (; l !== c; )
      d = S(l), r(l), l = d;
    r(c);
  }, Dr = (l, c, d) => {
    const { bum: _, scope: g, job: m, subTree: v, um: y, m: x, a: b } = l;
    un(x), un(b), _ && ss(_), g.stop(), m && (m.flags |= 8, me(v, l, c, d)), y && le(y, c), le(() => {
      l.isUnmounted = !0;
    }, c), c && c.pendingBranch && !c.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === c.pendingId && (c.deps--, c.deps === 0 && c.resolve());
  }, nt = (l, c, d, _ = !1, g = !1, m = 0) => {
    for (let v = m; v < l.length; v++)
      me(l[v], c, d, _, g);
  }, Pt = (l) => {
    if (l.shapeFlag & 6)
      return Pt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const c = S(l.anchor || l.el), d = c && c[Ni];
    return d ? S(d) : c;
  };
  let es = !1;
  const zs = (l, c, d) => {
    l == null ? c._vnode && me(c._vnode, null, null, !0) : R(
      c._vnode || null,
      l,
      c,
      null,
      null,
      null,
      d
    ), c._vnode = l, es || (es = !0, nn(), rr(), es = !1);
  }, rt = {
    p: R,
    um: me,
    m: Ue,
    r: Ys,
    mt: kt,
    mc: Ce,
    pc: $,
    pbc: Le,
    n: Pt,
    o: e
  };
  let Xs, Zs;
  return {
    render: zs,
    hydrate: Xs,
    createApp: no(zs, Xs)
  };
}
function cs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ke({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function po(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Er(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let f = r[i];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = r[i] = De(r[i]), f.el = o.el), !s && f.patchFlag !== -2 && Er(o, f)), f.type === Qt && (f.el = o.el);
    }
}
function go(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, f;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        f = i + o >> 1, e[s[f]] < h ? i = f + 1 : o = f;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Sr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Sr(t);
}
function un(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const mo = Symbol.for("v-scx"), _o = () => Dt(mo);
function us(e, t, s) {
  return Cr(e, t, s);
}
function Cr(e, t, s = U) {
  const { immediate: n, deep: r, flush: i, once: o } = s, f = X({}, s), u = t && n || !t && i !== "post";
  let h;
  if (St) {
    if (i === "sync") {
      const C = _o();
      h = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!u) {
      const C = () => {
      };
      return C.stop = he, C.resume = he, C.pause = he, C;
    }
  }
  const a = Y;
  f.call = (C, F, R) => Ee(C, a, F, R);
  let p = !1;
  i === "post" ? f.scheduler = (C) => {
    le(C, a && a.suspense);
  } : i !== "sync" && (p = !0, f.scheduler = (C, F) => {
    F ? C() : Us(C);
  }), f.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const S = Ci(e, t, f);
  return St && (h ? h.push(S) : u && S()), S;
}
function bo(e, t, s) {
  const n = this.proxy, r = G(e) ? e.includes(".") ? wr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  M(t) ? i = t : (i = t.handler, s = t);
  const o = Ct(this), f = Cr(r, i.bind(n), s);
  return o(), f;
}
function wr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const xo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function yo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || U;
  let r = s;
  const i = t.startsWith("update:"), o = i && xo(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => G(a) ? a.trim() : a)), o.number && (r = s.map(Vr)));
  let f, u = n[f = ts(t)] || // also try camelCase event handler (#2249)
  n[f = ts(je(t))];
  !u && i && (u = n[f = ts(Je(t))]), u && Ee(
    u,
    e,
    6,
    r
  );
  const h = n[f + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Ee(
      h,
      e,
      6,
      r
    );
  }
}
function Tr(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, f = !1;
  if (!M(e)) {
    const u = (h) => {
      const a = Tr(h, t, !0);
      a && (f = !0, X(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !f ? (K(e) && n.set(e, null), null) : (P(i) ? i.forEach((u) => o[u] = null) : X(o, i), K(e) && n.set(e, o), o);
}
function Zt(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, Je(t)) || N(e, t));
}
function as(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: f,
    emit: u,
    render: h,
    renderCache: a,
    props: p,
    data: S,
    setupState: C,
    ctx: F,
    inheritAttrs: R
  } = e, k = Lt(e);
  let j, W;
  try {
    if (s.shapeFlag & 4) {
      const O = r || n, J = Re.NODE_ENV !== "production" && C.__isScriptSetup ? new Proxy(O, {
        get(Se, ue, Ce) {
          return wi(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Se, ue, Ce);
        }
      }) : O;
      j = ye(
        h.call(
          J,
          O,
          a,
          Re.NODE_ENV !== "production" ? Rt(p) : p,
          C,
          S,
          F
        )
      ), W = f;
    } else {
      const O = t;
      Re.NODE_ENV, j = ye(
        O.length > 1 ? O(
          Re.NODE_ENV !== "production" ? Rt(p) : p,
          Re.NODE_ENV !== "production" ? {
            get attrs() {
              return Rt(f);
            },
            slots: o,
            emit: u
          } : { attrs: f, slots: o, emit: u }
        ) : O(
          Re.NODE_ENV !== "production" ? Rt(p) : p,
          null
        )
      ), W = t.props ? f : vo(f);
    }
  } catch (O) {
    mt.length = 0, zt(O, e, 1), j = de(vt);
  }
  let q = j;
  if (W && R !== !1) {
    const O = Object.keys(W), { shapeFlag: J } = q;
    O.length && J & 7 && (i && O.some(Ps) && (W = Eo(
      W,
      i
    )), q = et(q, W, !1, !0));
  }
  return s.dirs && (q = et(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(s.dirs) : s.dirs), s.transition && Bs(q, s.transition), j = q, Lt(k), j;
}
const vo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Kt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Eo = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ps(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function So(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: f, patchFlag: u } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? an(n, o, h) : !!o;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const S = a[p];
        if (o[S] !== n[S] && !Zt(h, S))
          return !0;
      }
    }
  } else
    return (r || f) && (!f || !f.$stable) ? !0 : n === o ? !1 : n ? o ? an(n, o, h) : !0 : !!o;
  return !1;
}
function an(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !Zt(s, i))
      return !0;
  }
  return !1;
}
function Co({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Or = (e) => e.__isSuspense;
function wo(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Fi(e);
}
const Oe = Symbol.for("v-fgt"), Qt = Symbol.for("v-txt"), vt = Symbol.for("v-cmt"), ds = Symbol.for("v-stc"), mt = [];
let ce = null;
function To(e = !1) {
  mt.push(ce = e ? null : []);
}
function Oo() {
  mt.pop(), ce = mt[mt.length - 1] || null;
}
let Et = 1;
function dn(e) {
  Et += e, e < 0 && ce && (ce.hasOnce = !0);
}
function Ao(e) {
  return e.dynamicChildren = Et > 0 ? ce || Xe : null, Oo(), Et > 0 && ce && ce.push(e), e;
}
function Po(e, t, s, n, r, i) {
  return Ao(
    _t(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Ut(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ar = ({ key: e }) => e ?? null, Nt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || z(e) || M(e) ? { i: ve, r: e, k: t, f: !!s } : e : null);
function _t(e, t = null, s = null, n = 0, r = null, i = e === Oe ? 0 : 1, o = !1, f = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ar(t),
    ref: t && Nt(t),
    scopeId: or,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return f ? (qs(u, s), i & 128 && e.normalize(u)) : s && (u.shapeFlag |= G(s) ? 8 : 16), Et > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ce.push(u), u;
}
const de = Mo;
function Mo(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === zi) && (e = vt), Ut(e)) {
    const f = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && qs(f, s), Et > 0 && !i && ce && (f.shapeFlag & 6 ? ce[ce.indexOf(e)] = f : ce.push(f)), f.patchFlag = -2, f;
  }
  if (Wo(e) && (e = e.__vccOpts), t) {
    t = Io(t);
    let { class: f, style: u } = t;
    f && !G(f) && (t.class = Fs(f)), K(u) && (Vs(u) && !P(u) && (u = X({}, u)), t.style = Rs(u));
  }
  const o = G(e) ? 1 : Or(e) ? 128 : Hi(e) ? 64 : K(e) ? 4 : M(e) ? 2 : 0;
  return _t(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Io(e) {
  return e ? Vs(e) || gr(e) ? X({}, e) : e : null;
}
function et(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: f, transition: u } = e, h = t ? Fo(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Ar(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? P(i) ? i.concat(Nt(t)) : [i, Nt(t)] : Nt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && Bs(
    a,
    u.clone(a)
  ), a;
}
function Ro(e = " ", t = 0) {
  return de(Qt, null, e, t);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? de(vt) : P(e) ? de(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ut(e) ? De(e) : de(Qt, null, String(e));
}
function De(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function qs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), qs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !gr(t) ? t._ctx = ve : r === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: ve }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ro(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Fo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Fs([t.class, n.class]));
      else if (r === "style")
        t.style = Rs([t.style, n.style]);
      else if (Kt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(P(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function be(e, t, s, n = null) {
  Ee(e, t, 7, [
    s,
    n
  ]);
}
const Do = dr();
let No = 0;
function Ho(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Do, i = {
    uid: No++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Yr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: _r(n, r),
    emitsOptions: Tr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = yo.bind(null, i), e.ce && e.ce(i), i;
}
let Y = null, Bt, Ts;
{
  const e = Gt(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Bt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => Y = s
  ), Ts = t(
    "__VUE_SSR_SETTERS__",
    (s) => St = s
  );
}
const Ct = (e) => {
  const t = Y;
  return Bt(e), e.scope.on(), () => {
    e.scope.off(), Bt(t);
  };
}, hn = () => {
  Y && Y.scope.off(), Bt(null);
};
function Pr(e) {
  return e.vnode.shapeFlag & 4;
}
let St = !1;
function jo(e, t = !1, s = !1) {
  t && Ts(t);
  const { props: n, children: r } = e.vnode, i = Pr(e);
  io(e, n, i, t), co(e, r, s);
  const o = i ? $o(e, t) : void 0;
  return t && Ts(!1), o;
}
function $o(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xi);
  const { setup: n } = s;
  if (n) {
    Pe();
    const r = e.setupContext = n.length > 1 ? Vo(e) : null, i = Ct(e), o = tt(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), f = Pn(o);
    if (Me(), i(), (f || e.sp) && !pt(e) && lr(e), f) {
      if (o.then(hn, hn), t)
        return o.then((u) => {
          pn(e, u, t);
        }).catch((u) => {
          zt(u, e, 0);
        });
      e.asyncDep = o;
    } else
      pn(e, o, t);
  } else
    Mr(e, t);
}
function pn(e, t, s) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = er(t)), Mr(e, s);
}
let gn;
function Mr(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && gn && !n.render) {
      const r = n.template || Ks(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: f, compilerOptions: u } = n, h = X(
          X(
            {
              isCustomElement: i,
              delimiters: f
            },
            o
          ),
          u
        );
        n.render = gn(r, h);
      }
    }
    e.render = n.render || he;
  }
  {
    const r = Ct(e);
    Pe();
    try {
      Zi(e);
    } finally {
      Me(), r();
    }
  }
}
const Lo = {
  get(e, t) {
    return Q(e, "get", ""), e[t];
  }
};
function Vo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Lo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(er(gi(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in gt)
        return gt[s](e);
    },
    has(t, s) {
      return s in t || s in gt;
    }
  })) : e.proxy;
}
const Uo = /(?:^|[-_])(\w)/g, Bo = (e) => e.replace(Uo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ko(e, t = !0) {
  return M(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ir(e, t, s = !1) {
  let n = Ko(t);
  if (!n && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && e && e.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    n = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return n ? Bo(n) : s ? "App" : "Anonymous";
}
function Wo(e) {
  return M(e) && "__vccOpts" in e;
}
const qo = (e, t) => Ei(e, t, St);
function Go(e, t, s) {
  const n = arguments.length;
  return n === 2 ? K(t) && !P(t) ? Ut(t) ? de(e, null, [t]) : de(e, t) : de(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Ut(s) && (s = [s]), de(e, t, s));
}
const Jo = "3.5.12";
let Os;
const mn = typeof window < "u" && window.trustedTypes;
if (mn)
  try {
    Os = /* @__PURE__ */ mn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Rr = Os ? (e) => Os.createHTML(e) : (e) => e, Yo = "http://www.w3.org/2000/svg", zo = "http://www.w3.org/1998/Math/MathML", Te = typeof document < "u" ? document : null, _n = Te && /* @__PURE__ */ Te.createElement("template"), Xo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Te.createElementNS(Yo, e) : t === "mathml" ? Te.createElementNS(zo, e) : s ? Te.createElement(e, { is: s }) : Te.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Te.createTextNode(e),
  createComment: (e) => Te.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Te.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      _n.innerHTML = Rr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const f = _n.content;
      if (n === "svg" || n === "mathml") {
        const u = f.firstChild;
        for (; u.firstChild; )
          f.appendChild(u.firstChild);
        f.removeChild(u);
      }
      t.insertBefore(f, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Zo = Symbol("_vtc");
function Qo(e, t, s) {
  const n = e[Zo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const bn = Symbol("_vod"), ko = Symbol("_vsh"), el = Symbol(""), tl = /(^|;)\s*display\s*:/;
function sl(e, t, s) {
  const n = e.style, r = G(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (G(t))
        for (const o of t.split(";")) {
          const f = o.slice(0, o.indexOf(":")).trim();
          s[f] == null && Ht(n, f, "");
        }
      else
        for (const o in t)
          s[o] == null && Ht(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Ht(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[el];
      o && (s += ";" + o), n.cssText = s, i = tl.test(s);
    }
  } else t && e.removeAttribute("style");
  bn in e && (e[bn] = i ? n.display : "", e[ko] && (n.display = "none"));
}
const xn = /\s*!important$/;
function Ht(e, t, s) {
  if (P(s))
    s.forEach((n) => Ht(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = nl(e, t);
    xn.test(s) ? e.setProperty(
      Je(n),
      s.replace(xn, ""),
      "important"
    ) : e[n] = s;
  }
}
const yn = ["Webkit", "Moz", "ms"], hs = {};
function nl(e, t) {
  const s = hs[t];
  if (s)
    return s;
  let n = je(t);
  if (n !== "filter" && n in e)
    return hs[t] = n;
  n = Rn(n);
  for (let r = 0; r < yn.length; r++) {
    const i = yn[r] + n;
    if (i in e)
      return hs[t] = i;
  }
  return t;
}
const vn = "http://www.w3.org/1999/xlink";
function En(e, t, s, n, r, i = Gr(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(vn, t.slice(6, t.length)) : e.setAttributeNS(vn, t, s) : s == null || i && !Dn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : $e(s) ? String(s) : s
  );
}
function Sn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Rr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const f = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (f !== u || !("_value" in e)) && (e.value = u), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const f = typeof e[t];
    f === "boolean" ? s = Dn(s) : s == null && f === "string" ? (s = "", o = !0) : f === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function rl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function il(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Cn = Symbol("_vei");
function ol(e, t, s, n, r = null) {
  const i = e[Cn] || (e[Cn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [f, u] = ll(t);
    if (n) {
      const h = i[t] = ul(
        n,
        r
      );
      rl(e, f, h, u);
    } else o && (il(e, f, o, u), i[t] = void 0);
  }
}
const wn = /(?:Once|Passive|Capture)$/;
function ll(e) {
  let t;
  if (wn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(wn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let ps = 0;
const fl = /* @__PURE__ */ Promise.resolve(), cl = () => ps || (fl.then(() => ps = 0), ps = Date.now());
function ul(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Ee(
      al(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = cl(), s;
}
function al(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dl = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Qo(e, n, o) : t === "style" ? sl(e, s, n) : Kt(t) ? Ps(t) || ol(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hl(e, t, n, o)) ? (Sn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && En(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(n)) ? Sn(e, je(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), En(e, t, n, o));
};
function hl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Tn(t) && M(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Tn(t) && G(s) ? !1 : t in e;
}
const pl = /* @__PURE__ */ X({ patchProp: dl }, Xo);
let On;
function gl() {
  return On || (On = ao(pl));
}
const ml = (...e) => {
  const t = gl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = bl(n);
    if (!r) return;
    const i = t._component;
    !M(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, _l(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function _l(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bl(e) {
  return G(e) ? document.querySelector(e) : e;
}
const xl = {
  __name: "MyVueComponent",
  props: {
    message: {
      type: String,
      required: !0
    }
  },
  emits: ["myEvent"],
  setup(e, { emit: t }) {
    const s = mi(0), n = t, r = () => {
      s.value += 1, n("myEvent", s.value);
    };
    return (i, o) => (To(), Po("div", null, [
      o[0] || (o[0] = _t("h3", null, "Hi there", -1)),
      _t("p", null, gs(e.message), 1),
      _t("button", { onClick: r }, "Counter: " + gs(s.value), 1)
    ]));
  }
};
class yl extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["message"];
  }
  attributeChangedCallback(t, s, n) {
    t === "message" && s !== n && (this.message = n, this.updateComponent());
  }
  connectedCallback() {
    this.mountComponent();
  }
  disconnectedCallback() {
    this.app && this.app.unmount();
  }
  mountComponent() {
    this.app = ml({
      render: () => Go(xl, {
        message: this.message || "Default message",
        onMyEvent: (t) => {
          const s = new CustomEvent("myEvent", {
            detail: t,
            bubbles: !0,
            composed: !0
          });
          this.dispatchEvent(s);
        }
      })
    }), this.app.mount(this.shadowRoot);
  }
  updateComponent() {
    this.app && (this.app.unmount(), this.mountComponent());
  }
}
customElements.define("my-vue-component", yl);
