import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { START, SUCCESS, FAIL, RESET } from '../../../../common/constants';
import { USER_MANAGEMENT, REQUEST_USERS_LIST, resetPageData, getUsersList } from '../actions';

import * as rest from '../../../../common/rest/rest';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UserManagementPage actions.', () => {
  // Test SYNC action creator
  it(`resetPageData()`, () => {
    const expectedActions = [{ type: USER_MANAGEMENT + RESET }];
    const store = mockStore({});

    store.dispatch(resetPageData());
    expect(store.getActions()).toEqual(expectedActions);
  });

  // Test ASYNC action creator
  it(`getUsersList(). Success`, async () => {
    const users = [1, 2, 3];
    const expectedActions = [
      { type: USER_MANAGEMENT + REQUEST_USERS_LIST + START },
      { type: USER_MANAGEMENT + REQUEST_USERS_LIST + SUCCESS, payload: { users } },
    ];
    const store = mockStore({});

    rest.request = jest.fn();
    rest.request.mockImplementation(
      () =>
        new Promise(resolve => {
          resolve(users);
        }),
    );

    await store.dispatch(getUsersList());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`getUsersList(). Error`, async () => {
    const error = 'some error';
    const expectedActions = [
      { type: USER_MANAGEMENT + REQUEST_USERS_LIST + START },
      { type: USER_MANAGEMENT + REQUEST_USERS_LIST + FAIL, payload: { error } },
    ];
    const store = mockStore({});

    rest.request = jest.fn();
    rest.request.mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject(error);
        }),
    );

    await store.dispatch(getUsersList());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
