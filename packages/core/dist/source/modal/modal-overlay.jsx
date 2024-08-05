import { createHopeComponent, hope } from "@hope-ui/styles";
import { clsx } from "clsx";
import { createMemo, splitProps } from "solid-js";
import { useModalContext } from "./modal-context";
/**
 * `ModalOverlay` renders a backdrop that is typically displayed behind a modal.
 */
export const ModalOverlay = createHopeComponent(props => {
    const modalContext = useModalContext();
    const [local, others] = splitProps(props, ["class", "style", "children"]);
    const computedStyle = createMemo(() => ({
        ...local.style,
        ...modalContext.overlayTransition.style(),
    }));
    return (<hope.div role="presentation" class={clsx(modalContext.baseClasses().overlay, local.class)} style={computedStyle()} __css={modalContext.styleOverrides().overlay} {...others}/>);
});
