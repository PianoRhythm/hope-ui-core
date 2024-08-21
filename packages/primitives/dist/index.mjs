import { createSignal as v, createMemo as S, untrack as $, createEffect as x, onCleanup as y, on as F, mergeProps as H, onMount as z } from "solid-js";
import { isServer as G } from "solid-js/web";
import { createMediaQuery as K } from "@solid-primitives/media";
import { createStore as Z } from "solid-js/store";
function Y(t) {
  return (...e) => {
    for (const n of t)
      n && n(...e);
  };
}
var u = (t) => typeof t == "function" && !t.length ? t() : t;
function J(t, ...e) {
  return typeof t == "function" ? t(...e) : t;
}
function W(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function A(t) {
  var e;
  return p(t) && (e = t.ownerDocument) != null ? e : document;
}
function p(t) {
  return t != null && typeof t == "object" && "nodeType" in t && t.nodeType === Node.ELEMENT_NODE;
}
function tt(t) {
  const e = window.getComputedStyle(t);
  return /(auto|scroll)/.test(e.overflow + e.overflowX + e.overflowY);
}
function B(t) {
  for (; t && !tt(t); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
function D(t, e) {
  const n = t.target;
  return t.button > 0 || n && !A(n).body.contains(n) ? !1 : !(e != null && e.contains(n));
}
function N(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) == null ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function et() {
  return N(/^Mac/i);
}
function nt() {
  return N(/^iPhone/i);
}
function ot() {
  return N(/^iPad/i) || et() && navigator.maxTouchPoints > 1;
}
function rt() {
  return nt() || ot();
}
function C(t) {
  return W(t) ? t : void 0;
}
function Q(t) {
  var r;
  const [e, n] = v((r = t.defaultValue) == null ? void 0 : r.call(t)), i = S(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.call(t)) !== void 0;
  }), a = S(() => {
    var o;
    return i() ? (o = t.value) == null ? void 0 : o.call(t) : e();
  });
  return [a, (o) => {
    $(() => {
      var m;
      const c = J(o, a());
      return Object.is(c, a()) || (i() || n(c), (m = t.onChange) == null || m.call(t, c)), c;
    });
  }];
}
function it(t) {
  const [e, n] = Q(t);
  return [() => {
    var a;
    return (a = e()) != null ? a : !1;
  }, n];
}
function Et(t) {
  const [e, n] = Q(t);
  return [() => {
    var a;
    return (a = e()) != null ? a : [];
  }, n];
}
function wt(t = {}) {
  const [e, n] = it({
    value: () => u(t.isOpen),
    defaultValue: () => !!u(t.defaultIsOpen),
    onChange: (r) => {
      var o;
      return (o = t.onOpenChange) == null ? void 0 : o.call(t, r);
    }
  }), i = () => {
    n(!0);
  }, a = () => {
    n(!1);
  };
  return {
    isOpen: e,
    open: i,
    close: a,
    toggle: () => {
      e() ? a() : i();
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
function vt(t, e) {
  const [n, i] = v(!1);
  x(() => {
    if (u(t.isDisabled))
      return;
    const a = (r) => {
      var o;
      _(r, e()) && ((o = t.onInteractOutsideStart) == null || o.call(t, r), i(!0));
    }, s = (r) => {
      var o;
      n() && _(r, e()) && (i(!1), (o = t.onInteractOutside) == null || o.call(t, r));
    };
    document.addEventListener("pointerdown", a, !0), document.addEventListener("pointerup", s, !0), y(() => {
      document.removeEventListener("pointerdown", a, !0), document.removeEventListener("pointerup", s, !0);
    });
  });
}
function _(t, e) {
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
const L = typeof window < "u" && window.visualViewport, at = /* @__PURE__ */ new Set([
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
function yt(t) {
  x(
    F(
      () => u(t.isEnabled),
      (e) => {
        !e || (rt() ? y(st()) : y(ct()));
      }
    )
  );
}
function ct() {
  return Y([
    b(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    b(document.documentElement, "overflow", "hidden")
  ]);
}
function st() {
  let t, e = 0;
  const n = (f) => {
    t = B(f.target), !(t === document.documentElement && t === document.body) && (e = f.changedTouches[0].pageY);
  }, i = (f) => {
    if (t === document.documentElement || t === document.body) {
      f.preventDefault();
      return;
    }
    const l = f.changedTouches[0].pageY, d = t.scrollTop, E = t.scrollHeight - t.clientHeight;
    (d <= 0 && l > e || d >= E && l < e) && f.preventDefault(), e = l;
  }, a = (f) => {
    const l = f.target;
    k(l) && l !== document.activeElement && (f.preventDefault(), l.style.transform = "translateY(-2000px)", l.focus(), requestAnimationFrame(() => {
      l.style.transform = "";
    }));
  }, s = (f) => {
    const l = f.target;
    k(l) && (l.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      l.style.transform = "", L && (L.height < window.innerHeight ? requestAnimationFrame(() => {
        V(l);
      }) : L.addEventListener("resize", () => V(l), { once: !0 }));
    }));
  }, r = () => {
    window.scrollTo(0, 0);
  }, o = window.pageXOffset, c = window.pageYOffset, m = Y([
    b(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    b(document.documentElement, "overflow", "hidden"),
    b(document.body, "marginTop", `-${c}px`)
  ]);
  window.scrollTo(0, 0);
  const g = Y([
    h(document, "touchstart", n, {
      passive: !1,
      capture: !0
    }),
    h(document, "touchmove", i, {
      passive: !1,
      capture: !0
    }),
    h(document, "touchend", a, {
      passive: !1,
      capture: !0
    }),
    h(document, "focus", s, !0),
    h(window, "scroll", r)
  ]);
  return () => {
    m(), g(), window.scrollTo(o, c);
  };
}
function b(t, e, n) {
  const i = t.style[e];
  return t.style[e] = n, () => {
    t.style[e] = i;
  };
}
function h(t, e, n, i) {
  return t.addEventListener(e, n, i), () => {
    t.removeEventListener(e, n, i);
  };
}
function V(t) {
  const e = document.scrollingElement || document.documentElement;
  for (; t && t !== e; ) {
    const n = B(t);
    if (n !== document.documentElement && n !== document.body && n !== t) {
      const i = n.getBoundingClientRect().top, a = t.getBoundingClientRect().top;
      a > i + t.clientHeight && (n.scrollTop += a - i);
    }
    t = n.parentElement;
  }
}
function k(t) {
  return t instanceof HTMLInputElement && !at.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
function ut(t, e) {
  return K("(prefers-reduced-motion: reduce)", t, e);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function ht(t, e) {
  const [n, i] = v(C(e == null ? void 0 : e()));
  return x(() => {
    var a;
    i(((a = t()) == null ? void 0 : a.tagName.toLowerCase()) || C(e == null ? void 0 : e()));
  }), n;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const T = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, I = {
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
    ...T,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...T,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...T,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...T,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...T,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
}, Tt = Object.keys(I);
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const M = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function lt(t) {
  const e = {
    "transition-duration": `${t.duration}ms`,
    "transition-timing-function": t.easing
  };
  if (W(t.transition)) {
    if (!(t.transition in I))
      return {};
    const n = I[t.transition];
    return {
      "transition-property": R(n),
      ...e,
      ...n.common,
      ...n[M[t.phase]]
    };
  }
  return {
    "transition-property": R(t.transition),
    ...e,
    ...t.transition.common,
    ...t.transition[M[t.phase]]
  };
}
function R(t) {
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
const X = 250, j = 10, U = "ease";
function bt(t, e) {
  e = H(
    {
      transition: "fade",
      duration: X,
      delay: j,
      easing: U,
      get exitDuration() {
        return u(e).duration || X;
      },
      get exitDelay() {
        return u(e).delay || j;
      },
      get exitEasing() {
        return u(e).easing || U;
      }
    },
    e
  );
  const n = ut(), [i, a] = v(n() ? 0 : u(e).duration), [s, r] = v(
    u(t) ? "afterEnter" : "afterExit"
  ), [o, c] = v(u(e).easing);
  let m = -1;
  const g = (d) => {
    const E = d ? u(e).onBeforeEnter : u(e).onBeforeExit, w = d ? u(e).onAfterEnter : u(e).onAfterExit;
    r(d ? "beforeEnter" : "beforeExit"), window.clearTimeout(m);
    const O = a(
      n() ? 0 : d ? u(e).duration : u(e).exitDuration
    );
    if (c(d ? u(e).easing : u(e).exitEasing), O === 0) {
      E == null || E(), w == null || w(), r(d ? "afterEnter" : "afterExit");
      return;
    }
    const P = n() ? 0 : d ? u(e).delay : u(e).exitDelay, q = window.setTimeout(() => {
      E == null || E(), r(d ? "enter" : "exit");
    }, P);
    m = window.setTimeout(() => {
      window.clearTimeout(q), w == null || w(), r(d ? "afterEnter" : "afterExit");
    }, P + O);
  }, f = S(
    () => lt({
      transition: u(e).transition,
      duration: i(),
      phase: s(),
      easing: o()
    })
  ), l = S(() => s() !== "afterExit");
  return x(
    F(
      () => u(t),
      (d) => g(d),
      { defer: !0 }
    )
  ), y(() => {
    G || window.clearTimeout(m);
  }), { keepMounted: l, style: f };
}
function xt(t) {
  var g, f, l, d;
  const [e, n] = v(
    (f = (g = t.initialValues) == null ? void 0 : g.slice(0, t.limit)) != null ? f : []
  ), [i, a] = v((d = (l = t.initialValues) == null ? void 0 : l.slice(t.limit)) != null ? d : []), s = () => t.limit;
  return {
    state: {
      current: e,
      queue: i,
      limit: s
    },
    add: (...E) => {
      const w = [...e(), ...i(), ...E];
      n(w.slice(0, s())), a(w.slice(s()));
    },
    update: (E) => {
      const w = E([...e(), ...i()]);
      n(w.slice(0, s())), a(w.slice(s()));
    },
    clearQueue: () => {
      a([]);
    }
  };
}
function St(t) {
  const [e, n] = Z({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), i = (r) => {
    D(r, t.element()) && n("isPointerDown", !0);
  }, a = (r) => {
    if (e.ignoreEmulatedMouseEvents) {
      n("ignoreEmulatedMouseEvents", !1);
      return;
    }
    e.isPointerDown && t.handler && D(r, t.element()) && (n("isPointerDown", !1), t.handler(r));
  }, s = (r) => {
    n("ignoreEmulatedMouseEvents", !0), t.handler && e.isPointerDown && D(r, t.element()) && (n("isPointerDown", !1), t.handler(r));
  };
  z(() => {
    const r = A(t.element());
    r.addEventListener("mousedown", i, !0), r.addEventListener("mouseup", a, !0), r.addEventListener("touchstart", i, !0), r.addEventListener("touchend", s, !0);
  }), y(() => {
    const r = A(t.element());
    r.removeEventListener("mousedown", i, !0), r.removeEventListener("mouseup", a, !0), r.removeEventListener("touchstart", i, !0), r.removeEventListener("touchend", s, !0);
  });
}
function Dt(t) {
  let e = !1;
  const n = (o) => {
    var m;
    const { once: c } = t;
    c && e || (e = !0, (m = t.handler) == null || m.call(t, o));
  }, i = (o, c, m, g) => {
    c && o && o.addEventListener && o.addEventListener(c, n, {
      capture: m,
      passive: g
    });
  }, a = () => {
    const { element: o, eventName: c, capture: m, passive: g } = t;
    i(o, c, m, g);
  }, s = (o, c) => {
    c && o && o.removeEventListener && o.removeEventListener(c, n);
  }, r = () => {
    const { element: o, eventName: c } = t;
    s(o, c);
  };
  return x((o) => {
    const { element: c, eventName: m, capture: g, passive: f } = t;
    return o && s(o.element, o.eventName), i(c, m, g, f), {
      element: c,
      eventName: m
    };
  }), y(() => {
    const { element: o, eventName: c } = t;
    s(o, c);
  }), {
    active: a,
    inactive: r
  };
}
export {
  Tt as DEFAULT_TRANSITIONS_NAMES,
  Et as createControllableArraySignal,
  it as createControllableBooleanSignal,
  Q as createControllableSignal,
  wt as createDisclosure,
  vt as createInteractOutside,
  yt as createPreventScroll,
  xt as createQueue,
  ut as createReducedMotion,
  ht as createTagName,
  bt as createTransition,
  St as useClickOutside,
  Dt as useEvent
};
