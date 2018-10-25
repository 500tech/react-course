import { combineReducers } from 'redux';

// reducers
import counter from './counter.reducer';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
