'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@hope-ui/utils');
var core = require('@stitches/core');
var web = require('solid-js/web');
var solidJs = require('solid-js');
var clsx = require('clsx');

const stitches = core.createStitches({
  prefix: "hope"
});
const {
  css,
  globalCss,
  getCssText,
  keyframes
} = stitches;

const COLOR_MODE_CLASSNAMES = {
  light: "hope-theme-light",
  dark: "hope-theme-dark"
};

/** Return whether an object is a valid system style color mode object. */
function isColorModeObjectLike(obj) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every(key => ["light", "dark"].includes(key));
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */

/** Map a responsive value to a new one. */
function mapResponsive(prop, mapper) {
  if (utils.isArray(prop)) {
    return prop.map(item => {
      if (item === null) {
        return null;
      }
      return mapper(item);
    });
  }
  if (utils.isObject(prop)) {
    return utils.objectKeys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}

/**
 * Converts the object responsive syntax to array syntax.
 *
 * @example
 * objectToArrayNotation({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
 */
function objectToArrayNotation(obj, breakpoints) {
  const result = breakpoints.map(bp => obj[bp] ?? null);
  while (utils.getLastItem(result) === null) {
    result.pop();
  }
  return result;
}

/**
 * Converts the array responsive syntax to object syntax.
 *
 * @example
 * arrayToObjectNotation([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
 */
function arrayToObjectNotation(values, breakpoints) {
  const result = {};
  values.forEach((value, index) => {
    const key = breakpoints[index];
    if (value == null) {
      return;
    }
    result[key] = value;
  });
  return result;
}

/** Return whether an object is a valid responsive object according to the breakpoints. */
function isResponsiveObjectLike(obj, breakpoints) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every(key => breakpoints.includes(key));
}

/** Names of base UseStyleConfigOptions props, used in SolidJS `splitProps`. */
const STYLE_CONFIG_PROP_NAMES = ["styleConfigOverride", "unstyled"];

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/pseudos.ts
 */
const state = {
  hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str, post) => `${str}:focus-visible ${post}`,
  focusWithin: (str, post) => `${str}:focus-within ${post}`,
  active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
function toGroup(fn) {
  return merge$1(v => fn(v, "&"), "[role=group]", "[data-group]", ".group");
}
function toPeer(fn) {
  return merge$1(v => fn(v, "~ &"), "[data-peer]", ".peer");
}
function merge$1(fn, ...selectors) {
  return selectors.map(fn).join(", ");
}
const LIGHT_PSEUDO_PROP = "_light";
const DARK_PSEUDO_PROP = "_dark";
const LIGHT_SELECTOR = `.${COLOR_MODE_CLASSNAMES.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`;
const DARK_SELECTOR = `.${COLOR_MODE_CLASSNAMES.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`;

/** Map system style pseudo props to css pseudo selectors. */
const PSEUDO_SELECTORS_MAP = new Map([["_hover", "&:hover, &[data-hover]"], ["_active", "&:active, &[data-active]"], ["_focus", "&:focus, &[data-focus]"], ["_highlighted", "&[data-highlighted]"], ["_focusWithin", "&:focus-within"], ["_focusVisible", "&:focus-visible, &[data-focus-visible]"], ["_disabled", "&[disabled], &[aria-disabled=true], &[data-disabled]"], ["_readOnly", "&[aria-readonly=true], &[readonly], &[data-readonly]"], ["_before", "&::before"], ["_after", "&::after"], ["_empty", "&:empty"], ["_expanded", "&[aria-expanded=true], &[data-expanded]"], ["_checked", "&[aria-checked=true], &[data-checked]"], ["_grabbed", "&[aria-grabbed=true], &[data-grabbed]"], ["_pressed", "&[aria-pressed=true], &[data-pressed]"], ["_invalid", "&[aria-invalid=true], &[data-invalid]"], ["_valid", "&[data-valid], &[data-state=valid]"], ["_loading", "&[data-loading], &[aria-busy=true]"], ["_selected", "&[aria-selected=true], &[data-selected]"], ["_hidden", "&[hidden], &[data-hidden]"], ["_autofill", "&:-webkit-autofill"], ["_even", "&:nth-of-type(even)"], ["_odd", "&:nth-of-type(odd)"], ["_first", "&:first-child"], ["_last", "&:last-child"], ["_notFirst", "&:not(:first-child)"], ["_notLast", "&:not(:last-child)"], ["_visited", "&:visited"], ["_activeLink", "&[aria-current=page]"], ["_activeStep", "&[aria-current=step]"], ["_indeterminate", "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]"], ["_groupHover", toGroup(state.hover)], ["_peerHover", toPeer(state.hover)], ["_groupFocus", toGroup(state.focus)], ["_peerFocus", toPeer(state.focus)], ["_groupFocusVisible", toGroup(state.focusVisible)], ["_peerFocusVisible", toPeer(state.focusVisible)], ["_groupActive", toGroup(state.active)], ["_peerActive", toPeer(state.active)], ["_groupDisabled", toGroup(state.disabled)], ["_peerDisabled", toPeer(state.disabled)], ["_groupInvalid", toGroup(state.invalid)], ["_peerInvalid", toPeer(state.invalid)], ["_groupChecked", toGroup(state.checked)], ["_peerChecked", toPeer(state.checked)], ["_groupFocusWithin", toGroup(state.focusWithin)], ["_peerFocusWithin", toPeer(state.focusWithin)], ["_peerPlaceholderShown", toPeer(state.placeholderShown)], ["_placeholder", "&::placeholder"], ["_placeholderShown", "&:placeholder-shown"], ["_fullScreen", "&:fullscreen"], ["_selection", "&::selection"], ["_rtl", "[dir=rtl] &, &[dir=rtl]"], ["_ltr", "[dir=ltr] &, &[dir=ltr]"], ["_mediaDark", "@media (prefers-color-scheme: dark)"], ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"], [LIGHT_PSEUDO_PROP, LIGHT_SELECTOR], [DARK_PSEUDO_PROP, DARK_SELECTOR]]);

/** Map system style shorthands props to css properties. */
const SHORTHANDS_MAP = new Map([
// border
["borderX", ["borderRight", "borderLeft"]], ["borderY", ["borderTop", "borderBottom"]],
// color
["bg", ["background"]], ["bgColor", ["backgroundColor"]],
// layout
["d", ["display"]],
// margin
["marginStart", ["marginInlineStart"]], ["marginEnd", ["marginInlineEnd"]], ["m", ["margin"]], ["mt", ["marginTop"]], ["mr", ["marginRight"]], ["me", ["marginInlineEnd"]], ["mb", ["marginBottom"]], ["ml", ["marginLeft"]], ["ms", ["marginInlineStart"]], ["mx", ["marginInlineStart", "marginInlineEnd"]], ["my", ["marginTop", "marginBottom"]],
// padding
["paddingStart", ["paddingInlineStart"]], ["paddingEnd", ["paddingInlineEnd"]], ["p", ["padding"]], ["pt", ["paddingTop"]], ["pr", ["paddingRight"]], ["pe", ["paddingInlineEnd"]], ["pb", ["paddingBottom"]], ["pl", ["paddingLeft"]], ["ps", ["paddingInlineStart"]], ["px", ["paddingInlineStart", "paddingInlineEnd"]], ["py", ["paddingTop", "paddingBottom"]],
// position
["pos", ["position"]],
// radii
["borderTopRadius", ["borderTopLeftRadius", "borderTopRightRadius"]], ["borderRightRadius", ["borderTopRightRadius", "borderBottomRightRadius"]], ["borderBottomRadius", ["borderBottomRightRadius", "borderBottomLeftRadius"]], ["borderLeftRadius", ["borderTopLeftRadius", "borderBottomLeftRadius"]], ["rounded", ["borderRadius"]], ["roundedTop", ["borderTopLeftRadius", "borderTopRightRadius"]], ["roundedRight", ["borderTopRightRadius", "borderBottomRightRadius"]], ["roundedBottom", ["borderBottomRightRadius", "borderBottomLeftRadius"]], ["roundedLeft", ["borderTopLeftRadius", "borderBottomLeftRadius"]],
// shadow
["shadow", ["boxShadow"]],
// size
["w", ["width"]], ["minW", ["minWidth"]], ["maxW", ["maxWidth"]], ["h", ["height"]], ["minH", ["minHeight"]], ["maxH", ["maxHeight"]], ["boxSize", ["width", "height"]]]);

/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/9de39921b983ad0eb2df7195e3b683c2e2e9e290/packages/components/styled-system/src/utils/expand-responsive.ts
 */

/**
 * Expands responsive array/object syntax and color mode syntax.
 *
 * @example
 * expandSyntax({
 *  mx: [1, 2],
 *  bg: { light: 'red', dark: 'blue' }
 * })
 * // or
 * expandSyntax({
 *  mx: { base: 1, sm: 2 } ,
 *  bg: { light: 'red', dark: 'blue' }
 * })
 *
 * // => {
 *  mx: 1,
 *  "@media(min-width:<sm>)": {
 *    mx: 2
 *  },
 *  bg: "red",
 *   _dark: {
 *     bg: "blue"
 *   }
 * }
 */
const expandSyntax = styles => theme => {
  if (!theme.__breakpoints) {
    return styles;
  }
  const {
    isResponsive,
    toArrayValue,
    medias
  } = theme.__breakpoints;
  const computedBaseStyles = {};
  const computedResponsiveStyles = {};
  for (const key in styles) {
    let value = utils.runIfFn(styles[key], theme);
    if (value == null) {
      continue;
    }

    // try to expand color mode syntax and continue loop if successful.
    if (expandColorModeSyntax(key, value, computedBaseStyles)) {
      continue;
    }

    // try converts the object responsive syntax to array syntax.
    value = utils.isObject(value) && isResponsive(value) ? toArrayValue(value) : value;

    // not a responsive syntax = treat the value as is.
    if (!Array.isArray(value)) {
      computedBaseStyles[key] = value;
      continue;
    }
    const queries = value.slice(0, medias.length).length;

    // try to expand responsive syntax.
    for (let index = 0; index < queries; index += 1) {
      const media = medias?.[index];
      const resolvedValue = value[index];
      if (resolvedValue == null) {
        continue;
      }
      if (!media) {
        // try to expand color mode syntax, if fail treat the value as is.
        if (!expandColorModeSyntax(key, resolvedValue, computedBaseStyles)) {
          computedBaseStyles[key] = resolvedValue;
        }
        continue;
      }
      computedResponsiveStyles[media] = computedResponsiveStyles[media] || {};

      // try to expand color mode syntax, if fail treat the value as is.
      if (!expandColorModeSyntax(key, resolvedValue, computedResponsiveStyles[media])) {
        computedResponsiveStyles[media][key] = resolvedValue;
      }
    }
  }
  return {
    ...computedBaseStyles,
    ...computedResponsiveStyles
  };
};

/**
 * Expands color mode syntax into a `target` object.
 * WARNING: This function mutate the `target` object.
 *
 * @param key The key to expand into the `target` object.
 * @param value The value to expand.
 * @param target The target object in which to put the "expanded" value.
 * @return `true` if successful, `false` otherwise.
 */
function expandColorModeSyntax(key, value, target) {
  if (!utils.isObject(value) || !isColorModeObjectLike(value)) {
    return false;
  }
  const {
    light,
    dark
  } = value;
  if (light != null) {
    target[key] = light;
  }
  target[DARK_PSEUDO_PROP] = target[DARK_PSEUDO_PROP] || {};
  if (dark != null) {
    target[DARK_PSEUDO_PROP][key] = dark;
  }
  return true;
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
function analyzeCSSValue(value) {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
}

/** Append `px` unit to unitless value, return it as is otherwise. */
function px(value) {
  if (value == null) {
    return value;
  }
  const {
    unitless
  } = analyzeCSSValue(value);
  return unitless || utils.isNumber(value) ? `${value}px` : value;
}
const sortByBreakpointValue = (a, b) => {
  return parseInt(a[1], 10) > parseInt(b[1], 10) ? 1 : -1;
};

/** Create a new breakpoints object sorted by asc order. */
const sortBps = breakpoints => {
  return Object.fromEntries(Object.entries(breakpoints).sort(sortByBreakpointValue));
};

/** Create an array of breakpoints values sorted by asc order. */
function normalize(breakpoints) {
  const sorted = sortBps(breakpoints);
  return Object.assign(Object.values(sorted), sorted);
}

/** Get all keys of a breakpoints object. */
function keys(breakpoints) {
  const value = Object.keys(sortBps(breakpoints));
  return new Set(value);
}

/** Subtract the equivalent of 1px to the given value. */
function subtract(value) {
  if (!value) {
    return value;
  }
  value = px(value) ?? value;

  // 0.0625 = the equivalent of 1px in em using a 16px base
  const factor = value.endsWith("px") ? -1 : -0.0625;
  if (utils.isNumber(value)) {
    return `${value + factor}`;
  }
  return value.replace(/(\d+\.?\d*)/u, m => `${parseFloat(m) + factor}`);
}

/** Create media query rule. */
function toMediaQueryString(min, max) {
  const query = ["@media screen"];
  if (min) {
    query.push("and", `(min-width: ${px(min)})`);
  }
  if (max) {
    query.push("and", `(max-width: ${px(max)})`);
  }
  return query.join(" ");
}

/** Return metadata about the given breakpoints. */
function analyzeBreakpoints(breakpoints) {
  if (!breakpoints) {
    return null;
  }
  breakpoints.base = breakpoints.base ?? "0px";
  const normalized = normalize(breakpoints);
  const queries = Object.entries(breakpoints).sort(sortByBreakpointValue).map(([breakpoint, minW], index, entry) => {
    let [, maxW] = entry[index + 1] ?? [];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : undefined;
    return {
      _minW: subtract(minW),
      breakpoint,
      minW,
      maxW,
      maxWQuery: toMediaQueryString(null, maxW),
      minWQuery: toMediaQueryString(minW),
      minMaxQuery: toMediaQueryString(minW, maxW)
    };
  });
  const _keys = keys(breakpoints);
  const _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    asObject: sortBps(breakpoints),
    asArray: normalize(breakpoints),
    details: queries,
    medias: [null, ...normalized.map(minW => toMediaQueryString(minW)).slice(1)],
    isResponsive(test) {
      return isResponsiveObjectLike(test, _keysArr);
    },
    toArrayValue(test) {
      if (!utils.isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }
      return objectToArrayNotation(test, _keysArr);
    },
    toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return arrayToObjectNotation(test, _keysArr);
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
const UNITLESS_SCALES = ["colors", "fonts", "fontWeights", "lineHeights", "shadows", "zIndices"];
const IMPORTANT_REGEX = /!(important)?$/;
function isImportant(value) {
  return IMPORTANT_REGEX.test(value);
}
function withoutImportant(value) {
  return value.replace(IMPORTANT_REGEX, "").trim();
}

/** Get a value from theme if the token exist, return the token otherwise. */
function resolveTokenValue(token, scale, vars) {
  if (token == null) {
    return undefined;
  }
  const tokenStr = String(token);
  const rawToken = withoutImportant(tokenStr);

  // if the value is not found in the scale root,
  // maybe it's a dot-notated path like "neutral.500" so ty to access it via `delve`
  let resolvedValue = vars[scale][rawToken] ?? utils.delve(vars[scale], rawToken);
  if (resolvedValue == null) {
    resolvedValue = UNITLESS_SCALES.includes(scale) ? rawToken : px(rawToken);
  }
  return isImportant(tokenStr) ? `${resolvedValue} !important` : resolvedValue;
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */

/** Return a CSSObject from a system style object. */
function toCSSObject(systemStyleObject, theme) {
  const computedStyles = {};
  const styles = expandSyntax(systemStyleObject)(theme);
  for (let key in styles) {
    /**
     * allows the user to pass functional values.
     * boxShadow: theme => `0 2px 2px ${theme.vars.colors.primary["500"]}`
     */
    let value = utils.runIfFn(styles[key], theme);
    if (value == null) {
      continue;
    }

    /**
     * converts pseudo shorthands to valid selector.
     * "_hover" => "&:hover"
     */
    if (key.startsWith("_")) {
      const pseudoSelector = PSEUDO_SELECTORS_MAP.get(key);
      if (pseudoSelector == null) {
        continue;
      }
      key = pseudoSelector;
    }

    /**
     * run recursively until all css objects are resolved,
     * aka pseudo selectors and media queries.
     */
    if (utils.isObject(value)) {
      computedStyles[key] = Object.assign({}, computedStyles[key], toCSSObject(value, theme));
      continue;
    }

    /**
     * converts style props shorthands to valid css properties.
     * "mx" => ["marginLeft", "marginRight"]
     */
    const propertyNames = SHORTHANDS_MAP.get(key) ?? [key];

    /**
     * apply same value to each css properties.
     * { mx: 4 } => { marginLeft: "1rem", "marginRight: "1rem" }
     */
    for (const propertyName of propertyNames) {
      const scale = theme.themeMap[propertyName];
      if (scale != null) {
        value = resolveTokenValue(value, scale, theme.vars);
      }
      computedStyles[propertyName] = value;
    }
  }
  return computedStyles;
}

/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */

function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [shorthandHex[0], shorthandHex[0], shorthandHex[1], shorthandHex[1], shorthandHex[2], shorthandHex[2]].join("");
  }
  const parsed = parseInt(hexString, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return {
    r,
    g,
    b,
    a: a || 1
  };
}
function toRgba(hexOrRgb) {
  if (isHexColor(hexOrRgb)) {
    return hexToRgba(hexOrRgb);
  }
  if (hexOrRgb.startsWith("rgb")) {
    return rgbStringToRgba(hexOrRgb);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function rgbColorChannel(hexOrRgb) {
  const {
    r,
    g,
    b
  } = toRgba(hexOrRgb);
  return `${r} ${g} ${b}`;
}

/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */

/** Utility function to create color palettes. */
function createPalette(scale) {
  return {
    ...scale,
    mainChannel: rgbColorChannel(scale["500"]),
    lightChannel: rgbColorChannel(scale["100"]),
    darkChannel: rgbColorChannel(scale["900"])
  };
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */

const DEFAULT_CSS_VAR_PREFIX = "hope";
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  return escapeSymbol(escapeDot(valueStr));
}
function escapeDot(value) {
  if (value.includes("\\.")) {
    return value;
  }
  const isDecimal = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal ? value.replace(".", `\\.`) : value;
}
function escapeSymbol(value) {
  return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function addPrefix(value, prefix = "") {
  return [prefix, value].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
function toVarDefinition(value, prefix = "") {
  return escape(`--${addPrefix(value, prefix)}`);
}
function cssVar(name, fallback, cssVarPrefix = DEFAULT_CSS_VAR_PREFIX) {
  const cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
function createGetCssVar(prefix = DEFAULT_CSS_VAR_PREFIX) {
  return value => {
    return `var(--${prefix ? `${prefix}-` : ""}${value})`;
  };
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */

/**
 * Use `__` as token separator because it's not a regex keyword.
 * We can't use `.` as separator,
 * because the unflatten process will also unflatten token value like `0.5` (ex: in space scale).
 */
const FLATTEN_SEPARATOR = "__";

/**
 * Convert a token name to a css variable.
 *
 * @example
 * tokenToCssVar(regex, 'colors__primary__500', 'hope')
 * => {
 *   variable: '--hope-colors-primary-500',
 *   reference: 'var(--hope-colors-primary-500)'
 * }
 */
function tokenToCssVar(regex, token, prefix) {
  return cssVar(String(token).replace(regex, "-"), undefined, prefix);
}

/**
 * Create theme css variables.
 *
 * @return
 * - cssVarsValues - The css variables to be injected in `:root`.
 * - vars - An object with the same shape as `scales` but with css variables reference as value.
 *
 * @example
 * createThemeVars(scales, 'hope')
 * => {
 *   cssVarsValues: {
 *     '--hope-colors-primary-500' : '#fff',
 *   },
 *   vars: {
 *     colors: {
 *       primary: {
 *         500: 'var(--hope-colors-primary-500)'
 *       }
 *     }
 *   }
 * }
 */
function createThemeVars(scales, cssVarPrefix) {
  const rootVars = {};
  const darkVars = {};
  const varsReference = {};

  // split colors because it has light and dark values.
  const {
    colors,
    ...otherScales
  } = scales;

  // hack to have the word `colors` in the tokens.
  const lightColors = {
    colors: colors.light
  };
  const darkColors = {
    colors: colors.dark
  };
  const flatLightColorsTokens = utils.flatten(lightColors, FLATTEN_SEPARATOR);
  const flatDarkColorsTokens = utils.flatten(darkColors, FLATTEN_SEPARATOR);
  const flatOtherTokens = utils.flatten(otherScales, FLATTEN_SEPARATOR);

  // Replace both separator and `.`, because it's not a valid character in css variable name.
  const regex = new RegExp(`(${FLATTEN_SEPARATOR}|\\.)`, "g");
  for (const [token, value] of Object.entries(flatLightColorsTokens)) {
    const {
      variable,
      reference
    } = tokenToCssVar(regex, token, cssVarPrefix);
    rootVars[variable] = value;
    varsReference[token] = reference;
  }
  for (const [token, value] of Object.entries(flatDarkColorsTokens)) {
    const {
      variable
    } = tokenToCssVar(regex, token, cssVarPrefix);
    darkVars[variable] = value;
    // No need to add to `varsReference` since light colors vars already be added.
  }
  for (const [token, value] of Object.entries(flatOtherTokens)) {
    const {
      variable,
      reference
    } = tokenToCssVar(regex, token, cssVarPrefix);
    rootVars[variable] = value;
    varsReference[token] = reference;
  }

  // TODO: find more performant solution than flatten => unflatten.
  const vars = utils.unflatten(varsReference, FLATTEN_SEPARATOR);
  const cssVarsValues = {
    root: rootVars,
    dark: darkVars
  };
  return {
    cssVarsValues,
    vars
  };
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
const THEME_SCALE_NAMES = ["colors", "fonts", "fontSizes", "fontWeights", "lineHeights", "letterSpacings", "space", "sizes", "radii", "shadows", "zIndices", "breakpoints"];
function extractScales(theme) {
  return utils.pick(theme, THEME_SCALE_NAMES);
}
function omitMetaData(rawTheme) {
  const {
    vars,
    __cssVarsValues,
    __breakpoints,
    ...cleanTheme
  } = rawTheme;
  return cleanTheme;
}
function attachMetaData(rawTheme) {
  /**
   * In the case the theme has already been converted to css-var (e.g. extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  const theme = omitMetaData(rawTheme);
  const scales = extractScales(theme);
  const {
    cssVarsValues,
    vars
  } = createThemeVars(scales, theme.cssVarPrefix);
  Object.assign(theme, {
    vars,
    __cssVarsValues: cssVarsValues,
    __breakpoints: analyzeBreakpoints(theme.breakpoints)
  });
  return theme;
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
function createDefaultColors(cssVarPrefix) {
  const getCssVar = createGetCssVar(cssVarPrefix);
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
      primary: createPalette({
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
      // Tailwind neutral (+ 10% saturation blue - hue 217)
      neutral: createPalette({
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
      success: createPalette({
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
      info: createPalette({
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
      warning: createPalette({
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
      danger: createPalette({
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
        // very dark neutral gray, do not use pure black.,
        foreground: getCssVar("colors-neutral-800"),
        background: getCssVar("colors-common-white"),
        focusRing: getCssVar("colors-primary-500")
      }
    },
    dark: {
      common: {
        foreground: getCssVar("colors-neutral-200"),
        background: getCssVar("colors-neutral-900"),
        focusRing: getCssVar("colors-primary-600")
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

/** Map CSS properties to theme scale. */
const DEFAULT_THEME_MAP = {
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
};

const space = {
  "0.5": "0.125rem",
  "1": "0.25rem",
  "1.5": "0.375rem",
  "2": "0.5rem",
  "2.5": "0.625rem",
  "3": "0.75rem",
  "3.5": "0.875rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "44": "11rem",
  "48": "12rem",
  "52": "13rem",
  "56": "14rem",
  "60": "15rem",
  "64": "16rem",
  "72": "18rem",
  "80": "20rem",
  "96": "24rem"
};
const defaultThemeScales = {
  colors: createDefaultColors(DEFAULT_CSS_VAR_PREFIX),
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
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  space,
  sizes: {
    ...space,
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
    sticky: 1000,
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
};
const _DEFAULT_THEME = {
  ...defaultThemeScales,
  cssVarPrefix: DEFAULT_CSS_VAR_PREFIX,
  themeMap: DEFAULT_THEME_MAP,
  components: {}
};
const DEFAULT_THEME = attachMetaData(_DEFAULT_THEME);

function merge(a, b, k) {
	if (typeof a === 'object' && typeof b === 'object')  {
		if (Array.isArray(a) && Array.isArray(b)) {
			for (k=0; k < b.length; k++) {
				a[k] = merge(a[k], b[k]);
			}
		} else {
			for (k in b) {
				if (k === '__proto__' || k === 'constructor' || k === 'prototype') break;
				a[k] = merge(a[k], b[k]);
			}
		}
		return a;
	}
	return b;
}

function dset(obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x, k;
	while (i < l) {
		k = keys[i++];
		if (k === '__proto__' || k === 'constructor' || k === 'prototype') break;
		t = t[k] = (i === l) ? merge(t[k],val) : (typeof(x=t[k])===typeof keys) ? x : (keys[i]*0 !== 0 || !!~(''+keys[i]).indexOf('.')) ? {} : [];
	}
}

function extendTheme(themeOverride) {
  let finalDefaultTheme = DEFAULT_THEME;

  // Need to recreate colors if user has set a custom css var prefix,
  // so global variants css variables reference is correct.
  if (themeOverride.cssVarPrefix != null) {
    finalDefaultTheme = {
      ...finalDefaultTheme,
      colors: createDefaultColors(themeOverride.cssVarPrefix)
    };
  }
  const mergedTheme = {
    value: finalDefaultTheme
  };
  dset(mergedTheme, "value", themeOverride);
  return attachMetaData(mergedTheme.value);
}

/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */

function focusStyles(vars) {
  return {
    WebkitTapHighlightColor: "transparent",
    "&:focus": {
      outlineOffset: "2px",
      outline: `2px solid ${vars.colors.common.focusRing}`
    },
    "&:focus:not(:focus-visible)": {
      outline: "none"
    }
  };
}

function injectCSSVars(theme) {
  globalCss({
    ":root": theme.__cssVarsValues.root,
    [`.${COLOR_MODE_CLASSNAMES.dark}`]: theme.__cssVarsValues.dark
  })();
}

/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */
/** Hope UI global CSS reset. */
function injectCssReset(vars) {
  globalCss({
    // Use a more-intuitive box-sizing model.
    "*, *::before, *::after": {
      boxSizing: "border-box"
    },
    // Remove default margin.
    "*": {
      margin: 0
    },
    // Use theme sans-serif font-family and accessible line-height.
    html: {
      fontFamily: vars.fonts.sans,
      lineHeight: vars.lineHeights.base,
      fontSize: "16px"
    },
    // Use theme `background` and `foreground` colors, improve text rendering.
    body: {
      backgroundColor: vars.colors.common.background,
      color: vars.colors.common.foreground,
      fontFamily: "inherit",
      lineHeight: "inherit",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    // Improve media defaults.
    "img, picture, video, canvas, svg": {
      display: "block",
      maxWidth: "100%"
    },
    // Remove built-in form typography styles.
    "button, input, textarea, select": {
      font: "inherit"
    },
    // Remove built-in headings typography styles.
    "h1, h2, h3, h4, h5, h6": {
      font: "inherit"
    },
    /* Avoid text overflows. */
    "p, h1, h2, h3, h4, h5, h6": {
      overflowWrap: "break-word"
    }
  })();
}

const ThemeContext = solidJs.createContext(DEFAULT_THEME);
function useTheme() {
  return solidJs.useContext(ThemeContext);
}
function useComponentTheme(component) {
  const theme = useTheme();
  return solidJs.createMemo(() => {
    if (component == null) {
      return undefined;
    }
    return theme.components[component] ?? undefined;
  });
}

/**
 * Merge default, theme and component props into a single props object.
 * @param name The name of the component to look for in the theme.
 * @param defaultProps The default props, will be overridden by theme and component props.
 * @param props The component `props` object.
 * @example
 * // mergedProps = defaultProps <== themeProps <== props
 */
function mergeThemeProps(name, defaultProps, props) {
  const theme = useTheme();
  const themeProps = () => theme.components[name]?.defaultProps ?? {};
  return solidJs.mergeProps(defaultProps, themeProps, props);
}
function ThemeProvider(props) {
  // We don't care about reactivity here since theme is not intended to be dynamic, it should be set once.
  const theme = props.theme ?? DEFAULT_THEME;
  injectCSSVars(theme);
  props.withCssReset && injectCssReset(theme.vars);
  return web.createComponent(ThemeContext.Provider, {
    value: theme,
    get children() {
      return props.children;
    }
  });
}

/** Create a `useGlobalStyles` primitive. */
function createGlobalStyles(interpolation) {
  const runOnce = utils.once(theme => {
    const {
      "@import": atImport,
      "@font-face": atFontFace,
      ...rest
    } = utils.runIfFn(interpolation, theme);
    const styles = Object.entries(rest).reduce((acc, [selector, systemStyleObject]) => {
      acc[selector] = toCSSObject(systemStyleObject, theme);
      return acc;
    }, {});
    globalCss({
      "@import": atImport ?? [],
      "@font-face": atFontFace ?? {},
      ...styles
    })();
  });
  return function useGlobalStyles() {
    const theme = useTheme();

    // generate global styles once.
    runOnce(theme);
  };
}

/** A component with Hope UI props. */

/** Create a polymorphic Hope UI component with the `as` and `system style` props support. */
function createHopeComponent(component) {
  return component;
}

/** Compute system style object and return the generated className. */
function computeStyle(style, theme) {
  return css(toCSSObject(style, theme))().className;
}

/** Return whether a compound variant should be applied. */
function shouldApplyCompound(compoundCheck, selections) {
  for (const key of Object.keys(compoundCheck)) {
    if (compoundCheck[key] !== selections[key]) {
      return false;
    }
  }
  return true;
}

/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */

/** Compute classNames from a multi-part style config. */
function computeMultiPartStyleConfig(configs, theme) {
  return Object.entries(configs).reduce((acc, [part, config]) => {
    const {
      baseStyle = {},
      variants = {},
      compoundVariants = []
    } = config;
    acc[part] = {
      baseClassName: computeStyle(baseStyle, theme),
      variantClassNames: Object.entries(variants).reduce((acc, [variant, definition]) => {
        // a variant (ex: "size")
        acc[variant] = Object.entries(definition).reduce((acc, [value, style]) => {
          // a variant value (ex: "sm")
          acc[value] = computeStyle(style, theme);
          return acc;
        }, {});
        return acc;
      }, {}),
      compoundVariants: compoundVariants.map(compoundVariant => [compoundVariant.variants, computeStyle(compoundVariant.style, theme)])
    };
    return acc;
  }, {});
}

/** Create a `useStyleConfig` primitive. */
function createStyleConfig(interpolation, defaultVariants) {
  let baseConfig;
  let baseConfigResult;
  let themeConfig;
  let themeConfigResult;
  let parts = [];
  let staticClassNames;
  const runOnce = utils.once((name, theme, componentThemeConfig) => {
    // 1. compute base styles.
    baseConfig = utils.runIfFn(interpolation, theme);
    baseConfigResult = computeMultiPartStyleConfig(baseConfig, theme); // force type because we know it's not a partial.

    // 2. compute theme styles, so it will be injected to `head` after base styles.
    themeConfig = utils.runIfFn(componentThemeConfig, theme);
    themeConfigResult = themeConfig && computeMultiPartStyleConfig(themeConfig, theme);

    // 3. get component parts from config.
    parts = Object.keys(baseConfig);

    // 4. create static classNames.
    staticClassNames = Object.fromEntries(parts.map(part => [part, `hope-${name}-${part}`]));
  });
  return function useStyleConfig(name, options) {
    const theme = useTheme();
    const componentTheme = useComponentTheme(name);

    // generate static, base and theme classNames once.
    runOnce(name, theme, componentTheme()?.styleConfigOverride);
    const styleConfigOverride = solidJs.createMemo(() => {
      return utils.runIfFn(options.styleConfigOverride, theme);
    });
    const selectedVariants = solidJs.createMemo(() => {
      const [_, variantSelections] = solidJs.splitProps(options, ["styleConfigOverride", "unstyled"]);
      return {
        ...defaultVariants,
        ...utils.filterUndefined(variantSelections)
      };
    });
    const baseClasses = solidJs.createMemo(() => {
      return parts.reduce((acc, part) => {
        let baseClassName = "";
        let variantClassNames = {};
        let compoundVariants = [];

        // use base config only if not `unstyled`.
        if (!options.unstyled) {
          baseClassName = baseConfigResult[part].baseClassName ?? "";
          variantClassNames = baseConfigResult[part].variantClassNames ?? {};
          compoundVariants = baseConfigResult[part].compoundVariants ?? [];
        }
        const themeBaseClassName = themeConfigResult?.[part]?.baseClassName ?? "";
        const themeVariantClassNames = themeConfigResult?.[part]?.variantClassNames ?? {};
        const themeCompoundVariants = themeConfigResult?.[part]?.compoundVariants ?? [];

        // 1. add "static" and "base" classNames.
        const classNames = [staticClassNames[part], baseClassName, themeBaseClassName];

        // 2. add "variants" classNames.
        for (const name in selectedVariants()) {
          const value = selectedVariants()[name];
          if (value == null) {
            continue;
          }
          classNames.push(variantClassNames[name]?.[String(value)]);
          classNames.push(themeVariantClassNames[name]?.[String(value)]);
        }

        // 3. add "compound variants" classNames.
        for (const [variants, className] of [...compoundVariants, ...themeCompoundVariants]) {
          if (shouldApplyCompound(variants, selectedVariants())) {
            classNames.push(className);
          }
        }
        acc[part] = clsx.clsx(...classNames);
        return acc;
      }, {});
    });
    const styleOverrides = solidJs.createMemo(() => {
      const configOverrides = styleConfigOverride();
      if (configOverrides == null) {
        return {};
      }
      return parts.reduce((acc, part) => {
        const base = configOverrides[part]?.baseStyle ?? {};
        const variants = configOverrides[part]?.variants ?? {};
        const compoundVariants = configOverrides[part]?.compoundVariants ?? [];

        // 1. add "base" styles.
        acc[part] = base;

        // 2. add "variants" styles.
        for (const name in selectedVariants()) {
          const value = selectedVariants()[name];
          if (value == null) {
            continue;
          }
          const style = variants[name]?.[String(value)] ?? {};
          if (utils.isEmptyObject(style)) {
            continue;
          }
          dset(acc, part, style);
        }

        // 3. add "compound variants" styles.
        for (const compoundVariant of compoundVariants) {
          if (shouldApplyCompound(compoundVariant.variants, selectedVariants())) {
            dset(acc, part, compoundVariant.style);
          }
        }
        return acc;
      }, {});
    });
    return {
      baseClasses,
      styleOverrides
    };
  };
}

/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */

/** Extract the variant props type of `useStyles` primitive. */

/** Compute classNames from a hope style options. */
function computeStyleOptions(options, theme) {
  const {
    baseStyle = {},
    variants = {},
    compoundVariants = []
  } = options;
  return {
    baseClassName: computeStyle(baseStyle, theme),
    variantClassNames: Object.entries(variants).reduce((acc, [variant, definition]) => {
      // a variant (ex: "size")
      acc[variant] = Object.entries(definition).reduce((acc, [value, style]) => {
        // a variant value (ex: "sm")
        acc[value] = computeStyle(style, theme);
        return acc;
      }, {});
      return acc;
    }, {}),
    compoundVariants: compoundVariants.map(compoundVariant => [compoundVariant.variants, computeStyle(compoundVariant.style, theme)])
  };
}

/** Get the variants classNames of selected variants. */
function getSelectedVariantClassNames(styleResult, selectedVariants) {
  const {
    variantClassNames = {},
    compoundVariants = []
  } = styleResult;
  const classNames = [];

  // 1. add "variants" classNames.
  for (const name in selectedVariants) {
    const value = selectedVariants[name];
    if (value == null) {
      continue;
    }
    classNames.push(variantClassNames[name]?.[String(value)]);
  }

  // 2. add "compound variants" classNames.
  for (const [variants, className] of compoundVariants) {
    if (shouldApplyCompound(variants, selectedVariants)) {
      classNames.push(className);
    }
  }
  return classNames;
}

/** Create a `useStyles` primitive. */
function createStyles(interpolation) {
  let styleOptions;
  let styleResult;
  const runOnce = utils.once(theme => {
    styleOptions = utils.runIfFn(interpolation, theme);
    styleResult = computeStyleOptions(styleOptions, theme);
  });
  return function useStyles(variantProps = {}) {
    const theme = useTheme();

    // generate classNames once.
    runOnce(theme);
    const classes = solidJs.createMemo(() => {
      if (styleOptions == null || styleResult == null) {
        return "";
      }
      const selectedVariants = {
        ...styleOptions.defaultVariants,
        ...utils.filterUndefined(variantProps)
      };
      const variantClassNames = getSelectedVariantClassNames(styleResult, selectedVariants);
      return clsx.clsx(styleResult.baseClassName, variantClassNames);
    });
    return classes;
  };
}

const borderPropNames = {
  border: true,
  borderWidth: true,
  borderStyle: true,
  borderColor: true,
  borderTop: true,
  borderTopWidth: true,
  borderTopStyle: true,
  borderTopColor: true,
  borderRight: true,
  borderRightWidth: true,
  borderRightStyle: true,
  borderRightColor: true,
  borderBottom: true,
  borderBottomWidth: true,
  borderBottomStyle: true,
  borderBottomColor: true,
  borderLeft: true,
  borderLeftWidth: true,
  borderLeftStyle: true,
  borderLeftColor: true,
  borderX: true,
  borderY: true
};
const colorPropNames = {
  color: true,
  background: true,
  bg: true,
  backgroundColor: true,
  bgColor: true,
  opacity: true
};
const flexboxPropNames = {
  alignItems: true,
  alignContent: true,
  alignSelf: true,
  justifyItems: true,
  justifyContent: true,
  justifySelf: true,
  flexDirection: true,
  flexWrap: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  order: true
};
const gridLayoutPropNames = {
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: true,
  rowGap: true,
  columnGap: true
};
const interactivityPropNames = {
  appearance: true,
  userSelect: true,
  pointerEvents: true,
  resize: true,
  cursor: true,
  outline: true,
  outlineOffset: true,
  outlineColor: true
};
const layoutPropNames = {
  display: true,
  d: true,
  verticalAlign: true,
  overflow: true,
  overflowX: true,
  overflowY: true
};
const marginPropNames = {
  margin: true,
  marginTop: true,
  marginRight: true,
  marginEnd: true,
  marginBottom: true,
  marginLeft: true,
  marginStart: true,
  m: true,
  mt: true,
  mr: true,
  me: true,
  mb: true,
  ml: true,
  ms: true,
  mx: true,
  my: true
};
const paddingPropNames = {
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingEnd: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingStart: true,
  p: true,
  pt: true,
  pr: true,
  pe: true,
  pb: true,
  pl: true,
  ps: true,
  px: true,
  py: true
};
const positionPropNames = {
  position: true,
  pos: true,
  zIndex: true,
  top: true,
  right: true,
  bottom: true,
  left: true
};
const radiiPropNames = {
  borderRadius: true,
  borderTopRightRadius: true,
  borderTopLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomLeftRadius: true,
  borderTopRadius: true,
  borderRightRadius: true,
  borderBottomRadius: true,
  borderLeftRadius: true,
  rounded: true,
  roundedTop: true,
  roundedRight: true,
  roundedBottom: true,
  roundedLeft: true
};
const shadowPropNames = {
  textShadow: true,
  boxShadow: true,
  shadow: true
};
const sizePropNames = {
  width: true,
  minWidth: true,
  maxWidth: true,
  height: true,
  minHeight: true,
  maxHeight: true,
  w: true,
  minW: true,
  maxW: true,
  h: true,
  minH: true,
  maxH: true,
  boxSize: true
};
const transformPropNames = {
  transform: true,
  transformOrigin: true,
  clipPath: true
};
const transitionPropNames = {
  transition: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  transitionDuration: true,
  transitionDelay: true,
  animation: true,
  willChange: true
};
const typographyPropNames = {
  fontFamily: true,
  fontSize: true,
  fontWeight: true,
  lineHeight: true,
  letterSpacing: true,
  textAlign: true,
  fontStyle: true,
  textTransform: true,
  textDecoration: true
};
const otherStylePropNames = {
  objectFit: true,
  objectPosition: true
};
const pseudoSelectorPropNames = {
  _hover: true,
  _active: true,
  _focus: true,
  _highlighted: true,
  _focusWithin: true,
  _focusVisible: true,
  _disabled: true,
  _readOnly: true,
  _before: true,
  _after: true,
  _empty: true,
  _expanded: true,
  _checked: true,
  _grabbed: true,
  _pressed: true,
  _invalid: true,
  _valid: true,
  _loading: true,
  _selected: true,
  _hidden: true,
  _autofill: true,
  _even: true,
  _odd: true,
  _first: true,
  _last: true,
  _notFirst: true,
  _notLast: true,
  _visited: true,
  _activeLink: true,
  _activeStep: true,
  _indeterminate: true,
  _groupHover: true,
  _peerHover: true,
  _groupFocus: true,
  _peerFocus: true,
  _groupFocusVisible: true,
  _peerFocusVisible: true,
  _groupActive: true,
  _peerActive: true,
  _groupDisabled: true,
  _peerDisabled: true,
  _groupInvalid: true,
  _peerInvalid: true,
  _groupChecked: true,
  _peerChecked: true,
  _groupFocusWithin: true,
  _peerFocusWithin: true,
  _peerPlaceholderShown: true,
  _placeholder: true,
  _placeholderShown: true,
  _fullScreen: true,
  _selection: true,
  _rtl: true,
  _ltr: true,
  _mediaDark: true,
  _mediaReduceMotion: true,
  _dark: true,
  _light: true
};
const stylePropNames = {
  ...borderPropNames,
  ...colorPropNames,
  ...flexboxPropNames,
  ...gridLayoutPropNames,
  ...interactivityPropNames,
  ...layoutPropNames,
  ...marginPropNames,
  ...paddingPropNames,
  ...positionPropNames,
  ...radiiPropNames,
  ...shadowPropNames,
  ...sizePropNames,
  ...transformPropNames,
  ...transitionPropNames,
  ...typographyPropNames,
  ...otherStylePropNames,
  ...pseudoSelectorPropNames
};

/** Take a props object and return only the keys that match a style prop. */
function extractStyleProps(props) {
  return Object.keys(props).filter(key => key in stylePropNames);
}

/**
 * A list of valid HTML props that needed to be prefixed because
 * they have same name as some Hope UI styles props.
 *
 * @example
 * <Image htmlWidth="100px"/>
 * =>
 * <img width="100px"/>
 */
const prefixedHTMLPropsMap = new Map([["htmlWidth", "width"], ["htmlHeight", "height"], ["htmlSize", "size"]]);

/** Get the native HTML attributes from the Hope UI prefixed ones. */
function getNativeHTMLProps(value) {
  return Object.entries(value).reduce((acc, [key, value]) => {
    const nativeKey = prefixedHTMLPropsMap.get(key);
    if (nativeKey != null && value != null) {
      acc[nativeKey] = value;
    }
    return acc;
  }, {});
}

/**
 * All html and svg elements for hope components.
 * This is mostly for `hope.<element>` syntax.
 */

/**
 * Singleton stitches `cssComponent`.
 * Used to inject styles at the consumption layer via the `css` prop.
 */
const systemCssComponent = css({});

/*
 * Style injection order (first to last)
 * - baseStyle (least specific)
 * - variants
 * - compound variants
 * - __css
 * - style props
 * - sx (override all)
 */
/**
 * Create a `styled` component capable of using Hope UI `system style` props.
 * @param component The component/html element to render.
 * @param styleInterpolation The styles to apply.
 * @param staticClassName A static className for the component, used as a css selector.
 */
function styled(component, styleInterpolation, staticClassName) {
  let styleOptions;
  let styleResult;
  let variantPropsKeys = [];
  const runOnce = utils.once(theme => {
    if (styleInterpolation == null) {
      return;
    }
    styleOptions = utils.runIfFn(styleInterpolation, theme);
    styleResult = computeStyleOptions(styleOptions, theme);
    variantPropsKeys = styleOptions.variants ? Object.keys(styleOptions.variants) : [];
  });
  const hopeComponent = createHopeComponent(props => {
    const theme = useTheme();

    // generate style options classNames once.
    runOnce(theme);
    const [local, prefixedHTMLProps, variantProps, styleProps, others] = solidJs.splitProps(props,
    // hack to have correct TS types.
    ["as", "class", "sx", "__css"], [...prefixedHTMLPropsMap.keys()], variantPropsKeys, extractStyleProps(props));
    const variantClassNames = solidJs.createMemo(() => {
      if (styleResult == null) {
        return [];
      }
      const selectedVariants = {
        ...styleOptions?.defaultVariants,
        ...utils.filterUndefined(variantProps)
      };
      return getSelectedVariantClassNames(styleResult, selectedVariants);
    });
    const sxClassName = solidJs.createMemo(() => {
      const styleOverrides = Object.assign({}, local.__css, utils.filterUndefined(styleProps), ...utils.pack(local.sx).map(partial => utils.runIfFn(partial, theme)));
      if (utils.isEmptyObject(styleOverrides)) {
        return;
      }

      // use `css` prop to have higher specificity.
      return systemCssComponent({
        css: toCSSObject(styleOverrides, theme)
      }).className;
    });
    return web.createComponent(web.Dynamic, web.mergeProps({
      get component() {
        return local.as ?? component;
      },
      get ["class"]() {
        return clsx.clsx(staticClassName, styleResult?.baseClassName, ...variantClassNames(), sxClassName(), local.class) || undefined;
      }
    }, () => getNativeHTMLProps(prefixedHTMLProps), others));
  });

  // Override `toString` to return a selector for the static className,
  // so the component can be referenced in css rules.
  if (staticClassName != null) {
    hopeComponent.toString = () => `.${staticClassName}`;
  }
  return hopeComponent;
}
function factory() {
  const cache = new Map();
  return new Proxy(styled, {
    /**
     * @example
     * const Div = hope("div")
     * const WithHope = hope(AnotherComponent)
     */
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    /**
     * @example
     * <hope.div />
     */
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
const hope = factory();

const _tmpl$ = /*#__PURE__*/web.template(`<style id="stitches" $serveronly></style>`, 2);

/** Inject all critical CSS during server-side rendering. */
function injectCriticalStyle() {
  // eslint-disable-next-line solid/no-innerhtml
  web.useAssets(() => (() => {
    const _el$ = _tmpl$.cloneNode(true);
    web.effect(() => _el$.innerHTML = getCssText());
    return _el$;
  })());
}

const spin = keyframes({
  from: {
    transform: "rotate(0deg)"
  },
  to: {
    transform: "rotate(360deg)"
  }
});
const fadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

Object.defineProperty(exports, 'pack', {
  enumerable: true,
  get: function () { return utils.pack; }
});
exports.COLOR_MODE_CLASSNAMES = COLOR_MODE_CLASSNAMES;
exports.DEFAULT_THEME = DEFAULT_THEME;
exports.DEFAULT_THEME_MAP = DEFAULT_THEME_MAP;
exports.STYLE_CONFIG_PROP_NAMES = STYLE_CONFIG_PROP_NAMES;
exports.ThemeProvider = ThemeProvider;
exports.arrayToObjectNotation = arrayToObjectNotation;
exports.computeStyleOptions = computeStyleOptions;
exports.createGlobalStyles = createGlobalStyles;
exports.createHopeComponent = createHopeComponent;
exports.createPalette = createPalette;
exports.createStyleConfig = createStyleConfig;
exports.createStyles = createStyles;
exports.extendTheme = extendTheme;
exports.fadeIn = fadeIn;
exports.focusStyles = focusStyles;
exports.getSelectedVariantClassNames = getSelectedVariantClassNames;
exports.hope = hope;
exports.injectCriticalStyle = injectCriticalStyle;
exports.isColorModeObjectLike = isColorModeObjectLike;
exports.isResponsiveObjectLike = isResponsiveObjectLike;
exports.keyframes = keyframes;
exports.mapResponsive = mapResponsive;
exports.mergeThemeProps = mergeThemeProps;
exports.objectToArrayNotation = objectToArrayNotation;
exports.resolveTokenValue = resolveTokenValue;
exports.spin = spin;
exports.useComponentTheme = useComponentTheme;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
