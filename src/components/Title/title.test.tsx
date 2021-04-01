import React from 'react';
import { shallow } from 'enzyme';

import { Title } from './title';

describe('Title', () => {
  it('displays "Tape It" when not recording', () => {
    const wrapper = shallow(<Title recordingStatus={'ready'} />);
    expect(wrapper.text()).toEqual('Tape It');
  });

  it('displays "Taping It" when recording', () => {
    const wrapper = shallow(<Title recordingStatus={'recording'} />);
    expect(wrapper.text()).toEqual('Taping It');
  });
});
