import * as actions from '../consts/action-types';

export const addRecipe = (title) => ({
  type: actions.ADD_RECIPE,
  title: title.trim()
});

export const toggleFavorite = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  id
})