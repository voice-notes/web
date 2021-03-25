import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import axios from 'axios';

import { SendButton } from './sendButton';
import { sendFile } from '../../utils/sendFile';

jest.mock('../../utils/sendFile');
jest.mock('axios');

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

  it('sends a post request to AWS and to backend', async () => {
    render(
      <SendButton
        currentRecordingStatus={'recorded'}
        slackId={''}
        responseUrl={''}
        recordedBlob={''}
      />
    );

    await act(async () => {
      fireEvent.click(screen.getByText('send'));
    });

    expect(sendFile).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
