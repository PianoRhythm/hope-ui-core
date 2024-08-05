import { access } from "@hope-ui/utils";
import { createControllableBooleanSignal } from "../create-controllable-signal";
/**
 * Provides state management for open, close and toggle scenarios.
 * Used to control the "open state" of components like Modal, Drawer, etc.
 */
export function createDisclosure(props = {}) {
    const [isOpen, setIsOpen] = createControllableBooleanSignal({
        value: () => access(props.isOpen),
        defaultValue: () => !!access(props.defaultIsOpen),
        onChange: value => props.onOpenChange?.(value),
    });
    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };
    const toggle = () => {
        isOpen() ? close() : open();
    };
    return {
        isOpen,
        open,
        close,
        toggle,
    };
}
