import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddRecipe extends React.Component {
  render() {
    return (
      <View>
        <Text>Add recipe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  inputWrapper: {
    width: '100%'
  },
  inputContainer: {
    marginBottom: 30,
    width: '100%'
  },
  inputLabel: {
    color: '#0e749a',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textInput: {
    borderColor: '#0e749a',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    fontSize: 14
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e749a'
  },
  buttonLabel: {
    fontSize: 14,
    color: 'white'
  }
});

export default AddRecipe;