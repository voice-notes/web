import * as React from 'react';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';

describe('Recorder', () => {
  it('renders App', () => {
    const mockChangeRecordingStatus = jest.fn();
    const container = render(
      <Recorder
        isRecording={false}
        recordingStatus={'not recorded'}
        onClickStatus={mockChangeRecordingStatus}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
