import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggle }) => (
  <li className={ todo.completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle"
             type="checkbox"
             onChange={ () => toggle(todo) }
             checked={ todo.completed  } />
      <label>{ todo.label }</label>
    </div>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Todo;