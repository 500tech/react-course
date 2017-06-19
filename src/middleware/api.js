import { BASE_URL } from '../consts/env';
import { API } from '../consts/action-types';

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success } = action.payload;

  return fetch(BASE_URL + url)
    .then(response => response.json())
    .then(payload => dispatch({ type: success, payload }))
    .catch(error => console.log(`Network error:`, error));
};

export default apiMiddleware;