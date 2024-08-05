/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/9de39921b983ad0eb2df7195e3b683c2e2e9e290/packages/components/styled-system/src/utils/expand-responsive.ts
 */
import { Theme } from "../types";
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
export declare const expandSyntax: (styles: Dict) => (theme: Theme) => any;
