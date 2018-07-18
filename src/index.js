import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import AddRecipe from './components/AddRecipe';

const Recipe = ({ title }) => (
  <li>{ title }</li>
);

const Recipes = ({ recipes }) => (
  <div>
    <ul>
      {
        recipes.map(name => <Recipe key={ name } title={ name }/>)
      }
    </ul>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    recipes: ['Waffles', 'Omelette', 'Pancake'],
  };

  handleAdd = (title) => {
    this.setState({ recipes: this.state.recipes.concat(title) })
  };

  render() {
    return (
      <div>
        <div>
          <Header/>
          <Recipes recipes={ this.state.recipes }/>
          <AddRecipe handleAdd={ this.handleAdd }/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
