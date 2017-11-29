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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;