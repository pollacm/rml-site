import React from 'react';
import { shallow } from 'enzyme';
import LeagueHeader from './LeagueHeader';

describe('LeagueHeader', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LeagueHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
