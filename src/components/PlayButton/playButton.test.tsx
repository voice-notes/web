import React from 'react';
import { shallow } from 'enzyme';

import { PlayButton } from './playButton';

describe('Button', () => {
  it('displays play button after recording', () => {
    const wrapper = shallow(
      <PlayButton recordingStatus={'recorded'} setIsPlaying={jest.fn()} />
    );
    expect(wrapper.text()).toContain('play');
  });

  it('does not display play button before recording', () => {
    const wrapper = shallow(
      <PlayButton recordingStatus={'ready'} setIsPlaying={jest.fn()} />
    );
    expect(wrapper.text()).not.toContain('play');
  });

  it('does not display play button during recording', () => {
    const wrapper = shallow(
      <PlayButton recordingStatus={'recording'} setIsPlaying={jest.fn()} />
    );
    expect(wrapper.text()).not.toContain('play');
  });
});
