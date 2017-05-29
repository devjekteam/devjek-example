import React from 'react';
import PropTypes from 'prop-types';

import './MenuItem.css';

/**
   * Menu Item Component
   * icon and text link that triggers props.onSelect when clicked
   * @param  {Object} props
**/
const MenuItem = (props) =>
  <li className="MenuItem" onClick={props.onSelect}>
    <span className="MenuItem-icon">
      <img src={props.icon} />
    </span>
    <span className="MenuItem-name">{props.name}</span>
  </li>;

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

MenuItem.defaultProps = {
  onSelect: () => {}
};

export default MenuItem;
