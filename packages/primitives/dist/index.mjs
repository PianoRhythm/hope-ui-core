import { createSignal as f, createMemo as T, untrack as z, createEffect as b, onCleanup as d, on as U, sharedConfig as j, onMount as G, getOwner as O, DEV as K, createRoot as M, mergeProps as J } from "solid-js";
import { isServer as E } from "solid-js/web";
function q(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function Z(t) {
  const e = window.getComputedStyle(t);
  return /(auto|scroll)/.test(e.overflow + e.overflowX + e.overflowY);
}
function B(t) {
  for (; t && !Z(t); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
function D(t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
var i = (t) => typeof t == "function" && !t.length ? t() : t;
function tt(t, ...e) {
  return typeof t == "function" ? t(...e) : t;
}
function A(t) {
  return typeof window < "u" && window.navigator != null ? t.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function et() {
  return A(/^Mac/i);
}
function nt() {
  return A(/^iPhone/i);
}
function ot() {
  return A(/^iPad/i) || et() && navigator.maxTouchPoints > 1;
}
function rt() {
  return nt() || ot();
}
function k(t) {
  return q(t) ? t : void 0;
}
function W(t) {
  const [e, n] = f(t.defaultValue?.()), o = T(() => t.value?.() !== void 0), r = T(() => o() ? t.value?.() : e());
  return [r, (c) => {
    z(() => {
      const m = tt(c, r());
      return Object.is(m, r()) || (o() || n(m), t.onChange?.(m)), m;
    });
  }];
}
function it(t) {
  const [e, n] = W(t);
  return [() => e() ?? !1, n];
}
function Tt(t) {
  const [e, n] = W(t);
  return [() => e() ?? [], n];
}
function bt(t = {}) {
  const [e, n] = it({
    value: () => i(t.isOpen),
    defaultValue: () => !!i(t.defaultIsOpen),
    onChange: (c) => t.onOpenChange?.(c)
  }), o = () => {
    n(!0);
  }, r = () => {
    n(!1);
  };
  return {
    isOpen: e,
    open: o,
    close: r,
    toggle: () => {
      e() ? r() : o();
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
function xt(t, e) {
  const [n, o] = f(!1);
  b(() => {
    if (i(t.isDisabled))
      return;
    const r = (c) => {
      P(c, e()) && (t.onInteractOutsideStart?.(c), o(!0));
    }, l = (c) => {
      n() && P(c, e()) && (o(!1), t.onInteractOutside?.(c));
    };
    document.addEventListener("pointerdown", r, !0), document.addEventListener("pointerup", l, !0), d(() => {
      document.removeEventListener("pointerdown", r, !0), document.removeEventListener("pointerup", l, !0);
    });
  });
}
function P(t, e) {
  if (t.button > 0)
    return !1;
  if (t.target) {
    const n = t.target.ownerDocument;
    if (!n || !n.documentElement.contains(t.target))
      return !1;
  }
  return !e?.contains(t.target);
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */
const S = typeof window < "u" && window.visualViewport, at = /* @__PURE__ */ new Set([
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
function St(t) {
  b(
    U(
      () => i(t.isEnabled),
      (e) => {
        !e || (rt() ? d(st()) : d(ct()));
      }
    )
  );
}
function ct() {
  return D([
    y(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    y(document.documentElement, "overflow", "hidden")
  ]);
}
function st() {
  let t, e = 0;
  const n = (u) => {
    t = B(u.target), !(t === document.documentElement && t === document.body) && (e = u.changedTouches[0].pageY);
  }, o = (u) => {
    if (t === document.documentElement || t === document.body) {
      u.preventDefault();
      return;
    }
    const a = u.changedTouches[0].pageY, s = t.scrollTop, h = t.scrollHeight - t.clientHeight;
    (s <= 0 && a > e || s >= h && a < e) && u.preventDefault(), e = a;
  }, r = (u) => {
    const a = u.target;
    R(a) && a !== document.activeElement && (u.preventDefault(), a.style.transform = "translateY(-2000px)", a.focus(), requestAnimationFrame(() => {
      a.style.transform = "";
    }));
  }, l = (u) => {
    const a = u.target;
    R(a) && (a.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      a.style.transform = "", S && (S.height < window.innerHeight ? requestAnimationFrame(() => {
        N(a);
      }) : S.addEventListener("resize", () => N(a), { once: !0 }));
    }));
  }, c = () => {
    window.scrollTo(0, 0);
  }, m = window.pageXOffset, v = window.pageYOffset, g = D([
    y(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    y(document.documentElement, "overflow", "hidden"),
    y(document.body, "marginTop", `-${v}px`)
  ]);
  window.scrollTo(0, 0);
  const x = D([
    p(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    p(document, "touchmove", o, {
      passive: !1,
      capture: !0
    }),
    p(document, "touchend", r, {
      passive: !1,
      capture: !0
    }),
    p(document, "focus", l, !0),
    p(window, "scroll", c)
  ]);
  return () => {
    g(), x(), window.scrollTo(m, v);
  };
}
function y(t, e, n) {
  const o = t.style[e];
  return t.style[e] = n, () => {
    t.style[e] = o;
  };
}
function p(t, e, n, o) {
  return t.addEventListener(e, n, o), () => {
    t.removeEventListener(e, n, o);
  };
}
function N(t) {
  const e = document.scrollingElement || document.documentElement;
  for (; t && t !== e; ) {
    const n = B(t);
    if (n !== document.documentElement && n !== document.body && n !== t) {
      const o = n.getBoundingClientRect().top, r = t.getBoundingClientRect().top;
      r > o + t.clientHeight && (n.scrollTop += r - o);
    }
    t = n.parentElement;
  }
}
function R(t) {
  return t instanceof HTMLInputElement && !at.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
var ut = !E, lt = ut && !!K, ft = lt ? (t) => O() ? d(t) : t : d;
function mt(t, e, n) {
  if (E)
    return f(t, n);
  if (j.context) {
    const [o, r] = f(t, n);
    return G(() => r(() => e())), [o, r];
  }
  return f(e(), n);
}
function dt(t, e, n, o) {
  return t.addEventListener(e, n, o), ft(t.removeEventListener.bind(t, e, n, o));
}
function gt(t, e = O()) {
  let n = 0, o, r;
  return () => (n++, d(() => {
    n--, queueMicrotask(() => {
      !n && r && (r(), r = o = void 0);
    });
  }), r || M((l) => o = t(r = l), e), o);
}
function pt(t) {
  const e = O(), n = gt(t, e);
  return () => E || j.context ? M(t, e) : n();
}
function $(t, e = !1) {
  if (E)
    return () => e;
  const n = window.matchMedia(t), [o, r] = mt(e, () => n.matches);
  return dt(n, "change", () => r(n.matches)), o;
}
function wt(t) {
  return $("(prefers-color-scheme: dark)", t);
}
wt.bind(void 0, !1);
function yt(t, e) {
  return $("(prefers-reduced-motion: reduce)", t);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function Dt(t, e) {
  const [n, o] = f(k(e?.()));
  return b(() => {
    o(t()?.tagName.toLowerCase() || k(e?.()));
  }), n;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const w = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, Y = {
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
    ...w,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...w,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...w,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...w,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...w,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, Yt = Object.keys(Y);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const H = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function Et(t) {
  const e = {
    "transition-duration": `${t.duration}ms`,
    "transition-timing-function": t.easing
  };
  if (q(t.transition)) {
    if (!(t.transition in Y))
      return {};
    const n = Y[t.transition];
    return {
      "transition-property": V(n),
      ...e,
      ...n.common,
      ...n[H[t.phase]]
    };
  }
  return {
    "transition-property": V(t.transition),
    ...e,
    ...t.transition.common,
    ...t.transition[H[t.phase]]
  };
}
function V(t) {
  return [
    .../* @__PURE__ */ new Set([...Object.keys(t.in), ...Object.keys(t.out)])
  ].join(", ");
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/use-transition.ts
 */
const _ = 250, X = 10, F = "ease";
function Ot(t, e) {
  e = J(
    {
      transition: "fade",
      duration: _,
      delay: X,
      easing: F,
      get exitDuration() {
        return i(e).duration || _;
      },
      get exitDelay() {
        return i(e).delay || X;
      },
      get exitEasing() {
        return i(e).easing || F;
      }
    },
    e
  );
  const n = yt(), [o, r] = f(n() ? 0 : i(e).duration), [l, c] = f(
    i(t) ? "afterEnter" : "afterExit"
  ), [m, v] = f(i(e).easing);
  let g = -1;
  const x = (s) => {
    const h = s ? i(e).onBeforeEnter : i(e).onBeforeExit, I = s ? i(e).onAfterEnter : i(e).onAfterExit;
    c(s ? "beforeEnter" : "beforeExit"), window.clearTimeout(g);
    const L = r(
      n() ? 0 : s ? i(e).duration : i(e).exitDuration
    );
    if (v(s ? i(e).easing : i(e).exitEasing), L === 0) {
      h?.(), I?.(), c(s ? "afterEnter" : "afterExit");
      return;
    }
    const C = n() ? 0 : s ? i(e).delay : i(e).exitDelay, Q = window.setTimeout(() => {
      h?.(), c(s ? "enter" : "exit");
    }, C);
    g = window.setTimeout(() => {
      window.clearTimeout(Q), I?.(), c(s ? "afterEnter" : "afterExit");
    }, C + L);
  }, u = T(
    () => Et({
      transition: i(e).transition,
      duration: o(),
      phase: l(),
      easing: m()
    })
  ), a = T(() => l() !== "afterExit");
  return b(
    U(
      () => i(t),
      (s) => x(s),
      { defer: !0 }
    )
  ), d(() => {
    E || window.clearTimeout(g);
  }), { keepMounted: a, style: u };
}
export {
  Yt as DEFAULT_TRANSITIONS_NAMES,
  Tt as createControllableArraySignal,
  it as createControllableBooleanSignal,
  W as createControllableSignal,
  bt as createDisclosure,
  xt as createInteractOutside,
  St as createPreventScroll,
  yt as createReducedMotion,
  Dt as createTagName,
  Ot as createTransition
};
