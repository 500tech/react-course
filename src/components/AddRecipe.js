import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipies';
import { getID } from '../lib/utils';

class AddRecipe extends React.Component {
  state = {
    desc: ''
  };

  onSubmit(e) {
    e.preventDefault();

    const id = getID();

    this.props.addRecipe(id, this.title.value, this.state.desc);

    this.setState({ desc: '' });
    this.title.value = '';

    this.props.history.push(`/recipes/${ id }`);
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ element => this.title = element } type="text"/>
        <textarea value={ this.state.desc }
                  onChange={ e => this.setState({ desc: e.target.value })} />
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);
