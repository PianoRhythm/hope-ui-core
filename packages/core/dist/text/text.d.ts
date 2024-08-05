import { ComponentTheme, ResponsiveValue } from "@hope-ui/styles";
import { TextStyleConfigProps } from "./text.styles";
export interface TextProps extends TextStyleConfigProps {
    /** The number of lines the text should be truncate. */
    lineClamp?: ResponsiveValue<number>;
}
export declare type TextTheme = ComponentTheme<TextProps, "size">;
/**
 * Text component is the used to render text and paragraphs within an interface.
 * It renders a <p> tag by default.
 */
export declare const Text: import("@hope-ui/styles").HopeComponent<"p", TextProps>;
//# sourceMappingURL=text.d.ts.map