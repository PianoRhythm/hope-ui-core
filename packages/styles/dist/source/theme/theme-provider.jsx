/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/MantineProvider.tsx
 */
import { createContext, createMemo, mergeProps, useContext } from "solid-js";
import { DEFAULT_THEME } from "./default-theme";
import { injectCSSVars } from "./inject-css-vars";
import { injectCssReset } from "./inject-css-reset";
const ThemeContext = createContext(DEFAULT_THEME);
export function useTheme() {
    return useContext(ThemeContext);
}
export function useComponentTheme(component) {
    const theme = useTheme();
    return createMemo(() => {
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
export function mergeThemeProps(name, defaultProps, props) {
    const theme = useTheme();
    const themeProps = () => theme.components[name]?.defaultProps ?? {};
    return mergeProps(defaultProps, themeProps, props);
}
export function ThemeProvider(props) {
    // We don't care about reactivity here since theme is not intended to be dynamic, it should be set once.
    const theme = props.theme ?? DEFAULT_THEME;
    injectCSSVars(theme);
    props.withCssReset && injectCssReset(theme.vars);
    return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
}
