import { StyleSheet, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import Fallback from '../components/Fallback';
import { FlashList } from '@shopify/flash-list';
import { useGetPokemonListQuery } from '../store/features/pokemonApi';
import PokemonListItem from '../components/PokemonListItem';
import PokemonListHeaderComponent from '../components/PokemonListHeaderComponent';
import ItemSeparatorcomponent from '../components/ItemSeparatorcomponent';
import GridPoekmonListItem from '../components/GridPoekmonListItem';
import { colors, LIMIT } from '../utils';
import { PokemonListItemPrpos } from '../type/pokemonResponseTypes';
import LoadingMorePokemon from '../components/LoadingMorePokemon';
import ErrorFetch from '../components/ErrorFetch';
import ListEmpty from '../components/ListEmpty';

const Pokemon = () => {
  const [offset, setOffset] = useState<number>(0);
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: pokemon,
    isLoading,
    isError,
    isFetching,
    refetch,
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

  }, [pokemon, offset]);

  const loadMorePokemon = () => {
    if (!isFetching && pokemon?.results?.length === LIMIT) {
      setOffset(prev => prev + LIMIT);
    }
  };
  const handleRefresh = async () => {
    setRefreshing(true);
    setOffset(0);
    await refetch();
    setRefreshing(false);
  };

  if (isLoading) return <Fallback />;
  if (isError) return <ErrorFetch />;

  return (
    <FlashList
      key={isGrid ? 'Grid' : 'List'}
      contentContainerStyle={styles.container}
      bounces={true}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          tintColor="transparent"
          colors={['transparent']}
          style={styles.refreshControl}
          progressViewOffset={50}
        />
      }
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
      ListEmptyComponent={!refreshing ? ListEmpty : null}
      ItemSeparatorComponent={!isGrid ? ItemSeparatorcomponent : undefined}
      onEndReached={loadMorePokemon}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        !isFetching && offset !== 0 ? <LoadingMorePokemon /> : null
      }
    />
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingBottom: 50,
  },
   refreshControl:{ backgroundColor: 'transparent' }
});
