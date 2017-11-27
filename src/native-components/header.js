import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ recipes, user }) => {
  if (!user) {
    return null;
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        {`My Recipes `}

        <Text style={ styles.subtitle }>({ recipes.length })</Text>
      </Text>

      <Text style={ styles.username }>
        { user.name }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4180b3',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '300'
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300'
  },
  username: {
    color: 'white',
    fontSize: 17,
    fontWeight: '300'
  }
});

const mapStateToProps = (state) => ({
  recipes: state.recipes,
  user: state.user
});

export default connect(mapStateToProps)(Header);