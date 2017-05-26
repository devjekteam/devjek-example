import React from 'react';
import PropTypes from 'prop-types';

// css
import './SearchBar.css';

/**
   * Search Bar Component
   * @param  {Object} props
   */
const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <form className="search-form" onSubmit={props.onSubmit}>
        <input type="search" className="search" placeholder="Type to Search..."/>
        <input type="submit" className="icon" value=""></input>
      </form>
    </div>
  )
};

SearchBar.PropTypes = {
  onSubmit: PropTypes.func
}

SearchBar.defaultProps = {
  onSubmit: () => {}
}

export default SearchBar;
