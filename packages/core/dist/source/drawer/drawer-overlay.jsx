import { createHopeComponent, hope } from "@hope-ui/styles";
import { clsx } from "clsx";
import { createMemo, splitProps } from "solid-js";
import { useDrawerContext } from "./drawer-context";
/**
 * `DrawerOverlay` renders a backdrop that is typically displayed behind a drawer.
 */
export const DrawerOverlay = createHopeComponent(props => {
    const drawerContext = useDrawerContext();
    const [local, others] = splitProps(props, ["class", "style", "children"]);
    const computedStyle = createMemo(() => ({
        ...local.style,
        ...drawerContext.overlayTransition.style(),
    }));
    return (<hope.div role="presentation" class={clsx(drawerContext.baseClasses().overlay, local.class)} style={computedStyle()} __css={drawerContext.styleOverrides().overlay} {...others}/>);
});
