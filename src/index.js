import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import InnerHeader from './components/InnerHeader';
import InnerFooter from './components/InnerFooter';
import Main from './components/Main';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'Convert to JSX', completed: true },
        { title: 'Divide into Components', completed: true },
        { title: 'Add state', completed: false }
      ]
    };
  }

  handleAdd = (title) => {

    const newTodo = {
      title,
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  };

  handleToggle = (todo) => {
    todo.completed = !todo.completed;

    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <section className="todoapp">
          <InnerHeader onAdd={ this.handleAdd } />
          <Main todos={ this.state.todos } onToggle={ this.handleToggle }/>
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
