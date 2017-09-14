import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserName = ({ name }) => (
  <span>{ name }</span>
);

UserName.propTypes = {
  name: PropTypes.string.isRequired
};

export default connect(state => ({ name: state.user.name }))(UserName);