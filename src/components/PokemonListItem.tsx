import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
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
const handleNavigation= ()=> {
console.log("navigation to" , id)
}
  return (
    <Pressable style={styles.container} onPress={handleNavigation}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>{item.name} </Text>
    </Pressable>
  );
};

export default PokemonListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    height:height/10, borderWidth:1
  },
  image: {
    width: size.image,
   aspectRatio:1
  },
});
