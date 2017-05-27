import React from 'react';
import PropTypes from 'prop-types';

import './SelectMenuIcon.css';

const SelectMenuIcon = (props) =>
  <li className="SelectMenuIcon" onClick={props.onSelect}>
    <span className="SelectMenuIcon-icon">
      <img src={props.icon} className={ props.selected ? "selected" : ""}/>
    </span>
  </li>;

SelectMenuIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func
};

SelectMenuIcon.defaultProps = {
  onSelect: () => {}
};

export default SelectMenuIcon;
