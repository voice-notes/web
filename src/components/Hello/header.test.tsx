import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header';

describe('Header', () => {
  test('renders image and title', () => {
    const wrapper = shallow(<Header img="cassette">Taped It</Header>);
    expect(wrapper.find('h1').text()).toEqual('Taped It');
  });
});
