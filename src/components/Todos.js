import React from 'react';
import Todo from './Todo';

const Todos = () => (
  <ul className="todo-list">
    <Todo completed={ true } label='Convert to JSX'  />
    <Todo completed={ true } label='Divide into Components'  />
    <Todo completed={ false } label='Make list dynamic'  />
    <Todo completed={ false } label='Add interactions'  />
  </ul>
);

export default Todos;