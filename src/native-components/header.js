import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View>
    <Text>Header</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4180b3',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '300'
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300'
  },
  username: {
    color: 'white',
    fontSize: 17,
    fontWeight: '300'
  }
});

export default Header;