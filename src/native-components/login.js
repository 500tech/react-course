import React from 'react';
import { connect } from 'react-redux';
import { Animated, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

import { fetchUser } from '../actions/user';

const { height, width } = Dimensions.get('window');

class Login extends React.Component {
  componentWillMount() {
    this.animation = new Animated.Value(0);

    this.opacity = this.animation.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0]
    });

    this.height = this.animation.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [40, 40, height]
    });

    this.width = this.animation.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [width - 80, width - 80, height]
    });

    this.rotate = this.animation.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '3600deg']
    });
  }

  onPress = () => {
    Animated.timing(
      this.animation,
      { toValue: 200, duration: 3000 }
    ).start(() => this.props.fetchUser())
  };

  render() {
    return (
      <View style={ styles.container }>
        <Animated.Image source={require('../assets/login.png')}
                        style={ [styles.image, { opacity: this.opacity, transform: [{ rotate: this.rotate }] }] }/>

        <Animated.View style={{ opacity: this.opacity }}>
          <Text style={ styles.title }>
            Recipe Me
          </Text>

          <Text style={ styles.subtitle }>
            Store all of your recipes in one place.
            And do something awesome.
          </Text>
        </Animated.View>

        <Animated.View style={{ width: this.width, height: this.height }}>
          <TouchableOpacity style={ styles.button }
                            onPress={ this.onPress }>
            <Animated.Text style={ [styles.buttonLabel, { opacity: this.opacity }] }>
              LOG IN
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 70,
    paddingBottom: 70
  },
  image: {
    height: 180,
    width: 180
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '300'
  },
  button: {
    width: '100%',
    height: '100%',
    backgroundColor: '#4180b3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  buttonLabel: {
    fontSize: 18,
    color: 'white'
  }
});

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { fetchUser })(Login);