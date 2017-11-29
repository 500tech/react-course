import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { connect } from 'react-redux';

const Todos = ({ todos }) => (
  <ul className="todo-list">
    {
      todos.map(todo => <Todo key={ todo.title } todo={ todo } />)
    }
  </ul>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);