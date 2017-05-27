import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ActionMenu from './ActionMenu';

const defaultProps = {
  onShare: sinon.spy(),
  onDownload: sinon.spy(),
  onDelete: sinon.spy()
};

describe('File', () => {
  const wrapper = mount(<div><ActionMenu {...defaultProps} /></div>);

  it('should render the component correctly', () => {
    expect(wrapper.find(ActionMenu).length).toBe(1);
  });
  it('should show menu when dots are clicked', () => {
    const file = wrapper.find('.ActionMenu-dots');
    file.simulate('click');
    const menu = wrapper.find('.ActionMenu-menu');
    expect(menu.length).toBe(1);

    const container = wrapper.find('.ActionMenu.open');
    expect(container.length).toBe(1);
  });
  it('should call the action functions', () => {
    const onShare = wrapper.find('.onShare');
    onShare.simulate('click');
    const onDownload = wrapper.find('.onDownload');
    onDownload.simulate('click');
    const onDelete = wrapper.find('.onDelete');
    onDelete.simulate('click');

    expect(defaultProps.onShare.calledOnce).toBe(true);
    expect(defaultProps.onDownload.calledOnce).toBe(true);
    expect(defaultProps.onDelete.calledOnce).toBe(true);
  })
});