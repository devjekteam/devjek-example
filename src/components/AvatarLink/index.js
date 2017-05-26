import React from 'react';

// css
import './AvatarLink.css';

/**
   * Avartar Link Component
   * @param  {Object} props
   */
export default (props) => {
  return (
    <div className="AvatarLink" onClick={props.onClick}>
      <img className="avatar-img" src={props.img} />
      <div className="avatar-text">
        <h4>{props.title}</h4>
        <p>{props.subtext}</p>
      </div>
    </div>
  )
}
