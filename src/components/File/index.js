import React from 'react';
import PropTypes from 'prop-types';

import './File.css';

import ActionMenu from './ActionMenu';

const File = (props) => {
  return (
    <div className="File">
      <div onClick={props.onSelect}>
        <img className="File-image" src={props.image} />
        {props.selected && <span className="File-selected"><img src={require('../../public/files/selected-icon.png')} /></span>}
        <span className="File-name">{props.name}</span>
      </div>
      <div className="File-actionBar">
        <span className="File-actionBar-data">{props.published}, {props.size}</span>
        <ActionMenu onShare={props.onShare} onDownload={props.onDownload} onDelete={props.onDelete} />
      </div>
    </div>
  )
};

File.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  percentLoaded: PropTypes.number,
  published: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

File.defaultProps = {
  percentLoaded: null,
  selected: false
};

export default File;