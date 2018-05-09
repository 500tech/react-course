import React from 'react';
import Counter from './Counter';

const InnerFooter = ({ todos }) => (
  <footer className="footer">

    <Counter count={ todos.filter(i => !i.completed).length } />

    <ul className="filters">
      <li>
        <a className="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button className="clear-completed">Clear completed</button>
  </footer>
);

export default InnerFooter;