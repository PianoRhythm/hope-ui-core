import { StyleConfigProps } from "@hope-ui/styles";
export declare type DrawerParts = "root" | "content" | "overlay" | "heading" | "description";
export interface DrawerVariants {
    /** The size of the drawer. */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
    /** The placement of the drawer. */
    placement: "top" | "right" | "bottom" | "left";
}
export declare const useDrawerStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<DrawerParts, DrawerVariants>;
export declare type DrawerStyleConfigProps = StyleConfigProps<typeof useDrawerStyleConfig>;
//# sourceMappingURL=drawer.styles.d.ts.map