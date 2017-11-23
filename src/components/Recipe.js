import React from 'react';

const Recipe = ({ recipe }) => (
  <li>{ recipe.title }</li>
);

const NAME = 'kipi';

const age = 5;

export default Recipe;

export {
  Recipe,
  NAME,
  age,
}

