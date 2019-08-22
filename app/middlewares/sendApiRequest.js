import { START, SUCCESS, FAIL } from '../common/constants';

export default store => next => action => {
  const { sendAPIRequest, type, ...rest } = action;

  if (!sendAPIRequest) return next(action);

  next({
    ...rest,
    type: type + START,
  });

  fetch(sendAPIRequest)
    .then(res => res.json())
    .then(response => next({ ...rest, type: type + SUCCESS, response }))
    .catch(error => next({ ...rest, type: type + FAIL, error }));
};
