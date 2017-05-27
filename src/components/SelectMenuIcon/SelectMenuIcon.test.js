import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SelectMenuIcon from '../SelectMenuIcon';

const nonSelectedProps = {
  icon: '',
  selected: false,
  onSelect: sinon.spy()
};

const selectedProps = {
  icon: '',
  selected: true,
  onSelect: sinon.spy()
};

describe('SelectMenuIcon', () => {
  const wrapper = mount(
    <div>
      <SelectMenuIcon {...selectedProps} />
      <SelectMenuIcon {...nonSelectedProps} />
    </div>);
  it('should render the component correctly', () => {
    expect(wrapper.find(SelectMenuIcon).length).toBe(2);
    expect(wrapper.find('.SelectMenuIcon-icon').length).toBe(2);
  });
  it('should add selected class to 1 SelectMenuIcon', () => {
    expect(wrapper.find('img.selected').length).toBe(1);
  });
  it('should trigger onSelect when clicked', () => {
    const Icons = wrapper.find(SelectMenuIcon);
    expect(Icons.length).toBe(2);
    Icons.at(0).simulate('click');
    Icons.at(1).simulate('click');
    expect(nonSelectedProps.onSelect.calledOnce).toBe(true);
    expect(selectedProps.onSelect.calledOnce).toBe(true);
  });
});
