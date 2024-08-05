/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/simple-grid.tsx
 */
import { ResponsiveValue, SystemStyleProps } from "@hope-ui/styles";
import { GridProps } from "./grid";
export interface SimpleGridProps extends GridProps {
    /**
     * The width at which child elements will break into columns.
     * Pass a number for pixel values or a string for any other valid CSS length.
     */
    minChildWidth?: SystemStyleProps["minWidth"];
    /** The number of columns. */
    columns?: ResponsiveValue<number>;
    /** The space between the grid items. */
    spacing?: SystemStyleProps["gap"];
    /** The space between the grid items on the X axis. */
    spacingX?: SystemStyleProps["columnGap"];
    /** The space between the grid items on the Y axis. */
    spacingY?: SystemStyleProps["rowGap"];
}
/**
 * `SimpleGrid` uses the `Grid` component and provides a simpler interface to create responsive grid layouts.
 * Provides props that easily define columns and spacing.
 */
export declare const SimpleGrid: import("@hope-ui/styles").HopeComponent<"div", SimpleGridProps>;
