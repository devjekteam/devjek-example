import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TopNav from '../../src/containers/TopNav';

const defaultProps = {
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
}

storiesOf('TopNav', module)
    .add('Full NavBar', () => (
        <TopNav {...defaultProps} />
    ));
