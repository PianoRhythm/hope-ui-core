/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/image.tsx
 */
import { createHopeComponent, hope } from "@hope-ui/styles";
import { clsx } from "clsx";
import { mergeProps, Show, splitProps } from "solid-js";
import { createImageLoadingStatus, } from "./create-image-loading-status";
/**
 * Image renders an image with support for fallbacks.
 */
export const Image = createHopeComponent(props => {
    const [local, loadEventProps, others] = splitProps(props, [
        "class",
        "fallbackSrc",
        "fallback",
        "src",
        "srcSet",
        "align",
        "fit",
        "loading",
        "ignoreFallback",
        "crossOrigin",
    ], ["onError", "onLoad"]);
    const shouldIgnore = () => {
        return (local.loading != null || // Defer to native `img` tag if `loading` prop is passed.
            local.ignoreFallback ||
            (local.fallbackSrc === undefined && local.fallback === undefined) // if the user doesn't provide any kind of fallback we should ignore it.
        );
    };
    const status = createImageLoadingStatus(mergeProps(props, {
        get ignoreFallback() {
            return shouldIgnore();
        },
    }));
    const sharedProps = () => ({
        objectFit: local.fit,
        objectPosition: local.align,
        ...(shouldIgnore() ? loadEventProps : {}),
        ...others,
    });
    return (<Show when={status() === "loaded"} fallback={<Show when={local.fallback} fallback={<hope.img src={local.fallbackSrc} class="hope-Image-placeholder" {...sharedProps}/>}>
          {local.fallback}
        </Show>}>
      <hope.img src={local.src} srcSet={local.srcSet} crossOrigin={local.crossOrigin} loading={local.loading} class={clsx("hope-Image-root", local.class)} {...sharedProps}/>
    </Show>);
});
/**
 * Fallback component for most SSR users who want to use the native `img` with
 * Hope UI styling features.
 */
export const Img = createHopeComponent(props => {
    const [local, others] = splitProps(props, ["class"]);
    return <hope.img class={clsx("hope-Image-root", local.class)} {...others}/>;
});
