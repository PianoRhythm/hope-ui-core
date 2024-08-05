/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/image.tsx
 */
import { OverrideProps } from "@hope-ui/utils";
import { JSX } from "solid-js";
import { CreateImageLoadingStatusProps } from "./create-image-loading-status";
interface ImageOptions {
    /** The native HTML `width` attribute to the passed to the `img`. */
    htmlWidth?: string | number;
    /** The native HTML `height` attribute to the passed to the `img`. */
    htmlHeight?: string | number;
    /** Fallback image `src` to show if image is loading or image fails. */
    fallbackSrc?: string;
    /** Fallback element to show if image is loading or image fails. */
    fallback?: JSX.Element;
    /** The image loading strategy. */
    loading?: "eager" | "lazy";
    /**
     * How the image to fit within its bounds.
     * It maps to css `object-fit` property.
     */
    fit?: JSX.CSSProperties["object-fit"];
    /**
     * How to align the image within its bounds.
     * It maps to css `object-position` property.
     */
    align?: JSX.CSSProperties["object-position"];
    /** If `true`, opt out of the `fallbackSrc` logic and use as `img`. */
    ignoreFallback?: boolean;
}
export declare type ImageProps = OverrideProps<ImageOptions, CreateImageLoadingStatusProps>;
/**
 * Image renders an image with support for fallbacks.
 */
export declare const Image: any;
/**
 * Fallback component for most SSR users who want to use the native `img` with
 * Hope UI styling features.
 */
export declare const Img: any;
export {};
