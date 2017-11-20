import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleRecipe } from '../../actions/recipes';

import ToggleBox from 'native/recipes/toggle-box';

const RecipeDetails = ({ recipe, toggleRecipe }) => (
  <View style={ styles.container }>
    <Text style={ styles.description }>{ recipe.description }</Text>

    <ToggleBox title="Favorite" toggle={ () => toggleRecipe(recipe.id) } active={ recipe.favorite }/>
  </View>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggleRecipe: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    marginBottom: 50
  }
});

class RecipeDetailsWrapper extends React.Component {
  static navigationOptions = (props) => ({
    gesturesEnabled: true,
    title: props.navigation.state.params.title,
    headerTitleStyle: {
      color: '#535353'
    },
    headerStyle: {
      height: 30,
      paddingBottom: 15,
      backgroundColor: '#4180b34d',
      borderBottomColor: 'transparent'
    }
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