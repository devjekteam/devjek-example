import React from 'react';
import PropTypes from 'prop-types';

import './SidebarMenu.css';

import SidebarMenuItem from '../MenuItem';

/**
   * Sidebar Menu Component
   * vertical container that has a title and list of MenuItems
**/
const SidebarMenu = (props) => {
  return (
    <div className="SidebarMenu">
      <h2 className="SidebarMenu-title">{props.title}</h2>
      <ul className="SidebarMenu-list">
        {
          props.items.map((item, i) => <SidebarMenuItem key={i} {...item} />)
        }
      </ul>
    </div>
  )
};

SidebarMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default SidebarMenu;
