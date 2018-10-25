import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';

// middlewares
import logMiddleware from './middlewares/log.middleware';
import apiMiddleware from './middlewares/api.middleware';

const middlewares = [logMiddleware, apiMiddleware];
const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

const store = createStore(
  rootReducer,
  {},
  storeEnhancers
);

export default store;
