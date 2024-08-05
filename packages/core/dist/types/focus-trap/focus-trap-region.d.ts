/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit/src/focus-trap/focus-trap-region.tsx
 *
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/d945b9a7da3056017cda0cdd552af40fa1426070/packages/hooks/use-focus-effect/src/index.ts
 */
import { ParentProps } from "solid-js";
export interface FocusTrapRegionProps extends ParentProps {
    /** Whether the focus trap should be active. */
    trapFocus?: boolean;
    /**
     * A query selector to retrieve the element that should receive focus once `FocusTrap` mounts.
     * This value has priority over `autoFocus`.
     * @default '[data-autofocus]'
     */
    initialFocusSelector?: string;
    /**
     * A query selector to retrieve the element that should receive focus once `FocusTrap` unmounts.
     * This value has priority over `restoreFocus`.
     */
    restoreFocusSelector?: string;
    /** Whether the first focusable element should be focused once `FocusTrap` mounts. */
    autoFocus?: boolean;
    /** Whether focus should be restored to the element that triggered the `FocusTrap` once it unmounts. */
    restoreFocus?: boolean;
}
/**
 * `FocusTrapRegion` traps focus within itself.
 * It renders a `div` by default.
 */
export declare const FocusTrapRegion: any;
