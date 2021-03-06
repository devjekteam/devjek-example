import React from 'react';
import PropTypes from 'prop-types';

// css
import './NotificationIcon.css';

/**
   * Notification Icon Component
   * icon that has a blue dot in top right corner if props.notifications is true
   */
const NotificationIcon = (props) => {
  let notificationAlert;
  if (props.notifications) {
    notificationAlert = <div className="notification-alert"/>
  }

  return (
    <div className="NotificationIcon" onClick={props.onSelect}>
      <img className="notification-icon-img" src={props.img} />
      {notificationAlert}
    </div>
  )
}

NotificationIcon.PropTypes = {
  onSelect: PropTypes.func,
  img: PropTypes.string.isRequired,
  notifications: PropTypes.bool
}

NotificationIcon.defaultProps = {
  onSelect: () => {}
}

export default NotificationIcon;
