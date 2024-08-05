import { JSX } from "solid-js";
export interface ModalOverlayProps {
    /** The css style attribute (should be an object). */
    style?: JSX.CSSProperties;
}
/**
 * `ModalOverlay` renders a backdrop that is typically displayed behind a modal.
 */
export declare const ModalOverlay: import("@hope-ui/styles").HopeComponent<"div", ModalOverlayProps>;
