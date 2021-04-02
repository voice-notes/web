import React from 'react';
import { shallow } from 'enzyme';
import { RecordingButton } from './recordingButton';
import { FiCircle, FiSquare } from 'react-icons/fi';

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
    expect(wrapper.containsMatchingElement(<FiCircle />)).toEqual(true);
    expect(wrapper.text()).toContain('Record');
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
    expect(wrapper.containsMatchingElement(<FiSquare />)).toEqual(true);
    expect(wrapper.text()).toContain('Stop');
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
    expect(wrapper.containsMatchingElement(<FiCircle />)).toEqual(true);
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
