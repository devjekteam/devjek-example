import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Sidebar from '../../src/containers/Sidebar';

const defaultProps = {
  menus: [
    {
      title: 'Main',
      items: [
        {
          icon: require('../../src/public/img/left-menu/file.png'),
          name: 'Files',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/photo.png'),
          name: 'Photos',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/sharing.png'),
          name: 'Sharing',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/link.png'),
          name: 'Links',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/event.png'),
          name: 'Events',
          onSelect: action('Nav Item Selected')
        }
      ]
    },
    {
      title: 'Also from Dropbox',
      items: [
        {
          icon: require('../../src/public/img/left-menu/carousel.png'),
          name: 'Carousel',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/mailbox.png'),
          name: 'Mailbox',
          onSelect: action('Nav Item Selected')
        },
      ]
    },
    {
      title: 'Labels',
      items: [
        {
          icon: require('../../src/public/img/left-menu/design.png'),
          name: 'Design',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/web-elements.png'),
          name: 'Web Elements',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/mobile.png'),
          name: 'Mobile',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/application.png'),
          name: 'Application',
          onSelect: action('Nav Item Selected')
        },
        {
          icon: require('../../src/public/img/left-menu/uiux.png'),
          name: 'UI/UX',
          onSelect: action('Nav Item Selected')
        }
      ]
    }
  ],
  quota: {
    used: 1.2,
    available: 2
  }
};

storiesOf('Sidebar', module)
  .add('default', () => (
    <Sidebar {...defaultProps} />
  ));
