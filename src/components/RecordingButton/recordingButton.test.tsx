import * as React from 'react';
import { mount } from 'enzyme';
import { RecordingButton } from './recordingButton';

describe('Button Text', () => {
  it('displays "start recording" if not recording', () => {
    const wrapper = mount(
      <RecordingButton isRecording={false} onClickRecord={jest.fn()} />
    );
    expect(wrapper.text()).toContain('Start recording');
  });

  it('isRecording updates the button text', async () => {
    const wrapper = mount(
      <RecordingButton isRecording={true} onClickRecord={jest.fn()} />
    );
    expect(wrapper.text()).toContain('Stop recording');
  });
});
