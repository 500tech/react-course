import React from 'react';
import Todo from './Todo';

const Todos = () => (
  <ul className="todo-list">
    <Todo checked={ true } label="Convert to JSX" />
    <Todo checked={ true } label="Divide into Components" />
    <Todo checked={ false } label="Make list dynamic" />
  </ul>
);

export default Todos;