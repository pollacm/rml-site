import React from 'react';
import { shallow } from 'enzyme';
import YourLeagues from './YourLeagues';

describe('YourLeagues', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<YourLeagues />);
    expect(wrapper).toMatchSnapshot();
  });
});
