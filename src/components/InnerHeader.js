import React from 'react';
import PropTypes from 'prop-types';

class InnerHeader extends React.Component {
  state = {
    title: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.state.title);

    this.setState({ title: '' });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={ this.handleSubmit }>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 value={ this.state.title }
                 onChange={ (event) => this.setState({ title: event.target.value })}
                 autoFocus/>
        </form>
      </header>
    );
  }
}

InnerHeader.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default InnerHeader;