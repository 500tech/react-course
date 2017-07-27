import React from 'react';
import PropTypes from 'prop-types';
import Todos from './Todos';

const Main = ({ todos, toggle  }) => (
  <section className="main">
    <input className="toggle-all" type="checkbox"/>
    <Todos todos={ todos } toggle={ toggle } />
  </section>
);

Main.propTypes = {
  todos: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Main;