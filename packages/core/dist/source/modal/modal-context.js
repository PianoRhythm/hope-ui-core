import { createContext, useContext } from "solid-js";
export const ModalContext = createContext();
export function useModalContext() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("[hope-ui]: `useModalContext` must be used within a `Modal` component");
    }
    return context;
}
