import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

let id = 0;
const getID = () => id += 1;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: [
        { id: getID(), title: 'Waffles' },
        { id: getID(), title: 'Omelette' }
      ]
    };
  }

  addRecipe = (title) => {
    const newRecipe = {
      id: getID(),
      title
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