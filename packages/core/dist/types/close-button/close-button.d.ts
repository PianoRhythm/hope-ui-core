import { ComponentTheme } from "@hope-ui/styles";
import { JSX } from "solid-js";
import { CloseButtonStyleConfigProps } from "./close-button.styles";
export interface CloseButtonProps extends CloseButtonStyleConfigProps {
    /** A label that describes the button. */
    "aria-label"?: string;
    /** The icon to be used in the button. */
    children?: JSX.Element;
}
export declare type CloseButtonTheme = ComponentTheme<CloseButtonProps, "size">;
/**
 * A button with a close icon, used to handle the close functionality in feedback and overlay components.
 */
export declare const CloseButton: import("@hope-ui/styles").HopeComponent<"button", CloseButtonProps>;
