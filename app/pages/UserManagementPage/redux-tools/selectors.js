import { createSelector } from 'reselect';

export const userManagementRootSelector = state => state.userManagement;

// users list
export const userManagementUsersListIsLoadingSelector = createSelector(
  userManagementRootSelector,
  state => Boolean(state && state.usersListIsLoading),
);

export const userManagementUsersListIsLoadedSelector = createSelector(
  userManagementRootSelector,
  state => Boolean(state && state.usersListIsLoaded),
);

export const userManagementUsersListSelector = createSelector(
  userManagementRootSelector,
  state => (state && state.usersList) || [],
);

// user addition
export const userManagementUserAdditionIsLoadingSelector = createSelector(
  userManagementRootSelector,
  state => Boolean(state && state.userAdditionIsLoading),
);

export const userManagementUserAdditionIsLoadedSelector = createSelector(
  userManagementRootSelector,
  state => Boolean(state && state.userAdditionIsLoaded),
);

// user deleting
export const userManagementUserDeletingIsLoadingSelector = createSelector(
  userManagementRootSelector,
  state => Boolean(state && state.userDeletingIsLoading),
);

export const userManagementUserDeletingIsLoadedSelector = createSelector(
  userManagementRootSelector,
  state => Boolean(state && state.userDeletingIsLoaded),
);

// common
export const userManagementPageIsLoadingSelector = createSelector(
  [
    userManagementUsersListIsLoadingSelector,
    userManagementUserAdditionIsLoadingSelector,
    userManagementUserDeletingIsLoadingSelector,
  ],
  (usersListIsLoading, userAdditionIsLoading, userDeletingIsLoading) =>
    Boolean(usersListIsLoading || userAdditionIsLoading || userDeletingIsLoading),
);
