import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

const Recipe = ({ recipe }) => {
  return (
    <TouchableOpacity style={ styles.container }>
      <View style={ styles.recipeWrapper }>
        <Image source={require('../../assets/dish.png')}
               style={ styles.image }/>

        <Text style={ styles.title }>
          { recipe.title }
        </Text>
      </View>

      <View style={ styles.separator }/>
    </TouchableOpacity>
  );
};

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