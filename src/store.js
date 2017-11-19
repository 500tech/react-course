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

    case 'TOGGLE':

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;