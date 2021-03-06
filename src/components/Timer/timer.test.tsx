import React from 'react';
import { shallow } from 'enzyme';
import { render, act, screen } from '@testing-library/react';

import { Timer } from './timer';

describe('Timer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('is defaulted to 00:00', () => {
    const wrapper = shallow(
      <Timer recordingStatus={'ready'} recordingExists={false}></Timer>
    );
    expect(wrapper.text()).toContain('00:00');
  });
  it('is displays 00:01 after 1 second of the first recording', async () => {
    render(
      <Timer recordingStatus={'recording'} recordingExists={false}></Timer>
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('timeDisplay').textContent).toContain('00:01');
    jest.useRealTimers();
    jest.clearAllTimers();
  });
  it('it resets before rerecording', async () => {
    const { rerender } = render(
      <Timer recordingStatus={'recording'} recordingExists={false}></Timer>
    );
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByTestId('timeDisplay').textContent).toContain('00:03');
    rerender(
      <Timer recordingStatus={'recorded'} recordingExists={true}></Timer>
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('timeDisplay').textContent).toContain('00:03');
    rerender(
      <Timer recordingStatus={'recording'} recordingExists={true}></Timer>
    );
    expect(screen.getByTestId('timeDisplay').textContent).toContain('00:00');
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('timeDisplay').textContent).toContain('00:01');
    jest.useRealTimers();
    jest.clearAllTimers();
  });
});
