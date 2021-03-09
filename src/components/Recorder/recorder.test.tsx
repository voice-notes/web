import React from 'react';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';
import { isJSDocEnumTag } from 'typescript';

describe('Recorder', () => {
  it('renders App', () => {
    const container = render(<Recorder currentRecordingStatus={'ready'} saveBlob={jest.fn()}/>);
    expect(container).toMatchSnapshot();
  });
});
