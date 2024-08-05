import { createContext, useContext } from "solid-js";
export const PopoverContext = createContext();
export function usePopoverContext() {
    const context = useContext(PopoverContext);
    if (!context) {
        throw new Error("[hope-ui]: `usePopoverContext` must be used within a `Popover` component");
    }
    return context;
}
