import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => (
  <ul>
    {recipes.map(recipe => <Recipe key={recipe} recipe={recipe}/>)}
  </ul>
);

export default Recipes;