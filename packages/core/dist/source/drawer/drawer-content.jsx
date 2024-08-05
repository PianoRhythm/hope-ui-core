import { createHopeComponent, hope } from "@hope-ui/styles";
import { callHandler } from "@hope-ui/utils";
import { clsx } from "clsx";
import { createMemo, splitProps } from "solid-js";
import { FocusTrapRegion } from "../focus-trap";
import { useDrawerContext } from "./drawer-context";
/**
 * The drawer content wrapper.
 */
export const DrawerContent = createHopeComponent(props => {
    const drawerContext = useDrawerContext();
    const [local, others] = splitProps(props, ["class", "style", "onClick"]);
    const onContentClick = event => {
        event.stopPropagation();
        callHandler(local.onClick, event);
    };
    const computedStyle = createMemo(() => ({
        ...local.style,
        ...drawerContext.contentTransition.style(),
    }));
    return (<FocusTrapRegion autoFocus restoreFocus trapFocus={drawerContext.trapFocus()} initialFocusSelector={drawerContext.initialFocusSelector()} restoreFocusSelector={drawerContext.restoreFocusSelector()} class={drawerContext.baseClasses().root} __css={drawerContext.styleOverrides().root} onMouseDown={drawerContext.onContainerMouseDown} onKeyDown={drawerContext.onContainerKeyDown} onClick={drawerContext.onContainerClick}>
      <hope.section id={drawerContext.contentId()} 
    //tabIndex={-1}
    role="dialog" data-ismodal="true" aria-modal="true" aria-labelledby={drawerContext.headingId()} aria-describedby={drawerContext.descriptionId()} class={clsx(drawerContext.baseClasses().content, local.class)} style={computedStyle()} __css={drawerContext.styleOverrides().content} onClick={onContentClick} {...others}/>
    </FocusTrapRegion>);
});
