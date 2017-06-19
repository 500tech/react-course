import * as consts from '../consts/action-types';

export const addRecipe = (title) => ({
  type: consts.ADD_RECIPE,
  title
});

export const toggleRecipe = (id) => ({
  type: consts.TOGGLE_RECIPE,
  id
});