import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PokemonListItemPrpos } from '../type/pokemonResponseTypes';
import { getPokemonId } from '../utils/getPokmeonIdFromUri';
import { colors, gap, size, width } from '../utils';
type Props = {
  item: PokemonListItemPrpos;
};
const GridPoekmonListItem = ({ item }: Props) => {
  const id = getPokemonId(item.url);

  const imageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const handleNavigation = () => {
    console.log('navigation to', id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.pokemonTitle}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default GridPoekmonListItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: colors.grey,
    margin: gap,
    borderRadius: size.default,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image: { width: width / 3, aspectRatio: 1 },
  pokemonTitle: {
    fontSize: size.md,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
