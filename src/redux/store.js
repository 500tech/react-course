import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';

const storeEnhancers = compose(
  applyMiddleware()
);

const store = createStore(
  rootReducer,
  {},
  storeEnhancers
);

export default store;
