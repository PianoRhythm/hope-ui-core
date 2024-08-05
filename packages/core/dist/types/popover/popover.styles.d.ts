import { StyleConfigProps } from "@hope-ui/styles";
export declare type PopoverParts = "root" | "arrow" | "heading" | "description";
export declare const usePopoverStyleConfig: import("@hope-ui/styles").UseStyleConfigFn<PopoverParts, {}>;
export declare type PopoverStyleConfigProps = StyleConfigProps<typeof usePopoverStyleConfig>;
