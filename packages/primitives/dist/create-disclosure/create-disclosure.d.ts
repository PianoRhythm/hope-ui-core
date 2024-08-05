import { MaybeAccessor } from "@hope-ui/utils";
export interface CreateDisclosureProps {
    /** The value to be used, in controlled mode. */
    isOpen?: MaybeAccessor<boolean | undefined>;
    /** The initial value to be used, in uncontrolled mode. */
    defaultIsOpen?: MaybeAccessor<boolean | undefined>;
    /** A function that will be called when `isOpen` value changes. */
    onOpenChange?: (isOpen: boolean) => void;
}
/**
 * Provides state management for open, close and toggle scenarios.
 * Used to control the "open state" of components like Modal, Drawer, etc.
 */
export declare function createDisclosure(props?: CreateDisclosureProps): {
    isOpen: import("solid-js").Accessor<boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
//# sourceMappingURL=create-disclosure.d.ts.map