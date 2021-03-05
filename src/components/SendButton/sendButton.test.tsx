import React from 'react';
import { shallow } from 'enzyme';
import { SendButton } from './sendButton';

describe('Button', () => {
  it('displays send button after recording', () => {
    const wrapper = shallow(
      <SendButton
        currentRecordingStatus={'recorded'}
        slackId={''}
        responseUrl={''}
      />
    );
    expect(wrapper.text()).toContain('send');
  });

  it('does not display send button before recording', () => {
    const wrapper = shallow(
      <SendButton
        currentRecordingStatus={'ready'}
        slackId={''}
        responseUrl={''}
      />
    );
    expect(wrapper.text()).not.toContain('send');
  });

  it('does not display send button during recording', () => {
    const wrapper = shallow(
      <SendButton
        currentRecordingStatus={'recording'}
        slackId={''}
        responseUrl={''}
      />
    );
    expect(wrapper.text()).not.toContain('send');
  });
});
