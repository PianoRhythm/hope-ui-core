import { createTransition as ce, createPreventScroll as Lt, createTagName as Bt, createDisclosure as $t } from "@hope-ui/primitives";
export * from "@hope-ui/primitives";
import { COLOR_MODE_CLASSNAMES as le, mapResponsive as T, createStyleConfig as E, hope as f, createHopeComponent as c, focusStyles as ye, mergeThemeProps as H, STYLE_CONFIG_PROP_NAMES as L, ThemeProvider as Wt, spin as qt, useTheme as Nt, resolveTokenValue as Vt } from "@hope-ui/styles";
export * from "@hope-ui/styles";
import { createContext as q, useContext as N, createMemo as A, createSignal as k, createEffect as $, onCleanup as O, mergeProps as Ve, splitProps as u, Show as I, onMount as Y, createUniqueId as de, children as Gt, createRenderEffect as Ge } from "solid-js";
import { isServer as ue, createComponent as s, effect as Ke, setAttribute as je, template as U, mergeProps as l, memo as ee, Portal as ge, insert as Kt } from "solid-js/web";
import { isString as jt, callHandler as x, mergeRefs as X, getActiveElement as Re, getAllTabbableIn as ze, focusWithoutScrolling as j, contains as ae, isFocusable as Yt, noop as Ut, dataAttr as y, filterUndefined as Ye, isNull as Ue, ariaAttr as Xt, getWindow as Zt, runIfFn as Jt, getRelatedTarget as De } from "@hope-ui/utils";
import { autoUpdate as Qt, offset as eo, flip as to, shift as oo, size as ro, arrow as no, hide as so, computePosition as io } from "@floating-ui/dom";
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-context.ts
 */
const Xe = q();
function lo() {
  const e = N(Xe);
  if (e === void 0)
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  return e;
}
function $r(e, t) {
  const { colorMode: o } = lo();
  return A(() => o() === "dark" ? t : e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const he = "hope-ui-color-mode";
function ao(e) {
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
const co = ao(he);
function Ae(e, t) {
  return e.match(new RegExp(`(^| )${t}=([^;]+)`))?.[2];
}
function Ze(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get: (o) => t ? Ae(t, e) ?? o : ue ? o : Ae(document.cookie, e) ?? o,
    set: (o) => {
      document.cookie = `${e}=${o}; max-age=31536000; path=/`;
    }
  };
}
const Wr = Ze(he);
function qr(e) {
  return Ze(he, e);
}
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function Je() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function uo() {
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
function go(e) {
  document.body.classList.add(e ? le.dark : le.light), document.body.classList.remove(e ? le.light : le.dark);
}
function ho(e, t = !0) {
  const o = t ? uo() : void 0;
  document.documentElement.dataset.theme = e, document.documentElement.style.colorScheme = e, o?.();
}
function Qe(e) {
  return Je().matches ?? e === "dark" ? "dark" : "light";
}
function fo(e) {
  const t = "light", o = e.get(t) ?? t;
  return o === "system" ? ue ? t : Qe() : o;
}
function mo(e) {
  const t = Je(), o = (r) => {
    e(r.matches ? "dark" : "light");
  };
  return t.addEventListener("change", o), () => {
    t.removeEventListener("change", o);
  };
}
function po(e) {
  const t = () => e.initialColorMode ?? "system", o = () => e.storageManager ?? co;
  let r;
  const [n, i] = k(fo(o())), g = (d) => {
    i(d), go(d === "dark"), ho(d, e.disableTransitionOnChange);
  }, b = (d) => {
    r && (r(), r = void 0);
    const a = d === "system";
    a && (r = mo(g)), g(a ? Qe() : d), o().set(d);
  }, m = () => {
    b(n() === "dark" ? "light" : "dark");
  };
  $(() => {
    b(o().get() ?? t());
  }), O(() => {
    r?.();
  });
  const p = {
    colorMode: n,
    setColorMode: b,
    toggleColorMode: m
  };
  return s(Xe.Provider, {
    value: p,
    get children() {
      return e.children;
    }
  });
}
function et(e) {
  return e == null ? {} : {
    overflow: T(e, (t) => t != null ? "hidden" : void 0),
    textOverflow: T(e, (t) => t != null ? "ellipsis" : void 0),
    display: T(e, (t) => t != null ? "-webkit-box" : void 0),
    WebkitLineClamp: T(e, (t) => t ?? void 0),
    WebkitBoxOrient: T(e, (t) => t != null ? "vertical" : void 0)
  };
}
function _(e, t) {
  return Ve(e, t);
}
function z(e, t) {
  return `rgb(${e} / ${t})`;
}
const bo = /* @__PURE__ */ U('<script id="hope-ui-color-mode-script"><\/script>', 2), tt = "system", Co = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function yo(e) {
  return Co.has(e) ? e : tt;
}
function Nr(e) {
  e = _({
    initialColorMode: tt,
    storageType: "localStorage",
    storageKey: he
  }, e);
  const t = A(() => {
    const o = yo(e.initialColorMode), r = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${o}",r="${e.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`, n = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${o}",e="${e.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    return `!${e.storageType === "cookie" ? r : n}`.trim();
  });
  return (() => {
    const o = bo.cloneNode(!0);
    return Ke((r) => {
      const n = e.nonce, i = t();
      return n !== r._v$ && je(o, "nonce", r._v$ = n), i !== r._v$2 && (o.innerHTML = r._v$2 = i), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
const Me = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function ot(e) {
  const [t, o] = k(), [r, n] = k(), i = A(() => e.overlayTransitionOptions ? _(Me, e.overlayTransitionOptions) : Me), g = ce(() => e.isOpen, i);
  let b;
  const m = (h) => {
    b = h.target;
  }, p = (h) => {
    h.key === "Escape" && (h.stopPropagation(), e.closeOnEsc && e.onClose(), e.onEscKeyDown?.());
  }, d = (h) => {
    h.stopPropagation(), b === h.target && (e.closeOnOverlayClick && e.onClose(), e.onOverlayClick?.());
  }, a = () => {
    e.onClose();
  };
  return Lt({
    isEnabled: () => e.isOpen && !!e.preventScroll
  }), {
    headingId: t,
    setHeadingId: o,
    descriptionId: r,
    setDescriptionId: n,
    overlayTransition: g,
    onContainerMouseDown: m,
    onContainerKeyDown: p,
    onContainerClick: d,
    onCloseButtonClick: a
  };
}
const vo = E((e) => ({
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
        light: z(e.vars.colors.neutral.darkChannel, 0.75),
        dark: z(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));
function rt(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = rt(e[t])) && (r && (r += " "), r += o);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function C() {
  for (var e, t, o = 0, r = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = rt(e)) && (r && (r += " "), r += t);
  return r;
}
const xo = /* @__PURE__ */ U('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>', 4, !0), Fe = {
  viewBox: "0 0 24 24",
  path: () => xo.cloneNode(!0)
}, Ee = f("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root"), So = c((e) => {
  e = _({
    children: Fe.path,
    viewBox: Fe.viewBox,
    color: "currentColor"
  }, e);
  const [t, o] = u(e, ["as", "children", "viewBox"]), r = () => t.as && !jt(t.as);
  return s(I, {
    get when() {
      return r();
    },
    get fallback() {
      return s(Ee, l({
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
      return s(Ee, l({
        get as() {
          return t.as;
        }
      }, o));
    }
  });
});
function nt(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: o = {}
  } = e;
  return c((r) => s(So, l({
    viewBox: t
  }, o, r, {
    get children() {
      return e.path;
    }
  })));
}
const wo = /* @__PURE__ */ U('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>', 8, !0), ko = /* @__PURE__ */ U('<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>', 4, !0), Io = nt({
  path: () => wo.cloneNode(!0)
}), _o = nt({
  path: () => ko.cloneNode(!0)
}), Oo = E(
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
        ...ye(e.vars),
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
), ve = c((e) => {
  e = H("CloseButton", {
    "aria-label": "Close",
    children: () => s(_o, {})
  }, e);
  const [t, o, r] = u(e, ["class"], [...L, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Oo("CloseButton", o);
  return s(f.button, l({
    type: "button",
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}), st = q();
function te() {
  const e = N(st);
  if (!e)
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  return e;
}
const Ro = c((e) => {
  const t = te();
  e = _({
    "aria-label": "Close modal",
    size: "md"
  }, e);
  const [o, r] = u(e, ["class", "onClick"]);
  return s(ve, l({
    get class() {
      return C("hope-Modal-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), x(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}), it = {
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
}, zo = f("span", {
  baseStyle: it
}), Vr = f("input", {
  baseStyle: it
}), xe = c((e) => {
  let t, o;
  e = _({
    trapFocus: !0,
    initialFocusSelector: "[data-autofocus]"
  }, e);
  const [r, n] = u(e, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]), i = () => {
    if (!o)
      return;
    const p = o.querySelector(r.initialFocusSelector);
    if (p) {
      j(p);
      return;
    }
    if (r.autoFocus) {
      const d = ze(o)[0] ?? o;
      j(d);
    }
  }, g = () => {
    if (r.restoreFocusSelector) {
      t = document.querySelector(r.restoreFocusSelector);
      return;
    }
    r.restoreFocus && (t = Re());
  }, b = () => {
    if (!o)
      return !1;
    const p = Re(o);
    return !p || ae(o, p) ? !1 : Yt(p);
  }, m = (p) => {
    if (!o)
      return;
    const d = ze(o).slice(1, -1);
    if (!d.length) {
      j(o);
      return;
    }
    const a = d[0], h = d[d.length - 1];
    p.relatedTarget === a ? j(h) : j(a);
  };
  return Y(() => {
    g(), i();
  }), O(() => {
    !t || b() || j(t);
  }), s(f.div, l({
    ref(p) {
      const d = X((a) => o = a, r.ref);
      typeof d == "function" && d(p);
    },
    tabIndex: -1
  }, n, {
    get children() {
      return [s(I, {
        get when() {
          return r.trapFocus;
        },
        get children() {
          return s(Pe, {
            onFocus: m
          });
        }
      }), ee(() => e.children), s(I, {
        get when() {
          return r.trapFocus;
        },
        get children() {
          return s(Pe, {
            onFocus: m
          });
        }
      })];
    }
  }));
}), Pe = c((e) => s(zo, l({
  "data-focus-trap": !0,
  tabIndex: 0,
  "aria-hidden": "true",
  style: {
    position: "fixed",
    top: "0",
    left: "0"
  }
}, e))), Do = c((e) => {
  const t = te(), [o, r] = u(e, ["class", "style", "onClick"]), n = (g) => {
    g.stopPropagation(), x(o.onClick, g);
  }, i = A(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return s(xe, {
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
      return s(f.section, l({
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
}), Ao = c((e) => {
  const t = te(), [o, r] = u(e, ["class"]);
  return $(() => {
    t.setDescriptionId(`${t.contentId()}-description`), O(() => t.setDescriptionId(void 0));
  }), s(f.p, l({
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
}), Mo = c((e) => {
  const t = te(), [o, r] = u(e, ["class"]);
  return $(() => {
    t.setHeadingId(`${t.contentId()}-heading`), O(() => t.setHeadingId(void 0));
  }), s(f.h2, l({
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
}), Fo = c((e) => {
  const t = te(), [o, r] = u(e, ["class", "style", "children"]), n = A(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return s(f.div, l({
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
  e = H("Modal", {
    id: `hope-modal-${de()}`,
    size: "md",
    isCentered: !1,
    scrollBehavior: "outside",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = u(e, [...L, "size", "isCentered", "scrollBehavior"]), {
    baseClasses: o,
    styleOverrides: r
  } = vo("Modal", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: g,
    setDescriptionId: b,
    overlayTransition: m,
    onContainerMouseDown: p,
    onContainerKeyDown: d,
    onContainerClick: a,
    onCloseButtonClick: h
  } = ot(e), w = ce(() => e.isOpen, () => _({
    transition: "pop",
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), S = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: w,
    overlayTransition: m,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: g,
    setDescriptionId: b,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: p,
    onContainerKeyDown: d,
    onContainerClick: a,
    onCloseButtonClick: h
  };
  return s(I, {
    get when() {
      return ee(() => !!m.keepMounted())() && w.keepMounted();
    },
    get children() {
      return s(ge, {
        get children() {
          return s(st.Provider, {
            value: S,
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
oe.Content = Do;
oe.CloseButton = Ro;
oe.Heading = Mo;
oe.Description = Ao;
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
const Eo = typeof document < "u" ? document : void 0, Po = "body > :not(script, style)", be = '[aria-modal="true"], [data-ismodal="true"]';
function Te(e, t) {
  const o = Array.from(e.querySelectorAll(Po)).filter((r) => !r.contains(t)).map((r) => {
    const n = r.getAttribute("aria-hidden") || "";
    return r.setAttribute("aria-hidden", "true"), { element: r, previousAriaHidden: n };
  });
  return () => {
    o.forEach(({ element: r, previousAriaHidden: n }) => {
      n ? r.setAttribute("aria-hidden", n) : r.removeAttribute("aria-hidden");
    });
  };
}
function To(e = "body", { document: t = Eo } = {}) {
  const o = t?.querySelector(e);
  if (t == null || o == null)
    return Ut;
  const r = { childList: !0 };
  let n = [], i;
  const g = new MutationObserver((b) => {
    for (const m of b)
      if (m.type === "childList") {
        if (m.addedNodes.length > 0) {
          const p = Array.from(m.addedNodes).find(
            (d) => d.querySelector?.(be)
          );
          if (p) {
            n.push(p);
            const d = p.querySelector(be);
            i?.(), i = Te(t, d);
          }
        } else if (m.removedNodes.length > 0) {
          const p = Array.from(m.removedNodes), d = n.findIndex(
            (a) => p.includes(a)
          );
          if (d >= 0)
            if (i?.(), n = n.filter((a, h) => h !== d), n.length > 0) {
              const a = n[n.length - 1].querySelector(be);
              i = Te(t, a);
            } else
              i = void 0;
        }
      }
  });
  return g.observe(o, r), () => {
    i?.(), g.disconnect();
  };
}
function Gr(e) {
  To(), e = _({
    withCssReset: !0
  }, e);
  const [t, o] = u(e, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
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
      return s(Wt, o);
    }
  });
}
const Ho = E(({ vars: e }) => ({
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
      ...ye(e)
    }
  }
})), Kr = c((e) => {
  e = H("Anchor", {}, e);
  const [t, o, r] = u(e, ["class", "isExternal"], L), {
    baseClasses: n,
    styleOverrides: i
  } = Ho("Anchor", o);
  return s(f.a, l({
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
}), Lo = f("div", {
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
}, "hope-AspectRatio-root"), jr = c((e) => {
  e = _({
    ratio: 4 / 3
  }, e);
  const [t, o] = u(e, ["ratio"]);
  return s(Lo, l({
    get _before() {
      return {
        pb: T(t.ratio, (r) => `${1 / r * 100}%`)
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
const Yr = f("div"), fe = [
  "primary",
  "neutral",
  "success",
  "info",
  "warning",
  "danger"
];
function Bo(e) {
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
function $o(e) {
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
          backgroundColor: z(e.colors[o].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: e.colors[o][200],
            backgroundColor: z(e.colors[o].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: z(e.colors[o].mainChannel, 0.4),
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
function Wo(e) {
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
            backgroundColor: z(e.colors[o].mainChannel, 0.1),
            borderColor: e.colors[o][700]
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: z(e.colors[o].mainChannel, 0.2),
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
function qo(e) {
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
            backgroundColor: z(e.colors[o].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: e.colors[o][200],
            backgroundColor: z(e.colors[o].mainChannel, 0.2),
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
function No() {
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
const Vo = E(
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
        ...ye(e)
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
        ...Bo(e),
        ...$o(e),
        ...Wo(e),
        ...qo(e),
        ...No()
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
        animation: `1s linear infinite ${qt}`
      }
    }
  }),
  {
    variant: "default",
    colorScheme: "primary",
    size: "md"
  }
), lt = q();
function Se() {
  const e = N(lt);
  if (!e)
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  return e;
}
const Go = f("div", {
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
}, "hope-ButtonGroup-root"), at = q();
function Ko() {
  return N(at);
}
const Ur = c((e) => {
  e = _({}, e);
  const [t, o, r] = u(e, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return s(at.Provider, {
    value: o,
    get children() {
      return s(Go, l({
        role: "group",
        get orientation() {
          return t.orientation;
        }
      }, r));
    }
  });
}), He = c((e) => {
  const t = Se(), [o, r] = u(e, ["class", "__css"]);
  return s(f.span, l({
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
}), Le = c((e) => {
  const t = Se(), [o, r] = u(e, ["class", "children", "hasLoadingText"]);
  return s(f.div, l({
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
      return s(I, {
        get when() {
          return o.children;
        },
        get fallback() {
          return s(Io, {
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
const jo = ["button", "color", "file", "image", "reset", "submit"];
function Be(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? jo.indexOf(e.type) !== -1 : !1;
}
const Yo = /* @__PURE__ */ U("<span></span>", 2), Uo = c((e) => {
  let t;
  const o = Ko(), r = _({
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
  e = H("Button", {
    loaderPlacement: "start"
  }, r);
  const [n, i, g, b] = u(e, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...L, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]), m = Bt(() => t, () => e.as || "button"), [p, d] = k(m() != null && Be({
    tagName: m(),
    type: n.type
  })), a = A(() => n.type != null ? n.type : p() ? "button" : void 0), {
    baseClasses: h,
    styleOverrides: w
  } = Vo("Button", g);
  return Y(() => {
    t != null && d(Be(t));
  }), s(lt.Provider, {
    value: {
      baseClasses: h,
      styleOverrides: w
    },
    get children() {
      return s(f.button, l({
        get as() {
          return n.as;
        },
        ref(S) {
          const M = X((V) => t = V, n.ref);
          typeof M == "function" && M(S);
        },
        get role() {
          return !p() && m() !== "a" ? "button" : void 0;
        },
        get type() {
          return a();
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
          return C(h().root, n.class);
        },
        get __css() {
          return w().root;
        }
      }, b, {
        get children() {
          return [s(I, {
            get when() {
              return n.isLoading && n.loaderPlacement === "start";
            },
            get children() {
              return s(Le, {
                get hasLoadingText() {
                  return !!n.loadingText;
                },
                get children() {
                  return n.loader;
                }
              });
            }
          }), s(I, {
            get when() {
              return n.isLoading;
            },
            get fallback() {
              return s($e, i);
            },
            get children() {
              return s(I, {
                get when() {
                  return n.loadingText;
                },
                get fallback() {
                  return (() => {
                    const S = Yo.cloneNode(!0);
                    return S.style.setProperty("opacity", "0"), Kt(S, s($e, i)), S;
                  })();
                },
                get children() {
                  return n.loadingText;
                }
              });
            }
          }), s(I, {
            get when() {
              return n.isLoading && n.loaderPlacement === "end";
            },
            get children() {
              return s(Le, {
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
function $e(e) {
  const t = Se();
  return [s(I, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return s(He, {
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
  }), ee(() => e.children), s(I, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return s(He, {
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
const Xr = c((e) => s(Uo, l({
  isIconButton: !0
}, e)));
/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */
const Zr = f("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root"), Xo = f("div", ({
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
}), "hope-Container-root"), Jr = c((e) => {
  e = _({
    isCentered: !0
  }, e);
  const [t, o] = u(e, ["isCentered"]);
  return s(Xo, l({
    get mx() {
      return T(t.isCentered, (r) => r ? "auto" : void 0);
    }
  }, o));
}), Zo = E(
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
), Qr = c((e) => {
  e = H("Divider", {
    variant: "solid",
    thickness: "1px"
  }, e);
  const [t, o, r] = u(e, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]), n = Gt(() => e.children), i = () => !!n(), g = () => o.orientation === "vertical", b = A(() => {
    const d = g() ? "borderLeftStyle" : "borderTopStyle", a = g() ? "borderLeftWidth" : "borderTopWidth";
    return i() ? {
      _before: {
        [d]: t.variant,
        [a]: t.thickness
      },
      _after: {
        [d]: t.variant,
        [a]: t.thickness
      }
    } : {
      [d]: t.variant,
      [a]: t.thickness
    };
  }), {
    baseClasses: m,
    styleOverrides: p
  } = Zo("Divider", {
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
  return s(f.hr, l({
    get as() {
      return i() ? "div" : "hr";
    },
    get role() {
      return i() ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return g() ? "vertical" : "horizontal";
    },
    get class() {
      return C(m().root, t.class);
    },
    get __css() {
      return {
        ...p().root,
        ...b()
      };
    }
  }, r, {
    get children() {
      return s(I, {
        get when() {
          return i();
        },
        get children() {
          return s(f.span, l({
            get class() {
              return m().label;
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
}), Jo = E((e) => ({
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
        light: z(e.vars.colors.neutral.darkChannel, 0.75),
        dark: z(e.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
})), ct = q();
function re() {
  const e = N(ct);
  if (!e)
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  return e;
}
const Qo = c((e) => {
  const t = re();
  e = _({
    "aria-label": "Close drawer",
    size: "md"
  }, e);
  const [o, r] = u(e, ["class", "onClick"]);
  return s(ve, l({
    get class() {
      return C("hope-Drawer-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), x(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}), er = c((e) => {
  const t = re(), [o, r] = u(e, ["class", "style", "onClick"]), n = (g) => {
    g.stopPropagation(), x(o.onClick, g);
  }, i = A(() => ({
    ...o.style,
    ...t.contentTransition.style()
  }));
  return s(xe, {
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
      return s(f.section, l({
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
}), tr = c((e) => {
  const t = re(), [o, r] = u(e, ["class"]);
  return $(() => {
    t.setDescriptionId(`${t.contentId()}-description`), O(() => t.setDescriptionId(void 0));
  }), s(f.p, l({
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
}), or = c((e) => {
  const t = re(), [o, r] = u(e, ["class"]);
  return $(() => {
    t.setHeadingId(`${t.contentId()}-heading`), O(() => t.setHeadingId(void 0));
  }), s(f.h2, l({
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
}), rr = c((e) => {
  const t = re(), [o, r] = u(e, ["class", "style", "children"]), n = A(() => ({
    ...o.style,
    ...t.overlayTransition.style()
  }));
  return s(f.div, l({
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
}), nr = {
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
  e = H("Drawer", {
    id: `hope-drawer-${de()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: !0,
    closeOnEsc: !0,
    preventScroll: !0,
    trapFocus: !0
  }, e);
  const [t] = u(e, [...L, "size", "placement"]), {
    baseClasses: o,
    styleOverrides: r
  } = Jo("Drawer", t), {
    headingId: n,
    setHeadingId: i,
    descriptionId: g,
    setDescriptionId: b,
    overlayTransition: m,
    onContainerMouseDown: p,
    onContainerKeyDown: d,
    onContainerClick: a,
    onCloseButtonClick: h
  } = ot(e), w = ce(() => e.isOpen, () => _({
    transition: nr[e.placement],
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.contentTransitionOptions ?? {})), S = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: () => e.isOpen,
    contentTransition: w,
    overlayTransition: m,
    contentId: () => e.id,
    headingId: n,
    setHeadingId: i,
    descriptionId: g,
    setDescriptionId: b,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onContainerMouseDown: p,
    onContainerKeyDown: d,
    onContainerClick: a,
    onCloseButtonClick: h
  };
  return s(I, {
    get when() {
      return ee(() => !!m.keepMounted())() && w.keepMounted();
    },
    get children() {
      return s(ge, {
        get children() {
          return s(ct.Provider, {
            value: S,
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
};
ne.Overlay = rr;
ne.Content = er;
ne.CloseButton = Qo;
ne.Heading = or;
ne.Description = tr;
const en = c((e) => {
  const [t, o] = u(e, ["class", "direction", "wrap", "align", "justify"]);
  return s(f.div, l({
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
}), We = {
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
}, sr = E(
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
        ...We,
        color: {
          light: "neutral.600",
          dark: "neutral.400"
        }
      }
    },
    error: {
      baseStyle: {
        ...We,
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
), dt = q();
function we() {
  return N(dt);
}
function ke() {
  const e = we();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component"
    );
  return e;
}
const ir = c((e) => {
  const t = ke(), [o, r] = u(e, ["id", "class", "__css"]), n = () => o.id ?? t.descriptionId();
  return Y(() => t.setHasDescription(!0)), O(() => t.setHasDescription(!1)), s(f.div, l({
    get id() {
      return n();
    },
    get ["data-required"]() {
      return y(t.isRequired());
    },
    get ["data-disabled"]() {
      return y(t.isDisabled());
    },
    get ["data-readonly"]() {
      return y(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return y(t.isInvalid());
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
}), lr = c((e) => {
  const t = ke(), [o, r] = u(e, ["id", "class", "__css"]), n = () => o.id ?? t.errorId();
  return Y(() => t.setHasError(!0)), O(() => t.setHasError(!1)), s(f.div, l({
    "aria-live": "polite",
    get id() {
      return n();
    },
    get ["data-required"]() {
      return y(t.isRequired());
    },
    get ["data-disabled"]() {
      return y(t.isDisabled());
    },
    get ["data-readonly"]() {
      return y(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return y(t.isInvalid());
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
}), ar = c((e) => {
  const t = ke(), [o, r] = u(e, ["id", "for", "class", "__css"]), n = () => o.id ?? t.labelId(), i = () => o.for ?? t.id();
  return s(f.label, l({
    get id() {
      return n();
    },
    get for() {
      return i();
    },
    get ["data-required"]() {
      return y(t.isRequired());
    },
    get ["data-disabled"]() {
      return y(t.isDisabled());
    },
    get ["data-readonly"]() {
      return y(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return y(t.isInvalid());
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
}), Ie = c((e) => {
  e = H("FormControl", {
    id: `hope-form-control-${de()}`
  }, e);
  const [t, o, r] = u(e, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...L, "withRequiredIndicator"]), [n, i] = k(!1), [g, b] = k(!1), {
    baseClasses: m,
    styleOverrides: p
  } = sr("FormControl", o), d = () => `${e.id}-description`, a = () => `${e.id}-error`, h = () => e.isInvalid, S = {
    id: () => e.id,
    labelId: () => `${e.id}-label`,
    descriptionId: d,
    errorId: a,
    isRequired: () => e.isRequired,
    isDisabled: () => e.isDisabled,
    isReadOnly: () => e.isReadOnly,
    isInvalid: h,
    unstyled: () => o.unstyled,
    baseClasses: m,
    styleOverrides: p,
    hasDescription: n,
    setHasDescription: i,
    hasError: g,
    setHasError: b,
    mergeAriaDescribedBy: (M) => {
      const V = M ? [M] : [];
      return g() && h() && V.push(a()), n() && V.push(d()), V.join(" ") || void 0;
    }
  };
  return s(dt.Provider, {
    value: S,
    get children() {
      return s(f.div, l({
        role: "group",
        get ["data-required"]() {
          return y(S.isRequired());
        },
        get ["data-disabled"]() {
          return y(S.isDisabled());
        },
        get ["data-readonly"]() {
          return y(S.isReadOnly());
        },
        get ["data-invalid"]() {
          return y(S.isInvalid());
        },
        get class() {
          return C(m().root, t.class);
        },
        get __css() {
          return p().root;
        }
      }, r));
    }
  });
});
Ie.Label = ar;
Ie.Description = ir;
Ie.Error = lr;
const cr = c((e) => {
  const [t, o] = u(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return s(f.div, l({
    get class() {
      return C("hope-GridItem-root", t.class);
    },
    get __css() {
      return Ye({
        gridArea: t.area,
        gridColumn: qe(t.colSpan),
        gridRow: qe(t.rowSpan),
        gridColumnStart: t.colStart,
        gridColumnEnd: t.colEnd,
        gridRowStart: t.rowStart,
        gridRowEnd: t.rowEnd
      });
    }
  }, o));
});
function qe(e) {
  return T(e, (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`);
}
const ut = c((e) => {
  const [t, o] = u(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return s(f.div, l({
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
ut.Item = cr;
const tn = c((e) => {
  const [t, o] = u(e, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]), r = Nt(), n = () => t.minChildWidth ? dr(t.minChildWidth, r.vars) : ur(t.columns);
  return s(ut, l({
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
function dr(e, t) {
  return T(e, (o) => {
    const r = Vt(o, "sizes", t);
    return Ue(o) ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function ur(e) {
  return T(e, (t) => Ue(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
const gr = E({
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
}), on = c((e) => {
  e = H("Heading", {}, e);
  const [t, o, r] = u(e, ["as", "class", "level", "lineClamp"], [...L, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = gr("Heading", o), g = () => t.level ? `h${t.level}` : t.as, b = A(() => ({
    ...i().root,
    ...et(t.lineClamp)
  }));
  return s(f.h2, l({
    get as() {
      return g();
    },
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return b();
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
function hr(e) {
  const [t, o] = k("pending"), r = () => e.ignoreFallback ? "loaded" : t();
  let n = null;
  const i = () => {
    n && (n.onload = null, n.onerror = null, n = null);
  }, g = () => {
    if (!e.src)
      return;
    i();
    const b = new Image();
    b.src = e.src, e.crossOrigin && (b.crossOrigin = e.crossOrigin), e.srcSet && (b.srcset = e.srcSet), e.sizes && (b.sizes = e.sizes), e.loading && (b.loading = e.loading), b.onload = (m) => {
      i(), o("loaded"), x(e.onLoad, m);
    }, b.onerror = (m) => {
      i(), o("failed"), x(e.onError, m);
    }, n = b;
  };
  return $(() => {
    o(e.src ? "loading" : "pending");
  }), Ge(() => {
    e.ignoreFallback || (t() === "loading" && g(), O(() => {
      i();
    }));
  }), r;
}
const rn = c((e) => {
  const [t, o, r] = u(e, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), n = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, i = hr(Ve(e, {
    get ignoreFallback() {
      return n();
    }
  })), g = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    ...n() ? o : {},
    ...r
  });
  return s(I, {
    get when() {
      return i() === "loaded";
    },
    get fallback() {
      return s(I, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return s(f.img, l({
            get src() {
              return t.fallbackSrc;
            },
            class: "hope-Image-placeholder"
          }, g));
        },
        get children() {
          return t.fallback;
        }
      });
    },
    get children() {
      return s(f.img, l({
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
      }, g));
    }
  });
}), nn = c((e) => {
  const [t, o] = u(e, ["class"]);
  return s(f.img, l({
    get class() {
      return C("hope-Image-root", t.class);
    }
  }, o));
}), gt = {
  variant: "outlined",
  size: "md"
}, P = {
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
}, fr = E(
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
            light: `0 0 0 3px ${z(e.colors.primary.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${z(e.colors.primary.darkChannel, 0.75)}`
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
            light: `0 0 0 3px ${z(e.colors.danger.lightChannel, 0.75)}`,
            dark: `0 0 0 3px ${z(e.colors.danger.darkChannel, 0.75)}`
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
            ...P.sm,
            px: 2.5
          },
          md: {
            ...P.md,
            px: 3
          },
          lg: {
            ...P.lg,
            px: 4
          }
        }
      }
    }
  }),
  gt
), ht = q();
function ft() {
  return N(ht);
}
function mt() {
  const e = ft();
  if (!e)
    throw new Error(
      "[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component"
    );
  return e;
}
const sn = c((e) => {
  const t = we(), o = ft();
  e = H("Input", {}, e);
  const [r, n, i] = u(e, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...L, "variant", "size"]), {
    baseClasses: g,
    styleOverrides: b
  } = fr("Input", {
    get variant() {
      return o?.variant() ?? n.variant;
    },
    get size() {
      return o?.size() ?? n.size;
    },
    get styleConfigOverride() {
      return n.styleConfigOverride;
    },
    get unstyled() {
      return o?.unstyled() ?? n.unstyled;
    }
  }), m = () => r.isRequired ?? o?.isRequired() ?? t?.isRequired(), p = () => r.isDisabled ?? o?.isDisabled() ?? t?.isDisabled(), d = () => r.isReadOnly ?? o?.isReadOnly() ?? t?.isReadOnly(), a = () => r.isInvalid ?? o?.isInvalid() ?? t?.isInvalid(), h = () => t?.mergeAriaDescribedBy(r["aria-describedby"]);
  return s(f.input, l({
    type: "text",
    get id() {
      return r.id ?? t?.id();
    },
    get required() {
      return m();
    },
    get disabled() {
      return p();
    },
    get readOnly() {
      return d();
    },
    get ["aria-invalid"]() {
      return Xt(a());
    },
    get ["aria-describedby"]() {
      return h();
    },
    get size() {
      return r.htmlSize;
    },
    get class() {
      return C(o?.baseClasses().input, g().root, r.class);
    },
    get __css() {
      return {
        ...o?.styleOverrides().input,
        ...b().root,
        ...r.__css
      };
    }
  }, i));
});
function Ce(e) {
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
const mr = E(
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
        ...Ce({
          size: "sm",
          paddingWithSection: 8
        }),
        ...Ce({
          size: "md",
          paddingWithSection: 10
        }),
        ...Ce({
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
            ...P.sm,
            height: "100%",
            width: P.sm.minHeight
          },
          md: {
            ...P.md,
            height: "100%",
            width: P.md.minHeight
          },
          lg: {
            ...P.lg,
            height: "100%",
            width: P.lg.minHeight
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
            ...P.sm,
            px: 2.5
          },
          md: {
            ...P.md,
            px: 3
          },
          lg: {
            ...P.lg,
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
  gt
), pt = c((e) => {
  const t = mt(), [o, r] = u(e, ["class", "__css", "addonPlacement"]), n = A(() => {
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
  return Y(() => {
    switch (o.addonPlacement) {
      case "left":
        t.setHasLeftAddon(!0), O(() => t.setHasLeftAddon(!1));
        break;
      case "right":
        t.setHasRightAddon(!0), O(() => t.setHasRightAddon(!1));
        break;
    }
  }), s(f.div, l({
    get ["data-required"]() {
      return y(t.isRequired());
    },
    get ["data-disabled"]() {
      return y(t.isDisabled());
    },
    get ["data-readonly"]() {
      return y(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return y(t.isInvalid());
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
}), pr = c((e) => s(pt, l({
  addonPlacement: "left"
}, e))), br = c((e) => s(pt, l({
  addonPlacement: "right"
}, e))), bt = c((e) => {
  const t = mt(), [o, r] = u(e, ["class", "__css", "sectionPlacement"]), n = A(() => {
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
  return Y(() => {
    switch (o.sectionPlacement) {
      case "left":
        t.setHasLeftSection(!0), O(() => t.setHasLeftSection(!1));
        break;
      case "right":
        t.setHasRightSection(!0), O(() => t.setHasRightSection(!1));
        break;
    }
  }), s(f.div, l({
    get ["data-required"]() {
      return y(t.isRequired());
    },
    get ["data-disabled"]() {
      return y(t.isDisabled());
    },
    get ["data-readonly"]() {
      return y(t.isReadOnly());
    },
    get ["data-invalid"]() {
      return y(t.isInvalid());
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
}), Cr = c((e) => s(bt, l({
  sectionPlacement: "left"
}, e))), yr = c((e) => s(bt, l({
  sectionPlacement: "right"
}, e))), me = c((e) => {
  const t = we();
  e = H("InputGroup", {}, e);
  const [o, r, n] = u(e, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...L, "variant", "size"]), [i, g] = k(!1), [b, m] = k(!1), [p, d] = k(!1), [a, h] = k(!1), {
    baseClasses: w,
    styleOverrides: S
  } = mr("InputGroup", {
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
      return b();
    },
    get hasLeftAddon() {
      return p();
    },
    get hasRightAddon() {
      return a();
    },
    get styleConfigOverride() {
      return r.styleConfigOverride;
    },
    get unstyled() {
      return r.unstyled;
    }
  }), M = {
    isRequired: () => e.isRequired ?? t?.isRequired(),
    isDisabled: () => e.isDisabled ?? t?.isDisabled(),
    isReadOnly: () => e.isReadOnly ?? t?.isReadOnly(),
    isInvalid: () => e.isInvalid ?? t?.isInvalid(),
    variant: () => r.variant,
    size: () => r.size,
    unstyled: () => r.unstyled,
    baseClasses: w,
    styleOverrides: S,
    setHasLeftSection: g,
    setHasRightSection: m,
    setHasLeftAddon: d,
    setHasRightAddon: h
  };
  return s(ht.Provider, {
    value: M,
    get children() {
      return s(f.div, l({
        get ["data-required"]() {
          return y(M.isRequired());
        },
        get ["data-disabled"]() {
          return y(M.isDisabled());
        },
        get ["data-readonly"]() {
          return y(M.isReadOnly());
        },
        get ["data-invalid"]() {
          return y(M.isInvalid());
        },
        get class() {
          return C(w().root, o.class);
        },
        get __css() {
          return S().root;
        }
      }, n));
    }
  });
});
me.LeftAddon = pr;
me.RightAddon = br;
me.LeftSection = Cr;
me.RightSection = yr;
const vr = E({
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
}), ln = c((e) => {
  const [t, o, r] = u(e, ["class"], L), {
    baseClasses: n,
    styleOverrides: i
  } = vr("Kbd", o);
  return s(f.kbd, l({
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return i().root;
    }
  }, r));
}), xr = E((e) => ({
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
})), Ct = q();
function G() {
  const e = N(Ct);
  if (!e)
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  return e;
}
const Sr = c((e) => {
  const t = G(), [o, r] = u(e, ["ref"]);
  return s(f.div, l({
    ref(n) {
      const i = X(t.setAnchorRef, o.ref);
      typeof i == "function" && i(n);
    }
  }, r));
}), wr = c((e) => {
  const t = G();
  e = _({
    "aria-label": "Close popover",
    size: "sm"
  }, e);
  const [o, r] = u(e, ["class", "onClick"]);
  return s(ve, l({
    get class() {
      return C("hope-Popover-closeButton", o.class);
    },
    onClick: (i) => {
      i.stopPropagation(), x(o.onClick, i), t.onCloseButtonClick();
    }
  }, r));
}), kr = /* @__PURE__ */ U('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>', 8), yt = 30, W = yt / 2, Ir = {
  top: `rotate(180 ${W} ${W})`,
  right: `rotate(-90 ${W} ${W})`,
  bottom: `rotate(0 ${W} ${W})`,
  left: `rotate(90 ${W} ${W})`
}, _r = c((e) => {
  const t = G(), [o, r] = u(e, ["ref", "class", "style", "children"]), n = () => t.currentPlacement().split("-")[0], i = Or(t.contentRef), g = () => i()?.getPropertyValue("background-color") || "none", b = () => i()?.getPropertyValue(`border-${n()}-color`) || "none", m = () => i()?.getPropertyValue(`border-${n()}-width`) || "0px", p = () => parseInt(m()) * 2 * (yt / t.arrowSize());
  return s(f.div, l({
    ref(d) {
      const a = X(t.setArrowRef, o.ref);
      typeof a == "function" && a(d);
    },
    "aria-hidden": "true",
    get style() {
      return {
        "font-size": `${t.arrowSize()}px`,
        fill: g(),
        stroke: b(),
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
      const d = kr.cloneNode(!0), a = d.firstChild;
      return a.firstChild.nextSibling, Ke(() => je(a, "transform", Ir[n()])), d;
    }
  }));
});
function Or(e) {
  const [t, o] = k();
  return Ge(() => {
    const r = e();
    r && o(Zt(r).getComputedStyle(r));
  }), t;
}
const Rr = c((e) => {
  const t = G(), [o, r] = u(e, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", g = (a) => {
    a.stopPropagation(), x(o.onKeyDown, a), x(t.onContentKeyDown, a);
  }, b = (a) => {
    x(o.onFocusOut, a), x(t.onContentFocusOut, a);
  }, m = (a) => {
    x(o.onMouseEnter, a), i() && t.onContentMouseEnter();
  }, p = (a) => {
    x(o.onMouseLeave, a), i() && x(t.onContentMouseLeave, a);
  }, d = A(() => ({
    ...o.style,
    ...t.popoverTransition.style()
  }));
  return s(I, {
    get when() {
      return t.popoverTransition.keepMounted();
    },
    get children() {
      return s(ge, {
        get children() {
          return s(xe, l({
            as: "section",
            autoFocus: !0,
            get restoreFocus() {
              return n();
            },
            ref(a) {
              const h = X(t.setContentRef, o.ref);
              typeof h == "function" && h(a);
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
              return d();
            },
            get __css() {
              return t.styleOverrides().root;
            },
            onKeyDown: g,
            onFocusOut: b,
            onMouseEnter: m,
            onMouseLeave: p
          }, r, {
            get children() {
              return [s(I, {
                get when() {
                  return t.withArrow();
                },
                get children() {
                  return s(_r, {});
                }
              }), ee(() => o.children)];
            }
          }));
        }
      });
    }
  });
}), zr = c((e) => {
  const t = G(), [o, r] = u(e, ["class"]);
  return $(() => {
    t.setDescriptionId(`${t.popoverId()}-description`), O(() => t.setDescriptionId(void 0));
  }), s(f.p, l({
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
}), Dr = c((e) => {
  const t = G(), [o, r] = u(e, ["class"]);
  return $(() => {
    t.setHeadingId(`${t.popoverId()}-heading`), O(() => t.setHeadingId(void 0));
  }), s(f.h2, l({
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
}), Ar = c((e) => {
  const t = G(), [o, r] = u(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), n = () => t.triggerMode() === "click", i = () => t.triggerMode() === "hover", g = (h) => {
    x(o.onClick, h), n() && (h.stopPropagation(), t.onTriggerClick());
  }, b = (h) => {
    x(o.onKeyDown, h), i() && (h.stopPropagation(), x(t.onTriggerKeyDown, h));
  }, m = (h) => {
    x(o.onFocus, h), i() && t.onTriggerFocus();
  }, p = (h) => {
    x(o.onBlur, h), i() && x(t.onTriggerBlur, h);
  }, d = (h) => {
    x(o.onMouseEnter, h), i() && t.onTriggerMouseEnter();
  }, a = (h) => {
    x(o.onMouseLeave, h), i() && t.onTriggerMouseLeave();
  };
  return s(f.button, l({
    ref(h) {
      const w = X(t.setTriggerRef, o.ref);
      typeof w == "function" && w(h);
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
    onClick: g,
    onKeyDown: b,
    onFocus: m,
    onBlur: p,
    onMouseEnter: d,
    onMouseLeave: a
  }, r));
});
/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */
function Ne(e) {
  const { x: t = 0, y: o = 0, width: r = 0, height: n = 0 } = e ?? {};
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
function Mr(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const r = t(e);
      return r ? Ne(r) : e ? e.getBoundingClientRect() : Ne();
    }
  };
}
const Z = (e) => {
  e = H("Popover", {
    getAnchorRect: (v) => v?.getBoundingClientRect(),
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
  const [t] = u(e, [...L]), {
    baseClasses: o,
    styleOverrides: r
  } = xr("Popover", t), [n, i] = k(), [g, b] = k(), [m, p] = k(), [d, a] = k(), [h, w] = k(!1), [S, M] = k(e.placement), [V, xt] = k(), [St, wt] = k(), R = $t({
    isOpen: () => e.isOpen,
    defaultIsOpen: () => !!e.defaultIsOpen,
    onOpenChange: (v) => e.onOpenChange?.(v)
  }), kt = ce(() => R.isOpen(), () => _({
    transition: "pop",
    easing: "ease-out",
    exitEasing: "ease-in"
  }, e.transitionOptions ?? {})), _e = () => {
    const v = Mr(n() ?? g(), e.getAnchorRect), D = d(), F = m();
    return {
      anchorEl: v,
      arrowEl: D,
      floatingEl: F
    };
  };
  async function Oe() {
    const {
      anchorEl: v,
      arrowEl: D,
      floatingEl: F
    } = _e();
    if (!v || !F)
      return;
    v.getBoundingClientRect();
    const J = [eo(e.offset), to({
      padding: e.overflowPadding
    }), oo({
      padding: e.overflowPadding
    }), ro({
      padding: e.overflowPadding,
      apply({
        rects: se
      }) {
        const ie = Math.round(se.reference.width);
        e.hasSameWidth && (F.style.width = `${ie}px`);
      }
    })];
    D && J.push(no({
      element: D,
      padding: e.arrowPadding
    })), J.push(so());
    const B = await io(v, F, {
      placement: e.placement,
      middleware: J
    });
    if (B.placement !== S() && M(B.placement), !!F && (Object.assign(F.style, {
      left: `${Math.round(B.x)}px`,
      top: `${Math.round(B.y)}px`,
      visibility: B.middlewareData.hide?.referenceHidden ? "hidden" : "visible"
    }), D && B.middlewareData.arrow)) {
      const {
        x: se,
        y: ie
      } = B.middlewareData.arrow, Ht = B.placement.split("-")[0];
      Object.assign(D.style, {
        left: se != null ? `${se}px` : "",
        top: ie != null ? `${ie}px` : "",
        [Ht]: "100%"
      });
    }
  }
  let K, pe;
  const It = () => {
    R.toggle();
  }, _t = (v) => {
    v.key === "Escape" && R.close();
  }, Ot = () => {
    K == null && R.open();
  }, Rt = (v) => {
    const D = De(v), F = !ae(m(), D);
    R.isOpen() && e.closeOnBlur && F && R.close();
  }, zt = () => {
    w(!0), K = window.setTimeout(() => {
      R.open(), Oe();
    }, e.openDelay);
  }, Dt = () => {
    w(!1), K && (clearTimeout(K), K = void 0), pe = window.setTimeout(() => {
      h() || R.close();
    }, e.closeDelay);
  }, At = (v) => {
    e.closeOnEsc && v.key === "Escape" && R.close();
  }, Mt = (v) => {
    const D = De(v), F = ae(m(), D), J = ae(g(), D), B = !F && !J;
    R.isOpen() && e.closeOnBlur && B && R.close();
  }, Ft = () => {
    w(!0);
  }, Et = (v) => {
    v.relatedTarget !== null && (w(!1), pe = window.setTimeout(R.close, e.closeDelay));
  }, Pt = () => {
    R.close();
  };
  $(() => {
    const {
      anchorEl: v,
      floatingEl: D
    } = _e();
    if (!v || !D)
      return;
    const F = Qt(v, D, Oe, {
      elementResize: typeof ResizeObserver == "function"
    });
    O(F);
  }), O(() => {
    ue || (window.clearTimeout(K), window.clearTimeout(pe));
  });
  const Tt = {
    baseClasses: o,
    styleOverrides: r,
    isOpen: R.isOpen,
    popoverTransition: kt,
    triggerMode: () => e.triggerMode,
    withArrow: () => e.withArrow,
    arrowSize: () => e.arrowSize,
    currentPlacement: S,
    popoverId: () => e.id,
    headingId: V,
    setHeadingId: xt,
    descriptionId: St,
    setDescriptionId: wt,
    contentRef: m,
    setContentRef: p,
    setArrowRef: a,
    setAnchorRef: i,
    setTriggerRef: b,
    trapFocus: () => e.trapFocus,
    initialFocusSelector: () => e.initialFocusSelector,
    restoreFocusSelector: () => e.restoreFocusSelector,
    onTriggerClick: It,
    onTriggerKeyDown: _t,
    onTriggerFocus: Ot,
    onTriggerBlur: Rt,
    onTriggerMouseEnter: zt,
    onTriggerMouseLeave: Dt,
    onContentKeyDown: At,
    onContentFocusOut: Mt,
    onContentMouseEnter: Ft,
    onContentMouseLeave: Et,
    onCloseButtonClick: Pt
  };
  return s(Ct.Provider, {
    value: Tt,
    get children() {
      return Jt(e.children, R);
    }
  });
};
Z.Trigger = Ar;
Z.Anchor = Sr;
Z.Content = Rr;
Z.CloseButton = wr;
Z.Heading = Dr;
Z.Description = zr;
function an(e) {
  const [t, o] = u(e, ["children", "withinPortal"]);
  return s(I, {
    get when() {
      return t.withinPortal;
    },
    get fallback() {
      return t.children;
    },
    get children() {
      return s(ge, l(o, {
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
const cn = f("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root"), vt = c((e) => {
  e = _({
    align: "center"
  }, e);
  const [t, o] = u(e, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return s(f.div, l({
    get class() {
      return C("hope-Stack-root", t.class);
    },
    get __css() {
      return Ye({
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
}), dn = c((e) => {
  e = _({
    reverse: !1
  }, e);
  const [t, o] = u(e, ["reverse"]);
  return s(vt, l(o, {
    get direction() {
      return T(t.reverse, (r) => r ? "row-reverse" : "row");
    }
  }));
}), un = c((e) => {
  e = _({
    reverse: !1
  }, e);
  const [t, o] = u(e, ["reverse"]);
  return s(vt, l(o, {
    get direction() {
      return T(t.reverse, (r) => r ? "column-reverse" : "column");
    }
  }));
}), Fr = E({
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
}), gn = c((e) => {
  e = H("Text", {}, e);
  const [t, o, r] = u(e, ["class", "lineClamp"], [...L, "size"]), {
    baseClasses: n,
    styleOverrides: i
  } = Fr("Text", o), g = A(() => ({
    ...i().root,
    ...et(t.lineClamp)
  }));
  return s(f.p, l({
    get class() {
      return C(n().root, t.class);
    },
    get __css() {
      return g();
    }
  }, r));
});
export {
  Kr as Anchor,
  jr as AspectRatio,
  Yr as Box,
  Uo as Button,
  Ur as ButtonGroup,
  he as COLOR_MODE_STORAGE_KEY,
  Zr as Center,
  ve as CloseButton,
  Xe as ColorModeContext,
  po as ColorModeProvider,
  Nr as ColorModeScript,
  Jr as Container,
  Qr as Divider,
  ne as Drawer,
  Qo as DrawerCloseButton,
  er as DrawerContent,
  tr as DrawerDescription,
  or as DrawerHeading,
  rr as DrawerOverlay,
  en as Flex,
  xe as FocusTrapRegion,
  Ie as FormControl,
  dt as FormControlContext,
  ir as FormControlDescription,
  lr as FormControlError,
  ar as FormControlLabel,
  ut as Grid,
  cr as GridItem,
  dn as HStack,
  on as Heading,
  Gr as HopeProvider,
  So as Icon,
  Xr as IconButton,
  rn as Image,
  nn as Img,
  sn as Input,
  me as InputGroup,
  pr as InputGroupLeftAddon,
  Cr as InputGroupLeftSection,
  br as InputGroupRightAddon,
  yr as InputGroupRightSection,
  ln as Kbd,
  oe as Modal,
  Ro as ModalCloseButton,
  Do as ModalContent,
  Ao as ModalDescription,
  Mo as ModalHeading,
  Fo as ModalOverlay,
  an as OptionalPortal,
  Z as Popover,
  Sr as PopoverAnchor,
  _r as PopoverArrow,
  wr as PopoverCloseButton,
  Rr as PopoverContent,
  zr as PopoverDescription,
  Dr as PopoverHeading,
  Ar as PopoverTrigger,
  tn as SimpleGrid,
  cn as Spacer,
  vt as Stack,
  gn as Text,
  un as VStack,
  zo as VisuallyHidden,
  Vr as VisuallyHiddenInput,
  Wr as cookieStorageManager,
  qr as cookieStorageManagerSSR,
  Ze as createCookieStorageManager,
  nt as createIcon,
  hr as createImageLoadingStatus,
  ao as createLocalStorageManager,
  et as lineClamp,
  co as localStorageManager,
  _ as mergeDefaultProps,
  z as rgba,
  Ko as useButtonGroupContext,
  lo as useColorMode,
  $r as useColorModeValue,
  we as useFormControlContext,
  ke as useRequiredFormControlContext,
  To as watchModals
};
