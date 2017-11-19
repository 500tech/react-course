import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Provider } from 'react-redux';

import Root from 'native/root';
import Header from 'native/header';

import store from './src/store';

const isIOS = Platform.OS === 'ios';

const App = () => (
  <Provider store={ store }>
    <View style={ styles.appContainer }>
      <Header/>

      <Root/>
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    paddingTop: isIOS ? 20 : 0
  }
});

export default App;