/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */
export const DEFAULT_CSS_VAR_PREFIX = "hope";
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
export function addPrefix(value, prefix = "") {
    return [prefix, value].filter(Boolean).join("-");
}
export function toVarReference(name, fallback) {
    return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
export function toVarDefinition(value, prefix = "") {
    return escape(`--${addPrefix(value, prefix)}`);
}
export function cssVar(name, fallback, cssVarPrefix = DEFAULT_CSS_VAR_PREFIX) {
    const cssVariable = toVarDefinition(name, cssVarPrefix);
    return {
        variable: cssVariable,
        reference: toVarReference(cssVariable, fallback),
    };
}
export function createGetCssVar(prefix = DEFAULT_CSS_VAR_PREFIX) {
    return (value) => {
        return `var(--${prefix ? `${prefix}-` : ""}${value})`;
    };
}
