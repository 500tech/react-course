import { combineReducers } from 'redux';

// reducers
import counter from './counter.reducer';
import user from './user.reducer';
import tasks from './tasks.reducer';

const rootReducer = combineReducers({
  counter,
  user,
  tasks
});

export default rootReducer;
