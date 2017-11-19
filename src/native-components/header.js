import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import User from 'native/header/user';

const Header = () => (
  <View style={ styles.container }>
    <Text style={ styles.headerTitle }>
      Recipes Book
    </Text>

    <User />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0e749a'
  },
  headerTitle: {
    marginRight: 20,
    color: 'white'
  }
});

export default Header;