import { combineReducers } from 'redux';

// reducers
import user from './user.reducer';
import timers from './timers.reducer';

export default combineReducers({
  user,
  timers
});
