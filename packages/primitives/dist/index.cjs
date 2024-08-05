"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("solid-js"),T=require("solid-js/web");function V(t){return Object.prototype.toString.call(t)==="[object String]"}function B(t){const e=window.getComputedStyle(t);return/(auto|scroll)/.test(e.overflow+e.overflowX+e.overflowY)}function j(t){for(;t&&!B(t);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}function x(t){return(...e)=>{for(const n of t)typeof n=="function"&&n(...e)}}var i=t=>typeof t=="function"&&!t.length?t():t;function W(t,...e){return typeof t=="function"?t(...e):t}function D(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)==null?void 0:e.platform)||window.navigator.platform):!1}function H(){return D(/^Mac/i)}function $(){return D(/^iPhone/i)}function Q(){return D(/^iPad/i)||H()&&navigator.maxTouchPoints>1}function z(){return $()||Q()}function Y(t){return V(t)?t:void 0}function O(t){var s;const[e,n]=o.createSignal((s=t.defaultValue)==null?void 0:s.call(t)),a=o.createMemo(()=>{var c;return((c=t.value)==null?void 0:c.call(t))!==void 0}),r=o.createMemo(()=>{var c;return a()?(c=t.value)==null?void 0:c.call(t):e()});return[r,c=>{o.untrack(()=>{var g;const d=W(c,r());return Object.is(d,r())||(a()||n(d),(g=t.onChange)==null||g.call(t,d)),d})}]}function F(t){const[e,n]=O(t);return[()=>{var r;return(r=e())!=null?r:!1},n]}function G(t){const[e,n]=O(t);return[()=>{var r;return(r=e())!=null?r:[]},n]}function J(t={}){const[e,n]=F({value:()=>i(t.isOpen),defaultValue:()=>!!i(t.defaultIsOpen),onChange:s=>{var c;return(c=t.onOpenChange)==null?void 0:c.call(t,s)}}),a=()=>{n(!0)},r=()=>{n(!1)};return{isOpen:e,open:a,close:r,toggle:()=>{e()?r():a()}}}/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useInteractOutside.ts
 */function K(t,e){const[n,a]=o.createSignal(!1);o.createEffect(()=>{if(i(t.isDisabled))return;const r=s=>{var c;I(s,e())&&((c=t.onInteractOutsideStart)==null||c.call(t,s),a(!0))},m=s=>{var c;n()&&I(s,e())&&(a(!1),(c=t.onInteractOutside)==null||c.call(t,s))};document.addEventListener("pointerdown",r,!0),document.addEventListener("pointerup",m,!0),o.onCleanup(()=>{document.removeEventListener("pointerdown",r,!0),document.removeEventListener("pointerup",m,!0)})})}function I(t,e){if(t.button>0)return!1;if(t.target){const n=t.target.ownerDocument;if(!n||!n.documentElement.contains(t.target))return!1}return!(e!=null&&e.contains(t.target))}/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */const h=typeof window<"u"&&window.visualViewport,Z=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function tt(t){o.createEffect(o.on(()=>i(t.isEnabled),e=>{!e||(z()?o.onCleanup(nt()):o.onCleanup(et()))}))}function et(){return x([S(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),S(document.documentElement,"overflow","hidden")])}function nt(){let t,e=0;const n=f=>{t=j(f.target),!(t===document.documentElement&&t===document.body)&&(e=f.changedTouches[0].pageY)},a=f=>{if(t===document.documentElement||t===document.body){f.preventDefault();return}const u=f.changedTouches[0].pageY,l=t.scrollTop,w=t.scrollHeight-t.clientHeight;(l<=0&&u>e||l>=w&&u<e)&&f.preventDefault(),e=u},r=f=>{const u=f.target;N(u)&&u!==document.activeElement&&(f.preventDefault(),u.style.transform="translateY(-2000px)",u.focus(),requestAnimationFrame(()=>{u.style.transform=""}))},m=f=>{const u=f.target;N(u)&&(u.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{u.style.transform="",h&&(h.height<window.innerHeight?requestAnimationFrame(()=>{L(u)}):h.addEventListener("resize",()=>L(u),{once:!0}))}))},s=()=>{window.scrollTo(0,0)},c=window.pageXOffset,d=window.pageYOffset,g=x([S(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),S(document.documentElement,"overflow","hidden"),S(document.body,"marginTop",`-${d}px`)]);window.scrollTo(0,0);const b=x([v(document,"touchstart",n,{passive:!1,capture:!0}),v(document,"touchmove",a,{passive:!1,capture:!0}),v(document,"touchend",r,{passive:!1,capture:!0}),v(document,"focus",m,!0),v(window,"scroll",s)]);return()=>{g(),b(),window.scrollTo(c,d)}}function S(t,e,n){const a=t.style[e];return t.style[e]=n,()=>{t.style[e]=a}}function v(t,e,n,a){return t.addEventListener(e,n,a),()=>{t.removeEventListener(e,n,a)}}function L(t){const e=document.scrollingElement||document.documentElement;for(;t&&t!==e;){const n=j(t);if(n!==document.documentElement&&n!==document.body&&n!==t){const a=n.getBoundingClientRect().top,r=t.getBoundingClientRect().top;r>a+t.clientHeight&&(n.scrollTop+=r-a)}t=n.parentElement}}function N(t){return t instanceof HTMLInputElement&&!Z.has(t.type)||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}var ot=!T.isServer,rt=ot&&!!o.DEV,at=rt?t=>o.getOwner()?o.onCleanup(t):t:o.onCleanup;function it(t,e,n){if(T.isServer)return o.createSignal(t,n);if(o.sharedConfig.context){const[a,r]=o.createSignal(t,n);return o.onMount(()=>r(()=>e())),[a,r]}return o.createSignal(e(),n)}function ct(t,e,n,a){return t.addEventListener(e,n,a),at(t.removeEventListener.bind(t,e,n,a))}function st(t,e=o.getOwner()){let n=0,a,r;return()=>(n++,o.onCleanup(()=>{n--,queueMicrotask(()=>{!n&&r&&(r(),r=a=void 0)})}),r||o.createRoot(m=>a=t(r=m),e),a)}function ut(t){const e=o.getOwner(),n=st(t,e);return()=>T.isServer||o.sharedConfig.context?o.createRoot(t,e):n()}function U(t,e=!1){if(T.isServer)return()=>e;const n=window.matchMedia(t),[a,r]=it(e,()=>n.matches);return ct(n,"change",()=>r(n.matches)),a}function lt(t){return U("(prefers-color-scheme: dark)",t)}lt.bind(void 0,!1);function X(t,e){return U("(prefers-reduced-motion: reduce)",t)}/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */function ft(t,e){const[n,a]=o.createSignal(Y(e==null?void 0:e()));return o.createEffect(()=>{var r;a(((r=t())==null?void 0:r.tagName.toLowerCase())||Y(e==null?void 0:e()))}),n}/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */const y={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0.9) translateY(10px)"}},p={fade:{in:{opacity:1},out:{opacity:0}},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{"transform-origin":"top"}},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{"transform-origin":"top"}},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{"transform-origin":"left"}},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(-20px) skew(-10deg, -5deg)"},common:{"transform-origin":"top"}},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(20px) skew(-10deg, -5deg)"},common:{"transform-origin":"bottom"}},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(-5deg)"},common:{"transform-origin":"bottom"}},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(5deg)"},common:{"transform-origin":"top"}},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{"transform-origin":"top"}},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{"transform-origin":"bottom"}},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{"transform-origin":"left"}},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{"transform-origin":"right"}},pop:{...y,common:{"transform-origin":"center center"}},"pop-bottom-left":{...y,common:{"transform-origin":"bottom left"}},"pop-bottom-right":{...y,common:{"transform-origin":"bottom right"}},"pop-top-left":{...y,out:{opacity:0,transform:"scale(0.9) translateY(-10px)"},common:{"transform-origin":"top left"}},"pop-top-right":{...y,out:{opacity:0,transform:"scale(0.9) translateY(-10px)"},common:{"transform-origin":"top right"}}},mt=Object.keys(p);/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */const P={beforeEnter:"out",enter:"in",afterEnter:"in",beforeExit:"in",exit:"out",afterExit:"out"};function dt(t){const e={"transition-duration":`${t.duration}ms`,"transition-timing-function":t.easing};if(V(t.transition)){if(!(t.transition in p))return{};const n=p[t.transition];return{"transition-property":R(n),...e,...n.common,...n[P[t.phase]]}}return{"transition-property":R(t.transition),...e,...t.transition.common,...t.transition[P[t.phase]]}}function R(t){return[...new Set([...Object.keys(t.in),...Object.keys(t.out)])].join(", ")}/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/use-transition.ts
 */const _=250,k=10,M="ease";function gt(t,e){e=o.mergeProps({transition:"fade",duration:_,delay:k,easing:M,get exitDuration(){return i(e).duration||_},get exitDelay(){return i(e).delay||k},get exitEasing(){return i(e).easing||M}},e);const n=X(),[a,r]=o.createSignal(n()?0:i(e).duration),[m,s]=o.createSignal(i(t)?"afterEnter":"afterExit"),[c,d]=o.createSignal(i(e).easing);let g=-1;const b=l=>{const w=l?i(e).onBeforeEnter:i(e).onBeforeExit,E=l?i(e).onAfterEnter:i(e).onAfterExit;s(l?"beforeEnter":"beforeExit"),window.clearTimeout(g);const C=r(n()?0:l?i(e).duration:i(e).exitDuration);if(d(l?i(e).easing:i(e).exitEasing),C===0){w==null||w(),E==null||E(),s(l?"afterEnter":"afterExit");return}const A=n()?0:l?i(e).delay:i(e).exitDelay,q=window.setTimeout(()=>{w==null||w(),s(l?"enter":"exit")},A);g=window.setTimeout(()=>{window.clearTimeout(q),E==null||E(),s(l?"afterEnter":"afterExit")},A+C)},f=o.createMemo(()=>dt({transition:i(e).transition,duration:a(),phase:m(),easing:c()})),u=o.createMemo(()=>m()!=="afterExit");return o.createEffect(o.on(()=>i(t),l=>b(l),{defer:!0})),o.onCleanup(()=>{T.isServer||window.clearTimeout(g)}),{keepMounted:u,style:f}}exports.DEFAULT_TRANSITIONS_NAMES=mt;exports.createControllableArraySignal=G;exports.createControllableBooleanSignal=F;exports.createControllableSignal=O;exports.createDisclosure=J;exports.createInteractOutside=K;exports.createPreventScroll=tt;exports.createReducedMotion=X;exports.createTagName=ft;exports.createTransition=gt;
