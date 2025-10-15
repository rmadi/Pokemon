import React from 'react';
import { Image as RNImage } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import PokemonListItem from '../../components/PokemonListItem';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

jest.mock('../../utils/getPokmeonIdFromUri', () => ({
  getPokemonId: jest.fn(() => 7),
  formatPokemonId: jest.fn(() => '#007'),
}));

const makeItem = (name = 'squirtle') =>
  ({ name, url: 'https://pokeapi.co/api/v2/pokemon/7/' } as any);

describe('PokemonListItem', () => {
  it('renders image, id and capitalized name', () => {
    const { getByText, UNSAFE_getByType } = render(<PokemonListItem item={makeItem()} />);
    expect(getByText('#007')).toBeTruthy();
    expect(getByText('Squirtle')).toBeTruthy();
    const img = UNSAFE_getByType(RNImage);
    expect(img.props.source).toEqual({
      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    });
  });

  it('navigates to detail with numeric id on press', () => {
    const navigate = jest.fn();
    (require('@react-navigation/native') as any).useNavigation = () => ({ navigate });
    const { getByText } = render(<PokemonListItem item={makeItem()} />);
    fireEvent.press(getByText('Squirtle'));
    expect(navigate).toHaveBeenCalledWith('PokemonDetail', { pokemonId: 7 });
  });
});
