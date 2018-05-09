import React from 'react';
import Todos from './Todos';
import PropTypes from 'prop-types';

const Main = ({ todos }) => (
  <section className="main">
    <input className="toggle-all" type="checkbox"/>

    <Todos todos={ todos } />
  </section>
);

Main.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Main;