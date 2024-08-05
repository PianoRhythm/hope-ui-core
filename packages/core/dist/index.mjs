import { createSignal as I, createMemo as O, untrack as $o, createEffect as K, onCleanup as z, on as vn, mergeProps as et, sharedConfig as Oo, onMount as me, getOwner as Eo, DEV as zo, createContext as ie, useContext as se, splitProps as x, Show as P, createUniqueId as tt, children as To, createRenderEffect as wn } from "solid-js";
import { isServer as ue, createComponent as f, useAssets as Bo, effect as $t, template as he, Dynamic as Ao, mergeProps as b, setAttribute as kn, memo as Le, Portal as nt, insert as Mo } from "solid-js/web";
import { autoUpdate as Do, offset as Lo, flip as Wo, shift as Po, size as Fo, arrow as Ho, hide as jo, computePosition as Vo } from "@floating-ui/dom";
function _n(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function No(e) {
  const t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function In(e) {
  for (; e && !No(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function Ct(e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
var B = (e) => typeof e == "function" && !e.length ? e() : e;
function qo(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function Ot(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function Go() {
  return Ot(/^Mac/i);
}
function Yo() {
  return Ot(/^iPhone/i);
}
function Ko() {
  return Ot(/^iPad/i) || Go() && navigator.maxTouchPoints > 1;
}
function Xo() {
  return Yo() || Ko();
}
function jt(e) {
  return _n(e) ? e : void 0;
}
function Rn(e) {
  const [t, n] = I(e.defaultValue?.()), o = O(() => e.value?.() !== void 0), r = O(() => o() ? e.value?.() : t());
  return [r, (i) => {
    $o(() => {
      const s = qo(i, r());
      return Object.is(s, r()) || (o() || n(s), e.onChange?.(s)), s;
    });
  }];
}
function Uo(e) {
  const [t, n] = Rn(e);
  return [() => t() ?? !1, n];
}
function Ka(e) {
  const [t, n] = Rn(e);
  return [() => t() ?? [], n];
}
function Zo(e = {}) {
  const [t, n] = Uo({
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
function Xa(e, t) {
  const [n, o] = I(!1);
  K(() => {
    if (B(e.isDisabled))
      return;
    const r = (s) => {
      Vt(s, t()) && (e.onInteractOutsideStart?.(s), o(!0));
    }, i = (s) => {
      n() && Vt(s, t()) && (o(!1), e.onInteractOutside?.(s));
    };
    document.addEventListener("pointerdown", r, !0), document.addEventListener("pointerup", i, !0), z(() => {
      document.removeEventListener("pointerdown", r, !0), document.removeEventListener("pointerup", i, !0);
    });
  });
}
function Vt(e, t) {
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
const gt = typeof window < "u" && window.visualViewport, Jo = /* @__PURE__ */ new Set([
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
function Qo(e) {
  K(
    vn(
      () => B(e.isEnabled),
      (t) => {
        !t || (Xo() ? z(tr()) : z(er()));
      }
    )
  );
}
function er() {
  return Ct([
    De(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    De(document.documentElement, "overflow", "hidden")
  ]);
}
function tr() {
  let e, t = 0;
  const n = (g) => {
    e = In(g.target), !(e === document.documentElement && e === document.body) && (t = g.changedTouches[0].pageY);
  }, o = (g) => {
    if (e === document.documentElement || e === document.body) {
      g.preventDefault();
      return;
    }
    const c = g.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    (m <= 0 && c > t || m >= h && c < t) && g.preventDefault(), t = c;
  }, r = (g) => {
    const c = g.target;
    qt(c) && c !== document.activeElement && (g.preventDefault(), c.style.transform = "translateY(-2000px)", c.focus(), requestAnimationFrame(() => {
      c.style.transform = "";
    }));
  }, i = (g) => {
    const c = g.target;
    qt(c) && (c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", gt && (gt.height < window.innerHeight ? requestAnimationFrame(() => {
        Nt(c);
      }) : gt.addEventListener("resize", () => Nt(c), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, l = window.pageXOffset, a = window.pageYOffset, d = Ct([
    De(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    De(document.documentElement, "overflow", "hidden"),
    De(document.body, "marginTop", `-${a}px`)
  ]);
  window.scrollTo(0, 0);
  const u = Ct([
    Ee(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    Ee(document, "touchmove", o, {
      passive: !1,
      capture: !0
    }),
    Ee(document, "touchend", r, {
      passive: !1,
      capture: !0
    }),
    Ee(document, "focus", i, !0),
    Ee(window, "scroll", s)
  ]);
  return () => {
    d(), u(), window.scrollTo(l, a);
  };
}
function De(e, t, n) {
  const o = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = o;
  };
}
function Ee(e, t, n, o) {
  return e.addEventListener(t, n, o), () => {
    e.removeEventListener(t, n, o);
  };
}
function Nt(e) {
  const t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    const n = In(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      const o = n.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
      r > o + e.clientHeight && (n.scrollTop += r - o);
    }
    e = n.parentElement;
  }
}
function qt(e) {
  return e instanceof HTMLInputElement && !Jo.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var nr = !ue, or = nr && !!zo, rr = or ? (e) => Eo() ? z(e) : e : z;
function ir(e, t, n) {
  if (ue)
    return I(e, n);
  if (Oo.context) {
    const [o, r] = I(e, n);
    return me(() => r(() => t())), [o, r];
  }
  return I(t(), n);
}
function sr(e, t, n, o) {
  return e.addEventListener(t, n, o), rr(e.removeEventListener.bind(e, t, n, o));
}
function $n(e, t = !1) {
  if (ue)
    return () => t;
  const n = window.matchMedia(e), [o, r] = ir(t, () => n.matches);
  return sr(n, "change", () => r(n.matches)), o;
}
function ar(e) {
  return $n("(prefers-color-scheme: dark)", e);
}
ar.bind(void 0, !1);
function lr(e, t) {
  return $n("(prefers-reduced-motion: reduce)", e);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function cr(e, t) {
  const [n, o] = I(jt(t?.()));
  return K(() => {
    o(e()?.tagName.toLowerCase() || jt(t?.()));
  }), n;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const ze = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, St = {
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
    ...ze,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...ze,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...ze,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...ze,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...ze,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, Ua = Object.keys(St);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const Gt = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function dr(e) {
  const t = {
    "transition-duration": `${e.duration}ms`,
    "transition-timing-function": e.easing
  };
  if (_n(e.transition)) {
    if (!(e.transition in St))
      return {};
    const n = St[e.transition];
    return {
      "transition-property": Yt(n),
      ...t,
      ...n.common,
      ...n[Gt[e.phase]]
    };
  }
  return {
    "transition-property": Yt(e.transition),
    ...t,
    ...e.transition.common,
    ...e.transition[Gt[e.phase]]
  };
}
function Yt(e) {
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
const Kt = 250, Xt = 10, Ut = "ease";
function ot(e, t) {
  t = et(
    {
      transition: "fade",
      duration: Kt,
      delay: Xt,
      easing: Ut,
      get exitDuration() {
        return B(t).duration || Kt;
      },
      get exitDelay() {
        return B(t).delay || Xt;
      },
      get exitEasing() {
        return B(t).easing || Ut;
      }
    },
    t
  );
  const n = lr(), [o, r] = I(n() ? 0 : B(t).duration), [i, s] = I(
    B(e) ? "afterEnter" : "afterExit"
  ), [l, a] = I(B(t).easing);
  let d = -1;
  const u = (m) => {
    const h = m ? B(t).onBeforeEnter : B(t).onBeforeExit, S = m ? B(t).onAfterEnter : B(t).onAfterExit;
    s(m ? "beforeEnter" : "beforeExit"), window.clearTimeout(d);
    const k = r(
      n() ? 0 : m ? B(t).duration : B(t).exitDuration
    );
    if (a(m ? B(t).easing : B(t).exitEasing), k === 0) {
      h?.(), S?.(), s(m ? "afterEnter" : "afterExit");
      return;
    }
    const y = n() ? 0 : m ? B(t).delay : B(t).exitDelay, v = window.setTimeout(() => {
      h?.(), s(m ? "enter" : "exit");
    }, y);
    d = window.setTimeout(() => {
      window.clearTimeout(v), S?.(), s(m ? "afterEnter" : "afterExit");
    }, y + k);
  }, g = O(
    () => dr({
      transition: B(t).transition,
      duration: o(),
      phase: i(),
      easing: l()
    })
  ), c = O(() => i() !== "afterExit");
  return K(
    vn(
      () => B(e),
      (m) => u(m),
      { defer: !0 }
    )
  ), z(() => {
    ue || window.clearTimeout(d);
  }), { keepMounted: c, style: g };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function On(e) {
  return typeof e == "number";
}
function rt(e) {
  return Array.isArray(e);
}
function ur(e) {
  return typeof e == "function";
}
function de(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !rt(e);
}
function En(e) {
  return de(e) && Object.keys(e).length === 0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function gr(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function fr(e) {
  return e == null ? [] : rt(e) ? e : [e];
}
function oe(e, ...t) {
  return ur(e) ? e(...t) : e;
}
function it(e) {
  let t = !1;
  return function(...n) {
    t || (t = !0, e(...n));
  };
}
function Ke(e, t, n = 1 / 0) {
  return !de(e) && !Array.isArray(e) || !n ? e : Object.entries(e).reduce((o, [r, i]) => (de(i) || rt(i) ? Object.entries(Ke(i, t, n - 1)).forEach(([s, l]) => {
    o[`${r}${t}${s}`] = l;
  }) : o[r] = i, o), {});
}
function mr(e, t) {
  return Object.keys(e).reduce((n, o) => (o.split(t).reduce((r, i, s, l) => (r[i] != null || (r[i] = l.length - 1 === s ? e[o] : {}), r[i]), n), n), {});
}
function hr(e, t) {
  return t.split(".").reduce((n, o) => n && n[o], e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function pr(e, t) {
  const n = {};
  return t.forEach((o) => {
    o in e && (n[o] = e[o]);
  }), n;
}
const br = (e) => Object.keys(e);
function yr(e, t) {
  const n = {};
  return Object.keys(e).forEach((o) => {
    const r = e[o];
    t(r, o, e) && (n[o] = r);
  }), n;
}
function Je(e) {
  return yr(e, (t) => t != null);
}
var R = "colors", N = "sizes", p = "space", xr = { gap: p, gridGap: p, columnGap: p, gridColumnGap: p, rowGap: p, gridRowGap: p, inset: p, insetBlock: p, insetBlockEnd: p, insetBlockStart: p, insetInline: p, insetInlineEnd: p, insetInlineStart: p, margin: p, marginTop: p, marginRight: p, marginBottom: p, marginLeft: p, marginBlock: p, marginBlockEnd: p, marginBlockStart: p, marginInline: p, marginInlineEnd: p, marginInlineStart: p, padding: p, paddingTop: p, paddingRight: p, paddingBottom: p, paddingLeft: p, paddingBlock: p, paddingBlockEnd: p, paddingBlockStart: p, paddingInline: p, paddingInlineEnd: p, paddingInlineStart: p, top: p, right: p, bottom: p, left: p, scrollMargin: p, scrollMarginTop: p, scrollMarginRight: p, scrollMarginBottom: p, scrollMarginLeft: p, scrollMarginX: p, scrollMarginY: p, scrollMarginBlock: p, scrollMarginBlockEnd: p, scrollMarginBlockStart: p, scrollMarginInline: p, scrollMarginInlineEnd: p, scrollMarginInlineStart: p, scrollPadding: p, scrollPaddingTop: p, scrollPaddingRight: p, scrollPaddingBottom: p, scrollPaddingLeft: p, scrollPaddingX: p, scrollPaddingY: p, scrollPaddingBlock: p, scrollPaddingBlockEnd: p, scrollPaddingBlockStart: p, scrollPaddingInline: p, scrollPaddingInlineEnd: p, scrollPaddingInlineStart: p, fontSize: "fontSizes", background: R, backgroundColor: R, backgroundImage: R, borderImage: R, border: R, borderBlock: R, borderBlockEnd: R, borderBlockStart: R, borderBottom: R, borderBottomColor: R, borderColor: R, borderInline: R, borderInlineEnd: R, borderInlineStart: R, borderLeft: R, borderLeftColor: R, borderRight: R, borderRightColor: R, borderTop: R, borderTopColor: R, caretColor: R, color: R, columnRuleColor: R, fill: R, outline: R, outlineColor: R, stroke: R, textDecorationColor: R, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: N, minBlockSize: N, maxBlockSize: N, inlineSize: N, minInlineSize: N, maxInlineSize: N, width: N, minWidth: N, maxWidth: N, height: N, minHeight: N, maxHeight: N, flexBasis: N, gridTemplateColumns: N, gridTemplateRows: N, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Cr = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, We = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...o) => {
    const r = ((i) => JSON.stringify(i, Cr))(t);
    return r in e ? e[r] : e[r] = n(t, ...o);
  };
}, Xe = Symbol.for("sxs.internal"), Et = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Zt = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: Sr } = Object.prototype, vt = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), vr = /\s+(?![^()]*\))/, Ce = (e) => (t) => e(...typeof t == "string" ? String(t).split(vr) : [t]), Jt = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Ce((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Ce((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Ce((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Ce((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Ce((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Ce((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, ft = /([\d.]+)([^]*)/, wr = (e, t) => e.length ? e.reduce((n, o) => (n.push(...t.map((r) => r.includes("&") ? r.replace(/&/g, /[ +>|~]/.test(o) && /&.*&/.test(r) ? `:is(${o})` : o) : o + " " + r)), n), []) : t, kr = (e, t) => e in _r && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, o, r, i) => o + (r === "stretch" ? `-moz-available${i};${vt(e)}:${o}-webkit-fill-available` : `-moz-fit-content${i};${vt(e)}:${o}fit-content`) + i) : String(t), _r = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, re = (e) => e ? e + "-" : "", zn = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (o, r, i, s, l) => s == "$" == !!i ? o : (r || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? re(t) + (l.includes("$") ? "" : re(n)) + l.replace(/\$/g, "-") : l) + ")" + (r || s == "--" ? "*" + (r || "") + (i || "1") + ")" : "")), Ir = /\s*,\s*(?![^()]*\))/, Rr = Object.prototype.toString, we = (e, t, n, o, r) => {
  let i, s, l;
  const a = (d, u, g) => {
    let c, m;
    const h = (S) => {
      for (c in S) {
        const v = c.charCodeAt(0) === 64, V = v && Array.isArray(S[c]) ? S[c] : [S[c]];
        for (m of V) {
          const _ = /[A-Z]/.test(y = c) ? y : y.replace(/-[^]/g, (M) => M[1].toUpperCase()), U = typeof m == "object" && m && m.toString === Rr && (!o.utils[_] || !u.length);
          if (_ in o.utils && !U) {
            const M = o.utils[_];
            if (M !== s) {
              s = M, h(M(m)), s = null;
              continue;
            }
          } else if (_ in Jt) {
            const M = Jt[_];
            if (M !== l) {
              l = M, h(M(m)), l = null;
              continue;
            }
          }
          if (v && (k = c.slice(1) in o.media ? "@media " + o.media[c.slice(1)] : c, c = k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (M, E, D, L, W, H) => {
            const ae = ft.test(E), ye = 0.0625 * (ae ? -1 : 1), [xe, Ve] = ae ? [L, E] : [E, L];
            return "(" + (D[0] === "=" ? "" : D[0] === ">" === ae ? "max-" : "min-") + xe + ":" + (D[0] !== "=" && D.length === 1 ? Ve.replace(ft, (ut, Re, $e) => Number(Re) + ye * (D === ">" ? 1 : -1) + $e) : Ve) + (W ? ") and (" + (W[0] === ">" ? "min-" : "max-") + xe + ":" + (W.length === 1 ? H.replace(ft, (ut, Re, $e) => Number(Re) + ye * (W === ">" ? -1 : 1) + $e) : H) : "") + ")";
          })), U) {
            const M = v ? g.concat(c) : [...g], E = v ? [...u] : wr(u, c.split(Ir));
            i !== void 0 && r(Qt(...i)), i = void 0, a(m, E, M);
          } else
            i === void 0 && (i = [[], u, g]), c = v || c.charCodeAt(0) !== 36 ? c : `--${re(o.prefix)}${c.slice(1).replace(/\$/g, "-")}`, m = U ? m : typeof m == "number" ? m && _ in $r ? String(m) + "px" : String(m) : zn(kr(_, m ?? ""), o.prefix, o.themeMap[_]), i[0].push(`${v ? `${c} ` : `${vt(c)}:`}${m}`);
        }
      }
      var k, y;
    };
    h(d), i !== void 0 && r(Qt(...i)), i = void 0;
  };
  a(e, t, n);
}, Qt = (e, t, n) => `${n.map((o) => `${o}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, $r = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, en = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), fe = (e) => ((t) => {
  let n, o = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    o = en(n % 52) + o;
  return en(n % 52) + o;
})(((t, n) => {
  let o = n.length;
  for (; o; )
    t = 33 * t ^ n.charCodeAt(--o);
  return t;
})(5381, JSON.stringify(e)) >>> 0), Ae = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Or = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Er = (e) => {
  let t;
  const n = () => {
    const { cssRules: r } = t.sheet;
    return [].map.call(r, (i, s) => {
      const { cssText: l } = i;
      let a = "";
      if (l.startsWith("--sxs"))
        return "";
      if (r[s - 1] && (a = r[s - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === i)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${l}`;
        return i.cssRules.length ? `${a}${l}` : "";
      }
      return l;
    }).join("");
  }, o = () => {
    if (t) {
      const { rules: l, sheet: a } = t;
      if (!a.deleteRule) {
        for (; Object(Object(a.cssRules)[0]).type === 3; )
          a.cssRules.splice(0, 1);
        a.cssRules = [];
      }
      for (const d in l)
        delete l[d];
    }
    const r = Object(e).styleSheets || [];
    for (const l of r)
      if (Or(l)) {
        for (let a = 0, d = l.cssRules; d[a]; ++a) {
          const u = Object(d[a]);
          if (u.type !== 1)
            continue;
          const g = Object(d[a + 1]);
          if (g.type !== 4)
            continue;
          ++a;
          const { cssText: c } = u;
          if (!c.startsWith("--sxs"))
            continue;
          const m = c.slice(14, -3).trim().split(/\s+/), h = Ae[m[0]];
          h && (t || (t = { sheet: l, reset: o, rules: {}, toString: n }), t.rules[h] = { group: g, index: a, cache: new Set(m) });
        }
        if (t)
          break;
      }
    if (!t) {
      const l = (a, d) => ({ type: d, cssRules: [], insertRule(u, g) {
        this.cssRules.splice(g, 0, l(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return a === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : a;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : l("", "text/css"), rules: {}, reset: o, toString: n };
    }
    const { sheet: i, rules: s } = t;
    for (let l = Ae.length - 1; l >= 0; --l) {
      const a = Ae[l];
      if (!s[a]) {
        const d = Ae[l + 1], u = s[d] ? s[d].index : i.cssRules.length;
        i.insertRule("@media{}", u), i.insertRule(`--sxs{--sxs:${l}}`, u), s[a] = { group: i.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([l]) };
      }
      zr(s[a]);
    }
  };
  return o(), t;
}, zr = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (o) => {
    try {
      t.insertRule(o, n), ++n;
    } catch {
    }
  };
}, Te = Symbol(), Tr = We(), Br = (e, t) => Tr(e, () => (...n) => {
  let o = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const r of n)
    if (r != null)
      if (r[Xe]) {
        o.type == null && (o.type = r[Xe].type);
        for (const i of r[Xe].composers)
          o.composers.add(i);
      } else
        r.constructor !== Object || r.$$typeof ? o.type == null && (o.type = r) : o.composers.add(Ar(r, e));
  return o.type == null && (o.type = "span"), o.composers.size || o.composers.add(["PJLV", {}, [], [], {}, []]), Mr(e, o, t);
}), Ar = ({ variants: e, compoundVariants: t, defaultVariants: n, ...o }, r) => {
  const i = `${re(r.prefix)}c-${fe(o)}`, s = [], l = [], a = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in n)
    a[c] = String(n[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      u = a, g = c, Sr.call(u, g) || (a[c] = "undefined");
      const m = e[c];
      for (const h in m) {
        const S = { [c]: String(h) };
        String(h) === "undefined" && d.push(c);
        const k = m[h], y = [S, k, !Zt(k)];
        s.push(y);
      }
    }
  var u, g;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: m, ...h } = c;
      m = typeof m == "object" && m || {};
      for (const k in h)
        h[k] = String(h[k]);
      const S = [h, m, !Zt(m)];
      l.push(S);
    }
  return [i, o, s, l, a, d];
}, Mr = (e, t, n) => {
  const [o, r, i, s] = Dr(t.composers), l = typeof t.type == "function" || t.type.$$typeof ? ((g) => {
    function c() {
      for (let m = 0; m < c[Te].length; m++) {
        const [h, S] = c[Te][m];
        g.rules[h].apply(S);
      }
      return c[Te] = [], null;
    }
    return c[Te] = [], c.rules = {}, Ae.forEach((m) => c.rules[m] = { apply: (h) => c[Te].push([m, h]) }), c;
  })(n) : null, a = (l || n).rules, d = `.${o}${r.length > 1 ? `:where(.${r.slice(1).join(".")})` : ""}`, u = (g) => {
    g = typeof g == "object" && g || Lr;
    const { css: c, ...m } = g, h = {};
    for (const y in i)
      if (delete m[y], y in g) {
        let v = g[y];
        typeof v == "object" && v ? h[y] = { "@initial": i[y], ...v } : (v = String(v), h[y] = v !== "undefined" || s.has(y) ? v : i[y]);
      } else
        h[y] = i[y];
    const S = /* @__PURE__ */ new Set([...r]);
    for (const [y, v, V, _] of t.composers) {
      n.rules.styled.cache.has(y) || (n.rules.styled.cache.add(y), we(v, [`.${y}`], [], e, (E) => {
        a.styled.apply(E);
      }));
      const U = tn(V, h, e.media), M = tn(_, h, e.media, !0);
      for (const E of U)
        if (E !== void 0)
          for (const [D, L, W] of E) {
            const H = `${y}-${fe(L)}-${D}`;
            S.add(H);
            const ae = (W ? n.rules.resonevar : n.rules.onevar).cache, ye = W ? a.resonevar : a.onevar;
            ae.has(H) || (ae.add(H), we(L, [`.${H}`], [], e, (xe) => {
              ye.apply(xe);
            }));
          }
      for (const E of M)
        if (E !== void 0)
          for (const [D, L] of E) {
            const W = `${y}-${fe(L)}-${D}`;
            S.add(W), n.rules.allvar.cache.has(W) || (n.rules.allvar.cache.add(W), we(L, [`.${W}`], [], e, (H) => {
              a.allvar.apply(H);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const y = `${o}-i${fe(c)}-css`;
      S.add(y), n.rules.inline.cache.has(y) || (n.rules.inline.cache.add(y), we(c, [`.${y}`], [], e, (v) => {
        a.inline.apply(v);
      }));
    }
    for (const y of String(g.className || "").trim().split(/\s+/))
      y && S.add(y);
    const k = m.className = [...S].join(" ");
    return { type: t.type, className: k, selector: d, props: m, toString: () => k, deferredInjector: l };
  };
  return Et(u, { className: o, selector: d, [Xe]: t, toString: () => (n.rules.styled.cache.has(o) || u(), o) });
}, Dr = (e) => {
  let t = "";
  const n = [], o = {}, r = [];
  for (const [i, , , , s, l] of e) {
    t === "" && (t = i), n.push(i), r.push(...l);
    for (const a in s) {
      const d = s[a];
      (o[a] === void 0 || d !== "undefined" || l.includes(d)) && (o[a] = d);
    }
  }
  return [t, n, o, new Set(r)];
}, tn = (e, t, n, o) => {
  const r = [];
  e:
    for (let [i, s, l] of e) {
      if (l)
        continue;
      let a, d = 0, u = !1;
      for (a in i) {
        const g = i[a];
        let c = t[a];
        if (c !== g) {
          if (typeof c != "object" || !c)
            continue e;
          {
            let m, h, S = 0;
            for (const k in c) {
              if (g === String(c[k])) {
                if (k !== "@initial") {
                  const y = k.slice(1);
                  (h = h || []).push(y in n ? n[y] : k.replace(/^@media ?/, "")), u = !0;
                }
                d += S, m = !0;
              }
              ++S;
            }
            if (h && h.length && (s = { ["@media " + h.join(", ")]: s }), !m)
              continue e;
          }
        }
      }
      (r[d] = r[d] || []).push([o ? "cv" : `${a}-${i[a]}`, s, u]);
    }
  return r;
}, Lr = {}, Wr = We(), Pr = (e, t) => Wr(e, () => (...n) => {
  const o = () => {
    for (let r of n) {
      r = typeof r == "object" && r || {};
      let i = fe(r);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in r) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let l of [].concat(r["@import"]))
            l = l.includes('"') || l.includes("'") ? l : `"${l}"`, t.sheet.insertRule(`@import ${l};`, s++);
          delete r["@import"];
        }
        we(r, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return Et(o, { toString: o });
}), Fr = We(), Hr = (e, t) => Fr(e, () => (n) => {
  const o = `${re(e.prefix)}k-${fe(n)}`, r = () => {
    if (!t.rules.global.cache.has(o)) {
      t.rules.global.cache.add(o);
      const i = [];
      we(n, [], [], e, (l) => i.push(l));
      const s = `@keyframes ${o}{${i.join("")}}`;
      t.rules.global.apply(s);
    }
    return o;
  };
  return Et(r, { get name() {
    return r();
  }, toString: r });
}), jr = class {
  constructor(e, t, n, o) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = o == null ? "" : String(o);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + re(this.prefix) + re(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Vr = We(), Nr = (e, t) => Vr(e, () => (n, o) => {
  o = typeof n == "object" && n || Object(o);
  const r = `.${n = (n = typeof n == "string" ? n : "") || `${re(e.prefix)}t-${fe(o)}`}`, i = {}, s = [];
  for (const a in o) {
    i[a] = {};
    for (const d in o[a]) {
      const u = `--${re(e.prefix)}${a}-${d}`, g = zn(String(o[a][d]), e.prefix, a);
      i[a][d] = new jr(d, g, a, e.prefix), s.push(`${u}:${g}`);
    }
  }
  const l = () => {
    if (s.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const a = `${o === e.theme ? ":root," : ""}.${n}{${s.join(";")}}`;
      t.rules.themed.apply(a);
    }
    return n;
  };
  return { ...i, get className() {
    return l();
  }, selector: r, toString: l };
}), qr = We(), Gr = (e) => {
  let t = !1;
  const n = qr(e, (o) => {
    t = !0;
    const r = "prefix" in (o = typeof o == "object" && o || {}) ? String(o.prefix) : "", i = typeof o.media == "object" && o.media || {}, s = typeof o.root == "object" ? o.root || null : globalThis.document || null, l = typeof o.theme == "object" && o.theme || {}, a = { prefix: r, media: i, theme: l, themeMap: typeof o.themeMap == "object" && o.themeMap || { ...xr }, utils: typeof o.utils == "object" && o.utils || {} }, d = Er(s), u = { css: Br(a, d), globalCss: Pr(a, d), keyframes: Hr(a, d), createTheme: Nr(a, d), reset() {
      d.reset(), u.theme.toString();
    }, theme: {}, sheet: d, config: a, prefix: r, getCssText: d.toString, toString: d.toString };
    return String(u.theme = u.createTheme(l)), u;
  });
  return t || n.reset(), n;
};
const Yr = Gr({ prefix: "hope" }), { css: Tn, globalCss: zt, getCssText: Kr, keyframes: Bn } = Yr, ge = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Xr(e) {
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
function J(e, t) {
  return rt(e) ? e.map((n) => n === null ? null : t(n)) : de(e) ? br(e).reduce((n, o) => (n[o] = t(e[o]), n), {}) : e != null ? t(e) : null;
}
function Ur(e, t) {
  const n = t.map((o) => e[o] ?? null);
  for (; gr(n) === null; )
    n.pop();
  return n;
}
function Zr(e, t) {
  const n = {};
  return e.forEach((o, r) => {
    const i = t[r];
    o != null && (n[i] = o);
  }), n;
}
function Jr(e, t) {
  const n = Object.keys(e);
  return n.length > 0 && n.every((o) => t.includes(o));
}
const Q = [
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
const j = {
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
function le(e) {
  return An((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function ne(e) {
  return An((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function An(e, ...t) {
  return t.map(e).join(", ");
}
const Qr = "_light", Ue = "_dark", ei = `.${ge.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, ti = `.${ge.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, ni = /* @__PURE__ */ new Map([
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
  ["_groupHover", le(j.hover)],
  ["_peerHover", ne(j.hover)],
  ["_groupFocus", le(j.focus)],
  ["_peerFocus", ne(j.focus)],
  ["_groupFocusVisible", le(j.focusVisible)],
  ["_peerFocusVisible", ne(j.focusVisible)],
  ["_groupActive", le(j.active)],
  ["_peerActive", ne(j.active)],
  ["_groupDisabled", le(j.disabled)],
  ["_peerDisabled", ne(j.disabled)],
  ["_groupInvalid", le(j.invalid)],
  ["_peerInvalid", ne(j.invalid)],
  ["_groupChecked", le(j.checked)],
  ["_peerChecked", ne(j.checked)],
  ["_groupFocusWithin", le(j.focusWithin)],
  ["_peerFocusWithin", ne(j.focusWithin)],
  ["_peerPlaceholderShown", ne(j.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [Qr, ei],
  [Ue, ti]
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
const ri = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: o, medias: r } = t.__breakpoints, i = {}, s = {};
  for (const l in e) {
    let a = oe(e[l], t);
    if (a == null || mt(l, a, i))
      continue;
    if (a = de(a) && n(a) ? o(a) : a, !Array.isArray(a)) {
      i[l] = a;
      continue;
    }
    const d = a.slice(0, r.length).length;
    for (let u = 0; u < d; u += 1) {
      const g = r?.[u], c = a[u];
      if (c != null) {
        if (!g) {
          mt(l, c, i) || (i[l] = c);
          continue;
        }
        s[g] = s[g] || {}, mt(l, c, s[g]) || (s[g][l] = c);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function mt(e, t, n) {
  if (!de(t) || !Xr(t))
    return !1;
  const { light: o, dark: r } = t;
  return o != null && (n[e] = o), n[Ue] = n[Ue] || {}, r != null && (n[Ue][e] = r), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function ii(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Qe(e) {
  if (e == null)
    return e;
  const { unitless: t } = ii(e);
  return t || On(e) ? `${e}px` : e;
}
const Mn = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Tt = (e) => Object.fromEntries(Object.entries(e).sort(Mn));
function nn(e) {
  const t = Tt(e);
  return Object.assign(Object.values(t), t);
}
function si(e) {
  const t = Object.keys(Tt(e));
  return new Set(t);
}
function on(e) {
  if (!e)
    return e;
  e = Qe(e) ?? e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return On(e) ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + t}`);
}
function Ge(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Qe(e)})`), t && n.push("and", `(max-width: ${Qe(t)})`), n.join(" ");
}
function ai(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = nn(e), n = Object.entries(e).sort(Mn).map(([i, s], l, a) => {
    let [, d] = a[l + 1] ?? [];
    return d = parseFloat(d) > 0 ? on(d) : void 0, {
      _minW: on(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: Ge(null, d),
      minWQuery: Ge(s),
      minMaxQuery: Ge(s, d)
    };
  }), o = si(e), r = Array.from(o.values());
  return {
    keys: o,
    normalized: t,
    asObject: Tt(e),
    asArray: nn(e),
    details: n,
    medias: [null, ...t.map((i) => Ge(i)).slice(1)],
    isResponsive(i) {
      return Jr(i, r);
    },
    toArrayValue(i) {
      if (!de(i))
        throw new Error("toArrayValue: value must be an object");
      return Ur(i, r);
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return Zr(i, r);
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
const li = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], Dn = /!(important)?$/;
function ci(e) {
  return Dn.test(e);
}
function di(e) {
  return e.replace(Dn, "").trim();
}
function Ln(e, t, n) {
  if (e == null)
    return;
  const o = String(e), r = di(o);
  let i = n[t][r] ?? hr(n[t], r);
  return i == null && (i = li.includes(t) ? r : Qe(r)), ci(o) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function st(e, t) {
  const n = {}, o = ri(e)(t);
  for (let r in o) {
    let i = oe(o[r], t);
    if (i == null)
      continue;
    if (r.startsWith("_")) {
      const l = ni.get(r);
      if (l == null)
        continue;
      r = l;
    }
    if (de(i)) {
      n[r] = Object.assign(
        {},
        n[r],
        st(i, t)
      );
      continue;
    }
    const s = oi.get(r) ?? [r];
    for (const l of s) {
      const a = t.themeMap[l];
      a != null && (i = Ln(i, a, t.vars)), n[l] = i;
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
function ui(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function gi(e) {
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
  const n = parseInt(t, 16), o = n >> 16 & 255, r = n >> 8 & 255, i = n & 255;
  return {
    r: o,
    g: r,
    b: i,
    a: 1
  };
}
function fi(e) {
  const [t, n, o, r] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: o, a: r || 1 };
}
function mi(e) {
  return ui(e) ? gi(e) : e.startsWith("rgb") ? fi(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function ht(e) {
  const { r: t, g: n, b: o } = mi(e);
  return `${t} ${n} ${o}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function Se(e) {
  return {
    ...e,
    mainChannel: ht(e[500]),
    lightChannel: ht(e[100]),
    darkChannel: ht(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const at = "hope";
function hi(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function pi(e) {
  const t = hi(e.toString());
  return yi(bi(t));
}
function bi(e) {
  return e.includes("\\.") || Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.");
}
function yi(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function xi(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Ci(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Si(e, t = "") {
  return pi(`--${xi(e, t)}`);
}
function vi(e, t, n = at) {
  const o = Si(e, n);
  return {
    variable: o,
    reference: Ci(o, t)
  };
}
function wi(e = at) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const Be = "__";
function pt(e, t, n) {
  return vi(String(t).replace(e, "-"), void 0, n);
}
function ki(e, t) {
  const n = {}, o = {}, r = {}, { colors: i, ...s } = e, l = { colors: i.light }, a = { colors: i.dark }, d = Ke(l, Be), u = Ke(a, Be), g = Ke(s, Be), c = new RegExp(`(${Be}|\\.)`, "g");
  for (const [h, S] of Object.entries(d)) {
    const { variable: k, reference: y } = pt(c, h, t);
    n[k] = S, r[h] = y;
  }
  for (const [h, S] of Object.entries(u)) {
    const { variable: k } = pt(c, h, t);
    o[k] = S;
  }
  for (const [h, S] of Object.entries(g)) {
    const { variable: k, reference: y } = pt(c, h, t);
    n[k] = S, r[h] = y;
  }
  const m = mr(r, Be);
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
const _i = [
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
function Ii(e) {
  return pr(e, _i);
}
function Ri(e) {
  const { vars: t, __cssVarsValues: n, __breakpoints: o, ...r } = e;
  return r;
}
function Wn(e) {
  const t = Ri(e), n = Ii(t), { cssVarsValues: o, vars: r } = ki(n, t.cssVarPrefix);
  return Object.assign(t, {
    vars: r,
    __cssVarsValues: o,
    __breakpoints: ai(t.breakpoints)
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
function Pn(e) {
  const t = wi(e);
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
      primary: Se({
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
      neutral: Se({
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
      success: Se({
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
      info: Se({
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
      warning: Se({
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
      danger: Se({
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
const $i = {
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
}, rn = {
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
}, Oi = {
  colors: Pn(at),
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
  space: rn,
  sizes: {
    ...rn,
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
}, Ei = {
  ...Oi,
  cssVarPrefix: at,
  themeMap: $i,
  components: {}
}, Bt = Wn(Ei);
function wt(e, t, n) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (n = 0; n < t.length; n++)
        e[n] = wt(e[n], t[n]);
    else
      for (n in t) {
        if (n === "__proto__" || n === "constructor" || n === "prototype")
          break;
        e[n] = wt(e[n], t[n]);
      }
    return e;
  }
  return t;
}
function kt(e, t, n) {
  t.split && (t = t.split("."));
  for (var o = 0, r = t.length, i = e, s, l; o < r && (l = t[o++], !(l === "__proto__" || l === "constructor" || l === "prototype")); )
    i = i[l] = o === r ? wt(i[l], n) : typeof (s = i[l]) == typeof t ? s : t[o] * 0 !== 0 || !!~("" + t[o]).indexOf(".") ? {} : [];
}
function Za(e) {
  let t = Bt;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: Pn(e.cssVarPrefix)
  });
  const n = {
    value: t
  };
  return kt(n, "value", e), Wn(n.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function At(e) {
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
function zi(e) {
  zt({
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
function Ti(e) {
  zt({
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
const Fn = ie(Bt);
function pe() {
  return se(Fn);
}
function Bi(e) {
  const t = pe();
  return O(() => {
    if (e != null)
      return t.components[e] ?? void 0;
  });
}
function ee(e, t, n) {
  const o = pe();
  return et(t, () => o.components[e]?.defaultProps ?? {}, n);
}
function Ai(e) {
  const t = e.theme ?? Bt;
  return zi(t), e.withCssReset && Ti(t.vars), f(Fn.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function Ja(e) {
  const t = it((n) => {
    const {
      "@import": o,
      "@font-face": r,
      ...i
    } = oe(e, n), s = Object.entries(i).reduce((l, [a, d]) => (l[a] = st(d, n), l), {});
    zt({
      "@import": o ?? [],
      "@font-face": r ?? {},
      ...s
    })();
  });
  return function() {
    const n = pe();
    t(n);
  };
}
function Qa(e) {
  return e;
}
function Hn(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Hn(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function Mt() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Hn(e)) && (o && (o += " "), o += t);
  return o;
}
function ke(e, t) {
  return Tn(st(e, t))().className;
}
function _t(e, t) {
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
function sn(e, t) {
  return Object.entries(e).reduce((n, [o, r]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: l = []
    } = r;
    return n[o] = {
      baseClassName: ke(i, t),
      variantClassNames: Object.entries(s).reduce((a, [d, u]) => (a[d] = Object.entries(u).reduce(
        (g, [c, m]) => (g[c] = ke(m, t), g),
        {}
      ), a), {}),
      compoundVariants: l.map((a) => [
        a.variants,
        ke(a.style, t)
      ])
    }, n;
  }, {});
}
function X(e, t) {
  let n, o, r, i, s = [], l;
  const a = it(
    (d, u, g) => {
      n = oe(e, u), o = sn(
        n,
        u
      ), r = oe(g, u), i = r && sn(r, u), s = Object.keys(n), l = Object.fromEntries(
        s.map((c) => [c, `hope-${d}-${c}`])
      );
    }
  );
  return function(d, u) {
    const g = pe(), c = Bi(d);
    a(d, g, c()?.styleConfigOverride);
    const m = O(() => oe(u.styleConfigOverride, g)), h = O(() => {
      const [y, v] = x(u, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...Je(v)
      };
    }), S = O(() => s.reduce((y, v) => {
      let V = "", _ = {}, U = [];
      u.unstyled || (V = o[v].baseClassName ?? "", _ = o[v].variantClassNames ?? {}, U = o[v].compoundVariants ?? []);
      const M = i?.[v]?.baseClassName ?? "", E = i?.[v]?.variantClassNames ?? {}, D = i?.[v]?.compoundVariants ?? [], L = [l[v], V, M];
      for (const W in h()) {
        const H = h()[W];
        H != null && (L.push(_[W]?.[String(H)]), L.push(E[W]?.[String(H)]));
      }
      for (const [W, H] of [...U, ...D])
        _t(W, h()) && L.push(H);
      return y[v] = Mt(...L), y;
    }, {})), k = O(() => {
      const y = m();
      return y == null ? {} : s.reduce((v, V) => {
        const _ = y[V]?.baseStyle ?? {}, U = y[V]?.variants ?? {}, M = y[V]?.compoundVariants ?? [];
        v[V] = _;
        for (const E in h()) {
          const D = h()[E];
          if (D == null)
            continue;
          const L = U[E]?.[String(D)] ?? {};
          En(L) || kt(v, V, L);
        }
        for (const E of M)
          _t(E.variants, h()) && kt(v, V, E.style);
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
function jn(e, t) {
  const { baseStyle: n = {}, variants: o = {}, compoundVariants: r = [] } = e;
  return {
    baseClassName: ke(n, t),
    variantClassNames: Object.entries(o).reduce((i, [s, l]) => (i[s] = Object.entries(l).reduce(
      (a, [d, u]) => (a[d] = ke(u, t), a),
      {}
    ), i), {}),
    compoundVariants: r.map((i) => [
      i.variants,
      ke(i.style, t)
    ])
  };
}
function Vn(e, t) {
  const { variantClassNames: n = {}, compoundVariants: o = [] } = e, r = [];
  for (const i in t) {
    const s = t[i];
    s != null && r.push(n[i]?.[String(s)]);
  }
  for (const [i, s] of o)
    _t(i, t) && r.push(s);
  return r;
}
function el(e) {
  let t, n;
  const o = it((r) => {
    t = oe(e, r), n = jn(t, r);
  });
  return function(r = {}) {
    const i = pe();
    return o(i), O(() => {
      if (t == null || n == null)
        return "";
      const s = {
        ...t.defaultVariants,
        ...Je(r)
      }, l = Vn(n, s);
      return Mt(n.baseClassName, l);
    });
  };
}
const Mi = {
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
}, Di = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Li = {
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
}, Wi = {
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
}, Pi = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Fi = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, Hi = {
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
}, ji = {
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
}, Ni = {
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
}, qi = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Gi = {
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
}, Yi = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Ki = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Xi = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, Ui = {
  objectFit: !0,
  objectPosition: !0
}, Zi = {
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
}, Ji = {
  ...Mi,
  ...Di,
  ...Li,
  ...Wi,
  ...Pi,
  ...Fi,
  ...Hi,
  ...ji,
  ...Vi,
  ...Ni,
  ...qi,
  ...Gi,
  ...Yi,
  ...Ki,
  ...Xi,
  ...Ui,
  ...Zi
};
function Qi(e) {
  return Object.keys(e).filter((t) => t in Ji);
}
const Nn = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function es(e) {
  return Object.entries(e).reduce((t, [n, o]) => {
    const r = Nn.get(n);
    return r != null && o != null && (t[r] = o), t;
  }, {});
}
const ts = Tn({});
function bt(e, t, n) {
  let o, r, i = [];
  const s = it((a) => {
    t != null && (o = oe(t, a), r = jn(o, a), i = o.variants ? Object.keys(o.variants) : []);
  }), l = (a) => {
    const d = pe();
    s(d);
    const [u, g, c, m, h] = x(
      a,
      ["as", "class", "sx", "__css"],
      [...Nn.keys()],
      i,
      Qi(a)
    ), S = O(() => {
      if (r == null)
        return [];
      const y = {
        ...o?.defaultVariants,
        ...Je(c)
      };
      return Vn(r, y);
    }), k = O(() => {
      const y = Object.assign({}, u.__css, Je(m), ...fr(u.sx).map((v) => oe(v, d)));
      if (!En(y))
        return ts({
          css: st(y, d)
        }).className;
    });
    return f(Ao, b({
      get component() {
        return u.as ?? e;
      },
      get class() {
        return Mt(n, r?.baseClassName, ...S(), k(), u.class) || void 0;
      }
    }, () => es(g), h));
  };
  return n != null && (l.toString = () => `.${n}`), l;
}
function ns() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(bt, {
    apply(t, n, o) {
      return bt(...o);
    },
    get(t, n) {
      return e.has(n) || e.set(n, bt(n)), e.get(n);
    }
  });
}
const C = ns(), os = /* @__PURE__ */ he('<style id="stitches" $serveronly></style>', 2);
function tl() {
  Bo(() => (() => {
    const e = os.cloneNode(!0);
    return $t(() => e.innerHTML = Kr()), e;
  })());
}
const rs = Bn({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), nl = Bn({
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
const qn = ie();
function is() {
  const e = se(qn);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function ol(e, t) {
  const { colorMode: n } = is();
  return O(() => n() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const lt = "hope-ui-color-mode";
function ss(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get: (t) => {
      if (ue)
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
const as = ss(lt);
function an(e, t) {
  return e.match(new RegExp(`(^| )${t}=([^;]+)`))?.[2];
}
function Gn(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (n) => t ? an(t, e) ?? n : ue ? n : an(document.cookie, e) ?? n,
    set: (n) => {
      document.cookie = `${e}=${n}; max-age=31536000; path=/`;
    }
  };
}
const rl = Gn(lt);
function il(e) {
  return Gn(lt, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function Yn() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function ls() {
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
function cs(e) {
  document.body.classList.add(e ? ge.dark : ge.light), document.body.classList.remove(e ? ge.light : ge.dark);
}
function ds(e, t = !0) {
  const n = t ? ls() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, n?.();
}
function Kn(e) {
  return Yn().matches ?? e === "dark" ? "dark" : "light";
}
function us(e) {
  const t = "light", n = e.get(t) ?? t;
  return n === "system" ? ue ? t : Kn() : n;
}
function gs(e) {
  const t = Yn(), n = (o) => {
    e(o.matches ? "dark" : "light");
  };
  return t.addEventListener("change", n), () => {
    t.removeEventListener("change", n);
  };
}
function fs(e) {
  const t = () => e.initialColorMode ?? "system", n = () => e.storageManager ?? as;
  let o;
  const [r, i] = I(us(n())), s = (u) => {
    i(u), cs(u === "dark"), ds(u, e.disableTransitionOnChange);
  }, l = (u) => {
    o && (o(), o = void 0);
    const g = u === "system";
    g && (o = gs(s)), s(g ? Kn() : u), n().set(u);
  }, a = () => {
    l(r() === "dark" ? "light" : "dark");
  };
  K(() => {
    l(n().get() ?? t());
  }), z(() => {
    o?.();
  });
  const d = {
    colorMode: r,
    setColorMode: l,
    toggleColorMode: a
  };
  return f(qn.Provider, {
    value: d,
    get children() {
      return e.children;
    }
  });
}
function Xn(e) {
  return e == null ? {} : {
    overflow: J(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: J(e, (t) => t != null ? "ellipsis" : void 0),
    display: J(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: J(e, (t) => t ?? void 0),
    WebkitBoxOrient: J(e, (t) => t != null ? "vertical" : void 0)
  };
}
function F(e, t) {
  return et(e, t);
}
function q(e, t) {
  return `rgb(${e} / ${t})`;
}
const ms = /* @__PURE__ */ he('<script id="hope-ui-color-mode-script"><\/script>', 2), Un = "system", hs = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function ps(e) {
  return hs.has(e) ? e : Un;
}
function sl(e) {
  e = F({
    initialColorMode: Un,
    storageType: "localStorage",
    storageKey: lt
  }, e);
  const t = O(() => {
    const n = ps(e.initialColorMode), o = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${n}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, r = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${n}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? o : r}`.trim();
  });
  return (() => {
    const n = ms.cloneNode(!0);
    return $t((o) => {
      const r = e.nonce, i = t();
      return r !== o._v$ && kn(n, "nonce", o._v$ = r), i !== o._v$2 && (n.innerHTML = o._v$2 = i), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const ln = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function Zn(e) {
  const [t, n] = I(), [o, r] = I(), i = O(() => e.overlayTransitionOptions ? F(ln, e.overlayTransitionOptions) : ln), s = ot(() => e.isOpen, i);
  let l;
  const a = (c) => {
    l = c.target;
  }, d = (c) => {
    c.key === "Escape" && (c.stopPropagation(), e.closeOnEsc && e.onClose(), e.onEscKeyDown?.());
  }, u = (c) => {
    c.stopPropagation(), l === c.target && (e.closeOnOverlayClick && e.onClose(), e.onOverlayClick?.());
  }, g = () => {
    e.onClose();
  };
  return Qo({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: n,
    descriptionId: o,
    setDescriptionId: r,
    overlayTransition: s,
    onContainerMouseDown: a,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: g
  };
}
const bs = X((e) => ({
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
function Jn(e) {
  return typeof e == "function";
}
function Qn(e) {
  return e == null;
}
function ys(e) {
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
function Ze(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function cn(e) {
  const t = e.target ?? e.currentTarget, n = It(t);
  return e.relatedTarget ?? n;
}
function It(e) {
  return eo(e)?.activeElement;
}
function xs(e) {
  return eo(e).defaultView || window;
}
function eo(e) {
  return Cs(e) ? e.ownerDocument ?? document : document;
}
function Cs(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Ss(e) {
  return e.tagName === "IFRAME";
}
function $(e) {
  return e ? "" : void 0;
}
function vs(e) {
  return e ? !0 : void 0;
}
function _e(e, t) {
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
function ve(e) {
  if (ws())
    e.focus({ preventScroll: !0 });
  else {
    const t = ks(e);
    e.focus(), _s(t);
  }
}
let Ye = null;
function ws() {
  if (Ye == null) {
    Ye = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ye = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ye;
}
function ks(e) {
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
function _s(e) {
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
function Is() {
}
function A(e, t) {
  return e && (Jn(e) ? e(t) : e[0](e[1], t)), t?.defaultPrevented;
}
function Rs(e, ...t) {
  return Jn(e) ? e(...t) : e;
}
function $s(e, t) {
  const n = {};
  return Object.keys(e).forEach((o) => {
    const r = e[o];
    t(r, o, e) && (n[o] = r);
  }), n;
}
function to(e) {
  return $s(e, (t) => t != null);
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
const no = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function Rt(e, t) {
  const n = Array.from(e.querySelectorAll(no)).filter(dn);
  return t && dn(e) && n.unshift(e), n.forEach((o, r) => {
    if (Ss(o) && o.contentDocument) {
      const i = o.contentDocument.body, s = Rt(i, !1);
      n.splice(r, 1, ...s);
    }
  }), n;
}
function dn(e) {
  return oo(e) && !Os(e);
}
function oo(e) {
  return e.matches(no) && ro(e);
}
function Os(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function ro(e, t) {
  return e.nodeName !== "#comment" && Es(e) && zs(e, t) && (!e.parentElement || ro(e.parentElement, e));
}
function Es(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return !1;
  const { display: t, visibility: n } = e.style;
  let o = t !== "none" && n !== "hidden" && n !== "collapse";
  if (o) {
    if (!e.ownerDocument.defaultView)
      return o;
    const { getComputedStyle: r } = e.ownerDocument.defaultView, { display: i, visibility: s } = r(e);
    o = i !== "none" && s !== "hidden" && s !== "collapse";
  }
  return o;
}
function zs(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function io(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = io(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function w() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = io(e)) && (o && (o += " "), o += t);
  return o;
}
const Ts = /* @__PURE__ */ he('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>', 4, !0), un = {
  viewBox: "0 0 24 24",
  path: () => Ts.cloneNode(!0)
}, gn = C("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), Bs = (e) => {
  e = F({
    children: un.path,
    viewBox: un.viewBox,
    color: "currentColor"
  }, e);
  const [t, n] = x(e, ["as", "children", "viewBox"]), o = () => t.as && !ys(t.as);
  return f(P, {
    get when() {
      return o();
    },
    get fallback() {
      return f(gn, b({
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
      return f(gn, b({
        get as() {
          return t.as;
        }
      }, n));
    }
  });
};
function so(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: n = {}
  } = e;
  return (o) => f(Bs, b({
    viewBox: t
  }, n, o, {
    get children() {
      return e.path;
    }
  }));
}
const As = /* @__PURE__ */ he('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>', 8, !0), Ms = /* @__PURE__ */ he('<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>', 4, !0), Ds = so({
  path: () => As.cloneNode(!0)
}), Ls = so({
  path: () => Ms.cloneNode(!0)
}), Ws = X(
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
        ...At(e.vars),
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
), Dt = (e) => {
  e = ee("CloseButton", {
    "aria-label": "Close",
    children: () => f(Ls, {})
  }, e);
  const [t, n, o] = x(e, ["class"], [...Q, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = Ws("CloseButton", n);
  return f(C.button, b({
    type: "button",
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, o));
}, ao = ie();
function Pe() {
  const e = se(ao);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const Ps = (e) => {
  const t = Pe();
  e = F({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [n, o] = x(e, ["class", "onClick"]);
  return f(Dt, b({
    get class() {
      return w("hope-Modal-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), A(n.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, lo = {
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
}, Fs = C("span", {
  baseStyle: lo
}), al = C("input", {
  baseStyle: lo
}), Lt = (e) => {
  let t, n;
  e = F({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [o, r] = x(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), i = () => {
    if (!n)
      return;
    const d = n.querySelector(o.initialFocusSelector);
    if (d) {
      ve(d);
      return;
    }
    if (o.autoFocus) {
      const u = Rt(n)[0] ?? n;
      ve(u);
    }
  }, s = () => {
    if (o.restoreFocusSelector) {
      t = document.querySelector(o.restoreFocusSelector);
      return;
    }
    o.restoreFocus && (t = It());
  }, l = () => {
    if (!n)
      return !1;
    const d = It(n);
    return !d || Ze(n, d) ? !1 : oo(d);
  }, a = (d) => {
    if (!n)
      return;
    const u = Rt(n).slice(1, -1);
    if (!u.length) {
      ve(n);
      return;
    }
    const g = u[0], c = u[u.length - 1];
    d.relatedTarget === g ? ve(c) : ve(g);
  };
  return me(() => {
    s(), i();
  }), z(() => {
    !t || l() || ve(t);
  }), f(C.div, b({
    ref(d) {
      const u = _e((g) => n = g, o.ref);
      typeof u == "function" && u(d);
    },
    tabIndex: -1
  }, r, {
    get children() {
      return [f(P, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return f(fn, {
            onFocus: a
          });
        }
      }), Le(() => e.children), f(P, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return f(fn, {
            onFocus: a
          });
        }
      })];
    }
  }));
}, fn = (e) => f(Fs, b({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e)), Hs = (e) => {
  const t = Pe(), [n, o] = x(e, ["class", "style", "onClick"]), r = (s) => {
    s.stopPropagation(), A(n.onClick, s);
  }, i = O(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return f(Lt, {
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
}, js = (e) => {
  const t = Pe(), [n, o] = x(e, ["class"]);
  return K(() => {
    t.setDescriptionId(`${t.contentId()}-description`), z(() => t.setDescriptionId(void 0));
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
}, Vs = (e) => {
  const t = Pe(), [n, o] = x(e, ["class"]);
  return K(() => {
    t.setHeadingId(`${t.contentId()}-heading`), z(() => t.setHeadingId(void 0));
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
}, Ns = (e) => {
  const t = Pe(), [n, o] = x(e, ["class", "style", "children"]), r = O(() => ({
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
}, Fe = (e) => {
  e = ee("Modal", {
    id: `hope-modal-${tt()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = x(e, [...Q, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: n,
    styleOverrides: o
  } = bs("Modal", t), {
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    overlayTransition: a,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  } = Zn(e), m = ot(() => e.isOpen, () => F({
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
    overlayTransition: a,
    contentId: () => e.id,
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  };
  return f(P, {
    get when() {
      return Le(() => !!a.keepMounted())() && m.keepMounted();
    },
    get children() {
      return f(nt, {
        get children() {
          return f(ao.Provider, {
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
Fe.Overlay = Ns;
Fe.Content = Hs;
Fe.CloseButton = Ps;
Fe.Heading = Vs;
Fe.Description = js;
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
const qs = typeof document < "u" ? document : void 0, Gs = "body > :not(script, style)", yt = '[aria-modal="true"], [data-ismodal="true"]';
function mn(e, t) {
  const n = Array.from(e.querySelectorAll(Gs)).filter((o) => !o.contains(t)).map((o) => {
    const r = o.getAttribute("aria-hidden") || "";
    return o.setAttribute("aria-hidden", "true"), { element: o, previousAriaHidden: r };
  });
  return () => {
    n.forEach(({ element: o, previousAriaHidden: r }) => {
      r ? o.setAttribute("aria-hidden", r) : o.removeAttribute("aria-hidden");
    });
  };
}
function Ys(e = "body", { document: t = qs } = {}) {
  const n = t?.querySelector(e);
  if (t == null || n == null)
    return Is;
  const o = { childList: !0 };
  let r = [], i;
  const s = new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList") {
        if (a.addedNodes.length > 0) {
          const d = Array.from(a.addedNodes).find(
            (u) => u.querySelector?.(yt)
          );
          if (d) {
            r.push(d);
            const u = d.querySelector(yt);
            i?.(), i = mn(t, u);
          }
        } else if (a.removedNodes.length > 0) {
          const d = Array.from(a.removedNodes), u = r.findIndex(
            (g) => d.includes(g)
          );
          if (u >= 0)
            if (i?.(), r = r.filter((g, c) => c !== u), r.length > 0) {
              const g = r[r.length - 1].querySelector(yt);
              i = mn(t, g);
            } else
              i = void 0;
        }
      }
  });
  return s.observe(n, o), () => {
    i?.(), s.disconnect();
  };
}
function ll(e) {
  Ys(), e = F({
    withCssReset: !0
  }, e);
  const [t, n] = x(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return f(fs, {
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
      return f(Ai, n);
    }
  });
}
const Ks = X(({ vars: e }) => ({
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
      ...At(e)
    }
  }
})), cl = (e) => {
  e = ee("Anchor", {}, e);
  const [t, n, o] = x(e, ["class", "isExternal"], Q), {
    baseClasses: r,
    styleOverrides: i
  } = Ks("Anchor", n);
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
}, Xs = C("div", {
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
}, "hope-AspectRatio-root"), dl = (e) => {
  e = F({
    ratio: 4 / 3
  }, e);
  const [t, n] = x(e, ["ratio"]);
  return f(Xs, b({
    get _before() {
      return {
        pb: J(t.ratio, (o) => `${1 / o * 100}%`)
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
const ul = C("div"), ct = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function Us(e) {
  const t = [];
  for (const n of ct) {
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
function Zs(e) {
  const t = [];
  for (const n of ct) {
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
function Js(e) {
  const t = [];
  for (const n of ct) {
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
function Qs(e) {
  const t = [];
  for (const n of ct) {
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
const Me = /* @__PURE__ */ new Map([
  ["xs", "7"],
  ["sm", "8"],
  ["md", "10"],
  ["lg", "12"]
]);
function ea() {
  const e = [];
  for (const [t, n] of Me)
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
const ta = X(
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
        ...At(e)
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
            height: Me.get("xs"),
            px: 3,
            fontSize: "xs"
          },
          sm: {
            height: Me.get("sm"),
            px: 4,
            fontSize: "sm"
          },
          md: {
            height: Me.get("md"),
            px: 5,
            fontSize: "base"
          },
          lg: {
            height: Me.get("lg"),
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
        ...Us(e),
        ...Zs(e),
        ...Js(e),
        ...Qs(e),
        ...ea()
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
        animation: `1s linear infinite ${rs}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), co = ie();
function Wt() {
  const e = se(co);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const na = C("div", {
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
}, "hope-ButtonGroup-root"), uo = ie();
function oa() {
  return se(uo);
}
const gl = (e) => {
  e = F({}, e);
  const [t, n, o] = x(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return f(uo.Provider, {
    value: n,
    get children() {
      return f(na, b({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, o));
    }
  });
}, hn = (e) => {
  const t = Wt(), [n, o] = x(e, ["class", "__css"]);
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
}, pn = (e) => {
  const t = Wt(), [n, o] = x(e, ["class", "children", "hasLoadingText"]);
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
      return f(P, {
        get when() {
          return n.children;
        },
        get fallback() {
          return f(Ds, {
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
const ra = ["button", "color", "file", "image", "reset", "submit"];
function bn(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? ra.indexOf(e.type) !== -1 : !1;
}
const ia = /* @__PURE__ */ he("<span></span>", 2), sa = (e) => {
  let t;
  const n = oa(), o = F({
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
  e = ee("Button", {
    loaderPlacement: "start"
  }, o);
  const [r, i, s, l] = x(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...Q, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), a = cr(() => t, () => e.as || "button"), [d, u] = I(a() != null && bn({
    tagName: a(),
    type: r.type
  })), g = O(() => r.type != null ? r.type : d() ? "button" : void 0), {
    baseClasses: c,
    styleOverrides: m
  } = ta("Button", s);
  return me(() => {
    t != null && u(bn(t));
  }), f(co.Provider, {
    value: {
      baseClasses: c,
      styleOverrides: m
    },
    get children() {
      return f(C.button, b({
        get as() {
          return r.as;
        },
        ref(h) {
          const S = _e((k) => t = k, r.ref);
          typeof S == "function" && S(h);
        },
        get role() {
          return !d() && a() !== "a" ? "button" : void 0;
        },
        get type() {
          return g();
        },
        get tabIndex() {
          return d() ? void 0 : 0;
        },
        get disabled() {
          return r.isDisabled;
        },
        get ["data-loading"]() {
          return r.isLoading || void 0;
        },
        get class() {
          return w(c().root, r.class);
        },
        get __css() {
          return m().root;
        }
      }, l, {
        get children() {
          return [f(P, {
            get when() {
              return r.isLoading && r.loaderPlacement === "start";
            },
            get children() {
              return f(pn, {
                get hasLoadingText() {
                  return !!r.loadingText;
                },
                get children() {
                  return r.loader;
                }
              });
            }
          }), f(P, {
            get when() {
              return r.isLoading;
            },
            get fallback() {
              return f(yn, i);
            },
            get children() {
              return f(P, {
                get when() {
                  return r.loadingText;
                },
                get fallback() {
                  return (() => {
                    const h = ia.cloneNode(!0);
                    return h.style.setProperty("opacity", "0"), Mo(h, f(yn, i)), h;
                  })();
                },
                get children() {
                  return r.loadingText;
                }
              });
            }
          }), f(P, {
            get when() {
              return r.isLoading && r.loaderPlacement === "end";
            },
            get children() {
              return f(pn, {
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
function yn(e) {
  const t = Wt();
  return [f(P, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return f(hn, {
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
  }), Le(() => e.children), f(P, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return f(hn, {
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
const fl = (e) => f(sa, b({
  isIconButton: !0
}, e));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const ml = C("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), aa = C("div", ({
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
}), "hope-Container-root"), hl = (e) => {
  e = F({
    isCentered: !0
  }, e);
  const [t, n] = x(e, ["isCentered"]);
  return f(aa, b({
    get mx() {
      return J(t.isCentered, (o) => o ? "auto" : void 0);
    }
  }, n));
}, la = X(
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
), pl = (e) => {
  e = ee("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, n, o] = x(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), r = To(() => e.children), i = () => !!r(), s = () => n.orientation === "vertical", l = O(() => {
    const u = s() ? "borderLeftStyle" : "borderTopStyle", g = s() ? "borderLeftWidth" : "borderTopWidth";
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
    baseClasses: a,
    styleOverrides: d
  } = la("Divider", {
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
      return s() ? "vertical" : "horizontal";
    },
    get class() {
      return w(a().root, t.class);
    },
    get __css() {
      return {
        ...d().root,
        ...l()
      };
    }
  }, o, {
    get children() {
      return f(P, {
        get when() {
          return i();
        },
        get children() {
          return f(C.span, b({
            get class() {
              return a().label;
            },
            get __css() {
              return d().label;
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
}, ca = X((e) => ({
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
})), go = ie();
function He() {
  const e = se(go);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const da = (e) => {
  const t = He();
  e = F({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [n, o] = x(e, ["class", "onClick"]);
  return f(Dt, b({
    get class() {
      return w("hope-Drawer-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), A(n.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, ua = (e) => {
  const t = He(), [n, o] = x(e, ["class", "style", "onClick"]), r = (s) => {
    s.stopPropagation(), A(n.onClick, s);
  }, i = O(() => ({
    ...n.style,
    ...t.contentTransition.style()
  }));
  return f(Lt, {
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
}, ga = (e) => {
  const t = He(), [n, o] = x(e, ["class"]);
  return K(() => {
    t.setDescriptionId(`${t.contentId()}-description`), z(() => t.setDescriptionId(void 0));
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
}, fa = (e) => {
  const t = He(), [n, o] = x(e, ["class"]);
  return K(() => {
    t.setHeadingId(`${t.contentId()}-heading`), z(() => t.setHeadingId(void 0));
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
}, ma = (e) => {
  const t = He(), [n, o] = x(e, ["class", "style", "children"]), r = O(() => ({
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
}, ha = {
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
}, je = (e) => {
  e = ee("Drawer", {
    id: `hope-drawer-${tt()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = x(e, [...Q, "size", "placement"]), {
    baseClasses: n,
    styleOverrides: o
  } = ca("Drawer", t), {
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    overlayTransition: a,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  } = Zn(e), m = ot(() => e.isOpen, () => F({
    transition: ha[e.placement],
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
    overlayTransition: a,
    contentId: () => e.id,
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  };
  return f(P, {
    get when() {
      return Le(() => !!a.keepMounted())() && m.keepMounted();
    },
    get children() {
      return f(nt, {
        get children() {
          return f(go.Provider, {
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
je.Overlay = ma;
je.Content = ua;
je.CloseButton = da;
je.Heading = fa;
je.Description = ga;
const bl = (e) => {
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
}, xn = {
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
}, pa = X(
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
        ...xn,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...xn,
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
), fo = ie();
function Pt() {
  return se(fo);
}
function Ft() {
  const e = Pt();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const ba = (e) => {
  const t = Ft(), [n, o] = x(e, ["id", "class", "__css"]), r = () => n.id ?? t.descriptionId();
  return me(() => t.setHasDescription(!0)), z(() => t.setHasDescription(!1)), f(C.div, b({
    get id() {
      return r();
    },
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
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
}, ya = (e) => {
  const t = Ft(), [n, o] = x(e, ["id", "class", "__css"]), r = () => n.id ?? t.errorId();
  return me(() => t.setHasError(!0)), z(() => t.setHasError(!1)), f(C.div, b({
    "aria-live": "polite",
    get id() {
      return r();
    },
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
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
}, xa = (e) => {
  const t = Ft(), [n, o] = x(e, ["id", "for", "class", "__css"]), r = () => n.id ?? t.labelId(), i = () => n.for ?? t.id();
  return f(C.label, b({
    get id() {
      return r();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
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
}, Ht = (e) => {
  e = ee("FormControl", {
    id: `hope-form-control-${tt()}`
  }, e);
  const [t, n, o] = x(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...Q, "withRequiredIndicator"]), [r, i] = I(!1), [s, l] = I(!1), {
    baseClasses: a,
    styleOverrides: d
  } = pa("FormControl", n), u = () => `${e.id}-description`, g = () => `${e.id}-error`, c = () => e.isInvalid, h = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: u,
    errorId: g,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: c,
    unstyled: () => n.unstyled,
    baseClasses: a,
    styleOverrides: d,
    hasDescription: r,
    setHasDescription: i,
    hasError: s,
    setHasError: l,
    mergeAriaDescribedBy: (S) => {
      const k = S ? [S] : [];
      return s() && c() && k.push(g()), r() && k.push(u()), k.join(" ") || void 0;
    }
  };
  return f(fo.Provider, {
    value: h,
    get children() {
      return f(C.div, b({
        role: "group",
        get ["data-required"]() {
          return $(h.isRequired());
        },
        get ["data-disabled"]() {
          return $(h.isDisabled());
        },
        get ["data-readonly"]() {
          return $(h.isReadOnly());
        },
        get ["data-invalid"]() {
          return $(h.isInvalid());
        },
        get class() {
          return w(a().root, t.class);
        },
        get __css() {
          return d().root;
        }
      }, o));
    }
  });
};
Ht.Label = xa;
Ht.Description = ba;
Ht.Error = ya;
const Ca = (e) => {
  const [t, n] = x(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return f(C.div, b({
    get class() {
      return w("hope-GridItem-root", t.class);
    },
    get __css() {
      return to({
        gridArea: t.area,
        gridColumn: Cn(t.colSpan),
        gridRow: Cn(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, n));
};
function Cn(e) {
  return J(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const mo = (e) => {
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
mo.Item = Ca;
const yl = (e) => {
  const [t, n] = x(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), o = pe(), r = () => t.minChildWidth ? Sa(t.minChildWidth, o.vars) : va(t.columns);
  return f(mo, b({
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
function Sa(e, t) {
  return J(e, (n) => {
    const o = Ln(n, "sizes", t);
    return Qn(n) ? null : `repeat(auto-fit, minmax(${o}, 1fr))`;
  });
}
function va(e) {
  return J(e, (t) => Qn(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const wa = X({
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
}), xl = (e) => {
  e = ee("Heading", {}, e);
  const [t, n, o] = x(e, ["as", "class", "level", "lineClamp"], [...Q, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = wa("Heading", n), s = () => t.level ? `h${t.level}` : t.as, l = O(() => ({
    ...i().root,
    ...Xn(t.lineClamp)
  }));
  return f(C.h2, b({
    get as() {
      return s();
    },
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return l();
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
function ka(e) {
  const [t, n] = I("pending"), o = () => e.ignoreFallback ? "loaded" : t();
  let r = null;
  const i = () => {
    r && (r.onload = null, r.onerror = null, r = null);
  }, s = () => {
    if (!e.src)
      return;
    i();
    const l = new Image();
    l.src = e.src, e.crossOrigin && (l.crossOrigin = e.crossOrigin), e.srcSet && (l.srcset = e.srcSet), e.sizes && (l.sizes = e.sizes), e.loading && (l.loading = e.loading), l.onload = (a) => {
      i(), n("loaded"), A(e.onLoad, a);
    }, l.onerror = (a) => {
      i(), n("failed"), A(e.onError, a);
    }, r = l;
  };
  return K(() => {
    n(e.src ? "loading" : "pending");
  }), wn(() => {
    e.ignoreFallback || (t() === "loading" && s(), z(() => {
      i();
    }));
  }), o;
}
const Cl = (e) => {
  const [t, n, o] = x(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), r = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = ka(et(e, {
    get ignoreFallback() {
      return r();
    }
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...r() ? n : {},
    ...o
  });
  return f(P, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return f(P, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return f(C.img, b({
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
      }, s));
    }
  });
}, Sl = (e) => {
  const [t, n] = x(e, ["class"]);
  return f(C.img, b({
    get class() {
      return w("hope-Image-root", t.class);
    }
  }, n));
}, ho = {
  variant: "outlined",
  size: "md"
}, Z = {
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
}, _a = X(
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
            ...Z.sm,
            px: 2.5
          },
          md: {
            ...Z.md,
            px: 3
          },
          lg: {
            ...Z.lg,
            px: 4
          }
        }
      }
    }
  }),
  ho
), po = ie();
function bo() {
  return se(po);
}
function yo() {
  const e = bo();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const vl = (e) => {
  const t = Pt(), n = bo();
  e = ee("Input", {}, e);
  const [o, r, i] = x(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...Q, "variant", "size"]), {
    baseClasses: s,
    styleOverrides: l
  } = _a("Input", {
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
  }), a = () => o.isRequired ?? n?.isRequired() ?? t?.isRequired(), d = () => o.isDisabled ?? n?.isDisabled() ?? t?.isDisabled(), u = () => o.isReadOnly ?? n?.isReadOnly() ?? t?.isReadOnly(), g = () => o.isInvalid ?? n?.isInvalid() ?? t?.isInvalid(), c = () => t?.mergeAriaDescribedBy(o["aria-describedby"]);
  return f(C.input, b({
    type: "text",
    get id() {
      return o.id ?? t?.id();
    },
    get required() {
      return a();
    },
    get disabled() {
      return d();
    },
    get readOnly() {
      return u();
    },
    get ["aria-invalid"]() {
      return vs(g());
    },
    get ["aria-describedby"]() {
      return c();
    },
    get size() {
      return o.htmlSize;
    },
    get class() {
      return w(n?.baseClasses().input, s().root, o.class);
    },
    get __css() {
      return {
        ...n?.styleOverrides().input,
        ...l().root,
        ...o.__css
      };
    }
  }, i));
};
function xt(e) {
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
const Ia = X(
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
        ...xt({
          size: "sm",
          paddingWithSection: 8
        }),
        ...xt({
          size: "md",
          paddingWithSection: 10
        }),
        ...xt({
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
            ...Z.sm,
            height: "100%",
            width: Z.sm.minHeight
          },
          md: {
            ...Z.md,
            height: "100%",
            width: Z.md.minHeight
          },
          lg: {
            ...Z.lg,
            height: "100%",
            width: Z.lg.minHeight
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
            ...Z.sm,
            px: 2.5
          },
          md: {
            ...Z.md,
            px: 3
          },
          lg: {
            ...Z.lg,
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
  ho
), xo = (e) => {
  const t = yo(), [n, o] = x(e, ["class", "__css", "addonPlacement"]), r = O(() => {
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
  return me(() => {
    switch (n.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), z(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), z(() => t.setHasRightAddon(!1));
        break;
    }
  }), f(C.div, b({
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
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
}, Ra = (e) => f(xo, b({
  addonPlacement: "left"
}, e)), $a = (e) => f(xo, b({
  addonPlacement: "right"
}, e)), Co = (e) => {
  const t = yo(), [n, o] = x(e, ["class", "__css", "sectionPlacement"]), r = O(() => {
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
  return me(() => {
    switch (n.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), z(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), z(() => t.setHasRightSection(!1));
        break;
    }
  }), f(C.div, b({
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
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
}, Oa = (e) => f(Co, b({
  sectionPlacement: "left"
}, e)), Ea = (e) => f(Co, b({
  sectionPlacement: "right"
}, e)), dt = (e) => {
  const t = Pt();
  e = ee("InputGroup", {}, e);
  const [n, o, r] = x(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...Q, "variant", "size"]), [i, s] = I(!1), [l, a] = I(!1), [d, u] = I(!1), [g, c] = I(!1), {
    baseClasses: m,
    styleOverrides: h
  } = Ia("InputGroup", {
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
      return l();
    },
    get hasLeftAddon() {
      return d();
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
    setHasLeftSection: s,
    setHasRightSection: a,
    setHasLeftAddon: u,
    setHasRightAddon: c
  };
  return f(po.Provider, {
    value: S,
    get children() {
      return f(C.div, b({
        get ["data-required"]() {
          return $(S.isRequired());
        },
        get ["data-disabled"]() {
          return $(S.isDisabled());
        },
        get ["data-readonly"]() {
          return $(S.isReadOnly());
        },
        get ["data-invalid"]() {
          return $(S.isInvalid());
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
dt.LeftAddon = Ra;
dt.RightAddon = $a;
dt.LeftSection = Oa;
dt.RightSection = Ea;
const za = X({
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
}), wl = (e) => {
  const [t, n, o] = x(e, ["class"], Q), {
    baseClasses: r,
    styleOverrides: i
  } = za("Kbd", n);
  return f(C.kbd, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, o));
}, Ta = X((e) => ({
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
})), So = ie();
function be() {
  const e = se(So);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const Ba = (e) => {
  const t = be(), [n, o] = x(e, ["ref"]);
  return f(C.div, b({
    ref(r) {
      const i = _e(t.setAnchorRef, n.ref);
      typeof i == "function" && i(r);
    }
  }, o));
}, Aa = (e) => {
  const t = be();
  e = F({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [n, o] = x(e, ["class", "onClick"]);
  return f(Dt, b({
    get class() {
      return w("hope-Popover-closeButton", n.class);
    },
    onClick: (i) => {
      i.stopPropagation(), A(n.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, Ma = /* @__PURE__ */ he('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>', 8), vo = 30, ce = vo / 2, Da = {
  top: `rotate(180 ${ce} ${ce})`,
  right: `rotate(-90 ${ce} ${ce})`,
  bottom: `rotate(0 ${ce} ${ce})`,
  left: `rotate(90 ${ce} ${ce})`
}, La = (e) => {
  const t = be(), [n, o] = x(e, ["ref", "class", "style", "children"]), r = () => t.currentPlacement().split("-")[0], i = Wa(t.contentRef), s = () => i()?.getPropertyValue("background-color") || "none", l = () => i()?.getPropertyValue(`border-${r()}-color`) || "none", a = () => i()?.getPropertyValue(`border-${r()}-width`) || "0px", d = () => parseInt(a()) * 2 * (vo / t.arrowSize());
  return f(C.div, b({
    ref(u) {
      const g = _e(t.setArrowRef, n.ref);
      typeof g == "function" && g(u);
    },
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: s(),
        stroke: l(),
        "stroke-width": d(),
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
      const u = Ma.cloneNode(!0), g = u.firstChild;
      return g.firstChild.nextSibling, $t(() => kn(g, "transform", Da[r()])), u;
    }
  }));
};
function Wa(e) {
  const [t, n] = I();
  return wn(() => {
    const o = e();
    o && n(xs(o).getComputedStyle(o));
  }), t;
}
const Pa = (e) => {
  const t = be(), [n, o] = x(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), r = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (g) => {
    g.stopPropagation(), A(n.onKeyDown, g), A(t.onContentKeyDown, g);
  }, l = (g) => {
    A(n.onFocusOut, g), A(t.onContentFocusOut, g);
  }, a = (g) => {
    A(n.onMouseEnter, g), i() && t.onContentMouseEnter();
  }, d = (g) => {
    A(n.onMouseLeave, g), i() && A(t.onContentMouseLeave, g);
  }, u = O(() => ({
    ...n.style,
    ...t.popoverTransition.style()
  }));
  return f(P, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return f(nt, {
        get children() {
          return f(Lt, b({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return r();
            },
            ref(g) {
              const c = _e(t.setContentRef, n.ref);
              typeof c == "function" && c(g);
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
            onKeyDown: s,
            onFocusOut: l,
            onMouseEnter: a,
            onMouseLeave: d
          }, o, {
            get children() {
              return [f(P, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return f(La, {});
                }
              }), Le(() => n.children)];
            }
          }));
        }
      });
    }
  });
}, Fa = (e) => {
  const t = be(), [n, o] = x(e, ["class"]);
  return K(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), z(() => t.setDescriptionId(void 0));
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
}, Ha = (e) => {
  const t = be(), [n, o] = x(e, ["class"]);
  return K(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), z(() => t.setHeadingId(void 0));
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
}, ja = (e) => {
  const t = be(), [n, o] = x(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), r = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (c) => {
    A(n.onClick, c), r() && (c.stopPropagation(), t.onTriggerClick());
  }, l = (c) => {
    A(n.onKeyDown, c), i() && (c.stopPropagation(), A(t.onTriggerKeyDown, c));
  }, a = (c) => {
    A(n.onFocus, c), i() && t.onTriggerFocus();
  }, d = (c) => {
    A(n.onBlur, c), i() && A(t.onTriggerBlur, c);
  }, u = (c) => {
    A(n.onMouseEnter, c), i() && t.onTriggerMouseEnter();
  }, g = (c) => {
    A(n.onMouseLeave, c), i() && t.onTriggerMouseLeave();
  };
  return f(C.button, b({
    ref(c) {
      const m = _e(t.setTriggerRef, n.ref);
      typeof m == "function" && m(c);
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
    onKeyDown: l,
    onFocus: a,
    onBlur: d,
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
function Sn(e) {
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
function Va(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const o = t(e);
      return o ? Sn(o) : e ? e.getBoundingClientRect() : Sn();
    }
  };
}
const Ie = (e) => {
  e = ee("Popover", {
    getAnchorRect: (T) => T?.getBoundingClientRect(),
    id: `hope-popover-${tt()}`,
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
  const [t] = x(e, [...Q]), {
    baseClasses: n,
    styleOverrides: o
  } = Ta("Popover", t), [r, i] = I(), [s, l] = I(), [a, d] = I(), [u, g] = I(), [c, m] = I(!1), [h, S] = I(e.placement), [k, y] = I(), [v, V] = I(), _ = Zo({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (T) => e.onOpenChange?.(T)
  }), U = ot(() => _.isOpen(), () => F({
    transition: "pop",
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.transitionOptions ?? {})), M = () => {
    const T = Va(r() ?? s(), e.getAnchorRect), G = u(), Y = a();
    return {
      anchorEl: T,
      arrowEl: G,
      floatingEl: Y
    };
  };
  async function E() {
    const {
      anchorEl: T,
      arrowEl: G,
      floatingEl: Y
    } = M();
    if (!T || !Y)
      return;
    T.getBoundingClientRect();
    const Oe = [Lo(e.offset), Wo({
      padding: e.overflowPadding
    }), Po({
      padding: e.overflowPadding
    }), Fo({
      padding: e.overflowPadding,
      apply({
        rects: Ne
      }) {
        const qe = Math.round(Ne.reference.width);
        e.hasSameWidth && (Y.style.width = `${qe}px`);
      }
    })];
    G && Oe.push(Ho({
      element: G,
      padding: e.arrowPadding
    })), Oe.push(jo());
    const te = await Vo(T, Y, {
      placement: e.placement,
      middleware: Oe
    });
    if (te.placement !== h() && S(te.placement), !!Y && (Object.assign(Y.style, {
      left: `${Math.round(te.x)}px`,
      top: `${Math.round(te.y)}px`,
      visibility: te.middlewareData.hide?.referenceHidden ? "hidden" : "visible"
    }), G && te.middlewareData.arrow)) {
      const {
        x: Ne,
        y: qe
      } = te.middlewareData.arrow, Ro = te.placement.split("-")[0];
      Object.assign(G.style, {
        left: Ne != null ? `${Ne}px` : "",
        top: qe != null ? `${qe}px` : "",
        [Ro]: "100%"
      });
    }
  }
  let D, L;
  const W = () => {
    _.toggle();
  }, H = (T) => {
    T.key === "Escape" && _.close();
  }, ae = () => {
    D == null && _.open();
  }, ye = (T) => {
    const G = cn(T), Y = !Ze(a(), G);
    _.isOpen() && e.closeOnBlur && Y && _.close();
  }, xe = () => {
    m(!0), D = window.setTimeout(() => {
      _.open(), E();
    }, e.openDelay);
  }, Ve = () => {
    m(!1), D && (clearTimeout(D), D = void 0), L = window.setTimeout(() => {
      c() || _.close();
    }, e.closeDelay);
  }, ut = (T) => {
    e.closeOnEsc && T.key === "Escape" && _.close();
  }, Re = (T) => {
    const G = cn(T), Y = Ze(a(), G), Oe = Ze(s(), G), te = !Y && !Oe;
    _.isOpen() && e.closeOnBlur && te && _.close();
  }, $e = () => {
    m(!0);
  }, ko = (T) => {
    T.relatedTarget !== null && (m(!1), L = window.setTimeout(_.close, e.closeDelay));
  }, _o = () => {
    _.close();
  };
  K(() => {
    const {
      anchorEl: T,
      floatingEl: G
    } = M();
    if (!T || !G)
      return;
    const Y = Do(T, G, E, {
      elementResize: typeof ResizeObserver == "function"
    });
    z(Y);
  }), z(() => {
    ue || (window.clearTimeout(D), window.clearTimeout(L));
  });
  const Io = {
    baseClasses: n,
    styleOverrides: o,
    isOpen: _.isOpen,
    popoverTransition: U,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: h,
    popoverId: () => e.id,
    headingId: k,
    setHeadingId: y,
    descriptionId: v,
    setDescriptionId: V,
    contentRef: a,
    setContentRef: d,
    setArrowRef: g,
    setAnchorRef: i,
    setTriggerRef: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: W,
    onTriggerKeyDown: H,
    onTriggerFocus: ae,
    onTriggerBlur: ye,
    onTriggerMouseEnter: xe,
    onTriggerMouseLeave: Ve,
    onContentKeyDown: ut,
    onContentFocusOut: Re,
    onContentMouseEnter: $e,
    onContentMouseLeave: ko,
    onCloseButtonClick: _o
  };
  return f(So.Provider, {
    value: Io,
    get children() {
      return Rs(e.children, _);
    }
  });
};
Ie.Trigger = ja;
Ie.Anchor = Ba;
Ie.Content = Pa;
Ie.CloseButton = Aa;
Ie.Heading = Ha;
Ie.Description = Fa;
function kl(e) {
  const [t, n] = x(e, ["children", "withinPortal"]);
  return f(P, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return f(nt, b(n, {
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
const _l = C("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), wo = (e) => {
  e = F({
    align: "center"
  }, e);
  const [t, n] = x(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return f(C.div, b({
    get class() {
      return w("hope-Stack-root", t.class);
    },
    get __css() {
      return to({
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
}, Il = (e) => {
  e = F({
    reverse: !1
  }, e);
  const [t, n] = x(e, ["reverse"]);
  return f(wo, b(n, {
    get direction() {
      return J(t.reverse, (o) => o ? "row-reverse" : "row");
    }
  }));
}, Rl = (e) => {
  e = F({
    reverse: !1
  }, e);
  const [t, n] = x(e, ["reverse"]);
  return f(wo, b(n, {
    get direction() {
      return J(t.reverse, (o) => o ? "column-reverse" : "column");
    }
  }));
}, Na = X({
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
}), $l = (e) => {
  e = ee("Text", {}, e);
  const [t, n, o] = x(e, ["class", "lineClamp"], [...Q, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = Na("Text", n), s = O(() => ({
    ...i().root,
    ...Xn(t.lineClamp)
  }));
  return f(C.p, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return s();
    }
  }, o));
};
export {
  cl as Anchor,
  dl as AspectRatio,
  ul as Box,
  sa as Button,
  gl as ButtonGroup,
  ge as COLOR_MODE_CLASSNAMES,
  lt as COLOR_MODE_STORAGE_KEY,
  ml as Center,
  Dt as CloseButton,
  qn as ColorModeContext,
  fs as ColorModeProvider,
  sl as ColorModeScript,
  hl as Container,
  Bt as DEFAULT_THEME,
  $i as DEFAULT_THEME_MAP,
  Ua as DEFAULT_TRANSITIONS_NAMES,
  pl as Divider,
  je as Drawer,
  da as DrawerCloseButton,
  ua as DrawerContent,
  ga as DrawerDescription,
  fa as DrawerHeading,
  ma as DrawerOverlay,
  bl as Flex,
  Lt as FocusTrapRegion,
  Ht as FormControl,
  fo as FormControlContext,
  ba as FormControlDescription,
  ya as FormControlError,
  xa as FormControlLabel,
  mo as Grid,
  Ca as GridItem,
  Il as HStack,
  xl as Heading,
  ll as HopeProvider,
  Bs as Icon,
  fl as IconButton,
  Cl as Image,
  Sl as Img,
  vl as Input,
  dt as InputGroup,
  Ra as InputGroupLeftAddon,
  Oa as InputGroupLeftSection,
  $a as InputGroupRightAddon,
  Ea as InputGroupRightSection,
  wl as Kbd,
  Fe as Modal,
  Ps as ModalCloseButton,
  Hs as ModalContent,
  js as ModalDescription,
  Vs as ModalHeading,
  Ns as ModalOverlay,
  kl as OptionalPortal,
  Ie as Popover,
  Ba as PopoverAnchor,
  La as PopoverArrow,
  Aa as PopoverCloseButton,
  Pa as PopoverContent,
  Fa as PopoverDescription,
  Ha as PopoverHeading,
  ja as PopoverTrigger,
  Q as STYLE_CONFIG_PROP_NAMES,
  yl as SimpleGrid,
  _l as Spacer,
  wo as Stack,
  $l as Text,
  Ai as ThemeProvider,
  Rl as VStack,
  Fs as VisuallyHidden,
  al as VisuallyHiddenInput,
  Zr as arrayToObjectNotation,
  jn as computeStyleOptions,
  rl as cookieStorageManager,
  il as cookieStorageManagerSSR,
  Ka as createControllableArraySignal,
  Uo as createControllableBooleanSignal,
  Rn as createControllableSignal,
  Gn as createCookieStorageManager,
  Zo as createDisclosure,
  Ja as createGlobalStyles,
  Qa as createHopeComponent,
  so as createIcon,
  ka as createImageLoadingStatus,
  Xa as createInteractOutside,
  ss as createLocalStorageManager,
  Se as createPalette,
  Qo as createPreventScroll,
  lr as createReducedMotion,
  X as createStyleConfig,
  el as createStyles,
  cr as createTagName,
  ot as createTransition,
  Za as extendTheme,
  nl as fadeIn,
  At as focusStyles,
  Vn as getSelectedVariantClassNames,
  C as hope,
  tl as injectCriticalStyle,
  Xr as isColorModeObjectLike,
  Jr as isResponsiveObjectLike,
  Bn as keyframes,
  Xn as lineClamp,
  as as localStorageManager,
  J as mapResponsive,
  F as mergeDefaultProps,
  ee as mergeThemeProps,
  Ur as objectToArrayNotation,
  fr as pack,
  Ln as resolveTokenValue,
  q as rgba,
  rs as spin,
  oa as useButtonGroupContext,
  is as useColorMode,
  ol as useColorModeValue,
  Bi as useComponentTheme,
  Pt as useFormControlContext,
  Ft as useRequiredFormControlContext,
  pe as useTheme,
  Ys as watchModals
};
