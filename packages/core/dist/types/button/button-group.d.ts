import { ComponentProps } from "solid-js";
import { ButtonProps } from "./types";
declare const BaseButtonGroup: any;
declare type ButtonGroupContextValue = Pick<ButtonProps, "colorScheme" | "variant" | "size" | "isDisabled">;
export declare function useButtonGroupContext(): ButtonGroupContextValue;
export declare type ButtonGroupProps = ComponentProps<typeof BaseButtonGroup> & ButtonGroupContextValue;
export declare const ButtonGroup: any;
export {};
