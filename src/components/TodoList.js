import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'Convert to JSX', completed: true },
        { title: 'Divide into Components', completed: true },
        { title: 'Add state', completed: false }
      ]
    };
  }
  
  render() {
    return (
      <ul className="todo-list">
        {
          this.state.todos.map(todo => <Todo key={ todo.title } todo={ todo } />)
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
};

export default TodoList;