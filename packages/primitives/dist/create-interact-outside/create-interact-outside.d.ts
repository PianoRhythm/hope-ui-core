/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useInteractOutside.ts
 */
import { MaybeAccessor } from "@hope-ui/utils";
import { Accessor } from "solid-js";
export interface CreateInteractOutsideProps {
    /** Whether the interact outside events should be disabled. */
    isDisabled?: MaybeAccessor<boolean | undefined>;
    /** Handler that is called when an interaction outside the `ref` element start. */
    onInteractOutsideStart?: (e: Event) => void;
    /** Handler that is called when interaction outside the `ref` element end. */
    onInteractOutside?: (e: Event) => void;
}
/**
 * Handles interaction outside a given element.
 * Used in components like Dialogs and Popovers, so they can close when a user clicks outside them.
 * @param props - Props of the primitive.
 * @param ref - A ref for the HTML element.
 */
export declare function createInteractOutside(props: CreateInteractOutsideProps, ref: Accessor<Element | undefined>): void;
//# sourceMappingURL=create-interact-outside.d.ts.map