import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Modal,
  StatusBar
} from 'react-native';

export default class App extends Component {
  state = {
    modal: false
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={ this.state.modal ? 'light-content' : 'dark-content' }/>

        <Button title="Open modal"
                onPress={ () => this.setState({ modal: true }) }/>

        <Modal visible={ this.state.modal }
               onRequestClose={() => {}}
               animationType="slide">
          <View style={ [styles.container, { backgroundColor: 'black' }] }>
            <Button title="Close modal"
                    onPress={ () => this.setState({ modal: false }) }/>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
