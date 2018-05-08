import React from 'react';
import PropTypes from 'prop-types';

class SmartInput extends React.Component {
  state = { name: '' };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.state.name);

    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input value={ this.state.name }
               onChange={ (e) => this.setState({ name: e.target.value }) }/>
        <button>add</button>
      </form>
    );
  }
}

SmartInput.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default SmartInput;