import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root';
import logMiddleware from './middleware/log';
import apiMiddleware from './middleware/api';

const store = createStore(reducer, applyMiddleware(
  logMiddleware,
  apiMiddleware
));

window.store = store;

export default store;