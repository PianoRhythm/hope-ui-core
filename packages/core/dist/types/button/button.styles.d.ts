import { StyleConfigProps, ThemeColorScheme } from "@hope-ui/styles";
export declare type ButtonParts = "root" | "icon" | "leftIcon" | "rightIcon" | "loaderWrapper" | "loaderIcon";
interface ButtonVariants {
    /** The color of the button. */
    colorScheme: ThemeColorScheme;
    /** The visual style of the button. */
    variant: "solid" | "soft" | "outlined" | "plain" | "default";
    /** The size of the button. */
    size: "xs" | "sm" | "md" | "lg";
    /** Whether the button should take all available width. */
    isFullWidth: boolean;
    /** Whether the button is an icon only button. */
    isIconButton: boolean;
}
export declare const useButtonStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<ButtonParts, ButtonVariants>;
export declare type ButtonStyleConfigProps = StyleConfigProps<typeof useButtonStyleConfig>;
export {};
