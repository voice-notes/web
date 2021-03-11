import React from 'react';
import { shallow } from 'enzyme';
import { render, act } from '@testing-library/react';

import { Timer } from './timer';

describe('Timer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('is defaulted to 00:00', () => {
    const wrapper = shallow(
      <Timer currentRecordingStatus={'ready'} recordingExists={false}></Timer>
    );
    expect(wrapper.text()).toContain('00:00');
  });
  it('is displays 00:01 after 1 second of the first recording', async () => {
    const { getByTestId } = render(
      <Timer
        currentRecordingStatus={'recording'}
        recordingExists={false}
      ></Timer>
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId('timeDisplay').textContent).toContain('00:01');
    jest.useRealTimers();
  });
  it('it resets before rerecording', async () => {
    const { getByTestId, rerender } = render(
      <Timer
        currentRecordingStatus={'recording'}
        recordingExists={false}
      ></Timer>
    );
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(getByTestId('timeDisplay').textContent).toContain('00:03');
    rerender(
      <Timer currentRecordingStatus={'recorded'} recordingExists={true}></Timer>
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId('timeDisplay').textContent).toContain('00:03');
    rerender(
      <Timer
        currentRecordingStatus={'recording'}
        recordingExists={true}
      ></Timer>
    );
    expect(getByTestId('timeDisplay').textContent).toContain('00:00');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId('timeDisplay').textContent).toContain('00:01');
    jest.useRealTimers();
  });
});
