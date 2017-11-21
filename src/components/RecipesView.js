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
        <Route exact path="/" component={ AddRecipe }/>
        <Route path="/recipe/:id" component={ RecipeDetails }/>
        <Route path="*" render={ () => <span>Not Found</span> }/>
      </Switch>
    </div>

  </div>
);

export default RecipesView;