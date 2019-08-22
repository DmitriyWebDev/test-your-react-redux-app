import { START, SUCCESS, FAIL } from '../constants';
import { GLOBAL, GET_USERS } from './actions';

export const initialState = {
  usersIsLoading: false,
  usersIsLoaded: false,
  users: [],
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case GLOBAL + GET_USERS + START:
      return {
        ...state,
        usersIsLoading: true,
        usersIsLoaded: false,
      };
    case GLOBAL + GET_USERS + SUCCESS:
      return {
        ...state,
        usersIsLoading: false,
        usersIsLoaded: true,
        users: payload.users || [],
      };
    case GLOBAL + GET_USERS + FAIL:
      return {
        ...state,
        usersIsLoading: false,
        usersIsLoaded: false,
      };
    default:
      return state;
  }
};
