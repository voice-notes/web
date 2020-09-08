import * as React from 'react';
import { shallow } from 'enzyme';
import { RecordingButton, RecordingButtonText } from './recordingButton';

describe('Button', () => {
  it('executes callback on click', () => {
    const mockToggleRecording = jest.fn();
    const wrapper = shallow(
      <RecordingButton
        isRecording={false}
        recordingStatus={'not recorded'}
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
        isRecording={false}
        recordingStatus={'not recorded'}
      />
    );
    expect(wrapper.text()).toContain('Start recording');
  });

  it('isRecording updates the button text', () => {
    const wrapper = shallow(
      <RecordingButtonText
        isRecording={true}
        recordingStatus={'not recorded'}
      />
    );
    expect(wrapper.text()).toContain('Stop recording');
  });

  it('displays rerecord message after the recording is taken', () => {
    const wrapper = shallow(
      <RecordingButtonText isRecording={false} recordingStatus={'recorded'} />
    );
    expect(wrapper.text()).toContain('Re-record');
  });

  it('restarts the recording message after re-recording', () => {
    const wrapper = shallow(
      <RecordingButtonText isRecording={true} recordingStatus={'recording'} />
    );
    expect(wrapper.text()).toContain('Stop recording');
  });
});
