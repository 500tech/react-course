import React from 'react';
import { render } from 'react-dom';
import './index.css';

const data = [
  { id: 0, label: 'learn React', isChecked: true },
  { id: 1, label: 'learn Redux', isChecked: false },
  { id: 2, label: 'server communication', isChecked: false }
];

const Item = (props) => (
  <li className="completed">
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={props.isChecked}
      />
      <label>{props.label}</label>
    </div>
  </li>
);

const App = () => (
  <div>
    <section className="todoapp">

      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {data.map(item => <Item key={item.id} {...item} />)}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
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
    </section>

    <footer className="info">
      <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
);

render(
  <App />,
  document.getElementById('root')
);
