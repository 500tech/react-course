import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const User = ({ user, fetchUser }) => (
  <TouchableOpacity onPress={ fetchUser }>
    <Text style={ styles.username }>
      { user.name }
    </Text>
  </TouchableOpacity>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
});

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { fetchUser })(User);