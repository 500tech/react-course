const logMiddleware = store => next => action => {
  console.log('#', action.type, action);
  return next(action);
};

export default logMiddleware;
