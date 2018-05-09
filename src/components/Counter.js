import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count }) => (
  <span className="todo-count"><strong>{ count }</strong> item left</span>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired
};

export default Counter;