import React from 'react';
import { mount } from 'enzyme';

import StorageQuota from '../StorageQuota';

const defaultProps = {
  used: 1.1,
  available: 2
};

describe('StorageQuota', () => {
  const wrapper = mount(<div><StorageQuota {...defaultProps} /></div>);
  it('should render the component', () => {
    expect(wrapper.find(StorageQuota).length).toBe(1);
  });
  it('should render the prompt correctly', () => {
    const prompt = wrapper.find('.StorageQuota-prompt');
    expect(prompt.length).toBe(1);
    expect(prompt.text()).toBe(`${defaultProps.used}GB of ${defaultProps.available}GB used`);
  });
  it('should render the quota bar', () => {
    const quotaBar = wrapper.find('.StorageQuota-quotaBar');
    expect(quotaBar.length).toBe(1);
    const quotaBarUsed = wrapper.find('.StorageQuota-quotaBar-used');
    expect(quotaBarUsed.length).toBe(1);
  });
});