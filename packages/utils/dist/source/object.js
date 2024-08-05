/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
export function pick(object, keys) {
    const result = {};
    keys.forEach(key => {
        if (key in object) {
            result[key] = object[key];
        }
    });
    return result;
}
export const objectKeys = (obj) => {
    return Object.keys(obj);
};
/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export function objectFilter(object, fn) {
    const result = {};
    Object.keys(object).forEach(key => {
        const value = object[key];
        const shouldPass = fn(value, key, object);
        if (shouldPass) {
            result[key] = value;
        }
    });
    return result;
}
export function filterUndefined(object) {
    return objectFilter(object, val => val !== null && val !== undefined);
}
