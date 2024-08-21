"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const V=require("@solid-primitives/refs"),b=require("@solid-primitives/utils");/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */function W(t){return typeof t=="number"}function u(t){return Array.isArray(t)}function A(t){return u(t)&&t.length===0}function p(t){return typeof t=="function"}function l(t){const e=typeof t;return t!=null&&(e==="object"||e==="function")&&!u(t)}function h(t){return l(t)&&Object.keys(t).length===0}function R(t){return t==null}function E(t){return Object.prototype.toString.call(t)==="[object String]"}function H(t){return u(t)?A(t):l(t)?h(t):t==null||t===""}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */function x(t){const e=t==null?0:t.length;return e?t[e-1]:void 0}function _(t){return t==null?[]:u(t)?t:[t]}/*!
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
 */function $(t,e){return t?t===e||t.contains(e):!1}function k(t){var n,o;const e=(n=t.target)!=null?n:t.currentTarget,r=y(e);return(o=t.relatedTarget)!=null?o:r}function y(t){var e;return(e=a(t))==null?void 0:e.activeElement}function B(t){return a(t).defaultView||window}function a(t){var e;return S(t)&&(e=t.ownerDocument)!=null?e:document}function S(t){return t!=null&&typeof t=="object"&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE}function q(t){const e=window.getComputedStyle(t);return/(auto|scroll)/.test(e.overflow+e.overflowX+e.overflowY)}function Y(t){for(;t&&!q(t);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}function T(t){return t.tagName==="IFRAME"}function z(t){return t?"":void 0}function G(t){return t?!0:void 0}function X(t,e){const r=t.target;return t.button>0||r&&!a(r).body.contains(r)?!1:!(e!=null&&e.contains(r))}var P=(t=>(t.ArrowDown="ArrowDown",t.ArrowUp="ArrowUp",t.ArrowLeft="ArrowLeft",t.ArrowRight="ArrowRight",t.Enter="Enter",t.Space=" ",t.Tab="Tab",t.Backspace="Backspace",t.Control="Control",t.Meta="Meta",t.Home="Home",t.End="End",t.PageDown="PageDown",t.PageUp="PageUp",t.Delete="Delete",t.Escape="Escape",t.Shift="Shift",t))(P||{});/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */function Z(t){if(J())t.focus({preventScroll:!0});else{const e=Q(t);t.focus(),v(e)}}let f=null;function J(){if(f==null){f=!1;try{document.createElement("div").focus({get preventScroll(){return f=!0,!0}})}catch{}}return f}function Q(t){let e=t.parentNode;const r=[],n=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==n;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&r.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}function v(t){for(const{element:e,scrollTop:r,scrollLeft:n}of t)e.scrollTop=r,e.scrollLeft=n}/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */function K(){}function tt(t,e){return t&&(p(t)?t(e):t[0](t[1],e)),e==null?void 0:e.defaultPrevented}function et(t,...e){return p(t)?t(...e):t}function nt(t){let e=!1;return function(...r){e||(e=!0,t(...r))}}function O(t,e,r=1/0){return!l(t)&&!Array.isArray(t)||!r?t:Object.entries(t).reduce((n,[o,i])=>(l(i)||u(i)?Object.entries(O(i,e,r-1)).forEach(([c,s])=>{n[`${o}${e}${c}`]=s}):n[o]=i,n),{})}function rt(t,e){return Object.keys(t).reduce((r,n)=>(n.split(e).reduce((o,i,c,s)=>(o[i]!=null||(o[i]=s.length-1===c?t[n]:{}),o[i]),r),r),{})}function ot(t,e){return e.split(".").reduce((r,n)=>r&&r[n],t)}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */function it(t,e){const r={};return e.forEach(n=>{n in t&&(r[n]=t[n])}),r}const ct=t=>Object.keys(t);function j(t,e){const r={};return Object.keys(t).forEach(n=>{const o=t[n];e(o,n,t)&&(r[n]=o)}),r}function ut(t){return j(t,e=>e!=null)}/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/cf9ab24f3255be1530d0f584061a01aa1e8180e6/packages/@react-aria/utils/src/platform.ts
 */function g(t){var e;return typeof window>"u"||window.navigator==null?!1:((e=window.navigator.userAgentData)==null?void 0:e.brands.some(r=>t.test(r.brand)))||t.test(window.navigator.userAgent)}function m(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)==null?void 0:e.platform)||window.navigator.platform):!1}function w(){return m(/^Mac/i)}function D(){return m(/^iPhone/i)}function I(){return m(/^iPad/i)||w()&&navigator.maxTouchPoints>1}function L(){return D()||I()}function st(){return w()||L()}function lt(){return g(/AppleWebKit/i)&&!M()}function M(){return g(/Chrome/i)}function ft(){return g(/Android/i)}function at(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}function dt(t){return E(t)?t:void 0}/*!
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
 */const N="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";function C(t,e){const n=Array.from(t.querySelectorAll(N)).filter(d);return e&&d(t)&&n.unshift(t),n.forEach((o,i)=>{if(T(o)&&o.contentDocument){const c=o.contentDocument.body,s=C(c,!1);n.splice(i,1,...s)}}),n}function d(t){return F(t)&&!bt(t)}function F(t){return t.matches(N)&&U(t)}function bt(t){return parseInt(t.getAttribute("tabindex")||"0",10)<0}function U(t,e){return t.nodeName!=="#comment"&&pt(t)&&gt(t,e)&&(!t.parentElement||U(t.parentElement,t))}function pt(t){if(!(t instanceof HTMLElement)&&!(t instanceof SVGElement))return!1;const{display:e,visibility:r}=t.style;let n=e!=="none"&&r!=="hidden"&&r!=="collapse";if(n){if(!t.ownerDocument.defaultView)return n;const{getComputedStyle:o}=t.ownerDocument.defaultView,{display:i,visibility:c}=o(t);n=i!=="none"&&c!=="hidden"&&c!=="collapse"}return n}function gt(t,e){return!t.hasAttribute("hidden")&&(t.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?t.hasAttribute("open"):!0)}Object.defineProperty(exports,"mergeRefs",{enumerable:!0,get:()=>V.mergeRefs});Object.defineProperty(exports,"access",{enumerable:!0,get:()=>b.access});Object.defineProperty(exports,"accessWith",{enumerable:!0,get:()=>b.accessWith});Object.defineProperty(exports,"chain",{enumerable:!0,get:()=>b.chain});exports.EventKeys=P;exports.ariaAttr=G;exports.callHandler=tt;exports.contains=$;exports.dataAttr=z;exports.delve=ot;exports.filterUndefined=ut;exports.flatten=O;exports.focusWithoutScrolling=Z;exports.getActiveElement=y;exports.getAllTabbableIn=C;exports.getLastItem=x;exports.getOwnerDocument=a;exports.getRelatedTarget=k;exports.getScrollParent=Y;exports.getWindow=B;exports.isAndroid=ft;exports.isAppleDevice=st;exports.isArray=u;exports.isChrome=M;exports.isElement=S;exports.isEmpty=H;exports.isEmptyArray=A;exports.isEmptyObject=h;exports.isFocusable=F;exports.isFrame=T;exports.isFunction=p;exports.isIOS=L;exports.isIPad=I;exports.isIPhone=D;exports.isMac=w;exports.isNull=R;exports.isNumber=W;exports.isObject=l;exports.isString=E;exports.isTabbable=d;exports.isValidEvent=X;exports.isWebKit=lt;exports.noop=K;exports.objectFilter=j;exports.objectKeys=ct;exports.once=nt;exports.pack=_;exports.pick=it;exports.runIfFn=et;exports.stringOrUndefined=dt;exports.toKebabCase=at;exports.unflatten=rt;
