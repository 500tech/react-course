import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => (
  <View style={ styles.container }>
    <Text>
      Hello, course!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export default App;