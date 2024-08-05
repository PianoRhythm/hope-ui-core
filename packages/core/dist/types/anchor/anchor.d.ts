/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/layout/src/link.tsx
 */
import { AnchorStyleConfigProps } from "./anchor.styles";
export interface AnchorProps extends AnchorStyleConfigProps {
    /** Whether the link should be opened in a new tab. */
    isExternal?: boolean;
}
/**
 * Anchors are accessible elements used primarily for navigation.
 * This component is styled to resemble a hyperlink and semantically renders an <a>.
 */
export declare const Anchor: import("@hope-ui/styles").HopeComponent<"a", AnchorProps>;
