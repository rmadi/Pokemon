import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { colors, horizontalScale, size, width } from '../utils';

const ErrorFetch = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/pokemonTitle.png')}
        style={styles.image}
      />
      <View style={styles.noDatawrapper}>
        <LottieView
          autoPlay
          source={require('../../assets/animation/NoData.json')}
          style={styles.lottie}
        />
        <Text style={styles.text}>
          {' '}
          Oops! Something went wrong while fetching Pokémon. Please try again
          later.
        </Text>
      </View>
    </View>
  );
};

export default ErrorFetch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: { width: width / 1.1, height: 120 },
  noDatawrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
  text: {
    fontSize: size.mmd,
    color: colors.accent,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: horizontalScale(size.md),
  },
  lottie:{ width: 150, height: 150, backgroundColor: colors.white }
});
