import { mergeRefs as gt } from "@solid-primitives/refs";
import { access as ht, accessWith as At, chain as Et } from "@solid-primitives/utils";
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function B(t) {
  return typeof t == "number";
}
function s(t) {
  return Array.isArray(t);
}
function A(t) {
  return s(t) && t.length === 0;
}
function m(t) {
  return typeof t == "function";
}
function f(t) {
  const n = typeof t;
  return t != null && (n === "object" || n === "function") && !s(t);
}
function E(t) {
  return f(t) && Object.keys(t).length === 0;
}
function _(t) {
  return t == null;
}
function S(t) {
  return Object.prototype.toString.call(t) === "[object String]";
}
function k(t) {
  return s(t) ? A(t) : f(t) ? E(t) : t == null || t === "";
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function Y(t) {
  const n = t == null ? 0 : t.length;
  return n ? t[n - 1] : void 0;
}
function q(t) {
  return t == null ? [] : s(t) ? t : [t];
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
function z(t, n) {
  return t ? t === n || t.contains(n) : !1;
}
function G(t) {
  var e, o;
  const n = (e = t.target) != null ? e : t.currentTarget, r = T(n);
  return (o = t.relatedTarget) != null ? o : r;
}
function T(t) {
  var n;
  return (n = a(t)) == null ? void 0 : n.activeElement;
}
function X(t) {
  return a(t).defaultView || window;
}
function a(t) {
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
function Z(t) {
  for (; t && !L(t); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
function D(t) {
  return t.tagName === "IFRAME";
}
function J(t) {
  return t ? "" : void 0;
}
function Q(t) {
  return t ? !0 : void 0;
}
function v(t, n) {
  const r = t.target;
  return t.button > 0 || r && !a(r).body.contains(r) ? !1 : !(n != null && n.contains(r));
}
var P = /* @__PURE__ */ ((t) => (t.ArrowDown = "ArrowDown", t.ArrowUp = "ArrowUp", t.ArrowLeft = "ArrowLeft", t.ArrowRight = "ArrowRight", t.Enter = "Enter", t.Space = " ", t.Tab = "Tab", t.Backspace = "Backspace", t.Control = "Control", t.Meta = "Meta", t.Home = "Home", t.End = "End", t.PageDown = "PageDown", t.PageUp = "PageUp", t.Delete = "Delete", t.Escape = "Escape", t.Shift = "Shift", t))(P || {});
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */
function K(t) {
  if (I())
    t.focus({ preventScroll: !0 });
  else {
    const n = N(t);
    t.focus(), M(n);
  }
}
let l = null;
function I() {
  if (l == null) {
    l = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return l = !0, !0;
        }
      });
    } catch {
    }
  }
  return l;
}
function N(t) {
  let n = t.parentNode;
  const r = [], e = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== e; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) && r.push({
      element: n,
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft
    }), n = n.parentNode;
  return e instanceof HTMLElement && r.push({
    element: e,
    scrollTop: e.scrollTop,
    scrollLeft: e.scrollLeft
  }), r;
}
function M(t) {
  for (const { element: n, scrollTop: r, scrollLeft: e } of t)
    n.scrollTop = r, n.scrollLeft = e;
}
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
function tt() {
}
function nt(t, n) {
  return t && (m(t) ? t(n) : t[0](t[1], n)), n == null ? void 0 : n.defaultPrevented;
}
function et(t, ...n) {
  return m(t) ? t(...n) : t;
}
function rt(t) {
  let n = !1;
  return function(...r) {
    n || (n = !0, t(...r));
  };
}
function O(t, n, r = 1 / 0) {
  return !f(t) && !Array.isArray(t) || !r ? t : Object.entries(t).reduce((e, [o, i]) => (f(i) || s(i) ? Object.entries(O(i, n, r - 1)).forEach(([c, u]) => {
    e[`${o}${n}${c}`] = u;
  }) : e[o] = i, e), {});
}
function ot(t, n) {
  return Object.keys(t).reduce((r, e) => (e.split(n).reduce((o, i, c, u) => (o[i] != null || (o[i] = u.length - 1 === c ? t[e] : {}), o[i]), r), r), {});
}
function it(t, n) {
  return n.split(".").reduce((r, e) => r && r[e], t);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function ct(t, n) {
  const r = {};
  return n.forEach((e) => {
    e in t && (r[e] = t[e]);
  }), r;
}
const ut = (t) => Object.keys(t);
function j(t, n) {
  const r = {};
  return Object.keys(t).forEach((e) => {
    const o = t[e];
    n(o, e, t) && (r[e] = o);
  }), r;
}
function st(t) {
  return j(t, (n) => n != null);
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/cf9ab24f3255be1530d0f584061a01aa1e8180e6/packages/@react-aria/utils/src/platform.ts
 */
function d(t) {
  var n;
  return typeof window > "u" || window.navigator == null ? !1 : ((n = window.navigator.userAgentData) == null ? void 0 : n.brands.some(
    (r) => t.test(r.brand)
  )) || t.test(window.navigator.userAgent);
}
function p(t) {
  var n;
  return typeof window < "u" && window.navigator != null ? t.test(((n = window.navigator.userAgentData) == null ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function g() {
  return p(/^Mac/i);
}
function C() {
  return p(/^iPhone/i);
}
function V() {
  return p(/^iPad/i) || g() && navigator.maxTouchPoints > 1;
}
function x() {
  return C() || V();
}
function lt() {
  return g() || x();
}
function ft() {
  return d(/AppleWebKit/i) && !U();
}
function U() {
  return d(/Chrome/i);
}
function at() {
  return d(/Android/i);
}
function dt(t) {
  return t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();
}
function pt(t) {
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
function H(t, n) {
  const e = Array.from(t.querySelectorAll(w)).filter(b);
  return n && b(t) && e.unshift(t), e.forEach((o, i) => {
    if (D(o) && o.contentDocument) {
      const c = o.contentDocument.body, u = H(c, !1);
      e.splice(i, 1, ...u);
    }
  }), e;
}
function b(t) {
  return R(t) && !W(t);
}
function R(t) {
  return t.matches(w) && h(t);
}
function W(t) {
  return parseInt(t.getAttribute("tabindex") || "0", 10) < 0;
}
function h(t, n) {
  return t.nodeName !== "#comment" && F(t) && $(t, n) && (!t.parentElement || h(t.parentElement, t));
}
function F(t) {
  if (!(t instanceof HTMLElement) && !(t instanceof SVGElement))
    return !1;
  const { display: n, visibility: r } = t.style;
  let e = n !== "none" && r !== "hidden" && r !== "collapse";
  if (e) {
    if (!t.ownerDocument.defaultView)
      return e;
    const { getComputedStyle: o } = t.ownerDocument.defaultView, { display: i, visibility: c } = o(t);
    e = i !== "none" && c !== "hidden" && c !== "collapse";
  }
  return e;
}
function $(t, n) {
  return !t.hasAttribute("hidden") && (t.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
export {
  P as EventKeys,
  ht as access,
  At as accessWith,
  Q as ariaAttr,
  nt as callHandler,
  Et as chain,
  z as contains,
  J as dataAttr,
  it as delve,
  st as filterUndefined,
  O as flatten,
  K as focusWithoutScrolling,
  T as getActiveElement,
  H as getAllTabbableIn,
  Y as getLastItem,
  a as getOwnerDocument,
  G as getRelatedTarget,
  Z as getScrollParent,
  X as getWindow,
  at as isAndroid,
  lt as isAppleDevice,
  s as isArray,
  U as isChrome,
  y as isElement,
  k as isEmpty,
  A as isEmptyArray,
  E as isEmptyObject,
  R as isFocusable,
  D as isFrame,
  m as isFunction,
  x as isIOS,
  V as isIPad,
  C as isIPhone,
  g as isMac,
  _ as isNull,
  B as isNumber,
  f as isObject,
  S as isString,
  b as isTabbable,
  v as isValidEvent,
  ft as isWebKit,
  gt as mergeRefs,
  tt as noop,
  j as objectFilter,
  ut as objectKeys,
  rt as once,
  q as pack,
  ct as pick,
  et as runIfFn,
  pt as stringOrUndefined,
  dt as toKebabCase,
  ot as unflatten
};
