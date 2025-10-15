import { StyleSheet, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { colors, height, size, width } from '../utils';
import { PokemonListItemPrpos } from '../type/pokemonResponseTypes';
import { formatPokemonId, getPokemonId } from '../utils/getPokmeonIdFromUri';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../type/navigationTypes';

type Props = {
  item: PokemonListItemPrpos;
};
const PokemonListItem = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const id = getPokemonId(item.url);
  const pokemonId = formatPokemonId(id.toString());

  const imageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const handleNavigation = () => {
    navigation.navigate('PokemonDetail', { pokemonId: id });
  };
  return (
    <Pressable style={styles.container} onPress={handleNavigation}>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.idText}> {pokemonId} </Text>
      <Text style={styles.text}>
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Text>
    </Pressable>
  );
};

export default PokemonListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    height: height / 10,
  },
  image: {
    width: size.image,
    aspectRatio: 1,
  },
  text: {
    fontSize: size.md,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  idText: {
    fontSize: size.default,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
  },
});
