import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { fetchRecipes } from '../actions/recipes';

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { recipes } = this.props;

    return (
      <View style={ styles.container }>
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
    height: '100%'
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

export default connect(mapStateToProps, { fetchRecipes })(Root);