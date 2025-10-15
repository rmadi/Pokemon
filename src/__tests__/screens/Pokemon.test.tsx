import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import PokemonDetail from '../../screens/PokemonDetail';


jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({ navigate: jest.fn(), setOptions: jest.fn() }),
    useRoute: () => ({ params: {} }),
  };
});

jest.mock('@shopify/flash-list', () => {
  const RN = require('react-native');
  return { FlashList: RN.FlatList };
});

jest.mock('../../components/Fallback', () => () => <></>);
jest.mock('../../components/ErrorFetch', () => () => <></>);
jest.mock('../../components/ListEmpty', () => () => <></>);
jest.mock('../../components/LoadingMorePokemon', () => () => <></>);

jest.mock('../../components/GridPoekmonListItem', () => (props: any) => <>{`GRID:${props.item.name}`}</>);
jest.mock('../../components/PokemonListItem', () => (props: any) => <>{`LIST:${props.item.name}`}</>);

const mockUseGetPokemonListQuery = jest.fn();
jest.mock('../../store/features/pokemonApi', () => ({
  useGetPokemonListQuery: (...args: any[]) => mockUseGetPokemonListQuery(...args),
}));

jest.mock('../../store/features/pokemonApi', () => ({
  useGetPokemonByIdQuery: () => ({
    data: {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      cries: { latest: '', legacy: '' },
      sprites: { other: { ['official-artwork']: { front_default: 'https://img/1.png' }, home: {} }, front_default: '' },
      types: [{ slot: 1, type: { name: 'grass', url: '' } }],
      abilities: [{ is_hidden: false, slot: 1, ability: { name: 'overgrow', url: '' } }],
      stats: [{ base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } }],
      moves: [],
    },
    isLoading: false,
    isError: false,
  }),
  useGetPokemonSpeciesQuery: () => ({
    data: { color: { name: 'green' }, flavor_text_entries: [] },
    isLoading: false,
    isError: false,
  }),
}));

describe('PokemonDetail screen', () => {
  it('renders', () => {
    const tree = render(
      <NavigationContainer>
        <PokemonDetail />
      </NavigationContainer>
    );
    expect(tree.toJSON()).toBeTruthy();
  });
});
