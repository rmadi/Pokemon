import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, horizontalScale, size } from '../utils';

const ListEmpty = () => {
  return (
    <View>
      <Text style={styles.text}>
        No Pokémon found... Try again later or check your connection.
      </Text>
    </View>
  );
};

export default ListEmpty;

const styles = StyleSheet.create({
  text: {
    marginTop: size.md,
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
    paddingHorizontal: horizontalScale(size.md)
  },
});
