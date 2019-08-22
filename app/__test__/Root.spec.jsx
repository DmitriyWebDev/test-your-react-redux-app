import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root';
import expect from 'expect';

describe('Root component', () => {
  it('should render correctly', () => {
    const component = shallow(<Root />);

    expect(component).toMatchSnapshot();
  });
});
