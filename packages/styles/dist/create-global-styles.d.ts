import { SystemStyleObject, ThemeVarsAndBreakpoints } from "./types";
declare type GlobalSystemStyleObject = Record<string, SystemStyleObject> & {
    /** The **@import** CSS at-rule imports style rules from other style sheets. */
    "@import"?: string | string[];
    /** The **@font-face** CSS at-rule specifies a custom font with which to display text. */
    "@font-face"?: FontFace | FontFace[];
};
declare type GlobalSystemStyleObjectInterpolation = GlobalSystemStyleObject | ((theme: ThemeVarsAndBreakpoints) => GlobalSystemStyleObject);
/** Create a `useGlobalStyles` primitive. */
export declare function createGlobalStyles(interpolation: GlobalSystemStyleObjectInterpolation): () => void;
export {};
//# sourceMappingURL=create-global-styles.d.ts.map