import { ComponentTheme } from "@hope-ui/styles";
import { FormControlStyleConfigProps } from "./form-control.styles";
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
export declare const FormControl: any;
