import expect from 'expect';
import {
  userRootSelector,
  userDataIsLoadingSelector,
  userDataDetailSelector,
  userDataNameSelector,
} from '../selectors';

describe('User selectors tests', () => {
  const userInfoKey = 'userInfo';
  const initialState = {
    [userInfoKey]: {
      isLoading: false,
      user: {
        name: 'user name',
      },
    },
  };
  const userInfo = initialState[userInfoKey];

  it('userRootSelector()', () => {
    expect(userRootSelector(initialState)).toEqual(userInfo);
  });

  it('userDataIsLoadingSelector()', () => {
    expect(userDataIsLoadingSelector(initialState)).toBe(userInfo.isLoading);
  });

  it('userDataDetailSelector()', () => {
    expect(userDataDetailSelector(initialState)).toEqual(userInfo.user);
  });

  it('userDataNameSelector()', () => {
    expect(userDataNameSelector(initialState)).toEqual(userInfo.user.name);
  });
});
