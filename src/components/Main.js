import React from 'react';
import TodoList from './TodoList';

const Main = () => (
  <section className="main">
    <input className="toggle-all" type="checkbox" />

    <TodoList />
  </section>
);

Main.propTypes = {
};

export default Main;