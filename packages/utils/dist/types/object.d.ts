/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */
import { Dict, FilterFn } from "./types";
export declare function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]): { [P in K]: T[P]; };
export declare const objectKeys: <T extends Dict<any>>(obj: T) => (keyof T)[];
/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export declare function objectFilter<T extends Dict>(object: T, fn: FilterFn<T>): Dict<any>;
export declare function filterUndefined<T extends Dict = Dict>(object: T): Dict<any>;
