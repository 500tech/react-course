import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import InnerHeader from './components/InnerHeader';
import Main from './components/Main';
import InnerFooter from './components/InnerFooter';

class App extends React.Component {
  state = {
    todos: [
      { completed: true, label: 'Convert to JSX' },
      { completed: true, label: 'Divide into Components' },
      { completed: false, label: 'Make list dynamic' },
      { completed: false, label: 'Add interactions' }
    ]
  };

  handleAdd = (title) => {
    const newTodo = { completed: false, label: title };
    const newTodosList = this.state.todos.concat(newTodo);
    this.setState({ todos: newTodosList });
  };

  render() {
    return (
      <div>
        <section className="todoapp">
          <InnerHeader onAdd={ this.handleAdd }/>
          <Main todos={ this.state.todos }/>
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
