/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/aria-modal-polyfill/src/index.ts
 *
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-focus-trap/create-aria-hider.ts
 */
declare type Revert = () => void;
/**
 * Polyfill for `aria-modal`, watch for added modals and hide any surrounding DOM elements with `aria-hidden`.
 */
export declare function watchModals(selector?: string, { document }?: {
    document?: Document | undefined;
}): Revert;
export {};
//# sourceMappingURL=watch-modals.d.ts.map