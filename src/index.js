import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Recipe = ({ recipe }) => (
  <li>{ recipe }</li>
);

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe } recipe={ recipe } /> )}
  </ul>
);

class AddRecipe extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(this.title.value);

    this.title.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ e => this.title = e } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffles', 'Omelette']
    };
  }

  addRecipe = (title) => {
    const newRecipes = this.state.recipes.concat(title);
    this.setState({ recipes: newRecipes });
  };

  render() {
    return (
      <div>
        <h1>Recipes:</h1>
        <Recipes recipes={ this.state.recipes }/>
        <AddRecipe addRecipe={ this.addRecipe } />
      </div>
    );
  }
}

render(
  React.createElement(App),
  document.getElementById('root')
);