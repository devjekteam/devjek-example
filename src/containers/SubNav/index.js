import React from 'react';
import PropTypes from 'prop-types';
import './SubNav.css';

import MenuItem from '../../components/MenuItem';
import SelectMenuIcon from '../../components/SelectMenuIcon';

const SubNav = (props) => {
  return (
    <div className="SubNav">
      {
        props.items.map((item, i) => <MenuItem key={i} {...item} /> )
      }
      <div className="items-selected-text">
        <p>You have {props.itemsSelectedNumber} selected items</p>
      </div>
      <div className="sort-icons">
        {
          props.selectMenuIcons.map((item, i) => <SelectMenuIcon key={i} {...item} />)
        }
      </div>
    </div>
  );
};

SubNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectMenuIcons: PropTypes.arrayOf(PropTypes.object),
  itemsSelectedNumber: PropTypes.number,
};

export default SubNav;
