import { START, SUCCESS, FAIL, RESET } from '../../../common/constants';
import { USER_MANAGEMENT, REQUEST_USERS_LIST, REQUEST_ADD_USER, REQUEST_DELETE_USER } from './actions';

export const initialState = {
  // users list
  usersListIsLoading: false,
  usersListIsLoaded: false,
  usersList: [],
  // user addition
  userAdditionIsLoading: false,
  userAdditionIsLoaded: false,
  // user deleting
  userDeletingIsLoading: false,
  userDeletingIsLoaded: false,
};

export default function userManagementPageReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    // users list
    case USER_MANAGEMENT + REQUEST_USERS_LIST + START:
      return {
        ...state,
        usersListIsLoading: true,
        usersListIsLoaded: false,
      };
    case USER_MANAGEMENT + REQUEST_USERS_LIST + SUCCESS:
      return {
        ...state,
        usersListIsLoading: false,
        usersListIsLoaded: true,
        usersList: payload.users || [],
      };
    case USER_MANAGEMENT + REQUEST_USERS_LIST + FAIL:
      return {
        ...state,
        usersListIsLoading: false,
        usersListIsLoaded: false,
      };
    // user addition
    case USER_MANAGEMENT + REQUEST_ADD_USER + START: {
      return {
        ...state,
        userAdditionIsLoading: true,
        userAdditionIsLoaded: false,
      };
    }
    case USER_MANAGEMENT + REQUEST_ADD_USER + SUCCESS: {
      return {
        ...state,
        userAdditionIsLoading: false,
        userAdditionIsLoaded: true,
      };
    }
    case USER_MANAGEMENT + REQUEST_ADD_USER + FAIL: {
      return {
        ...state,
        userAdditionIsLoading: false,
        userAdditionIsLoaded: false,
      };
    }
    // user deleting
    case USER_MANAGEMENT + REQUEST_DELETE_USER + START: {
      return {
        ...state,
        userDeletingIsLoading: true,
        userDeletingIsLoaded: false,
      };
    }
    case USER_MANAGEMENT + REQUEST_DELETE_USER + SUCCESS: {
      return {
        ...state,
        userDeletingIsLoading: false,
        userDeletingIsLoaded: true,
      };
    }
    case REQUEST_DELETE_USER + FAIL: {
      return {
        ...state,
        userDeletingIsLoading: false,
        userDeletingIsLoaded: false,
      };
    }
    case USER_MANAGEMENT + RESET:
    default: {
      return initialState;
    }
  }
}
