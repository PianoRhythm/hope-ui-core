/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
import { JSX } from "solid-js";
import { Dict } from "./types";
/** A function that does nothing. */
export declare function noop(): void;
/** Call a JSX.EventHandlerUnion with the event. */
export declare function callHandler<T, E extends Event>(handler: JSX.EventHandlerUnion<T, E> | undefined, event: E & {
    currentTarget: T;
    target: Element;
}): boolean | undefined;
/** Run the value with the given args if it's a function, otherwise return the value as is. */
export declare function runIfFn<T, U>(valueOrFn: T | ((...fnArgs: U[]) => T), ...args: U[]): T;
/** Create a function that only run once. */
export declare function once<T extends (...args: any[]) => void>(callback: T): T;
/** Flatten an object. */
export declare function flatten<Value = any>(target: Record<string, Value> | undefined | null, separator: string, maxDepth?: number): any;
/** Unflatten an object. */
export declare function unflatten<T extends Dict>(flatObject: T, separator: string): T;
/** Get a dot-notated path within a nested object if it exists. */
export declare function delve<T extends Dict>(obj: T, key: string): T;
//# sourceMappingURL=function.d.ts.map