'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var primitives = require('@hope-ui/primitives');
var styles = require('@hope-ui/styles');
var solidJs = require('solid-js');
var web = require('solid-js/web');
var utils = require('@hope-ui/utils');
var dom = require('@floating-ui/dom');

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-context.ts
 */
const ColorModeContext = solidJs.createContext();

/**
 * Primitive that reads from `ColorModeProvider` context,
 * Returns the color mode and function to toggle it.
 */
function useColorMode() {
  const context = solidJs.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("[hope-ui]: useColorMode must be used within a ColorModeProvider");
  }
  return context;
}

/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 * @return A memoized value based on the color mode.
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
function useColorModeValue(light, dark) {
  const {
    colorMode
  } = useColorMode();
  return solidJs.createMemo(() => colorMode() === "dark" ? dark : light);
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */
const COLOR_MODE_STORAGE_KEY = "hope-ui-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get: fallback => {
      if (web.isServer) {
        return fallback;
      }
      let value;
      try {
        value = localStorage.getItem(key);
      } catch (e) {
        // noop
      }
      return value ?? fallback;
    },
    set: value => {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        // noop
      }
    }
  };
}
const localStorageManager = createLocalStorageManager(COLOR_MODE_STORAGE_KEY);
function parseCookie(cookie, key) {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match?.[2];
}
function createCookieStorageManager(key, cookie) {
  return {
    ssr: !!cookie,
    type: "cookie",
    get: fallback => {
      if (cookie) {
        return parseCookie(cookie, key) ?? fallback;
      }
      if (web.isServer) {
        return fallback;
      }
      return parseCookie(document.cookie, key) ?? fallback;
    },
    set: value => {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
    }
  };
}
const cookieStorageManager = createCookieStorageManager(COLOR_MODE_STORAGE_KEY);
function cookieStorageManagerSSR(cookie) {
  return createCookieStorageManager(COLOR_MODE_STORAGE_KEY, cookie);
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
function query() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function preventTransition() {
  const css = document.createElement("style");
  css.appendChild(document.createTextNode(`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`));
  document.head.appendChild(css);
  return () => {
    // force a reflow
    (() => window.getComputedStyle(document.body))();

    // wait for next tick
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css);
      });
    });
  };
}
function setColorModeClassName(isDark) {
  document.body.classList.add(isDark ? styles.COLOR_MODE_CLASSNAMES.dark : styles.COLOR_MODE_CLASSNAMES.light);
  document.body.classList.remove(isDark ? styles.COLOR_MODE_CLASSNAMES.light : styles.COLOR_MODE_CLASSNAMES.dark);
}
function setColorModeDataset(value, shouldPreventTransition = true) {
  const cleanup = shouldPreventTransition ? preventTransition() : undefined;
  document.documentElement.dataset.theme = value;
  document.documentElement.style.colorScheme = value;
  cleanup?.();
}
function getSystemColorMode(fallback) {
  const isDark = query().matches ?? fallback === "dark";
  return isDark ? "dark" : "light";
}
function getInitialColorMode(manager) {
  const fallback = "light";
  const initialColorMode = manager.get(fallback) ?? fallback;
  if (initialColorMode === "system") {
    // We can't know the client system preference in SSR so just return the fallback.
    return web.isServer ? fallback : getSystemColorMode();
  }
  return initialColorMode;
}
function addColorModeListener(fn) {
  const mql = query();
  const listener = e => {
    fn(e.matches ? "dark" : "light");
  };
  mql.addEventListener("change", listener);
  return () => {
    mql.removeEventListener("change", listener);
  };
}

/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
function ColorModeProvider(props) {
  const fallbackColorMode = () => props.initialColorMode ?? "system";
  const colorModeManager = () => props.storageManager ?? localStorageManager;
  let colorModeListenerCleanupFn;
  const [colorMode, rawSetColorMode] = solidJs.createSignal(getInitialColorMode(colorModeManager()));
  const applyColorMode = value => {
    rawSetColorMode(value);
    setColorModeClassName(value === "dark");
    setColorModeDataset(value, props.disableTransitionOnChange);
  };
  const setColorMode = value => {
    if (colorModeListenerCleanupFn) {
      colorModeListenerCleanupFn();
      colorModeListenerCleanupFn = undefined;
    }
    const isSystem = value === "system";
    if (isSystem) {
      colorModeListenerCleanupFn = addColorModeListener(applyColorMode);
    }
    applyColorMode(isSystem ? getSystemColorMode() : value);
    colorModeManager().set(value);
  };
  const toggleColorMode = () => {
    setColorMode(colorMode() === "dark" ? "light" : "dark");
  };
  solidJs.createEffect(() => {
    setColorMode(colorModeManager().get() ?? fallbackColorMode());
  });
  solidJs.onCleanup(() => {
    // ensure listener is always cleaned when component is destroyed.
    colorModeListenerCleanupFn?.();
  });
  const context = {
    colorMode,
    setColorMode,
    toggleColorMode
  };
  return web.createComponent(ColorModeContext.Provider, {
    value: context,
    get children() {
      return props.children;
    }
  });
}

/** Provide the styles for line clamp. */
function lineClamp(value) {
  if (value == null) {
    return {};
  }
  return {
    overflow: styles.mapResponsive(value, value => value != null ? "hidden" : undefined),
    textOverflow: styles.mapResponsive(value, value => value != null ? "ellipsis" : undefined),
    display: styles.mapResponsive(value, value => value != null ? "-webkit-box" : undefined),
    WebkitLineClamp: styles.mapResponsive(value, value => value != null ? value : undefined),
    WebkitBoxOrient: styles.mapResponsive(value, value => value != null ? "vertical" : undefined)
  };
}

function mergeDefaultProps(defaultProps, props) {
  return solidJs.mergeProps(defaultProps, props);
}

/**
 * Return an rgb color + alpha channel.
 *
 * @example
 * rgba(vars.colors.primary.mainChannel, 0.5)
 * =>
 * "rgb(var(--hope-colors-primary-mainChannel) / 0.5)"
 */
function rgba(cssVar, alpha) {
  return `rgb(${cssVar} / ${alpha})`;
}

const _tmpl$$4 = /*#__PURE__*/web.template(`<script id="hope-ui-color-mode-script"></script>`, 2);
const FALLBACK_VALUE = "system";
const VALID_VALUES = new Set(["light", "dark", "system"]);

/**
 * runtime safe-guard against invalid color mode values
 */
function normalize(initialColorMode) {
  if (!VALID_VALUES.has(initialColorMode)) {
    return FALLBACK_VALUE;
  }
  return initialColorMode;
}
function ColorModeScript(props) {
  props = mergeDefaultProps({
    initialColorMode: FALLBACK_VALUE,
    storageType: "localStorage",
    storageKey: COLOR_MODE_STORAGE_KEY
  }, props);
  const scriptSrc = solidJs.createMemo(() => {
    // runtime safe-guard against invalid color mode values
    const init = normalize(props.initialColorMode);
    const cookieScript = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="hope-theme-light",n="hope-theme-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,o},u=a,h="${init}",r="${props.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`;
    const localStorageScript = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="hope-theme-light",d="hope-theme-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,c},n=a,m="${init}",e="${props.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    const fn = props.storageType === "cookie" ? cookieScript : localStorageScript;
    return `!${fn}`.trim();
  });

  // eslint-disable-next-line solid/no-innerhtml
  return (() => {
    const _el$ = _tmpl$$4.cloneNode(true);
    web.effect(_p$ => {
      const _v$ = props.nonce,
        _v$2 = scriptSrc();
      _v$ !== _p$._v$ && web.setAttribute(_el$, "nonce", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && (_el$.innerHTML = _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _el$;
  })();
}

const DEFAULT_OVERLAY_TRANSITION_OPTIONS = {
  transition: "fade",
  duration: 300,
  exitDuration: 200,
  easing: "ease-out",
  exitEasing: "ease-in"
};
function createModal(props) {
  const [headingId, setHeadingId] = solidJs.createSignal();
  const [descriptionId, setDescriptionId] = solidJs.createSignal();
  const overlayTransitionOptions = solidJs.createMemo(() => {
    if (!props.overlayTransitionOptions) {
      return DEFAULT_OVERLAY_TRANSITION_OPTIONS;
    }
    return mergeDefaultProps(DEFAULT_OVERLAY_TRANSITION_OPTIONS, props.overlayTransitionOptions);
  });
  const overlayTransition = primitives.createTransition(() => props.isOpen, overlayTransitionOptions);
  let mouseDownTarget;
  const onContainerMouseDown = event => {
    mouseDownTarget = event.target;
  };
  const onContainerKeyDown = event => {
    if (event.key === "Escape") {
      event.stopPropagation();
      if (props.closeOnEsc) {
        props.onClose();
      }
      props.onEscKeyDown?.();
    }
  };
  const onContainerClick = event => {
    event.stopPropagation();
    /**
     * Prevent the modal from closing when user
     * start dragging from the content, and release drag outside the content.
     *
     * Because it is technically not a considered "click outside".
     */
    if (mouseDownTarget !== event.target) {
      return;
    }
    if (props.closeOnOverlayClick) {
      props.onClose();
    }
    props.onOverlayClick?.();
  };
  const onCloseButtonClick = () => {
    props.onClose();
  };
  primitives.createPreventScroll({
    isEnabled: () => props.isOpen && !!props.preventScroll
  });
  return {
    headingId,
    setHeadingId,
    descriptionId,
    setDescriptionId,
    overlayTransition,
    onContainerMouseDown,
    onContainerKeyDown,
    onContainerClick,
    onCloseButtonClick
  };
}

const useModalStyleConfig = styles.createStyleConfig(theme => ({
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
      backgroundColor: {
        light: "common.white",
        dark: "neutral.700"
      },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      size: {
        xs: {
          maxWidth: "xs"
        },
        sm: {
          maxWidth: "md"
        },
        md: {
          maxWidth: "lg"
        },
        lg: {
          maxWidth: "2xl"
        },
        xl: {
          maxWidth: "4xl"
        },
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
          // my * 2
          overflow: "auto"
        },
        outside: {
          maxHeight: "none",
          overflow: undefined
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
        light: rgba(theme.vars.colors.neutral.darkChannel, 0.75),
        dark: rgba(theme.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));

function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

const _tmpl$$3 = /*#__PURE__*/web.template(`<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>`, 4, true);
const fallbackIcon = {
  viewBox: "0 0 24 24",
  path: () => _tmpl$$3.cloneNode(true)
};
const BaseIcon = styles.hope("svg", {
  baseStyle: {
    display: "inline-block",
    flexShrink: 0,
    boxSize: "1em",
    color: "currentColor",
    lineHeight: "1em"
  }
}, "hope-Icon-root");
const Icon = styles.createHopeComponent(props => {
  props = mergeDefaultProps({
    children: fallbackIcon.path,
    viewBox: fallbackIcon.viewBox,
    color: "currentColor"
  }, props);
  const [local, others] = solidJs.splitProps(props, ["as", "children", "viewBox"]);

  /**
   * If the `as` prop is a component (ex: if you're using an icon library).
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  const shouldRenderComponent = () => local.as && !utils.isString(local.as);
  return web.createComponent(solidJs.Show, {
    get when() {
      return shouldRenderComponent();
    },
    get fallback() {
      return web.createComponent(BaseIcon, web.mergeProps({
        get viewBox() {
          return local.viewBox;
        },
        verticalAlign: "middle"
      }, others, {
        get children() {
          return local.children;
        }
      }));
    },
    get children() {
      return web.createComponent(BaseIcon, web.mergeProps({
        get as() {
          return local.as;
        }
      }, others));
    }
  });
});

function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    defaultProps = {}
  } = options;
  return styles.createHopeComponent(props => web.createComponent(Icon, web.mergeProps({
    viewBox: viewBox
  }, defaultProps, props, {
    get children() {
      return options.path;
    }
  })));
}

const _tmpl$$2 = /*#__PURE__*/web.template(`<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>`, 8, true),
  _tmpl$2 = /*#__PURE__*/web.template(`<svg><path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`, 4, true);
const SpinnerIcon = createIcon({
  path: () => _tmpl$$2.cloneNode(true)
});
const XMarkIcon = createIcon({
  path: () => _tmpl$2.cloneNode(true)
});

const useCloseButtonStyleConfig = styles.createStyleConfig(theme => ({
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
      ...styles.focusStyles(theme.vars),
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
}), {
  size: "md"
});

/**
 * A button with a close icon, used to handle the close functionality in feedback and overlay components.
 */
const CloseButton = styles.createHopeComponent(props => {
  props = styles.mergeThemeProps("CloseButton", {
    "aria-label": "Close",
    children: () => web.createComponent(XMarkIcon, {})
  }, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["class"], [...styles.STYLE_CONFIG_PROP_NAMES, "size"]);
  const {
    baseClasses,
    styleOverrides
  } = useCloseButtonStyleConfig("CloseButton", styleConfigProps);
  return web.createComponent(styles.hope.button, web.mergeProps({
    type: "button",
    get ["class"]() {
      return clsx(baseClasses().root, local.class);
    },
    get __css() {
      return styleOverrides().root;
    }
  }, others));
});

const ModalContext = solidJs.createContext();
function useModalContext() {
  const context = solidJs.useContext(ModalContext);
  if (!context) {
    throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
  }
  return context;
}

/**
 * `ModalCloseButton` is used closes the modal dialog.
 *
 * You don't need to pass the `onClick` to it, it gets the
 * `close` action from the modal context.
 */
const ModalCloseButton = styles.createHopeComponent(props => {
  const modalContext = useModalContext();
  props = mergeDefaultProps({
    "aria-label": "Close modal",
    size: "md"
  }, props);
  const [local, others] = solidJs.splitProps(props, ["class", "onClick"]);
  const onClick = event => {
    event.stopPropagation();
    utils.callHandler(local.onClick, event);
    modalContext.onCloseButtonClick();
  };
  return web.createComponent(CloseButton, web.mergeProps({
    get ["class"]() {
      return clsx("hope-Modal-closeButton", local.class);
    },
    onClick: onClick
  }, others));
});

const visuallyHiddenStyles = {
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
};

/**
 * `VisuallyHidden` hides its children visually but keeps content visible to assistive technology.
 */
const VisuallyHidden = styles.hope("span", {
  baseStyle: visuallyHiddenStyles
});

/**
 * A `VisuallyHidden` input used to create custom input components like checkbox, radio and switch.
 */
const VisuallyHiddenInput = styles.hope("input", {
  baseStyle: visuallyHiddenStyles
});

/**
 * `FocusTrapRegion` traps focus within itself.
 * It renders a `div` by default.
 */
const FocusTrapRegion = styles.createHopeComponent(props => {
  let restoreFocusElement;
  let containerRef;
  props = mergeDefaultProps({
    trapFocus: true,
    initialFocusSelector: "[data-autofocus]"
  }, props);
  const [local, others] = solidJs.splitProps(props, ["ref", "trapFocus", "initialFocusSelector", "restoreFocusSelector", "autoFocus", "restoreFocus"]);
  const focusInitialElement = () => {
    if (!containerRef) {
      return;
    }
    const initialFocusElement = containerRef.querySelector(local.initialFocusSelector);
    if (initialFocusElement) {
      utils.focusWithoutScrolling(initialFocusElement);
      return;
    }

    // fallback to first focusable element or container.
    if (local.autoFocus) {
      const first = utils.getAllTabbableIn(containerRef)[0] ?? containerRef;
      utils.focusWithoutScrolling(first);
    }
  };
  const setRestoreFocusElement = () => {
    // get a reference to the requested restore focus element.
    if (local.restoreFocusSelector) {
      restoreFocusElement = document.querySelector(local.restoreFocusSelector);
      return;
    }

    // get a reference to the previous active element to restore focus back.
    if (local.restoreFocus) {
      restoreFocusElement = utils.getActiveElement();
    }
  };
  const preventRestoreFocus = () => {
    if (!containerRef) {
      return false;
    }
    const activeElement = utils.getActiveElement(containerRef);
    if (!activeElement) {
      return false;
    }
    if (utils.contains(containerRef, activeElement)) {
      return false;
    }

    // don't restore focus if a focusable element outside the container is already focused.
    return utils.isFocusable(activeElement);
  };
  const onTrapFocus = event => {
    if (!containerRef) {
      return;
    }

    // Because this function run only when focus trap is active,
    // we remove first and last element since they are `FocusTrap`.
    const tabbables = utils.getAllTabbableIn(containerRef).slice(1, -1);

    // Fallback to the container element
    if (!tabbables.length) {
      utils.focusWithoutScrolling(containerRef);
      return;
    }
    const first = tabbables[0];
    const last = tabbables[tabbables.length - 1];
    if (event.relatedTarget === first) {
      utils.focusWithoutScrolling(last);
    } else {
      utils.focusWithoutScrolling(first);
    }
  };
  solidJs.onMount(() => {
    // should run first to get the previous active element in case of restoreFocus,
    // before FocusTrap try to focus initial element.
    setRestoreFocusElement();
    focusInitialElement();
  });
  solidJs.onCleanup(() => {
    if (!restoreFocusElement || preventRestoreFocus()) {
      return;
    }
    utils.focusWithoutScrolling(restoreFocusElement);
  });
  return web.createComponent(styles.hope.div, web.mergeProps({
    ref(r$) {
      const _ref$ = utils.mergeRefs(el => containerRef = el, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    tabIndex: -1
  }, others, {
    get children() {
      return [web.createComponent(solidJs.Show, {
        get when() {
          return local.trapFocus;
        },
        get children() {
          return web.createComponent(FocusTrap, {
            onFocus: onTrapFocus
          });
        }
      }), web.memo(() => props.children), web.createComponent(solidJs.Show, {
        get when() {
          return local.trapFocus;
        },
        get children() {
          return web.createComponent(FocusTrap, {
            onFocus: onTrapFocus
          });
        }
      })];
    }
  }));
});
const FocusTrap = styles.createHopeComponent(props => {
  return web.createComponent(VisuallyHidden, web.mergeProps({
    "data-focus-trap": true,
    tabIndex: 0,
    "aria-hidden": "true",
    style: {
      position: "fixed",
      top: "0",
      left: "0"
    }
  }, props));
});

/**
 * The modal content wrapper.
 */
const ModalContent = styles.createHopeComponent(props => {
  const modalContext = useModalContext();
  const [local, others] = solidJs.splitProps(props, ["class", "style", "onClick"]);
  const onContentClick = event => {
    event.stopPropagation();
    utils.callHandler(local.onClick, event);
  };
  const computedStyle = solidJs.createMemo(() => ({
    ...local.style,
    ...modalContext.contentTransition.style()
  }));
  return web.createComponent(FocusTrapRegion, {
    autoFocus: true,
    restoreFocus: true,
    get trapFocus() {
      return modalContext.trapFocus();
    },
    get initialFocusSelector() {
      return modalContext.initialFocusSelector();
    },
    get restoreFocusSelector() {
      return modalContext.restoreFocusSelector();
    },
    get ["class"]() {
      return modalContext.baseClasses().root;
    },
    get __css() {
      return modalContext.styleOverrides().root;
    },
    get onMouseDown() {
      return modalContext.onContainerMouseDown;
    },
    get onKeyDown() {
      return modalContext.onContainerKeyDown;
    },
    get onClick() {
      return modalContext.onContainerClick;
    },
    get children() {
      return web.createComponent(styles.hope.section, web.mergeProps({
        get id() {
          return modalContext.contentId();
        },
        role: "dialog",
        "data-ismodal": "true",
        "aria-modal": "true",
        get ["aria-labelledby"]() {
          return modalContext.headingId();
        },
        get ["aria-describedby"]() {
          return modalContext.descriptionId();
        },
        get ["class"]() {
          return clsx(modalContext.baseClasses().content, local.class);
        },
        get style() {
          return computedStyle();
        },
        get __css() {
          return modalContext.styleOverrides().content;
        },
        onClick: onContentClick
      }, others));
    }
  });
});

/**
 * `ModalDescription` renders a description in a modal dialog.
 * This component must be wrapped with `Modal`,
 * so the `aria-describedby` prop is properly set on the modal dialog element.
 *
 * It renders a `p` by default.
 */
const ModalDescription = styles.createHopeComponent(props => {
  const modalContext = useModalContext();
  const [local, others] = solidJs.splitProps(props, ["class"]);
  solidJs.createEffect(() => {
    modalContext.setDescriptionId(`${modalContext.contentId()}-description`);
    solidJs.onCleanup(() => modalContext.setDescriptionId(undefined));
  });
  return web.createComponent(styles.hope.p, web.mergeProps({
    get id() {
      return modalContext.descriptionId();
    },
    get ["class"]() {
      return clsx(modalContext.baseClasses().description, local.class);
    },
    get __css() {
      return modalContext.styleOverrides().description;
    }
  }, others));
});

/**
 * `ModalHeading` renders a heading in a modal dialog.
 * This component must be wrapped with `Modal`,
 * so the `aria-labelledby` prop is properly set on the modal dialog element.
 *
 * It renders an `h2` by default.
 */
const ModalHeading = styles.createHopeComponent(props => {
  const modalContext = useModalContext();
  const [local, others] = solidJs.splitProps(props, ["class"]);
  solidJs.createEffect(() => {
    modalContext.setHeadingId(`${modalContext.contentId()}-heading`);
    solidJs.onCleanup(() => modalContext.setHeadingId(undefined));
  });
  return web.createComponent(styles.hope.h2, web.mergeProps({
    get id() {
      return modalContext.headingId();
    },
    get ["class"]() {
      return clsx(modalContext.baseClasses().heading, local.class);
    },
    get __css() {
      return modalContext.styleOverrides().heading;
    }
  }, others));
});

/**
 * `ModalOverlay` renders a backdrop that is typically displayed behind a modal.
 */
const ModalOverlay = styles.createHopeComponent(props => {
  const modalContext = useModalContext();
  const [local, others] = solidJs.splitProps(props, ["class", "style", "children"]);
  const computedStyle = solidJs.createMemo(() => ({
    ...local.style,
    ...modalContext.overlayTransition.style()
  }));
  return web.createComponent(styles.hope.div, web.mergeProps({
    role: "presentation",
    get ["class"]() {
      return clsx(modalContext.baseClasses().overlay, local.class);
    },
    get style() {
      return computedStyle();
    },
    get __css() {
      return modalContext.styleOverrides().overlay;
    }
  }, others));
});

/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 */
const Modal = props => {
  props = styles.mergeThemeProps("Modal", {
    id: `hope-modal-${solidJs.createUniqueId()}`,
    size: "md",
    isCentered: false,
    scrollBehavior: "outside",
    closeOnOverlayClick: true,
    closeOnEsc: true,
    preventScroll: true,
    trapFocus: true
  }, props);
  const [styleConfigProps] = solidJs.splitProps(props, [...styles.STYLE_CONFIG_PROP_NAMES, "size", "isCentered", "scrollBehavior"]);
  const {
    baseClasses,
    styleOverrides
  } = useModalStyleConfig("Modal", styleConfigProps);
  const {
    headingId,
    setHeadingId,
    descriptionId,
    setDescriptionId,
    overlayTransition,
    onContainerMouseDown,
    onContainerKeyDown,
    onContainerClick,
    onCloseButtonClick
  } = createModal(props);
  const contentTransition = primitives.createTransition(() => props.isOpen, () => mergeDefaultProps({
    transition: "pop",
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, props.contentTransitionOptions ?? {}));
  const context = {
    baseClasses,
    styleOverrides,
    isOpen: () => props.isOpen,
    contentTransition,
    overlayTransition,
    contentId: () => props.id,
    headingId,
    setHeadingId,
    descriptionId,
    setDescriptionId,
    trapFocus: () => props.trapFocus,
    initialFocusSelector: () => props.initialFocusSelector,
    restoreFocusSelector: () => props.restoreFocusSelector,
    onContainerMouseDown,
    onContainerKeyDown,
    onContainerClick,
    onCloseButtonClick
  };
  return web.createComponent(solidJs.Show, {
    get when() {
      return web.memo(() => !!overlayTransition.keepMounted())() && contentTransition.keepMounted();
    },
    get children() {
      return web.createComponent(web.Portal, {
        get children() {
          return web.createComponent(ModalContext.Provider, {
            value: context,
            get children() {
              return props.children;
            }
          });
        }
      });
    }
  });
};
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.CloseButton = ModalCloseButton;
Modal.Heading = ModalHeading;
Modal.Description = ModalDescription;

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
const currentDocument = typeof document !== "undefined" ? document : undefined;
const ROOT_ELEMENTS_SELECTOR = "body > :not(script, style)";
const ARIA_MODAL_SELECTOR = '[aria-modal="true"], [data-ismodal="true"]';
function hideOthers(document, modal) {
  // Apply `aria-hidden` on each sibling element of the highest ancestor element of modal (e.g. the portal).
  const elements = Array.from(document.querySelectorAll(ROOT_ELEMENTS_SELECTOR)).filter(element => !element.contains(modal)).map(element => {
    const previousAriaHidden = element.getAttribute("aria-hidden") || "";
    element.setAttribute("aria-hidden", "true");
    return {
      element,
      previousAriaHidden
    };
  });
  return () => {
    // Restore previous `aria-hidden` value of each element.
    elements.forEach(({
      element,
      previousAriaHidden
    }) => {
      if (previousAriaHidden) {
        element.setAttribute("aria-hidden", previousAriaHidden);
      } else {
        element.removeAttribute("aria-hidden");
      }
    });
  };
}

/**
 * Polyfill for `aria-modal`, watch for added modals and hide any surrounding DOM elements with `aria-hidden`.
 */
function watchModals(selector = "body", {
  document = currentDocument
} = {}) {
  /**
   * Listen for additions to the child list of the selected element (defaults to body). This is where providers render modal portals.
   * When one is added, see if there is a modal inside it, if there is, then hide everything else from screen readers.
   * If there was already a modal open and a new one was added, undo everything that the previous modal had hidden and hide based on the new one.
   *
   * If a modal container is removed, then undo the hiding based on the last hide others. Check if there are any other modals still around, and
   * hide based on the last one added.
   */
  const target = document?.querySelector(selector);
  if (document == null || target == null) {
    return utils.noop;
  }
  const config = {
    childList: true
  };
  let modalContainers = [];
  let undo;
  const observer = new MutationObserver(mutationRecord => {
    for (const mutation of mutationRecord) {
      if (mutation.type !== "childList") {
        continue;
      }
      if (mutation.addedNodes.length > 0) {
        const addNode = Array.from(mutation.addedNodes).find(node => node.querySelector?.(ARIA_MODAL_SELECTOR));
        if (addNode) {
          modalContainers.push(addNode);
          const modal = addNode.querySelector(ARIA_MODAL_SELECTOR);
          undo?.();
          undo = hideOthers(document, modal);
        }
      } else if (mutation.removedNodes.length > 0) {
        const removedNodes = Array.from(mutation.removedNodes);
        const nodeIndexRemove = modalContainers.findIndex(container => removedNodes.includes(container));
        if (nodeIndexRemove >= 0) {
          undo?.();
          modalContainers = modalContainers.filter((val, i) => i !== nodeIndexRemove);
          if (modalContainers.length > 0) {
            const modal = modalContainers[modalContainers.length - 1].querySelector(ARIA_MODAL_SELECTOR);
            undo = hideOthers(document, modal);
          } else {
            undo = undefined;
          }
        }
      }
    }
  });
  observer.observe(target, config);
  return () => {
    undo?.();
    observer.disconnect();
  };
}

function HopeProvider(props) {
  watchModals();
  props = mergeDefaultProps({
    withCssReset: true
  }, props);
  const [local, others] = solidJs.splitProps(props, ["initialColorMode", "storageManager", "disableTransitionOnChange"]);
  return web.createComponent(ColorModeProvider, {
    get initialColorMode() {
      return local.initialColorMode;
    },
    get storageManager() {
      return local.storageManager;
    },
    get disableTransitionOnChange() {
      return local.disableTransitionOnChange;
    },
    get children() {
      return web.createComponent(styles.ThemeProvider, others);
    }
  });
}

const useAnchorStyleConfig = styles.createStyleConfig(({
  vars
}) => ({
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
      ...styles.focusStyles(vars)
    }
  }
}));

/**
 * Anchors are accessible elements used primarily for navigation.
 * This component is styled to resemble a hyperlink and semantically renders an <a>.
 */
const Anchor = styles.createHopeComponent(props => {
  props = styles.mergeThemeProps("Anchor", {}, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["class", "isExternal"], styles.STYLE_CONFIG_PROP_NAMES);
  const {
    baseClasses,
    styleOverrides
  } = useAnchorStyleConfig("Anchor", styleConfigProps);
  return web.createComponent(styles.hope.a, web.mergeProps({
    get ["class"]() {
      return clsx(baseClasses().root, local.class);
    },
    get __css() {
      return styleOverrides().root;
    },
    get target() {
      return local.isExternal ? "_blank" : undefined;
    },
    get rel() {
      return local.isExternal ? "noopener noreferrer" : undefined;
    }
  }, others));
});

const BaseAspectRatio = styles.hope("div", {
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
}, "hope-AspectRatio-root");
/**
 * `AspectRatio` is used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 */
const AspectRatio = styles.createHopeComponent(props => {
  props = mergeDefaultProps({
    ratio: 4 / 3
  }, props);
  const [local, others] = solidJs.splitProps(props, ["ratio"]);
  return web.createComponent(BaseAspectRatio, web.mergeProps({
    get _before() {
      return {
        pb: styles.mapResponsive(local.ratio, r => `${1 / r * 100}%`)
      };
    }
  }, others));
});

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */

/**
 * `Box` is the most abstract component on top of which other hope ui
 * components are built. It renders a `div` element by default.
 */
const Box = styles.hope("div");

const colorSchemes = ["primary", "neutral", "success", "info", "warning", "danger"];
function getRootSolidColorSchemeCompoundVariants(vars) {
  const compoundVariants = [];
  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";
    compoundVariants.push({
      variants: {
        variant: "solid",
        colorScheme
      },
      style: {
        color: isWarning ? vars.colors[colorScheme]["900"] : "common.white",
        backgroundColor: vars.colors[colorScheme][isNeutral ? "800" : isWarning ? "300" : "500"],
        borderColor: vars.colors[colorScheme][isNeutral ? "800" : isWarning ? "300" : "500"],
        _hover: {
          color: isWarning ? vars.colors[colorScheme]["900"] : "common.white",
          backgroundColor: vars.colors[colorScheme][isNeutral ? "700" : isWarning ? "400" : "600"],
          borderColor: vars.colors[colorScheme][isNeutral ? "700" : isWarning ? "400" : "600"]
        },
        _active: {
          color: isWarning ? vars.colors[colorScheme]["900"] : "common.white",
          backgroundColor: vars.colors[colorScheme][isNeutral ? "600" : isWarning ? "500" : "700"],
          borderColor: vars.colors[colorScheme][isNeutral ? "600" : isWarning ? "500" : "700"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.100",
          borderColor: "neutral.100"
        },
        _dark: {
          color: isWarning ? vars.colors[colorScheme]["900"] : "whiteAlpha.900",
          backgroundColor: vars.colors[colorScheme][isWarning ? "500" : "700"],
          borderColor: vars.colors[colorScheme][isWarning ? "500" : "700"],
          _hover: {
            color: isWarning ? vars.colors[colorScheme]["900"] : "whiteAlpha.900",
            backgroundColor: vars.colors[colorScheme][isWarning ? "400" : "600"],
            borderColor: vars.colors[colorScheme][isWarning ? "400" : "600"]
          },
          _active: {
            color: isWarning ? vars.colors[colorScheme]["900"] : "whiteAlpha.900",
            backgroundColor: vars.colors[colorScheme][isWarning ? "300" : "500"],
            borderColor: vars.colors[colorScheme][isWarning ? "300" : "500"]
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
  return compoundVariants;
}
function getRootSoftColorSchemeCompoundVariants(vars) {
  const compoundVariants = [];
  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";
    compoundVariants.push({
      variants: {
        variant: "soft",
        colorScheme
      },
      style: {
        color: vars.colors[colorScheme][isWarning ? "900" : "700"],
        backgroundColor: vars.colors[colorScheme][isNeutral ? "200" : isWarning ? "100" : "50"],
        borderColor: vars.colors[colorScheme][isNeutral ? "200" : isWarning ? "100" : "50"],
        _hover: {
          color: vars.colors[colorScheme][isWarning ? "900" : "800"],
          backgroundColor: vars.colors[colorScheme][isNeutral ? "300" : isWarning ? "200" : "100"],
          borderColor: vars.colors[colorScheme][isNeutral ? "300" : isWarning ? "200" : "100"]
        },
        _active: {
          color: vars.colors[colorScheme][isWarning ? "900" : "800"],
          backgroundColor: vars.colors[colorScheme][isNeutral ? "400" : isWarning ? "300" : "200"],
          borderColor: vars.colors[colorScheme][isNeutral ? "400" : isWarning ? "300" : "200"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "neutral.50",
          borderColor: "neutral.50"
        },
        _dark: {
          color: vars.colors[colorScheme]["200"],
          backgroundColor: rgba(vars.colors[colorScheme].mainChannel, 0.2),
          borderColor: "transparent",
          _hover: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, 0.3),
            borderColor: "transparent"
          },
          _active: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, 0.4),
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
  return compoundVariants;
}
function getRootOutlinedColorSchemeCompoundVariants(vars) {
  const compoundVariants = [];
  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";
    compoundVariants.push({
      variants: {
        variant: "outlined",
        colorScheme
      },
      style: {
        color: vars.colors[colorScheme][isWarning ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "400" : "300"],
        _hover: {
          color: vars.colors[colorScheme][isWarning ? "800" : "700"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "100" : "50"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "500" : "400"]
        },
        _active: {
          color: vars.colors[colorScheme][isWarning ? "800" : "700"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "200" : "100"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "500" : "400"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "neutral.100"
        },
        _dark: {
          color: vars.colors[colorScheme]["200"],
          backgroundColor: "transparent",
          borderColor: vars.colors[colorScheme]["800"],
          _hover: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, 0.1),
            borderColor: vars.colors[colorScheme]["700"]
          },
          _active: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, 0.2),
            borderColor: vars.colors[colorScheme]["700"]
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
  return compoundVariants;
}
function getRootPlainColorSchemeCompoundVariants(vars) {
  const compoundVariants = [];
  for (const colorScheme of colorSchemes) {
    const isNeutral = colorScheme === "neutral";
    const isWarning = colorScheme === "warning";
    compoundVariants.push({
      variants: {
        variant: "plain",
        colorScheme
      },
      style: {
        color: vars.colors[colorScheme][isWarning ? "800" : "700"],
        backgroundColor: "transparent",
        borderColor: "transparent",
        _hover: {
          color: vars.colors[colorScheme][isWarning ? "800" : "700"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "100" : "50"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "100" : "50"]
        },
        _active: {
          color: vars.colors[colorScheme][isWarning ? "800" : "700"],
          backgroundColor: vars.colors[colorScheme][isNeutral || isWarning ? "200" : "100"],
          borderColor: vars.colors[colorScheme][isNeutral || isWarning ? "200" : "100"]
        },
        _disabled: {
          color: "neutral.200",
          backgroundColor: "transparent",
          borderColor: "transparent"
        },
        _dark: {
          color: vars.colors[colorScheme]["200"],
          backgroundColor: "transparent",
          borderColor: "transparent",
          _hover: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, 0.1),
            borderColor: "transparent"
          },
          _active: {
            color: vars.colors[colorScheme]["200"],
            backgroundColor: rgba(vars.colors[colorScheme].mainChannel, 0.2),
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
  return compoundVariants;
}
const boxSizes = new Map([["xs", "7"], ["sm", "8"], ["md", "10"], ["lg", "12"]]);
function getRootIconButtonSizeCompoundVariants() {
  const compoundVariants = [];
  for (const [size, tokenValue] of boxSizes) {
    compoundVariants.push({
      variants: {
        isIconButton: true,
        size
      },
      style: {
        width: tokenValue,
        // for IconButton width === height
        p: 0
      }
    });
  }
  return compoundVariants;
}
const useButtonStyleConfig = styles.createStyleConfig(({
  vars
}) => ({
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
      ...styles.focusStyles(vars)
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
          height: boxSizes.get("xs"),
          px: 3,
          fontSize: "xs"
        },
        sm: {
          height: boxSizes.get("sm"),
          px: 4,
          fontSize: "sm"
        },
        md: {
          height: boxSizes.get("md"),
          px: 5,
          fontSize: "base"
        },
        lg: {
          height: boxSizes.get("lg"),
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
    compoundVariants: [...getRootSolidColorSchemeCompoundVariants(vars), ...getRootSoftColorSchemeCompoundVariants(vars), ...getRootOutlinedColorSchemeCompoundVariants(vars), ...getRootPlainColorSchemeCompoundVariants(vars), ...getRootIconButtonSizeCompoundVariants()]
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
      animation: `1s linear infinite ${styles.spin}`
    }
  }
}), {
  variant: "default",
  colorScheme: "primary",
  size: "md"
});

const ButtonContext = solidJs.createContext();
function useButtonContext() {
  const context = solidJs.useContext(ButtonContext);
  if (!context) {
    throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
  }
  return context;
}

const BaseButtonGroup = styles.hope("div", {
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
}, "hope-ButtonGroup-root");
const ButtonGroupContext = solidJs.createContext();
function useButtonGroupContext() {
  return solidJs.useContext(ButtonGroupContext);
}
const ButtonGroup = styles.createHopeComponent(props => {
  props = mergeDefaultProps({}, props);
  const [local, contextValue, others] = solidJs.splitProps(props, ["orientation"], ["variant", "colorScheme", "size", "isDisabled"]);
  return web.createComponent(ButtonGroupContext.Provider, {
    value: contextValue,
    get children() {
      return web.createComponent(BaseButtonGroup, web.mergeProps({
        role: "group",
        get orientation() {
          return local.orientation;
        }
      }, others));
    }
  });
});

const ButtonIcon = styles.createHopeComponent(props => {
  const buttonContext = useButtonContext();
  const [local, others] = solidJs.splitProps(props, ["class", "__css"]);
  return web.createComponent(styles.hope.span, web.mergeProps({
    "aria-hidden": true,
    get ["class"]() {
      return clsx(buttonContext.baseClasses().icon, local.class);
    },
    get __css() {
      return {
        ...buttonContext.styleOverrides().icon,
        ...local.__css
      };
    }
  }, others));
});

const ButtonLoader = styles.createHopeComponent(props => {
  const buttonContext = useButtonContext();
  const [local, others] = solidJs.splitProps(props, ["class", "children", "hasLoadingText"]);
  return web.createComponent(styles.hope.div, web.mergeProps({
    get ["class"]() {
      return clsx(buttonContext.baseClasses().loaderWrapper, local.class);
    },
    get position() {
      return local.hasLoadingText ? "relative" : "absolute";
    },
    get __css() {
      return buttonContext.styleOverrides().loaderWrapper;
    }
  }, others, {
    get children() {
      return web.createComponent(solidJs.Show, {
        get when() {
          return local.children;
        },
        get fallback() {
          return web.createComponent(SpinnerIcon, {
            get ["class"]() {
              return buttonContext.baseClasses().loaderIcon;
            },
            get __css() {
              return buttonContext.styleOverrides().loaderIcon;
            }
          });
        },
        get children() {
          return local.children;
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

const BUTTON_INPUT_TYPES = ["button", "color", "file", "image", "reset", "submit"];

/**
 * Checks whether `element` is a native HTML button element.
 * @example
 * isButton(document.querySelector("button")); // true
 * isButton(document.querySelector("input[type='button']")); // true
 * isButton(document.querySelector("div")); // false
 * isButton(document.querySelector("input[type='text']")); // false
 * isButton(document.querySelector("div[role='button']")); // false
 */
function isButton(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "button") {
    return true;
  }
  if (tagName === "input" && element.type) {
    return BUTTON_INPUT_TYPES.indexOf(element.type) !== -1;
  }
  return false;
}

const _tmpl$$1 = /*#__PURE__*/web.template(`<span></span>`, 2);
/**
 * Button is used to trigger an action or event,
 * such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
const Button = styles.createHopeComponent(props => {
  let ref;
  const buttonGroupContext = useButtonGroupContext();
  const propsWithButtonGroupDefaults = mergeDefaultProps({
    get variant() {
      return buttonGroupContext?.variant;
    },
    get colorScheme() {
      return buttonGroupContext?.colorScheme;
    },
    get size() {
      return buttonGroupContext?.size;
    },
    get isDisabled() {
      return buttonGroupContext?.isDisabled;
    }
  }, props);
  props = styles.mergeThemeProps("Button", {
    loaderPlacement: "start"
  }, propsWithButtonGroupDefaults);
  const [local, contentProps, styleConfigProps, others] = solidJs.splitProps(props, ["ref", "class", "type", "as", "isLoading", "loaderPlacement", "loadingText", "loader", "isDisabled"], ["children", "leftIcon", "rightIcon"], [...styles.STYLE_CONFIG_PROP_NAMES, "colorScheme", "variant", "size", "isFullWidth", "isIconButton"]);
  const tagName = primitives.createTagName(() => ref, () => props.as || "button");
  const [isNativeButton, setIsNativeButton] = solidJs.createSignal(tagName() != null && isButton({
    tagName: tagName(),
    type: local.type
  }));
  const type = solidJs.createMemo(() => {
    if (local.type != null) {
      return local.type;
    }
    return isNativeButton() ? "button" : undefined;
  });
  const {
    baseClasses,
    styleOverrides
  } = useButtonStyleConfig("Button", styleConfigProps);
  solidJs.onMount(() => {
    ref != null && setIsNativeButton(isButton(ref));
  });
  return web.createComponent(ButtonContext.Provider, {
    value: {
      baseClasses,
      styleOverrides
    },
    get children() {
      return web.createComponent(styles.hope.button, web.mergeProps({
        get as() {
          return local.as;
        },
        ref(r$) {
          const _ref$ = utils.mergeRefs(el => ref = el, local.ref);
          typeof _ref$ === "function" && _ref$(r$);
        },
        get role() {
          return !isNativeButton() && tagName() !== "a" ? "button" : undefined;
        },
        get type() {
          return type();
        },
        get tabIndex() {
          return !isNativeButton() ? 0 : undefined;
        },
        get disabled() {
          return local.isDisabled;
        },
        get ["data-loading"]() {
          return local.isLoading || undefined;
        },
        get ["class"]() {
          return clsx(baseClasses().root, local.class);
        },
        get __css() {
          return styleOverrides().root;
        }
      }, others, {
        get children() {
          return [web.createComponent(solidJs.Show, {
            get when() {
              return local.isLoading && local.loaderPlacement === "start";
            },
            get children() {
              return web.createComponent(ButtonLoader, {
                get hasLoadingText() {
                  return !!local.loadingText;
                },
                get children() {
                  return local.loader;
                }
              });
            }
          }), web.createComponent(solidJs.Show, {
            get when() {
              return local.isLoading;
            },
            get fallback() {
              return web.createComponent(ButtonContent, contentProps);
            },
            get children() {
              return web.createComponent(solidJs.Show, {
                get when() {
                  return local.loadingText;
                },
                get fallback() {
                  return (() => {
                    const _el$ = _tmpl$$1.cloneNode(true);
                    _el$.style.setProperty("opacity", "0");
                    web.insert(_el$, web.createComponent(ButtonContent, contentProps));
                    return _el$;
                  })();
                },
                get children() {
                  return local.loadingText;
                }
              });
            }
          }), web.createComponent(solidJs.Show, {
            get when() {
              return local.isLoading && local.loaderPlacement === "end";
            },
            get children() {
              return web.createComponent(ButtonLoader, {
                get hasLoadingText() {
                  return !!local.loadingText;
                },
                get children() {
                  return local.loader;
                }
              });
            }
          })];
        }
      }));
    }
  });
});
function ButtonContent(props) {
  const buttonContext = useButtonContext();
  return [web.createComponent(solidJs.Show, {
    get when() {
      return props.leftIcon;
    },
    get children() {
      return web.createComponent(ButtonIcon, {
        get ["class"]() {
          return buttonContext.baseClasses().leftIcon;
        },
        get __css() {
          return buttonContext.styleOverrides().leftIcon;
        },
        get children() {
          return props.leftIcon;
        }
      });
    }
  }), web.memo(() => props.children), web.createComponent(solidJs.Show, {
    get when() {
      return props.rightIcon;
    },
    get children() {
      return web.createComponent(ButtonIcon, {
        get ["class"]() {
          return buttonContext.baseClasses().rightIcon;
        },
        get __css() {
          return buttonContext.styleOverrides().rightIcon;
        },
        get children() {
          return props.rightIcon;
        }
      });
    }
  })];
}

/**
 * IconButton composes the Button component except that it renders only an icon.
 * Since IconButton only renders an icon, you must pass the aria-label prop, so screen readers can give meaning to the button.
 */
const IconButton = styles.createHopeComponent(props => {
  return web.createComponent(Button, web.mergeProps({
    isIconButton: true
  }, props));
});

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/center.tsx
 */

/**
 * `Center` is used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 */
const Center = styles.hope("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, "hope-Center-root");

const BaseContainer = styles.hope("div", ({
  vars
}) => ({
  baseStyle: {
    width: "100%",
    maxWidth: {
      sm: vars.breakpoints.sm,
      md: vars.breakpoints.md,
      lg: vars.breakpoints.lg,
      xl: vars.breakpoints.xl,
      "2xl": vars.breakpoints["2xl"]
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
    centerContent: false
  }
}), "hope-Container-root");
/**
 * `Container` is used to constrain a content's width to the current breakpoint, while keeping it fluid.
 *  By default, it sets `margin-left` and `margin-right` to `auto`, to keep its content centered.
 */
const Container = styles.createHopeComponent(props => {
  props = mergeDefaultProps({
    isCentered: true
  }, props);
  const [local, others] = solidJs.splitProps(props, ["isCentered"]);
  return web.createComponent(BaseContainer, web.mergeProps({
    get mx() {
      return styles.mapResponsive(local.isCentered, isCentered => isCentered ? "auto" : undefined);
    }
  }, others));
});

const useDividerStyleConfig = styles.createStyleConfig({
  root: {
    baseStyle: {
      color: {
        light: "neutral.300",
        dark: "neutral.700"
      }
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
    compoundVariants: [{
      variants: {
        orientation: "vertical",
        withLabel: true
      },
      style: {
        flexDirection: "column"
      }
    }]
  },
  label: {
    baseStyle: {
      color: "common.foreground"
    }
  }
}, {
  orientation: "horizontal",
  labelPlacement: "start",
  withLabel: false
});

const Divider = styles.createHopeComponent(props => {
  props = styles.mergeThemeProps("Divider", {
    variant: "solid",
    thickness: "1px"
  }, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["class", "children", "variant", "thickness", "labelProps"], ["orientation", "labelPlacement", "styleConfigOverride", "unstyled"]);
  const resolvedChildren = solidJs.children(() => props.children);
  const withLabel = () => !!resolvedChildren();
  const isVertical = () => styleConfigProps.orientation === "vertical";
  const lineStyle = solidJs.createMemo(() => {
    const borderSideStyle = isVertical() ? "borderLeftStyle" : "borderTopStyle";
    const borderSideWidth = isVertical() ? "borderLeftWidth" : "borderTopWidth";
    if (withLabel()) {
      return {
        _before: {
          [borderSideStyle]: local.variant,
          [borderSideWidth]: local.thickness
        },
        _after: {
          [borderSideStyle]: local.variant,
          [borderSideWidth]: local.thickness
        }
      };
    }
    return {
      [borderSideStyle]: local.variant,
      [borderSideWidth]: local.thickness
    };
  });
  const {
    baseClasses,
    styleOverrides
  } = useDividerStyleConfig("Divider", {
    get orientation() {
      return styleConfigProps.orientation;
    },
    get labelPlacement() {
      return styleConfigProps.labelPlacement;
    },
    get withLabel() {
      return withLabel();
    },
    get styleConfigOverride() {
      return styleConfigProps.styleConfigOverride;
    },
    get unstyled() {
      return styleConfigProps.unstyled;
    }
  });
  return web.createComponent(styles.hope.hr, web.mergeProps({
    get as() {
      return withLabel() ? "div" : "hr";
    },
    get role() {
      return withLabel() ? "separator" : undefined;
    },
    get ["aria-orientation"]() {
      return isVertical() ? "vertical" : "horizontal";
    },
    get ["class"]() {
      return clsx(baseClasses().root, local.class);
    },
    get __css() {
      return {
        ...styleOverrides().root,
        ...lineStyle()
      };
    }
  }, others, {
    get children() {
      return web.createComponent(solidJs.Show, {
        get when() {
          return withLabel();
        },
        get children() {
          return web.createComponent(styles.hope.span, web.mergeProps({
            get ["class"]() {
              return baseClasses().label;
            },
            get __css() {
              return styleOverrides().label;
            }
          }, () => local.labelProps, {
            get children() {
              return resolvedChildren();
            }
          }));
        }
      });
    }
  }));
});

const useDrawerStyleConfig = styles.createStyleConfig(theme => ({
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
      backgroundColor: {
        light: "common.white",
        dark: "neutral.700"
      },
      color: "inherit",
      _focus: {
        outline: "none"
      }
    },
    variants: {
      size: {
        xs: {
          maxWidth: "xs"
        },
        sm: {
          maxWidth: "md"
        },
        md: {
          maxWidth: "lg"
        },
        lg: {
          maxWidth: "2xl"
        },
        xl: {
          maxWidth: "4xl"
        },
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
    /* -------------------------------------------------------------------------------------------------
     * Placement - top + size
     * -----------------------------------------------------------------------------------------------*/
    {
      variants: {
        placement: "top",
        size: "xs"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "top",
        size: "sm"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "top",
        size: "md"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "top",
        size: "lg"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "top",
        size: "xl"
      },
      style: {
        maxWidth: "100vw"
      }
    },
    /* -------------------------------------------------------------------------------------------------
     * Placement - bottom + size
     * -----------------------------------------------------------------------------------------------*/
    {
      variants: {
        placement: "bottom",
        size: "xs"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "bottom",
        size: "sm"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "bottom",
        size: "md"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "bottom",
        size: "lg"
      },
      style: {
        maxWidth: "100vw"
      }
    }, {
      variants: {
        placement: "bottom",
        size: "xl"
      },
      style: {
        maxWidth: "100vw"
      }
    }]
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
        light: rgba(theme.vars.colors.neutral.darkChannel, 0.75),
        dark: rgba(theme.vars.colors.neutral.darkChannel, 0.85)
      }
    }
  },
  heading: {},
  description: {}
}));

const DrawerContext = solidJs.createContext();
function useDrawerContext() {
  const context = solidJs.useContext(DrawerContext);
  if (!context) {
    throw new Error("[hope-ui]: `useDrawerContext` must be used within a `Drawer` component");
  }
  return context;
}

/**
 * `DrawerCloseButton` is used closes the drawer dialog.
 *
 * You don't need to pass the `onClick` to it, it gets the
 * `close` action from the drawer context.
 */
const DrawerCloseButton = styles.createHopeComponent(props => {
  const drawerContext = useDrawerContext();
  props = mergeDefaultProps({
    "aria-label": "Close drawer",
    size: "md"
  }, props);
  const [local, others] = solidJs.splitProps(props, ["class", "onClick"]);
  const onClick = event => {
    event.stopPropagation();
    utils.callHandler(local.onClick, event);
    drawerContext.onCloseButtonClick();
  };
  return web.createComponent(CloseButton, web.mergeProps({
    get ["class"]() {
      return clsx("hope-Drawer-closeButton", local.class);
    },
    onClick: onClick
  }, others));
});

/**
 * The drawer content wrapper.
 */
const DrawerContent = styles.createHopeComponent(props => {
  const drawerContext = useDrawerContext();
  const [local, others] = solidJs.splitProps(props, ["class", "style", "onClick"]);
  const onContentClick = event => {
    event.stopPropagation();
    utils.callHandler(local.onClick, event);
  };
  const computedStyle = solidJs.createMemo(() => ({
    ...local.style,
    ...drawerContext.contentTransition.style()
  }));
  return web.createComponent(FocusTrapRegion, {
    autoFocus: true,
    restoreFocus: true,
    get trapFocus() {
      return drawerContext.trapFocus();
    },
    get initialFocusSelector() {
      return drawerContext.initialFocusSelector();
    },
    get restoreFocusSelector() {
      return drawerContext.restoreFocusSelector();
    },
    get ["class"]() {
      return drawerContext.baseClasses().root;
    },
    get __css() {
      return drawerContext.styleOverrides().root;
    },
    get onMouseDown() {
      return drawerContext.onContainerMouseDown;
    },
    get onKeyDown() {
      return drawerContext.onContainerKeyDown;
    },
    get onClick() {
      return drawerContext.onContainerClick;
    },
    get children() {
      return web.createComponent(styles.hope.section, web.mergeProps({
        get id() {
          return drawerContext.contentId();
        },
        role: "dialog",
        "data-ismodal": "true",
        "aria-modal": "true",
        get ["aria-labelledby"]() {
          return drawerContext.headingId();
        },
        get ["aria-describedby"]() {
          return drawerContext.descriptionId();
        },
        get ["class"]() {
          return clsx(drawerContext.baseClasses().content, local.class);
        },
        get style() {
          return computedStyle();
        },
        get __css() {
          return drawerContext.styleOverrides().content;
        },
        onClick: onContentClick
      }, others));
    }
  });
});

/**
 * `DrawerDescription` renders a description in a drawer dialog.
 * This component must be wrapped with `Drawer`,
 * so the `aria-describedby` prop is properly set on the drawer dialog element.
 *
 * It renders a `p` by default.
 */
const DrawerDescription = styles.createHopeComponent(props => {
  const drawerContext = useDrawerContext();
  const [local, others] = solidJs.splitProps(props, ["class"]);
  solidJs.createEffect(() => {
    drawerContext.setDescriptionId(`${drawerContext.contentId()}-description`);
    solidJs.onCleanup(() => drawerContext.setDescriptionId(undefined));
  });
  return web.createComponent(styles.hope.p, web.mergeProps({
    get id() {
      return drawerContext.descriptionId();
    },
    get ["class"]() {
      return clsx(drawerContext.baseClasses().description, local.class);
    },
    get __css() {
      return drawerContext.styleOverrides().description;
    }
  }, others));
});

/**
 * `DrawerHeading` renders a heading in a drawer dialog.
 * This component must be wrapped with `Drawer`,
 * so the `aria-labelledby` prop is properly set on the drawer dialog element.
 *
 * It renders an `h2` by default.
 */
const DrawerHeading = styles.createHopeComponent(props => {
  const drawerContext = useDrawerContext();
  const [local, others] = solidJs.splitProps(props, ["class"]);
  solidJs.createEffect(() => {
    drawerContext.setHeadingId(`${drawerContext.contentId()}-heading`);
    solidJs.onCleanup(() => drawerContext.setHeadingId(undefined));
  });
  return web.createComponent(styles.hope.h2, web.mergeProps({
    get id() {
      return drawerContext.headingId();
    },
    get ["class"]() {
      return clsx(drawerContext.baseClasses().heading, local.class);
    },
    get __css() {
      return drawerContext.styleOverrides().heading;
    }
  }, others));
});

/**
 * `DrawerOverlay` renders a backdrop that is typically displayed behind a drawer.
 */
const DrawerOverlay = styles.createHopeComponent(props => {
  const drawerContext = useDrawerContext();
  const [local, others] = solidJs.splitProps(props, ["class", "style", "children"]);
  const computedStyle = solidJs.createMemo(() => ({
    ...local.style,
    ...drawerContext.overlayTransition.style()
  }));
  return web.createComponent(styles.hope.div, web.mergeProps({
    role: "presentation",
    get ["class"]() {
      return clsx(drawerContext.baseClasses().overlay, local.class);
    },
    get style() {
      return computedStyle();
    },
    get __css() {
      return drawerContext.styleOverrides().overlay;
    }
  }, others));
});

const DRAWER_TRANSITION = {
  top: {
    in: {
      transform: "translateY(0)"
    },
    out: {
      transform: "translateY(-100%)"
    }
  },
  right: {
    in: {
      transform: "translateX(0)"
    },
    out: {
      transform: "translateX(100%)"
    }
  },
  bottom: {
    in: {
      transform: "translateY(0)"
    },
    out: {
      transform: "translateY(100%)"
    }
  },
  left: {
    in: {
      transform: "translateX(0)"
    },
    out: {
      transform: "translateX(-100%)"
    }
  }
};

/**
 * Drawer provides context, theming, and accessibility properties
 * to all other drawer components.
 *
 * It doesn't render any DOM node.
 */
const Drawer = props => {
  props = styles.mergeThemeProps("Drawer", {
    id: `hope-drawer-${solidJs.createUniqueId()}`,
    size: "md",
    placement: "right",
    closeOnOverlayClick: true,
    closeOnEsc: true,
    preventScroll: true,
    trapFocus: true
  }, props);
  const [styleConfigProps] = solidJs.splitProps(props, [...styles.STYLE_CONFIG_PROP_NAMES, "size", "placement"]);
  const {
    baseClasses,
    styleOverrides
  } = useDrawerStyleConfig("Drawer", styleConfigProps);
  const {
    headingId,
    setHeadingId,
    descriptionId,
    setDescriptionId,
    overlayTransition,
    onContainerMouseDown,
    onContainerKeyDown,
    onContainerClick,
    onCloseButtonClick
  } = createModal(props);
  const contentTransition = primitives.createTransition(() => props.isOpen, () => mergeDefaultProps({
    transition: DRAWER_TRANSITION[props.placement],
    duration: 300,
    exitDuration: 200,
    delay: 100,
    exitDelay: 0,
    easing: "ease-out",
    exitEasing: "ease-in"
  }, props.contentTransitionOptions ?? {}));
  const context = {
    baseClasses,
    styleOverrides,
    isOpen: () => props.isOpen,
    contentTransition,
    overlayTransition,
    contentId: () => props.id,
    headingId,
    setHeadingId,
    descriptionId,
    setDescriptionId,
    trapFocus: () => props.trapFocus,
    initialFocusSelector: () => props.initialFocusSelector,
    restoreFocusSelector: () => props.restoreFocusSelector,
    onContainerMouseDown,
    onContainerKeyDown,
    onContainerClick,
    onCloseButtonClick
  };
  return web.createComponent(solidJs.Show, {
    get when() {
      return web.memo(() => !!overlayTransition.keepMounted())() && contentTransition.keepMounted();
    },
    get children() {
      return web.createComponent(web.Portal, {
        get children() {
          return web.createComponent(DrawerContext.Provider, {
            value: context,
            get children() {
              return props.children;
            }
          });
        }
      });
    }
  });
};
Drawer.Overlay = DrawerOverlay;
Drawer.Content = DrawerContent;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Heading = DrawerHeading;
Drawer.Description = DrawerDescription;

/**
 * `Flex` is used to create flexbox layouts.
 * It renders a `div` with `display: flex` and comes with helpful style shorthand.
 */
const Flex = styles.createHopeComponent(props => {
  const [local, others] = solidJs.splitProps(props, ["class", "direction", "wrap", "align", "justify"]);
  return web.createComponent(styles.hope.div, web.mergeProps({
    get ["class"]() {
      return clsx("hope-Flex-root", local.class);
    },
    get __css() {
      return {
        display: "flex",
        flexDirection: local.direction,
        flexWrap: local.wrap,
        alignItems: local.align,
        justifyContent: local.justify
      };
    }
  }, others));
});

const baseDescriptionStyles = {
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
};
const useFormControlStyleConfig = styles.createStyleConfig({
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
      ...baseDescriptionStyles,
      color: {
        light: "neutral.600",
        dark: "neutral.400"
      }
    }
  },
  error: {
    baseStyle: {
      ...baseDescriptionStyles,
      color: {
        light: "danger.600",
        dark: "danger.400"
      }
    }
  }
}, {
  withRequiredIndicator: true
});

const FormControlContext = solidJs.createContext();
function useFormControlContext() {
  return solidJs.useContext(FormControlContext);
}
function useRequiredFormControlContext() {
  const context = useFormControlContext();
  if (!context) {
    throw new Error("[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component");
  }
  return context;
}

const FormControlDescription = styles.createHopeComponent(props => {
  const context = useRequiredFormControlContext();
  const [local, others] = solidJs.splitProps(props, ["id", "class", "__css"]);
  const id = () => local.id ?? context.descriptionId();
  solidJs.onMount(() => context.setHasDescription(true));
  solidJs.onCleanup(() => context.setHasDescription(false));
  return web.createComponent(styles.hope.div, web.mergeProps({
    get id() {
      return id();
    },
    get ["data-required"]() {
      return utils.dataAttr(context.isRequired());
    },
    get ["data-disabled"]() {
      return utils.dataAttr(context.isDisabled());
    },
    get ["data-readonly"]() {
      return utils.dataAttr(context.isReadOnly());
    },
    get ["data-invalid"]() {
      return utils.dataAttr(context.isInvalid());
    },
    get ["class"]() {
      return clsx(context.baseClasses().description, local.class);
    },
    get __css() {
      return {
        ...context.styleOverrides().description,
        ...local.__css
      };
    }
  }, others));
});

const FormControlError = styles.createHopeComponent(props => {
  const context = useRequiredFormControlContext();
  const [local, others] = solidJs.splitProps(props, ["id", "class", "__css"]);
  const id = () => local.id ?? context.errorId();
  solidJs.onMount(() => context.setHasError(true));
  solidJs.onCleanup(() => context.setHasError(false));
  return web.createComponent(styles.hope.div, web.mergeProps({
    "aria-live": "polite",
    get id() {
      return id();
    },
    get ["data-required"]() {
      return utils.dataAttr(context.isRequired());
    },
    get ["data-disabled"]() {
      return utils.dataAttr(context.isDisabled());
    },
    get ["data-readonly"]() {
      return utils.dataAttr(context.isReadOnly());
    },
    get ["data-invalid"]() {
      return utils.dataAttr(context.isInvalid());
    },
    get ["class"]() {
      return clsx(context.baseClasses().error, local.class);
    },
    get __css() {
      return {
        ...context.styleOverrides().error,
        ...local.__css
      };
    }
  }, others));
});

const FormControlLabel = styles.createHopeComponent(props => {
  const context = useRequiredFormControlContext();
  const [local, others] = solidJs.splitProps(props, ["id", "for", "class", "__css"]);
  const id = () => local.id ?? context.labelId();
  const htmlFor = () => local.for ?? context.id();
  return web.createComponent(styles.hope.label, web.mergeProps({
    get id() {
      return id();
    },
    get ["for"]() {
      return htmlFor();
    },
    get ["data-required"]() {
      return utils.dataAttr(context.isRequired());
    },
    get ["data-disabled"]() {
      return utils.dataAttr(context.isDisabled());
    },
    get ["data-readonly"]() {
      return utils.dataAttr(context.isReadOnly());
    },
    get ["data-invalid"]() {
      return utils.dataAttr(context.isInvalid());
    },
    get ["class"]() {
      return clsx(context.baseClasses().label, local.class);
    },
    get __css() {
      return {
        ...context.styleOverrides().label,
        ...local.__css
      };
    }
  }, others));
});

const FormControl = styles.createHopeComponent(props => {
  props = styles.mergeThemeProps("FormControl", {
    id: `hope-form-control-${solidJs.createUniqueId()}`
  }, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["id", "class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...styles.STYLE_CONFIG_PROP_NAMES, "withRequiredIndicator"]);
  const [hasDescription, setHasDescription] = solidJs.createSignal(false);
  const [hasError, setHasError] = solidJs.createSignal(false);
  const {
    baseClasses,
    styleOverrides
  } = useFormControlStyleConfig("FormControl", styleConfigProps);
  const descriptionId = () => `${props.id}-description`;
  const errorId = () => `${props.id}-error`;
  const isInvalid = () => props.isInvalid;
  const mergeAriaDescribedBy = elementAriaDescribedBy => {
    const ids = elementAriaDescribedBy ? [elementAriaDescribedBy] : [];

    // Error message must be described first in all scenarios.
    if (hasError() && isInvalid()) {
      ids.push(errorId());
    }
    if (hasDescription()) {
      ids.push(descriptionId());
    }
    return ids.join(" ") || undefined;
  };
  const context = {
    id: () => props.id,
    labelId: () => `${props.id}-label`,
    descriptionId,
    errorId,
    isRequired: () => props.isRequired,
    isDisabled: () => props.isDisabled,
    isReadOnly: () => props.isReadOnly,
    isInvalid,
    unstyled: () => styleConfigProps.unstyled,
    baseClasses,
    styleOverrides,
    hasDescription,
    setHasDescription,
    hasError,
    setHasError,
    mergeAriaDescribedBy
  };
  return web.createComponent(FormControlContext.Provider, {
    value: context,
    get children() {
      return web.createComponent(styles.hope.div, web.mergeProps({
        role: "group",
        get ["data-required"]() {
          return utils.dataAttr(context.isRequired());
        },
        get ["data-disabled"]() {
          return utils.dataAttr(context.isDisabled());
        },
        get ["data-readonly"]() {
          return utils.dataAttr(context.isReadOnly());
        },
        get ["data-invalid"]() {
          return utils.dataAttr(context.isInvalid());
        },
        get ["class"]() {
          return clsx(baseClasses().root, local.class);
        },
        get __css() {
          return styleOverrides().root;
        }
      }, others));
    }
  });
});
FormControl.Label = FormControlLabel;
FormControl.Description = FormControlDescription;
FormControl.Error = FormControlError;

/**
 * `GridItem` is used as a child of `Grid` to control the span,
 * start and end positions within the grid.
 */
const GridItem = styles.createHopeComponent(props => {
  const [local, others] = solidJs.splitProps(props, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  return web.createComponent(styles.hope.div, web.mergeProps({
    get ["class"]() {
      return clsx("hope-GridItem-root", local.class);
    },
    get __css() {
      return utils.filterUndefined({
        gridArea: local.area,
        gridColumn: spanFn(local.colSpan),
        gridRow: spanFn(local.rowSpan),
        gridColumnStart: local.colStart,
        gridColumnEnd: local.colEnd,
        gridRowStart: local.rowStart,
        gridRowEnd: local.rowEnd
      });
    }
  }, others));
});

/** Utility function to apply a column or row span to the `GridItem`. */
function spanFn(span) {
  return styles.mapResponsive(span, value => value === "auto" ? "auto" : `span ${value}/span ${value}`);
}

/**
 * `Grid` is used to create grid layouts.
 * It renders a `div` with `display: grid` and comes with helpful style shorthand.
 */
const Grid = styles.createHopeComponent(props => {
  const [local, others] = solidJs.splitProps(props, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  return web.createComponent(styles.hope.div, web.mergeProps({
    get ["class"]() {
      return clsx("hope-Grid-root", local.class);
    },
    get __css() {
      return {
        display: "grid",
        gridAutoFlow: local.autoFlow,
        gridAutoColumns: local.autoColumns,
        gridAutoRows: local.autoRows,
        gridTemplateAreas: local.templateAreas,
        gridTemplateColumns: local.templateColumns,
        gridTemplateRows: local.templateRows
      };
    }
  }, others));
});
Grid.Item = GridItem;

/**
 * `SimpleGrid` uses the `Grid` component and provides a simpler interface to create responsive grid layouts.
 * Provides props that easily define columns and spacing.
 */
const SimpleGrid = styles.createHopeComponent(props => {
  const [local, others] = solidJs.splitProps(props, ["minChildWidth", "columns", "spacing", "spacingX", "spacingY"]);
  const theme = styles.useTheme();
  const templateColumns = () => {
    if (local.minChildWidth) {
      return widthToColumns(local.minChildWidth, theme.vars);
    }
    return countToColumns(local.columns);
  };
  return web.createComponent(Grid, web.mergeProps({
    get templateColumns() {
      return templateColumns();
    },
    get gap() {
      return local.spacing;
    },
    get columnGap() {
      return local.spacingX;
    },
    get rowGap() {
      return local.spacingY;
    }
  }, others));
});
function widthToColumns(width, vars) {
  return styles.mapResponsive(width, value => {
    const _value = styles.resolveTokenValue(value, "sizes", vars);
    return utils.isNull(value) ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return styles.mapResponsive(count, value => utils.isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`);
}

const useHeadingStyleConfig = styles.createStyleConfig({
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
});

/**
 * Headings are used for rendering headlines.
 * It renders an <h2> tag by default.
 */
const Heading = styles.createHopeComponent(props => {
  props = styles.mergeThemeProps("Heading", {}, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["as", "class", "level", "lineClamp"], [...styles.STYLE_CONFIG_PROP_NAMES, "size"]);
  const {
    baseClasses,
    styleOverrides
  } = useHeadingStyleConfig("Heading", styleConfigProps);

  // create an `<h>` tag with the level or return the `as` prop
  const asProp = () => local.level ? `h${local.level}` : local.as;
  const rootStyles = solidJs.createMemo(() => ({
    ...styleOverrides().root,
    ...lineClamp(local.lineClamp)
  }));
  return web.createComponent(styles.hope.h2, web.mergeProps({
    get as() {
      return asProp();
    },
    get ["class"]() {
      return clsx(baseClasses().root, local.class);
    },
    get __css() {
      return rootStyles();
    }
  }, others));
});

/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
/**
 * Primitive that loads an image in the browser,
 * and lets us know the `status` so we can show image
 * fallback if it is still `pending`.
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = createImage({ src: "image.png" })
 *   return status() === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
function createImageLoadingStatus(props) {
  const [statusState, setStatusState] = solidJs.createSignal("pending");

  // If user opts out of the fallback/placeholder logic, let's just return 'loaded'.
  const status = () => props.ignoreFallback ? "loaded" : statusState();
  let imageRef = null;
  const flush = () => {
    if (imageRef) {
      imageRef.onload = null;
      imageRef.onerror = null;
      imageRef = null;
    }
  };
  const load = () => {
    if (!props.src) {
      return;
    }
    flush();
    const img = new Image();
    img.src = props.src;
    if (props.crossOrigin) {
      img.crossOrigin = props.crossOrigin;
    }
    if (props.srcSet) {
      img.srcset = props.srcSet;
    }
    if (props.sizes) {
      img.sizes = props.sizes;
    }
    if (props.loading) {
      img.loading = props.loading;
    }
    img.onload = event => {
      flush();
      setStatusState("loaded");
      utils.callHandler(props.onLoad, event);
    };
    img.onerror = error => {
      flush();
      setStatusState("failed");
      utils.callHandler(props.onError, error);
    };
    imageRef = img;
  };
  solidJs.createEffect(() => {
    setStatusState(props.src ? "loading" : "pending");
  });
  solidJs.createRenderEffect(() => {
    // If user opts out of the fallback/placeholder logic, let's bail out.
    if (props.ignoreFallback) {
      return undefined;
    }
    if (statusState() === "loading") {
      load();
    }
    solidJs.onCleanup(() => {
      flush();
    });
  });
  return status;
}

/**
 * Image renders an image with support for fallbacks.
 */
const Image$1 = styles.createHopeComponent(props => {
  const [local, loadEventProps, others] = solidJs.splitProps(props, ["class", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]);
  const shouldIgnore = () => {
    return local.loading != null ||
    // Defer to native `img` tag if `loading` prop is passed.
    local.ignoreFallback || local.fallbackSrc === undefined && local.fallback === undefined // if the user doesn't provide any kind of fallback we should ignore it.
    ;
  };
  const status = createImageLoadingStatus(solidJs.mergeProps(props, {
    get ignoreFallback() {
      return shouldIgnore();
    }
  }));
  const sharedProps = () => ({
    objectFit: local.fit,
    objectPosition: local.align,
    ...(shouldIgnore() ? loadEventProps : {}),
    ...others
  });
  return web.createComponent(solidJs.Show, {
    get when() {
      return status() === "loaded";
    },
    get fallback() {
      return web.createComponent(solidJs.Show, {
        get when() {
          return local.fallback;
        },
        get fallback() {
          return web.createComponent(styles.hope.img, web.mergeProps({
            get src() {
              return local.fallbackSrc;
            },
            "class": "hope-Image-placeholder"
          }, sharedProps));
        },
        get children() {
          return local.fallback;
        }
      });
    },
    get children() {
      return web.createComponent(styles.hope.img, web.mergeProps({
        get src() {
          return local.src;
        },
        get srcSet() {
          return local.srcSet;
        },
        get crossOrigin() {
          return local.crossOrigin;
        },
        get loading() {
          return local.loading;
        },
        get ["class"]() {
          return clsx("hope-Image-root", local.class);
        }
      }, sharedProps));
    }
  });
});
/**
 * Fallback component for most SSR users who want to use the native `img` with
 * Hope UI styling features.
 */
const Img = styles.createHopeComponent(props => {
  const [local, others] = solidJs.splitProps(props, ["class"]);
  return web.createComponent(styles.hope.img, web.mergeProps({
    get ["class"]() {
      return clsx("hope-Image-root", local.class);
    }
  }, others));
});

const INPUT_DEFAULT_VARIANTS = {
  variant: "outlined",
  size: "md"
};
const INPUT_SIZES = {
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
};
const useInputStyleConfig = styles.createStyleConfig(({
  vars
}) => ({
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
          light: `0 0 0 3px ${rgba(vars.colors.primary.lightChannel, 0.75)}`,
          dark: `0 0 0 3px ${rgba(vars.colors.primary.darkChannel, 0.75)}`
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
          light: `0 0 0 3px ${rgba(vars.colors.danger.lightChannel, 0.75)}`,
          dark: `0 0 0 3px ${rgba(vars.colors.danger.darkChannel, 0.75)}`
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
            light: `1px solid ${vars.colors.neutral["300"]}`,
            dark: `1px solid ${vars.colors.neutral["700"]}`
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
          ...INPUT_SIZES.sm,
          px: 2.5
        },
        md: {
          ...INPUT_SIZES.md,
          px: 3
        },
        lg: {
          ...INPUT_SIZES.lg,
          px: 4
        }
      }
    }
  }
}), INPUT_DEFAULT_VARIANTS);

const InputGroupContext = solidJs.createContext();
function useInputGroupContext() {
  return solidJs.useContext(InputGroupContext);
}
function useRequiredInputGroupContext() {
  const context = useInputGroupContext();
  if (!context) {
    throw new Error("[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component");
  }
  return context;
}

const Input = styles.createHopeComponent(props => {
  const formControlContext = useFormControlContext();
  const inputGroupContext = useInputGroupContext();
  props = styles.mergeThemeProps("Input", {}, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["id", "aria-describedby", "class", "__css", "required", "disabled", "readonly", "isRequired", "isDisabled", "isReadOnly", "isInvalid", "htmlSize"], [...styles.STYLE_CONFIG_PROP_NAMES, "variant", "size"]);
  const {
    baseClasses,
    styleOverrides
  } = useInputStyleConfig("Input", {
    get variant() {
      return inputGroupContext?.variant() ?? styleConfigProps.variant;
    },
    get size() {
      return inputGroupContext?.size() ?? styleConfigProps.size;
    },
    get styleConfigOverride() {
      return styleConfigProps.styleConfigOverride;
    },
    get unstyled() {
      return inputGroupContext?.unstyled() ?? styleConfigProps.unstyled;
    }
  });
  const isRequired = () => {
    return local.isRequired ?? inputGroupContext?.isRequired() ?? formControlContext?.isRequired();
  };
  const isDisabled = () => {
    return local.isDisabled ?? inputGroupContext?.isDisabled() ?? formControlContext?.isDisabled();
  };
  const isReadOnly = () => {
    return local.isReadOnly ?? inputGroupContext?.isReadOnly() ?? formControlContext?.isReadOnly();
  };
  const isInvalid = () => {
    return local.isInvalid ?? inputGroupContext?.isInvalid() ?? formControlContext?.isInvalid();
  };
  const ariaDescribedBy = () => {
    return formControlContext?.mergeAriaDescribedBy(local["aria-describedby"]);
  };
  return web.createComponent(styles.hope.input, web.mergeProps({
    type: "text",
    get id() {
      return local.id ?? formControlContext?.id();
    },
    get required() {
      return isRequired();
    },
    get disabled() {
      return isDisabled();
    },
    get readOnly() {
      return isReadOnly();
    },
    get ["aria-invalid"]() {
      return utils.ariaAttr(isInvalid());
    },
    get ["aria-describedby"]() {
      return ariaDescribedBy();
    },
    get size() {
      return local.htmlSize;
    },
    get ["class"]() {
      return clsx(inputGroupContext?.baseClasses().input, baseClasses().root, local.class);
    },
    get __css() {
      return {
        ...inputGroupContext?.styleOverrides().input,
        ...styleOverrides().root,
        ...local.__css
      };
    }
  }, others));
});

function createSizeCompoundVariant(config) {
  return [{
    variants: {
      size: config.size,
      hasLeftSection: true
    },
    style: {
      paddingInlineStart: config.paddingWithSection
    }
  }, {
    variants: {
      size: config.size,
      hasRightSection: true
    },
    style: {
      paddingInlineEnd: config.paddingWithSection
    }
  }];
}
const useInputGroupStyleConfig = styles.createStyleConfig(({
  vars
}) => ({
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
    compoundVariants: [...createSizeCompoundVariant({
      size: "sm",
      paddingWithSection: 8
    }), ...createSizeCompoundVariant({
      size: "md",
      paddingWithSection: 10
    }), ...createSizeCompoundVariant({
      size: "lg",
      paddingWithSection: 12
    })]
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
          ...INPUT_SIZES.sm,
          height: "100%",
          width: INPUT_SIZES.sm.minHeight
        },
        md: {
          ...INPUT_SIZES.md,
          height: "100%",
          width: INPUT_SIZES.md.minHeight
        },
        lg: {
          ...INPUT_SIZES.lg,
          height: "100%",
          width: INPUT_SIZES.lg.minHeight
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
            light: `1px solid ${vars.colors.neutral["300"]}`,
            dark: `1px solid ${vars.colors.neutral["700"]}`
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
          ...INPUT_SIZES.sm,
          px: 2.5
        },
        md: {
          ...INPUT_SIZES.md,
          px: 3
        },
        lg: {
          ...INPUT_SIZES.lg,
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
}), INPUT_DEFAULT_VARIANTS);

/*

<root>
  <leftAddon />
  <leftElement />
  <input />
  <rightElement />
  <rightAddon />
</root>

<root>
  <label />
  <inputGroup />
  <description />
  <error />
</root>

*/

/*

const baseDescriptionStyles: SystemStyleObject = {
  display: "inline-block",
  fontWeight: "normal",
  fontSize: "xs",
  lineHeight: 4,
  textAlign: "start",
  wordBreak: "break-word",
};

//

label: {
  baseStyle: {
    display: "inline-block",
    color: "common.foreground",
    WebkitTapHighlightColor: "transparent",
    fontWeight: "medium",
    fontSize: "sm",
    lineHeight: 5,
    textAlign: "start",
    wordBreak: "break-word",
  },
  variants: {
    hasRequiredIndicator: {
      true: {
        _after: {
          content: `"*"`,
          marginInlineStart: 1,
          color: { light: "danger.600", dark: "danger.500" },
          fontSize: "base",
        },
      },
    },
  },
},
description: {
  baseStyle: {
    ...baseDescriptionStyles,
    color: { light: "neutral.600", dark: "neutral.500" },
  },
},
error: {
  baseStyle: {
    ...baseDescriptionStyles,
    color: { light: "danger.600", dark: "danger.500" },
  },
},

*/

const InputGroupAddon = styles.createHopeComponent(props => {
  const context = useRequiredInputGroupContext();
  const [local, others] = solidJs.splitProps(props, ["class", "__css", "addonPlacement"]);
  const placementStyleConfig = solidJs.createMemo(() => {
    switch (local.addonPlacement) {
      case "left":
        return {
          className: context.baseClasses().leftAddon,
          styleOverride: context.styleOverrides().leftAddon
        };
      case "right":
        return {
          className: context.baseClasses().rightAddon,
          styleOverride: context.styleOverrides().rightAddon
        };
    }
  });
  solidJs.onMount(() => {
    switch (local.addonPlacement) {
      case "left":
        context.setHasLeftAddon(true);
        solidJs.onCleanup(() => context.setHasLeftAddon(false));
        break;
      case "right":
        context.setHasRightAddon(true);
        solidJs.onCleanup(() => context.setHasRightAddon(false));
        break;
    }
  });
  return web.createComponent(styles.hope.div, web.mergeProps({
    get ["data-required"]() {
      return utils.dataAttr(context.isRequired());
    },
    get ["data-disabled"]() {
      return utils.dataAttr(context.isDisabled());
    },
    get ["data-readonly"]() {
      return utils.dataAttr(context.isReadOnly());
    },
    get ["data-invalid"]() {
      return utils.dataAttr(context.isInvalid());
    },
    get ["class"]() {
      return clsx(context.baseClasses().addon, placementStyleConfig().className, local.class);
    },
    get __css() {
      return {
        ...context.styleOverrides().addon,
        ...placementStyleConfig().styleOverride,
        ...local.__css
      };
    }
  }, others));
});
const InputGroupLeftAddon = styles.createHopeComponent(props => {
  return web.createComponent(InputGroupAddon, web.mergeProps({
    addonPlacement: "left"
  }, props));
});
const InputGroupRightAddon = styles.createHopeComponent(props => {
  return web.createComponent(InputGroupAddon, web.mergeProps({
    addonPlacement: "right"
  }, props));
});

const InputGroupSection = styles.createHopeComponent(props => {
  const context = useRequiredInputGroupContext();
  const [local, others] = solidJs.splitProps(props, ["class", "__css", "sectionPlacement"]);
  const placementStyleConfig = solidJs.createMemo(() => {
    switch (local.sectionPlacement) {
      case "left":
        return {
          className: context.baseClasses().leftSection,
          styleOverride: context.styleOverrides().leftSection
        };
      case "right":
        return {
          className: context.baseClasses().rightSection,
          styleOverride: context.styleOverrides().rightSection
        };
    }
  });
  solidJs.onMount(() => {
    switch (local.sectionPlacement) {
      case "left":
        context.setHasLeftSection(true);
        solidJs.onCleanup(() => context.setHasLeftSection(false));
        break;
      case "right":
        context.setHasRightSection(true);
        solidJs.onCleanup(() => context.setHasRightSection(false));
        break;
    }
  });
  return web.createComponent(styles.hope.div, web.mergeProps({
    get ["data-required"]() {
      return utils.dataAttr(context.isRequired());
    },
    get ["data-disabled"]() {
      return utils.dataAttr(context.isDisabled());
    },
    get ["data-readonly"]() {
      return utils.dataAttr(context.isReadOnly());
    },
    get ["data-invalid"]() {
      return utils.dataAttr(context.isInvalid());
    },
    get ["class"]() {
      return clsx(context.baseClasses().section, placementStyleConfig().className, local.class);
    },
    get __css() {
      return {
        ...context.styleOverrides().section,
        ...placementStyleConfig().styleOverride,
        ...local.__css
      };
    }
  }, others));
});
const InputGroupLeftSection = styles.createHopeComponent(props => {
  return web.createComponent(InputGroupSection, web.mergeProps({
    sectionPlacement: "left"
  }, props));
});
const InputGroupRightSection = styles.createHopeComponent(props => {
  return web.createComponent(InputGroupSection, web.mergeProps({
    sectionPlacement: "right"
  }, props));
});

const InputGroup = styles.createHopeComponent(props => {
  const formControlContext = useFormControlContext();
  props = styles.mergeThemeProps("InputGroup", {}, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["class", "isRequired", "isDisabled", "isReadOnly", "isInvalid"], [...styles.STYLE_CONFIG_PROP_NAMES, "variant", "size"]);
  const [hasLeftSection, setHasLeftSection] = solidJs.createSignal(false);
  const [hasRightSection, setHasRightSection] = solidJs.createSignal(false);
  const [hasLeftAddon, setHasLeftAddon] = solidJs.createSignal(false);
  const [hasRightAddon, setHasRightAddon] = solidJs.createSignal(false);
  const {
    baseClasses,
    styleOverrides
  } = useInputGroupStyleConfig("InputGroup", {
    get variant() {
      return styleConfigProps.variant;
    },
    get size() {
      return styleConfigProps.size;
    },
    get hasLeftSection() {
      return hasLeftSection();
    },
    get hasRightSection() {
      return hasRightSection();
    },
    get hasLeftAddon() {
      return hasLeftAddon();
    },
    get hasRightAddon() {
      return hasRightAddon();
    },
    get styleConfigOverride() {
      return styleConfigProps.styleConfigOverride;
    },
    get unstyled() {
      return styleConfigProps.unstyled;
    }
  });
  const context = {
    isRequired: () => props.isRequired ?? formControlContext?.isRequired(),
    isDisabled: () => props.isDisabled ?? formControlContext?.isDisabled(),
    isReadOnly: () => props.isReadOnly ?? formControlContext?.isReadOnly(),
    isInvalid: () => props.isInvalid ?? formControlContext?.isInvalid(),
    variant: () => styleConfigProps.variant,
    size: () => styleConfigProps.size,
    unstyled: () => styleConfigProps.unstyled,
    baseClasses,
    styleOverrides,
    setHasLeftSection,
    setHasRightSection,
    setHasLeftAddon,
    setHasRightAddon
  };
  return web.createComponent(InputGroupContext.Provider, {
    value: context,
    get children() {
      return web.createComponent(styles.hope.div, web.mergeProps({
        get ["data-required"]() {
          return utils.dataAttr(context.isRequired());
        },
        get ["data-disabled"]() {
          return utils.dataAttr(context.isDisabled());
        },
        get ["data-readonly"]() {
          return utils.dataAttr(context.isReadOnly());
        },
        get ["data-invalid"]() {
          return utils.dataAttr(context.isInvalid());
        },
        get ["class"]() {
          return clsx(baseClasses().root, local.class);
        },
        get __css() {
          return styleOverrides().root;
        }
      }, others));
    }
  });
});
InputGroup.LeftAddon = InputGroupLeftAddon;
InputGroup.RightAddon = InputGroupRightAddon;
InputGroup.LeftSection = InputGroupLeftSection;
InputGroup.RightSection = InputGroupRightSection;

const useKbdStyleConfig = styles.createStyleConfig({
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
      borderColor: {
        light: "neutral.300",
        dark: "neutral.600"
      },
      backgroundColor: {
        light: "neutral.100",
        dark: "neutral.800"
      }
    }
  }
});

/**
 * `Kbd` is a semantic component used to render keyboard shortcut.
 */
const Kbd = styles.createHopeComponent(props => {
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["class"], styles.STYLE_CONFIG_PROP_NAMES);
  const {
    baseClasses,
    styleOverrides
  } = useKbdStyleConfig("Kbd", styleConfigProps);
  return web.createComponent(styles.hope.kbd, web.mergeProps({
    get ["class"]() {
      return clsx(baseClasses().root, local.class);
    },
    get __css() {
      return styleOverrides().root;
    }
  }, others));
});

const usePopoverStyleConfig = styles.createStyleConfig(theme => ({
  root: {
    baseStyle: {
      zIndex: "popover",
      // Default `position`, `top` and `left` values required by @floating-ui/dom,
      // see https://floating-ui.com/docs/computeposition#usage
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      outline: "none",
      boxShadow: "md",
      border: `1px solid ${theme.vars.colors.neutral["300"]}`,
      borderColor: {
        dark: "neutral.600"
      },
      borderRadius: "sm",
      backgroundColor: {
        light: "common.white",
        dark: "neutral.700"
      },
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
}));

const PopoverContext = solidJs.createContext();
function usePopoverContext() {
  const context = solidJs.useContext(PopoverContext);
  if (!context) {
    throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
  }
  return context;
}

/**
 * PopoverAnchor is the element used as the positioning reference for the popover.
 * It renders a `div` by default.
 */
const PopoverAnchor = styles.createHopeComponent(props => {
  const popoverContext = usePopoverContext();
  const [local, others] = solidJs.splitProps(props, ["ref"]);
  return web.createComponent(styles.hope.div, web.mergeProps({
    ref(r$) {
      const _ref$ = utils.mergeRefs(popoverContext.setAnchorRef, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    }
  }, others));
});

/**
 * PopoverCloseButton is used closes the popover.
 *
 * You don't need to pass the `onClick` to it, it gets the
 * `close` action from the popover context.
 */
const PopoverCloseButton = styles.createHopeComponent(props => {
  const popoverContext = usePopoverContext();
  props = mergeDefaultProps({
    "aria-label": "Close popover",
    size: "sm"
  }, props);
  const [local, others] = solidJs.splitProps(props, ["class", "onClick"]);
  const onClick = event => {
    event.stopPropagation();
    utils.callHandler(local.onClick, event);
    popoverContext.onCloseButtonClick();
  };
  return web.createComponent(CloseButton, web.mergeProps({
    get ["class"]() {
      return clsx("hope-Popover-closeButton", local.class);
    },
    onClick: onClick
  }, others));
});

const _tmpl$ = /*#__PURE__*/web.template(`<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path></g></svg>`, 8);
const ARROW_VIEWBOX_SIZE = 30;
const HALF_ARROW_VIEWBOX_SIZE = ARROW_VIEWBOX_SIZE / 2;
const ROTATE_MAP = {
  top: `rotate(180 ${HALF_ARROW_VIEWBOX_SIZE} ${HALF_ARROW_VIEWBOX_SIZE})`,
  right: `rotate(-90 ${HALF_ARROW_VIEWBOX_SIZE} ${HALF_ARROW_VIEWBOX_SIZE})`,
  bottom: `rotate(0 ${HALF_ARROW_VIEWBOX_SIZE} ${HALF_ARROW_VIEWBOX_SIZE})`,
  left: `rotate(90 ${HALF_ARROW_VIEWBOX_SIZE} ${HALF_ARROW_VIEWBOX_SIZE})`
};

/**
 * PopoverArrow renders an arrow inside a `Popover` component.
 */
const PopoverArrow = styles.createHopeComponent(props => {
  const popoverContext = usePopoverContext();
  const [local, others] = solidJs.splitProps(props, ["ref", "class", "style", "children"]);
  const dir = () => popoverContext.currentPlacement().split("-")[0];
  const contentStyle = createComputedStyle(popoverContext.contentRef);
  const fill = () => contentStyle()?.getPropertyValue("background-color") || "none";
  const stroke = () => contentStyle()?.getPropertyValue(`border-${dir()}-color`) || "none";
  const borderWidth = () => contentStyle()?.getPropertyValue(`border-${dir()}-width`) || "0px";
  const strokeWidth = () => {
    return parseInt(borderWidth()) * 2 * (ARROW_VIEWBOX_SIZE / popoverContext.arrowSize());
  };
  return web.createComponent(styles.hope.div, web.mergeProps({
    ref(r$) {
      const _ref$ = utils.mergeRefs(popoverContext.setArrowRef, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    "aria-hidden": "true",
    get style() {
      return {
        // SSR
        "font-size": `${popoverContext.arrowSize()}px`,
        fill: fill(),
        stroke: stroke(),
        "stroke-width": strokeWidth(),
        ...local.style
      };
    },
    get ["class"]() {
      return clsx(popoverContext.baseClasses().arrow, local.class);
    },
    get __css() {
      return popoverContext.styleOverrides().arrow;
    }
  }, others, {
    get children() {
      const _el$ = _tmpl$.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.firstChild;
        _el$3.nextSibling;
      web.effect(() => web.setAttribute(_el$2, "transform", ROTATE_MAP[dir()]));
      return _el$;
    }
  }));
});
function createComputedStyle(element) {
  const [style, setStyle] = solidJs.createSignal();
  solidJs.createRenderEffect(() => {
    const el = element();
    el && setStyle(utils.getWindow(el).getComputedStyle(el));
  });
  return style;
}

/**
 * The popover content wrapper.
 */
const PopoverContent = styles.createHopeComponent(props => {
  const popoverContext = usePopoverContext();
  const [local, others] = solidJs.splitProps(props, ["ref", "class", "style", "children", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]);
  const triggerOnClick = () => popoverContext.triggerMode() === "click";
  const triggerOnHover = () => popoverContext.triggerMode() === "hover";
  const onKeyDown = event => {
    event.stopPropagation();
    utils.callHandler(local.onKeyDown, event);
    utils.callHandler(popoverContext.onContentKeyDown, event);
  };
  const onFocusOut = event => {
    utils.callHandler(local.onFocusOut, event);
    utils.callHandler(popoverContext.onContentFocusOut, event);
  };
  const onMouseEnter = event => {
    utils.callHandler(local.onMouseEnter, event);
    if (triggerOnHover()) {
      popoverContext.onContentMouseEnter();
    }
  };
  const onMouseLeave = event => {
    utils.callHandler(local.onMouseLeave, event);
    if (triggerOnHover()) {
      utils.callHandler(popoverContext.onContentMouseLeave, event);
    }
  };
  const computedStyle = solidJs.createMemo(() => ({
    ...local.style,
    ...popoverContext.popoverTransition.style()
  }));
  return web.createComponent(solidJs.Show, {
    get when() {
      return popoverContext.popoverTransition.keepMounted();
    },
    get children() {
      return web.createComponent(web.Portal, {
        get children() {
          return web.createComponent(FocusTrapRegion, web.mergeProps({
            as: "section",
            autoFocus: true,
            get restoreFocus() {
              return triggerOnClick();
            },
            ref(r$) {
              const _ref$ = utils.mergeRefs(popoverContext.setContentRef, local.ref);
              typeof _ref$ === "function" && _ref$(r$);
            },
            get id() {
              return popoverContext.popoverId();
            },
            get role() {
              return triggerOnHover() ? "tooltip" : "dialog";
            },
            get ["aria-labelledby"]() {
              return popoverContext.headingId();
            },
            get ["aria-describedby"]() {
              return popoverContext.descriptionId();
            },
            get trapFocus() {
              return popoverContext.trapFocus();
            },
            get initialFocusSelector() {
              return popoverContext.initialFocusSelector();
            },
            get restoreFocusSelector() {
              return popoverContext.restoreFocusSelector();
            },
            get ["class"]() {
              return clsx(popoverContext.baseClasses().root, local.class);
            },
            get style() {
              return computedStyle();
            },
            get __css() {
              return popoverContext.styleOverrides().root;
            },
            onKeyDown: onKeyDown,
            onFocusOut: onFocusOut,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave
          }, others, {
            get children() {
              return [web.createComponent(solidJs.Show, {
                get when() {
                  return popoverContext.withArrow();
                },
                get children() {
                  return web.createComponent(PopoverArrow, {});
                }
              }), web.memo(() => local.children)];
            }
          }));
        }
      });
    }
  });
});

/**
 * PopoverDescription renders a description in a popover.
 * This component must be wrapped with `Popover`,
 * so the `aria-describedby` prop is properly set on the popover element.
 *
 * It renders a `p` by default.
 */
const PopoverDescription = styles.createHopeComponent(props => {
  const popoverContext = usePopoverContext();
  const [local, others] = solidJs.splitProps(props, ["class"]);
  solidJs.createEffect(() => {
    popoverContext.setDescriptionId(`${popoverContext.popoverId()}-description`);
    solidJs.onCleanup(() => popoverContext.setDescriptionId(undefined));
  });
  return web.createComponent(styles.hope.p, web.mergeProps({
    get id() {
      return popoverContext.descriptionId();
    },
    get ["class"]() {
      return clsx(popoverContext.baseClasses().description, local.class);
    },
    get __css() {
      return popoverContext.styleOverrides().description;
    }
  }, others));
});

/**
 * PopoverHeading renders a heading in a popover.
 * This component must be wrapped with `Popover`,
 * so the `aria-labelledby` prop is properly set on the popover element.
 *
 * It renders an `h2` by default.
 */
const PopoverHeading = styles.createHopeComponent(props => {
  const popoverContext = usePopoverContext();
  const [local, others] = solidJs.splitProps(props, ["class"]);
  solidJs.createEffect(() => {
    popoverContext.setHeadingId(`${popoverContext.popoverId()}-heading`);
    solidJs.onCleanup(() => popoverContext.setHeadingId(undefined));
  });
  return web.createComponent(styles.hope.h2, web.mergeProps({
    get id() {
      return popoverContext.headingId();
    },
    get ["class"]() {
      return clsx(popoverContext.baseClasses().heading, local.class);
    },
    get __css() {
      return popoverContext.styleOverrides().heading;
    }
  }, others));
});

/**
 * PopoverTrigger opens the popover's content, it renders a `button` by default.
 * It must be an interactive element.
 */
const PopoverTrigger = styles.createHopeComponent(props => {
  const popoverContext = usePopoverContext();
  const [local, others] = solidJs.splitProps(props, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]);
  const triggerOnClick = () => popoverContext.triggerMode() === "click";
  const triggerOnHover = () => popoverContext.triggerMode() === "hover";
  const onClick = event => {
    utils.callHandler(local.onClick, event);
    if (triggerOnClick()) {
      event.stopPropagation();
      popoverContext.onTriggerClick();
    }
  };
  const onKeyDown = event => {
    utils.callHandler(local.onKeyDown, event);
    if (triggerOnHover()) {
      event.stopPropagation();
      utils.callHandler(popoverContext.onTriggerKeyDown, event);
    }
  };
  const onFocus = event => {
    utils.callHandler(local.onFocus, event);
    if (triggerOnHover()) {
      popoverContext.onTriggerFocus();
    }
  };
  const onBlur = event => {
    utils.callHandler(local.onBlur, event);
    if (triggerOnHover()) {
      utils.callHandler(popoverContext.onTriggerBlur, event);
    }
  };
  const onMouseEnter = event => {
    utils.callHandler(local.onMouseEnter, event);
    if (triggerOnHover()) {
      popoverContext.onTriggerMouseEnter();
    }
  };
  const onMouseLeave = event => {
    utils.callHandler(local.onMouseLeave, event);
    if (triggerOnHover()) {
      popoverContext.onTriggerMouseLeave();
    }
  };
  return web.createComponent(styles.hope.button, web.mergeProps({
    ref(r$) {
      const _ref$ = utils.mergeRefs(popoverContext.setTriggerRef, local.ref);
      typeof _ref$ === "function" && _ref$(r$);
    },
    get id() {
      return `${popoverContext.popoverId()}-trigger`;
    },
    type: "button",
    "aria-haspopup": "dialog",
    get ["aria-controls"]() {
      return popoverContext.popoverId();
    },
    get ["aria-expanded"]() {
      return popoverContext.isOpen();
    },
    onClick: onClick,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, others));
});

/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */

function createDOMRect(anchorRect) {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0
  } = anchorRect ?? {};
  if (typeof DOMRect === "function") {
    return new DOMRect(x, y, width, height);
  }

  // JSDOM doesn't support DOMRect constructor.
  const rect = {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x
  };
  return {
    ...rect,
    toJSON: () => rect
  };
}
function getAnchorElement(anchor, getAnchorRect) {
  // https://floating-ui.com/docs/virtual-elements
  const contextElement = anchor;
  return {
    contextElement,
    getBoundingClientRect: () => {
      const anchorRect = getAnchorRect(anchor);
      if (anchorRect) {
        return createDOMRect(anchorRect);
      }
      if (anchor) {
        return anchor.getBoundingClientRect();
      }
      return createDOMRect();
    }
  };
}

/**
 * Popover provides context, theming, and accessibility properties
 * to all other popover components.
 *
 * It doesn't render any DOM node.
 */
const Popover = props => {
  props = styles.mergeThemeProps("Popover", {
    getAnchorRect: anchor => anchor?.getBoundingClientRect(),
    id: `hope-popover-${solidJs.createUniqueId()}`,
    triggerMode: "click",
    withArrow: true,
    arrowSize: 24,
    placement: "bottom",
    offset: 12,
    arrowPadding: 12,
    openDelay: 200,
    closeDelay: 200,
    closeOnBlur: true,
    closeOnEsc: true,
    trapFocus: false
  }, props);
  const [styleConfigProps] = solidJs.splitProps(props, [...styles.STYLE_CONFIG_PROP_NAMES]);
  const {
    baseClasses,
    styleOverrides
  } = usePopoverStyleConfig("Popover", styleConfigProps);
  const [anchorRef, setAnchorRef] = solidJs.createSignal();
  const [triggerRef, setTriggerRef] = solidJs.createSignal();
  const [contentRef, setContentRef] = solidJs.createSignal();
  const [arrowRef, setArrowRef] = solidJs.createSignal();
  const [isHovered, setIsHovered] = solidJs.createSignal(false);
  const [currentPlacement, setCurrentPlacement] = solidJs.createSignal(props.placement);
  const [headingId, setHeadingId] = solidJs.createSignal();
  const [descriptionId, setDescriptionId] = solidJs.createSignal();
  const disclosureState = primitives.createDisclosure({
    isOpen: () => props.isOpen,
    defaultIsOpen: () => !!props.defaultIsOpen,
    onOpenChange: value => props.onOpenChange?.(value)
  });
  const popoverTransition = primitives.createTransition(() => disclosureState.isOpen(), () => mergeDefaultProps({
    transition: "pop",
    easing: "ease-out",
    exitEasing: "ease-in"
  }, props.transitionOptions ?? {}));
  const getPopoverElements = () => {
    // Popover anchor is `PopoverAnchor` or `PopoverTrigger` or a virtual element.
    const anchorEl = getAnchorElement(anchorRef() ?? triggerRef(), props.getAnchorRect);
    const arrowEl = arrowRef();
    const floatingEl = contentRef();
    return {
      anchorEl,
      arrowEl,
      floatingEl
    };
  };
  async function updatePosition() {
    const {
      anchorEl,
      arrowEl,
      floatingEl
    } = getPopoverElements();
    if (!anchorEl || !floatingEl) {
      return;
    }

    // Virtual element doesn't work without this ¯\_(ツ)_/¯
    anchorEl.getBoundingClientRect();
    const middleware = [dom.offset(props.offset), dom.flip({
      padding: props.overflowPadding
    }), dom.shift({
      padding: props.overflowPadding
    }), dom.size({
      padding: props.overflowPadding,
      apply({
        rects
      }) {
        const referenceWidth = Math.round(rects.reference.width);
        if (props.hasSameWidth) {
          floatingEl.style.width = `${referenceWidth}px`;
        }
      }
    })];
    if (arrowEl) {
      middleware.push(dom.arrow({
        element: arrowEl,
        padding: props.arrowPadding
      }));
    }
    middleware.push(dom.hide());
    const pos = await dom.computePosition(anchorEl, floatingEl, {
      placement: props.placement,
      middleware
    });
    if (pos.placement !== currentPlacement()) {
      setCurrentPlacement(pos.placement);
    }
    if (!floatingEl) {
      return;
    }

    // https://floating-ui.com/docs/computePosition#usage
    Object.assign(floatingEl.style, {
      left: `${Math.round(pos.x)}px`,
      top: `${Math.round(pos.y)}px`,
      visibility: pos.middlewareData.hide?.referenceHidden ? "hidden" : "visible"
    });
    if (arrowEl && pos.middlewareData.arrow) {
      const {
        x: arrowX,
        y: arrowY
      } = pos.middlewareData.arrow;
      const dir = pos.placement.split("-")[0];
      Object.assign(arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        [dir]: "100%"
      });
    }
  }
  let openTimeoutId;
  let closeTimeoutId;
  const onTriggerClick = () => {
    disclosureState.toggle();
  };
  const onTriggerKeyDown = event => {
    if (event.key === "Escape") {
      disclosureState.close();
    }
  };
  const onTriggerFocus = () => {
    // If openTimeoutId does not exist, the user is using keyboard focus (not mouse hover/click)
    if (openTimeoutId == null) {
      disclosureState.open();
    }
  };
  const onTriggerBlur = event => {
    const relatedTarget = utils.getRelatedTarget(event);
    const isValidBlur = !utils.contains(contentRef(), relatedTarget);
    if (disclosureState.isOpen() && props.closeOnBlur && isValidBlur) {
      disclosureState.close();
    }
  };
  const onTriggerMouseEnter = () => {
    setIsHovered(true);
    openTimeoutId = window.setTimeout(() => {
      disclosureState.open();
      void updatePosition();
    }, props.openDelay);
  };
  const onTriggerMouseLeave = () => {
    setIsHovered(false);
    if (openTimeoutId) {
      clearTimeout(openTimeoutId);
      openTimeoutId = undefined;
    }
    closeTimeoutId = window.setTimeout(() => {
      if (!isHovered()) {
        disclosureState.close();
      }
    }, props.closeDelay);
  };
  const onContentKeyDown = event => {
    if (props.closeOnEsc && event.key === "Escape") {
      disclosureState.close();
    }
  };
  const onContentFocusOut = event => {
    const relatedTarget = utils.getRelatedTarget(event);
    const targetIsPopover = utils.contains(contentRef(), relatedTarget);
    const targetIsTrigger = utils.contains(triggerRef(), relatedTarget);
    const isValidBlur = !targetIsPopover && !targetIsTrigger;
    if (disclosureState.isOpen() && props.closeOnBlur && isValidBlur) {
      disclosureState.close();
    }
  };
  const onContentMouseEnter = () => {
    setIsHovered(true);
  };
  const onContentMouseLeave = event => {
    // https://stackoverflow.com/questions/46831247/select-triggers-mouseleave-event-on-parent-element-in-mozilla-firefox
    if (event.relatedTarget === null) {
      return;
    }
    setIsHovered(false);
    closeTimeoutId = window.setTimeout(disclosureState.close, props.closeDelay);
  };
  const onCloseButtonClick = () => {
    disclosureState.close();
  };
  solidJs.createEffect(() => {
    const {
      anchorEl,
      floatingEl
    } = getPopoverElements();
    if (!anchorEl || !floatingEl) {
      return;
    }
    const cleanupAutoUpdate = dom.autoUpdate(anchorEl, floatingEl, updatePosition, {
      // JSDOM doesn't support ResizeObserver
      elementResize: typeof ResizeObserver === "function"
    });
    solidJs.onCleanup(cleanupAutoUpdate);
  });
  solidJs.onCleanup(() => {
    if (web.isServer) {
      return;
    }
    window.clearTimeout(openTimeoutId);
    window.clearTimeout(closeTimeoutId);
  });
  const context = {
    baseClasses,
    styleOverrides,
    isOpen: disclosureState.isOpen,
    popoverTransition,
    triggerMode: () => props.triggerMode,
    withArrow: () => props.withArrow,
    arrowSize: () => props.arrowSize,
    currentPlacement,
    popoverId: () => props.id,
    headingId,
    setHeadingId,
    descriptionId,
    setDescriptionId,
    contentRef,
    setContentRef,
    setArrowRef,
    setAnchorRef,
    setTriggerRef,
    trapFocus: () => props.trapFocus,
    initialFocusSelector: () => props.initialFocusSelector,
    restoreFocusSelector: () => props.restoreFocusSelector,
    onTriggerClick,
    onTriggerKeyDown,
    onTriggerFocus,
    onTriggerBlur,
    onTriggerMouseEnter,
    onTriggerMouseLeave,
    onContentKeyDown,
    onContentFocusOut,
    onContentMouseEnter,
    onContentMouseLeave,
    onCloseButtonClick
  };
  return web.createComponent(PopoverContext.Provider, {
    value: context,
    get children() {
      return utils.runIfFn(props.children, disclosureState);
    }
  });
};
Popover.Trigger = PopoverTrigger;
Popover.Anchor = PopoverAnchor;
Popover.Content = PopoverContent;
Popover.CloseButton = PopoverCloseButton;
Popover.Heading = PopoverHeading;
Popover.Description = PopoverDescription;

/**
 * `OptionalPortal` lets you configure whether children should be rendered in Portal.
 *  It accepts the same props as `Portal` component.
 */
function OptionalPortal(props) {
  const [local, others] = solidJs.splitProps(props, ["children", "withinPortal"]);
  return web.createComponent(solidJs.Show, {
    get when() {
      return local.withinPortal;
    },
    get fallback() {
      return local.children;
    },
    get children() {
      return web.createComponent(web.Portal, web.mergeProps(others, {
        get children() {
          return local.children;
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

/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 */
const Spacer = styles.hope("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
}, "hope-Spacer-root");

/**
 * `Stack` makes it easy to stack elements together and apply a space between them.
 */
const Stack = styles.createHopeComponent(props => {
  props = mergeDefaultProps({
    align: "center"
  }, props);
  const [local, others] = solidJs.splitProps(props, ["class", "direction", "wrap", "align", "justify", "spacing", "spacingX", "spacingY"]);
  return web.createComponent(styles.hope.div, web.mergeProps({
    get ["class"]() {
      return clsx("hope-Stack-root", local.class);
    },
    get __css() {
      return utils.filterUndefined({
        display: "flex",
        flexDirection: local.direction,
        flexWrap: local.wrap,
        alignItems: local.align,
        justifyContent: local.justify,
        gap: local.spacing,
        columnGap: local.spacingX,
        rowGap: local.spacingY
      });
    }
  }, others));
});
/**
 * `HStack` arranges its children in a horizontal line.
 */
const HStack = styles.createHopeComponent(props => {
  props = mergeDefaultProps({
    reverse: false
  }, props);
  const [local, others] = solidJs.splitProps(props, ["reverse"]);
  return web.createComponent(Stack, web.mergeProps(others, {
    get direction() {
      return styles.mapResponsive(local.reverse, reverse => reverse ? "row-reverse" : "row");
    }
  }));
});

/**
 * `VStack` arranges its children in a vertical line.
 */
const VStack = styles.createHopeComponent(props => {
  props = mergeDefaultProps({
    reverse: false
  }, props);
  const [local, others] = solidJs.splitProps(props, ["reverse"]);
  return web.createComponent(Stack, web.mergeProps(others, {
    get direction() {
      return styles.mapResponsive(local.reverse, reverse => reverse ? "column-reverse" : "column");
    }
  }));
});

const useTextStyleConfig = styles.createStyleConfig({
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
});

/**
 * Text component is the used to render text and paragraphs within an interface.
 * It renders a <p> tag by default.
 */
const Text = styles.createHopeComponent(props => {
  props = styles.mergeThemeProps("Text", {}, props);
  const [local, styleConfigProps, others] = solidJs.splitProps(props, ["class", "lineClamp"], [...styles.STYLE_CONFIG_PROP_NAMES, "size"]);
  const {
    baseClasses,
    styleOverrides
  } = useTextStyleConfig("Text", styleConfigProps);
  const rootStyles = solidJs.createMemo(() => ({
    ...styleOverrides().root,
    ...lineClamp(local.lineClamp)
  }));
  return web.createComponent(styles.hope.p, web.mergeProps({
    get ["class"]() {
      return clsx(baseClasses().root, local.class);
    },
    get __css() {
      return rootStyles();
    }
  }, others));
});

exports.Anchor = Anchor;
exports.AspectRatio = AspectRatio;
exports.Box = Box;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.COLOR_MODE_STORAGE_KEY = COLOR_MODE_STORAGE_KEY;
exports.Center = Center;
exports.CloseButton = CloseButton;
exports.ColorModeContext = ColorModeContext;
exports.ColorModeProvider = ColorModeProvider;
exports.ColorModeScript = ColorModeScript;
exports.Container = Container;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.DrawerCloseButton = DrawerCloseButton;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerHeading = DrawerHeading;
exports.DrawerOverlay = DrawerOverlay;
exports.Flex = Flex;
exports.FocusTrapRegion = FocusTrapRegion;
exports.FormControl = FormControl;
exports.FormControlContext = FormControlContext;
exports.FormControlDescription = FormControlDescription;
exports.FormControlError = FormControlError;
exports.FormControlLabel = FormControlLabel;
exports.Grid = Grid;
exports.GridItem = GridItem;
exports.HStack = HStack;
exports.Heading = Heading;
exports.HopeProvider = HopeProvider;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Image = Image$1;
exports.Img = Img;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputGroupLeftAddon = InputGroupLeftAddon;
exports.InputGroupLeftSection = InputGroupLeftSection;
exports.InputGroupRightAddon = InputGroupRightAddon;
exports.InputGroupRightSection = InputGroupRightSection;
exports.Kbd = Kbd;
exports.Modal = Modal;
exports.ModalCloseButton = ModalCloseButton;
exports.ModalContent = ModalContent;
exports.ModalDescription = ModalDescription;
exports.ModalHeading = ModalHeading;
exports.ModalOverlay = ModalOverlay;
exports.OptionalPortal = OptionalPortal;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverArrow = PopoverArrow;
exports.PopoverCloseButton = PopoverCloseButton;
exports.PopoverContent = PopoverContent;
exports.PopoverDescription = PopoverDescription;
exports.PopoverHeading = PopoverHeading;
exports.PopoverTrigger = PopoverTrigger;
exports.SimpleGrid = SimpleGrid;
exports.Spacer = Spacer;
exports.Stack = Stack;
exports.Text = Text;
exports.VStack = VStack;
exports.VisuallyHidden = VisuallyHidden;
exports.VisuallyHiddenInput = VisuallyHiddenInput;
exports.cookieStorageManager = cookieStorageManager;
exports.cookieStorageManagerSSR = cookieStorageManagerSSR;
exports.createCookieStorageManager = createCookieStorageManager;
exports.createIcon = createIcon;
exports.createImageLoadingStatus = createImageLoadingStatus;
exports.createLocalStorageManager = createLocalStorageManager;
exports.lineClamp = lineClamp;
exports.localStorageManager = localStorageManager;
exports.mergeDefaultProps = mergeDefaultProps;
exports.rgba = rgba;
exports.useButtonGroupContext = useButtonGroupContext;
exports.useColorMode = useColorMode;
exports.useColorModeValue = useColorModeValue;
exports.useFormControlContext = useFormControlContext;
exports.useRequiredFormControlContext = useRequiredFormControlContext;
exports.watchModals = watchModals;
Object.keys(primitives).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return primitives[k]; }
  });
});
Object.keys(styles).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return styles[k]; }
  });
});
//# sourceMappingURL=index.js.map
