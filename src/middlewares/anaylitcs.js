const anaylitcs = ({ dispatch, getState }) => next => action => {

  if (action.meta && action.meta.analytics) {
    // googleAnaltics.send(action.meta.analytics)
    clickTale.log(actions.meta.analytics);
  }

  next(action);
};

export default anaylitcs;
