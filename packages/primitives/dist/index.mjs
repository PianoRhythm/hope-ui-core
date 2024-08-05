import { createSignal as d, createMemo as x, untrack as z, createEffect as S, onCleanup as E, on as j, sharedConfig as M, onMount as G, getOwner as A, DEV as K, createRoot as q, mergeProps as J } from "solid-js";
import { isServer as b } from "solid-js/web";
function B(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function Z(t) {
  const e = window.getComputedStyle(t);
  return /(auto|scroll)/.test(e.overflow + e.overflowX + e.overflowY);
}
function W(t) {
  for (; t && !Z(t); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
function p(t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
var i = (t) => typeof t == "function" && !t.length ? t() : t;
function tt(t, ...e) {
  return typeof t == "function" ? t(...e) : t;
}
function I(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) == null ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function et() {
  return I(/^Mac/i);
}
function nt() {
  return I(/^iPhone/i);
}
function ot() {
  return I(/^iPad/i) || et() && navigator.maxTouchPoints > 1;
}
function rt() {
  return nt() || ot();
}
function k(t) {
  return B(t) ? t : void 0;
}
function H(t) {
  var c;
  const [e, n] = d((c = t.defaultValue) == null ? void 0 : c.call(t)), r = x(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.call(t)) !== void 0;
  }), o = x(() => {
    var a;
    return r() ? (a = t.value) == null ? void 0 : a.call(t) : e();
  });
  return [o, (a) => {
    z(() => {
      var g;
      const m = tt(a, o());
      return Object.is(m, o()) || (r() || n(m), (g = t.onChange) == null || g.call(t, m)), m;
    });
  }];
}
function it(t) {
  const [e, n] = H(t);
  return [() => {
    var o;
    return (o = e()) != null ? o : !1;
  }, n];
}
function bt(t) {
  const [e, n] = H(t);
  return [() => {
    var o;
    return (o = e()) != null ? o : [];
  }, n];
}
function xt(t = {}) {
  const [e, n] = it({
    value: () => i(t.isOpen),
    defaultValue: () => !!i(t.defaultIsOpen),
    onChange: (c) => {
      var a;
      return (a = t.onOpenChange) == null ? void 0 : a.call(t, c);
    }
  }), r = () => {
    n(!0);
  }, o = () => {
    n(!1);
  };
  return {
    isOpen: e,
    open: r,
    close: o,
    toggle: () => {
      e() ? o() : r();
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
function St(t, e) {
  const [n, r] = d(!1);
  S(() => {
    if (i(t.isDisabled))
      return;
    const o = (c) => {
      var a;
      P(c, e()) && ((a = t.onInteractOutsideStart) == null || a.call(t, c), r(!0));
    }, f = (c) => {
      var a;
      n() && P(c, e()) && (r(!1), (a = t.onInteractOutside) == null || a.call(t, c));
    };
    document.addEventListener("pointerdown", o, !0), document.addEventListener("pointerup", f, !0), E(() => {
      document.removeEventListener("pointerdown", o, !0), document.removeEventListener("pointerup", f, !0);
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
  return !(e != null && e.contains(t.target));
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */
const Y = typeof window < "u" && window.visualViewport, at = /* @__PURE__ */ new Set([
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
function Dt(t) {
  S(
    j(
      () => i(t.isEnabled),
      (e) => {
        !e || (rt() ? E(st()) : E(ct()));
      }
    )
  );
}
function ct() {
  return p([
    T(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    T(document.documentElement, "overflow", "hidden")
  ]);
}
function st() {
  let t, e = 0;
  const n = (l) => {
    t = W(l.target), !(t === document.documentElement && t === document.body) && (e = l.changedTouches[0].pageY);
  }, r = (l) => {
    if (t === document.documentElement || t === document.body) {
      l.preventDefault();
      return;
    }
    const s = l.changedTouches[0].pageY, u = t.scrollTop, w = t.scrollHeight - t.clientHeight;
    (u <= 0 && s > e || u >= w && s < e) && l.preventDefault(), e = s;
  }, o = (l) => {
    const s = l.target;
    R(s) && s !== document.activeElement && (l.preventDefault(), s.style.transform = "translateY(-2000px)", s.focus(), requestAnimationFrame(() => {
      s.style.transform = "";
    }));
  }, f = (l) => {
    const s = l.target;
    R(s) && (s.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      s.style.transform = "", Y && (Y.height < window.innerHeight ? requestAnimationFrame(() => {
        N(s);
      }) : Y.addEventListener("resize", () => N(s), { once: !0 }));
    }));
  }, c = () => {
    window.scrollTo(0, 0);
  }, a = window.pageXOffset, m = window.pageYOffset, g = p([
    T(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    T(document.documentElement, "overflow", "hidden"),
    T(document.body, "marginTop", `-${m}px`)
  ]);
  window.scrollTo(0, 0);
  const D = p([
    v(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    v(document, "touchmove", r, {
      passive: !1,
      capture: !0
    }),
    v(document, "touchend", o, {
      passive: !1,
      capture: !0
    }),
    v(document, "focus", f, !0),
    v(window, "scroll", c)
  ]);
  return () => {
    g(), D(), window.scrollTo(a, m);
  };
}
function T(t, e, n) {
  const r = t.style[e];
  return t.style[e] = n, () => {
    t.style[e] = r;
  };
}
function v(t, e, n, r) {
  return t.addEventListener(e, n, r), () => {
    t.removeEventListener(e, n, r);
  };
}
function N(t) {
  const e = document.scrollingElement || document.documentElement;
  for (; t && t !== e; ) {
    const n = W(t);
    if (n !== document.documentElement && n !== document.body && n !== t) {
      const r = n.getBoundingClientRect().top, o = t.getBoundingClientRect().top;
      o > r + t.clientHeight && (n.scrollTop += o - r);
    }
    t = n.parentElement;
  }
}
function R(t) {
  return t instanceof HTMLInputElement && !at.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
var ut = !b, lt = ut && !!K, ft = lt ? (t) => A() ? E(t) : t : E;
function mt(t, e, n) {
  if (b)
    return d(t, n);
  if (M.context) {
    const [r, o] = d(t, n);
    return G(() => o(() => e())), [r, o];
  }
  return d(e(), n);
}
function dt(t, e, n, r) {
  return t.addEventListener(e, n, r), ft(t.removeEventListener.bind(t, e, n, r));
}
function gt(t, e = A()) {
  let n = 0, r, o;
  return () => (n++, E(() => {
    n--, queueMicrotask(() => {
      !n && o && (o(), o = r = void 0);
    });
  }), o || q((f) => r = t(o = f), e), r);
}
function wt(t) {
  const e = A(), n = gt(t, e);
  return () => b || M.context ? q(t, e) : n();
}
function $(t, e = !1) {
  if (b)
    return () => e;
  const n = window.matchMedia(t), [r, o] = mt(e, () => n.matches);
  return dt(n, "change", () => o(n.matches)), r;
}
function Et(t) {
  return $("(prefers-color-scheme: dark)", t);
}
Et.bind(void 0, !1);
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
function Yt(t, e) {
  const [n, r] = d(k(e == null ? void 0 : e()));
  return S(() => {
    var o;
    r(((o = t()) == null ? void 0 : o.tagName.toLowerCase()) || k(e == null ? void 0 : e()));
  }), n;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const h = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, O = {
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
    ...h,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...h,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...h,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...h,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...h,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, pt = Object.keys(O);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const V = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function vt(t) {
  const e = {
    "transition-duration": `${t.duration}ms`,
    "transition-timing-function": t.easing
  };
  if (B(t.transition)) {
    if (!(t.transition in O))
      return {};
    const n = O[t.transition];
    return {
      "transition-property": _(n),
      ...e,
      ...n.common,
      ...n[V[t.phase]]
    };
  }
  return {
    "transition-property": _(t.transition),
    ...e,
    ...t.transition.common,
    ...t.transition[V[t.phase]]
  };
}
function _(t) {
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
const X = 250, F = 10, U = "ease";
function Ot(t, e) {
  e = J(
    {
      transition: "fade",
      duration: X,
      delay: F,
      easing: U,
      get exitDuration() {
        return i(e).duration || X;
      },
      get exitDelay() {
        return i(e).delay || F;
      },
      get exitEasing() {
        return i(e).easing || U;
      }
    },
    e
  );
  const n = yt(), [r, o] = d(n() ? 0 : i(e).duration), [f, c] = d(
    i(t) ? "afterEnter" : "afterExit"
  ), [a, m] = d(i(e).easing);
  let g = -1;
  const D = (u) => {
    const w = u ? i(e).onBeforeEnter : i(e).onBeforeExit, y = u ? i(e).onAfterEnter : i(e).onAfterExit;
    c(u ? "beforeEnter" : "beforeExit"), window.clearTimeout(g);
    const L = o(
      n() ? 0 : u ? i(e).duration : i(e).exitDuration
    );
    if (m(u ? i(e).easing : i(e).exitEasing), L === 0) {
      w == null || w(), y == null || y(), c(u ? "afterEnter" : "afterExit");
      return;
    }
    const C = n() ? 0 : u ? i(e).delay : i(e).exitDelay, Q = window.setTimeout(() => {
      w == null || w(), c(u ? "enter" : "exit");
    }, C);
    g = window.setTimeout(() => {
      window.clearTimeout(Q), y == null || y(), c(u ? "afterEnter" : "afterExit");
    }, C + L);
  }, l = x(
    () => vt({
      transition: i(e).transition,
      duration: r(),
      phase: f(),
      easing: a()
    })
  ), s = x(() => f() !== "afterExit");
  return S(
    j(
      () => i(t),
      (u) => D(u),
      { defer: !0 }
    )
  ), E(() => {
    b || window.clearTimeout(g);
  }), { keepMounted: s, style: l };
}
export {
  pt as DEFAULT_TRANSITIONS_NAMES,
  bt as createControllableArraySignal,
  it as createControllableBooleanSignal,
  H as createControllableSignal,
  xt as createDisclosure,
  St as createInteractOutside,
  Dt as createPreventScroll,
  yt as createReducedMotion,
  Yt as createTagName,
  Ot as createTransition
};
