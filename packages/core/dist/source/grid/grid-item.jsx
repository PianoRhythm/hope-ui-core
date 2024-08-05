/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/grid.tsx
 */
import { createHopeComponent, hope, mapResponsive, } from "@hope-ui/styles";
import { filterUndefined } from "@hope-ui/utils";
import { clsx } from "clsx";
import { splitProps } from "solid-js";
/**
 * `GridItem` is used as a child of `Grid` to control the span,
 * start and end positions within the grid.
 */
export const GridItem = createHopeComponent(props => {
    const [local, others] = splitProps(props, [
        "class",
        "area",
        "colSpan",
        "colStart",
        "colEnd",
        "rowSpan",
        "rowStart",
        "rowEnd",
    ]);
    return (<hope.div class={clsx("hope-GridItem-root", local.class)} __css={filterUndefined({
            gridArea: local.area,
            gridColumn: spanFn(local.colSpan),
            gridRow: spanFn(local.rowSpan),
            gridColumnStart: local.colStart,
            gridColumnEnd: local.colEnd,
            gridRowStart: local.rowStart,
            gridRowEnd: local.rowEnd,
        })} {...others}/>);
});
/** Utility function to apply a column or row span to the `GridItem`. */
function spanFn(span) {
    return mapResponsive(span, value => (value === "auto" ? "auto" : `span ${value}/span ${value}`));
}
