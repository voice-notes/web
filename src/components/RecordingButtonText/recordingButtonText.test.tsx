import React from 'react';
import { shallow } from 'enzyme';

import { RecordingButtonText } from './recordingButtonText';

describe('Button Text', () => {
  it('displays "start recording" if not recording', () => {
    const wrapper = shallow(
      <RecordingButtonText currentRecordingStatus={'ready'} />
    );
    expect(wrapper.text()).toContain('Start recording');
  });

  it('isRecording updates the button text', () => {
    const wrapper = shallow(
      <RecordingButtonText currentRecordingStatus={'recording'} />
    );
    expect(wrapper.text()).toContain('Stop recording');
  });

  it('displays rerecord message after the recording is taken', () => {
    const wrapper = shallow(
      <RecordingButtonText currentRecordingStatus={'recorded'} />
    );
    expect(wrapper.text()).toContain('Re-record');
  });

  it('restarts the recording message after re-recording', () => {
    const wrapper = shallow(
      <RecordingButtonText currentRecordingStatus={'recording'} />
    );
    expect(wrapper.text()).toContain('Stop recording');
  });
});
