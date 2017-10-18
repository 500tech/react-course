import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import { connect } from 'react-redux';

const Recipes = ({ recipes = [], toggle }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe.id } recipe={ recipe } toggle={ toggle } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired
};

// NEW CODE

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps)(Recipes);