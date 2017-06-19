import React from 'react';
import PropTypes from 'prop-types';

class AddRecipe extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(this.title.value);

    this.title.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ e => this.title = e } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired
};

export default AddRecipe;