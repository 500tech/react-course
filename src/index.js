import React from 'react';
import { render } from 'react-dom';
import './index.css';

const recipes = ['Waffles', 'Omelette'];

const Recipe = () => (
  <li>Waffel</li>
);

const App = () => (
  <div>
    <h1>Recipes:</h1>
    <ul>
      <Recipe />
      <Recipe />
    </ul>
  </div>
);

render(
  React.createElement(App),
  document.getElementById('root')
);