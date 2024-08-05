/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/stack.tsx
 */
import { createHopeComponent, hope, mapResponsive, } from "@hope-ui/styles";
import { filterUndefined } from "@hope-ui/utils";
import { clsx } from "clsx";
import { splitProps } from "solid-js";
import { mergeDefaultProps } from "../utils";
/**
 * `Stack` makes it easy to stack elements together and apply a space between them.
 */
export const Stack = createHopeComponent(props => {
    props = mergeDefaultProps({ align: "center" }, props);
    const [local, others] = splitProps(props, [
        "class",
        "direction",
        "wrap",
        "align",
        "justify",
        "spacing",
        "spacingX",
        "spacingY",
    ]);
    return (<hope.div class={clsx("hope-Stack-root", local.class)} __css={filterUndefined({
            display: "flex",
            flexDirection: local.direction,
            flexWrap: local.wrap,
            alignItems: local.align,
            justifyContent: local.justify,
            gap: local.spacing,
            columnGap: local.spacingX,
            rowGap: local.spacingY,
        })} {...others}/>);
});
/**
 * `HStack` arranges its children in a horizontal line.
 */
export const HStack = createHopeComponent(props => {
    props = mergeDefaultProps({ reverse: false }, props);
    const [local, others] = splitProps(props, ["reverse"]);
    return (<Stack {...others} direction={mapResponsive(local.reverse, reverse => (reverse ? "row-reverse" : "row"))}/>);
});
/**
 * `VStack` arranges its children in a vertical line.
 */
export const VStack = createHopeComponent(props => {
    props = mergeDefaultProps({ reverse: false }, props);
    const [local, others] = splitProps(props, ["reverse"]);
    return (<Stack {...others} direction={mapResponsive(local.reverse, reverse => (reverse ? "column-reverse" : "column"))}/>);
});
