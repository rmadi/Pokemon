import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fallback from '../components/Fallback';
import { FlashList } from '@shopify/flash-list';

import { useGetPokemonListQuery } from '../store/features/pokemonApi';
import PokemonListItem from '../components/PokemonListItem';
import PokemonListHeaderComponent from '../components/PokemonListHeaderComponent';
import ItemSeparatorcomponent from '../components/ItemSeparatorcomponent';

const Pokemon = () => {
  const {
    data: pokemon,
    error,
    isLoading,
    isError,
  } = useGetPokemonListQuery({ limit: 10, offset: 0 });
  console.log('error:', error);
  console.log('isLoading:', isLoading);

  if (isLoading) return <Fallback />;
  if (isError)
    return (
      <View>
        <Text>Error when fetching data </Text>
      </View>
    );
  return (
    <FlashList
      bounces={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={PokemonListHeaderComponent}
      data={pokemon?.results}
      renderItem={({ item }) => <PokemonListItem item={item} />}
      ItemSeparatorComponent={ItemSeparatorcomponent}
      onEndReached={}
    />
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
