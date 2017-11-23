import { createStore } from 'redux';
import { getID } from './lib/utils';

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type);

  switch (action.type) {
    case 'ADD':
      return {
        recipes: state.recipes.concat({
          id: getID(), title: action.title, favorite: false
        })
      }
  }
  return state;
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: true },
    { id: getID(), title: 'Omelette', favorite: false }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;