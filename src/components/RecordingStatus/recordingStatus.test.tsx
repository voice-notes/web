import React from 'react';
import { shallow } from 'enzyme';
import { RecordingStatus } from './recordingStatus';

describe('RecordingStatus', () => {

  it('renders the current recording status', () => {
    const wrapper = shallow(<RecordingStatus isRecording={false} />);
    expect(wrapper.find('.status').text()).toEqual("Ready to record..");
  })
})