import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils';

const ItemSeparatorcomponent = () => {
  return (
    <View style={styles.separatorLine} />
   
  );
};

export default ItemSeparatorcomponent;

const styles = StyleSheet.create({
  separatorLine: {
    height: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
    width:'90%'
  },
});
