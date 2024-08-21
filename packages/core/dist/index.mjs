import { createSignal as w, sharedConfig as sn, onMount as se, getOwner as vt, onCleanup as I, DEV as rr, createRoot as an, createMemo as _, untrack as or, createEffect as H, on as ln, mergeProps as qe, createContext as Q, useContext as J, splitProps as p, Show as $, createUniqueId as Ye, children as ir, createRenderEffect as cn } from "solid-js";
import { isServer as Z, createComponent as c, useAssets as sr, ssr as me, ssrHydrationKey as fe, Dynamic as ar, mergeProps as h, ssrAttribute as Ee, escape as Se, Portal as Ke } from "solid-js/web";
import { createStore as lr } from "solid-js/store";
import { createStitches as cr } from "@stitches/core";
import { clsx as v } from "clsx";
import { autoUpdate as dr, offset as ur, flip as gr, shift as mr, size as fr, arrow as hr, hide as pr, computePosition as br } from "@floating-ui/dom";
var yr = !Z, vr = yr && !!rr, Cr = vr ? (e) => vt() ? I(e) : e : I;
function xr(e, t, n) {
  if (Z)
    return w(e, n);
  if (sn.context) {
    const [r, o] = w(e, n);
    return se(() => o(() => t())), [r, o];
  }
  return w(t(), n);
}
function wr(e, t, n, r) {
  return e.addEventListener(t, n, r), Cr(e.removeEventListener.bind(e, t, n, r));
}
function Sr(e, t = vt()) {
  let n = 0, r, o;
  return () => (n++, I(() => {
    n--, queueMicrotask(() => {
      !n && o && (o(), o = r = void 0);
    });
  }), o || an((i) => r = e(o = i), t), r);
}
function kr(e) {
  const t = vt(), n = Sr(e, t);
  return () => Z || sn.context ? an(e, t) : n();
}
function dn(e, t = !1) {
  if (Z)
    return () => t;
  const n = window.matchMedia(e), [r, o] = xr(t, () => n.matches);
  return wr(n, "change", () => o(n.matches)), r;
}
function _r(e) {
  return dn("(prefers-color-scheme: dark)", e);
}
_r.bind(void 0, !1);
function mt(e) {
  return (...t) => {
    for (const n of e)
      n && n(...t);
  };
}
var E = (e) => typeof e == "function" && !e.length ? e() : e;
function Ir(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function un(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function ft(e) {
  var t;
  return Or(e) && (t = e.ownerDocument) != null ? t : document;
}
function Or(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Rr(e) {
  const t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function gn(e) {
  for (; e && !Rr(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function ot(e, t) {
  const n = e.target;
  return e.button > 0 || n && !ft(n).body.contains(n) ? !1 : !(t != null && t.contains(n));
}
function Ct(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) == null ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Er() {
  return Ct(/^Mac/i);
}
function Tr() {
  return Ct(/^iPhone/i);
}
function zr() {
  return Ct(/^iPad/i) || Er() && navigator.maxTouchPoints > 1;
}
function $r() {
  return Tr() || zr();
}
function $t(e) {
  return un(e) ? e : void 0;
}
function mn(e) {
  var t;
  const [n, r] = w((t = e.defaultValue) == null ? void 0 : t.call(e)), o = _(() => {
    var s;
    return ((s = e.value) == null ? void 0 : s.call(e)) !== void 0;
  }), i = _(() => {
    var s;
    return o() ? (s = e.value) == null ? void 0 : s.call(e) : n();
  });
  return [i, (s) => {
    or(() => {
      var a;
      const l = Ir(s, i());
      return Object.is(l, i()) || (o() || r(l), (a = e.onChange) == null || a.call(e, l)), l;
    });
  }];
}
function Dr(e) {
  const [t, n] = mn(e);
  return [() => {
    var r;
    return (r = t()) != null ? r : !1;
  }, n];
}
function ea(e) {
  const [t, n] = mn(e);
  return [() => {
    var r;
    return (r = t()) != null ? r : [];
  }, n];
}
function Lr(e = {}) {
  const [t, n] = Dr({
    value: () => E(e.isOpen),
    defaultValue: () => !!E(e.defaultIsOpen),
    onChange: (i) => {
      var s;
      return (s = e.onOpenChange) == null ? void 0 : s.call(e, i);
    }
  }), r = () => {
    n(!0);
  }, o = () => {
    n(!1);
  };
  return {
    isOpen: t,
    open: r,
    close: o,
    toggle: () => {
      t() ? o() : r();
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
function ta(e, t) {
  const [n, r] = w(!1);
  H(() => {
    if (E(e.isDisabled))
      return;
    const o = (s) => {
      var a;
      Dt(s, t()) && ((a = e.onInteractOutsideStart) == null || a.call(e, s), r(!0));
    }, i = (s) => {
      var a;
      n() && Dt(s, t()) && (r(!1), (a = e.onInteractOutside) == null || a.call(e, s));
    };
    document.addEventListener("pointerdown", o, !0), document.addEventListener("pointerup", i, !0), I(() => {
      document.removeEventListener("pointerdown", o, !0), document.removeEventListener("pointerup", i, !0);
    });
  });
}
function Dt(e, t) {
  if (e.button > 0)
    return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (!n || !n.documentElement.contains(e.target))
      return !1;
  }
  return !(t != null && t.contains(e.target));
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */
const it = typeof window < "u" && window.visualViewport, Ar = /* @__PURE__ */ new Set([
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
function Mr(e) {
  H(
    ln(
      () => E(e.isEnabled),
      (t) => {
        !t || ($r() ? I(Hr()) : I(Fr()));
      }
    )
  );
}
function Fr() {
  return mt([
    ze(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    ze(document.documentElement, "overflow", "hidden")
  ]);
}
function Hr() {
  let e, t = 0;
  const n = (u) => {
    e = gn(u.target), !(e === document.documentElement && e === document.body) && (t = u.changedTouches[0].pageY);
  }, r = (u) => {
    if (e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    const m = u.changedTouches[0].pageY, f = e.scrollTop, y = e.scrollHeight - e.clientHeight;
    (f <= 0 && m > t || f >= y && m < t) && u.preventDefault(), t = m;
  }, o = (u) => {
    const m = u.target;
    At(m) && m !== document.activeElement && (u.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, i = (u) => {
    const m = u.target;
    At(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", it && (it.height < window.innerHeight ? requestAnimationFrame(() => {
        Lt(m);
      }) : it.addEventListener("resize", () => Lt(m), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, a = window.pageXOffset, l = window.pageYOffset, g = mt([
    ze(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    ze(document.documentElement, "overflow", "hidden"),
    ze(document.body, "marginTop", `-${l}px`)
  ]);
  window.scrollTo(0, 0);
  const d = mt([
    Ie(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "touchmove", r, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "touchend", o, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "focus", i, !0),
    Ie(window, "scroll", s)
  ]);
  return () => {
    g(), d(), window.scrollTo(a, l);
  };
}
function ze(e, t, n) {
  const r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Ie(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Lt(e) {
  const t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    const n = gn(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      const r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top;
      o > r + e.clientHeight && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function At(e) {
  return e instanceof HTMLInputElement && !Ar.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Br(e, t) {
  return dn("(prefers-reduced-motion: reduce)", e);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function Pr(e, t) {
  const [n, r] = w($t(t == null ? void 0 : t()));
  return H(() => {
    var o;
    r(((o = e()) == null ? void 0 : o.tagName.toLowerCase()) || $t(t == null ? void 0 : t()));
  }), n;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const Oe = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, ht = {
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
    ...Oe,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...Oe,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...Oe,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...Oe,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...Oe,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, na = Object.keys(ht);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const Mt = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function Wr(e) {
  const t = {
    "transition-duration": `${e.duration}ms`,
    "transition-timing-function": e.easing
  };
  if (un(e.transition)) {
    if (!(e.transition in ht))
      return {};
    const n = ht[e.transition];
    return {
      "transition-property": Ft(n),
      ...t,
      ...n.common,
      ...n[Mt[e.phase]]
    };
  }
  return {
    "transition-property": Ft(e.transition),
    ...t,
    ...e.transition.common,
    ...e.transition[Mt[e.phase]]
  };
}
function Ft(e) {
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
const Ht = 250, Bt = 10, Pt = "ease";
function Xe(e, t) {
  t = qe(
    {
      transition: "fade",
      duration: Ht,
      delay: Bt,
      easing: Pt,
      get exitDuration() {
        return E(t).duration || Ht;
      },
      get exitDelay() {
        return E(t).delay || Bt;
      },
      get exitEasing() {
        return E(t).easing || Pt;
      }
    },
    t
  );
  const n = Br(), [r, o] = w(n() ? 0 : E(t).duration), [i, s] = w(
    E(e) ? "afterEnter" : "afterExit"
  ), [a, l] = w(E(t).easing);
  let g = -1;
  const d = (f) => {
    const y = f ? E(t).onBeforeEnter : E(t).onBeforeExit, C = f ? E(t).onAfterEnter : E(t).onAfterExit;
    s(f ? "beforeEnter" : "beforeExit"), window.clearTimeout(g);
    const S = o(
      n() ? 0 : f ? E(t).duration : E(t).exitDuration
    );
    if (l(f ? E(t).easing : E(t).exitEasing), S === 0) {
      y == null || y(), C == null || C(), s(f ? "afterEnter" : "afterExit");
      return;
    }
    const z = n() ? 0 : f ? E(t).delay : E(t).exitDelay, F = window.setTimeout(() => {
      y == null || y(), s(f ? "enter" : "exit");
    }, z);
    g = window.setTimeout(() => {
      window.clearTimeout(F), C == null || C(), s(f ? "afterEnter" : "afterExit");
    }, z + S);
  }, u = _(
    () => Wr({
      transition: E(t).transition,
      duration: r(),
      phase: i(),
      easing: a()
    })
  ), m = _(() => i() !== "afterExit");
  return H(
    ln(
      () => E(e),
      (f) => d(f),
      { defer: !0 }
    )
  ), I(() => {
    Z || window.clearTimeout(g);
  }), { keepMounted: m, style: u };
}
function ra(e) {
  var t, n, r, o;
  const [i, s] = w(
    (n = (t = e.initialValues) == null ? void 0 : t.slice(0, e.limit)) != null ? n : []
  ), [a, l] = w((o = (r = e.initialValues) == null ? void 0 : r.slice(e.limit)) != null ? o : []), g = () => e.limit;
  return {
    state: {
      current: i,
      queue: a,
      limit: g
    },
    add: (...d) => {
      const u = [...i(), ...a(), ...d];
      s(u.slice(0, g())), l(u.slice(g()));
    },
    update: (d) => {
      const u = d([...i(), ...a()]);
      s(u.slice(0, g())), l(u.slice(g()));
    },
    clearQueue: () => {
      l([]);
    }
  };
}
function oa(e) {
  const [t, n] = lr({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), r = (s) => {
    ot(s, e.element()) && n("isPointerDown", !0);
  }, o = (s) => {
    if (t.ignoreEmulatedMouseEvents) {
      n("ignoreEmulatedMouseEvents", !1);
      return;
    }
    t.isPointerDown && e.handler && ot(s, e.element()) && (n("isPointerDown", !1), e.handler(s));
  }, i = (s) => {
    n("ignoreEmulatedMouseEvents", !0), e.handler && t.isPointerDown && ot(s, e.element()) && (n("isPointerDown", !1), e.handler(s));
  };
  se(() => {
    const s = ft(e.element());
    s.addEventListener("mousedown", r, !0), s.addEventListener("mouseup", o, !0), s.addEventListener("touchstart", r, !0), s.addEventListener("touchend", i, !0);
  }), I(() => {
    const s = ft(e.element());
    s.removeEventListener("mousedown", r, !0), s.removeEventListener("mouseup", o, !0), s.removeEventListener("touchstart", r, !0), s.removeEventListener("touchend", i, !0);
  });
}
function ia(e) {
  let t = !1;
  const n = (a) => {
    var l;
    const { once: g } = e;
    g && t || (t = !0, (l = e.handler) == null || l.call(e, a));
  }, r = (a, l, g, d) => {
    l && a && a.addEventListener && a.addEventListener(l, n, {
      capture: g,
      passive: d
    });
  }, o = () => {
    const { element: a, eventName: l, capture: g, passive: d } = e;
    r(a, l, g, d);
  }, i = (a, l) => {
    l && a && a.removeEventListener && a.removeEventListener(l, n);
  }, s = () => {
    const { element: a, eventName: l } = e;
    i(a, l);
  };
  return H((a) => {
    const { element: l, eventName: g, capture: d, passive: u } = e;
    return a && i(a.element, a.eventName), r(l, g, d, u), {
      element: l,
      eventName: g
    };
  }), I(() => {
    const { element: a, eventName: l } = e;
    i(a, l);
  }), {
    active: o,
    inactive: s
  };
}
function pt(e, t, n) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (n = 0; n < t.length; n++)
        e[n] = pt(e[n], t[n]);
    else
      for (n in t) {
        if (n === "__proto__" || n === "constructor" || n === "prototype")
          break;
        e[n] = pt(e[n], t[n]);
      }
    return e;
  }
  return t;
}
function bt(e, t, n) {
  t.split && (t = t.split("."));
  for (var r = 0, o = t.length, i = e, s, a; r < o && (a = t[r++], !(a === "__proto__" || a === "constructor" || a === "prototype")); )
    i = i[a] = r === o ? pt(i[a], n) : typeof (s = i[a]) == typeof t ? s : t[r] * 0 !== 0 || !!~("" + t[r]).indexOf(".") ? {} : [];
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function fn(e) {
  return typeof e == "number";
}
function Ge(e) {
  return Array.isArray(e);
}
function jr(e) {
  return typeof e == "function";
}
function ie(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Ge(e);
}
function hn(e) {
  return ie(e) && Object.keys(e).length === 0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function Vr(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Nr(e) {
  return e == null ? [] : Ge(e) ? e : [e];
}
function U(e, ...t) {
  return jr(e) ? e(...t) : e;
}
function Ue(e) {
  let t = !1;
  return function(...n) {
    t || (t = !0, e(...n));
  };
}
function Pe(e, t, n = 1 / 0) {
  return !ie(e) && !Array.isArray(e) || !n ? e : Object.entries(e).reduce((r, [o, i]) => (ie(i) || Ge(i) ? Object.entries(Pe(i, t, n - 1)).forEach(([s, a]) => {
    r[`${o}${t}${s}`] = a;
  }) : r[o] = i, r), {});
}
function qr(e, t) {
  return Object.keys(e).reduce((n, r) => (r.split(t).reduce((o, i, s, a) => (o[i] != null || (o[i] = a.length - 1 === s ? e[r] : {}), o[i]), n), n), {});
}
function Yr(e, t) {
  return t.split(".").reduce((n, r) => n && n[r], e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function Kr(e, t) {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
}
const Xr = (e) => Object.keys(e);
function Gr(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
function je(e) {
  return Gr(e, (t) => t != null);
}
const Ur = cr({ prefix: "hope" }), { css: pn, globalCss: xt, getCssText: Qr, keyframes: bn } = Ur, ge = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Jr(e) {
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
function V(e, t) {
  return Ge(e) ? e.map((n) => n === null ? null : t(n)) : ie(e) ? Xr(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function Zr(e, t) {
  const n = t.map((r) => {
    var o;
    return (o = e[r]) != null ? o : null;
  });
  for (; Vr(n) === null; )
    n.pop();
  return n;
}
function eo(e, t) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
function to(e, t) {
  const n = Object.keys(e);
  return n.length > 0 && n.every((r) => t.includes(r));
}
const N = [
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
const A = {
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
function re(e) {
  return yn((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function G(e) {
  return yn((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function yn(e, ...t) {
  return t.map(e).join(", ");
}
const no = "_light", We = "_dark", ro = `.${ge.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, oo = `.${ge.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, io = /* @__PURE__ */ new Map([
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
  ["_groupHover", re(A.hover)],
  ["_peerHover", G(A.hover)],
  ["_groupFocus", re(A.focus)],
  ["_peerFocus", G(A.focus)],
  ["_groupFocusVisible", re(A.focusVisible)],
  ["_peerFocusVisible", G(A.focusVisible)],
  ["_groupActive", re(A.active)],
  ["_peerActive", G(A.active)],
  ["_groupDisabled", re(A.disabled)],
  ["_peerDisabled", G(A.disabled)],
  ["_groupInvalid", re(A.invalid)],
  ["_peerInvalid", G(A.invalid)],
  ["_groupChecked", re(A.checked)],
  ["_peerChecked", G(A.checked)],
  ["_groupFocusWithin", re(A.focusWithin)],
  ["_peerFocusWithin", G(A.focusWithin)],
  ["_peerPlaceholderShown", G(A.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [no, ro],
  [We, oo]
]), so = /* @__PURE__ */ new Map([
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
const ao = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, medias: o } = t.__breakpoints, i = {}, s = {};
  for (const a in e) {
    let l = U(e[a], t);
    if (l == null || st(a, l, i))
      continue;
    if (l = ie(l) && n(l) ? r(l) : l, !Array.isArray(l)) {
      i[a] = l;
      continue;
    }
    const g = l.slice(0, o.length).length;
    for (let d = 0; d < g; d += 1) {
      const u = o == null ? void 0 : o[d], m = l[d];
      if (m != null) {
        if (!u) {
          st(a, m, i) || (i[a] = m);
          continue;
        }
        s[u] = s[u] || {}, st(a, m, s[u]) || (s[u][a] = m);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function st(e, t, n) {
  if (!ie(t) || !Jr(t))
    return !1;
  const { light: r, dark: o } = t;
  return r != null && (n[e] = r), n[We] = n[We] || {}, o != null && (n[We][e] = o), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function lo(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Ve(e) {
  if (e == null)
    return e;
  const { unitless: t } = lo(e);
  return t || fn(e) ? `${e}px` : e;
}
const vn = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, wt = (e) => Object.fromEntries(Object.entries(e).sort(vn));
function Wt(e) {
  const t = wt(e);
  return Object.assign(Object.values(t), t);
}
function co(e) {
  const t = Object.keys(wt(e));
  return new Set(t);
}
function jt(e) {
  var t;
  if (!e)
    return e;
  e = (t = Ve(e)) != null ? t : e;
  const n = e.endsWith("px") ? -1 : -0.0625;
  return fn(e) ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function He(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Ve(e)})`), t && n.push("and", `(max-width: ${Ve(t)})`), n.join(" ");
}
function uo(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Wt(e), r = Object.entries(e).sort(vn).map(([s, a], l, g) => {
    var d;
    let [, u] = (d = g[l + 1]) != null ? d : [];
    return u = parseFloat(u) > 0 ? jt(u) : void 0, {
      _minW: jt(a),
      breakpoint: s,
      minW: a,
      maxW: u,
      maxWQuery: He(null, u),
      minWQuery: He(a),
      minMaxQuery: He(a, u)
    };
  }), o = co(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    asObject: wt(e),
    asArray: Wt(e),
    details: r,
    medias: [null, ...n.map((s) => He(s)).slice(1)],
    isResponsive(s) {
      return to(s, i);
    },
    toArrayValue(s) {
      if (!ie(s))
        throw new Error("toArrayValue: value must be an object");
      return Zr(s, i);
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return eo(s, i);
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
const go = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], Cn = /!(important)?$/;
function mo(e) {
  return Cn.test(e);
}
function fo(e) {
  return e.replace(Cn, "").trim();
}
function xn(e, t, n) {
  var r;
  if (e == null)
    return;
  const o = String(e), i = fo(o);
  let s = (r = n[t][i]) != null ? r : Yr(n[t], i);
  return s == null && (s = go.includes(t) ? i : Ve(i)), mo(o) ? `${s} !important` : s;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function Qe(e, t) {
  var n;
  const r = {}, o = ao(e)(t);
  for (let i in o) {
    let s = U(o[i], t);
    if (s == null)
      continue;
    if (i.startsWith("_")) {
      const l = io.get(i);
      if (l == null)
        continue;
      i = l;
    }
    if (ie(s)) {
      r[i] = Object.assign(
        {},
        r[i],
        Qe(s, t)
      );
      continue;
    }
    const a = (n = so.get(i)) != null ? n : [i];
    for (const l of a) {
      const g = t.themeMap[l];
      g != null && (s = xn(s, g, t.vars)), r[l] = s;
    }
  }
  return r;
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */
function ho(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function po(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const s = t.split("");
    t = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  const n = parseInt(t, 16), r = n >> 16 & 255, o = n >> 8 & 255, i = n & 255;
  return {
    r,
    g: o,
    b: i,
    a: 1
  };
}
function bo(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function yo(e) {
  return ho(e) ? po(e) : e.startsWith("rgb") ? bo(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function at(e) {
  const { r: t, g: n, b: r } = yo(e);
  return `${t} ${n} ${r}`;
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
    mainChannel: at(e[500]),
    lightChannel: at(e[100]),
    darkChannel: at(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const Je = "hope";
function vo(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Co(e) {
  const t = vo(e.toString());
  return wo(xo(t));
}
function xo(e) {
  return e.includes("\\.") || Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.");
}
function wo(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function So(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function ko(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function _o(e, t = "") {
  return Co(`--${So(e, t)}`);
}
function Io(e, t, n = Je) {
  const r = _o(e, n);
  return {
    variable: r,
    reference: ko(r, t)
  };
}
function Oo(e = Je) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const Re = "__";
function lt(e, t, n) {
  return Io(String(t).replace(e, "-"), void 0, n);
}
function Ro(e, t) {
  const n = {}, r = {}, o = {}, { colors: i, ...s } = e, a = { colors: i.light }, l = { colors: i.dark }, g = Pe(a, Re), d = Pe(l, Re), u = Pe(s, Re), m = new RegExp(`(${Re}|\\.)`, "g");
  for (const [y, C] of Object.entries(g)) {
    const { variable: S, reference: z } = lt(m, y, t);
    n[S] = C, o[y] = z;
  }
  for (const [y, C] of Object.entries(d)) {
    const { variable: S } = lt(m, y, t);
    r[S] = C;
  }
  for (const [y, C] of Object.entries(u)) {
    const { variable: S, reference: z } = lt(m, y, t);
    n[S] = C, o[y] = z;
  }
  const f = qr(o, Re);
  return { cssVarsValues: {
    root: n,
    dark: r
  }, vars: f };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const Eo = [
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
function To(e) {
  return Kr(e, Eo);
}
function zo(e) {
  const { vars: t, __cssVarsValues: n, __breakpoints: r, ...o } = e;
  return o;
}
function wn(e) {
  const t = zo(e), n = To(t), { cssVarsValues: r, vars: o } = Ro(n, t.cssVarPrefix);
  return Object.assign(t, {
    vars: o,
    __cssVarsValues: r,
    __breakpoints: uo(t.breakpoints)
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
function Sn(e) {
  const t = Oo(e);
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
const $o = {
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
}, Vt = {
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
}, Do = {
  colors: Sn(Je),
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
  space: Vt,
  sizes: {
    ...Vt,
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
}, Lo = {
  ...Do,
  cssVarPrefix: Je,
  themeMap: $o,
  components: {}
}, St = wn(Lo);
function sa(e) {
  let t = St;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: Sn(e.cssVarPrefix)
  });
  const n = {
    value: t
  };
  return bt(n, "value", e), wn(n.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function kt(e) {
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
function Ao(e) {
  xt({
    ":root": e.__cssVarsValues.root,
    [`.${ge.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function Mo(e) {
  xt({
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
const kn = Q(St);
function he() {
  return J(kn);
}
function Fo(e) {
  const t = he();
  return _(() => {
    var n;
    if (e != null)
      return (n = t.components[e]) != null ? n : void 0;
  });
}
function q(e, t, n) {
  const r = he();
  return qe(t, () => {
    var o, i;
    return (i = (o = r.components[e]) == null ? void 0 : o.defaultProps) != null ? i : {};
  }, n);
}
function Ho(e) {
  var t;
  const n = (t = e.theme) != null ? t : St;
  return Ao(n), e.withCssReset && Mo(n.vars), c(kn.Provider, {
    value: n,
    get children() {
      return e.children;
    }
  });
}
function aa(e) {
  const t = Ue((n) => {
    const {
      "@import": r,
      "@font-face": o,
      ...i
    } = U(e, n), s = Object.entries(i).reduce((a, [l, g]) => (a[l] = Qe(g, n), a), {});
    xt({
      "@import": r != null ? r : [],
      "@font-face": o != null ? o : {},
      ...s
    })();
  });
  return function() {
    const n = he();
    t(n);
  };
}
function la(e) {
  return e;
}
function ke(e, t) {
  return pn(Qe(e, t))().className;
}
function yt(e, t) {
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
function Nt(e, t) {
  return Object.entries(e).reduce((n, [r, o]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: a = []
    } = o;
    return n[r] = {
      baseClassName: ke(i, t),
      variantClassNames: Object.entries(s).reduce((l, [g, d]) => (l[g] = Object.entries(d).reduce(
        (u, [m, f]) => (u[m] = ke(f, t), u),
        {}
      ), l), {}),
      compoundVariants: a.map((l) => [
        l.variants,
        ke(l.style, t)
      ])
    }, n;
  }, {});
}
function P(e, t) {
  let n, r, o, i, s = [], a;
  const l = Ue(
    (g, d, u) => {
      n = U(e, d), r = Nt(
        n,
        d
      ), o = U(u, d), i = o && Nt(o, d), s = Object.keys(n), a = Object.fromEntries(
        s.map((m) => [m, `hope-${g}-${m}`])
      );
    }
  );
  return function(g, d) {
    var u;
    const m = he(), f = Fo(g);
    l(g, m, (u = f()) == null ? void 0 : u.styleConfigOverride);
    const y = _(() => U(d.styleConfigOverride, m)), C = _(() => {
      const [F, L] = p(d, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...je(L)
      };
    }), S = _(() => s.reduce((F, L) => {
      var O, ae, ee, te, W, X, le, ce, de, be, ye;
      let ve = "", Y = {}, ue = [];
      d.unstyled || (ve = (O = r[L].baseClassName) != null ? O : "", Y = (ae = r[L].variantClassNames) != null ? ae : {}, ue = (ee = r[L].compoundVariants) != null ? ee : []);
      const Ce = (W = (te = i == null ? void 0 : i[L]) == null ? void 0 : te.baseClassName) != null ? W : "", nt = (le = (X = i == null ? void 0 : i[L]) == null ? void 0 : X.variantClassNames) != null ? le : {}, rt = (de = (ce = i == null ? void 0 : i[L]) == null ? void 0 : ce.compoundVariants) != null ? de : [], xe = [a[L], ve, Ce];
      for (const x in C()) {
        const R = C()[x];
        R != null && (xe.push((be = Y[x]) == null ? void 0 : be[String(R)]), xe.push((ye = nt[x]) == null ? void 0 : ye[String(R)]));
      }
      for (const [x, R] of [...ue, ...rt])
        yt(x, C()) && xe.push(R);
      return F[L] = v(...xe), F;
    }, {})), z = _(() => {
      const F = y();
      return F == null ? {} : s.reduce((L, O) => {
        var ae, ee, te, W, X, le, ce, de;
        const be = (ee = (ae = F[O]) == null ? void 0 : ae.baseStyle) != null ? ee : {}, ye = (W = (te = F[O]) == null ? void 0 : te.variants) != null ? W : {}, ve = (le = (X = F[O]) == null ? void 0 : X.compoundVariants) != null ? le : [];
        L[O] = be;
        for (const Y in C()) {
          const ue = C()[Y];
          if (ue == null)
            continue;
          const Ce = (de = (ce = ye[Y]) == null ? void 0 : ce[String(ue)]) != null ? de : {};
          hn(Ce) || bt(L, O, Ce);
        }
        for (const Y of ve)
          yt(Y.variants, C()) && bt(L, O, Y.style);
        return L;
      }, {});
    });
    return { baseClasses: S, styleOverrides: z };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function _n(e, t) {
  const { baseStyle: n = {}, variants: r = {}, compoundVariants: o = [] } = e;
  return {
    baseClassName: ke(n, t),
    variantClassNames: Object.entries(r).reduce((i, [s, a]) => (i[s] = Object.entries(a).reduce(
      (l, [g, d]) => (l[g] = ke(d, t), l),
      {}
    ), i), {}),
    compoundVariants: o.map((i) => [
      i.variants,
      ke(i.style, t)
    ])
  };
}
function In(e, t) {
  var n;
  const { variantClassNames: r = {}, compoundVariants: o = [] } = e, i = [];
  for (const s in t) {
    const a = t[s];
    a != null && i.push((n = r[s]) == null ? void 0 : n[String(a)]);
  }
  for (const [s, a] of o)
    yt(s, t) && i.push(a);
  return i;
}
function ca(e) {
  let t, n;
  const r = Ue((o) => {
    t = U(e, o), n = _n(t, o);
  });
  return function(o = {}) {
    const i = he();
    return r(i), _(() => {
      if (t == null || n == null)
        return "";
      const s = {
        ...t.defaultVariants,
        ...je(o)
      }, a = In(n, s);
      return v(n.baseClassName, a);
    });
  };
}
const Bo = {
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
}, Po = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Wo = {
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
}, jo = {
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
}, Vo = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, No = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, qo = {
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
}, Yo = {
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
}, Ko = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, Xo = {
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
}, Go = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Uo = {
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
}, Qo = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Jo = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Zo = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, ei = {
  objectFit: !0,
  objectPosition: !0
}, ti = {
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
}, ni = {
  ...Bo,
  ...Po,
  ...Wo,
  ...jo,
  ...Vo,
  ...No,
  ...qo,
  ...Yo,
  ...Ko,
  ...Xo,
  ...Go,
  ...Uo,
  ...Qo,
  ...Jo,
  ...Zo,
  ...ei,
  ...ti
};
function ri(e) {
  return Object.keys(e).filter((t) => t in ni);
}
const On = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function oi(e) {
  return Object.entries(e).reduce((t, [n, r]) => {
    const o = On.get(n);
    return o != null && r != null && (t[o] = r), t;
  }, {});
}
const ii = pn({});
function ct(e, t, n) {
  let r, o, i = [];
  const s = Ue((l) => {
    t != null && (r = U(t, l), o = _n(r, l), i = r.variants ? Object.keys(r.variants) : []);
  }), a = (l) => {
    const g = he();
    s(g);
    const [d, u, m, f, y] = p(
      l,
      ["as", "class", "sx", "__css"],
      [...On.keys()],
      i,
      ri(l)
    ), C = _(() => {
      if (o == null)
        return [];
      const z = {
        ...r == null ? void 0 : r.defaultVariants,
        ...je(m)
      };
      return In(o, z);
    }), S = _(() => {
      const z = Object.assign({}, d.__css, je(f), ...Nr(d.sx).map((F) => U(F, g)));
      if (!hn(z))
        return ii({
          css: Qe(z, g)
        }).className;
    });
    return c(ar, h({
      get component() {
        var z;
        return (z = d.as) != null ? z : e;
      },
      get class() {
        return v(n, o == null ? void 0 : o.baseClassName, ...C(), S(), d.class) || void 0;
      }
    }, () => oi(u), y));
  };
  return n != null && (a.toString = () => `.${n}`), a;
}
function si() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(ct, {
    apply(t, n, r) {
      return ct(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, ct(n)), e.get(n);
    }
  });
}
const b = si();
var ai = ["<style", ' id="stitches">', "</style>"];
function da() {
  sr(() => me(ai, fe(), Qr()));
}
const li = bn({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), ua = bn({
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
const Rn = Q();
function ci() {
  const e = J(Rn);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function ga(e, t) {
  const { colorMode: n } = ci();
  return _(() => n() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const Ze = "hope-ui-color-mode";
function di(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get: (t) => {
      if (Z)
        return t;
      let n;
      try {
        n = localStorage.getItem(e);
      } catch {
      }
      return n != null ? n : t;
    },
    set: (t) => {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const ui = di(Ze);
function qt(e, t) {
  const n = e.match(new RegExp(`(^| )${t}=([^;]+)`));
  return n == null ? void 0 : n[2];
}
function En(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (n) => {
      var r, o;
      return t ? (r = qt(t, e)) != null ? r : n : Z ? n : (o = qt(document.cookie, e)) != null ? o : n;
    },
    set: (n) => {
      document.cookie = `${e}=${n}; max-age=31536000; path=/`;
    }
  };
}
const ma = En(Ze);
function fa(e) {
  return En(Ze, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function Tn() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function gi() {
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
function mi(e) {
  document.body.classList.add(e ? ge.dark : ge.light), document.body.classList.remove(e ? ge.light : ge.dark);
}
function fi(e, t = !0) {
  const n = t ? gi() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, n == null || n();
}
function zn(e) {
  var n;
  return ((n = Tn().matches) != null ? n : e === "dark") ? "dark" : "light";
}
function hi(e) {
  var r;
  const t = "light", n = (r = e.get(t)) != null ? r : t;
  return n === "system" ? Z ? t : zn() : n;
}
function pi(e) {
  const t = Tn(), n = (r) => {
    e(r.matches ? "dark" : "light");
  };
  return t.addEventListener("change", n), () => {
    t.removeEventListener("change", n);
  };
}
function bi(e) {
  const t = () => {
    var d;
    return (d = e.initialColorMode) != null ? d : "system";
  }, n = () => {
    var d;
    return (d = e.storageManager) != null ? d : ui;
  };
  let r;
  const [o, i] = w(hi(n())), s = (d) => {
    i(d), mi(d === "dark"), fi(d, e.disableTransitionOnChange);
  }, a = (d) => {
    r && (r(), r = void 0);
    const u = d === "system";
    u && (r = pi(s)), s(u ? zn() : d), n().set(d);
  }, l = () => {
    a(o() === "dark" ? "light" : "dark");
  };
  H(() => {
    var d;
    a((d = n().get()) != null ? d : t());
  }), I(() => {
    r == null || r();
  });
  const g = {
    colorMode: o,
    setColorMode: a,
    toggleColorMode: l
  };
  return c(Rn.Provider, {
    value: g,
    get children() {
      return e.children;
    }
  });
}
function $n(e) {
  return e == null ? {} : {
    overflow: V(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: V(e, (t) => t != null ? "ellipsis" : void 0),
    display: V(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: V(e, (t) => t != null ? t : void 0),
    WebkitBoxOrient: V(e, (t) => t != null ? "vertical" : void 0)
  };
}
function D(e, t) {
  return qe(e, t);
}
function M(e, t) {
  return `rgb(${e} / ${t})`;
}
var yi = ["<script", ' id="hope-ui-color-mode-script"', ">", "<\/script>"];
const Dn = "system", vi = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function Ci(e) {
  return vi.has(e) ? e : Dn;
}
function ha(e) {
  e = D({
    initialColorMode: Dn,
    storageType: "localStorage",
    storageKey: Ze
  }, e);
  const t = _(() => {
    const n = Ci(e.initialColorMode), r = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${n}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, o = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${n}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? r : o}`.trim();
  });
  return me(yi, fe(), Ee("nonce", Se(e.nonce, !0), !1), t());
}
const Yt = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function Ln(e) {
  const [t, n] = w(), [r, o] = w(), i = _(() => e.overlayTransitionOptions ? D(Yt, e.overlayTransitionOptions) : Yt), s = Xe(() => e.isOpen, i);
  let a;
  const l = (m) => {
    a = m.target;
  }, g = (m) => {
    var f;
    m.key === "Escape" && (m.stopPropagation(), e.closeOnEsc && e.onClose(), (f = e.onEscKeyDown) == null || f.call(e));
  }, d = (m) => {
    var f;
    m.stopPropagation(), a === m.target && (e.closeOnOverlayClick && e.onClose(), (f = e.onOverlayClick) == null || f.call(e));
  }, u = () => {
    e.onClose();
  };
  return Mr({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: n,
    descriptionId: r,
    setDescriptionId: o,
    overlayTransition: s,
    onContainerMouseDown: l,
    onContainerKeyDown: g,
    onContainerClick: d,
    onCloseButtonClick: u
  };
}
const xi = P((e) => ({
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
        light: M(e.vars.colors.neutral.darkChannel, 0.75),
        dark: M(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));
function An(e) {
  return typeof e == "function";
}
function Mn(e) {
  return e == null;
}
function wi(e) {
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
function dt(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function Kt(e) {
  var t, n;
  const r = (t = e.target) != null ? t : e.currentTarget, o = Fn(r);
  return (n = e.relatedTarget) != null ? n : o;
}
function Fn(e) {
  var t;
  return (t = Hn(e)) == null ? void 0 : t.activeElement;
}
function Si(e) {
  return Hn(e).defaultView || window;
}
function Hn(e) {
  var t;
  return ki(e) && (t = e.ownerDocument) != null ? t : document;
}
function ki(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function k(e) {
  return e ? "" : void 0;
}
function _i(e) {
  return e ? !0 : void 0;
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */
function Ii(e) {
  if (Oi())
    e.focus({ preventScroll: !0 });
  else {
    const t = Ri(e);
    e.focus(), Ei(t);
  }
}
let Be = null;
function Oi() {
  if (Be == null) {
    Be = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Be = !0, !0;
        }
      });
    } catch {
    }
  }
  return Be;
}
function Ri(e) {
  let t = e.parentNode;
  const n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function Ei(e) {
  for (const { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
function Ti() {
}
function T(e, t) {
  return e && (An(e) ? e(t) : e[0](e[1], t)), t == null ? void 0 : t.defaultPrevented;
}
function zi(e, ...t) {
  return An(e) ? e(...t) : e;
}
function $i(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
function Bn(e) {
  return $i(e, (t) => t != null);
}
var Di = ["<path", ' fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>'];
const Xt = {
  viewBox: "0 0 24 24",
  path: () => me(Di, fe())
}, Gt = b("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), Li = (e) => {
  e = D({
    children: Xt.path,
    viewBox: Xt.viewBox,
    color: "currentColor"
  }, e);
  const [t, n] = p(e, ["as", "children", "viewBox"]), r = () => t.as && !wi(t.as);
  return c($, {
    get when() {
      return r();
    },
    get fallback() {
      return c(Gt, h({
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
      return c(Gt, h({
        get as() {
          return t.as;
        }
      }, n));
    }
  });
};
function Pn(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: n = {}
  } = e;
  return (r) => c(Li, h({
    viewBox: t
  }, n, r, {
    get children() {
      return e.path;
    }
  }));
}
var Ai = ["<g", ' fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g>'], Mi = ["<path", ' d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>'];
const Fi = Pn({
  path: () => me(Ai, fe())
}), Hi = Pn({
  path: () => me(Mi, fe())
}), Bi = P(
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
        ...kt(e.vars),
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
), _t = (e) => {
  e = q("CloseButton", {
    "aria-label": "Close",
    children: () => c(Hi, {})
  }, e);
  const [t, n, r] = p(e, ["class"], [...N, "size"]), {
    baseClasses: o,
    styleOverrides: i
  } = Bi("CloseButton", n);
  return c(b.button, h({
    type: "button",
    get class() {
      return v(o().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}, Wn = Q();
function $e() {
  const e = J(Wn);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const Pi = (e) => {
  const t = $e();
  e = D({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [n, r] = p(e, ["class", "onClick"]);
  return c(_t, h({
    get class() {
      return v("hope-Modal-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), T(n.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, jn = {
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
}, Wi = b("span", {
  baseStyle: jn
}), pa = b("input", {
  baseStyle: jn
}), It = (e) => {
  let t;
  e = D({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [n, r] = p(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), o = () => {
    if (n.restoreFocusSelector) {
      t = document.querySelector(n.restoreFocusSelector);
      return;
    }
    n.restoreFocus && (t = Fn());
  }, i = () => !1, s = (a) => {
  };
  return se(() => {
    o();
  }), I(() => {
    !t || i() || Ii(t);
  }), c(b.div, h({
    tabIndex: -1
  }, r, {
    get children() {
      return [c($, {
        get when() {
          return n.trapFocus;
        },
        get children() {
          return c(Ut, {
            onFocus: s
          });
        }
      }), e.children, c($, {
        get when() {
          return n.trapFocus;
        },
        get children() {
          return c(Ut, {
            onFocus: s
          });
        }
      })];
    }
  }));
}, Ut = (e) => c(Wi, h({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e)), ji = (e) => {
  const t = $e(), [n, r] = p(e, ["class", "style", "onClick"]), o = (s) => {
    s.stopPropagation(), T(n.onClick, s);
  }, i = _(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return c(It, {
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
      return c(b.section, h({
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
          return v(t.baseClasses().content, n.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: o
      }, r));
    }
  });
}, Vi = (e) => {
  const t = $e(), [n, r] = p(e, ["class"]);
  return H(() => {
    t.setDescriptionId(`${t.contentId()}-description`), I(() => t.setDescriptionId(void 0));
  }), c(b.p, h({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return v(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, Ni = (e) => {
  const t = $e(), [n, r] = p(e, ["class"]);
  return H(() => {
    t.setHeadingId(`${t.contentId()}-heading`), I(() => t.setHeadingId(void 0));
  }), c(b.h2, h({
    get id() {
      return t.headingId();
    },
    get class() {
      return v(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, qi = (e) => {
  const t = $e(), [n, r] = p(e, ["class", "style", "children"]), o = _(() => ({
    ...n.style,
    ...t.overlayTransition.style()
  }));
  return c(b.div, h({
    role: "presentation",
    get class() {
      return v(t.baseClasses().overlay, n.class);
    },
    get style() {
      return o();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}, De = (e) => {
  e = q("Modal", {
    id: `hope-modal-${Ye()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = p(e, [...N, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: n,
    styleOverrides: r
  } = xi("Modal", t), {
    headingId: o,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: a,
    overlayTransition: l,
    onContainerMouseDown: g,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: m
  } = Ln(e), f = Xe(() => e.isOpen, () => {
    var C;
    return D({
      transition: "pop",
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (C = e.contentTransitionOptions) != null ? C : {});
  }), y = {
    baseClasses: n,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: f,
    overlayTransition: l,
    contentId: () => e.id,
    headingId: o,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: a,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: g,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: m
  };
  return c($, {
    get when() {
      return l.keepMounted() && f.keepMounted();
    },
    get children() {
      return c(Ke, {
        get children() {
          return c(Wn.Provider, {
            value: y,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
De.Overlay = qi;
De.Content = ji;
De.CloseButton = Pi;
De.Heading = Ni;
De.Description = Vi;
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
const Yi = typeof document < "u" ? document : void 0, Ki = "body > :not(script, style)", ut = '[aria-modal="true"], [data-ismodal="true"]';
function Qt(e, t) {
  const n = Array.from(e.querySelectorAll(Ki)).filter((r) => !r.contains(t)).map((r) => {
    const o = r.getAttribute("aria-hidden") || "";
    return r.setAttribute("aria-hidden", "true"), { element: r, previousAriaHidden: o };
  });
  return () => {
    n.forEach(({ element: r, previousAriaHidden: o }) => {
      o ? r.setAttribute("aria-hidden", o) : r.removeAttribute("aria-hidden");
    });
  };
}
function Xi(e = "body", { document: t = Yi } = {}) {
  const n = t == null ? void 0 : t.querySelector(e);
  if (t == null || n == null)
    return Ti;
  const r = { childList: !0 };
  let o = [], i;
  const s = new MutationObserver((a) => {
    for (const l of a)
      if (l.type === "childList") {
        if (l.addedNodes.length > 0) {
          const g = Array.from(l.addedNodes).find(
            (d) => {
              var u;
              return (u = d.querySelector) == null ? void 0 : u.call(d, ut);
            }
          );
          if (g) {
            o.push(g);
            const d = g.querySelector(ut);
            i == null || i(), i = Qt(t, d);
          }
        } else if (l.removedNodes.length > 0) {
          const g = Array.from(l.removedNodes), d = o.findIndex(
            (u) => g.includes(u)
          );
          if (d >= 0)
            if (i == null || i(), o = o.filter((u, m) => m !== d), o.length > 0) {
              const u = o[o.length - 1].querySelector(ut);
              i = Qt(t, u);
            } else
              i = void 0;
        }
      }
  });
  return s.observe(n, r), () => {
    i == null || i(), s.disconnect();
  };
}
function ba(e) {
  Xi(), e = D({
    withCssReset: !0
  }, e);
  const [t, n] = p(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return c(bi, {
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
      return c(Ho, n);
    }
  });
}
const Gi = P(({ vars: e }) => ({
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
      ...kt(e)
    }
  }
})), ya = (e) => {
  e = q("Anchor", {}, e);
  const [t, n, r] = p(e, ["class", "isExternal"], N), {
    baseClasses: o,
    styleOverrides: i
  } = Gi("Anchor", n);
  return c(b.a, h({
    get class() {
      return v(o().root, t.class);
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
  }, r));
}, Ui = b("div", {
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
}, "hope-AspectRatio-root"), va = (e) => {
  e = D({
    ratio: 4 / 3
  }, e);
  const [t, n] = p(e, ["ratio"]);
  return c(Ui, h({
    get _before() {
      return {
        pb: V(t.ratio, (r) => `${1 / r * 100}%`)
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
const Ca = b("div"), et = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function Qi(e) {
  const t = [];
  for (const n of et) {
    const r = n === "neutral", o = n === "warning";
    t.push({
      variants: {
        variant: "solid",
        colorScheme: n
      },
      style: {
        color: o ? e.colors[n][900] : "common.white",
        backgroundColor: e.colors[n][r ? "800" : o ? "300" : "500"],
        borderColor: e.colors[n][r ? "800" : o ? "300" : "500"],
        _hover: {
          color: o ? e.colors[n][900] : "common.white",
          backgroundColor: e.colors[n][r ? "700" : o ? "400" : "600"],
          borderColor: e.colors[n][r ? "700" : o ? "400" : "600"]
        },
        _active: {
          color: o ? e.colors[n][900] : "common.white",
          backgroundColor: e.colors[n][r ? "600" : o ? "500" : "700"],
          borderColor: e.colors[n][r ? "600" : o ? "500" : "700"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.100",
          borderColor: "neutral.100"
        },
        _dark: {
          color: o ? e.colors[n][900] : "whiteAlpha.900",
          backgroundColor: e.colors[n][o ? "500" : "700"],
          borderColor: e.colors[n][o ? "500" : "700"],
          _hover: {
            color: o ? e.colors[n][900] : "whiteAlpha.900",
            backgroundColor: e.colors[n][o ? "400" : "600"],
            borderColor: e.colors[n][o ? "400" : "600"]
          },
          _active: {
            color: o ? e.colors[n][900] : "whiteAlpha.900",
            backgroundColor: e.colors[n][o ? "300" : "500"],
            borderColor: e.colors[n][o ? "300" : "500"]
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
function Ji(e) {
  const t = [];
  for (const n of et) {
    const r = n === "neutral", o = n === "warning";
    t.push({
      variants: {
        variant: "soft",
        colorScheme: n
      },
      style: {
        color: e.colors[n][o ? "900" : "700"],
        backgroundColor: e.colors[n][r ? "200" : o ? "100" : "50"],
        borderColor: e.colors[n][r ? "200" : o ? "100" : "50"],
        _hover: {
          color: e.colors[n][o ? "900" : "800"],
          backgroundColor: e.colors[n][r ? "300" : o ? "200" : "100"],
          borderColor: e.colors[n][r ? "300" : o ? "200" : "100"]
        },
        _active: {
          color: e.colors[n][o ? "900" : "800"],
          backgroundColor: e.colors[n][r ? "400" : o ? "300" : "200"],
          borderColor: e.colors[n][r ? "400" : o ? "300" : "200"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.50",
          borderColor: "neutral.50"
        },
        _dark: {
          color: e.colors[n][200],
          backgroundColor: M(e.colors[n].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[n][200],
            backgroundColor: M(e.colors[n].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: M(e.colors[n].mainChannel, 0.4),
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
function Zi(e) {
  const t = [];
  for (const n of et) {
    const r = n === "neutral", o = n === "warning";
    t.push({
      variants: {
        variant: "outlined",
        colorScheme: n
      },
      style: {
        color: e.colors[n][o ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: e.colors[n][r || o ? "400" : "300"],
        _hover: {
          color: e.colors[n][o ? "800" : "700"],
          backgroundColor: e.colors[n][r || o ? "100" : "50"],
          borderColor: e.colors[n][r || o ? "500" : "400"]
        },
        _active: {
          color: e.colors[n][o ? "800" : "700"],
          backgroundColor: e.colors[n][r || o ? "200" : "100"],
          borderColor: e.colors[n][r || o ? "500" : "400"]
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
            backgroundColor: M(e.colors[n].mainChannel, 0.1),
            borderColor: e.colors[n][700]
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: M(e.colors[n].mainChannel, 0.2),
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
function es(e) {
  const t = [];
  for (const n of et) {
    const r = n === "neutral", o = n === "warning";
    t.push({
      variants: {
        variant: "plain",
        colorScheme: n
      },
      style: {
        color: e.colors[n][o ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: "transparent",
        _hover: {
          color: e.colors[n][o ? "800" : "700"],
          backgroundColor: e.colors[n][r || o ? "100" : "50"],
          borderColor: e.colors[n][r || o ? "100" : "50"]
        },
        _active: {
          color: e.colors[n][o ? "800" : "700"],
          backgroundColor: e.colors[n][r || o ? "200" : "100"],
          borderColor: e.colors[n][r || o ? "200" : "100"]
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
            backgroundColor: M(e.colors[n].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: M(e.colors[n].mainChannel, 0.2),
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
const Te = /* @__PURE__ */ new Map([
  ["xs", "7"],
  ["sm", "8"],
  ["md", "10"],
  ["lg", "12"]
]);
function ts() {
  const e = [];
  for (const [t, n] of Te)
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
const ns = P(
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
        ...kt(e)
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
            height: Te.get("xs"),
            px: 3,
            fontSize: "xs"
          },
          sm: {
            height: Te.get("sm"),
            px: 4,
            fontSize: "sm"
          },
          md: {
            height: Te.get("md"),
            px: 5,
            fontSize: "base"
          },
          lg: {
            height: Te.get("lg"),
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
        ...Qi(e),
        ...Ji(e),
        ...Zi(e),
        ...es(e),
        ...ts()
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
        animation: `1s linear infinite ${li}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), Vn = Q();
function Ot() {
  const e = J(Vn);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const rs = b("div", {
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
}, "hope-ButtonGroup-root"), Nn = Q();
function os() {
  return J(Nn);
}
const xa = (e) => {
  e = D({}, e);
  const [t, n, r] = p(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return c(Nn.Provider, {
    value: n,
    get children() {
      return c(rs, h({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, r));
    }
  });
}, Jt = (e) => {
  const t = Ot(), [n, r] = p(e, ["class", "__css"]);
  return c(b.span, h({
    "aria-hidden": !0,
    get class() {
      return v(t.baseClasses().icon, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().icon,
        ...n.__css
      };
    }
  }, r));
}, Zt = (e) => {
  const t = Ot(), [n, r] = p(e, ["class", "children", "hasLoadingText"]);
  return c(b.div, h({
    get class() {
      return v(t.baseClasses().loaderWrapper, n.class);
    },
    get position() {
      return n.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return t.styleOverrides().loaderWrapper;
    }
  }, r, {
    get children() {
      return c($, {
        get when() {
          return n.children;
        },
        get fallback() {
          return c(Fi, {
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
const is = ["button", "color", "file", "image", "reset", "submit"];
function ss(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? is.indexOf(e.type) !== -1 : !1;
}
var as = ["<span", ' style="', '">', "</span>"];
const ls = (e) => {
  let t;
  const n = os(), r = D({
    get variant() {
      return n == null ? void 0 : n.variant;
    },
    get colorScheme() {
      return n == null ? void 0 : n.colorScheme;
    },
    get size() {
      return n == null ? void 0 : n.size;
    },
    get isDisabled() {
      return n == null ? void 0 : n.isDisabled;
    }
  }, e);
  e = q("Button", {
    loaderPlacement: "start"
  }, r);
  const [o, i, s, a] = p(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...N, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), l = Pr(() => t, () => e.as || "button"), [g, d] = w(l() != null && ss({
    tagName: l(),
    type: o.type
  })), u = _(() => o.type != null ? o.type : g() ? "button" : void 0), {
    baseClasses: m,
    styleOverrides: f
  } = ns("Button", s);
  return se(() => {
  }), c(Vn.Provider, {
    value: {
      baseClasses: m,
      styleOverrides: f
    },
    get children() {
      return c(b.button, h({
        get as() {
          return o.as;
        },
        get role() {
          return !g() && l() !== "a" ? "button" : void 0;
        },
        get type() {
          return u();
        },
        get tabIndex() {
          return g() ? void 0 : 0;
        },
        get disabled() {
          return o.isDisabled;
        },
        get ["data-loading"]() {
          return o.isLoading || void 0;
        },
        get class() {
          return v(m().root, o.class);
        },
        get __css() {
          return f().root;
        }
      }, a, {
        get children() {
          return [c($, {
            get when() {
              return o.isLoading && o.loaderPlacement === "start";
            },
            get children() {
              return c(Zt, {
                get hasLoadingText() {
                  return !!o.loadingText;
                },
                get children() {
                  return o.loader;
                }
              });
            }
          }), c($, {
            get when() {
              return o.isLoading;
            },
            get fallback() {
              return c(en, i);
            },
            get children() {
              return c($, {
                get when() {
                  return o.loadingText;
                },
                get fallback() {
                  return me(as, fe(), "opacity:" + 0, Se(c(en, i)));
                },
                get children() {
                  return o.loadingText;
                }
              });
            }
          }), c($, {
            get when() {
              return o.isLoading && o.loaderPlacement === "end";
            },
            get children() {
              return c(Zt, {
                get hasLoadingText() {
                  return !!o.loadingText;
                },
                get children() {
                  return o.loader;
                }
              });
            }
          })];
        }
      }));
    }
  });
};
function en(e) {
  const t = Ot();
  return [c($, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return c(Jt, {
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
  }), e.children, c($, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return c(Jt, {
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
const wa = (e) => c(ls, h({
  isIconButton: !0
}, e));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const Sa = b("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), cs = b("div", ({
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
}), "hope-Container-root"), ka = (e) => {
  e = D({
    isCentered: !0
  }, e);
  const [t, n] = p(e, ["isCentered"]);
  return c(cs, h({
    get mx() {
      return V(t.isCentered, (r) => r ? "auto" : void 0);
    }
  }, n));
}, ds = P(
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
), _a = (e) => {
  e = q("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, n, r] = p(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), o = ir(() => e.children), i = () => !!o(), s = () => n.orientation === "vertical", a = _(() => {
    const d = s() ? "borderLeftStyle" : "borderTopStyle", u = s() ? "borderLeftWidth" : "borderTopWidth";
    return i() ? {
      _before: {
        [d]: t.variant,
        [u]: t.thickness
      },
      _after: {
        [d]: t.variant,
        [u]: t.thickness
      }
    } : {
      [d]: t.variant,
      [u]: t.thickness
    };
  }), {
    baseClasses: l,
    styleOverrides: g
  } = ds("Divider", {
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
  return c(b.hr, h({
    get as() {
      return i() ? "div" : "hr";
    },
    get role() {
      return i() ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return s() ? "vertical" : "horizontal";
    },
    get class() {
      return v(l().root, t.class);
    },
    get __css() {
      return {
        ...g().root,
        ...a()
      };
    }
  }, r, {
    get children() {
      return c($, {
        get when() {
          return i();
        },
        get children() {
          return c(b.span, h({
            get class() {
              return l().label;
            },
            get __css() {
              return g().label;
            }
          }, () => t.labelProps, {
            get children() {
              return o();
            }
          }));
        }
      });
    }
  }));
}, us = P((e) => ({
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
        light: M(e.vars.colors.neutral.darkChannel, 0.75),
        dark: M(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), qn = Q();
function Le() {
  const e = J(qn);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const gs = (e) => {
  const t = Le();
  e = D({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [n, r] = p(e, ["class", "onClick"]);
  return c(_t, h({
    get class() {
      return v("hope-Drawer-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), T(n.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, ms = (e) => {
  const t = Le(), [n, r] = p(e, ["class", "style", "onClick"]), o = (s) => {
    s.stopPropagation(), T(n.onClick, s);
  }, i = _(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return c(It, {
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
      return c(b.section, h({
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
          return v(t.baseClasses().content, n.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: o
      }, r));
    }
  });
}, fs = (e) => {
  const t = Le(), [n, r] = p(e, ["class"]);
  return H(() => {
    t.setDescriptionId(`${t.contentId()}-description`), I(() => t.setDescriptionId(void 0));
  }), c(b.p, h({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return v(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, hs = (e) => {
  const t = Le(), [n, r] = p(e, ["class"]);
  return H(() => {
    t.setHeadingId(`${t.contentId()}-heading`), I(() => t.setHeadingId(void 0));
  }), c(b.h2, h({
    get id() {
      return t.headingId();
    },
    get class() {
      return v(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, ps = (e) => {
  const t = Le(), [n, r] = p(e, ["class", "style", "children"]), o = _(() => ({
    ...n.style,
    ...t.overlayTransition.style()
  }));
  return c(b.div, h({
    role: "presentation",
    get class() {
      return v(t.baseClasses().overlay, n.class);
    },
    get style() {
      return o();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}, bs = {
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
}, Ae = (e) => {
  e = q("Drawer", {
    id: `hope-drawer-${Ye()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = p(e, [...N, "size", "placement"]), {
    baseClasses: n,
    styleOverrides: r
  } = us("Drawer", t), {
    headingId: o,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: a,
    overlayTransition: l,
    onContainerMouseDown: g,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: m
  } = Ln(e), f = Xe(() => e.isOpen, () => {
    var C;
    return D({
      transition: bs[e.placement],
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (C = e.contentTransitionOptions) != null ? C : {});
  }), y = {
    baseClasses: n,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: f,
    overlayTransition: l,
    contentId: () => e.id,
    headingId: o,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: a,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: g,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: m
  };
  return c($, {
    get when() {
      return l.keepMounted() && f.keepMounted();
    },
    get children() {
      return c(Ke, {
        get children() {
          return c(qn.Provider, {
            value: y,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
Ae.Overlay = ps;
Ae.Content = ms;
Ae.CloseButton = gs;
Ae.Heading = hs;
Ae.Description = fs;
const Ia = (e) => {
  const [t, n] = p(e, ["class", "direction", "wrap", "align", "justify"]);
  return c(b.div, h({
    get class() {
      return v("hope-Flex-root", t.class);
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
}, tn = {
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
}, ys = P(
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
        ...tn,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...tn,
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
), Yn = Q();
function Rt() {
  return J(Yn);
}
function Et() {
  const e = Rt();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const vs = (e) => {
  const t = Et(), [n, r] = p(e, ["id", "class", "__css"]), o = () => {
    var i;
    return (i = n.id) != null ? i : t.descriptionId();
  };
  return se(() => t.setHasDescription(!0)), I(() => t.setHasDescription(!1)), c(b.div, h({
    get id() {
      return o();
    },
    get ["data-required"]() {
      return k(t.isRequired());
    },
    get ["data-disabled"]() {
      return k(t.isDisabled());
    },
    get ["data-readonly"]() {
      return k(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return k(t.isInvalid());
    },
    get class() {
      return v(t.baseClasses().description, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().description,
        ...n.__css
      };
    }
  }, r));
}, Cs = (e) => {
  const t = Et(), [n, r] = p(e, ["id", "class", "__css"]), o = () => {
    var i;
    return (i = n.id) != null ? i : t.errorId();
  };
  return se(() => t.setHasError(!0)), I(() => t.setHasError(!1)), c(b.div, h({
    "aria-live": "polite",
    get id() {
      return o();
    },
    get ["data-required"]() {
      return k(t.isRequired());
    },
    get ["data-disabled"]() {
      return k(t.isDisabled());
    },
    get ["data-readonly"]() {
      return k(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return k(t.isInvalid());
    },
    get class() {
      return v(t.baseClasses().error, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().error,
        ...n.__css
      };
    }
  }, r));
}, xs = (e) => {
  const t = Et(), [n, r] = p(e, ["id", "for", "class", "__css"]), o = () => {
    var s;
    return (s = n.id) != null ? s : t.labelId();
  }, i = () => {
    var s;
    return (s = n.for) != null ? s : t.id();
  };
  return c(b.label, h({
    get id() {
      return o();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return k(t.isRequired());
    },
    get ["data-disabled"]() {
      return k(t.isDisabled());
    },
    get ["data-readonly"]() {
      return k(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return k(t.isInvalid());
    },
    get class() {
      return v(t.baseClasses().label, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().label,
        ...n.__css
      };
    }
  }, r));
}, Tt = (e) => {
  e = q("FormControl", {
    id: `hope-form-control-${Ye()}`
  }, e);
  const [t, n, r] = p(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...N, "withRequiredIndicator"]), [o, i] = w(!1), [s, a] = w(!1), {
    baseClasses: l,
    styleOverrides: g
  } = ys("FormControl", n), d = () => `${e.id}-description`, u = () => `${e.id}-error`, m = () => e.isInvalid, y = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: d,
    errorId: u,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: m,
    unstyled: () => n.unstyled,
    baseClasses: l,
    styleOverrides: g,
    hasDescription: o,
    setHasDescription: i,
    hasError: s,
    setHasError: a,
    mergeAriaDescribedBy: (C) => {
      const S = C ? [C] : [];
      return s() && m() && S.push(u()), o() && S.push(d()), S.join(" ") || void 0;
    }
  };
  return c(Yn.Provider, {
    value: y,
    get children() {
      return c(b.div, h({
        role: "group",
        get ["data-required"]() {
          return k(y.isRequired());
        },
        get ["data-disabled"]() {
          return k(y.isDisabled());
        },
        get ["data-readonly"]() {
          return k(y.isReadOnly());
        },
        get ["data-invalid"]() {
          return k(y.isInvalid());
        },
        get class() {
          return v(l().root, t.class);
        },
        get __css() {
          return g().root;
        }
      }, r));
    }
  });
};
Tt.Label = xs;
Tt.Description = vs;
Tt.Error = Cs;
const ws = (e) => {
  const [t, n] = p(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return c(b.div, h({
    get class() {
      return v("hope-GridItem-root", t.class);
    },
    get __css() {
      return Bn({
        gridArea: t.area,
        gridColumn: nn(t.colSpan),
        gridRow: nn(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, n));
};
function nn(e) {
  return V(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const Kn = (e) => {
  const [t, n] = p(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return c(b.div, h({
    get class() {
      return v("hope-Grid-root", t.class);
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
Kn.Item = ws;
const Oa = (e) => {
  const [t, n] = p(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), r = he(), o = () => t.minChildWidth ? Ss(t.minChildWidth, r.vars) : ks(t.columns);
  return c(Kn, h({
    get templateColumns() {
      return o();
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
function Ss(e, t) {
  return V(e, (n) => {
    const r = xn(n, "sizes", t);
    return Mn(n) ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function ks(e) {
  return V(e, (t) => Mn(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const _s = P({
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
}), Ra = (e) => {
  e = q("Heading", {}, e);
  const [t, n, r] = p(e, ["as", "class", "level", "lineClamp"], [...N, "size"]), {
    baseClasses: o,
    styleOverrides: i
  } = _s("Heading", n), s = () => t.level ? `h${t.level}` : t.as, a = _(() => ({
    ...i().root,
    ...$n(t.lineClamp)
  }));
  return c(b.h2, h({
    get as() {
      return s();
    },
    get class() {
      return v(o().root, t.class);
    },
    get __css() {
      return a();
    }
  }, r));
};
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
function Is(e) {
  const [t, n] = w("pending"), r = () => e.ignoreFallback ? "loaded" : t();
  let o = null;
  const i = () => {
    o && (o.onload = null, o.onerror = null, o = null);
  }, s = () => {
    if (!e.src)
      return;
    i();
    const a = new Image();
    a.src = e.src, e.crossOrigin && (a.crossOrigin = e.crossOrigin), e.srcSet && (a.srcset = e.srcSet), e.sizes && (a.sizes = e.sizes), e.loading && (a.loading = e.loading), a.onload = (l) => {
      i(), n("loaded"), T(e.onLoad, l);
    }, a.onerror = (l) => {
      i(), n("failed"), T(e.onError, l);
    }, o = a;
  };
  return H(() => {
    n(e.src ? "loading" : "pending");
  }), cn(() => {
    e.ignoreFallback || (t() === "loading" && s(), I(() => {
      i();
    }));
  }), r;
}
const Ea = (e) => {
  const [t, n, r] = p(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), o = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = Is(qe(e, {
    get ignoreFallback() {
      return o();
    }
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...o() ? n : {},
    ...r
  });
  return c($, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return c($, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return c(b.img, h({
            get src() {
              return t.fallbackSrc;
            },
            class: "hope-Image-placeholder"
          }, s));
        },
        get children() {
          return t.fallback;
        }
      });
    },
    get children() {
      return c(b.img, h({
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
          return v("hope-Image-root", t.class);
        }
      }, s));
    }
  });
}, Ta = (e) => {
  const [t, n] = p(e, ["class"]);
  return c(b.img, h({
    get class() {
      return v("hope-Image-root", t.class);
    }
  }, n));
}, Xn = {
  variant: "outlined",
  size: "md"
}, j = {
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
}, Os = P(
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
            light: `0 0 0 3px ${M(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${M(e.colors.primary.darkChannel, 0.75)}`
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
            light: `0 0 0 3px ${M(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${M(e.colors.danger.darkChannel, 0.75)}`
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
            ...j.sm,
            px: 2.5
          },
          md: {
            ...j.md,
            px: 3
          },
          lg: {
            ...j.lg,
            px: 4
          }
        }
      }
    }
  }),
  Xn
), Gn = Q();
function Un() {
  return J(Gn);
}
function Qn() {
  const e = Un();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const za = (e) => {
  const t = Rt(), n = Un();
  e = q("Input", {}, e);
  const [r, o, i] = p(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...N, "variant", "size"]), {
    baseClasses: s,
    styleOverrides: a
  } = Os("Input", {
    get variant() {
      var f;
      return (f = n == null ? void 0 : n.variant()) != null ? f : o.variant;
    },
    get size() {
      var f;
      return (f = n == null ? void 0 : n.size()) != null ? f : o.size;
    },
    get styleConfigOverride() {
      return o.styleConfigOverride;
    },
    get unstyled() {
      var f;
      return (f = n == null ? void 0 : n.unstyled()) != null ? f : o.unstyled;
    }
  }), l = () => {
    var f, y;
    return (y = (f = r.isRequired) != null ? f : n == null ? void 0 : n.isRequired()) != null ? y : t == null ? void 0 : t.isRequired();
  }, g = () => {
    var f, y;
    return (y = (f = r.isDisabled) != null ? f : n == null ? void 0 : n.isDisabled()) != null ? y : t == null ? void 0 : t.isDisabled();
  }, d = () => {
    var f, y;
    return (y = (f = r.isReadOnly) != null ? f : n == null ? void 0 : n.isReadOnly()) != null ? y : t == null ? void 0 : t.isReadOnly();
  }, u = () => {
    var f, y;
    return (y = (f = r.isInvalid) != null ? f : n == null ? void 0 : n.isInvalid()) != null ? y : t == null ? void 0 : t.isInvalid();
  }, m = () => t == null ? void 0 : t.mergeAriaDescribedBy(r["aria-describedby"]);
  return c(b.input, h({
    type: "text",
    get id() {
      var f;
      return (f = r.id) != null ? f : t == null ? void 0 : t.id();
    },
    get required() {
      return l();
    },
    get disabled() {
      return g();
    },
    get readOnly() {
      return d();
    },
    get ["aria-invalid"]() {
      return _i(u());
    },
    get ["aria-describedby"]() {
      return m();
    },
    get size() {
      return r.htmlSize;
    },
    get class() {
      return v(n == null ? void 0 : n.baseClasses().input, s().root, r.class);
    },
    get __css() {
      return {
        ...n == null ? void 0 : n.styleOverrides().input,
        ...a().root,
        ...r.__css
      };
    }
  }, i));
};
function gt(e) {
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
const Rs = P(
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
        ...gt({
          size: "sm",
          paddingWithSection: 8
        }),
        ...gt({
          size: "md",
          paddingWithSection: 10
        }),
        ...gt({
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
            ...j.sm,
            height: "100%",
            width: j.sm.minHeight
          },
          md: {
            ...j.md,
            height: "100%",
            width: j.md.minHeight
          },
          lg: {
            ...j.lg,
            height: "100%",
            width: j.lg.minHeight
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
            ...j.sm,
            px: 2.5
          },
          md: {
            ...j.md,
            px: 3
          },
          lg: {
            ...j.lg,
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
  Xn
), Jn = (e) => {
  const t = Qn(), [n, r] = p(e, ["class", "__css", "addonPlacement"]), o = _(() => {
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
  return se(() => {
    switch (n.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), I(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), I(() => t.setHasRightAddon(!1));
        break;
    }
  }), c(b.div, h({
    get ["data-required"]() {
      return k(t.isRequired());
    },
    get ["data-disabled"]() {
      return k(t.isDisabled());
    },
    get ["data-readonly"]() {
      return k(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return k(t.isInvalid());
    },
    get class() {
      return v(t.baseClasses().addon, o().className, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().addon,
        ...o().styleOverride,
        ...n.__css
      };
    }
  }, r));
}, Es = (e) => c(Jn, h({
  addonPlacement: "left"
}, e)), Ts = (e) => c(Jn, h({
  addonPlacement: "right"
}, e)), Zn = (e) => {
  const t = Qn(), [n, r] = p(e, ["class", "__css", "sectionPlacement"]), o = _(() => {
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
  return se(() => {
    switch (n.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), I(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), I(() => t.setHasRightSection(!1));
        break;
    }
  }), c(b.div, h({
    get ["data-required"]() {
      return k(t.isRequired());
    },
    get ["data-disabled"]() {
      return k(t.isDisabled());
    },
    get ["data-readonly"]() {
      return k(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return k(t.isInvalid());
    },
    get class() {
      return v(t.baseClasses().section, o().className, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().section,
        ...o().styleOverride,
        ...n.__css
      };
    }
  }, r));
}, zs = (e) => c(Zn, h({
  sectionPlacement: "left"
}, e)), $s = (e) => c(Zn, h({
  sectionPlacement: "right"
}, e)), tt = (e) => {
  const t = Rt();
  e = q("InputGroup", {}, e);
  const [n, r, o] = p(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...N, "variant", "size"]), [i, s] = w(!1), [a, l] = w(!1), [g, d] = w(!1), [u, m] = w(!1), {
    baseClasses: f,
    styleOverrides: y
  } = Rs("InputGroup", {
    get variant() {
      return r.variant;
    },
    get size() {
      return r.size;
    },
    get hasLeftSection() {
      return i();
    },
    get hasRightSection() {
      return a();
    },
    get hasLeftAddon() {
      return g();
    },
    get hasRightAddon() {
      return u();
    },
    get styleConfigOverride() {
      return r.styleConfigOverride;
    },
    get unstyled() {
      return r.unstyled;
    }
  }), C = {
    isRequired: () => {
      var S;
      return (S = e.isRequired) != null ? S : t == null ? void 0 : t.isRequired();
    },
    isDisabled: () => {
      var S;
      return (S = e.isDisabled) != null ? S : t == null ? void 0 : t.isDisabled();
    },
    isReadOnly: () => {
      var S;
      return (S = e.isReadOnly) != null ? S : t == null ? void 0 : t.isReadOnly();
    },
    isInvalid: () => {
      var S;
      return (S = e.isInvalid) != null ? S : t == null ? void 0 : t.isInvalid();
    },
    variant: () => r.variant,
    size: () => r.size,
    unstyled: () => r.unstyled,
    baseClasses: f,
    styleOverrides: y,
    setHasLeftSection: s,
    setHasRightSection: l,
    setHasLeftAddon: d,
    setHasRightAddon: m
  };
  return c(Gn.Provider, {
    value: C,
    get children() {
      return c(b.div, h({
        get ["data-required"]() {
          return k(C.isRequired());
        },
        get ["data-disabled"]() {
          return k(C.isDisabled());
        },
        get ["data-readonly"]() {
          return k(C.isReadOnly());
        },
        get ["data-invalid"]() {
          return k(C.isInvalid());
        },
        get class() {
          return v(f().root, n.class);
        },
        get __css() {
          return y().root;
        }
      }, o));
    }
  });
};
tt.LeftAddon = Es;
tt.RightAddon = Ts;
tt.LeftSection = zs;
tt.RightSection = $s;
const Ds = P({
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
}), $a = (e) => {
  const [t, n, r] = p(e, ["class"], N), {
    baseClasses: o,
    styleOverrides: i
  } = Ds("Kbd", n);
  return c(b.kbd, h({
    get class() {
      return v(o().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}, Ls = P((e) => ({
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
})), er = Q();
function pe() {
  const e = J(er);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const As = (e) => {
  pe();
  const [t, n] = p(e, ["ref"]);
  return c(b.div, n);
}, Ms = (e) => {
  const t = pe();
  e = D({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [n, r] = p(e, ["class", "onClick"]);
  return c(_t, h({
    get class() {
      return v("hope-Popover-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), T(n.onClick, i), t.onCloseButtonClick();
    }
  }, r));
};
var Fs = ["<svg", ' display="block"', "><g", '><path fill="none"', '></path><path stroke="none"', "></path></g></svg>"];
const rn = "M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z", Ne = 30, oe = Ne / 2, Hs = `0 0 ${Ne} ${Ne}`, Bs = {
  top: `rotate(180 ${oe} ${oe})`,
  right: `rotate(-90 ${oe} ${oe})`,
  bottom: `rotate(0 ${oe} ${oe})`,
  left: `rotate(90 ${oe} ${oe})`
}, Ps = (e) => {
  const t = pe(), [n, r] = p(e, ["ref", "class", "style", "children"]), o = () => t.currentPlacement().split("-")[0], i = Ws(t.contentRef), s = () => {
    var d;
    return ((d = i()) == null ? void 0 : d.getPropertyValue("background-color")) || "none";
  }, a = () => {
    var d;
    return ((d = i()) == null ? void 0 : d.getPropertyValue(`border-${o()}-color`)) || "none";
  }, l = () => {
    var d;
    return ((d = i()) == null ? void 0 : d.getPropertyValue(`border-${o()}-width`)) || "0px";
  }, g = () => parseInt(l()) * 2 * (Ne / t.arrowSize());
  return c(b.div, h({
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: s(),
        stroke: a(),
        "stroke-width": g(),
        ...n.style
      };
    },
    get class() {
      return v(t.baseClasses().arrow, n.class);
    },
    get __css() {
      return t.styleOverrides().arrow;
    }
  }, r, {
    get children() {
      return me(Fs, fe(), Ee("viewBox", Se(Hs, !0), !1), Ee("transform", Se(Bs[o()], !0), !1), Ee("d", Se(rn, !0), !1), Ee("d", Se(rn, !0), !1));
    }
  }));
};
function Ws(e) {
  const [t, n] = w();
  return cn(() => {
    const r = e();
    r && n(Si(r).getComputedStyle(r));
  }), t;
}
const js = (e) => {
  const t = pe(), [n, r] = p(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), o = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (u) => {
    u.stopPropagation(), T(n.onKeyDown, u), T(t.onContentKeyDown, u);
  }, a = (u) => {
    T(n.onFocusOut, u), T(t.onContentFocusOut, u);
  }, l = (u) => {
    T(n.onMouseEnter, u), i() && t.onContentMouseEnter();
  }, g = (u) => {
    T(n.onMouseLeave, u), i() && T(t.onContentMouseLeave, u);
  }, d = _(() => ({
    ...n.style,
    ...t.popoverTransition.style()
  }));
  return c($, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return c(Ke, {
        get children() {
          return c(It, h({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return o();
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
              return v(t.baseClasses().root, n.class);
            },
            get style() {
              return d();
            },
            get __css() {
              return t.styleOverrides().root;
            },
            onKeyDown: s,
            onFocusOut: a,
            onMouseEnter: l,
            onMouseLeave: g
          }, r, {
            get children() {
              return [c($, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return c(Ps, {});
                }
              }), n.children];
            }
          }));
        }
      });
    }
  });
}, Vs = (e) => {
  const t = pe(), [n, r] = p(e, ["class"]);
  return H(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), I(() => t.setDescriptionId(void 0));
  }), c(b.p, h({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return v(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, Ns = (e) => {
  const t = pe(), [n, r] = p(e, ["class"]);
  return H(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), I(() => t.setHeadingId(void 0));
  }), c(b.h2, h({
    get id() {
      return t.headingId();
    },
    get class() {
      return v(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, qs = (e) => {
  const t = pe(), [n, r] = p(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), o = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (m) => {
    T(n.onClick, m), o() && (m.stopPropagation(), t.onTriggerClick());
  }, a = (m) => {
    T(n.onKeyDown, m), i() && (m.stopPropagation(), T(t.onTriggerKeyDown, m));
  }, l = (m) => {
    T(n.onFocus, m), i() && t.onTriggerFocus();
  }, g = (m) => {
    T(n.onBlur, m), i() && T(t.onTriggerBlur, m);
  }, d = (m) => {
    T(n.onMouseEnter, m), i() && t.onTriggerMouseEnter();
  }, u = (m) => {
    T(n.onMouseLeave, m), i() && t.onTriggerMouseLeave();
  };
  return c(b.button, h({
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
    onClick: s,
    onKeyDown: a,
    onFocus: l,
    onBlur: g,
    onMouseEnter: d,
    onMouseLeave: u
  }, r));
};
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */
function on(e) {
  const { x: t = 0, y: n = 0, width: r = 0, height: o = 0 } = e != null ? e : {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, n, r, o);
  const i = {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: n + o,
    left: t
  };
  return { ...i, toJSON: () => i };
}
function Ys(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const r = t(e);
      return r ? on(r) : e ? e.getBoundingClientRect() : on();
    }
  };
}
const _e = (e) => {
  e = q("Popover", {
    getAnchorRect: (x) => x == null ? void 0 : x.getBoundingClientRect(),
    id: `hope-popover-${Ye()}`,
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
  const [t] = p(e, [...N]), {
    baseClasses: n,
    styleOverrides: r
  } = Ls("Popover", t), [o, i] = w(), [s, a] = w(), [l, g] = w(), [d, u] = w(), [m, f] = w(!1), [y, C] = w(e.placement), [S, z] = w(), [F, L] = w(), O = Lr({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (x) => {
      var R;
      return (R = e.onOpenChange) == null ? void 0 : R.call(e, x);
    }
  }), ae = Xe(() => O.isOpen(), () => {
    var x;
    return D({
      transition: "pop",
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (x = e.transitionOptions) != null ? x : {});
  }), ee = () => {
    var ne;
    const x = Ys((ne = o()) != null ? ne : s(), e.getAnchorRect), R = d(), B = l();
    return {
      anchorEl: x,
      arrowEl: R,
      floatingEl: B
    };
  };
  async function te() {
    var zt;
    const {
      anchorEl: x,
      arrowEl: R,
      floatingEl: B
    } = ee();
    if (!x || !B)
      return;
    x.getBoundingClientRect();
    const ne = [ur(e.offset), gr({
      padding: e.overflowPadding
    }), mr({
      padding: e.overflowPadding
    }), fr({
      padding: e.overflowPadding,
      apply({
        rects: Me
      }) {
        const Fe = Math.round(Me.reference.width);
        e.hasSameWidth && (B.style.width = `${Fe}px`);
      }
    })];
    R && ne.push(hr({
      element: R,
      padding: e.arrowPadding
    })), ne.push(pr());
    const K = await br(x, B, {
      placement: e.placement,
      middleware: ne
    });
    if (K.placement !== y() && C(K.placement), !!B && (Object.assign(B.style, {
      left: `${Math.round(K.x)}px`,
      top: `${Math.round(K.y)}px`,
      visibility: (zt = K.middlewareData.hide) != null && zt.referenceHidden ? "hidden" : "visible"
    }), R && K.middlewareData.arrow)) {
      const {
        x: Me,
        y: Fe
      } = K.middlewareData.arrow, nr = K.placement.split("-")[0];
      Object.assign(R.style, {
        left: Me != null ? `${Me}px` : "",
        top: Fe != null ? `${Fe}px` : "",
        [nr]: "100%"
      });
    }
  }
  let W, X;
  const le = () => {
    O.toggle();
  }, ce = (x) => {
    x.key === "Escape" && O.close();
  }, de = () => {
    W == null && O.open();
  }, be = (x) => {
    const R = Kt(x), B = !dt(l(), R);
    O.isOpen() && e.closeOnBlur && B && O.close();
  }, ye = () => {
    f(!0), W = window.setTimeout(() => {
      O.open(), te();
    }, e.openDelay);
  }, ve = () => {
    f(!1), W && (clearTimeout(W), W = void 0), X = window.setTimeout(() => {
      m() || O.close();
    }, e.closeDelay);
  }, Y = (x) => {
    e.closeOnEsc && x.key === "Escape" && O.close();
  }, ue = (x) => {
    const R = Kt(x), B = dt(l(), R), ne = dt(s(), R), K = !B && !ne;
    O.isOpen() && e.closeOnBlur && K && O.close();
  }, Ce = () => {
    f(!0);
  }, nt = (x) => {
    x.relatedTarget !== null && (f(!1), X = window.setTimeout(O.close, e.closeDelay));
  }, rt = () => {
    O.close();
  };
  H(() => {
    const {
      anchorEl: x,
      floatingEl: R
    } = ee();
    if (!x || !R)
      return;
    const B = dr(x, R, te, {
      elementResize: typeof ResizeObserver == "function"
    });
    I(B);
  }), I(() => {
    Z || (window.clearTimeout(W), window.clearTimeout(X));
  });
  const xe = {
    baseClasses: n,
    styleOverrides: r,
    isOpen: O.isOpen,
    popoverTransition: ae,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: y,
    popoverId: () => e.id,
    headingId: S,
    setHeadingId: z,
    descriptionId: F,
    setDescriptionId: L,
    contentRef: l,
    setContentRef: g,
    setArrowRef: u,
    setAnchorRef: i,
    setTriggerRef: a,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: le,
    onTriggerKeyDown: ce,
    onTriggerFocus: de,
    onTriggerBlur: be,
    onTriggerMouseEnter: ye,
    onTriggerMouseLeave: ve,
    onContentKeyDown: Y,
    onContentFocusOut: ue,
    onContentMouseEnter: Ce,
    onContentMouseLeave: nt,
    onCloseButtonClick: rt
  };
  return c(er.Provider, {
    value: xe,
    get children() {
      return zi(e.children, O);
    }
  });
};
_e.Trigger = qs;
_e.Anchor = As;
_e.Content = js;
_e.CloseButton = Ms;
_e.Heading = Ns;
_e.Description = Vs;
function Da(e) {
  const [t, n] = p(e, ["children", "withinPortal"]);
  return c($, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return c(Ke, h(n, {
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
const La = b("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), tr = (e) => {
  e = D({
    align: "center"
  }, e);
  const [t, n] = p(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return c(b.div, h({
    get class() {
      return v("hope-Stack-root", t.class);
    },
    get __css() {
      return Bn({
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
}, Aa = (e) => {
  e = D({
    reverse: !1
  }, e);
  const [t, n] = p(e, ["reverse"]);
  return c(tr, h(n, {
    get direction() {
      return V(t.reverse, (r) => r ? "row-reverse" : "row");
    }
  }));
}, Ma = (e) => {
  e = D({
    reverse: !1
  }, e);
  const [t, n] = p(e, ["reverse"]);
  return c(tr, h(n, {
    get direction() {
      return V(t.reverse, (r) => r ? "column-reverse" : "column");
    }
  }));
}, Ks = P({
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
}), Fa = (e) => {
  e = q("Text", {}, e);
  const [t, n, r] = p(e, ["class", "lineClamp"], [...N, "size"]), {
    baseClasses: o,
    styleOverrides: i
  } = Ks("Text", n), s = _(() => ({
    ...i().root,
    ...$n(t.lineClamp)
  }));
  return c(b.p, h({
    get class() {
      return v(o().root, t.class);
    },
    get __css() {
      return s();
    }
  }, r));
};
export {
  ya as Anchor,
  va as AspectRatio,
  Ca as Box,
  ls as Button,
  xa as ButtonGroup,
  ge as COLOR_MODE_CLASSNAMES,
  Ze as COLOR_MODE_STORAGE_KEY,
  Sa as Center,
  _t as CloseButton,
  Rn as ColorModeContext,
  bi as ColorModeProvider,
  ha as ColorModeScript,
  ka as Container,
  St as DEFAULT_THEME,
  $o as DEFAULT_THEME_MAP,
  na as DEFAULT_TRANSITIONS_NAMES,
  _a as Divider,
  Ae as Drawer,
  gs as DrawerCloseButton,
  ms as DrawerContent,
  fs as DrawerDescription,
  hs as DrawerHeading,
  ps as DrawerOverlay,
  Ia as Flex,
  It as FocusTrapRegion,
  Tt as FormControl,
  Yn as FormControlContext,
  vs as FormControlDescription,
  Cs as FormControlError,
  xs as FormControlLabel,
  Kn as Grid,
  ws as GridItem,
  Aa as HStack,
  Ra as Heading,
  ba as HopeProvider,
  Li as Icon,
  wa as IconButton,
  Ea as Image,
  Ta as Img,
  za as Input,
  tt as InputGroup,
  Es as InputGroupLeftAddon,
  zs as InputGroupLeftSection,
  Ts as InputGroupRightAddon,
  $s as InputGroupRightSection,
  $a as Kbd,
  De as Modal,
  Pi as ModalCloseButton,
  ji as ModalContent,
  Vi as ModalDescription,
  Ni as ModalHeading,
  qi as ModalOverlay,
  Da as OptionalPortal,
  _e as Popover,
  As as PopoverAnchor,
  Ps as PopoverArrow,
  Ms as PopoverCloseButton,
  js as PopoverContent,
  Vs as PopoverDescription,
  Ns as PopoverHeading,
  qs as PopoverTrigger,
  N as STYLE_CONFIG_PROP_NAMES,
  Oa as SimpleGrid,
  La as Spacer,
  tr as Stack,
  Fa as Text,
  Ho as ThemeProvider,
  Ma as VStack,
  Wi as VisuallyHidden,
  pa as VisuallyHiddenInput,
  eo as arrayToObjectNotation,
  _n as computeStyleOptions,
  ma as cookieStorageManager,
  fa as cookieStorageManagerSSR,
  ea as createControllableArraySignal,
  Dr as createControllableBooleanSignal,
  mn as createControllableSignal,
  En as createCookieStorageManager,
  Lr as createDisclosure,
  aa as createGlobalStyles,
  la as createHopeComponent,
  Pn as createIcon,
  Is as createImageLoadingStatus,
  ta as createInteractOutside,
  di as createLocalStorageManager,
  we as createPalette,
  Mr as createPreventScroll,
  ra as createQueue,
  Br as createReducedMotion,
  P as createStyleConfig,
  ca as createStyles,
  Pr as createTagName,
  Xe as createTransition,
  sa as extendTheme,
  ua as fadeIn,
  kt as focusStyles,
  In as getSelectedVariantClassNames,
  b as hope,
  da as injectCriticalStyle,
  Jr as isColorModeObjectLike,
  to as isResponsiveObjectLike,
  bn as keyframes,
  $n as lineClamp,
  ui as localStorageManager,
  V as mapResponsive,
  D as mergeDefaultProps,
  q as mergeThemeProps,
  Zr as objectToArrayNotation,
  Nr as pack,
  xn as resolveTokenValue,
  M as rgba,
  li as spin,
  os as useButtonGroupContext,
  oa as useClickOutside,
  ci as useColorMode,
  ga as useColorModeValue,
  Fo as useComponentTheme,
  ia as useEvent,
  Rt as useFormControlContext,
  Et as useRequiredFormControlContext,
  he as useTheme,
  Xi as watchModals
};
