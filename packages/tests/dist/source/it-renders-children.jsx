/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-tests/src/it-renders-children.tsx
 */
import { Fragment } from "solid-js/h/jsx-runtime";
import { render, screen } from "solid-testing-library";
export function itRendersChildren(Comp, requiredProps, Wrapper = props => <Fragment>{props.children}</Fragment>) {
    it("renders children", () => {
        render(() => (<Wrapper>
        <Comp {...requiredProps}>
          <span data-testid="test-children">test children</span>
        </Comp>
      </Wrapper>));
        expect(screen.getByTestId("test-children")).toBeInTheDocument();
    });
}
