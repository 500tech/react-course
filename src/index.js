import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Footer = () => (
  <footer className="info">
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
);

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
  </header>
);

const Todo = ({ completed, title }) => (
  <li className={ completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle" type="checkbox" checked={ completed }/>
      <label>{ title }</label>
    </div>
  </li>
);

const Todos = () => (
  <ul className="todo-list">
    <Todo completed={ true } title="Converted to JSX" />
    <Todo completed={ true } title="Divide into Components" />
    <Todo completed={ false } title="Do iteration" />
    <Todo completed={ false } title="Make dynamic" />
  </ul>
);

const Main = () => (
  <section className="main">
    <input className="toggle-all" type="checkbox"/>
    <Todos />
  </section>
);

const InnerFooter = () => (
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
);

const App = () => (
  <div>
    <section className="todoapp">
      <Header />
      <Main />
      <InnerFooter />
    </section>
    <Footer />
  </div>
);

render(
  <App/>,
  document.getElementById('root')
);
