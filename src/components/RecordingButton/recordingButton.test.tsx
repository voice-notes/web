import React from 'react';
import { shallow } from 'enzyme';
import { RecordingButton, RecordingButtonText } from './recordingButton';

describe('Button', () => {
  it('executes callback on click', () => {
    const mockToggleRecording = jest.fn();
    const wrapper = shallow(
      <RecordingButton
        currentRecordingStatus={'ready'}
        onClickRecord={() => {
          mockToggleRecording();
        }}
      />
    );
    wrapper.find('button').simulate('click');
    expect(mockToggleRecording).toHaveBeenCalled();
  });
});

describe('Button Text', () => {
  it('displays "start recording" if not recording', () => {
    const wrapper = shallow(
      <RecordingButtonText
        currentRecordingStatus={'ready'}
      />
    );
    expect(wrapper.text()).toContain('Start recording');
  });

  it('isRecording updates the button text', () => {
    const wrapper = shallow(
      <RecordingButtonText
        currentRecordingStatus={'recording'}
      />
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
