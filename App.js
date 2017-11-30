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
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;