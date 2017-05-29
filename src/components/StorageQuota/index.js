import React from 'react';
import PropTypes from 'prop-types';

import './StorageQuota.css';

/**
   * Storage Quota Component
   * shows how much storage has been used
   * @param  {Object} props
**/
const StorageQuota = (props) => {
  const percentageUsed = ((props.used / props.available) * 100 ).toFixed(2);
  return (
    <div className="StorageQuota">
      <span className="StorageQuota-prompt">{props.used}GB of {props.available}GB used</span>
      <div className="StorageQuota-quotaBar">
        <div className="StorageQuota-quotaBar-used" style={{width: percentageUsed + '%'}} />
      </div>
    </div>
  )
};

StorageQuota.propTypes = {
  used: PropTypes.number.isRequired,
  available: PropTypes.number.isRequired
};

export default StorageQuota;
