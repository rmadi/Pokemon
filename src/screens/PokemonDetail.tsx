import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useRef } from 'react';
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  PokemonDetailRouteProp,
  RootStackParamList,
} from '../type/navigationTypes';
import {
  useGetPokemonByIdQuery,
  useGetPokemonSpeciesQuery,
} from '../store/features/pokemonApi';
import { formatPokemonId } from '../utils/getPokmeonIdFromUri';
import {
  colors,
  gap,
  height,
  horizontalScale,
  size,
  speciesColor,
} from '../utils';
import Fallback from '../components/Fallback';
import ErrorFetch from '../components/ErrorFetch';
import TypeChips from '../components/PokemonDetails/TypeChips';
import Abilities from '../components/PokemonDetails/Abilities';
import InfoGrid from '../components/PokemonDetails/InfoGrid';
import StatsList from '../components/PokemonDetails/StatsList';
import PokemonHeader from '../components/PokemonDetails/PokemonHeader';

const PokemonDetail = () => {
  const { pokemonId } = useRoute<PokemonDetailRouteProp>().params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {
    data: pokemon,
    isLoading,
    isError,
  } = useGetPokemonByIdQuery(pokemonId);
  const {
    data: species,
    isLoading: isLoadingSpecies,
    isError: isErrorSpices,
  } = useGetPokemonSpeciesQuery(pokemonId);

  const colorName = species?.color?.name ?? colors.white;
  const bgColor = speciesColor[colorName] ?? colors.white;
  const soundUri = pokemon?.cries?.latest || pokemon?.cries?.legacy;
  const tintColor = ['white', '#F5F7FA', '#FFD76F', '#77BDFE'].includes(bgColor)
    ? '#111'
    : '#fff';
  const imageUri: string | undefined =
    pokemon?.sprites?.other?.['official-artwork']?.front_default ??
    pokemon?.sprites?.other?.home?.front_default ??
    pokemon?.sprites?.front_default ??
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;


  useLayoutEffect(() => {
    if (!pokemon) return;
    navigation.setOptions({
      headerShown: true,
      title: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
      headerStyle: { backgroundColor: bgColor },
      headerTintColor: tintColor,
      headerTitleStyle: { fontWeight: 'bold' },
      headerShadowVisible: false,
      headerRight: () => (
        <View style={{ paddingHorizontal: horizontalScale(size.l) }}>
          <Text style={{ fontWeight: 'bold', color: tintColor }}>
            {formatPokemonId(pokemonId.toString())}
          </Text>
        </View>
      ),
    });
  }, [navigation, pokemon?.name, bgColor, tintColor, pokemonId]);




  if (isLoading) return <Fallback />;
  if (isError || isErrorSpices) return <ErrorFetch />;

  
  return (
    <ScrollView style={styles.container}>

      <PokemonHeader item={{ bgColor, imageUri, soundUri }} />

      <View style={styles.contentCard}>
        <TypeChips item={{ types: pokemon!.types, bgColor }} />

        <InfoGrid item={{ height: pokemon!.height, weight: pokemon!.weight }} />

        <Abilities item={{ abilities: pokemon!.abilities }} />

        <StatsList item={{ stats: pokemon!.stats, barColor: bgColor }} />
      </View>
    </ScrollView>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height / 6,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  artworkWrap: {
    position: 'absolute',
    bottom: -90,
    alignSelf: 'center',
    zIndex: 2,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
  },
  image: {
    width: 200,
    aspectRatio: 1,
  },
  artwork: {
    width: 220,
    height: 220,
  },

  contentCard: {
    marginTop: horizontalScale(size.xxxlg), // clears overlapped artwork
    marginHorizontal: horizontalScale(size.xlg),
    padding: horizontalScale(size.xlg),
    backgroundColor: colors.white,
    borderRadius: size.xlg,
    elevation: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowRadius: size.xlg,
    shadowOffset: { width: 0, height: size.l },
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: horizontalScale(size.md),
  },
  titleText: { fontSize: size.xlg, fontWeight: '700', color: colors.text },
  idText: { fontSize: size.md, fontWeight: '700', color: colors.grey },

  chipsRow: {
    flexDirection: 'row',
    gap: horizontalScale(gap),
    marginTop: horizontalScale(size.s),
  },
  chip: {
    paddingHorizontal: horizontalScale(size.md),
    paddingVertical: horizontalScale(size.s),
    borderRadius: 999,
    backgroundColor: colors.background,
  },
  chipText: {
    fontSize: size.default,
    fontWeight: '600',
    color: colors.text,
    textTransform: 'capitalize',
  },

  infoGrid: {
    marginTop: horizontalScale(size.md),
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.background,
    borderRadius: size.lg,
    overflow: 'hidden',
  },
  infoCell: {
    flex: 1,
    paddingVertical: horizontalScale(size.md),
    alignItems: 'center',
  },
  dividerV: { width: 1, backgroundColor: colors.grey },
  infoLabel: { color: '#6b7280', fontSize: size.xs },
  infoValue: {
    fontSize: size.mmd,
    fontWeight: '700',
    marginTop: horizontalScale(size.l),
  },

  sectionLabel: {
    fontSize: size.mmd,
    fontWeight: '700',
    marginTop: horizontalScale(size.md),
    marginBottom: horizontalScale(size.s),
    color: colors.text,
  },
  bodyText: { color: colors.text, fontSize: size.default },

  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(gap),
    marginBottom: horizontalScale(size.s),
  },
  statName: {
    width: horizontalScale(110),
    textTransform: 'capitalize',
    color: colors.text,
    fontSize: size.default,
  },
  statBarBg: {
    flex: 1,
    height: horizontalScale(size.l),
    borderRadius: size.l,
    backgroundColor: colors.grey,
    opacity: 0.35,
    overflow: 'hidden',
  },
  statBarFill: { height: '100%', borderRadius: size.l }, // bgColor applied inline
  statVal: {
    width: horizontalScale(40),
    textAlign: 'right',
    color: colors.text,
    fontSize: size.default,
  },
});
