"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("@hope-ui/utils"),Le=require("@stitches/core"),ie=require("dset/merge"),w=require("solid-js/web"),_=require("solid-js"),ae=require("clsx"),Ve=Le.createStitches({prefix:"hope"}),{css:Se,globalCss:ue,getCssText:Ae,keyframes:ce}=Ve,Y={light:"hope-theme-light",dark:"hope-theme-dark"};function ye(e){const t=Object.keys(e);return t.length>0&&t.every(r=>["light","dark"].includes(r))}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */function Be(e,t){return u.isArray(e)?e.map(r=>r===null?null:t(r)):u.isObject(e)?u.objectKeys(e).reduce((r,o)=>(r[o]=t(e[o]),r),{}):e!=null?t(e):null}function ve(e,t){const r=t.map(o=>{var n;return(n=e[o])!=null?n:null});for(;u.getLastItem(r)===null;)r.pop();return r}function Ce(e,t){const r={};return e.forEach((o,n)=>{const i=t[n];o!=null&&(r[i]=o)}),r}function ke(e,t){const r=Object.keys(e);return r.length>0&&r.every(o=>t.includes(o))}const Me=["styleConfigOverride","unstyled"];/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/pseudos.ts
 */const f={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`};function R(e){return Re(t=>e(t,"&"),"[role=group]","[data-group]",".group")}function y(e){return Re(t=>e(t,"~ &"),"[data-peer]",".peer")}function Re(e,...t){return t.map(e).join(", ")}const ze="_light",X="_dark",We=`.${Y.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`,Fe=`.${Y.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`,He=new Map([["_hover","&:hover, &[data-hover]"],["_active","&:active, &[data-active]"],["_focus","&:focus, &[data-focus]"],["_highlighted","&[data-highlighted]"],["_focusWithin","&:focus-within"],["_focusVisible","&:focus-visible, &[data-focus-visible]"],["_disabled","&[disabled], &[aria-disabled=true], &[data-disabled]"],["_readOnly","&[aria-readonly=true], &[readonly], &[data-readonly]"],["_before","&::before"],["_after","&::after"],["_empty","&:empty"],["_expanded","&[aria-expanded=true], &[data-expanded]"],["_checked","&[aria-checked=true], &[data-checked]"],["_grabbed","&[aria-grabbed=true], &[data-grabbed]"],["_pressed","&[aria-pressed=true], &[data-pressed]"],["_invalid","&[aria-invalid=true], &[data-invalid]"],["_valid","&[data-valid], &[data-state=valid]"],["_loading","&[data-loading], &[aria-busy=true]"],["_selected","&[aria-selected=true], &[data-selected]"],["_hidden","&[hidden], &[data-hidden]"],["_autofill","&:-webkit-autofill"],["_even","&:nth-of-type(even)"],["_odd","&:nth-of-type(odd)"],["_first","&:first-child"],["_last","&:last-child"],["_notFirst","&:not(:first-child)"],["_notLast","&:not(:last-child)"],["_visited","&:visited"],["_activeLink","&[aria-current=page]"],["_activeStep","&[aria-current=step]"],["_indeterminate","&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]"],["_groupHover",R(f.hover)],["_peerHover",y(f.hover)],["_groupFocus",R(f.focus)],["_peerFocus",y(f.focus)],["_groupFocusVisible",R(f.focusVisible)],["_peerFocusVisible",y(f.focusVisible)],["_groupActive",R(f.active)],["_peerActive",y(f.active)],["_groupDisabled",R(f.disabled)],["_peerDisabled",y(f.disabled)],["_groupInvalid",R(f.invalid)],["_peerInvalid",y(f.invalid)],["_groupChecked",R(f.checked)],["_peerChecked",y(f.checked)],["_groupFocusWithin",R(f.focusWithin)],["_peerFocusWithin",y(f.focusWithin)],["_peerPlaceholderShown",y(f.placeholderShown)],["_placeholder","&::placeholder"],["_placeholderShown","&:placeholder-shown"],["_fullScreen","&:fullscreen"],["_selection","&::selection"],["_rtl","[dir=rtl] &, &[dir=rtl]"],["_ltr","[dir=ltr] &, &[dir=ltr]"],["_mediaDark","@media (prefers-color-scheme: dark)"],["_mediaReduceMotion","@media (prefers-reduced-motion: reduce)"],[ze,We],[X,Fe]]),De=new Map([["borderX",["borderRight","borderLeft"]],["borderY",["borderTop","borderBottom"]],["bg",["background"]],["bgColor",["backgroundColor"]],["d",["display"]],["marginStart",["marginInlineStart"]],["marginEnd",["marginInlineEnd"]],["m",["margin"]],["mt",["marginTop"]],["mr",["marginRight"]],["me",["marginInlineEnd"]],["mb",["marginBottom"]],["ml",["marginLeft"]],["ms",["marginInlineStart"]],["mx",["marginInlineStart","marginInlineEnd"]],["my",["marginTop","marginBottom"]],["paddingStart",["paddingInlineStart"]],["paddingEnd",["paddingInlineEnd"]],["p",["padding"]],["pt",["paddingTop"]],["pr",["paddingRight"]],["pe",["paddingInlineEnd"]],["pb",["paddingBottom"]],["pl",["paddingLeft"]],["ps",["paddingInlineStart"]],["px",["paddingInlineStart","paddingInlineEnd"]],["py",["paddingTop","paddingBottom"]],["pos",["position"]],["borderTopRadius",["borderTopLeftRadius","borderTopRightRadius"]],["borderRightRadius",["borderTopRightRadius","borderBottomRightRadius"]],["borderBottomRadius",["borderBottomRightRadius","borderBottomLeftRadius"]],["borderLeftRadius",["borderTopLeftRadius","borderBottomLeftRadius"]],["rounded",["borderRadius"]],["roundedTop",["borderTopLeftRadius","borderTopRightRadius"]],["roundedRight",["borderTopRightRadius","borderBottomRightRadius"]],["roundedBottom",["borderBottomRightRadius","borderBottomLeftRadius"]],["roundedLeft",["borderTopLeftRadius","borderBottomLeftRadius"]],["shadow",["boxShadow"]],["w",["width"]],["minW",["minWidth"]],["maxW",["maxWidth"]],["h",["height"]],["minH",["minHeight"]],["maxH",["maxHeight"]],["boxSize",["width","height"]]]);/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/9de39921b983ad0eb2df7195e3b683c2e2e9e290/packages/components/styled-system/src/utils/expand-responsive.ts
 */const Ge=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:r,toArrayValue:o,medias:n}=t.__breakpoints,i={},s={};for(const c in e){let a=u.runIfFn(e[c],t);if(a==null||te(c,a,i))continue;if(a=u.isObject(a)&&r(a)?o(a):a,!Array.isArray(a)){i[c]=a;continue}const d=a.slice(0,n.length).length;for(let l=0;l<d;l+=1){const m=n==null?void 0:n[l],p=a[l];if(p!=null){if(!m){te(c,p,i)||(i[c]=p);continue}s[m]=s[m]||{},te(c,p,s[m])||(s[m][c]=p)}}}return{...i,...s}};function te(e,t,r){if(!u.isObject(t)||!ye(t))return!1;const{light:o,dark:n}=t;return o!=null&&(r[e]=o),r[X]=r[X]||{},n!=null&&(r[X][e]=n),!0}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */function Ue(e){const t=parseFloat(e.toString()),r=e.toString().replace(String(t),"");return{unitless:!r,value:t,unit:r}}function K(e){if(e==null)return e;const{unitless:t}=Ue(e);return t||u.isNumber(e)?`${e}px`:e}const Te=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,le=e=>Object.fromEntries(Object.entries(e).sort(Te));function be(e){const t=le(e);return Object.assign(Object.values(t),t)}function qe(e){const t=Object.keys(le(e));return new Set(t)}function he(e){var r;if(!e)return e;e=(r=K(e))!=null?r:e;const t=e.endsWith("px")?-1:-.0625;return u.isNumber(e)?`${e+t}`:e.replace(/(\d+\.?\d*)/u,o=>`${parseFloat(o)+t}`)}function q(e,t){const r=["@media screen"];return e&&r.push("and",`(min-width: ${K(e)})`),t&&r.push("and",`(max-width: ${K(t)})`),r.join(" ")}function Xe(e){var i;if(!e)return null;e.base=(i=e.base)!=null?i:"0px";const t=be(e),r=Object.entries(e).sort(Te).map(([s,c],a,d)=>{var m;let[,l]=(m=d[a+1])!=null?m:[];return l=parseFloat(l)>0?he(l):void 0,{_minW:he(c),breakpoint:s,minW:c,maxW:l,maxWQuery:q(null,l),minWQuery:q(c),minMaxQuery:q(c,l)}}),o=qe(e),n=Array.from(o.values());return{keys:o,normalized:t,asObject:le(e),asArray:be(e),details:r,medias:[null,...t.map(s=>q(s)).slice(1)],isResponsive(s){return ke(s,n)},toArrayValue(s){if(!u.isObject(s))throw new Error("toArrayValue: value must be an object");return ve(s,n)},toObjectValue(s){if(!Array.isArray(s))throw new Error("toObjectValue: value must be an array");return Ce(s,n)}}}/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/styled-system/src/utils/create-transform.ts
 */const Ke=["colors","fonts","fontWeights","lineHeights","shadows","zIndices"],Oe=/!(important)?$/;function Ye(e){return Oe.test(e)}function Qe(e){return e.replace(Oe,"").trim()}function Ee(e,t,r){var s;if(e==null)return;const o=String(e),n=Qe(o);let i=(s=r[t][n])!=null?s:u.delve(r[t],n);return i==null&&(i=Ke.includes(t)?n:K(n)),Ye(o)?`${i} !important`:i}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */function Q(e,t){var n;const r={},o=Ge(e)(t);for(let i in o){let s=u.runIfFn(o[i],t);if(s==null)continue;if(i.startsWith("_")){const a=He.get(i);if(a==null)continue;i=a}if(u.isObject(s)){r[i]=Object.assign({},r[i],Q(s,t));continue}const c=(n=De.get(i))!=null?n:[i];for(const a of c){const d=t.themeMap[a];d!=null&&(s=Ee(s,d,t.vars)),r[a]=s}}return r}/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */function Je(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)}function Ze(e){let t=e.replace("#","");if(t.length===3){const s=t.split("");t=[s[0],s[0],s[1],s[1],s[2],s[2]].join("")}const r=parseInt(t,16),o=r>>16&255,n=r>>8&255,i=r&255;return{r:o,g:n,b:i,a:1}}function et(e){const[t,r,o,n]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:r,b:o,a:n||1}}function tt(e){return Je(e)?Ze(e):e.startsWith("rgb")?et(e):{r:0,g:0,b:0,a:1}}function re(e){const{r:t,g:r,b:o}=tt(e);return`${t} ${r} ${o}`}/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */function E(e){return{...e,mainChannel:re(e[500]),lightChannel:re(e[100]),darkChannel:re(e[900])}}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */const J="hope";function rt(e,t="-"){return e.replace(/\s+/g,t)}function ot(e){const t=rt(e.toString());return it(nt(t))}function nt(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function it(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function st(e,t=""){return[t,e].filter(Boolean).join("-")}function at(e,t){return`var(${e}${t?`, ${t}`:""})`}function ut(e,t=""){return ot(`--${st(e,t)}`)}function ct(e,t,r=J){const o=ut(e,r);return{variable:o,reference:at(o,t)}}function lt(e=J){return t=>`var(--${e?`${e}-`:""}${t})`}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */const W="__";function oe(e,t,r){return ct(String(t).replace(e,"-"),void 0,r)}function dt(e,t){const r={},o={},n={},{colors:i,...s}=e,c={colors:i.light},a={colors:i.dark},d=u.flatten(c,W),l=u.flatten(a,W),m=u.flatten(s,W),p=new RegExp(`(${W}|\\.)`,"g");for(const[g,x]of Object.entries(d)){const{variable:b,reference:v}=oe(p,g,t);r[b]=x,n[g]=v}for(const[g,x]of Object.entries(l)){const{variable:b}=oe(p,g,t);o[b]=x}for(const[g,x]of Object.entries(m)){const{variable:b,reference:v}=oe(p,g,t);r[b]=x,n[g]=v}const T=u.unflatten(n,W);return{cssVarsValues:{root:r,dark:o},vars:T}}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */const mt=["colors","fonts","fontSizes","fontWeights","lineHeights","letterSpacings","space","sizes","radii","shadows","zIndices","breakpoints"];function pt(e){return u.pick(e,mt)}function ft(e){const{vars:t,__cssVarsValues:r,__breakpoints:o,...n}=e;return n}function we(e){const t=ft(e),r=pt(t),{cssVarsValues:o,vars:n}=dt(r,t.cssVarPrefix);return Object.assign(t,{vars:n,__cssVarsValues:o,__breakpoints:Xe(t.breakpoints)}),t}/*!
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
 */function $e(e){const t=lt(e);return{light:{whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},primary:E({50:"#e6f6ff",100:"#bae3ff",200:"#7cc4fa",300:"#47a3f3",400:"#2186eb",500:"#0967d2",600:"#0552b5",700:"#03449e",800:"#01337d",900:"#002159"}),neutral:E({50:"#f9fafa",100:"#f4f5f6",200:"#e3e5e8",300:"#cfd3d8",400:"#9aa1ac",500:"#67707e",600:"#49505a",700:"#393e46",800:"#22252a",900:"#151619"}),success:E({50:"#e3f9e5",100:"#c1eac5",200:"#a3d9a5",300:"#7bc47f",400:"#57ae5b",500:"#3f9142",600:"#2f8132",700:"#207227",800:"#0e5814",900:"#05400a"}),info:E({50:"#eae2f8",100:"#cfbcf2",200:"#a081d9",300:"#8662c7",400:"#724bb7",500:"#653cad",600:"#51279b",700:"#421987",800:"#34126f",900:"#240754"}),warning:E({50:"#fffbea",100:"#fff3c4",200:"#fce588",300:"#fadb5f",400:"#f7c948",500:"#f0b429",600:"#de911d",700:"#cb6e17",800:"#b44d12",900:"#8d2b0b"}),danger:E({50:"#ffe3e3",100:"#ffbdbd",200:"#ff9b9b",300:"#f86a6a",400:"#ef4e4e",500:"#e12d39",600:"#cf1124",700:"#ab091e",800:"#8a041a",900:"#610316"}),common:{white:"#ffffff",black:"#121212",foreground:t("colors-neutral-800"),background:t("colors-common-white"),focusRing:t("colors-primary-500")}},dark:{common:{foreground:t("colors-neutral-200"),background:t("colors-neutral-900"),focusRing:t("colors-primary-600")}}}}/*!
 * Original code by WorkOS
 * MIT Licensed, Copyright (c) 2022 WorkOS.
 *
 * Credits to the WorkOS team:
 * https://github.com/stitchesjs/stitches/blob/96e8a523caf1724cf25bb0d07ee823365bbedd9c/packages/core/src/default/defaultThemeMap.js
 */const Pe={gap:"space",gridGap:"space",columnGap:"space",gridColumnGap:"space",rowGap:"space",gridRowGap:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",background:"colors",backgroundColor:"colors",backgroundImage:"colors",borderImage:"colors",border:"colors",borderBlock:"colors",borderBlockEnd:"colors",borderBlockStart:"colors",borderBottom:"colors",borderBottomColor:"colors",borderColor:"colors",borderInline:"colors",borderInlineEnd:"colors",borderInlineStart:"colors",borderLeft:"colors",borderLeftColor:"colors",borderRight:"colors",borderRightColor:"colors",borderTop:"colors",borderTopColor:"colors",caretColor:"colors",color:"colors",columnRuleColor:"colors",fill:"colors",outline:"colors",outlineColor:"colors",stroke:"colors",textDecorationColor:"colors",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",borderWidth:"sizes",borderTopWidth:"sizes",borderRightWidth:"sizes",borderBottomWidth:"sizes",borderLeftWidth:"sizes",blockSize:"sizes",minBlockSize:"sizes",maxBlockSize:"sizes",inlineSize:"sizes",minInlineSize:"sizes",maxInlineSize:"sizes",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",gridTemplateColumns:"sizes",gridTemplateRows:"sizes",strokeWidth:"sizes",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices"},_e={"0.5":"0.125rem",1:"0.25rem","1.5":"0.375rem",2:"0.5rem","2.5":"0.625rem",3:"0.75rem","3.5":"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},gt={colors:$e(J),fonts:{sans:"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",serif:"ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},lineHeights:{none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:2,3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},space:_e,sizes:{..._e,max:"max-content",min:"min-content",full:"100%",screenW:"100vw",screenH:"100vh",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem"},radii:{none:"0",xs:"0.125rem",sm:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},shadows:{none:"0 0 #0000",xs:"0px 1px 2px rgb(16 24 40 / 5%)",sm:"0px 1px 3px rgb(16 24 40 / 10%), 0px 1px 2px rgb(16 24 40 / 6%)",md:"0px 4px 8px -2px rgb(16 24 40 / 10%), 0px 2px 4px -2px rgb(16 24 40 / 6%)",lg:"0px 12px 16px -4px rgb(16 24 40 / 8%), 0px 4px 6px -2px rgb(16 24 40 / 3%)",xl:"0px 20px 24px -4px rgb(16 24 40 / 8%), 0px 8px 8px -4px rgb(16 24 40 / 3%)","2xl":"0px 24px 48px -12px rgb(16 24 40 / 18%)","3xl":"0px 32px 64px -12px rgb(16 24 40 / 14%)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.06)"},zIndices:{hide:-1,base:0,docked:10,sticky:1e3,banner:1100,overlay:1200,modal:1300,dropdown:1400,popover:1500,tooltip:1600,skipLink:1700,toast:1800},breakpoints:{base:"0px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},bt={...gt,cssVarPrefix:J,themeMap:Pe,components:{}},Z=we(bt);function ht(e){let t=Z;e.cssVarPrefix!=null&&(t={...t,colors:$e(e.cssVarPrefix)});const r={value:t};return ie.dset(r,"value",e),we(r.value)}/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */function _t(e){return{WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:"2px",outline:`2px solid ${e.colors.common.focusRing}`},"&:focus:not(:focus-visible)":{outline:"none"}}}function xt(e){ue({":root":e.__cssVarsValues.root,[`.${Y.dark}`]:e.__cssVarsValues.dark})()}/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */function St(e){ue({"*, *::before, *::after":{boxSizing:"border-box"},"*":{margin:0},html:{fontFamily:e.fonts.sans,lineHeight:e.lineHeights.base,fontSize:"16px"},body:{backgroundColor:e.colors.common.background,color:e.colors.common.foreground,fontFamily:"inherit",lineHeight:"inherit",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"img, picture, video, canvas, svg":{display:"block",maxWidth:"100%"},"button, input, textarea, select":{font:"inherit"},"h1, h2, h3, h4, h5, h6":{font:"inherit"},"p, h1, h2, h3, h4, h5, h6":{overflowWrap:"break-word"}})()}const Ne=_.createContext(Z);function $(){return _.useContext(Ne)}function je(e){const t=$();return _.createMemo(()=>{var r;if(e!=null)return(r=t.components[e])!=null?r:void 0})}function yt(e,t,r){const o=$(),n=()=>{var i,s;return(s=(i=o.components[e])==null?void 0:i.defaultProps)!=null?s:{}};return _.mergeProps(t,n,r)}function vt(e){var r;const t=(r=e.theme)!=null?r:Z;return xt(t),e.withCssReset&&St(t.vars),w.createComponent(Ne.Provider,{value:t,get children(){return e.children}})}function Ct(e){const t=u.once(r=>{const{"@import":o,"@font-face":n,...i}=u.runIfFn(e,r),s=Object.entries(i).reduce((c,[a,d])=>(c[a]=Q(d,r),c),{});ue({"@import":o!=null?o:[],"@font-face":n!=null?n:{},...s})()});return function(){const o=$();t(o)}}function kt(e){return e}function P(e,t){return Se(Q(e,t))().className}function se(e,t){for(const r of Object.keys(e))if(e[r]!==t[r])return!1;return!0}/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */function xe(e,t){return Object.entries(e).reduce((r,[o,n])=>{const{baseStyle:i={},variants:s={},compoundVariants:c=[]}=n;return r[o]={baseClassName:P(i,t),variantClassNames:Object.entries(s).reduce((a,[d,l])=>(a[d]=Object.entries(l).reduce((m,[p,T])=>(m[p]=P(T,t),m),{}),a),{}),compoundVariants:c.map(a=>[a.variants,P(a.style,t)])},r},{})}function Rt(e,t){let r,o,n,i,s=[],c;const a=u.once((d,l,m)=>{r=u.runIfFn(e,l),o=xe(r,l),n=u.runIfFn(m,l),i=n&&xe(n,l),s=Object.keys(r),c=Object.fromEntries(s.map(p=>[p,`hope-${d}-${p}`]))});return function(l,m){var v;const p=$(),T=je(l);a(l,p,(v=T())==null?void 0:v.styleConfigOverride);const F=_.createMemo(()=>u.runIfFn(m.styleConfigOverride,p)),g=_.createMemo(()=>{const[C,h]=_.splitProps(m,["styleConfigOverride","unstyled"]);return{...t,...u.filterUndefined(h)}}),x=_.createMemo(()=>s.reduce((C,h)=>{var N,j,I,L,V,k,A,B,pe,fe,ge;let S="",H={},D=[];m.unstyled||(S=(N=o[h].baseClassName)!=null?N:"",H=(j=o[h].variantClassNames)!=null?j:{},D=(I=o[h].compoundVariants)!=null?I:[]);const ee=(V=(L=i==null?void 0:i[h])==null?void 0:L.baseClassName)!=null?V:"",G=(A=(k=i==null?void 0:i[h])==null?void 0:k.variantClassNames)!=null?A:{},U=(pe=(B=i==null?void 0:i[h])==null?void 0:B.compoundVariants)!=null?pe:[],O=[c[h],S,ee];for(const M in g()){const z=g()[M];z!=null&&(O.push((fe=H[M])==null?void 0:fe[String(z)]),O.push((ge=G[M])==null?void 0:ge[String(z)]))}for(const[M,z]of[...D,...U])se(M,g())&&O.push(z);return C[h]=ae.clsx(...O),C},{})),b=_.createMemo(()=>{const C=F();return C==null?{}:s.reduce((h,S)=>{var G,U,O,N,j,I,L,V;const H=(U=(G=C[S])==null?void 0:G.baseStyle)!=null?U:{},D=(N=(O=C[S])==null?void 0:O.variants)!=null?N:{},ee=(I=(j=C[S])==null?void 0:j.compoundVariants)!=null?I:[];h[S]=H;for(const k in g()){const A=g()[k];if(A==null)continue;const B=(V=(L=D[k])==null?void 0:L[String(A)])!=null?V:{};u.isEmptyObject(B)||ie.dset(h,S,B)}for(const k of ee)se(k.variants,g())&&ie.dset(h,S,k.style);return h},{})});return{baseClasses:x,styleOverrides:b}}}/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */function de(e,t){const{baseStyle:r={},variants:o={},compoundVariants:n=[]}=e;return{baseClassName:P(r,t),variantClassNames:Object.entries(o).reduce((i,[s,c])=>(i[s]=Object.entries(c).reduce((a,[d,l])=>(a[d]=P(l,t),a),{}),i),{}),compoundVariants:n.map(i=>[i.variants,P(i.style,t)])}}function me(e,t){var i;const{variantClassNames:r={},compoundVariants:o=[]}=e,n=[];for(const s in t){const c=t[s];c!=null&&n.push((i=r[s])==null?void 0:i[String(c)])}for(const[s,c]of o)se(s,t)&&n.push(c);return n}function Tt(e){let t,r;const o=u.once(n=>{t=u.runIfFn(e,n),r=de(t,n)});return function(i={}){const s=$();return o(s),_.createMemo(()=>{if(t==null||r==null)return"";const a={...t.defaultVariants,...u.filterUndefined(i)},d=me(r,a);return ae.clsx(r.baseClassName,d)})}}const Ot={border:!0,borderWidth:!0,borderStyle:!0,borderColor:!0,borderTop:!0,borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0,borderRight:!0,borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0,borderBottom:!0,borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0,borderLeft:!0,borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0,borderX:!0,borderY:!0},Et={color:!0,background:!0,bg:!0,backgroundColor:!0,bgColor:!0,opacity:!0},wt={alignItems:!0,alignContent:!0,alignSelf:!0,justifyItems:!0,justifyContent:!0,justifySelf:!0,flexDirection:!0,flexWrap:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,order:!0},$t={gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0,gridRow:!0,gridRowStart:!0,gridRowEnd:!0,gridColumn:!0,gridColumnStart:!0,gridColumnEnd:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:!0,rowGap:!0,columnGap:!0},Pt={appearance:!0,userSelect:!0,pointerEvents:!0,resize:!0,cursor:!0,outline:!0,outlineOffset:!0,outlineColor:!0},Nt={display:!0,d:!0,verticalAlign:!0,overflow:!0,overflowX:!0,overflowY:!0},jt={margin:!0,marginTop:!0,marginRight:!0,marginEnd:!0,marginBottom:!0,marginLeft:!0,marginStart:!0,m:!0,mt:!0,mr:!0,me:!0,mb:!0,ml:!0,ms:!0,mx:!0,my:!0},It={padding:!0,paddingTop:!0,paddingRight:!0,paddingEnd:!0,paddingBottom:!0,paddingLeft:!0,paddingStart:!0,p:!0,pt:!0,pr:!0,pe:!0,pb:!0,pl:!0,ps:!0,px:!0,py:!0},Lt={position:!0,pos:!0,zIndex:!0,top:!0,right:!0,bottom:!0,left:!0},Vt={borderRadius:!0,borderTopRightRadius:!0,borderTopLeftRadius:!0,borderBottomRightRadius:!0,borderBottomLeftRadius:!0,borderTopRadius:!0,borderRightRadius:!0,borderBottomRadius:!0,borderLeftRadius:!0,rounded:!0,roundedTop:!0,roundedRight:!0,roundedBottom:!0,roundedLeft:!0},At={textShadow:!0,boxShadow:!0,shadow:!0},Bt={width:!0,minWidth:!0,maxWidth:!0,height:!0,minHeight:!0,maxHeight:!0,w:!0,minW:!0,maxW:!0,h:!0,minH:!0,maxH:!0,boxSize:!0},Mt={transform:!0,transformOrigin:!0,clipPath:!0},zt={transition:!0,transitionProperty:!0,transitionTimingFunction:!0,transitionDuration:!0,transitionDelay:!0,animation:!0,willChange:!0},Wt={fontFamily:!0,fontSize:!0,fontWeight:!0,lineHeight:!0,letterSpacing:!0,textAlign:!0,fontStyle:!0,textTransform:!0,textDecoration:!0},Ft={objectFit:!0,objectPosition:!0},Ht={_hover:!0,_active:!0,_focus:!0,_highlighted:!0,_focusWithin:!0,_focusVisible:!0,_disabled:!0,_readOnly:!0,_before:!0,_after:!0,_empty:!0,_expanded:!0,_checked:!0,_grabbed:!0,_pressed:!0,_invalid:!0,_valid:!0,_loading:!0,_selected:!0,_hidden:!0,_autofill:!0,_even:!0,_odd:!0,_first:!0,_last:!0,_notFirst:!0,_notLast:!0,_visited:!0,_activeLink:!0,_activeStep:!0,_indeterminate:!0,_groupHover:!0,_peerHover:!0,_groupFocus:!0,_peerFocus:!0,_groupFocusVisible:!0,_peerFocusVisible:!0,_groupActive:!0,_peerActive:!0,_groupDisabled:!0,_peerDisabled:!0,_groupInvalid:!0,_peerInvalid:!0,_groupChecked:!0,_peerChecked:!0,_groupFocusWithin:!0,_peerFocusWithin:!0,_peerPlaceholderShown:!0,_placeholder:!0,_placeholderShown:!0,_fullScreen:!0,_selection:!0,_rtl:!0,_ltr:!0,_mediaDark:!0,_mediaReduceMotion:!0,_dark:!0,_light:!0},Dt={...Ot,...Et,...wt,...$t,...Pt,...Nt,...jt,...It,...Lt,...Vt,...At,...Bt,...Mt,...zt,...Wt,...Ft,...Ht};function Gt(e){return Object.keys(e).filter(t=>t in Dt)}const Ie=new Map([["htmlWidth","width"],["htmlHeight","height"],["htmlSize","size"]]);function Ut(e){return Object.entries(e).reduce((t,[r,o])=>{const n=Ie.get(r);return n!=null&&o!=null&&(t[n]=o),t},{})}const qt=Se({});function ne(e,t,r){let o,n,i=[];const s=u.once(a=>{t!=null&&(o=u.runIfFn(t,a),n=de(o,a),i=o.variants?Object.keys(o.variants):[])}),c=a=>{const d=$();s(d);const[l,m,p,T,F]=_.splitProps(a,["as","class","sx","__css"],[...Ie.keys()],i,Gt(a)),g=_.createMemo(()=>{if(n==null)return[];const b={...o==null?void 0:o.defaultVariants,...u.filterUndefined(p)};return me(n,b)}),x=_.createMemo(()=>{const b=Object.assign({},l.__css,u.filterUndefined(T),...u.pack(l.sx).map(v=>u.runIfFn(v,d)));if(!u.isEmptyObject(b))return qt({css:Q(b,d)}).className});return w.createComponent(w.Dynamic,w.mergeProps({get component(){var b;return(b=l.as)!=null?b:e},get class(){return ae.clsx(r,n==null?void 0:n.baseClassName,...g(),x(),l.class)||void 0}},()=>Ut(m),F))};return r!=null&&(c.toString=()=>`.${r}`),c}function Xt(){const e=new Map;return new Proxy(ne,{apply(t,r,o){return ne(...o)},get(t,r){return e.has(r)||e.set(r,ne(r)),e.get(r)}})}const Kt=Xt(),Yt=["<style",' id="stitches">',"</style>"];function Qt(){w.useAssets(()=>w.ssr(Yt,w.ssrHydrationKey(),Ae()))}const Jt=ce({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),Zt=ce({from:{opacity:0},to:{opacity:1}});Object.defineProperty(exports,"pack",{enumerable:!0,get:()=>u.pack});exports.COLOR_MODE_CLASSNAMES=Y;exports.DEFAULT_THEME=Z;exports.DEFAULT_THEME_MAP=Pe;exports.STYLE_CONFIG_PROP_NAMES=Me;exports.ThemeProvider=vt;exports.arrayToObjectNotation=Ce;exports.computeStyleOptions=de;exports.createGlobalStyles=Ct;exports.createHopeComponent=kt;exports.createPalette=E;exports.createStyleConfig=Rt;exports.createStyles=Tt;exports.extendTheme=ht;exports.fadeIn=Zt;exports.focusStyles=_t;exports.getSelectedVariantClassNames=me;exports.hope=Kt;exports.injectCriticalStyle=Qt;exports.isColorModeObjectLike=ye;exports.isResponsiveObjectLike=ke;exports.keyframes=ce;exports.mapResponsive=Be;exports.mergeThemeProps=yt;exports.objectToArrayNotation=ve;exports.resolveTokenValue=Ee;exports.spin=Jt;exports.useComponentTheme=je;exports.useTheme=$;
