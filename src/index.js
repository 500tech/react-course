import React from 'react';
import { render } from 'react-dom';
import './index.css';

const recipes = ['Waffles', 'Omelette'];

const Recipe = ({ recipe }) => (
  <li>{ recipe }</li>
);

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe } recipe={ recipe } /> )}
  </ul>
);

const App = () => (
  <div>
    <h1>Recipes:</h1>
    <Recipes recipes={ recipes } />
  </div>
);

render(
  React.createElement(App),
  document.getElementById('root')
);