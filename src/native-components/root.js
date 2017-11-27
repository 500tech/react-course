import React from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

// COMPONENTS
const FirstComponent = ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.navigate('Second') }>
    <Text>First component!</Text>
  </TouchableOpacity>
);

const SecondComponent = ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.navigate('Third') }>
    <Text>Second component!</Text>
  </TouchableOpacity>
);

const ThirdComponent = ({ navigation }) => (
  <TouchableOpacity onPress={ () => navigation.navigate('First') }>
    <Text>Third component!</Text>
  </TouchableOpacity>
);

// NAVIGATORS
const StackNavigation = StackNavigator({
  First: { screen: FirstComponent },
  Second: { screen: SecondComponent },
  Third: { screen: ThirdComponent }
});

const DrawerNavigation = DrawerNavigator({
  First: { screen: FirstComponent },
  Second: { screen: SecondComponent },
  Third: { screen: ThirdComponent }
});

const TabNavigation = TabNavigator({
  First: { screen: FirstComponent },
  Second: { screen: SecondComponent },
  Third: { screen: ThirdComponent }
});

const Root = () => (
  <View style={ styles.container }>
    {/*<StackNavigation />*/}
    {/*<DrawerNavigation />*/}
    {/*<TabNavigation />*/}
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