import { createStore } from 'redux';
import { getID } from './lib/utils';

const initialState = {
  recipes: [
    { id: getID(), title: 'Dog Food', favorite: true },
    { id: getID(), title: 'Cat Food', favorite: false }
  ],
  user: {
    name: 'Kipi'
  }
};

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  switch(action.type) {
    case 'ADD_RECIPE':
      const newRecipe = {
        id: getID(), title: action.title, favorite: false
      };

      return Object.assign({}, state, {
        recipes: state.recipes.concat(newRecipe)
      });
    case 'TOGGLE':
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite }))
      })
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;