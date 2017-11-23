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

const Todo = ({ todo }) => (
  <li className={ todo.completed ? "completed" : "" }>
    <div className="view">
      <input className="toggle" type="checkbox" checked={ todo.completed }/>
      <label>{ todo.title }</label>
    </div>
  </li>
);

class Todos extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { completed: true, title: 'Converted to JSX', owner: 'Kipi' },
        { completed: true, title: 'Divide into components' },
        { completed: false, title: 'Make dynamic' }
      ]
    };
  }

  render() {
    return (
      <ul className="todo-list">
        {
          this.state.todos.map(todo => <Todo key={ todo.title } todo={ todo } />)
        }
      </ul>
    );
  }
}

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
