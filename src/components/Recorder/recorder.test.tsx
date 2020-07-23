import React from 'react';
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
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Recorder />);
  });

  it('renders record button', () => {
    const wrapper = shallow(<Recorder />);
    expect(wrapper.find('button').text()).toEqual('Start recording');
  });

  it('updates the button text', () => {
    wrapper.find('#record').simulate('click');
    expect(wrapper.find('button').text()).toEqual('Stop recording');
  });

  it('is not recording by default', () => {
    expect(wrapper.state('isRecording')).toEqual(false);
  });

  it('toggles the state of a recording', () => {
    wrapper.find('#record').simulate('click');
    expect(wrapper.state('isRecording')).toEqual(true);
  });

  it('stops a recording', () => {
    wrapper.find('#record').simulate('click');
    wrapper.find('#record').simulate('click');
    expect(wrapper.state('isRecording')).toEqual(false);
  });
});
