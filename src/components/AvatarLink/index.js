import React from 'react';
import PropTypes from 'prop-types';

// css
import './AvatarLink.css';

/**
   * Avartar Link Component
   * @param  {Object} props
   */
const AvatarLink = (props) => {
  return (
    <div className="AvatarLink" onClick={props.onSelect}>
      <img className="avatar-img" src={props.img} />
      <div className="avatar-text">
        <h4>{props.title}</h4>
        <p>{props.subtext}</p>
      </div>
    </div>
  )
};

AvatarLink.PropTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  onSelect: PropTypes.func
};

AvatarLink.PropTypes = {
  onSelect: () => {}
};

export default AvatarLink;
