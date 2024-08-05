/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/simple-grid.tsx
 */
import { createHopeComponent, mapResponsive, resolveTokenValue, useTheme, } from "@hope-ui/styles";
import { isNull } from "@hope-ui/utils";
import { splitProps } from "solid-js";
import { Grid } from "./grid";
/**
 * `SimpleGrid` uses the `Grid` component and provides a simpler interface to create responsive grid layouts.
 * Provides props that easily define columns and spacing.
 */
export const SimpleGrid = createHopeComponent(props => {
    const [local, others] = splitProps(props, [
        "minChildWidth",
        "columns",
        "spacing",
        "spacingX",
        "spacingY",
    ]);
    const theme = useTheme();
    const templateColumns = () => {
        if (local.minChildWidth) {
            return widthToColumns(local.minChildWidth, theme.vars);
        }
        return countToColumns(local.columns);
    };
    return (<Grid templateColumns={templateColumns()} gap={local.spacing} columnGap={local.spacingX} rowGap={local.spacingY} {...others}/>);
});
function widthToColumns(width, vars) {
    return mapResponsive(width, value => {
        const _value = resolveTokenValue(value, "sizes", vars);
        return isNull(value) ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
    });
}
function countToColumns(count) {
    return mapResponsive(count, value => (isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`));
}
