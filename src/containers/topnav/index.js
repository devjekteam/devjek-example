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
        <img src={props.logo} />
      </div>
      <div className="site-search">
        <SearchBar {...props.search} />
      </div>
      <div className="avatar-links">
        {
          props.avatarLinks.map((item, i) => <AvatarLink key={i} {...item} /> )
        }
      </div>
      <div className="settings">
        {
          props.notificationIcons.map((item, i) => <NotificationIcon key={i} {...item} /> )
        }
      </div>
    </header>
  )
}

TopNav.defaultProps = {
  topNav: PropTypes.object.isRequired
}

export default TopNav;
