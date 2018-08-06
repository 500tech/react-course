import React from 'react';

export default class Header extends React.Component {
  handleKeyUp = (e) => {
    this.props.handleKeyUp(e);

    if (e.which === 13) {
      this.input.value = '';
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyUp={this.handleKeyUp}
          ref={el => this.input = el}
        />
      </header>
    );
  }
}
