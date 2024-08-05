import { CloseButtonProps } from "../close-button";
export declare type PopoverCloseButtonProps = CloseButtonProps;
/**
 * PopoverCloseButton is used closes the popover.
 *
 * You don't need to pass the `onClick` to it, it gets the
 * `close` action from the popover context.
 */
export declare const PopoverCloseButton: import("@hope-ui/styles").HopeComponent<"button", CloseButtonProps>;
