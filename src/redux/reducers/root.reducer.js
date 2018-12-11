import { combineReducers } from 'redux';

// reducers
import counter from './counter.reducer';
import user from './user.reducer';
import tasks from './tasks.reducer';
import network from './network.reducer';

const rootReducer = combineReducers({
  counter,
  user,
  tasks,
  network
});

export default rootReducer;
