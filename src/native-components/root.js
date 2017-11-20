import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform } from 'react-native';

import Home from 'native/home';
import Login from 'native/login';

const Root = ({ user }) => (
  <View style={ styles.appContainer }>
    { user ? <Home/> : <Login/> }
  </View>
);

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
});

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Root);
