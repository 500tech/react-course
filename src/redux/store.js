import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
// middlewares
import logMiddleware from './middlewares/log.middleware';
import apiMiddleware from './middlewares/api.middleware';

const middleware = [logMiddleware, apiMiddleware];
const storeEnhancers = compose(
  applyMiddleware(...middleware)
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;
