import React from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

const Main = ({ todos, onToggle }) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" />

    <TodoList todos={ todos } onToggle={ onToggle } />
  </section>
);

Main.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Main;