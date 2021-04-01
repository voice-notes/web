import React from 'react';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';

describe('Recorder', () => {
  it('renders App', () => {
    const container = render(
      <Recorder recordingStatus={'ready'} saveBlob={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });
});
