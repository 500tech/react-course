import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class InnerHeader extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

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
                 ref={elem => this.title = elem}
                 autoFocus/>
        </form>
      </header>
    );
  }
}

InnerHeader.propTypes = {
  onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (title) => dispatch({ type: 'ADD', title })
});

export default connect(null, mapDispatchToProps)(InnerHeader);







