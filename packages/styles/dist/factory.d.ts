/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/system/src/factory.ts
 *
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/types.ts
 */
import { DOMElements, ElementType } from "@hope-ui/utils";
import { HopeComponent } from "./create-hope-component";
import { HopeStyleOptionsInterpolation, HopeVariantGroups, HopeVariantSelection } from "./create-styles";
/**
 * All html and svg elements for hope components.
 * This is mostly for `hope.<element>` syntax.
 */
declare type HTMLHopeComponents = {
    [Tag in DOMElements]: HopeComponent<Tag>;
};
/**
 * Create a `styled` component capable of using Hope UI `system style` props.
 * @param component The component/html element to render.
 * @param styleInterpolation The styles to apply.
 * @param staticClassName A static className for the component, used as a css selector.
 */
declare function styled<T extends ElementType, Variants extends HopeVariantGroups = {}>(component: T, styleInterpolation?: HopeStyleOptionsInterpolation<Variants>, staticClassName?: string): HopeComponent<T, HopeVariantSelection<Variants>>;
export declare const hope: typeof styled & HTMLHopeComponents;
export {};
//# sourceMappingURL=factory.d.ts.map