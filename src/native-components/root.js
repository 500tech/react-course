import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

const FirstComponent = () => (
  <View>
    <Text>First component!</Text>
  </View>
);

const SecondComponent = () => (
  <View>
    <Text>Second component!</Text>
  </View>
);

const ThirdComponent = () => (
  <View>
    <Text>Third component!</Text>
  </View>
);

const Root = () => (
  <View style={ styles.container }>
    <Text>Let's navigate</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
});

export default Root;