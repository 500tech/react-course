import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import { getID } from '../lib/utils';

class RecipesView extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [
        { id: getID(), title: 'Waffles', favorite: true },
        { id: getID(), title: 'Omelette', favorite: false }
      ]
    };
  }

  addRecipe = (title) => {
    const newRecipe = {
      id: getID(),
      title,
      favorite: false
    };

    const newRecipes = this.state.recipes.concat(newRecipe);

    this.setState({ recipes: newRecipes });
  };

  toggleRecipes = (recipe) => {
    recipe.favorite = !recipe.favorite;
    this.forceUpdate();
  };

  render() {
    return (
      <div className="main">
        <div className="pane">
          <Recipes  toggle={ this.toggleRecipes }/>
        </div>

        <div className="pane">
          <AddRecipe addRecipe={ this.addRecipe }/>
        </div>
      </div>
    );
  }
}

export default RecipesView;