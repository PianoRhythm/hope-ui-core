/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/MantineProvider.tsx
 */
import { Accessor, ParentProps } from "solid-js";
import type { ComponentTheme, Theme } from "../types";
import { UseStyleConfigOptions } from "../types";
export declare function useTheme(): Theme;
export declare function useComponentTheme<T extends UseStyleConfigOptions<any, any>>(component?: string): Accessor<ComponentTheme<T> | undefined>;
/**
 * Merge default, theme and component props into a single props object.
 * @param name The name of the component to look for in the theme.
 * @param defaultProps The default props, will be overridden by theme and component props.
 * @param props The component `props` object.
 * @example
 * // mergedProps = defaultProps <== themeProps <== props
 */
export declare function mergeThemeProps<T extends Record<string, any>>(name: string, defaultProps: Partial<T>, props: T): T;
export interface ThemeProviderProps extends ParentProps {
    /** The custom theme to use. */
    theme?: Theme;
    /** Whether Hope UI global CSS reset should be applied. */
    withCssReset?: boolean;
}
export declare function ThemeProvider(props: ThemeProviderProps): import("solid-js").JSX.Element;
//# sourceMappingURL=theme-provider.d.ts.map