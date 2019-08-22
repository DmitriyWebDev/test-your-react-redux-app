export const USER_MANAGEMENT = 'USER_MANAGEMENT_';
export const ADD_USER = 'ADD_USER_';

import { HTTP_METHODS, requestWithFetch } from '../../../common/rest/rest';

export const getUsers = params => dispatch => {
  // return requestWithFetch('', HTTP_METHODS.GET)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => console.log(err));
};

export const addUser = userData => dispatch => {
  console.log('Add user');
};
