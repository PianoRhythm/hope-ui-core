/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */
import { MultiPartStyleConfigInterpolation, StyleConfigVariantSelection, UseStyleConfigFn } from "./types";
/** Create a `useStyleConfig` primitive. */
export declare function createStyleConfig<Parts extends string, Variants extends Record<string, any>>(interpolation: MultiPartStyleConfigInterpolation<Parts, Variants>, defaultVariants?: StyleConfigVariantSelection<Variants>): UseStyleConfigFn<Parts, Variants>;
