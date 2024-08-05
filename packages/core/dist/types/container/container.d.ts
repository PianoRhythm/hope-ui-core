/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/container.tsx
 */
import { ResponsiveValue } from "@hope-ui/styles";
import { ComponentProps } from "solid-js";
declare const BaseContainer: any;
export interface ContainerProps extends ComponentProps<typeof BaseContainer> {
    /** Whether the container itself should be centered on the page. */
    isCentered?: ResponsiveValue<boolean>;
}
/**
 * `Container` is used to constrain a content's width to the current breakpoint, while keeping it fluid.
 *  By default, it sets `margin-left` and `margin-right` to `auto`, to keep its content centered.
 */
export declare const Container: any;
export {};
