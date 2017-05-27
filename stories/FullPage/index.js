import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import File from '../../src/components/File';
import Grid from '../../src/containers/Grid';
import TopNav from '../../src/containers/TopNav';
import Sidebar from '../../src/containers/Sidebar';

const defaultProps = {
  topNav: {
    topNav: {
      logo: require('../../src/public/img/logo.png'),
      search: {
        onSubmit: action("Search Form Submitted")
      },
      upgrade: {
        img: require('../../src/public/img/avatar-link/upgrade.png'),
        onSelect: action("Upgrade Avatar Link"),
        title: "Upgrade account",
        subtext: "Pay 10$, Yearly"
      },
      profile: {
        img: require('../../src/public/img/avatar-link/profile.png'),
        onSelect: action("Profile Avatar Link"),
        title: "Tim Van Damme",
        subtext: "Normal user"
      },
      settings: {
        img: require('../../src/public/img/notification-icon/settings.png'),
        onSelect: action("Settings"),
        notifications: false
      },
      notification: {
        img: require('../../src/public/img/notification-icon/notification.png'),
        onSelect: action("Notifications"),
        notifications: true
      }
    }
  },
  sidebar: {
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
  },
  grid: {
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
    onShare: action('onShare')
  }
};

storiesOf('Full Page', module)
  .add('default', () => (
    <div>
      <TopNav {...defaultProps.topNav} />
      <Sidebar {...defaultProps.sidebar} />
      <Grid>
        {defaultProps.grid.files.map(file =>
          <File
            image={file.image}
            name={file.name}
            published={file.published}
            onSelect={defaultProps.grid.onSelect}
            onDownload={defaultProps.grid.onDownload}
            onShare={defaultProps.grid.onShare}
            onDelete={defaultProps.grid.onDelete}
            size={file.size}
          />
        )}
      </Grid>
    </div>
  ));