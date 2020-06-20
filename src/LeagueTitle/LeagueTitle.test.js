import React from 'react';
import { shallow } from 'enzyme';
import LeagueTitle from './LeagueTitle';

describe('LeagueTitle', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LeagueTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
