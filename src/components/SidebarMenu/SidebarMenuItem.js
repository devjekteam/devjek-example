import React from 'react';
import PropTypes from 'prop-types';

import './SidebarMenuItem.css';

const SidebarMenuItem = (props) =>
  <li className="SidebarMenuItem" onClick={props.onSelect}>
    <span className="SidebarMenuItem-icon">
      <img src={props.icon} />
    </span>
    <span className="SidebarMenuItem-name">{props.name}</span>
  </li>;

SidebarMenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

SidebarMenuItem.propTypes = {
  onSelect: () => {}
};

export default SidebarMenuItem;