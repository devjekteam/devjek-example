import React from 'react';

// css
import './SearchBar.css';

/**
   * Search Bar Component
   * @param  {Object} props
   */
export default (props) => {
  console.log(props);
  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={props.onSubmit}>
        <input type="search" id="search" placeholder="Type to Search..."/>
        <input type="submit" className="icon" value=""></input>
      </form>
    </div>
  )
}
