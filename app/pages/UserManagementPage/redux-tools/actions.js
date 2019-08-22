export const USER_MANAGEMENT = 'USER_MANAGEMENT_';

import { HTTP_METHODS, requestWithFetch } from '../../../common/rest/rest';

export const getUsers = params => dispatch => {
  return requestWithFetch(url, HTTP_METHODS.GET)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};
