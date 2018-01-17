import React from 'react';
import { View, Text } from 'react-native';

const Book = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 30 }}>BOOK A FLIGHT</Text>
  </View>
);

Book.navigationOptions = {
  title: 'Book a flight'
};

export default Book;