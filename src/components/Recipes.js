import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleRecipe, fetchRecipes } from '../actions/recipes';
import { Link, withRouter } from 'react-router-dom';

import Recipe from './Recipe';

const Recipes = ({ recipes, toggle, fetchRecipes }) => (
  <ul className='recipes'>
    { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } toggle={ toggle } /> )}

    <Link to='/add' className='add'>Add Recipe</Link>
    <div className='add' onClick={ fetchRecipes }>Refresh</div>
  </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  fetchRecipes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default withRouter(connect(mapStateToProps, { toggle: toggleRecipe, fetchRecipes })(Recipes));