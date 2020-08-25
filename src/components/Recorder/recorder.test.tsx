import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { Recorder } from './recorder';
import { Timer } from '../Timer/timer';

describe('Recorder', () => {
  it('renders App', () => {
    const mockChangeRecordingStatus = jest.fn();
    const container = render(
      <Recorder
        isRecording={false}
        status={'not recorded'}
        onClickStatus={() => {
          mockChangeRecordingStatus();
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
