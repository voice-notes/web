import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme'
import { App } from './App';
import { Recorder } from '../Recorder/recorder'

jest.mock('react-mic', () => {
  return {
    ReactMic: () => {
      return <div></div>;
    },
  };
});

jest.mock('../Recorder/recorder')

test('renders App', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});

describe('toggle state', () => {
  it('renders record button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').text()).toContain("<RecordingIcon />Start recording");
  });

  it('updates the button text', async() => {
    const wrapper = mount(<App />);
    wrapper.find('#record').simulate('click')
    await expect(wrapper.find('button').text()).toContain("Stop recording");
  });

  it('toggles back to false', async() => {
    const wrapper = mount(<App />);
    wrapper.find('#record').simulate('click');
    wrapper.find('#record').simulate('click');
    await expect(wrapper.find('button').text()).toContain("Start recording");
  });
})
