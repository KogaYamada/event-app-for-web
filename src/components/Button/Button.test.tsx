import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button } from './Button';

describe('button test', () => {
    let wrapper: ShallowWrapper<
        any,
        Readonly<{}>,
        React.Component<{}, {}, any>
    >;
    beforeEach(() => {
        wrapper = shallow(<Button />);
    });
    it('button snapshot', () => {
        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('button color', () => {
        wrapper.setProps({ color: '#FF0000' });
        expect(wrapper.dive()).toMatchSnapshot();
    });
});
