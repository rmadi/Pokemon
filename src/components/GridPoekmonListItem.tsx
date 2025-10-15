import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PokemonListItemPrpos } from '../type/pokemonResponseTypes';
import { formatPokemonId, getPokemonId } from '../utils/getPokmeonIdFromUri';
import {
  colors,
  gap,
  horizontalScale,
  size,
  verticalScale,
  width,
} from '../utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../type/navigationTypes';
type Props = {
  item: PokemonListItemPrpos;
};
const GridPoekmonListItem = ({ item }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  const id = getPokemonId(item.url);

  const imageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const pokemonId = formatPokemonId(id.toString());
  const handleNavigation = () => {
    navigation.navigate('PokemonDetail', {pokemonId:id })
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <View style={styles.showId}>
        <Text style={styles.idText}>{pokemonId}</Text>
      </View>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.pokemonTitle}>
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

export default GridPoekmonListItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey,
    margin: gap,
    borderRadius: size.default,
    backgroundColor: colors.background,
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
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  showId: {
    backgroundColor: colors.secondary,
    paddingHorizontal: horizontalScale(size.lx),
    paddingVertical: verticalScale(size.l),
  },
  idText: {
    fontSize: size.default,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
