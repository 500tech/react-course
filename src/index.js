import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = (props) => (
  <h1>{ props.text }</h1>
);

const Recipe = ({ name}) => (
  <li onClick={ () => console.log('Hey') }>{ name }</li>
);

class Recipes extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Waffles', 'Omelette', 'Pancake'],
      name: 'Kipi'
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Yey: ' + this.state.name);

    this.setState({
      recipes: this.state.recipes.concat(this.state.name),
      name: ''
    });
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(recipe => <Recipe name={ recipe } key={ recipe }/>)
          }
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <input value={ this.state.name }
                 onChange={ (e) => this.setState({ name: e.target.value }) }/>
          <button>add</button>
        </form>
      </div>
    )
  }
}

const App = () => (
  <div>
    <div>
      <Header text='Recipes:' />
      <Recipes />
    </div>
  </div>
);

window.App = App;

render(
  App(),
  document.getElementById('root')
);
