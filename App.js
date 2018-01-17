import React from 'react';
import { View } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Home from './Home';
import Book from './Book';
import SpecialOffers from './SpecialOffers';
import PassengersList from './PassengersList';

const HomeStack = StackNavigator({
  Main: { screen: Home },
  Book: { screen: Book },
  SpecialOffers: { screen: SpecialOffers }
}, {
  headerMode: 'screen'
});

const Navigator = DrawerNavigator({
  Home: { screen: HomeStack },
  PassengersList: { screen: PassengersList }
});

const App = () => (
  <View style={{ paddingTop: 23, height: '100%', width: '100%', flex: 1 }}>
    <Navigator/>
  </View>
);

export default App;