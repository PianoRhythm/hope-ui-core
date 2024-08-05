/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */
import { ColorMode } from "@hope-ui/styles";
import { ColorModeStorageManager } from "./types";
export declare function setColorModeClassName(isDark: boolean): void;
export declare function setColorModeDataset(value: ColorMode, shouldPreventTransition?: boolean): void;
export declare function getSystemColorMode(fallback?: ColorMode): ColorMode;
export declare function getInitialColorMode(manager: ColorModeStorageManager): ColorMode;
export declare function addColorModeListener(fn: (cm: ColorMode) => unknown): () => void;
