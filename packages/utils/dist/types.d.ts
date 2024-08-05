/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/types.ts
 */
import { Component, JSX } from "solid-js";
/** All HTML and SVG elements. */
export declare type DOMElements = keyof JSX.IntrinsicElements;
/** Any HTML element or SolidJS component. */
export declare type ElementType<Props = any> = DOMElements | Component<Props>;
/**
 * Allows for extending a set of props (`Source`) by an overriding set of props (`Override`),
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
export declare type OverrideProps<Source = {}, Override = {}> = Omit<Source, keyof Override> & Override;
export interface ClassProp {
    /** The HTML `class` attribute. */
    class?: string;
}
export declare type AnyFunction<T = any> = (...args: T[]) => any;
export declare type Dict<T = any> = Record<string, T>;
export declare type FilterFn<T> = (value: any, key: string, object: T) => boolean;
//# sourceMappingURL=types.d.ts.map