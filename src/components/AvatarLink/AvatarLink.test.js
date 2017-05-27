import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import AvatarLink from '../AvatarLink';

const defaultProps = {
  img: '',
  onSelect: sinon.spy(),
  title: "Test Title",
  subtext: "This test is working"
};

describe('AvatarLink', () => {
  const wrapper = mount(<div><AvatarLink {...defaultProps} /></div>);
  it('should render the component', () => {
    expect(wrapper.find(AvatarLink).length).toBe(1);
    expect(wrapper.find('img.avatar-img').length).toBe(1);
    expect(wrapper.find('div.avatar-text').length).toBe(1);
  });
  it('should trigger onSelect when clicked', () => {
    const AvatarLink = wrapper.find('div.AvatarLink');
    AvatarLink.simulate('click');
    expect(defaultProps.onSelect.calledOnce).toBe(true);
  });
});
