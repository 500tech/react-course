import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = (props) => (
  <h1 onClick={ () => console.log('Yey') }>{ props.text }</h1>
);

const Recipe = ({ title }) => (
  <li>{ title }</li>
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
    this.setState({
      recipes: this.state.recipes.concat(this.state.title)
    });
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(recipe =>
              <Recipe key={ recipe } title={ recipe }/>)
          }
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <input type="text"
                 onChange={ (e) => this.setState({ title: e.target.value }) }/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const App = () => (
  <div>
    <div>
      <Header text="Recipes:"/>
      <Recipes/>
    </div>
  </div>
)


render(
  <App />,
  document.getElementById('root')
);
