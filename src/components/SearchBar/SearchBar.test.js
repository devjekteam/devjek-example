import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import SearchBar from '../SearchBar';

const defaultProps = {
  onSubmit: sinon.spy(),
};

describe('SearchBar', () => {
  const wrapper = mount(<div><SearchBar {...defaultProps} /></div>);
  it('should render the component', () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
    expect(wrapper.find('form.search-form').length).toBe(1);
    expect(wrapper.find('input.search').length).toBe(1);
    expect(wrapper.find('input.icon').length).toBe(1);
  });
  it('should trigger onSubmit when submitted', () => {
    const SearchBarForm = wrapper.find('form.search-form');
    SearchBarForm.simulate('submit');
    expect(defaultProps.onSubmit.calledOnce).toBe(true);
  });
  it('should trigger onSubmit when search icon clicked', () => {
    const SearchBarIcon = wrapper.find('input.icon');
    SearchBarIcon.simulate('click');
    expect(defaultProps.onSubmit.calledOnce).toBe(true);
  });
});
