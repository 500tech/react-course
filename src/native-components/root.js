import React from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

// COMPONENTS
const FirstTabComponent = ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.navigate('SecondTab') }>
    <Text>First tab component!</Text>
  </TouchableOpacity>
);

const FirstStackComponent = ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.navigate('SecondStack') }>
    <Text>First stack component!</Text>
  </TouchableOpacity>
);

const SecondStackComponent = ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.navigate('FirstTab') }>
    <Text>Second stack component!</Text>
  </TouchableOpacity>
);

// NAVIGATORS
const StackNavigation = StackNavigator({
  FirstStack: { screen: FirstStackComponent },
  SecondStack: { screen: SecondStackComponent }
});

const TabNavigation = TabNavigator({
  FirstTab: { screen: FirstTabComponent },
  SecondTab: { screen: StackNavigation }
});

const Root = () => (
  <View style={ styles.container }>
    <TabNavigation />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
});

export default Root;