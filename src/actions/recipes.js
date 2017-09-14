import * as consts from '../consts/action-types';

export const addRecipe = (id, title, description) => ({
  type: consts.ADD_RECIPE,
  payload: {
    id,
    title,
    description
  },
  meta: {
    analytics: 'Add recipe'
  }
});

export const toggleRecipe = (id) => ({
  type: consts.TOGGLE_RECIPE,
  payload: id
});

export const fetchRecipes = () => ({
  type: consts.API,
  payload: {
    url: 'recipes.json',
    success: setRecipes
  }
});

export const setRecipes = (recipes) => ({
  type: consts.SET_RECIPES,
  payload: recipes
});