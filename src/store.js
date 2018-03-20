import { createStore } from 'redux';
import { getID } from './lib/utils';

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type);

  switch (action.type) {
    case 'ADD':
      const newRecipe = { id: getID(), title: action.title, favorite: false };

      return {
        recipes: state.recipes.concat(newRecipe)
      };

    default:
      return state;
  }
};

const initalState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: true },
    { id: getID(), title: 'Omelette', favorite: false },
    { id: getID(), title: 'Salad', favorite: false }
  ]
};

const store = createStore(reducer, initalState);

window.store = store;

export default store;