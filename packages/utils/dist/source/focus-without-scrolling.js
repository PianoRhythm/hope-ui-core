/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */
export function focusWithoutScrolling(element) {
    if (supportsPreventScroll()) {
        element.focus({ preventScroll: true });
    }
    else {
        const scrollableElements = getScrollableElements(element);
        element.focus();
        restoreScrollPosition(scrollableElements);
    }
}
let supportsPreventScrollCached = null;
function supportsPreventScroll() {
    if (supportsPreventScrollCached == null) {
        supportsPreventScrollCached = false;
        try {
            const focusElem = document.createElement("div");
            focusElem.focus({
                get preventScroll() {
                    supportsPreventScrollCached = true;
                    return true;
                },
            });
        }
        catch (e) {
            // Ignore
        }
    }
    return supportsPreventScrollCached;
}
function getScrollableElements(element) {
    let parent = element.parentNode;
    const scrollableElements = [];
    const rootScrollingElement = document.scrollingElement || document.documentElement;
    while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
            scrollableElements.push({
                element: parent,
                scrollTop: parent.scrollTop,
                scrollLeft: parent.scrollLeft,
            });
        }
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) {
        scrollableElements.push({
            element: rootScrollingElement,
            scrollTop: rootScrollingElement.scrollTop,
            scrollLeft: rootScrollingElement.scrollLeft,
        });
    }
    return scrollableElements;
}
function restoreScrollPosition(scrollableElements) {
    for (const { element, scrollTop, scrollLeft } of scrollableElements) {
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}
