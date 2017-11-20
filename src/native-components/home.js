import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";

import Recipes from 'native/recipes/recipes';
import AddRecipe from 'native/add-recipe/add-recipe';
import RecipeDetails from 'native/recipes/recipe-details';

const Tabs = TabNavigator({
  Recipes: { screen: Recipes, title: 'Recipes' },
  AddRecipe: { screen: AddRecipe, title: 'Add Recipes' }
});

const Home = StackNavigator({
  Tabs: { screen: Tabs, navigationOptions: { header: null } },
  RecipeDetails: { screen: RecipeDetails },
}, {
  headerMode: 'screen'
});

export default Home;