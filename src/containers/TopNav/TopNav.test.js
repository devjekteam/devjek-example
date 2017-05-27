import React from 'react';
import { mount } from 'enzyme';

import TopNav from '../TopNav';

const defaultProps = {
  logo: '',
  search: {},
  avatarLinks: [
    {
      img: '',
      title: "Upgrade account",
      subtext: "Pay 10$, Yearly"
    },
  ],
  notificationIcons: [
    {
      img: '',
      notifications: true
    }
  ]
};


describe('TopNav Tests', () => {
  const wrapper = mount(<div><TopNav {...defaultProps} /></div>);
  it('should render the TopNav', () => {
    expect(wrapper.find(TopNav).length).toBe(1);
  });
  it('should render the Logo', () => {
    expect(wrapper.find('div.logo').length).toBe(1);
  })
  it('should render all of the child components', () => {
    expect(wrapper.find('div.site-search').length).toBe(1);
    expect(wrapper.find('div.avatar-links').length).toBe(1);
    expect(wrapper.find('div.settings').length).toBe(1);
  });
});
