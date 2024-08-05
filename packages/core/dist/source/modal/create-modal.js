import { createPreventScroll, createTransition } from "@hope-ui/primitives";
import { createMemo, createSignal } from "solid-js";
import { mergeDefaultProps } from "../utils";
const DEFAULT_OVERLAY_TRANSITION_OPTIONS = {
    transition: "fade",
    duration: 300,
    exitDuration: 200,
    easing: "ease-out",
    exitEasing: "ease-in",
};
export function createModal(props) {
    const [headingId, setHeadingId] = createSignal();
    const [descriptionId, setDescriptionId] = createSignal();
    const overlayTransitionOptions = createMemo(() => {
        if (!props.overlayTransitionOptions) {
            return DEFAULT_OVERLAY_TRANSITION_OPTIONS;
        }
        return mergeDefaultProps(DEFAULT_OVERLAY_TRANSITION_OPTIONS, props.overlayTransitionOptions);
    });
    const overlayTransition = createTransition(() => props.isOpen, overlayTransitionOptions);
    let mouseDownTarget;
    const onContainerMouseDown = event => {
        mouseDownTarget = event.target;
    };
    const onContainerKeyDown = event => {
        if (event.key === "Escape") {
            event.stopPropagation();
            if (props.closeOnEsc) {
                props.onClose();
            }
            props.onEscKeyDown?.();
        }
    };
    const onContainerClick = event => {
        event.stopPropagation();
        /**
         * Prevent the modal from closing when user
         * start dragging from the content, and release drag outside the content.
         *
         * Because it is technically not a considered "click outside".
         */
        if (mouseDownTarget !== event.target) {
            return;
        }
        if (props.closeOnOverlayClick) {
            props.onClose();
        }
        props.onOverlayClick?.();
    };
    const onCloseButtonClick = () => {
        props.onClose();
    };
    createPreventScroll({
        isEnabled: () => props.isOpen && !!props.preventScroll,
    });
    return {
        headingId,
        setHeadingId,
        descriptionId,
        setDescriptionId,
        overlayTransition,
        onContainerMouseDown,
        onContainerKeyDown,
        onContainerClick,
        onCloseButtonClick,
    };
}
