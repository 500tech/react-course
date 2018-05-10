import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import { Route, Switch } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const RecipesView = () => (
  <div className="main">

    <div className="pane">
      <Recipes />
    </div>

    <div className="pane">
      <Switch>
        <Route path="/" exact component={ AddRecipe } />
        <Route path="/recipes/:id" component={ RecipeDetails } />
      </Switch>
    </div>
  </div>
);

export default RecipesView;