'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jestAxe = require('jest-axe');
var solidTestingLibrary = require('solid-testing-library');
var web = require('solid-js/web');

/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-tests/src/check-accessibility.tsx
 */
const config = {
  rules: {
    region: {
      enabled: false
    },
    "autocomplete-valid": {
      enabled: false
    }
  }
};
function checkAccessibility(elements) {
  expect.extend(jestAxe.toHaveNoViolations);
  it("should not have accessibility violations", async () => {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    for (const element of elements) {
      const {
        container
      } = await solidTestingLibrary.render(() => element);
      const result = await jestAxe.axe(container, config);
      expect(result).toHaveNoViolations();
    }
  }, 30000);
}

function Fragment(props) {
  return props.children;
}

function itHasSemanticClass(Comp, requiredProps, semanticClass, Wrapper = props => web.createComponent(Fragment, {
  get children() {
    return props.children;
  }
})) {
  it("has semantic class", () => {
    const {
      container
    } = solidTestingLibrary.render(() => web.createComponent(Wrapper, {
      get children() {
        return Comp(requiredProps);
      }
    }));
    expect(container.querySelector(`.${semanticClass}`)).toBeInTheDocument();
  });
}

var _tmpl$$1 = /*#__PURE__*/web.template(`<mark data-test-prop>`);
function itIsPolymorphic(Comp, requiredProps, selector, Wrapper = props => web.createComponent(Fragment, {
  get children() {
    return props.children;
  }
})) {
  it("is polymorphic", () => {
    const getTarget = container => {
      return selector ? container.querySelector(selector) : container.firstChild;
    };
    const TestComponent = props => {
      return (() => {
        var _el$ = _tmpl$$1();
        web.spread(_el$, props, false, false);
        return _el$;
      })();
    };
    const {
      container: withTag
    } = solidTestingLibrary.render(() => web.createComponent(Wrapper, {
      get children() {
        return web.createComponent(Comp, web.mergeProps({
          as: "a",
          href: "https://hope-ui.com"
        }, requiredProps));
      }
    }));
    const {
      container: withComponent
    } = solidTestingLibrary.render(() => web.createComponent(Wrapper, {
      get children() {
        return web.createComponent(Comp, web.mergeProps({
          as: TestComponent
        }, requiredProps));
      }
    }));
    expect(getTarget(withTag)?.tagName).toBe("A");
    expect(getTarget(withComponent)?.tagName).toBe("MARK");
  });
}

var _tmpl$ = /*#__PURE__*/web.template(`<span data-testid=test-children>test children`);
function itRendersChildren(Comp, requiredProps, Wrapper = props => web.createComponent(Fragment, {
  get children() {
    return props.children;
  }
})) {
  it("renders children", () => {
    solidTestingLibrary.render(() => web.createComponent(Wrapper, {
      get children() {
        return web.createComponent(Comp, web.mergeProps(requiredProps, {
          get children() {
            return _tmpl$();
          }
        }));
      }
    }));
    expect(solidTestingLibrary.screen.getByTestId("test-children")).toBeInTheDocument();
  });
}

function itSupportsClass(Comp, requiredProps, Wrapper = props => web.createComponent(Fragment, {
  get children() {
    return props.children;
  }
})) {
  it("supports class prop", () => {
    const {
      container
    } = solidTestingLibrary.render(() => web.createComponent(Wrapper, {
      get children() {
        return web.createComponent(Comp, web.mergeProps(requiredProps, {
          "class": "test-class-name"
        }));
      }
    }));
    expect(container.querySelector(".test-class-name")).toBeInTheDocument();
  });
}

function itSupportsRef(Comp, requiredProps, refType, refProp = "ref", Wrapper = props => web.createComponent(Fragment, {
  get children() {
    return props.children;
  }
})) {
  it(refProp ? `supports getting ref with ${refProp} prop` : "supports ref", async () => {
    let ref;
    solidTestingLibrary.render(() => web.createComponent(Wrapper, {
      get children() {
        return web.createComponent(Comp, web.mergeProps(requiredProps, {
          ref(r$) {
            var _ref$ = ref;
            typeof _ref$ === "function" ? _ref$(r$) : ref = r$;
          }
        }));
      }
    }));
    await Promise.resolve();
    expect(ref).toBeInstanceOf(refType);
  });
}

function itSupportsStyle(Comp, requiredProps, selector, Wrapper = props => web.createComponent(Fragment, {
  get children() {
    return props.children;
  }
})) {
  it("supports style property", async () => {
    const getTarget = container => {
      return selector ? container.querySelector(selector) : container.firstElementChild;
    };
    const {
      container
    } = solidTestingLibrary.render(() => web.createComponent(Wrapper, {
      get children() {
        return web.createComponent(Comp, web.mergeProps(requiredProps, {
          style: {
            border: "1px solid cyan"
          }
        }));
      }
    }));
    expect(getTarget(container)).toHaveStyle({
      border: "1px solid cyan"
    });
  });
}

// https://jestjs.io/docs/26.x/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
function setupMatchMediaMock() {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      // deprecated
      removeListener: jest.fn(),
      // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
}

/*
 * Portions of this file are based on code from react-spectrum.
 * Copyright 2020 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

function installPointerEvent() {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.PointerEvent = class FakePointerEvent extends MouseEvent {
      constructor(name, init) {
        super(name, init);
        this._init = init;
      }
      get pointerType() {
        return this._init.pointerType;
      }
      get pointerId() {
        return this._init.pointerId;
      }
      get pageX() {
        return this._init.pageX;
      }
      get pageY() {
        return this._init.pageY;
      }
      get width() {
        return this._init.width;
      }
      get height() {
        return this._init.height;
      }
    };
  });
  afterAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global.PointerEvent;
  });
}

exports.checkAccessibility = checkAccessibility;
exports.installPointerEvent = installPointerEvent;
exports.itHasSemanticClass = itHasSemanticClass;
exports.itIsPolymorphic = itIsPolymorphic;
exports.itRendersChildren = itRendersChildren;
exports.itSupportsClass = itSupportsClass;
exports.itSupportsRef = itSupportsRef;
exports.itSupportsStyle = itSupportsStyle;
exports.setupMatchMediaMock = setupMatchMediaMock;
//# sourceMappingURL=index.js.map
