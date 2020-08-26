import * as React from 'react';
import { shallow } from 'enzyme';
import { SendButton } from './sendButton';

describe('Button', () => {
  it('displays send button after recording', () => {
    const wrapper = shallow(<SendButton status={'recorded'} />);
    expect(wrapper.text()).toContain('send');
  });
});
