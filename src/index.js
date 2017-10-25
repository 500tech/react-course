import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import InnerHeader from './components/InnerHeader';
import InnerFooter from './components/InnerFooter';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
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
          <Main onToggle={ this.handleToggle }/>
          <InnerFooter/>
        </section>

        <Footer/>
      </div>
    );
  }
}

render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
