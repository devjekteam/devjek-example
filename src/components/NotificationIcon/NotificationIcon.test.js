import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import NotificationIcon from '../NotificationIcon';

const notificationProps = {
  img: '',
  onSelect: sinon.spy(),
  notifications: true
};

const noNotificationProps = {
  img: '',
  onSelect: sinon.spy(),
  notifications: false
};

describe('NotificationIcon', () => {
  const wrapper = mount(
    <div>
      <NotificationIcon {...notificationProps} />
      <NotificationIcon {...noNotificationProps} />
    </div>
  );
  it('should render the components', () => {
    expect(wrapper.find(NotificationIcon).length).toBe(2);
    expect(wrapper.find('img.notification-icon-img').length).toBe(2);
  });
  it('should trigger onSelect when clicked', () => {
    const NotificationIcons = wrapper.find('div.NotificationIcon');
    expect(NotificationIcons.length).toBe(2);
    NotificationIcons.at(0).simulate('click');
    NotificationIcons.at(1).simulate('click');
    expect(notificationProps.onSelect.calledOnce).toBe(true);
    expect(noNotificationProps.onSelect.calledOnce).toBe(true);
  });
  it('should only render notifaction alert div if notification', () => {
    expect(wrapper.find('div.notification-alert').length).toBe(1);
  });
});
