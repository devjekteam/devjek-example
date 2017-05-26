import React from 'react';

// components
import SearchBar from '../../components/SearchBar';

// css
import './TopNav.css';

export default (props) => {
  console.log(props);

  return (
    <header className="site-head">
      <div className="logo">
        <img src={props.topNav.logo} />
      </div>
      <div className="site-search">
        <SearchBar onSubmit={props.topNav.search.onSubmit} />
      </div>
    </header>
  )
}
