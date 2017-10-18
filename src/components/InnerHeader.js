import React from 'react';
import PropTypes from 'prop-types';

class InnerHeader extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd(this.title.value);

    this.title.value = '';
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={ this.handleSubmit }>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 autoFocus
                 ref={ (elem) => this.title = elem }
          />
        </form>
      </header>
    );
  }
}

InnerHeader.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default InnerHeader;