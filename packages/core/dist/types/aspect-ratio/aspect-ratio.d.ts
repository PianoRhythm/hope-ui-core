/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/aspect-ratio.tsx
 */
import { ResponsiveValue } from "@hope-ui/styles";
import { ComponentProps } from "solid-js";
declare const BaseAspectRatio: import("@hope-ui/styles").HopeComponent<"div", import("@hope-ui/styles").HopeVariantSelection<{}>>;
export interface AspectRatioProps extends ComponentProps<typeof BaseAspectRatio> {
    /**
     * The aspect ratio of the Box.
     * Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
     */
    ratio?: ResponsiveValue<number>;
}
/**
 * `AspectRatio` is used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 */
export declare const AspectRatio: import("@hope-ui/styles").HopeComponent<"div", AspectRatioProps>;
export {};
