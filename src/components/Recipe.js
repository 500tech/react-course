import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => (
  <li>{ recipe.title }</li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Recipe;