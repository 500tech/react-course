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

// New code

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    toggle: () => console.log('Foo bar')
  };
};

export default connect(mapStateToProps)(Recipes);
