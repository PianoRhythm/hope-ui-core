import { ComponentTheme } from "@hope-ui/styles";
import { FormControlStyleConfigProps } from "./form-control.styles";
import { FormControlDescription } from "./form-control-description";
import { FormControlError } from "./form-control-error";
import { FormControlLabel } from "./form-control-label";
export interface FormControlProps extends FormControlStyleConfigProps {
    /** The `id` to use for the form control element (e.g, Input, TextArea). */
    id?: string;
    /** Whether the form control is required. */
    isRequired?: boolean;
    /** Whether the form control is disabled. */
    isDisabled?: boolean;
    /** Whether the form control is read only. */
    isReadOnly?: boolean;
    /** Whether the form control is invalid. */
    isInvalid?: boolean;
}
export declare type FormControlTheme = ComponentTheme<FormControlProps, "withRequiredIndicator">;
declare type FormControlComposite = {
    Label: typeof FormControlLabel;
    Description: typeof FormControlDescription;
    Error: typeof FormControlError;
};
export declare const FormControl: import("@hope-ui/styles").HopeComponent<"div", FormControlProps> & FormControlComposite;
export {};
//# sourceMappingURL=form-control.d.ts.map