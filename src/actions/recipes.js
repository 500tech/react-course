import * as consts from '../consts/action-types';

export const addRecipe = (title, description) => ({
  type: consts.ADD_RECIPE,
  title,
  description
});

export const toggleRecipe = (id) => ({
  type: consts.TOGGLE_RECIPE,
  id
});