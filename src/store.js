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
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;