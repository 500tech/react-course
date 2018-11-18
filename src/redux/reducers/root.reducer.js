import { combineReducers } from 'redux';
import chat from './chat.reducer';

const rootReducer = combineReducers({
  chat
});

export default rootReducer;
