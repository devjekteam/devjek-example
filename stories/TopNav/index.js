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
      onClick: action("Upgrade Avatar Link"),
      title: "Upgrade account",
      subtext: "Pay 10$, Yearly"
    },
    profile: {
      img: require('../../src/public/img/avatar-link/profile.png'),
      onClick: action("Profile Avatar Link"),
      title: "Tim Van Damme",
      subtext: "Normal user"
    }
  }
}

storiesOf('Button', module)
    .add('with text', () => (
        <TopNav {...defaultProps} />
    ));
