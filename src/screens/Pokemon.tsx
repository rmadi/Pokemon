import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Fallback from '../components/Fallback';
import { FlashList } from '@shopify/flash-list';

import { useGetPokemonListQuery } from '../store/features/pokemonApi';
import PokemonListItem from '../components/PokemonListItem';
import PokemonListHeaderComponent from '../components/PokemonListHeaderComponent';
import ItemSeparatorcomponent from '../components/ItemSeparatorcomponent';
import GridPoekmonListItem from '../components/GridPoekmonListItem';
import { colors } from '../utils';

const Pokemon = () => {
  const {
    data: pokemon,
    error,
    isLoading,
    isError,
  } = useGetPokemonListQuery({ limit: 12, offset: 0 });
  const [isGrid, setIsGrid] = useState(false);
  console.log('isGrid:', isGrid);

  if (isLoading) return <Fallback />;
  if (isError)
    return (
      <View>
        <Text>Error when fetching data </Text>
      </View>
    );
  return (
    <FlashList
      key={isGrid ? 'Grid' : 'List'}
      contentContainerStyle={{ backgroundColor: colors.background }}
      bounces={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <PokemonListHeaderComponent isGrid={isGrid} setIsGrid={setIsGrid} />
      }
      keyExtractor={(item, index) => item.name + index.toString()}
      numColumns={isGrid ? 3 : 1}
      data={pokemon?.results}
      renderItem={({ item }) =>
        isGrid ? (
          <GridPoekmonListItem item={item} />
        ) : (
          <PokemonListItem item={item} />
        )
      }
      ItemSeparatorComponent={!isGrid ? ItemSeparatorcomponent : undefined}
    />
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
