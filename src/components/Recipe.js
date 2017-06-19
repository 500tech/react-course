import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Recipe = ({ recipe }) => (
  <li className={ classNames({ 'favorite': recipe.favorite }) }>
    { recipe.title }
  </li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default Recipe;