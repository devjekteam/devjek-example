import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SubNav from '../../src/containers/SubNav';

const defaultProps = {
  items: [
    {
      icon: require('../../src/public/img/sub-nav/upload.png'),
      name: 'Upload',
      onSelect: action('SubNav Upload Selected')
    },
    {
      icon: require('../../src/public/img/sub-nav/folder.png'),
      name: 'New Folder',
      onSelect: action('SubNav New Folder Selected')
    },
    {
      icon: require('../../src/public/img/sub-nav/share-folder.png'),
      name: 'Share a Folder',
      onSelect: action('SubNav Share a Folder Selected')
    },
    {
      icon: require('../../src/public/img/sub-nav/trash.png'),
      name: 'Trash',
      onSelect: action('SubNav Trash Selected')
    },
  ],
  itemsSelectedNumber: 2,
  selectMenuIcons: [
    {
      icon: require('../../src/public/img/sub-nav/thumb-view.png'),
      selected: true,
      onSelect: action('Thumb View Selected')
    },
    {
      icon: require('../../src/public/img/sub-nav/list-view.png'),
      selected: false,
      onSelect: action('List View Selected')
    },
    {
      icon: require('../../src/public/img/sub-nav/detail-view.png'),
      selected: false,
      onSelect: action('Detail View Selected')
    }
  ]
};

storiesOf('SubNav', module)
  .add('default', () => (
    <SubNav {...defaultProps} />
  ));
