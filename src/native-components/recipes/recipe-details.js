import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleRecipe } from '../../actions/recipes';
//import ToggleBox from './ToggleBox';

const RecipeDetails = ({ recipe, toggleRecipe }) => (
  <View>
    <Text>{ recipe.description }</Text>
  </View>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggleRecipe: PropTypes.func.isRequired
};

class RecipeDetailsWrapper extends React.Component {
  static navigationOptions = ({ navigation, recipe }) => ({
    title: navigation.state.params.title
  });

  render() {
    const { recipe } = this.props;

    return recipe
      ? <RecipeDetails { ...this.props }/>
      : <Text>Recipe not found!</Text>
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.navigation.state.params.id, 10);

  return {
    recipe: state.recipes.find(recipe => recipe.id === id)
  };
};

export default connect(mapStateToProps, { toggleRecipe })(RecipeDetailsWrapper);