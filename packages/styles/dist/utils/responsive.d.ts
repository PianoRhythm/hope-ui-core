/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */
import { Dict } from "@hope-ui/utils";
/** Map a responsive value to a new one. */
export declare function mapResponsive(prop: any, mapper: (val: any) => any): any;
/**
 * Converts the object responsive syntax to array syntax.
 *
 * @example
 * objectToArrayNotation({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
 */
export declare function objectToArrayNotation(obj: Dict, breakpoints: string[]): any[];
/**
 * Converts the array responsive syntax to object syntax.
 *
 * @example
 * arrayToObjectNotation([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
 */
export declare function arrayToObjectNotation(values: any[], breakpoints: string[]): Dict<any>;
/** Return whether an object is a valid responsive object according to the breakpoints. */
export declare function isResponsiveObjectLike(obj: Dict, breakpoints: string[]): boolean;
//# sourceMappingURL=responsive.d.ts.map