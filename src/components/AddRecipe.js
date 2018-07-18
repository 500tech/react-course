import React from 'react';
import PropTypes from 'prop-types';

class AddRecipe extends React.Component {
  state = {
    title: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input value={ this.state.title }
               onInput={ e => this.setState({ title: e.target.value }) }/>
        <button>add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default AddRecipe;
