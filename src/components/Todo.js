import React from 'react';

const Todo = ({ checked, label }) => (
  <li className={ checked ? "completed" : "" }>
    <div className="view">
      <input className="toggle" type="checkbox" checked={ checked }/>
      <label>{ label }</label>
    </div>
  </li>
);

export default Todo;