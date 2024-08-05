/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/stack.tsx
 */
import { ResponsiveValue, SystemStyleProps } from "@hope-ui/styles";
export interface StackProps {
    /** Shorthand for `flexDirection` style prop. */
    direction?: SystemStyleProps["flexDirection"];
    /** Shorthand for `flexWrap` style prop. */
    wrap?: SystemStyleProps["flexWrap"];
    /** Shorthand for `alignItems` style prop. */
    align?: SystemStyleProps["alignItems"];
    /** Shorthand for `justifyContent` style prop. */
    justify?: SystemStyleProps["justifyContent"];
    /** The space between the stack items. */
    spacing?: SystemStyleProps["gap"];
    /** The space between the stack items on the X axis. */
    spacingX?: SystemStyleProps["columnGap"];
    /** The space between the stack items on the Y axis. */
    spacingY?: SystemStyleProps["rowGap"];
}
/**
 * `Stack` makes it easy to stack elements together and apply a space between them.
 */
export declare const Stack: import("@hope-ui/styles").HopeComponent<"div", StackProps>;
export interface FixedDirectionStackProps extends Omit<StackProps, "direction" | "flexDirection"> {
    /** Whether the direction should be reversed. */
    reverse?: ResponsiveValue<boolean>;
}
/**
 * `HStack` arranges its children in a horizontal line.
 */
export declare const HStack: import("@hope-ui/styles").HopeComponent<"div", FixedDirectionStackProps>;
/**
 * `VStack` arranges its children in a vertical line.
 */
export declare const VStack: import("@hope-ui/styles").HopeComponent<"div", FixedDirectionStackProps>;
