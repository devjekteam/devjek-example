import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TopNav from '../../src/containers/TopNav';

const defaultProps = {
  logo: require('../../src/public/img/logo.png'),
  search: {
    onSubmit: action("Search Form Submitted")
  },
  avatarLinks: [
    {
      img: require('../../src/public/img/avatar-link/upgrade.png'),
      onSelect: action("Upgrade Avatar Link"),
      title: "Upgrade account",
      subtext: "Pay 10$, Yearly"
    },
    {
      img: require('../../src/public/img/avatar-link/profile.png'),
      onSelect: action("Profile Avatar Link"),
      title: "Tim Van Damme",
      subtext: "Normal user"
    }
  ],
  notificationIcons: [
    {
      img: require('../../src/public/img/notification-icon/settings.png'),
      onSelect: action("Settings"),
      notifications: false
    },
    {
      img: require('../../src/public/img/notification-icon/notification.png'),
      onSelect: action("Notifications"),
      notifications: true
    }
  ]
}

storiesOf('TopNav', module)
    .add('Full NavBar', () => (
        <TopNav {...defaultProps} />
    ));
