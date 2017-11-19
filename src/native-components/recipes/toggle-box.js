import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const ToggleBox = ({ title, active, toggle }) => (
  <TouchableOpacity style={ styles.container }
                    onPress={ toggle }/>
);

const styles = StyleSheet.create({
  container: {

  }
});

export default ToggleBox;