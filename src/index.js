import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Header from './components/Header';
import Recipes from './components/Recipes';



class SimpleForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleAdd(this.recipeElem.value);

    this.recipeElem.value = '';
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input ref={ (elem) => this.recipeElem = elem }/>
        <button>Add</button>
      </form>
    );
  }
}


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffle', 'Omelette', 'Hraime']
    };
  }

  addRecipe = (title) => {
    this.setState({
      recipes: this.state.recipes.concat(title)
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header title='Recipes:'/>
          <Recipes recipes={ this.state.recipes } />
          <SimpleForm handleAdd={ this.addRecipe }/>
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);










