import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipes';
import { getID } from '../../lib/utils';

class AddRecipe extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: ''
    }
  }

  onSubmit() {
    const id = getID();

    this.props.addRecipe(id, this.state.title, this.state.description);

    this.setState({
      title: '',
      description: ''
    });

    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={ styles.container }>
        <KeyboardAvoidingView style={ styles.inputWrapper }>
          <View style={ styles.inputContainer }>
            <Text style={ styles.inputLabel }>Title</Text>

            <TextInput placeholder="Enter recipe title..."
                       autofocus
                       value={this.state.title}
                       onChangeText={text => this.setState({ title: text })}
                       style={ [styles.textInput, { height: 40 }] }
                       returnKeyType="next"
                       onSubmitEditing={ () => this.description.focus() }
                       numOfLines={ 1 }/>
          </View>

          <View style={ styles.inputContainer }>
            <Text style={ styles.inputLabel }>Description</Text>

            <TextInput style={ [styles.textInput, { minHeight: 60 }] }
                       ref={ ref => this.description = ref }
                       value={this.state.description}
                       onChangeText={text => this.setState({ description: text })}
                       placeholder="Enter recipe description..."
                       returnKeyType="send"
                       onSubmitEditing={ this.onSubmit.bind(this) }
                       autoGrow/>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={ styles.button }
                          onPress={ this.onSubmit.bind(this) }>
          <Text style={ styles.buttonLabel }>Add</Text>
        </TouchableOpacity>
      </ScrollView>
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

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);