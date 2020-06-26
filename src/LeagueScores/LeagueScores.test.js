import React from 'react';
import { shallow } from 'enzyme';
import LeagueScores from './LeagueScores';

describe('LeagueScores', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LeagueScores />);
    expect(wrapper).toMatchSnapshot();
  });
});
