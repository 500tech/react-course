import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Slider,
  Picker,
  Switch,
  Text
} from 'react-native';

export default class Settings extends Component {
  state = {
    showSettings: false,
    sliderValue: 0,
    switchValue: false,
    pickerValue: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.row }>
          <Slider maximumValue={ 1000 }
                  minimumValue={ 100 }
                  step={ 10 }
                  style={ styles.slider }
                  value={ this.state.sliderValue }
                  onValueChange={ (value) => this.setState({ sliderValue: value }) }/>

          <Text>{ this.state.sliderValue }</Text>
        </View>

        <View style={ styles.row }>
          <Switch value={ this.state.switchValue }
                  style={ styles.switch }
                  onValueChange={ (value) => this.setState({ switchValue: value }) }/>

          <Text>{ this.state.switchValue ? 'TRUE' : 'FALSE' }</Text>
        </View>

        <View style={ styles.row }>
          <Picker selectedValue={ this.state.pickerValue }
                  style={ styles.picker }
                  onValueChange={ (value) => this.setState({ pickerValue: value }) }>
            <Picker.Item label="Java" value="JAVA" />
            <Picker.Item label="JavaScript" value="JAVASCRIPT" />
          </Picker>

          <Text>{ this.state.pickerValue }</Text>
        </View>
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
    paddingTop: 20,
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  slider: {
    width: '60%'
  },
  switch: {
    width: 100,
  },
  picker: {
    width: 100,
  }
});
