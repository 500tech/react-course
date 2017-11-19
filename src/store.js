import { createStore } from 'redux';
import { getID } from './lib/utils';

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: true },
    { id: getID(), title: 'Omelette', favorite: false }
  ]
};

const reducer = (state, action) => {

  console.log('ACTION ' + action.type, action);

  switch(action.type) {
    case 'ADD':
      return {
        recipes: state.recipes.concat({
          id: getID(),
          title: action.title,
          favorite: false
        })
      };

    case 'TOGGLE':
      return Object.assign({}, state, {
        recipes: state.recipes.map(r => r.id !== action.id
          ? r
          : Object.assign({}, r, { favorite: !r.favorite }))
      });

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;