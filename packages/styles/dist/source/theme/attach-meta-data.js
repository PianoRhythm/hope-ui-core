/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */
import { pick } from "@hope-ui/utils";
import { analyzeBreakpoints } from "../utils/breakpoint";
import { createThemeVars } from "./create-theme-vars";
const THEME_SCALE_NAMES = [
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
    "breakpoints",
];
function extractScales(theme) {
    return pick(theme, THEME_SCALE_NAMES);
}
function omitMetaData(rawTheme) {
    const { vars, __cssVarsValues, __breakpoints, ...cleanTheme } = rawTheme;
    return cleanTheme;
}
export function attachMetaData(rawTheme) {
    /**
     * In the case the theme has already been converted to css-var (e.g. extending the theme),
     * we can omit the computed css vars and recompute it for the extended theme.
     */
    const theme = omitMetaData(rawTheme);
    const scales = extractScales(theme);
    const { cssVarsValues, vars } = createThemeVars(scales, theme.cssVarPrefix);
    Object.assign(theme, {
        vars,
        __cssVarsValues: cssVarsValues,
        __breakpoints: analyzeBreakpoints(theme.breakpoints),
    });
    return theme;
}
