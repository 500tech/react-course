import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const RecipeDetails = ({ recipe }) => (
  <View>
    <Text>Recipe details</Text>
  </View>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired
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

export default RecipeDetails;