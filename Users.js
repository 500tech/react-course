import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

import { NAMES_URL, AVATARS_URL } from './constants';

export default class Users extends Component {
  state = {
    users: []
  };

  fetchUsers = () => {
    fetch(NAMES_URL).then(response => response.json()).then((data) => this.setState({ users: data }));
  };

  render() {
    console.log('this.state.users', this.state.users);
    return (
      <View style={styles.container}>
        {
          this.state.users.length === 0 && (
            <TouchableOpacity style={styles.button}
                              onPress={this.fetchUsers}>
              <Text style={styles.label}>FETCH USERS</Text>
            </TouchableOpacity>
          )
        }

        <ScrollView style={{ width: '100%' }}>
          {
            this.state.users.map(user => (
              <View key={ user.name + user.surname }
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
  button: {
    backgroundColor: '#303546',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
  },
  label: {
    color: 'white'
  }
});
