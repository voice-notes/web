import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { Header } from './header';

it('renders correctly', () => {
  const container = render(<Header img="test">Test</Header>);
  expect(container).toMatchSnapshot();
});

describe('Header', () => {
  test('renders title', () => {
    const wrapper = shallow(<Header img="cassette">Taped It</Header>);
    expect(wrapper.find('h1').text()).toEqual('Taped It');
  });
});
