import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import { toggleFavorite } from '../actions/recipies';
import { withRouter, NavLink } from 'react-router-dom';

const Recipes = ({ recipes, toggle }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } toggle={ toggle }/>) }
    <NavLink to="/" >Add recipe</NavLink>
  </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default withRouter(connect(mapStateToProps, { toggle: toggleFavorite })(Recipes));