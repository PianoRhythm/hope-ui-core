import { createStitches as Be } from "@stitches/core";
import { dset as ae } from "dset/merge";
import { createComponent as Se, Dynamic as Ae, mergeProps as Ie, useAssets as ze, ssr as We, ssrHydrationKey as He } from "solid-js/web";
import { createContext as Me, useContext as Fe, createMemo as R, mergeProps as De, splitProps as ve } from "solid-js";
import { clsx as ce } from "clsx";
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function ke(e) {
  return typeof e == "number";
}
function J(e) {
  return Array.isArray(e);
}
function Ge(e) {
  return typeof e == "function";
}
function T(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !J(e);
}
function Ce(e) {
  return T(e) && Object.keys(e).length === 0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function Ue(e) {
  const r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
function Xe(e) {
  return e == null ? [] : J(e) ? e : [e];
}
function y(e, ...r) {
  return Ge(e) ? e(...r) : e;
}
function Z(e) {
  let r = !1;
  return function(...t) {
    r || (r = !0, e(...t));
  };
}
function K(e, r, t = 1 / 0) {
  return !T(e) && !Array.isArray(e) || !t ? e : Object.entries(e).reduce((o, [n, i]) => (T(i) || J(i) ? Object.entries(K(i, r, t - 1)).forEach(([s, u]) => {
    o[`${n}${r}${s}`] = u;
  }) : o[n] = i, o), {});
}
function Ke(e, r) {
  return Object.keys(e).reduce((t, o) => (o.split(r).reduce((n, i, s, u) => (n[i] != null || (n[i] = u.length - 1 === s ? e[o] : {}), n[i]), t), t), {});
}
function Ye(e, r) {
  return r.split(".").reduce((t, o) => t && t[o], e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function qe(e, r) {
  const t = {};
  return r.forEach((o) => {
    o in e && (t[o] = e[o]);
  }), t;
}
const Qe = (e) => Object.keys(e);
function Je(e, r) {
  const t = {};
  return Object.keys(e).forEach((o) => {
    const n = e[o];
    r(n, o, e) && (t[o] = n);
  }), t;
}
function q(e) {
  return Je(e, (r) => r != null);
}
const Ze = Be({ prefix: "hope" }), { css: Re, globalCss: le, getCssText: er, keyframes: Te } = Ze, de = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function rr(e) {
  const r = Object.keys(e);
  return r.length > 0 && r.every((t) => ["light", "dark"].includes(t));
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */
function gt(e, r) {
  return J(e) ? e.map((t) => t === null ? null : r(t)) : T(e) ? Qe(e).reduce((t, o) => (t[o] = r(e[o]), t), {}) : e != null ? r(e) : null;
}
function tr(e, r) {
  const t = r.map((o) => {
    var n;
    return (n = e[o]) != null ? n : null;
  });
  for (; Ue(t) === null; )
    t.pop();
  return t;
}
function or(e, r) {
  const t = {};
  return e.forEach((o, n) => {
    const i = r[n];
    o != null && (t[i] = o);
  }), t;
}
function nr(e, r) {
  const t = Object.keys(e);
  return t.length > 0 && t.every((o) => r.includes(o));
}
const bt = [
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
const p = {
  hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
  focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
  focusVisible: (e, r) => `${e}:focus-visible ${r}`,
  focusWithin: (e, r) => `${e}:focus-within ${r}`,
  active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
  disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
  invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
  checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
  indeterminate: (e, r) => `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
  readOnly: (e, r) => `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
  expanded: (e, r) => `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
  placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`
};
function C(e) {
  return $e((r) => e(r, "&"), "[role=group]", "[data-group]", ".group");
}
function x(e) {
  return $e((r) => e(r, "~ &"), "[data-peer]", ".peer");
}
function $e(e, ...r) {
  return r.map(e).join(", ");
}
const ir = "_light", Y = "_dark", sr = `.${de.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, ar = `.${de.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, ur = /* @__PURE__ */ new Map([
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
  ["_groupHover", C(p.hover)],
  ["_peerHover", x(p.hover)],
  ["_groupFocus", C(p.focus)],
  ["_peerFocus", x(p.focus)],
  ["_groupFocusVisible", C(p.focusVisible)],
  ["_peerFocusVisible", x(p.focusVisible)],
  ["_groupActive", C(p.active)],
  ["_peerActive", x(p.active)],
  ["_groupDisabled", C(p.disabled)],
  ["_peerDisabled", x(p.disabled)],
  ["_groupInvalid", C(p.invalid)],
  ["_peerInvalid", x(p.invalid)],
  ["_groupChecked", C(p.checked)],
  ["_peerChecked", x(p.checked)],
  ["_groupFocusWithin", C(p.focusWithin)],
  ["_peerFocusWithin", x(p.focusWithin)],
  ["_peerPlaceholderShown", x(p.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [ir, sr],
  [Y, ar]
]), cr = /* @__PURE__ */ new Map([
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
const lr = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: o, medias: n } = r.__breakpoints, i = {}, s = {};
  for (const u in e) {
    let a = y(e[u], r);
    if (a == null || oe(u, a, i))
      continue;
    if (a = T(a) && t(a) ? o(a) : a, !Array.isArray(a)) {
      i[u] = a;
      continue;
    }
    const l = a.slice(0, n.length).length;
    for (let c = 0; c < l; c += 1) {
      const d = n == null ? void 0 : n[c], m = a[c];
      if (m != null) {
        if (!d) {
          oe(u, m, i) || (i[u] = m);
          continue;
        }
        s[d] = s[d] || {}, oe(u, m, s[d]) || (s[d][u] = m);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function oe(e, r, t) {
  if (!T(r) || !rr(r))
    return !1;
  const { light: o, dark: n } = r;
  return o != null && (t[e] = o), t[Y] = t[Y] || {}, n != null && (t[Y][e] = n), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function dr(e) {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}
function Q(e) {
  if (e == null)
    return e;
  const { unitless: r } = dr(e);
  return r || ke(e) ? `${e}px` : e;
}
const we = (e, r) => parseInt(e[1], 10) > parseInt(r[1], 10) ? 1 : -1, me = (e) => Object.fromEntries(Object.entries(e).sort(we));
function he(e) {
  const r = me(e);
  return Object.assign(Object.values(r), r);
}
function mr(e) {
  const r = Object.keys(me(e));
  return new Set(r);
}
function _e(e) {
  var t;
  if (!e)
    return e;
  e = (t = Q(e)) != null ? t : e;
  const r = e.endsWith("px") ? -1 : -0.0625;
  return ke(e) ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (o) => `${parseFloat(o) + r}`);
}
function X(e, r) {
  const t = ["@media screen"];
  return e && t.push("and", `(min-width: ${Q(e)})`), r && t.push("and", `(max-width: ${Q(r)})`), t.join(" ");
}
function pr(e) {
  var i;
  if (!e)
    return null;
  e.base = (i = e.base) != null ? i : "0px";
  const r = he(e), t = Object.entries(e).sort(we).map(([s, u], a, l) => {
    var d;
    let [, c] = (d = l[a + 1]) != null ? d : [];
    return c = parseFloat(c) > 0 ? _e(c) : void 0, {
      _minW: _e(u),
      breakpoint: s,
      minW: u,
      maxW: c,
      maxWQuery: X(null, c),
      minWQuery: X(u),
      minMaxQuery: X(u, c)
    };
  }), o = mr(e), n = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    asObject: me(e),
    asArray: he(e),
    details: t,
    medias: [null, ...r.map((s) => X(s)).slice(1)],
    isResponsive(s) {
      return nr(s, n);
    },
    toArrayValue(s) {
      if (!T(s))
        throw new Error("toArrayValue: value must be an object");
      return tr(s, n);
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return or(s, n);
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
const fr = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], Ee = /!(important)?$/;
function gr(e) {
  return Ee.test(e);
}
function br(e) {
  return e.replace(Ee, "").trim();
}
function hr(e, r, t) {
  var s;
  if (e == null)
    return;
  const o = String(e), n = br(o);
  let i = (s = t[r][n]) != null ? s : Ye(t[r], n);
  return i == null && (i = fr.includes(r) ? n : Q(n)), gr(o) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function ee(e, r) {
  var n;
  const t = {}, o = lr(e)(r);
  for (let i in o) {
    let s = y(o[i], r);
    if (s == null)
      continue;
    if (i.startsWith("_")) {
      const a = ur.get(i);
      if (a == null)
        continue;
      i = a;
    }
    if (T(s)) {
      t[i] = Object.assign(
        {},
        t[i],
        ee(s, r)
      );
      continue;
    }
    const u = (n = cr.get(i)) != null ? n : [i];
    for (const a of u) {
      const l = r.themeMap[a];
      l != null && (s = hr(s, l, r.vars)), t[a] = s;
    }
  }
  return t;
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */
function _r(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function xr(e) {
  let r = e.replace("#", "");
  if (r.length === 3) {
    const s = r.split("");
    r = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  const t = parseInt(r, 16), o = t >> 16 & 255, n = t >> 8 & 255, i = t & 255;
  return {
    r: o,
    g: n,
    b: i,
    a: 1
  };
}
function yr(e) {
  const [r, t, o, n] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g: t, b: o, a: n || 1 };
}
function Sr(e) {
  return _r(e) ? xr(e) : e.startsWith("rgb") ? yr(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function ne(e) {
  const { r, g: t, b: o } = Sr(e);
  return `${r} ${t} ${o}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function E(e) {
  return {
    ...e,
    mainChannel: ne(e[500]),
    lightChannel: ne(e[100]),
    darkChannel: ne(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const re = "hope";
function vr(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function kr(e) {
  const r = vr(e.toString());
  return Rr(Cr(r));
}
function Cr(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Rr(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Tr(e, r = "") {
  return [r, e].filter(Boolean).join("-");
}
function $r(e, r) {
  return `var(${e}${r ? `, ${r}` : ""})`;
}
function wr(e, r = "") {
  return kr(`--${Tr(e, r)}`);
}
function Er(e, r, t = re) {
  const o = wr(e, t);
  return {
    variable: o,
    reference: $r(o, r)
  };
}
function Or(e = re) {
  return (r) => `var(--${e ? `${e}-` : ""}${r})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const H = "__";
function ie(e, r, t) {
  return Er(String(r).replace(e, "-"), void 0, t);
}
function Pr(e, r) {
  const t = {}, o = {}, n = {}, { colors: i, ...s } = e, u = { colors: i.light }, a = { colors: i.dark }, l = K(u, H), c = K(a, H), d = K(s, H), m = new RegExp(`(${H}|\\.)`, "g");
  for (const [f, h] of Object.entries(l)) {
    const { variable: g, reference: S } = ie(m, f, r);
    t[g] = h, n[f] = S;
  }
  for (const [f, h] of Object.entries(c)) {
    const { variable: g } = ie(m, f, r);
    o[g] = h;
  }
  for (const [f, h] of Object.entries(d)) {
    const { variable: g, reference: S } = ie(m, f, r);
    t[g] = h, n[f] = S;
  }
  const $ = Ke(n, H);
  return { cssVarsValues: {
    root: t,
    dark: o
  }, vars: $ };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const Nr = [
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
function Vr(e) {
  return qe(e, Nr);
}
function Lr(e) {
  const { vars: r, __cssVarsValues: t, __breakpoints: o, ...n } = e;
  return n;
}
function Oe(e) {
  const r = Lr(e), t = Vr(r), { cssVarsValues: o, vars: n } = Pr(t, r.cssVarPrefix);
  return Object.assign(r, {
    vars: n,
    __cssVarsValues: o,
    __breakpoints: pr(r.breakpoints)
  }), r;
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
function Pe(e) {
  const r = Or(e);
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
      primary: E({
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
      neutral: E({
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
      success: E({
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
      info: E({
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
      warning: E({
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
      danger: E({
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
        foreground: r("colors-neutral-800"),
        background: r("colors-common-white"),
        focusRing: r("colors-primary-500")
      }
    },
    dark: {
      common: {
        foreground: r("colors-neutral-200"),
        background: r("colors-neutral-900"),
        focusRing: r("colors-primary-600")
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
const jr = {
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
}, xe = {
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
}, Br = {
  colors: Pe(re),
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
  space: xe,
  sizes: {
    ...xe,
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
}, Ar = {
  ...Br,
  cssVarPrefix: re,
  themeMap: jr,
  components: {}
}, pe = Oe(Ar);
function ht(e) {
  let r = pe;
  e.cssVarPrefix != null && (r = {
    ...r,
    colors: Pe(e.cssVarPrefix)
  });
  const t = {
    value: r
  };
  return ae(t, "value", e), Oe(t.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function _t(e) {
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
function Ir(e) {
  le({
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
function zr(e) {
  le({
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
const Ne = Me(pe);
function P() {
  return Fe(Ne);
}
function Wr(e) {
  const r = P();
  return R(() => {
    var t;
    if (e != null)
      return (t = r.components[e]) != null ? t : void 0;
  });
}
function xt(e, r, t) {
  const o = P();
  return De(r, () => {
    var i, s;
    return (s = (i = o.components[e]) == null ? void 0 : i.defaultProps) != null ? s : {};
  }, t);
}
function yt(e) {
  var t;
  const r = (t = e.theme) != null ? t : pe;
  return Ir(r), e.withCssReset && zr(r.vars), Se(Ne.Provider, {
    value: r,
    get children() {
      return e.children;
    }
  });
}
function St(e) {
  const r = Z((t) => {
    const {
      "@import": o,
      "@font-face": n,
      ...i
    } = y(e, t), s = Object.entries(i).reduce((u, [a, l]) => (u[a] = ee(l, t), u), {});
    le({
      "@import": o != null ? o : [],
      "@font-face": n != null ? n : {},
      ...s
    })();
  });
  return function() {
    const o = P();
    r(o);
  };
}
function vt(e) {
  return e;
}
function O(e, r) {
  return Re(ee(e, r))().className;
}
function ue(e, r) {
  for (const t of Object.keys(e))
    if (e[t] !== r[t])
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
function ye(e, r) {
  return Object.entries(e).reduce((t, [o, n]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: u = []
    } = n;
    return t[o] = {
      baseClassName: O(i, r),
      variantClassNames: Object.entries(s).reduce((a, [l, c]) => (a[l] = Object.entries(c).reduce(
        (d, [m, $]) => (d[m] = O($, r), d),
        {}
      ), a), {}),
      compoundVariants: u.map((a) => [
        a.variants,
        O(a.style, r)
      ])
    }, t;
  }, {});
}
function kt(e, r) {
  let t, o, n, i, s = [], u;
  const a = Z(
    (l, c, d) => {
      t = y(e, c), o = ye(
        t,
        c
      ), n = y(d, c), i = n && ye(n, c), s = Object.keys(t), u = Object.fromEntries(
        s.map((m) => [m, `hope-${l}-${m}`])
      );
    }
  );
  return function(c, d) {
    var S;
    const m = P(), $ = Wr(c);
    a(c, m, (S = $()) == null ? void 0 : S.styleConfigOverride);
    const M = R(() => y(d.styleConfigOverride, m)), f = R(() => {
      const [v, b] = ve(d, ["styleConfigOverride", "unstyled"]);
      return {
        ...r,
        ...q(b)
      };
    }), h = R(() => s.reduce((v, b) => {
      var N, V, L, j, B, k, A, I, fe, ge, be;
      let _ = "", F = {}, D = [];
      d.unstyled || (_ = (N = o[b].baseClassName) != null ? N : "", F = (V = o[b].variantClassNames) != null ? V : {}, D = (L = o[b].compoundVariants) != null ? L : []);
      const te = (B = (j = i == null ? void 0 : i[b]) == null ? void 0 : j.baseClassName) != null ? B : "", G = (A = (k = i == null ? void 0 : i[b]) == null ? void 0 : k.variantClassNames) != null ? A : {}, U = (fe = (I = i == null ? void 0 : i[b]) == null ? void 0 : I.compoundVariants) != null ? fe : [], w = [u[b], _, te];
      for (const z in f()) {
        const W = f()[z];
        W != null && (w.push((ge = F[z]) == null ? void 0 : ge[String(W)]), w.push((be = G[z]) == null ? void 0 : be[String(W)]));
      }
      for (const [z, W] of [...D, ...U])
        ue(z, f()) && w.push(W);
      return v[b] = ce(...w), v;
    }, {})), g = R(() => {
      const v = M();
      return v == null ? {} : s.reduce((b, _) => {
        var G, U, w, N, V, L, j, B;
        const F = (U = (G = v[_]) == null ? void 0 : G.baseStyle) != null ? U : {}, D = (N = (w = v[_]) == null ? void 0 : w.variants) != null ? N : {}, te = (L = (V = v[_]) == null ? void 0 : V.compoundVariants) != null ? L : [];
        b[_] = F;
        for (const k in f()) {
          const A = f()[k];
          if (A == null)
            continue;
          const I = (B = (j = D[k]) == null ? void 0 : j[String(A)]) != null ? B : {};
          Ce(I) || ae(b, _, I);
        }
        for (const k of te)
          ue(k.variants, f()) && ae(b, _, k.style);
        return b;
      }, {});
    });
    return { baseClasses: h, styleOverrides: g };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function Ve(e, r) {
  const { baseStyle: t = {}, variants: o = {}, compoundVariants: n = [] } = e;
  return {
    baseClassName: O(t, r),
    variantClassNames: Object.entries(o).reduce((i, [s, u]) => (i[s] = Object.entries(u).reduce(
      (a, [l, c]) => (a[l] = O(c, r), a),
      {}
    ), i), {}),
    compoundVariants: n.map((i) => [
      i.variants,
      O(i.style, r)
    ])
  };
}
function Le(e, r) {
  var i;
  const { variantClassNames: t = {}, compoundVariants: o = [] } = e, n = [];
  for (const s in r) {
    const u = r[s];
    u != null && n.push((i = t[s]) == null ? void 0 : i[String(u)]);
  }
  for (const [s, u] of o)
    ue(s, r) && n.push(u);
  return n;
}
function Ct(e) {
  let r, t;
  const o = Z((n) => {
    r = y(e, n), t = Ve(r, n);
  });
  return function(i = {}) {
    const s = P();
    return o(s), R(() => {
      if (r == null || t == null)
        return "";
      const a = {
        ...r.defaultVariants,
        ...q(i)
      }, l = Le(t, a);
      return ce(t.baseClassName, l);
    });
  };
}
const Hr = {
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
}, Mr = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Fr = {
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
}, Dr = {
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
}, Gr = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Ur = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, Xr = {
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
}, Kr = {
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
}, Yr = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, qr = {
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
}, Qr = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Jr = {
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
}, Zr = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, et = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, rt = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, tt = {
  objectFit: !0,
  objectPosition: !0
}, ot = {
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
}, nt = {
  ...Hr,
  ...Mr,
  ...Fr,
  ...Dr,
  ...Gr,
  ...Ur,
  ...Xr,
  ...Kr,
  ...Yr,
  ...qr,
  ...Qr,
  ...Jr,
  ...Zr,
  ...et,
  ...rt,
  ...tt,
  ...ot
};
function it(e) {
  return Object.keys(e).filter((r) => r in nt);
}
const je = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function st(e) {
  return Object.entries(e).reduce((r, [t, o]) => {
    const n = je.get(t);
    return n != null && o != null && (r[n] = o), r;
  }, {});
}
const at = Re({});
function se(e, r, t) {
  let o, n, i = [];
  const s = Z((a) => {
    r != null && (o = y(r, a), n = Ve(o, a), i = o.variants ? Object.keys(o.variants) : []);
  }), u = (a) => {
    const l = P();
    s(l);
    const [c, d, m, $, M] = ve(
      a,
      ["as", "class", "sx", "__css"],
      [...je.keys()],
      i,
      it(a)
    ), f = R(() => {
      if (n == null)
        return [];
      const g = {
        ...o == null ? void 0 : o.defaultVariants,
        ...q(m)
      };
      return Le(n, g);
    }), h = R(() => {
      const g = Object.assign({}, c.__css, q($), ...Xe(c.sx).map((S) => y(S, l)));
      if (!Ce(g))
        return at({
          css: ee(g, l)
        }).className;
    });
    return Se(Ae, Ie({
      get component() {
        var g;
        return (g = c.as) != null ? g : e;
      },
      get class() {
        return ce(t, n == null ? void 0 : n.baseClassName, ...f(), h(), c.class) || void 0;
      }
    }, () => st(d), M));
  };
  return t != null && (u.toString = () => `.${t}`), u;
}
function ut() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(se, {
    apply(r, t, o) {
      return se(...o);
    },
    get(r, t) {
      return e.has(t) || e.set(t, se(t)), e.get(t);
    }
  });
}
const Rt = ut();
var ct = ["<style", ' id="stitches">', "</style>"];
function Tt() {
  ze(() => We(ct, He(), er()));
}
const $t = Te({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), wt = Te({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
export {
  de as COLOR_MODE_CLASSNAMES,
  pe as DEFAULT_THEME,
  jr as DEFAULT_THEME_MAP,
  bt as STYLE_CONFIG_PROP_NAMES,
  yt as ThemeProvider,
  or as arrayToObjectNotation,
  Ve as computeStyleOptions,
  St as createGlobalStyles,
  vt as createHopeComponent,
  E as createPalette,
  kt as createStyleConfig,
  Ct as createStyles,
  ht as extendTheme,
  wt as fadeIn,
  _t as focusStyles,
  Le as getSelectedVariantClassNames,
  Rt as hope,
  Tt as injectCriticalStyle,
  rr as isColorModeObjectLike,
  nr as isResponsiveObjectLike,
  Te as keyframes,
  gt as mapResponsive,
  xt as mergeThemeProps,
  tr as objectToArrayNotation,
  Xe as pack,
  hr as resolveTokenValue,
  $t as spin,
  Wr as useComponentTheme,
  P as useTheme
};
