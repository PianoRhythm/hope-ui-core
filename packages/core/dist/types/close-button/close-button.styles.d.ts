import { StyleConfigProps } from "@hope-ui/styles";
interface CloseButtonVariants {
    /** The size of the close button. */
    size: "sm" | "md" | "lg";
}
export declare const useCloseButtonStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<"root", CloseButtonVariants>;
export declare type CloseButtonStyleConfigProps = StyleConfigProps<typeof useCloseButtonStyleConfig>;
export {};
