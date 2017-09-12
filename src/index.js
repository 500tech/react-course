import React from 'react';
import { render } from 'react-dom';
import './index.css';


const Header = ({ title }) => (
  <h1>{ title }</h1>
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

  handleClick = () => {

    console.log(this.nameInput.value);

    this.setState({
      recipes: this.state.recipes.concat(this.nameInput.value)
    });

    this.nameInput.value = '';
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(item => <Recipe key={item} name={item}/>)
          }
        </ul>

        <input ref={ (element) => this.nameInput = element }/>

        <button onClick={ this.handleClick }>Add</button>
      </div>
    );
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Header title="Recipes:"/>
          <Recipes/>
        </div>
      </div>
    )
  }
}


render(
  <App/> ,
  document.getElementById('root')
);
