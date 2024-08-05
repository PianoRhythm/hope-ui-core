import { InputGroupStyleConfigProps } from "./input-group.styles";
import { InputGroupLeftAddon, InputGroupRightAddon } from "./input-group-addon";
import { InputGroupLeftSection, InputGroupRightSection } from "./input-group-section";
import { InputSharedProps } from "./types";
export interface InputGroupProps extends Omit<InputGroupStyleConfigProps, "hasLeftSection" | "hasRightSection" | "hasLeftAddon" | "hasRightAddon">, InputSharedProps {
}
declare type InputGroupComposite = {
    LeftAddon: typeof InputGroupLeftAddon;
    RightAddon: typeof InputGroupRightAddon;
    LeftSection: typeof InputGroupLeftSection;
    RightSection: typeof InputGroupRightSection;
};
export declare const InputGroup: import("@hope-ui/styles").HopeComponent<"div", InputGroupProps> & InputGroupComposite;
export {};
