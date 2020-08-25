import * as React from 'react';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';

describe('Recorder', () => {
  it('renders App', () => {
    const mockChangeRecordingStatus = jest.fn();
    const container = render(
      <Recorder
        isRecording={false}
        status={'not recorded'}
        onClickStatus={mockChangeRecordingStatus}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
