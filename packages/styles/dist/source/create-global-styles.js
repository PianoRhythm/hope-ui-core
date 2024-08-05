import { once, runIfFn } from "@hope-ui/utils";
import { globalCss } from "./stitches.config";
import { toCSSObject } from "./styled-system/to-css-object";
import { useTheme } from "./theme";
/** Create a `useGlobalStyles` primitive. */
export function createGlobalStyles(interpolation) {
    const runOnce = once((theme) => {
        const { "@import": atImport, "@font-face": atFontFace, ...rest } = runIfFn(interpolation, theme);
        const styles = Object.entries(rest).reduce((acc, [selector, systemStyleObject]) => {
            acc[selector] = toCSSObject(systemStyleObject, theme);
            return acc;
        }, {});
        globalCss({
            "@import": atImport ?? [],
            "@font-face": atFontFace ?? {},
            ...styles,
        })();
    });
    return function useGlobalStyles() {
        const theme = useTheme();
        // generate global styles once.
        runOnce(theme);
    };
}
