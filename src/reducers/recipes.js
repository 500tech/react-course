import * as consts from '../consts/action-types';
import { getID } from '../lib/utils';

const initialState = [
  { id: getID(), title: 'Waffles', favorite: false, description: 'Tasty and belgian' },
  { id: getID(), title: 'Omelette', favorite: true, description: 'Easy egg work' },
  { id: getID(), title: 'Dog Food', favorite: true, description: 'Not for humans' }
];

const reducer = (recipes = initialState, action) => {
  switch (action.type) {
    case consts.ADD_RECIPE:
      const newRecipe = {
        id: action.id,
        title: action.title,
        description: action.description,
        favorite: false
      };

      return recipes.concat(newRecipe);

    case consts.TOGGLE_RECIPE:
      return recipes.map(recipe => recipe.id !== action.id
        ? recipe
        : Object.assign({}, recipe, { favorite: !recipe.favorite }));

    default:
      return recipes;
  }
};

export default reducer;