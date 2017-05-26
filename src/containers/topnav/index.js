import React from 'react';
import PropTypes from 'prop-types';

// components
import SearchBar from '../../components/SearchBar';
import AvatarLink from '../../components/AvatarLink';
import NotificationIcon from '../../components/NotificationIcon';

// css
import './TopNav.css';

const TopNav = (props) => {

  return (
    <header className="TopNav">
      <div className="logo">
        <img src={props.topNav.logo} />
      </div>
      <div className="site-search">
        <SearchBar {...props.topNav.search} />
      </div>
      <div className="avatar-links">
        <AvatarLink {...props.topNav.upgrade} />
        <AvatarLink {...props.topNav.profile} />
      </div>
      <div className="settings">
        <NotificationIcon {...props.topNav.settings} />
        <NotificationIcon {...props.topNav.notification} />
      </div>
    </header>
  )
}

TopNav.defaultProps = {
  topNav: PropTypes.object.isRequired
}

export default TopNav;
