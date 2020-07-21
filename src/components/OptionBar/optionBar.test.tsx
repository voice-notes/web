import React from 'react';
import { shallow } from 'enzyme';
import { OptionBar } from './optionBar';

describe('Options bar', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<OptionBar />);
  });

  it('renders record button', () => {
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
