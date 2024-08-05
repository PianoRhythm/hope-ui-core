import { JSX } from "solid-js";
import { BaseModalProps } from "./types";
export declare function createModal(props: BaseModalProps): {
    headingId: import("solid-js").Accessor<string>;
    setHeadingId: import("solid-js").Setter<string>;
    descriptionId: import("solid-js").Accessor<string>;
    setDescriptionId: import("solid-js").Setter<string>;
    overlayTransition: any;
    onContainerMouseDown: JSX.EventHandler<HTMLElement, MouseEvent>;
    onContainerKeyDown: JSX.EventHandler<HTMLElement, KeyboardEvent>;
    onContainerClick: JSX.EventHandler<HTMLElement, MouseEvent>;
    onCloseButtonClick: () => void;
};
