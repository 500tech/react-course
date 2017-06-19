import { combineReducers } from 'redux';
import user from './user';
import recipes from './recipes';

export default combineReducers({
  user,
  recipes
});