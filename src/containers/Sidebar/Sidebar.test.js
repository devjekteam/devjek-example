import React from 'react';
import { mount } from 'enzyme';

import Sidebar from '../Sidebar';

const defaultProps = {
  quota: {
    used: 1.2,
    available: 3
  },
  menus: [
    {
      title: 'Test Menu Section',
      items: [
        {
          icon: '',
          name: 'Test Menu Item'
        }
      ]
    },
    {
      title: 'Test Menu Section',
      items: [
        {
          icon: '',
          name: 'Test Menu Item'
        }
      ]
    },
    {
      title: 'Test Menu Section',
      items: [
        {
          icon: '',
          name: 'Test Menu Item'
        }
      ]
    }
  ]
};


describe('Sidebar Tests', () => {
  const wrapper = mount(<div><Sidebar {...defaultProps} /></div>);
  it('should render the sidebar', () => {
    expect(wrapper.find(Sidebar).length).toBe(1);
  });
  it('should render the correct number of sidebar menus', () => {
    expect(wrapper.find('.SidebarMenu').length).toBe(defaultProps.menus.length);
  });
  it('should render the correct number of storage quotas', () => {
    expect(wrapper.find('.StorageQuota').length).toBe(1);
  });
});