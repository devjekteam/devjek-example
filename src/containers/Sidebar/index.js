import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

import SidebarMenu from '../../components/SidebarMenu';

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      {
        props.navMenus.map(menu => <SidebarMenu title={menu.title} items={menu.items} /> )
      }
    </div>
  );
};

Sidebar.propTypes = {
  navMenus: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;