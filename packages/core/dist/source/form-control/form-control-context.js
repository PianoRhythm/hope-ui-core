import { createContext, useContext } from "solid-js";
export const FormControlContext = createContext();
export function useFormControlContext() {
    return useContext(FormControlContext);
}
export function useRequiredFormControlContext() {
    const context = useFormControlContext();
    if (!context) {
        throw new Error("[hope-ui]: `useRequiredFormControlContext` must be used within a `FormControl` component");
    }
    return context;
}
