import { StyleConfigProps } from "@hope-ui/styles";
export declare type ModalParts = "root" | "content" | "overlay" | "heading" | "description";
interface ModalVariants {
    /** The size of the modal. */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    /** Whether the modal should be centered on screen. */
    isCentered: boolean;
    /** Defines how scrolling should happen when content overflows beyond the viewport. */
    scrollBehavior: "inside" | "outside";
}
export declare const useModalStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<ModalParts, ModalVariants>;
export declare type ModalStyleConfigProps = StyleConfigProps<typeof useModalStyleConfig>;
export {};
