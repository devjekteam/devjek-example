import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Sidebar from '../../src/containers/Sidebar';

const defaultProps = {
  navMenus: [
    {
      title: 'Main',
      items: [
        {
          icon: require('../../src/public/img/left-menu/file.png'),
          name: 'Files'
        },
        {
          icon: require('../../src/public/img/left-menu/photo.png'),
          name: 'Photos'
        },
        {
          icon: require('../../src/public/img/left-menu/sharing.png'),
          name: 'Sharing'
        },
        {
          icon: require('../../src/public/img/left-menu/link.png'),
          name: 'Links'
        },
        {
          icon: require('../../src/public/img/left-menu/event.png'),
          name: 'Events'
        }
      ]
    },
    {
      title: 'Also from Dropbox',
      items: [
        {
          icon: require('../../src/public/img/left-menu/carousel.png'),
          name: 'Carousel'
        },
        {
          icon: require('../../src/public/img/left-menu/mailbox.png'),
          name: 'Mailbox'
        },
      ]
    },
    {
      title: 'Labels',
      items: [
        {
          icon: require('../../src/public/img/left-menu/design.png'),
          name: 'Design'
        },
        {
          icon: require('../../src/public/img/left-menu/web-elements.png'),
          name: 'Web Elements'
        },
        {
          icon: require('../../src/public/img/left-menu/mobile.png'),
          name: 'Mobile'
        },
        {
          icon: require('../../src/public/img/left-menu/application.png'),
          name: 'Application'
        },
        {
          icon: require('../../src/public/img/left-menu/uiux.png'),
          name: 'UI/UX'
        }
      ]
    }
  ]
};

storiesOf('Sidebar', module)
  .add('default', () => (
    <Sidebar {...defaultProps} />
  ));
