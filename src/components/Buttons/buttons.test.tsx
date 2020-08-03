import * as React from 'react';
import { shallow } from 'enzyme';
import { RecordingButtonText } from './buttons'

describe('Button Text', () => {
  it('displays "start recording" if not recording', () => {
    const wrapper = shallow(<RecordingButtonText isRecording={false} />);
    expect(wrapper.text()).toContain(
      "Start recording"
    );
  });

  it('updates the button text', async () => {
    const wrapper = shallow(<RecordingButtonText isRecording={true} />);
    expect(wrapper.text()).toContain('Stop recording');
  });
})
