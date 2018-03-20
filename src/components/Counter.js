import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ number }) => (
  <span>{ number }</span>
);

Counter.propTypes = {
  number: PropTypes.number.isRequired
};

export default Counter;