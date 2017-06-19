import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const User = ({ user }) => (
  <span>{ user.name }</span>
);

User.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(User);