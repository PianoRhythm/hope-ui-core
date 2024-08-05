"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});require("solid-js");require("solid-js/web");/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */function W(t){return typeof t=="number"}function u(t){return Array.isArray(t)}function w(t){return u(t)&&t.length===0}function d(t){return typeof t=="function"}function l(t){const n=typeof t;return t!=null&&(n==="object"||n==="function")&&!u(t)}function A(t){return l(t)&&Object.keys(t).length===0}function R(t){return t==null}function h(t){return Object.prototype.toString.call(t)==="[object String]"}function F(t){return u(t)?w(t):l(t)?A(t):t==null||t===""}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */function H(t){const n=t==null?0:t.length;return n?t[n-1]:void 0}function V(t){return t==null?[]:u(t)?t:[t]}/*!
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
 */function x(t,n){return t?t===n||t.contains(n):!1}function k(t){const n=t.target??t.currentTarget,e=E(n);return t.relatedTarget??e}function E(t){return b(t)?.activeElement}function _(t){return b(t).defaultView||window}function b(t){return S(t)?t.ownerDocument??document:document}function S(t){return t!=null&&typeof t=="object"&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE}function $(t){const n=window.getComputedStyle(t);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function B(t){for(;t&&!$(t);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}function y(t){return t.tagName==="IFRAME"}function q(t){return t?"":void 0}function Y(t){return t?!0:void 0}var T=(t=>(t.ArrowDown="ArrowDown",t.ArrowUp="ArrowUp",t.ArrowLeft="ArrowLeft",t.ArrowRight="ArrowRight",t.Enter="Enter",t.Space=" ",t.Tab="Tab",t.Backspace="Backspace",t.Control="Control",t.Meta="Meta",t.Home="Home",t.End="End",t.PageDown="PageDown",t.PageUp="PageUp",t.Delete="Delete",t.Escape="Escape",t.Shift="Shift",t))(T||{});function z(t,n){return e=>{t(e),n?.(e)}}function G(t){return(...n)=>{for(const e of t)typeof e=="function"&&e(...n)}}var X=t=>typeof t=="function"&&!t.length?t():t;function Z(t,...n){return typeof t=="function"?t(...n):t}/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */function J(t){if(Q())t.focus({preventScroll:!0});else{const n=v(t);t.focus(),K(n)}}let f=null;function Q(){if(f==null){f=!1;try{document.createElement("div").focus({get preventScroll(){return f=!0,!0}})}catch{}}return f}function v(t){let n=t.parentNode;const e=[],r=document.scrollingElement||document.documentElement;for(;n instanceof HTMLElement&&n!==r;)(n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth)&&e.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),n=n.parentNode;return r instanceof HTMLElement&&e.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),e}function K(t){for(const{element:n,scrollTop:e,scrollLeft:r}of t)n.scrollTop=e,n.scrollLeft=r}/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */function tt(){}function nt(t,n){return t&&(d(t)?t(n):t[0](t[1],n)),n?.defaultPrevented}function et(t,...n){return d(t)?t(...n):t}function rt(t){let n=!1;return function(...e){n||(n=!0,t(...e))}}function P(t,n,e=1/0){return!l(t)&&!Array.isArray(t)||!e?t:Object.entries(t).reduce((r,[o,i])=>(l(i)||u(i)?Object.entries(P(i,n,e-1)).forEach(([c,s])=>{r[`${o}${n}${c}`]=s}):r[o]=i,r),{})}function ot(t,n){return Object.keys(t).reduce((e,r)=>(r.split(n).reduce((o,i,c,s)=>(o[i]!=null||(o[i]=s.length-1===c?t[r]:{}),o[i]),e),e),{})}function it(t,n){return n.split(".").reduce((e,r)=>e&&e[r],t)}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */function ct(t,n){const e={};return n.forEach(r=>{r in t&&(e[r]=t[r])}),e}const ut=t=>Object.keys(t);function D(t,n){const e={};return Object.keys(t).forEach(r=>{const o=t[r];n(o,r,t)&&(e[r]=o)}),e}function st(t){return D(t,n=>n!=null)}/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/cf9ab24f3255be1530d0f584061a01aa1e8180e6/packages/@react-aria/utils/src/platform.ts
 */function p(t){return typeof window>"u"||window.navigator==null?!1:window.navigator.userAgentData?.brands.some(n=>t.test(n.brand))||t.test(window.navigator.userAgent)}function m(t){return typeof window<"u"&&window.navigator!=null?t.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function g(){return m(/^Mac/i)}function I(){return m(/^iPhone/i)}function L(){return m(/^iPad/i)||g()&&navigator.maxTouchPoints>1}function j(){return I()||L()}function lt(){return g()||j()}function ft(){return p(/AppleWebKit/i)&&!O()}function O(){return p(/Chrome/i)}function at(){return p(/Android/i)}function dt(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}function bt(t){return h(t)?t:void 0}/*!
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
 */const M="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";function N(t,n){const r=Array.from(t.querySelectorAll(M)).filter(a);return n&&a(t)&&r.unshift(t),r.forEach((o,i)=>{if(y(o)&&o.contentDocument){const c=o.contentDocument.body,s=N(c,!1);r.splice(i,1,...s)}}),r}function a(t){return C(t)&&!pt(t)}function C(t){return t.matches(M)&&U(t)}function pt(t){return parseInt(t.getAttribute("tabindex")||"0",10)<0}function U(t,n){return t.nodeName!=="#comment"&&mt(t)&&gt(t,n)&&(!t.parentElement||U(t.parentElement,t))}function mt(t){if(!(t instanceof HTMLElement)&&!(t instanceof SVGElement))return!1;const{display:n,visibility:e}=t.style;let r=n!=="none"&&e!=="hidden"&&e!=="collapse";if(r){if(!t.ownerDocument.defaultView)return r;const{getComputedStyle:o}=t.ownerDocument.defaultView,{display:i,visibility:c}=o(t);r=i!=="none"&&c!=="hidden"&&c!=="collapse"}return r}function gt(t,n){return!t.hasAttribute("hidden")&&(t.nodeName==="DETAILS"&&n&&n.nodeName!=="SUMMARY"?t.hasAttribute("open"):!0)}exports.EventKeys=T;exports.access=X;exports.accessWith=Z;exports.ariaAttr=Y;exports.callHandler=nt;exports.chain=G;exports.contains=x;exports.dataAttr=q;exports.delve=it;exports.filterUndefined=st;exports.flatten=P;exports.focusWithoutScrolling=J;exports.getActiveElement=E;exports.getAllTabbableIn=N;exports.getLastItem=H;exports.getOwnerDocument=b;exports.getRelatedTarget=k;exports.getScrollParent=B;exports.getWindow=_;exports.isAndroid=at;exports.isAppleDevice=lt;exports.isArray=u;exports.isChrome=O;exports.isElement=S;exports.isEmpty=F;exports.isEmptyArray=w;exports.isEmptyObject=A;exports.isFocusable=C;exports.isFrame=y;exports.isFunction=d;exports.isIOS=j;exports.isIPad=L;exports.isIPhone=I;exports.isMac=g;exports.isNull=R;exports.isNumber=W;exports.isObject=l;exports.isString=h;exports.isTabbable=a;exports.isWebKit=ft;exports.mergeRefs=z;exports.noop=tt;exports.objectFilter=D;exports.objectKeys=ut;exports.once=rt;exports.pack=V;exports.pick=ct;exports.runIfFn=et;exports.stringOrUndefined=bt;exports.toKebabCase=dt;exports.unflatten=ot;
