import * as actions from '../consts/action-types';

export const toggle = (recipe) => ({
  type: actions.TOGGLE,
  recipe
});

export const addRecipe = title => ({
  type: actions.ADD_RECIPE,
  title
});