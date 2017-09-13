import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import { getID } from '../lib/utils';

const RecipesView = () => (
  <div className="main">
    <div className="pane">
      <Recipes/>
    </div>

    <div className="pane">
      <AddRecipe/>
    </div>
  </div>
);

export default RecipesView;