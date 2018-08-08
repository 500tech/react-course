import * as AT from '../action.types';

const BASE_URL = '';

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== AT.API_REQUEST) {
    return next(action);
  }

  const { meta } = action;
  const { method, url, baseAction, body } = meta;

  dispatch({ type: baseAction.PENDING });
  const cfg = { method };

  if (method === 'POST') {
    cfg.body = JSON.stringify(body);
  }

  fetch(`${BASE_URL}${url}`, cfg)
    .then(res => res.json())
    .then(payload => dispatch({ type: baseAction.SUCCESS, payload }))
    .catch(error => dispatch({ type: baseAction.ERROR, payload: error }));
};

export default apiMiddleware;
