import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

import Header from 'native/header';

import { fetchRecipes } from '../actions/recipes';
import { fetchUser } from '../actions/user';

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
    this.props.fetchUser();
  }

  render() {
    const { recipes } = this.props;

    return (
      <View style={ styles.container }>
        <Header />
        <ScrollView contentContainerStyle={ styles.scroll }>
          {
            recipes.map((recipe) => (
              <Text key={ recipe.id }>{ recipe.title }</Text>
            ))
          }
        </ScrollView>
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