import { Image, StyleSheet,View } from 'react-native';
import React from 'react';
import { width } from '../utils';

const PokemonListHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/pokemonTitle.png')}
        style={styles.image}
      />
    </View>
  );
};

export default PokemonListHeaderComponent;

const styles = StyleSheet.create({
    container:{alignItems:'center'},
  image: { width: width , height: 130 },
});
