import { isArray as Je, isObject as X, objectKeys as Qe, getLastItem as Ze, runIfFn as P, isNumber as je, delve as et, flatten as ae, unflatten as tt, pick as rt, once as re, filterUndefined as ee, isEmptyObject as Pe, pack as ot } from "@hope-ui/utils";
import { pack as bo } from "@hope-ui/utils";
import { createComponent as We, Dynamic as nt, mergeProps as it, useAssets as st, effect as at, template as lt } from "solid-js/web";
import { createContext as ct, useContext as dt, createMemo as L, mergeProps as ut, splitProps as Oe } from "solid-js";
var y = "colors", I = "sizes", u = "space", pt = { gap: u, gridGap: u, columnGap: u, gridColumnGap: u, rowGap: u, gridRowGap: u, inset: u, insetBlock: u, insetBlockEnd: u, insetBlockStart: u, insetInline: u, insetInlineEnd: u, insetInlineStart: u, margin: u, marginTop: u, marginRight: u, marginBottom: u, marginLeft: u, marginBlock: u, marginBlockEnd: u, marginBlockStart: u, marginInline: u, marginInlineEnd: u, marginInlineStart: u, padding: u, paddingTop: u, paddingRight: u, paddingBottom: u, paddingLeft: u, paddingBlock: u, paddingBlockEnd: u, paddingBlockStart: u, paddingInline: u, paddingInlineEnd: u, paddingInlineStart: u, top: u, right: u, bottom: u, left: u, scrollMargin: u, scrollMarginTop: u, scrollMarginRight: u, scrollMarginBottom: u, scrollMarginLeft: u, scrollMarginX: u, scrollMarginY: u, scrollMarginBlock: u, scrollMarginBlockEnd: u, scrollMarginBlockStart: u, scrollMarginInline: u, scrollMarginInlineEnd: u, scrollMarginInlineStart: u, scrollPadding: u, scrollPaddingTop: u, scrollPaddingRight: u, scrollPaddingBottom: u, scrollPaddingLeft: u, scrollPaddingX: u, scrollPaddingY: u, scrollPaddingBlock: u, scrollPaddingBlockEnd: u, scrollPaddingBlockStart: u, scrollPaddingInline: u, scrollPaddingInlineEnd: u, scrollPaddingInlineStart: u, fontSize: "fontSizes", background: y, backgroundColor: y, backgroundImage: y, borderImage: y, border: y, borderBlock: y, borderBlockEnd: y, borderBlockStart: y, borderBottom: y, borderBottomColor: y, borderColor: y, borderInline: y, borderInlineEnd: y, borderInlineStart: y, borderLeft: y, borderLeftColor: y, borderRight: y, borderRightColor: y, borderTop: y, borderTopColor: y, caretColor: y, color: y, columnRuleColor: y, fill: y, outline: y, outlineColor: y, stroke: y, textDecorationColor: y, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: I, minBlockSize: I, maxBlockSize: I, inlineSize: I, minInlineSize: I, maxInlineSize: I, width: I, minWidth: I, maxWidth: I, height: I, minHeight: I, maxHeight: I, flexBasis: I, gridTemplateColumns: I, gridTemplateRows: I, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, mt = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Y = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, r, ...o) => {
    const n = ((i) => JSON.stringify(i, mt))(t);
    return n in e ? e[n] : e[n] = r(t, ...o);
  };
}, Q = Symbol.for("sxs.internal"), be = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), ve = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: gt } = Object.prototype, me = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), ft = /\s+(?![^()]*\))/, M = (e) => (t) => e(...typeof t == "string" ? String(t).split(ft) : [t]), $e = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: M((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: M((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: M((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: M((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: M((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: M((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, le = /([\d.]+)([^]*)/, ht = (e, t) => e.length ? e.reduce((r, o) => (r.push(...t.map((n) => n.includes("&") ? n.replace(/&/g, /[ +>|~]/.test(o) && /&.*&/.test(n) ? `:is(${o})` : o) : o + " " + n)), r), []) : t, bt = (e, t) => e in St && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (r, o, n, i) => o + (n === "stretch" ? `-moz-available${i};${me(e)}:${o}-webkit-fill-available` : `-moz-fit-content${i};${me(e)}:${o}fit-content`) + i) : String(t), St = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, W = (e) => e ? e + "-" : "", Le = (e, t, r) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (o, n, i, l, a) => l == "$" == !!i ? o : (n || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? W(t) + (a.includes("$") ? "" : W(r)) + a.replace(/\$/g, "-") : a) + ")" + (n || l == "--" ? "*" + (n || "") + (i || "1") + ")" : "")), yt = /\s*,\s*(?![^()]*\))/, xt = Object.prototype.toString, V = (e, t, r, o, n) => {
  let i, l, a;
  const s = (d, p, g) => {
    let c, m;
    const h = (b) => {
      for (c in b) {
        const S = c.charCodeAt(0) === 64, R = S && Array.isArray(b[c]) ? b[c] : [b[c]];
        for (m of R) {
          const k = /[A-Z]/.test(f = c) ? f : f.replace(/-[^]/g, (v) => v[1].toUpperCase()), z = typeof m == "object" && m && m.toString === xt && (!o.utils[k] || !p.length);
          if (k in o.utils && !z) {
            const v = o.utils[k];
            if (v !== l) {
              l = v, h(v(m)), l = null;
              continue;
            }
          } else if (k in $e) {
            const v = $e[k];
            if (v !== a) {
              a = v, h(v(m)), a = null;
              continue;
            }
          }
          if (S && (x = c.slice(1) in o.media ? "@media " + o.media[c.slice(1)] : c, c = x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (v, $, C, w, _, T) => {
            const E = le.test($), K = 0.0625 * (E ? -1 : 1), [q, Re] = E ? [w, $] : [$, w];
            return "(" + (C[0] === "=" ? "" : C[0] === ">" === E ? "max-" : "min-") + q + ":" + (C[0] !== "=" && C.length === 1 ? Re.replace(le, (qe, ie, se) => Number(ie) + K * (C === ">" ? 1 : -1) + se) : Re) + (_ ? ") and (" + (_[0] === ">" ? "min-" : "max-") + q + ":" + (_.length === 1 ? T.replace(le, (qe, ie, se) => Number(ie) + K * (_ === ">" ? -1 : 1) + se) : T) : "") + ")";
          })), z) {
            const v = S ? g.concat(c) : [...g], $ = S ? [...p] : ht(p, c.split(yt));
            i !== void 0 && n(Ce(...i)), i = void 0, s(m, $, v);
          } else
            i === void 0 && (i = [[], p, g]), c = S || c.charCodeAt(0) !== 36 ? c : `--${W(o.prefix)}${c.slice(1).replace(/\$/g, "-")}`, m = z ? m : typeof m == "number" ? m && k in kt ? String(m) + "px" : String(m) : Le(bt(k, m ?? ""), o.prefix, o.themeMap[k]), i[0].push(`${S ? `${c} ` : `${me(c)}:`}${m}`);
        }
      }
      var x, f;
    };
    h(d), i !== void 0 && n(Ce(...i)), i = void 0;
  };
  s(e, t, r);
}, Ce = (e, t, r) => `${r.map((o) => `${o}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(r.length ? r.length + 1 : 0).join("}")}`, kt = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Be = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), A = (e) => ((t) => {
  let r, o = "";
  for (r = Math.abs(t); r > 52; r = r / 52 | 0)
    o = Be(r % 52) + o;
  return Be(r % 52) + o;
})(((t, r) => {
  let o = r.length;
  for (; o; )
    t = 33 * t ^ r.charCodeAt(--o);
  return t;
})(5381, JSON.stringify(e)) >>> 0), U = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], _t = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Rt = (e) => {
  let t;
  const r = () => {
    const { cssRules: n } = t.sheet;
    return [].map.call(n, (i, l) => {
      const { cssText: a } = i;
      let s = "";
      if (a.startsWith("--sxs"))
        return "";
      if (n[l - 1] && (s = n[l - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === i)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;
        return i.cssRules.length ? `${s}${a}` : "";
      }
      return a;
    }).join("");
  }, o = () => {
    if (t) {
      const { rules: a, sheet: s } = t;
      if (!s.deleteRule) {
        for (; Object(Object(s.cssRules)[0]).type === 3; )
          s.cssRules.splice(0, 1);
        s.cssRules = [];
      }
      for (const d in a)
        delete a[d];
    }
    const n = Object(e).styleSheets || [];
    for (const a of n)
      if (_t(a)) {
        for (let s = 0, d = a.cssRules; d[s]; ++s) {
          const p = Object(d[s]);
          if (p.type !== 1)
            continue;
          const g = Object(d[s + 1]);
          if (g.type !== 4)
            continue;
          ++s;
          const { cssText: c } = p;
          if (!c.startsWith("--sxs"))
            continue;
          const m = c.slice(14, -3).trim().split(/\s+/), h = U[m[0]];
          h && (t || (t = { sheet: a, reset: o, rules: {}, toString: r }), t.rules[h] = { group: g, index: s, cache: new Set(m) });
        }
        if (t)
          break;
      }
    if (!t) {
      const a = (s, d) => ({ type: d, cssRules: [], insertRule(p, g) {
        this.cssRules.splice(g, 0, a(p, { import: 3, undefined: 1 }[(p.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return s === "@media{}" ? `@media{${[].map.call(this.cssRules, (p) => p.cssText).join("")}}` : s;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"), rules: {}, reset: o, toString: r };
    }
    const { sheet: i, rules: l } = t;
    for (let a = U.length - 1; a >= 0; --a) {
      const s = U[a];
      if (!l[s]) {
        const d = U[a + 1], p = l[d] ? l[d].index : i.cssRules.length;
        i.insertRule("@media{}", p), i.insertRule(`--sxs{--sxs:${a}}`, p), l[s] = { group: i.cssRules[p + 1], index: p, cache: /* @__PURE__ */ new Set([a]) };
      }
      vt(l[s]);
    }
  };
  return o(), t;
}, vt = (e) => {
  const t = e.group;
  let r = t.cssRules.length;
  e.apply = (o) => {
    try {
      t.insertRule(o, r), ++r;
    } catch {
    }
  };
}, D = Symbol(), $t = Y(), Ct = (e, t) => $t(e, () => (...r) => {
  let o = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const n of r)
    if (n != null)
      if (n[Q]) {
        o.type == null && (o.type = n[Q].type);
        for (const i of n[Q].composers)
          o.composers.add(i);
      } else
        n.constructor !== Object || n.$$typeof ? o.type == null && (o.type = n) : o.composers.add(Bt(n, e));
  return o.type == null && (o.type = "span"), o.composers.size || o.composers.add(["PJLV", {}, [], [], {}, []]), Tt(e, o, t);
}), Bt = ({ variants: e, compoundVariants: t, defaultVariants: r, ...o }, n) => {
  const i = `${W(n.prefix)}c-${A(o)}`, l = [], a = [], s = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in r)
    s[c] = String(r[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      p = s, g = c, gt.call(p, g) || (s[c] = "undefined");
      const m = e[c];
      for (const h in m) {
        const b = { [c]: String(h) };
        String(h) === "undefined" && d.push(c);
        const x = m[h], f = [b, x, !ve(x)];
        l.push(f);
      }
    }
  var p, g;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: m, ...h } = c;
      m = typeof m == "object" && m || {};
      for (const x in h)
        h[x] = String(h[x]);
      const b = [h, m, !ve(m)];
      a.push(b);
    }
  return [i, o, l, a, s, d];
}, Tt = (e, t, r) => {
  const [o, n, i, l] = It(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((g) => {
    function c() {
      for (let m = 0; m < c[D].length; m++) {
        const [h, b] = c[D][m];
        g.rules[h].apply(b);
      }
      return c[D] = [], null;
    }
    return c[D] = [], c.rules = {}, U.forEach((m) => c.rules[m] = { apply: (h) => c[D].push([m, h]) }), c;
  })(r) : null, s = (a || r).rules, d = `.${o}${n.length > 1 ? `:where(.${n.slice(1).join(".")})` : ""}`, p = (g) => {
    g = typeof g == "object" && g || wt;
    const { css: c, ...m } = g, h = {};
    for (const f in i)
      if (delete m[f], f in g) {
        let S = g[f];
        typeof S == "object" && S ? h[f] = { "@initial": i[f], ...S } : (S = String(S), h[f] = S !== "undefined" || l.has(f) ? S : i[f]);
      } else
        h[f] = i[f];
    const b = /* @__PURE__ */ new Set([...n]);
    for (const [f, S, R, k] of t.composers) {
      r.rules.styled.cache.has(f) || (r.rules.styled.cache.add(f), V(S, [`.${f}`], [], e, ($) => {
        s.styled.apply($);
      }));
      const z = Te(R, h, e.media), v = Te(k, h, e.media, !0);
      for (const $ of z)
        if ($ !== void 0)
          for (const [C, w, _] of $) {
            const T = `${f}-${A(w)}-${C}`;
            b.add(T);
            const E = (_ ? r.rules.resonevar : r.rules.onevar).cache, K = _ ? s.resonevar : s.onevar;
            E.has(T) || (E.add(T), V(w, [`.${T}`], [], e, (q) => {
              K.apply(q);
            }));
          }
      for (const $ of v)
        if ($ !== void 0)
          for (const [C, w] of $) {
            const _ = `${f}-${A(w)}-${C}`;
            b.add(_), r.rules.allvar.cache.has(_) || (r.rules.allvar.cache.add(_), V(w, [`.${_}`], [], e, (T) => {
              s.allvar.apply(T);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const f = `${o}-i${A(c)}-css`;
      b.add(f), r.rules.inline.cache.has(f) || (r.rules.inline.cache.add(f), V(c, [`.${f}`], [], e, (S) => {
        s.inline.apply(S);
      }));
    }
    for (const f of String(g.className || "").trim().split(/\s+/))
      f && b.add(f);
    const x = m.className = [...b].join(" ");
    return { type: t.type, className: x, selector: d, props: m, toString: () => x, deferredInjector: a };
  };
  return be(p, { className: o, selector: d, [Q]: t, toString: () => (r.rules.styled.cache.has(o) || p(), o) });
}, It = (e) => {
  let t = "";
  const r = [], o = {}, n = [];
  for (const [i, , , , l, a] of e) {
    t === "" && (t = i), r.push(i), n.push(...a);
    for (const s in l) {
      const d = l[s];
      (o[s] === void 0 || d !== "undefined" || a.includes(d)) && (o[s] = d);
    }
  }
  return [t, r, o, new Set(n)];
}, Te = (e, t, r, o) => {
  const n = [];
  e:
    for (let [i, l, a] of e) {
      if (a)
        continue;
      let s, d = 0, p = !1;
      for (s in i) {
        const g = i[s];
        let c = t[s];
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
            if (h && h.length && (l = { ["@media " + h.join(", ")]: l }), !m)
              continue e;
          }
        }
      }
      (n[d] = n[d] || []).push([o ? "cv" : `${s}-${i[s]}`, l, p]);
    }
  return n;
}, wt = {}, Et = Y(), zt = (e, t) => Et(e, () => (...r) => {
  const o = () => {
    for (let n of r) {
      n = typeof n == "object" && n || {};
      let i = A(n);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in n) {
          let l = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(n["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, l++);
          delete n["@import"];
        }
        V(n, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return be(o, { toString: o });
}), jt = Y(), Pt = (e, t) => jt(e, () => (r) => {
  const o = `${W(e.prefix)}k-${A(r)}`, n = () => {
    if (!t.rules.global.cache.has(o)) {
      t.rules.global.cache.add(o);
      const i = [];
      V(r, [], [], e, (a) => i.push(a));
      const l = `@keyframes ${o}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return o;
  };
  return be(n, { get name() {
    return n();
  }, toString: n });
}), Wt = class {
  constructor(e, t, r, o) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = r == null ? "" : String(r), this.prefix = o == null ? "" : String(o);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + W(this.prefix) + W(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Ot = Y(), Lt = (e, t) => Ot(e, () => (r, o) => {
  o = typeof r == "object" && r || Object(o);
  const n = `.${r = (r = typeof r == "string" ? r : "") || `${W(e.prefix)}t-${A(o)}`}`, i = {}, l = [];
  for (const s in o) {
    i[s] = {};
    for (const d in o[s]) {
      const p = `--${W(e.prefix)}${s}-${d}`, g = Le(String(o[s][d]), e.prefix, s);
      i[s][d] = new Wt(d, g, s, e.prefix), l.push(`${p}:${g}`);
    }
  }
  const a = () => {
    if (l.length && !t.rules.themed.cache.has(r)) {
      t.rules.themed.cache.add(r);
      const s = `${o === e.theme ? ":root," : ""}.${r}{${l.join(";")}}`;
      t.rules.themed.apply(s);
    }
    return r;
  };
  return { ...i, get className() {
    return a();
  }, selector: n, toString: a };
}), At = Y(), Mt = (e) => {
  let t = !1;
  const r = At(e, (o) => {
    t = !0;
    const n = "prefix" in (o = typeof o == "object" && o || {}) ? String(o.prefix) : "", i = typeof o.media == "object" && o.media || {}, l = typeof o.root == "object" ? o.root || null : globalThis.document || null, a = typeof o.theme == "object" && o.theme || {}, s = { prefix: n, media: i, theme: a, themeMap: typeof o.themeMap == "object" && o.themeMap || { ...pt }, utils: typeof o.utils == "object" && o.utils || {} }, d = Rt(l), p = { css: Ct(s, d), globalCss: zt(s, d), keyframes: Pt(s, d), createTheme: Lt(s, d), reset() {
      d.reset(), p.theme.toString();
    }, theme: {}, sheet: d, config: s, prefix: n, getCssText: d.toString, toString: d.toString };
    return String(p.theme = p.createTheme(a)), p;
  });
  return t || r.reset(), r;
};
const Nt = Mt({ prefix: "hope" }), { css: Ae, globalCss: Se, getCssText: Vt, keyframes: Me } = Nt, ye = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Ht(e) {
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
function eo(e, t) {
  return Je(e) ? e.map((r) => r === null ? null : t(r)) : X(e) ? Qe(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function Ft(e, t) {
  const r = t.map((o) => e[o] ?? null);
  for (; Ze(r) === null; )
    r.pop();
  return r;
}
function Dt(e, t) {
  const r = {};
  return e.forEach((o, n) => {
    const i = t[n];
    o != null && (r[i] = o);
  }), r;
}
function Gt(e, t) {
  const r = Object.keys(e);
  return r.length > 0 && r.every((o) => t.includes(o));
}
const to = [
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
const B = {
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
function O(e) {
  return Ne((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function j(e) {
  return Ne((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function Ne(e, ...t) {
  return t.map(e).join(", ");
}
const Ut = "_light", Z = "_dark", Xt = `.${ye.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, Yt = `.${ye.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, Kt = /* @__PURE__ */ new Map([
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
  ["_groupHover", O(B.hover)],
  ["_peerHover", j(B.hover)],
  ["_groupFocus", O(B.focus)],
  ["_peerFocus", j(B.focus)],
  ["_groupFocusVisible", O(B.focusVisible)],
  ["_peerFocusVisible", j(B.focusVisible)],
  ["_groupActive", O(B.active)],
  ["_peerActive", j(B.active)],
  ["_groupDisabled", O(B.disabled)],
  ["_peerDisabled", j(B.disabled)],
  ["_groupInvalid", O(B.invalid)],
  ["_peerInvalid", j(B.invalid)],
  ["_groupChecked", O(B.checked)],
  ["_peerChecked", j(B.checked)],
  ["_groupFocusWithin", O(B.focusWithin)],
  ["_peerFocusWithin", j(B.focusWithin)],
  ["_peerPlaceholderShown", j(B.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [Ut, Xt],
  [Z, Yt]
]), qt = /* @__PURE__ */ new Map([
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
const Jt = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: o, medias: n } = t.__breakpoints, i = {}, l = {};
  for (const a in e) {
    let s = P(e[a], t);
    if (s == null || ce(a, s, i))
      continue;
    if (s = X(s) && r(s) ? o(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const d = s.slice(0, n.length).length;
    for (let p = 0; p < d; p += 1) {
      const g = n?.[p], c = s[p];
      if (c != null) {
        if (!g) {
          ce(a, c, i) || (i[a] = c);
          continue;
        }
        l[g] = l[g] || {}, ce(a, c, l[g]) || (l[g][a] = c);
      }
    }
  }
  return {
    ...i,
    ...l
  };
};
function ce(e, t, r) {
  if (!X(t) || !Ht(t))
    return !1;
  const { light: o, dark: n } = t;
  return o != null && (r[e] = o), r[Z] = r[Z] || {}, n != null && (r[Z][e] = n), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function Qt(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function te(e) {
  if (e == null)
    return e;
  const { unitless: t } = Qt(e);
  return t || je(e) ? `${e}px` : e;
}
const Ve = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, xe = (e) => Object.fromEntries(Object.entries(e).sort(Ve));
function Ie(e) {
  const t = xe(e);
  return Object.assign(Object.values(t), t);
}
function Zt(e) {
  const t = Object.keys(xe(e));
  return new Set(t);
}
function we(e) {
  if (!e)
    return e;
  e = te(e) ?? e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return je(e) ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + t}`);
}
function J(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${te(e)})`), t && r.push("and", `(max-width: ${te(t)})`), r.join(" ");
}
function er(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = Ie(e), r = Object.entries(e).sort(Ve).map(([i, l], a, s) => {
    let [, d] = s[a + 1] ?? [];
    return d = parseFloat(d) > 0 ? we(d) : void 0, {
      _minW: we(l),
      breakpoint: i,
      minW: l,
      maxW: d,
      maxWQuery: J(null, d),
      minWQuery: J(l),
      minMaxQuery: J(l, d)
    };
  }), o = Zt(e), n = Array.from(o.values());
  return {
    keys: o,
    normalized: t,
    asObject: xe(e),
    asArray: Ie(e),
    details: r,
    medias: [null, ...t.map((i) => J(i)).slice(1)],
    isResponsive(i) {
      return Gt(i, n);
    },
    toArrayValue(i) {
      if (!X(i))
        throw new Error("toArrayValue: value must be an object");
      return Ft(i, n);
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return Dt(i, n);
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
const tr = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], He = /!(important)?$/;
function rr(e) {
  return He.test(e);
}
function or(e) {
  return e.replace(He, "").trim();
}
function nr(e, t, r) {
  if (e == null)
    return;
  const o = String(e), n = or(o);
  let i = r[t][n] ?? et(r[t], n);
  return i == null && (i = tr.includes(t) ? n : te(n)), rr(o) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function oe(e, t) {
  const r = {}, o = Jt(e)(t);
  for (let n in o) {
    let i = P(o[n], t);
    if (i == null)
      continue;
    if (n.startsWith("_")) {
      const a = Kt.get(n);
      if (a == null)
        continue;
      n = a;
    }
    if (X(i)) {
      r[n] = Object.assign(
        {},
        r[n],
        oe(i, t)
      );
      continue;
    }
    const l = qt.get(n) ?? [n];
    for (const a of l) {
      const s = t.themeMap[a];
      s != null && (i = nr(i, s, t.vars)), r[a] = i;
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
function ir(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function sr(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const l = t.split("");
    t = [
      l[0],
      l[0],
      l[1],
      l[1],
      l[2],
      l[2]
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
function ar(e) {
  const [t, r, o, n] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: r, b: o, a: n || 1 };
}
function lr(e) {
  return ir(e) ? sr(e) : e.startsWith("rgb") ? ar(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function de(e) {
  const { r: t, g: r, b: o } = lr(e);
  return `${t} ${r} ${o}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function N(e) {
  return {
    ...e,
    mainChannel: de(e[500]),
    lightChannel: de(e[100]),
    darkChannel: de(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const ne = "hope";
function cr(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function dr(e) {
  const t = cr(e.toString());
  return pr(ur(t));
}
function ur(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function pr(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function mr(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function gr(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function fr(e, t = "") {
  return dr(`--${mr(e, t)}`);
}
function hr(e, t, r = ne) {
  const o = fr(e, r);
  return {
    variable: o,
    reference: gr(o, t)
  };
}
function br(e = ne) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const G = "__";
function ue(e, t, r) {
  return hr(String(t).replace(e, "-"), void 0, r);
}
function Sr(e, t) {
  const r = {}, o = {}, n = {}, { colors: i, ...l } = e, a = { colors: i.light }, s = { colors: i.dark }, d = ae(a, G), p = ae(s, G), g = ae(l, G), c = new RegExp(`(${G}|\\.)`, "g");
  for (const [b, x] of Object.entries(d)) {
    const { variable: f, reference: S } = ue(c, b, t);
    r[f] = x, n[b] = S;
  }
  for (const [b, x] of Object.entries(p)) {
    const { variable: f } = ue(c, b, t);
    o[f] = x;
  }
  for (const [b, x] of Object.entries(g)) {
    const { variable: f, reference: S } = ue(c, b, t);
    r[f] = x, n[b] = S;
  }
  const m = tt(n, G);
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
const yr = [
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
function xr(e) {
  return rt(e, yr);
}
function kr(e) {
  const { vars: t, __cssVarsValues: r, __breakpoints: o, ...n } = e;
  return n;
}
function Fe(e) {
  const t = kr(e), r = xr(t), { cssVarsValues: o, vars: n } = Sr(r, t.cssVarPrefix);
  return Object.assign(t, {
    vars: n,
    __cssVarsValues: o,
    __breakpoints: er(t.breakpoints)
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
function De(e) {
  const t = br(e);
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
      primary: N({
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
      neutral: N({
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
      success: N({
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
      info: N({
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
      warning: N({
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
      danger: N({
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
const _r = {
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
}, Ee = {
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
}, Rr = {
  colors: De(ne),
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
  space: Ee,
  sizes: {
    ...Ee,
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
}, vr = {
  ...Rr,
  cssVarPrefix: ne,
  themeMap: _r,
  components: {}
}, ke = Fe(vr);
function ge(e, t, r) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (r = 0; r < t.length; r++)
        e[r] = ge(e[r], t[r]);
    else
      for (r in t) {
        if (r === "__proto__" || r === "constructor" || r === "prototype")
          break;
        e[r] = ge(e[r], t[r]);
      }
    return e;
  }
  return t;
}
function fe(e, t, r) {
  t.split && (t = t.split("."));
  for (var o = 0, n = t.length, i = e, l, a; o < n && (a = t[o++], !(a === "__proto__" || a === "constructor" || a === "prototype")); )
    i = i[a] = o === n ? ge(i[a], r) : typeof (l = i[a]) == typeof t ? l : t[o] * 0 !== 0 || !!~("" + t[o]).indexOf(".") ? {} : [];
}
function ro(e) {
  let t = ke;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: De(e.cssVarPrefix)
  });
  const r = {
    value: t
  };
  return fe(r, "value", e), Fe(r.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function oo(e) {
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
function $r(e) {
  Se({
    ":root": e.__cssVarsValues.root,
    [`.${ye.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function Cr(e) {
  Se({
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
const Ge = ct(ke);
function F() {
  return dt(Ge);
}
function Br(e) {
  const t = F();
  return L(() => {
    if (e != null)
      return t.components[e] ?? void 0;
  });
}
function no(e, t, r) {
  const o = F();
  return ut(t, () => o.components[e]?.defaultProps ?? {}, r);
}
function io(e) {
  const t = e.theme ?? ke;
  return $r(t), e.withCssReset && Cr(t.vars), We(Ge.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function so(e) {
  const t = re((r) => {
    const {
      "@import": o,
      "@font-face": n,
      ...i
    } = P(e, r), l = Object.entries(i).reduce((a, [s, d]) => (a[s] = oe(d, r), a), {});
    Se({
      "@import": o ?? [],
      "@font-face": n ?? {},
      ...l
    })();
  });
  return function() {
    const o = F();
    t(o);
  };
}
function ao(e) {
  return e;
}
function Ue(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Ue(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function _e() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Ue(e)) && (o && (o += " "), o += t);
  return o;
}
function H(e, t) {
  return Ae(oe(e, t))().className;
}
function he(e, t) {
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
function ze(e, t) {
  return Object.entries(e).reduce((r, [o, n]) => {
    const {
      baseStyle: i = {},
      variants: l = {},
      compoundVariants: a = []
    } = n;
    return r[o] = {
      baseClassName: H(i, t),
      variantClassNames: Object.entries(l).reduce((s, [d, p]) => (s[d] = Object.entries(p).reduce(
        (g, [c, m]) => (g[c] = H(m, t), g),
        {}
      ), s), {}),
      compoundVariants: a.map((s) => [
        s.variants,
        H(s.style, t)
      ])
    }, r;
  }, {});
}
function lo(e, t) {
  let r, o, n, i, l = [], a;
  const s = re(
    (d, p, g) => {
      r = P(e, p), o = ze(
        r,
        p
      ), n = P(g, p), i = n && ze(n, p), l = Object.keys(r), a = Object.fromEntries(
        l.map((c) => [c, `hope-${d}-${c}`])
      );
    }
  );
  return function(p, g) {
    const c = F(), m = Br(p);
    s(p, c, m()?.styleConfigOverride);
    const h = L(() => P(g.styleConfigOverride, c)), b = L(() => {
      const [S, R] = Oe(g, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...ee(R)
      };
    }), x = L(() => l.reduce((S, R) => {
      let k = "", z = {}, v = [];
      g.unstyled || (k = o[R].baseClassName ?? "", z = o[R].variantClassNames ?? {}, v = o[R].compoundVariants ?? []);
      const $ = i?.[R]?.baseClassName ?? "", C = i?.[R]?.variantClassNames ?? {}, w = i?.[R]?.compoundVariants ?? [], _ = [a[R], k, $];
      for (const T in b()) {
        const E = b()[T];
        E != null && (_.push(z[T]?.[String(E)]), _.push(C[T]?.[String(E)]));
      }
      for (const [T, E] of [...v, ...w])
        he(T, b()) && _.push(E);
      return S[R] = _e(..._), S;
    }, {})), f = L(() => {
      const S = h();
      return S == null ? {} : l.reduce((R, k) => {
        const z = S[k]?.baseStyle ?? {}, v = S[k]?.variants ?? {}, $ = S[k]?.compoundVariants ?? [];
        R[k] = z;
        for (const C in b()) {
          const w = b()[C];
          if (w == null)
            continue;
          const _ = v[C]?.[String(w)] ?? {};
          Pe(_) || fe(R, k, _);
        }
        for (const C of $)
          he(C.variants, b()) && fe(R, k, C.style);
        return R;
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
function Xe(e, t) {
  const { baseStyle: r = {}, variants: o = {}, compoundVariants: n = [] } = e;
  return {
    baseClassName: H(r, t),
    variantClassNames: Object.entries(o).reduce((i, [l, a]) => (i[l] = Object.entries(a).reduce(
      (s, [d, p]) => (s[d] = H(p, t), s),
      {}
    ), i), {}),
    compoundVariants: n.map((i) => [
      i.variants,
      H(i.style, t)
    ])
  };
}
function Ye(e, t) {
  const { variantClassNames: r = {}, compoundVariants: o = [] } = e, n = [];
  for (const i in t) {
    const l = t[i];
    l != null && n.push(r[i]?.[String(l)]);
  }
  for (const [i, l] of o)
    he(i, t) && n.push(l);
  return n;
}
function co(e) {
  let t, r;
  const o = re((n) => {
    t = P(e, n), r = Xe(t, n);
  });
  return function(i = {}) {
    const l = F();
    return o(l), L(() => {
      if (t == null || r == null)
        return "";
      const s = {
        ...t.defaultVariants,
        ...ee(i)
      }, d = Ye(r, s);
      return _e(r.baseClassName, d);
    });
  };
}
const Tr = {
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
}, Ir = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, wr = {
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
}, Er = {
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
}, zr = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, jr = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, Pr = {
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
}, Wr = {
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
}, Or = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, Lr = {
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
}, Ar = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Mr = {
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
}, Nr = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Vr = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Hr = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, Fr = {
  objectFit: !0,
  objectPosition: !0
}, Dr = {
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
}, Gr = {
  ...Tr,
  ...Ir,
  ...wr,
  ...Er,
  ...zr,
  ...jr,
  ...Pr,
  ...Wr,
  ...Or,
  ...Lr,
  ...Ar,
  ...Mr,
  ...Nr,
  ...Vr,
  ...Hr,
  ...Fr,
  ...Dr
};
function Ur(e) {
  return Object.keys(e).filter((t) => t in Gr);
}
const Ke = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function Xr(e) {
  return Object.entries(e).reduce((t, [r, o]) => {
    const n = Ke.get(r);
    return n != null && o != null && (t[n] = o), t;
  }, {});
}
const Yr = Ae({});
function pe(e, t, r) {
  let o, n, i = [];
  const l = re((s) => {
    t != null && (o = P(t, s), n = Xe(o, s), i = o.variants ? Object.keys(o.variants) : []);
  }), a = (s) => {
    const d = F();
    l(d);
    const [p, g, c, m, h] = Oe(
      s,
      ["as", "class", "sx", "__css"],
      [...Ke.keys()],
      i,
      Ur(s)
    ), b = L(() => {
      if (n == null)
        return [];
      const f = {
        ...o?.defaultVariants,
        ...ee(c)
      };
      return Ye(n, f);
    }), x = L(() => {
      const f = Object.assign({}, p.__css, ee(m), ...ot(p.sx).map((S) => P(S, d)));
      if (!Pe(f))
        return Yr({
          css: oe(f, d)
        }).className;
    });
    return We(nt, it({
      get component() {
        return p.as ?? e;
      },
      get class() {
        return _e(r, n?.baseClassName, ...b(), x(), p.class) || void 0;
      }
    }, () => Xr(g), h));
  };
  return r != null && (a.toString = () => `.${r}`), a;
}
function Kr() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(pe, {
    apply(t, r, o) {
      return pe(...o);
    },
    get(t, r) {
      return e.has(r) || e.set(r, pe(r)), e.get(r);
    }
  });
}
const uo = Kr(), qr = /* @__PURE__ */ lt('<style id="stitches" $serveronly></style>', 2);
function po() {
  st(() => (() => {
    const e = qr.cloneNode(!0);
    return at(() => e.innerHTML = Vt()), e;
  })());
}
const mo = Me({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), go = Me({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
export {
  ye as COLOR_MODE_CLASSNAMES,
  ke as DEFAULT_THEME,
  _r as DEFAULT_THEME_MAP,
  to as STYLE_CONFIG_PROP_NAMES,
  io as ThemeProvider,
  Dt as arrayToObjectNotation,
  Xe as computeStyleOptions,
  so as createGlobalStyles,
  ao as createHopeComponent,
  N as createPalette,
  lo as createStyleConfig,
  co as createStyles,
  ro as extendTheme,
  go as fadeIn,
  oo as focusStyles,
  Ye as getSelectedVariantClassNames,
  uo as hope,
  po as injectCriticalStyle,
  Ht as isColorModeObjectLike,
  Gt as isResponsiveObjectLike,
  Me as keyframes,
  eo as mapResponsive,
  no as mergeThemeProps,
  Ft as objectToArrayNotation,
  bo as pack,
  nr as resolveTokenValue,
  mo as spin,
  Br as useComponentTheme,
  F as useTheme
};
