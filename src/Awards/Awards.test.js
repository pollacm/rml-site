import React from 'react';
import { shallow } from 'enzyme';
import Awards from './Awards';

describe('Awards', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Awards />);
    expect(wrapper).toMatchSnapshot();
  });
});
