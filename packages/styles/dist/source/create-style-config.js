/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
import { filterUndefined, isEmptyObject, once, runIfFn } from "@hope-ui/utils";
import { clsx } from "clsx";
import { dset } from "dset/merge";
import { createMemo, splitProps } from "solid-js";
import { computeStyle } from "./styled-system/compute-style";
import { useComponentTheme, useTheme } from "./theme";
import { shouldApplyCompound } from "./utils/should-apply-compound";
/** Compute classNames from a multi-part style config. */
function computeMultiPartStyleConfig(configs, theme) {
    return Object.entries(configs).reduce((acc, [part, config]) => {
        const { baseStyle = {}, variants = {}, compoundVariants = [], } = config;
        acc[part] = {
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
        return acc;
    }, {});
}
/** Create a `useStyleConfig` primitive. */
export function createStyleConfig(interpolation, defaultVariants) {
    let baseConfig;
    let baseConfigResult;
    let themeConfig;
    let themeConfigResult;
    let parts = [];
    let staticClassNames;
    const runOnce = once((name, theme, componentThemeConfig) => {
        // 1. compute base styles.
        baseConfig = runIfFn(interpolation, theme);
        baseConfigResult = computeMultiPartStyleConfig(baseConfig, theme); // force type because we know it's not a partial.
        // 2. compute theme styles, so it will be injected to `head` after base styles.
        themeConfig = runIfFn(componentThemeConfig, theme);
        themeConfigResult = themeConfig && computeMultiPartStyleConfig(themeConfig, theme);
        // 3. get component parts from config.
        parts = Object.keys(baseConfig);
        // 4. create static classNames.
        staticClassNames = Object.fromEntries(parts.map(part => [part, `hope-${name}-${part}`]));
    });
    return function useStyleConfig(name, options) {
        const theme = useTheme();
        const componentTheme = useComponentTheme(name);
        // generate static, base and theme classNames once.
        runOnce(name, theme, componentTheme()?.styleConfigOverride);
        const styleConfigOverride = createMemo(() => {
            return runIfFn(options.styleConfigOverride, theme);
        });
        const selectedVariants = createMemo(() => {
            const [_, variantSelections] = splitProps(options, ["styleConfigOverride", "unstyled"]);
            return {
                ...defaultVariants,
                ...filterUndefined(variantSelections),
            };
        });
        const baseClasses = createMemo(() => {
            return parts.reduce((acc, part) => {
                let baseClassName = "";
                let variantClassNames = {};
                let compoundVariants = [];
                // use base config only if not `unstyled`.
                if (!options.unstyled) {
                    baseClassName = baseConfigResult[part].baseClassName ?? "";
                    variantClassNames = baseConfigResult[part].variantClassNames ?? {};
                    compoundVariants = baseConfigResult[part].compoundVariants ?? [];
                }
                const themeBaseClassName = themeConfigResult?.[part]?.baseClassName ?? "";
                const themeVariantClassNames = themeConfigResult?.[part]?.variantClassNames ?? {};
                const themeCompoundVariants = themeConfigResult?.[part]?.compoundVariants ?? [];
                // 1. add "static" and "base" classNames.
                const classNames = [staticClassNames[part], baseClassName, themeBaseClassName];
                // 2. add "variants" classNames.
                for (const name in selectedVariants()) {
                    const value = selectedVariants()[name];
                    if (value == null) {
                        continue;
                    }
                    classNames.push(variantClassNames[name]?.[String(value)]);
                    classNames.push(themeVariantClassNames[name]?.[String(value)]);
                }
                // 3. add "compound variants" classNames.
                for (const [variants, className] of [...compoundVariants, ...themeCompoundVariants]) {
                    if (shouldApplyCompound(variants, selectedVariants())) {
                        classNames.push(className);
                    }
                }
                acc[part] = clsx(...classNames);
                return acc;
            }, {});
        });
        const styleOverrides = createMemo(() => {
            const configOverrides = styleConfigOverride();
            if (configOverrides == null) {
                return {};
            }
            return parts.reduce((acc, part) => {
                const base = configOverrides[part]?.baseStyle ?? {};
                const variants = configOverrides[part]?.variants ?? {};
                const compoundVariants = configOverrides[part]?.compoundVariants ?? [];
                // 1. add "base" styles.
                acc[part] = base;
                // 2. add "variants" styles.
                for (const name in selectedVariants()) {
                    const value = selectedVariants()[name];
                    if (value == null) {
                        continue;
                    }
                    const style = variants[name]?.[String(value)] ?? {};
                    if (isEmptyObject(style)) {
                        continue;
                    }
                    dset(acc, part, style);
                }
                // 3. add "compound variants" styles.
                for (const compoundVariant of compoundVariants) {
                    if (shouldApplyCompound(compoundVariant.variants, selectedVariants())) {
                        dset(acc, part, compoundVariant.style);
                    }
                }
                return acc;
            }, {});
        });
        return { baseClasses, styleOverrides };
    };
}
