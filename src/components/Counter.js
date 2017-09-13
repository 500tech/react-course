import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ total }) => (
  <span>{ total }</span>
);

Counter.propTypes = {
  total: PropTypes.number.isRequired
};

export default Counter;