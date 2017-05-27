import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import File from '../../components/File';
import Grid from '../Grid';

const defaultFileProps = {
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

describe('Grid', () => {
  const wrapper = mount(
    <div>
      <Grid>
        <File {...defaultFileProps} />
        <File {...defaultFileProps} />
        <File {...defaultFileProps} />
        <File {...defaultFileProps} />
        <File {...defaultFileProps} />
      </Grid>
    </div>
  );

  it('should render the component correctly', () => {
    expect(wrapper.find(Grid).length).toBe(1);
  });
  it('should render the correct number of files', () => {
    expect(wrapper.find(File).length).toBe(5);
  });
});