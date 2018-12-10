import { combineReducers } from 'redux';

// reducers
import counter from './counter.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  counter,
  user
});

export default rootReducer;
