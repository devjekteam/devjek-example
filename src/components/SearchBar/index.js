import React from 'react';

// css
import './SearchBar.css';

/**
   * Search Bar Component
   * @param  {Object} props
   */
export default (props) => {
  return (
    <div className="SearchBar">
      <form className="search-form" onSubmit={props.onSubmit}>
        <input type="search" id="search" placeholder="Type to Search..."/>
        <input type="submit" className="icon" value=""></input>
      </form>
    </div>
  )
}
