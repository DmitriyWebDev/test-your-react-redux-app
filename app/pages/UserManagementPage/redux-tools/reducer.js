import { REQUEST_CREATE_USER, START, SUCCESS, FAIL } from './actions';

export const initialState = {
  userIsLoading: false,
  user: {},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CREATE_USER + START: {
      return {
        ...state,
        userIsLoading: true,
      };
    }
    case REQUEST_CREATE_USER + SUCCESS: {
      return {
        ...state,
        userIsLoading: false,
        user: action.userData,
      };
    }
    case REQUEST_CREATE_USER + FAIL: {
      return {
        ...state,
        userIsLoading: false,
      };
    }
    default: {
      return initialState;
    }
  }
}
