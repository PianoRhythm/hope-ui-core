/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/icon/src/create-icon.tsx
 */
import { JSX } from "solid-js";
import { IconProps } from "./icon";
interface CreateIconOptions {
    /**
     * The icon `svg` viewBox.
     * @default "0 0 24 24"
     */
    viewBox?: string;
    /** A function that return the `svg` path or group element. */
    path: () => JSX.Element | JSX.Element[];
    /** Default props automatically passed to the component. */
    defaultProps?: IconProps;
}
export declare function createIcon(options: CreateIconOptions): any;
export {};
