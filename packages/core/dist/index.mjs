import { createContext as ie, useContext as se, createMemo as O, mergeProps as et, splitProps as x, createSignal as R, createEffect as J, onCleanup as B, on as So, untrack as In, sharedConfig as Rn, onMount as me, getOwner as $n, DEV as On, Show as P, createUniqueId as tt, children as En, createRenderEffect as vo } from "solid-js";
import { createComponent as f, useAssets as zn, effect as Rt, template as he, Dynamic as Tn, mergeProps as b, isServer as ue, setAttribute as wo, memo as Le, Portal as ot, insert as Bn } from "solid-js/web";
import { autoUpdate as An, offset as Mn, flip as Dn, shift as Ln, size as Wn, arrow as Pn, hide as Fn, computePosition as Hn } from "@floating-ui/dom";
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
function ko(e) {
  return typeof e == "number";
}
function nt(e) {
  return Array.isArray(e);
}
function jn(e) {
  return typeof e == "function";
}
function de(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !nt(e);
}
function _o(e) {
  return de(e) && Object.keys(e).length === 0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function Vn(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Nn(e) {
  return e == null ? [] : nt(e) ? e : [e];
}
function ne(e, ...t) {
  return jn(e) ? e(...t) : e;
}
function rt(e) {
  let t = !1;
  return function(...o) {
    t || (t = !0, e(...o));
  };
}
function Ke(e, t, o = 1 / 0) {
  return !de(e) && !Array.isArray(e) || !o ? e : Object.entries(e).reduce((n, [r, i]) => (de(i) || nt(i) ? Object.entries(Ke(i, t, o - 1)).forEach(([s, l]) => {
    n[`${r}${t}${s}`] = l;
  }) : n[r] = i, n), {});
}
function qn(e, t) {
  return Object.keys(e).reduce((o, n) => (n.split(t).reduce((r, i, s, l) => (r[i] != null || (r[i] = l.length - 1 === s ? e[n] : {}), r[i]), o), o), {});
}
function Gn(e, t) {
  return t.split(".").reduce((o, n) => o && o[n], e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
function Yn(e, t) {
  const o = {};
  return t.forEach((n) => {
    n in e && (o[n] = e[n]);
  }), o;
}
const Kn = (e) => Object.keys(e);
function Xn(e, t) {
  const o = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    t(r, n, e) && (o[n] = r);
  }), o;
}
function Je(e) {
  return Xn(e, (t) => t != null);
}
var I = "colors", N = "sizes", p = "space", Un = { gap: p, gridGap: p, columnGap: p, gridColumnGap: p, rowGap: p, gridRowGap: p, inset: p, insetBlock: p, insetBlockEnd: p, insetBlockStart: p, insetInline: p, insetInlineEnd: p, insetInlineStart: p, margin: p, marginTop: p, marginRight: p, marginBottom: p, marginLeft: p, marginBlock: p, marginBlockEnd: p, marginBlockStart: p, marginInline: p, marginInlineEnd: p, marginInlineStart: p, padding: p, paddingTop: p, paddingRight: p, paddingBottom: p, paddingLeft: p, paddingBlock: p, paddingBlockEnd: p, paddingBlockStart: p, paddingInline: p, paddingInlineEnd: p, paddingInlineStart: p, top: p, right: p, bottom: p, left: p, scrollMargin: p, scrollMarginTop: p, scrollMarginRight: p, scrollMarginBottom: p, scrollMarginLeft: p, scrollMarginX: p, scrollMarginY: p, scrollMarginBlock: p, scrollMarginBlockEnd: p, scrollMarginBlockStart: p, scrollMarginInline: p, scrollMarginInlineEnd: p, scrollMarginInlineStart: p, scrollPadding: p, scrollPaddingTop: p, scrollPaddingRight: p, scrollPaddingBottom: p, scrollPaddingLeft: p, scrollPaddingX: p, scrollPaddingY: p, scrollPaddingBlock: p, scrollPaddingBlockEnd: p, scrollPaddingBlockStart: p, scrollPaddingInline: p, scrollPaddingInlineEnd: p, scrollPaddingInlineStart: p, fontSize: "fontSizes", background: I, backgroundColor: I, backgroundImage: I, borderImage: I, border: I, borderBlock: I, borderBlockEnd: I, borderBlockStart: I, borderBottom: I, borderBottomColor: I, borderColor: I, borderInline: I, borderInlineEnd: I, borderInlineStart: I, borderLeft: I, borderLeftColor: I, borderRight: I, borderRightColor: I, borderTop: I, borderTopColor: I, caretColor: I, color: I, columnRuleColor: I, fill: I, outline: I, outlineColor: I, stroke: I, textDecorationColor: I, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: N, minBlockSize: N, maxBlockSize: N, inlineSize: N, minInlineSize: N, maxInlineSize: N, width: N, minWidth: N, maxWidth: N, height: N, minHeight: N, maxHeight: N, flexBasis: N, gridTemplateColumns: N, gridTemplateRows: N, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Zn = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, We = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o, ...n) => {
    const r = ((i) => JSON.stringify(i, Zn))(t);
    return r in e ? e[r] : e[r] = o(t, ...n);
  };
}, Xe = Symbol.for("sxs.internal"), $t = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Ht = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: Jn } = Object.prototype, Ct = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), Qn = /\s+(?![^()]*\))/, Ce = (e) => (t) => e(...typeof t == "string" ? String(t).split(Qn) : [t]), jt = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: Ce((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: Ce((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: Ce((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: Ce((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: Ce((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: Ce((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, gt = /([\d.]+)([^]*)/, er = (e, t) => e.length ? e.reduce((o, n) => (o.push(...t.map((r) => r.includes("&") ? r.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(r) ? `:is(${n})` : n) : n + " " + r)), o), []) : t, tr = (e, t) => e in or && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (o, n, r, i) => n + (r === "stretch" ? `-moz-available${i};${Ct(e)}:${n}-webkit-fill-available` : `-moz-fit-content${i};${Ct(e)}:${n}fit-content`) + i) : String(t), or = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, re = (e) => e ? e + "-" : "", Io = (e, t, o) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (n, r, i, s, l) => s == "$" == !!i ? n : (r || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? re(t) + (l.includes("$") ? "" : re(o)) + l.replace(/\$/g, "-") : l) + ")" + (r || s == "--" ? "*" + (r || "") + (i || "1") + ")" : "")), nr = /\s*,\s*(?![^()]*\))/, rr = Object.prototype.toString, we = (e, t, o, n, r) => {
  let i, s, l;
  const a = (d, u, g) => {
    let c, m;
    const h = (S) => {
      for (c in S) {
        const v = c.charCodeAt(0) === 64, V = v && Array.isArray(S[c]) ? S[c] : [S[c]];
        for (m of V) {
          const _ = /[A-Z]/.test(y = c) ? y : y.replace(/-[^]/g, (A) => A[1].toUpperCase()), X = typeof m == "object" && m && m.toString === rr && (!n.utils[_] || !u.length);
          if (_ in n.utils && !X) {
            const A = n.utils[_];
            if (A !== s) {
              s = A, h(A(m)), s = null;
              continue;
            }
          } else if (_ in jt) {
            const A = jt[_];
            if (A !== l) {
              l = A, h(A(m)), l = null;
              continue;
            }
          }
          if (v && (k = c.slice(1) in n.media ? "@media " + n.media[c.slice(1)] : c, c = k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (A, E, M, L, W, H) => {
            const ae = gt.test(E), ye = 0.0625 * (ae ? -1 : 1), [xe, Ve] = ae ? [L, E] : [E, L];
            return "(" + (M[0] === "=" ? "" : M[0] === ">" === ae ? "max-" : "min-") + xe + ":" + (M[0] !== "=" && M.length === 1 ? Ve.replace(gt, (ut, Re, $e) => Number(Re) + ye * (M === ">" ? 1 : -1) + $e) : Ve) + (W ? ") and (" + (W[0] === ">" ? "min-" : "max-") + xe + ":" + (W.length === 1 ? H.replace(gt, (ut, Re, $e) => Number(Re) + ye * (W === ">" ? -1 : 1) + $e) : H) : "") + ")";
          })), X) {
            const A = v ? g.concat(c) : [...g], E = v ? [...u] : er(u, c.split(nr));
            i !== void 0 && r(Vt(...i)), i = void 0, a(m, E, A);
          } else
            i === void 0 && (i = [[], u, g]), c = v || c.charCodeAt(0) !== 36 ? c : `--${re(n.prefix)}${c.slice(1).replace(/\$/g, "-")}`, m = X ? m : typeof m == "number" ? m && _ in ir ? String(m) + "px" : String(m) : Io(tr(_, m ?? ""), n.prefix, n.themeMap[_]), i[0].push(`${v ? `${c} ` : `${Ct(c)}:`}${m}`);
        }
      }
      var k, y;
    };
    h(d), i !== void 0 && r(Vt(...i)), i = void 0;
  };
  a(e, t, o);
}, Vt = (e, t, o) => `${o.map((n) => `${n}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(o.length ? o.length + 1 : 0).join("}")}`, ir = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Nt = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), fe = (e) => ((t) => {
  let o, n = "";
  for (o = Math.abs(t); o > 52; o = o / 52 | 0)
    n = Nt(o % 52) + n;
  return Nt(o % 52) + n;
})(((t, o) => {
  let n = o.length;
  for (; n; )
    t = 33 * t ^ o.charCodeAt(--n);
  return t;
})(5381, JSON.stringify(e)) >>> 0), Ae = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], sr = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, ar = (e) => {
  let t;
  const o = () => {
    const { cssRules: r } = t.sheet;
    return [].map.call(r, (i, s) => {
      const { cssText: l } = i;
      let a = "";
      if (l.startsWith("--sxs"))
        return "";
      if (r[s - 1] && (a = r[s - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === i)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${l}`;
        return i.cssRules.length ? `${a}${l}` : "";
      }
      return l;
    }).join("");
  }, n = () => {
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
    const r = Object(e).styleSheets || [];
    for (const l of r)
      if (sr(l)) {
        for (let a = 0, d = l.cssRules; d[a]; ++a) {
          const u = Object(d[a]);
          if (u.type !== 1)
            continue;
          const g = Object(d[a + 1]);
          if (g.type !== 4)
            continue;
          ++a;
          const { cssText: c } = u;
          if (!c.startsWith("--sxs"))
            continue;
          const m = c.slice(14, -3).trim().split(/\s+/), h = Ae[m[0]];
          h && (t || (t = { sheet: l, reset: n, rules: {}, toString: o }), t.rules[h] = { group: g, index: a, cache: new Set(m) });
        }
        if (t)
          break;
      }
    if (!t) {
      const l = (a, d) => ({ type: d, cssRules: [], insertRule(u, g) {
        this.cssRules.splice(g, 0, l(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return a === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : a;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : l("", "text/css"), rules: {}, reset: n, toString: o };
    }
    const { sheet: i, rules: s } = t;
    for (let l = Ae.length - 1; l >= 0; --l) {
      const a = Ae[l];
      if (!s[a]) {
        const d = Ae[l + 1], u = s[d] ? s[d].index : i.cssRules.length;
        i.insertRule("@media{}", u), i.insertRule(`--sxs{--sxs:${l}}`, u), s[a] = { group: i.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([l]) };
      }
      lr(s[a]);
    }
  };
  return n(), t;
}, lr = (e) => {
  const t = e.group;
  let o = t.cssRules.length;
  e.apply = (n) => {
    try {
      t.insertRule(n, o), ++o;
    } catch {
    }
  };
}, Ee = Symbol(), cr = We(), dr = (e, t) => cr(e, () => (...o) => {
  let n = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const r of o)
    if (r != null)
      if (r[Xe]) {
        n.type == null && (n.type = r[Xe].type);
        for (const i of r[Xe].composers)
          n.composers.add(i);
      } else
        r.constructor !== Object || r.$$typeof ? n.type == null && (n.type = r) : n.composers.add(ur(r, e));
  return n.type == null && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), gr(e, n, t);
}), ur = ({ variants: e, compoundVariants: t, defaultVariants: o, ...n }, r) => {
  const i = `${re(r.prefix)}c-${fe(n)}`, s = [], l = [], a = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in o)
    a[c] = String(o[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      u = a, g = c, Jn.call(u, g) || (a[c] = "undefined");
      const m = e[c];
      for (const h in m) {
        const S = { [c]: String(h) };
        String(h) === "undefined" && d.push(c);
        const k = m[h], y = [S, k, !Ht(k)];
        s.push(y);
      }
    }
  var u, g;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: m, ...h } = c;
      m = typeof m == "object" && m || {};
      for (const k in h)
        h[k] = String(h[k]);
      const S = [h, m, !Ht(m)];
      l.push(S);
    }
  return [i, n, s, l, a, d];
}, gr = (e, t, o) => {
  const [n, r, i, s] = fr(t.composers), l = typeof t.type == "function" || t.type.$$typeof ? ((g) => {
    function c() {
      for (let m = 0; m < c[Ee].length; m++) {
        const [h, S] = c[Ee][m];
        g.rules[h].apply(S);
      }
      return c[Ee] = [], null;
    }
    return c[Ee] = [], c.rules = {}, Ae.forEach((m) => c.rules[m] = { apply: (h) => c[Ee].push([m, h]) }), c;
  })(o) : null, a = (l || o).rules, d = `.${n}${r.length > 1 ? `:where(.${r.slice(1).join(".")})` : ""}`, u = (g) => {
    g = typeof g == "object" && g || mr;
    const { css: c, ...m } = g, h = {};
    for (const y in i)
      if (delete m[y], y in g) {
        let v = g[y];
        typeof v == "object" && v ? h[y] = { "@initial": i[y], ...v } : (v = String(v), h[y] = v !== "undefined" || s.has(y) ? v : i[y]);
      } else
        h[y] = i[y];
    const S = /* @__PURE__ */ new Set([...r]);
    for (const [y, v, V, _] of t.composers) {
      o.rules.styled.cache.has(y) || (o.rules.styled.cache.add(y), we(v, [`.${y}`], [], e, (E) => {
        a.styled.apply(E);
      }));
      const X = qt(V, h, e.media), A = qt(_, h, e.media, !0);
      for (const E of X)
        if (E !== void 0)
          for (const [M, L, W] of E) {
            const H = `${y}-${fe(L)}-${M}`;
            S.add(H);
            const ae = (W ? o.rules.resonevar : o.rules.onevar).cache, ye = W ? a.resonevar : a.onevar;
            ae.has(H) || (ae.add(H), we(L, [`.${H}`], [], e, (xe) => {
              ye.apply(xe);
            }));
          }
      for (const E of A)
        if (E !== void 0)
          for (const [M, L] of E) {
            const W = `${y}-${fe(L)}-${M}`;
            S.add(W), o.rules.allvar.cache.has(W) || (o.rules.allvar.cache.add(W), we(L, [`.${W}`], [], e, (H) => {
              a.allvar.apply(H);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const y = `${n}-i${fe(c)}-css`;
      S.add(y), o.rules.inline.cache.has(y) || (o.rules.inline.cache.add(y), we(c, [`.${y}`], [], e, (v) => {
        a.inline.apply(v);
      }));
    }
    for (const y of String(g.className || "").trim().split(/\s+/))
      y && S.add(y);
    const k = m.className = [...S].join(" ");
    return { type: t.type, className: k, selector: d, props: m, toString: () => k, deferredInjector: l };
  };
  return $t(u, { className: n, selector: d, [Xe]: t, toString: () => (o.rules.styled.cache.has(n) || u(), n) });
}, fr = (e) => {
  let t = "";
  const o = [], n = {}, r = [];
  for (const [i, , , , s, l] of e) {
    t === "" && (t = i), o.push(i), r.push(...l);
    for (const a in s) {
      const d = s[a];
      (n[a] === void 0 || d !== "undefined" || l.includes(d)) && (n[a] = d);
    }
  }
  return [t, o, n, new Set(r)];
}, qt = (e, t, o, n) => {
  const r = [];
  e:
    for (let [i, s, l] of e) {
      if (l)
        continue;
      let a, d = 0, u = !1;
      for (a in i) {
        const g = i[a];
        let c = t[a];
        if (c !== g) {
          if (typeof c != "object" || !c)
            continue e;
          {
            let m, h, S = 0;
            for (const k in c) {
              if (g === String(c[k])) {
                if (k !== "@initial") {
                  const y = k.slice(1);
                  (h = h || []).push(y in o ? o[y] : k.replace(/^@media ?/, "")), u = !0;
                }
                d += S, m = !0;
              }
              ++S;
            }
            if (h && h.length && (s = { ["@media " + h.join(", ")]: s }), !m)
              continue e;
          }
        }
      }
      (r[d] = r[d] || []).push([n ? "cv" : `${a}-${i[a]}`, s, u]);
    }
  return r;
}, mr = {}, hr = We(), pr = (e, t) => hr(e, () => (...o) => {
  const n = () => {
    for (let r of o) {
      r = typeof r == "object" && r || {};
      let i = fe(r);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in r) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let l of [].concat(r["@import"]))
            l = l.includes('"') || l.includes("'") ? l : `"${l}"`, t.sheet.insertRule(`@import ${l};`, s++);
          delete r["@import"];
        }
        we(r, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return $t(n, { toString: n });
}), br = We(), yr = (e, t) => br(e, () => (o) => {
  const n = `${re(e.prefix)}k-${fe(o)}`, r = () => {
    if (!t.rules.global.cache.has(n)) {
      t.rules.global.cache.add(n);
      const i = [];
      we(o, [], [], e, (l) => i.push(l));
      const s = `@keyframes ${n}{${i.join("")}}`;
      t.rules.global.apply(s);
    }
    return n;
  };
  return $t(r, { get name() {
    return r();
  }, toString: r });
}), xr = class {
  constructor(e, t, o, n) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = o == null ? "" : String(o), this.prefix = n == null ? "" : String(n);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + re(this.prefix) + re(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Cr = We(), Sr = (e, t) => Cr(e, () => (o, n) => {
  n = typeof o == "object" && o || Object(n);
  const r = `.${o = (o = typeof o == "string" ? o : "") || `${re(e.prefix)}t-${fe(n)}`}`, i = {}, s = [];
  for (const a in n) {
    i[a] = {};
    for (const d in n[a]) {
      const u = `--${re(e.prefix)}${a}-${d}`, g = Io(String(n[a][d]), e.prefix, a);
      i[a][d] = new xr(d, g, a, e.prefix), s.push(`${u}:${g}`);
    }
  }
  const l = () => {
    if (s.length && !t.rules.themed.cache.has(o)) {
      t.rules.themed.cache.add(o);
      const a = `${n === e.theme ? ":root," : ""}.${o}{${s.join(";")}}`;
      t.rules.themed.apply(a);
    }
    return o;
  };
  return { ...i, get className() {
    return l();
  }, selector: r, toString: l };
}), vr = We(), wr = (e) => {
  let t = !1;
  const o = vr(e, (n) => {
    t = !0;
    const r = "prefix" in (n = typeof n == "object" && n || {}) ? String(n.prefix) : "", i = typeof n.media == "object" && n.media || {}, s = typeof n.root == "object" ? n.root || null : globalThis.document || null, l = typeof n.theme == "object" && n.theme || {}, a = { prefix: r, media: i, theme: l, themeMap: typeof n.themeMap == "object" && n.themeMap || { ...Un }, utils: typeof n.utils == "object" && n.utils || {} }, d = ar(s), u = { css: dr(a, d), globalCss: pr(a, d), keyframes: yr(a, d), createTheme: Sr(a, d), reset() {
      d.reset(), u.theme.toString();
    }, theme: {}, sheet: d, config: a, prefix: r, getCssText: d.toString, toString: d.toString };
    return String(u.theme = u.createTheme(l)), u;
  });
  return t || o.reset(), o;
};
const kr = wr({ prefix: "hope" }), { css: Ro, globalCss: Ot, getCssText: _r, keyframes: $o } = kr, ge = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Ir(e) {
  const t = Object.keys(e);
  return t.length > 0 && t.every((o) => ["light", "dark"].includes(o));
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */
function Z(e, t) {
  return nt(e) ? e.map((o) => o === null ? null : t(o)) : de(e) ? Kn(e).reduce((o, n) => (o[n] = t(e[n]), o), {}) : e != null ? t(e) : null;
}
function Rr(e, t) {
  const o = t.map((n) => e[n] ?? null);
  for (; Vn(o) === null; )
    o.pop();
  return o;
}
function $r(e, t) {
  const o = {};
  return e.forEach((n, r) => {
    const i = t[r];
    n != null && (o[i] = n);
  }), o;
}
function Or(e, t) {
  const o = Object.keys(e);
  return o.length > 0 && o.every((n) => t.includes(n));
}
const Q = [
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
const j = {
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
function le(e) {
  return Oo((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function oe(e) {
  return Oo((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function Oo(e, ...t) {
  return t.map(e).join(", ");
}
const Er = "_light", Ue = "_dark", zr = `.${ge.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, Tr = `.${ge.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, Br = /* @__PURE__ */ new Map([
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
  ["_groupHover", le(j.hover)],
  ["_peerHover", oe(j.hover)],
  ["_groupFocus", le(j.focus)],
  ["_peerFocus", oe(j.focus)],
  ["_groupFocusVisible", le(j.focusVisible)],
  ["_peerFocusVisible", oe(j.focusVisible)],
  ["_groupActive", le(j.active)],
  ["_peerActive", oe(j.active)],
  ["_groupDisabled", le(j.disabled)],
  ["_peerDisabled", oe(j.disabled)],
  ["_groupInvalid", le(j.invalid)],
  ["_peerInvalid", oe(j.invalid)],
  ["_groupChecked", le(j.checked)],
  ["_peerChecked", oe(j.checked)],
  ["_groupFocusWithin", le(j.focusWithin)],
  ["_peerFocusWithin", oe(j.focusWithin)],
  ["_peerPlaceholderShown", oe(j.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [Er, zr],
  [Ue, Tr]
]), Ar = /* @__PURE__ */ new Map([
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
const Mr = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: o, toArrayValue: n, medias: r } = t.__breakpoints, i = {}, s = {};
  for (const l in e) {
    let a = ne(e[l], t);
    if (a == null || ft(l, a, i))
      continue;
    if (a = de(a) && o(a) ? n(a) : a, !Array.isArray(a)) {
      i[l] = a;
      continue;
    }
    const d = a.slice(0, r.length).length;
    for (let u = 0; u < d; u += 1) {
      const g = r?.[u], c = a[u];
      if (c != null) {
        if (!g) {
          ft(l, c, i) || (i[l] = c);
          continue;
        }
        s[g] = s[g] || {}, ft(l, c, s[g]) || (s[g][l] = c);
      }
    }
  }
  return {
    ...i,
    ...s
  };
};
function ft(e, t, o) {
  if (!de(t) || !Ir(t))
    return !1;
  const { light: n, dark: r } = t;
  return n != null && (o[e] = n), o[Ue] = o[Ue] || {}, r != null && (o[Ue][e] = r), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function Dr(e) {
  const t = parseFloat(e.toString()), o = e.toString().replace(String(t), "");
  return { unitless: !o, value: t, unit: o };
}
function Qe(e) {
  if (e == null)
    return e;
  const { unitless: t } = Dr(e);
  return t || ko(e) ? `${e}px` : e;
}
const Eo = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Et = (e) => Object.fromEntries(Object.entries(e).sort(Eo));
function Gt(e) {
  const t = Et(e);
  return Object.assign(Object.values(t), t);
}
function Lr(e) {
  const t = Object.keys(Et(e));
  return new Set(t);
}
function Yt(e) {
  if (!e)
    return e;
  e = Qe(e) ?? e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return ko(e) ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (o) => `${parseFloat(o) + t}`);
}
function Ge(e, t) {
  const o = ["@media screen"];
  return e && o.push("and", `(min-width: ${Qe(e)})`), t && o.push("and", `(max-width: ${Qe(t)})`), o.join(" ");
}
function Wr(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = Gt(e), o = Object.entries(e).sort(Eo).map(([i, s], l, a) => {
    let [, d] = a[l + 1] ?? [];
    return d = parseFloat(d) > 0 ? Yt(d) : void 0, {
      _minW: Yt(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: Ge(null, d),
      minWQuery: Ge(s),
      minMaxQuery: Ge(s, d)
    };
  }), n = Lr(e), r = Array.from(n.values());
  return {
    keys: n,
    normalized: t,
    asObject: Et(e),
    asArray: Gt(e),
    details: o,
    medias: [null, ...t.map((i) => Ge(i)).slice(1)],
    isResponsive(i) {
      return Or(i, r);
    },
    toArrayValue(i) {
      if (!de(i))
        throw new Error("toArrayValue: value must be an object");
      return Rr(i, r);
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return $r(i, r);
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
const Pr = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], zo = /!(important)?$/;
function Fr(e) {
  return zo.test(e);
}
function Hr(e) {
  return e.replace(zo, "").trim();
}
function To(e, t, o) {
  if (e == null)
    return;
  const n = String(e), r = Hr(n);
  let i = o[t][r] ?? Gn(o[t], r);
  return i == null && (i = Pr.includes(t) ? r : Qe(r)), Fr(n) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function it(e, t) {
  const o = {}, n = Mr(e)(t);
  for (let r in n) {
    let i = ne(n[r], t);
    if (i == null)
      continue;
    if (r.startsWith("_")) {
      const l = Br.get(r);
      if (l == null)
        continue;
      r = l;
    }
    if (de(i)) {
      o[r] = Object.assign(
        {},
        o[r],
        it(i, t)
      );
      continue;
    }
    const s = Ar.get(r) ?? [r];
    for (const l of s) {
      const a = t.themeMap[l];
      a != null && (i = To(i, a, t.vars)), o[l] = i;
    }
  }
  return o;
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */
function jr(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function Vr(e) {
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
  const o = parseInt(t, 16), n = o >> 16 & 255, r = o >> 8 & 255, i = o & 255;
  return {
    r: n,
    g: r,
    b: i,
    a: 1
  };
}
function Nr(e) {
  const [t, o, n, r] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: o, b: n, a: r || 1 };
}
function qr(e) {
  return jr(e) ? Vr(e) : e.startsWith("rgb") ? Nr(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function mt(e) {
  const { r: t, g: o, b: n } = qr(e);
  return `${t} ${o} ${n}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function Se(e) {
  return {
    ...e,
    mainChannel: mt(e[500]),
    lightChannel: mt(e[100]),
    darkChannel: mt(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const st = "hope";
function Gr(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Yr(e) {
  const t = Gr(e.toString());
  return Xr(Kr(t));
}
function Kr(e) {
  return e.includes("\\.") || Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.");
}
function Xr(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Ur(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Zr(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Jr(e, t = "") {
  return Yr(`--${Ur(e, t)}`);
}
function Qr(e, t, o = st) {
  const n = Jr(e, o);
  return {
    variable: n,
    reference: Zr(n, t)
  };
}
function ei(e = st) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const ze = "__";
function ht(e, t, o) {
  return Qr(String(t).replace(e, "-"), void 0, o);
}
function ti(e, t) {
  const o = {}, n = {}, r = {}, { colors: i, ...s } = e, l = { colors: i.light }, a = { colors: i.dark }, d = Ke(l, ze), u = Ke(a, ze), g = Ke(s, ze), c = new RegExp(`(${ze}|\\.)`, "g");
  for (const [h, S] of Object.entries(d)) {
    const { variable: k, reference: y } = ht(c, h, t);
    o[k] = S, r[h] = y;
  }
  for (const [h, S] of Object.entries(u)) {
    const { variable: k } = ht(c, h, t);
    n[k] = S;
  }
  for (const [h, S] of Object.entries(g)) {
    const { variable: k, reference: y } = ht(c, h, t);
    o[k] = S, r[h] = y;
  }
  const m = qn(r, ze);
  return { cssVarsValues: {
    root: o,
    dark: n
  }, vars: m };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const oi = [
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
function ni(e) {
  return Yn(e, oi);
}
function ri(e) {
  const { vars: t, __cssVarsValues: o, __breakpoints: n, ...r } = e;
  return r;
}
function Bo(e) {
  const t = ri(e), o = ni(t), { cssVarsValues: n, vars: r } = ti(o, t.cssVarPrefix);
  return Object.assign(t, {
    vars: r,
    __cssVarsValues: n,
    __breakpoints: Wr(t.breakpoints)
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
function Ao(e) {
  const t = ei(e);
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
      primary: Se({
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
      neutral: Se({
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
      success: Se({
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
      info: Se({
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
      warning: Se({
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
      danger: Se({
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
const ii = {
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
}, Kt = {
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
}, si = {
  colors: Ao(st),
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
  space: Kt,
  sizes: {
    ...Kt,
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
}, ai = {
  ...si,
  cssVarPrefix: st,
  themeMap: ii,
  components: {}
}, zt = Bo(ai);
function St(e, t, o) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (o = 0; o < t.length; o++)
        e[o] = St(e[o], t[o]);
    else
      for (o in t) {
        if (o === "__proto__" || o === "constructor" || o === "prototype")
          break;
        e[o] = St(e[o], t[o]);
      }
    return e;
  }
  return t;
}
function vt(e, t, o) {
  t.split && (t = t.split("."));
  for (var n = 0, r = t.length, i = e, s, l; n < r && (l = t[n++], !(l === "__proto__" || l === "constructor" || l === "prototype")); )
    i = i[l] = n === r ? St(i[l], o) : typeof (s = i[l]) == typeof t ? s : t[n] * 0 !== 0 || !!~("" + t[n]).indexOf(".") ? {} : [];
}
function Ya(e) {
  let t = zt;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: Ao(e.cssVarPrefix)
  });
  const o = {
    value: t
  };
  return vt(o, "value", e), Bo(o.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function Tt(e) {
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
function li(e) {
  Ot({
    ":root": e.__cssVarsValues.root,
    [`.${ge.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function ci(e) {
  Ot({
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
const Mo = ie(zt);
function pe() {
  return se(Mo);
}
function di(e) {
  const t = pe();
  return O(() => {
    if (e != null)
      return t.components[e] ?? void 0;
  });
}
function ee(e, t, o) {
  const n = pe();
  return et(t, () => n.components[e]?.defaultProps ?? {}, o);
}
function ui(e) {
  const t = e.theme ?? zt;
  return li(t), e.withCssReset && ci(t.vars), f(Mo.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function Ka(e) {
  const t = rt((o) => {
    const {
      "@import": n,
      "@font-face": r,
      ...i
    } = ne(e, o), s = Object.entries(i).reduce((l, [a, d]) => (l[a] = it(d, o), l), {});
    Ot({
      "@import": n ?? [],
      "@font-face": r ?? {},
      ...s
    })();
  });
  return function() {
    const o = pe();
    t(o);
  };
}
function Xa(e) {
  return e;
}
function Do(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = Do(e[t])) && (n && (n += " "), n += o);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Bt() {
  for (var e, t, o = 0, n = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = Do(e)) && (n && (n += " "), n += t);
  return n;
}
function ke(e, t) {
  return Ro(it(e, t))().className;
}
function wt(e, t) {
  for (const o of Object.keys(e))
    if (e[o] !== t[o])
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
function Xt(e, t) {
  return Object.entries(e).reduce((o, [n, r]) => {
    const {
      baseStyle: i = {},
      variants: s = {},
      compoundVariants: l = []
    } = r;
    return o[n] = {
      baseClassName: ke(i, t),
      variantClassNames: Object.entries(s).reduce((a, [d, u]) => (a[d] = Object.entries(u).reduce(
        (g, [c, m]) => (g[c] = ke(m, t), g),
        {}
      ), a), {}),
      compoundVariants: l.map((a) => [
        a.variants,
        ke(a.style, t)
      ])
    }, o;
  }, {});
}
function K(e, t) {
  let o, n, r, i, s = [], l;
  const a = rt(
    (d, u, g) => {
      o = ne(e, u), n = Xt(
        o,
        u
      ), r = ne(g, u), i = r && Xt(r, u), s = Object.keys(o), l = Object.fromEntries(
        s.map((c) => [c, `hope-${d}-${c}`])
      );
    }
  );
  return function(d, u) {
    const g = pe(), c = di(d);
    a(d, g, c()?.styleConfigOverride);
    const m = O(() => ne(u.styleConfigOverride, g)), h = O(() => {
      const [y, v] = x(u, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...Je(v)
      };
    }), S = O(() => s.reduce((y, v) => {
      let V = "", _ = {}, X = [];
      u.unstyled || (V = n[v].baseClassName ?? "", _ = n[v].variantClassNames ?? {}, X = n[v].compoundVariants ?? []);
      const A = i?.[v]?.baseClassName ?? "", E = i?.[v]?.variantClassNames ?? {}, M = i?.[v]?.compoundVariants ?? [], L = [l[v], V, A];
      for (const W in h()) {
        const H = h()[W];
        H != null && (L.push(_[W]?.[String(H)]), L.push(E[W]?.[String(H)]));
      }
      for (const [W, H] of [...X, ...M])
        wt(W, h()) && L.push(H);
      return y[v] = Bt(...L), y;
    }, {})), k = O(() => {
      const y = m();
      return y == null ? {} : s.reduce((v, V) => {
        const _ = y[V]?.baseStyle ?? {}, X = y[V]?.variants ?? {}, A = y[V]?.compoundVariants ?? [];
        v[V] = _;
        for (const E in h()) {
          const M = h()[E];
          if (M == null)
            continue;
          const L = X[E]?.[String(M)] ?? {};
          _o(L) || vt(v, V, L);
        }
        for (const E of A)
          wt(E.variants, h()) && vt(v, V, E.style);
        return v;
      }, {});
    });
    return { baseClasses: S, styleOverrides: k };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function Lo(e, t) {
  const { baseStyle: o = {}, variants: n = {}, compoundVariants: r = [] } = e;
  return {
    baseClassName: ke(o, t),
    variantClassNames: Object.entries(n).reduce((i, [s, l]) => (i[s] = Object.entries(l).reduce(
      (a, [d, u]) => (a[d] = ke(u, t), a),
      {}
    ), i), {}),
    compoundVariants: r.map((i) => [
      i.variants,
      ke(i.style, t)
    ])
  };
}
function Wo(e, t) {
  const { variantClassNames: o = {}, compoundVariants: n = [] } = e, r = [];
  for (const i in t) {
    const s = t[i];
    s != null && r.push(o[i]?.[String(s)]);
  }
  for (const [i, s] of n)
    wt(i, t) && r.push(s);
  return r;
}
function Ua(e) {
  let t, o;
  const n = rt((r) => {
    t = ne(e, r), o = Lo(t, r);
  });
  return function(r = {}) {
    const i = pe();
    return n(i), O(() => {
      if (t == null || o == null)
        return "";
      const s = {
        ...t.defaultVariants,
        ...Je(r)
      }, l = Wo(o, s);
      return Bt(o.baseClassName, l);
    });
  };
}
const gi = {
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
}, fi = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, mi = {
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
}, hi = {
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
}, pi = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, bi = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, yi = {
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
}, xi = {
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
}, Ci = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, Si = {
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
}, vi = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, wi = {
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
}, ki = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, _i = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, Ii = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, Ri = {
  objectFit: !0,
  objectPosition: !0
}, $i = {
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
}, Oi = {
  ...gi,
  ...fi,
  ...mi,
  ...hi,
  ...pi,
  ...bi,
  ...yi,
  ...xi,
  ...Ci,
  ...Si,
  ...vi,
  ...wi,
  ...ki,
  ..._i,
  ...Ii,
  ...Ri,
  ...$i
};
function Ei(e) {
  return Object.keys(e).filter((t) => t in Oi);
}
const Po = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function zi(e) {
  return Object.entries(e).reduce((t, [o, n]) => {
    const r = Po.get(o);
    return r != null && n != null && (t[r] = n), t;
  }, {});
}
const Ti = Ro({});
function pt(e, t, o) {
  let n, r, i = [];
  const s = rt((a) => {
    t != null && (n = ne(t, a), r = Lo(n, a), i = n.variants ? Object.keys(n.variants) : []);
  }), l = (a) => {
    const d = pe();
    s(d);
    const [u, g, c, m, h] = x(
      a,
      ["as", "class", "sx", "__css"],
      [...Po.keys()],
      i,
      Ei(a)
    ), S = O(() => {
      if (r == null)
        return [];
      const y = {
        ...n?.defaultVariants,
        ...Je(c)
      };
      return Wo(r, y);
    }), k = O(() => {
      const y = Object.assign({}, u.__css, Je(m), ...Nn(u.sx).map((v) => ne(v, d)));
      if (!_o(y))
        return Ti({
          css: it(y, d)
        }).className;
    });
    return f(Tn, b({
      get component() {
        return u.as ?? e;
      },
      get class() {
        return Bt(o, r?.baseClassName, ...S(), k(), u.class) || void 0;
      }
    }, () => zi(g), h));
  };
  return o != null && (l.toString = () => `.${o}`), l;
}
function Bi() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(pt, {
    apply(t, o, n) {
      return pt(...n);
    },
    get(t, o) {
      return e.has(o) || e.set(o, pt(o)), e.get(o);
    }
  });
}
const C = Bi(), Ai = /* @__PURE__ */ he('<style id="stitches" $serveronly></style>', 2);
function Za() {
  zn(() => (() => {
    const e = Ai.cloneNode(!0);
    return Rt(() => e.innerHTML = _r()), e;
  })());
}
const Mi = $o({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), Ja = $o({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-context.ts
 */
const Fo = ie();
function Di() {
  const e = se(Fo);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function Qa(e, t) {
  const { colorMode: o } = Di();
  return O(() => o() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const at = "hope-ui-color-mode";
function Li(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get: (t) => {
      if (ue)
        return t;
      let o;
      try {
        o = localStorage.getItem(e);
      } catch {
      }
      return o ?? t;
    },
    set: (t) => {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const Wi = Li(at);
function Ut(e, t) {
  return e.match(new RegExp(`(^| )${t}=([^;]+)`))?.[2];
}
function Ho(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (o) => t ? Ut(t, e) ?? o : ue ? o : Ut(document.cookie, e) ?? o,
    set: (o) => {
      document.cookie = `${e}=${o}; max-age=31536000; path=/`;
    }
  };
}
const el = Ho(at);
function tl(e) {
  return Ho(at, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function jo() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function Pi() {
  const e = document.createElement("style");
  return e.appendChild(
    document.createTextNode(
      "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
    )
  ), document.head.appendChild(e), () => {
    window.getComputedStyle(document.body), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(e);
      });
    });
  };
}
function Fi(e) {
  document.body.classList.add(e ? ge.dark : ge.light), document.body.classList.remove(e ? ge.light : ge.dark);
}
function Hi(e, t = !0) {
  const o = t ? Pi() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, o?.();
}
function Vo(e) {
  return jo().matches ?? e === "dark" ? "dark" : "light";
}
function ji(e) {
  const t = "light", o = e.get(t) ?? t;
  return o === "system" ? ue ? t : Vo() : o;
}
function Vi(e) {
  const t = jo(), o = (n) => {
    e(n.matches ? "dark" : "light");
  };
  return t.addEventListener("change", o), () => {
    t.removeEventListener("change", o);
  };
}
function Ni(e) {
  const t = () => e.initialColorMode ?? "system", o = () => e.storageManager ?? Wi;
  let n;
  const [r, i] = R(ji(o())), s = (u) => {
    i(u), Fi(u === "dark"), Hi(u, e.disableTransitionOnChange);
  }, l = (u) => {
    n && (n(), n = void 0);
    const g = u === "system";
    g && (n = Vi(s)), s(g ? Vo() : u), o().set(u);
  }, a = () => {
    l(r() === "dark" ? "light" : "dark");
  };
  J(() => {
    l(o().get() ?? t());
  }), B(() => {
    n?.();
  });
  const d = {
    colorMode: r,
    setColorMode: l,
    toggleColorMode: a
  };
  return f(Fo.Provider, {
    value: d,
    get children() {
      return e.children;
    }
  });
}
function No(e) {
  return e == null ? {} : {
    overflow: Z(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: Z(e, (t) => t != null ? "ellipsis" : void 0),
    display: Z(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: Z(e, (t) => t ?? void 0),
    WebkitBoxOrient: Z(e, (t) => t != null ? "vertical" : void 0)
  };
}
function F(e, t) {
  return et(e, t);
}
function q(e, t) {
  return `rgb(${e} / ${t})`;
}
const qi = /* @__PURE__ */ he('<script id="hope-ui-color-mode-script"><\/script>', 2), qo = "system", Gi = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function Yi(e) {
  return Gi.has(e) ? e : qo;
}
function ol(e) {
  e = F({
    initialColorMode: qo,
    storageType: "localStorage",
    storageKey: at
  }, e);
  const t = O(() => {
    const o = Yi(e.initialColorMode), n = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${o}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, r = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${o}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? n : r}`.trim();
  });
  return (() => {
    const o = qi.cloneNode(!0);
    return Rt((n) => {
      const r = e.nonce, i = t();
      return r !== n._v$ && wo(o, "nonce", n._v$ = r), i !== n._v$2 && (o.innerHTML = n._v$2 = i), n;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
function Go(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ki(e) {
  const t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Yo(e) {
  for (; e && !Ki(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function kt(e) {
  return (...t) => {
    for (const o of e)
      typeof o == "function" && o(...t);
  };
}
var D = (e) => typeof e == "function" && !e.length ? e() : e;
function Xi(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
function At(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform) : !1;
}
function Ui() {
  return At(/^Mac/i);
}
function Zi() {
  return At(/^iPhone/i);
}
function Ji() {
  return At(/^iPad/i) || Ui() && navigator.maxTouchPoints > 1;
}
function Qi() {
  return Zi() || Ji();
}
function Zt(e) {
  return Go(e) ? e : void 0;
}
function es(e) {
  const [t, o] = R(e.defaultValue?.()), n = O(() => e.value?.() !== void 0), r = O(() => n() ? e.value?.() : t());
  return [r, (i) => {
    In(() => {
      const s = Xi(i, r());
      return Object.is(s, r()) || (n() || o(s), e.onChange?.(s)), s;
    });
  }];
}
function ts(e) {
  const [t, o] = es(e);
  return [() => t() ?? !1, o];
}
function os(e = {}) {
  const [t, o] = ts({
    value: () => D(e.isOpen),
    defaultValue: () => !!D(e.defaultIsOpen),
    onChange: (i) => e.onOpenChange?.(i)
  }), n = () => {
    o(!0);
  }, r = () => {
    o(!1);
  };
  return {
    isOpen: t,
    open: n,
    close: r,
    toggle: () => {
      t() ? r() : n();
    }
  };
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */
const bt = typeof window < "u" && window.visualViewport, ns = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function rs(e) {
  J(
    So(
      () => D(e.isEnabled),
      (t) => {
        !t || (Qi() ? B(ss()) : B(is()));
      }
    )
  );
}
function is() {
  return kt([
    De(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    De(document.documentElement, "overflow", "hidden")
  ]);
}
function ss() {
  let e, t = 0;
  const o = (g) => {
    e = Yo(g.target), !(e === document.documentElement && e === document.body) && (t = g.changedTouches[0].pageY);
  }, n = (g) => {
    if (e === document.documentElement || e === document.body) {
      g.preventDefault();
      return;
    }
    const c = g.changedTouches[0].pageY, m = e.scrollTop, h = e.scrollHeight - e.clientHeight;
    (m <= 0 && c > t || m >= h && c < t) && g.preventDefault(), t = c;
  }, r = (g) => {
    const c = g.target;
    Qt(c) && c !== document.activeElement && (g.preventDefault(), c.style.transform = "translateY(-2000px)", c.focus(), requestAnimationFrame(() => {
      c.style.transform = "";
    }));
  }, i = (g) => {
    const c = g.target;
    Qt(c) && (c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", bt && (bt.height < window.innerHeight ? requestAnimationFrame(() => {
        Jt(c);
      }) : bt.addEventListener("resize", () => Jt(c), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, l = window.pageXOffset, a = window.pageYOffset, d = kt([
    De(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    De(document.documentElement, "overflow", "hidden"),
    De(document.body, "marginTop", `-${a}px`)
  ]);
  window.scrollTo(0, 0);
  const u = kt([
    Te(document, "touchstart", o, {
      passive: !1,
      capture: !0
    }),
    Te(document, "touchmove", n, {
      passive: !1,
      capture: !0
    }),
    Te(document, "touchend", r, {
      passive: !1,
      capture: !0
    }),
    Te(document, "focus", i, !0),
    Te(window, "scroll", s)
  ]);
  return () => {
    d(), u(), window.scrollTo(l, a);
  };
}
function De(e, t, o) {
  const n = e.style[t];
  return e.style[t] = o, () => {
    e.style[t] = n;
  };
}
function Te(e, t, o, n) {
  return e.addEventListener(t, o, n), () => {
    e.removeEventListener(t, o, n);
  };
}
function Jt(e) {
  const t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    const o = Yo(e);
    if (o !== document.documentElement && o !== document.body && o !== e) {
      const n = o.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
      r > n + e.clientHeight && (o.scrollTop += r - n);
    }
    e = o.parentElement;
  }
}
function Qt(e) {
  return e instanceof HTMLInputElement && !ns.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var as = !ue, ls = as && !!On, cs = ls ? (e) => $n() ? B(e) : e : B;
function ds(e, t, o) {
  if (ue)
    return R(e, o);
  if (Rn.context) {
    const [n, r] = R(e, o);
    return me(() => r(() => t())), [n, r];
  }
  return R(t(), o);
}
function us(e, t, o, n) {
  return e.addEventListener(t, o, n), cs(e.removeEventListener.bind(e, t, o, n));
}
function Ko(e, t = !1) {
  if (ue)
    return () => t;
  const o = window.matchMedia(e), [n, r] = ds(t, () => o.matches);
  return us(o, "change", () => r(o.matches)), n;
}
function gs(e) {
  return Ko("(prefers-color-scheme: dark)", e);
}
gs.bind(void 0, !1);
function fs(e, t) {
  return Ko("(prefers-reduced-motion: reduce)", e);
}
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */
function ms(e, t) {
  const [o, n] = R(Zt(t?.()));
  return J(() => {
    n(e()?.tagName.toLowerCase() || Zt(t?.()));
  }), o;
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */
const Be = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(0.9) translateY(10px)" }
}, eo = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 }
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { "transform-origin": "top" }
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { "transform-origin": "top" }
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { "transform-origin": "left" }
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { "transform-origin": "top" }
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { "transform-origin": "bottom" }
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { "transform-origin": "bottom" }
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { "transform-origin": "top" }
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { "transform-origin": "top" }
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { "transform-origin": "bottom" }
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { "transform-origin": "left" }
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { "transform-origin": "right" }
  },
  pop: {
    ...Be,
    common: { "transform-origin": "center center" }
  },
  "pop-bottom-left": {
    ...Be,
    common: { "transform-origin": "bottom left" }
  },
  "pop-bottom-right": {
    ...Be,
    common: { "transform-origin": "bottom right" }
  },
  "pop-top-left": {
    ...Be,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top left" }
  },
  "pop-top-right": {
    ...Be,
    out: { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
    common: { "transform-origin": "top right" }
  }
};
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const to = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  exit: "out",
  afterExit: "out"
};
function hs(e) {
  const t = {
    "transition-duration": `${e.duration}ms`,
    "transition-timing-function": e.easing
  };
  if (Go(e.transition)) {
    if (!(e.transition in eo))
      return {};
    const o = eo[e.transition];
    return {
      "transition-property": oo(o),
      ...t,
      ...o.common,
      ...o[to[e.phase]]
    };
  }
  return {
    "transition-property": oo(e.transition),
    ...t,
    ...e.transition.common,
    ...e.transition[to[e.phase]]
  };
}
function oo(e) {
  return [
    .../* @__PURE__ */ new Set([...Object.keys(e.in), ...Object.keys(e.out)])
  ].join(", ");
}
/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/use-transition.ts
 */
const no = 250, ro = 10, io = "ease";
function lt(e, t) {
  t = et(
    {
      transition: "fade",
      duration: no,
      delay: ro,
      easing: io,
      get exitDuration() {
        return D(t).duration || no;
      },
      get exitDelay() {
        return D(t).delay || ro;
      },
      get exitEasing() {
        return D(t).easing || io;
      }
    },
    t
  );
  const o = fs(), [n, r] = R(o() ? 0 : D(t).duration), [i, s] = R(
    D(e) ? "afterEnter" : "afterExit"
  ), [l, a] = R(D(t).easing);
  let d = -1;
  const u = (m) => {
    const h = m ? D(t).onBeforeEnter : D(t).onBeforeExit, S = m ? D(t).onAfterEnter : D(t).onAfterExit;
    s(m ? "beforeEnter" : "beforeExit"), window.clearTimeout(d);
    const k = r(
      o() ? 0 : m ? D(t).duration : D(t).exitDuration
    );
    if (a(m ? D(t).easing : D(t).exitEasing), k === 0) {
      h?.(), S?.(), s(m ? "afterEnter" : "afterExit");
      return;
    }
    const y = o() ? 0 : m ? D(t).delay : D(t).exitDelay, v = window.setTimeout(() => {
      h?.(), s(m ? "enter" : "exit");
    }, y);
    d = window.setTimeout(() => {
      window.clearTimeout(v), S?.(), s(m ? "afterEnter" : "afterExit");
    }, y + k);
  }, g = O(
    () => hs({
      transition: D(t).transition,
      duration: n(),
      phase: i(),
      easing: l()
    })
  ), c = O(() => i() !== "afterExit");
  return J(
    So(
      () => D(e),
      (m) => u(m),
      { defer: !0 }
    )
  ), B(() => {
    ue || window.clearTimeout(d);
  }), { keepMounted: c, style: g };
}
const so = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function Xo(e) {
  const [t, o] = R(), [n, r] = R(), i = O(() => e.overlayTransitionOptions ? F(so, e.overlayTransitionOptions) : so), s = lt(() => e.isOpen, i);
  let l;
  const a = (c) => {
    l = c.target;
  }, d = (c) => {
    c.key === "Escape" && (c.stopPropagation(), e.closeOnEsc && e.onClose(), e.onEscKeyDown?.());
  }, u = (c) => {
    c.stopPropagation(), l === c.target && (e.closeOnOverlayClick && e.onClose(), e.onOverlayClick?.());
  }, g = () => {
    e.onClose();
  };
  return rs({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: o,
    descriptionId: n,
    setDescriptionId: r,
    overlayTransition: s,
    onContainerMouseDown: a,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: g
  };
}
const ps = K((e) => ({
  root: {
    baseStyle: {
      zIndex: "modal",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      "@supports(height: -webkit-fill-available)": {
        height: "-webkit-fill-available"
      },
      outline: "none",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      isCentered: {
        true: {
          alignItems: "center"
        },
        false: {
          alignItems: "flex-start"
        }
      },
      scrollBehavior: {
        inside: {
          overflow: "hidden"
        },
        outside: {
          overflow: "auto"
        }
      }
    }
  },
  content: {
    baseStyle: {
      zIndex: "modal",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      my: 12,
      mx: 4,
      outline: "none",
      boxShadow: "lg",
      borderRadius: "sm",
      backgroundColor: { light: "common.white", dark: "neutral.700" },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      size: {
        xs: { maxWidth: "xs" },
        sm: { maxWidth: "md" },
        md: { maxWidth: "lg" },
        lg: { maxWidth: "2xl" },
        xl: { maxWidth: "4xl" },
        full: {
          maxWidth: "100vw",
          minHeight: "100vh",
          "@supports(min-height: -webkit-fill-available)": {
            minHeight: "-webkit-fill-available"
          },
          m: 0,
          borderRadius: "none"
        }
      },
      scrollBehavior: {
        inside: {
          maxHeight: "calc(100% - 6rem)",
          overflow: "auto"
        },
        outside: {
          maxHeight: "none",
          overflow: void 0
        }
      }
    }
  },
  overlay: {
    baseStyle: {
      zIndex: "overlay",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: {
        light: q(e.vars.colors.neutral.darkChannel, 0.75),
        dark: q(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));
function Uo(e) {
  return typeof e == "function";
}
function Zo(e) {
  return e == null;
}
function bs(e) {
  return Object.prototype.toString.call(e) === "[object String]";
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
function Ze(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function ao(e) {
  const t = e.target ?? e.currentTarget, o = _t(t);
  return e.relatedTarget ?? o;
}
function _t(e) {
  return Jo(e)?.activeElement;
}
function ys(e) {
  return Jo(e).defaultView || window;
}
function Jo(e) {
  return xs(e) ? e.ownerDocument ?? document : document;
}
function xs(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Cs(e) {
  return e.tagName === "IFRAME";
}
function $(e) {
  return e ? "" : void 0;
}
function Ss(e) {
  return e ? !0 : void 0;
}
function _e(e, t) {
  return (o) => {
    e(o), t?.(o);
  };
}
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */
function ve(e) {
  if (vs())
    e.focus({ preventScroll: !0 });
  else {
    const t = ws(e);
    e.focus(), ks(t);
  }
}
let Ye = null;
function vs() {
  if (Ye == null) {
    Ye = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ye = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ye;
}
function ws(e) {
  let t = e.parentNode;
  const o = [], n = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== n; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && o.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return n instanceof HTMLElement && o.push({
    element: n,
    scrollTop: n.scrollTop,
    scrollLeft: n.scrollLeft
  }), o;
}
function ks(e) {
  for (const { element: t, scrollTop: o, scrollLeft: n } of e)
    t.scrollTop = o, t.scrollLeft = n;
}
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
function _s() {
}
function T(e, t) {
  return e && (Uo(e) ? e(t) : e[0](e[1], t)), t?.defaultPrevented;
}
function Is(e, ...t) {
  return Uo(e) ? e(...t) : e;
}
function Rs(e, t) {
  const o = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    t(r, n, e) && (o[n] = r);
  }), o;
}
function Qo(e) {
  return Rs(e, (t) => t != null);
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
const en = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function It(e, t) {
  const o = Array.from(e.querySelectorAll(en)).filter(lo);
  return t && lo(e) && o.unshift(e), o.forEach((n, r) => {
    if (Cs(n) && n.contentDocument) {
      const i = n.contentDocument.body, s = It(i, !1);
      o.splice(r, 1, ...s);
    }
  }), o;
}
function lo(e) {
  return tn(e) && !$s(e);
}
function tn(e) {
  return e.matches(en) && on(e);
}
function $s(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function on(e, t) {
  return e.nodeName !== "#comment" && Os(e) && Es(e, t) && (!e.parentElement || on(e.parentElement, e));
}
function Os(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return !1;
  const { display: t, visibility: o } = e.style;
  let n = t !== "none" && o !== "hidden" && o !== "collapse";
  if (n) {
    if (!e.ownerDocument.defaultView)
      return n;
    const { getComputedStyle: r } = e.ownerDocument.defaultView, { display: i, visibility: s } = r(e);
    n = i !== "none" && s !== "hidden" && s !== "collapse";
  }
  return n;
}
function Es(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function nn(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = nn(e[t])) && (n && (n += " "), n += o);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function w() {
  for (var e, t, o = 0, n = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = nn(e)) && (n && (n += " "), n += t);
  return n;
}
const zs = /* @__PURE__ */ he('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>', 4, !0), co = {
  viewBox: "0 0 24 24",
  path: () => zs.cloneNode(!0)
}, uo = C("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), Ts = (e) => {
  e = F({
    children: co.path,
    viewBox: co.viewBox,
    color: "currentColor"
  }, e);
  const [t, o] = x(e, ["as", "children", "viewBox"]), n = () => t.as && !bs(t.as);
  return f(P, {
    get when() {
      return n();
    },
    get fallback() {
      return f(uo, b({
        get viewBox() {
          return t.viewBox;
        },
        verticalAlign: "middle"
      }, o, {
        get children() {
          return t.children;
        }
      }));
    },
    get children() {
      return f(uo, b({
        get as() {
          return t.as;
        }
      }, o));
    }
  });
};
function rn(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: o = {}
  } = e;
  return (n) => f(Ts, b({
    viewBox: t
  }, o, n, {
    get children() {
      return e.path;
    }
  }));
}
const Bs = /* @__PURE__ */ he('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>', 8, !0), As = /* @__PURE__ */ he('<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>', 4, !0), Ms = rn({
  path: () => Bs.cloneNode(!0)
}), Ds = rn({
  path: () => As.cloneNode(!0)
}), Ls = K(
  (e) => ({
    root: {
      baseStyle: {
        appearance: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        outline: "none",
        borderWidth: 0,
        borderRadius: "sm",
        backgroundColor: "transparent",
        padding: 0,
        color: "neutral.800",
        userSelect: "none",
        transition: "color 250ms, background-color 250ms",
        _disabled: {
          opacity: "0.5",
          cursor: "not-allowed"
        },
        _hover: {
          backgroundColor: "blackAlpha.100"
        },
        _active: {
          backgroundColor: "blackAlpha.200"
        },
        ...Tt(e.vars),
        _dark: {
          color: "whiteAlpha.900",
          _hover: {
            backgroundColor: "whiteAlpha.100"
          },
          _active: {
            backgroundColor: "whiteAlpha.200"
          }
        }
      },
      variants: {
        size: {
          sm: {
            boxSize: 6,
            fontSize: "16px"
          },
          md: {
            boxSize: 8,
            fontSize: "20px"
          },
          lg: {
            boxSize: 10,
            fontSize: "24px"
          }
        }
      }
    }
  }),
  {
    size: "md"
  }
), Mt = (e) => {
  e = ee("CloseButton", {
    "aria-label": "Close",
    children: () => f(Ds, {})
  }, e);
  const [t, o, n] = x(e, ["class"], [...Q, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = Ls("CloseButton", o);
  return f(C.button, b({
    type: "button",
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, n));
}, sn = ie();
function Pe() {
  const e = se(sn);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const Ws = (e) => {
  const t = Pe();
  e = F({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [o, n] = x(e, ["class", "onClick"]);
  return f(Mt, b({
    get class() {
      return w("hope-Modal-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), T(o.onClick, i), t.onCloseButtonClick();
    }
  }, n));
}, an = {
  position: "absolute",
  overflow: "hidden",
  height: "1px",
  width: "1px",
  margin: "0 -1px -1px 0",
  border: 0,
  padding: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  whiteSpace: "nowrap"
}, Ps = C("span", {
  baseStyle: an
}), nl = C("input", {
  baseStyle: an
}), Dt = (e) => {
  let t, o;
  e = F({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [n, r] = x(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), i = () => {
    if (!o)
      return;
    const d = o.querySelector(n.initialFocusSelector);
    if (d) {
      ve(d);
      return;
    }
    if (n.autoFocus) {
      const u = It(o)[0] ?? o;
      ve(u);
    }
  }, s = () => {
    if (n.restoreFocusSelector) {
      t = document.querySelector(n.restoreFocusSelector);
      return;
    }
    n.restoreFocus && (t = _t());
  }, l = () => {
    if (!o)
      return !1;
    const d = _t(o);
    return !d || Ze(o, d) ? !1 : tn(d);
  }, a = (d) => {
    if (!o)
      return;
    const u = It(o).slice(1, -1);
    if (!u.length) {
      ve(o);
      return;
    }
    const g = u[0], c = u[u.length - 1];
    d.relatedTarget === g ? ve(c) : ve(g);
  };
  return me(() => {
    s(), i();
  }), B(() => {
    !t || l() || ve(t);
  }), f(C.div, b({
    ref(d) {
      const u = _e((g) => o = g, n.ref);
      typeof u == "function" && u(d);
    },
    tabIndex: -1
  }, r, {
    get children() {
      return [f(P, {
        get when() {
          return n.trapFocus;
        },
        get children() {
          return f(go, {
            onFocus: a
          });
        }
      }), Le(() => e.children), f(P, {
        get when() {
          return n.trapFocus;
        },
        get children() {
          return f(go, {
            onFocus: a
          });
        }
      })];
    }
  }));
}, go = (e) => f(Ps, b({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e)), Fs = (e) => {
  const t = Pe(), [o, n] = x(e, ["class", "style", "onClick"]), r = (s) => {
    s.stopPropagation(), T(o.onClick, s);
  }, i = O(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return f(Dt, {
    autoFocus: !0,
    restoreFocus: !0,
    get trapFocus() {
      return t.trapFocus();
    },
    get initialFocusSelector() {
      return t.initialFocusSelector();
    },
    get restoreFocusSelector() {
      return t.restoreFocusSelector();
    },
    get class() {
      return t.baseClasses().root;
    },
    get __css() {
      return t.styleOverrides().root;
    },
    get onMouseDown() {
      return t.onContainerMouseDown;
    },
    get onKeyDown() {
      return t.onContainerKeyDown;
    },
    get onClick() {
      return t.onContainerClick;
    },
    get children() {
      return f(C.section, b({
        get id() {
          return t.contentId();
        },
        role: "dialog",
        "data-ismodal": "true",
        "aria-modal": "true",
        get ["aria-labelledby"]() {
          return t.headingId();
        },
        get ["aria-describedby"]() {
          return t.descriptionId();
        },
        get class() {
          return w(t.baseClasses().content, o.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: r
      }, n));
    }
  });
}, Hs = (e) => {
  const t = Pe(), [o, n] = x(e, ["class"]);
  return J(() => {
    t.setDescriptionId(`${t.contentId()}-description`), B(() => t.setDescriptionId(void 0));
  }), f(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, n));
}, js = (e) => {
  const t = Pe(), [o, n] = x(e, ["class"]);
  return J(() => {
    t.setHeadingId(`${t.contentId()}-heading`), B(() => t.setHeadingId(void 0));
  }), f(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, n));
}, Vs = (e) => {
  const t = Pe(), [o, n] = x(e, ["class", "style", "children"]), r = O(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return f(C.div, b({
    role: "presentation",
    get class() {
      return w(t.baseClasses().overlay, o.class);
    },
    get style() {
      return r();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, n));
}, Fe = (e) => {
  e = ee("Modal", {
    id: `hope-modal-${tt()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = x(e, [...Q, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: o,
    styleOverrides: n
  } = ps("Modal", t), {
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    overlayTransition: a,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  } = Xo(e), m = lt(() => e.isOpen, () => F({
    transition: "pop",
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), h = {
    baseClasses: o,
    styleOverrides: n,
    isOpen: () => e.isOpen,
    contentTransition: m,
    overlayTransition: a,
    contentId: () => e.id,
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  };
  return f(P, {
    get when() {
      return Le(() => !!a.keepMounted())() && m.keepMounted();
    },
    get children() {
      return f(ot, {
        get children() {
          return f(sn.Provider, {
            value: h,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
Fe.Overlay = Vs;
Fe.Content = Fs;
Fe.CloseButton = Ws;
Fe.Heading = js;
Fe.Description = Hs;
/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/aria-modal-polyfill/src/index.ts
 *
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-focus-trap/create-aria-hider.ts
 */
const Ns = typeof document < "u" ? document : void 0, qs = "body > :not(script, style)", yt = '[aria-modal="true"], [data-ismodal="true"]';
function fo(e, t) {
  const o = Array.from(e.querySelectorAll(qs)).filter((n) => !n.contains(t)).map((n) => {
    const r = n.getAttribute("aria-hidden") || "";
    return n.setAttribute("aria-hidden", "true"), { element: n, previousAriaHidden: r };
  });
  return () => {
    o.forEach(({ element: n, previousAriaHidden: r }) => {
      r ? n.setAttribute("aria-hidden", r) : n.removeAttribute("aria-hidden");
    });
  };
}
function Gs(e = "body", { document: t = Ns } = {}) {
  const o = t?.querySelector(e);
  if (t == null || o == null)
    return _s;
  const n = { childList: !0 };
  let r = [], i;
  const s = new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList") {
        if (a.addedNodes.length > 0) {
          const d = Array.from(a.addedNodes).find(
            (u) => u.querySelector?.(yt)
          );
          if (d) {
            r.push(d);
            const u = d.querySelector(yt);
            i?.(), i = fo(t, u);
          }
        } else if (a.removedNodes.length > 0) {
          const d = Array.from(a.removedNodes), u = r.findIndex(
            (g) => d.includes(g)
          );
          if (u >= 0)
            if (i?.(), r = r.filter((g, c) => c !== u), r.length > 0) {
              const g = r[r.length - 1].querySelector(yt);
              i = fo(t, g);
            } else
              i = void 0;
        }
      }
  });
  return s.observe(o, n), () => {
    i?.(), s.disconnect();
  };
}
function rl(e) {
  Gs(), e = F({
    withCssReset: !0
  }, e);
  const [t, o] = x(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return f(Ni, {
    get initialColorMode() {
      return t.initialColorMode;
    },
    get storageManager() {
      return t.storageManager;
    },
    get disableTransitionOnChange() {
      return t.disableTransitionOnChange;
    },
    get children() {
      return f(ui, o);
    }
  });
}
const Ys = K(({ vars: e }) => ({
  root: {
    baseStyle: {
      position: "relative",
      outline: "none",
      backgroundColor: "transparent",
      color: "inherit",
      textDecoration: "inherit",
      cursor: "pointer",
      transition: "text-decoration 250ms",
      "&:hover": {
        textDecoration: "underline"
      },
      ...Tt(e)
    }
  }
})), il = (e) => {
  e = ee("Anchor", {}, e);
  const [t, o, n] = x(e, ["class", "isExternal"], Q), {
    baseClasses: r,
    styleOverrides: i
  } = Ys("Anchor", o);
  return f(C.a, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    },
    get target() {
      return t.isExternal ? "_blank" : void 0;
    },
    get rel() {
      return t.isExternal ? "noopener noreferrer" : void 0;
    }
  }, n));
}, Ks = C("div", {
  baseStyle: {
    position: "relative",
    maxWidth: "100%",
    "&::before": {
      content: '""',
      height: 0,
      display: "block"
    },
    "& > *:not(style)": {
      overflow: "hidden",
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSize: "100%"
    },
    "& > img, & > video": {
      objectFit: "cover"
    }
  }
}, "hope-AspectRatio-root"), sl = (e) => {
  e = F({
    ratio: 4 / 3
  }, e);
  const [t, o] = x(e, ["ratio"]);
  return f(Ks, b({
    get _before() {
      return {
        pb: Z(t.ratio, (n) => `${1 / n * 100}%`)
      };
    }
  }, o));
};
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */
const al = C("div"), ct = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function Xs(e) {
  const t = [];
  for (const o of ct) {
    const n = o === "neutral", r = o === "warning";
    t.push({
      variants: {
        variant: "solid",
        colorScheme: o
      },
      style: {
        color: r ? e.colors[o][900] : "common.white",
        backgroundColor: e.colors[o][n ? "800" : r ? "300" : "500"],
        borderColor: e.colors[o][n ? "800" : r ? "300" : "500"],
        _hover: {
          color: r ? e.colors[o][900] : "common.white",
          backgroundColor: e.colors[o][n ? "700" : r ? "400" : "600"],
          borderColor: e.colors[o][n ? "700" : r ? "400" : "600"]
        },
        _active: {
          color: r ? e.colors[o][900] : "common.white",
          backgroundColor: e.colors[o][n ? "600" : r ? "500" : "700"],
          borderColor: e.colors[o][n ? "600" : r ? "500" : "700"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.100",
          borderColor: "neutral.100"
        },
        _dark: {
          color: r ? e.colors[o][900] : "whiteAlpha.900",
          backgroundColor: e.colors[o][r ? "500" : "700"],
          borderColor: e.colors[o][r ? "500" : "700"],
          _hover: {
            color: r ? e.colors[o][900] : "whiteAlpha.900",
            backgroundColor: e.colors[o][r ? "400" : "600"],
            borderColor: e.colors[o][r ? "400" : "600"]
          },
          _active: {
            color: r ? e.colors[o][900] : "whiteAlpha.900",
            backgroundColor: e.colors[o][r ? "300" : "500"],
            borderColor: e.colors[o][r ? "300" : "500"]
          },
          _disabled: {
            color: "whiteAlpha.300",
            backgroundColor: "whiteAlpha.100",
            borderColor: "transparent"
          }
        }
      }
    });
  }
  return t;
}
function Us(e) {
  const t = [];
  for (const o of ct) {
    const n = o === "neutral", r = o === "warning";
    t.push({
      variants: {
        variant: "soft",
        colorScheme: o
      },
      style: {
        color: e.colors[o][r ? "900" : "700"],
        backgroundColor: e.colors[o][n ? "200" : r ? "100" : "50"],
        borderColor: e.colors[o][n ? "200" : r ? "100" : "50"],
        _hover: {
          color: e.colors[o][r ? "900" : "800"],
          backgroundColor: e.colors[o][n ? "300" : r ? "200" : "100"],
          borderColor: e.colors[o][n ? "300" : r ? "200" : "100"]
        },
        _active: {
          color: e.colors[o][r ? "900" : "800"],
          backgroundColor: e.colors[o][n ? "400" : r ? "300" : "200"],
          borderColor: e.colors[o][n ? "400" : r ? "300" : "200"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.50",
          borderColor: "neutral.50"
        },
        _dark: {
          color: e.colors[o][200],
          backgroundColor: q(e.colors[o].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[o][200],
            backgroundColor: q(e.colors[o].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: q(e.colors[o].mainChannel, 0.4),
            borderColor: "transparent"
          },
          _disabled: {
            color: "whiteAlpha.200",
            backgroundColor: "whiteAlpha.50",
            borderColor: "transparent"
          }
        }
      }
    });
  }
  return t;
}
function Zs(e) {
  const t = [];
  for (const o of ct) {
    const n = o === "neutral", r = o === "warning";
    t.push({
      variants: {
        variant: "outlined",
        colorScheme: o
      },
      style: {
        color: e.colors[o][r ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: e.colors[o][n || r ? "400" : "300"],
        _hover: {
          color: e.colors[o][r ? "800" : "700"],
          backgroundColor: e.colors[o][n || r ? "100" : "50"],
          borderColor: e.colors[o][n || r ? "500" : "400"]
        },
        _active: {
          color: e.colors[o][r ? "800" : "700"],
          backgroundColor: e.colors[o][n || r ? "200" : "100"],
          borderColor: e.colors[o][n || r ? "500" : "400"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "neutral.100"
        },
        _dark: {
          color: e.colors[o][200],
          backgroundColor: "transparent",
          borderColor: e.colors[o][800],
          _hover: {
            color: e.colors[o][200],
            backgroundColor: q(e.colors[o].mainChannel, 0.1),
            borderColor: e.colors[o][700]
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: q(e.colors[o].mainChannel, 0.2),
            borderColor: e.colors[o][700]
          },
          _disabled: {
            color: "whiteAlpha.200",
            backgroundColor: "transparent",
            borderColor: "whiteAlpha.50"
          }
        }
      }
    });
  }
  return t;
}
function Js(e) {
  const t = [];
  for (const o of ct) {
    const n = o === "neutral", r = o === "warning";
    t.push({
      variants: {
        variant: "plain",
        colorScheme: o
      },
      style: {
        color: e.colors[o][r ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: "transparent",
        _hover: {
          color: e.colors[o][r ? "800" : "700"],
          backgroundColor: e.colors[o][n || r ? "100" : "50"],
          borderColor: e.colors[o][n || r ? "100" : "50"]
        },
        _active: {
          color: e.colors[o][r ? "800" : "700"],
          backgroundColor: e.colors[o][n || r ? "200" : "100"],
          borderColor: e.colors[o][n || r ? "200" : "100"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "transparent"
        },
        _dark: {
          color: e.colors[o][200],
          backgroundColor: "transparent",
          borderColor: "transparent",
          _hover: {
            color: e.colors[o][200],
            backgroundColor: q(e.colors[o].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: q(e.colors[o].mainChannel, 0.2),
            borderColor: "transparent"
          },
          _disabled: {
            color: "whiteAlpha.200",
            backgroundColor: "transparent",
            borderColor: "transparent"
          }
        }
      }
    });
  }
  return t;
}
const Me = /* @__PURE__ */ new Map([
  ["xs", "7"],
  ["sm", "8"],
  ["md", "10"],
  ["lg", "12"]
]);
function Qs() {
  const e = [];
  for (const [t, o] of Me)
    e.push({
      variants: {
        isIconButton: !0,
        size: t
      },
      style: {
        width: o,
        p: 0
      }
    });
  return e;
}
const ea = K(
  ({ vars: e }) => ({
    root: {
      baseStyle: {
        appearance: "none",
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: "auto",
        outline: "none",
        border: "1px solid transparent",
        borderRadius: "md",
        padding: 0,
        fontFamily: "inherit",
        fontSize: "100%",
        fontWeight: "medium",
        lineHeight: "none",
        textDecoration: "none",
        userSelect: "none",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        transitionProperty: "color, background-color, border-color",
        transitionDuration: "250ms",
        _disabled: {
          cursor: "not-allowed"
        },
        _loading: {
          opacity: 0.8
        },
        ...Tt(e)
      },
      variants: {
        variant: {
          default: {
            color: "neutral.800",
            backgroundColor: "common.white",
            borderColor: "neutral.300",
            _hover: {
              color: "neutral.800",
              backgroundColor: "neutral.100",
              borderColor: "neutral.300"
            },
            _active: {
              color: "neutral.800",
              backgroundColor: "neutral.200",
              borderColor: "neutral.400"
            },
            _disabled: {
              color: "neutral.200",
              backgroundColor: "transparent",
              borderColor: "neutral.100"
            },
            _dark: {
              color: "whiteAlpha.900",
              backgroundColor: "whiteAlpha.50",
              borderColor: "whiteAlpha.200",
              _hover: {
                color: "whiteAlpha.900",
                backgroundColor: "whiteAlpha.100",
                borderColor: "whiteAlpha.200"
              },
              _active: {
                color: "whiteAlpha.900",
                backgroundColor: "whiteAlpha.200",
                borderColor: "whiteAlpha.300"
              },
              _disabled: {
                color: "whiteAlpha.200",
                backgroundColor: "transparent",
                borderColor: "whiteAlpha.50"
              }
            }
          }
        },
        size: {
          xs: {
            height: Me.get("xs"),
            px: 3,
            fontSize: "xs"
          },
          sm: {
            height: Me.get("sm"),
            px: 4,
            fontSize: "sm"
          },
          md: {
            height: Me.get("md"),
            px: 5,
            fontSize: "base"
          },
          lg: {
            height: Me.get("lg"),
            px: 6,
            fontSize: "lg"
          }
        },
        isFullWidth: {
          true: {
            display: "flex",
            width: "100%"
          }
        }
      },
      compoundVariants: [
        ...Xs(e),
        ...Us(e),
        ...Zs(e),
        ...Js(e),
        ...Qs()
      ]
    },
    icon: {
      baseStyle: {
        display: "inline-flex",
        alignSelf: "center",
        flexShrink: 0
      }
    },
    leftIcon: {},
    rightIcon: {},
    loaderWrapper: {
      baseStyle: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        fontSize: "1em",
        lineHeight: "normal"
      }
    },
    loaderIcon: {
      baseStyle: {
        fontSize: "1.3em",
        animation: `1s linear infinite ${Mi}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), ln = ie();
function Lt() {
  const e = se(ln);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const ta = C("div", {
  baseStyle: {
    display: "inline-flex",
    "& > *:focus": {
      zIndex: 1
    }
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
        "& > *:first-of-type:not(:last-of-type)": {
          borderRightRadius: 0
        },
        "& > *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0,
          marginLeft: "-1px"
        },
        "& > *:not(:first-of-type):last-of-type": {
          borderLeftRadius: 0,
          marginLeft: "-1px"
        }
      },
      vertical: {
        flexDirection: "column",
        "& > *:first-of-type:not(:last-of-type)": {
          borderBottomRadius: 0
        },
        "& > *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0,
          marginTop: "-1px"
        },
        "& > *:not(:first-of-type):last-of-type": {
          borderTopRadius: 0,
          marginTop: "-1px"
        }
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}, "hope-ButtonGroup-root"), cn = ie();
function oa() {
  return se(cn);
}
const ll = (e) => {
  e = F({}, e);
  const [t, o, n] = x(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return f(cn.Provider, {
    value: o,
    get children() {
      return f(ta, b({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, n));
    }
  });
}, mo = (e) => {
  const t = Lt(), [o, n] = x(e, ["class", "__css"]);
  return f(C.span, b({
    "aria-hidden": !0,
    get class() {
      return w(t.baseClasses().icon, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().icon,
        ...o.__css
      };
    }
  }, n));
}, ho = (e) => {
  const t = Lt(), [o, n] = x(e, ["class", "children", "hasLoadingText"]);
  return f(C.div, b({
    get class() {
      return w(t.baseClasses().loaderWrapper, o.class);
    },
    get position() {
      return o.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return t.styleOverrides().loaderWrapper;
    }
  }, n, {
    get children() {
      return f(P, {
        get when() {
          return o.children;
        },
        get fallback() {
          return f(Ms, {
            get class() {
              return t.baseClasses().loaderIcon;
            },
            get __css() {
              return t.styleOverrides().loaderIcon;
            }
          });
        },
        get children() {
          return o.children;
        }
      });
    }
  }));
};
/*!
 * Original code by Ariakit
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/dom.ts
 */
const na = ["button", "color", "file", "image", "reset", "submit"];
function po(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? na.indexOf(e.type) !== -1 : !1;
}
const ra = /* @__PURE__ */ he("<span></span>", 2), ia = (e) => {
  let t;
  const o = oa(), n = F({
    get variant() {
      return o?.variant;
    },
    get colorScheme() {
      return o?.colorScheme;
    },
    get size() {
      return o?.size;
    },
    get isDisabled() {
      return o?.isDisabled;
    }
  }, e);
  e = ee("Button", {
    loaderPlacement: "start"
  }, n);
  const [r, i, s, l] = x(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...Q, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), a = ms(() => t, () => e.as || "button"), [d, u] = R(a() != null && po({
    tagName: a(),
    type: r.type
  })), g = O(() => r.type != null ? r.type : d() ? "button" : void 0), {
    baseClasses: c,
    styleOverrides: m
  } = ea("Button", s);
  return me(() => {
    t != null && u(po(t));
  }), f(ln.Provider, {
    value: {
      baseClasses: c,
      styleOverrides: m
    },
    get children() {
      return f(C.button, b({
        get as() {
          return r.as;
        },
        ref(h) {
          const S = _e((k) => t = k, r.ref);
          typeof S == "function" && S(h);
        },
        get role() {
          return !d() && a() !== "a" ? "button" : void 0;
        },
        get type() {
          return g();
        },
        get tabIndex() {
          return d() ? void 0 : 0;
        },
        get disabled() {
          return r.isDisabled;
        },
        get ["data-loading"]() {
          return r.isLoading || void 0;
        },
        get class() {
          return w(c().root, r.class);
        },
        get __css() {
          return m().root;
        }
      }, l, {
        get children() {
          return [f(P, {
            get when() {
              return r.isLoading && r.loaderPlacement === "start";
            },
            get children() {
              return f(ho, {
                get hasLoadingText() {
                  return !!r.loadingText;
                },
                get children() {
                  return r.loader;
                }
              });
            }
          }), f(P, {
            get when() {
              return r.isLoading;
            },
            get fallback() {
              return f(bo, i);
            },
            get children() {
              return f(P, {
                get when() {
                  return r.loadingText;
                },
                get fallback() {
                  return (() => {
                    const h = ra.cloneNode(!0);
                    return h.style.setProperty("opacity", "0"), Bn(h, f(bo, i)), h;
                  })();
                },
                get children() {
                  return r.loadingText;
                }
              });
            }
          }), f(P, {
            get when() {
              return r.isLoading && r.loaderPlacement === "end";
            },
            get children() {
              return f(ho, {
                get hasLoadingText() {
                  return !!r.loadingText;
                },
                get children() {
                  return r.loader;
                }
              });
            }
          })];
        }
      }));
    }
  });
};
function bo(e) {
  const t = Lt();
  return [f(P, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return f(mo, {
        get class() {
          return t.baseClasses().leftIcon;
        },
        get __css() {
          return t.styleOverrides().leftIcon;
        },
        get children() {
          return e.leftIcon;
        }
      });
    }
  }), Le(() => e.children), f(P, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return f(mo, {
        get class() {
          return t.baseClasses().rightIcon;
        },
        get __css() {
          return t.styleOverrides().rightIcon;
        },
        get children() {
          return e.rightIcon;
        }
      });
    }
  })];
}
const cl = (e) => f(ia, b({
  isIconButton: !0
}, e));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const dl = C("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), sa = C("div", ({
  vars: e
}) => ({
  baseStyle: {
    width: "100%",
    maxWidth: {
      sm: e.breakpoints.sm,
      md: e.breakpoints.md,
      lg: e.breakpoints.lg,
      xl: e.breakpoints.xl,
      "2xl": e.breakpoints["2xl"]
    }
  },
  variants: {
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }
  },
  defaultVariants: {
    centerContent: !1
  }
}), "hope-Container-root"), ul = (e) => {
  e = F({
    isCentered: !0
  }, e);
  const [t, o] = x(e, ["isCentered"]);
  return f(sa, b({
    get mx() {
      return Z(t.isCentered, (n) => n ? "auto" : void 0);
    }
  }, o));
}, aa = K(
  {
    root: {
      baseStyle: {
        color: { light: "neutral.300", dark: "neutral.700" }
      },
      variants: {
        orientation: {
          horizontal: {
            width: "100%",
            margin: 0,
            border: 0,
            borderTopColor: "currentColor"
          },
          vertical: {
            alignSelf: "stretch",
            height: "inherit",
            border: 0,
            borderLeftColor: "currentColor"
          }
        },
        withLabel: {
          true: {
            display: "flex",
            alignItems: "center",
            gap: 3,
            border: "0 !important",
            _before: {
              content: '""',
              flex: 1,
              height: "1px",
              border: 0,
              borderColor: "currentColor"
            },
            _after: {
              content: '""',
              flex: 1,
              border: 0,
              borderColor: "currentColor"
            }
          }
        },
        labelPlacement: {
          start: {
            _before: {
              display: "none"
            }
          },
          end: {
            _after: {
              display: "none"
            }
          }
        }
      },
      compoundVariants: [
        {
          variants: {
            orientation: "vertical",
            withLabel: !0
          },
          style: {
            flexDirection: "column"
          }
        }
      ]
    },
    label: {
      baseStyle: {
        color: "common.foreground"
      }
    }
  },
  {
    orientation: "horizontal",
    labelPlacement: "start",
    withLabel: !1
  }
), gl = (e) => {
  e = ee("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, o, n] = x(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), r = En(() => e.children), i = () => !!r(), s = () => o.orientation === "vertical", l = O(() => {
    const u = s() ? "borderLeftStyle" : "borderTopStyle", g = s() ? "borderLeftWidth" : "borderTopWidth";
    return i() ? {
      _before: {
        [u]: t.variant,
        [g]: t.thickness
      },
      _after: {
        [u]: t.variant,
        [g]: t.thickness
      }
    } : {
      [u]: t.variant,
      [g]: t.thickness
    };
  }), {
    baseClasses: a,
    styleOverrides: d
  } = aa("Divider", {
    get orientation() {
      return o.orientation;
    },
    get labelPlacement() {
      return o.labelPlacement;
    },
    get withLabel() {
      return i();
    },
    get styleConfigOverride() {
      return o.styleConfigOverride;
    },
    get unstyled() {
      return o.unstyled;
    }
  });
  return f(C.hr, b({
    get as() {
      return i() ? "div" : "hr";
    },
    get role() {
      return i() ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return s() ? "vertical" : "horizontal";
    },
    get class() {
      return w(a().root, t.class);
    },
    get __css() {
      return {
        ...d().root,
        ...l()
      };
    }
  }, n, {
    get children() {
      return f(P, {
        get when() {
          return i();
        },
        get children() {
          return f(C.span, b({
            get class() {
              return a().label;
            },
            get __css() {
              return d().label;
            }
          }, () => t.labelProps, {
            get children() {
              return r();
            }
          }));
        }
      });
    }
  }));
}, la = K((e) => ({
  root: {
    baseStyle: {
      zIndex: "modal",
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      outline: "none",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      placement: {
        top: {
          alignItems: "flex-start",
          justifyContent: "stretch"
        },
        right: {
          alignItems: "stretch",
          justifyContent: "flex-end"
        },
        bottom: {
          alignItems: "flex-end",
          justifyContent: "stretch"
        },
        left: {
          alignItems: "stretch",
          justifyContent: "flex-start"
        }
      }
    }
  },
  content: {
    baseStyle: {
      zIndex: "drawer",
      position: "relative",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      maxHeight: "100vh",
      width: "100%",
      outline: "none",
      boxShadow: "lg",
      backgroundColor: { light: "common.white", dark: "neutral.700" },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      size: {
        xs: { maxWidth: "xs" },
        sm: { maxWidth: "md" },
        md: { maxWidth: "lg" },
        lg: { maxWidth: "2xl" },
        xl: { maxWidth: "4xl" },
        full: {
          maxWidth: "100vw",
          minHeight: "100vh",
          "@supports(min-height: -webkit-fill-available)": {
            minHeight: "-webkit-fill-available"
          }
        }
      }
    },
    compoundVariants: [
      {
        variants: { placement: "top", size: "xs" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "sm" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "md" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "lg" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "top", size: "xl" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "xs" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "sm" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "md" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "lg" },
        style: { maxWidth: "100vw" }
      },
      {
        variants: { placement: "bottom", size: "xl" },
        style: { maxWidth: "100vw" }
      }
    ]
  },
  overlay: {
    baseStyle: {
      zIndex: "overlay",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: {
        light: q(e.vars.colors.neutral.darkChannel, 0.75),
        dark: q(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), dn = ie();
function He() {
  const e = se(dn);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const ca = (e) => {
  const t = He();
  e = F({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [o, n] = x(e, ["class", "onClick"]);
  return f(Mt, b({
    get class() {
      return w("hope-Drawer-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), T(o.onClick, i), t.onCloseButtonClick();
    }
  }, n));
}, da = (e) => {
  const t = He(), [o, n] = x(e, ["class", "style", "onClick"]), r = (s) => {
    s.stopPropagation(), T(o.onClick, s);
  }, i = O(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return f(Dt, {
    autoFocus: !0,
    restoreFocus: !0,
    get trapFocus() {
      return t.trapFocus();
    },
    get initialFocusSelector() {
      return t.initialFocusSelector();
    },
    get restoreFocusSelector() {
      return t.restoreFocusSelector();
    },
    get class() {
      return t.baseClasses().root;
    },
    get __css() {
      return t.styleOverrides().root;
    },
    get onMouseDown() {
      return t.onContainerMouseDown;
    },
    get onKeyDown() {
      return t.onContainerKeyDown;
    },
    get onClick() {
      return t.onContainerClick;
    },
    get children() {
      return f(C.section, b({
        get id() {
          return t.contentId();
        },
        role: "dialog",
        "data-ismodal": "true",
        "aria-modal": "true",
        get ["aria-labelledby"]() {
          return t.headingId();
        },
        get ["aria-describedby"]() {
          return t.descriptionId();
        },
        get class() {
          return w(t.baseClasses().content, o.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: r
      }, n));
    }
  });
}, ua = (e) => {
  const t = He(), [o, n] = x(e, ["class"]);
  return J(() => {
    t.setDescriptionId(`${t.contentId()}-description`), B(() => t.setDescriptionId(void 0));
  }), f(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, n));
}, ga = (e) => {
  const t = He(), [o, n] = x(e, ["class"]);
  return J(() => {
    t.setHeadingId(`${t.contentId()}-heading`), B(() => t.setHeadingId(void 0));
  }), f(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, n));
}, fa = (e) => {
  const t = He(), [o, n] = x(e, ["class", "style", "children"]), r = O(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return f(C.div, b({
    role: "presentation",
    get class() {
      return w(t.baseClasses().overlay, o.class);
    },
    get style() {
      return r();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, n));
}, ma = {
  top: {
    in: { transform: "translateY(0)" },
    out: { transform: "translateY(-100%)" }
  },
  right: {
    in: { transform: "translateX(0)" },
    out: { transform: "translateX(100%)" }
  },
  bottom: {
    in: { transform: "translateY(0)" },
    out: { transform: "translateY(100%)" }
  },
  left: {
    in: { transform: "translateX(0)" },
    out: { transform: "translateX(-100%)" }
  }
}, je = (e) => {
  e = ee("Drawer", {
    id: `hope-drawer-${tt()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = x(e, [...Q, "size", "placement"]), {
    baseClasses: o,
    styleOverrides: n
  } = la("Drawer", t), {
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    overlayTransition: a,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  } = Xo(e), m = lt(() => e.isOpen, () => F({
    transition: ma[e.placement],
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), h = {
    baseClasses: o,
    styleOverrides: n,
    isOpen: () => e.isOpen,
    contentTransition: m,
    overlayTransition: a,
    contentId: () => e.id,
    headingId: r,
    setHeadingId: i,
    descriptionId: s,
    setDescriptionId: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: g,
    onCloseButtonClick: c
  };
  return f(P, {
    get when() {
      return Le(() => !!a.keepMounted())() && m.keepMounted();
    },
    get children() {
      return f(ot, {
        get children() {
          return f(dn.Provider, {
            value: h,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
je.Overlay = fa;
je.Content = da;
je.CloseButton = ca;
je.Heading = ga;
je.Description = ua;
const fl = (e) => {
  const [t, o] = x(e, ["class", "direction", "wrap", "align", "justify"]);
  return f(C.div, b({
    get class() {
      return w("hope-Flex-root", t.class);
    },
    get __css() {
      return {
        display: "flex",
        flexDirection: t.direction,
        flexWrap: t.wrap,
        alignItems: t.align,
        justifyContent: t.justify
      };
    }
  }, o));
}, yo = {
  display: "inline-block",
  fontSize: "xs",
  fontWeight: "normal",
  lineHeight: 4,
  textAlign: "start",
  wordBreak: "break-word",
  "&[data-disabled]": {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, ha = K(
  {
    root: {
      baseStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }
    },
    label: {
      baseStyle: {
        display: "inline-block",
        color: "common.foreground",
        WebkitTapHighlightColor: "transparent",
        fontSize: "sm",
        fontWeight: "medium",
        lineHeight: 5,
        textAlign: "start",
        wordBreak: "break-word",
        "&[data-disabled]": {
          opacity: 0.4,
          cursor: "not-allowed"
        }
      },
      variants: {
        withRequiredIndicator: {
          true: {
            _after: {
              content: '"*"',
              marginLeft: "0.5",
              color: "danger.600",
              fontSize: "base",
              fontWeight: "medium",
              lineHeight: 5
            },
            _dark: {
              _after: {
                color: "danger.400"
              }
            }
          }
        }
      }
    },
    description: {
      baseStyle: {
        ...yo,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...yo,
        color: {
          light: "danger.600",
          dark: "danger.400"
        }
      }
    }
  },
  {
    withRequiredIndicator: !0
  }
), un = ie();
function Wt() {
  return se(un);
}
function Pt() {
  const e = Wt();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const pa = (e) => {
  const t = Pt(), [o, n] = x(e, ["id", "class", "__css"]), r = () => o.id ?? t.descriptionId();
  return me(() => t.setHasDescription(!0)), B(() => t.setHasDescription(!1)), f(C.div, b({
    get id() {
      return r();
    },
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().description, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().description,
        ...o.__css
      };
    }
  }, n));
}, ba = (e) => {
  const t = Pt(), [o, n] = x(e, ["id", "class", "__css"]), r = () => o.id ?? t.errorId();
  return me(() => t.setHasError(!0)), B(() => t.setHasError(!1)), f(C.div, b({
    "aria-live": "polite",
    get id() {
      return r();
    },
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().error, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().error,
        ...o.__css
      };
    }
  }, n));
}, ya = (e) => {
  const t = Pt(), [o, n] = x(e, ["id", "for", "class", "__css"]), r = () => o.id ?? t.labelId(), i = () => o.for ?? t.id();
  return f(C.label, b({
    get id() {
      return r();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().label, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().label,
        ...o.__css
      };
    }
  }, n));
}, Ft = (e) => {
  e = ee("FormControl", {
    id: `hope-form-control-${tt()}`
  }, e);
  const [t, o, n] = x(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...Q, "withRequiredIndicator"]), [r, i] = R(!1), [s, l] = R(!1), {
    baseClasses: a,
    styleOverrides: d
  } = ha("FormControl", o), u = () => `${e.id}-description`, g = () => `${e.id}-error`, c = () => e.isInvalid, h = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: u,
    errorId: g,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: c,
    unstyled: () => o.unstyled,
    baseClasses: a,
    styleOverrides: d,
    hasDescription: r,
    setHasDescription: i,
    hasError: s,
    setHasError: l,
    mergeAriaDescribedBy: (S) => {
      const k = S ? [S] : [];
      return s() && c() && k.push(g()), r() && k.push(u()), k.join(" ") || void 0;
    }
  };
  return f(un.Provider, {
    value: h,
    get children() {
      return f(C.div, b({
        role: "group",
        get ["data-required"]() {
          return $(h.isRequired());
        },
        get ["data-disabled"]() {
          return $(h.isDisabled());
        },
        get ["data-readonly"]() {
          return $(h.isReadOnly());
        },
        get ["data-invalid"]() {
          return $(h.isInvalid());
        },
        get class() {
          return w(a().root, t.class);
        },
        get __css() {
          return d().root;
        }
      }, n));
    }
  });
};
Ft.Label = ya;
Ft.Description = pa;
Ft.Error = ba;
const xa = (e) => {
  const [t, o] = x(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return f(C.div, b({
    get class() {
      return w("hope-GridItem-root", t.class);
    },
    get __css() {
      return Qo({
        gridArea: t.area,
        gridColumn: xo(t.colSpan),
        gridRow: xo(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, o));
};
function xo(e) {
  return Z(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const gn = (e) => {
  const [t, o] = x(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return f(C.div, b({
    get class() {
      return w("hope-Grid-root", t.class);
    },
    get __css() {
      return {
        display: "grid",
        gridAutoFlow: t.autoFlow,
        gridAutoColumns: t.autoColumns,
        gridAutoRows: t.autoRows,
        gridTemplateAreas: t.templateAreas,
        gridTemplateColumns: t.templateColumns,
        gridTemplateRows: t.templateRows
      };
    }
  }, o));
};
gn.Item = xa;
const ml = (e) => {
  const [t, o] = x(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), n = pe(), r = () => t.minChildWidth ? Ca(t.minChildWidth, n.vars) : Sa(t.columns);
  return f(gn, b({
    get templateColumns() {
      return r();
    },
    get gap() {
      return t.spacing;
    },
    get columnGap() {
      return t.spacingX;
    },
    get rowGap() {
      return t.spacingY;
    }
  }, o));
};
function Ca(e, t) {
  return Z(e, (o) => {
    const n = To(o, "sizes", t);
    return Zo(o) ? null : `repeat(auto-fit, minmax(${n}, 1fr))`;
  });
}
function Sa(e) {
  return Z(e, (t) => Zo(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const va = K({
  root: {
    baseStyle: {
      margin: 0,
      fontSize: "inherit",
      fontWeight: "semibold",
      lineHeight: "inherit"
    },
    variants: {
      size: {
        xs: {
          fontSize: "xs",
          lineHeight: 4
        },
        sm: {
          fontSize: "sm",
          lineHeight: 5
        },
        base: {
          fontSize: "base",
          lineHeight: 6
        },
        lg: {
          fontSize: "lg",
          lineHeight: 7
        },
        xl: {
          fontSize: "xl",
          lineHeight: 7
        },
        "2xl": {
          fontSize: "2xl",
          lineHeight: 8
        },
        "3xl": {
          fontSize: "3xl",
          lineHeight: 9
        },
        "4xl": {
          fontSize: "4xl",
          lineHeight: 10
        },
        "5xl": {
          fontSize: "5xl",
          lineHeight: "none"
        },
        "6xl": {
          fontSize: "6xl",
          lineHeight: "none"
        },
        "7xl": {
          fontSize: "7xl",
          lineHeight: "none"
        },
        "8xl": {
          fontSize: "8xl",
          lineHeight: "none"
        },
        "9xl": {
          fontSize: "9xl",
          lineHeight: "none"
        }
      }
    }
  }
}), hl = (e) => {
  e = ee("Heading", {}, e);
  const [t, o, n] = x(e, ["as", "class", "level", "lineClamp"], [...Q, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = va("Heading", o), s = () => t.level ? `h${t.level}` : t.as, l = O(() => ({
    ...i().root,
    ...No(t.lineClamp)
  }));
  return f(C.h2, b({
    get as() {
      return s();
    },
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return l();
    }
  }, n));
};
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
function wa(e) {
  const [t, o] = R("pending"), n = () => e.ignoreFallback ? "loaded" : t();
  let r = null;
  const i = () => {
    r && (r.onload = null, r.onerror = null, r = null);
  }, s = () => {
    if (!e.src)
      return;
    i();
    const l = new Image();
    l.src = e.src, e.crossOrigin && (l.crossOrigin = e.crossOrigin), e.srcSet && (l.srcset = e.srcSet), e.sizes && (l.sizes = e.sizes), e.loading && (l.loading = e.loading), l.onload = (a) => {
      i(), o("loaded"), T(e.onLoad, a);
    }, l.onerror = (a) => {
      i(), o("failed"), T(e.onError, a);
    }, r = l;
  };
  return J(() => {
    o(e.src ? "loading" : "pending");
  }), vo(() => {
    e.ignoreFallback || (t() === "loading" && s(), B(() => {
      i();
    }));
  }), n;
}
const pl = (e) => {
  const [t, o, n] = x(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), r = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = wa(et(e, {
    get ignoreFallback() {
      return r();
    }
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...r() ? o : {},
    ...n
  });
  return f(P, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return f(P, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return f(C.img, b({
            get src() {
              return t.fallbackSrc;
            },
            class: "hope-Image-placeholder"
          }, s));
        },
        get children() {
          return t.fallback;
        }
      });
    },
    get children() {
      return f(C.img, b({
        get src() {
          return t.src;
        },
        get srcSet() {
          return t.srcSet;
        },
        get crossOrigin() {
          return t.crossOrigin;
        },
        get loading() {
          return t.loading;
        },
        get class() {
          return w("hope-Image-root", t.class);
        }
      }, s));
    }
  });
}, bl = (e) => {
  const [t, o] = x(e, ["class"]);
  return f(C.img, b({
    get class() {
      return w("hope-Image-root", t.class);
    }
  }, o));
}, fn = {
  variant: "outlined",
  size: "md"
}, U = {
  sm: {
    minHeight: 8,
    fontSize: "sm",
    lineHeight: 5
  },
  md: {
    minHeight: 10,
    fontSize: "base",
    lineHeight: 6
  },
  lg: {
    minHeight: 12,
    fontSize: "lg",
    lineHeight: 7
  }
}, ka = K(
  ({ vars: e }) => ({
    root: {
      baseStyle: {
        appearance: "none",
        position: "relative",
        width: "100%",
        minWidth: 0,
        outline: "none",
        borderRadius: "sm",
        border: "1px solid transparent",
        backgroundColor: "transparent",
        padding: 0,
        color: "common.foreground",
        fontSize: "base",
        lineHeight: "base",
        transitionProperty: "color, border-color, background-color, box-shadow 250ms",
        transitionDuration: "250ms",
        "&::placeholder": {
          color: "neutral.500",
          opacity: 1
        },
        "&[readonly]": {
          boxShadow: "none !important",
          userSelect: "all",
          cursor: "default"
        },
        "&:disabled": {
          opacity: 0.4,
          cursor: "not-allowed"
        },
        "&:focus": {
          boxShadow: {
            light: `0 0 0 3px ${q(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${q(e.colors.primary.darkChannel, 0.75)}`
          },
          borderColor: {
            light: "primary.400",
            dark: "primary.600"
          }
        },
        "&[aria-invalid=true]": {
          borderColor: {
            light: "danger.400",
            dark: "danger.600"
          }
        },
        "&[aria-invalid=true]:focus": {
          boxShadow: {
            light: `0 0 0 3px ${q(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${q(e.colors.danger.darkChannel, 0.75)}`
          }
        }
      },
      variants: {
        variant: {
          filled: {
            backgroundColor: {
              light: "neutral.100",
              dark: "neutral.800"
            }
          },
          outlined: {
            border: {
              light: `1px solid ${e.colors.neutral[300]}`,
              dark: `1px solid ${e.colors.neutral[700]}`
            },
            backgroundColor: {
              light: "transparent",
              dark: "rgb(255 255 255 / 0.02)"
            }
          },
          plain: {
            backgroundColor: "transparent"
          }
        },
        size: {
          sm: {
            ...U.sm,
            px: 2.5
          },
          md: {
            ...U.md,
            px: 3
          },
          lg: {
            ...U.lg,
            px: 4
          }
        }
      }
    }
  }),
  fn
), mn = ie();
function hn() {
  return se(mn);
}
function pn() {
  const e = hn();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const yl = (e) => {
  const t = Wt(), o = hn();
  e = ee("Input", {}, e);
  const [n, r, i] = x(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...Q, "variant", "size"]), {
    baseClasses: s,
    styleOverrides: l
  } = ka("Input", {
    get variant() {
      return o?.variant() ?? r.variant;
    },
    get size() {
      return o?.size() ?? r.size;
    },
    get styleConfigOverride() {
      return r.styleConfigOverride;
    },
    get unstyled() {
      return o?.unstyled() ?? r.unstyled;
    }
  }), a = () => n.isRequired ?? o?.isRequired() ?? t?.isRequired(), d = () => n.isDisabled ?? o?.isDisabled() ?? t?.isDisabled(), u = () => n.isReadOnly ?? o?.isReadOnly() ?? t?.isReadOnly(), g = () => n.isInvalid ?? o?.isInvalid() ?? t?.isInvalid(), c = () => t?.mergeAriaDescribedBy(n["aria-describedby"]);
  return f(C.input, b({
    type: "text",
    get id() {
      return n.id ?? t?.id();
    },
    get required() {
      return a();
    },
    get disabled() {
      return d();
    },
    get readOnly() {
      return u();
    },
    get ["aria-invalid"]() {
      return Ss(g());
    },
    get ["aria-describedby"]() {
      return c();
    },
    get size() {
      return n.htmlSize;
    },
    get class() {
      return w(o?.baseClasses().input, s().root, n.class);
    },
    get __css() {
      return {
        ...o?.styleOverrides().input,
        ...l().root,
        ...n.__css
      };
    }
  }, i));
};
function xt(e) {
  return [
    {
      variants: {
        size: e.size,
        hasLeftSection: !0
      },
      style: {
        paddingInlineStart: e.paddingWithSection
      }
    },
    {
      variants: {
        size: e.size,
        hasRightSection: !0
      },
      style: {
        paddingInlineEnd: e.paddingWithSection
      }
    }
  ];
}
const _a = K(
  ({ vars: e }) => ({
    root: {
      baseStyle: {
        position: "relative",
        display: "flex",
        width: "100%"
      }
    },
    input: {
      baseStyle: {
        "&:focus": {
          zIndex: 1
        }
      },
      variants: {
        hasLeftAddon: {
          true: {
            borderLeftRadius: 0
          }
        },
        hasRightAddon: {
          true: {
            borderRightRadius: 0
          }
        }
      },
      compoundVariants: [
        ...xt({
          size: "sm",
          paddingWithSection: 8
        }),
        ...xt({
          size: "md",
          paddingWithSection: 10
        }),
        ...xt({
          size: "lg",
          paddingWithSection: 12
        })
      ]
    },
    section: {
      baseStyle: {
        position: "absolute",
        top: "0",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&[data-disabled]": {
          opacity: 0.4,
          cursor: "not-allowed"
        }
      },
      variants: {
        size: {
          sm: {
            ...U.sm,
            height: "100%",
            width: U.sm.minHeight
          },
          md: {
            ...U.md,
            height: "100%",
            width: U.md.minHeight
          },
          lg: {
            ...U.lg,
            height: "100%",
            width: U.lg.minHeight
          }
        }
      }
    },
    leftSection: {
      baseStyle: {
        insetInlineStart: 0
      }
    },
    rightSection: {
      baseStyle: {
        insetInlineEnd: 0
      }
    },
    addon: {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        flex: "0 0 auto",
        width: "auto",
        whiteSpace: "nowrap",
        borderRadius: "sm",
        border: "1px solid transparent",
        backgroundColor: {
          light: "neutral.100",
          dark: "neutral.800"
        },
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        },
        "&[data-disabled]": {
          opacity: 0.4,
          cursor: "not-allowed"
        }
      },
      variants: {
        variant: {
          outlined: {
            border: {
              light: `1px solid ${e.colors.neutral[300]}`,
              dark: `1px solid ${e.colors.neutral[700]}`
            }
          },
          plain: {
            backgroundColor: {
              light: "transparent",
              dark: "transparent"
            }
          }
        },
        size: {
          sm: {
            ...U.sm,
            px: 2.5
          },
          md: {
            ...U.md,
            px: 3
          },
          lg: {
            ...U.lg,
            px: 4
          }
        }
      }
    },
    leftAddon: {
      baseStyle: {
        marginEnd: "-1px"
      },
      variants: {
        variant: {
          filled: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderInlineEndColor: "transparent"
          },
          outlined: {
            borderRightRadius: 0,
            borderInlineEndColor: "transparent"
          }
        }
      }
    },
    rightAddon: {
      baseStyle: {
        marginStart: "-1px"
      },
      variants: {
        variant: {
          filled: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            borderInlineStartColor: "transparent"
          },
          outlined: {
            borderLeftRadius: 0,
            borderInlineStartColor: "transparent"
          }
        }
      }
    }
  }),
  fn
), bn = (e) => {
  const t = pn(), [o, n] = x(e, ["class", "__css", "addonPlacement"]), r = O(() => {
    switch (o.addonPlacement) {
      case "left":
        return {
          className: t.baseClasses().leftAddon,
          styleOverride: t.styleOverrides().leftAddon
        };
      case "right":
        return {
          className: t.baseClasses().rightAddon,
          styleOverride: t.styleOverrides().rightAddon
        };
    }
  });
  return me(() => {
    switch (o.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), B(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), B(() => t.setHasRightAddon(!1));
        break;
    }
  }), f(C.div, b({
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().addon, r().className, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().addon,
        ...r().styleOverride,
        ...o.__css
      };
    }
  }, n));
}, Ia = (e) => f(bn, b({
  addonPlacement: "left"
}, e)), Ra = (e) => f(bn, b({
  addonPlacement: "right"
}, e)), yn = (e) => {
  const t = pn(), [o, n] = x(e, ["class", "__css", "sectionPlacement"]), r = O(() => {
    switch (o.sectionPlacement) {
      case "left":
        return {
          className: t.baseClasses().leftSection,
          styleOverride: t.styleOverrides().leftSection
        };
      case "right":
        return {
          className: t.baseClasses().rightSection,
          styleOverride: t.styleOverrides().rightSection
        };
    }
  });
  return me(() => {
    switch (o.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), B(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), B(() => t.setHasRightSection(!1));
        break;
    }
  }), f(C.div, b({
    get ["data-required"]() {
      return $(t.isRequired());
    },
    get ["data-disabled"]() {
      return $(t.isDisabled());
    },
    get ["data-readonly"]() {
      return $(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return $(t.isInvalid());
    },
    get class() {
      return w(t.baseClasses().section, r().className, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().section,
        ...r().styleOverride,
        ...o.__css
      };
    }
  }, n));
}, $a = (e) => f(yn, b({
  sectionPlacement: "left"
}, e)), Oa = (e) => f(yn, b({
  sectionPlacement: "right"
}, e)), dt = (e) => {
  const t = Wt();
  e = ee("InputGroup", {}, e);
  const [o, n, r] = x(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...Q, "variant", "size"]), [i, s] = R(!1), [l, a] = R(!1), [d, u] = R(!1), [g, c] = R(!1), {
    baseClasses: m,
    styleOverrides: h
  } = _a("InputGroup", {
    get variant() {
      return n.variant;
    },
    get size() {
      return n.size;
    },
    get hasLeftSection() {
      return i();
    },
    get hasRightSection() {
      return l();
    },
    get hasLeftAddon() {
      return d();
    },
    get hasRightAddon() {
      return g();
    },
    get styleConfigOverride() {
      return n.styleConfigOverride;
    },
    get unstyled() {
      return n.unstyled;
    }
  }), S = {
    isRequired: () => e.isRequired ?? t?.isRequired(),
    isDisabled: () => e.isDisabled ?? t?.isDisabled(),
    isReadOnly: () => e.isReadOnly ?? t?.isReadOnly(),
    isInvalid: () => e.isInvalid ?? t?.isInvalid(),
    variant: () => n.variant,
    size: () => n.size,
    unstyled: () => n.unstyled,
    baseClasses: m,
    styleOverrides: h,
    setHasLeftSection: s,
    setHasRightSection: a,
    setHasLeftAddon: u,
    setHasRightAddon: c
  };
  return f(mn.Provider, {
    value: S,
    get children() {
      return f(C.div, b({
        get ["data-required"]() {
          return $(S.isRequired());
        },
        get ["data-disabled"]() {
          return $(S.isDisabled());
        },
        get ["data-readonly"]() {
          return $(S.isReadOnly());
        },
        get ["data-invalid"]() {
          return $(S.isInvalid());
        },
        get class() {
          return w(m().root, o.class);
        },
        get __css() {
          return h().root;
        }
      }, r));
    }
  });
};
dt.LeftAddon = Ia;
dt.RightAddon = Ra;
dt.LeftSection = $a;
dt.RightSection = Oa;
const Ea = K({
  root: {
    baseStyle: {
      borderRadius: "md",
      borderStyle: "solid",
      borderWidth: "1px",
      borderBottomWidth: "3px",
      px: "0.4em",
      color: "common.foreground",
      fontFamily: "mono",
      fontSize: "0.8em",
      fontWeight: "bold",
      lineHeight: "normal",
      whiteSpace: "nowrap",
      borderColor: { light: "neutral.300", dark: "neutral.600" },
      backgroundColor: { light: "neutral.100", dark: "neutral.800" }
    }
  }
}), xl = (e) => {
  const [t, o, n] = x(e, ["class"], Q), {
    baseClasses: r,
    styleOverrides: i
  } = Ea("Kbd", o);
  return f(C.kbd, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, n));
}, za = K((e) => ({
  root: {
    baseStyle: {
      zIndex: "popover",
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      outline: "none",
      boxShadow: "md",
      border: `1px solid ${e.vars.colors.neutral[300]}`,
      borderColor: { dark: "neutral.600" },
      borderRadius: "sm",
      backgroundColor: { light: "common.white", dark: "neutral.700" },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    }
  },
  arrow: {
    baseStyle: {
      position: "absolute",
      boxSize: "1em",
      pointerEvents: "none",
      "& svg": {
        stroke: "neutral.300",
        fill: "common.white"
      },
      _dark: {
        "& svg": {
          stroke: "neutral.600",
          fill: "neutral.700"
        }
      }
    }
  },
  heading: {},
  description: {}
})), xn = ie();
function be() {
  const e = se(xn);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const Ta = (e) => {
  const t = be(), [o, n] = x(e, ["ref"]);
  return f(C.div, b({
    ref(r) {
      const i = _e(t.setAnchorRef, o.ref);
      typeof i == "function" && i(r);
    }
  }, n));
}, Ba = (e) => {
  const t = be();
  e = F({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [o, n] = x(e, ["class", "onClick"]);
  return f(Mt, b({
    get class() {
      return w("hope-Popover-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), T(o.onClick, i), t.onCloseButtonClick();
    }
  }, n));
}, Aa = /* @__PURE__ */ he('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>', 8), Cn = 30, ce = Cn / 2, Ma = {
  top: `rotate(180 ${ce} ${ce})`,
  right: `rotate(-90 ${ce} ${ce})`,
  bottom: `rotate(0 ${ce} ${ce})`,
  left: `rotate(90 ${ce} ${ce})`
}, Da = (e) => {
  const t = be(), [o, n] = x(e, ["ref", "class", "style", "children"]), r = () => t.currentPlacement().split("-")[0], i = La(t.contentRef), s = () => i()?.getPropertyValue("background-color") || "none", l = () => i()?.getPropertyValue(`border-${r()}-color`) || "none", a = () => i()?.getPropertyValue(`border-${r()}-width`) || "0px", d = () => parseInt(a()) * 2 * (Cn / t.arrowSize());
  return f(C.div, b({
    ref(u) {
      const g = _e(t.setArrowRef, o.ref);
      typeof g == "function" && g(u);
    },
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: s(),
        stroke: l(),
        "stroke-width": d(),
        ...o.style
      };
    },
    get class() {
      return w(t.baseClasses().arrow, o.class);
    },
    get __css() {
      return t.styleOverrides().arrow;
    }
  }, n, {
    get children() {
      const u = Aa.cloneNode(!0), g = u.firstChild;
      return g.firstChild.nextSibling, Rt(() => wo(g, "transform", Ma[r()])), u;
    }
  }));
};
function La(e) {
  const [t, o] = R();
  return vo(() => {
    const n = e();
    n && o(ys(n).getComputedStyle(n));
  }), t;
}
const Wa = (e) => {
  const t = be(), [o, n] = x(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), r = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (g) => {
    g.stopPropagation(), T(o.onKeyDown, g), T(t.onContentKeyDown, g);
  }, l = (g) => {
    T(o.onFocusOut, g), T(t.onContentFocusOut, g);
  }, a = (g) => {
    T(o.onMouseEnter, g), i() && t.onContentMouseEnter();
  }, d = (g) => {
    T(o.onMouseLeave, g), i() && T(t.onContentMouseLeave, g);
  }, u = O(() => ({
    ...o.style,
    ...t.popoverTransition.style()
  }));
  return f(P, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return f(ot, {
        get children() {
          return f(Dt, b({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return r();
            },
            ref(g) {
              const c = _e(t.setContentRef, o.ref);
              typeof c == "function" && c(g);
            },
            get id() {
              return t.popoverId();
            },
            get role() {
              return i() ? "tooltip" : "dialog";
            },
            get ["aria-labelledby"]() {
              return t.headingId();
            },
            get ["aria-describedby"]() {
              return t.descriptionId();
            },
            get trapFocus() {
              return t.trapFocus();
            },
            get initialFocusSelector() {
              return t.initialFocusSelector();
            },
            get restoreFocusSelector() {
              return t.restoreFocusSelector();
            },
            get class() {
              return w(t.baseClasses().root, o.class);
            },
            get style() {
              return u();
            },
            get __css() {
              return t.styleOverrides().root;
            },
            onKeyDown: s,
            onFocusOut: l,
            onMouseEnter: a,
            onMouseLeave: d
          }, n, {
            get children() {
              return [f(P, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return f(Da, {});
                }
              }), Le(() => o.children)];
            }
          }));
        }
      });
    }
  });
}, Pa = (e) => {
  const t = be(), [o, n] = x(e, ["class"]);
  return J(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), B(() => t.setDescriptionId(void 0));
  }), f(C.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return w(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, n));
}, Fa = (e) => {
  const t = be(), [o, n] = x(e, ["class"]);
  return J(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), B(() => t.setHeadingId(void 0));
  }), f(C.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return w(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, n));
}, Ha = (e) => {
  const t = be(), [o, n] = x(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), r = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", s = (c) => {
    T(o.onClick, c), r() && (c.stopPropagation(), t.onTriggerClick());
  }, l = (c) => {
    T(o.onKeyDown, c), i() && (c.stopPropagation(), T(t.onTriggerKeyDown, c));
  }, a = (c) => {
    T(o.onFocus, c), i() && t.onTriggerFocus();
  }, d = (c) => {
    T(o.onBlur, c), i() && T(t.onTriggerBlur, c);
  }, u = (c) => {
    T(o.onMouseEnter, c), i() && t.onTriggerMouseEnter();
  }, g = (c) => {
    T(o.onMouseLeave, c), i() && t.onTriggerMouseLeave();
  };
  return f(C.button, b({
    ref(c) {
      const m = _e(t.setTriggerRef, o.ref);
      typeof m == "function" && m(c);
    },
    get id() {
      return `${t.popoverId()}-trigger`;
    },
    type: "button",
    "aria-haspopup": "dialog",
    get ["aria-controls"]() {
      return t.popoverId();
    },
    get ["aria-expanded"]() {
      return t.isOpen();
    },
    onClick: s,
    onKeyDown: l,
    onFocus: a,
    onBlur: d,
    onMouseEnter: u,
    onMouseLeave: g
  }, n));
};
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */
function Co(e) {
  const { x: t = 0, y: o = 0, width: n = 0, height: r = 0 } = e ?? {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, o, n, r);
  const i = {
    x: t,
    y: o,
    width: n,
    height: r,
    top: o,
    right: t + n,
    bottom: o + r,
    left: t
  };
  return { ...i, toJSON: () => i };
}
function ja(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const n = t(e);
      return n ? Co(n) : e ? e.getBoundingClientRect() : Co();
    }
  };
}
const Ie = (e) => {
  e = ee("Popover", {
    getAnchorRect: (z) => z?.getBoundingClientRect(),
    id: `hope-popover-${tt()}`,
    triggerMode: "click",
    withArrow: !0,
    arrowSize: 24,
    placement: "bottom",
    offset: 12,
    arrowPadding: 12,
    openDelay: 200,
    closeDelay: 200,
    closeOnBlur: !0,
    closeOnEsc: !0,
    trapFocus: !1
  }, e);
  const [t] = x(e, [...Q]), {
    baseClasses: o,
    styleOverrides: n
  } = za("Popover", t), [r, i] = R(), [s, l] = R(), [a, d] = R(), [u, g] = R(), [c, m] = R(!1), [h, S] = R(e.placement), [k, y] = R(), [v, V] = R(), _ = os({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (z) => e.onOpenChange?.(z)
  }), X = lt(() => _.isOpen(), () => F({
    transition: "pop",
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.transitionOptions ?? {})), A = () => {
    const z = ja(r() ?? s(), e.getAnchorRect), G = u(), Y = a();
    return {
      anchorEl: z,
      arrowEl: G,
      floatingEl: Y
    };
  };
  async function E() {
    const {
      anchorEl: z,
      arrowEl: G,
      floatingEl: Y
    } = A();
    if (!z || !Y)
      return;
    z.getBoundingClientRect();
    const Oe = [Mn(e.offset), Dn({
      padding: e.overflowPadding
    }), Ln({
      padding: e.overflowPadding
    }), Wn({
      padding: e.overflowPadding,
      apply({
        rects: Ne
      }) {
        const qe = Math.round(Ne.reference.width);
        e.hasSameWidth && (Y.style.width = `${qe}px`);
      }
    })];
    G && Oe.push(Pn({
      element: G,
      padding: e.arrowPadding
    })), Oe.push(Fn());
    const te = await Hn(z, Y, {
      placement: e.placement,
      middleware: Oe
    });
    if (te.placement !== h() && S(te.placement), !!Y && (Object.assign(Y.style, {
      left: `${Math.round(te.x)}px`,
      top: `${Math.round(te.y)}px`,
      visibility: te.middlewareData.hide?.referenceHidden ? "hidden" : "visible"
    }), G && te.middlewareData.arrow)) {
      const {
        x: Ne,
        y: qe
      } = te.middlewareData.arrow, _n = te.placement.split("-")[0];
      Object.assign(G.style, {
        left: Ne != null ? `${Ne}px` : "",
        top: qe != null ? `${qe}px` : "",
        [_n]: "100%"
      });
    }
  }
  let M, L;
  const W = () => {
    _.toggle();
  }, H = (z) => {
    z.key === "Escape" && _.close();
  }, ae = () => {
    M == null && _.open();
  }, ye = (z) => {
    const G = ao(z), Y = !Ze(a(), G);
    _.isOpen() && e.closeOnBlur && Y && _.close();
  }, xe = () => {
    m(!0), M = window.setTimeout(() => {
      _.open(), E();
    }, e.openDelay);
  }, Ve = () => {
    m(!1), M && (clearTimeout(M), M = void 0), L = window.setTimeout(() => {
      c() || _.close();
    }, e.closeDelay);
  }, ut = (z) => {
    e.closeOnEsc && z.key === "Escape" && _.close();
  }, Re = (z) => {
    const G = ao(z), Y = Ze(a(), G), Oe = Ze(s(), G), te = !Y && !Oe;
    _.isOpen() && e.closeOnBlur && te && _.close();
  }, $e = () => {
    m(!0);
  }, vn = (z) => {
    z.relatedTarget !== null && (m(!1), L = window.setTimeout(_.close, e.closeDelay));
  }, wn = () => {
    _.close();
  };
  J(() => {
    const {
      anchorEl: z,
      floatingEl: G
    } = A();
    if (!z || !G)
      return;
    const Y = An(z, G, E, {
      elementResize: typeof ResizeObserver == "function"
    });
    B(Y);
  }), B(() => {
    ue || (window.clearTimeout(M), window.clearTimeout(L));
  });
  const kn = {
    baseClasses: o,
    styleOverrides: n,
    isOpen: _.isOpen,
    popoverTransition: X,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: h,
    popoverId: () => e.id,
    headingId: k,
    setHeadingId: y,
    descriptionId: v,
    setDescriptionId: V,
    contentRef: a,
    setContentRef: d,
    setArrowRef: g,
    setAnchorRef: i,
    setTriggerRef: l,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: W,
    onTriggerKeyDown: H,
    onTriggerFocus: ae,
    onTriggerBlur: ye,
    onTriggerMouseEnter: xe,
    onTriggerMouseLeave: Ve,
    onContentKeyDown: ut,
    onContentFocusOut: Re,
    onContentMouseEnter: $e,
    onContentMouseLeave: vn,
    onCloseButtonClick: wn
  };
  return f(xn.Provider, {
    value: kn,
    get children() {
      return Is(e.children, _);
    }
  });
};
Ie.Trigger = Ha;
Ie.Anchor = Ta;
Ie.Content = Wa;
Ie.CloseButton = Ba;
Ie.Heading = Fa;
Ie.Description = Pa;
function Cl(e) {
  const [t, o] = x(e, ["children", "withinPortal"]);
  return f(P, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return f(ot, b(o, {
        get children() {
          return t.children;
        }
      }));
    }
  });
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/spacer.tsx
 */
const Sl = C("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), Sn = (e) => {
  e = F({
    align: "center"
  }, e);
  const [t, o] = x(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return f(C.div, b({
    get class() {
      return w("hope-Stack-root", t.class);
    },
    get __css() {
      return Qo({
        display: "flex",
        flexDirection: t.direction,
        flexWrap: t.wrap,
        alignItems: t.align,
        justifyContent: t.justify,
        gap: t.spacing,
        columnGap: t.spacingX,
        rowGap: t.spacingY
      });
    }
  }, o));
}, vl = (e) => {
  e = F({
    reverse: !1
  }, e);
  const [t, o] = x(e, ["reverse"]);
  return f(Sn, b(o, {
    get direction() {
      return Z(t.reverse, (n) => n ? "row-reverse" : "row");
    }
  }));
}, wl = (e) => {
  e = F({
    reverse: !1
  }, e);
  const [t, o] = x(e, ["reverse"]);
  return f(Sn, b(o, {
    get direction() {
      return Z(t.reverse, (n) => n ? "column-reverse" : "column");
    }
  }));
}, Va = K({
  root: {
    baseStyle: {
      margin: 0
    },
    variants: {
      size: {
        xs: {
          fontSize: "xs",
          lineHeight: 4
        },
        sm: {
          fontSize: "sm",
          lineHeight: 5
        },
        base: {
          fontSize: "base",
          lineHeight: 6
        },
        lg: {
          fontSize: "lg",
          lineHeight: 7
        },
        xl: {
          fontSize: "xl",
          lineHeight: 7
        },
        "2xl": {
          fontSize: "2xl",
          lineHeight: 8
        },
        "3xl": {
          fontSize: "3xl",
          lineHeight: 9
        },
        "4xl": {
          fontSize: "4xl",
          lineHeight: 10
        },
        "5xl": {
          fontSize: "5xl",
          lineHeight: "none"
        },
        "6xl": {
          fontSize: "6xl",
          lineHeight: "none"
        },
        "7xl": {
          fontSize: "7xl",
          lineHeight: "none"
        },
        "8xl": {
          fontSize: "8xl",
          lineHeight: "none"
        },
        "9xl": {
          fontSize: "9xl",
          lineHeight: "none"
        }
      }
    }
  }
}), kl = (e) => {
  e = ee("Text", {}, e);
  const [t, o, n] = x(e, ["class", "lineClamp"], [...Q, "size"]), {
    baseClasses: r,
    styleOverrides: i
  } = Va("Text", o), s = O(() => ({
    ...i().root,
    ...No(t.lineClamp)
  }));
  return f(C.p, b({
    get class() {
      return w(r().root, t.class);
    },
    get __css() {
      return s();
    }
  }, n));
};
export {
  il as Anchor,
  sl as AspectRatio,
  al as Box,
  ia as Button,
  ll as ButtonGroup,
  ge as COLOR_MODE_CLASSNAMES,
  at as COLOR_MODE_STORAGE_KEY,
  dl as Center,
  Mt as CloseButton,
  Fo as ColorModeContext,
  Ni as ColorModeProvider,
  ol as ColorModeScript,
  ul as Container,
  zt as DEFAULT_THEME,
  ii as DEFAULT_THEME_MAP,
  gl as Divider,
  je as Drawer,
  ca as DrawerCloseButton,
  da as DrawerContent,
  ua as DrawerDescription,
  ga as DrawerHeading,
  fa as DrawerOverlay,
  fl as Flex,
  Dt as FocusTrapRegion,
  Ft as FormControl,
  un as FormControlContext,
  pa as FormControlDescription,
  ba as FormControlError,
  ya as FormControlLabel,
  gn as Grid,
  xa as GridItem,
  vl as HStack,
  hl as Heading,
  rl as HopeProvider,
  Ts as Icon,
  cl as IconButton,
  pl as Image,
  bl as Img,
  yl as Input,
  dt as InputGroup,
  Ia as InputGroupLeftAddon,
  $a as InputGroupLeftSection,
  Ra as InputGroupRightAddon,
  Oa as InputGroupRightSection,
  xl as Kbd,
  Fe as Modal,
  Ws as ModalCloseButton,
  Fs as ModalContent,
  Hs as ModalDescription,
  js as ModalHeading,
  Vs as ModalOverlay,
  Cl as OptionalPortal,
  Ie as Popover,
  Ta as PopoverAnchor,
  Da as PopoverArrow,
  Ba as PopoverCloseButton,
  Wa as PopoverContent,
  Pa as PopoverDescription,
  Fa as PopoverHeading,
  Ha as PopoverTrigger,
  Q as STYLE_CONFIG_PROP_NAMES,
  ml as SimpleGrid,
  Sl as Spacer,
  Sn as Stack,
  kl as Text,
  ui as ThemeProvider,
  wl as VStack,
  Ps as VisuallyHidden,
  nl as VisuallyHiddenInput,
  $r as arrayToObjectNotation,
  Lo as computeStyleOptions,
  el as cookieStorageManager,
  tl as cookieStorageManagerSSR,
  Ho as createCookieStorageManager,
  Ka as createGlobalStyles,
  Xa as createHopeComponent,
  rn as createIcon,
  wa as createImageLoadingStatus,
  Li as createLocalStorageManager,
  Se as createPalette,
  K as createStyleConfig,
  Ua as createStyles,
  Ya as extendTheme,
  Ja as fadeIn,
  Tt as focusStyles,
  Wo as getSelectedVariantClassNames,
  C as hope,
  Za as injectCriticalStyle,
  Ir as isColorModeObjectLike,
  Or as isResponsiveObjectLike,
  $o as keyframes,
  No as lineClamp,
  Wi as localStorageManager,
  Z as mapResponsive,
  F as mergeDefaultProps,
  ee as mergeThemeProps,
  Rr as objectToArrayNotation,
  Nn as pack,
  To as resolveTokenValue,
  q as rgba,
  Mi as spin,
  oa as useButtonGroupContext,
  Di as useColorMode,
  Qa as useColorModeValue,
  di as useComponentTheme,
  Wt as useFormControlContext,
  Pt as useRequiredFormControlContext,
  pe as useTheme,
  Gs as watchModals
};
