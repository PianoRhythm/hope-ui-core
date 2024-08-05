/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
import { COLOR_MODE_CLASSNAMES } from "@hope-ui/styles";
import { isServer } from "solid-js/web";
function query() {
    return window.matchMedia("(prefers-color-scheme: dark)");
}
function preventTransition() {
    const css = document.createElement("style");
    css.appendChild(document.createTextNode(`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`));
    document.head.appendChild(css);
    return () => {
        // force a reflow
        (() => window.getComputedStyle(document.body))();
        // wait for next tick
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.head.removeChild(css);
            });
        });
    };
}
export function setColorModeClassName(isDark) {
    document.body.classList.add(isDark ? COLOR_MODE_CLASSNAMES.dark : COLOR_MODE_CLASSNAMES.light);
    document.body.classList.remove(isDark ? COLOR_MODE_CLASSNAMES.light : COLOR_MODE_CLASSNAMES.dark);
}
export function setColorModeDataset(value, shouldPreventTransition = true) {
    const cleanup = shouldPreventTransition ? preventTransition() : undefined;
    document.documentElement.dataset.theme = value;
    document.documentElement.style.colorScheme = value;
    cleanup?.();
}
export function getSystemColorMode(fallback) {
    const isDark = query().matches ?? fallback === "dark";
    return isDark ? "dark" : "light";
}
export function getInitialColorMode(manager) {
    const fallback = "light";
    const initialColorMode = manager.get(fallback) ?? fallback;
    if (initialColorMode === "system") {
        // We can't know the client system preference in SSR so just return the fallback.
        return isServer ? fallback : getSystemColorMode();
    }
    return initialColorMode;
}
export function addColorModeListener(fn) {
    const mql = query();
    const listener = (e) => {
        fn(e.matches ? "dark" : "light");
    };
    mql.addEventListener("change", listener);
    return () => {
        mql.removeEventListener("change", listener);
    };
}
