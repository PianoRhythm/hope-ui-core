/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/grid.tsx
 */
import { SystemStyleProps } from "@hope-ui/styles";
import { GridItem } from "./grid-item";
export interface GridProps {
    /** Shorthand prop for `gridAutoFlow`. */
    autoFlow?: SystemStyleProps["gridAutoFlow"];
    /** Shorthand prop for `gridAutoColumns`. */
    autoColumns?: SystemStyleProps["gridAutoColumns"];
    /** Shorthand prop for `gridAutoRows`. */
    autoRows?: SystemStyleProps["gridAutoRows"];
    /** Shorthand prop for `gridTemplateAreas`. */
    templateAreas?: SystemStyleProps["gridTemplateAreas"];
    /** Shorthand prop for `gridTemplateColumns`. */
    templateColumns?: SystemStyleProps["gridTemplateColumns"];
    /** Shorthand prop for `gridTemplateRows`. */
    templateRows?: SystemStyleProps["gridTemplateRows"];
}
declare type GridComposite = {
    Item: typeof GridItem;
};
/**
 * `Grid` is used to create grid layouts.
 * It renders a `div` with `display: grid` and comes with helpful style shorthand.
 */
export declare const Grid: import("@hope-ui/styles").HopeComponent<"div", GridProps> & GridComposite;
export {};
