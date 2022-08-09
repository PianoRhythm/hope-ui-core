import { ThemeOverride, ThemeProvider, ThemeProviderProps } from "@hope-ui/styles";
import { mergeProps, splitProps } from "solid-js";

import { ColorModeProvider, ColorModeProviderProps, useColorMode } from "../color-mode";

export type HopeThemeOverride = Omit<ThemeOverride, "colorMode">;

type ThemeProviderWithColorModeProps = Omit<ThemeProviderProps, "theme" | "inherit"> & {
  /** The custom theme to use. */
  theme?: HopeThemeOverride;
};

function ThemeProviderWithColorMode(props: ThemeProviderWithColorModeProps) {
  const [local, others] = splitProps(props, ["theme"]);

  const { colorMode } = useColorMode();

  // We don't care about reactivity here, theme is set once and isn't intended to be dynamic.
  const theme = mergeProps(local.theme, {
    get colorMode() {
      return colorMode();
    },
  });

  return <ThemeProvider theme={theme} {...others} />;
}

export function HopeProvider(props: ColorModeProviderProps & ThemeProviderWithColorModeProps) {
  const [local, others] = splitProps(props, [
    "initialColorMode",
    "storageManager",
    "disableTransitionOnChange",
  ]);

  return (
    <ColorModeProvider
      initialColorMode={local.initialColorMode}
      storageManager={local.storageManager}
      disableTransitionOnChange={local.disableTransitionOnChange}
    >
      <ThemeProviderWithColorMode {...others} />
    </ColorModeProvider>
  );
}
