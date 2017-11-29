import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  return state;
};

const initialState = {
  todos: [
    { title: 'Divide into components', completed: true },
    { title: 'Make dynamic', completed: true },
    { title: 'Add Redux', completed: false }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;