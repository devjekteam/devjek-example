import React from 'react';
import PropTypes from 'prop-types';

// css
import './AvatarLink.css';

/**
   * Avatar Link Component
   * link that triggers props.onSelect when clicked
   * contains an image, title and subtext
   * @param  {Object} props
**/
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

AvatarLink.defaultProps = {
  onSelect: () => {}
};

export default AvatarLink;
