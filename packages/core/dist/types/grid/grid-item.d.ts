/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/grid.tsx
 */
import { ResponsiveValue, SystemStyleProps } from "@hope-ui/styles";
export interface GridItemProps {
    /** Shorthand prop for `gridArea`. */
    area?: SystemStyleProps["gridArea"];
    /** The number of columns the grid item should `span`. */
    colSpan?: ResponsiveValue<number | "auto">;
    /** The column number the grid item should start. */
    colStart?: ResponsiveValue<number | "auto">;
    /** The column number the grid item should end. */
    colEnd?: ResponsiveValue<number | "auto">;
    /** The number of rows the grid item should `span`. */
    rowSpan?: ResponsiveValue<number | "auto">;
    /** The row number the grid item should start. */
    rowStart?: ResponsiveValue<number | "auto">;
    /** The row number the grid item should end. */
    rowEnd?: ResponsiveValue<number | "auto">;
}
/**
 * `GridItem` is used as a child of `Grid` to control the span,
 * start and end positions within the grid.
 */
export declare const GridItem: any;
