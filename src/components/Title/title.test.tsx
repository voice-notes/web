import * as React from 'react';
import { shallow } from 'enzyme';
import { Title } from './title';

describe('Title', () => {
  it('displays "Tape It" when not recording', () => {
    const wrapper = shallow(<Title isRecording={false} />);
    expect(wrapper.text()).toEqual('Tape It');
  });
});
