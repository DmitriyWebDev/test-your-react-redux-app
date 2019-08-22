import { FAIL, SUCCESS } from '../constants';

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export function requestWithFetch(url = '', method = HTTP_METHODS.GET, data = {}) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
