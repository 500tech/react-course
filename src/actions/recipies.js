import * as actions from '../consts/action-types';

export const addRecipe = (id, title, desc) => ({
  id: id,
  type: actions.ADD_RECIPE,
  title: title.trim(),
  desc: desc.trim()
});

export const toggleFavorite = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  id
})