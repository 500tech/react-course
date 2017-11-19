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
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTitle: {
    marginRight: 20
  }
});

export default Header;