import React from 'react';
import { shallow } from 'enzyme';
import NewsSnippet from './NewsSnippet';

describe('NewsSnippet', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<NewsSnippet />);
    expect(wrapper).toMatchSnapshot();
  });
});
