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
      <Switch>
        <Route exact path="/" render={ () => <h3>Welcome</h3> }/>
        <Route path='/add' component={ AddRecipe }/>
        <Route path='/recipe/:id' component={ RecipeDetails }/>
      </Switch>
    </div>

  </div>
);

export default RecipesView;