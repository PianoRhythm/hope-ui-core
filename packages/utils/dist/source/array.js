/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
import { isArray } from "./assertion";
export function getLastItem(array) {
    const length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}
export function pack(value) {
    if (value == null) {
        return [];
    }
    return isArray(value) ? value : [value];
}
