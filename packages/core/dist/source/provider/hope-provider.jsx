import { ThemeProvider } from "@hope-ui/styles";
import { splitProps } from "solid-js";
import { ColorModeProvider } from "../color-mode";
import { watchModals } from "../modal";
import { mergeDefaultProps } from "../utils";
export function HopeProvider(props) {
    watchModals();
    props = mergeDefaultProps({ withCssReset: true }, props);
    const [local, others] = splitProps(props, [
        "initialColorMode",
        "storageManager",
        "disableTransitionOnChange",
    ]);
    return (<ColorModeProvider initialColorMode={local.initialColorMode} storageManager={local.storageManager} disableTransitionOnChange={local.disableTransitionOnChange}>
      <ThemeProvider {...others}/>
    </ColorModeProvider>);
}
