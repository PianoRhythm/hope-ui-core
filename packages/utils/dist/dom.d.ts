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
export declare function contains(parent: HTMLElement | undefined, child: HTMLElement): boolean;
export declare function getRelatedTarget(event: Pick<FocusEvent, "relatedTarget" | "target" | "currentTarget">): HTMLElement;
export declare function getActiveElement(node?: HTMLElement): HTMLElement;
export declare function getWindow(node?: Element | null): Window;
export declare function getOwnerDocument(node?: Element | null): Document;
export declare function isElement(el: any): el is Element;
export declare function getScrollParent(node: Element | null): Element;
/**
 * Checks whether `element` is a frame element.
 */
export declare function isFrame(element: Element): element is HTMLIFrameElement;
/**
 * Return an empty string (to apply the data attribute) if the condition is met, `undefined` otherwise.
 */
export declare function dataAttr(condition: boolean | undefined): "" | undefined;
/**
 * Return `true` (to apply the aria attribute) if the condition is met, `undefined` otherwise.
 */
export declare function ariaAttr(condition: boolean | undefined): true | undefined;
//# sourceMappingURL=dom.d.ts.map