import { createHopeComponent, hope } from "@hope-ui/styles";
import { callHandler } from "@hope-ui/utils";
import { clsx } from "clsx";
import { createMemo, splitProps } from "solid-js";
import { FocusTrapRegion } from "../focus-trap";
import { useModalContext } from "./modal-context";
/**
 * The modal content wrapper.
 */
export const ModalContent = createHopeComponent(props => {
    const modalContext = useModalContext();
    const [local, others] = splitProps(props, ["class", "style", "onClick"]);
    const onContentClick = event => {
        event.stopPropagation();
        callHandler(local.onClick, event);
    };
    const computedStyle = createMemo(() => ({
        ...local.style,
        ...modalContext.contentTransition.style(),
    }));
    return (<FocusTrapRegion autoFocus restoreFocus trapFocus={modalContext.trapFocus()} initialFocusSelector={modalContext.initialFocusSelector()} restoreFocusSelector={modalContext.restoreFocusSelector()} class={modalContext.baseClasses().root} __css={modalContext.styleOverrides().root} onMouseDown={modalContext.onContainerMouseDown} onKeyDown={modalContext.onContainerKeyDown} onClick={modalContext.onContainerClick}>
      <hope.section id={modalContext.contentId()} 
    //tabIndex={-1}
    role="dialog" data-ismodal="true" aria-modal="true" aria-labelledby={modalContext.headingId()} aria-describedby={modalContext.descriptionId()} class={clsx(modalContext.baseClasses().content, local.class)} style={computedStyle()} __css={modalContext.styleOverrides().content} onClick={onContentClick} {...others}/>
    </FocusTrapRegion>);
});
