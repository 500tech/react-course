import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Counter = ({ number }) => (
  <span>{ number }</span>
);

Counter.propTypes = {
  number: PropTypes.number.isRequired
};

// ---------- AND DOWN -------------

const mapStateToProps = state => ({
  number: state.recipes.length
});

export default connect(mapStateToProps)(Counter);