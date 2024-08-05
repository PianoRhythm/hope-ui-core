/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-tests/src/it-is-polymorphic.tsx
 */
import { Component, ParentComponent } from "solid-js";
export declare function itIsPolymorphic<P>(Comp: Component<P>, requiredProps: P, selector?: string, Wrapper?: ParentComponent): void;
