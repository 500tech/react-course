import { createStore } from 'redux';
import { getID } from "./lib/utils";

const initialState = {
  recipes: [
    { id: getID(), title: 'Cat food', favorite: true },
    { id: getID(), title: 'Dog food', favorite: false }
  ]
};

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  switch(action.type) {
    case 'ADD_RECIPE':
      return {
        recipes: state.recipes.concat({
          id: getID(), title: action.title, favorite: false
        })
      };

    case 'TOGGLE_RECIPE':
      return {
        recipes: state.recipes.map(recipe => recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite }))
      };

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;