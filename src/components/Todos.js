import React from 'react';

const Todos = () => (
  <ul className="todo-list">

    <li className="completed">
      <div className="view">
        <input className="toggle" type="checkbox" checked/>
        <label>Convert to JSX</label>
      </div>
    </li>

    <li>
      <div className="view">
        <input className="toggle" type="checkbox"/>
        <label>Divide into Components</label>
      </div>
    </li>

  </ul>
);

export default Todos;