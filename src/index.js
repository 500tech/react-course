import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = ({ text }) => (
  <h1>{ text }</h1>
);

const Recipe = ({ name }) => (
  <li>{ name }</li>
);


class Recipes extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: ['Waffles', 'Omelette', 'Pancake']
    };

  }

  handleSubmit = (e) => {
    e.preventDefault();

    const value = this.titleElem.value;

    this.setState({ recipes: this.state.recipes.concat(value) });

    this.titleElem.value = '';
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(name => <Recipe key={name} name={name}/>)
          }
        </ul>

        <form onSubmit={ this.handleSubmit }>
          <input type="text" ref={ (elem) => this.titleElem = elem }/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

const App = () => (
  <div>
    <div>
      <Header text="Recipes:" />
      <Recipes />

    </div>
  </div>
);

render(
  <App />,
  document.getElementById('root')
);
