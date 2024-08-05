/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */
interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}
export declare function toRgba(hexOrRgb: string): RGBA;
export declare function rgbColorChannel(hexOrRgb: string): string;
export {};
