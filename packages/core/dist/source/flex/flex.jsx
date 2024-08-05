/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/flex.tsx
 */
import { createHopeComponent, hope } from "@hope-ui/styles";
import { clsx } from "clsx";
import { splitProps } from "solid-js";
/**
 * `Flex` is used to create flexbox layouts.
 * It renders a `div` with `display: flex` and comes with helpful style shorthand.
 */
export const Flex = createHopeComponent(props => {
    const [local, others] = splitProps(props, ["class", "direction", "wrap", "align", "justify"]);
    return (<hope.div class={clsx("hope-Flex-root", local.class)} __css={{
            display: "flex",
            flexDirection: local.direction,
            flexWrap: local.wrap,
            alignItems: local.align,
            justifyContent: local.justify,
        }} {...others}/>);
});
