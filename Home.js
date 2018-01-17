import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('./assets/background.jpg')}/>
        <View style={styles.header}>
          <Image source={require('./assets/el-al.png')} style={styles.logo}/>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            What would you like to do?
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('./assets/plane.png')} style={{ height: 40, width: 40, marginBottom: 20 }}/>

            <Text>Book a flight</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Image source={require('./assets/tag.png')} style={{ height: 40, width: 40, marginBottom: 20 }}/>

            <Text>Special Offers</Text>
          </TouchableOpacity >

          <TouchableOpacity style={styles.button}>
            <Image source={require('./assets/check-in.png')} style={{ height: 40, width: 40, marginBottom: 20 }}/>

            <Text>Express Check-in</Text>
          </TouchableOpacity >

          <TouchableOpacity style={styles.button}>
            <Image source={require('./assets/information.png')} style={{ height: 40, width: 40, marginBottom: 20 }}/>

            <Text>Passenger Information</Text>
          </TouchableOpacity >
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
    width: 300
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