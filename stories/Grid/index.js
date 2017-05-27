import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import File from '../../src/components/File';
import Grid from '../../src/containers/Grid';

const defaultProps = {
  files: [
    {
      name: 'dropbox-logo.png',
      image: require('../../src/public/files/dropbox-logo.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'dribbble-fun.jpg',
      image: require('../../src/public/files/dribbble-fun.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'instagram.jpg',
      image: require('../../src/public/files/instagram.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'web-design.jpg',
      image: require('../../src/public/files/web-design.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'sweet-pixels-icon.jpg',
      image: require('../../src/public/files/sweet-pixels-icon.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'warehouse-design.jpg',
      image: require('../../src/public/files/warehouse-design.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'contact.jpg',
      image: require('../../src/public/files/contact.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'boxing-glove-icon.jpg',
      image: require('../../src/public/files/boxing-glove-icon.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'icon-set.jpg',
      image: require('../../src/public/files/icon-set.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'iron-man-mask.jpg',
      image: require('../../src/public/files/iron-man-mask.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'magic-bacon-ride.jpg',
      image: require('../../src/public/files/magic-bacon-ride.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'mobile-portfolio.jpg',
      image: require('../../src/public/files/mobile-portfolio.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'pin-art-dribbble.jpg',
      image: require('../../src/public/files/pin-art-dribbble.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: 'boxing-glove-icon.jpg',
      image: require('../../src/public/files/boxing-glove-icon.jpg'),
      published: 'Feb 22',
      size: '133KB'
    },
    {
      name: '0limp-006.jpg',
      image: require('../../src/public/files/0limp-006.jpg'),
      published: 'Feb 22',
      size: '133KB'
    }
  ],
  onSelect: action('onSelect'),
  onDelete: action('onDelete'),
  onDownload: action('onDownload'),
  onShare: action('onShare'),
};

storiesOf('Grid', module)
  .add('default', () => (
    <Grid>
      {defaultProps.files.map(file =>
        <File
          image={file.image}
          name={file.name}
          published={file.published}
          onSelect={defaultProps.onSelect}
          onDownload={defaultProps.onDownload}
          onShare={defaultProps.onShare}
          onDelete={defaultProps.onDelete}
          size={file.size}
        />
      )}
    </Grid>
  ));