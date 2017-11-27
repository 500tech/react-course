import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform } from 'react-native';

import Header from 'native/header';
import Recipes from 'native/recipes/recipes'

import { fetchRecipes } from '../actions/recipes';
import { fetchUser } from '../actions/user';

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header />

        <Recipes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { fetchUser, fetchRecipes })(Root);