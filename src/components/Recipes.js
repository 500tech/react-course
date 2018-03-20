import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => (
  <div>
    <ul>
      {
        props.recipes.map(i => <Recipe key={ i } title={ i }/>)
      }
    </ul>
  </div>
);

export default Recipes;