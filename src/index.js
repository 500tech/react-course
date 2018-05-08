import React from 'react';
import { render } from 'react-dom';
import './index.css';

import Header from 'components/Header';

const Recipe = ({ name}) => (
  <li onClick={ () => console.log('Hey') }>{ name }</li>
);

class SmartInput extends React.Component {
  state = { name: '' };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAdd(this.state.name);

    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input value={ this.state.name }
               onChange={ (e) => this.setState({ name: e.target.value }) }/>
        <button>add</button>
      </form>
    );
  }
}

const Recipes = ({ recipes }) => (
  <div>
    <ul>
      {
        recipes.map(recipe => <Recipe name={ recipe } key={ recipe }/>)
      }
    </ul>
  </div>
);

class App extends React.Component {
  state = {
    recipes: ['Waffles', 'Omelette', 'Pancake']
  };

  handleAdd = (name) =>
    this.setState({ recipes: this.state.recipes.concat(name) });

  render() {
    return (
      <div>
        <div>
          <Header text='Recipes:'/>
          <Recipes recipes={ this.state.recipes }/>
          <SmartInput onAdd={ this.handleAdd }/>
        </div>
      </div>
    );
  }
}

window.App = App;

render(
  <App />,
  document.getElementById('root')
);
