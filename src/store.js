import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root';
import log from "./middlewares/log";
import api from "./middlewares/api";

const store = createStore(reducer, applyMiddleware(
  log,
  api
));

window.store = store;

export default store;