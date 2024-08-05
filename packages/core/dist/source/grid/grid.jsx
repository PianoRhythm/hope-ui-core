/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/grid.tsx
 */
import { createHopeComponent, hope } from "@hope-ui/styles";
import { clsx } from "clsx";
import { splitProps } from "solid-js";
import { GridItem } from "./grid-item";
/**
 * `Grid` is used to create grid layouts.
 * It renders a `div` with `display: grid` and comes with helpful style shorthand.
 */
export const Grid = createHopeComponent(props => {
    const [local, others] = splitProps(props, [
        "class",
        "autoFlow",
        "autoColumns",
        "autoRows",
        "templateAreas",
        "templateColumns",
        "templateRows",
    ]);
    return (<hope.div class={clsx("hope-Grid-root", local.class)} __css={{
            display: "grid",
            gridAutoFlow: local.autoFlow,
            gridAutoColumns: local.autoColumns,
            gridAutoRows: local.autoRows,
            gridTemplateAreas: local.templateAreas,
            gridTemplateColumns: local.templateColumns,
            gridTemplateRows: local.templateRows,
        }} {...others}/>);
});
Grid.Item = GridItem;
