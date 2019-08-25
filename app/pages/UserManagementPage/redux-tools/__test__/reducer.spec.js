import expect from 'expect';
import { REQUEST_CREATE_USER, START, SUCCESS, FAIL } from '../actions';
import { initialState, userReducer } from '../reducer';

describe('User reducer tests', () => {
  it(`${REQUEST_CREATE_USER}${START}`, () => {
    const action = {
      type: `${REQUEST_CREATE_USER}${START}`,
    };
    /** Лучше задавать явно значения полей стора для достоверности тестов */
    const state = {
      ...initialState,
      userIsLoading: false,
    };

    expect(userReducer(state, action)).toEqual({
      ...state,
      userIsLoading: true,
    });
  });

  it(`${REQUEST_CREATE_USER}${SUCCESS}`, () => {
    const userData = { id: 7 };
    const action = {
      type: `${REQUEST_CREATE_USER}${SUCCESS}`,
      userData,
    };
    const state = {
      ...initialState,
      userIsLoading: true,
      user: false,
    };

    expect(userReducer(state, action)).toEqual({
      ...state,
      userIsLoading: false,
      user: action.userData,
    });
  });

  it(`${REQUEST_CREATE_USER}${FAIL}`, () => {
    const action = {
      type: `${REQUEST_CREATE_USER}${FAIL}`,
    };
    /** Лучше задавать явно значения полей стора для достоверности тестов */
    const state = {
      ...initialState,
      userIsLoading: true,
    };

    expect(userReducer(state, action)).toEqual({
      ...state,
      userIsLoading: false,
    });
  });
});
