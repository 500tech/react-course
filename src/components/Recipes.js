import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default Recipes;