import * as consts from '../consts/action-types';

export const addRecipe = (id, title, desc) => ({
  type: consts.ADD_RECIPE,
  payload: {
    id,
    desc,
    title
  }
});

export const toggleRecipe = (id) => ({
  type: consts.TOGGLE_RECIPE,
  payload: id
});