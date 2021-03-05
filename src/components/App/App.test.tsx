import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
jest.mock('../Header/header');
jest.mock('../Recorder/recorder');

const baseResponseUrl = process.env.REACT_APP_BASE_RES_URL;

beforeEach((): void => {
  window.history.pushState({}, 'Foo', '?&sender=sender&p1=one&p2=two&p3=three');
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders App', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});

test('captures and stores query params', () => {
  const setResponseUrl = jest.fn();

  const useStateMock: any = (initState: any) => [initState, setResponseUrl];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  const mockResponseUrl = `${baseResponseUrl}/one/two/three`;

  render(<App />);

  expect(setResponseUrl).toHaveBeenCalledWith(mockResponseUrl);
});

test('captures and stores query params', () => {
  const setSlackId = jest.fn();

  const useStateMock: any = (initState: any) => [initState, setSlackId];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  const mockSlackId = 'sender';

  render(<App />);

  expect(setSlackId).toHaveBeenCalledWith(mockSlackId);
});
