/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/fbfcbaa44bcf398746c1d84ed155cc7f9290939c/packages/ariakit/src/popover/popover-state.ts
 */
import { AnchorRect } from "./types";
export declare function getAnchorElement(anchor: HTMLElement | undefined, getAnchorRect: (anchor?: HTMLElement) => AnchorRect | undefined): {
    contextElement: HTMLElement | undefined;
    getBoundingClientRect: () => DOMRect;
};
//# sourceMappingURL=utils.d.ts.map