import React from 'react';
import { mount } from 'enzyme';

import SubNav from '../SubNav';

const defaultProps = {
  items: [
    {
      icon: '',
      name: 'Upload',
    },
    {
      icon: '',
      name: 'New Folder',
    },
    {
      icon: '',
      name: 'Share a Folder',
    },
    {
      icon: '',
      name: 'Trash',
    },
  ],
  itemsSelectedNumber: 2,
  selectMenuIcons: [
    {
      icon: '',
      selected: true,
    },
    {
      icon: '',
      selected: false,
    },
    {
      icon: '',
      selected: false,
    }
  ]
};


describe('SubNav Tests', () => {
  const wrapper = mount(<div><SubNav {...defaultProps} /></div>);
  it('should render the SubNav', () => {
    expect(wrapper.find(SubNav).length).toBe(1);
  });
  it('should render 4 menu items', () => {
    expect(wrapper.find('li.MenuItem').length).toBe(4);
  });
  it('should render 2 items selected', () => {
    expect(wrapper.find('div.items-selected-text').length).toBe(1);
  });
  it('should render 3 select icons', () => {
    expect(wrapper.find('li.SelectMenuIcon').length).toBe(3);
  });
});
