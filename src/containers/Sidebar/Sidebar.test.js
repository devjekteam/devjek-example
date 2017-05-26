import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../Sidebar';

describe('Sidebar Tests', function() {
  it('should render the sidebar', function() {
    const wrapper = shallow(<div><Sidebar>Submit</Sidebar></div>);
    expect(wrapper.find(Sidebar).length).toBe(1);
  });
});