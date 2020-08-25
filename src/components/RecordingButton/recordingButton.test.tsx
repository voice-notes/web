import * as React from 'react';
import { shallow } from 'enzyme';
import { RecordingButton, RecordingButtonText } from './recordingButton';

describe('Button', () => {
  it('executes callback on click', () => {
    const mockToggleRecording = jest.fn();
    const wrapper = shallow(
      <RecordingButton
        isRecording={false}
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
    const wrapper = shallow(<RecordingButtonText isRecording={false} />);
    expect(wrapper.text()).toContain('Start recording');
  });

  it('isRecording updates the button text', () => {
    const wrapper = shallow(<RecordingButtonText isRecording={true} />);
    expect(wrapper.text()).toContain('Stop recording');
  });

  it('displays rerecord message after the recording is taken', () => {
    const wrapper = shallow(<RecordingButtonText status={'not recording'} />);
    expect(wrapper.text()).toContain('Rerecord message');
  });
});
