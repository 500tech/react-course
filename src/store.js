import { getID } from './lib/utils';
import { createStore } from 'redux';
import * as consts from './consts/action-types';

const reducer = (state, action) => {
  console.log('Got Action ' + action.type, action);

  switch (action.type) {
    case consts.ADD_RECIPE:
      const newRecipe = Object.assign({}, action.payload, { favorite: false });

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case consts.TOGGLE_RECIPE:
      const updatedRecipes = state.recipes.map(recipe => recipe.id !== action.payload
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
    { id: getID(), title: 'Waffles', favorite: false, desc: 'a' },
    { id: getID(), title: 'Omelette', favorite: true, desc: 'b' },
    { id: getID(), title: 'Dog Food', favorite: true, desc: 'c' }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;