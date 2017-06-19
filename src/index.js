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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffles', 'Omelette']
    };
  }

  render() {
    return (
      <div>
        <h1>Recipes:</h1>
        <Recipes recipes={ this.state.recipes }/>

        <form onSubmit={ this.onSubmit.bind(this) }>
          <input ref={ e => this.title = e } type="text"/>
          <button>Add</button>
        </form>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    const newRecipes = this.state.recipes.concat(this.title.value);

    this.title.value = '';

    this.setState({ recipes: newRecipes });
  }
}

render(
  <App />a,
  document.getElementById('root')
);