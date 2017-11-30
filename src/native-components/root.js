import React from 'react';
import { Animated, Easing, TouchableOpacity, View, StyleSheet, Platform } from 'react-native';

class Root extends React.Component {
  constructor() {
    super();

    this.animation = new Animated.Value(0);

    this.height = this.animation.interpolate({
      inputRange: [0, 200],
      outputRange: [10, 200]
    });

    this.backgroundColor = this.animation.interpolate({
      inputRange: [0, 200],
      outputRange: ['red', 'black']
    });
  }

  animate = () => {
    Animated.spring(
      this.animation,
      { toValue: 200, duration: 2000, easing: Easing.bounce }
    ).start(() => {
      Animated.spring(
        this.animation,
        { toValue: 0, duration: 2000 }
      ).start();
    });
  };

  render() {
    return (
      <View style={ styles.appContainer }>
        <TouchableOpacity onPress={ this.animate }>
          <Animated.View style={ [styles.square, {
            height: this.height,
            backgroundColor: this.backgroundColor
          }] }
                         ref={ ref => this.square = ref }/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  square: {
    width: 200
  }
});

export default Root;