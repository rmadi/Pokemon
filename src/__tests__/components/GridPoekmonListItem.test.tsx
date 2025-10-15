import React from 'react';
import { Image as RNImage } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import GridPoekmonListItem from '../../components/GridPoekmonListItem';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

jest.mock('../../utils/getPokmeonIdFromUri', () => ({
  getPokemonId: jest.fn(() => 25),
  formatPokemonId: jest.fn(() => '#025'),
}));

const makeItem = (name = 'pikachu') =>
  ({ name, url: 'https://pokeapi.co/api/v2/pokemon/25/' } as any);

describe('GridPoekmonListItem', () => {
  it('renders formatted id and capitalized name', () => {
    const { getByText } = render(<GridPoekmonListItem item={makeItem()} />);
    expect(getByText('#025')).toBeTruthy();
    expect(getByText('Pikachu')).toBeTruthy();
  });

  it('renders image', () => {
    const { UNSAFE_getByType } = render(<GridPoekmonListItem item={makeItem()} />);
    const img = UNSAFE_getByType(RNImage);
    expect(img.props.source).toEqual({
      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    });
  });

  it('navigates with numeric id on press', () => {
    const navigate = jest.fn();
    (require('@react-navigation/native') as any).useNavigation = () => ({ navigate });
    const { getByText } = render(<GridPoekmonListItem item={makeItem()} />);
    fireEvent.press(getByText('Pikachu'));
    expect(navigate).toHaveBeenCalledWith('PokemonDetail', { pokemonId: 25 });
  });
});
