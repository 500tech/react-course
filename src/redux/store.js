import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import logMiddleware from './middlewares/log.middleware';
import firebaseMiddleware from './middlewares/firebase.middleware';

const middlewares = [logMiddleware, firebaseMiddleware];

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

const store = createStore(rootReducer, {}, storeEnhancers);

export default store;
