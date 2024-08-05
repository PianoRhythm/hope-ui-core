import { createHopeComponent, hope, mergeThemeProps, STYLE_CONFIG_PROP_NAMES, } from "@hope-ui/styles";
import { clsx } from "clsx";
import { createMemo, splitProps } from "solid-js";
import { lineClamp } from "../utils";
import { useHeadingStyleConfig } from "./heading.styles";
/**
 * Headings are used for rendering headlines.
 * It renders an <h2> tag by default.
 */
export const Heading = createHopeComponent(props => {
    props = mergeThemeProps("Heading", {}, props);
    const [local, styleConfigProps, others] = splitProps(props, ["as", "class", "level", "lineClamp"], [...STYLE_CONFIG_PROP_NAMES, "size"]);
    const { baseClasses, styleOverrides } = useHeadingStyleConfig("Heading", styleConfigProps);
    // create an `<h>` tag with the level or return the `as` prop
    const asProp = () => (local.level ? `h${local.level}` : local.as);
    const rootStyles = createMemo(() => ({
        ...styleOverrides().root,
        ...lineClamp(local.lineClamp),
    }));
    return (<hope.h2 as={asProp()} class={clsx(baseClasses().root, local.class)} __css={rootStyles()} {...others}/>);
});
