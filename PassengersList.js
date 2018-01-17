import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, ActivityIndicator, Dimensions, Platform } from 'react-native';

import { NAMES_URL } from './constants';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
    drawerLabel: 'Passengers List'
  };

  state = {
    isLoading: true,
    passengers: []
  };

  componentDidMount() {
    fetch(NAMES_URL).then(response => response.json());
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('./assets/background.jpg')}/>
        <View style={styles.header}>
          <Image source={require('./assets/el-al.png')} style={styles.logo}/>
        </View>

        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} size="large" color="#303546"/>
        </ScrollView>
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
  }
});

export default Home;