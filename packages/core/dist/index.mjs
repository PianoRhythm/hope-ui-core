import { isArray as Yr, isObject as Te, objectKeys as Xr, getLastItem as Zr, delve as Jr, once as Ke, runIfFn as ee, filterUndefined as Se, isEmptyObject as tr, isNumber as rr, flatten as nt, unflatten as Qr, pick as eo, pack as to, isString as ro, callHandler as $, mergeRefs as ve, getActiveElement as $t, getAllTabbableIn as Bt, focusWithoutScrolling as me, contains as Ve, isFocusable as oo, noop as no, dataAttr as R, isNull as or, ariaAttr as io, getWindow as so, getRelatedTarget as Tt } from "@hope-ui/utils";
import { pack as Sa } from "@hope-ui/utils";
import { createComponent as g, useAssets as ao, effect as mt, template as ue, Dynamic as lo, mergeProps as b, isServer as Ue, setAttribute as nr, memo as Ee, Portal as Ye, insert as co } from "solid-js/web";
import { createContext as oe, useContext as ne, createMemo as B, mergeProps as bt, splitProps as y, createSignal as W, createEffect as ie, onCleanup as H, Show as D, onMount as ke, createUniqueId as Xe, children as uo, createRenderEffect as ir } from "solid-js";
import { createTransition as Ze, createPreventScroll as go, createTagName as ho, createDisclosure as fo } from "@hope-ui/primitives";
import { autoUpdate as po, offset as mo, flip as bo, shift as yo, size as Co, arrow as xo, hide as So, computePosition as vo } from "@floating-ui/dom";
var I = "colors", V = "sizes", m = "space", ko = { gap: m, gridGap: m, columnGap: m, gridColumnGap: m, rowGap: m, gridRowGap: m, inset: m, insetBlock: m, insetBlockEnd: m, insetBlockStart: m, insetInline: m, insetInlineEnd: m, insetInlineStart: m, margin: m, marginTop: m, marginRight: m, marginBottom: m, marginLeft: m, marginBlock: m, marginBlockEnd: m, marginBlockStart: m, marginInline: m, marginInlineEnd: m, marginInlineStart: m, padding: m, paddingTop: m, paddingRight: m, paddingBottom: m, paddingLeft: m, paddingBlock: m, paddingBlockEnd: m, paddingBlockStart: m, paddingInline: m, paddingInlineEnd: m, paddingInlineStart: m, top: m, right: m, bottom: m, left: m, scrollMargin: m, scrollMarginTop: m, scrollMarginRight: m, scrollMarginBottom: m, scrollMarginLeft: m, scrollMarginX: m, scrollMarginY: m, scrollMarginBlock: m, scrollMarginBlockEnd: m, scrollMarginBlockStart: m, scrollMarginInline: m, scrollMarginInlineEnd: m, scrollMarginInlineStart: m, scrollPadding: m, scrollPaddingTop: m, scrollPaddingRight: m, scrollPaddingBottom: m, scrollPaddingLeft: m, scrollPaddingX: m, scrollPaddingY: m, scrollPaddingBlock: m, scrollPaddingBlockEnd: m, scrollPaddingBlockStart: m, scrollPaddingInline: m, scrollPaddingInlineEnd: m, scrollPaddingInlineStart: m, fontSize: "fontSizes", background: I, backgroundColor: I, backgroundImage: I, borderImage: I, border: I, borderBlock: I, borderBlockEnd: I, borderBlockStart: I, borderBottom: I, borderBottomColor: I, borderColor: I, borderInline: I, borderInlineEnd: I, borderInlineStart: I, borderLeft: I, borderLeftColor: I, borderRight: I, borderRightColor: I, borderTop: I, borderTopColor: I, caretColor: I, color: I, columnRuleColor: I, fill: I, outline: I, outlineColor: I, stroke: I, textDecorationColor: I, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: V, minBlockSize: V, maxBlockSize: V, inlineSize: V, minInlineSize: V, maxInlineSize: V, width: V, minWidth: V, maxWidth: V, height: V, minHeight: V, maxHeight: V, flexBasis: V, gridTemplateColumns: V, gridTemplateRows: V, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, wo = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Ae = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, r, ...o) => {
    const n = ((i) => JSON.stringify(i, wo))(t);
    return n in e ? e[n] : e[n] = r(t, ...o);
  };
}, Ne = Symbol.for("sxs.internal"), yt = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Et = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: _o } = Object.prototype, gt = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), Io = /\s+(?![^()]*\))/, be = (e) => (t) => e(...typeof t == "string" ? String(t).split(Io) : [t]), At = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: be((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: be((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: be((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: be((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: be((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: be((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, it = /([\d.]+)([^]*)/, Ro = (e, t) => e.length ? e.reduce((r, o) => (r.push(...t.map((n) => n.includes("&") ? n.replace(/&/g, /[ +>|~]/.test(o) && /&.*&/.test(n) ? `:is(${o})` : o) : o + " " + n)), r), []) : t, zo = (e, t) => e in Oo && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (r, o, n, i) => o + (n === "stretch" ? `-moz-available${i};${gt(e)}:${o}-webkit-fill-available` : `-moz-fit-content${i};${gt(e)}:${o}fit-content`) + i) : String(t), Oo = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, re = (e) => e ? e + "-" : "", sr = (e, t, r) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (o, n, i, l, a) => l == "$" == !!i ? o : (n || l == "--" ? "calc(" : "") + "var(--" + (l === "$" ? re(t) + (a.includes("$") ? "" : re(r)) + a.replace(/\$/g, "-") : a) + ")" + (n || l == "--" ? "*" + (n || "") + (i || "1") + ")" : "")), $o = /\s*,\s*(?![^()]*\))/, Bo = Object.prototype.toString, Ce = (e, t, r, o, n) => {
  let i, l, a;
  const s = (d, u, h) => {
    let c, f;
    const p = (S) => {
      for (c in S) {
        const v = c.charCodeAt(0) === 64, j = v && Array.isArray(S[c]) ? S[c] : [S[c]];
        for (f of j) {
          const _ = /[A-Z]/.test(C = c) ? C : C.replace(/-[^]/g, (T) => T[1].toUpperCase()), U = typeof f == "object" && f && f.toString === Bo && (!o.utils[_] || !u.length);
          if (_ in o.utils && !U) {
            const T = o.utils[_];
            if (T !== l) {
              l = T, p(T(f)), l = null;
              continue;
            }
          } else if (_ in At) {
            const T = At[_];
            if (T !== a) {
              a = T, p(T(f)), a = null;
              continue;
            }
          }
          if (v && (w = c.slice(1) in o.media ? "@media " + o.media[c.slice(1)] : c, c = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (T, z, E, A, M, P) => {
            const se = it.test(z), fe = 0.0625 * (se ? -1 : 1), [pe, Pe] = se ? [A, z] : [z, A];
            return "(" + (E[0] === "=" ? "" : E[0] === ">" === se ? "max-" : "min-") + pe + ":" + (E[0] !== "=" && E.length === 1 ? Pe.replace(it, (ot, _e, Ie) => Number(_e) + fe * (E === ">" ? 1 : -1) + Ie) : Pe) + (M ? ") and (" + (M[0] === ">" ? "min-" : "max-") + pe + ":" + (M.length === 1 ? P.replace(it, (ot, _e, Ie) => Number(_e) + fe * (M === ">" ? -1 : 1) + Ie) : P) : "") + ")";
          })), U) {
            const T = v ? h.concat(c) : [...h], z = v ? [...u] : Ro(u, c.split($o));
            i !== void 0 && n(Mt(...i)), i = void 0, s(f, z, T);
          } else
            i === void 0 && (i = [[], u, h]), c = v || c.charCodeAt(0) !== 36 ? c : `--${re(o.prefix)}${c.slice(1).replace(/\$/g, "-")}`, f = U ? f : typeof f == "number" ? f && _ in To ? String(f) + "px" : String(f) : sr(zo(_, f ?? ""), o.prefix, o.themeMap[_]), i[0].push(`${v ? `${c} ` : `${gt(c)}:`}${f}`);
        }
      }
      var w, C;
    };
    p(d), i !== void 0 && n(Mt(...i)), i = void 0;
  };
  s(e, t, r);
}, Mt = (e, t, r) => `${r.map((o) => `${o}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(r.length ? r.length + 1 : 0).join("}")}`, To = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Wt = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), de = (e) => ((t) => {
  let r, o = "";
  for (r = Math.abs(t); r > 52; r = r / 52 | 0)
    o = Wt(r % 52) + o;
  return Wt(r % 52) + o;
})(((t, r) => {
  let o = r.length;
  for (; o; )
    t = 33 * t ^ r.charCodeAt(--o);
  return t;
})(5381, JSON.stringify(e)) >>> 0), $e = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Eo = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Ao = (e) => {
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
      if (Eo(a)) {
        for (let s = 0, d = a.cssRules; d[s]; ++s) {
          const u = Object(d[s]);
          if (u.type !== 1)
            continue;
          const h = Object(d[s + 1]);
          if (h.type !== 4)
            continue;
          ++s;
          const { cssText: c } = u;
          if (!c.startsWith("--sxs"))
            continue;
          const f = c.slice(14, -3).trim().split(/\s+/), p = $e[f[0]];
          p && (t || (t = { sheet: a, reset: o, rules: {}, toString: r }), t.rules[p] = { group: h, index: s, cache: new Set(f) });
        }
        if (t)
          break;
      }
    if (!t) {
      const a = (s, d) => ({ type: d, cssRules: [], insertRule(u, h) {
        this.cssRules.splice(h, 0, a(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return s === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : s;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"), rules: {}, reset: o, toString: r };
    }
    const { sheet: i, rules: l } = t;
    for (let a = $e.length - 1; a >= 0; --a) {
      const s = $e[a];
      if (!l[s]) {
        const d = $e[a + 1], u = l[d] ? l[d].index : i.cssRules.length;
        i.insertRule("@media{}", u), i.insertRule(`--sxs{--sxs:${a}}`, u), l[s] = { group: i.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([a]) };
      }
      Mo(l[s]);
    }
  };
  return o(), t;
}, Mo = (e) => {
  const t = e.group;
  let r = t.cssRules.length;
  e.apply = (o) => {
    try {
      t.insertRule(o, r), ++r;
    } catch {
    }
  };
}, ze = Symbol(), Wo = Ae(), Do = (e, t) => Wo(e, () => (...r) => {
  let o = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const n of r)
    if (n != null)
      if (n[Ne]) {
        o.type == null && (o.type = n[Ne].type);
        for (const i of n[Ne].composers)
          o.composers.add(i);
      } else
        n.constructor !== Object || n.$$typeof ? o.type == null && (o.type = n) : o.composers.add(Lo(n, e));
  return o.type == null && (o.type = "span"), o.composers.size || o.composers.add(["PJLV", {}, [], [], {}, []]), Po(e, o, t);
}), Lo = ({ variants: e, compoundVariants: t, defaultVariants: r, ...o }, n) => {
  const i = `${re(n.prefix)}c-${de(o)}`, l = [], a = [], s = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in r)
    s[c] = String(r[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      u = s, h = c, _o.call(u, h) || (s[c] = "undefined");
      const f = e[c];
      for (const p in f) {
        const S = { [c]: String(p) };
        String(p) === "undefined" && d.push(c);
        const w = f[p], C = [S, w, !Et(w)];
        l.push(C);
      }
    }
  var u, h;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: f, ...p } = c;
      f = typeof f == "object" && f || {};
      for (const w in p)
        p[w] = String(p[w]);
      const S = [p, f, !Et(f)];
      a.push(S);
    }
  return [i, o, l, a, s, d];
}, Po = (e, t, r) => {
  const [o, n, i, l] = Fo(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((h) => {
    function c() {
      for (let f = 0; f < c[ze].length; f++) {
        const [p, S] = c[ze][f];
        h.rules[p].apply(S);
      }
      return c[ze] = [], null;
    }
    return c[ze] = [], c.rules = {}, $e.forEach((f) => c.rules[f] = { apply: (p) => c[ze].push([f, p]) }), c;
  })(r) : null, s = (a || r).rules, d = `.${o}${n.length > 1 ? `:where(.${n.slice(1).join(".")})` : ""}`, u = (h) => {
    h = typeof h == "object" && h || Ho;
    const { css: c, ...f } = h, p = {};
    for (const C in i)
      if (delete f[C], C in h) {
        let v = h[C];
        typeof v == "object" && v ? p[C] = { "@initial": i[C], ...v } : (v = String(v), p[C] = v !== "undefined" || l.has(C) ? v : i[C]);
      } else
        p[C] = i[C];
    const S = /* @__PURE__ */ new Set([...n]);
    for (const [C, v, j, _] of t.composers) {
      r.rules.styled.cache.has(C) || (r.rules.styled.cache.add(C), Ce(v, [`.${C}`], [], e, (z) => {
        s.styled.apply(z);
      }));
      const U = Dt(j, p, e.media), T = Dt(_, p, e.media, !0);
      for (const z of U)
        if (z !== void 0)
          for (const [E, A, M] of z) {
            const P = `${C}-${de(A)}-${E}`;
            S.add(P);
            const se = (M ? r.rules.resonevar : r.rules.onevar).cache, fe = M ? s.resonevar : s.onevar;
            se.has(P) || (se.add(P), Ce(A, [`.${P}`], [], e, (pe) => {
              fe.apply(pe);
            }));
          }
      for (const z of T)
        if (z !== void 0)
          for (const [E, A] of z) {
            const M = `${C}-${de(A)}-${E}`;
            S.add(M), r.rules.allvar.cache.has(M) || (r.rules.allvar.cache.add(M), Ce(A, [`.${M}`], [], e, (P) => {
              s.allvar.apply(P);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const C = `${o}-i${de(c)}-css`;
      S.add(C), r.rules.inline.cache.has(C) || (r.rules.inline.cache.add(C), Ce(c, [`.${C}`], [], e, (v) => {
        s.inline.apply(v);
      }));
    }
    for (const C of String(h.className || "").trim().split(/\s+/))
      C && S.add(C);
    const w = f.className = [...S].join(" ");
    return { type: t.type, className: w, selector: d, props: f, toString: () => w, deferredInjector: a };
  };
  return yt(u, { className: o, selector: d, [Ne]: t, toString: () => (r.rules.styled.cache.has(o) || u(), o) });
}, Fo = (e) => {
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
}, Dt = (e, t, r, o) => {
  const n = [];
  e:
    for (let [i, l, a] of e) {
      if (a)
        continue;
      let s, d = 0, u = !1;
      for (s in i) {
        const h = i[s];
        let c = t[s];
        if (c !== h) {
          if (typeof c != "object" || !c)
            continue e;
          {
            let f, p, S = 0;
            for (const w in c) {
              if (h === String(c[w])) {
                if (w !== "@initial") {
                  const C = w.slice(1);
                  (p = p || []).push(C in r ? r[C] : w.replace(/^@media ?/, "")), u = !0;
                }
                d += S, f = !0;
              }
              ++S;
            }
            if (p && p.length && (l = { ["@media " + p.join(", ")]: l }), !f)
              continue e;
          }
        }
      }
      (n[d] = n[d] || []).push([o ? "cv" : `${s}-${i[s]}`, l, u]);
    }
  return n;
}, Ho = {}, jo = Ae(), Vo = (e, t) => jo(e, () => (...r) => {
  const o = () => {
    for (let n of r) {
      n = typeof n == "object" && n || {};
      let i = de(n);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in n) {
          let l = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(n["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, l++);
          delete n["@import"];
        }
        Ce(n, [], [], e, (l) => {
          t.rules.global.apply(l);
        });
      }
    }
    return "";
  };
  return yt(o, { toString: o });
}), No = Ae(), Go = (e, t) => No(e, () => (r) => {
  const o = `${re(e.prefix)}k-${de(r)}`, n = () => {
    if (!t.rules.global.cache.has(o)) {
      t.rules.global.cache.add(o);
      const i = [];
      Ce(r, [], [], e, (a) => i.push(a));
      const l = `@keyframes ${o}{${i.join("")}}`;
      t.rules.global.apply(l);
    }
    return o;
  };
  return yt(n, { get name() {
    return n();
  }, toString: n });
}), qo = class {
  constructor(e, t, r, o) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = r == null ? "" : String(r), this.prefix = o == null ? "" : String(o);
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
}, Ko = Ae(), Uo = (e, t) => Ko(e, () => (r, o) => {
  o = typeof r == "object" && r || Object(o);
  const n = `.${r = (r = typeof r == "string" ? r : "") || `${re(e.prefix)}t-${de(o)}`}`, i = {}, l = [];
  for (const s in o) {
    i[s] = {};
    for (const d in o[s]) {
      const u = `--${re(e.prefix)}${s}-${d}`, h = sr(String(o[s][d]), e.prefix, s);
      i[s][d] = new qo(d, h, s, e.prefix), l.push(`${u}:${h}`);
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
}), Yo = Ae(), Xo = (e) => {
  let t = !1;
  const r = Yo(e, (o) => {
    t = !0;
    const n = "prefix" in (o = typeof o == "object" && o || {}) ? String(o.prefix) : "", i = typeof o.media == "object" && o.media || {}, l = typeof o.root == "object" ? o.root || null : globalThis.document || null, a = typeof o.theme == "object" && o.theme || {}, s = { prefix: n, media: i, theme: a, themeMap: typeof o.themeMap == "object" && o.themeMap || { ...ko }, utils: typeof o.utils == "object" && o.utils || {} }, d = Ao(l), u = { css: Do(s, d), globalCss: Vo(s, d), keyframes: Go(s, d), createTheme: Uo(s, d), reset() {
      d.reset(), u.theme.toString();
    }, theme: {}, sheet: d, config: s, prefix: n, getCssText: d.toString, toString: d.toString };
    return String(u.theme = u.createTheme(a)), u;
  });
  return t || r.reset(), r;
};
const Zo = Xo({ prefix: "hope" }), { css: ar, globalCss: Ct, getCssText: Jo, keyframes: lr } = Zo, ce = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};
function Qo(e) {
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
function X(e, t) {
  return Yr(e) ? e.map((r) => r === null ? null : t(r)) : Te(e) ? Xr(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function en(e, t) {
  const r = t.map((o) => e[o] ?? null);
  for (; Zr(r) === null; )
    r.pop();
  return r;
}
function tn(e, t) {
  const r = {};
  return e.forEach((o, n) => {
    const i = t[n];
    o != null && (r[i] = o);
  }), r;
}
function rn(e, t) {
  const r = Object.keys(e);
  return r.length > 0 && r.every((o) => t.includes(o));
}
const Z = [
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
const F = {
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
function ae(e) {
  return cr((t) => e(t, "&"), "[role=group]", "[data-group]", ".group");
}
function te(e) {
  return cr((t) => e(t, "~ &"), "[data-peer]", ".peer");
}
function cr(e, ...t) {
  return t.map(e).join(", ");
}
const on = "_light", Ge = "_dark", nn = `.${ce.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`, sn = `.${ce.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`, an = /* @__PURE__ */ new Map([
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
  ["_groupHover", ae(F.hover)],
  ["_peerHover", te(F.hover)],
  ["_groupFocus", ae(F.focus)],
  ["_peerFocus", te(F.focus)],
  ["_groupFocusVisible", ae(F.focusVisible)],
  ["_peerFocusVisible", te(F.focusVisible)],
  ["_groupActive", ae(F.active)],
  ["_peerActive", te(F.active)],
  ["_groupDisabled", ae(F.disabled)],
  ["_peerDisabled", te(F.disabled)],
  ["_groupInvalid", ae(F.invalid)],
  ["_peerInvalid", te(F.invalid)],
  ["_groupChecked", ae(F.checked)],
  ["_peerChecked", te(F.checked)],
  ["_groupFocusWithin", ae(F.focusWithin)],
  ["_peerFocusWithin", te(F.focusWithin)],
  ["_peerPlaceholderShown", te(F.placeholderShown)],
  ["_placeholder", "&::placeholder"],
  ["_placeholderShown", "&:placeholder-shown"],
  ["_fullScreen", "&:fullscreen"],
  ["_selection", "&::selection"],
  ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
  ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
  ["_mediaDark", "@media (prefers-color-scheme: dark)"],
  ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
  [on, nn],
  [Ge, sn]
]), ln = /* @__PURE__ */ new Map([
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
const cn = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: o, medias: n } = t.__breakpoints, i = {}, l = {};
  for (const a in e) {
    let s = ee(e[a], t);
    if (s == null || st(a, s, i))
      continue;
    if (s = Te(s) && r(s) ? o(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const d = s.slice(0, n.length).length;
    for (let u = 0; u < d; u += 1) {
      const h = n?.[u], c = s[u];
      if (c != null) {
        if (!h) {
          st(a, c, i) || (i[a] = c);
          continue;
        }
        l[h] = l[h] || {}, st(a, c, l[h]) || (l[h][a] = c);
      }
    }
  }
  return {
    ...i,
    ...l
  };
};
function st(e, t, r) {
  if (!Te(t) || !Qo(t))
    return !1;
  const { light: o, dark: n } = t;
  return o != null && (r[e] = o), r[Ge] = r[Ge] || {}, n != null && (r[Ge][e] = n), !0;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function dn(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function qe(e) {
  if (e == null)
    return e;
  const { unitless: t } = dn(e);
  return t || rr(e) ? `${e}px` : e;
}
const dr = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, xt = (e) => Object.fromEntries(Object.entries(e).sort(dr));
function Lt(e) {
  const t = xt(e);
  return Object.assign(Object.values(t), t);
}
function un(e) {
  const t = Object.keys(xt(e));
  return new Set(t);
}
function Pt(e) {
  if (!e)
    return e;
  e = qe(e) ?? e;
  const t = e.endsWith("px") ? -1 : -0.0625;
  return rr(e) ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + t}`);
}
function je(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${qe(e)})`), t && r.push("and", `(max-width: ${qe(t)})`), r.join(" ");
}
function gn(e) {
  if (!e)
    return null;
  e.base = e.base ?? "0px";
  const t = Lt(e), r = Object.entries(e).sort(dr).map(([i, l], a, s) => {
    let [, d] = s[a + 1] ?? [];
    return d = parseFloat(d) > 0 ? Pt(d) : void 0, {
      _minW: Pt(l),
      breakpoint: i,
      minW: l,
      maxW: d,
      maxWQuery: je(null, d),
      minWQuery: je(l),
      minMaxQuery: je(l, d)
    };
  }), o = un(e), n = Array.from(o.values());
  return {
    keys: o,
    normalized: t,
    asObject: xt(e),
    asArray: Lt(e),
    details: r,
    medias: [null, ...t.map((i) => je(i)).slice(1)],
    isResponsive(i) {
      return rn(i, n);
    },
    toArrayValue(i) {
      if (!Te(i))
        throw new Error("toArrayValue: value must be an object");
      return en(i, n);
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return tn(i, n);
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
const hn = [
  "colors",
  "fonts",
  "fontWeights",
  "lineHeights",
  "shadows",
  "zIndices"
], ur = /!(important)?$/;
function fn(e) {
  return ur.test(e);
}
function pn(e) {
  return e.replace(ur, "").trim();
}
function gr(e, t, r) {
  if (e == null)
    return;
  const o = String(e), n = pn(o);
  let i = r[t][n] ?? Jr(r[t], n);
  return i == null && (i = hn.includes(t) ? n : qe(n)), fn(o) ? `${i} !important` : i;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */
function Je(e, t) {
  const r = {}, o = cn(e)(t);
  for (let n in o) {
    let i = ee(o[n], t);
    if (i == null)
      continue;
    if (n.startsWith("_")) {
      const a = an.get(n);
      if (a == null)
        continue;
      n = a;
    }
    if (Te(i)) {
      r[n] = Object.assign(
        {},
        r[n],
        Je(i, t)
      );
      continue;
    }
    const l = ln.get(n) ?? [n];
    for (const a of l) {
      const s = t.themeMap[a];
      s != null && (i = gr(i, s, t.vars)), r[a] = i;
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
function mn(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function bn(e) {
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
function yn(e) {
  const [t, r, o, n] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: r, b: o, a: n || 1 };
}
function Cn(e) {
  return mn(e) ? bn(e) : e.startsWith("rgb") ? yn(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function at(e) {
  const { r: t, g: r, b: o } = Cn(e);
  return `${t} ${r} ${o}`;
}
/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */
function ye(e) {
  return {
    ...e,
    mainChannel: at(e[500]),
    lightChannel: at(e[100]),
    darkChannel: at(e[900])
  };
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
const Qe = "hope";
function xn(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Sn(e) {
  const t = xn(e.toString());
  return kn(vn(t));
}
function vn(e) {
  return e.includes("\\.") || Number.isInteger(parseFloat(e.toString())) ? e : e.replace(".", "\\.");
}
function kn(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function wn(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function _n(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function In(e, t = "") {
  return Sn(`--${wn(e, t)}`);
}
function Rn(e, t, r = Qe) {
  const o = In(e, r);
  return {
    variable: o,
    reference: _n(o, t)
  };
}
function zn(e = Qe) {
  return (t) => `var(--${e ? `${e}-` : ""}${t})`;
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
const Oe = "__";
function lt(e, t, r) {
  return Rn(String(t).replace(e, "-"), void 0, r);
}
function On(e, t) {
  const r = {}, o = {}, n = {}, { colors: i, ...l } = e, a = { colors: i.light }, s = { colors: i.dark }, d = nt(a, Oe), u = nt(s, Oe), h = nt(l, Oe), c = new RegExp(`(${Oe}|\\.)`, "g");
  for (const [p, S] of Object.entries(d)) {
    const { variable: w, reference: C } = lt(c, p, t);
    r[w] = S, n[p] = C;
  }
  for (const [p, S] of Object.entries(u)) {
    const { variable: w } = lt(c, p, t);
    o[w] = S;
  }
  for (const [p, S] of Object.entries(h)) {
    const { variable: w, reference: C } = lt(c, p, t);
    r[w] = S, n[p] = C;
  }
  const f = Qr(n, Oe);
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
const $n = [
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
function Bn(e) {
  return eo(e, $n);
}
function Tn(e) {
  const { vars: t, __cssVarsValues: r, __breakpoints: o, ...n } = e;
  return n;
}
function hr(e) {
  const t = Tn(e), r = Bn(t), { cssVarsValues: o, vars: n } = On(r, t.cssVarPrefix);
  return Object.assign(t, {
    vars: n,
    __cssVarsValues: o,
    __breakpoints: gn(t.breakpoints)
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
function fr(e) {
  const t = zn(e);
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
      primary: ye({
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
      neutral: ye({
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
      success: ye({
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
      info: ye({
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
      warning: ye({
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
      danger: ye({
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
const En = {
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
}, Ft = {
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
}, An = {
  colors: fr(Qe),
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
  space: Ft,
  sizes: {
    ...Ft,
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
}, Mn = {
  ...An,
  cssVarPrefix: Qe,
  themeMap: En,
  components: {}
}, St = hr(Mn);
function ht(e, t, r) {
  if (typeof e == "object" && typeof t == "object") {
    if (Array.isArray(e) && Array.isArray(t))
      for (r = 0; r < t.length; r++)
        e[r] = ht(e[r], t[r]);
    else
      for (r in t) {
        if (r === "__proto__" || r === "constructor" || r === "prototype")
          break;
        e[r] = ht(e[r], t[r]);
      }
    return e;
  }
  return t;
}
function ft(e, t, r) {
  t.split && (t = t.split("."));
  for (var o = 0, n = t.length, i = e, l, a; o < n && (a = t[o++], !(a === "__proto__" || a === "constructor" || a === "prototype")); )
    i = i[a] = o === n ? ht(i[a], r) : typeof (l = i[a]) == typeof t ? l : t[o] * 0 !== 0 || !!~("" + t[o]).indexOf(".") ? {} : [];
}
function Hs(e) {
  let t = St;
  e.cssVarPrefix != null && (t = {
    ...t,
    colors: fr(e.cssVarPrefix)
  });
  const r = {
    value: t
  };
  return ft(r, "value", e), hr(r.value);
}
/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */
function vt(e) {
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
function Wn(e) {
  Ct({
    ":root": e.__cssVarsValues.root,
    [`.${ce.dark}`]: e.__cssVarsValues.dark
  })();
}
/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
function Dn(e) {
  Ct({
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
const pr = oe(St);
function ge() {
  return ne(pr);
}
function Ln(e) {
  const t = ge();
  return B(() => {
    if (e != null)
      return t.components[e] ?? void 0;
  });
}
function J(e, t, r) {
  const o = ge();
  return bt(t, () => o.components[e]?.defaultProps ?? {}, r);
}
function Pn(e) {
  const t = e.theme ?? St;
  return Wn(t), e.withCssReset && Dn(t.vars), g(pr.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function js(e) {
  const t = Ke((r) => {
    const {
      "@import": o,
      "@font-face": n,
      ...i
    } = ee(e, r), l = Object.entries(i).reduce((a, [s, d]) => (a[s] = Je(d, r), a), {});
    Ct({
      "@import": o ?? [],
      "@font-face": n ?? {},
      ...l
    })();
  });
  return function() {
    const r = ge();
    t(r);
  };
}
function Vs(e) {
  return e;
}
function mr(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = mr(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function kt() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = mr(e)) && (o && (o += " "), o += t);
  return o;
}
function xe(e, t) {
  return ar(Je(e, t))().className;
}
function pt(e, t) {
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
function Ht(e, t) {
  return Object.entries(e).reduce((r, [o, n]) => {
    const {
      baseStyle: i = {},
      variants: l = {},
      compoundVariants: a = []
    } = n;
    return r[o] = {
      baseClassName: xe(i, t),
      variantClassNames: Object.entries(l).reduce((s, [d, u]) => (s[d] = Object.entries(u).reduce(
        (h, [c, f]) => (h[c] = xe(f, t), h),
        {}
      ), s), {}),
      compoundVariants: a.map((s) => [
        s.variants,
        xe(s.style, t)
      ])
    }, r;
  }, {});
}
function K(e, t) {
  let r, o, n, i, l = [], a;
  const s = Ke(
    (d, u, h) => {
      r = ee(e, u), o = Ht(
        r,
        u
      ), n = ee(h, u), i = n && Ht(n, u), l = Object.keys(r), a = Object.fromEntries(
        l.map((c) => [c, `hope-${d}-${c}`])
      );
    }
  );
  return function(d, u) {
    const h = ge(), c = Ln(d);
    s(d, h, c()?.styleConfigOverride);
    const f = B(() => ee(u.styleConfigOverride, h)), p = B(() => {
      const [C, v] = y(u, ["styleConfigOverride", "unstyled"]);
      return {
        ...t,
        ...Se(v)
      };
    }), S = B(() => l.reduce((C, v) => {
      let j = "", _ = {}, U = [];
      u.unstyled || (j = o[v].baseClassName ?? "", _ = o[v].variantClassNames ?? {}, U = o[v].compoundVariants ?? []);
      const T = i?.[v]?.baseClassName ?? "", z = i?.[v]?.variantClassNames ?? {}, E = i?.[v]?.compoundVariants ?? [], A = [a[v], j, T];
      for (const M in p()) {
        const P = p()[M];
        P != null && (A.push(_[M]?.[String(P)]), A.push(z[M]?.[String(P)]));
      }
      for (const [M, P] of [...U, ...E])
        pt(M, p()) && A.push(P);
      return C[v] = kt(...A), C;
    }, {})), w = B(() => {
      const C = f();
      return C == null ? {} : l.reduce((v, j) => {
        const _ = C[j]?.baseStyle ?? {}, U = C[j]?.variants ?? {}, T = C[j]?.compoundVariants ?? [];
        v[j] = _;
        for (const z in p()) {
          const E = p()[z];
          if (E == null)
            continue;
          const A = U[z]?.[String(E)] ?? {};
          tr(A) || ft(v, j, A);
        }
        for (const z of T)
          pt(z.variants, p()) && ft(v, j, z.style);
        return v;
      }, {});
    });
    return { baseClasses: S, styleOverrides: w };
  };
}
/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
function br(e, t) {
  const { baseStyle: r = {}, variants: o = {}, compoundVariants: n = [] } = e;
  return {
    baseClassName: xe(r, t),
    variantClassNames: Object.entries(o).reduce((i, [l, a]) => (i[l] = Object.entries(a).reduce(
      (s, [d, u]) => (s[d] = xe(u, t), s),
      {}
    ), i), {}),
    compoundVariants: n.map((i) => [
      i.variants,
      xe(i.style, t)
    ])
  };
}
function yr(e, t) {
  const { variantClassNames: r = {}, compoundVariants: o = [] } = e, n = [];
  for (const i in t) {
    const l = t[i];
    l != null && n.push(r[i]?.[String(l)]);
  }
  for (const [i, l] of o)
    pt(i, t) && n.push(l);
  return n;
}
function Ns(e) {
  let t, r;
  const o = Ke((n) => {
    t = ee(e, n), r = br(t, n);
  });
  return function(n = {}) {
    const i = ge();
    return o(i), B(() => {
      if (t == null || r == null)
        return "";
      const l = {
        ...t.defaultVariants,
        ...Se(n)
      }, a = yr(r, l);
      return kt(r.baseClassName, a);
    });
  };
}
const Fn = {
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
}, Hn = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, jn = {
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
}, Vn = {
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
}, Nn = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Gn = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0
}, qn = {
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
}, Kn = {
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
}, Un = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, Yn = {
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
}, Xn = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, Zn = {
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
}, Jn = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, Qn = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, ei = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0
}, ti = {
  objectFit: !0,
  objectPosition: !0
}, ri = {
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
}, oi = {
  ...Fn,
  ...Hn,
  ...jn,
  ...Vn,
  ...Nn,
  ...Gn,
  ...qn,
  ...Kn,
  ...Un,
  ...Yn,
  ...Xn,
  ...Zn,
  ...Jn,
  ...Qn,
  ...ei,
  ...ti,
  ...ri
};
function ni(e) {
  return Object.keys(e).filter((t) => t in oi);
}
const Cr = /* @__PURE__ */ new Map([
  ["htmlWidth", "width"],
  ["htmlHeight", "height"],
  ["htmlSize", "size"]
]);
function ii(e) {
  return Object.entries(e).reduce((t, [r, o]) => {
    const n = Cr.get(r);
    return n != null && o != null && (t[n] = o), t;
  }, {});
}
const si = ar({});
function ct(e, t, r) {
  let o, n, i = [];
  const l = Ke((s) => {
    t != null && (o = ee(t, s), n = br(o, s), i = o.variants ? Object.keys(o.variants) : []);
  }), a = (s) => {
    const d = ge();
    l(d);
    const [u, h, c, f, p] = y(
      s,
      ["as", "class", "sx", "__css"],
      [...Cr.keys()],
      i,
      ni(s)
    ), S = B(() => {
      if (n == null)
        return [];
      const C = {
        ...o?.defaultVariants,
        ...Se(c)
      };
      return yr(n, C);
    }), w = B(() => {
      const C = Object.assign({}, u.__css, Se(f), ...to(u.sx).map((v) => ee(v, d)));
      if (!tr(C))
        return si({
          css: Je(C, d)
        }).className;
    });
    return g(lo, b({
      get component() {
        return u.as ?? e;
      },
      get class() {
        return kt(r, n?.baseClassName, ...S(), w(), u.class) || void 0;
      }
    }, () => ii(h), p));
  };
  return r != null && (a.toString = () => `.${r}`), a;
}
function ai() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(ct, {
    apply(t, r, o) {
      return ct(...o);
    },
    get(t, r) {
      return e.has(r) || e.set(r, ct(r)), e.get(r);
    }
  });
}
const x = ai(), li = /* @__PURE__ */ ue('<style id="stitches" $serveronly></style>', 2);
function Gs() {
  ao(() => (() => {
    const e = li.cloneNode(!0);
    return mt(() => e.innerHTML = Jo()), e;
  })());
}
const ci = lr({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), qs = lr({
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
const xr = oe();
function di() {
  const e = ne(xr);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function Ks(e, t) {
  const { colorMode: r } = di();
  return B(() => r() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const et = "hope-ui-color-mode";
function ui(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get: (t) => {
      if (Ue)
        return t;
      let r;
      try {
        r = localStorage.getItem(e);
      } catch {
      }
      return r ?? t;
    },
    set: (t) => {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const gi = ui(et);
function jt(e, t) {
  return e.match(new RegExp(`(^| )${t}=([^;]+)`))?.[2];
}
function Sr(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (r) => t ? jt(t, e) ?? r : Ue ? r : jt(document.cookie, e) ?? r,
    set: (r) => {
      document.cookie = `${e}=${r}; max-age=31536000; path=/`;
    }
  };
}
const Us = Sr(et);
function Ys(e) {
  return Sr(et, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function vr() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function hi() {
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
function fi(e) {
  document.body.classList.add(e ? ce.dark : ce.light), document.body.classList.remove(e ? ce.light : ce.dark);
}
function pi(e, t = !0) {
  const r = t ? hi() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, r?.();
}
function kr(e) {
  return vr().matches ?? e === "dark" ? "dark" : "light";
}
function mi(e) {
  const t = "light", r = e.get(t) ?? t;
  return r === "system" ? Ue ? t : kr() : r;
}
function bi(e) {
  const t = vr(), r = (o) => {
    e(o.matches ? "dark" : "light");
  };
  return t.addEventListener("change", r), () => {
    t.removeEventListener("change", r);
  };
}
function yi(e) {
  const t = () => e.initialColorMode ?? "system", r = () => e.storageManager ?? gi;
  let o;
  const [n, i] = W(mi(r())), l = (u) => {
    i(u), fi(u === "dark"), pi(u, e.disableTransitionOnChange);
  }, a = (u) => {
    o && (o(), o = void 0);
    const h = u === "system";
    h && (o = bi(l)), l(h ? kr() : u), r().set(u);
  }, s = () => {
    a(n() === "dark" ? "light" : "dark");
  };
  ie(() => {
    a(r().get() ?? t());
  }), H(() => {
    o?.();
  });
  const d = {
    colorMode: n,
    setColorMode: a,
    toggleColorMode: s
  };
  return g(xr.Provider, {
    value: d,
    get children() {
      return e.children;
    }
  });
}
function wr(e) {
  return e == null ? {} : {
    overflow: X(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: X(e, (t) => t != null ? "ellipsis" : void 0),
    display: X(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: X(e, (t) => t ?? void 0),
    WebkitBoxOrient: X(e, (t) => t != null ? "vertical" : void 0)
  };
}
function L(e, t) {
  return bt(e, t);
}
function N(e, t) {
  return `rgb(${e} / ${t})`;
}
const Ci = /* @__PURE__ */ ue('<script id="hope-ui-color-mode-script"><\/script>', 2), _r = "system", xi = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function Si(e) {
  return xi.has(e) ? e : _r;
}
function Xs(e) {
  e = L({
    initialColorMode: _r,
    storageType: "localStorage",
    storageKey: et
  }, e);
  const t = B(() => {
    const r = Si(e.initialColorMode), o = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${r}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, n = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${r}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? o : n}`.trim();
  });
  return (() => {
    const r = Ci.cloneNode(!0);
    return mt((o) => {
      const n = e.nonce, i = t();
      return n !== o._v$ && nr(r, "nonce", o._v$ = n), i !== o._v$2 && (r.innerHTML = o._v$2 = i), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const Vt = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function Ir(e) {
  const [t, r] = W(), [o, n] = W(), i = B(() => e.overlayTransitionOptions ? L(Vt, e.overlayTransitionOptions) : Vt), l = Ze(() => e.isOpen, i);
  let a;
  const s = (c) => {
    a = c.target;
  }, d = (c) => {
    c.key === "Escape" && (c.stopPropagation(), e.closeOnEsc && e.onClose(), e.onEscKeyDown?.());
  }, u = (c) => {
    c.stopPropagation(), a === c.target && (e.closeOnOverlayClick && e.onClose(), e.onOverlayClick?.());
  }, h = () => {
    e.onClose();
  };
  return go({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: r,
    descriptionId: o,
    setDescriptionId: n,
    overlayTransition: l,
    onContainerMouseDown: s,
    onContainerKeyDown: d,
    onContainerClick: u,
    onCloseButtonClick: h
  };
}
const vi = K((e) => ({
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
        light: N(e.vars.colors.neutral.darkChannel, 0.75),
        dark: N(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));
function Rr(e) {
  var t, r, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Rr(e[t])) && (o && (o += " "), o += r);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function k() {
  for (var e, t, r = 0, o = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Rr(e)) && (o && (o += " "), o += t);
  return o;
}
const ki = /* @__PURE__ */ ue('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>', 4, !0), Nt = {
  viewBox: "0 0 24 24",
  path: () => ki.cloneNode(!0)
}, Gt = x("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), wi = (e) => {
  e = L({
    children: Nt.path,
    viewBox: Nt.viewBox,
    color: "currentColor"
  }, e);
  const [t, r] = y(e, ["as", "children", "viewBox"]), o = () => t.as && !ro(t.as);
  return g(D, {
    get when() {
      return o();
    },
    get fallback() {
      return g(Gt, b({
        get viewBox() {
          return t.viewBox;
        },
        verticalAlign: "middle"
      }, r, {
        get children() {
          return t.children;
        }
      }));
    },
    get children() {
      return g(Gt, b({
        get as() {
          return t.as;
        }
      }, r));
    }
  });
};
function zr(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: r = {}
  } = e;
  return (o) => g(wi, b({
    viewBox: t
  }, r, o, {
    get children() {
      return e.path;
    }
  }));
}
const _i = /* @__PURE__ */ ue('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>', 8, !0), Ii = /* @__PURE__ */ ue('<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>', 4, !0), Ri = zr({
  path: () => _i.cloneNode(!0)
}), zi = zr({
  path: () => Ii.cloneNode(!0)
}), Oi = K(
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
        ...vt(e.vars),
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
), wt = (e) => {
  e = J("CloseButton", {
    "aria-label": "Close",
    children: () => g(zi, {})
  }, e);
  const [t, r, o] = y(e, ["class"], [...Z, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Oi("CloseButton", r);
  return g(x.button, b({
    type: "button",
    get class() {
      return k(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, o));
}, Or = oe();
function Me() {
  const e = ne(Or);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const $i = (e) => {
  const t = Me();
  e = L({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [r, o] = y(e, ["class", "onClick"]);
  return g(wt, b({
    get class() {
      return k("hope-Modal-closeButton", r.class);
    },
    onClick: (i) => {
      i.stopPropagation(), $(r.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, $r = {
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
}, Bi = x("span", {
  baseStyle: $r
}), Zs = x("input", {
  baseStyle: $r
}), _t = (e) => {
  let t, r;
  e = L({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [o, n] = y(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), i = () => {
    if (!r)
      return;
    const d = r.querySelector(o.initialFocusSelector);
    if (d) {
      me(d);
      return;
    }
    if (o.autoFocus) {
      const u = Bt(r)[0] ?? r;
      me(u);
    }
  }, l = () => {
    if (o.restoreFocusSelector) {
      t = document.querySelector(o.restoreFocusSelector);
      return;
    }
    o.restoreFocus && (t = $t());
  }, a = () => {
    if (!r)
      return !1;
    const d = $t(r);
    return !d || Ve(r, d) ? !1 : oo(d);
  }, s = (d) => {
    if (!r)
      return;
    const u = Bt(r).slice(1, -1);
    if (!u.length) {
      me(r);
      return;
    }
    const h = u[0], c = u[u.length - 1];
    d.relatedTarget === h ? me(c) : me(h);
  };
  return ke(() => {
    l(), i();
  }), H(() => {
    !t || a() || me(t);
  }), g(x.div, b({
    ref(d) {
      const u = ve((h) => r = h, o.ref);
      typeof u == "function" && u(d);
    },
    tabIndex: -1
  }, n, {
    get children() {
      return [g(D, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return g(qt, {
            onFocus: s
          });
        }
      }), Ee(() => e.children), g(D, {
        get when() {
          return o.trapFocus;
        },
        get children() {
          return g(qt, {
            onFocus: s
          });
        }
      })];
    }
  }));
}, qt = (e) => g(Bi, b({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e)), Ti = (e) => {
  const t = Me(), [r, o] = y(e, ["class", "style", "onClick"]), n = (l) => {
    l.stopPropagation(), $(r.onClick, l);
  }, i = B(() => ({
    ...r.style,
    ...t.contentTransition.style()
  }));
  return g(_t, {
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
      return g(x.section, b({
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
          return k(t.baseClasses().content, r.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: n
      }, o));
    }
  });
}, Ei = (e) => {
  const t = Me(), [r, o] = y(e, ["class"]);
  return ie(() => {
    t.setDescriptionId(`${t.contentId()}-description`), H(() => t.setDescriptionId(void 0));
  }), g(x.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return k(t.baseClasses().description, r.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, o));
}, Ai = (e) => {
  const t = Me(), [r, o] = y(e, ["class"]);
  return ie(() => {
    t.setHeadingId(`${t.contentId()}-heading`), H(() => t.setHeadingId(void 0));
  }), g(x.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return k(t.baseClasses().heading, r.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, o));
}, Mi = (e) => {
  const t = Me(), [r, o] = y(e, ["class", "style", "children"]), n = B(() => ({
    ...r.style,
    ...t.overlayTransition.style()
  }));
  return g(x.div, b({
    role: "presentation",
    get class() {
      return k(t.baseClasses().overlay, r.class);
    },
    get style() {
      return n();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, o));
}, We = (e) => {
  e = J("Modal", {
    id: `hope-modal-${Xe()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = y(e, [...Z, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: r,
    styleOverrides: o
  } = vi("Modal", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: l,
    setDescriptionId: a,
    overlayTransition: s,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: h,
    onCloseButtonClick: c
  } = Ir(e), f = Ze(() => e.isOpen, () => L({
    transition: "pop",
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), p = {
    baseClasses: r,
    styleOverrides: o,
    isOpen: () => e.isOpen,
    contentTransition: f,
    overlayTransition: s,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: l,
    setDescriptionId: a,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: h,
    onCloseButtonClick: c
  };
  return g(D, {
    get when() {
      return Ee(() => !!s.keepMounted())() && f.keepMounted();
    },
    get children() {
      return g(Ye, {
        get children() {
          return g(Or.Provider, {
            value: p,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
We.Overlay = Mi;
We.Content = Ti;
We.CloseButton = $i;
We.Heading = Ai;
We.Description = Ei;
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
const Wi = typeof document < "u" ? document : void 0, Di = "body > :not(script, style)", dt = '[aria-modal="true"], [data-ismodal="true"]';
function Kt(e, t) {
  const r = Array.from(e.querySelectorAll(Di)).filter((o) => !o.contains(t)).map((o) => {
    const n = o.getAttribute("aria-hidden") || "";
    return o.setAttribute("aria-hidden", "true"), { element: o, previousAriaHidden: n };
  });
  return () => {
    r.forEach(({ element: o, previousAriaHidden: n }) => {
      n ? o.setAttribute("aria-hidden", n) : o.removeAttribute("aria-hidden");
    });
  };
}
function Li(e = "body", { document: t = Wi } = {}) {
  const r = t?.querySelector(e);
  if (t == null || r == null)
    return no;
  const o = { childList: !0 };
  let n = [], i;
  const l = new MutationObserver((a) => {
    for (const s of a)
      if (s.type === "childList") {
        if (s.addedNodes.length > 0) {
          const d = Array.from(s.addedNodes).find(
            (u) => u.querySelector?.(dt)
          );
          if (d) {
            n.push(d);
            const u = d.querySelector(dt);
            i?.(), i = Kt(t, u);
          }
        } else if (s.removedNodes.length > 0) {
          const d = Array.from(s.removedNodes), u = n.findIndex(
            (h) => d.includes(h)
          );
          if (u >= 0)
            if (i?.(), n = n.filter((h, c) => c !== u), n.length > 0) {
              const h = n[n.length - 1].querySelector(dt);
              i = Kt(t, h);
            } else
              i = void 0;
        }
      }
  });
  return l.observe(r, o), () => {
    i?.(), l.disconnect();
  };
}
function Js(e) {
  Li(), e = L({
    withCssReset: !0
  }, e);
  const [t, r] = y(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return g(yi, {
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
      return g(Pn, r);
    }
  });
}
const Pi = K(({ vars: e }) => ({
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
      ...vt(e)
    }
  }
})), Qs = (e) => {
  e = J("Anchor", {}, e);
  const [t, r, o] = y(e, ["class", "isExternal"], Z), {
    baseClasses: n,
    styleOverrides: i
  } = Pi("Anchor", r);
  return g(x.a, b({
    get class() {
      return k(n().root, t.class);
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
  }, o));
}, Fi = x("div", {
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
}, "hope-AspectRatio-root"), ea = (e) => {
  e = L({
    ratio: 4 / 3
  }, e);
  const [t, r] = y(e, ["ratio"]);
  return g(Fi, b({
    get _before() {
      return {
        pb: X(t.ratio, (o) => `${1 / o * 100}%`)
      };
    }
  }, r));
};
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */
const ta = x("div"), tt = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function Hi(e) {
  const t = [];
  for (const r of tt) {
    const o = r === "neutral", n = r === "warning";
    t.push({
      variants: {
        variant: "solid",
        colorScheme: r
      },
      style: {
        color: n ? e.colors[r][900] : "common.white",
        backgroundColor: e.colors[r][o ? "800" : n ? "300" : "500"],
        borderColor: e.colors[r][o ? "800" : n ? "300" : "500"],
        _hover: {
          color: n ? e.colors[r][900] : "common.white",
          backgroundColor: e.colors[r][o ? "700" : n ? "400" : "600"],
          borderColor: e.colors[r][o ? "700" : n ? "400" : "600"]
        },
        _active: {
          color: n ? e.colors[r][900] : "common.white",
          backgroundColor: e.colors[r][o ? "600" : n ? "500" : "700"],
          borderColor: e.colors[r][o ? "600" : n ? "500" : "700"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.100",
          borderColor: "neutral.100"
        },
        _dark: {
          color: n ? e.colors[r][900] : "whiteAlpha.900",
          backgroundColor: e.colors[r][n ? "500" : "700"],
          borderColor: e.colors[r][n ? "500" : "700"],
          _hover: {
            color: n ? e.colors[r][900] : "whiteAlpha.900",
            backgroundColor: e.colors[r][n ? "400" : "600"],
            borderColor: e.colors[r][n ? "400" : "600"]
          },
          _active: {
            color: n ? e.colors[r][900] : "whiteAlpha.900",
            backgroundColor: e.colors[r][n ? "300" : "500"],
            borderColor: e.colors[r][n ? "300" : "500"]
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
function ji(e) {
  const t = [];
  for (const r of tt) {
    const o = r === "neutral", n = r === "warning";
    t.push({
      variants: {
        variant: "soft",
        colorScheme: r
      },
      style: {
        color: e.colors[r][n ? "900" : "700"],
        backgroundColor: e.colors[r][o ? "200" : n ? "100" : "50"],
        borderColor: e.colors[r][o ? "200" : n ? "100" : "50"],
        _hover: {
          color: e.colors[r][n ? "900" : "800"],
          backgroundColor: e.colors[r][o ? "300" : n ? "200" : "100"],
          borderColor: e.colors[r][o ? "300" : n ? "200" : "100"]
        },
        _active: {
          color: e.colors[r][n ? "900" : "800"],
          backgroundColor: e.colors[r][o ? "400" : n ? "300" : "200"],
          borderColor: e.colors[r][o ? "400" : n ? "300" : "200"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.50",
          borderColor: "neutral.50"
        },
        _dark: {
          color: e.colors[r][200],
          backgroundColor: N(e.colors[r].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[r][200],
            backgroundColor: N(e.colors[r].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[r][200],
            backgroundColor: N(e.colors[r].mainChannel, 0.4),
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
function Vi(e) {
  const t = [];
  for (const r of tt) {
    const o = r === "neutral", n = r === "warning";
    t.push({
      variants: {
        variant: "outlined",
        colorScheme: r
      },
      style: {
        color: e.colors[r][n ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: e.colors[r][o || n ? "400" : "300"],
        _hover: {
          color: e.colors[r][n ? "800" : "700"],
          backgroundColor: e.colors[r][o || n ? "100" : "50"],
          borderColor: e.colors[r][o || n ? "500" : "400"]
        },
        _active: {
          color: e.colors[r][n ? "800" : "700"],
          backgroundColor: e.colors[r][o || n ? "200" : "100"],
          borderColor: e.colors[r][o || n ? "500" : "400"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "neutral.100"
        },
        _dark: {
          color: e.colors[r][200],
          backgroundColor: "transparent",
          borderColor: e.colors[r][800],
          _hover: {
            color: e.colors[r][200],
            backgroundColor: N(e.colors[r].mainChannel, 0.1),
            borderColor: e.colors[r][700]
          },
          _active: {
            color: e.colors[r][200],
            backgroundColor: N(e.colors[r].mainChannel, 0.2),
            borderColor: e.colors[r][700]
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
function Ni(e) {
  const t = [];
  for (const r of tt) {
    const o = r === "neutral", n = r === "warning";
    t.push({
      variants: {
        variant: "plain",
        colorScheme: r
      },
      style: {
        color: e.colors[r][n ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: "transparent",
        _hover: {
          color: e.colors[r][n ? "800" : "700"],
          backgroundColor: e.colors[r][o || n ? "100" : "50"],
          borderColor: e.colors[r][o || n ? "100" : "50"]
        },
        _active: {
          color: e.colors[r][n ? "800" : "700"],
          backgroundColor: e.colors[r][o || n ? "200" : "100"],
          borderColor: e.colors[r][o || n ? "200" : "100"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "transparent"
        },
        _dark: {
          color: e.colors[r][200],
          backgroundColor: "transparent",
          borderColor: "transparent",
          _hover: {
            color: e.colors[r][200],
            backgroundColor: N(e.colors[r].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[r][200],
            backgroundColor: N(e.colors[r].mainChannel, 0.2),
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
const Be = /* @__PURE__ */ new Map([
  ["xs", "7"],
  ["sm", "8"],
  ["md", "10"],
  ["lg", "12"]
]);
function Gi() {
  const e = [];
  for (const [t, r] of Be)
    e.push({
      variants: {
        isIconButton: !0,
        size: t
      },
      style: {
        width: r,
        p: 0
      }
    });
  return e;
}
const qi = K(
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
        ...vt(e)
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
            height: Be.get("xs"),
            px: 3,
            fontSize: "xs"
          },
          sm: {
            height: Be.get("sm"),
            px: 4,
            fontSize: "sm"
          },
          md: {
            height: Be.get("md"),
            px: 5,
            fontSize: "base"
          },
          lg: {
            height: Be.get("lg"),
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
        ...Hi(e),
        ...ji(e),
        ...Vi(e),
        ...Ni(e),
        ...Gi()
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
        animation: `1s linear infinite ${ci}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), Br = oe();
function It() {
  const e = ne(Br);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const Ki = x("div", {
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
}, "hope-ButtonGroup-root"), Tr = oe();
function Ui() {
  return ne(Tr);
}
const ra = (e) => {
  e = L({}, e);
  const [t, r, o] = y(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return g(Tr.Provider, {
    value: r,
    get children() {
      return g(Ki, b({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, o));
    }
  });
}, Ut = (e) => {
  const t = It(), [r, o] = y(e, ["class", "__css"]);
  return g(x.span, b({
    "aria-hidden": !0,
    get class() {
      return k(t.baseClasses().icon, r.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().icon,
        ...r.__css
      };
    }
  }, o));
}, Yt = (e) => {
  const t = It(), [r, o] = y(e, ["class", "children", "hasLoadingText"]);
  return g(x.div, b({
    get class() {
      return k(t.baseClasses().loaderWrapper, r.class);
    },
    get position() {
      return r.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return t.styleOverrides().loaderWrapper;
    }
  }, o, {
    get children() {
      return g(D, {
        get when() {
          return r.children;
        },
        get fallback() {
          return g(Ri, {
            get class() {
              return t.baseClasses().loaderIcon;
            },
            get __css() {
              return t.styleOverrides().loaderIcon;
            }
          });
        },
        get children() {
          return r.children;
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
const Yi = ["button", "color", "file", "image", "reset", "submit"];
function Xt(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? Yi.indexOf(e.type) !== -1 : !1;
}
const Xi = /* @__PURE__ */ ue("<span></span>", 2), Zi = (e) => {
  let t;
  const r = Ui(), o = L({
    get variant() {
      return r?.variant;
    },
    get colorScheme() {
      return r?.colorScheme;
    },
    get size() {
      return r?.size;
    },
    get isDisabled() {
      return r?.isDisabled;
    }
  }, e);
  e = J("Button", {
    loaderPlacement: "start"
  }, o);
  const [n, i, l, a] = y(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...Z, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), s = ho(() => t, () => e.as || "button"), [d, u] = W(s() != null && Xt({
    tagName: s(),
    type: n.type
  })), h = B(() => n.type != null ? n.type : d() ? "button" : void 0), {
    baseClasses: c,
    styleOverrides: f
  } = qi("Button", l);
  return ke(() => {
    t != null && u(Xt(t));
  }), g(Br.Provider, {
    value: {
      baseClasses: c,
      styleOverrides: f
    },
    get children() {
      return g(x.button, b({
        get as() {
          return n.as;
        },
        ref(p) {
          const S = ve((w) => t = w, n.ref);
          typeof S == "function" && S(p);
        },
        get role() {
          return !d() && s() !== "a" ? "button" : void 0;
        },
        get type() {
          return h();
        },
        get tabIndex() {
          return d() ? void 0 : 0;
        },
        get disabled() {
          return n.isDisabled;
        },
        get ["data-loading"]() {
          return n.isLoading || void 0;
        },
        get class() {
          return k(c().root, n.class);
        },
        get __css() {
          return f().root;
        }
      }, a, {
        get children() {
          return [g(D, {
            get when() {
              return n.isLoading && n.loaderPlacement === "start";
            },
            get children() {
              return g(Yt, {
                get hasLoadingText() {
                  return !!n.loadingText;
                },
                get children() {
                  return n.loader;
                }
              });
            }
          }), g(D, {
            get when() {
              return n.isLoading;
            },
            get fallback() {
              return g(Zt, i);
            },
            get children() {
              return g(D, {
                get when() {
                  return n.loadingText;
                },
                get fallback() {
                  return (() => {
                    const p = Xi.cloneNode(!0);
                    return p.style.setProperty("opacity", "0"), co(p, g(Zt, i)), p;
                  })();
                },
                get children() {
                  return n.loadingText;
                }
              });
            }
          }), g(D, {
            get when() {
              return n.isLoading && n.loaderPlacement === "end";
            },
            get children() {
              return g(Yt, {
                get hasLoadingText() {
                  return !!n.loadingText;
                },
                get children() {
                  return n.loader;
                }
              });
            }
          })];
        }
      }));
    }
  });
};
function Zt(e) {
  const t = It();
  return [g(D, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return g(Ut, {
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
  }), Ee(() => e.children), g(D, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return g(Ut, {
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
const oa = (e) => g(Zi, b({
  isIconButton: !0
}, e));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const na = x("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), Ji = x("div", ({
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
}), "hope-Container-root"), ia = (e) => {
  e = L({
    isCentered: !0
  }, e);
  const [t, r] = y(e, ["isCentered"]);
  return g(Ji, b({
    get mx() {
      return X(t.isCentered, (o) => o ? "auto" : void 0);
    }
  }, r));
}, Qi = K(
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
), sa = (e) => {
  e = J("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, r, o] = y(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), n = uo(() => e.children), i = () => !!n(), l = () => r.orientation === "vertical", a = B(() => {
    const u = l() ? "borderLeftStyle" : "borderTopStyle", h = l() ? "borderLeftWidth" : "borderTopWidth";
    return i() ? {
      _before: {
        [u]: t.variant,
        [h]: t.thickness
      },
      _after: {
        [u]: t.variant,
        [h]: t.thickness
      }
    } : {
      [u]: t.variant,
      [h]: t.thickness
    };
  }), {
    baseClasses: s,
    styleOverrides: d
  } = Qi("Divider", {
    get orientation() {
      return r.orientation;
    },
    get labelPlacement() {
      return r.labelPlacement;
    },
    get withLabel() {
      return i();
    },
    get styleConfigOverride() {
      return r.styleConfigOverride;
    },
    get unstyled() {
      return r.unstyled;
    }
  });
  return g(x.hr, b({
    get as() {
      return i() ? "div" : "hr";
    },
    get role() {
      return i() ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return l() ? "vertical" : "horizontal";
    },
    get class() {
      return k(s().root, t.class);
    },
    get __css() {
      return {
        ...d().root,
        ...a()
      };
    }
  }, o, {
    get children() {
      return g(D, {
        get when() {
          return i();
        },
        get children() {
          return g(x.span, b({
            get class() {
              return s().label;
            },
            get __css() {
              return d().label;
            }
          }, () => t.labelProps, {
            get children() {
              return n();
            }
          }));
        }
      });
    }
  }));
}, es = K((e) => ({
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
        light: N(e.vars.colors.neutral.darkChannel, 0.75),
        dark: N(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), Er = oe();
function De() {
  const e = ne(Er);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const ts = (e) => {
  const t = De();
  e = L({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [r, o] = y(e, ["class", "onClick"]);
  return g(wt, b({
    get class() {
      return k("hope-Drawer-closeButton", r.class);
    },
    onClick: (i) => {
      i.stopPropagation(), $(r.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, rs = (e) => {
  const t = De(), [r, o] = y(e, ["class", "style", "onClick"]), n = (l) => {
    l.stopPropagation(), $(r.onClick, l);
  }, i = B(() => ({
    ...r.style,
    ...t.contentTransition.style()
  }));
  return g(_t, {
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
      return g(x.section, b({
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
          return k(t.baseClasses().content, r.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: n
      }, o));
    }
  });
}, os = (e) => {
  const t = De(), [r, o] = y(e, ["class"]);
  return ie(() => {
    t.setDescriptionId(`${t.contentId()}-description`), H(() => t.setDescriptionId(void 0));
  }), g(x.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return k(t.baseClasses().description, r.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, o));
}, ns = (e) => {
  const t = De(), [r, o] = y(e, ["class"]);
  return ie(() => {
    t.setHeadingId(`${t.contentId()}-heading`), H(() => t.setHeadingId(void 0));
  }), g(x.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return k(t.baseClasses().heading, r.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, o));
}, is = (e) => {
  const t = De(), [r, o] = y(e, ["class", "style", "children"]), n = B(() => ({
    ...r.style,
    ...t.overlayTransition.style()
  }));
  return g(x.div, b({
    role: "presentation",
    get class() {
      return k(t.baseClasses().overlay, r.class);
    },
    get style() {
      return n();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, o));
}, ss = {
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
}, Le = (e) => {
  e = J("Drawer", {
    id: `hope-drawer-${Xe()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = y(e, [...Z, "size", "placement"]), {
    baseClasses: r,
    styleOverrides: o
  } = es("Drawer", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: l,
    setDescriptionId: a,
    overlayTransition: s,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: h,
    onCloseButtonClick: c
  } = Ir(e), f = Ze(() => e.isOpen, () => L({
    transition: ss[e.placement],
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), p = {
    baseClasses: r,
    styleOverrides: o,
    isOpen: () => e.isOpen,
    contentTransition: f,
    overlayTransition: s,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: l,
    setDescriptionId: a,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: d,
    onContainerKeyDown: u,
    onContainerClick: h,
    onCloseButtonClick: c
  };
  return g(D, {
    get when() {
      return Ee(() => !!s.keepMounted())() && f.keepMounted();
    },
    get children() {
      return g(Ye, {
        get children() {
          return g(Er.Provider, {
            value: p,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
Le.Overlay = is;
Le.Content = rs;
Le.CloseButton = ts;
Le.Heading = ns;
Le.Description = os;
const aa = (e) => {
  const [t, r] = y(e, ["class", "direction", "wrap", "align", "justify"]);
  return g(x.div, b({
    get class() {
      return k("hope-Flex-root", t.class);
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
  }, r));
}, Jt = {
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
}, as = K(
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
        ...Jt,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...Jt,
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
), Ar = oe();
function Rt() {
  return ne(Ar);
}
function zt() {
  const e = Rt();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const ls = (e) => {
  const t = zt(), [r, o] = y(e, ["id", "class", "__css"]), n = () => r.id ?? t.descriptionId();
  return ke(() => t.setHasDescription(!0)), H(() => t.setHasDescription(!1)), g(x.div, b({
    get id() {
      return n();
    },
    get ["data-required"]() {
      return R(t.isRequired());
    },
    get ["data-disabled"]() {
      return R(t.isDisabled());
    },
    get ["data-readonly"]() {
      return R(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return R(t.isInvalid());
    },
    get class() {
      return k(t.baseClasses().description, r.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().description,
        ...r.__css
      };
    }
  }, o));
}, cs = (e) => {
  const t = zt(), [r, o] = y(e, ["id", "class", "__css"]), n = () => r.id ?? t.errorId();
  return ke(() => t.setHasError(!0)), H(() => t.setHasError(!1)), g(x.div, b({
    "aria-live": "polite",
    get id() {
      return n();
    },
    get ["data-required"]() {
      return R(t.isRequired());
    },
    get ["data-disabled"]() {
      return R(t.isDisabled());
    },
    get ["data-readonly"]() {
      return R(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return R(t.isInvalid());
    },
    get class() {
      return k(t.baseClasses().error, r.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().error,
        ...r.__css
      };
    }
  }, o));
}, ds = (e) => {
  const t = zt(), [r, o] = y(e, ["id", "for", "class", "__css"]), n = () => r.id ?? t.labelId(), i = () => r.for ?? t.id();
  return g(x.label, b({
    get id() {
      return n();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return R(t.isRequired());
    },
    get ["data-disabled"]() {
      return R(t.isDisabled());
    },
    get ["data-readonly"]() {
      return R(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return R(t.isInvalid());
    },
    get class() {
      return k(t.baseClasses().label, r.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().label,
        ...r.__css
      };
    }
  }, o));
}, Ot = (e) => {
  e = J("FormControl", {
    id: `hope-form-control-${Xe()}`
  }, e);
  const [t, r, o] = y(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...Z, "withRequiredIndicator"]), [n, i] = W(!1), [l, a] = W(!1), {
    baseClasses: s,
    styleOverrides: d
  } = as("FormControl", r), u = () => `${e.id}-description`, h = () => `${e.id}-error`, c = () => e.isInvalid, p = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: u,
    errorId: h,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: c,
    unstyled: () => r.unstyled,
    baseClasses: s,
    styleOverrides: d,
    hasDescription: n,
    setHasDescription: i,
    hasError: l,
    setHasError: a,
    mergeAriaDescribedBy: (S) => {
      const w = S ? [S] : [];
      return l() && c() && w.push(h()), n() && w.push(u()), w.join(" ") || void 0;
    }
  };
  return g(Ar.Provider, {
    value: p,
    get children() {
      return g(x.div, b({
        role: "group",
        get ["data-required"]() {
          return R(p.isRequired());
        },
        get ["data-disabled"]() {
          return R(p.isDisabled());
        },
        get ["data-readonly"]() {
          return R(p.isReadOnly());
        },
        get ["data-invalid"]() {
          return R(p.isInvalid());
        },
        get class() {
          return k(s().root, t.class);
        },
        get __css() {
          return d().root;
        }
      }, o));
    }
  });
};
Ot.Label = ds;
Ot.Description = ls;
Ot.Error = cs;
const us = (e) => {
  const [t, r] = y(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return g(x.div, b({
    get class() {
      return k("hope-GridItem-root", t.class);
    },
    get __css() {
      return Se({
        gridArea: t.area,
        gridColumn: Qt(t.colSpan),
        gridRow: Qt(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, r));
};
function Qt(e) {
  return X(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const Mr = (e) => {
  const [t, r] = y(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return g(x.div, b({
    get class() {
      return k("hope-Grid-root", t.class);
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
  }, r));
};
Mr.Item = us;
const la = (e) => {
  const [t, r] = y(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), o = ge(), n = () => t.minChildWidth ? gs(t.minChildWidth, o.vars) : hs(t.columns);
  return g(Mr, b({
    get templateColumns() {
      return n();
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
  }, r));
};
function gs(e, t) {
  return X(e, (r) => {
    const o = gr(r, "sizes", t);
    return or(r) ? null : `repeat(auto-fit, minmax(${o}, 1fr))`;
  });
}
function hs(e) {
  return X(e, (t) => or(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const fs = K({
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
}), ca = (e) => {
  e = J("Heading", {}, e);
  const [t, r, o] = y(e, ["as", "class", "level", "lineClamp"], [...Z, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = fs("Heading", r), l = () => t.level ? `h${t.level}` : t.as, a = B(() => ({
    ...i().root,
    ...wr(t.lineClamp)
  }));
  return g(x.h2, b({
    get as() {
      return l();
    },
    get class() {
      return k(n().root, t.class);
    },
    get __css() {
      return a();
    }
  }, o));
};
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
function ps(e) {
  const [t, r] = W("pending"), o = () => e.ignoreFallback ? "loaded" : t();
  let n = null;
  const i = () => {
    n && (n.onload = null, n.onerror = null, n = null);
  }, l = () => {
    if (!e.src)
      return;
    i();
    const a = new Image();
    a.src = e.src, e.crossOrigin && (a.crossOrigin = e.crossOrigin), e.srcSet && (a.srcset = e.srcSet), e.sizes && (a.sizes = e.sizes), e.loading && (a.loading = e.loading), a.onload = (s) => {
      i(), r("loaded"), $(e.onLoad, s);
    }, a.onerror = (s) => {
      i(), r("failed"), $(e.onError, s);
    }, n = a;
  };
  return ie(() => {
    r(e.src ? "loading" : "pending");
  }), ir(() => {
    e.ignoreFallback || (t() === "loading" && l(), H(() => {
      i();
    }));
  }), o;
}
const da = (e) => {
  const [t, r, o] = y(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), n = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = ps(bt(e, {
    get ignoreFallback() {
      return n();
    }
  })), l = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...n() ? r : {},
    ...o
  });
  return g(D, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return g(D, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return g(x.img, b({
            get src() {
              return t.fallbackSrc;
            },
            class: "hope-Image-placeholder"
          }, l));
        },
        get children() {
          return t.fallback;
        }
      });
    },
    get children() {
      return g(x.img, b({
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
          return k("hope-Image-root", t.class);
        }
      }, l));
    }
  });
}, ua = (e) => {
  const [t, r] = y(e, ["class"]);
  return g(x.img, b({
    get class() {
      return k("hope-Image-root", t.class);
    }
  }, r));
}, Wr = {
  variant: "outlined",
  size: "md"
}, Y = {
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
}, ms = K(
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
            light: `0 0 0 3px ${N(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${N(e.colors.primary.darkChannel, 0.75)}`
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
            light: `0 0 0 3px ${N(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${N(e.colors.danger.darkChannel, 0.75)}`
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
            ...Y.sm,
            px: 2.5
          },
          md: {
            ...Y.md,
            px: 3
          },
          lg: {
            ...Y.lg,
            px: 4
          }
        }
      }
    }
  }),
  Wr
), Dr = oe();
function Lr() {
  return ne(Dr);
}
function Pr() {
  const e = Lr();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const ga = (e) => {
  const t = Rt(), r = Lr();
  e = J("Input", {}, e);
  const [o, n, i] = y(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...Z, "variant", "size"]), {
    baseClasses: l,
    styleOverrides: a
  } = ms("Input", {
    get variant() {
      return r?.variant() ?? n.variant;
    },
    get size() {
      return r?.size() ?? n.size;
    },
    get styleConfigOverride() {
      return n.styleConfigOverride;
    },
    get unstyled() {
      return r?.unstyled() ?? n.unstyled;
    }
  }), s = () => o.isRequired ?? r?.isRequired() ?? t?.isRequired(), d = () => o.isDisabled ?? r?.isDisabled() ?? t?.isDisabled(), u = () => o.isReadOnly ?? r?.isReadOnly() ?? t?.isReadOnly(), h = () => o.isInvalid ?? r?.isInvalid() ?? t?.isInvalid(), c = () => t?.mergeAriaDescribedBy(o["aria-describedby"]);
  return g(x.input, b({
    type: "text",
    get id() {
      return o.id ?? t?.id();
    },
    get required() {
      return s();
    },
    get disabled() {
      return d();
    },
    get readOnly() {
      return u();
    },
    get ["aria-invalid"]() {
      return io(h());
    },
    get ["aria-describedby"]() {
      return c();
    },
    get size() {
      return o.htmlSize;
    },
    get class() {
      return k(r?.baseClasses().input, l().root, o.class);
    },
    get __css() {
      return {
        ...r?.styleOverrides().input,
        ...a().root,
        ...o.__css
      };
    }
  }, i));
};
function ut(e) {
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
const bs = K(
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
        ...ut({
          size: "sm",
          paddingWithSection: 8
        }),
        ...ut({
          size: "md",
          paddingWithSection: 10
        }),
        ...ut({
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
            ...Y.sm,
            height: "100%",
            width: Y.sm.minHeight
          },
          md: {
            ...Y.md,
            height: "100%",
            width: Y.md.minHeight
          },
          lg: {
            ...Y.lg,
            height: "100%",
            width: Y.lg.minHeight
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
            ...Y.sm,
            px: 2.5
          },
          md: {
            ...Y.md,
            px: 3
          },
          lg: {
            ...Y.lg,
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
  Wr
), Fr = (e) => {
  const t = Pr(), [r, o] = y(e, ["class", "__css", "addonPlacement"]), n = B(() => {
    switch (r.addonPlacement) {
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
  return ke(() => {
    switch (r.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), H(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), H(() => t.setHasRightAddon(!1));
        break;
    }
  }), g(x.div, b({
    get ["data-required"]() {
      return R(t.isRequired());
    },
    get ["data-disabled"]() {
      return R(t.isDisabled());
    },
    get ["data-readonly"]() {
      return R(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return R(t.isInvalid());
    },
    get class() {
      return k(t.baseClasses().addon, n().className, r.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().addon,
        ...n().styleOverride,
        ...r.__css
      };
    }
  }, o));
}, ys = (e) => g(Fr, b({
  addonPlacement: "left"
}, e)), Cs = (e) => g(Fr, b({
  addonPlacement: "right"
}, e)), Hr = (e) => {
  const t = Pr(), [r, o] = y(e, ["class", "__css", "sectionPlacement"]), n = B(() => {
    switch (r.sectionPlacement) {
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
  return ke(() => {
    switch (r.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), H(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), H(() => t.setHasRightSection(!1));
        break;
    }
  }), g(x.div, b({
    get ["data-required"]() {
      return R(t.isRequired());
    },
    get ["data-disabled"]() {
      return R(t.isDisabled());
    },
    get ["data-readonly"]() {
      return R(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return R(t.isInvalid());
    },
    get class() {
      return k(t.baseClasses().section, n().className, r.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().section,
        ...n().styleOverride,
        ...r.__css
      };
    }
  }, o));
}, xs = (e) => g(Hr, b({
  sectionPlacement: "left"
}, e)), Ss = (e) => g(Hr, b({
  sectionPlacement: "right"
}, e)), rt = (e) => {
  const t = Rt();
  e = J("InputGroup", {}, e);
  const [r, o, n] = y(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...Z, "variant", "size"]), [i, l] = W(!1), [a, s] = W(!1), [d, u] = W(!1), [h, c] = W(!1), {
    baseClasses: f,
    styleOverrides: p
  } = bs("InputGroup", {
    get variant() {
      return o.variant;
    },
    get size() {
      return o.size;
    },
    get hasLeftSection() {
      return i();
    },
    get hasRightSection() {
      return a();
    },
    get hasLeftAddon() {
      return d();
    },
    get hasRightAddon() {
      return h();
    },
    get styleConfigOverride() {
      return o.styleConfigOverride;
    },
    get unstyled() {
      return o.unstyled;
    }
  }), S = {
    isRequired: () => e.isRequired ?? t?.isRequired(),
    isDisabled: () => e.isDisabled ?? t?.isDisabled(),
    isReadOnly: () => e.isReadOnly ?? t?.isReadOnly(),
    isInvalid: () => e.isInvalid ?? t?.isInvalid(),
    variant: () => o.variant,
    size: () => o.size,
    unstyled: () => o.unstyled,
    baseClasses: f,
    styleOverrides: p,
    setHasLeftSection: l,
    setHasRightSection: s,
    setHasLeftAddon: u,
    setHasRightAddon: c
  };
  return g(Dr.Provider, {
    value: S,
    get children() {
      return g(x.div, b({
        get ["data-required"]() {
          return R(S.isRequired());
        },
        get ["data-disabled"]() {
          return R(S.isDisabled());
        },
        get ["data-readonly"]() {
          return R(S.isReadOnly());
        },
        get ["data-invalid"]() {
          return R(S.isInvalid());
        },
        get class() {
          return k(f().root, r.class);
        },
        get __css() {
          return p().root;
        }
      }, n));
    }
  });
};
rt.LeftAddon = ys;
rt.RightAddon = Cs;
rt.LeftSection = xs;
rt.RightSection = Ss;
const vs = K({
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
}), ha = (e) => {
  const [t, r, o] = y(e, ["class"], Z), {
    baseClasses: n,
    styleOverrides: i
  } = vs("Kbd", r);
  return g(x.kbd, b({
    get class() {
      return k(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, o));
}, ks = K((e) => ({
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
})), jr = oe();
function he() {
  const e = ne(jr);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const ws = (e) => {
  const t = he(), [r, o] = y(e, ["ref"]);
  return g(x.div, b({
    ref(n) {
      const i = ve(t.setAnchorRef, r.ref);
      typeof i == "function" && i(n);
    }
  }, o));
}, _s = (e) => {
  const t = he();
  e = L({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [r, o] = y(e, ["class", "onClick"]);
  return g(wt, b({
    get class() {
      return k("hope-Popover-closeButton", r.class);
    },
    onClick: (i) => {
      i.stopPropagation(), $(r.onClick, i), t.onCloseButtonClick();
    }
  }, o));
}, Is = /* @__PURE__ */ ue('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>', 8), Vr = 30, le = Vr / 2, Rs = {
  top: `rotate(180 ${le} ${le})`,
  right: `rotate(-90 ${le} ${le})`,
  bottom: `rotate(0 ${le} ${le})`,
  left: `rotate(90 ${le} ${le})`
}, zs = (e) => {
  const t = he(), [r, o] = y(e, ["ref", "class", "style", "children"]), n = () => t.currentPlacement().split("-")[0], i = Os(t.contentRef), l = () => i()?.getPropertyValue("background-color") || "none", a = () => i()?.getPropertyValue(`border-${n()}-color`) || "none", s = () => i()?.getPropertyValue(`border-${n()}-width`) || "0px", d = () => parseInt(s()) * 2 * (Vr / t.arrowSize());
  return g(x.div, b({
    ref(u) {
      const h = ve(t.setArrowRef, r.ref);
      typeof h == "function" && h(u);
    },
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: l(),
        stroke: a(),
        "stroke-width": d(),
        ...r.style
      };
    },
    get class() {
      return k(t.baseClasses().arrow, r.class);
    },
    get __css() {
      return t.styleOverrides().arrow;
    }
  }, o, {
    get children() {
      const u = Is.cloneNode(!0), h = u.firstChild;
      return h.firstChild.nextSibling, mt(() => nr(h, "transform", Rs[n()])), u;
    }
  }));
};
function Os(e) {
  const [t, r] = W();
  return ir(() => {
    const o = e();
    o && r(so(o).getComputedStyle(o));
  }), t;
}
const $s = (e) => {
  const t = he(), [r, o] = y(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", l = (h) => {
    h.stopPropagation(), $(r.onKeyDown, h), $(t.onContentKeyDown, h);
  }, a = (h) => {
    $(r.onFocusOut, h), $(t.onContentFocusOut, h);
  }, s = (h) => {
    $(r.onMouseEnter, h), i() && t.onContentMouseEnter();
  }, d = (h) => {
    $(r.onMouseLeave, h), i() && $(t.onContentMouseLeave, h);
  }, u = B(() => ({
    ...r.style,
    ...t.popoverTransition.style()
  }));
  return g(D, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return g(Ye, {
        get children() {
          return g(_t, b({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return n();
            },
            ref(h) {
              const c = ve(t.setContentRef, r.ref);
              typeof c == "function" && c(h);
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
              return k(t.baseClasses().root, r.class);
            },
            get style() {
              return u();
            },
            get __css() {
              return t.styleOverrides().root;
            },
            onKeyDown: l,
            onFocusOut: a,
            onMouseEnter: s,
            onMouseLeave: d
          }, o, {
            get children() {
              return [g(D, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return g(zs, {});
                }
              }), Ee(() => r.children)];
            }
          }));
        }
      });
    }
  });
}, Bs = (e) => {
  const t = he(), [r, o] = y(e, ["class"]);
  return ie(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), H(() => t.setDescriptionId(void 0));
  }), g(x.p, b({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return k(t.baseClasses().description, r.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, o));
}, Ts = (e) => {
  const t = he(), [r, o] = y(e, ["class"]);
  return ie(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), H(() => t.setHeadingId(void 0));
  }), g(x.h2, b({
    get id() {
      return t.headingId();
    },
    get class() {
      return k(t.baseClasses().heading, r.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, o));
}, Es = (e) => {
  const t = he(), [r, o] = y(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", l = (c) => {
    $(r.onClick, c), n() && (c.stopPropagation(), t.onTriggerClick());
  }, a = (c) => {
    $(r.onKeyDown, c), i() && (c.stopPropagation(), $(t.onTriggerKeyDown, c));
  }, s = (c) => {
    $(r.onFocus, c), i() && t.onTriggerFocus();
  }, d = (c) => {
    $(r.onBlur, c), i() && $(t.onTriggerBlur, c);
  }, u = (c) => {
    $(r.onMouseEnter, c), i() && t.onTriggerMouseEnter();
  }, h = (c) => {
    $(r.onMouseLeave, c), i() && t.onTriggerMouseLeave();
  };
  return g(x.button, b({
    ref(c) {
      const f = ve(t.setTriggerRef, r.ref);
      typeof f == "function" && f(c);
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
    onClick: l,
    onKeyDown: a,
    onFocus: s,
    onBlur: d,
    onMouseEnter: u,
    onMouseLeave: h
  }, o));
};
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */
function er(e) {
  const { x: t = 0, y: r = 0, width: o = 0, height: n = 0 } = e ?? {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, r, o, n);
  const i = {
    x: t,
    y: r,
    width: o,
    height: n,
    top: r,
    right: t + o,
    bottom: r + n,
    left: t
  };
  return { ...i, toJSON: () => i };
}
function As(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const o = t(e);
      return o ? er(o) : e ? e.getBoundingClientRect() : er();
    }
  };
}
const we = (e) => {
  e = J("Popover", {
    getAnchorRect: (O) => O?.getBoundingClientRect(),
    id: `hope-popover-${Xe()}`,
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
  const [t] = y(e, [...Z]), {
    baseClasses: r,
    styleOverrides: o
  } = ks("Popover", t), [n, i] = W(), [l, a] = W(), [s, d] = W(), [u, h] = W(), [c, f] = W(!1), [p, S] = W(e.placement), [w, C] = W(), [v, j] = W(), _ = fo({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (O) => e.onOpenChange?.(O)
  }), U = Ze(() => _.isOpen(), () => L({
    transition: "pop",
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.transitionOptions ?? {})), T = () => {
    const O = As(n() ?? l(), e.getAnchorRect), G = u(), q = s();
    return {
      anchorEl: O,
      arrowEl: G,
      floatingEl: q
    };
  };
  async function z() {
    const {
      anchorEl: O,
      arrowEl: G,
      floatingEl: q
    } = T();
    if (!O || !q)
      return;
    O.getBoundingClientRect();
    const Re = [mo(e.offset), bo({
      padding: e.overflowPadding
    }), yo({
      padding: e.overflowPadding
    }), Co({
      padding: e.overflowPadding,
      apply({
        rects: Fe
      }) {
        const He = Math.round(Fe.reference.width);
        e.hasSameWidth && (q.style.width = `${He}px`);
      }
    })];
    G && Re.push(xo({
      element: G,
      padding: e.arrowPadding
    })), Re.push(So());
    const Q = await vo(O, q, {
      placement: e.placement,
      middleware: Re
    });
    if (Q.placement !== p() && S(Q.placement), !!q && (Object.assign(q.style, {
      left: `${Math.round(Q.x)}px`,
      top: `${Math.round(Q.y)}px`,
      visibility: Q.middlewareData.hide?.referenceHidden ? "hidden" : "visible"
    }), G && Q.middlewareData.arrow)) {
      const {
        x: Fe,
        y: He
      } = Q.middlewareData.arrow, Ur = Q.placement.split("-")[0];
      Object.assign(G.style, {
        left: Fe != null ? `${Fe}px` : "",
        top: He != null ? `${He}px` : "",
        [Ur]: "100%"
      });
    }
  }
  let E, A;
  const M = () => {
    _.toggle();
  }, P = (O) => {
    O.key === "Escape" && _.close();
  }, se = () => {
    E == null && _.open();
  }, fe = (O) => {
    const G = Tt(O), q = !Ve(s(), G);
    _.isOpen() && e.closeOnBlur && q && _.close();
  }, pe = () => {
    f(!0), E = window.setTimeout(() => {
      _.open(), z();
    }, e.openDelay);
  }, Pe = () => {
    f(!1), E && (clearTimeout(E), E = void 0), A = window.setTimeout(() => {
      c() || _.close();
    }, e.closeDelay);
  }, ot = (O) => {
    e.closeOnEsc && O.key === "Escape" && _.close();
  }, _e = (O) => {
    const G = Tt(O), q = Ve(s(), G), Re = Ve(l(), G), Q = !q && !Re;
    _.isOpen() && e.closeOnBlur && Q && _.close();
  }, Ie = () => {
    f(!0);
  }, Gr = (O) => {
    O.relatedTarget !== null && (f(!1), A = window.setTimeout(_.close, e.closeDelay));
  }, qr = () => {
    _.close();
  };
  ie(() => {
    const {
      anchorEl: O,
      floatingEl: G
    } = T();
    if (!O || !G)
      return;
    const q = po(O, G, z, {
      elementResize: typeof ResizeObserver == "function"
    });
    H(q);
  }), H(() => {
    Ue || (window.clearTimeout(E), window.clearTimeout(A));
  });
  const Kr = {
    baseClasses: r,
    styleOverrides: o,
    isOpen: _.isOpen,
    popoverTransition: U,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: p,
    popoverId: () => e.id,
    headingId: w,
    setHeadingId: C,
    descriptionId: v,
    setDescriptionId: j,
    contentRef: s,
    setContentRef: d,
    setArrowRef: h,
    setAnchorRef: i,
    setTriggerRef: a,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: M,
    onTriggerKeyDown: P,
    onTriggerFocus: se,
    onTriggerBlur: fe,
    onTriggerMouseEnter: pe,
    onTriggerMouseLeave: Pe,
    onContentKeyDown: ot,
    onContentFocusOut: _e,
    onContentMouseEnter: Ie,
    onContentMouseLeave: Gr,
    onCloseButtonClick: qr
  };
  return g(jr.Provider, {
    value: Kr,
    get children() {
      return ee(e.children, _);
    }
  });
};
we.Trigger = Es;
we.Anchor = ws;
we.Content = $s;
we.CloseButton = _s;
we.Heading = Ts;
we.Description = Bs;
function fa(e) {
  const [t, r] = y(e, ["children", "withinPortal"]);
  return g(D, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return g(Ye, b(r, {
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
const pa = x("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), Nr = (e) => {
  e = L({
    align: "center"
  }, e);
  const [t, r] = y(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return g(x.div, b({
    get class() {
      return k("hope-Stack-root", t.class);
    },
    get __css() {
      return Se({
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
  }, r));
}, ma = (e) => {
  e = L({
    reverse: !1
  }, e);
  const [t, r] = y(e, ["reverse"]);
  return g(Nr, b(r, {
    get direction() {
      return X(t.reverse, (o) => o ? "row-reverse" : "row");
    }
  }));
}, ba = (e) => {
  e = L({
    reverse: !1
  }, e);
  const [t, r] = y(e, ["reverse"]);
  return g(Nr, b(r, {
    get direction() {
      return X(t.reverse, (o) => o ? "column-reverse" : "column");
    }
  }));
}, Ms = K({
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
}), ya = (e) => {
  e = J("Text", {}, e);
  const [t, r, o] = y(e, ["class", "lineClamp"], [...Z, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Ms("Text", r), l = B(() => ({
    ...i().root,
    ...wr(t.lineClamp)
  }));
  return g(x.p, b({
    get class() {
      return k(n().root, t.class);
    },
    get __css() {
      return l();
    }
  }, o));
};
export {
  Qs as Anchor,
  ea as AspectRatio,
  ta as Box,
  Zi as Button,
  ra as ButtonGroup,
  ce as COLOR_MODE_CLASSNAMES,
  et as COLOR_MODE_STORAGE_KEY,
  na as Center,
  wt as CloseButton,
  xr as ColorModeContext,
  yi as ColorModeProvider,
  Xs as ColorModeScript,
  ia as Container,
  St as DEFAULT_THEME,
  En as DEFAULT_THEME_MAP,
  sa as Divider,
  Le as Drawer,
  ts as DrawerCloseButton,
  rs as DrawerContent,
  os as DrawerDescription,
  ns as DrawerHeading,
  is as DrawerOverlay,
  aa as Flex,
  _t as FocusTrapRegion,
  Ot as FormControl,
  Ar as FormControlContext,
  ls as FormControlDescription,
  cs as FormControlError,
  ds as FormControlLabel,
  Mr as Grid,
  us as GridItem,
  ma as HStack,
  ca as Heading,
  Js as HopeProvider,
  wi as Icon,
  oa as IconButton,
  da as Image,
  ua as Img,
  ga as Input,
  rt as InputGroup,
  ys as InputGroupLeftAddon,
  xs as InputGroupLeftSection,
  Cs as InputGroupRightAddon,
  Ss as InputGroupRightSection,
  ha as Kbd,
  We as Modal,
  $i as ModalCloseButton,
  Ti as ModalContent,
  Ei as ModalDescription,
  Ai as ModalHeading,
  Mi as ModalOverlay,
  fa as OptionalPortal,
  we as Popover,
  ws as PopoverAnchor,
  zs as PopoverArrow,
  _s as PopoverCloseButton,
  $s as PopoverContent,
  Bs as PopoverDescription,
  Ts as PopoverHeading,
  Es as PopoverTrigger,
  Z as STYLE_CONFIG_PROP_NAMES,
  la as SimpleGrid,
  pa as Spacer,
  Nr as Stack,
  ya as Text,
  Pn as ThemeProvider,
  ba as VStack,
  Bi as VisuallyHidden,
  Zs as VisuallyHiddenInput,
  tn as arrayToObjectNotation,
  br as computeStyleOptions,
  Us as cookieStorageManager,
  Ys as cookieStorageManagerSSR,
  Sr as createCookieStorageManager,
  js as createGlobalStyles,
  Vs as createHopeComponent,
  zr as createIcon,
  ps as createImageLoadingStatus,
  ui as createLocalStorageManager,
  ye as createPalette,
  K as createStyleConfig,
  Ns as createStyles,
  Hs as extendTheme,
  qs as fadeIn,
  vt as focusStyles,
  yr as getSelectedVariantClassNames,
  x as hope,
  Gs as injectCriticalStyle,
  Qo as isColorModeObjectLike,
  rn as isResponsiveObjectLike,
  lr as keyframes,
  wr as lineClamp,
  gi as localStorageManager,
  X as mapResponsive,
  L as mergeDefaultProps,
  J as mergeThemeProps,
  en as objectToArrayNotation,
  Sa as pack,
  gr as resolveTokenValue,
  N as rgba,
  ci as spin,
  Ui as useButtonGroupContext,
  di as useColorMode,
  Ks as useColorModeValue,
  Ln as useComponentTheme,
  Rt as useFormControlContext,
  zt as useRequiredFormControlContext,
  ge as useTheme,
  Li as watchModals
};
