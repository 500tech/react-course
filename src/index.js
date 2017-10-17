import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Header from './components/Header';

const Recipe = ({ name }) => (
  <li>{ name }</li>
);

class GenericInput extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const value = this.titleElem.value;

    this.props.onAdd(value);


    this.titleElem.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(elem) => this.titleElem = elem}/>
        <button>Add</button>
      </form>
    );
  }
}

const Recipes = ({ recipes }) => (
  <div>
    <ul>
      {
        recipes.map(name => <Recipe key={name} name={name}/>)
      }
    </ul>
  </div>
);

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: ['Waffles', 'Omelette', 'Pancake']
    };

  }

  handleAdd = (value) => {
    this.setState({ recipes: this.state.recipes.concat(value) });
  }

  render() {
    return (
      <div>
        <div>
          <Header text="Recipes:"/>
          <Recipes recipes={ this.state.recipes }/>
          <GenericInput onAdd={ this.handleAdd }/>
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
