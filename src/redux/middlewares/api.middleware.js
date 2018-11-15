import * as AT from '../action.types';

const BASE_URL = 'http://google.com';
const apiMiddle = ({ dispatch }) => next => action => {
  if (action.type !== AT.API_REQUEST) {
    return next(action);
  }

  const { url, method, baseAction } = action.payload;

  dispatch({ type: baseAction.PENDING });

  fetch(`${BASE_URL}${url}`, {
    method
  })
    .then(res => res.json())
    .then(payload => dispatch({ type: baseAction.SUCCESS, payload }))
    .catch(error => dispatch({ type: baseAction.ERROR, payload: { error } }));
};

export default apiMiddle;
