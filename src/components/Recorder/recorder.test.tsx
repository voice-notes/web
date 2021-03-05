import React from 'react';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';

describe('Recorder', () => {
  it('renders App', () => {
    const container = render(<Recorder currentRecordingStatus={'ready'} />);
    expect(container).toMatchSnapshot();
  });
});
