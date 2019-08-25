import { START, SUCCESS, FAIL, RESET } from '../../../common/constants';
import { HTTP_METHODS, request } from '../../../common/rest/rest';

export const USER_MANAGEMENT = 'USER_MANAGEMENT_';
export const REQUEST_USERS_LIST = 'REQUEST_USERS_LIST_';
export const REQUEST_ADD_USER = 'REQUEST_ADD_USER_';
export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER_';

export const getUsersList = () => dispatch => {
  dispatch({ type: USER_MANAGEMENT + REQUEST_USERS_LIST + START });
  return request('/users', HTTP_METHODS.GET)
    .then(users => {
      dispatch({
        type: USER_MANAGEMENT + REQUEST_USERS_LIST + SUCCESS,
        payload: { users },
      });
    })
    .catch(error => {
      dispatch({ type: USER_MANAGEMENT + REQUEST_USERS_LIST + FAIL, error });
    });
};

export const addUser = (userData = {}) => dispatch => {
  dispatch({ type: USER_MANAGEMENT + REQUEST_ADD_USER + START });
  return request('/add-user', HTTP_METHODS.POST, userData)
    .then(userData => {
      dispatch({ type: USER_MANAGEMENT + REQUEST_ADD_USER + SUCCESS, userData });
    })
    .catch(error => {
      dispatch({ type: USER_MANAGEMENT + REQUEST_ADD_USER + FAIL, error });
    });
};

export const deleteUser = (userId = '') => dispatch => {
  dispatch({ type: USER_MANAGEMENT + REQUEST_DELETE_USER + START });
  return request('/delete-user', HTTP_METHODS.DELETE, { userId })
    .then(userData => {
      dispatch({ type: USER_MANAGEMENT + REQUEST_DELETE_USER + SUCCESS });
    })
    .catch(error => {
      dispatch({ type: USER_MANAGEMENT + REQUEST_DELETE_USER + FAIL, error });
    });
};

export const resetPageData = () => ({ type: USER_MANAGEMENT + RESET });
