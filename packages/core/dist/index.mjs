import { createTransition as ce, createPreventScroll as Bt, createTagName as $t, createDisclosure as Wt } from "@hope-ui/primitives";
export * from "@hope-ui/primitives";
import { COLOR_MODE_CLASSNAMES as ae, mapResponsive as H, createStyleConfig as P, hope as m, createHopeComponent as u, focusStyles as Ce, mergeThemeProps as L, STYLE_CONFIG_PROP_NAMES as B, ThemeProvider as qt, spin as Nt, useTheme as Vt, resolveTokenValue as Kt } from "@hope-ui/styles";
export * from "@hope-ui/styles";
import { createContext as V, useContext as K, createMemo as E, createSignal as k, createEffect as W, onCleanup as D, mergeProps as Ke, splitProps as g, Show as O, onMount as X, createUniqueId as de, children as jt, createRenderEffect as je } from "solid-js";
import { isServer as ue, createComponent as s, effect as Ye, setAttribute as Ue, template as G, mergeProps as c, memo as ee, Portal as ge, insert as Yt } from "solid-js/web";
import { isString as Ut, callHandler as x, mergeRefs as Z, getActiveElement as ze, getAllTabbableIn as De, focusWithoutScrolling as U, contains as le, isFocusable as Xt, noop as Gt, dataAttr as S, filterUndefined as Xe, isNull as Ge, ariaAttr as Zt, getWindow as Jt, runIfFn as Qt, getRelatedTarget as Ae } from "@hope-ui/utils";
import { autoUpdate as eo, offset as to, flip as oo, shift as ro, size as no, arrow as so, hide as io, computePosition as ao } from "@floating-ui/dom";
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-context.ts
 */
const Ze = V();
function lo() {
  const e = K(Ze);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function Wr(e, t) {
  const { colorMode: o } = lo();
  return E(() => o() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const he = "hope-ui-color-mode";
function co(e) {
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
      return o != null ? o : t;
    },
    set: (t) => {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
const uo = co(he);
function Me(e, t) {
  const o = e.match(new RegExp(`(^| )${t}=([^;]+)`));
  return o == null ? void 0 : o[2];
}
function Je(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (o) => {
      var r, n;
      return t ? (r = Me(t, e)) != null ? r : o : ue ? o : (n = Me(document.cookie, e)) != null ? n : o;
    },
    set: (o) => {
      document.cookie = `${e}=${o}; max-age=31536000; path=/`;
    }
  };
}
const qr = Je(he);
function Nr(e) {
  return Je(he, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function Qe() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function go() {
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
function ho(e) {
  document.body.classList.add(e ? ae.dark : ae.light), document.body.classList.remove(e ? ae.light : ae.dark);
}
function fo(e, t = !0) {
  const o = t ? go() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, o == null || o();
}
function et(e) {
  var o;
  return ((o = Qe().matches) != null ? o : e === "dark") ? "dark" : "light";
}
function mo(e) {
  var r;
  const t = "light", o = (r = e.get(t)) != null ? r : t;
  return o === "system" ? ue ? t : et() : o;
}
function bo(e) {
  const t = Qe(), o = (r) => {
    e(r.matches ? "dark" : "light");
  };
  return t.addEventListener("change", o), () => {
    t.removeEventListener("change", o);
  };
}
function po(e) {
  const t = () => {
    var a;
    return (a = e.initialColorMode) != null ? a : "system";
  }, o = () => {
    var a;
    return (a = e.storageManager) != null ? a : uo;
  };
  let r;
  const [n, i] = k(mo(o())), d = (a) => {
    i(a), ho(a === "dark"), fo(a, e.disableTransitionOnChange);
  }, y = (a) => {
    r && (r(), r = void 0);
    const l = a === "system";
    l && (r = bo(d)), d(l ? et() : a), o().set(a);
  }, b = () => {
    y(n() === "dark" ? "light" : "dark");
  };
  W(() => {
    var a;
    y((a = o().get()) != null ? a : t());
  }), D(() => {
    r == null || r();
  });
  const p = {
    colorMode: n,
    setColorMode: y,
    toggleColorMode: b
  };
  return s(Ze.Provider, {
    value: p,
    get children() {
      return e.children;
    }
  });
}
function tt(e) {
  return e == null ? {} : {
    overflow: H(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: H(e, (t) => t != null ? "ellipsis" : void 0),
    display: H(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: H(e, (t) => t != null ? t : void 0),
    WebkitBoxOrient: H(e, (t) => t != null ? "vertical" : void 0)
  };
}
function R(e, t) {
  return Ke(e, t);
}
function M(e, t) {
  return `rgb(${e} / ${t})`;
}
const yo = /* @__PURE__ */ G('<script id="hope-ui-color-mode-script"><\/script>', 2), ot = "system", Co = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function vo(e) {
  return Co.has(e) ? e : ot;
}
function Vr(e) {
  e = R({
    initialColorMode: ot,
    storageType: "localStorage",
    storageKey: he
  }, e);
  const t = E(() => {
    const o = vo(e.initialColorMode), r = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${o}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, n = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${o}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? r : n}`.trim();
  });
  return (() => {
    const o = yo.cloneNode(!0);
    return Ye((r) => {
      const n = e.nonce, i = t();
      return n !== r._v$ && Ue(o, "nonce", r._v$ = n), i !== r._v$2 && (o.innerHTML = r._v$2 = i), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
const Ee = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function rt(e) {
  const [t, o] = k(), [r, n] = k(), i = E(() => e.overlayTransitionOptions ? R(Ee, e.overlayTransitionOptions) : Ee), d = ce(() => e.isOpen, i);
  let y;
  const b = (f) => {
    y = f.target;
  }, p = (f) => {
    var h;
    f.key === "Escape" && (f.stopPropagation(), e.closeOnEsc && e.onClose(), (h = e.onEscKeyDown) == null || h.call(e));
  }, a = (f) => {
    var h;
    f.stopPropagation(), y === f.target && (e.closeOnOverlayClick && e.onClose(), (h = e.onOverlayClick) == null || h.call(e));
  }, l = () => {
    e.onClose();
  };
  return Bt({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: o,
    descriptionId: r,
    setDescriptionId: n,
    overlayTransition: d,
    onContainerMouseDown: b,
    onContainerKeyDown: p,
    onContainerClick: a,
    onCloseButtonClick: l
  };
}
const So = P((e) => ({
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
        light: M(e.vars.colors.neutral.darkChannel, 0.75),
        dark: M(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));
function nt(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = nt(e[t])) && (r && (r += " "), r += o);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function C() {
  for (var e, t, o = 0, r = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = nt(e)) && (r && (r += " "), r += t);
  return r;
}
const wo = /* @__PURE__ */ G('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>', 4, !0), Fe = {
  viewBox: "0 0 24 24",
  path: () => wo.cloneNode(!0)
}, Pe = m("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), xo = u((e) => {
  e = R({
    children: Fe.path,
    viewBox: Fe.viewBox,
    color: "currentColor"
  }, e);
  const [t, o] = g(e, ["as", "children", "viewBox"]), r = () => t.as && !Ut(t.as);
  return s(O, {
    get when() {
      return r();
    },
    get fallback() {
      return s(Pe, c({
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
      return s(Pe, c({
        get as() {
          return t.as;
        }
      }, o));
    }
  });
});
function st(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: o = {}
  } = e;
  return u((r) => s(xo, c({
    viewBox: t
  }, o, r, {
    get children() {
      return e.path;
    }
  })));
}
const ko = /* @__PURE__ */ G('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>', 8, !0), Io = /* @__PURE__ */ G('<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>', 4, !0), _o = st({
  path: () => ko.cloneNode(!0)
}), Oo = st({
  path: () => Io.cloneNode(!0)
}), Ro = P(
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
        ...Ce(e.vars),
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
), ve = u((e) => {
  e = L("CloseButton", {
    "aria-label": "Close",
    children: () => s(Oo, {})
  }, e);
  const [t, o, r] = g(e, ["class"], [...B, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Ro("CloseButton", o);
  return s(m.button, c({
    type: "button",
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}), it = V();
function te() {
  const e = K(it);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const zo = u((e) => {
  const t = te();
  e = R({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [o, r] = g(e, ["class", "onClick"]);
  return s(ve, c({
    get class() {
      return C("hope-Modal-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), x(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}), at = {
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
}, Do = m("span", {
  baseStyle: at
}), Kr = m("input", {
  baseStyle: at
}), Se = u((e) => {
  let t, o;
  e = R({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [r, n] = g(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), i = () => {
    var a;
    if (!o)
      return;
    const p = o.querySelector(r.initialFocusSelector);
    if (p) {
      U(p);
      return;
    }
    if (r.autoFocus) {
      const l = (a = De(o)[0]) != null ? a : o;
      U(l);
    }
  }, d = () => {
    if (r.restoreFocusSelector) {
      t = document.querySelector(r.restoreFocusSelector);
      return;
    }
    r.restoreFocus && (t = ze());
  }, y = () => {
    if (!o)
      return !1;
    const p = ze(o);
    return !p || le(o, p) ? !1 : Xt(p);
  }, b = (p) => {
    if (!o)
      return;
    const a = De(o).slice(1, -1);
    if (!a.length) {
      U(o);
      return;
    }
    const l = a[0], f = a[a.length - 1];
    p.relatedTarget === l ? U(f) : U(l);
  };
  return X(() => {
    d(), i();
  }), D(() => {
    !t || y() || U(t);
  }), s(m.div, c({
    ref(p) {
      const a = Z((l) => o = l, r.ref);
      typeof a == "function" && a(p);
    },
    tabIndex: -1
  }, n, {
    get children() {
      return [s(O, {
        get when() {
          return r.trapFocus;
        },
        get children() {
          return s(Te, {
            onFocus: b
          });
        }
      }), ee(() => e.children), s(O, {
        get when() {
          return r.trapFocus;
        },
        get children() {
          return s(Te, {
            onFocus: b
          });
        }
      })];
    }
  }));
}), Te = u((e) => s(Do, c({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e))), Ao = u((e) => {
  const t = te(), [o, r] = g(e, ["class", "style", "onClick"]), n = (d) => {
    d.stopPropagation(), x(o.onClick, d);
  }, i = E(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return s(Se, {
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
      return s(m.section, c({
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
          return C(t.baseClasses().content, o.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: n
      }, r));
    }
  });
}), Mo = u((e) => {
  const t = te(), [o, r] = g(e, ["class"]);
  return W(() => {
    t.setDescriptionId(`${t.contentId()}-description`), D(() => t.setDescriptionId(void 0));
  }), s(m.p, c({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return C(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}), Eo = u((e) => {
  const t = te(), [o, r] = g(e, ["class"]);
  return W(() => {
    t.setHeadingId(`${t.contentId()}-heading`), D(() => t.setHeadingId(void 0));
  }), s(m.h2, c({
    get id() {
      return t.headingId();
    },
    get class() {
      return C(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}), Fo = u((e) => {
  const t = te(), [o, r] = g(e, ["class", "style", "children"]), n = E(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return s(m.div, c({
    role: "presentation",
    get class() {
      return C(t.baseClasses().overlay, o.class);
    },
    get style() {
      return n();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}), oe = (e) => {
  e = L("Modal", {
    id: `hope-modal-${de()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = g(e, [...B, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: o,
    styleOverrides: r
  } = So("Modal", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: d,
    setDescriptionId: y,
    overlayTransition: b,
    onContainerMouseDown: p,
    onContainerKeyDown: a,
    onContainerClick: l,
    onCloseButtonClick: f
  } = rt(e), h = ce(() => e.isOpen, () => {
    var I;
    return R({
      transition: "pop",
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (I = e.contentTransitionOptions) != null ? I : {});
  }), v = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: h,
    overlayTransition: b,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: d,
    setDescriptionId: y,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: p,
    onContainerKeyDown: a,
    onContainerClick: l,
    onCloseButtonClick: f
  };
  return s(O, {
    get when() {
      return ee(() => !!b.keepMounted())() && h.keepMounted();
    },
    get children() {
      return s(ge, {
        get children() {
          return s(it.Provider, {
            value: v,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
oe.Overlay = Fo;
oe.Content = Ao;
oe.CloseButton = zo;
oe.Heading = Eo;
oe.Description = Mo;
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
const Po = typeof document < "u" ? document : void 0, To = "body > :not(script, style)", pe = '[aria-modal="true"], [data-ismodal="true"]';
function He(e, t) {
  const o = Array.from(e.querySelectorAll(To)).filter((r) => !r.contains(t)).map((r) => {
    const n = r.getAttribute("aria-hidden") || "";
    return r.setAttribute("aria-hidden", "true"), { element: r, previousAriaHidden: n };
  });
  return () => {
    o.forEach(({ element: r, previousAriaHidden: n }) => {
      n ? r.setAttribute("aria-hidden", n) : r.removeAttribute("aria-hidden");
    });
  };
}
function Ho(e = "body", { document: t = Po } = {}) {
  const o = t == null ? void 0 : t.querySelector(e);
  if (t == null || o == null)
    return Gt;
  const r = { childList: !0 };
  let n = [], i;
  const d = new MutationObserver((y) => {
    for (const b of y)
      if (b.type === "childList") {
        if (b.addedNodes.length > 0) {
          const p = Array.from(b.addedNodes).find(
            (a) => {
              var l;
              return (l = a.querySelector) == null ? void 0 : l.call(a, pe);
            }
          );
          if (p) {
            n.push(p);
            const a = p.querySelector(pe);
            i == null || i(), i = He(t, a);
          }
        } else if (b.removedNodes.length > 0) {
          const p = Array.from(b.removedNodes), a = n.findIndex(
            (l) => p.includes(l)
          );
          if (a >= 0)
            if (i == null || i(), n = n.filter((l, f) => f !== a), n.length > 0) {
              const l = n[n.length - 1].querySelector(pe);
              i = He(t, l);
            } else
              i = void 0;
        }
      }
  });
  return d.observe(o, r), () => {
    i == null || i(), d.disconnect();
  };
}
function jr(e) {
  Ho(), e = R({
    withCssReset: !0
  }, e);
  const [t, o] = g(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return s(po, {
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
      return s(qt, o);
    }
  });
}
const Lo = P(({ vars: e }) => ({
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
      ...Ce(e)
    }
  }
})), Yr = u((e) => {
  e = L("Anchor", {}, e);
  const [t, o, r] = g(e, ["class", "isExternal"], B), {
    baseClasses: n,
    styleOverrides: i
  } = Lo("Anchor", o);
  return s(m.a, c({
    get class() {
      return C(n().root, t.class);
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
  }, r));
}), Bo = m("div", {
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
}, "hope-AspectRatio-root"), Ur = u((e) => {
  e = R({
    ratio: 4 / 3
  }, e);
  const [t, o] = g(e, ["ratio"]);
  return s(Bo, c({
    get _before() {
      return {
        pb: H(t.ratio, (r) => `${1 / r * 100}%`)
      };
    }
  }, o));
});
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */
const Xr = m("div"), fe = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function $o(e) {
  const t = [];
  for (const o of fe) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "solid",
        colorScheme: o
      },
      style: {
        color: n ? e.colors[o][900] : "common.white",
        backgroundColor: e.colors[o][r ? "800" : n ? "300" : "500"],
        borderColor: e.colors[o][r ? "800" : n ? "300" : "500"],
        _hover: {
          color: n ? e.colors[o][900] : "common.white",
          backgroundColor: e.colors[o][r ? "700" : n ? "400" : "600"],
          borderColor: e.colors[o][r ? "700" : n ? "400" : "600"]
        },
        _active: {
          color: n ? e.colors[o][900] : "common.white",
          backgroundColor: e.colors[o][r ? "600" : n ? "500" : "700"],
          borderColor: e.colors[o][r ? "600" : n ? "500" : "700"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.100",
          borderColor: "neutral.100"
        },
        _dark: {
          color: n ? e.colors[o][900] : "whiteAlpha.900",
          backgroundColor: e.colors[o][n ? "500" : "700"],
          borderColor: e.colors[o][n ? "500" : "700"],
          _hover: {
            color: n ? e.colors[o][900] : "whiteAlpha.900",
            backgroundColor: e.colors[o][n ? "400" : "600"],
            borderColor: e.colors[o][n ? "400" : "600"]
          },
          _active: {
            color: n ? e.colors[o][900] : "whiteAlpha.900",
            backgroundColor: e.colors[o][n ? "300" : "500"],
            borderColor: e.colors[o][n ? "300" : "500"]
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
function Wo(e) {
  const t = [];
  for (const o of fe) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "soft",
        colorScheme: o
      },
      style: {
        color: e.colors[o][n ? "900" : "700"],
        backgroundColor: e.colors[o][r ? "200" : n ? "100" : "50"],
        borderColor: e.colors[o][r ? "200" : n ? "100" : "50"],
        _hover: {
          color: e.colors[o][n ? "900" : "800"],
          backgroundColor: e.colors[o][r ? "300" : n ? "200" : "100"],
          borderColor: e.colors[o][r ? "300" : n ? "200" : "100"]
        },
        _active: {
          color: e.colors[o][n ? "900" : "800"],
          backgroundColor: e.colors[o][r ? "400" : n ? "300" : "200"],
          borderColor: e.colors[o][r ? "400" : n ? "300" : "200"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.50",
          borderColor: "neutral.50"
        },
        _dark: {
          color: e.colors[o][200],
          backgroundColor: M(e.colors[o].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[o][200],
            backgroundColor: M(e.colors[o].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: M(e.colors[o].mainChannel, 0.4),
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
function qo(e) {
  const t = [];
  for (const o of fe) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "outlined",
        colorScheme: o
      },
      style: {
        color: e.colors[o][n ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: e.colors[o][r || n ? "400" : "300"],
        _hover: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "100" : "50"],
          borderColor: e.colors[o][r || n ? "500" : "400"]
        },
        _active: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "200" : "100"],
          borderColor: e.colors[o][r || n ? "500" : "400"]
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
            backgroundColor: M(e.colors[o].mainChannel, 0.1),
            borderColor: e.colors[o][700]
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: M(e.colors[o].mainChannel, 0.2),
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
function No(e) {
  const t = [];
  for (const o of fe) {
    const r = o === "neutral", n = o === "warning";
    t.push({
      variants: {
        variant: "plain",
        colorScheme: o
      },
      style: {
        color: e.colors[o][n ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: "transparent",
        _hover: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "100" : "50"],
          borderColor: e.colors[o][r || n ? "100" : "50"]
        },
        _active: {
          color: e.colors[o][n ? "800" : "700"],
          backgroundColor: e.colors[o][r || n ? "200" : "100"],
          borderColor: e.colors[o][r || n ? "200" : "100"]
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
            backgroundColor: M(e.colors[o].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: M(e.colors[o].mainChannel, 0.2),
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
const Q = /* @__PURE__ */ new Map([
  ["xs", "7"],
  ["sm", "8"],
  ["md", "10"],
  ["lg", "12"]
]);
function Vo() {
  const e = [];
  for (const [t, o] of Q)
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
const Ko = P(
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
        ...Ce(e)
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
            height: Q.get("xs"),
            px: 3,
            fontSize: "xs"
          },
          sm: {
            height: Q.get("sm"),
            px: 4,
            fontSize: "sm"
          },
          md: {
            height: Q.get("md"),
            px: 5,
            fontSize: "base"
          },
          lg: {
            height: Q.get("lg"),
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
        ...$o(e),
        ...Wo(e),
        ...qo(e),
        ...No(e),
        ...Vo()
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
        animation: `1s linear infinite ${Nt}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), lt = V();
function we() {
  const e = K(lt);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const jo = m("div", {
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
}, "hope-ButtonGroup-root"), ct = V();
function Yo() {
  return K(ct);
}
const Gr = u((e) => {
  e = R({}, e);
  const [t, o, r] = g(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return s(ct.Provider, {
    value: o,
    get children() {
      return s(jo, c({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, r));
    }
  });
}), Le = u((e) => {
  const t = we(), [o, r] = g(e, ["class", "__css"]);
  return s(m.span, c({
    "aria-hidden": !0,
    get class() {
      return C(t.baseClasses().icon, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().icon,
        ...o.__css
      };
    }
  }, r));
}), Be = u((e) => {
  const t = we(), [o, r] = g(e, ["class", "children", "hasLoadingText"]);
  return s(m.div, c({
    get class() {
      return C(t.baseClasses().loaderWrapper, o.class);
    },
    get position() {
      return o.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return t.styleOverrides().loaderWrapper;
    }
  }, r, {
    get children() {
      return s(O, {
        get when() {
          return o.children;
        },
        get fallback() {
          return s(_o, {
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
});
/*!
 * Original code by Ariakit
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/dom.ts
 */
const Uo = ["button", "color", "file", "image", "reset", "submit"];
function $e(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? Uo.indexOf(e.type) !== -1 : !1;
}
const Xo = /* @__PURE__ */ G("<span></span>", 2), Go = u((e) => {
  let t;
  const o = Yo(), r = R({
    get variant() {
      return o == null ? void 0 : o.variant;
    },
    get colorScheme() {
      return o == null ? void 0 : o.colorScheme;
    },
    get size() {
      return o == null ? void 0 : o.size;
    },
    get isDisabled() {
      return o == null ? void 0 : o.isDisabled;
    }
  }, e);
  e = L("Button", {
    loaderPlacement: "start"
  }, r);
  const [n, i, d, y] = g(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...B, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), b = $t(() => t, () => e.as || "button"), [p, a] = k(b() != null && $e({
    tagName: b(),
    type: n.type
  })), l = E(() => n.type != null ? n.type : p() ? "button" : void 0), {
    baseClasses: f,
    styleOverrides: h
  } = Ko("Button", d);
  return X(() => {
    t != null && a($e(t));
  }), s(lt.Provider, {
    value: {
      baseClasses: f,
      styleOverrides: h
    },
    get children() {
      return s(m.button, c({
        get as() {
          return n.as;
        },
        ref(v) {
          const I = Z((_) => t = _, n.ref);
          typeof I == "function" && I(v);
        },
        get role() {
          return !p() && b() !== "a" ? "button" : void 0;
        },
        get type() {
          return l();
        },
        get tabIndex() {
          return p() ? void 0 : 0;
        },
        get disabled() {
          return n.isDisabled;
        },
        get ["data-loading"]() {
          return n.isLoading || void 0;
        },
        get class() {
          return C(f().root, n.class);
        },
        get __css() {
          return h().root;
        }
      }, y, {
        get children() {
          return [s(O, {
            get when() {
              return n.isLoading && n.loaderPlacement === "start";
            },
            get children() {
              return s(Be, {
                get hasLoadingText() {
                  return !!n.loadingText;
                },
                get children() {
                  return n.loader;
                }
              });
            }
          }), s(O, {
            get when() {
              return n.isLoading;
            },
            get fallback() {
              return s(We, i);
            },
            get children() {
              return s(O, {
                get when() {
                  return n.loadingText;
                },
                get fallback() {
                  return (() => {
                    const v = Xo.cloneNode(!0);
                    return v.style.setProperty("opacity", "0"), Yt(v, s(We, i)), v;
                  })();
                },
                get children() {
                  return n.loadingText;
                }
              });
            }
          }), s(O, {
            get when() {
              return n.isLoading && n.loaderPlacement === "end";
            },
            get children() {
              return s(Be, {
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
});
function We(e) {
  const t = we();
  return [s(O, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return s(Le, {
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
  }), ee(() => e.children), s(O, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return s(Le, {
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
const Zr = u((e) => s(Go, c({
  isIconButton: !0
}, e)));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const Jr = m("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), Zo = m("div", ({
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
}), "hope-Container-root"), Qr = u((e) => {
  e = R({
    isCentered: !0
  }, e);
  const [t, o] = g(e, ["isCentered"]);
  return s(Zo, c({
    get mx() {
      return H(t.isCentered, (r) => r ? "auto" : void 0);
    }
  }, o));
}), Jo = P(
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
), en = u((e) => {
  e = L("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, o, r] = g(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), n = jt(() => e.children), i = () => !!n(), d = () => o.orientation === "vertical", y = E(() => {
    const a = d() ? "borderLeftStyle" : "borderTopStyle", l = d() ? "borderLeftWidth" : "borderTopWidth";
    return i() ? {
      _before: {
        [a]: t.variant,
        [l]: t.thickness
      },
      _after: {
        [a]: t.variant,
        [l]: t.thickness
      }
    } : {
      [a]: t.variant,
      [l]: t.thickness
    };
  }), {
    baseClasses: b,
    styleOverrides: p
  } = Jo("Divider", {
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
  return s(m.hr, c({
    get as() {
      return i() ? "div" : "hr";
    },
    get role() {
      return i() ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return d() ? "vertical" : "horizontal";
    },
    get class() {
      return C(b().root, t.class);
    },
    get __css() {
      return {
        ...p().root,
        ...y()
      };
    }
  }, r, {
    get children() {
      return s(O, {
        get when() {
          return i();
        },
        get children() {
          return s(m.span, c({
            get class() {
              return b().label;
            },
            get __css() {
              return p().label;
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
}), Qo = P((e) => ({
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
        light: M(e.vars.colors.neutral.darkChannel, 0.75),
        dark: M(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), dt = V();
function re() {
  const e = K(dt);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const er = u((e) => {
  const t = re();
  e = R({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [o, r] = g(e, ["class", "onClick"]);
  return s(ve, c({
    get class() {
      return C("hope-Drawer-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), x(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}), tr = u((e) => {
  const t = re(), [o, r] = g(e, ["class", "style", "onClick"]), n = (d) => {
    d.stopPropagation(), x(o.onClick, d);
  }, i = E(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return s(Se, {
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
      return s(m.section, c({
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
          return C(t.baseClasses().content, o.class);
        },
        get style() {
          return i();
        },
        get __css() {
          return t.styleOverrides().content;
        },
        onClick: n
      }, r));
    }
  });
}), or = u((e) => {
  const t = re(), [o, r] = g(e, ["class"]);
  return W(() => {
    t.setDescriptionId(`${t.contentId()}-description`), D(() => t.setDescriptionId(void 0));
  }), s(m.p, c({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return C(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}), rr = u((e) => {
  const t = re(), [o, r] = g(e, ["class"]);
  return W(() => {
    t.setHeadingId(`${t.contentId()}-heading`), D(() => t.setHeadingId(void 0));
  }), s(m.h2, c({
    get id() {
      return t.headingId();
    },
    get class() {
      return C(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}), nr = u((e) => {
  const t = re(), [o, r] = g(e, ["class", "style", "children"]), n = E(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return s(m.div, c({
    role: "presentation",
    get class() {
      return C(t.baseClasses().overlay, o.class);
    },
    get style() {
      return n();
    },
    get __css() {
      return t.styleOverrides().overlay;
    }
  }, r));
}), sr = {
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
}, ne = (e) => {
  e = L("Drawer", {
    id: `hope-drawer-${de()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = g(e, [...B, "size", "placement"]), {
    baseClasses: o,
    styleOverrides: r
  } = Qo("Drawer", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: d,
    setDescriptionId: y,
    overlayTransition: b,
    onContainerMouseDown: p,
    onContainerKeyDown: a,
    onContainerClick: l,
    onCloseButtonClick: f
  } = rt(e), h = ce(() => e.isOpen, () => {
    var I;
    return R({
      transition: sr[e.placement],
      duration: 300,
      exitDuration: 200,
      delay: 100,
      exitDelay: 0,
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (I = e.contentTransitionOptions) != null ? I : {});
  }), v = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: h,
    overlayTransition: b,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: d,
    setDescriptionId: y,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: p,
    onContainerKeyDown: a,
    onContainerClick: l,
    onCloseButtonClick: f
  };
  return s(O, {
    get when() {
      return ee(() => !!b.keepMounted())() && h.keepMounted();
    },
    get children() {
      return s(ge, {
        get children() {
          return s(dt.Provider, {
            value: v,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
ne.Overlay = nr;
ne.Content = tr;
ne.CloseButton = er;
ne.Heading = rr;
ne.Description = or;
const tn = u((e) => {
  const [t, o] = g(e, ["class", "direction", "wrap", "align", "justify"]);
  return s(m.div, c({
    get class() {
      return C("hope-Flex-root", t.class);
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
}), qe = {
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
}, ir = P(
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
        ...qe,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...qe,
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
), ut = V();
function xe() {
  return K(ut);
}
function ke() {
  const e = xe();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const ar = u((e) => {
  const t = ke(), [o, r] = g(e, ["id", "class", "__css"]), n = () => {
    var i;
    return (i = o.id) != null ? i : t.descriptionId();
  };
  return X(() => t.setHasDescription(!0)), D(() => t.setHasDescription(!1)), s(m.div, c({
    get id() {
      return n();
    },
    get ["data-required"]() {
      return S(t.isRequired());
    },
    get ["data-disabled"]() {
      return S(t.isDisabled());
    },
    get ["data-readonly"]() {
      return S(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return S(t.isInvalid());
    },
    get class() {
      return C(t.baseClasses().description, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().description,
        ...o.__css
      };
    }
  }, r));
}), lr = u((e) => {
  const t = ke(), [o, r] = g(e, ["id", "class", "__css"]), n = () => {
    var i;
    return (i = o.id) != null ? i : t.errorId();
  };
  return X(() => t.setHasError(!0)), D(() => t.setHasError(!1)), s(m.div, c({
    "aria-live": "polite",
    get id() {
      return n();
    },
    get ["data-required"]() {
      return S(t.isRequired());
    },
    get ["data-disabled"]() {
      return S(t.isDisabled());
    },
    get ["data-readonly"]() {
      return S(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return S(t.isInvalid());
    },
    get class() {
      return C(t.baseClasses().error, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().error,
        ...o.__css
      };
    }
  }, r));
}), cr = u((e) => {
  const t = ke(), [o, r] = g(e, ["id", "for", "class", "__css"]), n = () => {
    var d;
    return (d = o.id) != null ? d : t.labelId();
  }, i = () => {
    var d;
    return (d = o.for) != null ? d : t.id();
  };
  return s(m.label, c({
    get id() {
      return n();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return S(t.isRequired());
    },
    get ["data-disabled"]() {
      return S(t.isDisabled());
    },
    get ["data-readonly"]() {
      return S(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return S(t.isInvalid());
    },
    get class() {
      return C(t.baseClasses().label, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().label,
        ...o.__css
      };
    }
  }, r));
}), Ie = u((e) => {
  e = L("FormControl", {
    id: `hope-form-control-${de()}`
  }, e);
  const [t, o, r] = g(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...B, "withRequiredIndicator"]), [n, i] = k(!1), [d, y] = k(!1), {
    baseClasses: b,
    styleOverrides: p
  } = ir("FormControl", o), a = () => `${e.id}-description`, l = () => `${e.id}-error`, f = () => e.isInvalid, v = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: a,
    errorId: l,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: f,
    unstyled: () => o.unstyled,
    baseClasses: b,
    styleOverrides: p,
    hasDescription: n,
    setHasDescription: i,
    hasError: d,
    setHasError: y,
    mergeAriaDescribedBy: (I) => {
      const _ = I ? [I] : [];
      return d() && f() && _.push(l()), n() && _.push(a()), _.join(" ") || void 0;
    }
  };
  return s(ut.Provider, {
    value: v,
    get children() {
      return s(m.div, c({
        role: "group",
        get ["data-required"]() {
          return S(v.isRequired());
        },
        get ["data-disabled"]() {
          return S(v.isDisabled());
        },
        get ["data-readonly"]() {
          return S(v.isReadOnly());
        },
        get ["data-invalid"]() {
          return S(v.isInvalid());
        },
        get class() {
          return C(b().root, t.class);
        },
        get __css() {
          return p().root;
        }
      }, r));
    }
  });
});
Ie.Label = cr;
Ie.Description = ar;
Ie.Error = lr;
const dr = u((e) => {
  const [t, o] = g(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return s(m.div, c({
    get class() {
      return C("hope-GridItem-root", t.class);
    },
    get __css() {
      return Xe({
        gridArea: t.area,
        gridColumn: Ne(t.colSpan),
        gridRow: Ne(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, o));
});
function Ne(e) {
  return H(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const gt = u((e) => {
  const [t, o] = g(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return s(m.div, c({
    get class() {
      return C("hope-Grid-root", t.class);
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
});
gt.Item = dr;
const on = u((e) => {
  const [t, o] = g(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), r = Vt(), n = () => t.minChildWidth ? ur(t.minChildWidth, r.vars) : gr(t.columns);
  return s(gt, c({
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
  }, o));
});
function ur(e, t) {
  return H(e, (o) => {
    const r = Kt(o, "sizes", t);
    return Ge(o) ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function gr(e) {
  return H(e, (t) => Ge(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const hr = P({
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
}), rn = u((e) => {
  e = L("Heading", {}, e);
  const [t, o, r] = g(e, ["as", "class", "level", "lineClamp"], [...B, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = hr("Heading", o), d = () => t.level ? `h${t.level}` : t.as, y = E(() => ({
    ...i().root,
    ...tt(t.lineClamp)
  }));
  return s(m.h2, c({
    get as() {
      return d();
    },
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return y();
    }
  }, r));
});
/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
function fr(e) {
  const [t, o] = k("pending"), r = () => e.ignoreFallback ? "loaded" : t();
  let n = null;
  const i = () => {
    n && (n.onload = null, n.onerror = null, n = null);
  }, d = () => {
    if (!e.src)
      return;
    i();
    const y = new Image();
    y.src = e.src, e.crossOrigin && (y.crossOrigin = e.crossOrigin), e.srcSet && (y.srcset = e.srcSet), e.sizes && (y.sizes = e.sizes), e.loading && (y.loading = e.loading), y.onload = (b) => {
      i(), o("loaded"), x(e.onLoad, b);
    }, y.onerror = (b) => {
      i(), o("failed"), x(e.onError, b);
    }, n = y;
  };
  return W(() => {
    o(e.src ? "loading" : "pending");
  }), je(() => {
    e.ignoreFallback || (t() === "loading" && d(), D(() => {
      i();
    }));
  }), r;
}
const nn = u((e) => {
  const [t, o, r] = g(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), n = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = fr(Ke(e, {
    get ignoreFallback() {
      return n();
    }
  })), d = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...n() ? o : {},
    ...r
  });
  return s(O, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return s(O, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return s(m.img, c({
            get src() {
              return t.fallbackSrc;
            },
            class: "hope-Image-placeholder"
          }, d));
        },
        get children() {
          return t.fallback;
        }
      });
    },
    get children() {
      return s(m.img, c({
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
          return C("hope-Image-root", t.class);
        }
      }, d));
    }
  });
}), sn = u((e) => {
  const [t, o] = g(e, ["class"]);
  return s(m.img, c({
    get class() {
      return C("hope-Image-root", t.class);
    }
  }, o));
}), ht = {
  variant: "outlined",
  size: "md"
}, T = {
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
}, mr = P(
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
            light: `0 0 0 3px ${M(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${M(e.colors.primary.darkChannel, 0.75)}`
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
            light: `0 0 0 3px ${M(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${M(e.colors.danger.darkChannel, 0.75)}`
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
            ...T.sm,
            px: 2.5
          },
          md: {
            ...T.md,
            px: 3
          },
          lg: {
            ...T.lg,
            px: 4
          }
        }
      }
    }
  }),
  ht
), ft = V();
function mt() {
  return K(ft);
}
function bt() {
  const e = mt();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const an = u((e) => {
  const t = xe(), o = mt();
  e = L("Input", {}, e);
  const [r, n, i] = g(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...B, "variant", "size"]), {
    baseClasses: d,
    styleOverrides: y
  } = mr("Input", {
    get variant() {
      var h;
      return (h = o == null ? void 0 : o.variant()) != null ? h : n.variant;
    },
    get size() {
      var h;
      return (h = o == null ? void 0 : o.size()) != null ? h : n.size;
    },
    get styleConfigOverride() {
      return n.styleConfigOverride;
    },
    get unstyled() {
      var h;
      return (h = o == null ? void 0 : o.unstyled()) != null ? h : n.unstyled;
    }
  }), b = () => {
    var h, v;
    return (v = (h = r.isRequired) != null ? h : o == null ? void 0 : o.isRequired()) != null ? v : t == null ? void 0 : t.isRequired();
  }, p = () => {
    var h, v;
    return (v = (h = r.isDisabled) != null ? h : o == null ? void 0 : o.isDisabled()) != null ? v : t == null ? void 0 : t.isDisabled();
  }, a = () => {
    var h, v;
    return (v = (h = r.isReadOnly) != null ? h : o == null ? void 0 : o.isReadOnly()) != null ? v : t == null ? void 0 : t.isReadOnly();
  }, l = () => {
    var h, v;
    return (v = (h = r.isInvalid) != null ? h : o == null ? void 0 : o.isInvalid()) != null ? v : t == null ? void 0 : t.isInvalid();
  }, f = () => t == null ? void 0 : t.mergeAriaDescribedBy(r["aria-describedby"]);
  return s(m.input, c({
    type: "text",
    get id() {
      var h;
      return (h = r.id) != null ? h : t == null ? void 0 : t.id();
    },
    get required() {
      return b();
    },
    get disabled() {
      return p();
    },
    get readOnly() {
      return a();
    },
    get ["aria-invalid"]() {
      return Zt(l());
    },
    get ["aria-describedby"]() {
      return f();
    },
    get size() {
      return r.htmlSize;
    },
    get class() {
      return C(o == null ? void 0 : o.baseClasses().input, d().root, r.class);
    },
    get __css() {
      return {
        ...o == null ? void 0 : o.styleOverrides().input,
        ...y().root,
        ...r.__css
      };
    }
  }, i));
});
function ye(e) {
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
const br = P(
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
        ...ye({
          size: "sm",
          paddingWithSection: 8
        }),
        ...ye({
          size: "md",
          paddingWithSection: 10
        }),
        ...ye({
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
            ...T.sm,
            height: "100%",
            width: T.sm.minHeight
          },
          md: {
            ...T.md,
            height: "100%",
            width: T.md.minHeight
          },
          lg: {
            ...T.lg,
            height: "100%",
            width: T.lg.minHeight
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
            ...T.sm,
            px: 2.5
          },
          md: {
            ...T.md,
            px: 3
          },
          lg: {
            ...T.lg,
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
  ht
), pt = u((e) => {
  const t = bt(), [o, r] = g(e, ["class", "__css", "addonPlacement"]), n = E(() => {
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
  return X(() => {
    switch (o.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), D(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), D(() => t.setHasRightAddon(!1));
        break;
    }
  }), s(m.div, c({
    get ["data-required"]() {
      return S(t.isRequired());
    },
    get ["data-disabled"]() {
      return S(t.isDisabled());
    },
    get ["data-readonly"]() {
      return S(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return S(t.isInvalid());
    },
    get class() {
      return C(t.baseClasses().addon, n().className, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().addon,
        ...n().styleOverride,
        ...o.__css
      };
    }
  }, r));
}), pr = u((e) => s(pt, c({
  addonPlacement: "left"
}, e))), yr = u((e) => s(pt, c({
  addonPlacement: "right"
}, e))), yt = u((e) => {
  const t = bt(), [o, r] = g(e, ["class", "__css", "sectionPlacement"]), n = E(() => {
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
  return X(() => {
    switch (o.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), D(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), D(() => t.setHasRightSection(!1));
        break;
    }
  }), s(m.div, c({
    get ["data-required"]() {
      return S(t.isRequired());
    },
    get ["data-disabled"]() {
      return S(t.isDisabled());
    },
    get ["data-readonly"]() {
      return S(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return S(t.isInvalid());
    },
    get class() {
      return C(t.baseClasses().section, n().className, o.class);
    },
    get __css() {
      return {
        ...t.styleOverrides().section,
        ...n().styleOverride,
        ...o.__css
      };
    }
  }, r));
}), Cr = u((e) => s(yt, c({
  sectionPlacement: "left"
}, e))), vr = u((e) => s(yt, c({
  sectionPlacement: "right"
}, e))), me = u((e) => {
  const t = xe();
  e = L("InputGroup", {}, e);
  const [o, r, n] = g(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...B, "variant", "size"]), [i, d] = k(!1), [y, b] = k(!1), [p, a] = k(!1), [l, f] = k(!1), {
    baseClasses: h,
    styleOverrides: v
  } = br("InputGroup", {
    get variant() {
      return r.variant;
    },
    get size() {
      return r.size;
    },
    get hasLeftSection() {
      return i();
    },
    get hasRightSection() {
      return y();
    },
    get hasLeftAddon() {
      return p();
    },
    get hasRightAddon() {
      return l();
    },
    get styleConfigOverride() {
      return r.styleConfigOverride;
    },
    get unstyled() {
      return r.unstyled;
    }
  }), I = {
    isRequired: () => {
      var _;
      return (_ = e.isRequired) != null ? _ : t == null ? void 0 : t.isRequired();
    },
    isDisabled: () => {
      var _;
      return (_ = e.isDisabled) != null ? _ : t == null ? void 0 : t.isDisabled();
    },
    isReadOnly: () => {
      var _;
      return (_ = e.isReadOnly) != null ? _ : t == null ? void 0 : t.isReadOnly();
    },
    isInvalid: () => {
      var _;
      return (_ = e.isInvalid) != null ? _ : t == null ? void 0 : t.isInvalid();
    },
    variant: () => r.variant,
    size: () => r.size,
    unstyled: () => r.unstyled,
    baseClasses: h,
    styleOverrides: v,
    setHasLeftSection: d,
    setHasRightSection: b,
    setHasLeftAddon: a,
    setHasRightAddon: f
  };
  return s(ft.Provider, {
    value: I,
    get children() {
      return s(m.div, c({
        get ["data-required"]() {
          return S(I.isRequired());
        },
        get ["data-disabled"]() {
          return S(I.isDisabled());
        },
        get ["data-readonly"]() {
          return S(I.isReadOnly());
        },
        get ["data-invalid"]() {
          return S(I.isInvalid());
        },
        get class() {
          return C(h().root, o.class);
        },
        get __css() {
          return v().root;
        }
      }, n));
    }
  });
});
me.LeftAddon = pr;
me.RightAddon = yr;
me.LeftSection = Cr;
me.RightSection = vr;
const Sr = P({
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
}), ln = u((e) => {
  const [t, o, r] = g(e, ["class"], B), {
    baseClasses: n,
    styleOverrides: i
  } = Sr("Kbd", o);
  return s(m.kbd, c({
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}), wr = P((e) => ({
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
})), Ct = V();
function j() {
  const e = K(Ct);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const xr = u((e) => {
  const t = j(), [o, r] = g(e, ["ref"]);
  return s(m.div, c({
    ref(n) {
      const i = Z(t.setAnchorRef, o.ref);
      typeof i == "function" && i(n);
    }
  }, r));
}), kr = u((e) => {
  const t = j();
  e = R({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [o, r] = g(e, ["class", "onClick"]);
  return s(ve, c({
    get class() {
      return C("hope-Popover-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), x(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}), Ir = /* @__PURE__ */ G('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>', 8), vt = 30, N = vt / 2, _r = {
  top: `rotate(180 ${N} ${N})`,
  right: `rotate(-90 ${N} ${N})`,
  bottom: `rotate(0 ${N} ${N})`,
  left: `rotate(90 ${N} ${N})`
}, Or = u((e) => {
  const t = j(), [o, r] = g(e, ["ref", "class", "style", "children"]), n = () => t.currentPlacement().split("-")[0], i = Rr(t.contentRef), d = () => {
    var a;
    return ((a = i()) == null ? void 0 : a.getPropertyValue("background-color")) || "none";
  }, y = () => {
    var a;
    return ((a = i()) == null ? void 0 : a.getPropertyValue(`border-${n()}-color`)) || "none";
  }, b = () => {
    var a;
    return ((a = i()) == null ? void 0 : a.getPropertyValue(`border-${n()}-width`)) || "0px";
  }, p = () => parseInt(b()) * 2 * (vt / t.arrowSize());
  return s(m.div, c({
    ref(a) {
      const l = Z(t.setArrowRef, o.ref);
      typeof l == "function" && l(a);
    },
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: d(),
        stroke: y(),
        "stroke-width": p(),
        ...o.style
      };
    },
    get class() {
      return C(t.baseClasses().arrow, o.class);
    },
    get __css() {
      return t.styleOverrides().arrow;
    }
  }, r, {
    get children() {
      const a = Ir.cloneNode(!0), l = a.firstChild;
      return l.firstChild.nextSibling, Ye(() => Ue(l, "transform", _r[n()])), a;
    }
  }));
});
function Rr(e) {
  const [t, o] = k();
  return je(() => {
    const r = e();
    r && o(Jt(r).getComputedStyle(r));
  }), t;
}
const zr = u((e) => {
  const t = j(), [o, r] = g(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", d = (l) => {
    l.stopPropagation(), x(o.onKeyDown, l), x(t.onContentKeyDown, l);
  }, y = (l) => {
    x(o.onFocusOut, l), x(t.onContentFocusOut, l);
  }, b = (l) => {
    x(o.onMouseEnter, l), i() && t.onContentMouseEnter();
  }, p = (l) => {
    x(o.onMouseLeave, l), i() && x(t.onContentMouseLeave, l);
  }, a = E(() => ({
    ...o.style,
    ...t.popoverTransition.style()
  }));
  return s(O, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return s(ge, {
        get children() {
          return s(Se, c({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return n();
            },
            ref(l) {
              const f = Z(t.setContentRef, o.ref);
              typeof f == "function" && f(l);
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
              return C(t.baseClasses().root, o.class);
            },
            get style() {
              return a();
            },
            get __css() {
              return t.styleOverrides().root;
            },
            onKeyDown: d,
            onFocusOut: y,
            onMouseEnter: b,
            onMouseLeave: p
          }, r, {
            get children() {
              return [s(O, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return s(Or, {});
                }
              }), ee(() => o.children)];
            }
          }));
        }
      });
    }
  });
}), Dr = u((e) => {
  const t = j(), [o, r] = g(e, ["class"]);
  return W(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), D(() => t.setDescriptionId(void 0));
  }), s(m.p, c({
    get id() {
      return t.descriptionId();
    },
    get class() {
      return C(t.baseClasses().description, o.class);
    },
    get __css() {
      return t.styleOverrides().description;
    }
  }, r));
}), Ar = u((e) => {
  const t = j(), [o, r] = g(e, ["class"]);
  return W(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), D(() => t.setHeadingId(void 0));
  }), s(m.h2, c({
    get id() {
      return t.headingId();
    },
    get class() {
      return C(t.baseClasses().heading, o.class);
    },
    get __css() {
      return t.styleOverrides().heading;
    }
  }, r));
}), Mr = u((e) => {
  const t = j(), [o, r] = g(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", d = (f) => {
    x(o.onClick, f), n() && (f.stopPropagation(), t.onTriggerClick());
  }, y = (f) => {
    x(o.onKeyDown, f), i() && (f.stopPropagation(), x(t.onTriggerKeyDown, f));
  }, b = (f) => {
    x(o.onFocus, f), i() && t.onTriggerFocus();
  }, p = (f) => {
    x(o.onBlur, f), i() && x(t.onTriggerBlur, f);
  }, a = (f) => {
    x(o.onMouseEnter, f), i() && t.onTriggerMouseEnter();
  }, l = (f) => {
    x(o.onMouseLeave, f), i() && t.onTriggerMouseLeave();
  };
  return s(m.button, c({
    ref(f) {
      const h = Z(t.setTriggerRef, o.ref);
      typeof h == "function" && h(f);
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
    onClick: d,
    onKeyDown: y,
    onFocus: b,
    onBlur: p,
    onMouseEnter: a,
    onMouseLeave: l
  }, r));
});
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */
function Ve(e) {
  const { x: t = 0, y: o = 0, width: r = 0, height: n = 0 } = e != null ? e : {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, o, r, n);
  const i = {
    x: t,
    y: o,
    width: r,
    height: n,
    top: o,
    right: t + r,
    bottom: o + n,
    left: t
  };
  return { ...i, toJSON: () => i };
}
function Er(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const r = t(e);
      return r ? Ve(r) : e ? e.getBoundingClientRect() : Ve();
    }
  };
}
const J = (e) => {
  e = L("Popover", {
    getAnchorRect: (w) => w == null ? void 0 : w.getBoundingClientRect(),
    id: `hope-popover-${de()}`,
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
  const [t] = g(e, [...B]), {
    baseClasses: o,
    styleOverrides: r
  } = wr("Popover", t), [n, i] = k(), [d, y] = k(), [b, p] = k(), [a, l] = k(), [f, h] = k(!1), [v, I] = k(e.placement), [_, wt] = k(), [xt, kt] = k(), A = Wt({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (w) => {
      var z;
      return (z = e.onOpenChange) == null ? void 0 : z.call(e, w);
    }
  }), It = ce(() => A.isOpen(), () => {
    var w;
    return R({
      transition: "pop",
      easing: "ease-out",
      exitEasing: "ease-in"
    }, (w = e.transitionOptions) != null ? w : {});
  }), _e = () => {
    var q;
    const w = Er((q = n()) != null ? q : d(), e.getAnchorRect), z = a(), F = b();
    return {
      anchorEl: w,
      arrowEl: z,
      floatingEl: F
    };
  };
  async function Oe() {
    var Re;
    const {
      anchorEl: w,
      arrowEl: z,
      floatingEl: F
    } = _e();
    if (!w || !F)
      return;
    w.getBoundingClientRect();
    const q = [to(e.offset), oo({
      padding: e.overflowPadding
    }), ro({
      padding: e.overflowPadding
    }), no({
      padding: e.overflowPadding,
      apply({
        rects: se
      }) {
        const ie = Math.round(se.reference.width);
        e.hasSameWidth && (F.style.width = `${ie}px`);
      }
    })];
    z && q.push(so({
      element: z,
      padding: e.arrowPadding
    })), q.push(io());
    const $ = await ao(w, F, {
      placement: e.placement,
      middleware: q
    });
    if ($.placement !== v() && I($.placement), !!F && (Object.assign(F.style, {
      left: `${Math.round($.x)}px`,
      top: `${Math.round($.y)}px`,
      visibility: (Re = $.middlewareData.hide) != null && Re.referenceHidden ? "hidden" : "visible"
    }), z && $.middlewareData.arrow)) {
      const {
        x: se,
        y: ie
      } = $.middlewareData.arrow, Lt = $.placement.split("-")[0];
      Object.assign(z.style, {
        left: se != null ? `${se}px` : "",
        top: ie != null ? `${ie}px` : "",
        [Lt]: "100%"
      });
    }
  }
  let Y, be;
  const _t = () => {
    A.toggle();
  }, Ot = (w) => {
    w.key === "Escape" && A.close();
  }, Rt = () => {
    Y == null && A.open();
  }, zt = (w) => {
    const z = Ae(w), F = !le(b(), z);
    A.isOpen() && e.closeOnBlur && F && A.close();
  }, Dt = () => {
    h(!0), Y = window.setTimeout(() => {
      A.open(), Oe();
    }, e.openDelay);
  }, At = () => {
    h(!1), Y && (clearTimeout(Y), Y = void 0), be = window.setTimeout(() => {
      f() || A.close();
    }, e.closeDelay);
  }, Mt = (w) => {
    e.closeOnEsc && w.key === "Escape" && A.close();
  }, Et = (w) => {
    const z = Ae(w), F = le(b(), z), q = le(d(), z), $ = !F && !q;
    A.isOpen() && e.closeOnBlur && $ && A.close();
  }, Ft = () => {
    h(!0);
  }, Pt = (w) => {
    w.relatedTarget !== null && (h(!1), be = window.setTimeout(A.close, e.closeDelay));
  }, Tt = () => {
    A.close();
  };
  W(() => {
    const {
      anchorEl: w,
      floatingEl: z
    } = _e();
    if (!w || !z)
      return;
    const F = eo(w, z, Oe, {
      elementResize: typeof ResizeObserver == "function"
    });
    D(F);
  }), D(() => {
    ue || (window.clearTimeout(Y), window.clearTimeout(be));
  });
  const Ht = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: A.isOpen,
    popoverTransition: It,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: v,
    popoverId: () => e.id,
    headingId: _,
    setHeadingId: wt,
    descriptionId: xt,
    setDescriptionId: kt,
    contentRef: b,
    setContentRef: p,
    setArrowRef: l,
    setAnchorRef: i,
    setTriggerRef: y,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: _t,
    onTriggerKeyDown: Ot,
    onTriggerFocus: Rt,
    onTriggerBlur: zt,
    onTriggerMouseEnter: Dt,
    onTriggerMouseLeave: At,
    onContentKeyDown: Mt,
    onContentFocusOut: Et,
    onContentMouseEnter: Ft,
    onContentMouseLeave: Pt,
    onCloseButtonClick: Tt
  };
  return s(Ct.Provider, {
    value: Ht,
    get children() {
      return Qt(e.children, A);
    }
  });
};
J.Trigger = Mr;
J.Anchor = xr;
J.Content = zr;
J.CloseButton = kr;
J.Heading = Ar;
J.Description = Dr;
function cn(e) {
  const [t, o] = g(e, ["children", "withinPortal"]);
  return s(O, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return s(ge, c(o, {
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
const dn = m("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), St = u((e) => {
  e = R({
    align: "center"
  }, e);
  const [t, o] = g(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return s(m.div, c({
    get class() {
      return C("hope-Stack-root", t.class);
    },
    get __css() {
      return Xe({
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
}), un = u((e) => {
  e = R({
    reverse: !1
  }, e);
  const [t, o] = g(e, ["reverse"]);
  return s(St, c(o, {
    get direction() {
      return H(t.reverse, (r) => r ? "row-reverse" : "row");
    }
  }));
}), gn = u((e) => {
  e = R({
    reverse: !1
  }, e);
  const [t, o] = g(e, ["reverse"]);
  return s(St, c(o, {
    get direction() {
      return H(t.reverse, (r) => r ? "column-reverse" : "column");
    }
  }));
}), Fr = P({
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
}), hn = u((e) => {
  e = L("Text", {}, e);
  const [t, o, r] = g(e, ["class", "lineClamp"], [...B, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Fr("Text", o), d = E(() => ({
    ...i().root,
    ...tt(t.lineClamp)
  }));
  return s(m.p, c({
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return d();
    }
  }, r));
});
export {
  Yr as Anchor,
  Ur as AspectRatio,
  Xr as Box,
  Go as Button,
  Gr as ButtonGroup,
  he as COLOR_MODE_STORAGE_KEY,
  Jr as Center,
  ve as CloseButton,
  Ze as ColorModeContext,
  po as ColorModeProvider,
  Vr as ColorModeScript,
  Qr as Container,
  en as Divider,
  ne as Drawer,
  er as DrawerCloseButton,
  tr as DrawerContent,
  or as DrawerDescription,
  rr as DrawerHeading,
  nr as DrawerOverlay,
  tn as Flex,
  Se as FocusTrapRegion,
  Ie as FormControl,
  ut as FormControlContext,
  ar as FormControlDescription,
  lr as FormControlError,
  cr as FormControlLabel,
  gt as Grid,
  dr as GridItem,
  un as HStack,
  rn as Heading,
  jr as HopeProvider,
  xo as Icon,
  Zr as IconButton,
  nn as Image,
  sn as Img,
  an as Input,
  me as InputGroup,
  pr as InputGroupLeftAddon,
  Cr as InputGroupLeftSection,
  yr as InputGroupRightAddon,
  vr as InputGroupRightSection,
  ln as Kbd,
  oe as Modal,
  zo as ModalCloseButton,
  Ao as ModalContent,
  Mo as ModalDescription,
  Eo as ModalHeading,
  Fo as ModalOverlay,
  cn as OptionalPortal,
  J as Popover,
  xr as PopoverAnchor,
  Or as PopoverArrow,
  kr as PopoverCloseButton,
  zr as PopoverContent,
  Dr as PopoverDescription,
  Ar as PopoverHeading,
  Mr as PopoverTrigger,
  on as SimpleGrid,
  dn as Spacer,
  St as Stack,
  hn as Text,
  gn as VStack,
  Do as VisuallyHidden,
  Kr as VisuallyHiddenInput,
  qr as cookieStorageManager,
  Nr as cookieStorageManagerSSR,
  Je as createCookieStorageManager,
  st as createIcon,
  fr as createImageLoadingStatus,
  co as createLocalStorageManager,
  tt as lineClamp,
  uo as localStorageManager,
  R as mergeDefaultProps,
  M as rgba,
  Yo as useButtonGroupContext,
  lo as useColorMode,
  Wr as useColorModeValue,
  xe as useFormControlContext,
  ke as useRequiredFormControlContext,
  Ho as watchModals
};
