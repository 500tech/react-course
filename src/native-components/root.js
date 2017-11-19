import React from 'react';
import { TabNavigator } from "react-navigation";

import Recipes from 'native/recipes/recipes';
import AddRecipe from 'native/add-recipe/add-recipe';

const Root = TabNavigator({
  Recipes: { screen: Recipes, title: 'Recipes' },
  AddRecipe: { screen: AddRecipe, title: 'Add Recipes' }
});

export default Root;