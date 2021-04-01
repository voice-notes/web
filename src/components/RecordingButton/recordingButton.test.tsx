import React from 'react';
import { shallow } from 'enzyme';
import { RecordingButton } from './recordingButton';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

describe('Button', () => {
  const mockToggleRecording = jest.fn();

  it('executes callback on click', () => {
    const wrapper = shallow(
      <RecordingButton
        recordingStatus={'ready'}
        onClickRecord={() => {
          mockToggleRecording();
        }}
      />
    );
    expect(wrapper.containsMatchingElement(<TiMediaRecordOutline />)).toEqual(
      true
    );
    expect(wrapper.text()).toContain('Start recording');
  });

  it('renders correctly when recording status is recording', () => {
    const wrapper = shallow(
      <RecordingButton
        recordingStatus={'recording'}
        onClickRecord={() => {
          mockToggleRecording();
        }}
      />
    );
    expect(wrapper.containsMatchingElement(<TiMediaStopOutline />)).toEqual(
      true
    );
    expect(wrapper.text()).toContain('Stop recording');
  });

  it('renders correctly when recording status is not recording', () => {
    const wrapper = shallow(
      <RecordingButton
        recordingStatus={'recorded'}
        onClickRecord={() => {
          mockToggleRecording();
        }}
      />
    );
    expect(wrapper.containsMatchingElement(<TiMediaRecordOutline />)).toEqual(
      true
    );
    expect(wrapper.text()).toContain('Re-record');
  });

  it('executes callback on click', () => {
    const wrapper = shallow(
      <RecordingButton
        recordingStatus={'ready'}
        onClickRecord={() => {
          mockToggleRecording();
        }}
      />
    );
    wrapper.find('button').simulate('click');
    expect(mockToggleRecording).toHaveBeenCalled();
  });
});
