import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import { getID } from '../lib/utils';

class App extends React.Component {
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

  render() {
    return (
      <div>
        <h1>Recipes:</h1>
        <Recipes recipes={ this.state.recipes } />
        <AddRecipe addRecipe={ this.addRecipe } />
      </div>
    );
  }
}

export default App;