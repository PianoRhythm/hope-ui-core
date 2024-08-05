import { StyleConfigProps, StyleConfigVariantSelection, SystemStyleObject } from "@hope-ui/styles";
export declare type InputParts = "root";
export interface InputVariants {
    /** The visual style of the input. */
    variant: "filled" | "outlined" | "plain";
    /** The size of the input. */
    size: "sm" | "md" | "lg";
}
export declare const INPUT_DEFAULT_VARIANTS: StyleConfigVariantSelection<InputVariants>;
export declare const INPUT_SIZES: Record<InputVariants["size"], SystemStyleObject>;
export declare const useInputStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<"root", InputVariants>;
export declare type InputStyleConfigProps = StyleConfigProps<typeof useInputStyleConfig>;
