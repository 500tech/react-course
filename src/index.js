import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = ({ text }) => (
  <h1 onClick={ () => console.log('Yey') }>{ text }</h1>
);

const Recipe = ({ title}) => (
  <li>{ title }</li>
);

class Recipes extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffle', 'Pancake', 'Icecream']
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('Wooosh', this.titleElem.value);


    this.setState({
      recipes: this.state.recipes.concat(this.titleElem.value)
    });

    this.titleElem.value = '';
  };

  render() {
    return (
      <div>

        <ul>
          { this.state.recipes.map(recipe => <Recipe key={ recipe } title={ recipe }/>) }
        </ul>

        <form onSubmit={ this.handleSubmit }>
          <input ref={ elem => this.titleElem = elem } type="text"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    window.me = this;
  }

  render() {
    return (
      <div>
        <Header text="Hey there"/>
        <Recipes/>
      </div>
    );
  }
}

window.App = App;

render(
  <App />,
  document.getElementById('root')
);
