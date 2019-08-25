import { request } from './api';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER_';

export const createNewUser = (userData = {}) => dispatch => {
  dispatch({ type: REQUEST_CREATE_USER + START });
  return request('/create-user', 'POST', userData)(dispatch)
    .then(userData => {
      dispatch({ type: REQUEST_CREATE_USER + SUCCESS, userData });
    })
    .catch(error => {
      dispatch({ type: REQUEST_CREATE_USER + FAIL, error });
    });
};
