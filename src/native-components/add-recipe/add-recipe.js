import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddRecipes extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Add Recipe</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AddRecipes;