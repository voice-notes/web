import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

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

  it('sends a post request to AWS', async () => {
    axios.post = jest.fn();
    const wrapper = shallow(
      <SendButton
        currentRecordingStatus={'recorded'}
        slackId={''}
        responseUrl={''}
        recordedBlob={''}
      />
    );
    await wrapper.find("#send").simulate('click')
    expect(axios.post).toHaveBeenCalledWith("AWS url", {blob: ''})
    expect(axios.post).toHaveBeenCalledWith("backend url", {slackId: '', responseUrl: '', audioUrl: ''})
  })
});
