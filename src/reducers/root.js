import { getID } from '../lib/utils';
import * as actions from '../consts/action-types';

const reducer = (state, action) => {
  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case actions.ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case actions.TOGGLE_FAVORITE:
      return Object.assign({}, state, {
        recipes: state.recipes.map(r => r.id !== action.id ?
          r : Object.assign({}, r, { favorite: !r.favorite}))
      });
      
    default:
      return state;
  }
};

export default reducer;