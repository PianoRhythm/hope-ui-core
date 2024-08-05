/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/flex.tsx
 */
import { SystemStyleProps } from "@hope-ui/styles";
export interface FlexProps {
    /** Shorthand for `flexDirection` style prop. */
    direction?: SystemStyleProps["flexDirection"];
    /** Shorthand for `flexWrap` style prop. */
    wrap?: SystemStyleProps["flexWrap"];
    /** Shorthand for `alignItems` style prop. */
    align?: SystemStyleProps["alignItems"];
    /** Shorthand for `justifyContent` style prop. */
    justify?: SystemStyleProps["justifyContent"];
}
/**
 * `Flex` is used to create flexbox layouts.
 * It renders a `div` with `display: flex` and comes with helpful style shorthand.
 */
export declare const Flex: any;
