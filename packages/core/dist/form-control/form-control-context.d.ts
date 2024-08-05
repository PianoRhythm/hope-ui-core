import { SystemStyleObject } from "@hope-ui/styles";
import { Accessor, Setter } from "solid-js";
import { FormControlParts, FormControlStyleConfigProps } from "./form-control.styles";
export interface FormControlContextValue {
    /** The `id` passed to the form control element (e.g, Input, TextArea). */
    id: Accessor<string>;
    /** The `id` passed to the form control label. */
    labelId: Accessor<string>;
    /** The `id` passed to the form control description. */
    descriptionId: Accessor<string>;
    /** The `id` passed to the form control error. */
    errorId: Accessor<string>;
    /** Whether the form control is required. */
    isRequired: Accessor<boolean | undefined>;
    /** Whether the form control is disabled. */
    isDisabled: Accessor<boolean | undefined>;
    /** Whether the form control is read only. */
    isReadOnly: Accessor<boolean | undefined>;
    /** Whether the form control is invalid. */
    isInvalid: Accessor<boolean | undefined>;
    /** Whether the base styles should be applied or not. */
    unstyled: Accessor<FormControlStyleConfigProps["unstyled"]>;
    /** The style config base class names. */
    baseClasses: Accessor<Record<FormControlParts, string>>;
    /** The style config style overrides. */
    styleOverrides: Accessor<Record<FormControlParts, SystemStyleObject>>;
    /** Whether the form control has a description. */
    hasDescription: Accessor<boolean>;
    /** Setter for whether the form control has a description. */
    setHasDescription: Setter<boolean>;
    /** Whether the form control has an error. */
    hasError: Accessor<boolean>;
    /** Setter for whether the form control has an error. */
    setHasError: Setter<boolean>;
    /** Merge the form control `aria-describedby` ids with the element's own `aria-describedby` prop. */
    mergeAriaDescribedBy: (elementAriaDescribedBy?: string) => string | undefined;
}
export declare const FormControlContext: import("solid-js").Context<FormControlContextValue | undefined>;
export declare function useFormControlContext(): FormControlContextValue | undefined;
export declare function useRequiredFormControlContext(): FormControlContextValue;
//# sourceMappingURL=form-control-context.d.ts.map