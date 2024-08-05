import { StyleConfigProps } from "@hope-ui/styles";
interface HeadingVariants {
    /** The size of the heading. */
    size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
}
export declare const useHeadingStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<"root", HeadingVariants>;
export declare type HeadingStyleConfigProps = StyleConfigProps<typeof useHeadingStyleConfig>;
export {};
//# sourceMappingURL=heading.styles.d.ts.map