import "solid-js";
import "solid-js/web";
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function _(t) {
  return typeof t == "number";
}
function l(t) {
  return Array.isArray(t);
}
function A(t) {
  return l(t) && t.length === 0;
}
function p(t) {
  return typeof t == "function";
}
function f(t) {
  const n = typeof t;
  return t != null && (n === "object" || n === "function") && !l(t);
}
function E(t) {
  return f(t) && Object.keys(t).length === 0;
}
function Y(t) {
  return t == null;
}
function S(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function q(t) {
  return l(t) ? A(t) : f(t) ? E(t) : t == null || t === "";
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function z(t) {
  const n = t == null ? 0 : t.length;
  return n ? t[n - 1] : void 0;
}
function G(t) {
  return t == null ? [] : l(t) ? t : [t];
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
function X(t, n) {
  return t ? t === n || t.contains(n) : !1;
}
function Z(t) {
  var r, o;
  const n = (r = t.target) != null ? r : t.currentTarget, e = T(n);
  return (o = t.relatedTarget) != null ? o : e;
}
function T(t) {
  var n;
  return (n = m(t)) == null ? void 0 : n.activeElement;
}
function J(t) {
  return m(t).defaultView || window;
}
function m(t) {
  var n;
  return y(t) && (n = t.ownerDocument) != null ? n : document;
}
function y(t) {
  return t != null && typeof t == "object" && "nodeType" in t && t.nodeType === Node.ELEMENT_NODE;
}
function L(t) {
  const n = window.getComputedStyle(t);
  return /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
}
function Q(t) {
  for (; t && !L(t); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
function D(t) {
  return t.tagName === "IFRAME";
}
function K(t) {
  return t ? "" : void 0;
}
function v(t) {
  return t ? !0 : void 0;
}
var P = /* @__PURE__ */ ((t) => (t.ArrowDown = "ArrowDown", t.ArrowUp = "ArrowUp", t.ArrowLeft = "ArrowLeft", t.ArrowRight = "ArrowRight", t.Enter = "Enter", t.Space = " ", t.Tab = "Tab", t.Backspace = "Backspace", t.Control = "Control", t.Meta = "Meta", t.Home = "Home", t.End = "End", t.PageDown = "PageDown", t.PageUp = "PageUp", t.Delete = "Delete", t.Escape = "Escape", t.Shift = "Shift", t))(P || {});
function tt(t, n) {
  return (e) => {
    t(e), n == null || n(e);
  };
}
function nt(t) {
  return (...n) => {
    for (const e of t)
      typeof e == "function" && e(...n);
  };
}
var et = (t) => typeof t == "function" && !t.length ? t() : t;
function rt(t, ...n) {
  return typeof t == "function" ? t(...n) : t;
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */
function ot(t) {
  if (I())
    t.focus({ preventScroll: !0 });
  else {
    const n = N(t);
    t.focus(), M(n);
  }
}
let s = null;
function I() {
  if (s == null) {
    s = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return s = !0, !0;
        }
      });
    } catch {
    }
  }
  return s;
}
function N(t) {
  let n = t.parentNode;
  const e = [], r = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== r; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && e.push({
      element: n,
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft
    }), n = n.parentNode;
  return r instanceof HTMLElement && e.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), e;
}
function M(t) {
  for (const { element: n, scrollTop: e, scrollLeft: r } of t)
    n.scrollTop = e, n.scrollLeft = r;
}
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
function it() {
}
function ct(t, n) {
  return t && (p(t) ? t(n) : t[0](t[1], n)), n == null ? void 0 : n.defaultPrevented;
}
function ut(t, ...n) {
  return p(t) ? t(...n) : t;
}
function lt(t) {
  let n = !1;
  return function(...e) {
    n || (n = !0, t(...e));
  };
}
function j(t, n, e = 1 / 0) {
  return !f(t) && !Array.isArray(t) || !e ? t : Object.entries(t).reduce((r, [o, i]) => (f(i) || l(i) ? Object.entries(j(i, n, e - 1)).forEach(([c, u]) => {
    r[`${o}${n}${c}`] = u;
  }) : r[o] = i, r), {});
}
function st(t, n) {
  return Object.keys(t).reduce((e, r) => (r.split(n).reduce((o, i, c, u) => (o[i] != null || (o[i] = u.length - 1 === c ? t[r] : {}), o[i]), e), e), {});
}
function ft(t, n) {
  return n.split(".").reduce((e, r) => e && e[r], t);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function at(t, n) {
  const e = {};
  return n.forEach((r) => {
    r in t && (e[r] = t[r]);
  }), e;
}
const dt = (t) => Object.keys(t);
function C(t, n) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    const o = t[r];
    n(o, r, t) && (e[r] = o);
  }), e;
}
function bt(t) {
  return C(t, (n) => n != null);
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/cf9ab24f3255be1530d0f584061a01aa1e8180e6/packages/@react-aria/utils/src/platform.ts
 */
function a(t) {
  var n;
  return typeof window > "u" || window.navigator == null ? !1 : ((n = window.navigator.userAgentData) == null ? void 0 : n.brands.some(
    (e) => t.test(e.brand)
  )) || t.test(window.navigator.userAgent);
}
function d(t) {
  var n;
  return typeof window < "u" && window.navigator != null ? t.test(((n = window.navigator.userAgentData) == null ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function g() {
  return d(/^Mac/i);
}
function O() {
  return d(/^iPhone/i);
}
function U() {
  return d(/^iPad/i) || g() && navigator.maxTouchPoints > 1;
}
function V() {
  return O() || U();
}
function pt() {
  return g() || V();
}
function mt() {
  return a(/AppleWebKit/i) && !H();
}
function H() {
  return a(/Chrome/i);
}
function gt() {
  return a(/Android/i);
}
function wt(t) {
  return t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();
}
function ht(t) {
  return S(t) ? t : void 0;
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
const w = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function x(t, n) {
  const r = Array.from(t.querySelectorAll(w)).filter(b);
  return n && b(t) && r.unshift(t), r.forEach((o, i) => {
    if (D(o) && o.contentDocument) {
      const c = o.contentDocument.body, u = x(c, !1);
      r.splice(i, 1, ...u);
    }
  }), r;
}
function b(t) {
  return W(t) && !$(t);
}
function W(t) {
  return t.matches(w) && h(t);
}
function $(t) {
  return parseInt(t.getAttribute("tabindex") || "0", 10) < 0;
}
function h(t, n) {
  return t.nodeName !== "#comment" && B(t) && F(t, n) && (!t.parentElement || h(t.parentElement, t));
}
function B(t) {
  if (!(t instanceof HTMLElement) && !(t instanceof SVGElement))
    return !1;
  const { display: n, visibility: e } = t.style;
  let r = n !== "none" && e !== "hidden" && e !== "collapse";
  if (r) {
    if (!t.ownerDocument.defaultView)
      return r;
    const { getComputedStyle: o } = t.ownerDocument.defaultView, { display: i, visibility: c } = o(t);
    r = i !== "none" && c !== "hidden" && c !== "collapse";
  }
  return r;
}
function F(t, n) {
  return !t.hasAttribute("hidden") && (t.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
export {
  P as EventKeys,
  et as access,
  rt as accessWith,
  v as ariaAttr,
  ct as callHandler,
  nt as chain,
  X as contains,
  K as dataAttr,
  ft as delve,
  bt as filterUndefined,
  j as flatten,
  ot as focusWithoutScrolling,
  T as getActiveElement,
  x as getAllTabbableIn,
  z as getLastItem,
  m as getOwnerDocument,
  Z as getRelatedTarget,
  Q as getScrollParent,
  J as getWindow,
  gt as isAndroid,
  pt as isAppleDevice,
  l as isArray,
  H as isChrome,
  y as isElement,
  q as isEmpty,
  A as isEmptyArray,
  E as isEmptyObject,
  W as isFocusable,
  D as isFrame,
  p as isFunction,
  V as isIOS,
  U as isIPad,
  O as isIPhone,
  g as isMac,
  Y as isNull,
  _ as isNumber,
  f as isObject,
  S as isString,
  b as isTabbable,
  mt as isWebKit,
  tt as mergeRefs,
  it as noop,
  C as objectFilter,
  dt as objectKeys,
  lt as once,
  G as pack,
  at as pick,
  ut as runIfFn,
  ht as stringOrUndefined,
  wt as toKebabCase,
  st as unflatten
};
