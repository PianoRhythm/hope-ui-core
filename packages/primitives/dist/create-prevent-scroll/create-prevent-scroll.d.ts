/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */
import { MaybeAccessor } from "@hope-ui/utils";
export interface PreventScrollOptions {
    /** Whether the scroll lock is enabled. */
    isEnabled: MaybeAccessor<boolean>;
}
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */
export declare function createPreventScroll(options: PreventScrollOptions): void;
//# sourceMappingURL=create-prevent-scroll.d.ts.map