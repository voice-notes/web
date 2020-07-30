import * as React from 'react';
import { shallow } from 'enzyme';
import { Recorder } from './recorder';

jest.mock('react-mic', () => {
  return {
    ReactMic: () => {
      return <div></div>;
    },
  };
});
describe('Recorder', () => {
  
});
