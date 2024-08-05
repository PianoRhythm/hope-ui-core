import { isString } from "./assertion";
export function toKebabCase(value) {
    return value
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .toLowerCase();
}
export function stringOrUndefined(value) {
    return isString(value) ? value : undefined;
}
