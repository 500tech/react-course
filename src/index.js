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



class Recipes extends React.Component {
  state = {
    recipes: ['Waffles', 'Omelette', 'Pancake'],
    title: ''
  };

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      recipes: this.state.recipes.concat(this.state.title),
      title: ''
    })
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(name => <Recipe key={ name } title={ name }/>)
          }
        </ul>

        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input value={ this.state.title }
                 onInput={ e => this.setState({ title: e.target.value }) }/>
          <button>add</button>
        </form>
      </div>
    )
  }
}

const App = () => (
  <div>
    <div>
      <Header />
      <Recipes a={ 3 }/>
    </div>
  </div>
)

window.App = App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
