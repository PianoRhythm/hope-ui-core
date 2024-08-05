/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
export declare const DEFAULT_CSS_VAR_PREFIX = "hope";
export declare function addPrefix(value: string, prefix?: string): string;
export declare function toVarReference(name: string, fallback?: string): string;
export declare function toVarDefinition(value: string, prefix?: string): string;
export declare function cssVar(name: string, fallback?: string, cssVarPrefix?: string): {
    variable: string;
    reference: string;
};
export declare function createGetCssVar(prefix?: string): (value: string) => string;
//# sourceMappingURL=css-var.d.ts.map