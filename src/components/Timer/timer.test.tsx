import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import { Timer } from './timer';

describe('Timer', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  })
  it('is defaulted to 00:00', () => {
    const wrapper = shallow(<Timer currentRecordingStatus={'ready'}></Timer>);
    expect(wrapper.text()).toContain('00:00');
  });
  it('is defaulted to 00:00', async () => {
    const {getByTestId} = render(<Timer currentRecordingStatus={'recording'}></Timer>);
    jest.advanceTimersByTime(1000);
    expect(getByTestId('timeDisplay').textContent).toContain('00:01');
    jest.useRealTimers();
  });
});
