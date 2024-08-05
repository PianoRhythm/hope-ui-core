import { createContext, useContext } from "solid-js";
export const ButtonContext = createContext();
export function useButtonContext() {
    const context = useContext(ButtonContext);
    if (!context) {
        throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");
    }
    return context;
}
