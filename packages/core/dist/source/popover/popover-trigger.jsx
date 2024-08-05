import { createHopeComponent, hope } from "@hope-ui/styles";
import { callHandler, mergeRefs } from "@hope-ui/utils";
import { splitProps } from "solid-js";
import { usePopoverContext } from "./popover-context";
/**
 * PopoverTrigger opens the popover's content, it renders a `button` by default.
 * It must be an interactive element.
 */
export const PopoverTrigger = createHopeComponent(props => {
    const popoverContext = usePopoverContext();
    const [local, others] = splitProps(props, [
        "ref",
        "onClick",
        "onKeyDown",
        "onFocus",
        "onBlur",
        "onMouseEnter",
        "onMouseLeave",
    ]);
    const triggerOnClick = () => popoverContext.triggerMode() === "click";
    const triggerOnHover = () => popoverContext.triggerMode() === "hover";
    const onClick = event => {
        callHandler(local.onClick, event);
        if (triggerOnClick()) {
            event.stopPropagation();
            popoverContext.onTriggerClick();
        }
    };
    const onKeyDown = event => {
        callHandler(local.onKeyDown, event);
        if (triggerOnHover()) {
            event.stopPropagation();
            callHandler(popoverContext.onTriggerKeyDown, event);
        }
    };
    const onFocus = event => {
        callHandler(local.onFocus, event);
        if (triggerOnHover()) {
            popoverContext.onTriggerFocus();
        }
    };
    const onBlur = event => {
        callHandler(local.onBlur, event);
        if (triggerOnHover()) {
            callHandler(popoverContext.onTriggerBlur, event);
        }
    };
    const onMouseEnter = event => {
        callHandler(local.onMouseEnter, event);
        if (triggerOnHover()) {
            popoverContext.onTriggerMouseEnter();
        }
    };
    const onMouseLeave = event => {
        callHandler(local.onMouseLeave, event);
        if (triggerOnHover()) {
            popoverContext.onTriggerMouseLeave();
        }
    };
    return (<hope.button ref={mergeRefs(popoverContext.setTriggerRef, local.ref)} id={`${popoverContext.popoverId()}-trigger`} type="button" aria-haspopup="dialog" aria-controls={popoverContext.popoverId()} aria-expanded={popoverContext.isOpen()} onClick={onClick} onKeyDown={onKeyDown} onFocus={onFocus} onBlur={onBlur} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...others}/>);
});
