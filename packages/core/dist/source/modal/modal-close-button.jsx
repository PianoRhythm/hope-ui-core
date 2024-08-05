import { createHopeComponent } from "@hope-ui/styles";
import { callHandler } from "@hope-ui/utils";
import { clsx } from "clsx";
import { splitProps } from "solid-js";
import { CloseButton } from "../close-button";
import { mergeDefaultProps } from "../utils";
import { useModalContext } from "./modal-context";
/**
 * `ModalCloseButton` is used closes the modal dialog.
 *
 * You don't need to pass the `onClick` to it, it gets the
 * `close` action from the modal context.
 */
export const ModalCloseButton = createHopeComponent(props => {
    const modalContext = useModalContext();
    props = mergeDefaultProps({
        "aria-label": "Close modal",
        size: "md",
    }, props);
    const [local, others] = splitProps(props, ["class", "onClick"]);
    const onClick = event => {
        event.stopPropagation();
        callHandler(local.onClick, event);
        modalContext.onCloseButtonClick();
    };
    return (<CloseButton class={clsx("hope-Modal-closeButton", local.class)} onClick={onClick} {...others}/>);
});
