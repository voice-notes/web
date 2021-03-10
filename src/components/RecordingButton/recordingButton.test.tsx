import React from 'react';
import { shallow } from 'enzyme';
import { RecordingButton } from './recordingButton';

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
