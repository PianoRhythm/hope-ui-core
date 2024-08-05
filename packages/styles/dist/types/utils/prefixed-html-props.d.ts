import { Dict } from "@hope-ui/utils";
/**
 * A list of valid HTML props that needed to be prefixed because
 * they have same name as some Hope UI styles props.
 *
 * @example
 * <Image htmlWidth="100px"/>
 * =>
 * <img width="100px"/>
 */
export declare const prefixedHTMLPropsMap: Map<string, string>;
/** Get the native HTML attributes from the Hope UI prefixed ones. */
export declare function getNativeHTMLProps(value: Dict): any;
