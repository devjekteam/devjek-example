import React from 'react';
import PropTypes from 'prop-types';

import './SidebarMenuItem.css';

const SidebarMenuItem = (props) =>
  <li className="SidebarMenuItem">
    <span className="SidebarMenuItem-icon">
      <img src={props.icon} />
    </span>
    <span className="SidebarMenuItem-name">{props.name}</span>
  </li>;

SidebarMenuItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string
};

export default SidebarMenuItem;