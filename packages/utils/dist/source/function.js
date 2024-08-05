/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
import { isArray, isFunction, isObject } from "./assertion";
/** A function that does nothing. */
export function noop() {
    return;
}
/** Call a JSX.EventHandlerUnion with the event. */
export function callHandler(handler, event) {
    if (handler) {
        if (isFunction(handler)) {
            handler(event);
        }
        else {
            handler[0](handler[1], event);
        }
    }
    return event?.defaultPrevented;
}
/** Run the value with the given args if it's a function, otherwise return the value as is. */
export function runIfFn(valueOrFn, ...args) {
    return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
/** Create a function that only run once. */
export function once(callback) {
    let hasRun = false;
    return function (...args) {
        if (!hasRun) {
            hasRun = true;
            callback(...args);
        }
    };
}
/** Flatten an object. */
export function flatten(target, separator, maxDepth = Infinity) {
    if ((!isObject(target) && !Array.isArray(target)) || !maxDepth) {
        return target;
    }
    return Object.entries(target).reduce((result, [key, value]) => {
        if (isObject(value) || isArray(value)) {
            Object.entries(flatten(value, separator, maxDepth - 1)).forEach(([childKey, childValue]) => {
                // e.g. gray.500
                result[`${key}${separator}${childKey}`] = childValue;
            });
        }
        else {
            // e.g. transparent
            result[key] = value;
        }
        return result;
    }, {});
}
/** Unflatten an object. */
export function unflatten(flatObject, separator) {
    return Object.keys(flatObject).reduce((res, k) => {
        k.split(separator).reduce((acc, e, i, keys) => {
            if (acc[e] != null) {
                return acc[e];
            }
            // @ts-ignore
            acc[e] = keys.length - 1 === i ? flatObject[k] : {};
            return acc[e];
        }, res);
        return res;
    }, {});
}
/** Get a dot-notated path within a nested object if it exists. */
export function delve(obj, key) {
    return key.split(".").reduce((acc, b) => (acc ? acc[b] : acc), obj);
}
