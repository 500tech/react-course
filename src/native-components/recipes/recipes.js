import React from 'react';
import { connect } from 'react-redux';
import { toggleRecipe, fetchRecipes } from '../../actions/recipes';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';

import Recipe from 'native/recipes/recipe';

class Recipes extends React.Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    this.props.fetchRecipes();
  }

  refreshList = () => {
    this.setState({ isLoading: true }, () => {
      this.props.fetchRecipes();

      this.setState({ isLoading: false });
    });
  };

  render() {
    const { recipes } = this.props;

    return (
      <View style={ styles.container }>
        <ScrollView style={{ width: '100%', flex: 1 }}
                    refreshControl={ <RefreshControl refreshing={ this.state.isLoading }
                                                     onRefresh={ this.refreshList }/> }>
          { recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>) }
        </ScrollView>

        <TouchableOpacity style={ styles.addButton }
                          onPress={ () => this.props.navigation.navigate('AddRecipe') }>
          <Text style={ styles.addButtonLabel }>+</Text>
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
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'white',
    overflow: 'visible'
  },
  refreshButton: {
    marginTop: 10,
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
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#0e749a',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { height: -2 },
    shadowRadius: 5,
    elevation: 6
  },
  addButtonLabel: {
    fontSize: 35,
    lineHeight: 35,
    color: 'white',
    fontWeight: '200'
  }
});

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, {
  toggle: toggleRecipe,
  fetchRecipes
})(Recipes);