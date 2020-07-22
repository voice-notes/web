import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

jest.mock('react-mic', () => {
  return {
    ReactMic: () => {
      return <div></div>;
    }
  }
})

test('renders App', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
