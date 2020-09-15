import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';
import { Timer } from '../Timer';

describe('Recorder', () => {
  it('renders App', () => {
    const mockChangeRecordingStatus = jest.fn();
    const container = render(
      <Recorder
        isRecording={false}
        recordingStatus={'not recorded'}
        onClickStatus={mockChangeRecordingStatus}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Timer', () => {
  it('is defaulted to 00:00', () => {
    const wrapper = shallow(
      <Timer isRecording={false} recordingStatus={'not recorded'}></Timer>
    );
    expect(wrapper.text()).toContain('00:00');
  });
});
