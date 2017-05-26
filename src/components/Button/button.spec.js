import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Button from '../Button';

describe('Button Tests', function() {
    it('should render a button', function() {
        const wrapper = shallow(<div><Button>Submit</Button></div>);
        expect(wrapper.find(Button).length).toBe(1);
    });
});