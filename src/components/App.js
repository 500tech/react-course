import React from 'react';
import Header from './Header';
import SmartInput from './SmartInput';
import Recipes from './Recipes';

const RedBox = ({ children, color = 'red' }) => (
  <div style={ { backgroundColor: color }}>{ children }</div>
);

const Counter = () => (<span>100</span>);

class App extends React.Component {
  state = {
    recipes: ['Waffles', 'Omelette', 'Pancake']
  };

  handleAdd = (name) =>
    this.setState({ recipes: this.state.recipes.concat(name) });

  render() {
    return (
      <div>
        <RedBox color='green'>
          <div>
            <h1>Hello <b>everyone</b> we are at <Counter/></h1>
            <Header text='Recipes:'>Hello <b>everyone</b> we are at <Counter/></Header>
            <Recipes recipes={ this.state.recipes }/>
            <SmartInput onAdd={ this.handleAdd }/>
          </div>
        </RedBox>
      </div>
    );
  }
}

export default App;