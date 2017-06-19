import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    toggle: () => console.log("Toggle")
  }
};

export default connect(mapStateToProps)(Recipes);