import React from 'react';
import { View, Text } from 'react-native';

const SpecialOffers = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 30 }}>BOOK A FLIGHT</Text>
  </View>
);

SpecialOffers.navigationOptions = {
  title: 'Special offers'
};

export default SpecialOffers;