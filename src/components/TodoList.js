import React from 'react';
import Todo from './Todo';

const TodoList = () => (
  <ul className="todo-list">
    <Todo completed={ true } label="Conver to JSX" />
    <Todo completed={ false } label="Divide into Components" />
  </ul>
);

TodoList.propTypes = {
};

export default TodoList;