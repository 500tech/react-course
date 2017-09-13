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
      // TODO  

    case 'TOGGLE_RECIPE':
      // TODO

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;