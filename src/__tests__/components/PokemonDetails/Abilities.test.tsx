import React from 'react';
import { render } from '@testing-library/react-native';
import Abilities from '../../../components/PokemonDetails/Abilities';

const abilities = [{ is_hidden: false, slot: 1, ability: { name: 'overgrow', url: '' } }, { is_hidden: true, slot: 3, ability: { name: 'chlorophyll', url: '' } }] as any;

test('lists abilities', () => {
  const { getByText } = render(<Abilities item={{ abilities }} />);
  expect(getByText('Abilities')).toBeTruthy();
  expect(getByText(/overgrow, chlorophyll/)).toBeTruthy();
});
