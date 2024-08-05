import { ComponentProps } from "solid-js";
import { Portal } from "solid-js/web";
export interface OptionalPortalProps extends ComponentProps<typeof Portal> {
    /** Whether the component should be rendered in a `Portal`. */
    withinPortal?: boolean;
}
/**
 * `OptionalPortal` lets you configure whether children should be rendered in Portal.
 *  It accepts the same props as `Portal` component.
 */
export declare function OptionalPortal(props: OptionalPortalProps): import("solid-js").JSX.Element;
//# sourceMappingURL=optional-portal.d.ts.map