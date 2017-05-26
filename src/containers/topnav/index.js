import React from 'react';

// components
import SearchBar from '../../components/SearchBar';
import AvatarLink from '../../components/AvatarLink';

// css
import './TopNav.css';

export default (props) => {
  console.log(props);

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
    </header>
  )
}
