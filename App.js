import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  ScrollView,
  Text
} from 'react-native';

import { NAMES_URL, AVATARS_URL } from './constants';

export default class App extends Component {
  state = {
    users: []
  };

  fetchUsers = () => {
    fetch(NAMES_URL).then(response => response.json()).then((data) => this.setState({ users: data }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Fetch users"
                onPress={ this.fetchUsers }/>

        <ScrollView style={{ width: '100%' }}>
          {
            this.state.users.map(user => (
              <View key={ user.name }
                    style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{ user.name }</Text>

                <Image source={{ uri: AVATARS_URL + user.name }}
                       style={{ width: 50, height: 50 }}/>
              </View>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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
