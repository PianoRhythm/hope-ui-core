/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/icon/src/create-icon.tsx
 */
import { createHopeComponent } from "@hope-ui/styles";
import { Icon } from "./icon";
export function createIcon(options) {
    const { viewBox = "0 0 24 24", defaultProps = {} } = options;
    return createHopeComponent(props => (<Icon viewBox={viewBox} {...defaultProps} {...props}>
      {options.path}
    </Icon>));
}
