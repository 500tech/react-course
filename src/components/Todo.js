import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ completed, label }) => (
  <li className={ completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle" type="checkbox" checked={ completed } />
      <label>{ label }</label>
    </div>
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
};

export default Todo;