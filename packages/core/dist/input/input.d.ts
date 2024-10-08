import { InputStyleConfigProps } from "./input.styles";
import { InputSharedProps } from "./types";
export interface InputProps extends InputStyleConfigProps, InputSharedProps {
    /** The native HTML `size` attribute to be passed to the `input`. */
    htmlSize?: string | number;
}
export declare const Input: import("@hope-ui/styles").HopeComponent<"input", InputProps>;
//# sourceMappingURL=input.d.ts.map