import { globalCss } from "../stitches.config";
import { COLOR_MODE_CLASSNAMES } from "../utils";
export function injectCSSVars(theme) {
    globalCss({
        ":root": theme.__cssVarsValues.root,
        [`.${COLOR_MODE_CLASSNAMES.dark}`]: theme.__cssVarsValues.dark,
    })();
}
