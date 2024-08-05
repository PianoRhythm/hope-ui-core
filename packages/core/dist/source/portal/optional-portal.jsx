import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
/**
 * `OptionalPortal` lets you configure whether children should be rendered in Portal.
 *  It accepts the same props as `Portal` component.
 */
export function OptionalPortal(props) {
    const [local, others] = splitProps(props, ["children", "withinPortal"]);
    return (<Show when={local.withinPortal} fallback={local.children}>
      <Portal {...others}>{local.children}</Portal>
    </Show>);
}
