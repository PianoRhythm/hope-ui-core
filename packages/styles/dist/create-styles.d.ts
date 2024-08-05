/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
import { Accessor } from "solid-js";
import { BooleanMap, SystemStyleObject, Theme, ThemeVarsAndBreakpoints } from "./types";
declare type HopeVariantDefinitions = Record<string, SystemStyleObject>;
export declare type HopeVariantGroups = Record<string, HopeVariantDefinitions>;
export declare type HopeVariantSelection<Variants extends HopeVariantGroups> = {
    [VariantGroup in keyof Variants]?: BooleanMap<keyof Variants[VariantGroup]>;
};
interface HopeCompoundVariant<Variants extends HopeVariantGroups> {
    /** The combined variants that should apply the style. */
    variants: HopeVariantSelection<Variants>;
    /** The style to be applied. */
    style: SystemStyleObject;
}
export interface HopeStyleOptions<Variants extends HopeVariantGroups> {
    /** The base style. */
    baseStyle?: SystemStyleObject;
    /**
     * The variants style.
     * Each variant will become a `prop` of the component.
     */
    variants?: Variants;
    /** The combined variants style. */
    compoundVariants?: Array<HopeCompoundVariant<Variants>>;
    /** The default value for each variant. */
    defaultVariants?: HopeVariantSelection<Variants>;
}
export declare type HopeStyleOptionsInterpolation<Variants extends HopeVariantGroups> = HopeStyleOptions<Variants> | ((theme: ThemeVarsAndBreakpoints) => HopeStyleOptions<Variants>);
export declare type HopeStyleResult<Variants extends HopeVariantGroups> = {
    baseClassName: string;
    variantClassNames: {
        [K in keyof Variants]: {
            [V in keyof Variants[K]]: string;
        };
    };
    compoundVariants: Array<[HopeVariantSelection<Variants>, string]>;
};
declare type UseStylesFn<Variants extends HopeVariantGroups> = (variantProps?: HopeVariantSelection<Variants>) => Accessor<string>;
/** Extract the variant props type of `useStyles` primitive. */
export declare type HopeVariantProps<T extends UseStylesFn<any>> = Parameters<T>[0];
/** Compute classNames from a hope style options. */
export declare function computeStyleOptions<Variants extends HopeVariantGroups>(options: HopeStyleOptions<Variants>, theme: Theme): HopeStyleResult<Variants>;
/** Get the variants classNames of selected variants. */
export declare function getSelectedVariantClassNames<Variants extends HopeVariantGroups>(styleResult: HopeStyleResult<Variants>, selectedVariants: HopeVariantSelection<Variants>): Array<string>;
/** Create a `useStyles` primitive. */
export declare function createStyles<Variants extends HopeVariantGroups = {}>(interpolation: HopeStyleOptionsInterpolation<Variants>): UseStylesFn<Variants>;
export {};
//# sourceMappingURL=create-styles.d.ts.map