import { createSignal as R, createMemo as E, untrack as $r, createEffect as U, onCleanup as B, on as In, mergeProps as nt, sharedConfig as Or, onMount as xe, getOwner as Er, DEV as zr, createContext as ge, useContext as fe, splitProps as v, Show as H, createUniqueId as rt, children as Tr, createRenderEffect as Rn } from "solid-js";
import { isServer as ye, createComponent as m, useAssets as Br, effect as zt, template as Ce, Dynamic as Ar, mergeProps as b, setAttribute as $n, memo as Fe, Portal as ot, insert as Mr } from "solid-js/web";
import { autoUpdate as Dr, offset as Lr, flip as Wr, shift as Pr, size as Fr, arrow as Hr, hide as jr, computePosition as Nr } from "@floating-ui/dom";
function On(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Vr(e) {
  const t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function En(e) {
  for (; e && !Vr(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function wt(e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
var D = (e) => typeof e == "function" && !e.length ? e() : e;
function qr(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function Tt(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) == null ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Yr() {
  return Tt(/^Mac/i);
}
function Kr() {
  return Tt(/^iPhone/i);
}
function Xr() {
  return Tt(/^iPad/i) || Yr() && navigator.maxTouchPoints > 1;
}
function Gr() {
  return Kr() || Xr();
}
function Yt(e) {
  return On(e) ? e : void 0;
}
function zn(e) {
  var t;
  const [n, r] = R((t = e.defaultValue) == null ? void 0 : t.call(e)), o = E(() => {
    var s;
    return ((s = e.value) == null ? void 0 : s.call(e)) !== void 0;
  }), i = E(() => {
    var s;
    return o() ? (s = e.value) == null ? void 0 : s.call(e) : n();
  });
  return [i, (s) => {
    $r(() => {
      var a;
      const l = qr(s, i());
      return Object.is(l, i()) || (o() || r(l), (a = e.onChange) == null || a.call(e, l)), l;
    });
  }];
}
function Ur(e) {
  const [t, n] = zn(e);
  return [() => {
    var r;
    return (r = t()) != null ? r : !1;
  }, n];
}
function Ga(e) {
  const [t, n] = zn(e);
  return [() => {
    var r;
    return (r = t()) != null ? r : [];
  }, n];
}
function Zr(e = {}) {
  const [t, n] = Ur({
    value: () => D(e.isOpen),
    defaultValue: () => !!D(e.defaultIsOpen),
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
function Ua(e, t) {
  const [n, r] = R(!1);
  U(() => {
    if (D(e.isDisabled))
      return;
    const o = (s) => {
      var a;
      Kt(s, t()) && ((a = e.onInteractOutsideStart) == null || a.call(e, s), r(!0));
    }, i = (s) => {
      var a;
      n() && Kt(s, t()) && (r(!1), (a = e.onInteractOutside) == null || a.call(e, s));
    };
    document.addEventListener("pointerdown", o, !0), document.addEventListener("pointerup", i, !0), B(() => {
      document.removeEventListener("pointerdown", o, !0), document.removeEventListener("pointerup", i, !0);
    });
  });
}
function Kt(e, t) {
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
const ht = typeof window < "u" && window.visualViewport, Jr = /* @__PURE__ */ new Set([
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
function Qr(e) {
  U(
    In(
      () => D(e.isEnabled),
      (t) => {
        !t || (Gr() ? B(to()) : B(eo()));
      }
    )
  );
}
function eo() {
  return wt([
    Pe(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    Pe(document.documentElement, "overflow", "hidden")
  ]);
}
function to() {
  let e, t = 0;
  const n = (u) => {
    e = En(u.target), !(e === document.documentElement && e === document.body) && (t = u.changedTouches[0].pageY);
  }, r = (u) => {
    if (e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    const d = u.changedTouches[0].pageY, f = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    (f <= 0 && d > t || f >= h && d < t) && u.preventDefault(), t = d;
  }, o = (u) => {
    const d = u.target;
    Gt(d) && d !== document.activeElement && (u.preventDefault(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    }));
  }, i = (u) => {
    const d = u.target;
    Gt(d) && (d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", ht && (ht.height < window.innerHeight ? requestAnimationFrame(() => {
        Xt(d);
      }) : ht.addEventListener("resize", () => Xt(d), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, a = window.pageXOffset, l = window.pageYOffset, g = wt([
    Pe(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    Pe(document.documentElement, "overflow", "hidden"),
    Pe(document.body, "marginTop", `-${l}px`)
  ]);
  window.scrollTo(0, 0);
  const c = wt([
    Be(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    Be(document, "touchmove", r, {
      passive: !1,
      capture: !0
    }),
    Be(document, "touchend", o, {
      passive: !1,
      capture: !0
    }),
    Be(document, "focus", i, !0),
    Be(window, "scroll", s)
  ]);
  return () => {
    g(), c(), window.scrollTo(a, l);
  };
}
function Pe(e, t, n) {
  const r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Be(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Xt(e) {
  const t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    const n = En(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      const r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top;
      o > r + e.clientHeight && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Gt(e) {
  return e instanceof HTMLInputElement && !Jr.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var no = !ye, ro = no && !!zr, oo = ro ? (e) => Er() ? B(e) : e : B;
function io(e, t, n) {
  if (ye)
    return R(e, n);
  if (Or.context) {
    const [r, o] = R(e, n);
    return xe(() => o(() => t())), [r, o];
  }
  return R(t(), n);
}
function so(e, t, n, r) {
  return e.addEventListener(t, n, r), oo(e.removeEventListener.bind(e, t, n, r));
}
function Tn(e, t = !1) {
  if (ye)
    return () => t;
  const n = window.matchMedia(e), [r, o] = io(t, () => n.matches);
  return so(n, "change", () => o(n.matches)), r;
}
function ao(e) {
  return Tn("(prefers-color-scheme: dark)", e);
}
ao.bind(void 0, !1);
function lo(e, t) {
  return Tn("(prefers-reduced-motion: reduce)", e);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function co(e, t) {
  const [n, r] = R(Yt(t == null ? void 0 : t()));
  return U(() => {
    var o;
    r(((o = e()) == null ? void 0 : o.tagName.toLowerCase()) || Yt(t == null ? void 0 : t()));
  }), n;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const Ae = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, kt = {
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
    ...Ae,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...Ae,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...Ae,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...Ae,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...Ae,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, Za = Object.keys(kt);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const Ut = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function uo(e) {
  const t = {
    "transition-duration": `${e.duration}ms`,
    "transition-timing-function": e.easing
  };
  if (On(e.transition)) {
    if (!(e.transition in kt))
      return {};
    const n = kt[e.transition];
    return {
      "transition-property": Zt(n),
      ...t,
      ...n.common,
      ...n[Ut[e.phase]]
    };
  }
  return {
    "transition-property": Zt(e.transition),
    ...t,
    ...e.transition.common,
    ...e.transition[Ut[e.phase]]
  };
}
function Zt(e) {
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
const Jt = 250, Qt = 10, en = "ease";
function it(e, t) {
  t = nt(
    {
      transition: "fade",
      duration: Jt,
      delay: Qt,
      easing: en,
      get exitDuration() {
        return D(t).duration || Jt;
      },
      get exitDelay() {
        return D(t).delay || Qt;
      },
      get exitEasing() {
        return D(t).easing || en;
      }
    },
    t
  );
  const n = lo(), [r, o] = R(n() ? 0 : D(t).duration), [i, s] = R(
    D(e) ? "afterEnter" : "afterExit"
  ), [a, l] = R(D(t).easing);
  let g = -1;
  const c = (f) => {
    const h = f ? D(t).onBeforeEnter : D(t).onBeforeExit, y = f ? D(t).onAfterEnter : D(t).onAfterExit;
    s(f ? "beforeEnter" : "beforeExit"), window.clearTimeout(g);
    const x = o(
      n() ? 0 : f ? D(t).duration : D(t).exitDuration
    );
    if (l(f ? D(t).easing : D(t).exitEasing), x === 0) {
      h == null || h(), y == null || y(), s(f ? "afterEnter" : "afterExit");
      return;
    }
    const S = n() ? 0 : f ? D(t).delay : D(t).exitDelay, _ = window.setTimeout(() => {
      h == null || h(), s(f ? "enter" : "exit");
    }, S);
    g = window.setTimeout(() => {
      window.clearTimeout(_), y == null || y(), s(f ? "afterEnter" : "afterExit");
    }, S + x);
  }, u = E(
    () => uo({
      transition: D(t).transition,
      duration: r(),
      phase: i(),
      easing: a()
    })
  ), d = E(() => i() !== "afterExit");
  return U(
    In(
      () => D(e),
      (f) => c(f),
      { defer: !0 }
    )
  ), B(() => {
    ye || window.clearTimeout(g);
  }), { keepMounted: d, style: u };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function Bn(e) {
  return typeof e == "number";
}
function st(e) {
  return Array.isArray(e);
}
function go(e) {
  return typeof e == "function";
}
function be(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !st(e);
}
function An(e) {
  return be(e) && Object.keys(e).length === 0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function fo(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function mo(e) {
  return e == null ? [] : st(e) ? e : [e];
}
function de(e, ...t) {
  return go(e) ? e(...t) : e;
}
function at(e) {
  let t = !1;
  return function(...n) {
    t || (t = !0, e(...n));
  };
}
function Ue(e, t, n = 1 / 0) {
  return !be(e) && !Array.isArray(e) || !n ? e : Object.entries(e).reduce((r, [o, i]) => (be(i) || st(i) ? Object.entries(Ue(i, t, n - 1)).forEach(([s, a]) => {
    r[`${o}${t}${s}`] = a;
  }) : r[o] = i, r), {});
}
function ho(e, t) {
  return Object.keys(e).reduce((n, r) => (r.split(t).reduce((o, i, s, a) => (o[i] != null || (o[i] = a.length - 1 === s ? e[r] : {}), o[i]), n), n), {});
}
function po(e, t) {
  return t.split(".").reduce((n, r) => n && n[r], e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function bo(e, t) {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
}
const yo = (e) => Object.keys(e);
function vo(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
function et(e) {
  return vo(e, (t) => t != null);
}
var $ = "colors", q = "sizes", p = "space", So = { gap: p, gridGap: p, columnGap: p, gridColumnGap: p, rowGap: p, gridRowGap: p, inset: p, insetBlock: p, insetBlockEnd: p, insetBlockStart: p, insetInline: p, insetInlineEnd: p, insetInlineStart: p, margin: p, marginTop: p, marginRight: p, marginBottom: p, marginLeft: p, marginBlock: p, marginBlockEnd: p, marginBlockStart: p, marginInline: p, marginInlineEnd: p, marginInlineStart: p, padding: p, paddingTop: p, paddingRight: p, paddingBottom: p, paddingLeft: p, paddingBlock: p, paddingBlockEnd: p, paddingBlockStart: p, paddingInline: p, paddingInlineEnd: p, paddingInlineStart: p, top: p, right: p, bottom: p, left: p, scrollMargin: p, scrollMarginTop: p, scrollMarginRight: p, scrollMarginBottom: p, scrollMarginLeft: p, scrollMarginX: p, scrollMarginY: p, scrollMarginBlock: p, scrollMarginBlockEnd: p, scrollMarginBlockStart: p, scrollMarginInline: p, scrollMarginInlineEnd: p, scrollMarginInlineStart: p, scrollPadding: p, scrollPaddingTop: p, scrollPaddingRight: p, scrollPaddingBottom: p, scrollPaddingLeft: p, scrollPaddingX: p, scrollPaddingY: p, scrollPaddingBlock: p, scrollPaddingBlockEnd: p, scrollPaddingBlockStart: p, scrollPaddingInline: p, scrollPaddingInlineEnd: p, scrollPaddingInlineStart: p, fontSize: "fontSizes", background: $, backgroundColor: $, backgroundImage: $, borderImage: $, border: $, borderBlock: $, borderBlockEnd: $, borderBlockStart: $, borderBottom: $, borderBottomColor: $, borderColor: $, borderInline: $, borderInlineEnd: $, borderInlineStart: $, borderLeft: $, borderLeftColor: $, borderRight: $, borderRightColor: $, borderTop: $, borderTopColor: $, caretColor: $, color: $, columnRuleColor: $, fill: $, outline: $, outlineColor: $, stroke: $, textDecorationColor: $, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: q, minBlockSize: q, maxBlockSize: q, inlineSize: q, minInlineSize: q, maxInlineSize: q, width: q, minWidth: q, maxWidth: q, height: q, minHeight: q, maxHeight: q, flexBasis: q, gridTemplateColumns: q, gridTemplateRows: q, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, xo = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, He = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((i) => JSON.stringify(i, xo))(t);
    return o in e ? e[o] : e[o] = n(t, ...r);
  };
}, Ze = Symbol.for("sxs.internal"), Bt = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), tn = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: Co } = Object.prototype, _t = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), wo = /\s+(?![^()]*\))/, Ie = (e) => (t) => e(...typeof t == "string" ? String(t).split(wo) : [t]), nn = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Ie((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Ie((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Ie((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Ie((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Ie((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Ie((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, pt = /([\d.]+)([^]*)/, ko = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, _o = (e, t) => e in Io && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, i) => r + (o === "stretch" ? `-moz-available${i};${_t(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${_t(e)}:${r}fit-content`) + i) : String(t), Io = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, ue = (e) => e ? e + "-" : "", Mn = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, i, s, a) => s == "$" == !!i ? r : (o || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? ue(t) + (a.includes("$") ? "" : ue(n)) + a.replace(/\$/g, "-") : a) + ")" + (o || s == "--" ? "*" + (o || "") + (i || "1") + ")" : "")), Ro = /\s*,\s*(?![^()]*\))/, $o = Object.prototype.toString, Oe = (e, t, n, r, o) => {
  let i, s, a;
  const l = (g, c, u) => {
    let d, f;
    const h = (y) => {
      for (d in y) {
        const _ = d.charCodeAt(0) === 64, W = _ && Array.isArray(y[d]) ? y[d] : [y[d]];
        for (f of W) {
          const k = /[A-Z]/.test(S = d) ? S : S.replace(/-[^]/g, (z) => z[1].toUpperCase()), X = typeof f == "object" && f && f.toString === $o && (!r.utils[k] || !c.length);
          if (k in r.utils && !X) {
            const z = r.utils[k];
            if (z !== s) {
              s = z, h(z(f)), s = null;
              continue;
            }
          } else if (k in nn) {
            const z = nn[k];
            if (z !== a) {
              a = z, h(z(f)), a = null;
              continue;
            }
          }
          if (_ && (x = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (z, A, M, F, P, N) => {
            const K = pt.test(A), re = 0.0625 * (K ? -1 : 1), [oe, le] = K ? [F, A] : [A, F];
            return "(" + (M[0] === "=" ? "" : M[0] === ">" === K ? "max-" : "min-") + oe + ":" + (M[0] !== "=" && M.length === 1 ? le.replace(pt, (J, ie, se) => Number(ie) + re * (M === ">" ? 1 : -1) + se) : le) + (P ? ") and (" + (P[0] === ">" ? "min-" : "max-") + oe + ":" + (P.length === 1 ? N.replace(pt, (J, ie, se) => Number(ie) + re * (P === ">" ? -1 : 1) + se) : N) : "") + ")";
          })), X) {
            const z = _ ? u.concat(d) : [...u], A = _ ? [...c] : ko(c, d.split(Ro));
            i !== void 0 && o(rn(...i)), i = void 0, l(f, A, z);
          } else
            i === void 0 && (i = [[], c, u]), d = _ || d.charCodeAt(0) !== 36 ? d : `--${ue(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, f = X ? f : typeof f == "number" ? f && k in Oo ? String(f) + "px" : String(f) : Mn(_o(k, f == null ? "" : f), r.prefix, r.themeMap[k]), i[0].push(`${_ ? `${d} ` : `${_t(d)}:`}${f}`);
        }
      }
      var x, S;
    };
    h(g), i !== void 0 && o(rn(...i)), i = void 0;
  };
  l(e, t, n);
}, rn = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, Oo = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, on = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), Se = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = on(n % 52) + r;
  return on(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), Le = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Eo = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, zo = (e) => {
  let t;
  const n = () => {
    const { cssRules: o } = t.sheet;
    return [].map.call(o, (i, s) => {
      const { cssText: a } = i;
      let l = "";
      if (a.startsWith("--sxs"))
        return "";
      if (o[s - 1] && (l = o[s - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const g in t.rules)
          if (t.rules[g].group === i)
            return `--sxs{--sxs:${[...t.rules[g].cache].join(" ")}}${a}`;
        return i.cssRules.length ? `${l}${a}` : "";
      }
      return a;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: a, sheet: l } = t;
      if (!l.deleteRule) {
        for (; Object(Object(l.cssRules)[0]).type === 3; )
          l.cssRules.splice(0, 1);
        l.cssRules = [];
      }
      for (const g in a)
        delete a[g];
    }
    const o = Object(e).styleSheets || [];
    for (const a of o)
      if (Eo(a)) {
        for (let l = 0, g = a.cssRules; g[l]; ++l) {
          const c = Object(g[l]);
          if (c.type !== 1)
            continue;
          const u = Object(g[l + 1]);
          if (u.type !== 4)
            continue;
          ++l;
          const { cssText: d } = c;
          if (!d.startsWith("--sxs"))
            continue;
          const f = d.slice(14, -3).trim().split(/\s+/), h = Le[f[0]];
          h && (t || (t = { sheet: a, reset: r, rules: {}, toString: n }), t.rules[h] = { group: u, index: l, cache: new Set(f) });
        }
        if (t)
          break;
      }
    if (!t) {
      const a = (l, g) => ({ type: g, cssRules: [], insertRule(c, u) {
        this.cssRules.splice(u, 0, a(c, { import: 3, undefined: 1 }[(c.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return l === "@media{}" ? `@media{${[].map.call(this.cssRules, (c) => c.cssText).join("")}}` : l;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"), rules: {}, reset: r, toString: n };
    }
    const { sheet: i, rules: s } = t;
    for (let a = Le.length - 1; a >= 0; --a) {
      const l = Le[a];
      if (!s[l]) {
        const g = Le[a + 1], c = s[g] ? s[g].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${a}}`, c), s[l] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([a]) };
      }
      To(s[l]);
    }
  };
  return r(), t;
}, To = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, Me = Symbol(), Bo = He(), Ao = (e, t) => Bo(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[Ze]) {
        r.type == null && (r.type = o[Ze].type);
        for (const i of o[Ze].composers)
          r.composers.add(i);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(Mo(o, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), Do(e, r, t);
}), Mo = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const i = `${ue(o.prefix)}c-${Se(r)}`, s = [], a = [], l = /* @__PURE__ */ Object.create(null), g = [];
  for (const d in n)
    l[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      c = l, u = d, Co.call(c, u) || (l[d] = "undefined");
      const f = e[d];
      for (const h in f) {
        const y = { [d]: String(h) };
        String(h) === "undefined" && g.push(d);
        const x = f[h], S = [y, x, !tn(x)];
        s.push(S);
      }
    }
  var c, u;
  if (typeof t == "object" && t)
    for (const d of t) {
      let { css: f, ...h } = d;
      f = typeof f == "object" && f || {};
      for (const x in h)
        h[x] = String(h[x]);
      const y = [h, f, !tn(f)];
      a.push(y);
    }
  return [i, r, s, a, l, g];
}, Do = (e, t, n) => {
  const [r, o, i, s] = Lo(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((u) => {
    function d() {
      for (let f = 0; f < d[Me].length; f++) {
        const [h, y] = d[Me][f];
        u.rules[h].apply(y);
      }
      return d[Me] = [], null;
    }
    return d[Me] = [], d.rules = {}, Le.forEach((f) => d.rules[f] = { apply: (h) => d[Me].push([f, h]) }), d;
  })(n) : null, l = (a || n).rules, g = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, c = (u) => {
    u = typeof u == "object" && u || Wo;
    const { css: d, ...f } = u, h = {};
    for (const S in i)
      if (delete f[S], S in u) {
        let _ = u[S];
        typeof _ == "object" && _ ? h[S] = { "@initial": i[S], ..._ } : (_ = String(_), h[S] = _ !== "undefined" || s.has(S) ? _ : i[S]);
      } else
        h[S] = i[S];
    const y = /* @__PURE__ */ new Set([...o]);
    for (const [S, _, W, k] of t.composers) {
      n.rules.styled.cache.has(S) || (n.rules.styled.cache.add(S), Oe(_, [`.${S}`], [], e, (A) => {
        l.styled.apply(A);
      }));
      const X = sn(W, h, e.media), z = sn(k, h, e.media, !0);
      for (const A of X)
        if (A !== void 0)
          for (const [M, F, P] of A) {
            const N = `${S}-${Se(F)}-${M}`;
            y.add(N);
            const K = (P ? n.rules.resonevar : n.rules.onevar).cache, re = P ? l.resonevar : l.onevar;
            K.has(N) || (K.add(N), Oe(F, [`.${N}`], [], e, (oe) => {
              re.apply(oe);
            }));
          }
      for (const A of z)
        if (A !== void 0)
          for (const [M, F] of A) {
            const P = `${S}-${Se(F)}-${M}`;
            y.add(P), n.rules.allvar.cache.has(P) || (n.rules.allvar.cache.add(P), Oe(F, [`.${P}`], [], e, (N) => {
              l.allvar.apply(N);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const S = `${r}-i${Se(d)}-css`;
      y.add(S), n.rules.inline.cache.has(S) || (n.rules.inline.cache.add(S), Oe(d, [`.${S}`], [], e, (_) => {
        l.inline.apply(_);
      }));
    }
    for (const S of String(u.className || "").trim().split(/\s+/))
      S && y.add(S);
    const x = f.className = [...y].join(" ");
    return { type: t.type, className: x, selector: g, props: f, toString: () => x, deferredInjector: a };
  };
  return Bt(c, { className: r, selector: g, [Ze]: t, toString: () => (n.rules.styled.cache.has(r) || c(), r) });
}, Lo = (e) => {
  let t = "";
  const n = [], r = {}, o = [];
  for (const [i, , , , s, a] of e) {
    t === "" && (t = i), n.push(i), o.push(...a);
    for (const l in s) {
      const g = s[l];
      (r[l] === void 0 || g !== "undefined" || a.includes(g)) && (r[l] = g);
    }
  }
  return [t, n, r, new Set(o)];
}, sn = (e, t, n, r) => {
  const o = [];
  e:
    for (let [i, s, a] of e) {
      if (a)
        continue;
      let l, g = 0, c = !1;
      for (l in i) {
        const u = i[l];
        let d = t[l];
        if (d !== u) {
          if (typeof d != "object" || !d)
            continue e;
          {
            let f, h, y = 0;
            for (const x in d) {
              if (u === String(d[x])) {
                if (x !== "@initial") {
                  const S = x.slice(1);
                  (h = h || []).push(S in n ? n[S] : x.replace(/^@media ?/, "")), c = !0;
                }
                g += y, f = !0;
              }
              ++y;
            }
            if (h && h.length && (s = { ["@media " + h.join(", ")]: s }), !f)
              continue e;
          }
        }
      }
      (o[g] = o[g] || []).push([r ? "cv" : `${l}-${i[l]}`, s, c]);
    }
  return o;
}, Wo = {}, Po = He(), Fo = (e, t) => Po(e, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let i = Se(o);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in o) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(o["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, s++);
          delete o["@import"];
        }
        Oe(o, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return Bt(r, { toString: r });
}), Ho = He(), jo = (e, t) => Ho(e, () => (n) => {
  const r = `${ue(e.prefix)}k-${Se(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      Oe(n, [], [], e, (a) => i.push(a));
      const s = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(s);
    }
    return r;
  };
  return Bt(o, { get name() {
    return o();
  }, toString: o });
}), No = class {
  constructor(e, t, n, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + ue(this.prefix) + ue(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Vo = He(), qo = (e, t) => Vo(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${ue(e.prefix)}t-${Se(r)}`}`, i = {}, s = [];
  for (const l in r) {
    i[l] = {};
    for (const g in r[l]) {
      const c = `--${ue(e.prefix)}${l}-${g}`, u = Mn(String(r[l][g]), e.prefix, l);
      i[l][g] = new No(g, u, l, e.prefix), s.push(`${c}:${u}`);
    }
  }
  const a = () => {
    if (s.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const l = `${r === e.theme ? ":root," : ""}.${n}{${s.join(";")}}`;
      t.rules.themed.apply(l);
    }
    return n;
  };
  return { ...i, get className() {
    return a();
  }, selector: o, toString: a };
}), Yo = He(), Ko = (e) => {
  let t = !1;
  const n = Yo(e, (r) => {
    t = !0;
    const o = "prefix" in (r = typeof r == "object" && r || {}) ? String(r.prefix) : "", i = typeof r.media == "object" && r.media || {}, s = typeof r.root == "object" ? r.root || null : globalThis.document || null, a = typeof r.theme == "object" && r.theme || {}, l = { prefix: o, media: i, theme: a, themeMap: typeof r.themeMap == "object" && r.themeMap || { ...So }, utils: typeof r.utils == "object" && r.utils || {} }, g = zo(s), c = { css: Ao(l, g), globalCss: Fo(l, g), keyframes: jo(l, g), createTheme: qo(l, g), reset() {
      g.reset(), c.theme.toString();
    }, theme: {}, sheet: g, config: l, prefix: o, getCssText: g.toString, toString: g.toString };
    return String(c.theme = c.createTheme(a)), c;
  });
  return t || n.reset(), n;
};
const Xo = Ko({ prefix: "hope" }), { css: Dn, globalCss: At, getCssText: Go, keyframes: Ln } = Xo, ve = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Uo(e) {
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
function ee(e, t) {
  return st(e) ? e.map((n) => n === null ? null : t(n)) : be(e) ? yo(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function Zo(e, t) {
  const n = t.map((r) => {
    var o;
    return (o = e[r]) != null ? o : null;
  });
  for (; fo(n) === null; )
    n.pop();
  return n;
}
function Jo(e, t) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
function Qo(e, t) {
  const n = Object.keys(e);
  return n.length > 0 && n.every((r) => t.includes(r));
}
const te = [
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
const V = {
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
function he(e) {
  return Wn((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function ce(e) {
  return Wn((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function Wn(e, ...t) {
  return t.map(e).join(", ");
}
const ei = "_light", Je = "_dark", ti = `.${ve.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, ni = `.${ve.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, ri = /* @__PURE__ */ new Map([
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
  ["_groupHover", he(V.hover)],
  ["_peerHover", ce(V.hover)],
  ["_groupFocus", he(V.focus)],
  ["_peerFocus", ce(V.focus)],
  ["_groupFocusVisible", he(V.focusVisible)],
  ["_peerFocusVisible", ce(V.focusVisible)],
  ["_groupActive", he(V.active)],
  ["_peerActive", ce(V.active)],
  ["_groupDisabled", he(V.disabled)],
  ["_peerDisabled", ce(V.disabled)],
  ["_groupInvalid", he(V.invalid)],
  ["_peerInvalid", ce(V.invalid)],
  ["_groupChecked", he(V.checked)],
  ["_peerChecked", ce(V.checked)],
  ["_groupFocusWithin", he(V.focusWithin)],
  ["_peerFocusWithin", ce(V.focusWithin)],
  ["_peerPlaceholderShown", ce(V.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [ei, ti],
  [Je, ni]
]), oi = /* @__PURE__ */ new Map([
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
const ii = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, medias: o } = t.__breakpoints, i = {}, s = {};
  for (const a in e) {
    let l = de(e[a], t);
    if (l == null || bt(a, l, i))
      continue;
    if (l = be(l) && n(l) ? r(l) : l, !Array.isArray(l)) {
      i[a] = l;
      continue;
    }
    const g = l.slice(0, o.length).length;
    for (let c = 0; c < g; c += 1) {
      const u = o == null ? void 0 : o[c], d = l[c];
      if (d != null) {
        if (!u) {
          bt(a, d, i) || (i[a] = d);
          continue;
        }
        s[u] = s[u] || {}, bt(a, d, s[u]) || (s[u][a] = d);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function bt(e, t, n) {
  if (!be(t) || !Uo(t))
    return !1;
  const { light: r, dark: o } = t;
  return r != null && (n[e] = r), n[Je] = n[Je] || {}, o != null && (n[Je][e] = o), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function si(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function tt(e) {
  if (e == null)
    return e;
  const { unitless: t } = si(e);
  return t || Bn(e) ? `${e}px` : e;
}
const Pn = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Mt = (e) => Object.fromEntries(Object.entries(e).sort(Pn));
function an(e) {
  const t = Mt(e);
  return Object.assign(Object.values(t), t);
}
function ai(e) {
  const t = Object.keys(Mt(e));
  return new Set(t);
}
function ln(e) {
  var t;
  if (!e)
    return e;
  e = (t = tt(e)) != null ? t : e;
  const n = e.endsWith("px") ? -1 : -0.0625;
  return Bn(e) ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Xe(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${tt(e)})`), t && n.push("and", `(max-width: ${tt(t)})`), n.join(" ");
}
function li(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = an(e), r = Object.entries(e).sort(Pn).map(([s, a], l, g) => {
    var c;
    let [, u] = (c = g[l + 1]) != null ? c : [];
    return u = parseFloat(u) > 0 ? ln(u) : void 0, {
      _minW: ln(a),
      breakpoint: s,
      minW: a,
      maxW: u,
      maxWQuery: Xe(null, u),
      minWQuery: Xe(a),
      minMaxQuery: Xe(a, u)
    };
  }), o = ai(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    asObject: Mt(e),
    asArray: an(e),
    details: r,
    medias: [null, ...n.map((s) => Xe(s)).slice(1)],
    isResponsive(s) {
      return Qo(s, i);
    },
    toArrayValue(s) {
      if (!be(s))
        throw new Error("toArrayValue: value must be an object");
      return Zo(s, i);
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return Jo(s, i);
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
const ci = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], Fn = /!(important)?$/;
function di(e) {
  return Fn.test(e);
}
function ui(e) {
  return e.replace(Fn, "").trim();
}
function Hn(e, t, n) {
  var r;
  if (e == null)
    return;
  const o = String(e), i = ui(o);
  let s = (r = n[t][i]) != null ? r : po(n[t], i);
  return s == null && (s = ci.includes(t) ? i : tt(i)), di(o) ? `${s} !important` : s;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function lt(e, t) {
  var n;
  const r = {}, o = ii(e)(t);
  for (let i in o) {
    let s = de(o[i], t);
    if (s == null)
      continue;
    if (i.startsWith("_")) {
      const l = ri.get(i);
      if (l == null)
        continue;
      i = l;
    }
    if (be(s)) {
      r[i] = Object.assign(
        {},
        r[i],
        lt(s, t)
      );
      continue;
    }
    const a = (n = oi.get(i)) != null ? n : [i];
    for (const l of a) {
      const g = t.themeMap[l];
      g != null && (s = Hn(s, g, t.vars)), r[l] = s;
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
function gi(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function fi(e) {
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
function mi(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function hi(e) {
  return gi(e) ? fi(e) : e.startsWith("rgb") ? mi(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function yt(e) {
  const { r: t, g: n, b: r } = hi(e);
  return `${t} ${n} ${r}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function Re(e) {
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
const ct = "hope";
function pi(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function bi(e) {
  const t = pi(e.toString());
  return vi(yi(t));
}
function yi(e) {
  return e.includes("\\.") || Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.");
}
function vi(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Si(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function xi(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Ci(e, t = "") {
  return bi(`--${Si(e, t)}`);
}
function wi(e, t, n = ct) {
  const r = Ci(e, n);
  return {
    variable: r,
    reference: xi(r, t)
  };
}
function ki(e = ct) {
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
function vt(e, t, n) {
  return wi(String(t).replace(e, "-"), void 0, n);
}
function _i(e, t) {
  const n = {}, r = {}, o = {}, { colors: i, ...s } = e, a = { colors: i.light }, l = { colors: i.dark }, g = Ue(a, De), c = Ue(l, De), u = Ue(s, De), d = new RegExp(`(${De}|\\.)`, "g");
  for (const [h, y] of Object.entries(g)) {
    const { variable: x, reference: S } = vt(d, h, t);
    n[x] = y, o[h] = S;
  }
  for (const [h, y] of Object.entries(c)) {
    const { variable: x } = vt(d, h, t);
    r[x] = y;
  }
  for (const [h, y] of Object.entries(u)) {
    const { variable: x, reference: S } = vt(d, h, t);
    n[x] = y, o[h] = S;
  }
  const f = ho(o, De);
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
const Ii = [
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
function Ri(e) {
  return bo(e, Ii);
}
function $i(e) {
  const { vars: t, __cssVarsValues: n, __breakpoints: r, ...o } = e;
  return o;
}
function jn(e) {
  const t = $i(e), n = Ri(t), { cssVarsValues: r, vars: o } = _i(n, t.cssVarPrefix);
  return Object.assign(t, {
    vars: o,
    __cssVarsValues: r,
    __breakpoints: li(t.breakpoints)
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
function Nn(e) {
  const t = ki(e);
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
      primary: Re({
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
      neutral: Re({
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
      success: Re({
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
      info: Re({
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
      warning: Re({
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
      danger: Re({
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
const Oi = {
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
}, cn = {
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
}, Ei = {
  colors: Nn(ct),
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
  space: cn,
  sizes: {
    ...cn,
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
}, zi = {
  ...Ei,
  cssVarPrefix: ct,
  themeMap: Oi,
  components: {}
}, Dt = jn(zi);
function It(e, t, n) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (n = 0; n < t.length; n++)
        e[n] = It(e[n], t[n]);
    else
      for (n in t) {
        if (n === "__proto__" || n === "constructor" || n === "prototype")
          break;
        e[n] = It(e[n], t[n]);
      }
    return e;
  }
  return t;
}
function Rt(e, t, n) {
  t.split && (t = t.split("."));
  for (var r = 0, o = t.length, i = e, s, a; r < o && (a = t[r++], !(a === "__proto__" || a === "constructor" || a === "prototype")); )
    i = i[a] = r === o ? It(i[a], n) : typeof (s = i[a]) == typeof t ? s : t[r] * 0 !== 0 || !!~("" + t[r]).indexOf(".") ? {} : [];
}
function Ja(e) {
  let t = Dt;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: Nn(e.cssVarPrefix)
  });
  const n = {
    value: t
  };
  return Rt(n, "value", e), jn(n.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function Lt(e) {
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
function Ti(e) {
  At({
    ":root": e.__cssVarsValues.root,
    [`.${ve.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function Bi(e) {
  At({
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
const Vn = ge(Dt);
function we() {
  return fe(Vn);
}
function Ai(e) {
  const t = we();
  return E(() => {
    var n;
    if (e != null)
      return (n = t.components[e]) != null ? n : void 0;
  });
}
function ne(e, t, n) {
  const r = we();
  return nt(t, () => {
    var o, i;
    return (i = (o = r.components[e]) == null ? void 0 : o.defaultProps) != null ? i : {};
  }, n);
}
function Mi(e) {
  var t;
  const n = (t = e.theme) != null ? t : Dt;
  return Ti(n), e.withCssReset && Bi(n.vars), m(Vn.Provider, {
    value: n,
    get children() {
      return e.children;
    }
  });
}
function Qa(e) {
  const t = at((n) => {
    const {
      "@import": r,
      "@font-face": o,
      ...i
    } = de(e, n), s = Object.entries(i).reduce((a, [l, g]) => (a[l] = lt(g, n), a), {});
    At({
      "@import": r != null ? r : [],
      "@font-face": o != null ? o : {},
      ...s
    })();
  });
  return function() {
    const n = we();
    t(n);
  };
}
function el(e) {
  return e;
}
function qn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = qn(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Wt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = qn(e)) && (r && (r += " "), r += t);
  return r;
}
function Ee(e, t) {
  return Dn(lt(e, t))().className;
}
function $t(e, t) {
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
function dn(e, t) {
  return Object.entries(e).reduce((n, [r, o]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: a = []
    } = o;
    return n[r] = {
      baseClassName: Ee(i, t),
      variantClassNames: Object.entries(s).reduce((l, [g, c]) => (l[g] = Object.entries(c).reduce(
        (u, [d, f]) => (u[d] = Ee(f, t), u),
        {}
      ), l), {}),
      compoundVariants: a.map((l) => [
        l.variants,
        Ee(l.style, t)
      ])
    }, n;
  }, {});
}
function Z(e, t) {
  let n, r, o, i, s = [], a;
  const l = at(
    (g, c, u) => {
      n = de(e, c), r = dn(
        n,
        c
      ), o = de(u, c), i = o && dn(o, c), s = Object.keys(n), a = Object.fromEntries(
        s.map((d) => [d, `hope-${g}-${d}`])
      );
    }
  );
  return function(g, c) {
    var u;
    const d = we(), f = Ai(g);
    l(g, d, (u = f()) == null ? void 0 : u.styleConfigOverride);
    const h = E(() => de(c.styleConfigOverride, d)), y = E(() => {
      const [_, W] = v(c, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...et(W)
      };
    }), x = E(() => s.reduce((_, W) => {
      var k, X, z, A, M, F, P, N, K, re, oe;
      let le = "", J = {}, ie = [];
      c.unstyled || (le = (k = r[W].baseClassName) != null ? k : "", J = (X = r[W].variantClassNames) != null ? X : {}, ie = (z = r[W].compoundVariants) != null ? z : []);
      const se = (M = (A = i == null ? void 0 : i[W]) == null ? void 0 : A.baseClassName) != null ? M : "", ft = (P = (F = i == null ? void 0 : i[W]) == null ? void 0 : F.variantClassNames) != null ? P : {}, mt = (K = (N = i == null ? void 0 : i[W]) == null ? void 0 : N.compoundVariants) != null ? K : [], _e = [a[W], le, se];
      for (const I in y()) {
        const T = y()[I];
        T != null && (_e.push((re = J[I]) == null ? void 0 : re[String(T)]), _e.push((oe = ft[I]) == null ? void 0 : oe[String(T)]));
      }
      for (const [I, T] of [...ie, ...mt])
        $t(I, y()) && _e.push(T);
      return _[W] = Wt(..._e), _;
    }, {})), S = E(() => {
      const _ = h();
      return _ == null ? {} : s.reduce((W, k) => {
        var X, z, A, M, F, P, N, K;
        const re = (z = (X = _[k]) == null ? void 0 : X.baseStyle) != null ? z : {}, oe = (M = (A = _[k]) == null ? void 0 : A.variants) != null ? M : {}, le = (P = (F = _[k]) == null ? void 0 : F.compoundVariants) != null ? P : [];
        W[k] = re;
        for (const J in y()) {
          const ie = y()[J];
          if (ie == null)
            continue;
          const se = (K = (N = oe[J]) == null ? void 0 : N[String(ie)]) != null ? K : {};
          An(se) || Rt(W, k, se);
        }
        for (const J of le)
          $t(J.variants, y()) && Rt(W, k, J.style);
        return W;
      }, {});
    });
    return { baseClasses: x, styleOverrides: S };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function Yn(e, t) {
  const { baseStyle: n = {}, variants: r = {}, compoundVariants: o = [] } = e;
  return {
    baseClassName: Ee(n, t),
    variantClassNames: Object.entries(r).reduce((i, [s, a]) => (i[s] = Object.entries(a).reduce(
      (l, [g, c]) => (l[g] = Ee(c, t), l),
      {}
    ), i), {}),
    compoundVariants: o.map((i) => [
      i.variants,
      Ee(i.style, t)
    ])
  };
}
function Kn(e, t) {
  var n;
  const { variantClassNames: r = {}, compoundVariants: o = [] } = e, i = [];
  for (const s in t) {
    const a = t[s];
    a != null && i.push((n = r[s]) == null ? void 0 : n[String(a)]);
  }
  for (const [s, a] of o)
    $t(s, t) && i.push(a);
  return i;
}
function tl(e) {
  let t, n;
  const r = at((o) => {
    t = de(e, o), n = Yn(t, o);
  });
  return function(o = {}) {
    const i = we();
    return r(i), E(() => {
      if (t == null || n == null)
        return "";
      const s = {
        ...t.defaultVariants,
        ...et(o)
      }, a = Kn(n, s);
      return Wt(n.baseClassName, a);
    });
  };
}
const Di = {
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
}, Li = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Wi = {
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
}, Pi = {
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
}, Fi = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Hi = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, ji = {
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
}, Ni = {
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
}, Vi = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, qi = {
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
}, Yi = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Ki = {
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
}, Xi = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Gi = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Ui = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, Zi = {
  objectFit: !0,
  objectPosition: !0
}, Ji = {
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
}, Qi = {
  ...Di,
  ...Li,
  ...Wi,
  ...Pi,
  ...Fi,
  ...Hi,
  ...ji,
  ...Ni,
  ...Vi,
  ...qi,
  ...Yi,
  ...Ki,
  ...Xi,
  ...Gi,
  ...Ui,
  ...Zi,
  ...Ji
};
function es(e) {
  return Object.keys(e).filter((t) => t in Qi);
}
const Xn = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function ts(e) {
  return Object.entries(e).reduce((t, [n, r]) => {
    const o = Xn.get(n);
    return o != null && r != null && (t[o] = r), t;
  }, {});
}
const ns = Dn({});
function St(e, t, n) {
  let r, o, i = [];
  const s = at((l) => {
    t != null && (r = de(t, l), o = Yn(r, l), i = r.variants ? Object.keys(r.variants) : []);
  }), a = (l) => {
    const g = we();
    s(g);
    const [c, u, d, f, h] = v(
      l,
      ["as", "class", "sx", "__css"],
      [...Xn.keys()],
      i,
      es(l)
    ), y = E(() => {
      if (o == null)
        return [];
      const S = {
        ...r == null ? void 0 : r.defaultVariants,
        ...et(d)
      };
      return Kn(o, S);
    }), x = E(() => {
      const S = Object.assign({}, c.__css, et(f), ...mo(c.sx).map((_) => de(_, g)));
      if (!An(S))
        return ns({
          css: lt(S, g)
        }).className;
    });
    return m(Ar, b({
      get component() {
        var S;
        return (S = c.as) != null ? S : e;
      },
      get class() {
        return Wt(n, o == null ? void 0 : o.baseClassName, ...y(), x(), c.class) || void 0;
      }
    }, () => ts(u), h));
  };
  return n != null && (a.toString = () => `.${n}`), a;
}
function rs() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(St, {
    apply(t, n, r) {
      return St(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, St(n)), e.get(n);
    }
  });
}
const C = rs(), os = /* @__PURE__ */ Ce('<style id="stitches" $serveronly></style>', 2);
function nl() {
  Br(() => (() => {
    const e = os.cloneNode(!0);
    return zt(() => e.innerHTML = Go()), e;
  })());
}
const is = Ln({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), rl = Ln({
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
const Gn = ge();
function ss() {
  const e = fe(Gn);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function ol(e, t) {
  const { colorMode: n } = ss();
  return E(() => n() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const dt = "hope-ui-color-mode";
function as(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get: (t) => {
      if (ye)
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
const ls = as(dt);
function un(e, t) {
  const n = e.match(new RegExp(`(^| )${t}=([^;]+)`));
  return n == null ? void 0 : n[2];
}
function Un(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (n) => {
      var r, o;
      return t ? (r = un(t, e)) != null ? r : n : ye ? n : (o = un(document.cookie, e)) != null ? o : n;
    },
    set: (n) => {
      document.cookie = `${e}=${n}; max-age=31536000; path=/`;
    }
  };
}
const il = Un(dt);
function sl(e) {
  return Un(dt, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function Zn() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function cs() {
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
function ds(e) {
  document.body.classList.add(e ? ve.dark : ve.light), document.body.classList.remove(e ? ve.light : ve.dark);
}
function us(e, t = !0) {
  const n = t ? cs() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, n == null || n();
}
function Jn(e) {
  var n;
  return ((n = Zn().matches) != null ? n : e === "dark") ? "dark" : "light";
}
function gs(e) {
  var r;
  const t = "light", n = (r = e.get(t)) != null ? r : t;
  return n === "system" ? ye ? t : Jn() : n;
}
function fs(e) {
  const t = Zn(), n = (r) => {
    e(r.matches ? "dark" : "light");
  };
  return t.addEventListener("change", n), () => {
    t.removeEventListener("change", n);
  };
}
function ms(e) {
  const t = () => {
    var c;
    return (c = e.initialColorMode) != null ? c : "system";
  }, n = () => {
    var c;
    return (c = e.storageManager) != null ? c : ls;
  };
  let r;
  const [o, i] = R(gs(n())), s = (c) => {
    i(c), ds(c === "dark"), us(c, e.disableTransitionOnChange);
  }, a = (c) => {
    r && (r(), r = void 0);
    const u = c === "system";
    u && (r = fs(s)), s(u ? Jn() : c), n().set(c);
  }, l = () => {
    a(o() === "dark" ? "light" : "dark");
  };
  U(() => {
    var c;
    a((c = n().get()) != null ? c : t());
  }), B(() => {
    r == null || r();
  });
  const g = {
    colorMode: o,
    setColorMode: a,
    toggleColorMode: l
  };
  return m(Gn.Provider, {
    value: g,
    get children() {
      return e.children;
    }
  });
}
function Qn(e) {
  return e == null ? {} : {
    overflow: ee(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: ee(e, (t) => t != null ? "ellipsis" : void 0),
    display: ee(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: ee(e, (t) => t != null ? t : void 0),
    WebkitBoxOrient: ee(e, (t) => t != null ? "vertical" : void 0)
  };
}
function j(e, t) {
  return nt(e, t);
}
function Y(e, t) {
  return `rgb(${e} / ${t})`;
}
const hs = /* @__PURE__ */ Ce('<script id="hope-ui-color-mode-script"><\/script>', 2), er = "system", ps = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function bs(e) {
  return ps.has(e) ? e : er;
}
function al(e) {
  e = j({
    initialColorMode: er,
    storageType: "localStorage",
    storageKey: dt
  }, e);
  const t = E(() => {
    const n = bs(e.initialColorMode), r = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${n}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, o = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${n}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? r : o}`.trim();
  });
  return (() => {
    const n = hs.cloneNode(!0);
    return zt((r) => {
      const o = e.nonce, i = t();
      return o !== r._v$ && $n(n, "nonce", r._v$ = o), i !== r._v$2 && (n.innerHTML = r._v$2 = i), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const gn = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function tr(e) {
  const [t, n] = R(), [r, o] = R(), i = E(() => e.overlayTransitionOptions ? j(gn, e.overlayTransitionOptions) : gn), s = it(() => e.isOpen, i);
  let a;
  const l = (d) => {
    a = d.target;
  }, g = (d) => {
    var f;
    d.key === "Escape" && (d.stopPropagation(), e.closeOnEsc && e.onClose(), (f = e.onEscKeyDown) == null || f.call(e));
  }, c = (d) => {
    var f;
    d.stopPropagation(), a === d.target && (e.closeOnOverlayClick && e.onClose(), (f = e.onOverlayClick) == null || f.call(e));
  }, u = () => {
    e.onClose();
  };
  return Qr({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: n,
    descriptionId: r,
    setDescriptionId: o,
    overlayTransition: s,
    onContainerMouseDown: l,
    onContainerKeyDown: g,
    onContainerClick: c,
    onCloseButtonClick: u
  };
}
const ys = Z((e) => ({
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
        light: Y(e.vars.colors.neutral.darkChannel, 0.75),
        dark: Y(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));
function nr(e) {
  return typeof e == "function";
}
function rr(e) {
  return e == null;
}
function vs(e) {
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
function Qe(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function fn(e) {
  var r, o;
  const t = (r = e.target) != null ? r : e.currentTarget, n = Ot(t);
  return (o = e.relatedTarget) != null ? o : n;
}
function Ot(e) {
  var t;
  return (t = or(e)) == null ? void 0 : t.activeElement;
}
function Ss(e) {
  return or(e).defaultView || window;
}
function or(e) {
  var t;
  return xs(e) && (t = e.ownerDocument) != null ? t : document;
}
function xs(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Cs(e) {
  return e.tagName === "IFRAME";
}
function O(e) {
  return e ? "" : void 0;
}
function ws(e) {
  return e ? !0 : void 0;
}
function ze(e, t) {
  return (n) => {
    e(n), t == null || t(n);
  };
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */
function $e(e) {
  if (ks())
    e.focus({ preventScroll: !0 });
  else {
    const t = _s(e);
    e.focus(), Is(t);
  }
}
let Ge = null;
function ks() {
  if (Ge == null) {
    Ge = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ge = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ge;
}
function _s(e) {
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
function Is(e) {
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
function Rs() {
}
function L(e, t) {
  return e && (nr(e) ? e(t) : e[0](e[1], t)), t == null ? void 0 : t.defaultPrevented;
}
function $s(e, ...t) {
  return nr(e) ? e(...t) : e;
}
function Os(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
function ir(e) {
  return Os(e, (t) => t != null);
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
const sr = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function Et(e, t) {
  const n = Array.from(e.querySelectorAll(sr)).filter(mn);
  return t && mn(e) && n.unshift(e), n.forEach((r, o) => {
    if (Cs(r) && r.contentDocument) {
      const i = r.contentDocument.body, s = Et(i, !1);
      n.splice(o, 1, ...s);
    }
  }), n;
}
function mn(e) {
  return ar(e) && !Es(e);
}
function ar(e) {
  return e.matches(sr) && lr(e);
}
function Es(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function lr(e, t) {
  return e.nodeName !== "#comment" && zs(e) && Ts(e, t) && (!e.parentElement || lr(e.parentElement, e));
}
function zs(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return !1;
  const { display: t, visibility: n } = e.style;
  let r = t !== "none" && n !== "hidden" && n !== "collapse";
  if (r) {
    if (!e.ownerDocument.defaultView)
      return r;
    const { getComputedStyle: o } = e.ownerDocument.defaultView, { display: i, visibility: s } = o(e);
    r = i !== "none" && s !== "hidden" && s !== "collapse";
  }
  return r;
}
function Ts(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function cr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = cr(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function w() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = cr(e)) && (r && (r += " "), r += t);
  return r;
}
const Bs = /* @__PURE__ */ Ce('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>', 4, !0), hn = {
  viewBox: "0 0 24 24",
  path: () => Bs.cloneNode(!0)
}, pn = C("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), As = (e) => {
  e = j({
    children: hn.path,
    viewBox: hn.viewBox,
    color: "currentColor"
  }, e);
  const [t, n] = v(e, ["as", "children", "viewBox"]), r = () => t.as && !vs(t.as);
  return m(H, {
    get when() {
      return r();
    },
    get fallback() {
      return m(pn, b({
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
      return m(pn, b({
        get as() {
          return t.as;
        }
      }, n));
    }
  });
};
function dr(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: n = {}
  } = e;
  return (r) => m(As, b({
    viewBox: t
  }, n, r, {
    get children() {
      return e.path;
    }
  }));
}
const Ms = /* @__PURE__ */ Ce('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>', 8, !0), Ds = /* @__PURE__ */ Ce('<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>', 4, !0), Ls = dr({
  path: () => Ms.cloneNode(!0)
}), Ws = dr({
  path: () => Ds.cloneNode(!0)
}), Ps = Z(
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
        ...Lt(e.vars),
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
), Pt = (e) => {
  e = ne("CloseButton", {
    "aria-label": "Close",
    children: () => m(Ws, {})
  }, e);
  const [t, n, r] = v(e, ["class"], [...te, "size"]), {
    baseClasses: o,
    styleOverrides: i
  } = Ps("CloseButton", n);
  return m(C.button, b({
    type: "button",
    get class() {
      return w(o().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}, ur = ge();
function je() {
  const e = fe(ur);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const Fs = (e) => {
  const t = je();
  e = j({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [n, r] = v(e, ["class", "onClick"]);
  return m(Pt, b({
    get class() {
      return w("hope-Modal-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), L(n.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, gr = {
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
}, Hs = C("span", {
  baseStyle: gr
}), ll = C("input", {
  baseStyle: gr
}), Ft = (e) => {
  let t, n;
  e = j({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [r, o] = v(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), i = () => {
    var c;
    if (!n)
      return;
    const g = n.querySelector(r.initialFocusSelector);
    if (g) {
      $e(g);
      return;
    }
    if (r.autoFocus) {
      const u = (c = Et(n)[0]) != null ? c : n;
      $e(u);
    }
  }, s = () => {
    if (r.restoreFocusSelector) {
      t = document.querySelector(r.restoreFocusSelector);
      return;
    }
    r.restoreFocus && (t = Ot());
  }, a = () => {
    if (!n)
      return !1;
    const g = Ot(n);
    return !g || Qe(n, g) ? !1 : ar(g);
  }, l = (g) => {
    if (!n)
      return;
    const c = Et(n).slice(1, -1);
    if (!c.length) {
      $e(n);
      return;
    }
    const u = c[0], d = c[c.length - 1];
    g.relatedTarget === u ? $e(d) : $e(u);
  };
  return xe(() => {
    s(), i();
  }), B(() => {
    !t || a() || $e(t);
  }), m(C.div, b({
    ref(g) {
      const c = ze((u) => n = u, r.ref);
      typeof c == "function" && c(g);
    },
    tabIndex: -1
  }, o, {
    get children() {
      return [m(H, {
        get when() {
          return r.trapFocus;
        },
        get children() {
          return m(bn, {
            onFocus: l
          });
        }
      }), Fe(() => e.children), m(H, {
        get when() {
          return r.trapFocus;
        },
        get children() {
          return m(bn, {
            onFocus: l
          });
        }
      })];
    }
  }));
}, bn = (e) => m(Hs, b({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e)), js = (e) => {
  const t = je(), [n, r] = v(e, ["class", "style", "onClick"]), o = (s) => {
    s.stopPropagation(), L(n.onClick, s);
  }, i = E(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return m(Ft, {
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
      return m(C.section, b({
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
        onClick: o
      }, r));
    }
  });
}, Ns = (e) => {
  const t = je(), [n, r] = v(e, ["class"]);
  return U(() => {
    t.setDescriptionId(`${t.contentId()}-description`), B(() => t.setDescriptionId(void 0));
  }), m(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, Vs = (e) => {
  const t = je(), [n, r] = v(e, ["class"]);
  return U(() => {
    t.setHeadingId(`${t.contentId()}-heading`), B(() => t.setHeadingId(void 0));
  }), m(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, qs = (e) => {
  const t = je(), [n, r] = v(e, ["class", "style", "children"]), o = E(() => ({
    ...n.style,
    ...t.overlayTransition.style()
  }));
  return m(C.div, b({
    role: "presentation",
    get class() {
      return w(t.baseClasses().overlay, n.class);
    },
    get style() {
      return o();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}, Ne = (e) => {
  e = ne("Modal", {
    id: `hope-modal-${rt()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = v(e, [...te, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: n,
    styleOverrides: r
  } = ys("Modal", t), {
    headingId: o,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: a,
    overlayTransition: l,
    onContainerMouseDown: g,
    onContainerKeyDown: c,
    onContainerClick: u,
    onCloseButtonClick: d
  } = tr(e), f = it(() => e.isOpen, () => {
    var y;
    return j({
      transition: "pop",
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (y = e.contentTransitionOptions) != null ? y : {});
  }), h = {
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
    onContainerKeyDown: c,
    onContainerClick: u,
    onCloseButtonClick: d
  };
  return m(H, {
    get when() {
      return Fe(() => !!l.keepMounted())() && f.keepMounted();
    },
    get children() {
      return m(ot, {
        get children() {
          return m(ur.Provider, {
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
Ne.Overlay = qs;
Ne.Content = js;
Ne.CloseButton = Fs;
Ne.Heading = Vs;
Ne.Description = Ns;
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
const Ys = typeof document < "u" ? document : void 0, Ks = "body > :not(script, style)", xt = '[aria-modal="true"], [data-ismodal="true"]';
function yn(e, t) {
  const n = Array.from(e.querySelectorAll(Ks)).filter((r) => !r.contains(t)).map((r) => {
    const o = r.getAttribute("aria-hidden") || "";
    return r.setAttribute("aria-hidden", "true"), { element: r, previousAriaHidden: o };
  });
  return () => {
    n.forEach(({ element: r, previousAriaHidden: o }) => {
      o ? r.setAttribute("aria-hidden", o) : r.removeAttribute("aria-hidden");
    });
  };
}
function Xs(e = "body", { document: t = Ys } = {}) {
  const n = t == null ? void 0 : t.querySelector(e);
  if (t == null || n == null)
    return Rs;
  const r = { childList: !0 };
  let o = [], i;
  const s = new MutationObserver((a) => {
    for (const l of a)
      if (l.type === "childList") {
        if (l.addedNodes.length > 0) {
          const g = Array.from(l.addedNodes).find(
            (c) => {
              var u;
              return (u = c.querySelector) == null ? void 0 : u.call(c, xt);
            }
          );
          if (g) {
            o.push(g);
            const c = g.querySelector(xt);
            i == null || i(), i = yn(t, c);
          }
        } else if (l.removedNodes.length > 0) {
          const g = Array.from(l.removedNodes), c = o.findIndex(
            (u) => g.includes(u)
          );
          if (c >= 0)
            if (i == null || i(), o = o.filter((u, d) => d !== c), o.length > 0) {
              const u = o[o.length - 1].querySelector(xt);
              i = yn(t, u);
            } else
              i = void 0;
        }
      }
  });
  return s.observe(n, r), () => {
    i == null || i(), s.disconnect();
  };
}
function cl(e) {
  Xs(), e = j({
    withCssReset: !0
  }, e);
  const [t, n] = v(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return m(ms, {
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
      return m(Mi, n);
    }
  });
}
const Gs = Z(({ vars: e }) => ({
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
      ...Lt(e)
    }
  }
})), dl = (e) => {
  e = ne("Anchor", {}, e);
  const [t, n, r] = v(e, ["class", "isExternal"], te), {
    baseClasses: o,
    styleOverrides: i
  } = Gs("Anchor", n);
  return m(C.a, b({
    get class() {
      return w(o().root, t.class);
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
}, Us = C("div", {
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
}, "hope-AspectRatio-root"), ul = (e) => {
  e = j({
    ratio: 4 / 3
  }, e);
  const [t, n] = v(e, ["ratio"]);
  return m(Us, b({
    get _before() {
      return {
        pb: ee(t.ratio, (r) => `${1 / r * 100}%`)
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
const gl = C("div"), ut = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function Zs(e) {
  const t = [];
  for (const n of ut) {
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
function Js(e) {
  const t = [];
  for (const n of ut) {
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
          backgroundColor: Y(e.colors[n].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[n][200],
            backgroundColor: Y(e.colors[n].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: Y(e.colors[n].mainChannel, 0.4),
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
function Qs(e) {
  const t = [];
  for (const n of ut) {
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
            backgroundColor: Y(e.colors[n].mainChannel, 0.1),
            borderColor: e.colors[n][700]
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: Y(e.colors[n].mainChannel, 0.2),
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
function ea(e) {
  const t = [];
  for (const n of ut) {
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
            backgroundColor: Y(e.colors[n].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[n][200],
            backgroundColor: Y(e.colors[n].mainChannel, 0.2),
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
function ta() {
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
const na = Z(
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
        ...Lt(e)
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
        ...Zs(e),
        ...Js(e),
        ...Qs(e),
        ...ea(e),
        ...ta()
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
        animation: `1s linear infinite ${is}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), fr = ge();
function Ht() {
  const e = fe(fr);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const ra = C("div", {
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
}, "hope-ButtonGroup-root"), mr = ge();
function oa() {
  return fe(mr);
}
const fl = (e) => {
  e = j({}, e);
  const [t, n, r] = v(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return m(mr.Provider, {
    value: n,
    get children() {
      return m(ra, b({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, r));
    }
  });
}, vn = (e) => {
  const t = Ht(), [n, r] = v(e, ["class", "__css"]);
  return m(C.span, b({
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
  }, r));
}, Sn = (e) => {
  const t = Ht(), [n, r] = v(e, ["class", "children", "hasLoadingText"]);
  return m(C.div, b({
    get class() {
      return w(t.baseClasses().loaderWrapper, n.class);
    },
    get position() {
      return n.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return t.styleOverrides().loaderWrapper;
    }
  }, r, {
    get children() {
      return m(H, {
        get when() {
          return n.children;
        },
        get fallback() {
          return m(Ls, {
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
const ia = ["button", "color", "file", "image", "reset", "submit"];
function xn(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? ia.indexOf(e.type) !== -1 : !1;
}
const sa = /* @__PURE__ */ Ce("<span></span>", 2), aa = (e) => {
  let t;
  const n = oa(), r = j({
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
  e = ne("Button", {
    loaderPlacement: "start"
  }, r);
  const [o, i, s, a] = v(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...te, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), l = co(() => t, () => e.as || "button"), [g, c] = R(l() != null && xn({
    tagName: l(),
    type: o.type
  })), u = E(() => o.type != null ? o.type : g() ? "button" : void 0), {
    baseClasses: d,
    styleOverrides: f
  } = na("Button", s);
  return xe(() => {
    t != null && c(xn(t));
  }), m(fr.Provider, {
    value: {
      baseClasses: d,
      styleOverrides: f
    },
    get children() {
      return m(C.button, b({
        get as() {
          return o.as;
        },
        ref(h) {
          const y = ze((x) => t = x, o.ref);
          typeof y == "function" && y(h);
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
          return w(d().root, o.class);
        },
        get __css() {
          return f().root;
        }
      }, a, {
        get children() {
          return [m(H, {
            get when() {
              return o.isLoading && o.loaderPlacement === "start";
            },
            get children() {
              return m(Sn, {
                get hasLoadingText() {
                  return !!o.loadingText;
                },
                get children() {
                  return o.loader;
                }
              });
            }
          }), m(H, {
            get when() {
              return o.isLoading;
            },
            get fallback() {
              return m(Cn, i);
            },
            get children() {
              return m(H, {
                get when() {
                  return o.loadingText;
                },
                get fallback() {
                  return (() => {
                    const h = sa.cloneNode(!0);
                    return h.style.setProperty("opacity", "0"), Mr(h, m(Cn, i)), h;
                  })();
                },
                get children() {
                  return o.loadingText;
                }
              });
            }
          }), m(H, {
            get when() {
              return o.isLoading && o.loaderPlacement === "end";
            },
            get children() {
              return m(Sn, {
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
function Cn(e) {
  const t = Ht();
  return [m(H, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return m(vn, {
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
  }), Fe(() => e.children), m(H, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return m(vn, {
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
const ml = (e) => m(aa, b({
  isIconButton: !0
}, e));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const hl = C("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), la = C("div", ({
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
}), "hope-Container-root"), pl = (e) => {
  e = j({
    isCentered: !0
  }, e);
  const [t, n] = v(e, ["isCentered"]);
  return m(la, b({
    get mx() {
      return ee(t.isCentered, (r) => r ? "auto" : void 0);
    }
  }, n));
}, ca = Z(
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
), bl = (e) => {
  e = ne("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, n, r] = v(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), o = Tr(() => e.children), i = () => !!o(), s = () => n.orientation === "vertical", a = E(() => {
    const c = s() ? "borderLeftStyle" : "borderTopStyle", u = s() ? "borderLeftWidth" : "borderTopWidth";
    return i() ? {
      _before: {
        [c]: t.variant,
        [u]: t.thickness
      },
      _after: {
        [c]: t.variant,
        [u]: t.thickness
      }
    } : {
      [c]: t.variant,
      [u]: t.thickness
    };
  }), {
    baseClasses: l,
    styleOverrides: g
  } = ca("Divider", {
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
  return m(C.hr, b({
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
      return w(l().root, t.class);
    },
    get __css() {
      return {
        ...g().root,
        ...a()
      };
    }
  }, r, {
    get children() {
      return m(H, {
        get when() {
          return i();
        },
        get children() {
          return m(C.span, b({
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
}, da = Z((e) => ({
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
        light: Y(e.vars.colors.neutral.darkChannel, 0.75),
        dark: Y(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), hr = ge();
function Ve() {
  const e = fe(hr);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const ua = (e) => {
  const t = Ve();
  e = j({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [n, r] = v(e, ["class", "onClick"]);
  return m(Pt, b({
    get class() {
      return w("hope-Drawer-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), L(n.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, ga = (e) => {
  const t = Ve(), [n, r] = v(e, ["class", "style", "onClick"]), o = (s) => {
    s.stopPropagation(), L(n.onClick, s);
  }, i = E(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return m(Ft, {
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
      return m(C.section, b({
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
        onClick: o
      }, r));
    }
  });
}, fa = (e) => {
  const t = Ve(), [n, r] = v(e, ["class"]);
  return U(() => {
    t.setDescriptionId(`${t.contentId()}-description`), B(() => t.setDescriptionId(void 0));
  }), m(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, ma = (e) => {
  const t = Ve(), [n, r] = v(e, ["class"]);
  return U(() => {
    t.setHeadingId(`${t.contentId()}-heading`), B(() => t.setHeadingId(void 0));
  }), m(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, ha = (e) => {
  const t = Ve(), [n, r] = v(e, ["class", "style", "children"]), o = E(() => ({
    ...n.style,
    ...t.overlayTransition.style()
  }));
  return m(C.div, b({
    role: "presentation",
    get class() {
      return w(t.baseClasses().overlay, n.class);
    },
    get style() {
      return o();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}, pa = {
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
}, qe = (e) => {
  e = ne("Drawer", {
    id: `hope-drawer-${rt()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = v(e, [...te, "size", "placement"]), {
    baseClasses: n,
    styleOverrides: r
  } = da("Drawer", t), {
    headingId: o,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: a,
    overlayTransition: l,
    onContainerMouseDown: g,
    onContainerKeyDown: c,
    onContainerClick: u,
    onCloseButtonClick: d
  } = tr(e), f = it(() => e.isOpen, () => {
    var y;
    return j({
      transition: pa[e.placement],
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (y = e.contentTransitionOptions) != null ? y : {});
  }), h = {
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
    onContainerKeyDown: c,
    onContainerClick: u,
    onCloseButtonClick: d
  };
  return m(H, {
    get when() {
      return Fe(() => !!l.keepMounted())() && f.keepMounted();
    },
    get children() {
      return m(ot, {
        get children() {
          return m(hr.Provider, {
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
qe.Overlay = ha;
qe.Content = ga;
qe.CloseButton = ua;
qe.Heading = ma;
qe.Description = fa;
const yl = (e) => {
  const [t, n] = v(e, ["class", "direction", "wrap", "align", "justify"]);
  return m(C.div, b({
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
}, wn = {
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
}, ba = Z(
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
        ...wn,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...wn,
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
), pr = ge();
function jt() {
  return fe(pr);
}
function Nt() {
  const e = jt();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const ya = (e) => {
  const t = Nt(), [n, r] = v(e, ["id", "class", "__css"]), o = () => {
    var i;
    return (i = n.id) != null ? i : t.descriptionId();
  };
  return xe(() => t.setHasDescription(!0)), B(() => t.setHasDescription(!1)), m(C.div, b({
    get id() {
      return o();
    },
    get ["data-required"]() {
      return O(t.isRequired());
    },
    get ["data-disabled"]() {
      return O(t.isDisabled());
    },
    get ["data-readonly"]() {
      return O(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return O(t.isInvalid());
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
  }, r));
}, va = (e) => {
  const t = Nt(), [n, r] = v(e, ["id", "class", "__css"]), o = () => {
    var i;
    return (i = n.id) != null ? i : t.errorId();
  };
  return xe(() => t.setHasError(!0)), B(() => t.setHasError(!1)), m(C.div, b({
    "aria-live": "polite",
    get id() {
      return o();
    },
    get ["data-required"]() {
      return O(t.isRequired());
    },
    get ["data-disabled"]() {
      return O(t.isDisabled());
    },
    get ["data-readonly"]() {
      return O(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return O(t.isInvalid());
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
  }, r));
}, Sa = (e) => {
  const t = Nt(), [n, r] = v(e, ["id", "for", "class", "__css"]), o = () => {
    var s;
    return (s = n.id) != null ? s : t.labelId();
  }, i = () => {
    var s;
    return (s = n.for) != null ? s : t.id();
  };
  return m(C.label, b({
    get id() {
      return o();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return O(t.isRequired());
    },
    get ["data-disabled"]() {
      return O(t.isDisabled());
    },
    get ["data-readonly"]() {
      return O(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return O(t.isInvalid());
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
  }, r));
}, Vt = (e) => {
  e = ne("FormControl", {
    id: `hope-form-control-${rt()}`
  }, e);
  const [t, n, r] = v(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...te, "withRequiredIndicator"]), [o, i] = R(!1), [s, a] = R(!1), {
    baseClasses: l,
    styleOverrides: g
  } = ba("FormControl", n), c = () => `${e.id}-description`, u = () => `${e.id}-error`, d = () => e.isInvalid, h = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: c,
    errorId: u,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: d,
    unstyled: () => n.unstyled,
    baseClasses: l,
    styleOverrides: g,
    hasDescription: o,
    setHasDescription: i,
    hasError: s,
    setHasError: a,
    mergeAriaDescribedBy: (y) => {
      const x = y ? [y] : [];
      return s() && d() && x.push(u()), o() && x.push(c()), x.join(" ") || void 0;
    }
  };
  return m(pr.Provider, {
    value: h,
    get children() {
      return m(C.div, b({
        role: "group",
        get ["data-required"]() {
          return O(h.isRequired());
        },
        get ["data-disabled"]() {
          return O(h.isDisabled());
        },
        get ["data-readonly"]() {
          return O(h.isReadOnly());
        },
        get ["data-invalid"]() {
          return O(h.isInvalid());
        },
        get class() {
          return w(l().root, t.class);
        },
        get __css() {
          return g().root;
        }
      }, r));
    }
  });
};
Vt.Label = Sa;
Vt.Description = ya;
Vt.Error = va;
const xa = (e) => {
  const [t, n] = v(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return m(C.div, b({
    get class() {
      return w("hope-GridItem-root", t.class);
    },
    get __css() {
      return ir({
        gridArea: t.area,
        gridColumn: kn(t.colSpan),
        gridRow: kn(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, n));
};
function kn(e) {
  return ee(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const br = (e) => {
  const [t, n] = v(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return m(C.div, b({
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
br.Item = xa;
const vl = (e) => {
  const [t, n] = v(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), r = we(), o = () => t.minChildWidth ? Ca(t.minChildWidth, r.vars) : wa(t.columns);
  return m(br, b({
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
function Ca(e, t) {
  return ee(e, (n) => {
    const r = Hn(n, "sizes", t);
    return rr(n) ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function wa(e) {
  return ee(e, (t) => rr(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const ka = Z({
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
}), Sl = (e) => {
  e = ne("Heading", {}, e);
  const [t, n, r] = v(e, ["as", "class", "level", "lineClamp"], [...te, "size"]), {
    baseClasses: o,
    styleOverrides: i
  } = ka("Heading", n), s = () => t.level ? `h${t.level}` : t.as, a = E(() => ({
    ...i().root,
    ...Qn(t.lineClamp)
  }));
  return m(C.h2, b({
    get as() {
      return s();
    },
    get class() {
      return w(o().root, t.class);
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
function _a(e) {
  const [t, n] = R("pending"), r = () => e.ignoreFallback ? "loaded" : t();
  let o = null;
  const i = () => {
    o && (o.onload = null, o.onerror = null, o = null);
  }, s = () => {
    if (!e.src)
      return;
    i();
    const a = new Image();
    a.src = e.src, e.crossOrigin && (a.crossOrigin = e.crossOrigin), e.srcSet && (a.srcset = e.srcSet), e.sizes && (a.sizes = e.sizes), e.loading && (a.loading = e.loading), a.onload = (l) => {
      i(), n("loaded"), L(e.onLoad, l);
    }, a.onerror = (l) => {
      i(), n("failed"), L(e.onError, l);
    }, o = a;
  };
  return U(() => {
    n(e.src ? "loading" : "pending");
  }), Rn(() => {
    e.ignoreFallback || (t() === "loading" && s(), B(() => {
      i();
    }));
  }), r;
}
const xl = (e) => {
  const [t, n, r] = v(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), o = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = _a(nt(e, {
    get ignoreFallback() {
      return o();
    }
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...o() ? n : {},
    ...r
  });
  return m(H, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return m(H, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return m(C.img, b({
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
      return m(C.img, b({
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
      }, s));
    }
  });
}, Cl = (e) => {
  const [t, n] = v(e, ["class"]);
  return m(C.img, b({
    get class() {
      return w("hope-Image-root", t.class);
    }
  }, n));
}, yr = {
  variant: "outlined",
  size: "md"
}, Q = {
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
}, Ia = Z(
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
            light: `0 0 0 3px ${Y(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${Y(e.colors.primary.darkChannel, 0.75)}`
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
            light: `0 0 0 3px ${Y(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${Y(e.colors.danger.darkChannel, 0.75)}`
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
            ...Q.sm,
            px: 2.5
          },
          md: {
            ...Q.md,
            px: 3
          },
          lg: {
            ...Q.lg,
            px: 4
          }
        }
      }
    }
  }),
  yr
), vr = ge();
function Sr() {
  return fe(vr);
}
function xr() {
  const e = Sr();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const wl = (e) => {
  const t = jt(), n = Sr();
  e = ne("Input", {}, e);
  const [r, o, i] = v(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...te, "variant", "size"]), {
    baseClasses: s,
    styleOverrides: a
  } = Ia("Input", {
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
    var f, h;
    return (h = (f = r.isRequired) != null ? f : n == null ? void 0 : n.isRequired()) != null ? h : t == null ? void 0 : t.isRequired();
  }, g = () => {
    var f, h;
    return (h = (f = r.isDisabled) != null ? f : n == null ? void 0 : n.isDisabled()) != null ? h : t == null ? void 0 : t.isDisabled();
  }, c = () => {
    var f, h;
    return (h = (f = r.isReadOnly) != null ? f : n == null ? void 0 : n.isReadOnly()) != null ? h : t == null ? void 0 : t.isReadOnly();
  }, u = () => {
    var f, h;
    return (h = (f = r.isInvalid) != null ? f : n == null ? void 0 : n.isInvalid()) != null ? h : t == null ? void 0 : t.isInvalid();
  }, d = () => t == null ? void 0 : t.mergeAriaDescribedBy(r["aria-describedby"]);
  return m(C.input, b({
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
      return c();
    },
    get ["aria-invalid"]() {
      return ws(u());
    },
    get ["aria-describedby"]() {
      return d();
    },
    get size() {
      return r.htmlSize;
    },
    get class() {
      return w(n == null ? void 0 : n.baseClasses().input, s().root, r.class);
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
function Ct(e) {
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
const Ra = Z(
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
        ...Ct({
          size: "sm",
          paddingWithSection: 8
        }),
        ...Ct({
          size: "md",
          paddingWithSection: 10
        }),
        ...Ct({
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
            ...Q.sm,
            height: "100%",
            width: Q.sm.minHeight
          },
          md: {
            ...Q.md,
            height: "100%",
            width: Q.md.minHeight
          },
          lg: {
            ...Q.lg,
            height: "100%",
            width: Q.lg.minHeight
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
            ...Q.sm,
            px: 2.5
          },
          md: {
            ...Q.md,
            px: 3
          },
          lg: {
            ...Q.lg,
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
  yr
), Cr = (e) => {
  const t = xr(), [n, r] = v(e, ["class", "__css", "addonPlacement"]), o = E(() => {
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
  return xe(() => {
    switch (n.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), B(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), B(() => t.setHasRightAddon(!1));
        break;
    }
  }), m(C.div, b({
    get ["data-required"]() {
      return O(t.isRequired());
    },
    get ["data-disabled"]() {
      return O(t.isDisabled());
    },
    get ["data-readonly"]() {
      return O(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return O(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().addon, o().className, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().addon,
        ...o().styleOverride,
        ...n.__css
      };
    }
  }, r));
}, $a = (e) => m(Cr, b({
  addonPlacement: "left"
}, e)), Oa = (e) => m(Cr, b({
  addonPlacement: "right"
}, e)), wr = (e) => {
  const t = xr(), [n, r] = v(e, ["class", "__css", "sectionPlacement"]), o = E(() => {
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
  return xe(() => {
    switch (n.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), B(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), B(() => t.setHasRightSection(!1));
        break;
    }
  }), m(C.div, b({
    get ["data-required"]() {
      return O(t.isRequired());
    },
    get ["data-disabled"]() {
      return O(t.isDisabled());
    },
    get ["data-readonly"]() {
      return O(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return O(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().section, o().className, n.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().section,
        ...o().styleOverride,
        ...n.__css
      };
    }
  }, r));
}, Ea = (e) => m(wr, b({
  sectionPlacement: "left"
}, e)), za = (e) => m(wr, b({
  sectionPlacement: "right"
}, e)), gt = (e) => {
  const t = jt();
  e = ne("InputGroup", {}, e);
  const [n, r, o] = v(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...te, "variant", "size"]), [i, s] = R(!1), [a, l] = R(!1), [g, c] = R(!1), [u, d] = R(!1), {
    baseClasses: f,
    styleOverrides: h
  } = Ra("InputGroup", {
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
  }), y = {
    isRequired: () => {
      var x;
      return (x = e.isRequired) != null ? x : t == null ? void 0 : t.isRequired();
    },
    isDisabled: () => {
      var x;
      return (x = e.isDisabled) != null ? x : t == null ? void 0 : t.isDisabled();
    },
    isReadOnly: () => {
      var x;
      return (x = e.isReadOnly) != null ? x : t == null ? void 0 : t.isReadOnly();
    },
    isInvalid: () => {
      var x;
      return (x = e.isInvalid) != null ? x : t == null ? void 0 : t.isInvalid();
    },
    variant: () => r.variant,
    size: () => r.size,
    unstyled: () => r.unstyled,
    baseClasses: f,
    styleOverrides: h,
    setHasLeftSection: s,
    setHasRightSection: l,
    setHasLeftAddon: c,
    setHasRightAddon: d
  };
  return m(vr.Provider, {
    value: y,
    get children() {
      return m(C.div, b({
        get ["data-required"]() {
          return O(y.isRequired());
        },
        get ["data-disabled"]() {
          return O(y.isDisabled());
        },
        get ["data-readonly"]() {
          return O(y.isReadOnly());
        },
        get ["data-invalid"]() {
          return O(y.isInvalid());
        },
        get class() {
          return w(f().root, n.class);
        },
        get __css() {
          return h().root;
        }
      }, o));
    }
  });
};
gt.LeftAddon = $a;
gt.RightAddon = Oa;
gt.LeftSection = Ea;
gt.RightSection = za;
const Ta = Z({
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
}), kl = (e) => {
  const [t, n, r] = v(e, ["class"], te), {
    baseClasses: o,
    styleOverrides: i
  } = Ta("Kbd", n);
  return m(C.kbd, b({
    get class() {
      return w(o().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}, Ba = Z((e) => ({
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
})), kr = ge();
function ke() {
  const e = fe(kr);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const Aa = (e) => {
  const t = ke(), [n, r] = v(e, ["ref"]);
  return m(C.div, b({
    ref(o) {
      const i = ze(t.setAnchorRef, n.ref);
      typeof i == "function" && i(o);
    }
  }, r));
}, Ma = (e) => {
  const t = ke();
  e = j({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [n, r] = v(e, ["class", "onClick"]);
  return m(Pt, b({
    get class() {
      return w("hope-Popover-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), L(n.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, Da = /* @__PURE__ */ Ce('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>', 8), _r = 30, pe = _r / 2, La = {
  top: `rotate(180 ${pe} ${pe})`,
  right: `rotate(-90 ${pe} ${pe})`,
  bottom: `rotate(0 ${pe} ${pe})`,
  left: `rotate(90 ${pe} ${pe})`
}, Wa = (e) => {
  const t = ke(), [n, r] = v(e, ["ref", "class", "style", "children"]), o = () => t.currentPlacement().split("-")[0], i = Pa(t.contentRef), s = () => {
    var c;
    return ((c = i()) == null ? void 0 : c.getPropertyValue("background-color")) || "none";
  }, a = () => {
    var c;
    return ((c = i()) == null ? void 0 : c.getPropertyValue(`border-${o()}-color`)) || "none";
  }, l = () => {
    var c;
    return ((c = i()) == null ? void 0 : c.getPropertyValue(`border-${o()}-width`)) || "0px";
  }, g = () => parseInt(l()) * 2 * (_r / t.arrowSize());
  return m(C.div, b({
    ref(c) {
      const u = ze(t.setArrowRef, n.ref);
      typeof u == "function" && u(c);
    },
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
      return w(t.baseClasses().arrow, n.class);
    },
    get __css() {
      return t.styleOverrides().arrow;
    }
  }, r, {
    get children() {
      const c = Da.cloneNode(!0), u = c.firstChild;
      return u.firstChild.nextSibling, zt(() => $n(u, "transform", La[o()])), c;
    }
  }));
};
function Pa(e) {
  const [t, n] = R();
  return Rn(() => {
    const r = e();
    r && n(Ss(r).getComputedStyle(r));
  }), t;
}
const Fa = (e) => {
  const t = ke(), [n, r] = v(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), o = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (u) => {
    u.stopPropagation(), L(n.onKeyDown, u), L(t.onContentKeyDown, u);
  }, a = (u) => {
    L(n.onFocusOut, u), L(t.onContentFocusOut, u);
  }, l = (u) => {
    L(n.onMouseEnter, u), i() && t.onContentMouseEnter();
  }, g = (u) => {
    L(n.onMouseLeave, u), i() && L(t.onContentMouseLeave, u);
  }, c = E(() => ({
    ...n.style,
    ...t.popoverTransition.style()
  }));
  return m(H, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return m(ot, {
        get children() {
          return m(Ft, b({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return o();
            },
            ref(u) {
              const d = ze(t.setContentRef, n.ref);
              typeof d == "function" && d(u);
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
              return c();
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
              return [m(H, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return m(Wa, {});
                }
              }), Fe(() => n.children)];
            }
          }));
        }
      });
    }
  });
}, Ha = (e) => {
  const t = ke(), [n, r] = v(e, ["class"]);
  return U(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), B(() => t.setDescriptionId(void 0));
  }), m(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, n.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, ja = (e) => {
  const t = ke(), [n, r] = v(e, ["class"]);
  return U(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), B(() => t.setHeadingId(void 0));
  }), m(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, n.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, Na = (e) => {
  const t = ke(), [n, r] = v(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), o = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (d) => {
    L(n.onClick, d), o() && (d.stopPropagation(), t.onTriggerClick());
  }, a = (d) => {
    L(n.onKeyDown, d), i() && (d.stopPropagation(), L(t.onTriggerKeyDown, d));
  }, l = (d) => {
    L(n.onFocus, d), i() && t.onTriggerFocus();
  }, g = (d) => {
    L(n.onBlur, d), i() && L(t.onTriggerBlur, d);
  }, c = (d) => {
    L(n.onMouseEnter, d), i() && t.onTriggerMouseEnter();
  }, u = (d) => {
    L(n.onMouseLeave, d), i() && t.onTriggerMouseLeave();
  };
  return m(C.button, b({
    ref(d) {
      const f = ze(t.setTriggerRef, n.ref);
      typeof f == "function" && f(d);
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
    onClick: s,
    onKeyDown: a,
    onFocus: l,
    onBlur: g,
    onMouseEnter: c,
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
function _n(e) {
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
function Va(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const r = t(e);
      return r ? _n(r) : e ? e.getBoundingClientRect() : _n();
    }
  };
}
const Te = (e) => {
  e = ne("Popover", {
    getAnchorRect: (I) => I == null ? void 0 : I.getBoundingClientRect(),
    id: `hope-popover-${rt()}`,
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
  const [t] = v(e, [...te]), {
    baseClasses: n,
    styleOverrides: r
  } = Ba("Popover", t), [o, i] = R(), [s, a] = R(), [l, g] = R(), [c, u] = R(), [d, f] = R(!1), [h, y] = R(e.placement), [x, S] = R(), [_, W] = R(), k = Zr({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (I) => {
      var T;
      return (T = e.onOpenChange) == null ? void 0 : T.call(e, I);
    }
  }), X = it(() => k.isOpen(), () => {
    var I;
    return j({
      transition: "pop",
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (I = e.transitionOptions) != null ? I : {});
  }), z = () => {
    var me;
    const I = Va((me = o()) != null ? me : s(), e.getAnchorRect), T = c(), G = l();
    return {
      anchorEl: I,
      arrowEl: T,
      floatingEl: G
    };
  };
  async function A() {
    var qt;
    const {
      anchorEl: I,
      arrowEl: T,
      floatingEl: G
    } = z();
    if (!I || !G)
      return;
    I.getBoundingClientRect();
    const me = [Lr(e.offset), Wr({
      padding: e.overflowPadding
    }), Pr({
      padding: e.overflowPadding
    }), Fr({
      padding: e.overflowPadding,
      apply({
        rects: Ye
      }) {
        const Ke = Math.round(Ye.reference.width);
        e.hasSameWidth && (G.style.width = `${Ke}px`);
      }
    })];
    T && me.push(Hr({
      element: T,
      padding: e.arrowPadding
    })), me.push(jr());
    const ae = await Nr(I, G, {
      placement: e.placement,
      middleware: me
    });
    if (ae.placement !== h() && y(ae.placement), !!G && (Object.assign(G.style, {
      left: `${Math.round(ae.x)}px`,
      top: `${Math.round(ae.y)}px`,
      visibility: (qt = ae.middlewareData.hide) != null && qt.referenceHidden ? "hidden" : "visible"
    }), T && ae.middlewareData.arrow)) {
      const {
        x: Ye,
        y: Ke
      } = ae.middlewareData.arrow, Rr = ae.placement.split("-")[0];
      Object.assign(T.style, {
        left: Ye != null ? `${Ye}px` : "",
        top: Ke != null ? `${Ke}px` : "",
        [Rr]: "100%"
      });
    }
  }
  let M, F;
  const P = () => {
    k.toggle();
  }, N = (I) => {
    I.key === "Escape" && k.close();
  }, K = () => {
    M == null && k.open();
  }, re = (I) => {
    const T = fn(I), G = !Qe(l(), T);
    k.isOpen() && e.closeOnBlur && G && k.close();
  }, oe = () => {
    f(!0), M = window.setTimeout(() => {
      k.open(), A();
    }, e.openDelay);
  }, le = () => {
    f(!1), M && (clearTimeout(M), M = void 0), F = window.setTimeout(() => {
      d() || k.close();
    }, e.closeDelay);
  }, J = (I) => {
    e.closeOnEsc && I.key === "Escape" && k.close();
  }, ie = (I) => {
    const T = fn(I), G = Qe(l(), T), me = Qe(s(), T), ae = !G && !me;
    k.isOpen() && e.closeOnBlur && ae && k.close();
  }, se = () => {
    f(!0);
  }, ft = (I) => {
    I.relatedTarget !== null && (f(!1), F = window.setTimeout(k.close, e.closeDelay));
  }, mt = () => {
    k.close();
  };
  U(() => {
    const {
      anchorEl: I,
      floatingEl: T
    } = z();
    if (!I || !T)
      return;
    const G = Dr(I, T, A, {
      elementResize: typeof ResizeObserver == "function"
    });
    B(G);
  }), B(() => {
    ye || (window.clearTimeout(M), window.clearTimeout(F));
  });
  const _e = {
    baseClasses: n,
    styleOverrides: r,
    isOpen: k.isOpen,
    popoverTransition: X,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: h,
    popoverId: () => e.id,
    headingId: x,
    setHeadingId: S,
    descriptionId: _,
    setDescriptionId: W,
    contentRef: l,
    setContentRef: g,
    setArrowRef: u,
    setAnchorRef: i,
    setTriggerRef: a,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: P,
    onTriggerKeyDown: N,
    onTriggerFocus: K,
    onTriggerBlur: re,
    onTriggerMouseEnter: oe,
    onTriggerMouseLeave: le,
    onContentKeyDown: J,
    onContentFocusOut: ie,
    onContentMouseEnter: se,
    onContentMouseLeave: ft,
    onCloseButtonClick: mt
  };
  return m(kr.Provider, {
    value: _e,
    get children() {
      return $s(e.children, k);
    }
  });
};
Te.Trigger = Na;
Te.Anchor = Aa;
Te.Content = Fa;
Te.CloseButton = Ma;
Te.Heading = ja;
Te.Description = Ha;
function _l(e) {
  const [t, n] = v(e, ["children", "withinPortal"]);
  return m(H, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return m(ot, b(n, {
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
const Il = C("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), Ir = (e) => {
  e = j({
    align: "center"
  }, e);
  const [t, n] = v(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return m(C.div, b({
    get class() {
      return w("hope-Stack-root", t.class);
    },
    get __css() {
      return ir({
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
}, Rl = (e) => {
  e = j({
    reverse: !1
  }, e);
  const [t, n] = v(e, ["reverse"]);
  return m(Ir, b(n, {
    get direction() {
      return ee(t.reverse, (r) => r ? "row-reverse" : "row");
    }
  }));
}, $l = (e) => {
  e = j({
    reverse: !1
  }, e);
  const [t, n] = v(e, ["reverse"]);
  return m(Ir, b(n, {
    get direction() {
      return ee(t.reverse, (r) => r ? "column-reverse" : "column");
    }
  }));
}, qa = Z({
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
}), Ol = (e) => {
  e = ne("Text", {}, e);
  const [t, n, r] = v(e, ["class", "lineClamp"], [...te, "size"]), {
    baseClasses: o,
    styleOverrides: i
  } = qa("Text", n), s = E(() => ({
    ...i().root,
    ...Qn(t.lineClamp)
  }));
  return m(C.p, b({
    get class() {
      return w(o().root, t.class);
    },
    get __css() {
      return s();
    }
  }, r));
};
export {
  dl as Anchor,
  ul as AspectRatio,
  gl as Box,
  aa as Button,
  fl as ButtonGroup,
  ve as COLOR_MODE_CLASSNAMES,
  dt as COLOR_MODE_STORAGE_KEY,
  hl as Center,
  Pt as CloseButton,
  Gn as ColorModeContext,
  ms as ColorModeProvider,
  al as ColorModeScript,
  pl as Container,
  Dt as DEFAULT_THEME,
  Oi as DEFAULT_THEME_MAP,
  Za as DEFAULT_TRANSITIONS_NAMES,
  bl as Divider,
  qe as Drawer,
  ua as DrawerCloseButton,
  ga as DrawerContent,
  fa as DrawerDescription,
  ma as DrawerHeading,
  ha as DrawerOverlay,
  yl as Flex,
  Ft as FocusTrapRegion,
  Vt as FormControl,
  pr as FormControlContext,
  ya as FormControlDescription,
  va as FormControlError,
  Sa as FormControlLabel,
  br as Grid,
  xa as GridItem,
  Rl as HStack,
  Sl as Heading,
  cl as HopeProvider,
  As as Icon,
  ml as IconButton,
  xl as Image,
  Cl as Img,
  wl as Input,
  gt as InputGroup,
  $a as InputGroupLeftAddon,
  Ea as InputGroupLeftSection,
  Oa as InputGroupRightAddon,
  za as InputGroupRightSection,
  kl as Kbd,
  Ne as Modal,
  Fs as ModalCloseButton,
  js as ModalContent,
  Ns as ModalDescription,
  Vs as ModalHeading,
  qs as ModalOverlay,
  _l as OptionalPortal,
  Te as Popover,
  Aa as PopoverAnchor,
  Wa as PopoverArrow,
  Ma as PopoverCloseButton,
  Fa as PopoverContent,
  Ha as PopoverDescription,
  ja as PopoverHeading,
  Na as PopoverTrigger,
  te as STYLE_CONFIG_PROP_NAMES,
  vl as SimpleGrid,
  Il as Spacer,
  Ir as Stack,
  Ol as Text,
  Mi as ThemeProvider,
  $l as VStack,
  Hs as VisuallyHidden,
  ll as VisuallyHiddenInput,
  Jo as arrayToObjectNotation,
  Yn as computeStyleOptions,
  il as cookieStorageManager,
  sl as cookieStorageManagerSSR,
  Ga as createControllableArraySignal,
  Ur as createControllableBooleanSignal,
  zn as createControllableSignal,
  Un as createCookieStorageManager,
  Zr as createDisclosure,
  Qa as createGlobalStyles,
  el as createHopeComponent,
  dr as createIcon,
  _a as createImageLoadingStatus,
  Ua as createInteractOutside,
  as as createLocalStorageManager,
  Re as createPalette,
  Qr as createPreventScroll,
  lo as createReducedMotion,
  Z as createStyleConfig,
  tl as createStyles,
  co as createTagName,
  it as createTransition,
  Ja as extendTheme,
  rl as fadeIn,
  Lt as focusStyles,
  Kn as getSelectedVariantClassNames,
  C as hope,
  nl as injectCriticalStyle,
  Uo as isColorModeObjectLike,
  Qo as isResponsiveObjectLike,
  Ln as keyframes,
  Qn as lineClamp,
  ls as localStorageManager,
  ee as mapResponsive,
  j as mergeDefaultProps,
  ne as mergeThemeProps,
  Zo as objectToArrayNotation,
  mo as pack,
  Hn as resolveTokenValue,
  Y as rgba,
  is as spin,
  oa as useButtonGroupContext,
  ss as useColorMode,
  ol as useColorModeValue,
  Ai as useComponentTheme,
  jt as useFormControlContext,
  Nt as useRequiredFormControlContext,
  we as useTheme,
  Xs as watchModals
};
