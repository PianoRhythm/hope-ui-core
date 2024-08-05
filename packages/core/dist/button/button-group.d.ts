import { ComponentProps } from "solid-js";
import { ButtonProps } from "./types";
declare const BaseButtonGroup: import("@hope-ui/styles").HopeComponent<"div", import("@hope-ui/styles").HopeVariantSelection<{
    orientation: {
        horizontal: {
            flexDirection: "row";
            "& > *:first-of-type:not(:last-of-type)": {
                borderRightRadius: number;
            };
            "& > *:not(:first-of-type):not(:last-of-type)": {
                borderRadius: number;
                marginLeft: "-1px";
            };
            "& > *:not(:first-of-type):last-of-type": {
                borderLeftRadius: number;
                marginLeft: "-1px";
            };
        };
        vertical: {
            flexDirection: "column";
            "& > *:first-of-type:not(:last-of-type)": {
                borderBottomRadius: number;
            };
            "& > *:not(:first-of-type):not(:last-of-type)": {
                borderRadius: number;
                marginTop: "-1px";
            };
            "& > *:not(:first-of-type):last-of-type": {
                borderTopRadius: number;
                marginTop: "-1px";
            };
        };
    };
}>>;
declare type ButtonGroupContextValue = Pick<ButtonProps, "colorScheme" | "variant" | "size" | "isDisabled">;
export declare function useButtonGroupContext(): ButtonGroupContextValue | undefined;
export declare type ButtonGroupProps = ComponentProps<typeof BaseButtonGroup> & ButtonGroupContextValue;
export declare const ButtonGroup: import("@hope-ui/styles").HopeComponent<"div", ButtonGroupProps>;
export {};
//# sourceMappingURL=button-group.d.ts.map