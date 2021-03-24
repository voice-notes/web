import React from 'react';
import { shallow } from 'enzyme';

import { PlayButton } from './playButton';

describe('Button', () => {
    it('displays play button after recording', () => {
      const wrapper = shallow(
        <PlayButton
          currentRecordingStatus={'recorded'}
          setIsPlaying={jest.fn()}
        />
      );
      expect(wrapper.text()).toContain('play');
    });
  
    it('does not display play button before recording', () => {
      const wrapper = shallow(
        <PlayButton
          currentRecordingStatus={'ready'}
          setIsPlaying={jest.fn()}
        />
      );
      expect(wrapper.text()).not.toContain('play');
    });
  
    it('does not display play button during recording', () => {
      const wrapper = shallow(
        <PlayButton
          currentRecordingStatus={'recording'}
          setIsPlaying={jest.fn()}
        />
      );
      expect(wrapper.text()).not.toContain('play');
    });
});