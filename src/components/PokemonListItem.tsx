import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { height, size, width } from '../utils';
import { PokemonListItemPrpos } from '../type/pokemonResponseTypes';
import { getPokemonId } from '../utils/getPokmeonIdFromUri';

type Props = {
  item: PokemonListItemPrpos;
};
const PokemonListItem = ({ item }: Props) => {
  const id = getPokemonId(item.url);

  const imageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>{item.name} </Text>
    </View>
  );
};

export default PokemonListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
  },
  image: {
    width: size.image,
   aspectRatio:1
  },
});
