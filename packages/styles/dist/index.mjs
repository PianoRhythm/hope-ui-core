import { isArray as ot, isObject as re, objectKeys as nt, getLastItem as it, runIfFn as A, isNumber as Ne, delve as st, flatten as pe, unflatten as at, pick as lt, once as ce, filterUndefined as ae, isEmptyObject as Ve, pack as ct } from "@hope-ui/utils";
import { pack as Ro } from "@hope-ui/utils";
import { createComponent as He, Dynamic as dt, mergeProps as ut, useAssets as pt, effect as mt, template as gt } from "solid-js/web";
import { createContext as ft, useContext as ht, createMemo as H, mergeProps as bt, splitProps as De } from "solid-js";
var S = "colors", T = "sizes", u = "space", St = { gap: u, gridGap: u, columnGap: u, gridColumnGap: u, rowGap: u, gridRowGap: u, inset: u, insetBlock: u, insetBlockEnd: u, insetBlockStart: u, insetInline: u, insetInlineEnd: u, insetInlineStart: u, margin: u, marginTop: u, marginRight: u, marginBottom: u, marginLeft: u, marginBlock: u, marginBlockEnd: u, marginBlockStart: u, marginInline: u, marginInlineEnd: u, marginInlineStart: u, padding: u, paddingTop: u, paddingRight: u, paddingBottom: u, paddingLeft: u, paddingBlock: u, paddingBlockEnd: u, paddingBlockStart: u, paddingInline: u, paddingInlineEnd: u, paddingInlineStart: u, top: u, right: u, bottom: u, left: u, scrollMargin: u, scrollMarginTop: u, scrollMarginRight: u, scrollMarginBottom: u, scrollMarginLeft: u, scrollMarginX: u, scrollMarginY: u, scrollMarginBlock: u, scrollMarginBlockEnd: u, scrollMarginBlockStart: u, scrollMarginInline: u, scrollMarginInlineEnd: u, scrollMarginInlineStart: u, scrollPadding: u, scrollPaddingTop: u, scrollPaddingRight: u, scrollPaddingBottom: u, scrollPaddingLeft: u, scrollPaddingX: u, scrollPaddingY: u, scrollPaddingBlock: u, scrollPaddingBlockEnd: u, scrollPaddingBlockStart: u, scrollPaddingInline: u, scrollPaddingInlineEnd: u, scrollPaddingInlineStart: u, fontSize: "fontSizes", background: S, backgroundColor: S, backgroundImage: S, borderImage: S, border: S, borderBlock: S, borderBlockEnd: S, borderBlockStart: S, borderBottom: S, borderBottomColor: S, borderColor: S, borderInline: S, borderInlineEnd: S, borderInlineStart: S, borderLeft: S, borderLeftColor: S, borderRight: S, borderRightColor: S, borderTop: S, borderTopColor: S, caretColor: S, color: S, columnRuleColor: S, fill: S, outline: S, outlineColor: S, stroke: S, textDecorationColor: S, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: T, minBlockSize: T, maxBlockSize: T, inlineSize: T, minInlineSize: T, maxInlineSize: T, width: T, minWidth: T, maxWidth: T, height: T, minHeight: T, maxHeight: T, flexBasis: T, gridTemplateColumns: T, gridTemplateRows: T, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, yt = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, oe = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, r, ...o) => {
    const n = ((i) => JSON.stringify(i, yt))(t);
    return n in e ? e[n] : e[n] = r(t, ...o);
  };
}, ie = Symbol.for("sxs.internal"), _e = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Ee = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: xt } = Object.prototype, Se = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), kt = /\s+(?![^()]*\))/, G = (e) => (t) => e(...typeof t == "string" ? String(t).split(kt) : [t]), ze = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: G((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: G((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: G((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: G((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: G((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: G((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, me = /([\d.]+)([^]*)/, _t = (e, t) => e.length ? e.reduce((r, o) => (r.push(...t.map((n) => n.includes("&") ? n.replace(/&/g, /[ +>|~]/.test(o) && /&.*&/.test(n) ? `:is(${o})` : o) : o + " " + n)), r), []) : t, Rt = (e, t) => e in vt && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (r, o, n, i) => o + (n === "stretch" ? `-moz-available${i};${Se(e)}:${o}-webkit-fill-available` : `-moz-fit-content${i};${Se(e)}:${o}fit-content`) + i) : String(t), vt = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, M = (e) => e ? e + "-" : "", Fe = (e, t, r) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (o, n, i, s, l) => s == "$" == !!i ? o : (n || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? M(t) + (l.includes("$") ? "" : M(r)) + l.replace(/\$/g, "-") : l) + ")" + (n || s == "--" ? "*" + (n || "") + (i || "1") + ")" : "")), $t = /\s*,\s*(?![^()]*\))/, Ct = Object.prototype.toString, X = (e, t, r, o, n) => {
  let i, s, l;
  const a = (d, p, g) => {
    let c, m;
    const h = (b) => {
      for (c in b) {
        const y = c.charCodeAt(0) === 64, E = y && Array.isArray(b[c]) ? b[c] : [b[c]];
        for (m of E) {
          const k = /[A-Z]/.test(f = c) ? f : f.replace(/-[^]/g, (_) => _[1].toUpperCase()), B = typeof m == "object" && m && m.toString === Ct && (!o.utils[k] || !p.length);
          if (k in o.utils && !B) {
            const _ = o.utils[k];
            if (_ !== s) {
              s = _, h(_(m)), s = null;
              continue;
            }
          } else if (k in ze) {
            const _ = ze[k];
            if (_ !== l) {
              l = _, h(_(m)), l = null;
              continue;
            }
          }
          if (y && (x = c.slice(1) in o.media ? "@media " + o.media[c.slice(1)] : c, c = x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (_, R, I, w, v, $) => {
            const z = me.test(R), P = 0.0625 * (z ? -1 : 1), [W, N] = z ? [w, R] : [R, w];
            return "(" + (I[0] === "=" ? "" : I[0] === ">" === z ? "max-" : "min-") + W + ":" + (I[0] !== "=" && I.length === 1 ? N.replace(me, (D, j, O) => Number(j) + P * (I === ">" ? 1 : -1) + O) : N) + (v ? ") and (" + (v[0] === ">" ? "min-" : "max-") + W + ":" + (v.length === 1 ? $.replace(me, (D, j, O) => Number(j) + P * (v === ">" ? -1 : 1) + O) : $) : "") + ")";
          })), B) {
            const _ = y ? g.concat(c) : [...g], R = y ? [...p] : _t(p, c.split($t));
            i !== void 0 && n(je(...i)), i = void 0, a(m, R, _);
          } else
            i === void 0 && (i = [[], p, g]), c = y || c.charCodeAt(0) !== 36 ? c : `--${M(o.prefix)}${c.slice(1).replace(/\$/g, "-")}`, m = B ? m : typeof m == "number" ? m && k in Bt ? String(m) + "px" : String(m) : Fe(Rt(k, m == null ? "" : m), o.prefix, o.themeMap[k]), i[0].push(`${y ? `${c} ` : `${Se(c)}:`}${m}`);
        }
      }
      var x, f;
    };
    h(d), i !== void 0 && n(je(...i)), i = void 0;
  };
  a(e, t, r);
}, je = (e, t, r) => `${r.map((o) => `${o}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(r.length ? r.length + 1 : 0).join("}")}`, Bt = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Pe = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), F = (e) => ((t) => {
  let r, o = "";
  for (r = Math.abs(t); r > 52; r = r / 52 | 0)
    o = Pe(r % 52) + o;
  return Pe(r % 52) + o;
})(((t, r) => {
  let o = r.length;
  for (; o; )
    t = 33 * t ^ r.charCodeAt(--o);
  return t;
})(5381, JSON.stringify(e)) >>> 0), te = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Tt = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, It = (e) => {
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
      if (Tt(l)) {
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
          const m = c.slice(14, -3).trim().split(/\s+/), h = te[m[0]];
          h && (t || (t = { sheet: l, reset: o, rules: {}, toString: r }), t.rules[h] = { group: g, index: a, cache: new Set(m) });
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
    for (let l = te.length - 1; l >= 0; --l) {
      const a = te[l];
      if (!s[a]) {
        const d = te[l + 1], p = s[d] ? s[d].index : i.cssRules.length;
        i.insertRule("@media{}", p), i.insertRule(`--sxs{--sxs:${l}}`, p), s[a] = { group: i.cssRules[p + 1], index: p, cache: /* @__PURE__ */ new Set([l]) };
      }
      wt(s[a]);
    }
  };
  return o(), t;
}, wt = (e) => {
  const t = e.group;
  let r = t.cssRules.length;
  e.apply = (o) => {
    try {
      t.insertRule(o, r), ++r;
    } catch {
    }
  };
}, Z = Symbol(), Et = oe(), zt = (e, t) => Et(e, () => (...r) => {
  let o = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const n of r)
    if (n != null)
      if (n[ie]) {
        o.type == null && (o.type = n[ie].type);
        for (const i of n[ie].composers)
          o.composers.add(i);
      } else
        n.constructor !== Object || n.$$typeof ? o.type == null && (o.type = n) : o.composers.add(jt(n, e));
  return o.type == null && (o.type = "span"), o.composers.size || o.composers.add(["PJLV", {}, [], [], {}, []]), Pt(e, o, t);
}), jt = ({ variants: e, compoundVariants: t, defaultVariants: r, ...o }, n) => {
  const i = `${M(n.prefix)}c-${F(o)}`, s = [], l = [], a = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in r)
    a[c] = String(r[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      p = a, g = c, xt.call(p, g) || (a[c] = "undefined");
      const m = e[c];
      for (const h in m) {
        const b = { [c]: String(h) };
        String(h) === "undefined" && d.push(c);
        const x = m[h], f = [b, x, !Ee(x)];
        s.push(f);
      }
    }
  var p, g;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: m, ...h } = c;
      m = typeof m == "object" && m || {};
      for (const x in h)
        h[x] = String(h[x]);
      const b = [h, m, !Ee(m)];
      l.push(b);
    }
  return [i, o, s, l, a, d];
}, Pt = (e, t, r) => {
  const [o, n, i, s] = Wt(t.composers), l = typeof t.type == "function" || t.type.$$typeof ? ((g) => {
    function c() {
      for (let m = 0; m < c[Z].length; m++) {
        const [h, b] = c[Z][m];
        g.rules[h].apply(b);
      }
      return c[Z] = [], null;
    }
    return c[Z] = [], c.rules = {}, te.forEach((m) => c.rules[m] = { apply: (h) => c[Z].push([m, h]) }), c;
  })(r) : null, a = (l || r).rules, d = `.${o}${n.length > 1 ? `:where(.${n.slice(1).join(".")})` : ""}`, p = (g) => {
    g = typeof g == "object" && g || Ot;
    const { css: c, ...m } = g, h = {};
    for (const f in i)
      if (delete m[f], f in g) {
        let y = g[f];
        typeof y == "object" && y ? h[f] = { "@initial": i[f], ...y } : (y = String(y), h[f] = y !== "undefined" || s.has(f) ? y : i[f]);
      } else
        h[f] = i[f];
    const b = /* @__PURE__ */ new Set([...n]);
    for (const [f, y, E, k] of t.composers) {
      r.rules.styled.cache.has(f) || (r.rules.styled.cache.add(f), X(y, [`.${f}`], [], e, (R) => {
        a.styled.apply(R);
      }));
      const B = We(E, h, e.media), _ = We(k, h, e.media, !0);
      for (const R of B)
        if (R !== void 0)
          for (const [I, w, v] of R) {
            const $ = `${f}-${F(w)}-${I}`;
            b.add($);
            const z = (v ? r.rules.resonevar : r.rules.onevar).cache, P = v ? a.resonevar : a.onevar;
            z.has($) || (z.add($), X(w, [`.${$}`], [], e, (W) => {
              P.apply(W);
            }));
          }
      for (const R of _)
        if (R !== void 0)
          for (const [I, w] of R) {
            const v = `${f}-${F(w)}-${I}`;
            b.add(v), r.rules.allvar.cache.has(v) || (r.rules.allvar.cache.add(v), X(w, [`.${v}`], [], e, ($) => {
              a.allvar.apply($);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const f = `${o}-i${F(c)}-css`;
      b.add(f), r.rules.inline.cache.has(f) || (r.rules.inline.cache.add(f), X(c, [`.${f}`], [], e, (y) => {
        a.inline.apply(y);
      }));
    }
    for (const f of String(g.className || "").trim().split(/\s+/))
      f && b.add(f);
    const x = m.className = [...b].join(" ");
    return { type: t.type, className: x, selector: d, props: m, toString: () => x, deferredInjector: l };
  };
  return _e(p, { className: o, selector: d, [ie]: t, toString: () => (r.rules.styled.cache.has(o) || p(), o) });
}, Wt = (e) => {
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
}, We = (e, t, r, o) => {
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
            let m, h, b = 0;
            for (const x in c) {
              if (g === String(c[x])) {
                if (x !== "@initial") {
                  const f = x.slice(1);
                  (h = h || []).push(f in r ? r[f] : x.replace(/^@media ?/, "")), p = !0;
                }
                d += b, m = !0;
              }
              ++b;
            }
            if (h && h.length && (s = { ["@media " + h.join(", ")]: s }), !m)
              continue e;
          }
        }
      }
      (n[d] = n[d] || []).push([o ? "cv" : `${a}-${i[a]}`, s, p]);
    }
  return n;
}, Ot = {}, Lt = oe(), At = (e, t) => Lt(e, () => (...r) => {
  const o = () => {
    for (let n of r) {
      n = typeof n == "object" && n || {};
      let i = F(n);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in n) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let l of [].concat(n["@import"]))
            l = l.includes('"') || l.includes("'") ? l : `"${l}"`, t.sheet.insertRule(`@import ${l};`, s++);
          delete n["@import"];
        }
        X(n, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return _e(o, { toString: o });
}), Mt = oe(), Nt = (e, t) => Mt(e, () => (r) => {
  const o = `${M(e.prefix)}k-${F(r)}`, n = () => {
    if (!t.rules.global.cache.has(o)) {
      t.rules.global.cache.add(o);
      const i = [];
      X(r, [], [], e, (l) => i.push(l));
      const s = `@keyframes ${o}{${i.join("")}}`;
      t.rules.global.apply(s);
    }
    return o;
  };
  return _e(n, { get name() {
    return n();
  }, toString: n });
}), Vt = class {
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
}, Ht = oe(), Dt = (e, t) => Ht(e, () => (r, o) => {
  o = typeof r == "object" && r || Object(o);
  const n = `.${r = (r = typeof r == "string" ? r : "") || `${M(e.prefix)}t-${F(o)}`}`, i = {}, s = [];
  for (const a in o) {
    i[a] = {};
    for (const d in o[a]) {
      const p = `--${M(e.prefix)}${a}-${d}`, g = Fe(String(o[a][d]), e.prefix, a);
      i[a][d] = new Vt(d, g, a, e.prefix), s.push(`${p}:${g}`);
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
}), Ft = oe(), Gt = (e) => {
  let t = !1;
  const r = Ft(e, (o) => {
    t = !0;
    const n = "prefix" in (o = typeof o == "object" && o || {}) ? String(o.prefix) : "", i = typeof o.media == "object" && o.media || {}, s = typeof o.root == "object" ? o.root || null : globalThis.document || null, l = typeof o.theme == "object" && o.theme || {}, a = { prefix: n, media: i, theme: l, themeMap: typeof o.themeMap == "object" && o.themeMap || { ...St }, utils: typeof o.utils == "object" && o.utils || {} }, d = It(s), p = { css: zt(a, d), globalCss: At(a, d), keyframes: Nt(a, d), createTheme: Dt(a, d), reset() {
      d.reset(), p.theme.toString();
    }, theme: {}, sheet: d, config: a, prefix: n, getCssText: d.toString, toString: d.toString };
    return String(p.theme = p.createTheme(l)), p;
  });
  return t || r.reset(), r;
};
const Ut = Gt({ prefix: "hope" }), { css: Ge, globalCss: Re, getCssText: Xt, keyframes: Ue } = Ut, ve = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Yt(e) {
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
function so(e, t) {
  return ot(e) ? e.map((r) => r === null ? null : t(r)) : re(e) ? nt(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function Kt(e, t) {
  const r = t.map((o) => {
    var n;
    return (n = e[o]) != null ? n : null;
  });
  for (; it(r) === null; )
    r.pop();
  return r;
}
function qt(e, t) {
  const r = {};
  return e.forEach((o, n) => {
    const i = t[n];
    o != null && (r[i] = o);
  }), r;
}
function Jt(e, t) {
  const r = Object.keys(e);
  return r.length > 0 && r.every((o) => t.includes(o));
}
const ao = [
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
  return Xe((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function L(e) {
  return Xe((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function Xe(e, ...t) {
  return t.map(e).join(", ");
}
const Qt = "_light", se = "_dark", Zt = `.${ve.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, er = `.${ve.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, tr = /* @__PURE__ */ new Map([
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
  [Qt, Zt],
  [se, er]
]), rr = /* @__PURE__ */ new Map([
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
const or = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: o, medias: n } = t.__breakpoints, i = {}, s = {};
  for (const l in e) {
    let a = A(e[l], t);
    if (a == null || ge(l, a, i))
      continue;
    if (a = re(a) && r(a) ? o(a) : a, !Array.isArray(a)) {
      i[l] = a;
      continue;
    }
    const d = a.slice(0, n.length).length;
    for (let p = 0; p < d; p += 1) {
      const g = n == null ? void 0 : n[p], c = a[p];
      if (c != null) {
        if (!g) {
          ge(l, c, i) || (i[l] = c);
          continue;
        }
        s[g] = s[g] || {}, ge(l, c, s[g]) || (s[g][l] = c);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function ge(e, t, r) {
  if (!re(t) || !Yt(t))
    return !1;
  const { light: o, dark: n } = t;
  return o != null && (r[e] = o), r[se] = r[se] || {}, n != null && (r[se][e] = n), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function nr(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function le(e) {
  if (e == null)
    return e;
  const { unitless: t } = nr(e);
  return t || Ne(e) ? `${e}px` : e;
}
const Ye = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, $e = (e) => Object.fromEntries(Object.entries(e).sort(Ye));
function Oe(e) {
  const t = $e(e);
  return Object.assign(Object.values(t), t);
}
function ir(e) {
  const t = Object.keys($e(e));
  return new Set(t);
}
function Le(e) {
  var r;
  if (!e)
    return e;
  e = (r = le(e)) != null ? r : e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return Ne(e) ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (o) => `${parseFloat(o) + t}`);
}
function ne(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${le(e)})`), t && r.push("and", `(max-width: ${le(t)})`), r.join(" ");
}
function sr(e) {
  var i;
  if (!e)
    return null;
  e.base = (i = e.base) != null ? i : "0px";
  const t = Oe(e), r = Object.entries(e).sort(Ye).map(([s, l], a, d) => {
    var g;
    let [, p] = (g = d[a + 1]) != null ? g : [];
    return p = parseFloat(p) > 0 ? Le(p) : void 0, {
      _minW: Le(l),
      breakpoint: s,
      minW: l,
      maxW: p,
      maxWQuery: ne(null, p),
      minWQuery: ne(l),
      minMaxQuery: ne(l, p)
    };
  }), o = ir(e), n = Array.from(o.values());
  return {
    keys: o,
    normalized: t,
    asObject: $e(e),
    asArray: Oe(e),
    details: r,
    medias: [null, ...t.map((s) => ne(s)).slice(1)],
    isResponsive(s) {
      return Jt(s, n);
    },
    toArrayValue(s) {
      if (!re(s))
        throw new Error("toArrayValue: value must be an object");
      return Kt(s, n);
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return qt(s, n);
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
const ar = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], Ke = /!(important)?$/;
function lr(e) {
  return Ke.test(e);
}
function cr(e) {
  return e.replace(Ke, "").trim();
}
function dr(e, t, r) {
  var s;
  if (e == null)
    return;
  const o = String(e), n = cr(o);
  let i = (s = r[t][n]) != null ? s : st(r[t], n);
  return i == null && (i = ar.includes(t) ? n : le(n)), lr(o) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function de(e, t) {
  var n;
  const r = {}, o = or(e)(t);
  for (let i in o) {
    let s = A(o[i], t);
    if (s == null)
      continue;
    if (i.startsWith("_")) {
      const a = tr.get(i);
      if (a == null)
        continue;
      i = a;
    }
    if (re(s)) {
      r[i] = Object.assign(
        {},
        r[i],
        de(s, t)
      );
      continue;
    }
    const l = (n = rr.get(i)) != null ? n : [i];
    for (const a of l) {
      const d = t.themeMap[a];
      d != null && (s = dr(s, d, t.vars)), r[a] = s;
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
function ur(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function pr(e) {
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
function gr(e) {
  return ur(e) ? pr(e) : e.startsWith("rgb") ? mr(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function fe(e) {
  const { r: t, g: r, b: o } = gr(e);
  return `${t} ${r} ${o}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function U(e) {
  return {
    ...e,
    mainChannel: fe(e[500]),
    lightChannel: fe(e[100]),
    darkChannel: fe(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const ue = "hope";
function fr(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function hr(e) {
  const t = fr(e.toString());
  return Sr(br(t));
}
function br(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Sr(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function yr(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function xr(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function kr(e, t = "") {
  return hr(`--${yr(e, t)}`);
}
function _r(e, t, r = ue) {
  const o = kr(e, r);
  return {
    variable: o,
    reference: xr(o, t)
  };
}
function Rr(e = ue) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const ee = "__";
function he(e, t, r) {
  return _r(String(t).replace(e, "-"), void 0, r);
}
function vr(e, t) {
  const r = {}, o = {}, n = {}, { colors: i, ...s } = e, l = { colors: i.light }, a = { colors: i.dark }, d = pe(l, ee), p = pe(a, ee), g = pe(s, ee), c = new RegExp(`(${ee}|\\.)`, "g");
  for (const [b, x] of Object.entries(d)) {
    const { variable: f, reference: y } = he(c, b, t);
    r[f] = x, n[b] = y;
  }
  for (const [b, x] of Object.entries(p)) {
    const { variable: f } = he(c, b, t);
    o[f] = x;
  }
  for (const [b, x] of Object.entries(g)) {
    const { variable: f, reference: y } = he(c, b, t);
    r[f] = x, n[b] = y;
  }
  const m = at(n, ee);
  return { cssVarsValues: {
    root: r,
    dark: o
  }, vars: m };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const $r = [
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
function Cr(e) {
  return lt(e, $r);
}
function Br(e) {
  const { vars: t, __cssVarsValues: r, __breakpoints: o, ...n } = e;
  return n;
}
function qe(e) {
  const t = Br(e), r = Cr(t), { cssVarsValues: o, vars: n } = vr(r, t.cssVarPrefix);
  return Object.assign(t, {
    vars: n,
    __cssVarsValues: o,
    __breakpoints: sr(t.breakpoints)
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
function Je(e) {
  const t = Rr(e);
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
      primary: U({
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
      neutral: U({
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
      success: U({
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
      info: U({
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
      warning: U({
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
      danger: U({
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
const Tr = {
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
}, Ae = {
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
}, Ir = {
  colors: Je(ue),
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
  space: Ae,
  sizes: {
    ...Ae,
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
}, wr = {
  ...Ir,
  cssVarPrefix: ue,
  themeMap: Tr,
  components: {}
}, Ce = qe(wr);
function ye(e, t, r) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (r = 0; r < t.length; r++)
        e[r] = ye(e[r], t[r]);
    else
      for (r in t) {
        if (r === "__proto__" || r === "constructor" || r === "prototype")
          break;
        e[r] = ye(e[r], t[r]);
      }
    return e;
  }
  return t;
}
function xe(e, t, r) {
  t.split && (t = t.split("."));
  for (var o = 0, n = t.length, i = e, s, l; o < n && (l = t[o++], !(l === "__proto__" || l === "constructor" || l === "prototype")); )
    i = i[l] = o === n ? ye(i[l], r) : typeof (s = i[l]) == typeof t ? s : t[o] * 0 !== 0 || !!~("" + t[o]).indexOf(".") ? {} : [];
}
function lo(e) {
  let t = Ce;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: Je(e.cssVarPrefix)
  });
  const r = {
    value: t
  };
  return xe(r, "value", e), qe(r.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function co(e) {
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
function Er(e) {
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
function zr(e) {
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
const Qe = ft(Ce);
function K() {
  return ht(Qe);
}
function jr(e) {
  const t = K();
  return H(() => {
    var r;
    if (e != null)
      return (r = t.components[e]) != null ? r : void 0;
  });
}
function uo(e, t, r) {
  const o = K();
  return bt(t, () => {
    var i, s;
    return (s = (i = o.components[e]) == null ? void 0 : i.defaultProps) != null ? s : {};
  }, r);
}
function po(e) {
  var r;
  const t = (r = e.theme) != null ? r : Ce;
  return Er(t), e.withCssReset && zr(t.vars), He(Qe.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function mo(e) {
  const t = ce((r) => {
    const {
      "@import": o,
      "@font-face": n,
      ...i
    } = A(e, r), s = Object.entries(i).reduce((l, [a, d]) => (l[a] = de(d, r), l), {});
    Re({
      "@import": o != null ? o : [],
      "@font-face": n != null ? n : {},
      ...s
    })();
  });
  return function() {
    const o = K();
    t(o);
  };
}
function go(e) {
  return e;
}
function Ze(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ze(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function Be() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Ze(e)) && (o && (o += " "), o += t);
  return o;
}
function Y(e, t) {
  return Ge(de(e, t))().className;
}
function ke(e, t) {
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
function Me(e, t) {
  return Object.entries(e).reduce((r, [o, n]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: l = []
    } = n;
    return r[o] = {
      baseClassName: Y(i, t),
      variantClassNames: Object.entries(s).reduce((a, [d, p]) => (a[d] = Object.entries(p).reduce(
        (g, [c, m]) => (g[c] = Y(m, t), g),
        {}
      ), a), {}),
      compoundVariants: l.map((a) => [
        a.variants,
        Y(a.style, t)
      ])
    }, r;
  }, {});
}
function fo(e, t) {
  let r, o, n, i, s = [], l;
  const a = ce(
    (d, p, g) => {
      r = A(e, p), o = Me(
        r,
        p
      ), n = A(g, p), i = n && Me(n, p), s = Object.keys(r), l = Object.fromEntries(
        s.map((c) => [c, `hope-${d}-${c}`])
      );
    }
  );
  return function(p, g) {
    var y;
    const c = K(), m = jr(p);
    a(p, c, (y = m()) == null ? void 0 : y.styleConfigOverride);
    const h = H(() => A(g.styleConfigOverride, c)), b = H(() => {
      const [E, k] = De(g, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...ae(k)
      };
    }), x = H(() => s.reduce((E, k) => {
      var z, P, W, N, D, j, O, q, Te, Ie, we;
      let B = "", _ = {}, R = [];
      g.unstyled || (B = (z = o[k].baseClassName) != null ? z : "", _ = (P = o[k].variantClassNames) != null ? P : {}, R = (W = o[k].compoundVariants) != null ? W : []);
      const I = (D = (N = i == null ? void 0 : i[k]) == null ? void 0 : N.baseClassName) != null ? D : "", w = (O = (j = i == null ? void 0 : i[k]) == null ? void 0 : j.variantClassNames) != null ? O : {}, v = (Te = (q = i == null ? void 0 : i[k]) == null ? void 0 : q.compoundVariants) != null ? Te : [], $ = [l[k], B, I];
      for (const J in b()) {
        const Q = b()[J];
        Q != null && ($.push((Ie = _[J]) == null ? void 0 : Ie[String(Q)]), $.push((we = w[J]) == null ? void 0 : we[String(Q)]));
      }
      for (const [J, Q] of [...R, ...v])
        ke(J, b()) && $.push(Q);
      return E[k] = Be(...$), E;
    }, {})), f = H(() => {
      const E = h();
      return E == null ? {} : s.reduce((k, B) => {
        var w, v, $, z, P, W, N, D;
        const _ = (v = (w = E[B]) == null ? void 0 : w.baseStyle) != null ? v : {}, R = (z = ($ = E[B]) == null ? void 0 : $.variants) != null ? z : {}, I = (W = (P = E[B]) == null ? void 0 : P.compoundVariants) != null ? W : [];
        k[B] = _;
        for (const j in b()) {
          const O = b()[j];
          if (O == null)
            continue;
          const q = (D = (N = R[j]) == null ? void 0 : N[String(O)]) != null ? D : {};
          Ve(q) || xe(k, B, q);
        }
        for (const j of I)
          ke(j.variants, b()) && xe(k, B, j.style);
        return k;
      }, {});
    });
    return { baseClasses: x, styleOverrides: f };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function et(e, t) {
  const { baseStyle: r = {}, variants: o = {}, compoundVariants: n = [] } = e;
  return {
    baseClassName: Y(r, t),
    variantClassNames: Object.entries(o).reduce((i, [s, l]) => (i[s] = Object.entries(l).reduce(
      (a, [d, p]) => (a[d] = Y(p, t), a),
      {}
    ), i), {}),
    compoundVariants: n.map((i) => [
      i.variants,
      Y(i.style, t)
    ])
  };
}
function tt(e, t) {
  var i;
  const { variantClassNames: r = {}, compoundVariants: o = [] } = e, n = [];
  for (const s in t) {
    const l = t[s];
    l != null && n.push((i = r[s]) == null ? void 0 : i[String(l)]);
  }
  for (const [s, l] of o)
    ke(s, t) && n.push(l);
  return n;
}
function ho(e) {
  let t, r;
  const o = ce((n) => {
    t = A(e, n), r = et(t, n);
  });
  return function(i = {}) {
    const s = K();
    return o(s), H(() => {
      if (t == null || r == null)
        return "";
      const a = {
        ...t.defaultVariants,
        ...ae(i)
      }, d = tt(r, a);
      return Be(r.baseClassName, d);
    });
  };
}
const Pr = {
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
}, Wr = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Or = {
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
}, Lr = {
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
}, Ar = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Mr = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, Nr = {
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
}, Vr = {
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
}, Hr = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, Dr = {
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
}, Fr = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Gr = {
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
}, Ur = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Xr = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Yr = {
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
}, qr = {
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
}, Jr = {
  ...Pr,
  ...Wr,
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
  ...Kr,
  ...qr
};
function Qr(e) {
  return Object.keys(e).filter((t) => t in Jr);
}
const rt = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function Zr(e) {
  return Object.entries(e).reduce((t, [r, o]) => {
    const n = rt.get(r);
    return n != null && o != null && (t[n] = o), t;
  }, {});
}
const eo = Ge({});
function be(e, t, r) {
  let o, n, i = [];
  const s = ce((a) => {
    t != null && (o = A(t, a), n = et(o, a), i = o.variants ? Object.keys(o.variants) : []);
  }), l = (a) => {
    const d = K();
    s(d);
    const [p, g, c, m, h] = De(
      a,
      ["as", "class", "sx", "__css"],
      [...rt.keys()],
      i,
      Qr(a)
    ), b = H(() => {
      if (n == null)
        return [];
      const f = {
        ...o == null ? void 0 : o.defaultVariants,
        ...ae(c)
      };
      return tt(n, f);
    }), x = H(() => {
      const f = Object.assign({}, p.__css, ae(m), ...ct(p.sx).map((y) => A(y, d)));
      if (!Ve(f))
        return eo({
          css: de(f, d)
        }).className;
    });
    return He(dt, ut({
      get component() {
        var f;
        return (f = p.as) != null ? f : e;
      },
      get class() {
        return Be(r, n == null ? void 0 : n.baseClassName, ...b(), x(), p.class) || void 0;
      }
    }, () => Zr(g), h));
  };
  return r != null && (l.toString = () => `.${r}`), l;
}
function to() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(be, {
    apply(t, r, o) {
      return be(...o);
    },
    get(t, r) {
      return e.has(r) || e.set(r, be(r)), e.get(r);
    }
  });
}
const bo = to(), ro = /* @__PURE__ */ gt('<style id="stitches" $serveronly></style>', 2);
function So() {
  pt(() => (() => {
    const e = ro.cloneNode(!0);
    return mt(() => e.innerHTML = Xt()), e;
  })());
}
const yo = Ue({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), xo = Ue({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
export {
  ve as COLOR_MODE_CLASSNAMES,
  Ce as DEFAULT_THEME,
  Tr as DEFAULT_THEME_MAP,
  ao as STYLE_CONFIG_PROP_NAMES,
  po as ThemeProvider,
  qt as arrayToObjectNotation,
  et as computeStyleOptions,
  mo as createGlobalStyles,
  go as createHopeComponent,
  U as createPalette,
  fo as createStyleConfig,
  ho as createStyles,
  lo as extendTheme,
  xo as fadeIn,
  co as focusStyles,
  tt as getSelectedVariantClassNames,
  bo as hope,
  So as injectCriticalStyle,
  Yt as isColorModeObjectLike,
  Jt as isResponsiveObjectLike,
  Ue as keyframes,
  so as mapResponsive,
  uo as mergeThemeProps,
  Kt as objectToArrayNotation,
  Ro as pack,
  dr as resolveTokenValue,
  yo as spin,
  jr as useComponentTheme,
  K as useTheme
};
