import { InputGroupStyleConfigProps } from "./input-group.styles";
import { InputSharedProps } from "./types";
export interface InputGroupProps extends Omit<InputGroupStyleConfigProps, "hasLeftSection" | "hasRightSection" | "hasLeftAddon" | "hasRightAddon">, InputSharedProps {
}
export declare const InputGroup: any;
