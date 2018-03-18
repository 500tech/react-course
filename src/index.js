import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Header from './components/Header';


const Recipe = ({ title }) => (
  <li>{ title }</li>
);

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

const Recipes = (props) => (
  <div>
    <ul>
      {
        props.recipes.map(i => <Recipe key={ i } title={ i }/>)
      }
    </ul>
  </div>
);

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










