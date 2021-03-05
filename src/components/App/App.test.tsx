import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
jest.mock('../Header/header');
jest.mock('../Recorder/recorder');

beforeEach((): void => {
  window.history.pushState({}, 'Foo', '?&sender=sender&p1=one&p2=two&p3=three');
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders App', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});

test('captures and stores query params', () => {
  const setQueryParams = jest.fn();

  const useStateMock: any = (initState: any) => [initState, setQueryParams];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  const args = { p1: 'one', p2: 'two', p3: 'three', sender: 'sender' };

  const app = render(<App />);

  expect(setQueryParams).toHaveBeenCalledWith(args);
});
