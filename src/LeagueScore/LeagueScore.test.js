import React from 'react';
import { shallow } from 'enzyme';
import LeagueScore from './LeagueScore';

describe('LeagueScore', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LeagueScore />);
    expect(wrapper).toMatchSnapshot();
  });
});
