import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TodoList = ({ todos, onToggle }) => (
  <ul className="todo-list">
    {
      todos.map(todo => <Todo key={todo.title} todo={todo} onToggle={ onToggle }/>)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);