import expect from 'expect';
import { SUCCESS } from '../../../../common/constants';
import { USER_MANAGEMENT, REQUEST_USERS_LIST } from '../actions';
import reducer, { initialState } from '../reducer';

describe('UserManagement reducer tests', () => {
  it(`${USER_MANAGEMENT}${REQUEST_USERS_LIST}${SUCCESS}`, () => {
    const action = {
      type: `${USER_MANAGEMENT}${REQUEST_USERS_LIST}${SUCCESS}`,
      payload: {
        users: [1, 2, 3],
      },
    };

    const state = {
      ...initialState,
      usersListIsLoading: true,
      usersListIsLoaded: false,
      usersList: [0, 0, 0],
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      usersListIsLoading: false,
      usersListIsLoaded: true,
      usersList: action.payload.users,
    });
  });
});
