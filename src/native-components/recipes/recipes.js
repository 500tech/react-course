import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Recipes = () => (
  <View>
    <Text>Recipes</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'white',
    overflow: 'visible'
  },
  refreshButton: {
    marginTop: 10,
    height: 50,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e749a'
  },
  refreshButtonLabel: {
    fontSize: 14,
    color: 'white'
  },
  addButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    backgroundColor: '#0e749a',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { height: -2 },
    shadowRadius: 5,
    elevation: 6
  },
  addButtonLabel: {
    fontSize: 35,
    lineHeight: 35,
    color: 'white',
    fontWeight: '200'
  }
});

export default Recipes;