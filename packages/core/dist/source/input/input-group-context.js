import { createContext, useContext } from "solid-js";
export const InputGroupContext = createContext();
export function useInputGroupContext() {
    return useContext(InputGroupContext);
}
export function useRequiredInputGroupContext() {
    const context = useInputGroupContext();
    if (!context) {
        throw new Error("[hope-ui]: `useRequiredInputGroupContext` must be used within a `InputGroup` component");
    }
    return context;
}
