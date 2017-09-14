import * as actions from '../consts/action-types';

const api = ({ dispatch, getState }) => next => action => {

  if (action.type !== actions.API) {
    return next(action);
  }

  const { url, success } = action.payload;

  fetch('https://s3.amazonaws.com/500tech-shared/' + url)
    .then(stream => stream.json())
    .then(data => {
      dispatch(success(data))
    });

  next(action);
};

export default api;
