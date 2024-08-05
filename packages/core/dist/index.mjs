import { createSignal as S, createMemo as _, untrack as Yo, createEffect as H, onCleanup as O, on as eo, mergeProps as Ve, sharedConfig as Ko, onMount as ue, getOwner as Xo, DEV as Uo, createContext as Z, useContext as Q, splitProps as p, Show as $, createUniqueId as Ne, children as Go, createRenderEffect as to } from "solid-js";
import { isServer as ne, createComponent as a, useAssets as Zo, ssr as ge, ssrHydrationKey as me, Dynamic as Qo, mergeProps as f, ssrAttribute as Ee, escape as we, Portal as qe } from "solid-js/web";
import { isArray as Jo, isObject as $e, objectKeys as er, getLastItem as tr, delve as or, once as Ye, runIfFn as X, filterUndefined as ke, isEmptyObject as oo, isNumber as ro, flatten as tt, unflatten as rr, pick as nr, pack as ir, isString as sr, callHandler as z, getActiveElement as ar, focusWithoutScrolling as lr, noop as cr, dataAttr as k, isNull as no, ariaAttr as dr, getWindow as ur, getRelatedTarget as Rt, contains as ot } from "@hope-ui/utils";
import { pack as ya } from "@hope-ui/utils";
import { createStitches as gr } from "@stitches/core";
import { clsx as v } from "clsx";
import { autoUpdate as mr, offset as hr, flip as fr, shift as pr, size as br, arrow as yr, hide as vr, computePosition as Cr } from "@floating-ui/dom";
function io(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function xr(e) {
  const t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function so(e) {
  for (; e && !xr(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function dt(e) {
  return (...t) => {
    for (const o of e)
      typeof o == "function" && o(...t);
  };
}
var E = (e) => typeof e == "function" && !e.length ? e() : e;
function wr(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function ft(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) == null ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Sr() {
  return ft(/^Mac/i);
}
function kr() {
  return ft(/^iPhone/i);
}
function _r() {
  return ft(/^iPad/i) || Sr() && navigator.maxTouchPoints > 1;
}
function Ir() {
  return kr() || _r();
}
function Ot(e) {
  return io(e) ? e : void 0;
}
function ao(e) {
  var t;
  const [o, r] = S((t = e.defaultValue) == null ? void 0 : t.call(e)), n = _(() => {
    var s;
    return ((s = e.value) == null ? void 0 : s.call(e)) !== void 0;
  }), i = _(() => {
    var s;
    return n() ? (s = e.value) == null ? void 0 : s.call(e) : o();
  });
  return [i, (s) => {
    Yo(() => {
      var l;
      const c = wr(s, i());
      return Object.is(c, i()) || (n() || r(c), (l = e.onChange) == null || l.call(e, c)), c;
    });
  }];
}
function Rr(e) {
  const [t, o] = ao(e);
  return [() => {
    var r;
    return (r = t()) != null ? r : !1;
  }, o];
}
function Fs(e) {
  const [t, o] = ao(e);
  return [() => {
    var r;
    return (r = t()) != null ? r : [];
  }, o];
}
function Or(e = {}) {
  const [t, o] = Rr({
    value: () => E(e.isOpen),
    defaultValue: () => !!E(e.defaultIsOpen),
    onChange: (i) => {
      var s;
      return (s = e.onOpenChange) == null ? void 0 : s.call(e, i);
    }
  }), r = () => {
    o(!0);
  }, n = () => {
    o(!1);
  };
  return {
    isOpen: t,
    open: r,
    close: n,
    toggle: () => {
      t() ? n() : r();
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
function Ls(e, t) {
  const [o, r] = S(!1);
  H(() => {
    if (E(e.isDisabled))
      return;
    const n = (s) => {
      var l;
      Et(s, t()) && ((l = e.onInteractOutsideStart) == null || l.call(e, s), r(!0));
    }, i = (s) => {
      var l;
      o() && Et(s, t()) && (r(!1), (l = e.onInteractOutside) == null || l.call(e, s));
    };
    document.addEventListener("pointerdown", n, !0), document.addEventListener("pointerup", i, !0), O(() => {
      document.removeEventListener("pointerdown", n, !0), document.removeEventListener("pointerup", i, !0);
    });
  });
}
function Et(e, t) {
  if (e.button > 0)
    return !1;
  if (e.target) {
    const o = e.target.ownerDocument;
    if (!o || !o.documentElement.contains(e.target))
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
const rt = typeof window < "u" && window.visualViewport, Er = /* @__PURE__ */ new Set([
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
function zr(e) {
  H(
    eo(
      () => E(e.isEnabled),
      (t) => {
        !t || (Ir() ? O($r()) : O(Tr()));
      }
    )
  );
}
function Tr() {
  return dt([
    Te(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    Te(document.documentElement, "overflow", "hidden")
  ]);
}
function $r() {
  let e, t = 0;
  const o = (u) => {
    e = so(u.target), !(e === document.documentElement && e === document.body) && (t = u.changedTouches[0].pageY);
  }, r = (u) => {
    if (e === document.documentElement || e === document.body) {
      u.preventDefault();
      return;
    }
    const g = u.changedTouches[0].pageY, m = e.scrollTop, y = e.scrollHeight - e.clientHeight;
    (m <= 0 && g > t || m >= y && g < t) && u.preventDefault(), t = g;
  }, n = (u) => {
    const g = u.target;
    Tt(g) && g !== document.activeElement && (u.preventDefault(), g.style.transform = "translateY(-2000px)", g.focus(), requestAnimationFrame(() => {
      g.style.transform = "";
    }));
  }, i = (u) => {
    const g = u.target;
    Tt(g) && (g.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      g.style.transform = "", rt && (rt.height < window.innerHeight ? requestAnimationFrame(() => {
        zt(g);
      }) : rt.addEventListener("resize", () => zt(g), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, l = window.pageXOffset, c = window.pageYOffset, h = dt([
    Te(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    Te(document.documentElement, "overflow", "hidden"),
    Te(document.body, "marginTop", `-${c}px`)
  ]);
  window.scrollTo(0, 0);
  const d = dt([
    Ie(document, "touchstart", o, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "touchmove", r, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "touchend", n, {
      passive: !1,
      capture: !0
    }),
    Ie(document, "focus", i, !0),
    Ie(window, "scroll", s)
  ]);
  return () => {
    h(), d(), window.scrollTo(l, c);
  };
}
function Te(e, t, o) {
  const r = e.style[t];
  return e.style[t] = o, () => {
    e.style[t] = r;
  };
}
function Ie(e, t, o, r) {
  return e.addEventListener(t, o, r), () => {
    e.removeEventListener(t, o, r);
  };
}
function zt(e) {
  const t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    const o = so(e);
    if (o !== document.documentElement && o !== document.body && o !== e) {
      const r = o.getBoundingClientRect().top, n = e.getBoundingClientRect().top;
      n > r + e.clientHeight && (o.scrollTop += n - r);
    }
    e = o.parentElement;
  }
}
function Tt(e) {
  return e instanceof HTMLInputElement && !Er.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var Ar = !ne, Dr = Ar && !!Uo, Fr = Dr ? (e) => Xo() ? O(e) : e : O;
function Lr(e, t, o) {
  if (ne)
    return S(e, o);
  if (Ko.context) {
    const [r, n] = S(e, o);
    return ue(() => n(() => t())), [r, n];
  }
  return S(t(), o);
}
function Mr(e, t, o, r) {
  return e.addEventListener(t, o, r), Fr(e.removeEventListener.bind(e, t, o, r));
}
function lo(e, t = !1) {
  if (ne)
    return () => t;
  const o = window.matchMedia(e), [r, n] = Lr(t, () => o.matches);
  return Mr(o, "change", () => n(o.matches)), r;
}
function Br(e) {
  return lo("(prefers-color-scheme: dark)", e);
}
Br.bind(void 0, !1);
function Hr(e, t) {
  return lo("(prefers-reduced-motion: reduce)", e);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function Pr(e, t) {
  const [o, r] = S(Ot(t == null ? void 0 : t()));
  return H(() => {
    var n;
    r(((n = e()) == null ? void 0 : n.tagName.toLowerCase()) || Ot(t == null ? void 0 : t()));
  }), o;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const Re = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, ut = {
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
    ...Re,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...Re,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...Re,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...Re,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...Re,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, Ms = Object.keys(ut);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const $t = {
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
  if (io(e.transition)) {
    if (!(e.transition in ut))
      return {};
    const o = ut[e.transition];
    return {
      "transition-property": At(o),
      ...t,
      ...o.common,
      ...o[$t[e.phase]]
    };
  }
  return {
    "transition-property": At(e.transition),
    ...t,
    ...e.transition.common,
    ...e.transition[$t[e.phase]]
  };
}
function At(e) {
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
const Dt = 250, Ft = 10, Lt = "ease";
function Ke(e, t) {
  t = Ve(
    {
      transition: "fade",
      duration: Dt,
      delay: Ft,
      easing: Lt,
      get exitDuration() {
        return E(t).duration || Dt;
      },
      get exitDelay() {
        return E(t).delay || Ft;
      },
      get exitEasing() {
        return E(t).easing || Lt;
      }
    },
    t
  );
  const o = Hr(), [r, n] = S(o() ? 0 : E(t).duration), [i, s] = S(
    E(e) ? "afterEnter" : "afterExit"
  ), [l, c] = S(E(t).easing);
  let h = -1;
  const d = (m) => {
    const y = m ? E(t).onBeforeEnter : E(t).onBeforeExit, C = m ? E(t).onAfterEnter : E(t).onAfterExit;
    s(m ? "beforeEnter" : "beforeExit"), window.clearTimeout(h);
    const w = n(
      o() ? 0 : m ? E(t).duration : E(t).exitDuration
    );
    if (c(m ? E(t).easing : E(t).exitEasing), w === 0) {
      y == null || y(), C == null || C(), s(m ? "afterEnter" : "afterExit");
      return;
    }
    const T = o() ? 0 : m ? E(t).delay : E(t).exitDelay, M = window.setTimeout(() => {
      y == null || y(), s(m ? "enter" : "exit");
    }, T);
    h = window.setTimeout(() => {
      window.clearTimeout(M), C == null || C(), s(m ? "afterEnter" : "afterExit");
    }, T + w);
  }, u = _(
    () => Wr({
      transition: E(t).transition,
      duration: r(),
      phase: i(),
      easing: l()
    })
  ), g = _(() => i() !== "afterExit");
  return H(
    eo(
      () => E(e),
      (m) => d(m),
      { defer: !0 }
    )
  ), O(() => {
    ne || window.clearTimeout(h);
  }), { keepMounted: g, style: u };
}
function gt(e, t, o) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (o = 0; o < t.length; o++)
        e[o] = gt(e[o], t[o]);
    else
      for (o in t) {
        if (o === "__proto__" || o === "constructor" || o === "prototype")
          break;
        e[o] = gt(e[o], t[o]);
      }
    return e;
  }
  return t;
}
function mt(e, t, o) {
  t.split && (t = t.split("."));
  for (var r = 0, n = t.length, i = e, s, l; r < n && (l = t[r++], !(l === "__proto__" || l === "constructor" || l === "prototype")); )
    i = i[l] = r === n ? gt(i[l], o) : typeof (s = i[l]) == typeof t ? s : t[r] * 0 !== 0 || !!~("" + t[r]).indexOf(".") ? {} : [];
}
const jr = gr({ prefix: "hope" }), { css: co, globalCss: pt, getCssText: Vr, keyframes: uo } = jr, de = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Nr(e) {
  const t = Object.keys(e);
  return t.length > 0 && t.every((o) => ["light", "dark"].includes(o));
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */
function V(e, t) {
  return Jo(e) ? e.map((o) => o === null ? null : t(o)) : $e(e) ? er(e).reduce((o, r) => (o[r] = t(e[r]), o), {}) : e != null ? t(e) : null;
}
function qr(e, t) {
  const o = t.map((r) => {
    var n;
    return (n = e[r]) != null ? n : null;
  });
  for (; tr(o) === null; )
    o.pop();
  return o;
}
function Yr(e, t) {
  const o = {};
  return e.forEach((r, n) => {
    const i = t[n];
    r != null && (o[i] = r);
  }), o;
}
function Kr(e, t) {
  const o = Object.keys(e);
  return o.length > 0 && o.every((r) => t.includes(r));
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
const F = {
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
function oe(e) {
  return go((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function G(e) {
  return go((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function go(e, ...t) {
  return t.map(e).join(", ");
}
const Xr = "_light", Pe = "_dark", Ur = `.${de.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, Gr = `.${de.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, Zr = /* @__PURE__ */ new Map([
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
  ["_groupHover", oe(F.hover)],
  ["_peerHover", G(F.hover)],
  ["_groupFocus", oe(F.focus)],
  ["_peerFocus", G(F.focus)],
  ["_groupFocusVisible", oe(F.focusVisible)],
  ["_peerFocusVisible", G(F.focusVisible)],
  ["_groupActive", oe(F.active)],
  ["_peerActive", G(F.active)],
  ["_groupDisabled", oe(F.disabled)],
  ["_peerDisabled", G(F.disabled)],
  ["_groupInvalid", oe(F.invalid)],
  ["_peerInvalid", G(F.invalid)],
  ["_groupChecked", oe(F.checked)],
  ["_peerChecked", G(F.checked)],
  ["_groupFocusWithin", oe(F.focusWithin)],
  ["_peerFocusWithin", G(F.focusWithin)],
  ["_peerPlaceholderShown", G(F.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [Xr, Ur],
  [Pe, Gr]
]), Qr = /* @__PURE__ */ new Map([
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
const Jr = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: o, toArrayValue: r, medias: n } = t.__breakpoints, i = {}, s = {};
  for (const l in e) {
    let c = X(e[l], t);
    if (c == null || nt(l, c, i))
      continue;
    if (c = $e(c) && o(c) ? r(c) : c, !Array.isArray(c)) {
      i[l] = c;
      continue;
    }
    const h = c.slice(0, n.length).length;
    for (let d = 0; d < h; d += 1) {
      const u = n == null ? void 0 : n[d], g = c[d];
      if (g != null) {
        if (!u) {
          nt(l, g, i) || (i[l] = g);
          continue;
        }
        s[u] = s[u] || {}, nt(l, g, s[u]) || (s[u][l] = g);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function nt(e, t, o) {
  if (!$e(t) || !Nr(t))
    return !1;
  const { light: r, dark: n } = t;
  return r != null && (o[e] = r), o[Pe] = o[Pe] || {}, n != null && (o[Pe][e] = n), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function en(e) {
  const t = parseFloat(e.toString()), o = e.toString().replace(String(t), "");
  return { unitless: !o, value: t, unit: o };
}
function We(e) {
  if (e == null)
    return e;
  const { unitless: t } = en(e);
  return t || ro(e) ? `${e}px` : e;
}
const mo = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, bt = (e) => Object.fromEntries(Object.entries(e).sort(mo));
function Mt(e) {
  const t = bt(e);
  return Object.assign(Object.values(t), t);
}
function tn(e) {
  const t = Object.keys(bt(e));
  return new Set(t);
}
function Bt(e) {
  var t;
  if (!e)
    return e;
  e = (t = We(e)) != null ? t : e;
  const o = e.endsWith("px") ? -1 : -0.0625;
  return ro(e) ? `${e + o}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + o}`);
}
function He(e, t) {
  const o = ["@media screen"];
  return e && o.push("and", `(min-width: ${We(e)})`), t && o.push("and", `(max-width: ${We(t)})`), o.join(" ");
}
function on(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const o = Mt(e), r = Object.entries(e).sort(mo).map(([s, l], c, h) => {
    var d;
    let [, u] = (d = h[c + 1]) != null ? d : [];
    return u = parseFloat(u) > 0 ? Bt(u) : void 0, {
      _minW: Bt(l),
      breakpoint: s,
      minW: l,
      maxW: u,
      maxWQuery: He(null, u),
      minWQuery: He(l),
      minMaxQuery: He(l, u)
    };
  }), n = tn(e), i = Array.from(n.values());
  return {
    keys: n,
    normalized: o,
    asObject: bt(e),
    asArray: Mt(e),
    details: r,
    medias: [null, ...o.map((s) => He(s)).slice(1)],
    isResponsive(s) {
      return Kr(s, i);
    },
    toArrayValue(s) {
      if (!$e(s))
        throw new Error("toArrayValue: value must be an object");
      return qr(s, i);
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return Yr(s, i);
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
const rn = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], ho = /!(important)?$/;
function nn(e) {
  return ho.test(e);
}
function sn(e) {
  return e.replace(ho, "").trim();
}
function fo(e, t, o) {
  var r;
  if (e == null)
    return;
  const n = String(e), i = sn(n);
  let s = (r = o[t][i]) != null ? r : or(o[t], i);
  return s == null && (s = rn.includes(t) ? i : We(i)), nn(n) ? `${s} !important` : s;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function Xe(e, t) {
  var o;
  const r = {}, n = Jr(e)(t);
  for (let i in n) {
    let s = X(n[i], t);
    if (s == null)
      continue;
    if (i.startsWith("_")) {
      const c = Zr.get(i);
      if (c == null)
        continue;
      i = c;
    }
    if ($e(s)) {
      r[i] = Object.assign(
        {},
        r[i],
        Xe(s, t)
      );
      continue;
    }
    const l = (o = Qr.get(i)) != null ? o : [i];
    for (const c of l) {
      const h = t.themeMap[c];
      h != null && (s = fo(s, h, t.vars)), r[c] = s;
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
function an(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function ln(e) {
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
  const o = parseInt(t, 16), r = o >> 16 & 255, n = o >> 8 & 255, i = o & 255;
  return {
    r,
    g: n,
    b: i,
    a: 1
  };
}
function cn(e) {
  const [t, o, r, n] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: o, b: r, a: n || 1 };
}
function dn(e) {
  return an(e) ? ln(e) : e.startsWith("rgb") ? cn(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function it(e) {
  const { r: t, g: o, b: r } = dn(e);
  return `${t} ${o} ${r}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function xe(e) {
  return {
    ...e,
    mainChannel: it(e[500]),
    lightChannel: it(e[100]),
    darkChannel: it(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const Ue = "hope";
function un(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function gn(e) {
  const t = un(e.toString());
  return hn(mn(t));
}
function mn(e) {
  return e.includes("\\.") || Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.");
}
function hn(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function fn(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function pn(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function bn(e, t = "") {
  return gn(`--${fn(e, t)}`);
}
function yn(e, t, o = Ue) {
  const r = bn(e, o);
  return {
    variable: r,
    reference: pn(r, t)
  };
}
function vn(e = Ue) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const Oe = "__";
function st(e, t, o) {
  return yn(String(t).replace(e, "-"), void 0, o);
}
function Cn(e, t) {
  const o = {}, r = {}, n = {}, { colors: i, ...s } = e, l = { colors: i.light }, c = { colors: i.dark }, h = tt(l, Oe), d = tt(c, Oe), u = tt(s, Oe), g = new RegExp(`(${Oe}|\\.)`, "g");
  for (const [y, C] of Object.entries(h)) {
    const { variable: w, reference: T } = st(g, y, t);
    o[w] = C, n[y] = T;
  }
  for (const [y, C] of Object.entries(d)) {
    const { variable: w } = st(g, y, t);
    r[w] = C;
  }
  for (const [y, C] of Object.entries(u)) {
    const { variable: w, reference: T } = st(g, y, t);
    o[w] = C, n[y] = T;
  }
  const m = rr(n, Oe);
  return { cssVarsValues: {
    root: o,
    dark: r
  }, vars: m };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const xn = [
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
function wn(e) {
  return nr(e, xn);
}
function Sn(e) {
  const { vars: t, __cssVarsValues: o, __breakpoints: r, ...n } = e;
  return n;
}
function po(e) {
  const t = Sn(e), o = wn(t), { cssVarsValues: r, vars: n } = Cn(o, t.cssVarPrefix);
  return Object.assign(t, {
    vars: n,
    __cssVarsValues: r,
    __breakpoints: on(t.breakpoints)
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
function bo(e) {
  const t = vn(e);
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
      primary: xe({
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
      neutral: xe({
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
      success: xe({
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
      info: xe({
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
      warning: xe({
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
      danger: xe({
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
const kn = {
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
}, Ht = {
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
}, _n = {
  colors: bo(Ue),
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
  space: Ht,
  sizes: {
    ...Ht,
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
}, In = {
  ..._n,
  cssVarPrefix: Ue,
  themeMap: kn,
  components: {}
}, yt = po(In);
function Bs(e) {
  let t = yt;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: bo(e.cssVarPrefix)
  });
  const o = {
    value: t
  };
  return mt(o, "value", e), po(o.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function vt(e) {
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
function Rn(e) {
  pt({
    ":root": e.__cssVarsValues.root,
    [`.${de.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function On(e) {
  pt({
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
const yo = Z(yt);
function he() {
  return Q(yo);
}
function En(e) {
  const t = he();
  return _(() => {
    var o;
    if (e != null)
      return (o = t.components[e]) != null ? o : void 0;
  });
}
function q(e, t, o) {
  const r = he();
  return Ve(t, () => {
    var n, i;
    return (i = (n = r.components[e]) == null ? void 0 : n.defaultProps) != null ? i : {};
  }, o);
}
function zn(e) {
  var t;
  const o = (t = e.theme) != null ? t : yt;
  return Rn(o), e.withCssReset && On(o.vars), a(yo.Provider, {
    value: o,
    get children() {
      return e.children;
    }
  });
}
function Hs(e) {
  const t = Ye((o) => {
    const {
      "@import": r,
      "@font-face": n,
      ...i
    } = X(e, o), s = Object.entries(i).reduce((l, [c, h]) => (l[c] = Xe(h, o), l), {});
    pt({
      "@import": r != null ? r : [],
      "@font-face": n != null ? n : {},
      ...s
    })();
  });
  return function() {
    const o = he();
    t(o);
  };
}
function Ps(e) {
  return e;
}
function Se(e, t) {
  return co(Xe(e, t))().className;
}
function ht(e, t) {
  for (const o of Object.keys(e))
    if (e[o] !== t[o])
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
function Pt(e, t) {
  return Object.entries(e).reduce((o, [r, n]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: l = []
    } = n;
    return o[r] = {
      baseClassName: Se(i, t),
      variantClassNames: Object.entries(s).reduce((c, [h, d]) => (c[h] = Object.entries(d).reduce(
        (u, [g, m]) => (u[g] = Se(m, t), u),
        {}
      ), c), {}),
      compoundVariants: l.map((c) => [
        c.variants,
        Se(c.style, t)
      ])
    }, o;
  }, {});
}
function P(e, t) {
  let o, r, n, i, s = [], l;
  const c = Ye(
    (h, d, u) => {
      o = X(e, d), r = Pt(
        o,
        d
      ), n = X(u, d), i = n && Pt(n, d), s = Object.keys(o), l = Object.fromEntries(
        s.map((g) => [g, `hope-${h}-${g}`])
      );
    }
  );
  return function(h, d) {
    var u;
    const g = he(), m = En(h);
    c(h, g, (u = m()) == null ? void 0 : u.styleConfigOverride);
    const y = _(() => X(d.styleConfigOverride, g)), C = _(() => {
      const [M, D] = p(d, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...ke(D)
      };
    }), w = _(() => s.reduce((M, D) => {
      var I, ie, J, ee, W, U, se, ae, le, pe, be;
      let ye = "", Y = {}, ce = [];
      d.unstyled || (ye = (I = r[D].baseClassName) != null ? I : "", Y = (ie = r[D].variantClassNames) != null ? ie : {}, ce = (J = r[D].compoundVariants) != null ? J : []);
      const ve = (W = (ee = i == null ? void 0 : i[D]) == null ? void 0 : ee.baseClassName) != null ? W : "", Je = (se = (U = i == null ? void 0 : i[D]) == null ? void 0 : U.variantClassNames) != null ? se : {}, et = (le = (ae = i == null ? void 0 : i[D]) == null ? void 0 : ae.compoundVariants) != null ? le : [], Ce = [l[D], ye, ve];
      for (const x in C()) {
        const R = C()[x];
        R != null && (Ce.push((pe = Y[x]) == null ? void 0 : pe[String(R)]), Ce.push((be = Je[x]) == null ? void 0 : be[String(R)]));
      }
      for (const [x, R] of [...ce, ...et])
        ht(x, C()) && Ce.push(R);
      return M[D] = v(...Ce), M;
    }, {})), T = _(() => {
      const M = y();
      return M == null ? {} : s.reduce((D, I) => {
        var ie, J, ee, W, U, se, ae, le;
        const pe = (J = (ie = M[I]) == null ? void 0 : ie.baseStyle) != null ? J : {}, be = (W = (ee = M[I]) == null ? void 0 : ee.variants) != null ? W : {}, ye = (se = (U = M[I]) == null ? void 0 : U.compoundVariants) != null ? se : [];
        D[I] = pe;
        for (const Y in C()) {
          const ce = C()[Y];
          if (ce == null)
            continue;
          const ve = (le = (ae = be[Y]) == null ? void 0 : ae[String(ce)]) != null ? le : {};
          oo(ve) || mt(D, I, ve);
        }
        for (const Y of ye)
          ht(Y.variants, C()) && mt(D, I, Y.style);
        return D;
      }, {});
    });
    return { baseClasses: w, styleOverrides: T };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function vo(e, t) {
  const { baseStyle: o = {}, variants: r = {}, compoundVariants: n = [] } = e;
  return {
    baseClassName: Se(o, t),
    variantClassNames: Object.entries(r).reduce((i, [s, l]) => (i[s] = Object.entries(l).reduce(
      (c, [h, d]) => (c[h] = Se(d, t), c),
      {}
    ), i), {}),
    compoundVariants: n.map((i) => [
      i.variants,
      Se(i.style, t)
    ])
  };
}
function Co(e, t) {
  var o;
  const { variantClassNames: r = {}, compoundVariants: n = [] } = e, i = [];
  for (const s in t) {
    const l = t[s];
    l != null && i.push((o = r[s]) == null ? void 0 : o[String(l)]);
  }
  for (const [s, l] of n)
    ht(s, t) && i.push(l);
  return i;
}
function Ws(e) {
  let t, o;
  const r = Ye((n) => {
    t = X(e, n), o = vo(t, n);
  });
  return function(n = {}) {
    const i = he();
    return r(i), _(() => {
      if (t == null || o == null)
        return "";
      const s = {
        ...t.defaultVariants,
        ...ke(n)
      }, l = Co(o, s);
      return v(o.baseClassName, l);
    });
  };
}
const Tn = {
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
}, $n = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, An = {
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
}, Dn = {
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
}, Fn = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Ln = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, Mn = {
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
}, Bn = {
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
}, Hn = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, Pn = {
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
}, Wn = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, jn = {
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
}, Vn = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Nn = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, qn = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, Yn = {
  objectFit: !0,
  objectPosition: !0
}, Kn = {
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
}, Xn = {
  ...Tn,
  ...$n,
  ...An,
  ...Dn,
  ...Fn,
  ...Ln,
  ...Mn,
  ...Bn,
  ...Hn,
  ...Pn,
  ...Wn,
  ...jn,
  ...Vn,
  ...Nn,
  ...qn,
  ...Yn,
  ...Kn
};
function Un(e) {
  return Object.keys(e).filter((t) => t in Xn);
}
const xo = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function Gn(e) {
  return Object.entries(e).reduce((t, [o, r]) => {
    const n = xo.get(o);
    return n != null && r != null && (t[n] = r), t;
  }, {});
}
const Zn = co({});
function at(e, t, o) {
  let r, n, i = [];
  const s = Ye((c) => {
    t != null && (r = X(t, c), n = vo(r, c), i = r.variants ? Object.keys(r.variants) : []);
  }), l = (c) => {
    const h = he();
    s(h);
    const [d, u, g, m, y] = p(
      c,
      ["as", "class", "sx", "__css"],
      [...xo.keys()],
      i,
      Un(c)
    ), C = _(() => {
      if (n == null)
        return [];
      const T = {
        ...r == null ? void 0 : r.defaultVariants,
        ...ke(g)
      };
      return Co(n, T);
    }), w = _(() => {
      const T = Object.assign({}, d.__css, ke(m), ...ir(d.sx).map((M) => X(M, h)));
      if (!oo(T))
        return Zn({
          css: Xe(T, h)
        }).className;
    });
    return a(Qo, f({
      get component() {
        var T;
        return (T = d.as) != null ? T : e;
      },
      get class() {
        return v(o, n == null ? void 0 : n.baseClassName, ...C(), w(), d.class) || void 0;
      }
    }, () => Gn(u), y));
  };
  return o != null && (l.toString = () => `.${o}`), l;
}
function Qn() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(at, {
    apply(t, o, r) {
      return at(...r);
    },
    get(t, o) {
      return e.has(o) || e.set(o, at(o)), e.get(o);
    }
  });
}
const b = Qn(), Jn = ["<style", ' id="stitches">', "</style>"];
function js() {
  Zo(() => ge(Jn, me(), Vr()));
}
const ei = uo({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), Vs = uo({
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
const wo = Z();
function ti() {
  const e = Q(wo);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function Ns(e, t) {
  const { colorMode: o } = ti();
  return _(() => o() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const Ge = "hope-ui-color-mode";
function oi(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get: (t) => {
      if (ne)
        return t;
      let o;
      try {
        o = localStorage.getItem(e);
      } catch {
      }
      return o != null ? o : t;
    },
    set: (t) => {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const ri = oi(Ge);
function Wt(e, t) {
  const o = e.match(new RegExp(`(^| )${t}=([^;]+)`));
  return o == null ? void 0 : o[2];
}
function So(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (o) => {
      var r, n;
      return t ? (r = Wt(t, e)) != null ? r : o : ne ? o : (n = Wt(document.cookie, e)) != null ? n : o;
    },
    set: (o) => {
      document.cookie = `${e}=${o}; max-age=31536000; path=/`;
    }
  };
}
const qs = So(Ge);
function Ys(e) {
  return So(Ge, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function ko() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function ni() {
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
function ii(e) {
  document.body.classList.add(e ? de.dark : de.light), document.body.classList.remove(e ? de.light : de.dark);
}
function si(e, t = !0) {
  const o = t ? ni() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, o == null || o();
}
function _o(e) {
  var o;
  return ((o = ko().matches) != null ? o : e === "dark") ? "dark" : "light";
}
function ai(e) {
  var r;
  const t = "light", o = (r = e.get(t)) != null ? r : t;
  return o === "system" ? ne ? t : _o() : o;
}
function li(e) {
  const t = ko(), o = (r) => {
    e(r.matches ? "dark" : "light");
  };
  return t.addEventListener("change", o), () => {
    t.removeEventListener("change", o);
  };
}
function ci(e) {
  const t = () => {
    var d;
    return (d = e.initialColorMode) != null ? d : "system";
  }, o = () => {
    var d;
    return (d = e.storageManager) != null ? d : ri;
  };
  let r;
  const [n, i] = S(ai(o())), s = (d) => {
    i(d), ii(d === "dark"), si(d, e.disableTransitionOnChange);
  }, l = (d) => {
    r && (r(), r = void 0);
    const u = d === "system";
    u && (r = li(s)), s(u ? _o() : d), o().set(d);
  }, c = () => {
    l(n() === "dark" ? "light" : "dark");
  };
  H(() => {
    var d;
    l((d = o().get()) != null ? d : t());
  }), O(() => {
    r == null || r();
  });
  const h = {
    colorMode: n,
    setColorMode: l,
    toggleColorMode: c
  };
  return a(wo.Provider, {
    value: h,
    get children() {
      return e.children;
    }
  });
}
function Io(e) {
  return e == null ? {} : {
    overflow: V(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: V(e, (t) => t != null ? "ellipsis" : void 0),
    display: V(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: V(e, (t) => t != null ? t : void 0),
    WebkitBoxOrient: V(e, (t) => t != null ? "vertical" : void 0)
  };
}
function A(e, t) {
  return Ve(e, t);
}
function L(e, t) {
  return `rgb(${e} / ${t})`;
}
const di = ["<script", ' id="hope-ui-color-mode-script"', ">", "<\/script>"], Ro = "system", ui = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function gi(e) {
  return ui.has(e) ? e : Ro;
}
function Ks(e) {
  e = A({
    initialColorMode: Ro,
    storageType: "localStorage",
    storageKey: Ge
  }, e);
  const t = _(() => {
    const o = gi(e.initialColorMode), r = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${o}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, n = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${o}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? r : n}`.trim();
  });
  return ge(di, me(), Ee("nonce", we(e.nonce, !0), !1), t());
}
const jt = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function Oo(e) {
  const [t, o] = S(), [r, n] = S(), i = _(() => e.overlayTransitionOptions ? A(jt, e.overlayTransitionOptions) : jt), s = Ke(() => e.isOpen, i);
  let l;
  const c = (g) => {
    l = g.target;
  }, h = (g) => {
    var m;
    g.key === "Escape" && (g.stopPropagation(), e.closeOnEsc && e.onClose(), (m = e.onEscKeyDown) == null || m.call(e));
  }, d = (g) => {
    var m;
    g.stopPropagation(), l === g.target && (e.closeOnOverlayClick && e.onClose(), (m = e.onOverlayClick) == null || m.call(e));
  }, u = () => {
    e.onClose();
  };
  return zr({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: o,
    descriptionId: r,
    setDescriptionId: n,
    overlayTransition: s,
    onContainerMouseDown: c,
    onContainerKeyDown: h,
    onContainerClick: d,
    onCloseButtonClick: u
  };
}
const mi = P((e) => ({
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
        light: L(e.vars.colors.neutral.darkChannel, 0.75),
        dark: L(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), hi = ["<path", ' fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>'], Vt = {
  viewBox: "0 0 24 24",
  path: () => ge(hi, me())
}, Nt = b("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), fi = (e) => {
  e = A({
    children: Vt.path,
    viewBox: Vt.viewBox,
    color: "currentColor"
  }, e);
  const [t, o] = p(e, ["as", "children", "viewBox"]), r = () => t.as && !sr(t.as);
  return a($, {
    get when() {
      return r();
    },
    get fallback() {
      return a(Nt, f({
        get viewBox() {
          return t.viewBox;
        },
        verticalAlign: "middle"
      }, o, {
        get children() {
          return t.children;
        }
      }));
    },
    get children() {
      return a(Nt, f({
        get as() {
          return t.as;
        }
      }, o));
    }
  });
};
function Eo(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: o = {}
  } = e;
  return (r) => a(fi, f({
    viewBox: t
  }, o, r, {
    get children() {
      return e.path;
    }
  }));
}
const pi = ["<g", ' fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g>'], bi = ["<path", ' d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>'], yi = Eo({
  path: () => ge(pi, me())
}), vi = Eo({
  path: () => ge(bi, me())
}), Ci = P(
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
        ...vt(e.vars),
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
), Ct = (e) => {
  e = q("CloseButton", {
    "aria-label": "Close",
    children: () => a(vi, {})
  }, e);
  const [t, o, r] = p(e, ["class"], [...N, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Ci("CloseButton", o);
  return a(b.button, f({
    type: "button",
    get class() {
      return v(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}, zo = Z();
function Ae() {
  const e = Q(zo);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const xi = (e) => {
  const t = Ae();
  e = A({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [o, r] = p(e, ["class", "onClick"]);
  return a(Ct, f({
    get class() {
      return v("hope-Modal-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), z(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, To = {
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
}, wi = b("span", {
  baseStyle: To
}), Xs = b("input", {
  baseStyle: To
}), xt = (e) => {
  let t;
  e = A({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [o, r] = p(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), n = () => {
    if (o.restoreFocusSelector) {
      t = document.querySelector(o.restoreFocusSelector);
      return;
    }
    o.restoreFocus && (t = ar());
  }, i = () => !1, s = (l) => {
  };
  return ue(() => {
    n();
  }), O(() => {
    !t || i() || lr(t);
  }), a(b.div, f({
    tabIndex: -1
  }, r, {
    get children() {
      return [a($, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return a(qt, {
            onFocus: s
          });
        }
      }), e.children, a($, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return a(qt, {
            onFocus: s
          });
        }
      })];
    }
  }));
}, qt = (e) => a(wi, f({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e)), Si = (e) => {
  const t = Ae(), [o, r] = p(e, ["class", "style", "onClick"]), n = (s) => {
    s.stopPropagation(), z(o.onClick, s);
  }, i = _(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return a(xt, {
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
      return a(b.section, f({
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
          return v(t.baseClasses().content, o.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: n
      }, r));
    }
  });
}, ki = (e) => {
  const t = Ae(), [o, r] = p(e, ["class"]);
  return H(() => {
    t.setDescriptionId(`${t.contentId()}-description`), O(() => t.setDescriptionId(void 0));
  }), a(b.p, f({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return v(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, _i = (e) => {
  const t = Ae(), [o, r] = p(e, ["class"]);
  return H(() => {
    t.setHeadingId(`${t.contentId()}-heading`), O(() => t.setHeadingId(void 0));
  }), a(b.h2, f({
    get id() {
      return t.headingId();
    },
    get class() {
      return v(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, Ii = (e) => {
  const t = Ae(), [o, r] = p(e, ["class", "style", "children"]), n = _(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return a(b.div, f({
    role: "presentation",
    get class() {
      return v(t.baseClasses().overlay, o.class);
    },
    get style() {
      return n();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}, De = (e) => {
  e = q("Modal", {
    id: `hope-modal-${Ne()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = p(e, [...N, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: o,
    styleOverrides: r
  } = mi("Modal", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    overlayTransition: c,
    onContainerMouseDown: h,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: g
  } = Oo(e), m = Ke(() => e.isOpen, () => {
    var C;
    return A({
      transition: "pop",
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (C = e.contentTransitionOptions) != null ? C : {});
  }), y = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: m,
    overlayTransition: c,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: h,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: g
  };
  return a($, {
    get when() {
      return c.keepMounted() && m.keepMounted();
    },
    get children() {
      return a(qe, {
        get children() {
          return a(zo.Provider, {
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
De.Overlay = Ii;
De.Content = Si;
De.CloseButton = xi;
De.Heading = _i;
De.Description = ki;
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
const Ri = typeof document < "u" ? document : void 0, Oi = "body > :not(script, style)", lt = '[aria-modal="true"], [data-ismodal="true"]';
function Yt(e, t) {
  const o = Array.from(e.querySelectorAll(Oi)).filter((r) => !r.contains(t)).map((r) => {
    const n = r.getAttribute("aria-hidden") || "";
    return r.setAttribute("aria-hidden", "true"), { element: r, previousAriaHidden: n };
  });
  return () => {
    o.forEach(({ element: r, previousAriaHidden: n }) => {
      n ? r.setAttribute("aria-hidden", n) : r.removeAttribute("aria-hidden");
    });
  };
}
function Ei(e = "body", { document: t = Ri } = {}) {
  const o = t == null ? void 0 : t.querySelector(e);
  if (t == null || o == null)
    return cr;
  const r = { childList: !0 };
  let n = [], i;
  const s = new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList") {
        if (c.addedNodes.length > 0) {
          const h = Array.from(c.addedNodes).find(
            (d) => {
              var u;
              return (u = d.querySelector) == null ? void 0 : u.call(d, lt);
            }
          );
          if (h) {
            n.push(h);
            const d = h.querySelector(lt);
            i == null || i(), i = Yt(t, d);
          }
        } else if (c.removedNodes.length > 0) {
          const h = Array.from(c.removedNodes), d = n.findIndex(
            (u) => h.includes(u)
          );
          if (d >= 0)
            if (i == null || i(), n = n.filter((u, g) => g !== d), n.length > 0) {
              const u = n[n.length - 1].querySelector(lt);
              i = Yt(t, u);
            } else
              i = void 0;
        }
      }
  });
  return s.observe(o, r), () => {
    i == null || i(), s.disconnect();
  };
}
function Us(e) {
  Ei(), e = A({
    withCssReset: !0
  }, e);
  const [t, o] = p(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return a(ci, {
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
      return a(zn, o);
    }
  });
}
const zi = P(({ vars: e }) => ({
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
      ...vt(e)
    }
  }
})), Gs = (e) => {
  e = q("Anchor", {}, e);
  const [t, o, r] = p(e, ["class", "isExternal"], N), {
    baseClasses: n,
    styleOverrides: i
  } = zi("Anchor", o);
  return a(b.a, f({
    get class() {
      return v(n().root, t.class);
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
}, Ti = b("div", {
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
}, "hope-AspectRatio-root"), Zs = (e) => {
  e = A({
    ratio: 4 / 3
  }, e);
  const [t, o] = p(e, ["ratio"]);
  return a(Ti, f({
    get _before() {
      return {
        pb: V(t.ratio, (r) => `${1 / r * 100}%`)
      };
    }
  }, o));
};
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */
const Qs = b("div"), Ze = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function $i(e) {
  const t = [];
  for (const o of Ze) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "solid",
        colorScheme: o
      },
      style: {
        color: n ? e.colors[o][900] : "common.white",
        backgroundColor: e.colors[o][r ? "800" : n ? "300" : "500"],
        borderColor: e.colors[o][r ? "800" : n ? "300" : "500"],
        _hover: {
          color: n ? e.colors[o][900] : "common.white",
          backgroundColor: e.colors[o][r ? "700" : n ? "400" : "600"],
          borderColor: e.colors[o][r ? "700" : n ? "400" : "600"]
        },
        _active: {
          color: n ? e.colors[o][900] : "common.white",
          backgroundColor: e.colors[o][r ? "600" : n ? "500" : "700"],
          borderColor: e.colors[o][r ? "600" : n ? "500" : "700"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.100",
          borderColor: "neutral.100"
        },
        _dark: {
          color: n ? e.colors[o][900] : "whiteAlpha.900",
          backgroundColor: e.colors[o][n ? "500" : "700"],
          borderColor: e.colors[o][n ? "500" : "700"],
          _hover: {
            color: n ? e.colors[o][900] : "whiteAlpha.900",
            backgroundColor: e.colors[o][n ? "400" : "600"],
            borderColor: e.colors[o][n ? "400" : "600"]
          },
          _active: {
            color: n ? e.colors[o][900] : "whiteAlpha.900",
            backgroundColor: e.colors[o][n ? "300" : "500"],
            borderColor: e.colors[o][n ? "300" : "500"]
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
function Ai(e) {
  const t = [];
  for (const o of Ze) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "soft",
        colorScheme: o
      },
      style: {
        color: e.colors[o][n ? "900" : "700"],
        backgroundColor: e.colors[o][r ? "200" : n ? "100" : "50"],
        borderColor: e.colors[o][r ? "200" : n ? "100" : "50"],
        _hover: {
          color: e.colors[o][n ? "900" : "800"],
          backgroundColor: e.colors[o][r ? "300" : n ? "200" : "100"],
          borderColor: e.colors[o][r ? "300" : n ? "200" : "100"]
        },
        _active: {
          color: e.colors[o][n ? "900" : "800"],
          backgroundColor: e.colors[o][r ? "400" : n ? "300" : "200"],
          borderColor: e.colors[o][r ? "400" : n ? "300" : "200"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.50",
          borderColor: "neutral.50"
        },
        _dark: {
          color: e.colors[o][200],
          backgroundColor: L(e.colors[o].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[o][200],
            backgroundColor: L(e.colors[o].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: L(e.colors[o].mainChannel, 0.4),
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
function Di(e) {
  const t = [];
  for (const o of Ze) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "outlined",
        colorScheme: o
      },
      style: {
        color: e.colors[o][n ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: e.colors[o][r || n ? "400" : "300"],
        _hover: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "100" : "50"],
          borderColor: e.colors[o][r || n ? "500" : "400"]
        },
        _active: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "200" : "100"],
          borderColor: e.colors[o][r || n ? "500" : "400"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "neutral.100"
        },
        _dark: {
          color: e.colors[o][200],
          backgroundColor: "transparent",
          borderColor: e.colors[o][800],
          _hover: {
            color: e.colors[o][200],
            backgroundColor: L(e.colors[o].mainChannel, 0.1),
            borderColor: e.colors[o][700]
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: L(e.colors[o].mainChannel, 0.2),
            borderColor: e.colors[o][700]
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
function Fi(e) {
  const t = [];
  for (const o of Ze) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "plain",
        colorScheme: o
      },
      style: {
        color: e.colors[o][n ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: "transparent",
        _hover: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "100" : "50"],
          borderColor: e.colors[o][r || n ? "100" : "50"]
        },
        _active: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "200" : "100"],
          borderColor: e.colors[o][r || n ? "200" : "100"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "transparent"
        },
        _dark: {
          color: e.colors[o][200],
          backgroundColor: "transparent",
          borderColor: "transparent",
          _hover: {
            color: e.colors[o][200],
            backgroundColor: L(e.colors[o].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: L(e.colors[o].mainChannel, 0.2),
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
const ze = /* @__PURE__ */ new Map([
  ["xs", "7"],
  ["sm", "8"],
  ["md", "10"],
  ["lg", "12"]
]);
function Li() {
  const e = [];
  for (const [t, o] of ze)
    e.push({
      variants: {
        isIconButton: !0,
        size: t
      },
      style: {
        width: o,
        p: 0
      }
    });
  return e;
}
const Mi = P(
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
        ...vt(e)
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
            height: ze.get("xs"),
            px: 3,
            fontSize: "xs"
          },
          sm: {
            height: ze.get("sm"),
            px: 4,
            fontSize: "sm"
          },
          md: {
            height: ze.get("md"),
            px: 5,
            fontSize: "base"
          },
          lg: {
            height: ze.get("lg"),
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
        ...$i(e),
        ...Ai(e),
        ...Di(e),
        ...Fi(e),
        ...Li()
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
        animation: `1s linear infinite ${ei}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), $o = Z();
function wt() {
  const e = Q($o);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const Bi = b("div", {
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
}, "hope-ButtonGroup-root"), Ao = Z();
function Hi() {
  return Q(Ao);
}
const Js = (e) => {
  e = A({}, e);
  const [t, o, r] = p(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return a(Ao.Provider, {
    value: o,
    get children() {
      return a(Bi, f({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, r));
    }
  });
}, Kt = (e) => {
  const t = wt(), [o, r] = p(e, ["class", "__css"]);
  return a(b.span, f({
    "aria-hidden": !0,
    get class() {
      return v(t.baseClasses().icon, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().icon,
        ...o.__css
      };
    }
  }, r));
}, Xt = (e) => {
  const t = wt(), [o, r] = p(e, ["class", "children", "hasLoadingText"]);
  return a(b.div, f({
    get class() {
      return v(t.baseClasses().loaderWrapper, o.class);
    },
    get position() {
      return o.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return t.styleOverrides().loaderWrapper;
    }
  }, r, {
    get children() {
      return a($, {
        get when() {
          return o.children;
        },
        get fallback() {
          return a(yi, {
            get class() {
              return t.baseClasses().loaderIcon;
            },
            get __css() {
              return t.styleOverrides().loaderIcon;
            }
          });
        },
        get children() {
          return o.children;
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
const Pi = ["button", "color", "file", "image", "reset", "submit"];
function Wi(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? Pi.indexOf(e.type) !== -1 : !1;
}
const ji = ["<span", ' style="', '">', "</span>"], Vi = (e) => {
  let t;
  const o = Hi(), r = A({
    get variant() {
      return o == null ? void 0 : o.variant;
    },
    get colorScheme() {
      return o == null ? void 0 : o.colorScheme;
    },
    get size() {
      return o == null ? void 0 : o.size;
    },
    get isDisabled() {
      return o == null ? void 0 : o.isDisabled;
    }
  }, e);
  e = q("Button", {
    loaderPlacement: "start"
  }, r);
  const [n, i, s, l] = p(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...N, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), c = Pr(() => t, () => e.as || "button"), [h, d] = S(c() != null && Wi({
    tagName: c(),
    type: n.type
  })), u = _(() => n.type != null ? n.type : h() ? "button" : void 0), {
    baseClasses: g,
    styleOverrides: m
  } = Mi("Button", s);
  return ue(() => {
  }), a($o.Provider, {
    value: {
      baseClasses: g,
      styleOverrides: m
    },
    get children() {
      return a(b.button, f({
        get as() {
          return n.as;
        },
        get role() {
          return !h() && c() !== "a" ? "button" : void 0;
        },
        get type() {
          return u();
        },
        get tabIndex() {
          return h() ? void 0 : 0;
        },
        get disabled() {
          return n.isDisabled;
        },
        get ["data-loading"]() {
          return n.isLoading || void 0;
        },
        get class() {
          return v(g().root, n.class);
        },
        get __css() {
          return m().root;
        }
      }, l, {
        get children() {
          return [a($, {
            get when() {
              return n.isLoading && n.loaderPlacement === "start";
            },
            get children() {
              return a(Xt, {
                get hasLoadingText() {
                  return !!n.loadingText;
                },
                get children() {
                  return n.loader;
                }
              });
            }
          }), a($, {
            get when() {
              return n.isLoading;
            },
            get fallback() {
              return a(Ut, i);
            },
            get children() {
              return a($, {
                get when() {
                  return n.loadingText;
                },
                get fallback() {
                  return ge(ji, me(), "opacity:" + 0, we(a(Ut, i)));
                },
                get children() {
                  return n.loadingText;
                }
              });
            }
          }), a($, {
            get when() {
              return n.isLoading && n.loaderPlacement === "end";
            },
            get children() {
              return a(Xt, {
                get hasLoadingText() {
                  return !!n.loadingText;
                },
                get children() {
                  return n.loader;
                }
              });
            }
          })];
        }
      }));
    }
  });
};
function Ut(e) {
  const t = wt();
  return [a($, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return a(Kt, {
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
  }), e.children, a($, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return a(Kt, {
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
const ea = (e) => a(Vi, f({
  isIconButton: !0
}, e));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const ta = b("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), Ni = b("div", ({
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
}), "hope-Container-root"), oa = (e) => {
  e = A({
    isCentered: !0
  }, e);
  const [t, o] = p(e, ["isCentered"]);
  return a(Ni, f({
    get mx() {
      return V(t.isCentered, (r) => r ? "auto" : void 0);
    }
  }, o));
}, qi = P(
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
), ra = (e) => {
  e = q("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, o, r] = p(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), n = Go(() => e.children), i = () => !!n(), s = () => o.orientation === "vertical", l = _(() => {
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
    baseClasses: c,
    styleOverrides: h
  } = qi("Divider", {
    get orientation() {
      return o.orientation;
    },
    get labelPlacement() {
      return o.labelPlacement;
    },
    get withLabel() {
      return i();
    },
    get styleConfigOverride() {
      return o.styleConfigOverride;
    },
    get unstyled() {
      return o.unstyled;
    }
  });
  return a(b.hr, f({
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
      return v(c().root, t.class);
    },
    get __css() {
      return {
        ...h().root,
        ...l()
      };
    }
  }, r, {
    get children() {
      return a($, {
        get when() {
          return i();
        },
        get children() {
          return a(b.span, f({
            get class() {
              return c().label;
            },
            get __css() {
              return h().label;
            }
          }, () => t.labelProps, {
            get children() {
              return n();
            }
          }));
        }
      });
    }
  }));
}, Yi = P((e) => ({
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
        light: L(e.vars.colors.neutral.darkChannel, 0.75),
        dark: L(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), Do = Z();
function Fe() {
  const e = Q(Do);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const Ki = (e) => {
  const t = Fe();
  e = A({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [o, r] = p(e, ["class", "onClick"]);
  return a(Ct, f({
    get class() {
      return v("hope-Drawer-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), z(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, Xi = (e) => {
  const t = Fe(), [o, r] = p(e, ["class", "style", "onClick"]), n = (s) => {
    s.stopPropagation(), z(o.onClick, s);
  }, i = _(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return a(xt, {
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
      return a(b.section, f({
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
          return v(t.baseClasses().content, o.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: n
      }, r));
    }
  });
}, Ui = (e) => {
  const t = Fe(), [o, r] = p(e, ["class"]);
  return H(() => {
    t.setDescriptionId(`${t.contentId()}-description`), O(() => t.setDescriptionId(void 0));
  }), a(b.p, f({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return v(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, Gi = (e) => {
  const t = Fe(), [o, r] = p(e, ["class"]);
  return H(() => {
    t.setHeadingId(`${t.contentId()}-heading`), O(() => t.setHeadingId(void 0));
  }), a(b.h2, f({
    get id() {
      return t.headingId();
    },
    get class() {
      return v(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, Zi = (e) => {
  const t = Fe(), [o, r] = p(e, ["class", "style", "children"]), n = _(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return a(b.div, f({
    role: "presentation",
    get class() {
      return v(t.baseClasses().overlay, o.class);
    },
    get style() {
      return n();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}, Qi = {
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
}, Le = (e) => {
  e = q("Drawer", {
    id: `hope-drawer-${Ne()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = p(e, [...N, "size", "placement"]), {
    baseClasses: o,
    styleOverrides: r
  } = Yi("Drawer", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    overlayTransition: c,
    onContainerMouseDown: h,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: g
  } = Oo(e), m = Ke(() => e.isOpen, () => {
    var C;
    return A({
      transition: Qi[e.placement],
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (C = e.contentTransitionOptions) != null ? C : {});
  }), y = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: m,
    overlayTransition: c,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: h,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: g
  };
  return a($, {
    get when() {
      return c.keepMounted() && m.keepMounted();
    },
    get children() {
      return a(qe, {
        get children() {
          return a(Do.Provider, {
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
Le.Overlay = Zi;
Le.Content = Xi;
Le.CloseButton = Ki;
Le.Heading = Gi;
Le.Description = Ui;
const na = (e) => {
  const [t, o] = p(e, ["class", "direction", "wrap", "align", "justify"]);
  return a(b.div, f({
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
  }, o));
}, Gt = {
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
}, Ji = P(
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
        ...Gt,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...Gt,
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
), Fo = Z();
function St() {
  return Q(Fo);
}
function kt() {
  const e = St();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const es = (e) => {
  const t = kt(), [o, r] = p(e, ["id", "class", "__css"]), n = () => {
    var i;
    return (i = o.id) != null ? i : t.descriptionId();
  };
  return ue(() => t.setHasDescription(!0)), O(() => t.setHasDescription(!1)), a(b.div, f({
    get id() {
      return n();
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
      return v(t.baseClasses().description, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().description,
        ...o.__css
      };
    }
  }, r));
}, ts = (e) => {
  const t = kt(), [o, r] = p(e, ["id", "class", "__css"]), n = () => {
    var i;
    return (i = o.id) != null ? i : t.errorId();
  };
  return ue(() => t.setHasError(!0)), O(() => t.setHasError(!1)), a(b.div, f({
    "aria-live": "polite",
    get id() {
      return n();
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
      return v(t.baseClasses().error, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().error,
        ...o.__css
      };
    }
  }, r));
}, os = (e) => {
  const t = kt(), [o, r] = p(e, ["id", "for", "class", "__css"]), n = () => {
    var s;
    return (s = o.id) != null ? s : t.labelId();
  }, i = () => {
    var s;
    return (s = o.for) != null ? s : t.id();
  };
  return a(b.label, f({
    get id() {
      return n();
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
      return v(t.baseClasses().label, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().label,
        ...o.__css
      };
    }
  }, r));
}, _t = (e) => {
  e = q("FormControl", {
    id: `hope-form-control-${Ne()}`
  }, e);
  const [t, o, r] = p(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...N, "withRequiredIndicator"]), [n, i] = S(!1), [s, l] = S(!1), {
    baseClasses: c,
    styleOverrides: h
  } = Ji("FormControl", o), d = () => `${e.id}-description`, u = () => `${e.id}-error`, g = () => e.isInvalid, y = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: d,
    errorId: u,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: g,
    unstyled: () => o.unstyled,
    baseClasses: c,
    styleOverrides: h,
    hasDescription: n,
    setHasDescription: i,
    hasError: s,
    setHasError: l,
    mergeAriaDescribedBy: (C) => {
      const w = C ? [C] : [];
      return s() && g() && w.push(u()), n() && w.push(d()), w.join(" ") || void 0;
    }
  };
  return a(Fo.Provider, {
    value: y,
    get children() {
      return a(b.div, f({
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
          return v(c().root, t.class);
        },
        get __css() {
          return h().root;
        }
      }, r));
    }
  });
};
_t.Label = os;
_t.Description = es;
_t.Error = ts;
const rs = (e) => {
  const [t, o] = p(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return a(b.div, f({
    get class() {
      return v("hope-GridItem-root", t.class);
    },
    get __css() {
      return ke({
        gridArea: t.area,
        gridColumn: Zt(t.colSpan),
        gridRow: Zt(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, o));
};
function Zt(e) {
  return V(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const Lo = (e) => {
  const [t, o] = p(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return a(b.div, f({
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
  }, o));
};
Lo.Item = rs;
const ia = (e) => {
  const [t, o] = p(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), r = he(), n = () => t.minChildWidth ? ns(t.minChildWidth, r.vars) : is(t.columns);
  return a(Lo, f({
    get templateColumns() {
      return n();
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
  }, o));
};
function ns(e, t) {
  return V(e, (o) => {
    const r = fo(o, "sizes", t);
    return no(o) ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function is(e) {
  return V(e, (t) => no(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const ss = P({
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
}), sa = (e) => {
  e = q("Heading", {}, e);
  const [t, o, r] = p(e, ["as", "class", "level", "lineClamp"], [...N, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = ss("Heading", o), s = () => t.level ? `h${t.level}` : t.as, l = _(() => ({
    ...i().root,
    ...Io(t.lineClamp)
  }));
  return a(b.h2, f({
    get as() {
      return s();
    },
    get class() {
      return v(n().root, t.class);
    },
    get __css() {
      return l();
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
function as(e) {
  const [t, o] = S("pending"), r = () => e.ignoreFallback ? "loaded" : t();
  let n = null;
  const i = () => {
    n && (n.onload = null, n.onerror = null, n = null);
  }, s = () => {
    if (!e.src)
      return;
    i();
    const l = new Image();
    l.src = e.src, e.crossOrigin && (l.crossOrigin = e.crossOrigin), e.srcSet && (l.srcset = e.srcSet), e.sizes && (l.sizes = e.sizes), e.loading && (l.loading = e.loading), l.onload = (c) => {
      i(), o("loaded"), z(e.onLoad, c);
    }, l.onerror = (c) => {
      i(), o("failed"), z(e.onError, c);
    }, n = l;
  };
  return H(() => {
    o(e.src ? "loading" : "pending");
  }), to(() => {
    e.ignoreFallback || (t() === "loading" && s(), O(() => {
      i();
    }));
  }), r;
}
const aa = (e) => {
  const [t, o, r] = p(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), n = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = as(Ve(e, {
    get ignoreFallback() {
      return n();
    }
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...n() ? o : {},
    ...r
  });
  return a($, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return a($, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return a(b.img, f({
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
      return a(b.img, f({
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
}, la = (e) => {
  const [t, o] = p(e, ["class"]);
  return a(b.img, f({
    get class() {
      return v("hope-Image-root", t.class);
    }
  }, o));
}, Mo = {
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
}, ls = P(
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
            light: `0 0 0 3px ${L(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${L(e.colors.primary.darkChannel, 0.75)}`
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
            light: `0 0 0 3px ${L(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${L(e.colors.danger.darkChannel, 0.75)}`
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
  Mo
), Bo = Z();
function Ho() {
  return Q(Bo);
}
function Po() {
  const e = Ho();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const ca = (e) => {
  const t = St(), o = Ho();
  e = q("Input", {}, e);
  const [r, n, i] = p(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...N, "variant", "size"]), {
    baseClasses: s,
    styleOverrides: l
  } = ls("Input", {
    get variant() {
      var m;
      return (m = o == null ? void 0 : o.variant()) != null ? m : n.variant;
    },
    get size() {
      var m;
      return (m = o == null ? void 0 : o.size()) != null ? m : n.size;
    },
    get styleConfigOverride() {
      return n.styleConfigOverride;
    },
    get unstyled() {
      var m;
      return (m = o == null ? void 0 : o.unstyled()) != null ? m : n.unstyled;
    }
  }), c = () => {
    var m, y;
    return (y = (m = r.isRequired) != null ? m : o == null ? void 0 : o.isRequired()) != null ? y : t == null ? void 0 : t.isRequired();
  }, h = () => {
    var m, y;
    return (y = (m = r.isDisabled) != null ? m : o == null ? void 0 : o.isDisabled()) != null ? y : t == null ? void 0 : t.isDisabled();
  }, d = () => {
    var m, y;
    return (y = (m = r.isReadOnly) != null ? m : o == null ? void 0 : o.isReadOnly()) != null ? y : t == null ? void 0 : t.isReadOnly();
  }, u = () => {
    var m, y;
    return (y = (m = r.isInvalid) != null ? m : o == null ? void 0 : o.isInvalid()) != null ? y : t == null ? void 0 : t.isInvalid();
  }, g = () => t == null ? void 0 : t.mergeAriaDescribedBy(r["aria-describedby"]);
  return a(b.input, f({
    type: "text",
    get id() {
      var m;
      return (m = r.id) != null ? m : t == null ? void 0 : t.id();
    },
    get required() {
      return c();
    },
    get disabled() {
      return h();
    },
    get readOnly() {
      return d();
    },
    get ["aria-invalid"]() {
      return dr(u());
    },
    get ["aria-describedby"]() {
      return g();
    },
    get size() {
      return r.htmlSize;
    },
    get class() {
      return v(o == null ? void 0 : o.baseClasses().input, s().root, r.class);
    },
    get __css() {
      return {
        ...o == null ? void 0 : o.styleOverrides().input,
        ...l().root,
        ...r.__css
      };
    }
  }, i));
};
function ct(e) {
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
const cs = P(
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
        ...ct({
          size: "sm",
          paddingWithSection: 8
        }),
        ...ct({
          size: "md",
          paddingWithSection: 10
        }),
        ...ct({
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
  Mo
), Wo = (e) => {
  const t = Po(), [o, r] = p(e, ["class", "__css", "addonPlacement"]), n = _(() => {
    switch (o.addonPlacement) {
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
  return ue(() => {
    switch (o.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), O(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), O(() => t.setHasRightAddon(!1));
        break;
    }
  }), a(b.div, f({
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
      return v(t.baseClasses().addon, n().className, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().addon,
        ...n().styleOverride,
        ...o.__css
      };
    }
  }, r));
}, ds = (e) => a(Wo, f({
  addonPlacement: "left"
}, e)), us = (e) => a(Wo, f({
  addonPlacement: "right"
}, e)), jo = (e) => {
  const t = Po(), [o, r] = p(e, ["class", "__css", "sectionPlacement"]), n = _(() => {
    switch (o.sectionPlacement) {
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
  return ue(() => {
    switch (o.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), O(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), O(() => t.setHasRightSection(!1));
        break;
    }
  }), a(b.div, f({
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
      return v(t.baseClasses().section, n().className, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().section,
        ...n().styleOverride,
        ...o.__css
      };
    }
  }, r));
}, gs = (e) => a(jo, f({
  sectionPlacement: "left"
}, e)), ms = (e) => a(jo, f({
  sectionPlacement: "right"
}, e)), Qe = (e) => {
  const t = St();
  e = q("InputGroup", {}, e);
  const [o, r, n] = p(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...N, "variant", "size"]), [i, s] = S(!1), [l, c] = S(!1), [h, d] = S(!1), [u, g] = S(!1), {
    baseClasses: m,
    styleOverrides: y
  } = cs("InputGroup", {
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
      return l();
    },
    get hasLeftAddon() {
      return h();
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
      var w;
      return (w = e.isRequired) != null ? w : t == null ? void 0 : t.isRequired();
    },
    isDisabled: () => {
      var w;
      return (w = e.isDisabled) != null ? w : t == null ? void 0 : t.isDisabled();
    },
    isReadOnly: () => {
      var w;
      return (w = e.isReadOnly) != null ? w : t == null ? void 0 : t.isReadOnly();
    },
    isInvalid: () => {
      var w;
      return (w = e.isInvalid) != null ? w : t == null ? void 0 : t.isInvalid();
    },
    variant: () => r.variant,
    size: () => r.size,
    unstyled: () => r.unstyled,
    baseClasses: m,
    styleOverrides: y,
    setHasLeftSection: s,
    setHasRightSection: c,
    setHasLeftAddon: d,
    setHasRightAddon: g
  };
  return a(Bo.Provider, {
    value: C,
    get children() {
      return a(b.div, f({
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
          return v(m().root, o.class);
        },
        get __css() {
          return y().root;
        }
      }, n));
    }
  });
};
Qe.LeftAddon = ds;
Qe.RightAddon = us;
Qe.LeftSection = gs;
Qe.RightSection = ms;
const hs = P({
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
}), da = (e) => {
  const [t, o, r] = p(e, ["class"], N), {
    baseClasses: n,
    styleOverrides: i
  } = hs("Kbd", o);
  return a(b.kbd, f({
    get class() {
      return v(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}, fs = P((e) => ({
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
})), Vo = Z();
function fe() {
  const e = Q(Vo);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const ps = (e) => {
  fe();
  const [t, o] = p(e, ["ref"]);
  return a(b.div, o);
}, bs = (e) => {
  const t = fe();
  e = A({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [o, r] = p(e, ["class", "onClick"]);
  return a(Ct, f({
    get class() {
      return v("hope-Popover-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), z(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}, ys = ["<svg", ' display="block"', "><g", '><path fill="none"', '></path><path stroke="none"', "></path></g></svg>"], Qt = "M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z", je = 30, re = je / 2, vs = `0 0 ${je} ${je}`, Cs = {
  top: `rotate(180 ${re} ${re})`,
  right: `rotate(-90 ${re} ${re})`,
  bottom: `rotate(0 ${re} ${re})`,
  left: `rotate(90 ${re} ${re})`
}, xs = (e) => {
  const t = fe(), [o, r] = p(e, ["ref", "class", "style", "children"]), n = () => t.currentPlacement().split("-")[0], i = ws(t.contentRef), s = () => {
    var d;
    return ((d = i()) == null ? void 0 : d.getPropertyValue("background-color")) || "none";
  }, l = () => {
    var d;
    return ((d = i()) == null ? void 0 : d.getPropertyValue(`border-${n()}-color`)) || "none";
  }, c = () => {
    var d;
    return ((d = i()) == null ? void 0 : d.getPropertyValue(`border-${n()}-width`)) || "0px";
  }, h = () => parseInt(c()) * 2 * (je / t.arrowSize());
  return a(b.div, f({
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: s(),
        stroke: l(),
        "stroke-width": h(),
        ...o.style
      };
    },
    get class() {
      return v(t.baseClasses().arrow, o.class);
    },
    get __css() {
      return t.styleOverrides().arrow;
    }
  }, r, {
    get children() {
      return ge(ys, me(), Ee("viewBox", we(vs, !0), !1), Ee("transform", we(Cs[n()], !0), !1), Ee("d", we(Qt, !0), !1), Ee("d", we(Qt, !0), !1));
    }
  }));
};
function ws(e) {
  const [t, o] = S();
  return to(() => {
    const r = e();
    r && o(ur(r).getComputedStyle(r));
  }), t;
}
const Ss = (e) => {
  const t = fe(), [o, r] = p(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (u) => {
    u.stopPropagation(), z(o.onKeyDown, u), z(t.onContentKeyDown, u);
  }, l = (u) => {
    z(o.onFocusOut, u), z(t.onContentFocusOut, u);
  }, c = (u) => {
    z(o.onMouseEnter, u), i() && t.onContentMouseEnter();
  }, h = (u) => {
    z(o.onMouseLeave, u), i() && z(t.onContentMouseLeave, u);
  }, d = _(() => ({
    ...o.style,
    ...t.popoverTransition.style()
  }));
  return a($, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return a(qe, {
        get children() {
          return a(xt, f({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return n();
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
              return v(t.baseClasses().root, o.class);
            },
            get style() {
              return d();
            },
            get __css() {
              return t.styleOverrides().root;
            },
            onKeyDown: s,
            onFocusOut: l,
            onMouseEnter: c,
            onMouseLeave: h
          }, r, {
            get children() {
              return [a($, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return a(xs, {});
                }
              }), o.children];
            }
          }));
        }
      });
    }
  });
}, ks = (e) => {
  const t = fe(), [o, r] = p(e, ["class"]);
  return H(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), O(() => t.setDescriptionId(void 0));
  }), a(b.p, f({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return v(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}, _s = (e) => {
  const t = fe(), [o, r] = p(e, ["class"]);
  return H(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), O(() => t.setHeadingId(void 0));
  }), a(b.h2, f({
    get id() {
      return t.headingId();
    },
    get class() {
      return v(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}, Is = (e) => {
  const t = fe(), [o, r] = p(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (g) => {
    z(o.onClick, g), n() && (g.stopPropagation(), t.onTriggerClick());
  }, l = (g) => {
    z(o.onKeyDown, g), i() && (g.stopPropagation(), z(t.onTriggerKeyDown, g));
  }, c = (g) => {
    z(o.onFocus, g), i() && t.onTriggerFocus();
  }, h = (g) => {
    z(o.onBlur, g), i() && z(t.onTriggerBlur, g);
  }, d = (g) => {
    z(o.onMouseEnter, g), i() && t.onTriggerMouseEnter();
  }, u = (g) => {
    z(o.onMouseLeave, g), i() && t.onTriggerMouseLeave();
  };
  return a(b.button, f({
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
    onFocus: c,
    onBlur: h,
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
function Jt(e) {
  const { x: t = 0, y: o = 0, width: r = 0, height: n = 0 } = e != null ? e : {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, o, r, n);
  const i = {
    x: t,
    y: o,
    width: r,
    height: n,
    top: o,
    right: t + r,
    bottom: o + n,
    left: t
  };
  return { ...i, toJSON: () => i };
}
function Rs(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const r = t(e);
      return r ? Jt(r) : e ? e.getBoundingClientRect() : Jt();
    }
  };
}
const _e = (e) => {
  e = q("Popover", {
    getAnchorRect: (x) => x == null ? void 0 : x.getBoundingClientRect(),
    id: `hope-popover-${Ne()}`,
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
    baseClasses: o,
    styleOverrides: r
  } = fs("Popover", t), [n, i] = S(), [s, l] = S(), [c, h] = S(), [d, u] = S(), [g, m] = S(!1), [y, C] = S(e.placement), [w, T] = S(), [M, D] = S(), I = Or({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (x) => {
      var R;
      return (R = e.onOpenChange) == null ? void 0 : R.call(e, x);
    }
  }), ie = Ke(() => I.isOpen(), () => {
    var x;
    return A({
      transition: "pop",
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (x = e.transitionOptions) != null ? x : {});
  }), J = () => {
    var te;
    const x = Rs((te = n()) != null ? te : s(), e.getAnchorRect), R = d(), B = c();
    return {
      anchorEl: x,
      arrowEl: R,
      floatingEl: B
    };
  };
  async function ee() {
    var It;
    const {
      anchorEl: x,
      arrowEl: R,
      floatingEl: B
    } = J();
    if (!x || !B)
      return;
    x.getBoundingClientRect();
    const te = [hr(e.offset), fr({
      padding: e.overflowPadding
    }), pr({
      padding: e.overflowPadding
    }), br({
      padding: e.overflowPadding,
      apply({
        rects: Me
      }) {
        const Be = Math.round(Me.reference.width);
        e.hasSameWidth && (B.style.width = `${Be}px`);
      }
    })];
    R && te.push(yr({
      element: R,
      padding: e.arrowPadding
    })), te.push(vr());
    const K = await Cr(x, B, {
      placement: e.placement,
      middleware: te
    });
    if (K.placement !== y() && C(K.placement), !!B && (Object.assign(B.style, {
      left: `${Math.round(K.x)}px`,
      top: `${Math.round(K.y)}px`,
      visibility: (It = K.middlewareData.hide) != null && It.referenceHidden ? "hidden" : "visible"
    }), R && K.middlewareData.arrow)) {
      const {
        x: Me,
        y: Be
      } = K.middlewareData.arrow, qo = K.placement.split("-")[0];
      Object.assign(R.style, {
        left: Me != null ? `${Me}px` : "",
        top: Be != null ? `${Be}px` : "",
        [qo]: "100%"
      });
    }
  }
  let W, U;
  const se = () => {
    I.toggle();
  }, ae = (x) => {
    x.key === "Escape" && I.close();
  }, le = () => {
    W == null && I.open();
  }, pe = (x) => {
    const R = Rt(x), B = !ot(c(), R);
    I.isOpen() && e.closeOnBlur && B && I.close();
  }, be = () => {
    m(!0), W = window.setTimeout(() => {
      I.open(), ee();
    }, e.openDelay);
  }, ye = () => {
    m(!1), W && (clearTimeout(W), W = void 0), U = window.setTimeout(() => {
      g() || I.close();
    }, e.closeDelay);
  }, Y = (x) => {
    e.closeOnEsc && x.key === "Escape" && I.close();
  }, ce = (x) => {
    const R = Rt(x), B = ot(c(), R), te = ot(s(), R), K = !B && !te;
    I.isOpen() && e.closeOnBlur && K && I.close();
  }, ve = () => {
    m(!0);
  }, Je = (x) => {
    x.relatedTarget !== null && (m(!1), U = window.setTimeout(I.close, e.closeDelay));
  }, et = () => {
    I.close();
  };
  H(() => {
    const {
      anchorEl: x,
      floatingEl: R
    } = J();
    if (!x || !R)
      return;
    const B = mr(x, R, ee, {
      elementResize: typeof ResizeObserver == "function"
    });
    O(B);
  }), O(() => {
    ne || (window.clearTimeout(W), window.clearTimeout(U));
  });
  const Ce = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: I.isOpen,
    popoverTransition: ie,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: y,
    popoverId: () => e.id,
    headingId: w,
    setHeadingId: T,
    descriptionId: M,
    setDescriptionId: D,
    contentRef: c,
    setContentRef: h,
    setArrowRef: u,
    setAnchorRef: i,
    setTriggerRef: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: se,
    onTriggerKeyDown: ae,
    onTriggerFocus: le,
    onTriggerBlur: pe,
    onTriggerMouseEnter: be,
    onTriggerMouseLeave: ye,
    onContentKeyDown: Y,
    onContentFocusOut: ce,
    onContentMouseEnter: ve,
    onContentMouseLeave: Je,
    onCloseButtonClick: et
  };
  return a(Vo.Provider, {
    value: Ce,
    get children() {
      return X(e.children, I);
    }
  });
};
_e.Trigger = Is;
_e.Anchor = ps;
_e.Content = Ss;
_e.CloseButton = bs;
_e.Heading = _s;
_e.Description = ks;
function ua(e) {
  const [t, o] = p(e, ["children", "withinPortal"]);
  return a($, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return a(qe, f(o, {
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
const ga = b("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), No = (e) => {
  e = A({
    align: "center"
  }, e);
  const [t, o] = p(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return a(b.div, f({
    get class() {
      return v("hope-Stack-root", t.class);
    },
    get __css() {
      return ke({
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
  }, o));
}, ma = (e) => {
  e = A({
    reverse: !1
  }, e);
  const [t, o] = p(e, ["reverse"]);
  return a(No, f(o, {
    get direction() {
      return V(t.reverse, (r) => r ? "row-reverse" : "row");
    }
  }));
}, ha = (e) => {
  e = A({
    reverse: !1
  }, e);
  const [t, o] = p(e, ["reverse"]);
  return a(No, f(o, {
    get direction() {
      return V(t.reverse, (r) => r ? "column-reverse" : "column");
    }
  }));
}, Os = P({
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
}), fa = (e) => {
  e = q("Text", {}, e);
  const [t, o, r] = p(e, ["class", "lineClamp"], [...N, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Os("Text", o), s = _(() => ({
    ...i().root,
    ...Io(t.lineClamp)
  }));
  return a(b.p, f({
    get class() {
      return v(n().root, t.class);
    },
    get __css() {
      return s();
    }
  }, r));
};
export {
  Gs as Anchor,
  Zs as AspectRatio,
  Qs as Box,
  Vi as Button,
  Js as ButtonGroup,
  de as COLOR_MODE_CLASSNAMES,
  Ge as COLOR_MODE_STORAGE_KEY,
  ta as Center,
  Ct as CloseButton,
  wo as ColorModeContext,
  ci as ColorModeProvider,
  Ks as ColorModeScript,
  oa as Container,
  yt as DEFAULT_THEME,
  kn as DEFAULT_THEME_MAP,
  Ms as DEFAULT_TRANSITIONS_NAMES,
  ra as Divider,
  Le as Drawer,
  Ki as DrawerCloseButton,
  Xi as DrawerContent,
  Ui as DrawerDescription,
  Gi as DrawerHeading,
  Zi as DrawerOverlay,
  na as Flex,
  xt as FocusTrapRegion,
  _t as FormControl,
  Fo as FormControlContext,
  es as FormControlDescription,
  ts as FormControlError,
  os as FormControlLabel,
  Lo as Grid,
  rs as GridItem,
  ma as HStack,
  sa as Heading,
  Us as HopeProvider,
  fi as Icon,
  ea as IconButton,
  aa as Image,
  la as Img,
  ca as Input,
  Qe as InputGroup,
  ds as InputGroupLeftAddon,
  gs as InputGroupLeftSection,
  us as InputGroupRightAddon,
  ms as InputGroupRightSection,
  da as Kbd,
  De as Modal,
  xi as ModalCloseButton,
  Si as ModalContent,
  ki as ModalDescription,
  _i as ModalHeading,
  Ii as ModalOverlay,
  ua as OptionalPortal,
  _e as Popover,
  ps as PopoverAnchor,
  xs as PopoverArrow,
  bs as PopoverCloseButton,
  Ss as PopoverContent,
  ks as PopoverDescription,
  _s as PopoverHeading,
  Is as PopoverTrigger,
  N as STYLE_CONFIG_PROP_NAMES,
  ia as SimpleGrid,
  ga as Spacer,
  No as Stack,
  fa as Text,
  zn as ThemeProvider,
  ha as VStack,
  wi as VisuallyHidden,
  Xs as VisuallyHiddenInput,
  Yr as arrayToObjectNotation,
  vo as computeStyleOptions,
  qs as cookieStorageManager,
  Ys as cookieStorageManagerSSR,
  Fs as createControllableArraySignal,
  Rr as createControllableBooleanSignal,
  ao as createControllableSignal,
  So as createCookieStorageManager,
  Or as createDisclosure,
  Hs as createGlobalStyles,
  Ps as createHopeComponent,
  Eo as createIcon,
  as as createImageLoadingStatus,
  Ls as createInteractOutside,
  oi as createLocalStorageManager,
  xe as createPalette,
  zr as createPreventScroll,
  Hr as createReducedMotion,
  P as createStyleConfig,
  Ws as createStyles,
  Pr as createTagName,
  Ke as createTransition,
  Bs as extendTheme,
  Vs as fadeIn,
  vt as focusStyles,
  Co as getSelectedVariantClassNames,
  b as hope,
  js as injectCriticalStyle,
  Nr as isColorModeObjectLike,
  Kr as isResponsiveObjectLike,
  uo as keyframes,
  Io as lineClamp,
  ri as localStorageManager,
  V as mapResponsive,
  A as mergeDefaultProps,
  q as mergeThemeProps,
  qr as objectToArrayNotation,
  ya as pack,
  fo as resolveTokenValue,
  L as rgba,
  ei as spin,
  Hi as useButtonGroupContext,
  ti as useColorMode,
  Ns as useColorModeValue,
  En as useComponentTheme,
  St as useFormControlContext,
  kt as useRequiredFormControlContext,
  he as useTheme,
  Ei as watchModals
};
