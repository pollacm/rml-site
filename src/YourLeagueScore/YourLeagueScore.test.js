import React from 'react';
import { shallow } from 'enzyme';
import YourLeagueScore from './YourLeagueScore';

describe('YourLeagueScore', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<YourLeagueScore />);
    expect(wrapper).toMatchSnapshot();
  });
});
