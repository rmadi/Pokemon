import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Fallback from '../components/Fallback';
import { FlashList } from '@shopify/flash-list';

import { useGetPokemonListQuery } from '../store/features/pokemonApi';
import PokemonListItem from '../components/PokemonListItem';
import PokemonListHeaderComponent from '../components/PokemonListHeaderComponent';
import ItemSeparatorcomponent from '../components/ItemSeparatorcomponent';
import GridPoekmonListItem from '../components/GridPoekmonListItem';
import { colors, LIMIT, size } from '../utils';
import { PokemonListItemPrpos } from '../type/pokemonResponseTypes';
import LoadingMorePokemon from '../components/LoadingMorePokemon';
import ErrorFetch from '../components/ErrorFetch';

const Pokemon = () => {
  const [offset, setOffset] = useState<number>(0);

  const {
    data: pokemon,

    isLoading,
    isError,
    isFetching,
  } = useGetPokemonListQuery({ limit: LIMIT, offset });
  const [isGrid, setIsGrid] = useState(true);
  const [pokemonList, setPokemonList] = useState<PokemonListItemPrpos[]>([]);

  useEffect(() => {
    if (pokemon?.results) {
      if (offset === 0) {
        setPokemonList(pokemon.results);
      } else {
        setPokemonList(prev => [...prev, ...pokemon.results]);
      }
    }
  }, [pokemon]);

  const loadMorePokemon = () => {
    console.log('onEndReach');
    if (!isFetching && pokemon?.results?.length === LIMIT) {
      setOffset(prev => prev + LIMIT);
    }
  };

  if (isLoading) return <Fallback />;
  if (isError) return <ErrorFetch /> 
  return (
    <FlashList
      key={isGrid ? 'Grid' : 'List'}
      contentContainerStyle={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <PokemonListHeaderComponent isGrid={isGrid} setIsGrid={setIsGrid} />
      }
      keyExtractor={(item, index) => item.name + index.toString()}
      numColumns={isGrid ? 3 : 1}
      data={pokemonList}
      renderItem={({ item }) =>
        isGrid ? (
          <GridPoekmonListItem item={item} />
        ) : (
          <PokemonListItem item={item} />
        )
      }
      ItemSeparatorComponent={!isGrid ? ItemSeparatorcomponent : undefined}
      onEndReached={loadMorePokemon}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isFetching && offset !== 0 ? <LoadingMorePokemon /> : null
      }
    />
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingBottom: 100,
  },
});
