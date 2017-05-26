import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TopNav from '../../src/containers/TopNav';

const defaultProps = {
  topNav: {
    logo: require('../../src/public/img/logo.png'),
    search: {
      onSubmit: action("Search Form Submitted")
    }
  }
}

storiesOf('Button', module)
    .add('with text', () => (
        <TopNav {...defaultProps} />
    ));
