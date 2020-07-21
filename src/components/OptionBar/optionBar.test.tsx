import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
// import { Header } from './header';

describe('Options bar', () => {
  it('renders record button', () => {
    const wrapper = shallow(<OptionBar/>);
    expect(wrapper.find('button')).toHaveTextContent('Start recording')
  })
})