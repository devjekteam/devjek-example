import React from 'react';
import { mount } from 'enzyme';

import TopNav from '../TopNav';

const defaultProps = {
  topNav: {
    logo: '',
    search: {
    },
    upgrade: {
      img: '',
      title: "Upgrade account",
      subtext: "Pay 10$, Yearly"
    },
    profile: {
      img: '',
      title: "Tim Van Damme",
      subtext: "Normal user"
    },
    settings: {
      img: '',
      notifications: false
    },
    notification: {
      img: '',
      notifications: true
    }
  }
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
