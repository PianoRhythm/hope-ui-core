/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
import { ComponentProps } from "solid-js";
declare type NativeImageProps = ComponentProps<"img">;
export interface CreateImageLoadingStatusProps {
    /** The image `src` attribute. */
    src?: string;
    /** The image `srcset` attribute. */
    srcSet?: string;
    /** The image `sizes` attribute. */
    sizes?: string;
    /** A callback for when the image `src` has been loaded. */
    onLoad?: NativeImageProps["onLoad"];
    /** A callback for when there was an error loading the image `src`. */
    onError?: NativeImageProps["onError"];
    /** If `true`, opt out of the `fallbackSrc` logic and use as `img`. */
    ignoreFallback?: boolean;
    /**
     * The key used to set the crossOrigin on the `HTMLImageElement` into which the image will be loaded.
     * This tells the browser to request cross-origin access when trying to download the image data.
     */
    crossOrigin?: NativeImageProps["crossOrigin"];
    /** The image loading strategy. */
    loading?: NativeImageProps["loading"];
}
declare type Status = "loading" | "failed" | "pending" | "loaded";
/**
 * Primitive that loads an image in the browser,
 * and lets us know the `status` so we can show image
 * fallback if it is still `pending`.
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = createImage({ src: "image.png" })
 *   return status() === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
export declare function createImageLoadingStatus(props: CreateImageLoadingStatusProps): () => Status;
export {};
//# sourceMappingURL=create-image-loading-status.d.ts.map