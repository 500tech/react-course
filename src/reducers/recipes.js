import * as consts from '../consts/action-types';
import { getID } from '../lib/utils';

const initialState = [
];

const reducer = (recipes = initialState, action) => {
  switch (action.type) {
    case consts.ADD_RECIPE:
      const newRecipe = Object.assign(action.payload, {
        favorite: false
      });

      return recipes.concat(newRecipe);

    case consts.TOGGLE_RECIPE:
      return recipes.map(recipe => recipe.id !== action.payload.id
        ? recipe
        : Object.assign({}, recipe, { favorite: !recipe.favorite }));

    case consts.SET_RECIPES:
      return action.payload;

    default:
      return recipes;
  }
};

export default reducer;