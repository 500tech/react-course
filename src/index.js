import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Recipe = ({ title }) => (
  <li>{ title }</li>
);

const Header = () => (
  <h1>
    Recipes:
  </h1>
);

class AddRecipe extends React.Component {
  state = {
    title: ''
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input value={ this.state.title }
               onInput={ e => this.setState({ title: e.target.value }) }/>
        <button>add</button>
      </form>
    );
  }
}


class Recipes extends React.Component {
  state = {
    recipes: ['Waffles', 'Omelette', 'Pancake'],
  };

  handleAdd(title) {
    this.setState({ recipes: this.state.recipes.concat(title) })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(name => <Recipe key={ name } title={ name }/>)
          }
        </ul>

        <AddRecipe handleAdd={ this.handleAdd.bind(this) }/>
      </div>
    )
  }
}

const App = () => (
  <div>
    <div>
      <Header />
      <Recipes />
    </div>
  </div>
)

window.App = App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
