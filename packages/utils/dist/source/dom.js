/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit-utils/src/dom.ts
 *
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/59391bb95b05a13feeb9fe84b0cdb027519460ce/packages/utilities/dom-utils/src/dom.ts
 */
/**
 * Checks whether a `parent` element  is/or contains a `child` element.
 */
export function contains(parent, child) {
    if (!parent) {
        return false;
    }
    return parent === child || parent.contains(child);
}
export function getRelatedTarget(event) {
    const target = (event.target ?? event.currentTarget);
    const activeElement = getActiveElement(target);
    return (event.relatedTarget ?? activeElement);
}
export function getActiveElement(node) {
    return getOwnerDocument(node)?.activeElement;
}
export function getWindow(node) {
    return getOwnerDocument(node).defaultView || window;
}
export function getOwnerDocument(node) {
    return isElement(node) ? node.ownerDocument ?? document : document;
}
export function isElement(el) {
    return (el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE);
}
function isScrollable(node) {
    const style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
export function getScrollParent(node) {
    while (node && !isScrollable(node)) {
        node = node.parentElement;
    }
    return node || document.scrollingElement || document.documentElement;
}
/**
 * Checks whether `element` is a frame element.
 */
export function isFrame(element) {
    return element.tagName === "IFRAME";
}
/**
 * Return an empty string (to apply the data attribute) if the condition is met, `undefined` otherwise.
 */
export function dataAttr(condition) {
    return condition ? "" : undefined;
}
/**
 * Return `true` (to apply the aria attribute) if the condition is met, `undefined` otherwise.
 */
export function ariaAttr(condition) {
    return condition ? true : undefined;
}
