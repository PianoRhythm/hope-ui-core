/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/d945b9a7da3056017cda0cdd552af40fa1426070/packages/components/modal/src/use-modal.ts
 */
import { ParentComponent } from "solid-js";
import { ModalCloseButton } from "./modal-close-button";
import { ModalContent } from "./modal-content";
import { ModalDescription } from "./modal-description";
import { ModalHeading } from "./modal-heading";
import { ModalOverlay } from "./modal-overlay";
import { ModalProps } from "./types";
declare type ModalComposite = {
    Overlay: typeof ModalOverlay;
    Content: typeof ModalContent;
    CloseButton: typeof ModalCloseButton;
    Heading: typeof ModalHeading;
    Description: typeof ModalDescription;
};
/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 */
export declare const Modal: ParentComponent<ModalProps> & ModalComposite;
export {};
//# sourceMappingURL=modal.d.ts.map