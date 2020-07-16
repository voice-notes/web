import * as React from 'react';
import { shallow, render } from 'enzyme';
import { Header } from './header';

describe('Header', () => {
  test('renders title', () => {
    const wrapper = shallow(<Header img="cassette">Taped It</Header>);
    expect(wrapper.find('h1').text()).toEqual('Taped It');
  });
});
