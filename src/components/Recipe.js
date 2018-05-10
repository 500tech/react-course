import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Recipe = ({ recipe }) => (
  <NavLink to={ `/recipes/${ recipe.id }` }
           className='recipe'
           activeClassName='current'>
    { recipe.title }
  </NavLink>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Recipe;