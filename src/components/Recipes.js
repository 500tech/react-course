import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => (
  <div>
    <ul>
      {
        recipes.map(recipe => <Recipe name={ recipe } key={ recipe }/>)
      }
    </ul>
  </div>
);

export default Recipes;