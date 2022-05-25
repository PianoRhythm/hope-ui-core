import { Property } from "csstype";
import { JSX, mergeProps, ParentProps, Show, splitProps } from "solid-js";

import { useStyleConfig } from "../../hope-provider";
import { SpaceScaleValue, SystemStyleObject } from "../../styled-system/types";
import { classNames, createClassSelector } from "../../utils/css";
import { createComponentWithAs, hope } from "../factory";
import { HTMLHopeProps } from "../types";
import { buttonStyles, ButtonVariants } from "./button.styles";
import { ThemeableButtonGroupOptions, useButtonGroupContext } from "./button-group";
import { ButtonIcon } from "./button-icon";
import { ButtonLoader } from "./button-loader";

export interface ButtonOptions extends ButtonVariants {
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;

  /**
   * The label to show in the button when `loading` is true
   * If no text is passed, it only shows the loader
   */
  loadingText?: string;

  /**
   * Replace the loader component when `loading` is set to `true`
   */
  loader?: JSX.Element;

  /**
   * It determines the placement of the loader when isLoading is true
   */
  loaderPlacement?: "start" | "end";

  /**
   * The space between the button icon and label.
   */
  iconSpacing?: Property.MarginRight<SpaceScaleValue>;

  /**
   * If added, the button will show an icon before the button's label.
   */
  leftIcon?: JSX.Element;

  /**
   * If added, the button will show an icon after the button's label.
   */
  rightIcon?: JSX.Element;
}

export type ThemeableButtonOptions = Pick<
  ButtonOptions,
  "variant" | "colorScheme" | "size" | "loaderPlacement"
>;

export interface ButtonStyleConfig {
  baseStyle?: {
    root?: SystemStyleObject;
    group?: SystemStyleObject;
  };
  defaultProps?: {
    root?: ThemeableButtonOptions;
    group?: ThemeableButtonGroupOptions;
  };
}

type ButtonComponentProps = HTMLHopeProps<"button", ButtonOptions>;

export const hopeButtonClass = "hope-button";

function ButtonComponent(props: ButtonComponentProps) {
  const theme = useStyleConfig().Button;

  const buttonGroupContext = useButtonGroupContext();

  const defaultProps: ButtonComponentProps = {
    loaderPlacement: theme?.defaultProps?.root?.loaderPlacement ?? "start",
    iconSpacing: "0.5rem",
    type: "button",
    role: "button",
  };

  const propsWithDefault: ButtonComponentProps = mergeProps(defaultProps, props);
  const [local, contentProps, others] = splitProps(
    propsWithDefault,
    [
      "class",
      "disabled",
      "loadingText",
      "loader",
      "loaderPlacement",
      "variant",
      "colorScheme",
      "size",
      "loading",
      "compact",
      "fullWidth",
    ],
    ["children", "iconSpacing", "leftIcon", "rightIcon"]
  );

  const disabled = () => local.disabled ?? buttonGroupContext?.state.disabled;

  const classes = () => {
    return classNames(
      local.class,
      hopeButtonClass,
      buttonStyles({
        variant:
          local.variant ??
          buttonGroupContext?.state.variant ??
          theme?.defaultProps?.root?.variant ??
          "solid",
        colorScheme:
          local.colorScheme ??
          buttonGroupContext?.state.colorScheme ??
          theme?.defaultProps?.root?.colorScheme ??
          "primary",
        size:
          local.size ?? buttonGroupContext?.state.size ?? theme?.defaultProps?.root?.size ?? "md",
        loading: local.loading,
        compact: local.compact,
        fullWidth: local.fullWidth,
      })
    );
  };

  return (
    <hope.button
      class={classes()}
      disabled={disabled()}
      __baseStyle={theme?.baseStyle?.root}
      {...others}
    >
      <Show when={local.loading && local.loaderPlacement === "start"}>
        <ButtonLoader
          class="hope-button__loader--start"
          withLoadingText={!!local.loadingText}
          placement="start"
          spacing={contentProps.iconSpacing}
        >
          {local.loader}
        </ButtonLoader>
      </Show>

      <Show when={local.loading} fallback={<ButtonContent {...contentProps} />}>
        <Show
          when={local.loadingText}
          fallback={
            <hope.span opacity={0}>
              <ButtonContent {...contentProps} />
            </hope.span>
          }
        >
          {local.loadingText}
        </Show>
      </Show>

      <Show when={local.loading && local.loaderPlacement === "end"}>
        <ButtonLoader
          class="hope-button__loader--end"
          withLoadingText={!!local.loadingText}
          placement="end"
          spacing={contentProps.iconSpacing}
        >
          {local.loader}
        </ButtonLoader>
      </Show>
    </hope.button>
  );
}

ButtonComponent.toString = () => createClassSelector(hopeButtonClass);

type ButtonContentProps = ParentProps<
  Pick<ButtonOptions, "iconSpacing" | "leftIcon" | "rightIcon">
>;

function ButtonContent(props: ButtonContentProps) {
  return (
    <>
      <Show when={props.leftIcon}>
        <ButtonIcon marginEnd={props.iconSpacing}>{props.leftIcon}</ButtonIcon>
      </Show>
      {props.children}
      <Show when={props.rightIcon}>
        <ButtonIcon marginStart={props.iconSpacing}>{props.rightIcon}</ButtonIcon>
      </Show>
    </>
  );
}

/**
 * The Button component is used to trigger an action or event,
 * such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
export const Button = createComponentWithAs<"button", ButtonOptions>(ButtonComponent);
