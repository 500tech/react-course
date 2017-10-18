import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onToggle }) => (
  <ul className="todo-list">
    {
      todos.map(todo => <Todo key={todo.title} todo={todo} onToggle={ onToggle }/>)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;