import React from 'react';
import { TabNavigator } from "react-navigation";

import Recipes from 'native/recipes/recipes';
import AddRecipe from 'native/add-recipe/add-recipe';

const Root = TabNavigator({
  Recipes: { screen: Recipes },
  AddRecipe: { screen: AddRecipe }
});

export default Root;