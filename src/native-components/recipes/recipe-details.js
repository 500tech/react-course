import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const RecipeDetails = ({ recipe, unselectRecipe }) => (
  <TouchableOpacity style={ styles.container }
                    onPress={ unselectRecipe }>
    <Text style={ styles.title }>
      { recipe.title }
    </Text>

    <Text style={ styles.description }>
      { recipe.description }
    </Text>
  </TouchableOpacity>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
  unselectRecipe: PropTypes.func.isRequired
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

export default RecipeDetails