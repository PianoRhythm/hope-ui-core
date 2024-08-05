import { JSX } from "solid-js";
import { BaseModalProps } from "./types";
export declare function createModal(props: BaseModalProps): {
    headingId: import("solid-js").Accessor<string | undefined>;
    setHeadingId: any;
    descriptionId: import("solid-js").Accessor<string | undefined>;
    setDescriptionId: any;
    overlayTransition: import("@hope-ui/primitives").TransitionResult;
    onContainerMouseDown: JSX.EventHandler<HTMLElement, MouseEvent>;
    onContainerKeyDown: JSX.EventHandler<HTMLElement, KeyboardEvent>;
    onContainerClick: JSX.EventHandler<HTMLElement, MouseEvent>;
    onCloseButtonClick: () => void;
};
//# sourceMappingURL=create-modal.d.ts.map