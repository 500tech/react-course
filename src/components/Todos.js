import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const Todos = ({ todos, toggle  }) => (
  <ul className="todo-list">
    {
      todos.map(todo => <Todo key={ todo.label } todo={ todo } toggle={ toggle }/>)
    }
  </ul>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Todos;