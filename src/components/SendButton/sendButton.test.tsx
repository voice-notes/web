import * as React from 'react';
import { shallow } from 'enzyme';
import { SendButton } from './sendButton';

describe('Button', () => {
  it('displays send button after recording', () => {
    const wrapper = shallow(<SendButton recordingStatus={'recorded'} />);
    expect(wrapper.text()).toContain('send');
  });
});
