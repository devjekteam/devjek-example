import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import File from '../../src/components/File';

const defaultProps = {
  name: 'dropbox-logo.psd',
  image: require('../../src/public/files/dropbox-logo.jpg'),
  published: 'Jun 22',
  size: '122KB',
  selected: false,
  onSelect: action('onSelect'),
  onShare: action('onShare'),
  onDownload: action('onDownload'),
  onDelete: action('onDelete')
};

storiesOf('File', module)
  .add('default', () => (
    <File {...defaultProps} />
  ))
  .add('selected', () => (
    <File {...defaultProps} selected />
  ));