/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
import { filterUndefined, once, runIfFn } from "@hope-ui/utils";
import { clsx } from "clsx";
import { createMemo } from "solid-js";
import { computeStyle } from "./styled-system/compute-style";
import { useTheme } from "./theme";
import { shouldApplyCompound } from "./utils/should-apply-compound";
/** Compute classNames from a hope style options. */
export function computeStyleOptions(options, theme) {
    const { baseStyle = {}, variants = {}, compoundVariants = [] } = options;
    return {
        baseClassName: computeStyle(baseStyle, theme),
        variantClassNames: Object.entries(variants).reduce((acc, [variant, definition]) => {
            // a variant (ex: "size")
            acc[variant] = Object.entries(definition).reduce((acc, [value, style]) => {
                // a variant value (ex: "sm")
                acc[value] = computeStyle(style, theme);
                return acc;
            }, {});
            return acc;
        }, {}),
        compoundVariants: compoundVariants.map(compoundVariant => [
            compoundVariant.variants,
            computeStyle(compoundVariant.style, theme),
        ]),
    };
}
/** Get the variants classNames of selected variants. */
export function getSelectedVariantClassNames(styleResult, selectedVariants) {
    const { variantClassNames = {}, compoundVariants = [] } = styleResult;
    const classNames = [];
    // 1. add "variants" classNames.
    for (const name in selectedVariants) {
        const value = selectedVariants[name];
        if (value == null) {
            continue;
        }
        classNames.push(variantClassNames[name]?.[String(value)]);
    }
    // 2. add "compound variants" classNames.
    for (const [variants, className] of compoundVariants) {
        if (shouldApplyCompound(variants, selectedVariants)) {
            classNames.push(className);
        }
    }
    return classNames;
}
/** Create a `useStyles` primitive. */
export function createStyles(interpolation) {
    let styleOptions;
    let styleResult;
    const runOnce = once((theme) => {
        styleOptions = runIfFn(interpolation, theme);
        styleResult = computeStyleOptions(styleOptions, theme);
    });
    return function useStyles(variantProps = {}) {
        const theme = useTheme();
        // generate classNames once.
        runOnce(theme);
        const classes = createMemo(() => {
            if (styleOptions == null || styleResult == null) {
                return "";
            }
            const selectedVariants = {
                ...styleOptions.defaultVariants,
                ...filterUndefined(variantProps),
            };
            const variantClassNames = getSelectedVariantClassNames(styleResult, selectedVariants);
            return clsx(styleResult.baseClassName, variantClassNames);
        });
        return classes;
    };
}
