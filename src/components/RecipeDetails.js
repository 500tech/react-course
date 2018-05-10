import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RecipeDetails = ({ recipe }) => (
  <div className="details">
    <h3>{ recipe.title }</h3>
    <p>{ recipe.desc }</p>
  </div>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired
};

const RecipeDetailsContainer = ({ recipe }) => recipe
  ? <RecipeDetails recipe={ recipe }/>
  : <Redirect to="/" />;

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.find(i => i.id === parseInt(ownProps.match.params.id))
});

export default connect(mapStateToProps)(RecipeDetailsContainer);