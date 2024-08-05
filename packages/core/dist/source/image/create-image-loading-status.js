/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */
import { callHandler } from "@hope-ui/utils";
import { createEffect, createRenderEffect, createSignal, onCleanup, } from "solid-js";
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
export function createImageLoadingStatus(props) {
    const [statusState, setStatusState] = createSignal("pending");
    // If user opts out of the fallback/placeholder logic, let's just return 'loaded'.
    const status = () => (props.ignoreFallback ? "loaded" : statusState());
    let imageRef = null;
    const flush = () => {
        if (imageRef) {
            imageRef.onload = null;
            imageRef.onerror = null;
            imageRef = null;
        }
    };
    const load = () => {
        if (!props.src) {
            return;
        }
        flush();
        const img = new Image();
        img.src = props.src;
        if (props.crossOrigin) {
            img.crossOrigin = props.crossOrigin;
        }
        if (props.srcSet) {
            img.srcset = props.srcSet;
        }
        if (props.sizes) {
            img.sizes = props.sizes;
        }
        if (props.loading) {
            img.loading = props.loading;
        }
        img.onload = event => {
            flush();
            setStatusState("loaded");
            callHandler(props.onLoad, event);
        };
        img.onerror = error => {
            flush();
            setStatusState("failed");
            callHandler(props.onError, error);
        };
        imageRef = img;
    };
    createEffect(() => {
        setStatusState(props.src ? "loading" : "pending");
    });
    createRenderEffect(() => {
        // If user opts out of the fallback/placeholder logic, let's bail out.
        if (props.ignoreFallback) {
            return undefined;
        }
        if (statusState() === "loading") {
            load();
        }
        onCleanup(() => {
            flush();
        });
    });
    return status;
}
