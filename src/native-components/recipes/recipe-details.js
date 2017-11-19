import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleRecipe } from '../../actions/recipes';

import ToggleBox from 'native/recipes/toggle-box';

const RecipeDetails = ({ recipe, toggleRecipe }) => (
  <View style={ styles.container }>
    <Text style={ styles.title }>{ recipe.title }</Text>

    <Text style={ styles.description }>{ recipe.description }</Text>

    <ToggleBox title="favorite" toggle={ () => toggleRecipe(recipe.id) } active={ recipe.favorite }/>
  </View>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggleRecipe: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginBottom: 20
  },
  description: {
    fontSize: 14
  }
});

class RecipeDetailsWrapper extends React.Component {
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