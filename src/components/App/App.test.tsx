import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('renders Hello', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Taped It/i);
  expect(linkElement).toBeInTheDocument();
});
