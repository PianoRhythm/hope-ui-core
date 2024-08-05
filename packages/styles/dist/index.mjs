import { createContext as nt, useContext as it, createMemo as H, mergeProps as st, splitProps as Ve } from "solid-js";
import { createComponent as He, Dynamic as at, mergeProps as lt, useAssets as ct, effect as dt, template as ut } from "solid-js/web";
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function De(e) {
  return typeof e == "number";
}
function de(e) {
  return Array.isArray(e);
}
function pt(e) {
  return typeof e == "function";
}
function D(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !de(e);
}
function Fe(e) {
  return D(e) && Object.keys(e).length === 0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function ft(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function gt(e) {
  return e == null ? [] : de(e) ? e : [e];
}
function A(e, ...t) {
  return pt(e) ? e(...t) : e;
}
function ue(e) {
  let t = !1;
  return function(...r) {
    t || (t = !0, e(...r));
  };
}
function ie(e, t, r = 1 / 0) {
  return !D(e) && !Array.isArray(e) || !r ? e : Object.entries(e).reduce((o, [n, i]) => (D(i) || de(i) ? Object.entries(ie(i, t, r - 1)).forEach(([s, l]) => {
    o[`${n}${t}${s}`] = l;
  }) : o[n] = i, o), {});
}
function mt(e, t) {
  return Object.keys(e).reduce((r, o) => (o.split(t).reduce((n, i, s, l) => (n[i] != null || (n[i] = l.length - 1 === s ? e[o] : {}), n[i]), r), r), {});
}
function ht(e, t) {
  return t.split(".").reduce((r, o) => r && r[o], e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function bt(e, t) {
  const r = {};
  return t.forEach((o) => {
    o in e && (r[o] = e[o]);
  }), r;
}
const St = (e) => Object.keys(e);
function yt(e, t) {
  const r = {};
  return Object.keys(e).forEach((o) => {
    const n = e[o];
    t(n, o, e) && (r[o] = n);
  }), r;
}
function le(e) {
  return yt(e, (t) => t != null);
}
var S = "colors", T = "sizes", u = "space", xt = { gap: u, gridGap: u, columnGap: u, gridColumnGap: u, rowGap: u, gridRowGap: u, inset: u, insetBlock: u, insetBlockEnd: u, insetBlockStart: u, insetInline: u, insetInlineEnd: u, insetInlineStart: u, margin: u, marginTop: u, marginRight: u, marginBottom: u, marginLeft: u, marginBlock: u, marginBlockEnd: u, marginBlockStart: u, marginInline: u, marginInlineEnd: u, marginInlineStart: u, padding: u, paddingTop: u, paddingRight: u, paddingBottom: u, paddingLeft: u, paddingBlock: u, paddingBlockEnd: u, paddingBlockStart: u, paddingInline: u, paddingInlineEnd: u, paddingInlineStart: u, top: u, right: u, bottom: u, left: u, scrollMargin: u, scrollMarginTop: u, scrollMarginRight: u, scrollMarginBottom: u, scrollMarginLeft: u, scrollMarginX: u, scrollMarginY: u, scrollMarginBlock: u, scrollMarginBlockEnd: u, scrollMarginBlockStart: u, scrollMarginInline: u, scrollMarginInlineEnd: u, scrollMarginInlineStart: u, scrollPadding: u, scrollPaddingTop: u, scrollPaddingRight: u, scrollPaddingBottom: u, scrollPaddingLeft: u, scrollPaddingX: u, scrollPaddingY: u, scrollPaddingBlock: u, scrollPaddingBlockEnd: u, scrollPaddingBlockStart: u, scrollPaddingInline: u, scrollPaddingInlineEnd: u, scrollPaddingInlineStart: u, fontSize: "fontSizes", background: S, backgroundColor: S, backgroundImage: S, borderImage: S, border: S, borderBlock: S, borderBlockEnd: S, borderBlockStart: S, borderBottom: S, borderBottomColor: S, borderColor: S, borderInline: S, borderInlineEnd: S, borderInlineStart: S, borderLeft: S, borderLeftColor: S, borderRight: S, borderRightColor: S, borderTop: S, borderTopColor: S, caretColor: S, color: S, columnRuleColor: S, fill: S, outline: S, outlineColor: S, stroke: S, textDecorationColor: S, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: T, minBlockSize: T, maxBlockSize: T, inlineSize: T, minInlineSize: T, maxInlineSize: T, width: T, minWidth: T, maxWidth: T, height: T, minHeight: T, maxHeight: T, flexBasis: T, gridTemplateColumns: T, gridTemplateRows: T, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, kt = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, oe = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, r, ...o) => {
    const n = ((i) => JSON.stringify(i, kt))(t);
    return n in e ? e[n] : e[n] = r(t, ...o);
  };
}, se = Symbol.for("sxs.internal"), $e = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), je = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: _t } = Object.prototype, ye = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), $t = /\s+(?![^()]*\))/, U = (e) => (t) => e(...typeof t == "string" ? String(t).split($t) : [t]), ze = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: U((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: U((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: U((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: U((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: U((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: U((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, ge = /([\d.]+)([^]*)/, Rt = (e, t) => e.length ? e.reduce((r, o) => (r.push(...t.map((n) => n.includes("&") ? n.replace(/&/g, /[ +>|~]/.test(o) && /&.*&/.test(n) ? `:is(${o})` : o) : o + " " + n)), r), []) : t, vt = (e, t) => e in Ct && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (r, o, n, i) => o + (n === "stretch" ? `-moz-available${i};${ye(e)}:${o}-webkit-fill-available` : `-moz-fit-content${i};${ye(e)}:${o}fit-content`) + i) : String(t), Ct = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, M = (e) => e ? e + "-" : "", Ge = (e, t, r) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (o, n, i, s, l) => s == "$" == !!i ? o : (n || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? M(t) + (l.includes("$") ? "" : M(r)) + l.replace(/\$/g, "-") : l) + ")" + (n || s == "--" ? "*" + (n || "") + (i || "1") + ")" : "")), Bt = /\s*,\s*(?![^()]*\))/, Tt = Object.prototype.toString, Y = (e, t, r, o, n) => {
  let i, s, l;
  const a = (d, p, g) => {
    let c, f;
    const h = (b) => {
      for (c in b) {
        const y = c.charCodeAt(0) === 64, w = y && Array.isArray(b[c]) ? b[c] : [b[c]];
        for (f of w) {
          const k = /[A-Z]/.test(m = c) ? m : m.replace(/-[^]/g, (_) => _[1].toUpperCase()), B = typeof f == "object" && f && f.toString === Tt && (!o.utils[k] || !p.length);
          if (k in o.utils && !B) {
            const _ = o.utils[k];
            if (_ !== s) {
              s = _, h(_(f)), s = null;
              continue;
            }
          } else if (k in ze) {
            const _ = ze[k];
            if (_ !== l) {
              l = _, h(_(f)), l = null;
              continue;
            }
          }
          if (y && (x = c.slice(1) in o.media ? "@media " + o.media[c.slice(1)] : c, c = x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (_, $, I, E, R, v) => {
            const j = ge.test($), P = 0.0625 * (j ? -1 : 1), [W, N] = j ? [E, $] : [$, E];
            return "(" + (I[0] === "=" ? "" : I[0] === ">" === j ? "max-" : "min-") + W + ":" + (I[0] !== "=" && I.length === 1 ? N.replace(ge, (F, z, O) => Number(z) + P * (I === ">" ? 1 : -1) + O) : N) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + W + ":" + (R.length === 1 ? v.replace(ge, (F, z, O) => Number(z) + P * (R === ">" ? -1 : 1) + O) : v) : "") + ")";
          })), B) {
            const _ = y ? g.concat(c) : [...g], $ = y ? [...p] : Rt(p, c.split(Bt));
            i !== void 0 && n(Pe(...i)), i = void 0, a(f, $, _);
          } else
            i === void 0 && (i = [[], p, g]), c = y || c.charCodeAt(0) !== 36 ? c : `--${M(o.prefix)}${c.slice(1).replace(/\$/g, "-")}`, f = B ? f : typeof f == "number" ? f && k in It ? String(f) + "px" : String(f) : Ge(vt(k, f == null ? "" : f), o.prefix, o.themeMap[k]), i[0].push(`${y ? `${c} ` : `${ye(c)}:`}${f}`);
        }
      }
      var x, m;
    };
    h(d), i !== void 0 && n(Pe(...i)), i = void 0;
  };
  a(e, t, r);
}, Pe = (e, t, r) => `${r.map((o) => `${o}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(r.length ? r.length + 1 : 0).join("}")}`, It = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, We = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), G = (e) => ((t) => {
  let r, o = "";
  for (r = Math.abs(t); r > 52; r = r / 52 | 0)
    o = We(r % 52) + o;
  return We(r % 52) + o;
})(((t, r) => {
  let o = r.length;
  for (; o; )
    t = 33 * t ^ r.charCodeAt(--o);
  return t;
})(5381, JSON.stringify(e)) >>> 0), re = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Et = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, wt = (e) => {
  let t;
  const r = () => {
    const { cssRules: n } = t.sheet;
    return [].map.call(n, (i, s) => {
      const { cssText: l } = i;
      let a = "";
      if (l.startsWith("--sxs"))
        return "";
      if (n[s - 1] && (a = n[s - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === i)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${l}`;
        return i.cssRules.length ? `${a}${l}` : "";
      }
      return l;
    }).join("");
  }, o = () => {
    if (t) {
      const { rules: l, sheet: a } = t;
      if (!a.deleteRule) {
        for (; Object(Object(a.cssRules)[0]).type === 3; )
          a.cssRules.splice(0, 1);
        a.cssRules = [];
      }
      for (const d in l)
        delete l[d];
    }
    const n = Object(e).styleSheets || [];
    for (const l of n)
      if (Et(l)) {
        for (let a = 0, d = l.cssRules; d[a]; ++a) {
          const p = Object(d[a]);
          if (p.type !== 1)
            continue;
          const g = Object(d[a + 1]);
          if (g.type !== 4)
            continue;
          ++a;
          const { cssText: c } = p;
          if (!c.startsWith("--sxs"))
            continue;
          const f = c.slice(14, -3).trim().split(/\s+/), h = re[f[0]];
          h && (t || (t = { sheet: l, reset: o, rules: {}, toString: r }), t.rules[h] = { group: g, index: a, cache: new Set(f) });
        }
        if (t)
          break;
      }
    if (!t) {
      const l = (a, d) => ({ type: d, cssRules: [], insertRule(p, g) {
        this.cssRules.splice(g, 0, l(p, { import: 3, undefined: 1 }[(p.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return a === "@media{}" ? `@media{${[].map.call(this.cssRules, (p) => p.cssText).join("")}}` : a;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : l("", "text/css"), rules: {}, reset: o, toString: r };
    }
    const { sheet: i, rules: s } = t;
    for (let l = re.length - 1; l >= 0; --l) {
      const a = re[l];
      if (!s[a]) {
        const d = re[l + 1], p = s[d] ? s[d].index : i.cssRules.length;
        i.insertRule("@media{}", p), i.insertRule(`--sxs{--sxs:${l}}`, p), s[a] = { group: i.cssRules[p + 1], index: p, cache: /* @__PURE__ */ new Set([l]) };
      }
      jt(s[a]);
    }
  };
  return o(), t;
}, jt = (e) => {
  const t = e.group;
  let r = t.cssRules.length;
  e.apply = (o) => {
    try {
      t.insertRule(o, r), ++r;
    } catch {
    }
  };
}, ee = Symbol(), zt = oe(), Pt = (e, t) => zt(e, () => (...r) => {
  let o = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const n of r)
    if (n != null)
      if (n[se]) {
        o.type == null && (o.type = n[se].type);
        for (const i of n[se].composers)
          o.composers.add(i);
      } else
        n.constructor !== Object || n.$$typeof ? o.type == null && (o.type = n) : o.composers.add(Wt(n, e));
  return o.type == null && (o.type = "span"), o.composers.size || o.composers.add(["PJLV", {}, [], [], {}, []]), Ot(e, o, t);
}), Wt = ({ variants: e, compoundVariants: t, defaultVariants: r, ...o }, n) => {
  const i = `${M(n.prefix)}c-${G(o)}`, s = [], l = [], a = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in r)
    a[c] = String(r[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      p = a, g = c, _t.call(p, g) || (a[c] = "undefined");
      const f = e[c];
      for (const h in f) {
        const b = { [c]: String(h) };
        String(h) === "undefined" && d.push(c);
        const x = f[h], m = [b, x, !je(x)];
        s.push(m);
      }
    }
  var p, g;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: f, ...h } = c;
      f = typeof f == "object" && f || {};
      for (const x in h)
        h[x] = String(h[x]);
      const b = [h, f, !je(f)];
      l.push(b);
    }
  return [i, o, s, l, a, d];
}, Ot = (e, t, r) => {
  const [o, n, i, s] = Lt(t.composers), l = typeof t.type == "function" || t.type.$$typeof ? ((g) => {
    function c() {
      for (let f = 0; f < c[ee].length; f++) {
        const [h, b] = c[ee][f];
        g.rules[h].apply(b);
      }
      return c[ee] = [], null;
    }
    return c[ee] = [], c.rules = {}, re.forEach((f) => c.rules[f] = { apply: (h) => c[ee].push([f, h]) }), c;
  })(r) : null, a = (l || r).rules, d = `.${o}${n.length > 1 ? `:where(.${n.slice(1).join(".")})` : ""}`, p = (g) => {
    g = typeof g == "object" && g || At;
    const { css: c, ...f } = g, h = {};
    for (const m in i)
      if (delete f[m], m in g) {
        let y = g[m];
        typeof y == "object" && y ? h[m] = { "@initial": i[m], ...y } : (y = String(y), h[m] = y !== "undefined" || s.has(m) ? y : i[m]);
      } else
        h[m] = i[m];
    const b = /* @__PURE__ */ new Set([...n]);
    for (const [m, y, w, k] of t.composers) {
      r.rules.styled.cache.has(m) || (r.rules.styled.cache.add(m), Y(y, [`.${m}`], [], e, ($) => {
        a.styled.apply($);
      }));
      const B = Oe(w, h, e.media), _ = Oe(k, h, e.media, !0);
      for (const $ of B)
        if ($ !== void 0)
          for (const [I, E, R] of $) {
            const v = `${m}-${G(E)}-${I}`;
            b.add(v);
            const j = (R ? r.rules.resonevar : r.rules.onevar).cache, P = R ? a.resonevar : a.onevar;
            j.has(v) || (j.add(v), Y(E, [`.${v}`], [], e, (W) => {
              P.apply(W);
            }));
          }
      for (const $ of _)
        if ($ !== void 0)
          for (const [I, E] of $) {
            const R = `${m}-${G(E)}-${I}`;
            b.add(R), r.rules.allvar.cache.has(R) || (r.rules.allvar.cache.add(R), Y(E, [`.${R}`], [], e, (v) => {
              a.allvar.apply(v);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const m = `${o}-i${G(c)}-css`;
      b.add(m), r.rules.inline.cache.has(m) || (r.rules.inline.cache.add(m), Y(c, [`.${m}`], [], e, (y) => {
        a.inline.apply(y);
      }));
    }
    for (const m of String(g.className || "").trim().split(/\s+/))
      m && b.add(m);
    const x = f.className = [...b].join(" ");
    return { type: t.type, className: x, selector: d, props: f, toString: () => x, deferredInjector: l };
  };
  return $e(p, { className: o, selector: d, [se]: t, toString: () => (r.rules.styled.cache.has(o) || p(), o) });
}, Lt = (e) => {
  let t = "";
  const r = [], o = {}, n = [];
  for (const [i, , , , s, l] of e) {
    t === "" && (t = i), r.push(i), n.push(...l);
    for (const a in s) {
      const d = s[a];
      (o[a] === void 0 || d !== "undefined" || l.includes(d)) && (o[a] = d);
    }
  }
  return [t, r, o, new Set(n)];
}, Oe = (e, t, r, o) => {
  const n = [];
  e:
    for (let [i, s, l] of e) {
      if (l)
        continue;
      let a, d = 0, p = !1;
      for (a in i) {
        const g = i[a];
        let c = t[a];
        if (c !== g) {
          if (typeof c != "object" || !c)
            continue e;
          {
            let f, h, b = 0;
            for (const x in c) {
              if (g === String(c[x])) {
                if (x !== "@initial") {
                  const m = x.slice(1);
                  (h = h || []).push(m in r ? r[m] : x.replace(/^@media ?/, "")), p = !0;
                }
                d += b, f = !0;
              }
              ++b;
            }
            if (h && h.length && (s = { ["@media " + h.join(", ")]: s }), !f)
              continue e;
          }
        }
      }
      (n[d] = n[d] || []).push([o ? "cv" : `${a}-${i[a]}`, s, p]);
    }
  return n;
}, At = {}, Mt = oe(), Nt = (e, t) => Mt(e, () => (...r) => {
  const o = () => {
    for (let n of r) {
      n = typeof n == "object" && n || {};
      let i = G(n);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in n) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let l of [].concat(n["@import"]))
            l = l.includes('"') || l.includes("'") ? l : `"${l}"`, t.sheet.insertRule(`@import ${l};`, s++);
          delete n["@import"];
        }
        Y(n, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return $e(o, { toString: o });
}), Vt = oe(), Ht = (e, t) => Vt(e, () => (r) => {
  const o = `${M(e.prefix)}k-${G(r)}`, n = () => {
    if (!t.rules.global.cache.has(o)) {
      t.rules.global.cache.add(o);
      const i = [];
      Y(r, [], [], e, (l) => i.push(l));
      const s = `@keyframes ${o}{${i.join("")}}`;
      t.rules.global.apply(s);
    }
    return o;
  };
  return $e(n, { get name() {
    return n();
  }, toString: n });
}), Dt = class {
  constructor(e, t, r, o) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = r == null ? "" : String(r), this.prefix = o == null ? "" : String(o);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + M(this.prefix) + M(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Ft = oe(), Gt = (e, t) => Ft(e, () => (r, o) => {
  o = typeof r == "object" && r || Object(o);
  const n = `.${r = (r = typeof r == "string" ? r : "") || `${M(e.prefix)}t-${G(o)}`}`, i = {}, s = [];
  for (const a in o) {
    i[a] = {};
    for (const d in o[a]) {
      const p = `--${M(e.prefix)}${a}-${d}`, g = Ge(String(o[a][d]), e.prefix, a);
      i[a][d] = new Dt(d, g, a, e.prefix), s.push(`${p}:${g}`);
    }
  }
  const l = () => {
    if (s.length && !t.rules.themed.cache.has(r)) {
      t.rules.themed.cache.add(r);
      const a = `${o === e.theme ? ":root," : ""}.${r}{${s.join(";")}}`;
      t.rules.themed.apply(a);
    }
    return r;
  };
  return { ...i, get className() {
    return l();
  }, selector: n, toString: l };
}), Ut = oe(), Xt = (e) => {
  let t = !1;
  const r = Ut(e, (o) => {
    t = !0;
    const n = "prefix" in (o = typeof o == "object" && o || {}) ? String(o.prefix) : "", i = typeof o.media == "object" && o.media || {}, s = typeof o.root == "object" ? o.root || null : globalThis.document || null, l = typeof o.theme == "object" && o.theme || {}, a = { prefix: n, media: i, theme: l, themeMap: typeof o.themeMap == "object" && o.themeMap || { ...xt }, utils: typeof o.utils == "object" && o.utils || {} }, d = wt(s), p = { css: Pt(a, d), globalCss: Nt(a, d), keyframes: Ht(a, d), createTheme: Gt(a, d), reset() {
      d.reset(), p.theme.toString();
    }, theme: {}, sheet: d, config: a, prefix: n, getCssText: d.toString, toString: d.toString };
    return String(p.theme = p.createTheme(l)), p;
  });
  return t || r.reset(), r;
};
const Yt = Xt({ prefix: "hope" }), { css: Ue, globalCss: Re, getCssText: qt, keyframes: Xe } = Yt, ve = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Jt(e) {
  const t = Object.keys(e);
  return t.length > 0 && t.every((r) => ["light", "dark"].includes(r));
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */
function ao(e, t) {
  return de(e) ? e.map((r) => r === null ? null : t(r)) : D(e) ? St(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function Kt(e, t) {
  const r = t.map((o) => {
    var n;
    return (n = e[o]) != null ? n : null;
  });
  for (; ft(r) === null; )
    r.pop();
  return r;
}
function Qt(e, t) {
  const r = {};
  return e.forEach((o, n) => {
    const i = t[n];
    o != null && (r[i] = o);
  }), r;
}
function Zt(e, t) {
  const r = Object.keys(e);
  return r.length > 0 && r.every((o) => t.includes(o));
}
const lo = [
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
const C = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
};
function V(e) {
  return Ye((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function L(e) {
  return Ye((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function Ye(e, ...t) {
  return t.map(e).join(", ");
}
const er = "_light", ae = "_dark", tr = `.${ve.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, rr = `.${ve.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, or = /* @__PURE__ */ new Map([
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
  ["_groupHover", V(C.hover)],
  ["_peerHover", L(C.hover)],
  ["_groupFocus", V(C.focus)],
  ["_peerFocus", L(C.focus)],
  ["_groupFocusVisible", V(C.focusVisible)],
  ["_peerFocusVisible", L(C.focusVisible)],
  ["_groupActive", V(C.active)],
  ["_peerActive", L(C.active)],
  ["_groupDisabled", V(C.disabled)],
  ["_peerDisabled", L(C.disabled)],
  ["_groupInvalid", V(C.invalid)],
  ["_peerInvalid", L(C.invalid)],
  ["_groupChecked", V(C.checked)],
  ["_peerChecked", L(C.checked)],
  ["_groupFocusWithin", V(C.focusWithin)],
  ["_peerFocusWithin", L(C.focusWithin)],
  ["_peerPlaceholderShown", L(C.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [er, tr],
  [ae, rr]
]), nr = /* @__PURE__ */ new Map([
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
const ir = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: o, medias: n } = t.__breakpoints, i = {}, s = {};
  for (const l in e) {
    let a = A(e[l], t);
    if (a == null || me(l, a, i))
      continue;
    if (a = D(a) && r(a) ? o(a) : a, !Array.isArray(a)) {
      i[l] = a;
      continue;
    }
    const d = a.slice(0, n.length).length;
    for (let p = 0; p < d; p += 1) {
      const g = n == null ? void 0 : n[p], c = a[p];
      if (c != null) {
        if (!g) {
          me(l, c, i) || (i[l] = c);
          continue;
        }
        s[g] = s[g] || {}, me(l, c, s[g]) || (s[g][l] = c);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function me(e, t, r) {
  if (!D(t) || !Jt(t))
    return !1;
  const { light: o, dark: n } = t;
  return o != null && (r[e] = o), r[ae] = r[ae] || {}, n != null && (r[ae][e] = n), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function sr(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function ce(e) {
  if (e == null)
    return e;
  const { unitless: t } = sr(e);
  return t || De(e) ? `${e}px` : e;
}
const qe = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Ce = (e) => Object.fromEntries(Object.entries(e).sort(qe));
function Le(e) {
  const t = Ce(e);
  return Object.assign(Object.values(t), t);
}
function ar(e) {
  const t = Object.keys(Ce(e));
  return new Set(t);
}
function Ae(e) {
  var r;
  if (!e)
    return e;
  e = (r = ce(e)) != null ? r : e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return De(e) ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (o) => `${parseFloat(o) + t}`);
}
function ne(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${ce(e)})`), t && r.push("and", `(max-width: ${ce(t)})`), r.join(" ");
}
function lr(e) {
  var i;
  if (!e)
    return null;
  e.base = (i = e.base) != null ? i : "0px";
  const t = Le(e), r = Object.entries(e).sort(qe).map(([s, l], a, d) => {
    var g;
    let [, p] = (g = d[a + 1]) != null ? g : [];
    return p = parseFloat(p) > 0 ? Ae(p) : void 0, {
      _minW: Ae(l),
      breakpoint: s,
      minW: l,
      maxW: p,
      maxWQuery: ne(null, p),
      minWQuery: ne(l),
      minMaxQuery: ne(l, p)
    };
  }), o = ar(e), n = Array.from(o.values());
  return {
    keys: o,
    normalized: t,
    asObject: Ce(e),
    asArray: Le(e),
    details: r,
    medias: [null, ...t.map((s) => ne(s)).slice(1)],
    isResponsive(s) {
      return Zt(s, n);
    },
    toArrayValue(s) {
      if (!D(s))
        throw new Error("toArrayValue: value must be an object");
      return Kt(s, n);
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return Qt(s, n);
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
const cr = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], Je = /!(important)?$/;
function dr(e) {
  return Je.test(e);
}
function ur(e) {
  return e.replace(Je, "").trim();
}
function pr(e, t, r) {
  var s;
  if (e == null)
    return;
  const o = String(e), n = ur(o);
  let i = (s = r[t][n]) != null ? s : ht(r[t], n);
  return i == null && (i = cr.includes(t) ? n : ce(n)), dr(o) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function pe(e, t) {
  var n;
  const r = {}, o = ir(e)(t);
  for (let i in o) {
    let s = A(o[i], t);
    if (s == null)
      continue;
    if (i.startsWith("_")) {
      const a = or.get(i);
      if (a == null)
        continue;
      i = a;
    }
    if (D(s)) {
      r[i] = Object.assign(
        {},
        r[i],
        pe(s, t)
      );
      continue;
    }
    const l = (n = nr.get(i)) != null ? n : [i];
    for (const a of l) {
      const d = t.themeMap[a];
      d != null && (s = pr(s, d, t.vars)), r[a] = s;
    }
  }
  return r;
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */
function fr(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function gr(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const s = t.split("");
    t = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  const r = parseInt(t, 16), o = r >> 16 & 255, n = r >> 8 & 255, i = r & 255;
  return {
    r: o,
    g: n,
    b: i,
    a: 1
  };
}
function mr(e) {
  const [t, r, o, n] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: r, b: o, a: n || 1 };
}
function hr(e) {
  return fr(e) ? gr(e) : e.startsWith("rgb") ? mr(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function he(e) {
  const { r: t, g: r, b: o } = hr(e);
  return `${t} ${r} ${o}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function X(e) {
  return {
    ...e,
    mainChannel: he(e[500]),
    lightChannel: he(e[100]),
    darkChannel: he(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const fe = "hope";
function br(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Sr(e) {
  const t = br(e.toString());
  return xr(yr(t));
}
function yr(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function xr(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function kr(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function _r(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function $r(e, t = "") {
  return Sr(`--${kr(e, t)}`);
}
function Rr(e, t, r = fe) {
  const o = $r(e, r);
  return {
    variable: o,
    reference: _r(o, t)
  };
}
function vr(e = fe) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const te = "__";
function be(e, t, r) {
  return Rr(String(t).replace(e, "-"), void 0, r);
}
function Cr(e, t) {
  const r = {}, o = {}, n = {}, { colors: i, ...s } = e, l = { colors: i.light }, a = { colors: i.dark }, d = ie(l, te), p = ie(a, te), g = ie(s, te), c = new RegExp(`(${te}|\\.)`, "g");
  for (const [b, x] of Object.entries(d)) {
    const { variable: m, reference: y } = be(c, b, t);
    r[m] = x, n[b] = y;
  }
  for (const [b, x] of Object.entries(p)) {
    const { variable: m } = be(c, b, t);
    o[m] = x;
  }
  for (const [b, x] of Object.entries(g)) {
    const { variable: m, reference: y } = be(c, b, t);
    r[m] = x, n[b] = y;
  }
  const f = mt(n, te);
  return { cssVarsValues: {
    root: r,
    dark: o
  }, vars: f };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const Br = [
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
function Tr(e) {
  return bt(e, Br);
}
function Ir(e) {
  const { vars: t, __cssVarsValues: r, __breakpoints: o, ...n } = e;
  return n;
}
function Ke(e) {
  const t = Ir(e), r = Tr(t), { cssVarsValues: o, vars: n } = Cr(r, t.cssVarPrefix);
  return Object.assign(t, {
    vars: n,
    __cssVarsValues: o,
    __breakpoints: lr(t.breakpoints)
  }), t;
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
function Qe(e) {
  const t = vr(e);
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
      primary: X({
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
      neutral: X({
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
      success: X({
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
      info: X({
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
      warning: X({
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
      danger: X({
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
        foreground: t("colors-neutral-800"),
        background: t("colors-common-white"),
        focusRing: t("colors-primary-500")
      }
    },
    dark: {
      common: {
        foreground: t("colors-neutral-200"),
        background: t("colors-neutral-900"),
        focusRing: t("colors-primary-600")
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
const Er = {
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
}, Me = {
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
}, wr = {
  colors: Qe(fe),
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
  space: Me,
  sizes: {
    ...Me,
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
}, jr = {
  ...wr,
  cssVarPrefix: fe,
  themeMap: Er,
  components: {}
}, Be = Ke(jr);
function xe(e, t, r) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (r = 0; r < t.length; r++)
        e[r] = xe(e[r], t[r]);
    else
      for (r in t) {
        if (r === "__proto__" || r === "constructor" || r === "prototype")
          break;
        e[r] = xe(e[r], t[r]);
      }
    return e;
  }
  return t;
}
function ke(e, t, r) {
  t.split && (t = t.split("."));
  for (var o = 0, n = t.length, i = e, s, l; o < n && (l = t[o++], !(l === "__proto__" || l === "constructor" || l === "prototype")); )
    i = i[l] = o === n ? xe(i[l], r) : typeof (s = i[l]) == typeof t ? s : t[o] * 0 !== 0 || !!~("" + t[o]).indexOf(".") ? {} : [];
}
function co(e) {
  let t = Be;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: Qe(e.cssVarPrefix)
  });
  const r = {
    value: t
  };
  return ke(r, "value", e), Ke(r.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function uo(e) {
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
function zr(e) {
  Re({
    ":root": e.__cssVarsValues.root,
    [`.${ve.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function Pr(e) {
  Re({
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
const Ze = nt(Be);
function J() {
  return it(Ze);
}
function Wr(e) {
  const t = J();
  return H(() => {
    var r;
    if (e != null)
      return (r = t.components[e]) != null ? r : void 0;
  });
}
function po(e, t, r) {
  const o = J();
  return st(t, () => {
    var i, s;
    return (s = (i = o.components[e]) == null ? void 0 : i.defaultProps) != null ? s : {};
  }, r);
}
function fo(e) {
  var r;
  const t = (r = e.theme) != null ? r : Be;
  return zr(t), e.withCssReset && Pr(t.vars), He(Ze.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function go(e) {
  const t = ue((r) => {
    const {
      "@import": o,
      "@font-face": n,
      ...i
    } = A(e, r), s = Object.entries(i).reduce((l, [a, d]) => (l[a] = pe(d, r), l), {});
    Re({
      "@import": o != null ? o : [],
      "@font-face": n != null ? n : {},
      ...s
    })();
  });
  return function() {
    const o = J();
    t(o);
  };
}
function mo(e) {
  return e;
}
function et(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = et(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function Te() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = et(e)) && (o && (o += " "), o += t);
  return o;
}
function q(e, t) {
  return Ue(pe(e, t))().className;
}
function _e(e, t) {
  for (const r of Object.keys(e))
    if (e[r] !== t[r])
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
function Ne(e, t) {
  return Object.entries(e).reduce((r, [o, n]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: l = []
    } = n;
    return r[o] = {
      baseClassName: q(i, t),
      variantClassNames: Object.entries(s).reduce((a, [d, p]) => (a[d] = Object.entries(p).reduce(
        (g, [c, f]) => (g[c] = q(f, t), g),
        {}
      ), a), {}),
      compoundVariants: l.map((a) => [
        a.variants,
        q(a.style, t)
      ])
    }, r;
  }, {});
}
function ho(e, t) {
  let r, o, n, i, s = [], l;
  const a = ue(
    (d, p, g) => {
      r = A(e, p), o = Ne(
        r,
        p
      ), n = A(g, p), i = n && Ne(n, p), s = Object.keys(r), l = Object.fromEntries(
        s.map((c) => [c, `hope-${d}-${c}`])
      );
    }
  );
  return function(p, g) {
    var y;
    const c = J(), f = Wr(p);
    a(p, c, (y = f()) == null ? void 0 : y.styleConfigOverride);
    const h = H(() => A(g.styleConfigOverride, c)), b = H(() => {
      const [w, k] = Ve(g, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...le(k)
      };
    }), x = H(() => s.reduce((w, k) => {
      var j, P, W, N, F, z, O, K, Ie, Ee, we;
      let B = "", _ = {}, $ = [];
      g.unstyled || (B = (j = o[k].baseClassName) != null ? j : "", _ = (P = o[k].variantClassNames) != null ? P : {}, $ = (W = o[k].compoundVariants) != null ? W : []);
      const I = (F = (N = i == null ? void 0 : i[k]) == null ? void 0 : N.baseClassName) != null ? F : "", E = (O = (z = i == null ? void 0 : i[k]) == null ? void 0 : z.variantClassNames) != null ? O : {}, R = (Ie = (K = i == null ? void 0 : i[k]) == null ? void 0 : K.compoundVariants) != null ? Ie : [], v = [l[k], B, I];
      for (const Q in b()) {
        const Z = b()[Q];
        Z != null && (v.push((Ee = _[Q]) == null ? void 0 : Ee[String(Z)]), v.push((we = E[Q]) == null ? void 0 : we[String(Z)]));
      }
      for (const [Q, Z] of [...$, ...R])
        _e(Q, b()) && v.push(Z);
      return w[k] = Te(...v), w;
    }, {})), m = H(() => {
      const w = h();
      return w == null ? {} : s.reduce((k, B) => {
        var E, R, v, j, P, W, N, F;
        const _ = (R = (E = w[B]) == null ? void 0 : E.baseStyle) != null ? R : {}, $ = (j = (v = w[B]) == null ? void 0 : v.variants) != null ? j : {}, I = (W = (P = w[B]) == null ? void 0 : P.compoundVariants) != null ? W : [];
        k[B] = _;
        for (const z in b()) {
          const O = b()[z];
          if (O == null)
            continue;
          const K = (F = (N = $[z]) == null ? void 0 : N[String(O)]) != null ? F : {};
          Fe(K) || ke(k, B, K);
        }
        for (const z of I)
          _e(z.variants, b()) && ke(k, B, z.style);
        return k;
      }, {});
    });
    return { baseClasses: x, styleOverrides: m };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function tt(e, t) {
  const { baseStyle: r = {}, variants: o = {}, compoundVariants: n = [] } = e;
  return {
    baseClassName: q(r, t),
    variantClassNames: Object.entries(o).reduce((i, [s, l]) => (i[s] = Object.entries(l).reduce(
      (a, [d, p]) => (a[d] = q(p, t), a),
      {}
    ), i), {}),
    compoundVariants: n.map((i) => [
      i.variants,
      q(i.style, t)
    ])
  };
}
function rt(e, t) {
  var i;
  const { variantClassNames: r = {}, compoundVariants: o = [] } = e, n = [];
  for (const s in t) {
    const l = t[s];
    l != null && n.push((i = r[s]) == null ? void 0 : i[String(l)]);
  }
  for (const [s, l] of o)
    _e(s, t) && n.push(l);
  return n;
}
function bo(e) {
  let t, r;
  const o = ue((n) => {
    t = A(e, n), r = tt(t, n);
  });
  return function(i = {}) {
    const s = J();
    return o(s), H(() => {
      if (t == null || r == null)
        return "";
      const a = {
        ...t.defaultVariants,
        ...le(i)
      }, d = rt(r, a);
      return Te(r.baseClassName, d);
    });
  };
}
const Or = {
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
}, Lr = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Ar = {
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
}, Mr = {
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
}, Nr = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Vr = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, Hr = {
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
}, Dr = {
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
}, Fr = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, Gr = {
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
}, Ur = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Xr = {
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
}, Yr = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, qr = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Jr = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, Kr = {
  objectFit: !0,
  objectPosition: !0
}, Qr = {
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
}, Zr = {
  ...Or,
  ...Lr,
  ...Ar,
  ...Mr,
  ...Nr,
  ...Vr,
  ...Hr,
  ...Dr,
  ...Fr,
  ...Gr,
  ...Ur,
  ...Xr,
  ...Yr,
  ...qr,
  ...Jr,
  ...Kr,
  ...Qr
};
function eo(e) {
  return Object.keys(e).filter((t) => t in Zr);
}
const ot = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function to(e) {
  return Object.entries(e).reduce((t, [r, o]) => {
    const n = ot.get(r);
    return n != null && o != null && (t[n] = o), t;
  }, {});
}
const ro = Ue({});
function Se(e, t, r) {
  let o, n, i = [];
  const s = ue((a) => {
    t != null && (o = A(t, a), n = tt(o, a), i = o.variants ? Object.keys(o.variants) : []);
  }), l = (a) => {
    const d = J();
    s(d);
    const [p, g, c, f, h] = Ve(
      a,
      ["as", "class", "sx", "__css"],
      [...ot.keys()],
      i,
      eo(a)
    ), b = H(() => {
      if (n == null)
        return [];
      const m = {
        ...o == null ? void 0 : o.defaultVariants,
        ...le(c)
      };
      return rt(n, m);
    }), x = H(() => {
      const m = Object.assign({}, p.__css, le(f), ...gt(p.sx).map((y) => A(y, d)));
      if (!Fe(m))
        return ro({
          css: pe(m, d)
        }).className;
    });
    return He(at, lt({
      get component() {
        var m;
        return (m = p.as) != null ? m : e;
      },
      get class() {
        return Te(r, n == null ? void 0 : n.baseClassName, ...b(), x(), p.class) || void 0;
      }
    }, () => to(g), h));
  };
  return r != null && (l.toString = () => `.${r}`), l;
}
function oo() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Se, {
    apply(t, r, o) {
      return Se(...o);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Se(r)), e.get(r);
    }
  });
}
const So = oo(), no = /* @__PURE__ */ ut('<style id="stitches" $serveronly></style>', 2);
function yo() {
  ct(() => (() => {
    const e = no.cloneNode(!0);
    return dt(() => e.innerHTML = qt()), e;
  })());
}
const xo = Xe({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), ko = Xe({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
export {
  ve as COLOR_MODE_CLASSNAMES,
  Be as DEFAULT_THEME,
  Er as DEFAULT_THEME_MAP,
  lo as STYLE_CONFIG_PROP_NAMES,
  fo as ThemeProvider,
  Qt as arrayToObjectNotation,
  tt as computeStyleOptions,
  go as createGlobalStyles,
  mo as createHopeComponent,
  X as createPalette,
  ho as createStyleConfig,
  bo as createStyles,
  co as extendTheme,
  ko as fadeIn,
  uo as focusStyles,
  rt as getSelectedVariantClassNames,
  So as hope,
  yo as injectCriticalStyle,
  Jt as isColorModeObjectLike,
  Zt as isResponsiveObjectLike,
  Xe as keyframes,
  ao as mapResponsive,
  po as mergeThemeProps,
  Kt as objectToArrayNotation,
  gt as pack,
  pr as resolveTokenValue,
  xo as spin,
  Wr as useComponentTheme,
  J as useTheme
};
