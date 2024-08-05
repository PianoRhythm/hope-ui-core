export { mergeRefs } from '@solid-primitives/refs';
export { access, accessWith, chain } from '@solid-primitives/utils';

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */

// Number assertions
function isNumber(value) {
  return typeof value === "number";
}

// Array assertions
function isArray(value) {
  return Array.isArray(value);
}
function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
}

// Function assertions
function isFunction(value) {
  return typeof value === "function";
}

// Object assertions
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isNull(value) {
  return value == null;
}

// String assertions
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}

// Empty assertions
function isEmpty(value) {
  if (isArray(value)) {
    return isEmptyArray(value);
  }
  if (isObject(value)) {
    return isEmptyObject(value);
  }
  return value == null || value === "";
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */
function getLastItem(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
function pack(value) {
  if (value == null) {
    return [];
  }
  return isArray(value) ? value : [value];
}

/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit-utils/src/dom.ts
 *
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/59391bb95b05a13feeb9fe84b0cdb027519460ce/packages/utilities/dom-utils/src/dom.ts
 */

/**
 * Checks whether a `parent` element  is/or contains a `child` element.
 */
function contains(parent, child) {
  if (!parent) {
    return false;
  }
  return parent === child || parent.contains(child);
}
function getRelatedTarget(event) {
  const target = event.target ?? event.currentTarget;
  const activeElement = getActiveElement(target);
  return event.relatedTarget ?? activeElement;
}
function getActiveElement(node) {
  return getOwnerDocument(node)?.activeElement;
}
function getWindow(node) {
  return getOwnerDocument(node).defaultView || window;
}
function getOwnerDocument(node) {
  return isElement(node) ? node.ownerDocument ?? document : document;
}
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isScrollable(node) {
  const style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function getScrollParent(node) {
  while (node && !isScrollable(node)) {
    node = node.parentElement;
  }
  return node || document.scrollingElement || document.documentElement;
}

/**
 * Checks whether `element` is a frame element.
 */
function isFrame(element) {
  return element.tagName === "IFRAME";
}

/**
 * Return an empty string (to apply the data attribute) if the condition is met, `undefined` otherwise.
 */
function dataAttr(condition) {
  return condition ? "" : undefined;
}

/**
 * Return `true` (to apply the aria attribute) if the condition is met, `undefined` otherwise.
 */
function ariaAttr(condition) {
  return condition ? true : undefined;
}

let EventKeys = /*#__PURE__*/function (EventKeys) {
  EventKeys["ArrowDown"] = "ArrowDown";
  EventKeys["ArrowUp"] = "ArrowUp";
  EventKeys["ArrowLeft"] = "ArrowLeft";
  EventKeys["ArrowRight"] = "ArrowRight";
  EventKeys["Enter"] = "Enter";
  EventKeys["Space"] = " ";
  EventKeys["Tab"] = "Tab";
  EventKeys["Backspace"] = "Backspace";
  EventKeys["Control"] = "Control";
  EventKeys["Meta"] = "Meta";
  EventKeys["Home"] = "Home";
  EventKeys["End"] = "End";
  EventKeys["PageDown"] = "PageDown";
  EventKeys["PageUp"] = "PageUp";
  EventKeys["Delete"] = "Delete";
  EventKeys["Escape"] = "Escape";
  EventKeys["Shift"] = "Shift";
  return EventKeys;
}({});

/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/e514827f49696a9c20fb819bd9610651f7017039/packages/@react-aria/utils/src/focusWithoutScrolling.ts
 */

// This is a polyfill for element.focus({preventScroll: true});
// Currently necessary for Safari and old Edge:
// https://caniuse.com/#feat=mdn-api_htmlelement_focus_preventscroll_option
// See https://bugs.webkit.org/show_bug.cgi?id=178583

// Original licensing for the following methods can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/calvellido/focus-options-polyfill

function focusWithoutScrolling(element) {
  if (supportsPreventScroll()) {
    element.focus({
      preventScroll: true
    });
  } else {
    const scrollableElements = getScrollableElements(element);
    element.focus();
    restoreScrollPosition(scrollableElements);
  }
}
let supportsPreventScrollCached = null;
function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false;
    try {
      const focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
      // Ignore
    }
  }
  return supportsPreventScrollCached;
}
function getScrollableElements(element) {
  let parent = element.parentNode;
  const scrollableElements = [];
  const rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }
  return scrollableElements;
}
function restoreScrollPosition(scrollableElements) {
  for (const {
    element,
    scrollTop,
    scrollLeft
  } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */
/** A function that does nothing. */
function noop() {
  return;
}

/** Call a JSX.EventHandlerUnion with the event. */
function callHandler(handler, event) {
  if (handler) {
    if (isFunction(handler)) {
      handler(event);
    } else {
      handler[0](handler[1], event);
    }
  }
  return event?.defaultPrevented;
}

/** Run the value with the given args if it's a function, otherwise return the value as is. */
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

/** Create a function that only run once. */
function once(callback) {
  let hasRun = false;
  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      callback(...args);
    }
  };
}

/** Flatten an object. */
function flatten(target, separator, maxDepth = Infinity) {
  if (!isObject(target) && !Array.isArray(target) || !maxDepth) {
    return target;
  }
  return Object.entries(target).reduce((result, [key, value]) => {
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, separator, maxDepth - 1)).forEach(([childKey, childValue]) => {
        // e.g. gray.500
        result[`${key}${separator}${childKey}`] = childValue;
      });
    } else {
      // e.g. transparent
      result[key] = value;
    }
    return result;
  }, {});
}

/** Unflatten an object. */
function unflatten(flatObject, separator) {
  return Object.keys(flatObject).reduce((res, k) => {
    k.split(separator).reduce((acc, e, i, keys) => {
      if (acc[e] != null) {
        return acc[e];
      }

      // @ts-ignore
      acc[e] = keys.length - 1 === i ? flatObject[k] : {};
      return acc[e];
    }, res);
    return res;
  }, {});
}

/** Get a dot-notated path within a nested object if it exists. */
function delve(obj, key) {
  return key.split(".").reduce((acc, b) => acc ? acc[b] : acc, obj);
}

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */

function pick(object, keys) {
  const result = {};
  keys.forEach(key => {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
const objectKeys = obj => {
  return Object.keys(obj);
};

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
function objectFilter(object, fn) {
  const result = {};
  Object.keys(object).forEach(key => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
function filterUndefined(object) {
  return objectFilter(object, val => val !== null && val !== undefined);
}

/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/cf9ab24f3255be1530d0f584061a01aa1e8180e6/packages/@react-aria/utils/src/platform.ts
 */

function testUserAgent(re) {
  if (typeof window === "undefined" || window.navigator == null) {
    return false;
  }
  return (
    // @ts-ignore
    window.navigator["userAgentData"]?.brands.some(brand => re.test(brand.brand)) || re.test(window.navigator.userAgent)
  );
}
function testPlatform(re) {
  return typeof window !== "undefined" && window.navigator != null ?
  // @ts-ignore
  re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform) : false;
}
function isMac() {
  return testPlatform(/^Mac/i);
}
function isIPhone() {
  return testPlatform(/^iPhone/i);
}
function isIPad() {
  return testPlatform(/^iPad/i) ||
  // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}
function isWebKit() {
  return testUserAgent(/AppleWebKit/i) && !isChrome();
}
function isChrome() {
  return testUserAgent(/Chrome/i);
}
function isAndroid() {
  return testUserAgent(/Android/i);
}

function toKebabCase(value) {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();
}
function stringOrUndefined(value) {
  return isString(value) ? value : undefined;
}

/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/focus.ts
 *
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/focus/src/isElementVisible.ts
 */
const FOCUSABLE_ELEMENT_SELECTOR = "input:not([type='hidden']):not([disabled]), select:not([disabled]), " + "textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], " + "iframe, object, embed, area[href], audio[controls], video[controls], " + "[contenteditable]:not([contenteditable='false'])";

/**
 * Returns all the tabbable elements in `container`.
 */
function getAllTabbableIn(container, includeContainer) {
  const elements = Array.from(container.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR));
  const tabbableElements = elements.filter(isTabbable);
  if (includeContainer && isTabbable(container)) {
    tabbableElements.unshift(container);
  }
  tabbableElements.forEach((element, i) => {
    if (isFrame(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      const allFrameTabbable = getAllTabbableIn(frameBody, false);
      tabbableElements.splice(i, 1, ...allFrameTabbable);
    }
  });
  return tabbableElements;
}

/**
 * Checks whether `element` is tabbable or not.
 * @example
 * isTabbable(document.querySelector("input")); // true
 * isTabbable(document.querySelector("input[tabindex='-1']")); // false
 * isTabbable(document.querySelector("input[hidden]")); // false
 * isTabbable(document.querySelector("input:disabled")); // false
 */
function isTabbable(element) {
  return isFocusable(element) && !hasNegativeTabIndex(element);
}

/**
 * Checks whether `element` is focusable or not.
 * @example
 * isFocusable(document.querySelector("input")); // true
 * isFocusable(document.querySelector("input[tabindex='-1']")); // true
 * isFocusable(document.querySelector("input[hidden]")); // false
 * isFocusable(document.querySelector("input:disabled")); // false
 */
function isFocusable(element) {
  return element.matches(FOCUSABLE_ELEMENT_SELECTOR) && isElementVisible(element);
}
function hasNegativeTabIndex(element) {
  const tabIndex = parseInt(element.getAttribute("tabindex") || "0", 10);
  return tabIndex < 0;
}

/**
 * Adapted from https://github.com/testing-library/jest-dom and
 * https://github.com/vuejs/vue-test-utils-next/.
 * Licensed under the MIT License.
 * @param element - Element to evaluate for display or visibility.
 */
function isElementVisible(element, childElement) {
  return element.nodeName !== "#comment" && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
}
function isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
    return false;
  }
  const {
    display,
    visibility
  } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    if (!element.ownerDocument.defaultView) {
      return isVisible;
    }
    const {
      getComputedStyle
    } = element.ownerDocument.defaultView;
    const {
      display: computedDisplay,
      visibility: computedVisibility
    } = getComputedStyle(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}

export { EventKeys, ariaAttr, callHandler, contains, dataAttr, delve, filterUndefined, flatten, focusWithoutScrolling, getActiveElement, getAllTabbableIn, getLastItem, getOwnerDocument, getRelatedTarget, getScrollParent, getWindow, isAndroid, isAppleDevice, isArray, isChrome, isElement, isEmpty, isEmptyArray, isEmptyObject, isFocusable, isFrame, isFunction, isIOS, isIPad, isIPhone, isMac, isNull, isNumber, isObject, isString, isTabbable, isWebKit, noop, objectFilter, objectKeys, once, pack, pick, runIfFn, stringOrUndefined, toKebabCase, unflatten };
//# sourceMappingURL=index.js.map
