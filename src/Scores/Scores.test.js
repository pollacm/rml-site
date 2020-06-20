import React from 'react';
import { shallow } from 'enzyme';
import Scores from './Scores';

describe('Scores', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Scores />);
    expect(wrapper).toMatchSnapshot();
  });
});
