import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const Recipes = ({ recipes, toggle }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } toggle={ toggle } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Recipes;