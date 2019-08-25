import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import { createNewUser, REQUEST_CREATE_USER, START, SUCCESS, FAIL } from '../actions';

import * as api from '../api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UserService.', () => {
  it(`createNewUser. Success`, async () => {
    const userData = { id: '111' };
    const expectedActions = [{ type: REQUEST_CREATE_USER + START }, { type: REQUEST_CREATE_USER + SUCCESS, userData }];
    const store = mockStore({});

    api.request = jest.fn();
    api.request.mockImplementation(() => () =>
      new Promise(resolve => {
        resolve(userData);
      }),
    );

    await store.dispatch(createNewUser());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`createNewUser. Error`, async () => {
    const error = 'some error';
    const expectedActions = [{ type: REQUEST_CREATE_USER + START }, { type: REQUEST_CREATE_USER + FAIL, error }];
    const store = mockStore({});

    api.request = jest.fn();
    api.request.mockImplementation(() => () =>
      new Promise((resolve, reject) => {
        reject(error);
      }),
    );

    await store.dispatch(createNewUser());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
