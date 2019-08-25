export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const HOST = process.env.HOST || 'http://localhost:3001';

export function request(url = '', httpMethod = HTTP_METHODS.GET, data = {}) {
  const requestParams = {
    method: httpMethod,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (httpMethod !== HTTP_METHODS.GET) {
    requestParams.body = JSON.stringify(data);
  }

  return new Promise((resolve, reject) => {
    fetch(`${HOST}${url}`, requestParams)
      .then(res => res.json())
      .then(response => resolve(response))
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}
