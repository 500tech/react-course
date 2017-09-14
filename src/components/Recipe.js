import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Recipe = ({ recipe, toggle }) => (
  <li className={ classNames({ 'favorite': recipe.favorite }) }
      onClick={ () => toggle(recipe.id) }>
    { recipe.title }
  </li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Recipe;