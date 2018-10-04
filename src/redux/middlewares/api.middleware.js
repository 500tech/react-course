import * as AT from '../action.types';

const BASE = 'http://myapp.com';

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== AT.API_REQUEST) {
    return next(action);
  }

  const { meta } = action;
  let cfg = {
    method: meta.method
  };

  if (meta.method === 'POST') {
    cfg.body = JSON.stringify(meta.body);
  }

  dispatch({ type: meta.baseAction.PENDING });

  fetch(`${BASE}${meta.url}`, cfg)
    .then(res => res.json())
    .then(payload => dispatch({ type: meta.baseAction.SUCCESS, payload }))
    .catch(error => dispatch({ type: meta.baseAction.ERROR, payload: error }));
};

export default apiMiddleware;
