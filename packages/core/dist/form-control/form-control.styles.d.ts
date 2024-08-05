import { StyleConfigProps } from "@hope-ui/styles";
export declare type FormControlParts = "root" | "label" | "description" | "error";
interface FormControlVariants {
    /** Whether a required indicator (asterisk) should be shown when the form control is required. */
    withRequiredIndicator: boolean;
}
export declare const useFormControlStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<FormControlParts, FormControlVariants>;
export declare type FormControlStyleConfigProps = StyleConfigProps<typeof useFormControlStyleConfig>;
export {};
//# sourceMappingURL=form-control.styles.d.ts.map