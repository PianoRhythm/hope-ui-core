import { createHopeComponent, hope, mergeThemeProps, STYLE_CONFIG_PROP_NAMES, } from "@hope-ui/styles";
import { clsx } from "clsx";
import { splitProps } from "solid-js";
import { XMarkIcon } from "../icon/icon-set";
import { useCloseButtonStyleConfig } from "./close-button.styles";
/**
 * A button with a close icon, used to handle the close functionality in feedback and overlay components.
 */
export const CloseButton = createHopeComponent(props => {
    props = mergeThemeProps("CloseButton", {
        "aria-label": "Close",
        children: () => <XMarkIcon />,
    }, props);
    const [local, styleConfigProps, others] = splitProps(props, ["class"], [...STYLE_CONFIG_PROP_NAMES, "size"]);
    const { baseClasses, styleOverrides } = useCloseButtonStyleConfig("CloseButton", styleConfigProps);
    return (<hope.button type="button" class={clsx(baseClasses().root, local.class)} __css={styleOverrides().root} {...others}/>);
});
