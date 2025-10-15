import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Pokemon: undefined;
  PokemonDetail: { pokemonId: string };
  PokemonSearch: undefined;
};

export type PokemonDetailRouteProp = RouteProp<
  RootStackParamList,
  'PokemonDetail'
>;
