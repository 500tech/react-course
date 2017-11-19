import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Total = ({ counter }) => (
  <span>{ counter }</span>
);

Total.propTypes = {
  counter: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  counter: state.recipes.length
});

export default connect(mapStateToProps)(Total);