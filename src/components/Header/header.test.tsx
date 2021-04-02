import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './header';

it('renders correctly', () => {
  const container = render(<Header recordingStatus={'ready'} />);
  expect(container).toMatchSnapshot();
});
