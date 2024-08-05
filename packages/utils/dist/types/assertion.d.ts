/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */
import { Dict } from "./types";
export declare function isNumber(value: any): value is number;
export declare function isArray<T>(value: any): value is Array<T>;
export declare function isEmptyArray(value: any): boolean;
export declare function isFunction<T extends Function = Function>(value: any): value is T;
export declare function isObject(value: any): value is Dict;
export declare function isEmptyObject(value: any): boolean;
export declare function isNull(value: any): value is null;
export declare function isString(value: any): value is string;
export declare function isEmpty(value: any): boolean;
