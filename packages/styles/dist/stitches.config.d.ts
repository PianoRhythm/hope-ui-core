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
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/core/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/core/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "variants" | "compoundVariants" | "defaultVariants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/core/types/styled-component").CssComponent<import("@stitches/core/types/styled-component").StyledComponentType<Composers>, import("@stitches/core/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@@font-face" ? import("@stitches/core/types/css").AtRule.FontFace | import("@stitches/core/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>;
} : K extends `@property ${string}` ? import("@stitches/core/types/css").AtRule.Property : import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>; })[]) => () => string, getCssText: () => string, keyframes: (style: {
    [offset: string]: import("@stitches/core/types/css-util").CSS<{}, {}, import("@stitches/core/types/config").DefaultThemeMap, {}>;
}) => {
    (): string;
    name: string;
};
export declare type CSSObject = Stitches.CSS<typeof stitches.config>;
export {};
//# sourceMappingURL=stitches.config.d.ts.map