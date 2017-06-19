export const addRecipe = (title) => ({
  type: 'ADD_RECIPE',
  title
});

export const toggleRecipe = (id) => ({
  type: 'TOGGLE_RECIPE',
  id
});