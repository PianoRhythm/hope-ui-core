import { createHopeComponent } from "@hope-ui/styles";
import { callHandler, mergeRefs } from "@hope-ui/utils";
import { clsx } from "clsx";
import { createMemo, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { FocusTrapRegion } from "../focus-trap";
import { PopoverArrow } from "./popover-arrow";
import { usePopoverContext } from "./popover-context";
/**
 * The popover content wrapper.
 */
export const PopoverContent = createHopeComponent(props => {
    const popoverContext = usePopoverContext();
    const [local, others] = splitProps(props, [
        "ref",
        "class",
        "style",
        "children",
        "onKeyDown",
        "onFocusOut",
        "onMouseEnter",
        "onMouseLeave",
    ]);
    const triggerOnClick = () => popoverContext.triggerMode() === "click";
    const triggerOnHover = () => popoverContext.triggerMode() === "hover";
    const onKeyDown = event => {
        event.stopPropagation();
        callHandler(local.onKeyDown, event);
        callHandler(popoverContext.onContentKeyDown, event);
    };
    const onFocusOut = event => {
        callHandler(local.onFocusOut, event);
        callHandler(popoverContext.onContentFocusOut, event);
    };
    const onMouseEnter = event => {
        callHandler(local.onMouseEnter, event);
        if (triggerOnHover()) {
            popoverContext.onContentMouseEnter();
        }
    };
    const onMouseLeave = event => {
        callHandler(local.onMouseLeave, event);
        if (triggerOnHover()) {
            callHandler(popoverContext.onContentMouseLeave, event);
        }
    };
    const computedStyle = createMemo(() => ({
        ...local.style,
        ...popoverContext.popoverTransition.style(),
    }));
    return (<Show when={popoverContext.popoverTransition.keepMounted()}>
      <Portal>
        <FocusTrapRegion as="section" autoFocus restoreFocus={triggerOnClick()} ref={mergeRefs(popoverContext.setContentRef, local.ref)} id={popoverContext.popoverId()} role={triggerOnHover() ? "tooltip" : "dialog"} aria-labelledby={popoverContext.headingId()} aria-describedby={popoverContext.descriptionId()} trapFocus={popoverContext.trapFocus()} initialFocusSelector={popoverContext.initialFocusSelector()} restoreFocusSelector={popoverContext.restoreFocusSelector()} class={clsx(popoverContext.baseClasses().root, local.class)} style={computedStyle()} __css={popoverContext.styleOverrides().root} onKeyDown={onKeyDown} onFocusOut={onFocusOut} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...others}>
          <Show when={popoverContext.withArrow()}>
            <PopoverArrow />
          </Show>
          {local.children}
        </FocusTrapRegion>
      </Portal>
    </Show>);
});
