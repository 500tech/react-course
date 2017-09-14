import * as actions from '../consts/action-types';

export const addRecipe = (title, desc = '') => ({
  type: actions.ADD_RECIPE,
  title: title.trim(),
  desc
});

export const toggleRecipe = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  id
});