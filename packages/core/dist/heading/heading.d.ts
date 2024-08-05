import { ComponentTheme, ResponsiveValue } from "@hope-ui/styles";
import { HeadingStyleConfigProps } from "./heading.styles";
declare type StringAndNumber<T extends number> = T | `${T}`;
declare type HeadingLevel = StringAndNumber<1 | 2 | 3 | 4 | 5 | 6>;
export interface HeadingProps extends HeadingStyleConfigProps {
    /** The level of heading to be rendered. For example `3` will render a h3. */
    level?: HeadingLevel;
    /** The number of lines the text should be truncate. */
    lineClamp?: ResponsiveValue<number>;
}
export declare type HeadingTheme = ComponentTheme<HeadingProps, "level" | "size">;
/**
 * Headings are used for rendering headlines.
 * It renders an <h2> tag by default.
 */
export declare const Heading: import("@hope-ui/styles").HopeComponent<"h2", HeadingProps>;
export {};
//# sourceMappingURL=heading.d.ts.map