import { createStore } from 'redux';
import { getID } from './lib/utils';

const reducer = (state, action) => {
  console.log('Action: ', action);

  switch(action.type) {
    case 'ADD':
      return {
        recipes: state.recipes.concat({ id: getID(), title: action.title, favorite: false })
      };

    case 'TOGGLE_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.map(i => i.id !== action.recipe.id ? i :
          Object.assign({}, i, { favorite: !i.favorite })
        )
      })

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Cat food', favorite: true },
    { id: getID(), title: 'Dog food', favorite: false }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;