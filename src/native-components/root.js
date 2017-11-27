import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, StyleSheet, Platform } from 'react-native';

class Root extends React.Component {
  render() {
    return (
      <View style={ styles.appContainer }>
        <TouchableOpacity>
          <View style={ styles.square }/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  square: {
    height: 200,
    width: 200,
    backgroundColor: 'red'
  }
});

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Root);