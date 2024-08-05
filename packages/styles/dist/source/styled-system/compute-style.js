import { css } from "../stitches.config";
import { toCSSObject } from "./to-css-object";
/** Compute system style object and return the generated className. */
export function computeStyle(style, theme) {
    return css(toCSSObject(style, theme))().className;
}
