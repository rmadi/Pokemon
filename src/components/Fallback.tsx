import { StyleSheet,  View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { colors } from '../utils';

const Fallback = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require('../../assets/animation/Pikachu.json')}
        style={styles.lottie}
      />
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.white
  },
  lottie: { width: 200, height: 200 }
});
