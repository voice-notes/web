import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
jest.mock('../Header/header');
jest.mock('../Recorder/recorder');

test('renders App', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
