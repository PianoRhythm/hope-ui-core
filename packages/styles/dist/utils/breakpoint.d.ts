/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */
import { Dict } from "@hope-ui/utils";
/** Append `px` unit to unitless value, return it as is otherwise. */
export declare function px(value: number | string | null): string | null;
/** Create media query rule. */
export declare function toMediaQueryString(min: string | null, max?: string): string;
/** Return metadata about the given breakpoints. */
export declare function analyzeBreakpoints(breakpoints: Dict): {
    keys: Set<string>;
    normalized: string[];
    asObject: Dict<any>;
    asArray: string[];
    details: {
        _minW: string;
        breakpoint: string;
        minW: any;
        maxW: any;
        maxWQuery: string;
        minWQuery: string;
        minMaxQuery: string;
    }[];
    medias: (string | null)[];
    isResponsive(test: Dict): boolean;
    toArrayValue(test: Dict): any[];
    toObjectValue(test: any[]): Dict<any>;
} | null;
export declare type AnalyzeBreakpointsReturn = ReturnType<typeof analyzeBreakpoints>;
//# sourceMappingURL=breakpoint.d.ts.map