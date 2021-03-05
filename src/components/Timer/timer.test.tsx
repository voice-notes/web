import React from "react"
import { shallow } from 'enzyme';

import { Timer } from './timer'

describe('Timer', () => {
  it('is defaulted to 00:00', () => {
    const wrapper = shallow(
      <Timer currentRecordingStatus={'ready'}></Timer>
    );
    expect(wrapper.text()).toContain('00:00');
  });
});