import React from 'react';

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

export default AddRecipe;