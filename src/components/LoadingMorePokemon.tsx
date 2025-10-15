import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { colors, size, verticalScale } from '../utils';

const LoadingMorePokemon = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require('../../assets/animation/Pokeball.json')}
        style={styles.lottie}
      />
    </View>
  );
};

export default LoadingMorePokemon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: { width: 100, height: 100 },
});
