import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleRecipe } from '../actions/recipes';
import ToggleBox from './ToggleBox';

const RecipeDetails = ({ recipe, toggleRecipe }) => (
  <div className="details">
    <h3>{ recipe.title }</h3>
    <p>{ recipe.description }</p>
    <ToggleBox title="favorite" toggle={ () => toggleRecipe(recipe.id) } active={ recipe.favorite } />
  </div>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggleRecipe: PropTypes.func.isRequired
};

const RecipeDetailsWrapper = (props) =>
  props.recipe
    ? <RecipeDetails { ...props }/>
    : <h3>Not found</h3>;

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);

  return {
    recipe: state.recipes.find(recipe => recipe.id === id)
  };
};

export default connect(mapStateToProps, { toggleRecipe })(RecipeDetailsWrapper);