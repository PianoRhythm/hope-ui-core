/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/pseudos.ts
 */
import { COLOR_MODE_CLASSNAMES } from "../utils";
const state = {
    hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
    focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
    focusVisible: (str, post) => `${str}:focus-visible ${post}`,
    focusWithin: (str, post) => `${str}:focus-within ${post}`,
    active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
    disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
    invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
    checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
    indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
    readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
    expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
    placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`,
};
function toGroup(fn) {
    return merge(v => fn(v, "&"), "[role=group]", "[data-group]", ".group");
}
function toPeer(fn) {
    return merge(v => fn(v, "~ &"), "[data-peer]", ".peer");
}
function merge(fn, ...selectors) {
    return selectors.map(fn).join(", ");
}
export const LIGHT_PSEUDO_PROP = "_light";
export const DARK_PSEUDO_PROP = "_dark";
export const LIGHT_SELECTOR = `.${COLOR_MODE_CLASSNAMES.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`;
export const DARK_SELECTOR = `.${COLOR_MODE_CLASSNAMES.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`;
/** Map system style pseudo props to css pseudo selectors. */
export const PSEUDO_SELECTORS_MAP = new Map([
    ["_hover", "&:hover, &[data-hover]"],
    ["_active", "&:active, &[data-active]"],
    ["_focus", "&:focus, &[data-focus]"],
    ["_highlighted", "&[data-highlighted]"],
    ["_focusWithin", "&:focus-within"],
    ["_focusVisible", "&:focus-visible, &[data-focus-visible]"],
    ["_disabled", "&[disabled], &[aria-disabled=true], &[data-disabled]"],
    ["_readOnly", "&[aria-readonly=true], &[readonly], &[data-readonly]"],
    ["_before", "&::before"],
    ["_after", "&::after"],
    ["_empty", "&:empty"],
    ["_expanded", "&[aria-expanded=true], &[data-expanded]"],
    ["_checked", "&[aria-checked=true], &[data-checked]"],
    ["_grabbed", "&[aria-grabbed=true], &[data-grabbed]"],
    ["_pressed", "&[aria-pressed=true], &[data-pressed]"],
    ["_invalid", "&[aria-invalid=true], &[data-invalid]"],
    ["_valid", "&[data-valid], &[data-state=valid]"],
    ["_loading", "&[data-loading], &[aria-busy=true]"],
    ["_selected", "&[aria-selected=true], &[data-selected]"],
    ["_hidden", "&[hidden], &[data-hidden]"],
    ["_autofill", "&:-webkit-autofill"],
    ["_even", "&:nth-of-type(even)"],
    ["_odd", "&:nth-of-type(odd)"],
    ["_first", "&:first-child"],
    ["_last", "&:last-child"],
    ["_notFirst", "&:not(:first-child)"],
    ["_notLast", "&:not(:last-child)"],
    ["_visited", "&:visited"],
    ["_activeLink", "&[aria-current=page]"],
    ["_activeStep", "&[aria-current=step]"],
    ["_indeterminate", "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]"],
    ["_groupHover", toGroup(state.hover)],
    ["_peerHover", toPeer(state.hover)],
    ["_groupFocus", toGroup(state.focus)],
    ["_peerFocus", toPeer(state.focus)],
    ["_groupFocusVisible", toGroup(state.focusVisible)],
    ["_peerFocusVisible", toPeer(state.focusVisible)],
    ["_groupActive", toGroup(state.active)],
    ["_peerActive", toPeer(state.active)],
    ["_groupDisabled", toGroup(state.disabled)],
    ["_peerDisabled", toPeer(state.disabled)],
    ["_groupInvalid", toGroup(state.invalid)],
    ["_peerInvalid", toPeer(state.invalid)],
    ["_groupChecked", toGroup(state.checked)],
    ["_peerChecked", toPeer(state.checked)],
    ["_groupFocusWithin", toGroup(state.focusWithin)],
    ["_peerFocusWithin", toPeer(state.focusWithin)],
    ["_peerPlaceholderShown", toPeer(state.placeholderShown)],
    ["_placeholder", "&::placeholder"],
    ["_placeholderShown", "&:placeholder-shown"],
    ["_fullScreen", "&:fullscreen"],
    ["_selection", "&::selection"],
    ["_rtl", "[dir=rtl] &, &[dir=rtl]"],
    ["_ltr", "[dir=ltr] &, &[dir=ltr]"],
    ["_mediaDark", "@media (prefers-color-scheme: dark)"],
    ["_mediaReduceMotion", "@media (prefers-reduced-motion: reduce)"],
    [LIGHT_PSEUDO_PROP, LIGHT_SELECTOR],
    [DARK_PSEUDO_PROP, DARK_SELECTOR],
]);
/** Map system style shorthands props to css properties. */
export const SHORTHANDS_MAP = new Map([
    // border
    ["borderX", ["borderRight", "borderLeft"]],
    ["borderY", ["borderTop", "borderBottom"]],
    // color
    ["bg", ["background"]],
    ["bgColor", ["backgroundColor"]],
    // layout
    ["d", ["display"]],
    // margin
    ["marginStart", ["marginInlineStart"]],
    ["marginEnd", ["marginInlineEnd"]],
    ["m", ["margin"]],
    ["mt", ["marginTop"]],
    ["mr", ["marginRight"]],
    ["me", ["marginInlineEnd"]],
    ["mb", ["marginBottom"]],
    ["ml", ["marginLeft"]],
    ["ms", ["marginInlineStart"]],
    ["mx", ["marginInlineStart", "marginInlineEnd"]],
    ["my", ["marginTop", "marginBottom"]],
    // padding
    ["paddingStart", ["paddingInlineStart"]],
    ["paddingEnd", ["paddingInlineEnd"]],
    ["p", ["padding"]],
    ["pt", ["paddingTop"]],
    ["pr", ["paddingRight"]],
    ["pe", ["paddingInlineEnd"]],
    ["pb", ["paddingBottom"]],
    ["pl", ["paddingLeft"]],
    ["ps", ["paddingInlineStart"]],
    ["px", ["paddingInlineStart", "paddingInlineEnd"]],
    ["py", ["paddingTop", "paddingBottom"]],
    // position
    ["pos", ["position"]],
    // radii
    ["borderTopRadius", ["borderTopLeftRadius", "borderTopRightRadius"]],
    ["borderRightRadius", ["borderTopRightRadius", "borderBottomRightRadius"]],
    ["borderBottomRadius", ["borderBottomRightRadius", "borderBottomLeftRadius"]],
    ["borderLeftRadius", ["borderTopLeftRadius", "borderBottomLeftRadius"]],
    ["rounded", ["borderRadius"]],
    ["roundedTop", ["borderTopLeftRadius", "borderTopRightRadius"]],
    ["roundedRight", ["borderTopRightRadius", "borderBottomRightRadius"]],
    ["roundedBottom", ["borderBottomRightRadius", "borderBottomLeftRadius"]],
    ["roundedLeft", ["borderTopLeftRadius", "borderBottomLeftRadius"]],
    // shadow
    ["shadow", ["boxShadow"]],
    // size
    ["w", ["width"]],
    ["minW", ["minWidth"]],
    ["maxW", ["maxWidth"]],
    ["h", ["height"]],
    ["minH", ["minHeight"]],
    ["maxH", ["maxHeight"]],
    ["boxSize", ["width", "height"]],
]);
