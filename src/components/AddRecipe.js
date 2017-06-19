import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';
import { withRouter } from 'react-router-dom';
import { getID } from '../lib/utils';

class AddRecipe extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    const id = getID();

    this.props.addRecipe(id, this.title.value, this.description.value);

    this.title.value = '';
    this.description.value = '';

    this.props.history.push(`/recipe/${ id }`);
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ e => this.title = e } type="text"/>
        <textarea ref={ e => this.description = e } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired
};

export default withRouter(connect(null, { addRecipe })(AddRecipe));
