import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const Todos = ({ todos, toggle }) => (
  <ul className="todo-list">
    {
      todos.map(todo =>
         <Todo key={ todo.title } todo={ todo } toggle={ toggle } />
      )
    }
  </ul>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Todos;