import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';

export const User = ({ user, fetchUser }) => (
  <span onClick={ fetchUser }>{ user.name }</span>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { fetchUser })(User);