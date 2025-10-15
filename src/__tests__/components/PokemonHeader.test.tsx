import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonHeader from '../../components/PokemonDetails/PokemonHeader';

test('renders header', () => {
  render(<PokemonHeader item={{ bgColor: '#48D0B0', imageUri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }} />);
});
