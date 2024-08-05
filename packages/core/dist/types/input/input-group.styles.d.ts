import { StyleConfigProps } from "@hope-ui/styles";
import { InputVariants } from "./input.styles";
export declare type InputGroupParts = "root" | "input" | "section" | "leftSection" | "rightSection" | "addon" | "leftAddon" | "rightAddon";
interface InputGroupVariants extends InputVariants {
    /** Whether the input has a left section. */
    hasLeftSection: boolean;
    /** Whether the input has a right section. */
    hasRightSection: boolean;
    /** Whether the input has a left addon. */
    hasLeftAddon: boolean;
    /** Whether the input has a right addon. */
    hasRightAddon: boolean;
}
export declare const useInputGroupStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<InputGroupParts, InputGroupVariants>;
export declare type InputGroupStyleConfigProps = StyleConfigProps<typeof useInputGroupStyleConfig>;
export {};
