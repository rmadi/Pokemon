import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fallback from '../components/Fallback';
import { useGetPokemonListQuery } from '../store/features/pokemonApi';

const Pokemon = () => {
  const { data, error, isLoading , isError} = useGetPokemonListQuery({limit:10, offset:0});
  console.log('error:', error)
  console.log('isLoading:', isLoading)
  console.log('data:', data)

  if (isLoading) return <Fallback />;
  if (isError)
    return (
      <View>
        <Text>Error when fetching data </Text>
      </View>
    );
  return (
    <View>
        <Text>start display pokmen here ....</Text>
        <Text>start display pokmen here ....</Text>
    </View>
  );
};

export default Pokemon;

const styles = StyleSheet.create({});
