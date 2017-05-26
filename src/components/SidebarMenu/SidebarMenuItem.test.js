import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SidebarMenuItem from './SidebarMenuItem';

const defaultProps = {
  icon: '',
  name: 'Test Item',
  onSelect: sinon.spy()
};

describe('SidebarMenuItem', () => {
  const wrapper = mount(<div><SidebarMenuItem {...defaultProps} /></div>);
  it('should render the component correctly', () => {
    expect(wrapper.find(SidebarMenuItem).length).toBe(1);
    expect(wrapper.find('.SidebarMenuItem-icon').length).toBe(1);
    expect(wrapper.find('.SidebarMenuItem-name').length).toBe(1);
  });
  it('should trigger onSelect when clicked', () => {
    const sidebarItem = wrapper.find(SidebarMenuItem);
    sidebarItem.simulate('click');
    expect(defaultProps.onSelect.calledOnce).toBe(true);
  });
});