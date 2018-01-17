import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('./assets/background.jpg')}/>
        <View style={styles.header}></View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            This is a title
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>Put text here</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  background: {
    position: 'absolute',
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    backgroundColor: '#303546',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 30,
    width: 300
  },
  titleContainer: {
    marginTop: 40,
    paddingLeft: 40,
    width: 300,
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 35,
    color: '#00003d',
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 40
  },
  button: {
    width: '45%',
    marginBottom: 30,
    height: 130,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;