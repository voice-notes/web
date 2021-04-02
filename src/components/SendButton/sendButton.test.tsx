import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { shallow } from 'enzyme';
import axios from 'axios';

import { SendButton } from './sendButton';
import { sendFileToCloud } from '../../utils/index';

jest.mock('../../utils/sendFileToCloud');
jest.mock('axios');

describe('Button', () => {
  it('displays send button after recording', () => {
    const wrapper = shallow(
      <SendButton
        recordingStatus={'recorded'}
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
        recordingStatus={'ready'}
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
        recordingStatus={'recording'}
        slackId={''}
        responseUrl={''}
        recordedBlob={''}
      />
    );
    expect(wrapper.text()).not.toContain('send');
  });

  it('sends a post request to AWS and to backend', async () => {
    const { getByTestId } = render(
      <SendButton
        recordingStatus={'recorded'}
        slackId={''}
        responseUrl={''}
        recordedBlob={''}
      />
    );

    await act(async () => {
      fireEvent.click(getByTestId('sendButton'));
    });

    expect(sendFileToCloud).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
