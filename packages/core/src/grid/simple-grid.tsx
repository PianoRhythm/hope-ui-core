import {
  createPolymorphicComponent,
  mapResponsive,
  resolveTokenValue,
  ResponsiveValue,
  SystemStyleProps,
  Theme,
  useTheme,
} from "@hope-ui/styles";
import { isNull } from "@hope-ui/utils";
import { splitProps } from "solid-js";

import { Grid, GridProps } from "./grid";

function widthToColumns(width: any, theme: Theme) {
  return mapResponsive(width, value => {
    const _value = resolveTokenValue(value, "sizes", theme);
    return isNull(value) ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}

function countToColumns(count: any) {
  return mapResponsive(count, value => (isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`));
}

export interface SimpleGridProps extends GridProps {
  /**
   * The width at which child elements will break into columns.
   * Pass a number for pixel values or a string for any other valid CSS length.
   */
  minChildWidth?: SystemStyleProps["minWidth"];

  /** The number of columns. */
  columns?: ResponsiveValue<number>;
}

/**
 * `SimpleGrid` uses the `Grid` component and provides a simpler interface to create responsive grid layouts.
 * Provides props that easily define columns and spacing.
 */
export const SimpleGrid = createPolymorphicComponent<"div", SimpleGridProps>(props => {
  const [local, others] = splitProps(props, ["minChildWidth", "columns"]);

  const theme = useTheme();

  const templateColumns = () => {
    if (local.minChildWidth) {
      return widthToColumns(local.minChildWidth, theme());
    }

    return countToColumns(local.columns);
  };

  return <Grid templateColumns={templateColumns()} {...others} />;
});
