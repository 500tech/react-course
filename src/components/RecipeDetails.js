import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RecipeDetails = ({ recipe }) => (
  <div>
    <h3>{ recipe.title }</h3>
    <p>{ recipe.description }</p>
  </div>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired
};

const RecipeDetailsWrapper = ({ recipe }) =>
  recipe
    ? <RecipeDetails recipe={ recipe }/>
    : <h3>Not found</h3>;

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id);

  return {
    recipe: state.recipes.find(recipe => recipe.id === id)
  };
};

export default connect(mapStateToProps)(RecipeDetailsWrapper);