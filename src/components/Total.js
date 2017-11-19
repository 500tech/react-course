import React from 'react';
import PropTypes from 'prop-types';

const Total = ({ counter }) => (
  <span>{ counter }</span>
);

Total.propTypes = {
  counter: PropTypes.number.isRequired
};

export default Total;