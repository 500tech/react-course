import React from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';

class ToggleBox extends React.Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.active ? 100 : 0);

    this.borderRadius = this.animation.interpolate({
      inputRange: [0, 100],
      outputRange: [5, 120]
    });

    this.backgroundColor = this.animation.interpolate({
      inputRange: [0, 100],
      outputRange: ['transparent', '#d16d51']
    });

    this.buttonRotation = this.animation.interpolate({
      inputRange: [0, 50, 100],
      outputRange: ['0deg', '720deg', '0deg']
    });

    this.buttonHeight = this.animation.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [50, 120, 50]
    });

    this.labelColor = this.animation.interpolate({
      inputRange: [0, 100],
      outputRange: ['#d16d51', 'white']
    });
  }

  toggle = () => {
    const { active } = this.props;

    Animated.timing(
      this.animation,
      { toValue: active ? 0 : 100, duration: 2000 }
    ).start(this.props.toggle);
  };

  render() {
    const { title } = this.props;

    const containerStyle = [
      styles.container,
      {
        height: this.buttonHeight,
        borderRadius: this.borderRadius,
        backgroundColor: this.backgroundColor,
        transform: [{ rotate: this.buttonRotation }]
      }
    ];

    const labelStyle = [
      styles.label,
      { color: this.labelColor }
    ];

    return (
      <TouchableWithoutFeedback onPress={ this.toggle }>
        <Animated.View style={ containerStyle }>
          <Animated.Text style={ labelStyle }>
            { title }
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderColor: '#d16d51',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 14
  }
});

export default ToggleBox;