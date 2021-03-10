import React from 'react';
import { mount } from 'enzyme';
import { TiMediaRecordOutline, TiMediaStopOutline } from 'react-icons/ti';

import { RecordingButtonIcon } from './recordingButtonIcon';

describe('RecordingButtonIcon', () => {
    it('renders correctly when recording status is recording', () => {
        const wrapper = mount(
            <RecordingButtonIcon currentRecordingStatus={'recording'} />
          );
          expect(wrapper.containsMatchingElement(<TiMediaStopOutline />)).toEqual(true);
    });
    it('renders correctly when recording status is not recording', () => {
        const wrapper = mount(
            <RecordingButtonIcon currentRecordingStatus={'recorded'} />
          );
          expect(wrapper.containsMatchingElement(<TiMediaRecordOutline />)).toEqual(true);
    });
});