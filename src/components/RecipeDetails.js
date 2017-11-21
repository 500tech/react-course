import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RecipeDetails = ({ recipe }) => (
  <div>
    <h3>{ recipe.title }</h3>
    <p>{ recipe.desc }</p>
  </div>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired
};

const WrappedRecipeDetails = ({ recipe }) => !recipe
  ? <span>Not found</span>
  : <RecipeDetails recipe={ recipe }/>;

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.find(recipe => recipe.id === parseInt(ownProps.match.params.id, 10))
});

export default connect(mapStateToProps)(WrappedRecipeDetails);