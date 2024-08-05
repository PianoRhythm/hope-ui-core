/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit/src/popover/popover-state.ts
 *
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/d945b9a7da3056017cda0cdd552af40fa1426070/packages/components/popover/src/use-popover.ts
 */
import { Component } from "solid-js";
import { PopoverAnchor } from "./popover-anchor";
import { PopoverCloseButton } from "./popover-close-button";
import { PopoverContent } from "./popover-content";
import { PopoverDescription } from "./popover-description";
import { PopoverHeading } from "./popover-heading";
import { PopoverTrigger } from "./popover-trigger";
import { PopoverProps } from "./types";
declare type PopoverComposite = {
    Trigger: typeof PopoverTrigger;
    Anchor: typeof PopoverAnchor;
    Content: typeof PopoverContent;
    CloseButton: typeof PopoverCloseButton;
    Heading: typeof PopoverHeading;
    Description: typeof PopoverDescription;
};
/**
 * Popover provides context, theming, and accessibility properties
 * to all other popover components.
 *
 * It doesn't render any DOM node.
 */
export declare const Popover: Component<PopoverProps> & PopoverComposite;
export {};
