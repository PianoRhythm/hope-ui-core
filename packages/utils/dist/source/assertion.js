/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
// Number assertions
export function isNumber(value) {
    return typeof value === "number";
}
// Array assertions
export function isArray(value) {
    return Array.isArray(value);
}
export function isEmptyArray(value) {
    return isArray(value) && value.length === 0;
}
// Function assertions
export function isFunction(value) {
    return typeof value === "function";
}
// Object assertions
export function isObject(value) {
    const type = typeof value;
    return value != null && (type === "object" || type === "function") && !isArray(value);
}
export function isEmptyObject(value) {
    return isObject(value) && Object.keys(value).length === 0;
}
export function isNull(value) {
    return value == null;
}
// String assertions
export function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]";
}
// Empty assertions
export function isEmpty(value) {
    if (isArray(value)) {
        return isEmptyArray(value);
    }
    if (isObject(value)) {
        return isEmptyObject(value);
    }
    return value == null || value === "";
}
