import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = ({ title }) => (
  <h1 onClick={ () => console.log('Yey') }>{ title }</h1>
);

const Recipe = ({ title }) => (
  <li>{ title }</li>
);

class Recipes extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffle', 'Omelette', 'Hraime']
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      recipes: this.state.recipes.concat(this.recipeElem.value)
    });

    this.recipeElem.value = '';
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(i => <Recipe key={ i } title={ i }/>)
          }
        </ul>

        <form onSubmit={ this.handleSubmit }>
          <input ref={ (elem) => this.recipeElem = elem } />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const App = () => (
  <div>
    <div>
      <Header title='Recipes:'/>
      <Recipes/>
    </div>
  </div>
);

render(
  <App />,
  document.getElementById('root')
);










