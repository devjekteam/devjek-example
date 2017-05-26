import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

import SidebarMenu from '../../components/SidebarMenu';
import StorageQuota from '../../components/StorageQuota';

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      {
        props.menus.map((menu, i) => <SidebarMenu key={i} {...menu} /> )
      }
      <StorageQuota {...props.quota} />
    </div>
  );
};

Sidebar.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.object),
  quota: PropTypes.object
};

export default Sidebar;