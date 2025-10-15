import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { colors } from '../utils';


const LoadingMorePokemon = () => {
   return (
     <View style={styles.container}>
       <LottieView
         autoPlay
         source={require('../../assets/animation/Pokeball.json')}
         style={{ width: 100, height: 100, backgroundColor: colors.white }}
       />
     </View>
   );
 };
 
 export default LoadingMorePokemon;
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:colors.white
   },
 });
 