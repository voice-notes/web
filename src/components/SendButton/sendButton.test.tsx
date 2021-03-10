import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import axios from 'axios';

import { REACT_APP_BACKEND_GRAPHQL_ENDPOINT } from '../../envVarConfig';
import { SendButton } from './sendButton';

describe('Button', () => {
  it('displays send button after recording', () => {
    const wrapper = shallow(
      <SendButton
        currentRecordingStatus={'recorded'}
        slackId={''}
        responseUrl={''}
        recordedBlob={''}
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
        recordedBlob={''}
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
        recordedBlob={''}
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
        recordedBlob={''}
      />
    );
    expect(wrapper.text()).not.toContain('send');
  });

  it('sends a post request to AWS', async () => {
    axios.post = jest.fn().mockResolvedValue({
      data: {
        url: 'testAudioUrl',
      },
    });
    const { getByText } = render(
      <SendButton
        currentRecordingStatus={'recorded'}
        slackId={''}
        responseUrl={''}
        recordedBlob={''}
      />
    );
    await fireEvent.click(getByText('send'));
    expect(axios.post).toHaveBeenCalledTimes(2);
    expect(axios.post).toHaveBeenCalledWith('AWS url', { blob: '' });
    setImmediate(() => {
      expect(axios.post).toHaveBeenCalledWith(`${REACT_APP_BACKEND_GRAPHQL_ENDPOINT}`, {
        slackId: '',
        responseUrl: '',
        audioUrl: 'testAudioUrl',
      });
    });
  });
});
