import React from 'react';
import PropTypes from 'prop-types';

// css
import './NotificationIcon.css';

/**
   * Notification Icon Component
   * @param  {Object} props
   */
const NotificationIcon = (props) => {
  let notification;
  if (props.notifications) {
    notification = <div className="notification-active"/>
  }

  return (
    <div className="NotificationIcon" onClick={props.onSelect}>
      <img className="notification-icon-img" src={props.img} />
      {notification}
    </div>
  )
}

NotificationIcon.PropTypes = {
  onSelect: PropTypes.func,
  img: PropTypes.string.isRequired,
  notifications: PropTypes.bool
}

NotificationIcon.PropTypes = {
  onSelect: () => {}
}

export default NotificationIcon;
