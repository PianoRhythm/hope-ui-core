import { accessWith, access, isIOS, chain, getScrollParent, stringOrUndefined, isString } from '@hope-ui/utils';
import { createSignal, createMemo, untrack, createEffect, onCleanup, on, mergeProps } from 'solid-js';
import { createMediaQuery } from '@solid-primitives/media';
import { isServer } from 'solid-js/web';

/**
 * Creates a simple reactive state with a getter and setter,
 * that can be controlled with `value` and `onChange` props.
 */
function createControllableSignal(props) {
  // Internal uncontrolled value
  // eslint-disable-next-line solid/reactivity
  const [_value, _setValue] = createSignal(props.defaultValue?.());
  const isControlled = createMemo(() => props.value?.() !== undefined);
  const value = createMemo(() => isControlled() ? props.value?.() : _value());
  const setValue = next => {
    untrack(() => {
      const nextValue = accessWith(next, value());
      if (!Object.is(nextValue, value())) {
        if (!isControlled()) {
          _setValue(nextValue);
        }
        props.onChange?.(nextValue);
      }
      return nextValue;
    });
  };
  return [value, setValue];
}

/**
 * Creates a simple reactive boolean state with a getter, setter and a fallback value of `false`,
 * that can be controlled with `value` and `onChange` props.
 */
function createControllableBooleanSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => _value() ?? false;
  return [value, setValue];
}

/**
 * Creates a simple reactive array state with a getter, setter and a fallback value of `[]`,
 * that can be controlled with `value` and `onChange` props.
 */
function createControllableArraySignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => _value() ?? [];
  return [value, setValue];
}

/**
 * Provides state management for open, close and toggle scenarios.
 * Used to control the "open state" of components like Modal, Drawer, etc.
 */
function createDisclosure(props = {}) {
  const [isOpen, setIsOpen] = createControllableBooleanSignal({
    value: () => access(props.isOpen),
    defaultValue: () => !!access(props.defaultIsOpen),
    onChange: value => props.onOpenChange?.(value)
  });
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    isOpen() ? close() : open();
  };
  return {
    isOpen,
    open,
    close,
    toggle
  };
}

/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/interactions/src/useInteractOutside.ts
 */
/**
 * Handles interaction outside a given element.
 * Used in components like Dialogs and Popovers, so they can close when a user clicks outside them.
 * @param props - Props of the primitive.
 * @param ref - A ref for the HTML element.
 */
function createInteractOutside(props, ref) {
  const [isPointerDown, setIsPointerDown] = createSignal(false);
  createEffect(() => {
    if (access(props.isDisabled)) {
      return;
    }
    const onPointerDown = e => {
      if (isInteractOutsideEvent(e, ref())) {
        props.onInteractOutsideStart?.(e);
        setIsPointerDown(true);
      }
    };
    const onPointerUp = e => {
      if (isPointerDown() && isInteractOutsideEvent(e, ref())) {
        setIsPointerDown(false);
        props.onInteractOutside?.(e);
      }
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("pointerup", onPointerUp, true);
    onCleanup(() => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("pointerup", onPointerUp, true);
    });
  });
}

/**
 * Returns whether the event is a valid interact outside event
 * (e.g. the event target is outside the element).
 */
function isInteractOutsideEvent(event, element) {
  if (event.button > 0) {
    return false;
  }

  // if the event target is no longer in the document
  if (event.target) {
    const ownerDocument = event.target.ownerDocument;
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) {
      return false;
    }
  }
  return !element?.contains(event.target);
}

/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/892d41e82dc781fb4651455d0e29c324376659ed/packages/@react-aria/overlays/src/usePreventScroll.ts
 */
const visualViewport = typeof window !== "undefined" && window.visualViewport;

// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */
function createPreventScroll(options) {
  createEffect(on(() => access(options.isEnabled), isEnabled => {
    if (!isEnabled) {
      return;
    }
    if (isIOS()) {
      onCleanup(preventScrollMobileSafari());
    } else {
      onCleanup(preventScrollStandard());
    }
  }));
}

// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function preventScrollStandard() {
  return chain([setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), setStyle(document.documentElement, "overflow", "hidden")]);
}

// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function preventScrollMobileSafari() {
  let scrollable;
  let lastY = 0;
  const onTouchStart = e => {
    // Store the nearest scrollable parent element from the element that the user touched.
    scrollable = getScrollParent(e.target);
    if (scrollable === document.documentElement && scrollable === document.body) {
      return;
    }
    lastY = e.changedTouches[0].pageY;
  };
  const onTouchMove = e => {
    // Prevent scrolling the window.
    if (scrollable === document.documentElement || scrollable === document.body) {
      e.preventDefault();
      return;
    }

    // Prevent scrolling up when at the top and scrolling down when at the bottom
    // of a nested scrollable area, otherwise mobile Safari will start scrolling
    // the window instead. Unfortunately, this disables bounce scrolling when at
    // the top, but it's the best we can do.
    const y = e.changedTouches[0].pageY;
    const scrollTop = scrollable.scrollTop;
    const bottom = scrollable.scrollHeight - scrollable.clientHeight;
    if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) {
      e.preventDefault();
    }
    lastY = y;
  };
  const onTouchEnd = e => {
    const target = e.target;

    // Apply this change if we're not already focused on the target element
    if (willOpenKeyboard(target) && target !== document.activeElement) {
      e.preventDefault();

      // Apply a transform to trick Safari into thinking the input is at the top of the page,
      // so it doesn't try to scroll it into view. When tapping on an input, this needs to
      // be done before the "focus" event, so we have to focus the element ourselves.
      target.style.transform = "translateY(-2000px)";
      target.focus();
      requestAnimationFrame(() => {
        target.style.transform = "";
      });
    }
  };
  const onFocus = e => {
    const target = e.target;
    if (willOpenKeyboard(target)) {
      // Transform also needs to be applied in the focus event in cases where focus moves
      // other than tapping on an input directly, e.g. the next/previous buttons in the
      // software keyboard. In these cases, it seems applying the transform in the focus event
      // is good enough, whereas when tapping an input, it must be done before the focus event.
      target.style.transform = "translateY(-2000px)";
      requestAnimationFrame(() => {
        target.style.transform = "";

        // This will have prevented the browser from scrolling the focused element into view,
        // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
        if (visualViewport) {
          if (visualViewport.height < window.innerHeight) {
            // If the keyboard is already visible, do this after one additional frame
            // to wait for the transform to be removed.
            requestAnimationFrame(() => {
              scrollIntoView(target);
            });
          } else {
            // Otherwise, wait for the visual viewport to resize before scrolling, so we can
            // measure the correct position to scroll to.
            visualViewport.addEventListener("resize", () => scrollIntoView(target), {
              once: true
            });
          }
        }
      });
    }
  };
  const onWindowScroll = () => {
    // Last resort. If the window scrolled, scroll it back to the top.
    // It should always be at the top because the body will have a negative margin (see below).
    window.scrollTo(0, 0);
  };

  // Record the original scroll position, so we can restore it.
  // Then apply a negative margin to the body to offset it by the scroll position. This will
  // enable us to scroll the window to the top, which is required for the rest of this to work.
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  const restoreStyles = chain([setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), setStyle(document.documentElement, "overflow", "hidden"), setStyle(document.body, "marginTop", `-${scrollY}px`)]);

  // Scroll to the top. The negative margin on the body will make this appear the same.
  window.scrollTo(0, 0);
  const removeEvents = chain([addEvent(document, "touchstart", onTouchStart, {
    passive: false,
    capture: true
  }), addEvent(document, "touchmove", onTouchMove, {
    passive: false,
    capture: true
  }), addEvent(document, "touchend", onTouchEnd, {
    passive: false,
    capture: true
  }), addEvent(document, "focus", onFocus, true), addEvent(window, "scroll", onWindowScroll)]);
  return () => {
    // Restore styles and scroll the page back to where it was.
    restoreStyles();
    removeEvents();
    window.scrollTo(scrollX, scrollY);
  };
}

/**
 * Sets a CSS property on an element, and returns a function to revert it to the previous value.
 */
function setStyle(element, style, value) {
  const cur = element.style[style];
  element.style[style] = value;
  return () => {
    element.style[style] = cur;
  };
}

/**
 * Adds an event listener to an element, and returns a function to remove it.
 */
function addEvent(target, event, handler, options) {
  target.addEventListener(event, handler, options);
  return () => {
    target.removeEventListener(event, handler, options);
  };
}
function scrollIntoView(target) {
  const root = document.scrollingElement || document.documentElement;
  while (target && target !== root) {
    // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
    const scrollable = getScrollParent(target);
    if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
      const scrollableTop = scrollable.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      if (targetTop > scrollableTop + target.clientHeight) {
        scrollable.scrollTop += targetTop - scrollableTop;
      }
    }
    target = scrollable.parentElement;
  }
}
function willOpenKeyboard(target) {
  return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}

/**
 * Detects if user prefers to reduce motion.
 */
function createReducedMotion(fallbackState, watchChange) {
  return createMediaQuery("(prefers-reduced-motion: reduce)", fallbackState, watchChange);
}

/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */

/**
 * Returns the tag name by parsing an element ref and the `as` prop.
 * @example
 * function Component(props) {
 *   let ref: HTMLDivElement | undefined;
 *   const tagName = createTagName(() => ref, () => "button"); // div
 *   return <div ref={ref} {...props} />;
 * }
 */
function createTagName(ref, type) {
  const [tagName, setTagName] = createSignal(stringOrUndefined(type?.()));
  createEffect(() => {
    setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(type?.()));
  });
  return tagName;
}

/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/transitions.ts
 */

const popIn = {
  in: {
    opacity: 1,
    transform: "scale(1)"
  },
  out: {
    opacity: 0,
    transform: "scale(0.9) translateY(10px)"
  }
};
const DEFAULT_TRANSITIONS = {
  fade: {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  },
  scale: {
    in: {
      opacity: 1,
      transform: "scale(1)"
    },
    out: {
      opacity: 0,
      transform: "scale(0)"
    },
    common: {
      "transform-origin": "top"
    }
  },
  "scale-y": {
    in: {
      opacity: 1,
      transform: "scaleY(1)"
    },
    out: {
      opacity: 0,
      transform: "scaleY(0)"
    },
    common: {
      "transform-origin": "top"
    }
  },
  "scale-x": {
    in: {
      opacity: 1,
      transform: "scaleX(1)"
    },
    out: {
      opacity: 0,
      transform: "scaleX(0)"
    },
    common: {
      "transform-origin": "left"
    }
  },
  "skew-up": {
    in: {
      opacity: 1,
      transform: "translateY(0) skew(0deg, 0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(-20px) skew(-10deg, -5deg)"
    },
    common: {
      "transform-origin": "top"
    }
  },
  "skew-down": {
    in: {
      opacity: 1,
      transform: "translateY(0) skew(0deg, 0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(20px) skew(-10deg, -5deg)"
    },
    common: {
      "transform-origin": "bottom"
    }
  },
  "rotate-left": {
    in: {
      opacity: 1,
      transform: "translateY(0) rotate(0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(20px) rotate(-5deg)"
    },
    common: {
      "transform-origin": "bottom"
    }
  },
  "rotate-right": {
    in: {
      opacity: 1,
      transform: "translateY(0) rotate(0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(20px) rotate(5deg)"
    },
    common: {
      "transform-origin": "top"
    }
  },
  "slide-down": {
    in: {
      opacity: 1,
      transform: "translateY(0)"
    },
    out: {
      opacity: 0,
      transform: "translateY(-100%)"
    },
    common: {
      "transform-origin": "top"
    }
  },
  "slide-up": {
    in: {
      opacity: 1,
      transform: "translateY(0)"
    },
    out: {
      opacity: 0,
      transform: "translateY(100%)"
    },
    common: {
      "transform-origin": "bottom"
    }
  },
  "slide-left": {
    in: {
      opacity: 1,
      transform: "translateX(0)"
    },
    out: {
      opacity: 0,
      transform: "translateX(100%)"
    },
    common: {
      "transform-origin": "left"
    }
  },
  "slide-right": {
    in: {
      opacity: 1,
      transform: "translateX(0)"
    },
    out: {
      opacity: 0,
      transform: "translateX(-100%)"
    },
    common: {
      "transform-origin": "right"
    }
  },
  pop: {
    ...popIn,
    common: {
      "transform-origin": "center center"
    }
  },
  "pop-bottom-left": {
    ...popIn,
    common: {
      "transform-origin": "bottom left"
    }
  },
  "pop-bottom-right": {
    ...popIn,
    common: {
      "transform-origin": "bottom right"
    }
  },
  "pop-top-left": {
    ...popIn,
    out: {
      opacity: 0,
      transform: "scale(0.9) translateY(-10px)"
    },
    common: {
      "transform-origin": "top left"
    }
  },
  "pop-top-right": {
    ...popIn,
    out: {
      opacity: 0,
      transform: "scale(0.9) translateY(-10px)"
    },
    common: {
      "transform-origin": "top right"
    }
  }
};
const DEFAULT_TRANSITIONS_NAMES = Object.keys(DEFAULT_TRANSITIONS);

/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/get-transition-styles/get-transition-styles.ts
 */
const TRANSITION_PHASES_MAP = {
  beforeEnter: "out",
  enter: "in",
  afterEnter: "in",
  beforeExit: "in",
  //"out",
  exit: "out",
  afterExit: "out"
};
function getTransitionStyles(params) {
  const shared = {
    "transition-duration": `${params.duration}ms`,
    "transition-timing-function": params.easing
  };
  if (isString(params.transition)) {
    if (!(params.transition in DEFAULT_TRANSITIONS)) {
      return {};
    }
    const transitionStyles = DEFAULT_TRANSITIONS[params.transition];
    return {
      "transition-property": getTransitionProperty(transitionStyles),
      ...shared,
      ...transitionStyles.common,
      ...transitionStyles[TRANSITION_PHASES_MAP[params.phase]]
    };
  }
  return {
    "transition-property": getTransitionProperty(params.transition),
    ...shared,
    ...params.transition.common,
    ...params.transition[TRANSITION_PHASES_MAP[params.phase]]
  };
}
function getTransitionProperty(transitionStyles) {
  return [...new Set([...Object.keys(transitionStyles.in), ...Object.keys(transitionStyles.out)])].join(", ");
}

/*!
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-core/src/Transition/use-transition.ts
 */
const DEFAULT_DURATION = 250;
const DEFAULT_DELAY = 10;
const DEFAULT_EASING = "ease";

/**
 * Primitive for working with enter/exit transitions.
 * It comes with pre-made transitions and option to create custom ones.
 *
 * @param shouldMount Whether the component should be mounted.
 * @param options The transition options.
 */
function createTransition(shouldMount, options) {
  options = mergeProps({
    transition: "fade",
    duration: DEFAULT_DURATION,
    delay: DEFAULT_DELAY,
    easing: DEFAULT_EASING,
    get exitDuration() {
      return access(options).duration || DEFAULT_DURATION;
    },
    get exitDelay() {
      return access(options).delay || DEFAULT_DELAY;
    },
    get exitEasing() {
      return access(options).easing || DEFAULT_EASING;
    }
  }, options);
  const reduceMotion = createReducedMotion();
  const [duration, setDuration] = createSignal(reduceMotion() ? 0 : access(options).duration);
  const [phase, setPhase] = createSignal(access(shouldMount) ? "afterEnter" : "afterExit");
  const [easing, setEasing] = createSignal(access(options).easing);
  let timeoutId = -1;
  const handleStateChange = shouldMount => {
    const preHandler = shouldMount ? access(options).onBeforeEnter : access(options).onBeforeExit;
    const postHandler = shouldMount ? access(options).onAfterEnter : access(options).onAfterExit;
    setPhase(shouldMount ? "beforeEnter" : "beforeExit");
    window.clearTimeout(timeoutId);
    const newDuration = setDuration(reduceMotion() ? 0 : shouldMount ? access(options).duration : access(options).exitDuration);
    setEasing(shouldMount ? access(options).easing : access(options).exitEasing);
    if (newDuration === 0) {
      preHandler?.();
      postHandler?.();
      setPhase(shouldMount ? "afterEnter" : "afterExit");
      return;
    }
    const delay = reduceMotion() ? 0 : shouldMount ? access(options).delay : access(options).exitDelay;
    const preStateTimeoutId = window.setTimeout(() => {
      preHandler?.();
      setPhase(shouldMount ? "enter" : "exit");
    }, delay);
    timeoutId = window.setTimeout(() => {
      window.clearTimeout(preStateTimeoutId);
      postHandler?.();
      setPhase(shouldMount ? "afterEnter" : "afterExit");
    }, delay + newDuration);
  };
  const style = createMemo(() => getTransitionStyles({
    transition: access(options).transition,
    duration: duration(),
    phase: phase(),
    easing: easing()
  }));
  const keepMounted = createMemo(() => phase() !== "afterExit");
  createEffect(on(() => access(shouldMount), shouldMount => handleStateChange(shouldMount), {
    defer: true
  }));
  onCleanup(() => {
    if (isServer) {
      return;
    }
    window.clearTimeout(timeoutId);
  });
  return {
    keepMounted,
    style
  };
}

export { DEFAULT_TRANSITIONS_NAMES, createControllableArraySignal, createControllableBooleanSignal, createControllableSignal, createDisclosure, createInteractOutside, createPreventScroll, createReducedMotion, createTagName, createTransition };
//# sourceMappingURL=index.js.map
