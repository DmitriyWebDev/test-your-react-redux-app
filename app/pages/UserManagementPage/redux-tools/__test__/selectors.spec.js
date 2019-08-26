import expect from 'expect';
import {
  userManagementRootSelector,
  userManagementUsersListIsLoadingSelector,
  userManagementUsersListSelector,
} from '../selectors';

describe('UserManagement selectors tests', () => {
  const reduxStore = {
    userManagement: {
      usersListIsLoading: false,
      usersList: [1, 2, 3],
    },
  };

  it('userManagementRootSelector()', () => {
    expect(userManagementRootSelector(reduxStore)).toEqual(reduxStore.userManagement);
  });

  it('userManagementUsersListIsLoadingSelector()', () => {
    expect(userManagementUsersListIsLoadingSelector(reduxStore)).toBe(reduxStore.userManagement.usersListIsLoading);
  });

  it('userManagementUsersListSelector()', () => {
    expect(userManagementUsersListSelector(reduxStore)).toEqual(reduxStore.userManagement.usersList);
  });
});
