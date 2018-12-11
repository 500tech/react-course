import * as AT from '../action.types';

const BASE_URL = 'http://private-fe525e-crazypixel.apiary-mock.com';
const logMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== AT.API_REQUEST) {
    return next(action);
  }

  const { payload } = action;
  const { baseAction } = payload;

  const config = {
    method: payload.method
  };

  if (payload.method === 'POST') {
    config.body = JSON.stringify(payload.body);
  }

  // pending
  dispatch({ type: baseAction.PENDING });

  fetch(`${BASE_URL}${payload.url}`, config)
    .then(res => res.json())
    .then(data => dispatch({ type: baseAction.SUCCESS, payload: data }))
    .catch(error => dispatch({ type: baseAction.ERROR, payload: error }));
};

export default logMiddleware;
