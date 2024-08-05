/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/d945b9a7da3056017cda0cdd552af40fa1426070/packages/components/drawer/src/use-drawer.ts
 */
import { ParentComponent } from "solid-js";
import { DrawerCloseButton } from "./drawer-close-button";
import { DrawerContent } from "./drawer-content";
import { DrawerDescription } from "./drawer-description";
import { DrawerHeading } from "./drawer-heading";
import { DrawerOverlay } from "./drawer-overlay";
import { DrawerProps } from "./types";
declare type DrawerComposite = {
    Overlay: typeof DrawerOverlay;
    Content: typeof DrawerContent;
    CloseButton: typeof DrawerCloseButton;
    Heading: typeof DrawerHeading;
    Description: typeof DrawerDescription;
};
/**
 * Drawer provides context, theming, and accessibility properties
 * to all other drawer components.
 *
 * It doesn't render any DOM node.
 */
export declare const Drawer: ParentComponent<DrawerProps> & DrawerComposite;
export {};
