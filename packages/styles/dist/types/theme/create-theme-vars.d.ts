/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */
import { ThemeCSSVariables, ThemeScales, ThemeVars } from "../types";
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
export declare function createThemeVars(scales: ThemeScales, cssVarPrefix?: string): {
    cssVarsValues: ThemeCSSVariables;
    vars: ThemeVars;
};
