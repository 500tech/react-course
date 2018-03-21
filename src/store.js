import { getID } from './lib/utils';
import { createStore } from 'redux';
import { TOGGLE, ADD_RECIPE } from './consts/action-types';

const reducer = (state, action) => {
  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case TOGGLE:
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => recipe.id !== action.recipe.id
          ? recipe
          : { ...recipe, favorite: !recipe.favorite }
        )
      });

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: false },
    { id: getID(), title: 'Omelette', favorite: true },
    { id: getID(), title: 'Dog Food', favorite: true }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;