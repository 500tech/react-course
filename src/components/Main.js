import React from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

const Main = ({ onToggle }) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" />

    <TodoList onToggle={ onToggle } />
  </section>
);

Main.propTypes = {
  onToggle: PropTypes.func.isRequired
};

export default Main;