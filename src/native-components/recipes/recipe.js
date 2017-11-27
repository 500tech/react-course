import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Recipe = () => (
  <View>
    <Text>Recipe</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginBottom: 20
  },
  recipeWrapper: {
    width: '100%',
    flexDirection: 'row'
  },
  image: {
    width: 30,
    height: 20,
    marginRight: 15
  },
  title: {
    fontWeight: '300',
    color: '#535353'
  },
  separator: {
    marginTop: 10,
    height: 1,
    backgroundColor: '#d2d2d2',
    width: '95%',
    alignSelf: 'flex-end'
  }
});

export default Recipe;