import React from 'react';
import { shallow } from 'enzyme';
import { RecordingStatusText } from './recordingStatusText';

describe('RecordingStatusText', () => {
  it('renders the current recording status', () => {
    const wrapper = shallow(<RecordingStatusText recordingStatus={'ready'} />);
    expect(wrapper.find('.status').text()).toEqual('Ready to record...');
  });

  it('updates text if status changes to true', () => {
    const wrapper = shallow(
      <RecordingStatusText recordingStatus={'recording'} />
    );
    expect(wrapper.find('.status').text()).toEqual('Recording...');
  });
});
