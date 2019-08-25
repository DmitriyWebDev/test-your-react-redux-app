import { createSelector } from 'reselect';

export const userRootSelector = state => state.userInfo;

export const userDataIsLoadingSelector = createSelector(
  userRootSelector,
  state => state && state.isLoading,
);

export const userDataDetailSelector = createSelector(
  userRootSelector,
  state => state && state.user,
);

export const userDataNameSelector = createSelector(
  userDataDetailSelector,
  state => state && state.name,
);
