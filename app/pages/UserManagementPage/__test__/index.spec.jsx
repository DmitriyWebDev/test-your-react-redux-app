import React from 'react';
import { shallow } from 'enzyme';
import { UserManagementPage } from '../index';
import expect from 'expect';
import sinon from 'sinon';

describe('UserManagementPage component', () => {
  const defaultProps = {
    usersList: [],
    pageIsLoading: false,
    userAdditionIsLoaded: false,
    userDeletingIsLoaded: false,
    getUsersList: () => ({}),
    addUser: () => ({}),
    deleteUser: () => ({}),
    resetPageData: () => ({}),
  };

  it('should render correctly', () => {
    const component = shallow(<UserManagementPage {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });

  /** Test events handling (in react components lifecycle hooks) */

  it('Requests users on lifecycle hook "ComponentDidMount"', () => {
    const getUsersList = jest.fn();
    const props = {
      ...defaultProps,
      getUsersList,
    };

    shallow(<UserManagementPage {...props} />);

    expect(getUsersList).toBeCalledTimes(1);
  });

  it('Requests users on lifecycle hook "ComponentDidUpdate", if user added', () => {
    const wrapper = shallow(<UserManagementPage {...defaultProps} />);
    const props = {
      ...defaultProps,
      getUsersList: () => ({}),
      userAdditionIsLoaded: false,
    };
    const getUsersList = sinon.stub(props, 'getUsersList');

    wrapper.setProps({ ...props, userAdditionIsLoaded: true });

    expect(getUsersList.calledOnce).toBe(true);
  });
});
