import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetail from '../../screens/PokemonDetail';

jest.mock('../../store/features/pokemonApi', () => ({
  useGetPokemonByIdQuery: () => ({
    data: {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      cries: { latest: '', legacy: '' },
      sprites: { other: { ['official-artwork']: { front_default: 'https://img/1.png' } }, front_default: '' },
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

const Stack = createNativeStackNavigator();

test('renders PokemonDetail', () => {
  const tree = render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PokemonDetail"
          component={PokemonDetail}
          initialParams={{ pokemonId: 1 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  expect(tree.toJSON()).toBeTruthy();
});
