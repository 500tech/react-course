const logMiddleware = store => next => action => {
  return next(action);
};

export default logMiddleware;
