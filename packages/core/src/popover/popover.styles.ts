import { createStyleConfig, StyleConfigProps } from "@hope-ui/styles";

export type PopoverParts = "root" | "arrow" | "heading" | "description";

export const usePopoverStyleConfig = createStyleConfig<PopoverParts, {}>(theme => ({
  root: {
    baseStyle: {
      zIndex: "popover",
      // Default `position`, `top` and `left` values required by @floating-ui/dom,
      // see https://floating-ui.com/docs/computeposition#usage
      position: "absolute",
      top: 0,
      left: 0,

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      width: "100%",

      outline: "none",

      boxShadow: "md",
      border: `1px solid ${theme.vars.colors.neutral["300"]}`,
      borderColor: { dark: "neutral.600" },
      borderRadius: "sm",
      backgroundColor: { light: "common.white", dark: "neutral.700" },

      color: "inherit",

      _focus: {
        outline: "none",
      },
    },
  },
  arrow: {
    baseStyle: {
      position: "absolute",
      boxSize: "1em",
      pointerEvents: "none",

      "& svg": {
        stroke: "neutral.300",
        fill: "common.white",
      },

      _dark: {
        "& svg": {
          stroke: "neutral.600",
          fill: "neutral.700",
        },
      },
    },
  },
  heading: {},
  description: {},
}));

export type PopoverStyleConfigProps = StyleConfigProps<typeof usePopoverStyleConfig>;
