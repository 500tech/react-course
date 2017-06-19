import { getID } from './lib/utils';
import { createStore } from 'redux';
import * as consts from './consts/action-types';

const reducer = (state, action) => {
  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case consts.ADD_RECIPE:
      const newRecipe = {
        id: action.id,
        title: action.title,
        description: action.description,
        favorite: false
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case consts.TOGGLE_RECIPE:
      const updatedRecipes = state.recipes.map(recipe => recipe.id !== action.id
        ? recipe
        : Object.assign({}, recipe, { favorite: !recipe.favorite }));

      return Object.assign({}, state, {
        recipes: updatedRecipes
      });

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: false, description: 'Tasty and belgian' },
    { id: getID(), title: 'Omelette', favorite: true, description: 'Easy egg work' },
    { id: getID(), title: 'Dog Food', favorite: true, description: 'Not for humans' }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;