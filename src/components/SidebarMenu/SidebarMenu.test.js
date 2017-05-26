import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SidebarMenu from '../SidebarMenu';
import SidebarMenuItem from '../SidebarMenu/SidebarMenuItem';

const defaultProps = {
  title: 'Test Menu',
  items: [
    {
      icon: '',
      name: 'Test item 1'
    },
    {
      icon: '',
      name: 'Test item 2'
    }
  ]
};

describe('SidebarMenu', () => {
  const wrapper = mount(<div><SidebarMenu {...defaultProps} /></div>);
  it('should render the component', () => {
    expect(wrapper.find(SidebarMenu).length).toBe(1);
    expect(wrapper.find('h2.SidebarMenu-title').length).toBe(1);
  });
  it('should render the correct number of sidebar menu items', () => {
    expect(wrapper.find(SidebarMenuItem).length).toBe(defaultProps.items.length);
  });
});