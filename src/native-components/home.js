import React from 'react';
import { StackNavigator } from "react-navigation";
import { View, StyleSheet } from 'react-native';

import Recipes from 'native/recipes/recipes';
import RecipeDetails from 'native/recipes/recipe-details';
import Header from 'native/header';

const Home = StackNavigator({
  Recipes: { screen: Recipes, navigationOptions: { header: null } },
  RecipeDetails: { screen: RecipeDetails },
}, { headerMode: 'screen' });

const HomeWrapper = () => (
  <View style={ styles.container }>
    <Header/>

    <Home/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeWrapper;