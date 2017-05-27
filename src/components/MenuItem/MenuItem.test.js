import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import MenuItem from '../MenuItem';

const defaultProps = {
  icon: '',
  name: 'Test Item',
  onSelect: sinon.spy()
};

describe('MenuItem', () => {
  const wrapper = mount(<div><MenuItem {...defaultProps} /></div>);
  it('should render the component correctly', () => {
    expect(wrapper.find(MenuItem).length).toBe(1);
    expect(wrapper.find('.MenuItem-icon').length).toBe(1);
    expect(wrapper.find('.MenuItem-name').length).toBe(1);
  });
  it('should trigger onSelect when clicked', () => {
    const sidebarItem = wrapper.find(MenuItem);
    sidebarItem.simulate('click');
    expect(defaultProps.onSelect.calledOnce).toBe(true);
  });
});
