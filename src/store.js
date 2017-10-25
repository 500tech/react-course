import { createStore } from 'redux';

const initialState = {
  todos: [
    { title: 'Convert to JSX', completed: true },
    { title: 'Divide into Components', completed: true },
    { title: 'Add state', completed: false }
  ]
};

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;