import React from 'react';
import { shallow } from 'enzyme';
import { FormAddUser } from '../index';
import expect from 'expect';

describe('FormAddUser component', () => {
  const defaultProps = {
    disabled: false,
    addUser: () => ({}),
  };

  it('should render correctly', () => {
    const component = shallow(<FormAddUser {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  it('Changes firstName correctly', () => {
    const wrapper = shallow(<FormAddUser {...defaultProps} />);
    const newFirstName = 'newFirstName';

    wrapper.instance().handleFirstNameChange(newFirstName);

    expect(wrapper.state('firstName')).toBe(newFirstName);
  });
});
