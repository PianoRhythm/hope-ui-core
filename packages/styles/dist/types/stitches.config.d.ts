import * as Stitches from "@stitches/core";
declare const stitches: import("@stitches/core/types/stitches").default<"hope", {}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>;
export declare const css: <Composers extends (string | import("@stitches/core/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/core/types/util").Function ? Composers[K] : import("@stitches/core/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : never : import("@stitches/core/types/util").WideObject) & {
        css: CSS;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : never : import("@stitches/core/types/util").WideObject;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/core/types/styled-component").CssComponent<import("@stitches/core/types/styled-component").StyledComponentType<Composers>, import("@stitches/core/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/core/types/css").AtRule.FontFace | import("@stitches/core/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/core/types/css").AtRule.Property : import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>; })[]) => () => string, getCssText: () => string, keyframes: (style: {
    [offset: string]: import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
};
export declare type CSSObject = Stitches.CSS<typeof stitches.config>;
export {};
