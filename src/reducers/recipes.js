import * as actions from "../consts/action-types";
import { getID } from "../lib/utils";

const initialState = [
  { id: getID(), title: 'Waffles', favorite: false },
  { id: getID(), title: 'Omelette', favorite: true },
  { id: getID(), title: 'Dog Food', favorite: true }
];

const reducer = (recipes = initialState, action) => {
  switch (action.type) {

    case actions.ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      return recipes.concat(newRecipe);

    case actions.TOGGLE_FAVORITE:
      return recipes.map(recipe => recipe.id !== action.id
        ? recipe
        : Object.assign({}, recipe, { favorite: !recipe.favorite }));

    default:
      return recipes;
  }
};

export default reducer;