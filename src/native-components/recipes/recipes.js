import React from 'react';
import { connect } from 'react-redux';
import { toggleRecipe, fetchRecipes } from '../../actions/recipes';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import Recipe from 'native/recipes/recipe';

class Recipes extends React.Component {
  render() {
    const { recipes, fetchRecipes } = this.props;

    return (
      <View style={ styles.container }>
        <ScrollView style={{ width: '100%', flex: 1 }}>
          { recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>) }
        </ScrollView>

        <TouchableOpacity onPress={ fetchRecipes }
                          style={ styles.refreshButton }>
          <Text style={ styles.refreshButtonLabel }>
            Refresh
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  refreshButton: {
    height: 50,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e749a'
  },
  refreshButtonLabel: {
    fontSize: 14,
    color: 'white'
  }
});

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, {
  toggle: toggleRecipe,
  fetchRecipes
})(Recipes);