import { StyleConfigProps } from "@hope-ui/styles";
interface TextVariants {
    /** The size of the text. */
    size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
}
export declare const useTextStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<"root", TextVariants>;
export declare type TextStyleConfigProps = StyleConfigProps<typeof useTextStyleConfig>;
export {};
