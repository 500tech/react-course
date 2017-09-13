import React from 'react';
import Todo from "./Todo";

const Todos = () => (
  <ul className="todo-list">
    <Todo completed={ true } label="Divide into components"  />
    <Todo completed={ false } label="Add state"  />
  </ul>
);

export default Todos;