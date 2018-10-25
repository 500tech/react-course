import * as AT from '../action.types';

const BASE_URL = 'http://www.ynet.co.il';

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== AT.API_REQUEST) {
    return next(action);
  }

  const { payload } = action;

  dispatch({ type: payload.baseAction.PENDING });

  fetch(`${BASE_URL}${payload.url}`, {
    method: payload.method
  })
    .then(res => res.json())
    .then(payload => dispatch({ type: payload.baseAction.SUCCESS, payload }))
    .catch(error => dispatch({ type: payload.baseAction.ERROR, error }))
};

export default apiMiddleware;
