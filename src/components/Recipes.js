import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleRecipe } from '../actions/recipes';
import { Link, withRouter } from 'react-router-dom';

import Recipe from './Recipe';

const Recipes = ({ recipes, toggle }) => (
  <ul className='recipes'>
    { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } toggle={ toggle } /> )}

    <Link to='/add' className='add'>Add Recipe</Link>
  </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default withRouter(connect(mapStateToProps, { toggle: toggleRecipe })(Recipes));