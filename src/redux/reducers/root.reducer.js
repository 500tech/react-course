import { combineReducers } from 'redux';

// reducers
import counter from './counter.reducer';
import timers from './timers.reducer';

export default combineReducers({
  counter,
  timers
});
