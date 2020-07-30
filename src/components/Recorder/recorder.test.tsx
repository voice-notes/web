import * as React from 'react';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';

jest.mock('react-mic', () => {
  return {
    ReactMic: () => {
      return <div></div>;
    },
  };
});
describe('Recorder', () => {
  it('renders App', () => {
    const container = render(<Recorder isRecording={false} />);
    expect(container).toMatchSnapshot();
  });
});
