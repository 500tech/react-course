import * as consts from '../consts/action-types';

export const addRecipe = (id, title, description) => ({
  type: consts.ADD_RECIPE,
  id,
  title,
  description
});

export const toggleRecipe = (id) => ({
  type: consts.TOGGLE_RECIPE,
  id
});