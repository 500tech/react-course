import React from 'react';
import { render } from 'react-dom';
import './index.css';
import InnerHeader from './components/InnerHeader';
import Footer from './components/Footer';
import Main from './components/Main';
import InnerFooter from './components/InnerFooter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'Divide into components', completed: true },
        { title: 'Make dynamic', completed: true },
        { title: 'Add Redux', completed: false }
      ]
    }
  }

  handleAdd = (title) => {
    const newTodo = {
      title,
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo)
    });
  };

  handleToggle = (title) => {
    this.setState({
      todos: this.state.todos.map(todo => todo.title !== title
        ? todo
        : Object.assign({}, todo, { completed: !todo.completed })
      )
    });
  };

  render() {
    return (
      <div>
        <section className="todoapp">
          <InnerHeader onAdd={ this.handleAdd } />
          <Main todos={ this.state.todos } toggle={ this.handleToggle } />
          <InnerFooter/>
        </section>
        <Footer/>
      </div>
    );
  }
}


render(
  <App/>,
  document.getElementById('root')
);
