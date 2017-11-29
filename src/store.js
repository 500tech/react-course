import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log('ACTION: ' + action.type, action);

  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, {
        todos: state.todos.concat({
          title: action.title,
          completed: false
        })
      });

    case 'TOGGLE':
      const updatedTodos = state.todos.map(todo => todo.title !== action.title
        ? todo
        : Object.assign({}, todo, { completed: !todo.completed })
      );

      return Object.assign({}, state, {
        todos: updatedTodos
      });

    default:
      return state;
  }
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