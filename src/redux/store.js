import { createStore } from 'redux';
import rootReducer from './reducers/root.reducer';

// compose, applyMiddleware
// const storeEnhancers = compose(
//   applyMiddleware()
// );

// storeEnhancers

const store = createStore(rootReducer, {});

export default store;
