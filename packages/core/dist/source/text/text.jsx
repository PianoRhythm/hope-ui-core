import { createHopeComponent, hope, mergeThemeProps, STYLE_CONFIG_PROP_NAMES, } from "@hope-ui/styles";
import { clsx } from "clsx";
import { createMemo, splitProps } from "solid-js";
import { lineClamp } from "../utils";
import { useTextStyleConfig } from "./text.styles";
/**
 * Text component is the used to render text and paragraphs within an interface.
 * It renders a <p> tag by default.
 */
export const Text = createHopeComponent(props => {
    props = mergeThemeProps("Text", {}, props);
    const [local, styleConfigProps, others] = splitProps(props, ["class", "lineClamp"], [...STYLE_CONFIG_PROP_NAMES, "size"]);
    const { baseClasses, styleOverrides } = useTextStyleConfig("Text", styleConfigProps);
    const rootStyles = createMemo(() => ({
        ...styleOverrides().root,
        ...lineClamp(local.lineClamp),
    }));
    return <hope.p class={clsx(baseClasses().root, local.class)} __css={rootStyles()} {...others}/>;
});
