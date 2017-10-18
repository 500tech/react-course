import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (
  <li className={ todo.completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle" type="checkbox" checked={ todo.completed } />
      <label>{ todo.title }</label>
    </div>
  </li>
)

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;