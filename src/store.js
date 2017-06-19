import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root';
import logMiddleware from './middleware/log';

const store = createStore(reducer, applyMiddleware(
  logMiddleware
));

window.store = store;

export default store;