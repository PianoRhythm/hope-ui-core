/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-tests/src/it-is-polymorphic.tsx
 */
import { Fragment } from "solid-js/h/jsx-runtime";
import { render } from "solid-testing-library";
export function itIsPolymorphic(Comp, requiredProps, selector, Wrapper = props => <Fragment>{props.children}</Fragment>) {
    it("is polymorphic", () => {
        const getTarget = (container) => {
            return selector ? container.querySelector(selector) : container.firstChild;
        };
        const TestComponent = (props) => {
            return <mark data-test-prop {...props}/>;
        };
        const { container: withTag } = render(() => (<Wrapper>
        <Comp as="a" href="https://hope-ui.com" {...requiredProps}/>
      </Wrapper>));
        const { container: withComponent } = render(() => (<Wrapper>
        <Comp as={TestComponent} {...requiredProps}/>
      </Wrapper>));
        expect(getTarget(withTag)?.tagName).toBe("A");
        expect(getTarget(withComponent)?.tagName).toBe("MARK");
    });
}
