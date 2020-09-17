import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import RecipeDetails from './RecipeDetails';
import { Route, Switch } from 'react-router-dom';

const RecipesView = () => (
  <div className="main">

    <div className="pane">
      <Recipes />
    </div>

    <div className="pane">
      <AddRecipe />
    </div>

  </div>
);

export default RecipesView;
