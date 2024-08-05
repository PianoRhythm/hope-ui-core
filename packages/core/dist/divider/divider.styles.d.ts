import { StyleConfigProps } from "@hope-ui/styles";
declare type DividerParts = "root" | "label";
interface DividerVariants {
    /** The orientation of the divider. */
    orientation: "vertical" | "horizontal";
    /** Whether the divider has a label. */
    withLabel: boolean;
    /** The placement of the label, if any. */
    labelPlacement: "start" | "center" | "end";
}
export declare const useDividerStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<DividerParts, DividerVariants>;
export declare type DividerStyleConfigProps = StyleConfigProps<typeof useDividerStyleConfig>;
export {};
//# sourceMappingURL=divider.styles.d.ts.map