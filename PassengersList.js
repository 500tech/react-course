import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
    drawerLabel: 'Passengers List'
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('./assets/background.jpg')}/>
        <View style={styles.header}>
          <Image source={require('./assets/el-al.png')} style={styles.logo}/>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    position: 'relative'
  },
  background: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 0,
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