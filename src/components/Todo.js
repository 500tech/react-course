import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, onToggle }) => (
  <li className={ todo.completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle"
             type="checkbox"
             onChange={ () => onToggle(todo) }
             checked={ todo.completed } />
      <label>{ todo.title }</label>
    </div>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Todo;