import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import { getID } from '../lib/utils';

class RecipesView extends React.Component {

  addRecipe = (title) => {
    const newRecipe = {
      id: getID(),
      title,
      favorite: false
    };

    const newRecipes = this.state.recipes.concat(newRecipe);

    this.setState({ recipes: newRecipes });
  };

  render() {
    return (
      <div className="main">
        <div className="pane">
          <Recipes />
        </div>

        <div className="pane">
          <AddRecipe addRecipe={ this.addRecipe }/>
        </div>
      </div>
    );
  }
}

export default RecipesView;