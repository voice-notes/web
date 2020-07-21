import React from 'react';
import { shallow } from 'enzyme';
import { OptionBar } from './optionBar';

describe('Options bar', () => {
  it('renders record button', () => {
    const wrapper = shallow(<OptionBar />);
    expect(wrapper.find('button').text()).toEqual('Start recording');
  });

  it('starts a recording', () => {
    const wrapper = shallow(<OptionBar />);
    wrapper.find('#record').simulate('click');
    expect(wrapper.state('isRecording')).toEqual(true);
  });
});
