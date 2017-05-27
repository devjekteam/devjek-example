import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import File from '../File';

const defaultProps = {
  name: 'dropbox-logo.psd',
  image: require('../../public/files/dropbox-logo.jpg'),
  published: 'Jun 22',
  size: '122KB',
  selected: false,
  onSelect: sinon.spy(),
  onShare: sinon.spy(),
  onDownload: sinon.spy(),
  onDelete: sinon.spy()
};

describe('File', () => {
  const wrapper = mount(<div><File {...defaultProps} /></div>);

  it('should render the component correctly', () => {
    expect(wrapper.find(File).length).toBe(1);
  });
  it('should trigger onSelect when clicked', () => {
    const file = wrapper.find('.File-body');
    file.simulate('click');
    expect(defaultProps.onSelect.calledOnce).toBe(true);
  });
});