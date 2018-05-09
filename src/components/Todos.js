import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const Todos = ({ todos }) => (
  <ul className="todo-list">
    {
      todos.map(todo => <Todo key={ todo.label } todo={ todo }/>)
    }
  </ul>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;