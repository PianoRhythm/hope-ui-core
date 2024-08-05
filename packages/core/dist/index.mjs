import { createRenderEffect as oe, sharedConfig as W, createSignal as $, createRoot as Do, onCleanup as O, splitProps as x, createMemo as _, untrack as Tn, createEffect as X, on as zn, mergeProps as b, onMount as he, getOwner as Po, DEV as Wo, createContext as ae, useContext as le, createComponent as f, Show as F, createUniqueId as ot, children as Fo } from "solid-js";
import { autoUpdate as Ho, offset as jo, flip as No, shift as Vo, size as Go, arrow as qo, hide as Yo, computePosition as Ko } from "@floating-ui/dom";
const Xo = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Uo = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Xo]), Zo = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), Jo = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), qt = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}), Qo = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), er = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), tr = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function nr(e, t, n) {
  let o = n.length, r = t.length, i = o, a = 0, s = 0, l = t[r - 1].nextSibling, c = null;
  for (; a < r || s < i; ) {
    if (t[a] === n[s]) {
      a++, s++;
      continue;
    }
    for (; t[r - 1] === n[i - 1]; )
      r--, i--;
    if (r === a) {
      const u = i < o ? s ? n[s - 1].nextSibling : n[i - s] : l;
      for (; s < i; )
        e.insertBefore(n[s++], u);
    } else if (i === s)
      for (; a < r; )
        (!c || !c.has(t[a])) && t[a].remove(), a++;
    else if (t[a] === n[i - 1] && n[s] === t[r - 1]) {
      const u = t[--r].nextSibling;
      e.insertBefore(n[s++], t[a++].nextSibling), e.insertBefore(n[--i], u), t[r] = n[i];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let g = s;
        for (; g < i; )
          c.set(n[g], g++);
      }
      const u = c.get(t[a]);
      if (u != null)
        if (s < u && u < i) {
          let g = a, d = 1, m;
          for (; ++g < r && g < i && !((m = c.get(t[g])) == null || m !== u + d); )
            d++;
          if (d > u - s) {
            const h = t[a];
            for (; s < u; )
              e.insertBefore(n[s++], h);
          } else
            e.replaceChild(n[s++], t[a++]);
        } else
          a++;
      else
        t[a++].remove();
    }
  }
}
const Yt = "_$DX_DELEGATE";
function Re(e, t, n) {
  const o = document.createElement("template");
  o.innerHTML = e;
  let r = o.content.firstChild;
  return n && (r = r.firstChild), r;
}
function or(e, t = window.document) {
  const n = t[Yt] || (t[Yt] = /* @__PURE__ */ new Set());
  for (let o = 0, r = e.length; o < r; o++) {
    const i = e[o];
    n.has(i) || (n.add(i), t.addEventListener(i, fr));
  }
}
function rt(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function rr(e, t, n, o) {
  o == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, o);
}
function ir(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function sr(e, t, n, o) {
  if (o)
    Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const r = n[0];
    e.addEventListener(t, n[0] = (i) => r.call(e, n[1], i));
  } else
    e.addEventListener(t, n);
}
function ar(e, t, n = {}) {
  const o = Object.keys(t || {}), r = Object.keys(n);
  let i, a;
  for (i = 0, a = r.length; i < a; i++) {
    const s = r[i];
    !s || s === "undefined" || t[s] || (Kt(e, s, !1), delete n[s]);
  }
  for (i = 0, a = o.length; i < a; i++) {
    const s = o[i], l = !!t[s];
    !s || s === "undefined" || n[s] === l || !l || (Kt(e, s, !0), n[s] = l);
  }
  return n;
}
function lr(e, t, n) {
  if (!t)
    return n ? rt(e, "style") : t;
  const o = e.style;
  if (typeof t == "string")
    return o.cssText = t;
  typeof n == "string" && (o.cssText = n = void 0), n || (n = {}), t || (t = {});
  let r, i;
  for (i in n)
    t[i] == null && o.removeProperty(i), delete n[i];
  for (i in t)
    r = t[i], r !== n[i] && (o.setProperty(i, r), n[i] = r);
  return n;
}
function cr(e, t = {}, n, o) {
  const r = {};
  return o || oe(() => r.children = $e(e, t.children, r.children)), oe(() => t.ref && t.ref(e)), oe(() => dr(e, t, n, !0, r, !0)), r;
}
function wt(e, t, n, o) {
  if (n !== void 0 && !o && (o = []), typeof t != "function")
    return $e(e, t, o, n);
  oe((r) => $e(e, t(), r, n), o);
}
function dr(e, t, n, o, r = {}, i = !1) {
  t || (t = {});
  for (const a in r)
    if (!(a in t)) {
      if (a === "children")
        continue;
      r[a] = Xt(e, a, null, r[a], n, i);
    }
  for (const a in t) {
    if (a === "children") {
      o || $e(e, t.children);
      continue;
    }
    const s = t[a];
    r[a] = Xt(e, a, s, r[a], n, i);
  }
}
function ur(e) {
  let t, n;
  return !W.context || !(t = W.registry.get(n = mr())) ? e.cloneNode(!0) : (W.completed && W.completed.add(t), W.registry.delete(n), t);
}
function gr(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function Kt(e, t, n) {
  const o = t.trim().split(/\s+/);
  for (let r = 0, i = o.length; r < i; r++)
    e.classList.toggle(o[r], n);
}
function Xt(e, t, n, o, r, i) {
  let a, s, l;
  if (t === "style")
    return lr(e, n, o);
  if (t === "classList")
    return ar(e, n, o);
  if (n === o)
    return o;
  if (t === "ref")
    i || n(e);
  else if (t.slice(0, 3) === "on:") {
    const c = t.slice(3);
    o && e.removeEventListener(c, o), n && e.addEventListener(c, n);
  } else if (t.slice(0, 10) === "oncapture:") {
    const c = t.slice(10);
    o && e.removeEventListener(c, o, !0), n && e.addEventListener(c, n, !0);
  } else if (t.slice(0, 2) === "on") {
    const c = t.slice(2).toLowerCase(), u = Qo.has(c);
    if (!u && o) {
      const g = Array.isArray(o) ? o[0] : o;
      e.removeEventListener(c, g);
    }
    (u || n) && (sr(e, c, n, u), u && or([c]));
  } else if ((l = Zo.has(t)) || !r && (qt[t] || (s = Uo.has(t))) || (a = e.nodeName.includes("-")))
    t === "class" || t === "className" ? ir(e, n) : a && !s && !l ? e[gr(t)] = n : e[qt[t] || t] = n;
  else {
    const c = r && t.indexOf(":") > -1 && tr[t.split(":")[0]];
    c ? rr(e, c, t, n) : rt(e, Jo[t] || t, n);
  }
  return n;
}
function fr(e) {
  const t = `$$${e.type}`;
  let n = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== n && Object.defineProperty(e, "target", {
    configurable: !0,
    value: n
  }), Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return n || document;
    }
  }), W.registry && !W.done && (W.done = !0, document.querySelectorAll("[id^=pl-]").forEach((o) => o.remove())); n !== null; ) {
    const o = n[t];
    if (o && !n.disabled) {
      const r = n[`${t}Data`];
      if (r !== void 0 ? o.call(n, r, e) : o.call(n, e), e.cancelBubble)
        return;
    }
    n = n.host && n.host !== n && n.host instanceof Node ? n.host : n.parentNode;
  }
}
function $e(e, t, n, o, r) {
  for (W.context && !n && (n = [...e.childNodes]); typeof n == "function"; )
    n = n();
  if (t === n)
    return n;
  const i = typeof t, a = o !== void 0;
  if (e = a && n[0] && n[0].parentNode || e, i === "string" || i === "number") {
    if (W.context)
      return n;
    if (i === "number" && (t = t.toString()), a) {
      let s = n[0];
      s && s.nodeType === 3 ? s.data = t : s = document.createTextNode(t), n = Se(e, n, o, s);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || i === "boolean") {
    if (W.context)
      return n;
    n = Se(e, n, o);
  } else {
    if (i === "function")
      return oe(() => {
        let s = t();
        for (; typeof s == "function"; )
          s = s();
        n = $e(e, s, n, o);
      }), () => n;
    if (Array.isArray(t)) {
      const s = [], l = n && Array.isArray(n);
      if (kt(s, t, n, r))
        return oe(() => n = $e(e, s, n, o, !0)), () => n;
      if (W.context) {
        if (!s.length)
          return n;
        for (let c = 0; c < s.length; c++)
          if (s[c].parentNode)
            return n = s;
      }
      if (s.length === 0) {
        if (n = Se(e, n, o), a)
          return n;
      } else
        l ? n.length === 0 ? Ut(e, s, o) : nr(e, n, s) : (n && Se(e), Ut(e, s));
      n = s;
    } else if (t instanceof Node) {
      if (W.context && t.parentNode)
        return n = a ? [t] : t;
      if (Array.isArray(n)) {
        if (a)
          return n = Se(e, n, o, t);
        Se(e, n, null, t);
      } else
        n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function kt(e, t, n, o) {
  let r = !1;
  for (let i = 0, a = t.length; i < a; i++) {
    let s = t[i], l = n && n[i];
    if (s instanceof Node)
      e.push(s);
    else if (!(s == null || s === !0 || s === !1))
      if (Array.isArray(s))
        r = kt(e, s, l) || r;
      else if (typeof s == "function")
        if (o) {
          for (; typeof s == "function"; )
            s = s();
          r = kt(e, Array.isArray(s) ? s : [s], Array.isArray(l) ? l : [l]) || r;
        } else
          e.push(s), r = !0;
      else {
        const c = String(s);
        l && l.nodeType === 3 && l.data === c ? e.push(l) : e.push(document.createTextNode(c));
      }
  }
  return r;
}
function Ut(e, t, n = null) {
  for (let o = 0, r = t.length; o < r; o++)
    e.insertBefore(t[o], n);
}
function Se(e, t, n, o) {
  if (n === void 0)
    return e.textContent = "";
  const r = o || document.createTextNode("");
  if (t.length) {
    let i = !1;
    for (let a = t.length - 1; a >= 0; a--) {
      const s = t[a];
      if (r !== s) {
        const l = s.parentNode === e;
        !i && !a ? l ? e.replaceChild(r, s) : e.insertBefore(r, n) : l && s.remove();
      } else
        i = !0;
    }
  } else
    e.insertBefore(r, n);
  return [r];
}
function mr() {
  const e = W.context;
  return `${e.id}${e.count++}`;
}
const pe = !1, hr = "http://www.w3.org/2000/svg";
function Bn(e, t = !1) {
  return t ? document.createElementNS(hr, e) : document.createElement(e);
}
function it(e) {
  const {
    useShadow: t
  } = e, n = document.createTextNode(""), o = e.mount || document.body;
  function r() {
    if (W.context) {
      const [i, a] = $(!1);
      return queueMicrotask(() => a(!0)), () => i() && e.children;
    } else
      return () => e.children;
  }
  if (o instanceof HTMLHeadElement) {
    const [i, a] = $(!1), s = () => a(!0);
    Do((l) => wt(o, () => i() ? l() : r()(), null)), O(() => {
      W.context ? queueMicrotask(s) : s();
    });
  } else {
    const i = Bn(e.isSVG ? "g" : "div", e.isSVG), a = t && i.attachShadow ? i.attachShadow({
      mode: "open"
    }) : i;
    Object.defineProperty(i, "host", {
      get() {
        return n.parentNode;
      },
      configurable: !0
    }), wt(a, r()), o.appendChild(i), e.ref && e.ref(i), O(() => o.removeChild(i));
  }
  return n;
}
function pr(e) {
  const [t, n] = x(e, ["component"]), o = _(() => t.component);
  return _(() => {
    const r = o();
    switch (typeof r) {
      case "function":
        return Tn(() => r(n));
      case "string":
        const i = er.has(r), a = W.context ? ur() : Bn(r, i);
        return cr(a, n, i), a;
    }
  });
}
function An(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function br(e) {
  const t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Mn(e) {
  for (; e && !br(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function _t(e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
var B = (e) => typeof e == "function" && !e.length ? e() : e;
function yr(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function Bt(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function xr() {
  return Bt(/^Mac/i);
}
function Cr() {
  return Bt(/^iPhone/i);
}
function Sr() {
  return Bt(/^iPad/i) || xr() && navigator.maxTouchPoints > 1;
}
function vr() {
  return Cr() || Sr();
}
function Zt(e) {
  return An(e) ? e : void 0;
}
function Ln(e) {
  const [t, n] = $(e.defaultValue?.()), o = _(() => e.value?.() !== void 0), r = _(() => o() ? e.value?.() : t());
  return [r, (i) => {
    Tn(() => {
      const a = yr(i, r());
      return Object.is(a, r()) || (o() || n(a), e.onChange?.(a)), a;
    });
  }];
}
function wr(e) {
  const [t, n] = Ln(e);
  return [() => t() ?? !1, n];
}
function yl(e) {
  const [t, n] = Ln(e);
  return [() => t() ?? [], n];
}
function kr(e = {}) {
  const [t, n] = wr({
    value: () => B(e.isOpen),
    defaultValue: () => !!B(e.defaultIsOpen),
    onChange: (i) => e.onOpenChange?.(i)
  }), o = () => {
    n(!0);
  }, r = () => {
    n(!1);
  };
  return {
    isOpen: t,
    open: o,
    close: r,
    toggle: () => {
      t() ? r() : o();
    }
  };
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useInteractOutside.ts
 */
function xl(e, t) {
  const [n, o] = $(!1);
  X(() => {
    if (B(e.isDisabled))
      return;
    const r = (a) => {
      Jt(a, t()) && (e.onInteractOutsideStart?.(a), o(!0));
    }, i = (a) => {
      n() && Jt(a, t()) && (o(!1), e.onInteractOutside?.(a));
    };
    document.addEventListener("pointerdown", r, !0), document.addEventListener("pointerup", i, !0), O(() => {
      document.removeEventListener("pointerdown", r, !0), document.removeEventListener("pointerup", i, !0);
    });
  });
}
function Jt(e, t) {
  if (e.button > 0)
    return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return !t?.contains(e.target);
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */
const ht = typeof window < "u" && window.visualViewport, _r = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ir(e) {
  X(
    zn(
      () => B(e.isEnabled),
      (t) => {
        !t || (vr() ? O(Rr()) : O($r()));
      }
    )
  );
}
function $r() {
  return _t([
    Fe(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    Fe(document.documentElement, "overflow", "hidden")
  ]);
}
function Rr() {
  let e, t = 0;
  const n = (g) => {
    e = Mn(g.target), !(e === document.documentElement && e === document.body) && (t = g.changedTouches[0].pageY);
  }, o = (g) => {
    if (e === document.documentElement || e === document.body) {
      g.preventDefault();
      return;
    }
    const d = g.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    (m <= 0 && d > t || m >= h && d < t) && g.preventDefault(), t = d;
  }, r = (g) => {
    const d = g.target;
    en(d) && d !== document.activeElement && (g.preventDefault(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    }));
  }, i = (g) => {
    const d = g.target;
    en(d) && (d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", ht && (ht.height < window.innerHeight ? requestAnimationFrame(() => {
        Qt(d);
      }) : ht.addEventListener("resize", () => Qt(d), { once: !0 }));
    }));
  }, a = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = _t([
    Fe(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    Fe(document.documentElement, "overflow", "hidden"),
    Fe(document.body, "marginTop", `-${l}px`)
  ]);
  window.scrollTo(0, 0);
  const u = _t([
    Ae(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    Ae(document, "touchmove", o, {
      passive: !1,
      capture: !0
    }),
    Ae(document, "touchend", r, {
      passive: !1,
      capture: !0
    }),
    Ae(document, "focus", i, !0),
    Ae(window, "scroll", a)
  ]);
  return () => {
    c(), u(), window.scrollTo(s, l);
  };
}
function Fe(e, t, n) {
  const o = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = o;
  };
}
function Ae(e, t, n, o) {
  return e.addEventListener(t, n, o), () => {
    e.removeEventListener(t, n, o);
  };
}
function Qt(e) {
  const t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    const n = Mn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      const o = n.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
      r > o + e.clientHeight && (n.scrollTop += r - o);
    }
    e = n.parentElement;
  }
}
function en(e) {
  return e instanceof HTMLInputElement && !_r.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var Er = !pe, Or = Er && !!Wo, Tr = Or ? (e) => Po() ? O(e) : e : O;
function zr(e, t, n) {
  if (W.context) {
    const [o, r] = $(e, n);
    return he(() => r(() => t())), [o, r];
  }
  return $(t(), n);
}
function Br(e, t, n, o) {
  return e.addEventListener(t, n, o), Tr(e.removeEventListener.bind(e, t, n, o));
}
function Dn(e, t = !1) {
  if (pe)
    return () => t;
  const n = window.matchMedia(e), [o, r] = zr(t, () => n.matches);
  return Br(n, "change", () => r(n.matches)), o;
}
function Ar(e) {
  return Dn("(prefers-color-scheme: dark)", e);
}
Ar.bind(void 0, !1);
function Mr(e, t) {
  return Dn("(prefers-reduced-motion: reduce)", e);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function Lr(e, t) {
  const [n, o] = $(Zt(t?.()));
  return X(() => {
    o(e()?.tagName.toLowerCase() || Zt(t?.()));
  }), n;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const Me = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, It = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 }
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { "transform-origin": "top" }
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { "transform-origin": "top" }
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { "transform-origin": "left" }
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { "transform-origin": "top" }
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { "transform-origin": "bottom" }
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { "transform-origin": "bottom" }
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { "transform-origin": "top" }
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { "transform-origin": "top" }
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { "transform-origin": "bottom" }
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { "transform-origin": "left" }
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { "transform-origin": "right" }
  },
  pop: {
    ...Me,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...Me,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...Me,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...Me,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...Me,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, Cl = Object.keys(It);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const tn = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function Dr(e) {
  const t = {
    "transition-duration": `${e.duration}ms`,
    "transition-timing-function": e.easing
  };
  if (An(e.transition)) {
    if (!(e.transition in It))
      return {};
    const n = It[e.transition];
    return {
      "transition-property": nn(n),
      ...t,
      ...n.common,
      ...n[tn[e.phase]]
    };
  }
  return {
    "transition-property": nn(e.transition),
    ...t,
    ...e.transition.common,
    ...e.transition[tn[e.phase]]
  };
}
function nn(e) {
  return [
    .../* @__PURE__ */ new Set([...Object.keys(e.in), ...Object.keys(e.out)])
  ].join(", ");
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/use-transition.ts
 */
const on = 250, rn = 10, sn = "ease";
function st(e, t) {
  t = b(
    {
      transition: "fade",
      duration: on,
      delay: rn,
      easing: sn,
      get exitDuration() {
        return B(t).duration || on;
      },
      get exitDelay() {
        return B(t).delay || rn;
      },
      get exitEasing() {
        return B(t).easing || sn;
      }
    },
    t
  );
  const n = Mr(), [o, r] = $(n() ? 0 : B(t).duration), [i, a] = $(
    B(e) ? "afterEnter" : "afterExit"
  ), [s, l] = $(B(t).easing);
  let c = -1;
  const u = (m) => {
    const h = m ? B(t).onBeforeEnter : B(t).onBeforeExit, S = m ? B(t).onAfterEnter : B(t).onAfterExit;
    a(m ? "beforeEnter" : "beforeExit"), window.clearTimeout(c);
    const k = r(
      n() ? 0 : m ? B(t).duration : B(t).exitDuration
    );
    if (l(m ? B(t).easing : B(t).exitEasing), k === 0) {
      h?.(), S?.(), a(m ? "afterEnter" : "afterExit");
      return;
    }
    const y = n() ? 0 : m ? B(t).delay : B(t).exitDelay, v = window.setTimeout(() => {
      h?.(), a(m ? "enter" : "exit");
    }, y);
    c = window.setTimeout(() => {
      window.clearTimeout(v), S?.(), a(m ? "afterEnter" : "afterExit");
    }, y + k);
  }, g = _(
    () => Dr({
      transition: B(t).transition,
      duration: o(),
      phase: i(),
      easing: s()
    })
  ), d = _(() => i() !== "afterExit");
  return X(
    zn(
      () => B(e),
      (m) => u(m),
      { defer: !0 }
    )
  ), O(() => {
    pe || window.clearTimeout(c);
  }), { keepMounted: d, style: g };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function Pn(e) {
  return typeof e == "number";
}
function at(e) {
  return Array.isArray(e);
}
function Pr(e) {
  return typeof e == "function";
}
function ge(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !at(e);
}
function Wn(e) {
  return ge(e) && Object.keys(e).length === 0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function Wr(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Fr(e) {
  return e == null ? [] : at(e) ? e : [e];
}
function ie(e, ...t) {
  return Pr(e) ? e(...t) : e;
}
function lt(e) {
  let t = !1;
  return function(...n) {
    t || (t = !0, e(...n));
  };
}
function Ze(e, t, n = 1 / 0) {
  return !ge(e) && !Array.isArray(e) || !n ? e : Object.entries(e).reduce((o, [r, i]) => (ge(i) || at(i) ? Object.entries(Ze(i, t, n - 1)).forEach(([a, s]) => {
    o[`${r}${t}${a}`] = s;
  }) : o[r] = i, o), {});
}
function Hr(e, t) {
  return Object.keys(e).reduce((n, o) => (o.split(t).reduce((r, i, a, s) => (r[i] != null || (r[i] = s.length - 1 === a ? e[o] : {}), r[i]), n), n), {});
}
function jr(e, t) {
  return t.split(".").reduce((n, o) => n && n[o], e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function Nr(e, t) {
  const n = {};
  return t.forEach((o) => {
    o in e && (n[o] = e[o]);
  }), n;
}
const Vr = (e) => Object.keys(e);
function Gr(e, t) {
  const n = {};
  return Object.keys(e).forEach((o) => {
    const r = e[o];
    t(r, o, e) && (n[o] = r);
  }), n;
}
function tt(e) {
  return Gr(e, (t) => t != null);
}
var R = "colors", G = "sizes", p = "space", qr = { gap: p, gridGap: p, columnGap: p, gridColumnGap: p, rowGap: p, gridRowGap: p, inset: p, insetBlock: p, insetBlockEnd: p, insetBlockStart: p, insetInline: p, insetInlineEnd: p, insetInlineStart: p, margin: p, marginTop: p, marginRight: p, marginBottom: p, marginLeft: p, marginBlock: p, marginBlockEnd: p, marginBlockStart: p, marginInline: p, marginInlineEnd: p, marginInlineStart: p, padding: p, paddingTop: p, paddingRight: p, paddingBottom: p, paddingLeft: p, paddingBlock: p, paddingBlockEnd: p, paddingBlockStart: p, paddingInline: p, paddingInlineEnd: p, paddingInlineStart: p, top: p, right: p, bottom: p, left: p, scrollMargin: p, scrollMarginTop: p, scrollMarginRight: p, scrollMarginBottom: p, scrollMarginLeft: p, scrollMarginX: p, scrollMarginY: p, scrollMarginBlock: p, scrollMarginBlockEnd: p, scrollMarginBlockStart: p, scrollMarginInline: p, scrollMarginInlineEnd: p, scrollMarginInlineStart: p, scrollPadding: p, scrollPaddingTop: p, scrollPaddingRight: p, scrollPaddingBottom: p, scrollPaddingLeft: p, scrollPaddingX: p, scrollPaddingY: p, scrollPaddingBlock: p, scrollPaddingBlockEnd: p, scrollPaddingBlockStart: p, scrollPaddingInline: p, scrollPaddingInlineEnd: p, scrollPaddingInlineStart: p, fontSize: "fontSizes", background: R, backgroundColor: R, backgroundImage: R, borderImage: R, border: R, borderBlock: R, borderBlockEnd: R, borderBlockStart: R, borderBottom: R, borderBottomColor: R, borderColor: R, borderInline: R, borderInlineEnd: R, borderInlineStart: R, borderLeft: R, borderLeftColor: R, borderRight: R, borderRightColor: R, borderTop: R, borderTopColor: R, caretColor: R, color: R, columnRuleColor: R, fill: R, outline: R, outlineColor: R, stroke: R, textDecorationColor: R, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: G, minBlockSize: G, maxBlockSize: G, inlineSize: G, minInlineSize: G, maxInlineSize: G, width: G, minWidth: G, maxWidth: G, height: G, minHeight: G, maxHeight: G, flexBasis: G, gridTemplateColumns: G, gridTemplateRows: G, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Yr = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, He = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...o) => {
    const r = ((i) => JSON.stringify(i, Yr))(t);
    return r in e ? e[r] : e[r] = n(t, ...o);
  };
}, Je = Symbol.for("sxs.internal"), At = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), an = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: Kr } = Object.prototype, $t = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), Xr = /\s+(?![^()]*\))/, ve = (e) => (t) => e(...typeof t == "string" ? String(t).split(Xr) : [t]), ln = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: ve((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: ve((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: ve((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: ve((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: ve((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: ve((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, pt = /([\d.]+)([^]*)/, Ur = (e, t) => e.length ? e.reduce((n, o) => (n.push(...t.map((r) => r.includes("&") ? r.replace(/&/g, /[ +>|~]/.test(o) && /&.*&/.test(r) ? `:is(${o})` : o) : o + " " + r)), n), []) : t, Zr = (e, t) => e in Jr && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, o, r, i) => o + (r === "stretch" ? `-moz-available${i};${$t(e)}:${o}-webkit-fill-available` : `-moz-fit-content${i};${$t(e)}:${o}fit-content`) + i) : String(t), Jr = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, se = (e) => e ? e + "-" : "", Fn = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (o, r, i, a, s) => a == "$" == !!i ? o : (r || a == "--" ? "calc(" : "") + "var(--" + (a === "$" ? se(t) + (s.includes("$") ? "" : se(n)) + s.replace(/\$/g, "-") : s) + ")" + (r || a == "--" ? "*" + (r || "") + (i || "1") + ")" : "")), Qr = /\s*,\s*(?![^()]*\))/, ei = Object.prototype.toString, _e = (e, t, n, o, r) => {
  let i, a, s;
  const l = (c, u, g) => {
    let d, m;
    const h = (S) => {
      for (d in S) {
        const v = d.charCodeAt(0) === 64, V = v && Array.isArray(S[d]) ? S[d] : [S[d]];
        for (m of V) {
          const I = /[A-Z]/.test(y = d) ? y : y.replace(/-[^]/g, (M) => M[1].toUpperCase()), Z = typeof m == "object" && m && m.toString === ei && (!o.utils[I] || !u.length);
          if (I in o.utils && !Z) {
            const M = o.utils[I];
            if (M !== a) {
              a = M, h(M(m)), a = null;
              continue;
            }
          } else if (I in ln) {
            const M = ln[I];
            if (M !== s) {
              s = M, h(M(m)), s = null;
              continue;
            }
          }
          if (v && (k = d.slice(1) in o.media ? "@media " + o.media[d.slice(1)] : d, d = k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (M, T, L, D, P, j) => {
            const ce = pt.test(T), xe = 0.0625 * (ce ? -1 : 1), [Ce, qe] = ce ? [D, T] : [T, D];
            return "(" + (L[0] === "=" ? "" : L[0] === ">" === ce ? "max-" : "min-") + Ce + ":" + (L[0] !== "=" && L.length === 1 ? qe.replace(pt, (mt, Te, ze) => Number(Te) + xe * (L === ">" ? 1 : -1) + ze) : qe) + (P ? ") and (" + (P[0] === ">" ? "min-" : "max-") + Ce + ":" + (P.length === 1 ? j.replace(pt, (mt, Te, ze) => Number(Te) + xe * (P === ">" ? -1 : 1) + ze) : j) : "") + ")";
          })), Z) {
            const M = v ? g.concat(d) : [...g], T = v ? [...u] : Ur(u, d.split(Qr));
            i !== void 0 && r(cn(...i)), i = void 0, l(m, T, M);
          } else
            i === void 0 && (i = [[], u, g]), d = v || d.charCodeAt(0) !== 36 ? d : `--${se(o.prefix)}${d.slice(1).replace(/\$/g, "-")}`, m = Z ? m : typeof m == "number" ? m && I in ti ? String(m) + "px" : String(m) : Fn(Zr(I, m ?? ""), o.prefix, o.themeMap[I]), i[0].push(`${v ? `${d} ` : `${$t(d)}:`}${m}`);
        }
      }
      var k, y;
    };
    h(c), i !== void 0 && r(cn(...i)), i = void 0;
  };
  l(e, t, n);
}, cn = (e, t, n) => `${n.map((o) => `${o}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, ti = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, dn = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), me = (e) => ((t) => {
  let n, o = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    o = dn(n % 52) + o;
  return dn(n % 52) + o;
})(((t, n) => {
  let o = n.length;
  for (; o; )
    t = 33 * t ^ n.charCodeAt(--o);
  return t;
})(5381, JSON.stringify(e)) >>> 0), Pe = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], ni = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, oi = (e) => {
  let t;
  const n = () => {
    const { cssRules: r } = t.sheet;
    return [].map.call(r, (i, a) => {
      const { cssText: s } = i;
      let l = "";
      if (s.startsWith("--sxs"))
        return "";
      if (r[a - 1] && (l = r[a - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const c in t.rules)
          if (t.rules[c].group === i)
            return `--sxs{--sxs:${[...t.rules[c].cache].join(" ")}}${s}`;
        return i.cssRules.length ? `${l}${s}` : "";
      }
      return s;
    }).join("");
  }, o = () => {
    if (t) {
      const { rules: s, sheet: l } = t;
      if (!l.deleteRule) {
        for (; Object(Object(l.cssRules)[0]).type === 3; )
          l.cssRules.splice(0, 1);
        l.cssRules = [];
      }
      for (const c in s)
        delete s[c];
    }
    const r = Object(e).styleSheets || [];
    for (const s of r)
      if (ni(s)) {
        for (let l = 0, c = s.cssRules; c[l]; ++l) {
          const u = Object(c[l]);
          if (u.type !== 1)
            continue;
          const g = Object(c[l + 1]);
          if (g.type !== 4)
            continue;
          ++l;
          const { cssText: d } = u;
          if (!d.startsWith("--sxs"))
            continue;
          const m = d.slice(14, -3).trim().split(/\s+/), h = Pe[m[0]];
          h && (t || (t = { sheet: s, reset: o, rules: {}, toString: n }), t.rules[h] = { group: g, index: l, cache: new Set(m) });
        }
        if (t)
          break;
      }
    if (!t) {
      const s = (l, c) => ({ type: c, cssRules: [], insertRule(u, g) {
        this.cssRules.splice(g, 0, s(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return l === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : l;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : s("", "text/css"), rules: {}, reset: o, toString: n };
    }
    const { sheet: i, rules: a } = t;
    for (let s = Pe.length - 1; s >= 0; --s) {
      const l = Pe[s];
      if (!a[l]) {
        const c = Pe[s + 1], u = a[c] ? a[c].index : i.cssRules.length;
        i.insertRule("@media{}", u), i.insertRule(`--sxs{--sxs:${s}}`, u), a[l] = { group: i.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([s]) };
      }
      ri(a[l]);
    }
  };
  return o(), t;
}, ri = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (o) => {
    try {
      t.insertRule(o, n), ++n;
    } catch {
    }
  };
}, Le = Symbol(), ii = He(), si = (e, t) => ii(e, () => (...n) => {
  let o = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const r of n)
    if (r != null)
      if (r[Je]) {
        o.type == null && (o.type = r[Je].type);
        for (const i of r[Je].composers)
          o.composers.add(i);
      } else
        r.constructor !== Object || r.$$typeof ? o.type == null && (o.type = r) : o.composers.add(ai(r, e));
  return o.type == null && (o.type = "span"), o.composers.size || o.composers.add(["PJLV", {}, [], [], {}, []]), li(e, o, t);
}), ai = ({ variants: e, compoundVariants: t, defaultVariants: n, ...o }, r) => {
  const i = `${se(r.prefix)}c-${me(o)}`, a = [], s = [], l = /* @__PURE__ */ Object.create(null), c = [];
  for (const d in n)
    l[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      u = l, g = d, Kr.call(u, g) || (l[d] = "undefined");
      const m = e[d];
      for (const h in m) {
        const S = { [d]: String(h) };
        String(h) === "undefined" && c.push(d);
        const k = m[h], y = [S, k, !an(k)];
        a.push(y);
      }
    }
  var u, g;
  if (typeof t == "object" && t)
    for (const d of t) {
      let { css: m, ...h } = d;
      m = typeof m == "object" && m || {};
      for (const k in h)
        h[k] = String(h[k]);
      const S = [h, m, !an(m)];
      s.push(S);
    }
  return [i, o, a, s, l, c];
}, li = (e, t, n) => {
  const [o, r, i, a] = ci(t.composers), s = typeof t.type == "function" || t.type.$$typeof ? ((g) => {
    function d() {
      for (let m = 0; m < d[Le].length; m++) {
        const [h, S] = d[Le][m];
        g.rules[h].apply(S);
      }
      return d[Le] = [], null;
    }
    return d[Le] = [], d.rules = {}, Pe.forEach((m) => d.rules[m] = { apply: (h) => d[Le].push([m, h]) }), d;
  })(n) : null, l = (s || n).rules, c = `.${o}${r.length > 1 ? `:where(.${r.slice(1).join(".")})` : ""}`, u = (g) => {
    g = typeof g == "object" && g || di;
    const { css: d, ...m } = g, h = {};
    for (const y in i)
      if (delete m[y], y in g) {
        let v = g[y];
        typeof v == "object" && v ? h[y] = { "@initial": i[y], ...v } : (v = String(v), h[y] = v !== "undefined" || a.has(y) ? v : i[y]);
      } else
        h[y] = i[y];
    const S = /* @__PURE__ */ new Set([...r]);
    for (const [y, v, V, I] of t.composers) {
      n.rules.styled.cache.has(y) || (n.rules.styled.cache.add(y), _e(v, [`.${y}`], [], e, (T) => {
        l.styled.apply(T);
      }));
      const Z = un(V, h, e.media), M = un(I, h, e.media, !0);
      for (const T of Z)
        if (T !== void 0)
          for (const [L, D, P] of T) {
            const j = `${y}-${me(D)}-${L}`;
            S.add(j);
            const ce = (P ? n.rules.resonevar : n.rules.onevar).cache, xe = P ? l.resonevar : l.onevar;
            ce.has(j) || (ce.add(j), _e(D, [`.${j}`], [], e, (Ce) => {
              xe.apply(Ce);
            }));
          }
      for (const T of M)
        if (T !== void 0)
          for (const [L, D] of T) {
            const P = `${y}-${me(D)}-${L}`;
            S.add(P), n.rules.allvar.cache.has(P) || (n.rules.allvar.cache.add(P), _e(D, [`.${P}`], [], e, (j) => {
              l.allvar.apply(j);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const y = `${o}-i${me(d)}-css`;
      S.add(y), n.rules.inline.cache.has(y) || (n.rules.inline.cache.add(y), _e(d, [`.${y}`], [], e, (v) => {
        l.inline.apply(v);
      }));
    }
    for (const y of String(g.className || "").trim().split(/\s+/))
      y && S.add(y);
    const k = m.className = [...S].join(" ");
    return { type: t.type, className: k, selector: c, props: m, toString: () => k, deferredInjector: s };
  };
  return At(u, { className: o, selector: c, [Je]: t, toString: () => (n.rules.styled.cache.has(o) || u(), o) });
}, ci = (e) => {
  let t = "";
  const n = [], o = {}, r = [];
  for (const [i, , , , a, s] of e) {
    t === "" && (t = i), n.push(i), r.push(...s);
    for (const l in a) {
      const c = a[l];
      (o[l] === void 0 || c !== "undefined" || s.includes(c)) && (o[l] = c);
    }
  }
  return [t, n, o, new Set(r)];
}, un = (e, t, n, o) => {
  const r = [];
  e:
    for (let [i, a, s] of e) {
      if (s)
        continue;
      let l, c = 0, u = !1;
      for (l in i) {
        const g = i[l];
        let d = t[l];
        if (d !== g) {
          if (typeof d != "object" || !d)
            continue e;
          {
            let m, h, S = 0;
            for (const k in d) {
              if (g === String(d[k])) {
                if (k !== "@initial") {
                  const y = k.slice(1);
                  (h = h || []).push(y in n ? n[y] : k.replace(/^@media ?/, "")), u = !0;
                }
                c += S, m = !0;
              }
              ++S;
            }
            if (h && h.length && (a = { ["@media " + h.join(", ")]: a }), !m)
              continue e;
          }
        }
      }
      (r[c] = r[c] || []).push([o ? "cv" : `${l}-${i[l]}`, a, u]);
    }
  return r;
}, di = {}, ui = He(), gi = (e, t) => ui(e, () => (...n) => {
  const o = () => {
    for (let r of n) {
      r = typeof r == "object" && r || {};
      let i = me(r);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in r) {
          let a = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let s of [].concat(r["@import"]))
            s = s.includes('"') || s.includes("'") ? s : `"${s}"`, t.sheet.insertRule(`@import ${s};`, a++);
          delete r["@import"];
        }
        _e(r, [], [], e, (a) => {
          t.rules.global.apply(a);
        });
      }
    }
    return "";
  };
  return At(o, { toString: o });
}), fi = He(), mi = (e, t) => fi(e, () => (n) => {
  const o = `${se(e.prefix)}k-${me(n)}`, r = () => {
    if (!t.rules.global.cache.has(o)) {
      t.rules.global.cache.add(o);
      const i = [];
      _e(n, [], [], e, (s) => i.push(s));
      const a = `@keyframes ${o}{${i.join("")}}`;
      t.rules.global.apply(a);
    }
    return o;
  };
  return At(r, { get name() {
    return r();
  }, toString: r });
}), hi = class {
  constructor(e, t, n, o) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = o == null ? "" : String(o);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + se(this.prefix) + se(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, pi = He(), bi = (e, t) => pi(e, () => (n, o) => {
  o = typeof n == "object" && n || Object(o);
  const r = `.${n = (n = typeof n == "string" ? n : "") || `${se(e.prefix)}t-${me(o)}`}`, i = {}, a = [];
  for (const l in o) {
    i[l] = {};
    for (const c in o[l]) {
      const u = `--${se(e.prefix)}${l}-${c}`, g = Fn(String(o[l][c]), e.prefix, l);
      i[l][c] = new hi(c, g, l, e.prefix), a.push(`${u}:${g}`);
    }
  }
  const s = () => {
    if (a.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const l = `${o === e.theme ? ":root," : ""}.${n}{${a.join(";")}}`;
      t.rules.themed.apply(l);
    }
    return n;
  };
  return { ...i, get className() {
    return s();
  }, selector: r, toString: s };
}), yi = He(), xi = (e) => {
  let t = !1;
  const n = yi(e, (o) => {
    t = !0;
    const r = "prefix" in (o = typeof o == "object" && o || {}) ? String(o.prefix) : "", i = typeof o.media == "object" && o.media || {}, a = typeof o.root == "object" ? o.root || null : globalThis.document || null, s = typeof o.theme == "object" && o.theme || {}, l = { prefix: r, media: i, theme: s, themeMap: typeof o.themeMap == "object" && o.themeMap || { ...qr }, utils: typeof o.utils == "object" && o.utils || {} }, c = oi(a), u = { css: si(l, c), globalCss: gi(l, c), keyframes: mi(l, c), createTheme: bi(l, c), reset() {
      c.reset(), u.theme.toString();
    }, theme: {}, sheet: c, config: l, prefix: r, getCssText: c.toString, toString: c.toString };
    return String(u.theme = u.createTheme(s)), u;
  });
  return t || n.reset(), n;
};
const Ci = xi({ prefix: "hope" }), { css: Hn, globalCss: Mt, getCssText: Sl, keyframes: jn } = Ci, fe = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Si(e) {
  const t = Object.keys(e);
  return t.length > 0 && t.every((n) => ["light", "dark"].includes(n));
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */
function Q(e, t) {
  return at(e) ? e.map((n) => n === null ? null : t(n)) : ge(e) ? Vr(e).reduce((n, o) => (n[o] = t(e[o]), n), {}) : e != null ? t(e) : null;
}
function vi(e, t) {
  const n = t.map((o) => e[o] ?? null);
  for (; Wr(n) === null; )
    n.pop();
  return n;
}
function wi(e, t) {
  const n = {};
  return e.forEach((o, r) => {
    const i = t[r];
    o != null && (n[i] = o);
  }), n;
}
function ki(e, t) {
  const n = Object.keys(e);
  return n.length > 0 && n.every((o) => t.includes(o));
}
const ee = [
  "styleConfigOverride",
  "unstyled"
];
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/pseudos.ts
 */
const N = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
};
function de(e) {
  return Nn((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function re(e) {
  return Nn((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function Nn(e, ...t) {
  return t.map(e).join(", ");
}
const _i = "_light", Qe = "_dark", Ii = `.${fe.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, $i = `.${fe.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, Ri = /* @__PURE__ */ new Map([
  ["_hover", "&:hover, &[data-hover]"],
  ["_active", "&:active, &[data-active]"],
  ["_focus", "&:focus, &[data-focus]"],
  ["_highlighted", "&[data-highlighted]"],
  ["_focusWithin", "&:focus-within"],
  ["_focusVisible", "&:focus-visible, &[data-focus-visible]"],
  ["_disabled", "&[disabled], &[aria-disabled=true], &[data-disabled]"],
  ["_readOnly", "&[aria-readonly=true], &[readonly], &[data-readonly]"],
  ["_before", "&::before"],
  ["_after", "&::after"],
  ["_empty", "&:empty"],
  ["_expanded", "&[aria-expanded=true], &[data-expanded]"],
  ["_checked", "&[aria-checked=true], &[data-checked]"],
  ["_grabbed", "&[aria-grabbed=true], &[data-grabbed]"],
  ["_pressed", "&[aria-pressed=true], &[data-pressed]"],
  ["_invalid", "&[aria-invalid=true], &[data-invalid]"],
  ["_valid", "&[data-valid], &[data-state=valid]"],
  ["_loading", "&[data-loading], &[aria-busy=true]"],
  ["_selected", "&[aria-selected=true], &[data-selected]"],
  ["_hidden", "&[hidden], &[data-hidden]"],
  ["_autofill", "&:-webkit-autofill"],
  ["_even", "&:nth-of-type(even)"],
  ["_odd", "&:nth-of-type(odd)"],
  ["_first", "&:first-child"],
  ["_last", "&:last-child"],
  ["_notFirst", "&:not(:first-child)"],
  ["_notLast", "&:not(:last-child)"],
  ["_visited", "&:visited"],
  ["_activeLink", "&[aria-current=page]"],
  ["_activeStep", "&[aria-current=step]"],
  ["_indeterminate", "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]"],
  ["_groupHover", de(N.hover)],
  ["_peerHover", re(N.hover)],
  ["_groupFocus", de(N.focus)],
  ["_peerFocus", re(N.focus)],
  ["_groupFocusVisible", de(N.focusVisible)],
  ["_peerFocusVisible", re(N.focusVisible)],
  ["_groupActive", de(N.active)],
  ["_peerActive", re(N.active)],
  ["_groupDisabled", de(N.disabled)],
  ["_peerDisabled", re(N.disabled)],
  ["_groupInvalid", de(N.invalid)],
  ["_peerInvalid", re(N.invalid)],
  ["_groupChecked", de(N.checked)],
  ["_peerChecked", re(N.checked)],
  ["_groupFocusWithin", de(N.focusWithin)],
  ["_peerFocusWithin", re(N.focusWithin)],
  ["_peerPlaceholderShown", re(N.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [_i, Ii],
  [Qe, $i]
]), Ei = /* @__PURE__ */ new Map([
  ["borderX", ["borderRight", "borderLeft"]],
  ["borderY", ["borderTop", "borderBottom"]],
  ["bg", ["background"]],
  ["bgColor", ["backgroundColor"]],
  ["d", ["display"]],
  ["marginStart", ["marginInlineStart"]],
  ["marginEnd", ["marginInlineEnd"]],
  ["m", ["margin"]],
  ["mt", ["marginTop"]],
  ["mr", ["marginRight"]],
  ["me", ["marginInlineEnd"]],
  ["mb", ["marginBottom"]],
  ["ml", ["marginLeft"]],
  ["ms", ["marginInlineStart"]],
  ["mx", ["marginInlineStart", "marginInlineEnd"]],
  ["my", ["marginTop", "marginBottom"]],
  ["paddingStart", ["paddingInlineStart"]],
  ["paddingEnd", ["paddingInlineEnd"]],
  ["p", ["padding"]],
  ["pt", ["paddingTop"]],
  ["pr", ["paddingRight"]],
  ["pe", ["paddingInlineEnd"]],
  ["pb", ["paddingBottom"]],
  ["pl", ["paddingLeft"]],
  ["ps", ["paddingInlineStart"]],
  ["px", ["paddingInlineStart", "paddingInlineEnd"]],
  ["py", ["paddingTop", "paddingBottom"]],
  ["pos", ["position"]],
  ["borderTopRadius", ["borderTopLeftRadius", "borderTopRightRadius"]],
  ["borderRightRadius", ["borderTopRightRadius", "borderBottomRightRadius"]],
  ["borderBottomRadius", ["borderBottomRightRadius", "borderBottomLeftRadius"]],
  ["borderLeftRadius", ["borderTopLeftRadius", "borderBottomLeftRadius"]],
  ["rounded", ["borderRadius"]],
  ["roundedTop", ["borderTopLeftRadius", "borderTopRightRadius"]],
  ["roundedRight", ["borderTopRightRadius", "borderBottomRightRadius"]],
  ["roundedBottom", ["borderBottomRightRadius", "borderBottomLeftRadius"]],
  ["roundedLeft", ["borderTopLeftRadius", "borderBottomLeftRadius"]],
  ["shadow", ["boxShadow"]],
  ["w", ["width"]],
  ["minW", ["minWidth"]],
  ["maxW", ["maxWidth"]],
  ["h", ["height"]],
  ["minH", ["minHeight"]],
  ["maxH", ["maxHeight"]],
  ["boxSize", ["width", "height"]]
]);
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/9de39921b983ad0eb2df7195e3b683c2e2e9e290/packages/components/styled-system/src/utils/expand-responsive.ts
 */
const Oi = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: o, medias: r } = t.__breakpoints, i = {}, a = {};
  for (const s in e) {
    let l = ie(e[s], t);
    if (l == null || bt(s, l, i))
      continue;
    if (l = ge(l) && n(l) ? o(l) : l, !Array.isArray(l)) {
      i[s] = l;
      continue;
    }
    const c = l.slice(0, r.length).length;
    for (let u = 0; u < c; u += 1) {
      const g = r?.[u], d = l[u];
      if (d != null) {
        if (!g) {
          bt(s, d, i) || (i[s] = d);
          continue;
        }
        a[g] = a[g] || {}, bt(s, d, a[g]) || (a[g][s] = d);
      }
    }
  }
  return {
    ...i,
    ...a
  };
};
function bt(e, t, n) {
  if (!ge(t) || !Si(t))
    return !1;
  const { light: o, dark: r } = t;
  return o != null && (n[e] = o), n[Qe] = n[Qe] || {}, r != null && (n[Qe][e] = r), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function Ti(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function nt(e) {
  if (e == null)
    return e;
  const { unitless: t } = Ti(e);
  return t || Pn(e) ? `${e}px` : e;
}
const Vn = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Lt = (e) => Object.fromEntries(Object.entries(e).sort(Vn));
function gn(e) {
  const t = Lt(e);
  return Object.assign(Object.values(t), t);
}
function zi(e) {
  const t = Object.keys(Lt(e));
  return new Set(t);
}
function fn(e) {
  if (!e)
    return e;
  e = nt(e) ?? e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return Pn(e) ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + t}`);
}
function Xe(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${nt(e)})`), t && n.push("and", `(max-width: ${nt(t)})`), n.join(" ");
}
function Bi(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = gn(e), n = Object.entries(e).sort(Vn).map(([i, a], s, l) => {
    let [, c] = l[s + 1] ?? [];
    return c = parseFloat(c) > 0 ? fn(c) : void 0, {
      _minW: fn(a),
      breakpoint: i,
      minW: a,
      maxW: c,
      maxWQuery: Xe(null, c),
      minWQuery: Xe(a),
      minMaxQuery: Xe(a, c)
    };
  }), o = zi(e), r = Array.from(o.values());
  return {
    keys: o,
    normalized: t,
    asObject: Lt(e),
    asArray: gn(e),
    details: n,
    medias: [null, ...t.map((i) => Xe(i)).slice(1)],
    isResponsive(i) {
      return ki(i, r);
    },
    toArrayValue(i) {
      if (!ge(i))
        throw new Error("toArrayValue: value must be an object");
      return vi(i, r);
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return wi(i, r);
    }
  };
}
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/styled-system/src/utils/create-transform.ts
 */
const Ai = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], Gn = /!(important)?$/;
function Mi(e) {
  return Gn.test(e);
}
function Li(e) {
  return e.replace(Gn, "").trim();
}
function qn(e, t, n) {
  if (e == null)
    return;
  const o = String(e), r = Li(o);
  let i = n[t][r] ?? jr(n[t], r);
  return i == null && (i = Ai.includes(t) ? r : nt(r)), Mi(o) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function ct(e, t) {
  const n = {}, o = Oi(e)(t);
  for (let r in o) {
    let i = ie(o[r], t);
    if (i == null)
      continue;
    if (r.startsWith("_")) {
      const s = Ri.get(r);
      if (s == null)
        continue;
      r = s;
    }
    if (ge(i)) {
      n[r] = Object.assign(
        {},
        n[r],
        ct(i, t)
      );
      continue;
    }
    const a = Ei.get(r) ?? [r];
    for (const s of a) {
      const l = t.themeMap[s];
      l != null && (i = qn(i, l, t.vars)), n[s] = i;
    }
  }
  return n;
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */
function Di(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function Pi(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const a = t.split("");
    t = [
      a[0],
      a[0],
      a[1],
      a[1],
      a[2],
      a[2]
    ].join("");
  }
  const n = parseInt(t, 16), o = n >> 16 & 255, r = n >> 8 & 255, i = n & 255;
  return {
    r: o,
    g: r,
    b: i,
    a: 1
  };
}
function Wi(e) {
  const [t, n, o, r] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: o, a: r || 1 };
}
function Fi(e) {
  return Di(e) ? Pi(e) : e.startsWith("rgb") ? Wi(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function yt(e) {
  const { r: t, g: n, b: o } = Fi(e);
  return `${t} ${n} ${o}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function we(e) {
  return {
    ...e,
    mainChannel: yt(e[500]),
    lightChannel: yt(e[100]),
    darkChannel: yt(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const dt = "hope";
function Hi(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function ji(e) {
  const t = Hi(e.toString());
  return Vi(Ni(t));
}
function Ni(e) {
  return e.includes("\\.") || Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.");
}
function Vi(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Gi(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function qi(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Yi(e, t = "") {
  return ji(`--${Gi(e, t)}`);
}
function Ki(e, t, n = dt) {
  const o = Yi(e, n);
  return {
    variable: o,
    reference: qi(o, t)
  };
}
function Xi(e = dt) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const De = "__";
function xt(e, t, n) {
  return Ki(String(t).replace(e, "-"), void 0, n);
}
function Ui(e, t) {
  const n = {}, o = {}, r = {}, { colors: i, ...a } = e, s = { colors: i.light }, l = { colors: i.dark }, c = Ze(s, De), u = Ze(l, De), g = Ze(a, De), d = new RegExp(`(${De}|\\.)`, "g");
  for (const [h, S] of Object.entries(c)) {
    const { variable: k, reference: y } = xt(d, h, t);
    n[k] = S, r[h] = y;
  }
  for (const [h, S] of Object.entries(u)) {
    const { variable: k } = xt(d, h, t);
    o[k] = S;
  }
  for (const [h, S] of Object.entries(g)) {
    const { variable: k, reference: y } = xt(d, h, t);
    n[k] = S, r[h] = y;
  }
  const m = Hr(r, De);
  return { cssVarsValues: {
    root: n,
    dark: o
  }, vars: m };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const Zi = [
  "colors",
  "fonts",
  "fontSizes",
  "fontWeights",
  "lineHeights",
  "letterSpacings",
  "space",
  "sizes",
  "radii",
  "shadows",
  "zIndices",
  "breakpoints"
];
function Ji(e) {
  return Nr(e, Zi);
}
function Qi(e) {
  const { vars: t, __cssVarsValues: n, __breakpoints: o, ...r } = e;
  return r;
}
function Yn(e) {
  const t = Qi(e), n = Ji(t), { cssVarsValues: o, vars: r } = Ui(n, t.cssVarPrefix);
  return Object.assign(t, {
    vars: r,
    __cssVarsValues: o,
    __breakpoints: Bi(t.breakpoints)
  }), t;
}
/*!
 * Colors from TailwindCSS
 * MIT Licensed, Copyright (c) Tailwind Labs, Inc.
 *
 * Credits to the Tailwind Labs team:
 * https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
 *
 * Colors from Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/colors.ts
 */
function Kn(e) {
  const t = Xi(e);
  return {
    light: {
      whiteAlpha: {
        50: "rgba(255, 255, 255, 0.04)",
        100: "rgba(255, 255, 255, 0.06)",
        200: "rgba(255, 255, 255, 0.08)",
        300: "rgba(255, 255, 255, 0.16)",
        400: "rgba(255, 255, 255, 0.24)",
        500: "rgba(255, 255, 255, 0.36)",
        600: "rgba(255, 255, 255, 0.48)",
        700: "rgba(255, 255, 255, 0.64)",
        800: "rgba(255, 255, 255, 0.80)",
        900: "rgba(255, 255, 255, 0.92)"
      },
      blackAlpha: {
        50: "rgba(0, 0, 0, 0.04)",
        100: "rgba(0, 0, 0, 0.06)",
        200: "rgba(0, 0, 0, 0.08)",
        300: "rgba(0, 0, 0, 0.16)",
        400: "rgba(0, 0, 0, 0.24)",
        500: "rgba(0, 0, 0, 0.36)",
        600: "rgba(0, 0, 0, 0.48)",
        700: "rgba(0, 0, 0, 0.64)",
        800: "rgba(0, 0, 0, 0.80)",
        900: "rgba(0, 0, 0, 0.92)"
      },
      primary: we({
        50: "#e6f6ff",
        100: "#bae3ff",
        200: "#7cc4fa",
        300: "#47a3f3",
        400: "#2186eb",
        500: "#0967d2",
        600: "#0552b5",
        700: "#03449e",
        800: "#01337d",
        900: "#002159"
      }),
      neutral: we({
        50: "#f9fafa",
        100: "#f4f5f6",
        200: "#e3e5e8",
        300: "#cfd3d8",
        400: "#9aa1ac",
        500: "#67707e",
        600: "#49505a",
        700: "#393e46",
        800: "#22252a",
        900: "#151619"
      }),
      success: we({
        50: "#e3f9e5",
        100: "#c1eac5",
        200: "#a3d9a5",
        300: "#7bc47f",
        400: "#57ae5b",
        500: "#3f9142",
        600: "#2f8132",
        700: "#207227",
        800: "#0e5814",
        900: "#05400a"
      }),
      info: we({
        50: "#eae2f8",
        100: "#cfbcf2",
        200: "#a081d9",
        300: "#8662c7",
        400: "#724bb7",
        500: "#653cad",
        600: "#51279b",
        700: "#421987",
        800: "#34126f",
        900: "#240754"
      }),
      warning: we({
        50: "#fffbea",
        100: "#fff3c4",
        200: "#fce588",
        300: "#fadb5f",
        400: "#f7c948",
        500: "#f0b429",
        600: "#de911d",
        700: "#cb6e17",
        800: "#b44d12",
        900: "#8d2b0b"
      }),
      danger: we({
        50: "#ffe3e3",
        100: "#ffbdbd",
        200: "#ff9b9b",
        300: "#f86a6a",
        400: "#ef4e4e",
        500: "#e12d39",
        600: "#cf1124",
        700: "#ab091e",
        800: "#8a041a",
        900: "#610316"
      }),
      common: {
        white: "#ffffff",
        black: "#121212",
        foreground: t("colors-neutral-800"),
        background: t("colors-common-white"),
        focusRing: t("colors-primary-500")
      }
    },
    dark: {
      common: {
        foreground: t("colors-neutral-200"),
        background: t("colors-neutral-900"),
        focusRing: t("colors-primary-600")
      }
    }
  };
}
/*!
 * Original code by WorkOS
 * MIT Licensed, Copyright (c) 2022 WorkOS.
 *
 * Credits to the WorkOS team:
 * https://github.com/stitchesjs/stitches/blob/96e8a523caf1724cf25bb0d07ee823365bbedd9c/packages/core/src/default/defaultThemeMap.js
 */
const es = {
  gap: "space",
  gridGap: "space",
  columnGap: "space",
  gridColumnGap: "space",
  rowGap: "space",
  gridRowGap: "space",
  inset: "space",
  insetBlock: "space",
  insetBlockEnd: "space",
  insetBlockStart: "space",
  insetInline: "space",
  insetInlineEnd: "space",
  insetInlineStart: "space",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginBlock: "space",
  marginBlockEnd: "space",
  marginBlockStart: "space",
  marginInline: "space",
  marginInlineEnd: "space",
  marginInlineStart: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingBlock: "space",
  paddingBlockEnd: "space",
  paddingBlockStart: "space",
  paddingInline: "space",
  paddingInlineEnd: "space",
  paddingInlineStart: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  background: "colors",
  backgroundColor: "colors",
  backgroundImage: "colors",
  borderImage: "colors",
  border: "colors",
  borderBlock: "colors",
  borderBlockEnd: "colors",
  borderBlockStart: "colors",
  borderBottom: "colors",
  borderBottomColor: "colors",
  borderColor: "colors",
  borderInline: "colors",
  borderInlineEnd: "colors",
  borderInlineStart: "colors",
  borderLeft: "colors",
  borderLeftColor: "colors",
  borderRight: "colors",
  borderRightColor: "colors",
  borderTop: "colors",
  borderTopColor: "colors",
  caretColor: "colors",
  color: "colors",
  columnRuleColor: "colors",
  fill: "colors",
  outline: "colors",
  outlineColor: "colors",
  stroke: "colors",
  textDecorationColor: "colors",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  borderWidth: "sizes",
  borderTopWidth: "sizes",
  borderRightWidth: "sizes",
  borderBottomWidth: "sizes",
  borderLeftWidth: "sizes",
  blockSize: "sizes",
  minBlockSize: "sizes",
  maxBlockSize: "sizes",
  inlineSize: "sizes",
  minInlineSize: "sizes",
  maxInlineSize: "sizes",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  gridTemplateColumns: "sizes",
  gridTemplateRows: "sizes",
  strokeWidth: "sizes",
  borderRadius: "radii",
  borderTopLeftRadius: "radii",
  borderTopRightRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices"
}, mn = {
  "0.5": "0.125rem",
  1: "0.25rem",
  "1.5": "0.375rem",
  2: "0.5rem",
  "2.5": "0.625rem",
  3: "0.75rem",
  "3.5": "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, ts = {
  colors: Kn(dt),
  fonts: {
    sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  space: mn,
  sizes: {
    ...mn,
    max: "max-content",
    min: "min-content",
    full: "100%",
    screenW: "100vw",
    screenH: "100vh",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem"
  },
  radii: {
    none: "0",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  shadows: {
    none: "0 0 #0000",
    xs: "0px 1px 2px rgb(16 24 40 / 5%)",
    sm: "0px 1px 3px rgb(16 24 40 / 10%), 0px 1px 2px rgb(16 24 40 / 6%)",
    md: "0px 4px 8px -2px rgb(16 24 40 / 10%), 0px 2px 4px -2px rgb(16 24 40 / 6%)",
    lg: "0px 12px 16px -4px rgb(16 24 40 / 8%), 0px 4px 6px -2px rgb(16 24 40 / 3%)",
    xl: "0px 20px 24px -4px rgb(16 24 40 / 8%), 0px 8px 8px -4px rgb(16 24 40 / 3%)",
    "2xl": "0px 24px 48px -12px rgb(16 24 40 / 18%)",
    "3xl": "0px 32px 64px -12px rgb(16 24 40 / 14%)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)"
  },
  zIndices: {
    hide: -1,
    base: 0,
    docked: 10,
    sticky: 1e3,
    banner: 1100,
    overlay: 1200,
    modal: 1300,
    dropdown: 1400,
    popover: 1500,
    tooltip: 1600,
    skipLink: 1700,
    toast: 1800
  },
  breakpoints: {
    base: "0px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  }
}, ns = {
  ...ts,
  cssVarPrefix: dt,
  themeMap: es,
  components: {}
}, Dt = Yn(ns);
function Rt(e, t, n) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (n = 0; n < t.length; n++)
        e[n] = Rt(e[n], t[n]);
    else
      for (n in t) {
        if (n === "__proto__" || n === "constructor" || n === "prototype")
          break;
        e[n] = Rt(e[n], t[n]);
      }
    return e;
  }
  return t;
}
function Et(e, t, n) {
  t.split && (t = t.split("."));
  for (var o = 0, r = t.length, i = e, a, s; o < r && (s = t[o++], !(s === "__proto__" || s === "constructor" || s === "prototype")); )
    i = i[s] = o === r ? Rt(i[s], n) : typeof (a = i[s]) == typeof t ? a : t[o] * 0 !== 0 || !!~("" + t[o]).indexOf(".") ? {} : [];
}
function vl(e) {
  let t = Dt;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: Kn(e.cssVarPrefix)
  });
  const n = {
    value: t
  };
  return Et(n, "value", e), Yn(n.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function Pt(e) {
  return {
    WebkitTapHighlightColor: "transparent",
    "&:focus": {
      outlineOffset: "2px",
      outline: `2px solid ${e.colors.common.focusRing}`
    },
    "&:focus:not(:focus-visible)": {
      outline: "none"
    }
  };
}
function os(e) {
  Mt({
    ":root": e.__cssVarsValues.root,
    [`.${fe.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function rs(e) {
  Mt({
    "*, *::before, *::after": {
      boxSizing: "border-box"
    },
    "*": {
      margin: 0
    },
    html: {
      fontFamily: e.fonts.sans,
      lineHeight: e.lineHeights.base,
      fontSize: "16px"
    },
    body: {
      backgroundColor: e.colors.common.background,
      color: e.colors.common.foreground,
      fontFamily: "inherit",
      lineHeight: "inherit",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    "img, picture, video, canvas, svg": {
      display: "block",
      maxWidth: "100%"
    },
    "button, input, textarea, select": {
      font: "inherit"
    },
    "h1, h2, h3, h4, h5, h6": {
      font: "inherit"
    },
    "p, h1, h2, h3, h4, h5, h6": {
      overflowWrap: "break-word"
    }
  })();
}
const Xn = ae(Dt);
function be() {
  return le(Xn);
}
function is(e) {
  const t = be();
  return _(() => {
    if (e != null)
      return t.components[e] ?? void 0;
  });
}
function te(e, t, n) {
  const o = be();
  return b(t, () => o.components[e]?.defaultProps ?? {}, n);
}
function ss(e) {
  const t = e.theme ?? Dt;
  return os(t), e.withCssReset && rs(t.vars), f(Xn.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function wl(e) {
  const t = lt((n) => {
    const {
      "@import": o,
      "@font-face": r,
      ...i
    } = ie(e, n), a = Object.entries(i).reduce((s, [l, c]) => (s[l] = ct(c, n), s), {});
    Mt({
      "@import": o ?? [],
      "@font-face": r ?? {},
      ...a
    })();
  });
  return function() {
    const n = be();
    t(n);
  };
}
function kl(e) {
  return e;
}
function Un(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Un(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function Wt() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Un(e)) && (o && (o += " "), o += t);
  return o;
}
function Ie(e, t) {
  return Hn(ct(e, t))().className;
}
function Ot(e, t) {
  for (const n of Object.keys(e))
    if (e[n] !== t[n])
      return !1;
  return !0;
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function hn(e, t) {
  return Object.entries(e).reduce((n, [o, r]) => {
    const {
      baseStyle: i = {},
      variants: a = {},
      compoundVariants: s = []
    } = r;
    return n[o] = {
      baseClassName: Ie(i, t),
      variantClassNames: Object.entries(a).reduce((l, [c, u]) => (l[c] = Object.entries(u).reduce(
        (g, [d, m]) => (g[d] = Ie(m, t), g),
        {}
      ), l), {}),
      compoundVariants: s.map((l) => [
        l.variants,
        Ie(l.style, t)
      ])
    }, n;
  }, {});
}
function U(e, t) {
  let n, o, r, i, a = [], s;
  const l = lt(
    (c, u, g) => {
      n = ie(e, u), o = hn(
        n,
        u
      ), r = ie(g, u), i = r && hn(r, u), a = Object.keys(n), s = Object.fromEntries(
        a.map((d) => [d, `hope-${c}-${d}`])
      );
    }
  );
  return function(c, u) {
    const g = be(), d = is(c);
    l(c, g, d()?.styleConfigOverride);
    const m = _(() => ie(u.styleConfigOverride, g)), h = _(() => {
      const [y, v] = x(u, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...tt(v)
      };
    }), S = _(() => a.reduce((y, v) => {
      let V = "", I = {}, Z = [];
      u.unstyled || (V = o[v].baseClassName ?? "", I = o[v].variantClassNames ?? {}, Z = o[v].compoundVariants ?? []);
      const M = i?.[v]?.baseClassName ?? "", T = i?.[v]?.variantClassNames ?? {}, L = i?.[v]?.compoundVariants ?? [], D = [s[v], V, M];
      for (const P in h()) {
        const j = h()[P];
        j != null && (D.push(I[P]?.[String(j)]), D.push(T[P]?.[String(j)]));
      }
      for (const [P, j] of [...Z, ...L])
        Ot(P, h()) && D.push(j);
      return y[v] = Wt(...D), y;
    }, {})), k = _(() => {
      const y = m();
      return y == null ? {} : a.reduce((v, V) => {
        const I = y[V]?.baseStyle ?? {}, Z = y[V]?.variants ?? {}, M = y[V]?.compoundVariants ?? [];
        v[V] = I;
        for (const T in h()) {
          const L = h()[T];
          if (L == null)
            continue;
          const D = Z[T]?.[String(L)] ?? {};
          Wn(D) || Et(v, V, D);
        }
        for (const T of M)
          Ot(T.variants, h()) && Et(v, V, T.style);
        return v;
      }, {});
    });
    return { baseClasses: S, styleOverrides: k };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function Zn(e, t) {
  const { baseStyle: n = {}, variants: o = {}, compoundVariants: r = [] } = e;
  return {
    baseClassName: Ie(n, t),
    variantClassNames: Object.entries(o).reduce((i, [a, s]) => (i[a] = Object.entries(s).reduce(
      (l, [c, u]) => (l[c] = Ie(u, t), l),
      {}
    ), i), {}),
    compoundVariants: r.map((i) => [
      i.variants,
      Ie(i.style, t)
    ])
  };
}
function Jn(e, t) {
  const { variantClassNames: n = {}, compoundVariants: o = [] } = e, r = [];
  for (const i in t) {
    const a = t[i];
    a != null && r.push(n[i]?.[String(a)]);
  }
  for (const [i, a] of o)
    Ot(i, t) && r.push(a);
  return r;
}
function _l(e) {
  let t, n;
  const o = lt((r) => {
    t = ie(e, r), n = Zn(t, r);
  });
  return function(r = {}) {
    const i = be();
    return o(i), _(() => {
      if (t == null || n == null)
        return "";
      const a = {
        ...t.defaultVariants,
        ...tt(r)
      }, s = Jn(n, a);
      return Wt(n.baseClassName, s);
    });
  };
}
const as = {
  border: !0,
  borderWidth: !0,
  borderStyle: !0,
  borderColor: !0,
  borderTop: !0,
  borderTopWidth: !0,
  borderTopStyle: !0,
  borderTopColor: !0,
  borderRight: !0,
  borderRightWidth: !0,
  borderRightStyle: !0,
  borderRightColor: !0,
  borderBottom: !0,
  borderBottomWidth: !0,
  borderBottomStyle: !0,
  borderBottomColor: !0,
  borderLeft: !0,
  borderLeftWidth: !0,
  borderLeftStyle: !0,
  borderLeftColor: !0,
  borderX: !0,
  borderY: !0
}, ls = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, cs = {
  alignItems: !0,
  alignContent: !0,
  alignSelf: !0,
  justifyItems: !0,
  justifyContent: !0,
  justifySelf: !0,
  flexDirection: !0,
  flexWrap: !0,
  flex: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: !0,
  order: !0
}, ds = {
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridColumn: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridAutoRows: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: !0,
  rowGap: !0,
  columnGap: !0
}, us = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, gs = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, fs = {
  margin: !0,
  marginTop: !0,
  marginRight: !0,
  marginEnd: !0,
  marginBottom: !0,
  marginLeft: !0,
  marginStart: !0,
  m: !0,
  mt: !0,
  mr: !0,
  me: !0,
  mb: !0,
  ml: !0,
  ms: !0,
  mx: !0,
  my: !0
}, ms = {
  padding: !0,
  paddingTop: !0,
  paddingRight: !0,
  paddingEnd: !0,
  paddingBottom: !0,
  paddingLeft: !0,
  paddingStart: !0,
  p: !0,
  pt: !0,
  pr: !0,
  pe: !0,
  pb: !0,
  pl: !0,
  ps: !0,
  px: !0,
  py: !0
}, hs = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, ps = {
  borderRadius: !0,
  borderTopRightRadius: !0,
  borderTopLeftRadius: !0,
  borderBottomRightRadius: !0,
  borderBottomLeftRadius: !0,
  borderTopRadius: !0,
  borderRightRadius: !0,
  borderBottomRadius: !0,
  borderLeftRadius: !0,
  rounded: !0,
  roundedTop: !0,
  roundedRight: !0,
  roundedBottom: !0,
  roundedLeft: !0
}, bs = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, ys = {
  width: !0,
  minWidth: !0,
  maxWidth: !0,
  height: !0,
  minHeight: !0,
  maxHeight: !0,
  w: !0,
  minW: !0,
  maxW: !0,
  h: !0,
  minH: !0,
  maxH: !0,
  boxSize: !0
}, xs = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Cs = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Ss = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, vs = {
  objectFit: !0,
  objectPosition: !0
}, ws = {
  _hover: !0,
  _active: !0,
  _focus: !0,
  _highlighted: !0,
  _focusWithin: !0,
  _focusVisible: !0,
  _disabled: !0,
  _readOnly: !0,
  _before: !0,
  _after: !0,
  _empty: !0,
  _expanded: !0,
  _checked: !0,
  _grabbed: !0,
  _pressed: !0,
  _invalid: !0,
  _valid: !0,
  _loading: !0,
  _selected: !0,
  _hidden: !0,
  _autofill: !0,
  _even: !0,
  _odd: !0,
  _first: !0,
  _last: !0,
  _notFirst: !0,
  _notLast: !0,
  _visited: !0,
  _activeLink: !0,
  _activeStep: !0,
  _indeterminate: !0,
  _groupHover: !0,
  _peerHover: !0,
  _groupFocus: !0,
  _peerFocus: !0,
  _groupFocusVisible: !0,
  _peerFocusVisible: !0,
  _groupActive: !0,
  _peerActive: !0,
  _groupDisabled: !0,
  _peerDisabled: !0,
  _groupInvalid: !0,
  _peerInvalid: !0,
  _groupChecked: !0,
  _peerChecked: !0,
  _groupFocusWithin: !0,
  _peerFocusWithin: !0,
  _peerPlaceholderShown: !0,
  _placeholder: !0,
  _placeholderShown: !0,
  _fullScreen: !0,
  _selection: !0,
  _rtl: !0,
  _ltr: !0,
  _mediaDark: !0,
  _mediaReduceMotion: !0,
  _dark: !0,
  _light: !0
}, ks = {
  ...as,
  ...ls,
  ...cs,
  ...ds,
  ...us,
  ...gs,
  ...fs,
  ...ms,
  ...hs,
  ...ps,
  ...bs,
  ...ys,
  ...xs,
  ...Cs,
  ...Ss,
  ...vs,
  ...ws
};
function _s(e) {
  return Object.keys(e).filter((t) => t in ks);
}
const Qn = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function Is(e) {
  return Object.entries(e).reduce((t, [n, o]) => {
    const r = Qn.get(n);
    return r != null && o != null && (t[r] = o), t;
  }, {});
}
const $s = Hn({});
function Ct(e, t, n) {
  let o, r, i = [];
  const a = lt((l) => {
    t != null && (o = ie(t, l), r = Zn(o, l), i = o.variants ? Object.keys(o.variants) : []);
  }), s = (l) => {
    const c = be();
    a(c);
    const [u, g, d, m, h] = x(
      l,
      ["as", "class", "sx", "__css"],
      [...Qn.keys()],
      i,
      _s(l)
    ), S = _(() => {
      if (r == null)
        return [];
      const y = {
        ...o?.defaultVariants,
        ...tt(d)
      };
      return Jn(r, y);
    }), k = _(() => {
      const y = Object.assign({}, u.__css, tt(m), ...Fr(u.sx).map((v) => ie(v, c)));
      if (!Wn(y))
        return $s({
          css: ct(y, c)
        }).className;
    });
    return f(pr, b({
      get component() {
        return u.as ?? e;
      },
      get class() {
        return Wt(n, r?.baseClassName, ...S(), k(), u.class) || void 0;
      }
    }, () => Is(g), h));
  };
  return n != null && (s.toString = () => `.${n}`), s;
}
function Rs() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Ct, {
    apply(t, n, o) {
      return Ct(...o);
    },
    get(t, n) {
      return e.has(n) || e.set(n, Ct(n)), e.get(n);
    }
  });
}
const C = Rs();
function Il() {
}
const Es = jn({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), $l = jn({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-context.ts
 */
const eo = ae();
function Os() {
  const e = le(eo);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function Rl(e, t) {
  const { colorMode: n } = Os();
  return _(() => n() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const ut = "hope-ui-color-mode";
function Ts(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get: (t) => {
      if (pe)
        return t;
      let n;
      try {
        n = localStorage.getItem(e);
      } catch {
      }
      return n ?? t;
    },
    set: (t) => {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const zs = Ts(ut);
function pn(e, t) {
  return e.match(new RegExp(`(^| )${t}=([^;]+)`))?.[2];
}
function to(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (n) => t ? pn(t, e) ?? n : pe ? n : pn(document.cookie, e) ?? n,
    set: (n) => {
      document.cookie = `${e}=${n}; max-age=31536000; path=/`;
    }
  };
}
const El = to(ut);
function Ol(e) {
  return to(ut, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function no() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function Bs() {
  const e = document.createElement("style");
  return e.appendChild(
    document.createTextNode(
      "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
    )
  ), document.head.appendChild(e), () => {
    window.getComputedStyle(document.body), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(e);
      });
    });
  };
}
function As(e) {
  document.body.classList.add(e ? fe.dark : fe.light), document.body.classList.remove(e ? fe.light : fe.dark);
}
function Ms(e, t = !0) {
  const n = t ? Bs() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, n?.();
}
function oo(e) {
  return no().matches ?? e === "dark" ? "dark" : "light";
}
function Ls(e) {
  const t = "light", n = e.get(t) ?? t;
  return n === "system" ? pe ? t : oo() : n;
}
function Ds(e) {
  const t = no(), n = (o) => {
    e(o.matches ? "dark" : "light");
  };
  return t.addEventListener("change", n), () => {
    t.removeEventListener("change", n);
  };
}
function Ps(e) {
  const t = () => e.initialColorMode ?? "system", n = () => e.storageManager ?? zs;
  let o;
  const [r, i] = $(Ls(n())), a = (u) => {
    i(u), As(u === "dark"), Ms(u, e.disableTransitionOnChange);
  }, s = (u) => {
    o && (o(), o = void 0);
    const g = u === "system";
    g && (o = Ds(a)), a(g ? oo() : u), n().set(u);
  }, l = () => {
    s(r() === "dark" ? "light" : "dark");
  };
  X(() => {
    s(n().get() ?? t());
  }), O(() => {
    o?.();
  });
  const c = {
    colorMode: r,
    setColorMode: s,
    toggleColorMode: l
  };
  return f(eo.Provider, {
    value: c,
    get children() {
      return e.children;
    }
  });
}
function ro(e) {
  return e == null ? {} : {
    overflow: Q(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: Q(e, (t) => t != null ? "ellipsis" : void 0),
    display: Q(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: Q(e, (t) => t ?? void 0),
    WebkitBoxOrient: Q(e, (t) => t != null ? "vertical" : void 0)
  };
}
function H(e, t) {
  return b(e, t);
}
function q(e, t) {
  return `rgb(${e} / ${t})`;
}
const Ws = /* @__PURE__ */ Re('<script id="hope-ui-color-mode-script"><\/script>'), io = "system", Fs = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function Hs(e) {
  return Fs.has(e) ? e : io;
}
function Tl(e) {
  e = H({
    initialColorMode: io,
    storageType: "localStorage",
    storageKey: ut
  }, e);
  const t = _(() => {
    const n = Hs(e.initialColorMode), o = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${n}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, r = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${n}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? o : r}`.trim();
  });
  return (() => {
    const n = Ws.cloneNode(!0);
    return oe((o) => {
      const r = e.nonce, i = t();
      return r !== o._v$ && rt(n, "nonce", o._v$ = r), i !== o._v$2 && (n.innerHTML = o._v$2 = i), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const bn = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function so(e) {
  const [t, n] = $(), [o, r] = $(), i = _(() => e.overlayTransitionOptions ? H(bn, e.overlayTransitionOptions) : bn), a = st(() => e.isOpen, i);
  let s;
  const l = (d) => {
    s = d.target;
  }, c = (d) => {
    d.key === "Escape" && (d.stopPropagation(), e.closeOnEsc && e.onClose(), e.onEscKeyDown?.());
  }, u = (d) => {
    d.stopPropagation(), s === d.target && (e.closeOnOverlayClick && e.onClose(), e.onOverlayClick?.());
  }, g = () => {
    e.onClose();
  };
  return Ir({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: n,
    descriptionId: o,
    setDescriptionId: r,
    overlayTransition: a,
    onContainerMouseDown: l,
    onContainerKeyDown: c,
    onContainerClick: u,
    onCloseButtonClick: g
  };
}
const js = U((e) => ({
  root: {
    baseStyle: {
      zIndex: "modal",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      "@supports(height: -webkit-fill-available)": {
        height: "-webkit-fill-available"
      },
      outline: "none",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      isCentered: {
        true: {
          alignItems: "center"
        },
        false: {
          alignItems: "flex-start"
        }
      },
      scrollBehavior: {
        inside: {
          overflow: "hidden"
        },
        outside: {
          overflow: "auto"
        }
      }
    }
  },
  content: {
    baseStyle: {
      zIndex: "modal",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      my: 12,
      mx: 4,
      outline: "none",
      boxShadow: "lg",
      borderRadius: "sm",
      backgroundColor: { light: "common.white", dark: "neutral.700" },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      size: {
        xs: { maxWidth: "xs" },
        sm: { maxWidth: "md" },
        md: { maxWidth: "lg" },
        lg: { maxWidth: "2xl" },
        xl: { maxWidth: "4xl" },
        full: {
          maxWidth: "100vw",
          minHeight: "100vh",
          "@supports(min-height: -webkit-fill-available)": {
            minHeight: "-webkit-fill-available"
          },
          m: 0,
          borderRadius: "none"
        }
      },
      scrollBehavior: {
        inside: {
          maxHeight: "calc(100% - 6rem)",
          overflow: "auto"
        },
        outside: {
          maxHeight: "none",
          overflow: void 0
        }
      }
    }
  },
  overlay: {
    baseStyle: {
      zIndex: "overlay",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: {
        light: q(e.vars.colors.neutral.darkChannel, 0.75),
        dark: q(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));
function ao(e) {
  return typeof e == "function";
}
function lo(e) {
  return e == null;
}
function Ns(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit-utils/src/dom.ts
 *
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/59391bb95b05a13feeb9fe84b0cdb027519460ce/packages/utilities/dom-utils/src/dom.ts
 */
function et(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function yn(e) {
  const t = e.target ?? e.currentTarget, n = Tt(t);
  return e.relatedTarget ?? n;
}
function Tt(e) {
  return co(e)?.activeElement;
}
function Vs(e) {
  return co(e).defaultView || window;
}
function co(e) {
  return Gs(e) ? e.ownerDocument ?? document : document;
}
function Gs(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function qs(e) {
  return e.tagName === "IFRAME";
}
function E(e) {
  return e ? "" : void 0;
}
function Ys(e) {
  return e ? !0 : void 0;
}
function Ee(e, t) {
  return (n) => {
    e(n), t?.(n);
  };
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */
function ke(e) {
  if (Ks())
    e.focus({ preventScroll: !0 });
  else {
    const t = Xs(e);
    e.focus(), Us(t);
  }
}
let Ue = null;
function Ks() {
  if (Ue == null) {
    Ue = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ue = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ue;
}
function Xs(e) {
  let t = e.parentNode;
  const n = [], o = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== o; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return o instanceof HTMLElement && n.push({
    element: o,
    scrollTop: o.scrollTop,
    scrollLeft: o.scrollLeft
  }), n;
}
function Us(e) {
  for (const { element: t, scrollTop: n, scrollLeft: o } of e)
    t.scrollTop = n, t.scrollLeft = o;
}
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
function Zs() {
}
function A(e, t) {
  return e && (ao(e) ? e(t) : e[0](e[1], t)), t?.defaultPrevented;
}
function Js(e, ...t) {
  return ao(e) ? e(...t) : e;
}
function Qs(e, t) {
  const n = {};
  return Object.keys(e).forEach((o) => {
    const r = e[o];
    t(r, o, e) && (n[o] = r);
  }), n;
}
function uo(e) {
  return Qs(e, (t) => t != null);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/focus.ts
 *
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/focus/src/isElementVisible.ts
 */
const go = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function zt(e, t) {
  const n = Array.from(e.querySelectorAll(go)).filter(xn);
  return t && xn(e) && n.unshift(e), n.forEach((o, r) => {
    if (qs(o) && o.contentDocument) {
      const i = o.contentDocument.body, a = zt(i, !1);
      n.splice(r, 1, ...a);
    }
  }), n;
}
function xn(e) {
  return fo(e) && !ea(e);
}
function fo(e) {
  return e.matches(go) && mo(e);
}
function ea(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function mo(e, t) {
  return e.nodeName !== "#comment" && ta(e) && na(e, t) && (!e.parentElement || mo(e.parentElement, e));
}
function ta(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return !1;
  const { display: t, visibility: n } = e.style;
  let o = t !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    if (!e.ownerDocument.defaultView)
      return o;
    const { getComputedStyle: r } = e.ownerDocument.defaultView, { display: i, visibility: a } = r(e);
    o = i !== "none" && a !== "hidden" && a !== "collapse";
  }
  return o;
}
function na(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function ho(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ho(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function w() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ho(e)) && (o && (o += " "), o += t);
  return o;
}
const oa = /* @__PURE__ */ Re('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>', 4, !0), Cn = {
  viewBox: "0 0 24 24",
  path: () => oa.cloneNode(!0)
}, Sn = C("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), ra = (e) => {
  e = H({
    children: Cn.path,
    viewBox: Cn.viewBox,
    color: "currentColor"
  }, e);
  const [t, n] = x(e, ["as", "children", "viewBox"]), o = () => t.as && !Ns(t.as);
  return f(F, {
    get when() {
      return o();
    },
    get fallback() {
      return f(Sn, b({
        get viewBox() {
          return t.viewBox;
        },
        verticalAlign: "middle"
      }, n, {
        get children() {
          return t.children;
        }
      }));
    },
    get children() {
      return f(Sn, b({
        get as() {
          return t.as;
        }
      }, n));
    }
  });
};
function po(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: n = {}
  } = e;
  return (o) => f(ra, b({
    viewBox: t
  }, n, o, {
    get children() {
      return e.path;
    }
  }));
}
const ia = /* @__PURE__ */ Re('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>', 8, !0), sa = /* @__PURE__ */ Re('<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>', 4, !0), aa = po({
  path: () => ia.cloneNode(!0)
}), la = po({
  path: () => sa.cloneNode(!0)
}), ca = U(
  (e) => ({
    root: {
      baseStyle: {
        appearance: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        outline: "none",
        borderWidth: 0,
        borderRadius: "sm",
        backgroundColor: "transparent",
        padding: 0,
        color: "neutral.800",
        userSelect: "none",
        transition: "color 250ms, background-color 250ms",
        _disabled: {
          opacity: "0.5",
          cursor: "not-allowed"
        },
        _hover: {
          backgroundColor: "blackAlpha.100"
        },
        _active: {
          backgroundColor: "blackAlpha.200"
        },
        ...Pt(e.vars),
        _dark: {
          color: "whiteAlpha.900",
          _hover: {
            backgroundColor: "whiteAlpha.100"
          },
          _active: {
            backgroundColor: "whiteAlpha.200"
          }
        }
      },
      variants: {
        size: {
          sm: {
            boxSize: 6,
            fontSize: "16px"
          },
          md: {
            boxSize: 8,
            fontSize: "20px"
          },
          lg: {
            boxSize: 10,
            fontSize: "24px"
          }
        }
      }
    }
  }),
  {
    size: "md"
  }
), Ft = (e) => {
  e = te("CloseButton", {
    "aria-label": "Close",
    children: () => f(la, {})
  }, e);
  const [t, n, o] = x(e, ["class"], [...ee, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = ca("CloseButton", n);
  return f(C.button, b({
    type: "button",
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, o));
}, bo = ae();
function je() {
  const e = le(bo);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const da = (e) => {
  const t = je();
  e = H({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [n, o] = x(e, ["class", "onClick"]);
  return f(Ft, b({
    get class() {
      return w("hope-Modal-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), A(n.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, yo = {
  position: "absolute",
  overflow: "hidden",
  height: "1px",
  width: "1px",
  margin: "0 -1px -1px 0",
  border: 0,
  padding: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap"
}, ua = C("span", {
  baseStyle: yo
}), zl = C("input", {
  baseStyle: yo
}), Ht = (e) => {
  let t, n;
  e = H({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [o, r] = x(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), i = () => {
    if (!n)
      return;
    const c = n.querySelector(o.initialFocusSelector);
    if (c) {
      ke(c);
      return;
    }
    if (o.autoFocus) {
      const u = zt(n)[0] ?? n;
      ke(u);
    }
  }, a = () => {
    if (o.restoreFocusSelector) {
      t = document.querySelector(o.restoreFocusSelector);
      return;
    }
    o.restoreFocus && (t = Tt());
  }, s = () => {
    if (!n)
      return !1;
    const c = Tt(n);
    return !c || et(n, c) ? !1 : fo(c);
  }, l = (c) => {
    if (!n)
      return;
    const u = zt(n).slice(1, -1);
    if (!u.length) {
      ke(n);
      return;
    }
    const g = u[0], d = u[u.length - 1];
    c.relatedTarget === g ? ke(d) : ke(g);
  };
  return he(() => {
    a(), i();
  }), O(() => {
    !t || s() || ke(t);
  }), f(C.div, b({
    ref(c) {
      const u = Ee((g) => n = g, o.ref);
      typeof u == "function" && u(c);
    },
    tabIndex: -1
  }, r, {
    get children() {
      return [f(F, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return f(vn, {
            onFocus: l
          });
        }
      }), _(() => e.children), f(F, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return f(vn, {
            onFocus: l
          });
        }
      })];
    }
  }));
}, vn = (e) => f(ua, b({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e)), ga = (e) => {
  const t = je(), [n, o] = x(e, ["class", "style", "onClick"]), r = (a) => {
    a.stopPropagation(), A(n.onClick, a);
  }, i = _(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return f(Ht, {
    autoFocus: !0,
    restoreFocus: !0,
    get trapFocus() {
      return t.trapFocus();
    },
    get initialFocusSelector() {
      return t.initialFocusSelector();
    },
    get restoreFocusSelector() {
      return t.restoreFocusSelector();
    },
    get class() {
      return t.baseClasses().root;
    },
    get __css() {
      return t.styleOverrides().root;
    },
    get onMouseDown() {
      return t.onContainerMouseDown;
    },
    get onKeyDown() {
      return t.onContainerKeyDown;
    },
    get onClick() {
      return t.onContainerClick;
    },
    get children() {
      return f(C.section, b({
        get id() {
          return t.contentId();
        },
        role: "dialog",
        "data-ismodal": "true",
        "aria-modal": "true",
        get ["aria-labelledby"]() {
          return t.headingId();
        },
        get ["aria-describedby"]() {
          return t.descriptionId();
        },
        get class() {
          return w(t.baseClasses().content, n.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: r
      }, o));
    }
  });
}, fa = (e) => {
  const t = je(), [n, o] = x(e, ["class"]);
  return X(() => {
    t.setDescriptionId(`${t.contentId()}-description`), O(() => t.setDescriptionId(void 0));
  }), f(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, o));
}, ma = (e) => {
  const t = je(), [n, o] = x(e, ["class"]);
  return X(() => {
    t.setHeadingId(`${t.contentId()}-heading`), O(() => t.setHeadingId(void 0));
  }), f(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, o));
}, ha = (e) => {
  const t = je(), [n, o] = x(e, ["class", "style", "children"]), r = _(() => ({
    ...n.style,
    ...t.overlayTransition.style()
  }));
  return f(C.div, b({
    role: "presentation",
    get class() {
      return w(t.baseClasses().overlay, n.class);
    },
    get style() {
      return r();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, o));
}, Ne = (e) => {
  e = te("Modal", {
    id: `hope-modal-${ot()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = x(e, [...ee, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: n,
    styleOverrides: o
  } = js("Modal", t), {
    headingId: r,
    setHeadingId: i,
    descriptionId: a,
    setDescriptionId: s,
    overlayTransition: l,
    onContainerMouseDown: c,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: d
  } = so(e), m = st(() => e.isOpen, () => H({
    transition: "pop",
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), h = {
    baseClasses: n,
    styleOverrides: o,
    isOpen: () => e.isOpen,
    contentTransition: m,
    overlayTransition: l,
    contentId: () => e.id,
    headingId: r,
    setHeadingId: i,
    descriptionId: a,
    setDescriptionId: s,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: c,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: d
  };
  return f(F, {
    get when() {
      return _(() => !!l.keepMounted())() && m.keepMounted();
    },
    get children() {
      return f(it, {
        get children() {
          return f(bo.Provider, {
            value: h,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
Ne.Overlay = ha;
Ne.Content = ga;
Ne.CloseButton = da;
Ne.Heading = ma;
Ne.Description = fa;
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/aria-modal-polyfill/src/index.ts
 *
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-focus-trap/create-aria-hider.ts
 */
const pa = typeof document < "u" ? document : void 0, ba = "body > :not(script, style)", St = '[aria-modal="true"], [data-ismodal="true"]';
function wn(e, t) {
  const n = Array.from(e.querySelectorAll(ba)).filter((o) => !o.contains(t)).map((o) => {
    const r = o.getAttribute("aria-hidden") || "";
    return o.setAttribute("aria-hidden", "true"), { element: o, previousAriaHidden: r };
  });
  return () => {
    n.forEach(({ element: o, previousAriaHidden: r }) => {
      r ? o.setAttribute("aria-hidden", r) : o.removeAttribute("aria-hidden");
    });
  };
}
function ya(e = "body", { document: t = pa } = {}) {
  const n = t?.querySelector(e);
  if (t == null || n == null)
    return Zs;
  const o = { childList: !0 };
  let r = [], i;
  const a = new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList") {
        if (l.addedNodes.length > 0) {
          const c = Array.from(l.addedNodes).find(
            (u) => u.querySelector?.(St)
          );
          if (c) {
            r.push(c);
            const u = c.querySelector(St);
            i?.(), i = wn(t, u);
          }
        } else if (l.removedNodes.length > 0) {
          const c = Array.from(l.removedNodes), u = r.findIndex(
            (g) => c.includes(g)
          );
          if (u >= 0)
            if (i?.(), r = r.filter((g, d) => d !== u), r.length > 0) {
              const g = r[r.length - 1].querySelector(St);
              i = wn(t, g);
            } else
              i = void 0;
        }
      }
  });
  return a.observe(n, o), () => {
    i?.(), a.disconnect();
  };
}
function Bl(e) {
  ya(), e = H({
    withCssReset: !0
  }, e);
  const [t, n] = x(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return f(Ps, {
    get initialColorMode() {
      return t.initialColorMode;
    },
    get storageManager() {
      return t.storageManager;
    },
    get disableTransitionOnChange() {
      return t.disableTransitionOnChange;
    },
    get children() {
      return f(ss, n);
    }
  });
}
const xa = U(({ vars: e }) => ({
  root: {
    baseStyle: {
      position: "relative",
      outline: "none",
      backgroundColor: "transparent",
      color: "inherit",
      textDecoration: "inherit",
      cursor: "pointer",
      transition: "text-decoration 250ms",
      "&:hover": {
        textDecoration: "underline"
      },
      ...Pt(e)
    }
  }
})), Al = (e) => {
  e = te("Anchor", {}, e);
  const [t, n, o] = x(e, ["class", "isExternal"], ee), {
    baseClasses: r,
    styleOverrides: i
  } = xa("Anchor", n);
  return f(C.a, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    },
    get target() {
      return t.isExternal ? "_blank" : void 0;
    },
    get rel() {
      return t.isExternal ? "noopener noreferrer" : void 0;
    }
  }, o));
}, Ca = C("div", {
  baseStyle: {
    position: "relative",
    maxWidth: "100%",
    "&::before": {
      content: '""',
      height: 0,
      display: "block"
    },
    "& > *:not(style)": {
      overflow: "hidden",
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSize: "100%"
    },
    "& > img, & > video": {
      objectFit: "cover"
    }
  }
}, "hope-AspectRatio-root"), Ml = (e) => {
  e = H({
    ratio: 4 / 3
  }, e);
  const [t, n] = x(e, ["ratio"]);
  return f(Ca, b({
    get _before() {
      return {
        pb: Q(t.ratio, (o) => `${1 / o * 100}%`)
      };
    }
  }, n));
};
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */
const Ll = C("div"), gt = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function Sa(e) {
  const t = [];
  for (const n of gt) {
    const o = n === "neutral", r = n === "warning";
    t.push({
      variants: {
        variant: "solid",
        colorScheme: n
      },
      style: {
        color: r ? e.colors[n][900] : "common.white",
        backgroundColor: e.colors[n][o ? "800" : r ? "300" : "500"],
        borderColor: e.colors[n][o ? "800" : r ? "300" : "500"],
        _hover: {
          color: r ? e.colors[n][900] : "common.white",
          backgroundColor: e.colors[n][o ? "700" : r ? "400" : "600"],
          borderColor: e.colors[n][o ? "700" : r ? "400" : "600"]
        },
        _active: {
          color: r ? e.colors[n][900] : "common.white",
          backgroundColor: e.colors[n][o ? "600" : r ? "500" : "700"],
          borderColor: e.colors[n][o ? "600" : r ? "500" : "700"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.100",
          borderColor: "neutral.100"
        },
        _dark: {
          color: r ? e.colors[n][900] : "whiteAlpha.900",
          backgroundColor: e.colors[n][r ? "500" : "700"],
          borderColor: e.colors[n][r ? "500" : "700"],
          _hover: {
            color: r ? e.colors[n][900] : "whiteAlpha.900",
            backgroundColor: e.colors[n][r ? "400" : "600"],
            borderColor: e.colors[n][r ? "400" : "600"]
          },
          _active: {
            color: r ? e.colors[n][900] : "whiteAlpha.900",
            backgroundColor: e.colors[n][r ? "300" : "500"],
            borderColor: e.colors[n][r ? "300" : "500"]
          },
          _disabled: {
            color: "whiteAlpha.300",
            backgroundColor: "whiteAlpha.100",
            borderColor: "transparent"
          }
        }
      }
    });
  }
  return t;
}
function va(e) {
  const t = [];
  for (const n of gt) {
    const o = n === "neutral", r = n === "warning";
    t.push({
      variants: {
        variant: "soft",
        colorScheme: n
      },
      style: {
        color: e.colors[n][r ? "900" : "700"],
        backgroundColor: e.colors[n][o ? "200" : r ? "100" : "50"],
        borderColor: e.colors[n][o ? "200" : r ? "100" : "50"],
        _hover: {
          color: e.colors[n][r ? "900" : "800"],
          backgroundColor: e.colors[n][o ? "300" : r ? "200" : "100"],
          borderColor: e.colors[n][o ? "300" : r ? "200" : "100"]
        },
        _active: {
          color: e.colors[n][r ? "900" : "800"],
          backgroundColor: e.colors[n][o ? "400" : r ? "300" : "200"],
          borderColor: e.colors[n][o ? "400" : r ? "300" : "200"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.50",
          borderColor: "neutral.50"
        },
        _dark: {
          color: e.colors[n][200],
          backgroundColor: q(e.colors[n].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[n][200],
            backgroundColor: q(e.colors[n].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: q(e.colors[n].mainChannel, 0.4),
            borderColor: "transparent"
          },
          _disabled: {
            color: "whiteAlpha.200",
            backgroundColor: "whiteAlpha.50",
            borderColor: "transparent"
          }
        }
      }
    });
  }
  return t;
}
function wa(e) {
  const t = [];
  for (const n of gt) {
    const o = n === "neutral", r = n === "warning";
    t.push({
      variants: {
        variant: "outlined",
        colorScheme: n
      },
      style: {
        color: e.colors[n][r ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: e.colors[n][o || r ? "400" : "300"],
        _hover: {
          color: e.colors[n][r ? "800" : "700"],
          backgroundColor: e.colors[n][o || r ? "100" : "50"],
          borderColor: e.colors[n][o || r ? "500" : "400"]
        },
        _active: {
          color: e.colors[n][r ? "800" : "700"],
          backgroundColor: e.colors[n][o || r ? "200" : "100"],
          borderColor: e.colors[n][o || r ? "500" : "400"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "neutral.100"
        },
        _dark: {
          color: e.colors[n][200],
          backgroundColor: "transparent",
          borderColor: e.colors[n][800],
          _hover: {
            color: e.colors[n][200],
            backgroundColor: q(e.colors[n].mainChannel, 0.1),
            borderColor: e.colors[n][700]
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: q(e.colors[n].mainChannel, 0.2),
            borderColor: e.colors[n][700]
          },
          _disabled: {
            color: "whiteAlpha.200",
            backgroundColor: "transparent",
            borderColor: "whiteAlpha.50"
          }
        }
      }
    });
  }
  return t;
}
function ka(e) {
  const t = [];
  for (const n of gt) {
    const o = n === "neutral", r = n === "warning";
    t.push({
      variants: {
        variant: "plain",
        colorScheme: n
      },
      style: {
        color: e.colors[n][r ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: "transparent",
        _hover: {
          color: e.colors[n][r ? "800" : "700"],
          backgroundColor: e.colors[n][o || r ? "100" : "50"],
          borderColor: e.colors[n][o || r ? "100" : "50"]
        },
        _active: {
          color: e.colors[n][r ? "800" : "700"],
          backgroundColor: e.colors[n][o || r ? "200" : "100"],
          borderColor: e.colors[n][o || r ? "200" : "100"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "transparent"
        },
        _dark: {
          color: e.colors[n][200],
          backgroundColor: "transparent",
          borderColor: "transparent",
          _hover: {
            color: e.colors[n][200],
            backgroundColor: q(e.colors[n].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: q(e.colors[n].mainChannel, 0.2),
            borderColor: "transparent"
          },
          _disabled: {
            color: "whiteAlpha.200",
            backgroundColor: "transparent",
            borderColor: "transparent"
          }
        }
      }
    });
  }
  return t;
}
const We = /* @__PURE__ */ new Map([
  ["xs", "7"],
  ["sm", "8"],
  ["md", "10"],
  ["lg", "12"]
]);
function _a() {
  const e = [];
  for (const [t, n] of We)
    e.push({
      variants: {
        isIconButton: !0,
        size: t
      },
      style: {
        width: n,
        p: 0
      }
    });
  return e;
}
const Ia = U(
  ({ vars: e }) => ({
    root: {
      baseStyle: {
        appearance: "none",
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: "auto",
        outline: "none",
        border: "1px solid transparent",
        borderRadius: "md",
        padding: 0,
        fontFamily: "inherit",
        fontSize: "100%",
        fontWeight: "medium",
        lineHeight: "none",
        textDecoration: "none",
        userSelect: "none",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        transitionProperty: "color, background-color, border-color",
        transitionDuration: "250ms",
        _disabled: {
          cursor: "not-allowed"
        },
        _loading: {
          opacity: 0.8
        },
        ...Pt(e)
      },
      variants: {
        variant: {
          default: {
            color: "neutral.800",
            backgroundColor: "common.white",
            borderColor: "neutral.300",
            _hover: {
              color: "neutral.800",
              backgroundColor: "neutral.100",
              borderColor: "neutral.300"
            },
            _active: {
              color: "neutral.800",
              backgroundColor: "neutral.200",
              borderColor: "neutral.400"
            },
            _disabled: {
              color: "neutral.200",
              backgroundColor: "transparent",
              borderColor: "neutral.100"
            },
            _dark: {
              color: "whiteAlpha.900",
              backgroundColor: "whiteAlpha.50",
              borderColor: "whiteAlpha.200",
              _hover: {
                color: "whiteAlpha.900",
                backgroundColor: "whiteAlpha.100",
                borderColor: "whiteAlpha.200"
              },
              _active: {
                color: "whiteAlpha.900",
                backgroundColor: "whiteAlpha.200",
                borderColor: "whiteAlpha.300"
              },
              _disabled: {
                color: "whiteAlpha.200",
                backgroundColor: "transparent",
                borderColor: "whiteAlpha.50"
              }
            }
          }
        },
        size: {
          xs: {
            height: We.get("xs"),
            px: 3,
            fontSize: "xs"
          },
          sm: {
            height: We.get("sm"),
            px: 4,
            fontSize: "sm"
          },
          md: {
            height: We.get("md"),
            px: 5,
            fontSize: "base"
          },
          lg: {
            height: We.get("lg"),
            px: 6,
            fontSize: "lg"
          }
        },
        isFullWidth: {
          true: {
            display: "flex",
            width: "100%"
          }
        }
      },
      compoundVariants: [
        ...Sa(e),
        ...va(e),
        ...wa(e),
        ...ka(e),
        ..._a()
      ]
    },
    icon: {
      baseStyle: {
        display: "inline-flex",
        alignSelf: "center",
        flexShrink: 0
      }
    },
    leftIcon: {},
    rightIcon: {},
    loaderWrapper: {
      baseStyle: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        fontSize: "1em",
        lineHeight: "normal"
      }
    },
    loaderIcon: {
      baseStyle: {
        fontSize: "1.3em",
        animation: `1s linear infinite ${Es}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), xo = ae();
function jt() {
  const e = le(xo);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const $a = C("div", {
  baseStyle: {
    display: "inline-flex",
    "& > *:focus": {
      zIndex: 1
    }
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        "& > *:first-of-type:not(:last-of-type)": {
          borderRightRadius: 0
        },
        "& > *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0,
          marginLeft: "-1px"
        },
        "& > *:not(:first-of-type):last-of-type": {
          borderLeftRadius: 0,
          marginLeft: "-1px"
        }
      },
      vertical: {
        flexDirection: "column",
        "& > *:first-of-type:not(:last-of-type)": {
          borderBottomRadius: 0
        },
        "& > *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0,
          marginTop: "-1px"
        },
        "& > *:not(:first-of-type):last-of-type": {
          borderTopRadius: 0,
          marginTop: "-1px"
        }
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}, "hope-ButtonGroup-root"), Co = ae();
function Ra() {
  return le(Co);
}
const Dl = (e) => {
  e = H({}, e);
  const [t, n, o] = x(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return f(Co.Provider, {
    value: n,
    get children() {
      return f($a, b({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, o));
    }
  });
}, kn = (e) => {
  const t = jt(), [n, o] = x(e, ["class", "__css"]);
  return f(C.span, b({
    "aria-hidden": !0,
    get class() {
      return w(t.baseClasses().icon, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().icon,
        ...n.__css
      };
    }
  }, o));
}, _n = (e) => {
  const t = jt(), [n, o] = x(e, ["class", "children", "hasLoadingText"]);
  return f(C.div, b({
    get class() {
      return w(t.baseClasses().loaderWrapper, n.class);
    },
    get position() {
      return n.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return t.styleOverrides().loaderWrapper;
    }
  }, o, {
    get children() {
      return f(F, {
        get when() {
          return n.children;
        },
        get fallback() {
          return f(aa, {
            get class() {
              return t.baseClasses().loaderIcon;
            },
            get __css() {
              return t.styleOverrides().loaderIcon;
            }
          });
        },
        get children() {
          return n.children;
        }
      });
    }
  }));
};
/*!
 * Original code by Ariakit
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/dom.ts
 */
const Ea = ["button", "color", "file", "image", "reset", "submit"];
function In(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? Ea.indexOf(e.type) !== -1 : !1;
}
const Oa = /* @__PURE__ */ Re("<span></span>"), Ta = (e) => {
  let t;
  const n = Ra(), o = H({
    get variant() {
      return n?.variant;
    },
    get colorScheme() {
      return n?.colorScheme;
    },
    get size() {
      return n?.size;
    },
    get isDisabled() {
      return n?.isDisabled;
    }
  }, e);
  e = te("Button", {
    loaderPlacement: "start"
  }, o);
  const [r, i, a, s] = x(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...ee, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), l = Lr(() => t, () => e.as || "button"), [c, u] = $(l() != null && In({
    tagName: l(),
    type: r.type
  })), g = _(() => r.type != null ? r.type : c() ? "button" : void 0), {
    baseClasses: d,
    styleOverrides: m
  } = Ia("Button", a);
  return he(() => {
    t != null && u(In(t));
  }), f(xo.Provider, {
    value: {
      baseClasses: d,
      styleOverrides: m
    },
    get children() {
      return f(C.button, b({
        get as() {
          return r.as;
        },
        ref(h) {
          const S = Ee((k) => t = k, r.ref);
          typeof S == "function" && S(h);
        },
        get role() {
          return !c() && l() !== "a" ? "button" : void 0;
        },
        get type() {
          return g();
        },
        get tabIndex() {
          return c() ? void 0 : 0;
        },
        get disabled() {
          return r.isDisabled;
        },
        get ["data-loading"]() {
          return r.isLoading || void 0;
        },
        get class() {
          return w(d().root, r.class);
        },
        get __css() {
          return m().root;
        }
      }, s, {
        get children() {
          return [f(F, {
            get when() {
              return r.isLoading && r.loaderPlacement === "start";
            },
            get children() {
              return f(_n, {
                get hasLoadingText() {
                  return !!r.loadingText;
                },
                get children() {
                  return r.loader;
                }
              });
            }
          }), f(F, {
            get when() {
              return r.isLoading;
            },
            get fallback() {
              return f($n, i);
            },
            get children() {
              return f(F, {
                get when() {
                  return r.loadingText;
                },
                get fallback() {
                  return (() => {
                    const h = Oa.cloneNode(!0);
                    return h.style.setProperty("opacity", "0"), wt(h, f($n, i)), h;
                  })();
                },
                get children() {
                  return r.loadingText;
                }
              });
            }
          }), f(F, {
            get when() {
              return r.isLoading && r.loaderPlacement === "end";
            },
            get children() {
              return f(_n, {
                get hasLoadingText() {
                  return !!r.loadingText;
                },
                get children() {
                  return r.loader;
                }
              });
            }
          })];
        }
      }));
    }
  });
};
function $n(e) {
  const t = jt();
  return [f(F, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return f(kn, {
        get class() {
          return t.baseClasses().leftIcon;
        },
        get __css() {
          return t.styleOverrides().leftIcon;
        },
        get children() {
          return e.leftIcon;
        }
      });
    }
  }), _(() => e.children), f(F, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return f(kn, {
        get class() {
          return t.baseClasses().rightIcon;
        },
        get __css() {
          return t.styleOverrides().rightIcon;
        },
        get children() {
          return e.rightIcon;
        }
      });
    }
  })];
}
const Pl = (e) => f(Ta, b({
  isIconButton: !0
}, e));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const Wl = C("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), za = C("div", ({
  vars: e
}) => ({
  baseStyle: {
    width: "100%",
    maxWidth: {
      sm: e.breakpoints.sm,
      md: e.breakpoints.md,
      lg: e.breakpoints.lg,
      xl: e.breakpoints.xl,
      "2xl": e.breakpoints["2xl"]
    }
  },
  variants: {
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }
  },
  defaultVariants: {
    centerContent: !1
  }
}), "hope-Container-root"), Fl = (e) => {
  e = H({
    isCentered: !0
  }, e);
  const [t, n] = x(e, ["isCentered"]);
  return f(za, b({
    get mx() {
      return Q(t.isCentered, (o) => o ? "auto" : void 0);
    }
  }, n));
}, Ba = U(
  {
    root: {
      baseStyle: {
        color: { light: "neutral.300", dark: "neutral.700" }
      },
      variants: {
        orientation: {
          horizontal: {
            width: "100%",
            margin: 0,
            border: 0,
            borderTopColor: "currentColor"
          },
          vertical: {
            alignSelf: "stretch",
            height: "inherit",
            border: 0,
            borderLeftColor: "currentColor"
          }
        },
        withLabel: {
          true: {
            display: "flex",
            alignItems: "center",
            gap: 3,
            border: "0 !important",
            _before: {
              content: '""',
              flex: 1,
              height: "1px",
              border: 0,
              borderColor: "currentColor"
            },
            _after: {
              content: '""',
              flex: 1,
              border: 0,
              borderColor: "currentColor"
            }
          }
        },
        labelPlacement: {
          start: {
            _before: {
              display: "none"
            }
          },
          end: {
            _after: {
              display: "none"
            }
          }
        }
      },
      compoundVariants: [
        {
          variants: {
            orientation: "vertical",
            withLabel: !0
          },
          style: {
            flexDirection: "column"
          }
        }
      ]
    },
    label: {
      baseStyle: {
        color: "common.foreground"
      }
    }
  },
  {
    orientation: "horizontal",
    labelPlacement: "start",
    withLabel: !1
  }
), Hl = (e) => {
  e = te("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, n, o] = x(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), r = Fo(() => e.children), i = () => !!r(), a = () => n.orientation === "vertical", s = _(() => {
    const u = a() ? "borderLeftStyle" : "borderTopStyle", g = a() ? "borderLeftWidth" : "borderTopWidth";
    return i() ? {
      _before: {
        [u]: t.variant,
        [g]: t.thickness
      },
      _after: {
        [u]: t.variant,
        [g]: t.thickness
      }
    } : {
      [u]: t.variant,
      [g]: t.thickness
    };
  }), {
    baseClasses: l,
    styleOverrides: c
  } = Ba("Divider", {
    get orientation() {
      return n.orientation;
    },
    get labelPlacement() {
      return n.labelPlacement;
    },
    get withLabel() {
      return i();
    },
    get styleConfigOverride() {
      return n.styleConfigOverride;
    },
    get unstyled() {
      return n.unstyled;
    }
  });
  return f(C.hr, b({
    get as() {
      return i() ? "div" : "hr";
    },
    get role() {
      return i() ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return a() ? "vertical" : "horizontal";
    },
    get class() {
      return w(l().root, t.class);
    },
    get __css() {
      return {
        ...c().root,
        ...s()
      };
    }
  }, o, {
    get children() {
      return f(F, {
        get when() {
          return i();
        },
        get children() {
          return f(C.span, b({
            get class() {
              return l().label;
            },
            get __css() {
              return c().label;
            }
          }, () => t.labelProps, {
            get children() {
              return r();
            }
          }));
        }
      });
    }
  }));
}, Aa = U((e) => ({
  root: {
    baseStyle: {
      zIndex: "modal",
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      outline: "none",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      placement: {
        top: {
          alignItems: "flex-start",
          justifyContent: "stretch"
        },
        right: {
          alignItems: "stretch",
          justifyContent: "flex-end"
        },
        bottom: {
          alignItems: "flex-end",
          justifyContent: "stretch"
        },
        left: {
          alignItems: "stretch",
          justifyContent: "flex-start"
        }
      }
    }
  },
  content: {
    baseStyle: {
      zIndex: "drawer",
      position: "relative",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      maxHeight: "100vh",
      width: "100%",
      outline: "none",
      boxShadow: "lg",
      backgroundColor: { light: "common.white", dark: "neutral.700" },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      size: {
        xs: { maxWidth: "xs" },
        sm: { maxWidth: "md" },
        md: { maxWidth: "lg" },
        lg: { maxWidth: "2xl" },
        xl: { maxWidth: "4xl" },
        full: {
          maxWidth: "100vw",
          minHeight: "100vh",
          "@supports(min-height: -webkit-fill-available)": {
            minHeight: "-webkit-fill-available"
          }
        }
      }
    },
    compoundVariants: [
      {
        variants: { placement: "top", size: "xs" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "sm" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "md" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "lg" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "xl" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "xs" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "sm" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "md" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "lg" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "xl" },
        style: { maxWidth: "100vw" }
      }
    ]
  },
  overlay: {
    baseStyle: {
      zIndex: "overlay",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: {
        light: q(e.vars.colors.neutral.darkChannel, 0.75),
        dark: q(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), So = ae();
function Ve() {
  const e = le(So);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const Ma = (e) => {
  const t = Ve();
  e = H({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [n, o] = x(e, ["class", "onClick"]);
  return f(Ft, b({
    get class() {
      return w("hope-Drawer-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), A(n.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, La = (e) => {
  const t = Ve(), [n, o] = x(e, ["class", "style", "onClick"]), r = (a) => {
    a.stopPropagation(), A(n.onClick, a);
  }, i = _(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return f(Ht, {
    autoFocus: !0,
    restoreFocus: !0,
    get trapFocus() {
      return t.trapFocus();
    },
    get initialFocusSelector() {
      return t.initialFocusSelector();
    },
    get restoreFocusSelector() {
      return t.restoreFocusSelector();
    },
    get class() {
      return t.baseClasses().root;
    },
    get __css() {
      return t.styleOverrides().root;
    },
    get onMouseDown() {
      return t.onContainerMouseDown;
    },
    get onKeyDown() {
      return t.onContainerKeyDown;
    },
    get onClick() {
      return t.onContainerClick;
    },
    get children() {
      return f(C.section, b({
        get id() {
          return t.contentId();
        },
        role: "dialog",
        "data-ismodal": "true",
        "aria-modal": "true",
        get ["aria-labelledby"]() {
          return t.headingId();
        },
        get ["aria-describedby"]() {
          return t.descriptionId();
        },
        get class() {
          return w(t.baseClasses().content, n.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: r
      }, o));
    }
  });
}, Da = (e) => {
  const t = Ve(), [n, o] = x(e, ["class"]);
  return X(() => {
    t.setDescriptionId(`${t.contentId()}-description`), O(() => t.setDescriptionId(void 0));
  }), f(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, o));
}, Pa = (e) => {
  const t = Ve(), [n, o] = x(e, ["class"]);
  return X(() => {
    t.setHeadingId(`${t.contentId()}-heading`), O(() => t.setHeadingId(void 0));
  }), f(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, o));
}, Wa = (e) => {
  const t = Ve(), [n, o] = x(e, ["class", "style", "children"]), r = _(() => ({
    ...n.style,
    ...t.overlayTransition.style()
  }));
  return f(C.div, b({
    role: "presentation",
    get class() {
      return w(t.baseClasses().overlay, n.class);
    },
    get style() {
      return r();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, o));
}, Fa = {
  top: {
    in: { transform: "translateY(0)" },
    out: { transform: "translateY(-100%)" }
  },
  right: {
    in: { transform: "translateX(0)" },
    out: { transform: "translateX(100%)" }
  },
  bottom: {
    in: { transform: "translateY(0)" },
    out: { transform: "translateY(100%)" }
  },
  left: {
    in: { transform: "translateX(0)" },
    out: { transform: "translateX(-100%)" }
  }
}, Ge = (e) => {
  e = te("Drawer", {
    id: `hope-drawer-${ot()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = x(e, [...ee, "size", "placement"]), {
    baseClasses: n,
    styleOverrides: o
  } = Aa("Drawer", t), {
    headingId: r,
    setHeadingId: i,
    descriptionId: a,
    setDescriptionId: s,
    overlayTransition: l,
    onContainerMouseDown: c,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: d
  } = so(e), m = st(() => e.isOpen, () => H({
    transition: Fa[e.placement],
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), h = {
    baseClasses: n,
    styleOverrides: o,
    isOpen: () => e.isOpen,
    contentTransition: m,
    overlayTransition: l,
    contentId: () => e.id,
    headingId: r,
    setHeadingId: i,
    descriptionId: a,
    setDescriptionId: s,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: c,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: d
  };
  return f(F, {
    get when() {
      return _(() => !!l.keepMounted())() && m.keepMounted();
    },
    get children() {
      return f(it, {
        get children() {
          return f(So.Provider, {
            value: h,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
Ge.Overlay = Wa;
Ge.Content = La;
Ge.CloseButton = Ma;
Ge.Heading = Pa;
Ge.Description = Da;
const jl = (e) => {
  const [t, n] = x(e, ["class", "direction", "wrap", "align", "justify"]);
  return f(C.div, b({
    get class() {
      return w("hope-Flex-root", t.class);
    },
    get __css() {
      return {
        display: "flex",
        flexDirection: t.direction,
        flexWrap: t.wrap,
        alignItems: t.align,
        justifyContent: t.justify
      };
    }
  }, n));
}, Rn = {
  display: "inline-block",
  fontSize: "xs",
  fontWeight: "normal",
  lineHeight: 4,
  textAlign: "start",
  wordBreak: "break-word",
  "&[data-disabled]": {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, Ha = U(
  {
    root: {
      baseStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }
    },
    label: {
      baseStyle: {
        display: "inline-block",
        color: "common.foreground",
        WebkitTapHighlightColor: "transparent",
        fontSize: "sm",
        fontWeight: "medium",
        lineHeight: 5,
        textAlign: "start",
        wordBreak: "break-word",
        "&[data-disabled]": {
          opacity: 0.4,
          cursor: "not-allowed"
        }
      },
      variants: {
        withRequiredIndicator: {
          true: {
            _after: {
              content: '"*"',
              marginLeft: "0.5",
              color: "danger.600",
              fontSize: "base",
              fontWeight: "medium",
              lineHeight: 5
            },
            _dark: {
              _after: {
                color: "danger.400"
              }
            }
          }
        }
      }
    },
    description: {
      baseStyle: {
        ...Rn,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...Rn,
        color: {
          light: "danger.600",
          dark: "danger.400"
        }
      }
    }
  },
  {
    withRequiredIndicator: !0
  }
), vo = ae();
function Nt() {
  return le(vo);
}
function Vt() {
  const e = Nt();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const ja = (e) => {
  const t = Vt(), [n, o] = x(e, ["id", "class", "__css"]), r = () => n.id ?? t.descriptionId();
  return he(() => t.setHasDescription(!0)), O(() => t.setHasDescription(!1)), f(C.div, b({
    get id() {
      return r();
    },
    get ["data-required"]() {
      return E(t.isRequired());
    },
    get ["data-disabled"]() {
      return E(t.isDisabled());
    },
    get ["data-readonly"]() {
      return E(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return E(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().description, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().description,
        ...n.__css
      };
    }
  }, o));
}, Na = (e) => {
  const t = Vt(), [n, o] = x(e, ["id", "class", "__css"]), r = () => n.id ?? t.errorId();
  return he(() => t.setHasError(!0)), O(() => t.setHasError(!1)), f(C.div, b({
    "aria-live": "polite",
    get id() {
      return r();
    },
    get ["data-required"]() {
      return E(t.isRequired());
    },
    get ["data-disabled"]() {
      return E(t.isDisabled());
    },
    get ["data-readonly"]() {
      return E(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return E(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().error, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().error,
        ...n.__css
      };
    }
  }, o));
}, Va = (e) => {
  const t = Vt(), [n, o] = x(e, ["id", "for", "class", "__css"]), r = () => n.id ?? t.labelId(), i = () => n.for ?? t.id();
  return f(C.label, b({
    get id() {
      return r();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return E(t.isRequired());
    },
    get ["data-disabled"]() {
      return E(t.isDisabled());
    },
    get ["data-readonly"]() {
      return E(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return E(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().label, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().label,
        ...n.__css
      };
    }
  }, o));
}, Gt = (e) => {
  e = te("FormControl", {
    id: `hope-form-control-${ot()}`
  }, e);
  const [t, n, o] = x(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...ee, "withRequiredIndicator"]), [r, i] = $(!1), [a, s] = $(!1), {
    baseClasses: l,
    styleOverrides: c
  } = Ha("FormControl", n), u = () => `${e.id}-description`, g = () => `${e.id}-error`, d = () => e.isInvalid, h = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: u,
    errorId: g,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: d,
    unstyled: () => n.unstyled,
    baseClasses: l,
    styleOverrides: c,
    hasDescription: r,
    setHasDescription: i,
    hasError: a,
    setHasError: s,
    mergeAriaDescribedBy: (S) => {
      const k = S ? [S] : [];
      return a() && d() && k.push(g()), r() && k.push(u()), k.join(" ") || void 0;
    }
  };
  return f(vo.Provider, {
    value: h,
    get children() {
      return f(C.div, b({
        role: "group",
        get ["data-required"]() {
          return E(h.isRequired());
        },
        get ["data-disabled"]() {
          return E(h.isDisabled());
        },
        get ["data-readonly"]() {
          return E(h.isReadOnly());
        },
        get ["data-invalid"]() {
          return E(h.isInvalid());
        },
        get class() {
          return w(l().root, t.class);
        },
        get __css() {
          return c().root;
        }
      }, o));
    }
  });
};
Gt.Label = Va;
Gt.Description = ja;
Gt.Error = Na;
const Ga = (e) => {
  const [t, n] = x(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return f(C.div, b({
    get class() {
      return w("hope-GridItem-root", t.class);
    },
    get __css() {
      return uo({
        gridArea: t.area,
        gridColumn: En(t.colSpan),
        gridRow: En(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, n));
};
function En(e) {
  return Q(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const wo = (e) => {
  const [t, n] = x(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return f(C.div, b({
    get class() {
      return w("hope-Grid-root", t.class);
    },
    get __css() {
      return {
        display: "grid",
        gridAutoFlow: t.autoFlow,
        gridAutoColumns: t.autoColumns,
        gridAutoRows: t.autoRows,
        gridTemplateAreas: t.templateAreas,
        gridTemplateColumns: t.templateColumns,
        gridTemplateRows: t.templateRows
      };
    }
  }, n));
};
wo.Item = Ga;
const Nl = (e) => {
  const [t, n] = x(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), o = be(), r = () => t.minChildWidth ? qa(t.minChildWidth, o.vars) : Ya(t.columns);
  return f(wo, b({
    get templateColumns() {
      return r();
    },
    get gap() {
      return t.spacing;
    },
    get columnGap() {
      return t.spacingX;
    },
    get rowGap() {
      return t.spacingY;
    }
  }, n));
};
function qa(e, t) {
  return Q(e, (n) => {
    const o = qn(n, "sizes", t);
    return lo(n) ? null : `repeat(auto-fit, minmax(${o}, 1fr))`;
  });
}
function Ya(e) {
  return Q(e, (t) => lo(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const Ka = U({
  root: {
    baseStyle: {
      margin: 0,
      fontSize: "inherit",
      fontWeight: "semibold",
      lineHeight: "inherit"
    },
    variants: {
      size: {
        xs: {
          fontSize: "xs",
          lineHeight: 4
        },
        sm: {
          fontSize: "sm",
          lineHeight: 5
        },
        base: {
          fontSize: "base",
          lineHeight: 6
        },
        lg: {
          fontSize: "lg",
          lineHeight: 7
        },
        xl: {
          fontSize: "xl",
          lineHeight: 7
        },
        "2xl": {
          fontSize: "2xl",
          lineHeight: 8
        },
        "3xl": {
          fontSize: "3xl",
          lineHeight: 9
        },
        "4xl": {
          fontSize: "4xl",
          lineHeight: 10
        },
        "5xl": {
          fontSize: "5xl",
          lineHeight: "none"
        },
        "6xl": {
          fontSize: "6xl",
          lineHeight: "none"
        },
        "7xl": {
          fontSize: "7xl",
          lineHeight: "none"
        },
        "8xl": {
          fontSize: "8xl",
          lineHeight: "none"
        },
        "9xl": {
          fontSize: "9xl",
          lineHeight: "none"
        }
      }
    }
  }
}), Vl = (e) => {
  e = te("Heading", {}, e);
  const [t, n, o] = x(e, ["as", "class", "level", "lineClamp"], [...ee, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = Ka("Heading", n), a = () => t.level ? `h${t.level}` : t.as, s = _(() => ({
    ...i().root,
    ...ro(t.lineClamp)
  }));
  return f(C.h2, b({
    get as() {
      return a();
    },
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return s();
    }
  }, o));
};
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
function Xa(e) {
  const [t, n] = $("pending"), o = () => e.ignoreFallback ? "loaded" : t();
  let r = null;
  const i = () => {
    r && (r.onload = null, r.onerror = null, r = null);
  }, a = () => {
    if (!e.src)
      return;
    i();
    const s = new Image();
    s.src = e.src, e.crossOrigin && (s.crossOrigin = e.crossOrigin), e.srcSet && (s.srcset = e.srcSet), e.sizes && (s.sizes = e.sizes), e.loading && (s.loading = e.loading), s.onload = (l) => {
      i(), n("loaded"), A(e.onLoad, l);
    }, s.onerror = (l) => {
      i(), n("failed"), A(e.onError, l);
    }, r = s;
  };
  return X(() => {
    n(e.src ? "loading" : "pending");
  }), oe(() => {
    e.ignoreFallback || (t() === "loading" && a(), O(() => {
      i();
    }));
  }), o;
}
const Gl = (e) => {
  const [t, n, o] = x(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), r = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = Xa(b(e, {
    get ignoreFallback() {
      return r();
    }
  })), a = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...r() ? n : {},
    ...o
  });
  return f(F, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return f(F, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return f(C.img, b({
            get src() {
              return t.fallbackSrc;
            },
            class: "hope-Image-placeholder"
          }, a));
        },
        get children() {
          return t.fallback;
        }
      });
    },
    get children() {
      return f(C.img, b({
        get src() {
          return t.src;
        },
        get srcSet() {
          return t.srcSet;
        },
        get crossOrigin() {
          return t.crossOrigin;
        },
        get loading() {
          return t.loading;
        },
        get class() {
          return w("hope-Image-root", t.class);
        }
      }, a));
    }
  });
}, ql = (e) => {
  const [t, n] = x(e, ["class"]);
  return f(C.img, b({
    get class() {
      return w("hope-Image-root", t.class);
    }
  }, n));
}, ko = {
  variant: "outlined",
  size: "md"
}, J = {
  sm: {
    minHeight: 8,
    fontSize: "sm",
    lineHeight: 5
  },
  md: {
    minHeight: 10,
    fontSize: "base",
    lineHeight: 6
  },
  lg: {
    minHeight: 12,
    fontSize: "lg",
    lineHeight: 7
  }
}, Ua = U(
  ({ vars: e }) => ({
    root: {
      baseStyle: {
        appearance: "none",
        position: "relative",
        width: "100%",
        minWidth: 0,
        outline: "none",
        borderRadius: "sm",
        border: "1px solid transparent",
        backgroundColor: "transparent",
        padding: 0,
        color: "common.foreground",
        fontSize: "base",
        lineHeight: "base",
        transitionProperty: "color, border-color, background-color, box-shadow 250ms",
        transitionDuration: "250ms",
        "&::placeholder": {
          color: "neutral.500",
          opacity: 1
        },
        "&[readonly]": {
          boxShadow: "none !important",
          userSelect: "all",
          cursor: "default"
        },
        "&:disabled": {
          opacity: 0.4,
          cursor: "not-allowed"
        },
        "&:focus": {
          boxShadow: {
            light: `0 0 0 3px ${q(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${q(e.colors.primary.darkChannel, 0.75)}`
          },
          borderColor: {
            light: "primary.400",
            dark: "primary.600"
          }
        },
        "&[aria-invalid=true]": {
          borderColor: {
            light: "danger.400",
            dark: "danger.600"
          }
        },
        "&[aria-invalid=true]:focus": {
          boxShadow: {
            light: `0 0 0 3px ${q(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${q(e.colors.danger.darkChannel, 0.75)}`
          }
        }
      },
      variants: {
        variant: {
          filled: {
            backgroundColor: {
              light: "neutral.100",
              dark: "neutral.800"
            }
          },
          outlined: {
            border: {
              light: `1px solid ${e.colors.neutral[300]}`,
              dark: `1px solid ${e.colors.neutral[700]}`
            },
            backgroundColor: {
              light: "transparent",
              dark: "rgb(255 255 255 / 0.02)"
            }
          },
          plain: {
            backgroundColor: "transparent"
          }
        },
        size: {
          sm: {
            ...J.sm,
            px: 2.5
          },
          md: {
            ...J.md,
            px: 3
          },
          lg: {
            ...J.lg,
            px: 4
          }
        }
      }
    }
  }),
  ko
), _o = ae();
function Io() {
  return le(_o);
}
function $o() {
  const e = Io();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const Yl = (e) => {
  const t = Nt(), n = Io();
  e = te("Input", {}, e);
  const [o, r, i] = x(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...ee, "variant", "size"]), {
    baseClasses: a,
    styleOverrides: s
  } = Ua("Input", {
    get variant() {
      return n?.variant() ?? r.variant;
    },
    get size() {
      return n?.size() ?? r.size;
    },
    get styleConfigOverride() {
      return r.styleConfigOverride;
    },
    get unstyled() {
      return n?.unstyled() ?? r.unstyled;
    }
  }), l = () => o.isRequired ?? n?.isRequired() ?? t?.isRequired(), c = () => o.isDisabled ?? n?.isDisabled() ?? t?.isDisabled(), u = () => o.isReadOnly ?? n?.isReadOnly() ?? t?.isReadOnly(), g = () => o.isInvalid ?? n?.isInvalid() ?? t?.isInvalid(), d = () => t?.mergeAriaDescribedBy(o["aria-describedby"]);
  return f(C.input, b({
    type: "text",
    get id() {
      return o.id ?? t?.id();
    },
    get required() {
      return l();
    },
    get disabled() {
      return c();
    },
    get readOnly() {
      return u();
    },
    get ["aria-invalid"]() {
      return Ys(g());
    },
    get ["aria-describedby"]() {
      return d();
    },
    get size() {
      return o.htmlSize;
    },
    get class() {
      return w(n?.baseClasses().input, a().root, o.class);
    },
    get __css() {
      return {
        ...n?.styleOverrides().input,
        ...s().root,
        ...o.__css
      };
    }
  }, i));
};
function vt(e) {
  return [
    {
      variants: {
        size: e.size,
        hasLeftSection: !0
      },
      style: {
        paddingInlineStart: e.paddingWithSection
      }
    },
    {
      variants: {
        size: e.size,
        hasRightSection: !0
      },
      style: {
        paddingInlineEnd: e.paddingWithSection
      }
    }
  ];
}
const Za = U(
  ({ vars: e }) => ({
    root: {
      baseStyle: {
        position: "relative",
        display: "flex",
        width: "100%"
      }
    },
    input: {
      baseStyle: {
        "&:focus": {
          zIndex: 1
        }
      },
      variants: {
        hasLeftAddon: {
          true: {
            borderLeftRadius: 0
          }
        },
        hasRightAddon: {
          true: {
            borderRightRadius: 0
          }
        }
      },
      compoundVariants: [
        ...vt({
          size: "sm",
          paddingWithSection: 8
        }),
        ...vt({
          size: "md",
          paddingWithSection: 10
        }),
        ...vt({
          size: "lg",
          paddingWithSection: 12
        })
      ]
    },
    section: {
      baseStyle: {
        position: "absolute",
        top: "0",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&[data-disabled]": {
          opacity: 0.4,
          cursor: "not-allowed"
        }
      },
      variants: {
        size: {
          sm: {
            ...J.sm,
            height: "100%",
            width: J.sm.minHeight
          },
          md: {
            ...J.md,
            height: "100%",
            width: J.md.minHeight
          },
          lg: {
            ...J.lg,
            height: "100%",
            width: J.lg.minHeight
          }
        }
      }
    },
    leftSection: {
      baseStyle: {
        insetInlineStart: 0
      }
    },
    rightSection: {
      baseStyle: {
        insetInlineEnd: 0
      }
    },
    addon: {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        flex: "0 0 auto",
        width: "auto",
        whiteSpace: "nowrap",
        borderRadius: "sm",
        border: "1px solid transparent",
        backgroundColor: {
          light: "neutral.100",
          dark: "neutral.800"
        },
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        },
        "&[data-disabled]": {
          opacity: 0.4,
          cursor: "not-allowed"
        }
      },
      variants: {
        variant: {
          outlined: {
            border: {
              light: `1px solid ${e.colors.neutral[300]}`,
              dark: `1px solid ${e.colors.neutral[700]}`
            }
          },
          plain: {
            backgroundColor: {
              light: "transparent",
              dark: "transparent"
            }
          }
        },
        size: {
          sm: {
            ...J.sm,
            px: 2.5
          },
          md: {
            ...J.md,
            px: 3
          },
          lg: {
            ...J.lg,
            px: 4
          }
        }
      }
    },
    leftAddon: {
      baseStyle: {
        marginEnd: "-1px"
      },
      variants: {
        variant: {
          filled: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderInlineEndColor: "transparent"
          },
          outlined: {
            borderRightRadius: 0,
            borderInlineEndColor: "transparent"
          }
        }
      }
    },
    rightAddon: {
      baseStyle: {
        marginStart: "-1px"
      },
      variants: {
        variant: {
          filled: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            borderInlineStartColor: "transparent"
          },
          outlined: {
            borderLeftRadius: 0,
            borderInlineStartColor: "transparent"
          }
        }
      }
    }
  }),
  ko
), Ro = (e) => {
  const t = $o(), [n, o] = x(e, ["class", "__css", "addonPlacement"]), r = _(() => {
    switch (n.addonPlacement) {
      case "left":
        return {
          className: t.baseClasses().leftAddon,
          styleOverride: t.styleOverrides().leftAddon
        };
      case "right":
        return {
          className: t.baseClasses().rightAddon,
          styleOverride: t.styleOverrides().rightAddon
        };
    }
  });
  return he(() => {
    switch (n.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), O(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), O(() => t.setHasRightAddon(!1));
        break;
    }
  }), f(C.div, b({
    get ["data-required"]() {
      return E(t.isRequired());
    },
    get ["data-disabled"]() {
      return E(t.isDisabled());
    },
    get ["data-readonly"]() {
      return E(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return E(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().addon, r().className, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().addon,
        ...r().styleOverride,
        ...n.__css
      };
    }
  }, o));
}, Ja = (e) => f(Ro, b({
  addonPlacement: "left"
}, e)), Qa = (e) => f(Ro, b({
  addonPlacement: "right"
}, e)), Eo = (e) => {
  const t = $o(), [n, o] = x(e, ["class", "__css", "sectionPlacement"]), r = _(() => {
    switch (n.sectionPlacement) {
      case "left":
        return {
          className: t.baseClasses().leftSection,
          styleOverride: t.styleOverrides().leftSection
        };
      case "right":
        return {
          className: t.baseClasses().rightSection,
          styleOverride: t.styleOverrides().rightSection
        };
    }
  });
  return he(() => {
    switch (n.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), O(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), O(() => t.setHasRightSection(!1));
        break;
    }
  }), f(C.div, b({
    get ["data-required"]() {
      return E(t.isRequired());
    },
    get ["data-disabled"]() {
      return E(t.isDisabled());
    },
    get ["data-readonly"]() {
      return E(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return E(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().section, r().className, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().section,
        ...r().styleOverride,
        ...n.__css
      };
    }
  }, o));
}, el = (e) => f(Eo, b({
  sectionPlacement: "left"
}, e)), tl = (e) => f(Eo, b({
  sectionPlacement: "right"
}, e)), ft = (e) => {
  const t = Nt();
  e = te("InputGroup", {}, e);
  const [n, o, r] = x(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...ee, "variant", "size"]), [i, a] = $(!1), [s, l] = $(!1), [c, u] = $(!1), [g, d] = $(!1), {
    baseClasses: m,
    styleOverrides: h
  } = Za("InputGroup", {
    get variant() {
      return o.variant;
    },
    get size() {
      return o.size;
    },
    get hasLeftSection() {
      return i();
    },
    get hasRightSection() {
      return s();
    },
    get hasLeftAddon() {
      return c();
    },
    get hasRightAddon() {
      return g();
    },
    get styleConfigOverride() {
      return o.styleConfigOverride;
    },
    get unstyled() {
      return o.unstyled;
    }
  }), S = {
    isRequired: () => e.isRequired ?? t?.isRequired(),
    isDisabled: () => e.isDisabled ?? t?.isDisabled(),
    isReadOnly: () => e.isReadOnly ?? t?.isReadOnly(),
    isInvalid: () => e.isInvalid ?? t?.isInvalid(),
    variant: () => o.variant,
    size: () => o.size,
    unstyled: () => o.unstyled,
    baseClasses: m,
    styleOverrides: h,
    setHasLeftSection: a,
    setHasRightSection: l,
    setHasLeftAddon: u,
    setHasRightAddon: d
  };
  return f(_o.Provider, {
    value: S,
    get children() {
      return f(C.div, b({
        get ["data-required"]() {
          return E(S.isRequired());
        },
        get ["data-disabled"]() {
          return E(S.isDisabled());
        },
        get ["data-readonly"]() {
          return E(S.isReadOnly());
        },
        get ["data-invalid"]() {
          return E(S.isInvalid());
        },
        get class() {
          return w(m().root, n.class);
        },
        get __css() {
          return h().root;
        }
      }, r));
    }
  });
};
ft.LeftAddon = Ja;
ft.RightAddon = Qa;
ft.LeftSection = el;
ft.RightSection = tl;
const nl = U({
  root: {
    baseStyle: {
      borderRadius: "md",
      borderStyle: "solid",
      borderWidth: "1px",
      borderBottomWidth: "3px",
      px: "0.4em",
      color: "common.foreground",
      fontFamily: "mono",
      fontSize: "0.8em",
      fontWeight: "bold",
      lineHeight: "normal",
      whiteSpace: "nowrap",
      borderColor: { light: "neutral.300", dark: "neutral.600" },
      backgroundColor: { light: "neutral.100", dark: "neutral.800" }
    }
  }
}), Kl = (e) => {
  const [t, n, o] = x(e, ["class"], ee), {
    baseClasses: r,
    styleOverrides: i
  } = nl("Kbd", n);
  return f(C.kbd, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, o));
}, ol = U((e) => ({
  root: {
    baseStyle: {
      zIndex: "popover",
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      outline: "none",
      boxShadow: "md",
      border: `1px solid ${e.vars.colors.neutral[300]}`,
      borderColor: { dark: "neutral.600" },
      borderRadius: "sm",
      backgroundColor: { light: "common.white", dark: "neutral.700" },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    }
  },
  arrow: {
    baseStyle: {
      position: "absolute",
      boxSize: "1em",
      pointerEvents: "none",
      "& svg": {
        stroke: "neutral.300",
        fill: "common.white"
      },
      _dark: {
        "& svg": {
          stroke: "neutral.600",
          fill: "neutral.700"
        }
      }
    }
  },
  heading: {},
  description: {}
})), Oo = ae();
function ye() {
  const e = le(Oo);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const rl = (e) => {
  const t = ye(), [n, o] = x(e, ["ref"]);
  return f(C.div, b({
    ref(r) {
      const i = Ee(t.setAnchorRef, n.ref);
      typeof i == "function" && i(r);
    }
  }, o));
}, il = (e) => {
  const t = ye();
  e = H({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [n, o] = x(e, ["class", "onClick"]);
  return f(Ft, b({
    get class() {
      return w("hope-Popover-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), A(n.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, sl = /* @__PURE__ */ Re('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>'), To = 30, ue = To / 2, al = {
  top: `rotate(180 ${ue} ${ue})`,
  right: `rotate(-90 ${ue} ${ue})`,
  bottom: `rotate(0 ${ue} ${ue})`,
  left: `rotate(90 ${ue} ${ue})`
}, ll = (e) => {
  const t = ye(), [n, o] = x(e, ["ref", "class", "style", "children"]), r = () => t.currentPlacement().split("-")[0], i = cl(t.contentRef), a = () => i()?.getPropertyValue("background-color") || "none", s = () => i()?.getPropertyValue(`border-${r()}-color`) || "none", l = () => i()?.getPropertyValue(`border-${r()}-width`) || "0px", c = () => parseInt(l()) * 2 * (To / t.arrowSize());
  return f(C.div, b({
    ref(u) {
      const g = Ee(t.setArrowRef, n.ref);
      typeof g == "function" && g(u);
    },
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: a(),
        stroke: s(),
        "stroke-width": c(),
        ...n.style
      };
    },
    get class() {
      return w(t.baseClasses().arrow, n.class);
    },
    get __css() {
      return t.styleOverrides().arrow;
    }
  }, o, {
    get children() {
      const u = sl.cloneNode(!0), g = u.firstChild;
      return g.firstChild.nextSibling, oe(() => rt(g, "transform", al[r()])), u;
    }
  }));
};
function cl(e) {
  const [t, n] = $();
  return oe(() => {
    const o = e();
    o && n(Vs(o).getComputedStyle(o));
  }), t;
}
const dl = (e) => {
  const t = ye(), [n, o] = x(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), r = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", a = (g) => {
    g.stopPropagation(), A(n.onKeyDown, g), A(t.onContentKeyDown, g);
  }, s = (g) => {
    A(n.onFocusOut, g), A(t.onContentFocusOut, g);
  }, l = (g) => {
    A(n.onMouseEnter, g), i() && t.onContentMouseEnter();
  }, c = (g) => {
    A(n.onMouseLeave, g), i() && A(t.onContentMouseLeave, g);
  }, u = _(() => ({
    ...n.style,
    ...t.popoverTransition.style()
  }));
  return f(F, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return f(it, {
        get children() {
          return f(Ht, b({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return r();
            },
            ref(g) {
              const d = Ee(t.setContentRef, n.ref);
              typeof d == "function" && d(g);
            },
            get id() {
              return t.popoverId();
            },
            get role() {
              return i() ? "tooltip" : "dialog";
            },
            get ["aria-labelledby"]() {
              return t.headingId();
            },
            get ["aria-describedby"]() {
              return t.descriptionId();
            },
            get trapFocus() {
              return t.trapFocus();
            },
            get initialFocusSelector() {
              return t.initialFocusSelector();
            },
            get restoreFocusSelector() {
              return t.restoreFocusSelector();
            },
            get class() {
              return w(t.baseClasses().root, n.class);
            },
            get style() {
              return u();
            },
            get __css() {
              return t.styleOverrides().root;
            },
            onKeyDown: a,
            onFocusOut: s,
            onMouseEnter: l,
            onMouseLeave: c
          }, o, {
            get children() {
              return [f(F, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return f(ll, {});
                }
              }), _(() => n.children)];
            }
          }));
        }
      });
    }
  });
}, ul = (e) => {
  const t = ye(), [n, o] = x(e, ["class"]);
  return X(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), O(() => t.setDescriptionId(void 0));
  }), f(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, o));
}, gl = (e) => {
  const t = ye(), [n, o] = x(e, ["class"]);
  return X(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), O(() => t.setHeadingId(void 0));
  }), f(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, o));
}, fl = (e) => {
  const t = ye(), [n, o] = x(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), r = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", a = (d) => {
    A(n.onClick, d), r() && (d.stopPropagation(), t.onTriggerClick());
  }, s = (d) => {
    A(n.onKeyDown, d), i() && (d.stopPropagation(), A(t.onTriggerKeyDown, d));
  }, l = (d) => {
    A(n.onFocus, d), i() && t.onTriggerFocus();
  }, c = (d) => {
    A(n.onBlur, d), i() && A(t.onTriggerBlur, d);
  }, u = (d) => {
    A(n.onMouseEnter, d), i() && t.onTriggerMouseEnter();
  }, g = (d) => {
    A(n.onMouseLeave, d), i() && t.onTriggerMouseLeave();
  };
  return f(C.button, b({
    ref(d) {
      const m = Ee(t.setTriggerRef, n.ref);
      typeof m == "function" && m(d);
    },
    get id() {
      return `${t.popoverId()}-trigger`;
    },
    type: "button",
    "aria-haspopup": "dialog",
    get ["aria-controls"]() {
      return t.popoverId();
    },
    get ["aria-expanded"]() {
      return t.isOpen();
    },
    onClick: a,
    onKeyDown: s,
    onFocus: l,
    onBlur: c,
    onMouseEnter: u,
    onMouseLeave: g
  }, o));
};
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */
function On(e) {
  const { x: t = 0, y: n = 0, width: o = 0, height: r = 0 } = e ?? {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, n, o, r);
  const i = {
    x: t,
    y: n,
    width: o,
    height: r,
    top: n,
    right: t + o,
    bottom: n + r,
    left: t
  };
  return { ...i, toJSON: () => i };
}
function ml(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const o = t(e);
      return o ? On(o) : e ? e.getBoundingClientRect() : On();
    }
  };
}
const Oe = (e) => {
  e = te("Popover", {
    getAnchorRect: (z) => z?.getBoundingClientRect(),
    id: `hope-popover-${ot()}`,
    triggerMode: "click",
    withArrow: !0,
    arrowSize: 24,
    placement: "bottom",
    offset: 12,
    arrowPadding: 12,
    openDelay: 200,
    closeDelay: 200,
    closeOnBlur: !0,
    closeOnEsc: !0,
    trapFocus: !1
  }, e);
  const [t] = x(e, [...ee]), {
    baseClasses: n,
    styleOverrides: o
  } = ol("Popover", t), [r, i] = $(), [a, s] = $(), [l, c] = $(), [u, g] = $(), [d, m] = $(!1), [h, S] = $(e.placement), [k, y] = $(), [v, V] = $(), I = kr({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (z) => e.onOpenChange?.(z)
  }), Z = st(() => I.isOpen(), () => H({
    transition: "pop",
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.transitionOptions ?? {})), M = () => {
    const z = ml(r() ?? a(), e.getAnchorRect), Y = u(), K = l();
    return {
      anchorEl: z,
      arrowEl: Y,
      floatingEl: K
    };
  };
  async function T() {
    const {
      anchorEl: z,
      arrowEl: Y,
      floatingEl: K
    } = M();
    if (!z || !K)
      return;
    z.getBoundingClientRect();
    const Be = [jo(e.offset), No({
      padding: e.overflowPadding
    }), Vo({
      padding: e.overflowPadding
    }), Go({
      padding: e.overflowPadding,
      apply({
        rects: Ye
      }) {
        const Ke = Math.round(Ye.reference.width);
        e.hasSameWidth && (K.style.width = `${Ke}px`);
      }
    })];
    Y && Be.push(qo({
      element: Y,
      padding: e.arrowPadding
    })), Be.push(Yo());
    const ne = await Ko(z, K, {
      placement: e.placement,
      middleware: Be
    });
    if (ne.placement !== h() && S(ne.placement), !!K && (Object.assign(K.style, {
      left: `${Math.round(ne.x)}px`,
      top: `${Math.round(ne.y)}px`,
      visibility: ne.middlewareData.hide?.referenceHidden ? "hidden" : "visible"
    }), Y && ne.middlewareData.arrow)) {
      const {
        x: Ye,
        y: Ke
      } = ne.middlewareData.arrow, Lo = ne.placement.split("-")[0];
      Object.assign(Y.style, {
        left: Ye != null ? `${Ye}px` : "",
        top: Ke != null ? `${Ke}px` : "",
        [Lo]: "100%"
      });
    }
  }
  let L, D;
  const P = () => {
    I.toggle();
  }, j = (z) => {
    z.key === "Escape" && I.close();
  }, ce = () => {
    L == null && I.open();
  }, xe = (z) => {
    const Y = yn(z), K = !et(l(), Y);
    I.isOpen() && e.closeOnBlur && K && I.close();
  }, Ce = () => {
    m(!0), L = window.setTimeout(() => {
      I.open(), T();
    }, e.openDelay);
  }, qe = () => {
    m(!1), L && (clearTimeout(L), L = void 0), D = window.setTimeout(() => {
      d() || I.close();
    }, e.closeDelay);
  }, mt = (z) => {
    e.closeOnEsc && z.key === "Escape" && I.close();
  }, Te = (z) => {
    const Y = yn(z), K = et(l(), Y), Be = et(a(), Y), ne = !K && !Be;
    I.isOpen() && e.closeOnBlur && ne && I.close();
  }, ze = () => {
    m(!0);
  }, Bo = (z) => {
    z.relatedTarget !== null && (m(!1), D = window.setTimeout(I.close, e.closeDelay));
  }, Ao = () => {
    I.close();
  };
  X(() => {
    const {
      anchorEl: z,
      floatingEl: Y
    } = M();
    if (!z || !Y)
      return;
    const K = Ho(z, Y, T, {
      elementResize: typeof ResizeObserver == "function"
    });
    O(K);
  }), O(() => {
    pe || (window.clearTimeout(L), window.clearTimeout(D));
  });
  const Mo = {
    baseClasses: n,
    styleOverrides: o,
    isOpen: I.isOpen,
    popoverTransition: Z,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: h,
    popoverId: () => e.id,
    headingId: k,
    setHeadingId: y,
    descriptionId: v,
    setDescriptionId: V,
    contentRef: l,
    setContentRef: c,
    setArrowRef: g,
    setAnchorRef: i,
    setTriggerRef: s,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: P,
    onTriggerKeyDown: j,
    onTriggerFocus: ce,
    onTriggerBlur: xe,
    onTriggerMouseEnter: Ce,
    onTriggerMouseLeave: qe,
    onContentKeyDown: mt,
    onContentFocusOut: Te,
    onContentMouseEnter: ze,
    onContentMouseLeave: Bo,
    onCloseButtonClick: Ao
  };
  return f(Oo.Provider, {
    value: Mo,
    get children() {
      return Js(e.children, I);
    }
  });
};
Oe.Trigger = fl;
Oe.Anchor = rl;
Oe.Content = dl;
Oe.CloseButton = il;
Oe.Heading = gl;
Oe.Description = ul;
function Xl(e) {
  const [t, n] = x(e, ["children", "withinPortal"]);
  return f(F, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return f(it, b(n, {
        get children() {
          return t.children;
        }
      }));
    }
  });
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/spacer.tsx
 */
const Ul = C("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), zo = (e) => {
  e = H({
    align: "center"
  }, e);
  const [t, n] = x(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return f(C.div, b({
    get class() {
      return w("hope-Stack-root", t.class);
    },
    get __css() {
      return uo({
        display: "flex",
        flexDirection: t.direction,
        flexWrap: t.wrap,
        alignItems: t.align,
        justifyContent: t.justify,
        gap: t.spacing,
        columnGap: t.spacingX,
        rowGap: t.spacingY
      });
    }
  }, n));
}, Zl = (e) => {
  e = H({
    reverse: !1
  }, e);
  const [t, n] = x(e, ["reverse"]);
  return f(zo, b(n, {
    get direction() {
      return Q(t.reverse, (o) => o ? "row-reverse" : "row");
    }
  }));
}, Jl = (e) => {
  e = H({
    reverse: !1
  }, e);
  const [t, n] = x(e, ["reverse"]);
  return f(zo, b(n, {
    get direction() {
      return Q(t.reverse, (o) => o ? "column-reverse" : "column");
    }
  }));
}, hl = U({
  root: {
    baseStyle: {
      margin: 0
    },
    variants: {
      size: {
        xs: {
          fontSize: "xs",
          lineHeight: 4
        },
        sm: {
          fontSize: "sm",
          lineHeight: 5
        },
        base: {
          fontSize: "base",
          lineHeight: 6
        },
        lg: {
          fontSize: "lg",
          lineHeight: 7
        },
        xl: {
          fontSize: "xl",
          lineHeight: 7
        },
        "2xl": {
          fontSize: "2xl",
          lineHeight: 8
        },
        "3xl": {
          fontSize: "3xl",
          lineHeight: 9
        },
        "4xl": {
          fontSize: "4xl",
          lineHeight: 10
        },
        "5xl": {
          fontSize: "5xl",
          lineHeight: "none"
        },
        "6xl": {
          fontSize: "6xl",
          lineHeight: "none"
        },
        "7xl": {
          fontSize: "7xl",
          lineHeight: "none"
        },
        "8xl": {
          fontSize: "8xl",
          lineHeight: "none"
        },
        "9xl": {
          fontSize: "9xl",
          lineHeight: "none"
        }
      }
    }
  }
}), Ql = (e) => {
  e = te("Text", {}, e);
  const [t, n, o] = x(e, ["class", "lineClamp"], [...ee, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = hl("Text", n), a = _(() => ({
    ...i().root,
    ...ro(t.lineClamp)
  }));
  return f(C.p, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return a();
    }
  }, o));
};
export {
  Al as Anchor,
  Ml as AspectRatio,
  Ll as Box,
  Ta as Button,
  Dl as ButtonGroup,
  fe as COLOR_MODE_CLASSNAMES,
  ut as COLOR_MODE_STORAGE_KEY,
  Wl as Center,
  Ft as CloseButton,
  eo as ColorModeContext,
  Ps as ColorModeProvider,
  Tl as ColorModeScript,
  Fl as Container,
  Dt as DEFAULT_THEME,
  es as DEFAULT_THEME_MAP,
  Cl as DEFAULT_TRANSITIONS_NAMES,
  Hl as Divider,
  Ge as Drawer,
  Ma as DrawerCloseButton,
  La as DrawerContent,
  Da as DrawerDescription,
  Pa as DrawerHeading,
  Wa as DrawerOverlay,
  jl as Flex,
  Ht as FocusTrapRegion,
  Gt as FormControl,
  vo as FormControlContext,
  ja as FormControlDescription,
  Na as FormControlError,
  Va as FormControlLabel,
  wo as Grid,
  Ga as GridItem,
  Zl as HStack,
  Vl as Heading,
  Bl as HopeProvider,
  ra as Icon,
  Pl as IconButton,
  Gl as Image,
  ql as Img,
  Yl as Input,
  ft as InputGroup,
  Ja as InputGroupLeftAddon,
  el as InputGroupLeftSection,
  Qa as InputGroupRightAddon,
  tl as InputGroupRightSection,
  Kl as Kbd,
  Ne as Modal,
  da as ModalCloseButton,
  ga as ModalContent,
  fa as ModalDescription,
  ma as ModalHeading,
  ha as ModalOverlay,
  Xl as OptionalPortal,
  Oe as Popover,
  rl as PopoverAnchor,
  ll as PopoverArrow,
  il as PopoverCloseButton,
  dl as PopoverContent,
  ul as PopoverDescription,
  gl as PopoverHeading,
  fl as PopoverTrigger,
  ee as STYLE_CONFIG_PROP_NAMES,
  Nl as SimpleGrid,
  Ul as Spacer,
  zo as Stack,
  Ql as Text,
  ss as ThemeProvider,
  Jl as VStack,
  ua as VisuallyHidden,
  zl as VisuallyHiddenInput,
  wi as arrayToObjectNotation,
  Zn as computeStyleOptions,
  El as cookieStorageManager,
  Ol as cookieStorageManagerSSR,
  yl as createControllableArraySignal,
  wr as createControllableBooleanSignal,
  Ln as createControllableSignal,
  to as createCookieStorageManager,
  kr as createDisclosure,
  wl as createGlobalStyles,
  kl as createHopeComponent,
  po as createIcon,
  Xa as createImageLoadingStatus,
  xl as createInteractOutside,
  Ts as createLocalStorageManager,
  we as createPalette,
  Ir as createPreventScroll,
  Mr as createReducedMotion,
  U as createStyleConfig,
  _l as createStyles,
  Lr as createTagName,
  st as createTransition,
  vl as extendTheme,
  $l as fadeIn,
  Pt as focusStyles,
  Jn as getSelectedVariantClassNames,
  C as hope,
  Il as injectCriticalStyle,
  Si as isColorModeObjectLike,
  ki as isResponsiveObjectLike,
  jn as keyframes,
  ro as lineClamp,
  zs as localStorageManager,
  Q as mapResponsive,
  H as mergeDefaultProps,
  te as mergeThemeProps,
  vi as objectToArrayNotation,
  Fr as pack,
  qn as resolveTokenValue,
  q as rgba,
  Es as spin,
  Ra as useButtonGroupContext,
  Os as useColorMode,
  Rl as useColorModeValue,
  is as useComponentTheme,
  Nt as useFormControlContext,
  Vt as useRequiredFormControlContext,
  be as useTheme,
  ya as watchModals
};
